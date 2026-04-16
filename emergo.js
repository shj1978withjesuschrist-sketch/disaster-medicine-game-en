// ============================================
// EMERGO TRAIN SYSTEM — Digital Implementation
// Time-Based Patient Management + Continuous Chain + Resource Allocation
// ============================================

// ---- Intervention Data ----
const INTERVENTIONS = {
  airwayOpen:     { name: 'Airway Opening', nameEn: 'Airway Opening', icon: '🫁', timeIdeal: 1, timeNon: 2, skill: 'basic' },
  oxygenMask:     { name: 'O2 Mask', nameEn: 'O2 Mask', icon: '😮‍💨', timeIdeal: 1, timeNon: 2, skill: 'basic' },
  ivCannula:      { name: 'IV Cannulation', nameEn: 'IV Cannulation', icon: '💉', timeIdeal: 2, timeNon: 4, skill: 'nurse' },
  ivFluids:       { name: 'IV Fluids', nameEn: 'IV Fluids', icon: '🩸', timeIdeal: 1, timeNon: 2, skill: 'nurse' },
  analgesia:      { name: 'Analgesia', nameEn: 'Analgesia', icon: '💊', timeIdeal: 1, timeNon: 2, skill: 'nurse' },
  dressing:       { name: 'Dressing', nameEn: 'Dressing', icon: '🩹', timeIdeal: 2, timeNon: 3, skill: 'basic' },
  splint:         { name: 'Splinting', nameEn: 'Splinting', icon: '🦴', timeIdeal: 3, timeNon: 5, skill: 'basic' },
  chestSeal:      { name: 'Chest Seal', nameEn: 'Chest Seal', icon: '🫀', timeIdeal: 2, timeNon: 4, skill: 'doctor' },
  chestTube:      { name: 'Chest Tube', nameEn: 'Chest Tube', icon: '🔧', timeIdeal: 5, timeNon: 8, skill: 'doctor' },
  tourniquet:     { name: 'Tourniquet', nameEn: 'Tourniquet', icon: '🔴', timeIdeal: 1, timeNon: 2, skill: 'basic' },
  spinalBoard:    { name: 'Spinal Board', nameEn: 'Spinal Board', icon: '🛏️', timeIdeal: 3, timeNon: 5, skill: 'paramedic' },
  intubation:     { name: 'Intubation', nameEn: 'Intubation', icon: '🫁', timeIdeal: 3, timeNon: 6, skill: 'doctor' },
  bloodTransfuse: { name: 'Blood Transfusion', nameEn: 'Blood Transfusion', icon: '🅱️', timeIdeal: 3, timeNon: 5, skill: 'doctor' },
  monitor:        { name: 'Monitor', nameEn: 'Monitor', icon: '📊', timeIdeal: 1, timeNon: 2, skill: 'nurse' },
  decontam:       { name: 'Decontamination', nameEn: 'Decontamination', icon: '☢️', timeIdeal: 5, timeNon: 10, skill: 'specialist' },
  antidote:       { name: 'Antidote', nameEn: 'Antidote', icon: '💚', timeIdeal: 2, timeNon: 4, skill: 'doctor' },
  cpr:            { name: 'CPR', nameEn: 'CPR', icon: '❤️', timeIdeal: 0, timeNon: 0, skill: 'basic', continuous: true },
  ventilator:     { name: 'Ventilator', nameEn: 'Ventilator', icon: '🌬️', timeIdeal: 5, timeNon: 8, skill: 'doctor' }
};

// ---- Resource Types ----
const RESOURCE_TYPES = {
  doctor:    { name: 'Doctor', icon: '🩺', color: '#3b82f6' },
  nurse:     { name: 'Nurse', icon: '💉', color: '#10b981' },
  paramedic: { name: 'Paramedic', icon: '🚑', color: '#f59e0b' },
  firstAid:  { name: 'EMT', icon: '⛑️', color: '#ef4444' }
};

// ---- EMERGO Patient Bank (40 patients — Sieve/Sort data included) ----
const EMERGO_PATIENTS = [
  // === Scene Sieve: RED (Immediate) ===
  {
    id: 'E-001', name: 'Kim Tae-hyun', age: 38, gender: 'M', icon: '👨',
    walking: false,
    sieve: { breathing: true, respRate: 34, capRefill: 4, hr: 130 },
    sort: { gcs: 13, respRate: 34, systolicBP: 80 },
    injuries: ['Right femur open fracture', 'Blunt abdominal trauma — suspected internal bleeding', 'Facial laceration'],
    appearance: 'Blood on lower body, pale complexion',
    correctSieve: 'red', correctSort: 'T1',
    neededInterventions: ['tourniquet','ivCannula','ivFluids','splint','monitor'],
    deterioration: { untreatedMinutes: 8, outcome: 'death', treatedOutcome: 'survive' },
    edNeeds: ['xray','surgery'], surgeryTime: 45, icuRequired: true
  },
  {
    id: 'E-002', name: 'Lee Su-jin', age: 27, gender: 'F', icon: '👩',
    walking: false,
    sieve: { breathing: true, respRate: 36, capRefill: 5, hr: 140 },
    sort: { gcs: 11, respRate: 36, systolicBP: 70 },
    injuries: ['Penetrating chest trauma', 'Suspected tension pneumothorax', 'Right humerus fracture'],
    appearance: 'Respiratory distress, onset of cyanosis',
    correctSieve: 'red', correctSort: 'T1',
    neededInterventions: ['chestSeal','oxygenMask','ivCannula','ivFluids','chestTube'],
    deterioration: { untreatedMinutes: 5, outcome: 'death', treatedOutcome: 'survive' },
    edNeeds: ['ct','surgery'], surgeryTime: 60, icuRequired: true
  },
  {
    id: 'E-003', name: 'Jung Min-ho', age: 55, gender: 'M', icon: '👴',
    walking: false,
    sieve: { breathing: true, respRate: 30, capRefill: 4, hr: 125 },
    sort: { gcs: 12, respRate: 30, systolicBP: 85 },
    injuries: ['Pelvic fracture', 'Urethral bleeding', 'Bilateral lower extremity multiple contusions'],
    appearance: 'Pelvic deformity, mildly altered consciousness',
    correctSieve: 'red', correctSort: 'T1',
    neededInterventions: ['ivCannula','ivFluids','bloodTransfuse','spinalBoard','monitor'],
    deterioration: { untreatedMinutes: 10, outcome: 'death', treatedOutcome: 'survive' },
    edNeeds: ['ct','xray','surgery'], surgeryTime: 90, icuRequired: true
  },
  {
    id: 'E-004', name: 'Park Seo-yeon', age: 8, gender: 'F', icon: '👧',
    walking: false,
    sieve: { breathing: true, respRate: 40, capRefill: 3, hr: 150 },
    sort: { gcs: 14, respRate: 40, systolicBP: 75 },
    injuries: ['Blunt abdominal trauma — suspected splenic rupture', 'Left forearm fracture', 'Multiple abrasions'],
    appearance: 'Crying, complaining of abdominal pain, pale',
    correctSieve: 'red', correctSort: 'T1',
    neededInterventions: ['ivCannula','ivFluids','analgesia','splint','monitor'],
    deterioration: { untreatedMinutes: 12, outcome: 'death', treatedOutcome: 'survive' },
    edNeeds: ['ultrasound','ct','surgery'], surgeryTime: 50, icuRequired: true
  },
  {
    id: 'E-005', name: 'Choi Young-su', age: 62, gender: 'M', icon: '👴',
    walking: false,
    sieve: { breathing: false, afterAirway: true, respRate: 8, capRefill: 5, hr: 50 },
    sort: { gcs: 6, respRate: 8, systolicBP: 60 },
    injuries: ['Severe head trauma', 'Depressed skull fracture', 'CSF leakage'],
    appearance: 'Near unresponsive, left pupil dilated',
    correctSieve: 'red', correctSort: 'T1',
    neededInterventions: ['airwayOpen','intubation','ivCannula','ivFluids','ventilator'],
    deterioration: { untreatedMinutes: 4, outcome: 'death', treatedOutcome: 'survive_disabled' },
    edNeeds: ['ct','surgery'], surgeryTime: 120, icuRequired: true
  },
  {
    id: 'E-006', name: 'Han Ji-eun', age: 31, gender: 'F', icon: '👩',
    walking: false,
    sieve: { breathing: true, respRate: 32, capRefill: 4, hr: 135 },
    sort: { gcs: 13, respRate: 32, systolicBP: 78 },
    injuries: ['Bilateral lower extremity crush injury', 'Rhabdomyolysis risk', 'Dehydration'],
    appearance: 'Rescued after 4 hours buried under building rubble',
    correctSieve: 'red', correctSort: 'T1',
    neededInterventions: ['ivCannula','ivFluids','ivFluids','monitor','analgesia'],
    deterioration: { untreatedMinutes: 15, outcome: 'death', treatedOutcome: 'survive' },
    edNeeds: ['blood_test','ct'], surgeryTime: 0, icuRequired: true
  },

  // === Scene Sieve: YELLOW (Urgent) ===
  {
    id: 'E-007', name: 'Oh Jun-hyuk', age: 45, gender: 'M', icon: '👨',
    walking: false,
    sieve: { breathing: true, respRate: 22, capRefill: 2, hr: 95 },
    sort: { gcs: 14, respRate: 22, systolicBP: 110 },
    injuries: ['Left tibia-fibula open fracture', 'Frontal laceration (5 cm)', 'Left hand 2nd-degree burn'],
    appearance: 'Pain complaints but alert and oriented',
    correctSieve: 'yellow', correctSort: 'T2',
    neededInterventions: ['dressing','splint','ivCannula','analgesia'],
    deterioration: { untreatedMinutes: 30, outcome: 'worsen_to_red', treatedOutcome: 'survive' },
    edNeeds: ['xray','surgery'], surgeryTime: 30, icuRequired: false
  },
  {
    id: 'E-008', name: 'Yun Seo-a', age: 22, gender: 'F', icon: '👩',
    walking: false,
    sieve: { breathing: true, respRate: 24, capRefill: 2, hr: 100 },
    sort: { gcs: 15, respRate: 24, systolicBP: 105 },
    injuries: ['Bilateral forearm 2nd-3rd degree burns (15% TBSA)', 'Suspected inhalation injury', 'Facial soot'],
    appearance: 'Burns with blisters, hoarse voice',
    correctSieve: 'yellow', correctSort: 'T2',
    neededInterventions: ['oxygenMask','ivCannula','ivFluids','dressing','analgesia'],
    deterioration: { untreatedMinutes: 20, outcome: 'worsen_to_red', treatedOutcome: 'survive' },
    edNeeds: ['bronchoscopy','blood_test'], surgeryTime: 0, icuRequired: false
  },
  {
    id: 'E-009', name: 'Kang Min-jae', age: 48, gender: 'M', icon: '👨',
    walking: false,
    sieve: { breathing: true, respRate: 20, capRefill: 2, hr: 88 },
    sort: { gcs: 14, respRate: 20, systolicBP: 120 },
    injuries: ['Cervical pain — suspected fracture', 'Bilateral hand lacerations', 'Chest contusion'],
    appearance: 'Limited cervical range of motion, alert',
    correctSieve: 'yellow', correctSort: 'T2',
    neededInterventions: ['spinalBoard','dressing','analgesia','monitor'],
    deterioration: { untreatedMinutes: 40, outcome: 'worsen_neuro', treatedOutcome: 'survive' },
    edNeeds: ['ct','xray'], surgeryTime: 0, icuRequired: false
  },
  {
    id: 'E-010', name: 'Im Ha-eun', age: 35, gender: 'F', icon: '👩',
    walking: false,
    sieve: { breathing: true, respRate: 26, capRefill: 2, hr: 105 },
    sort: { gcs: 15, respRate: 26, systolicBP: 100 },
    injuries: ['Right clavicle fracture', 'Right multiple rib fractures (3rd-6th)', 'Small right hemothorax'],
    appearance: 'Shallow breathing due to right chest pain',
    correctSieve: 'yellow', correctSort: 'T2',
    neededInterventions: ['oxygenMask','ivCannula','analgesia','monitor'],
    deterioration: { untreatedMinutes: 25, outcome: 'worsen_to_red', treatedOutcome: 'survive' },
    edNeeds: ['xray','ct'], surgeryTime: 0, icuRequired: false
  },
  {
    id: 'E-011', name: 'Song Do-hyun', age: 59, gender: 'M', icon: '👴',
    walking: false,
    sieve: { breathing: true, respRate: 22, capRefill: 2, hr: 92 },
    sort: { gcs: 13, respRate: 22, systolicBP: 130 },
    injuries: ['Orbital fracture', 'Nasal fracture', 'Severe facial swelling', 'Complaining of decreased vision'],
    appearance: 'Severely swollen face, slow to follow commands',
    correctSieve: 'yellow', correctSort: 'T2',
    neededInterventions: ['dressing','ivCannula','analgesia'],
    deterioration: { untreatedMinutes: 45, outcome: 'permanent_vision_loss', treatedOutcome: 'survive' },
    edNeeds: ['ct','ophthalmology'], surgeryTime: 40, icuRequired: false
  },
  {
    id: 'E-012', name: 'Noh Ji-young', age: 40, gender: 'F', icon: '👩',
    walking: false,
    sieve: { breathing: true, respRate: 18, capRefill: 2, hr: 110 },
    sort: { gcs: 15, respRate: 18, systolicBP: 95 },
    injuries: ['Left femur closed fracture', 'Left knee dislocation', 'Multiple contusions'],
    appearance: 'Left lower extremity deformity, weak foot pulse',
    correctSieve: 'yellow', correctSort: 'T2',
    neededInterventions: ['splint','ivCannula','analgesia','monitor'],
    deterioration: { untreatedMinutes: 35, outcome: 'limb_ischemia', treatedOutcome: 'survive' },
    edNeeds: ['xray','vascular_check'], surgeryTime: 35, icuRequired: false
  },

  // === Scene Sieve: GREEN (Delayed) ===
  {
    id: 'E-013', name: 'Jang Sung-min', age: 29, gender: 'M', icon: '👨',
    walking: true,
    sieve: { breathing: true, respRate: 16, capRefill: 2, hr: 80 },
    sort: { gcs: 15, respRate: 16, systolicBP: 130 },
    injuries: ['Left hand laceration (requires suturing)', 'Frontal abrasion', 'Mild lower back pain'],
    appearance: 'Ambulatory, controlling hand bleeding',
    correctSieve: 'green', correctSort: 'T3',
    neededInterventions: ['dressing'],
    deterioration: { untreatedMinutes: 120, outcome: 'stable', treatedOutcome: 'survive' },
    edNeeds: ['suture'], surgeryTime: 0, icuRequired: false
  },
  {
    id: 'E-014', name: 'Bae Ji-hyun', age: 24, gender: 'F', icon: '👩',
    walking: true,
    sieve: { breathing: true, respRate: 18, capRefill: 1, hr: 90 },
    sort: { gcs: 15, respRate: 18, systolicBP: 125 },
    injuries: ['Bilateral pretibial abrasions', 'Right ankle sprain', 'Inhalation cough'],
    appearance: 'Limping gait, coughing',
    correctSieve: 'green', correctSort: 'T3',
    neededInterventions: ['dressing','oxygenMask'],
    deterioration: { untreatedMinutes: 180, outcome: 'stable', treatedOutcome: 'survive' },
    edNeeds: ['xray'], surgeryTime: 0, icuRequired: false
  },
  {
    id: 'E-015', name: 'Ryu Min-seok', age: 50, gender: 'M', icon: '👨',
    walking: true,
    sieve: { breathing: true, respRate: 16, capRefill: 1, hr: 85 },
    sort: { gcs: 15, respRate: 16, systolicBP: 140 },
    injuries: ['Multiple glass fragment wounds', 'Left forearm laceration', 'Psychological trauma'],
    appearance: 'Glass fragments in clothing, trembling',
    correctSieve: 'green', correctSort: 'T3',
    neededInterventions: ['dressing'],
    deterioration: { untreatedMinutes: 120, outcome: 'stable', treatedOutcome: 'survive' },
    edNeeds: ['wound_care'], surgeryTime: 0, icuRequired: false
  },
  {
    id: 'E-016', name: 'Kim Na-yeon', age: 19, gender: 'F', icon: '👩',
    walking: true,
    sieve: { breathing: true, respRate: 20, capRefill: 1, hr: 95 },
    sort: { gcs: 15, respRate: 20, systolicBP: 120 },
    injuries: ['Tinnitus', 'Suspected tympanic membrane perforation', 'Facial abrasion', 'Severe anxiety'],
    appearance: 'Holding ears in pain, ambulatory',
    correctSieve: 'green', correctSort: 'T3',
    neededInterventions: ['dressing'],
    deterioration: { untreatedMinutes: 180, outcome: 'stable', treatedOutcome: 'survive' },
    edNeeds: ['ent'], surgeryTime: 0, icuRequired: false
  },
  {
    id: 'E-017', name: 'Jo Hyun-woo', age: 42, gender: 'M', icon: '👨',
    walking: true,
    sieve: { breathing: true, respRate: 16, capRefill: 1, hr: 78 },
    sort: { gcs: 15, respRate: 16, systolicBP: 135 },
    injuries: ['Left 5th finger fracture', 'Knee abrasion', 'Dust inhalation cough'],
    appearance: 'Ambulatory, left hand swelling',
    correctSieve: 'green', correctSort: 'T3',
    neededInterventions: ['splint','dressing'],
    deterioration: { untreatedMinutes: 180, outcome: 'stable', treatedOutcome: 'survive' },
    edNeeds: ['xray'], surgeryTime: 0, icuRequired: false
  },
  {
    id: 'E-018', name: 'Han So-young', age: 33, gender: 'F', icon: '👩',
    walking: true,
    sieve: { breathing: true, respRate: 18, capRefill: 1, hr: 88 },
    sort: { gcs: 15, respRate: 18, systolicBP: 118 },
    injuries: ['Mild concussion', 'Occipital contusion', 'Nausea'],
    appearance: 'Dizziness complaints, ambulatory',
    correctSieve: 'green', correctSort: 'T3',
    neededInterventions: ['monitor'],
    deterioration: { untreatedMinutes: 60, outcome: 'stable', treatedOutcome: 'survive' },
    edNeeds: ['ct'], surgeryTime: 0, icuRequired: false
  },

  // === Scene Sieve: BLACK (Deceased) ===
  {
    id: 'E-019', name: 'Lee Sang-cheol', age: 67, gender: 'M', icon: '👴',
    walking: false,
    sieve: { breathing: false, afterAirway: false, respRate: 0, capRefill: 0, hr: 0 },
    sort: { gcs: 3, respRate: 0, systolicBP: 0 },
    injuries: ['Multiple organ injury', 'Massive hemorrhage', 'Thoracoabdominal penetrating wound'],
    appearance: 'Unresponsive, no breathing even after airway opening',
    correctSieve: 'black', correctSort: 'dead',
    neededInterventions: [],
    deterioration: { untreatedMinutes: 0, outcome: 'dead', treatedOutcome: 'dead' },
    edNeeds: [], surgeryTime: 0, icuRequired: false
  },
  {
    id: 'E-020', name: 'Park Young-hee', age: 71, gender: 'F', icon: '👵',
    walking: false,
    sieve: { breathing: false, afterAirway: false, respRate: 0, capRefill: 0, hr: 0 },
    sort: { gcs: 3, respRate: 0, systolicBP: 0 },
    injuries: ['Massive head injury', 'Open skull fracture', 'Brain parenchyma exposed'],
    appearance: 'Unresponsive, irreversible injury',
    correctSieve: 'black', correctSort: 'dead',
    neededInterventions: [],
    deterioration: { untreatedMinutes: 0, outcome: 'dead', treatedOutcome: 'dead' },
    edNeeds: [], surgeryTime: 0, icuRequired: false
  },

  // === Additional RED Patients (used in continuous chain) ===
  {
    id: 'E-021', name: 'Shin Dong-hyuk', age: 43, gender: 'M', icon: '👨',
    walking: false,
    sieve: { breathing: true, respRate: 35, capRefill: 5, hr: 138 },
    sort: { gcs: 10, respRate: 35, systolicBP: 65 },
    injuries: ['Abdominal penetrating wound — suspected bowel rupture', 'Massive intra-abdominal hemorrhage', 'Shock state'],
    appearance: 'Abdominal distension, decreased consciousness, pale',
    correctSieve: 'red', correctSort: 'T1',
    neededInterventions: ['ivCannula','ivFluids','bloodTransfuse','monitor','analgesia'],
    deterioration: { untreatedMinutes: 6, outcome: 'death', treatedOutcome: 'survive' },
    edNeeds: ['ct','surgery'], surgeryTime: 75, icuRequired: true
  },
  {
    id: 'E-022', name: 'Moon Ye-jin', age: 30, gender: 'F', icon: '👩',
    walking: false,
    sieve: { breathing: true, respRate: 38, capRefill: 4, hr: 145 },
    sort: { gcs: 12, respRate: 38, systolicBP: 72 },
    injuries: ['Bilateral femur fractures', 'Pelvic instability', 'Retroperitoneal hemorrhage'],
    appearance: 'Severe pain, signs of shock',
    correctSieve: 'red', correctSort: 'T1',
    neededInterventions: ['ivCannula','ivFluids','bloodTransfuse','splint','analgesia','monitor'],
    deterioration: { untreatedMinutes: 10, outcome: 'death', treatedOutcome: 'survive' },
    edNeeds: ['ct','xray','surgery'], surgeryTime: 100, icuRequired: true
  },

  // === Additional YELLOW ===
  {
    id: 'E-023', name: 'Hwang Jun-seo', age: 36, gender: 'M', icon: '👨',
    walking: false,
    sieve: { breathing: true, respRate: 24, capRefill: 2, hr: 98 },
    sort: { gcs: 14, respRate: 24, systolicBP: 108 },
    injuries: ['Right humerus fracture', 'Ipsilateral forearm laceration', 'Facial abrasion'],
    appearance: 'Right upper extremity deformity, alert',
    correctSieve: 'yellow', correctSort: 'T2',
    neededInterventions: ['splint','dressing','ivCannula','analgesia'],
    deterioration: { untreatedMinutes: 40, outcome: 'stable', treatedOutcome: 'survive' },
    edNeeds: ['xray','surgery'], surgeryTime: 25, icuRequired: false
  },
  {
    id: 'E-024', name: 'Jung Da-eun', age: 26, gender: 'F', icon: '👩',
    walking: false,
    sieve: { breathing: true, respRate: 20, capRefill: 2, hr: 102 },
    sort: { gcs: 15, respRate: 20, systolicBP: 100 },
    injuries: ['Left ankle open dislocation', 'Left lower leg laceration', 'Multiple contusions'],
    appearance: 'Severe left ankle deformity, hemorrhage',
    correctSieve: 'yellow', correctSort: 'T2',
    neededInterventions: ['dressing','splint','ivCannula','analgesia'],
    deterioration: { untreatedMinutes: 35, outcome: 'limb_necrosis', treatedOutcome: 'survive' },
    edNeeds: ['xray','surgery'], surgeryTime: 40, icuRequired: false
  },

  // === Additional GREEN ===
  {
    id: 'E-025', name: 'Lee Chae-won', age: 15, gender: 'F', icon: '👧',
    walking: true,
    sieve: { breathing: true, respRate: 20, capRefill: 1, hr: 92 },
    sort: { gcs: 15, respRate: 20, systolicBP: 115 },
    injuries: ['Left hand 1st-degree burn', 'Smoke inhalation cough', 'Mild anxiety'],
    appearance: 'Ambulatory, coughing, hand pain complaints',
    correctSieve: 'green', correctSort: 'T3',
    neededInterventions: ['dressing','oxygenMask'],
    deterioration: { untreatedMinutes: 120, outcome: 'stable', treatedOutcome: 'survive' },
    edNeeds: ['wound_care'], surgeryTime: 0, icuRequired: false
  },
  {
    id: 'E-026', name: 'Park Si-woo', age: 10, gender: 'M', icon: '👦',
    walking: true,
    sieve: { breathing: true, respRate: 22, capRefill: 1, hr: 100 },
    sort: { gcs: 15, respRate: 22, systolicBP: 100 },
    injuries: ['Suspected right forearm fracture', 'Multiple abrasions', 'Crying from fear'],
    appearance: 'Walking while crying, guarding right arm',
    correctSieve: 'green', correctSort: 'T3',
    neededInterventions: ['splint','dressing'],
    deterioration: { untreatedMinutes: 120, outcome: 'stable', treatedOutcome: 'survive' },
    edNeeds: ['xray'], surgeryTime: 0, icuRequired: false
  }
];

// ---- Continuous Chain Scenarios ----
const EMERGO_CHAIN_SCENARIOS = [
  {
    id: 'chain-1',
    title: 'Urban Complex Explosion',
    titleEn: 'Urban Complex Explosion',
    description: 'A gas explosion occurred in a 6-story commercial building. Part of the building collapsed, causing multiple casualties. You must command the full response from scene to hospital.',
    totalPatients: 16,
    patientIds: ['E-001','E-002','E-005','E-006','E-007','E-008','E-009','E-010','E-013','E-014','E-015','E-016','E-017','E-019','E-020','E-025'],
    phases: [
      {
        id: 'scene',
        name: 'Incident Scene',
        nameEn: 'Incident Scene',
        icon: '🔥',
        description: 'Arrive on scene. Rapidly triage patients using the Sieve method.',
        task: 'sieve_triage',
        timeLimit: 180, // 3 minutes (game time)
        availableResources: { paramedic: 4, firstAid: 2 },
        hint: 'Sieve: Walking→GREEN / No breathing + no breathing after airway opening→BLACK / RR>30 or Cap Refill>2s→RED / Otherwise→YELLOW'
      },
      {
        id: 'ccp',
        name: 'Casualty Clearing Post (CCP)',
        nameEn: 'Casualty Clearing Post',
        icon: '⛺',
        description: 'Re-triage using Sort and perform emergency treatment. Resources are limited.',
        task: 'sort_and_treat',
        timeLimit: 300, // 5 minutes
        availableResources: { doctor: 2, nurse: 3, paramedic: 4 },
        hint: 'Sort: Classify T1/T2/T3 using GCS + Respiratory Rate + Systolic BP. Allocate appropriate treatment to critical patients.'
      },
      {
        id: 'transport',
        name: 'Transport Management',
        nameEn: 'Transport Management',
        icon: '🚑',
        description: 'Transport patients to hospital with limited ambulances. Determine transport priority.',
        task: 'transport_priority',
        timeLimit: 180,
        ambulances: 4,
        transportTimeMin: 8, // minutes
        transportTimeMax: 15,
        hint: 'T1 patients first, to the nearest appropriate hospital. Ambulances must make round trips.'
      },
      {
        id: 'ed',
        name: 'Emergency Department Response',
        nameEn: 'Emergency Department',
        icon: '🏥',
        description: 'Stabilize arriving patients in the ED and determine further treatment.',
        task: 'ed_management',
        timeLimit: 300,
        availableResources: { doctor: 3, nurse: 5 },
        edBeds: 8,
        existingPatients: 3, // existing ED patients
        hint: 'Stabilize as many patients as possible with limited beds and staff.'
      }
    ],
    maxPreventableDeaths: 3 // theoretically saveable RED patients
  },
  {
    id: 'chain-2',
    title: 'Subway Chemical Spill',
    titleEn: 'Subway Chemical Spill',
    description: 'A chemical spill occurred at a subway station during rush hour. Multiple patients with respiratory symptoms. Decontamination is required.',
    totalPatients: 14,
    patientIds: ['E-003','E-004','E-008','E-010','E-011','E-012','E-014','E-016','E-017','E-018','E-021','E-022','E-024','E-026'],
    phases: [
      {
        id: 'scene',
        name: 'Contaminated Scene',
        icon: '☢️',
        description: 'Identify contamination zone. Don PPE before entry. Perform Sieve triage.',
        task: 'sieve_triage',
        timeLimit: 180,
        availableResources: { paramedic: 3, firstAid: 2 },
        hazard: 'chemical',
        hint: 'CBRNE scene: Triage before decontamination. All contaminated patients must be decontaminated.'
      },
      {
        id: 'decontam',
        name: 'Decontamination Line',
        icon: '🚿',
        description: 'Decontaminate patients. Manage decontamination time and resources.',
        task: 'decontamination',
        timeLimit: 240,
        decontamStations: 2,
        decontamTimePerPatient: 5,
        availableResources: { paramedic: 4, nurse: 2 },
        hint: '2 decontamination stations. 5 minutes per patient. Prioritize critical patients for decontamination.'
      },
      {
        id: 'ccp',
        name: 'Casualty Clearing Post',
        icon: '⛺',
        description: 'Sort and treat decontaminated patients.',
        task: 'sort_and_treat',
        timeLimit: 300,
        availableResources: { doctor: 2, nurse: 3, paramedic: 3 },
        hint: 'Consider antidote administration for patients with chemical exposure.'
      },
      {
        id: 'transport',
        name: 'Transport Management',
        icon: '🚑',
        description: 'Transport patients to hospital.',
        task: 'transport_priority',
        timeLimit: 180,
        ambulances: 3,
        transportTimeMin: 10,
        transportTimeMax: 18,
        hint: 'Patients who have not completed decontamination cannot be transported.'
      }
    ],
    maxPreventableDeaths: 2
  }
];

// ---- Sieve Triage Algorithm ----
function sieveAlgorithm(patient) {
  if (patient.walking) return 'green';
  if (!patient.sieve.breathing) {
    if (patient.sieve.afterAirway) return 'red'; // breathing restored after airway opening
    return 'black';
  }
  if (patient.sieve.respRate > 30 || patient.sieve.respRate < 10) return 'red';
  if (patient.sieve.capRefill > 2 || patient.sieve.hr > 120) return 'red';
  return 'yellow';
}

// ---- Sort (TRTS) Score Calculation ----
function sortScore(patient) {
  let score = 0;
  const s = patient.sort;
  // GCS
  if (s.gcs >= 13) score += 4;
  else if (s.gcs >= 9) score += 3;
  else if (s.gcs >= 6) score += 2;
  else if (s.gcs >= 4) score += 1;
  // Respiratory Rate
  if (s.respRate >= 10 && s.respRate <= 29) score += 4;
  else if (s.respRate > 29) score += 3;
  else if (s.respRate >= 6 && s.respRate <= 9) score += 2;
  else if (s.respRate >= 1 && s.respRate <= 5) score += 1;
  // Systolic BP
  if (s.systolicBP > 89) score += 4;
  else if (s.systolicBP >= 76) score += 3;
  else if (s.systolicBP >= 50) score += 2;
  else if (s.systolicBP >= 1) score += 1;
  return score; // 1-12, T1 ≤ 10, T2 = 11, T3 = 12
}

function sortCategory(patient) {
  if (patient.correctSieve === 'black') return 'dead';
  const s = sortScore(patient);
  if (s <= 10) return 'T1';
  if (s === 11) return 'T2';
  return 'T3';
}

// ---- Outcome Calculation: Preventable Deaths ----
function calculatePreventableDeaths(decisions, patients, scenario) {
  let preventable = 0;
  let totalDeaths = 0;
  let survived = 0;

  patients.forEach(p => {
    const d = decisions[p.id] || {};
    const treated = d.treated || false;
    const treatTime = d.treatMinute || Infinity;
    const det = p.deterioration;

    if (det.outcome === 'dead') {
      totalDeaths++;
      return; // irreversible death
    }

    if (!treated && det.outcome === 'death') {
      totalDeaths++;
      preventable++;
    } else if (treated && treatTime <= det.untreatedMinutes) {
      survived++;
    } else if (treated && treatTime > det.untreatedMinutes) {
      if (det.outcome === 'death') {
        totalDeaths++;
        preventable++;
      }
    } else {
      survived++;
    }
  });

  return { preventable, totalDeaths, survived, total: patients.length };
}
