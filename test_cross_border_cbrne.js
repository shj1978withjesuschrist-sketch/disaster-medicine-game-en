// Structural validation + randomization tests for Cross-Border CBRNe Drill.
// Run: node test_cross_border_cbrne.js
const fs = require('fs');
const path = require('path');
const m = require('./cross_border_cbrne_content.js');

let passed = 0, failed = 0;
function assert(cond, msg) {
  if (cond) { passed++; }
  else { failed++; console.error('FAIL:', msg); }
}

const C = m.CROSS_BORDER_CBRNE;

// 1. Mode metadata
assert(C.modeKey === 'crossBorderCbrne', 'modeKey is crossBorderCbrne');
assert(C.modeTitle === 'Cross-Border CBRNe Drill', 'modeTitle is exactly "Cross-Border CBRNe Drill"');

// 2. No user-facing ISCRAM in any string field of the content
const stringy = JSON.stringify(C);
assert(!/iscram/i.test(stringy), 'No ISCRAM token anywhere in content');

// 3. Step structure: briefing first, then mcq steps
assert(C.steps[0].kind === 'briefing', 'First step is briefing');
const mcq = C.steps.filter(s => s.kind === 'mcq');
assert(mcq.length === 6, 'Six MCQ decision steps');

// Expected order matches spec
const expectedOrder = ['briefing','triage','predecon','antidote','semantics','degraded','allocation'];
assert(JSON.stringify(C.steps.map(s=>s.id)) === JSON.stringify(expectedOrder),
  'Step order matches: ' + expectedOrder.join(' → '));

// 4. Each MCQ step: exactly one correct, IDs unique, correctOptionId resolves, balanced length
for (const s of mcq) {
  const correct = s.options.filter(o => o.isCorrect);
  assert(correct.length === 1, `${s.id}: exactly one correct option`);
  const ids = s.options.map(o => o.id);
  assert(new Set(ids).size === ids.length, `${s.id}: option IDs unique`);
  assert(s.correctOptionId && ids.includes(s.correctOptionId), `${s.id}: correctOptionId resolves to a real option`);
  assert(correct[0].id === s.correctOptionId, `${s.id}: isCorrect option matches correctOptionId`);

  // Length balance: correct option ≤ 1.6× shortest distractor and ≤ 70 chars
  const distLens = s.options.filter(o => !o.isCorrect).map(o => o.text.length);
  const cLen = correct[0].text.length;
  const minDist = Math.min(...distLens);
  assert(cLen <= 70, `${s.id}: correct option length ≤ 70 (got ${cLen})`);
  assert(cLen / minDist <= 1.6, `${s.id}: correct option not >1.6× shortest distractor (ratio ${(cLen/minDist).toFixed(2)})`);

  // Each option carries non-empty `why` for feedback
  for (const o of s.options) {
    assert(typeof o.why === 'string' && o.why.length > 20, `${s.id}/${o.id}: has substantive why (>20 chars)`);
  }
}

// 5. AAR targets present and match spec values
assert(C.aarTargets.triageDashboardLatencySec === 90, 'AAR target: triage→dashboard latency = 90s');
assert(C.aarTargets.handoverDelaySec === 180, 'AAR target: handover delay = 180s');
assert(C.aarTargets.contaminatedTransportErrors === 0, 'AAR target: contaminated transport errors = 0');
assert(C.aarTargets.degradedRecoverySec === 120, 'AAR target: degraded-network recovery = 120s');

// 6. Randomization: 50 simulated builds. Confirm options are shuffled and that
//    scoring by option identity stays correct regardless of display order.
const orderingsPerStep = {};
for (const s of mcq) orderingsPerStep[s.id] = new Set();
let scoreOk = true;
for (let run = 0; run < 50; run++) {
  const built = m.buildRandomizedCrossBorderSteps();
  for (const s of built) {
    if (s.kind !== 'mcq') continue;
    const order = s.options.map(o => o.id).join('|');
    orderingsPerStep[s.id].add(order);

    // simulate "always pick correct by ID" — must still score correct
    const picked = s.options.find(o => o.id === s.correctOptionId);
    if (!picked || !picked.isCorrect) scoreOk = false;
  }
}
assert(scoreOk, 'Identity-based scoring (correctOptionId) stays correct across 50 randomized runs');
let stepsWithVariation = 0;
for (const s of mcq) {
  if (orderingsPerStep[s.id].size > 1) stepsWithVariation++;
}
assert(stepsWithVariation >= mcq.length - 1,
  `At least n-1 steps show option-order variation across 50 runs (got ${stepsWithVariation}/${mcq.length})`);

// 7. Fisher-Yates shuffle preserves the multiset of elements
{
  const src = ['a','b','c','d','e'];
  const out = m.cbxShuffleInPlace(src.slice());
  assert(out.length === src.length && [...out].sort().join() === [...src].sort().join(),
    'Fisher-Yates is a valid permutation');
}

// 8. App.js wiring sanity (string presence) — exact mode name and no ISCRAM
const appSrc = fs.readFileSync(path.join(__dirname, 'app.js'), 'utf8');
assert(appSrc.includes("'Cross-Border CBRNe Drill'") || appSrc.includes('"Cross-Border CBRNe Drill"') || appSrc.includes('Cross-Border CBRNe Drill'),
  'app.js references exact mode name "Cross-Border CBRNe Drill"');
assert(!/iscram/i.test(appSrc), 'No ISCRAM token in app.js');

// 8a. Every MCQ step carries a `construct` tag in the canonical taxonomy
const validConstructs = new Set(['triage', 'pre_decon', 'antidote', 'semantic_mapping', 'degraded_network', 'allocation']);
for (const s of mcq) {
  assert(typeof s.construct === 'string' && validConstructs.has(s.construct),
    `${s.id}: construct tag is one of {${[...validConstructs].join(', ')}} (got ${s.construct})`);
}
// Constructs are unique across the drill — each step targets a distinct domain
{
  const seen = new Set();
  let dup = false;
  for (const s of mcq) { if (seen.has(s.construct)) dup = true; seen.add(s.construct); }
  assert(!dup, 'Each construct appears exactly once across MCQ steps');
}

// 8b. Randomized build stamps stepIndex and displayedOptionOrder
{
  const built = m.buildRandomizedCrossBorderSteps();
  for (let i = 0; i < built.length; i++) {
    assert(built[i].stepIndex === i, `step ${i}: stepIndex stamped (${built[i].stepIndex})`);
  }
  for (const s of built) {
    if (s.kind !== 'mcq') continue;
    assert(Array.isArray(s.displayedOptionOrder) && s.displayedOptionOrder.length === s.options.length,
      `${s.id}: displayedOptionOrder is full-length array of option IDs`);
    // displayedOptionOrder matches the actual option order in this build
    const live = s.options.map(o => o.id);
    assert(JSON.stringify(s.displayedOptionOrder) === JSON.stringify(live),
      `${s.id}: displayedOptionOrder snapshot matches live option order`);
    // Every entry is a real option id of this step
    const idSet = new Set(s.options.map(o => o.id));
    assert(s.displayedOptionOrder.every(id => idSet.has(id)),
      `${s.id}: every displayedOptionOrder entry is a real option id`);
  }
}

// 8c. Tracker.recordAnswer call for cross-border passes structured extras
{
  const flat = appSrc.replace(/\s+/g, ' ');
  const idx = flat.indexOf('Tracker.recordAnswer(`crossBorderCbrne_${step.id}`');
  assert(idx >= 0, 'app.js: Tracker.recordAnswer is invoked for crossBorderCbrne');
  const window = flat.slice(idx, idx + 800);
  assert(window.indexOf('displayedOptionOrder') > 0,
    'Tracker.recordAnswer call for crossBorderCbrne includes displayedOptionOrder extras');
  assert(window.indexOf('construct') > 0,
    'Tracker.recordAnswer call for crossBorderCbrne includes construct extra');
  assert(window.indexOf('correctOptionId') > 0,
    'Tracker.recordAnswer call for crossBorderCbrne includes correctOptionId extra');
}

// 8d. Tracker.endMode for cross-border passes the structured summary
assert(/buildCrossBorderCbrneSummary\s*\(\)/.test(appSrc),
  'app.js builds a structured summary at drill completion');
assert(/Tracker\.endMode\(G\.cbxCorrectCount,\s*summary\)/.test(appSrc),
  'app.js Tracker.endMode for crossBorderCbrne forwards the summary as `details`');

// 8e. Tracker.endMode signature accepts an optional details param and forwards it
assert(/async endMode\(score,\s*details\)/.test(appSrc),
  'Tracker.endMode signature: (score, details)');
assert(/JSON\.stringify\(details\)/.test(appSrc),
  'Tracker.endMode stringifies details for backend persistence');

// 8f. Admin label coverage — admin.html maps crossBorderCbrne to the exact mode name
const adminSrc = fs.readFileSync(path.join(__dirname, 'admin.html'), 'utf8');
assert(/crossBorderCbrne:\s*\{[^}]*name:\s*'Cross-Border CBRNe Drill'/.test(adminSrc),
  'admin.html MODE_NAMES maps crossBorderCbrne → "Cross-Border CBRNe Drill"');
assert(!/iscram/i.test(adminSrc), 'No ISCRAM token in admin.html');
assert(/renderCrossBorderSummary/.test(adminSrc),
  'admin.html defines drill-specific summary renderer');
assert(/CROSSBORDER_STEP_TO_CONSTRUCT/.test(adminSrc),
  'admin.html maps step IDs to construct keys');
assert(/filterQuestions\('crossBorderCbrne'\)/.test(adminSrc),
  'admin.html question-analysis filter tab includes crossBorderCbrne');

// 8g. Firebase sync forwards extras / details
const fbSrc = fs.readFileSync(path.join(__dirname, 'firebase_sync.js'), 'utf8');
assert(/answer\.extras/.test(fbSrc), 'firebase_sync.pushAnswer forwards extras');
assert(/modeResult\.details/.test(fbSrc), 'firebase_sync.pushModeResult forwards details');

// 8h. Backend persistence schema: mode_results.details + question_responses.extras
const apiSrc = fs.readFileSync(path.join(__dirname, 'api_server.py'), 'utf8');
assert(/mode_results[\s\S]*?details TEXT/.test(apiSrc),
  'api_server: mode_results.details TEXT column declared');
assert(/question_responses[\s\S]*?extras TEXT/.test(apiSrc),
  'api_server: question_responses.extras TEXT column declared');
assert(/_ensure_column\(["']mode_results["'],\s*["']details["']/.test(apiSrc),
  'api_server: safe ALTER TABLE migration for mode_results.details');
assert(/_ensure_column\(["']question_responses["'],\s*["']extras["']/.test(apiSrc),
  'api_server: safe ALTER TABLE migration for question_responses.extras');

// 8i. QuestionResponse model accepts extras and INSERT carries it
assert(/class QuestionResponse[\s\S]*?extras:\s*Optional\[str\]/.test(apiSrc),
  'api_server: QuestionResponse model accepts optional extras');
assert(/INSERT INTO question_responses[\s\S]*?extras\)/.test(apiSrc),
  'api_server: INSERT INTO question_responses includes extras column');
assert(/data\.extras/.test(apiSrc),
  'api_server: save_question_response forwards data.extras into the INSERT');

// 8j. Mode result POST already persists details (regression check)
assert(/INSERT INTO mode_results[\s\S]*?details\)/.test(apiSrc),
  'api_server: INSERT INTO mode_results includes details column');

// 8k. Admin endpoint to surface persisted details for AAR pass-rate aggregates / option distribution
assert(/@app\.get\(["']\/api\/admin\/mode\/\{mode\}\/details["']\)/.test(apiSrc),
  'api_server: GET /api/admin/mode/{mode}/details endpoint registered');
assert(/def admin_mode_details/.test(apiSrc),
  'api_server: admin_mode_details handler defined');
assert(/details_parsed/.test(apiSrc) && /extras_parsed/.test(apiSrc),
  'api_server: admin_mode_details parses persisted details/extras JSON for analytics consumers');

// 8l. Tracker.recordAnswer forwards extras to /api/question/response
{
  const flat = appSrc.replace(/\s+/g, ' ');
  const idx = flat.indexOf('/api/question/response');
  assert(idx > 0, 'app.js: /api/question/response endpoint referenced');
  const window = flat.slice(Math.max(0, idx - 600), idx + 200);
  assert(/qBody\.extras\s*=\s*JSON\.stringify\(extras\)/.test(window) ||
         /extras:\s*JSON\.stringify\(extras\)/.test(window),
    'Tracker.recordAnswer JSON-stringifies extras into the question/response POST body');
}

// 8m. No user-facing ISCRAM in api_server either
assert(!/iscram/i.test(apiSrc), 'No ISCRAM token in api_server.py');

// 9. Smoke test: simulate a full run answering correctly via option.isCorrect
{
  const steps = m.buildRandomizedCrossBorderSteps();
  let correctCount = 0;
  for (const s of steps) {
    if (s.kind !== 'mcq') continue;
    const picked = s.options.find(o => o.isCorrect);
    if (picked) correctCount++;
  }
  assert(correctCount === mcq.length, `Smoke run: ${mcq.length}/${mcq.length} correct via isCorrect`);
}

// 10. Smoke test: simulate a full run answering wrong
{
  const steps = m.buildRandomizedCrossBorderSteps();
  let wrongCount = 0;
  for (const s of steps) {
    if (s.kind !== 'mcq') continue;
    const picked = s.options.find(o => !o.isCorrect);
    if (picked && !picked.isCorrect) wrongCount++;
  }
  assert(wrongCount === mcq.length, `Smoke run (wrong path): all ${mcq.length} steps score wrong correctly`);
}

console.log(`\nResults: ${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
