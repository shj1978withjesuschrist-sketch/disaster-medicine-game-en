// =============================================
// CROSS-BORDER CBRNe DRILL — content & scenarios
// Mode key: crossBorderCbrne
// Concept: cross-border cyanide attack tabletop/functional drill at a transport hub.
// Teaches role-filtered decision making, decon priorities, cyanide antidote choice,
// medical-semantic mapping, degraded-network response, AAR with timestamped metrics.
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
  steps: [
    {
      id: 'briefing',
      kind: 'briefing',
      role: 'all',
      title: 'Incident Briefing & Role Dashboard',
      prompt: 'Review the incident, the role panels, and the cross-border information flow before entering the drill.',
      acknowledge: 'Acknowledge briefing'
    },
    {
      id: 'triage',
      kind: 'mcq',
      role: 'field',
      metric: 'triageAccuracy',
      title: 'MASS/START Triage Decision',
      patient: 'Adult passenger on the platform: exposed to aerosol, dyspneic, altered mentation, unable to ambulate, suspected cyanide inhalation.',
      prompt: 'Assign the correct MASS/START category for this patient.',
      options: [
        { text: 'Red / Immediate', correct: true, why: 'Dyspnea + altered mentation + unable to ambulate + suspected cyanide inhalation = Red/Immediate. Time-critical antidote eligibility.' },
        { text: 'Yellow / Delayed', correct: false, why: 'Distractor (matches a common misclassification). Yellow assumes ABCs stable and ambulation deferred only by injury, not by toxidrome.' },
        { text: 'Green / Minor', correct: false, why: 'Distractor. Walking-wounded category. Patient cannot ambulate and has airway compromise.' },
        { text: 'Black / Expectant', correct: false, why: 'Premature. Cyanide patients can recover quickly with hydroxocobalamin; do not write off without antidote trial.' }
      ]
    },
    {
      id: 'predecon',
      kind: 'mcq',
      role: 'field',
      metric: 'preDecon',
      title: 'Pre-Decontamination Priority',
      prompt: 'Critical patient at the warm-zone boundary, apneic with toxidrome. What is the correct pre-decontamination priority?',
      options: [
        { text: 'Priority 0: immediate life-saving intervention before routine wet decon', correct: true, why: 'For inhalational cyanide with imminent arrest, life-saving intervention (airway, antidote) precedes routine wet decon. Decon proceeds in parallel where safe.' },
        { text: 'Lying-down wet decontamination first, then assess', correct: false, why: 'Distractor. Routine wet decon delays antidote; cyanide can kill before decon completes.' },
        { text: 'Lying-down dry decontamination first, then assess', correct: false, why: 'Dry decon is for non-volatile contamination. Does not replace life-saving care for an arresting patient.' },
        { text: 'Delayed post-decon triage at hospital', correct: false, why: 'Distractor. Pushing triage to hospital wastes the field window and risks contaminated transport.' }
      ]
    },
    {
      id: 'antidote',
      kind: 'mcq',
      role: 'commander',
      metric: 'antidote',
      title: 'Cyanide Antidote Decision',
      prompt: 'Confirmed cyanide toxidrome. Which antidote do you push?',
      options: [
        { text: 'Hydroxocobalamin', correct: true, why: 'Hydroxocobalamin (Cyanokit) is the preferred cyanide antidote — binds CN to form cyanocobalamin (B12a), excreted renally.' },
        { text: 'Calcium gluconate', correct: false, why: 'Distractor. Calcium gluconate is for hydrofluoric-acid burns / hypocalcemia, not cyanide.' },
        { text: 'Atropine + 2-PAM', correct: false, why: 'Distractor. Atropine + pralidoxime is the cholinergic / nerve-agent (organophosphate) regimen, not cyanide.' },
        { text: 'Activated charcoal', correct: false, why: 'Distractor. Charcoal does not bind inhaled cyanide and is irrelevant here.' }
      ]
    },
    {
      id: 'semantics',
      kind: 'mcq',
      role: 'semantics',
      metric: 'semantics',
      title: 'Cross-Border Semantic Mapping',
      prompt: 'Inbound EU-side handover labels the patient as "Critical". Korean DMAT/START dashboard expects Red/Immediate. What do you do?',
      options: [
        { text: 'Preserve source label "Critical", map to Red/Immediate on the shared dashboard, and flag "no direct 1:1 equivalent — operational mapping"', correct: true, why: 'Correct: preserves provenance, makes it actionable on the shared COP, and warns command that mapping is operational, not lexical. Semantic + governance issues often matter as much as technology.' },
        { text: 'Drop the EU label and only show Red/Immediate', correct: false, why: 'Loses provenance and audit trail; receiving clinicians cannot reconcile back to source.' },
        { text: 'Forward "Critical" verbatim and let the receiving hospital interpret it', correct: false, why: 'Fails the shared COP. Korean responders may not treat "Critical" as Red/Immediate priority on their dashboard.' },
        { text: 'Translate "Critical" as "Yellow/Delayed" because hospital beds are tight', correct: false, why: 'Triage must reflect clinical urgency, not bed availability. Down-triage by capacity is a governance failure.' }
      ]
    },
    {
      id: 'degraded',
      kind: 'mcq',
      role: 'dispatch',
      metric: 'degraded',
      title: 'Degraded-Network Inject',
      prompt: 'Hospital-capacity dashboard shows 6-minute latency, a duplicate inbound message, and one apparent message loss on the radio. What is the correct response?',
      options: [
        { text: 'Timestamp every message, acknowledge uncertainty, push role-relevant updates and switch to radio fallback', correct: true, why: 'Maintains a common operating picture under degraded comms. Timestamping + uncertainty flags + role-filtered updates protect decision quality.' },
        { text: 'Wait until the dashboard recovers before issuing further allocation', correct: false, why: 'Causes recovery time to balloon; allocation cannot pause during a mass-casualty surge.' },
        { text: 'Trust the most recent dashboard read and dispatch on it', correct: false, why: 'Stale data without uncertainty flag leads to wrong-hospital allocation.' },
        { text: 'Send patients to the nearest hospital regardless of capacity', correct: false, why: 'Bypasses receiver alerting and overflows the closest ED.' }
      ]
    },
    {
      id: 'allocation',
      kind: 'mcq',
      role: 'hospital',
      metric: 'contaminatedTransport',
      title: 'Cross-Border Hospital Allocation',
      prompt: 'A non-decontaminated Red/Immediate patient is ready to move. What do you do?',
      options: [
        { text: 'Decon at warm zone (or in transit if doctrine allows), pre-alert receiving ED with capacity check before departure', correct: true, why: 'Avoids hospital contamination. Receiver alerting and capacity check are mandatory before transport.' },
        { text: 'Transport immediately to the nearest hospital without decontamination', correct: false, why: 'Contaminates the receiving ED, forces ED lockdown, and creates secondary casualties.' },
        { text: 'Hold the patient at the scene until full wet decon is complete, regardless of clinical state', correct: false, why: 'Ignores life-saving priority for an unstable patient; causes preventable death.' },
        { text: 'Send to the cross-border hospital on the other side without notifying them', correct: false, why: 'Cross-border allocation requires explicit receiver alert and capacity confirmation.' }
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

// expose for browser
if (typeof window !== 'undefined') {
  window.CROSS_BORDER_CBRNE = CROSS_BORDER_CBRNE;
}
