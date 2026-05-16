// =============================================
// CROSS-BORDER CBRNe DRILL — content & scenarios
// Mode key: crossBorderCbrne
// Concept: cross-border cyanide attack tabletop/functional drill at a transport hub.
// Teaches role-filtered decision making, decon priorities, cyanide antidote choice,
// medical-semantic mapping, degraded-network response, AAR with timestamped metrics.
//
// Option design notes:
// - Every option carries a stable `id`. Scoring uses `isCorrect`, never the array index.
// - Option labels are kept concise and similar in length so the longest label is not
//   a giveaway. Teaching detail lives in `why` (shown as feedback after answering).
// =============================================

const CROSS_BORDER_CBRNE = {
  modeKey: 'crossBorderCbrne',
  modeTitle: 'Cross-Border CBRNe Drill',
  icon: '🛂',

  // High-level briefing shown before role dashboard
  briefing: {
    title: 'Cross-Border Cyanide Incident — Transport Hub',
    location: 'International rail/bus transport terminal, cross-border zone',
    summary: 'Multiple casualties collapse on a cross-border platform after an aerosol release. Suspected cyanide. Information must move from the hot zone to cold-zone command and to the hospital allocation dashboard across two national medical systems.',
    objectives: [
      'Coordinate field, command, dispatch, hospital and translation roles',
      'Apply MASS/START triage and pre-decontamination priority correctly',
      'Select the appropriate cyanide antidote and avoid distractor antidotes',
      'Map mismatched urgency terms to a shared dashboard',
      'Maintain a common operating picture during degraded-network conditions',
      'Avoid contaminated transport to receiving hospitals'
    ],
    matrix: [
      { hazard: 'Cyanide aerosol', sector: 'Hot Zone', task: 'Field Triage', inject: 'Multiple collapsed pax', expected: 'MASS/START Red flagging + zone control', risk: 'Mis-triage, rescuer exposure' },
      { hazard: 'Cyanide aerosol', sector: 'Warm Zone', task: 'Decon prioritisation', inject: 'Critical pt apneic', expected: 'Priority 0 life-saving before routine wet decon', risk: 'Delayed antidote' },
      { hazard: 'Cyanide aerosol', sector: 'Cold Zone', task: 'Antidote decision', inject: 'Toxidrome confirmed', expected: 'Hydroxocobalamin', risk: 'Wrong antidote (Ca-gluconate / atropine)' },
      { hazard: 'Semantic', sector: 'C2 / Translation', task: 'Term mapping', inject: 'EU "Critical" vs KOR Red/Immediate', expected: 'Map + flag no 1:1 equivalent', risk: 'Loss of urgency in handover' },
      { hazard: 'Cyber/Comms', sector: 'Dispatch', task: 'Degraded COP', inject: 'Stale dashboard, duplicate msg', expected: 'Timestamp, ack uncertainty, radio fallback', risk: 'Wrong hospital allocation' },
      { hazard: 'Cyanide aerosol', sector: 'Hospital', task: 'Allocation', inject: 'Receiving ED capacity unclear', expected: 'Decon-then-transport + receiver alert', risk: 'Hospital contamination' }
    ]
  },

  roles: [
    { key: 'field', icon: '🦺', name: 'Field Triage Officer', desc: 'Hot zone. Performs MASS/START triage, flags Red/Immediate, calls for decon.' },
    { key: 'commander', icon: '🎖️', name: 'On-Scene Commander', desc: 'Cold zone command. Owns zone control, sectorisation and resource allocation.' },
    { key: 'dispatch', icon: '📡', name: 'Dispatch Coordinator', desc: 'Maintains common operating picture, hospital capacity and message integrity.' },
    { key: 'hospital', icon: '🏥', name: 'Hospital Coordinator', desc: 'Receiver alerting, surge bed planning, decon-before-arrival policy.' },
    { key: 'semantics', icon: '🌐', name: 'Medical Semantics / Translation Officer', desc: 'Maps urgency terms across systems and flags non-equivalent terms for command.' }
  ],

  // Medical semantics mapping table
  semanticsTable: [
    { sourceSystem: 'EU EMS (example)', sourceTerm: 'Critical', dashboardTerm: 'Immediate', koreanTerm: 'Red / Immediate', flag: 'No direct one-to-one equivalent; operational mapping requires confirmation' },
    { sourceSystem: 'EU EMS (example)', sourceTerm: 'Serious', dashboardTerm: 'Delayed', koreanTerm: 'Yellow / Delayed', flag: 'Approximate; verify ABC stability' },
    { sourceSystem: 'EU EMS (example)', sourceTerm: 'Walking wounded', dashboardTerm: 'Minor', koreanTerm: 'Green / Minor', flag: 'Watch for hidden inhalation injury' },
    { sourceSystem: 'EU EMS (example)', sourceTerm: 'Deceased', dashboardTerm: 'Expectant/Black', koreanTerm: 'Black / Expectant', flag: 'Confirm with senior clinician before label' }
  ],

  // Ordered decision steps. Each step targets one or more roles.
  // role: which role panel highlights for this decision.
  // metric: optional AAR metric this step contributes to.
  // Each option has a stable `id` and `isCorrect`. Labels are concise and similar
  // in length; teaching detail is in `why` (shown after answering).
  steps: [
    {
      id: 'briefing',
      kind: 'briefing',
      role: 'all',
      phase: 'Orientation',
      title: 'Incident Briefing & Role Dashboard',
      prompt: 'Review the incident, the role panels, and the cross-border information flow before entering the drill. The drill moves from clinical recognition (triage, decon, antidote) to coordination (semantics, comms) to cross-border allocation, and ends at the after-action review.',
      acknowledge: 'Acknowledge briefing'
    },
    {
      id: 'triage',
      kind: 'mcq',
      role: 'field',
      phase: 'Clinical recognition',
      construct: 'triage',
      metric: 'triageAccuracy',
      title: 'MASS/START Triage Decision',
      patient: 'Adult passenger collapsed on the platform shortly after an aerosol release. Findings: dyspnea, altered mentation, unable to ambulate, no external trauma. Hot-zone toxidrome consistent with inhalational cyanide exposure.',
      prompt: 'Using MASS/START criteria, assign this patient to a triage category.',
      correctOptionId: 'red_immediate',
      options: [
        { id: 'red_immediate', text: 'Red / Immediate', isCorrect: true, why: 'Dyspnea + altered mentation + inability to ambulate + suspected cyanide inhalation map to Red/Immediate. Patient is time-critical and antidote-eligible.' },
        { id: 'yellow_delayed', text: 'Yellow / Delayed', isCorrect: false, why: 'Yellow assumes ABCs are stable and ambulation is deferred only by injury, not by toxidrome. Underestimates urgency here.' },
        { id: 'green_minor', text: 'Green / Minor', isCorrect: false, why: 'Walking-wounded category. Patient cannot ambulate and has airway compromise — not Minor.' },
        { id: 'black_expectant', text: 'Black / Expectant', isCorrect: false, why: 'Premature. Cyanide patients can recover quickly with hydroxocobalamin; do not write off without an antidote trial.' }
      ]
    },
    {
      id: 'predecon',
      kind: 'mcq',
      role: 'field',
      phase: 'Clinical recognition',
      construct: 'pre_decon',
      metric: 'preDecon',
      title: 'Pre-Decontamination Priority',
      patient: 'Same patient now at the warm-zone boundary: agonal breathing, GCS dropping, suspected cyanide toxidrome. Wet decontamination is staged but not yet started.',
      prompt: 'What is the correct pre-decontamination priority for this casualty?',
      correctOptionId: 'priority_0',
      options: [
        { id: 'priority_0', text: 'Priority 0 — life-saving intervention first', isCorrect: true, why: 'For inhalational cyanide with imminent arrest, life-saving intervention (airway, antidote) precedes routine wet decon. Decon proceeds in parallel where safe.' },
        { id: 'wet_decon_first', text: 'Wet decontamination first, then assess', isCorrect: false, why: 'Routine wet decon delays antidote; cyanide can kill before decon completes.' },
        { id: 'dry_decon_first', text: 'Dry decontamination first, then assess', isCorrect: false, why: 'Dry decon is for non-volatile contamination. Does not replace life-saving care for an arresting patient.' },
        { id: 'defer_to_hospital', text: 'Defer triage to the receiving hospital', isCorrect: false, why: 'Pushing triage to hospital wastes the field window and risks contaminated transport.' }
      ]
    },
    {
      id: 'antidote',
      kind: 'mcq',
      role: 'commander',
      phase: 'Clinical recognition',
      construct: 'antidote',
      metric: 'antidote',
      title: 'Cyanide Antidote Decision',
      patient: 'Casualty in the cold zone after aerosol exposure: lactate markedly elevated, hypotension refractory to fluids, altered mentation, near-normal SpO₂ on high-flow O₂. Lab and clinical picture are diagnostic of an inhalational cyanide toxidrome.',
      prompt: 'Which antidote do you authorise for immediate administration to this patient?',
      correctOptionId: 'hydroxocobalamin',
      options: [
        { id: 'hydroxocobalamin', text: 'Hydroxocobalamin', isCorrect: true, why: 'Hydroxocobalamin (Cyanokit) is the preferred cyanide antidote — it binds CN⁻ to form cyanocobalamin (B12a), excreted renally.' },
        { id: 'calcium_gluconate', text: 'Calcium gluconate', isCorrect: false, why: 'Calcium gluconate is for hydrofluoric-acid burns / hypocalcemia, not cyanide.' },
        { id: 'atropine_2pam', text: 'Atropine + 2-PAM', isCorrect: false, why: 'Atropine + pralidoxime is the cholinergic / nerve-agent (organophosphate) regimen, not cyanide.' },
        { id: 'activated_charcoal', text: 'Activated charcoal', isCorrect: false, why: 'Charcoal does not bind inhaled cyanide and is irrelevant for this exposure route.' }
      ]
    },
    {
      id: 'semantics',
      kind: 'mcq',
      role: 'semantics',
      phase: 'Coordination',
      construct: 'semantic_mapping',
      metric: 'semantics',
      title: 'Cross-Border Semantic Mapping',
      prompt: 'A handover from the EU-side EMS labels an inbound patient as "Critical". The shared Korean DMAT/START dashboard uses Red / Immediate, Yellow / Delayed, Green / Minor and Black / Expectant. How do you enter this patient on the shared dashboard?',
      correctOptionId: 'semantic_mapping_confirmed',
      options: [
        { id: 'semantic_mapping_confirmed', text: 'Map to Red/Immediate, keep source term, flag non-equivalence', isCorrect: true, why: 'Preserves provenance and makes the entry actionable on the shared COP, while warning command that the mapping is operational rather than lexical (no direct 1:1 equivalent). Semantic and governance issues often matter as much as the technology layer.' },
        { id: 'drop_source_label', text: 'Replace with Red/Immediate, drop the source term', isCorrect: false, why: 'Loses provenance and audit trail; receiving clinicians cannot reconcile the entry back to the EU source.' },
        { id: 'forward_verbatim', text: 'Forward "Critical" verbatim, do not remap it', isCorrect: false, why: 'Fails the shared COP. Korean responders may not treat "Critical" as Red/Immediate priority on their dashboard.' },
        { id: 'downtriage_by_capacity', text: 'Down-triage to Yellow/Delayed for bed capacity', isCorrect: false, why: 'Triage must reflect clinical urgency, not bed availability. Down-triage by capacity is a governance failure.' }
      ]
    },
    {
      id: 'degraded',
      kind: 'mcq',
      role: 'dispatch',
      phase: 'Coordination',
      construct: 'degraded_network',
      metric: 'degraded',
      title: 'Degraded-Network Inject',
      prompt: 'Mid-drill inject: the hospital-capacity dashboard refresh has fallen behind by ~6 minutes, one inbound radio message has arrived twice, and another seems to have been lost. Allocations are still required. What is the correct response?',
      correctOptionId: 'timestamp_ack_radio',
      options: [
        { id: 'timestamp_ack_radio', text: 'Timestamp, ack uncertainty, fall back to radio', isCorrect: true, why: 'Maintains a common operating picture under degraded comms. Timestamping + uncertainty flags + role-filtered updates protect decision quality, and radio fallback restores throughput.' },
        { id: 'wait_for_dashboard', text: 'Pause allocation until the dashboard recovers', isCorrect: false, why: 'Causes recovery time to balloon; allocation cannot pause during a mass-casualty surge.' },
        { id: 'trust_latest_dashboard', text: 'Dispatch on the latest dashboard read', isCorrect: false, why: 'Stale data without an uncertainty flag leads to wrong-hospital allocation.' },
        { id: 'nearest_hospital', text: 'Send all patients to the nearest hospital', isCorrect: false, why: 'Bypasses receiver alerting and overflows the closest ED.' }
      ]
    },
    {
      id: 'allocation',
      kind: 'mcq',
      role: 'hospital',
      phase: 'Cross-border allocation',
      construct: 'allocation',
      metric: 'contaminatedTransport',
      title: 'Cross-Border Hospital Allocation',
      prompt: 'A Red / Immediate patient who has not yet been decontaminated is loaded for transport. The receiving facility is across the border. Capacity has not yet been confirmed. What do you do?',
      correctOptionId: 'decon_then_alert',
      options: [
        { id: 'decon_then_alert', text: 'Decon at warm zone, pre-alert receiving ED', isCorrect: true, why: 'Avoids hospital contamination. Receiver alerting and capacity confirmation are mandatory before transport; decon may proceed in transit only where doctrine allows.' },
        { id: 'transport_no_decon', text: 'Transport now, skip decontamination', isCorrect: false, why: 'Contaminates the receiving ED, forces lockdown, and creates secondary casualties.' },
        { id: 'hold_until_full_decon', text: 'Hold on scene for full wet decon', isCorrect: false, why: 'Ignores life-saving priority for an unstable patient; causes preventable death.' },
        { id: 'crossborder_no_alert', text: 'Move now, notify the receiver after handover', isCorrect: false, why: 'Cross-border allocation requires receiver alert and capacity confirmation BEFORE transport. Post-handover notification leaves the receiving ED unable to prepare decon, isolation or surge bed.' }
      ]
    }
  ],

  // AAR targets (used to compute strengths/improvements)
  aarTargets: {
    triageDashboardLatencySec: 90,    // triage → dashboard latency
    handoverDelaySec: 180,            // handover delay
    contaminatedTransportErrors: 0,   // preventable contaminated transport
    degradedRecoverySec: 120          // degraded-network recovery
  },

  achievementId: 'crossborder_cleared',
  achievementName: 'Cross-Border Drill Cleared',
  achievementDesc: 'Complete the Cross-Border CBRNe Drill',
  achievementIcon: '🛂'
};

// Fisher-Yates shuffle (in-place). Returns the same array for chaining.
function cbxShuffleInPlace(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

// Build a per-session randomized copy of the steps. Briefing keeps its position;
// MCQ steps keep their order, but each step's options are shuffled independently.
// Correctness is carried on each option (id + isCorrect), so shuffle is safe.
// Each step is stamped with `stepIndex` (position in scenario, 0-based) and
// `displayedOptionOrder` (frozen array of option IDs in the order shown to the
// learner) so analytics can faithfully reconstruct what the learner saw.
function buildRandomizedCrossBorderSteps() {
  return CROSS_BORDER_CBRNE.steps.map((step, idx) => {
    if (step.kind !== 'mcq' || !Array.isArray(step.options)) {
      return { ...step, stepIndex: idx, displayedOptionOrder: [] };
    }
    const shuffledOpts = cbxShuffleInPlace(step.options.map(o => ({ ...o })));
    const displayedOptionOrder = shuffledOpts.map(o => o.id);
    return { ...step, options: shuffledOpts, stepIndex: idx, displayedOptionOrder };
  });
}

// expose for browser
if (typeof window !== 'undefined') {
  window.CROSS_BORDER_CBRNE = CROSS_BORDER_CBRNE;
  window.cbxShuffleInPlace = cbxShuffleInPlace;
  window.buildRandomizedCrossBorderSteps = buildRandomizedCrossBorderSteps;
}

// expose for Node (tests)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CROSS_BORDER_CBRNE, cbxShuffleInPlace, buildRandomizedCrossBorderSteps };
}
