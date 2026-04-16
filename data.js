// ============================================
// DISASTER MEDICINE SIMULATOR — DATA
// ============================================

const SCENARIOS = {
  triage: {
    title: 'Major Explosion Incident Scene',
    titleEn: 'Mass Explosion Incident',
    description: 'A downtown building explosion has caused multiple casualties. Use the START Triage algorithm to rapidly categorize patients.',
    patients: [
      {
        id: 'P-001',
        name: 'Ji-Su Kim',
        age: 34,
        gender: 'F',
        icon: '👩',
        vitals: {
          respiration: { value: '32/min', status: 'critical', label: 'Respiratory Rate' },
          pulse: { value: '128bpm', status: 'critical', label: 'Pulse' },
          capRefill: { value: '3 sec', status: 'warning', label: 'Capillary Refill' },
          consciousness: { value: 'Responsive', status: 'normal', label: 'Mental Status' }
        },
        findings: [
          'Right femur open fracture with ongoing hemorrhage',
          'Facial laceration with embedded glass fragments',
          'Tachypnea, abdominal rigidity present',
          'Able to follow simple commands'
        ],
        correctTriage: 'red',
        explanation: 'Respiratory rate ≥30/min → tachypnea. Per START algorithm, breathing present with RR ≥30 → Immediate (RED). Open femur fracture with hemorrhage also requires emergency treatment.'
      },
      {
        id: 'P-002',
        name: 'Seong-Ho Park',
        age: 52,
        gender: 'M',
        icon: '👨',
        vitals: {
          respiration: { value: 'None', status: 'critical', label: 'Respiratory Rate' },
          pulse: { value: 'None', status: 'critical', label: 'Pulse' },
          capRefill: { value: 'Unmeasurable', status: 'critical', label: 'Capillary Refill' },
          consciousness: { value: 'Unresponsive', status: 'critical', label: 'Mental Status' }
        },
        findings: [
          'No spontaneous breathing even after airway opening',
          'Carotid pulse not palpable',
          'Pupils dilated and fixed',
          'Chest wall depression and multiple injuries'
        ],
        correctTriage: 'black',
        explanation: 'No breathing after airway opening → Deceased/Expectant (BLACK). First step of START algorithm: check ambulation, then assess breathing. No spontaneous breathing after airway repositioning → BLACK.'
      },
      {
        id: 'P-003',
        name: 'Su-Jin Lee',
        age: 28,
        gender: 'F',
        icon: '👩‍🦰',
        vitals: {
          respiration: { value: '20/min', status: 'normal', label: 'Respiratory Rate' },
          pulse: { value: '88bpm', status: 'normal', label: 'Pulse' },
          capRefill: { value: '2 sec', status: 'normal', label: 'Capillary Refill' },
          consciousness: { value: 'Alert', status: 'normal', label: 'Mental Status' }
        },
        findings: [
          'Suspected left forearm closed fracture',
          'Minor facial lacerations (bleeding self-controlled)',
          'Able to ambulate independently',
          'Alert and oriented'
        ],
        correctTriage: 'green',
        explanation: 'Ambulatory → Minor (GREEN). Patients who can walk independently are classified GREEN in the first step of START. Forearm fracture is not an immediate life threat.'
      },
      {
        id: 'P-004',
        name: 'Yeong-Jun Choi',
        age: 45,
        gender: 'M',
        icon: '👨‍🦳',
        vitals: {
          respiration: { value: '22/min', status: 'normal', label: 'Respiratory Rate' },
          pulse: { value: '102bpm', status: 'warning', label: 'Pulse' },
          capRefill: { value: '4 sec', status: 'critical', label: 'Capillary Refill' },
          consciousness: { value: 'Follows simple commands', status: 'normal', label: 'Mental Status' }
        },
        findings: [
          'Abdominal distension from blunt abdominal trauma',
          'Suspected left multiple rib fractures',
          'Unable to walk, stretcher transport required',
          'Conscious but slow to respond to instructions'
        ],
        correctTriage: 'red',
        explanation: 'RR <30 → check circulation → capillary refill 4 sec (>2 sec) → Immediate (RED). Signs of perfusion impairment → RED. High likelihood of internal abdominal hemorrhage.'
      },
      {
        id: 'P-005',
        name: 'Ha-Yun Jeong',
        age: 19,
        gender: 'F',
        icon: '👧',
        vitals: {
          respiration: { value: '18/min', status: 'normal', label: 'Respiratory Rate' },
          pulse: { value: '92bpm', status: 'normal', label: 'Pulse' },
          capRefill: { value: '2 sec', status: 'normal', label: 'Capillary Refill' },
          consciousness: { value: 'Alert', status: 'normal', label: 'Mental Status' }
        },
        findings: [
          'Left tibia closed fracture — unable to walk',
          'Lower extremity sensation and distal pulse normal',
          'Vital signs stable',
          'Alert and cooperative'
        ],
        correctTriage: 'yellow',
        explanation: 'RR normal (<30) → circulation normal (cap refill ≤2 sec) → mental status: follows simple commands → Delayed (YELLOW). Unable to walk but vital signs stable with no immediate life threat.'
      },
      {
        id: 'P-006',
        name: 'Dong-Uk Han',
        age: 67,
        gender: 'M',
        icon: '👴',
        vitals: {
          respiration: { value: '28/min', status: 'warning', label: 'Respiratory Rate' },
          pulse: { value: '110bpm', status: 'warning', label: 'Pulse' },
          capRefill: { value: '2 sec', status: 'normal', label: 'Capillary Refill' },
          consciousness: { value: 'Confused', status: 'warning', label: 'Mental Status' }
        },
        findings: [
          'Head trauma — scalp laceration with bleeding',
          'Disoriented to name/date/place',
          'Unable to follow simple commands',
          'Unable to walk, complaining of nausea'
        ],
        correctTriage: 'red',
        explanation: 'RR <30 → circulation normal → mental status: unable to follow simple commands → Immediate (RED). Altered mental status in START → RED. Head trauma + altered consciousness is an emergency.'
      },
      {
        id: 'P-007',
        name: 'Min-Ji Seo',
        age: 8,
        gender: 'F',
        icon: '👧',
        vitals: {
          respiration: { value: 'None→Restored', status: 'critical', label: 'Respiratory Rate' },
          pulse: { value: '130bpm', status: 'warning', label: 'Pulse' },
          capRefill: { value: '2 sec', status: 'normal', label: 'Capillary Refill' },
          consciousness: { value: 'Crying', status: 'normal', label: 'Mental Status' }
        },
        findings: [
          'Initially apneic on discovery; breathing resumed after airway opening',
          'Facial dust and minor abrasions',
          'No extremity trauma',
          'Crying and calling for parents'
        ],
        correctTriage: 'red',
        explanation: 'Initial apnea → airway opening → breathing restored → Immediate (RED). Restoration of breathing after airway opening requires airway maintenance → RED. High risk of recurrent airway obstruction.'
      },
      {
        id: 'P-008',
        name: 'Jun-Seo Yun',
        age: 41,
        gender: 'M',
        icon: '👨',
        vitals: {
          respiration: { value: '16/min', status: 'normal', label: 'Respiratory Rate' },
          pulse: { value: '78bpm', status: 'normal', label: 'Pulse' },
          capRefill: { value: '1.5 sec', status: 'normal', label: 'Capillary Refill' },
          consciousness: { value: 'Alert', status: 'normal', label: 'Mental Status' }
        },
        findings: [
          'Multiple superficial lacerations from small glass fragments',
          'Cuts on 2 left fingers (bleeding self-controlled)',
          'Able to ambulate independently',
          'Vital signs completely normal'
        ],
        correctTriage: 'green',
        explanation: 'Ambulatory → Minor (GREEN). Normal vital signs and able to walk independently → GREEN. Superficial wounds only; immediate treatment not required.'
      },
      {
        id: 'P-009',
        name: 'Hye-Rin Jang',
        age: 55,
        gender: 'F',
        icon: '👩‍🦳',
        vitals: {
          respiration: { value: '24/min', status: 'normal', label: 'Respiratory Rate' },
          pulse: { value: '96bpm', status: 'normal', label: 'Pulse' },
          capRefill: { value: '2 sec', status: 'normal', label: 'Capillary Refill' },
          consciousness: { value: 'Alert', status: 'normal', label: 'Mental Status' }
        },
        findings: [
          'Suspected left shoulder dislocation',
          'Chest contusion — pain on deep inspiration',
          'Able to walk but refuses due to pain',
          'Alert and cooperative'
        ],
        correctTriage: 'yellow',
        explanation: 'RR normal → circulation normal → mental status normal → Delayed (YELLOW). Refuses to walk but vital signs and consciousness are normal. Shoulder dislocation and chest contusion are not immediate threats. Ambulatory but refusing → YELLOW not GREEN.'
      },
      {
        id: 'P-010',
        name: 'Tae-Hyun Kang',
        age: 23,
        gender: 'M',
        icon: '👨‍🦱',
        vitals: {
          respiration: { value: '36/min', status: 'critical', label: 'Respiratory Rate' },
          pulse: { value: '140bpm', status: 'critical', label: 'Pulse' },
          capRefill: { value: '5 sec', status: 'critical', label: 'Capillary Refill' },
          consciousness: { value: 'Decreased consciousness', status: 'critical', label: 'Mental Status' }
        },
        findings: [
          'Left chest penetrating injury — suspected open pneumothorax',
          'Subcutaneous emphysema palpated',
          'Oxygen saturation rapidly dropping',
          'Accessory muscle use, progressive cyanosis'
        ],
        correctTriage: 'red',
        explanation: 'RR 36/min (>30) → Immediate (RED). Tachypnea alone → RED. Open pneumothorax requires immediate 3-sided occlusive dressing. Also has perfusion impairment and decreased consciousness.'
      },
      // ============================================
      // NEW PATIENTS P-011 ~ P-018
      // ============================================
      {
        id: 'P-011',
        name: 'Hyun-Su Oh',
        age: 38,
        gender: 'M',
        icon: '👨',
        vitals: {
          respiration: { value: '28/min', status: 'warning', label: 'Respiratory Rate' },
          pulse: { value: '54bpm', status: 'critical', label: 'Pulse' },
          capRefill: { value: '2 sec', status: 'normal', label: 'Capillary Refill' },
          consciousness: { value: 'Stuporous', status: 'critical', label: 'Mental Status' }
        },
        findings: [
          'Extreme miosis (pinpoint pupils)',
          'Salivation and excessive lacrimation',
          'Involuntary urination/defecation, vomiting (classic SLUDGEM symptoms)',
          'Muscle fasciculations and increased respiratory secretions threatening airway',
          'Found near chemical industrial complex; suspected sarin-like agent exposure'
        ],
        correctTriage: 'red',
        triageNote: 'Chemical Exposure / Nerve Agent',
        explanation: 'SLUDGEM (Salivation, Lacrimation, Urination, Defecation, GI distress, Emesis, Miosis) is the classic presentation of organophosphate nerve agent (e.g., sarin) exposure. Bradycardia, excessive secretions, and decreased consciousness → Immediate (RED), requiring Atropine + 2-PAM antidotes immediately. PPE mandatory for healthcare providers before decontamination.'
      },
      {
        id: 'P-012',
        name: 'Ji-Young Min',
        age: 29,
        gender: 'F',
        icon: '👩',
        vitals: {
          respiration: { value: '22/min', status: 'normal', label: 'Respiratory Rate' },
          pulse: { value: '108bpm', status: 'warning', label: 'Pulse' },
          capRefill: { value: '2 sec', status: 'normal', label: 'Capillary Refill' },
          consciousness: { value: 'Confused', status: 'warning', label: 'Mental Status' }
        },
        findings: [
          'Nuclear plant worker with suspected high-dose radiation exposure',
          'Nausea and vomiting onset within 1 hour of exposure (prodromal symptoms)',
          'Severe headache and fatigue',
          'No external wounds, no skin erythema',
          'Exact exposure dose unconfirmed (classify as high-risk ARS group)'
        ],
        correctTriage: 'red',
        triageNote: 'Radiation Exposure / Suspected ARS',
        explanation: 'Nausea/vomiting within 1 hour of exposure is a classic ARS prodromal sign suggesting high-dose (>1 Gy) exposure. Record exact time of symptom onset and classify RED. Decontamination (undress + wash), serial CBC, and biological dosimetry if possible.'
      },
      {
        id: 'P-013',
        name: 'Seung-Min Ryu',
        age: 44,
        gender: 'M',
        icon: '👨‍🦳',
        vitals: {
          respiration: { value: '20/min', status: 'normal', label: 'Respiratory Rate' },
          pulse: { value: '116bpm', status: 'warning', label: 'Pulse' },
          capRefill: { value: '3 sec', status: 'warning', label: 'Capillary Refill' },
          consciousness: { value: 'Alert but weak', status: 'warning', label: 'Mental Status' }
        },
        findings: [
          'Rescued after >4 hours of lower extremity compression in building collapse',
          'Bilateral lower extremity edema and compression marks; unable to move legs',
          'Dark brown urine (suspected myoglobinuria)',
          'Concern about deteriorating consciousness compared to just before rescue',
          'High risk of acute hyperkalemia + hypotension upon rescue'
        ],
        correctTriage: 'red',
        triageNote: 'Crush Syndrome',
        explanation: 'Crush Syndrome occurs when muscle necrosis byproducts (K⁺, myoglobin) are released into systemic circulation upon decompression, causing acute renal failure, hyperkalemia, and cardiac failure. Begin IV fluid bolus (normal saline 1 L/h) before rescue, attach cardiac monitor, classify RED. Dark brown urine is a warning sign of myoglobinuria.'
      },
      {
        id: 'P-014',
        name: 'Mi-Rae Hong',
        age: 31,
        gender: 'F',
        icon: '👩',
        vitals: {
          respiration: { value: '26/min', status: 'warning', label: 'Respiratory Rate' },
          pulse: { value: '122bpm', status: 'critical', label: 'Pulse' },
          capRefill: { value: '3 sec', status: 'warning', label: 'Capillary Refill' },
          consciousness: { value: 'Responsive', status: 'normal', label: 'Mental Status' }
        },
        findings: [
          'Escaped fire scene with 30% TBSA 2nd–3rd degree burns',
          'Burns to neck and face, hoarseness present',
          'Singed nasal hairs and sooty mucosa confirmed',
          'Coughing up carbonaceous sputum',
          'Airway currently maintained but early intubation needed given worsening edema'
        ],
        correctTriage: 'red',
        triageNote: 'Extensive Burns with Inhalation Injury',
        explanation: '30% TBSA 2nd–3rd degree burns is a serious injury. Hoarseness, singed nasal hairs, and sooty mucosa are the 3 hallmark signs of inhalation injury. Airway edema progresses rapidly over hours; early endotracheal intubation is life-saving. Begin fluid resuscitation immediately (Parkland formula: 4 mL × kg × %TBSA). RED classification essential.'
      },
      {
        id: 'P-015',
        name: 'Jeong-Sun Ko',
        age: 72,
        gender: 'F',
        icon: '👵',
        vitals: {
          respiration: { value: '24/min', status: 'normal', label: 'Respiratory Rate' },
          pulse: { value: '94bpm', status: 'normal', label: 'Pulse' },
          capRefill: { value: '2 sec', status: 'normal', label: 'Capillary Refill' },
          consciousness: { value: 'Alert', status: 'normal', label: 'Mental Status' }
        },
        findings: [
          'Able to ambulate independently, moving slowly',
          'COPD exacerbation symptoms after smoke inhalation',
          'Mild wheezing on auscultation',
          'Comorbidities: COPD, hypertension, diabetes',
          'No inhaler available, complaining of breathing difficulty'
        ],
        correctTriage: 'green',
        triageNote: 'Ambulatory / Elderly Vulnerable Population',
        explanation: 'Ambulatory → GREEN. However, elderly patients with COPD are at high risk of deterioration; periodic re-triage is essential. Provide bronchodilator (inhaler) and continue O2 saturation monitoring in the Green zone. Elderly patients have limited physiological reserve and may deteriorate rapidly even from minor conditions.'
      },
      {
        id: 'P-016',
        name: 'Seo-Jun Im',
        age: 5,
        gender: 'M',
        icon: '👦',
        vitals: {
          respiration: { value: '28/min', status: 'normal', label: 'Respiratory Rate' },
          pulse: { value: '118bpm', status: 'normal', label: 'Pulse' },
          capRefill: { value: '2 sec', status: 'normal', label: 'Capillary Refill' },
          consciousness: { value: 'Crying', status: 'normal', label: 'Mental Status' }
        },
        findings: [
          '5-year-old male, found alone without guardian',
          'Minor abrasions on both knees and hands (self-controlled bleeding)',
          'Able to ambulate independently',
          'Can state name and age but appears frightened',
          'JumpSTART Triage protocol required'
        ],
        correctTriage: 'green',
        triageNote: 'JumpSTART / Unaccompanied Pediatric',
        explanation: 'JumpSTART (pediatric triage): Ambulatory → GREEN. Physiological vital signs are within normal range for pediatrics (normal RR 20–30/min). Unaccompanied children are at high risk of psychological trauma; place in a separate family reunification area and connect to mental health support. Guardian identification procedures must be initiated separately.'
      },
      {
        id: 'P-017',
        name: 'Na-Ri Son',
        age: 29,
        gender: 'F',
        icon: '🤰',
        vitals: {
          respiration: { value: '20/min', status: 'normal', label: 'Respiratory Rate' },
          pulse: { value: '98bpm', status: 'normal', label: 'Pulse' },
          capRefill: { value: '2 sec', status: 'normal', label: 'Capillary Refill' },
          consciousness: { value: 'Alert', status: 'normal', label: 'Mental Status' }
        },
        findings: [
          '32 weeks pregnant, fell from blast impact',
          'Minor laceration on right arm (bleeding controlled)',
          'Able to ambulate independently',
          'Intermittent lower abdominal pain',
          'Fetal movement needs confirmation; risk of placental abruption'
        ],
        correctTriage: 'yellow',
        triageNote: 'Pregnant Patient Special Vulnerable Population',
        explanation: 'Current vital signs and consciousness are stable, but at 32 weeks gestation this patient is at risk for placental abruption and preterm labor after abdominal trauma, warranting priority assessment above standard YELLOW. Position in left lateral decubitus to reduce aortocaval compression; initiate early obstetric emergency evaluation. A special case involving two lives simultaneously.'
      },
      {
        id: 'P-018',
        name: 'Nguyen Van Thanh',
        age: 35,
        gender: 'M',
        icon: '👨',
        vitals: {
          respiration: { value: '18/min', status: 'normal', label: 'Respiratory Rate' },
          pulse: { value: '88bpm', status: 'normal', label: 'Pulse' },
          capRefill: { value: '2 sec', status: 'normal', label: 'Capillary Refill' },
          consciousness: { value: 'Awake', status: 'normal', label: 'Mental Status' }
        },
        findings: [
          'Vietnamese foreign worker, difficulty communicating in Korean',
          'Able to ambulate independently',
          'Non-verbally points to head and abdomen to express pain',
          'Vital signs stable but pain assessment difficult',
          'Unable to confirm comorbidities or medication history due to language barrier'
        ],
        correctTriage: 'yellow',
        triageNote: 'Language Barrier / Foreign National Vulnerable Population',
        explanation: 'Vital signs normal and ambulatory, but language barrier limits subjective symptom assessment, risking underestimation of injury severity. Classify YELLOW; connect to interpreter services (translation app/bilingual volunteer) and perform regular reassessment. Foreign nationals and migrant workers are a vulnerable group due to limited information access during disasters.'
      },
      // ============================================
      // NEW PATIENTS P-019 ~ P-028 (CBRN/Special Disaster)
      // ============================================
      {
        id: 'P-019',
        name: 'Do-Hyun Kim',
        age: 42,
        gender: 'M',
        icon: '👨',
        vitals: {
          respiration: { value: '8/min (irregular)', status: 'critical', label: 'Respiratory Rate' },
          pulse: { value: '48bpm (bradycardia)', status: 'critical', label: 'Pulse' },
          capRefill: { value: '4 sec', status: 'critical', label: 'Capillary Refill' },
          consciousness: { value: 'Decreased consciousness/Seizures', status: 'critical', label: 'Mental Status' },
        },
        findings: [
          'Chemical terrorism — nerve agent dispersal at subway station',
          'Active generalized seizures',
          'Hypersalivation and extreme miosis',
          'Increased bronchial secretions threatening airway, progressive respiratory failure',
          'Non-ambulatory, full SLUDGEM syndrome',
        ],
        correctTriage: 'red',
        triageNote: 'Severe Nerve Agent Exposure / Seizures',
        explanation: 'Seizures + full SLUDGEM syndrome is a classic presentation of severe nerve agent (sarin, VX) exposure. Immediate repeated Atropine 2 mg IV + Pralidoxime 1 g IV; benzodiazepine (Diazepam) for seizure control. Airway management and secretion clearance are the top priority. After RED classification: decontamination → antidotes → intubation.'
      },
      {
        id: 'P-020',
        name: 'Ji-Eun Song',
        age: 33,
        gender: 'F',
        icon: '👩',
        vitals: {
          respiration: { value: '22/min', status: 'normal', label: 'Respiratory Rate' },
          pulse: { value: '96bpm', status: 'normal', label: 'Pulse' },
          capRefill: { value: '2 sec', status: 'normal', label: 'Capillary Refill' },
          consciousness: { value: 'Alert, anxious', status: 'normal', label: 'Mental Status' },
        },
        findings: [
          'Self-evacuated from subway nerve agent dispersal scene',
          'Bilateral miosis causing blurred vision and eye pain',
          'Mild rhinorrhea and chest tightness',
          'Ambulatory but severely anxious',
          'Minor exposure — symptom progression monitoring required',
        ],
        correctTriage: 'yellow',
        triageNote: 'Minor Nerve Agent Exposure / Symptom Monitoring',
        explanation: 'Ambulatory with stable vital signs, but nerve agent exposure patients can deteriorate over time — classify YELLOW rather than simple GREEN. Miosis and increased secretions are early signs of minor exposure. Consider atropine eye drops and oral dosing; re-assessment every 30 minutes is essential.'
      },
      {
        id: 'P-021',
        name: 'Jun-Hyuk Park',
        age: 27,
        gender: 'M',
        icon: '👨‍🦱',
        vitals: {
          respiration: { value: '34/min', status: 'critical', label: 'Respiratory Rate' },
          pulse: { value: '132bpm', status: 'critical', label: 'Pulse' },
          capRefill: { value: '5 sec', status: 'critical', label: 'Capillary Refill' },
          consciousness: { value: 'Stuporous', status: 'warning', label: 'Mental Status' },
        },
        findings: [
          'IED explosion — multiple penetrating injuries from shrapnel',
          'Right femur open fracture with ongoing arterial hemorrhage',
          'Subcutaneous emphysema palpated, left chest dullness',
          'Multiple shrapnel embedded in face and upper extremities',
          'Early signs of hemorrhagic shock — tachycardia, tachypnea, altered consciousness',
        ],
        correctTriage: 'red',
        triageNote: 'Blast Trauma / Multiple Penetrating Injuries / Hemorrhagic Shock',
        explanation: 'RR 34/min (>30) → Immediate (RED). Multiple penetrating wounds + arterial hemorrhage + cap refill 5 sec are clear signs of hemorrhagic shock. Apply tourniquet immediately, damage control resuscitation (DCR: 1:1:1 blood products, TXA 1 g IV), consider chest decompression. Transport to damage control surgery (DCS) facility within the Golden Hour.'
      },
      {
        id: 'P-022',
        name: 'Ha-Na Lee',
        age: 38,
        gender: 'F',
        icon: '👩',
        vitals: {
          respiration: { value: '24/min', status: 'normal', label: 'Respiratory Rate' },
          pulse: { value: '110bpm', status: 'warning', label: 'Pulse' },
          capRefill: { value: '2 sec', status: 'normal', label: 'Capillary Refill' },
          consciousness: { value: 'Confused, persistent vomiting', status: 'warning', label: 'Mental Status' },
        },
        findings: [
          'Nuclear plant accident — suspected high-dose radiation exposure',
          'Vomiting onset within 30 minutes of exposure (TTE <1 hr = estimated ≥6 Gy)',
          'Rapid fatigue, headache, and diarrhea',
          'No external wounds; skin erythema gradually developing',
          'Rapid lymphocyte count decline expected — high risk of hematopoietic syndrome',
        ],
        correctTriage: 'red',
        triageNote: 'Radiation Exposure / High-Dose ARS (≥6 Gy)',
        explanation: 'Time to Emesis (TTE) is the most important early indicator of radiation dose. Vomiting within 1 hour suggests ≥6 Gy high-dose exposure, with overlap of hematopoietic syndrome + GI syndrome expected. After decontamination: immediate serial CBC/lymphocyte counts, prepare for hematopoietic stem cell transplantation, RED classification essential.'
      },
      {
        id: 'P-023',
        name: 'Min-Su Jeong',
        age: 55,
        gender: 'M',
        icon: '👨‍🦳',
        vitals: {
          respiration: { value: '28/min', status: 'warning', label: 'Respiratory Rate' },
          pulse: { value: '118bpm', status: 'warning', label: 'Pulse' },
          capRefill: { value: '3 sec', status: 'warning', label: 'Capillary Refill' },
          consciousness: { value: 'Alert, extreme pain', status: 'normal', label: 'Mental Status' },
        },
        findings: [
          'Chemical attack scene — suspected mustard gas exposure',
          '25% TBSA vesicant burns (blistering)',
          'Bilateral conjunctival injection and decreased vision, eyelid edema',
          'Upper airway irritation — hoarseness, cough',
          '2–6 hours post-exposure; symptoms now fully manifest',
        ],
        correctTriage: 'red',
        triageNote: 'Vesicant Agent (Mustard Gas) / Extensive Blistering',
        explanation: 'Sulfur mustard has a latency period of 2–24 hours before symptoms develop. >25% TBSA blistering requires massive fluid resuscitation; upper airway symptoms indicate risk of progressive airway edema. No specific antidote exists; symptomatic treatment (blister dressing, ocular irrigation, bronchodilators) is key. RED classification, then transfer to burn center.'
      },
      {
        id: 'P-024',
        name: 'Seo-Yeon Yun',
        age: 24,
        gender: 'F',
        icon: '👩',
        vitals: {
          respiration: { value: '36/min', status: 'critical', label: 'Respiratory Rate' },
          pulse: { value: '126bpm', status: 'critical', label: 'Pulse' },
          capRefill: { value: '4 sec', status: 'critical', label: 'Capillary Refill' },
          consciousness: { value: 'Responsive', status: 'normal', label: 'Mental Status' },
        },
        findings: [
          'Enclosed space explosion — IED detonated inside subway station',
          'Bilateral crackles on auscultation, rapidly worsening dyspnea',
          'Bilateral tympanic membrane rupture confirmed — bloody otorrhea',
          'Only minor external wounds visible but serious internal injuries',
          'Abdominal distension — suspected hollow viscus injury',
        ],
        correctTriage: 'red',
        triageNote: 'Blast Lung / Primary Blast Injury',
        explanation: 'RR 36/min (>30) → RED. In enclosed space explosions, primary blast injury selectively damages air-containing organs (lungs, eardrums, bowel). Blast lung (pulmonary hemorrhage + pneumothorax + ARDS) is the most lethal primary injury and can deteriorate rapidly within hours despite normal appearance. High-flow oxygen; use positive pressure ventilation cautiously (pneumothorax worsening risk); prepare for chest tube insertion.'
      },
      {
        id: 'P-025',
        name: 'Eun-Byul Choi',
        age: 6,
        gender: 'F',
        icon: '👧',
        vitals: {
          respiration: { value: 'None→Restored after rescue breathing', status: 'critical', label: 'Respiratory Rate' },
          pulse: { value: '140bpm', status: 'warning', label: 'Pulse' },
          capRefill: { value: '3 sec', status: 'warning', label: 'Capillary Refill' },
          consciousness: { value: 'Crying/Responsive', status: 'normal', label: 'Mental Status' },
        },
        findings: [
          '6-year-old female found apneic at chemical disaster scene',
          'JumpSTART protocol: 5 rescue breaths attempted → breathing restored',
          'Miosis and increased secretions',
          'Responding with crying, consciousness recovering',
          'Pediatric nerve agent exposure — weight-based antidote dosing required',
        ],
        correctTriage: 'red',
        triageNote: 'JumpSTART / Pediatric Nerve Agent Exposure',
        explanation: 'JumpSTART protocol: 5 rescue breaths in apneic child → breathing restored → RED. Pediatric apnea is commonly caused by hypoxia and can be reversed by ventilation alone. Weight-based Atropine dosing (0.05 mg/kg) is essential for pediatric nerve agent exposure; adult doses may cause toxicity. Pediatric antidote kit preparation required.'
      },
      {
        id: 'P-026',
        name: 'So-Hee Han',
        age: 30,
        gender: 'F',
        icon: '👩',
        vitals: {
          respiration: { value: '30/min', status: 'critical', label: 'Respiratory Rate' },
          pulse: { value: '120bpm', status: 'critical', label: 'Pulse' },
          capRefill: { value: '3 sec', status: 'warning', label: 'Capillary Refill' },
          consciousness: { value: 'Alert, extreme anxiety', status: 'normal', label: 'Mental Status' },
        },
        findings: [
          'Industrial fire — toxic gas and smoke inhalation patient',
          'Rapidly worsening hoarseness, stridor appearing',
          'Soot on face and in oral cavity, nasal hair burned off',
          '20% TBSA 2nd-degree burns (face, neck, upper extremities)',
          'Airway edema rapidly progressing — risk of complete obstruction within 30 minutes',
        ],
        correctTriage: 'red',
        triageNote: 'Inhalation Injury / Airway Emergency',
        explanation: 'Hoarseness + stridor + facial burns + soot are the 3 clinical hallmarks of inhalation injury. Airway edema progresses over 6–24 hours post-burn; the appearance of stridor indicates >50% airway narrowing. Early rapid sequence intubation (RSI) is life-saving; delay may render intubation impossible. Upon RED classification, immediately prepare for intubation.'
      },
      {
        id: 'P-027',
        name: 'Yeong-Jae Jo',
        age: 48,
        gender: 'M',
        icon: '👨',
        vitals: {
          respiration: { value: '18/min', status: 'normal', label: 'Respiratory Rate' },
          pulse: { value: '84bpm', status: 'normal', label: 'Pulse' },
          capRefill: { value: '2 sec', status: 'normal', label: 'Capillary Refill' },
          consciousness: { value: 'Alert', status: 'normal', label: 'Mental Status' },
        },
        findings: [
          'Nuclear plant accident — distant exposure, low-dose radiation suspected',
          'Mild nausea onset >6 hours post-exposure (TTE >6 hr = <2 Gy estimated)',
          'Ambulatory, vital signs stable',
          'No trauma, skin normal',
          'Periodic CBC monitoring and dose assessment required',
        ],
        correctTriage: 'green',
        triageNote: 'Low-Dose Radiation Exposure / Mild ARS',
        explanation: 'TTE >6 hours suggests low-dose exposure (<2 Gy); ambulatory + stable vitals → GREEN. However, radiation exposure patients may worsen after a latent period; track CBC (especially absolute lymphocyte count) every 4 hours and estimate dose from 48-hour lymphocyte depletion pattern. Regular reassessment in the Green zone is essential.'
      },
      {
        id: 'P-028',
        name: 'Su-Jeong Bae',
        age: 60,
        gender: 'F',
        icon: '👩‍🦳',
        vitals: {
          respiration: { value: 'None', status: 'critical', label: 'Respiratory Rate' },
          pulse: { value: 'None', status: 'critical', label: 'Pulse' },
          capRefill: { value: 'Unmeasurable', status: 'critical', label: 'Capillary Refill' },
          consciousness: { value: 'Unresponsive', status: 'critical', label: 'Mental Status' },
        },
        findings: [
          'Mass nerve agent exposure scene — found in cardiac arrest',
          'No spontaneous breathing even after airway opening',
          'No response to initial Atropine 4 mg IV',
          'Fixed pupils, carotid pulse not palpable',
          'CBRN mass casualty situation: 2 healthcare providers, 45 remaining patients waiting',
        ],
        correctTriage: 'black',
        triageNote: 'CBRN MCI / Cardiac Arrest + Antidote Unresponsive',
        explanation: 'In CBRN mass casualty situations, cardiac arrest + no response to initial antidote (Atropine) → Black (Expectant) classification. This applies Crisis Standards of Care rather than Conventional Standards. With only 2 providers for 45 salvageable patients, resource concentration is unavoidable. Reassess when resources become available; all decisions must be documented.'
      },
    ]
  }
};

const CBRNE_SCENARIOS = [
  {
    id: 'chemical',
    title: 'Chemical Substance Spill Incident',
    type: 'Chemical (C)',
    icon: '☣️',
    description: 'A large quantity of chlorine gas has leaked from an industrial complex. Immediate response is required for surrounding residents and workers. Select the correct response sequence.',
    steps: [
      { id: 1, title: 'Scene Access Control', desc: 'Approach from the upwind side and establish hazard zones (Hot/Warm/Cold Zone)', correct: 1 },
      { id: 2, title: 'PPE Donning', desc: 'Confirm Level A or B protective equipment — including self-contained breathing apparatus (SCBA)', correct: 2 },
      { id: 3, title: 'Patient Rescue and Decontamination', desc: 'Rescue exposed patients from Hot Zone → immediate mass decontamination in Warm Zone (water wash)', correct: 3 },
      { id: 4, title: 'Antidote Administration', desc: 'For chlorine gas exposure: administer bronchodilators for bronchospasm, provide supplemental oxygen', correct: 4 },
      { id: 5, title: 'Triage', desc: 'Perform START Triage in Cold Zone after decontamination is complete; classify by severity', correct: 5 },
      { id: 6, title: 'Transport to Medical Facility', desc: 'Transport critical patients first to nearby receiving hospitals (pre-notify hospital of chemical exposure)', correct: 6 }
    ]
  },
  {
    id: 'biological',
    title: 'Biological Threat Response',
    type: 'Biological (B)',
    icon: '🦠',
    description: 'A suspicious package containing white powder has been found at a government facility. Respond to the possibility of anthrax (Anthrax) terrorism.',
    steps: [
      { id: 1, title: 'Scene Isolation', desc: 'Immediately seal the discovery site, evacuate personnel, and shut down HVAC system', correct: 1 },
      { id: 2, title: 'Exposed Person Identification', desc: 'Compile list of personnel directly exposed to suspicious substance and isolate them', correct: 2 },
      { id: 3, title: 'Sample Collection and Analysis', desc: 'Specialized HAZMAT team collects samples; field testing (PCR) or referral to specialized laboratory', correct: 3 },
      { id: 4, title: 'Prophylactic Antibiotics', desc: 'If anthrax suspected, begin prophylactic Ciprofloxacin or Doxycycline', correct: 4 },
      { id: 5, title: 'Decontamination and Washing', desc: 'Remove exposed persons\' clothing; full-body wash with soap and water', correct: 5 },
      { id: 6, title: 'Follow-up Monitoring', desc: '60-day prophylactic antibiotics + vaccination for exposed persons; symptom monitoring', correct: 6 }
    ]
  },
  {
    id: 'radiological',
    title: 'Radiological Contamination Incident',
    type: 'Radiological (R)',
    icon: '☢️',
    description: 'High-level radioactive material has leaked from a hospital radiology department. Radioactively contaminated patients have occurred; immediate protective measures are required.',
    steps: [
      { id: 1, title: 'Distance from Radiation Source', desc: 'Maximize distance from radiation source; apply time-distance-shielding principle', correct: 1 },
      { id: 2, title: 'Contamination Zone Establishment', desc: 'Verify zones with radiation dosimeter; establish Hot/Buffer/Clean zones', correct: 2 },
      { id: 3, title: 'Patient Rescue', desc: 'Don PPE then rapidly rescue exposed patients; monitor rescuer dose limits', correct: 3 },
      { id: 4, title: 'External Decontamination', desc: 'Remove contaminated clothing (90% contamination reduction); wash with soap and water; survey check', correct: 4 },
      { id: 5, title: 'Internal Contamination Assessment', desc: 'If radioactive iodine inhaled, administer KI (potassium iodide); whole-body counter examination', correct: 5 },
      { id: 6, title: 'Medical Treatment', desc: 'Evaluate for Acute Radiation Syndrome (ARS): CBC/lymphocyte monitoring, record time to emesis', correct: 6 }
    ]
  },
  // ============================================
  // NEW CBRNE SCENARIOS
  // ============================================
  {
    id: 'nuclear',
    title: 'Nuclear Power Plant Accident',
    type: 'Nuclear (N)',
    icon: '⚛️',
    description: 'A Fukushima-type cooling system failure at a nuclear power plant has caused a massive release of radioactive material. Protective measures and medical response are required for approximately 150,000 residents within a 30 km radius.',
    steps: [
      {
        id: 1,
        title: 'Immediate Protective Action Decision',
        desc: 'Issue zone-based evacuation or shelter-in-place orders based on distance. Within 10 km: immediate evacuation; 10–30 km: shelter-in-place then transition based on situation',
        correct: 1
      },
      {
        id: 2,
        title: 'Radiation Monitoring Network Activation',
        desc: 'Measure ambient radiation dose (gamma dose rate); link meteorological data (wind direction/speed) to predict contamination spread; create hotspot maps',
        correct: 2
      },
      {
        id: 3,
        title: 'Stable Iodine (KI) Distribution',
        desc: 'Distribute potassium iodide (KI) and instruct intake to prevent thyroid exposure from radioactive iodine (¹³¹I) inhalation. Priority to under-40s; timing critical (within 24 hours before or after release)',
        correct: 3
      },
      {
        id: 4,
        title: 'ARS Classification and Treatment',
        desc: 'Record symptom onset time to estimate dose (vomiting within 1 hr: high-dose). Blood tests (CBC, absolute lymphocyte count); severity classification (mild/moderate/severe/fatal); prepare for hematopoietic stem cell transplantation',
        correct: 4
      },
      {
        id: 5,
        title: 'External Decontamination and Internal Contamination Assessment',
        desc: 'Undress (clothing removal alone achieves 90% decontamination); soap wash; full-body radiation survey meter check. If radioactive cesium or iodine inhaled: internal contamination assessment (whole-body counter, WBC)',
        correct: 5
      },
      {
        id: 6,
        title: 'Long-term Health Monitoring System Establishment',
        desc: 'Operate long-term thyroid cancer/leukemia/solid tumor follow-up registries. Maintain individual exposure dose records. Build mental health support (radiophobia, stigma) infrastructure. Cooperate with IAEA',
        correct: 6
      }
    ]
  },
  {
    id: 'explosive',
    title: 'Subway Bombing Terrorism',
    type: 'Explosive (E)',
    icon: '💥',
    description: 'An improvised explosive device (IED) detonated at a downtown subway station during rush hour, causing multiple casualties (London 2005-type). Due to the enclosed space, overpressure wave injuries are severe, and a secondary device threat also exists.',
    steps: [
      {
        id: 1,
        title: 'Scene Safety and Secondary Device Check',
        desc: 'EOD confirms absence of secondary devices. Medical personnel prohibited from entry before safety confirmed. Establish Unified Command among police, fire, and medical',
        correct: 1
      },
      {
        id: 2,
        title: 'Zone Establishment and Access Control',
        desc: 'Establish Hot Zone (immediate danger — EOD/fire only) / Warm Zone (medical treatment) / Cold Zone (Triage rear, family waiting/media). Designate single entry/exit route',
        correct: 2
      },
      {
        id: 3,
        title: 'Primary Blast Injury Assessment',
        desc: 'Priority assessment for primary blast injury from pressure wave: lung injury (blast lung — crackles on auscultation), tympanic membrane rupture, bowel rupture symptoms. Patients appearing normal externally still at high risk of internal injury',
        correct: 3
      },
      {
        id: 4,
        title: 'Triage and Classification Zone Operations',
        desc: 'Classify severity with START Triage. Establish RED/YELLOW/GREEN/BLACK zones. High number of inhalation injury patients expected due to enclosed space. Also assess secondary (fragment) and tertiary (blast wind) injuries',
        correct: 4
      },
      {
        id: 5,
        title: 'Damage Control Resuscitation (DCR) and Damage Control Surgery (DCS)',
        desc: 'Damage control resuscitation for exsanguinating patients: 1:1:1 blood products (RBC:FFP:Platelets), early TXA. Treat only immediate life threats then transfer (Damage Control Surgery)',
        correct: 5
      },
      {
        id: 6,
        title: 'Mass Patient Transport Coordination',
        desc: 'Pre-identify hospital capacities (HEMS/regional medical facility coordination). Assign appropriate hospitals by injury type (thoracic trauma, neurological injuries). Mobilize additional transport (buses/specialty vehicles). Operate family identification system',
        correct: 6
      }
    ]
  },
  // ============================================
  // NEW CBRNE SCENARIOS (CBRN Special Disaster)
  // ============================================
  {
    id: 'CB-006',
    type: 'chemical',
    title: 'Nerve Agent Subway Terrorism Response',
    scenario: 'An unidentified liquid was dispersed at a downtown subway station during rush hour, causing more than 50 people to collapse. Nerve agent exposure symptoms including seizures, miosis, and hypersecretion are being reported. The situation is similar to the Tokyo subway sarin attack (1995).',
    icon: '☠️',
    steps: [
      {
        id: 1,
        desc: 'Recognize nerve agent suspicion and immediately issue alert. Confirm SLUDGEM/DUMBELS symptom pattern. Request subway ventilation system shutdown. Approach from upwind side, secure minimum 100m safety distance.',
        options: [
          { id: 'a', text: 'Immediately enter the subway station to begin patient rescue', correct: false },
          { id: 'b', text: 'Confirm SLUDGEM symptom pattern, issue nerve agent alert, approach from upwind side and secure safe distance', correct: true },
          { id: 'c', text: 'Prioritize scene preservation for sample collection', correct: false },
          { id: 'd', text: 'Selectively rescue only symptomatic patients', correct: false },
        ]
      },
      {
        id: 2,
        desc: 'Establish Hot/Warm/Cold Zones and don PPE. Hot Zone (inside subway station): Level A PPE + SCBA required. Warm Zone (around station exits): Set up decontamination line. Cold Zone (300m upwind): Triage, treatment, and command post.',
        options: [
          { id: 'a', text: 'Enter Hot Zone with Level C PPE', correct: false },
          { id: 'b', text: 'Level A PPE in Hot Zone, decontamination line in Warm Zone, command post in Cold Zone', correct: true },
          { id: 'c', text: 'Start treatment immediately at station exit without zone establishment', correct: false },
          { id: 'd', text: 'Halt all activities until specialized HAZMAT team arrives', correct: false },
        ]
      },
      {
        id: 3,
        desc: 'Patient rescue and immediate mass decontamination. Undressing (removes 90% contamination) → mass water wash (Warm Zone) → decontamination confirmation. Guide ambulatory patients to self-decontaminate through the decon line.',
        options: [
          { id: 'a', text: 'Transport directly to hospital without decontamination', correct: false },
          { id: 'b', text: 'Proceed in order: undress → mass water wash → decontamination confirmation; guide ambulatory patients through self-decontamination', correct: true },
          { id: 'c', text: 'Selectively decontaminate critical patients only', correct: false },
          { id: 'd', text: 'Wash all patients with water simultaneously', correct: false },
        ]
      },
      {
        id: 4,
        desc: 'Antidote administration decision. Seizure patients: Atropine 2mg IV repeated (until secretions dry) + 2-PAM 1g IV + Diazepam 10mg IV. Mild exposure (miosis only): Atropine eye drops. Moderate (SLUDGEM): Atropine 2mg IM, repeat as needed.',
        options: [
          { id: 'a', text: 'Administer same Atropine dose to all patients', correct: false },
          { id: 'b', text: 'Wait for substance confirmation test results before antidote administration', correct: false },
          { id: 'c', text: 'Differential dosing of Atropine + 2-PAM + Diazepam by severity; repeat until secretions dry as endpoint', correct: true },
          { id: 'd', text: 'Administer Atropine only; start 2-PAM at hospital', correct: false },
        ]
      },
      {
        id: 5,
        desc: 'Triage of decontaminated patients and hospital transport. Seizure/respiratory failure → RED; SLUDGEM + non-ambulatory → RED; miosis/mild symptoms + ambulatory → YELLOW; asymptomatic exposed → GREEN. Pre-notify hospital via SBAR: agent, patient count, severity, decontamination status.',
        options: [
          { id: 'a', text: 'Classify all exposed persons as RED and transport', correct: false },
          { id: 'b', text: 'Triage by symptom severity; SBAR pre-notification to hospital; confirm decontamination complete before transport', correct: true },
          { id: 'c', text: 'Direct ambulatory patients to visit hospital on their own', correct: false },
          { id: 'd', text: 'Transport all to the single nearest hospital', correct: false },
        ]
      },
    ],
    debrief: 'In the 1995 Tokyo subway sarin attack, lack of on-site decontamination caused secondary contamination at hospitals. Key lessons: ① Scene safety before patient rescue (no entry without PPE), ② Undressing alone achieves 90% decontamination, ③ Atropine repeated until secretions dry (up to tens of mg possible), ④ 2-PAM must be given early before "aging", ⑤ Pre-notify hospitals to prevent secondary contamination.'
  },
  {
    id: 'CB-007',
    type: 'radiological',
    title: 'Dirty Bomb (RDD) Harbor Explosion Response',
    scenario: 'An improvised explosive device containing radioactive material (dirty bomb/Radiological Dispersal Device) exploded at an international seaport. Blast injury victims and radioactively contaminated individuals are intermixed; approximately 80 port workers and civilians were affected. Radiation survey meters are detecting above-normal readings.',
    icon: '☢️',
    steps: [
      {
        id: 1,
        desc: 'Recognize radiation threat and establish zones. Determine contamination extent using radiation survey meter. Apply time-distance-shielding principle. Establish Hot Zone (high-dose area) / Warm Zone (decontamination zone) / Cold Zone (safe zone).',
        options: [
          { id: 'a', text: 'Apply standard explosion response protocol only since it is a blast', correct: false },
          { id: 'b', text: 'After radiation measurement, establish zones using time-distance-shielding principle, considering wind direction', correct: true },
          { id: 'c', text: 'Issue total area evacuation order then begin response', correct: false },
          { id: 'd', text: 'Wait at scene until radiation specialist team arrives', correct: false },
        ]
      },
      {
        id: 2,
        desc: 'Prioritize treatment of blast injuries (life threats first). IAEA principle: treat life-threatening trauma first even if radioactively contaminated. "A contaminated patient is not a dangerous patient — they are a patient who needs treatment".',
        options: [
          { id: 'a', text: 'Defer all medical treatment until decontamination is complete', correct: false },
          { id: 'b', text: 'Treat life-threatening trauma first regardless of radioactive contamination status', correct: true },
          { id: 'c', text: 'Treat radioactively contaminated patients only in a separate area', correct: false },
          { id: 'd', text: 'Treat patients with highest contamination readings first', correct: false },
        ]
      },
      {
        id: 3,
        desc: 'Perform decontamination. Undress (removes 90% contamination) → wash entire body with soap and water → confirm residual contamination with radiation survey. Irrigate contaminated wounds with normal saline. Assess internal contamination (whole-body counter).',
        options: [
          { id: 'a', text: 'Wash with specialized chemical decontaminant', correct: false },
          { id: 'b', text: 'Undress → soap/water wash → survey check; irrigate contaminated wounds with normal saline', correct: true },
          { id: 'c', text: 'Water wash alone is sufficient; survey not necessary', correct: false },
          { id: 'd', text: 'Scrub skin vigorously to remove contamination', correct: false },
        ]
      },
      {
        id: 4,
        desc: 'Assess ARS risk and classify. Record time to emesis (TTE): <1h = high dose, 1-4h = moderate, >6h = low dose. Serial CBC/lymphocyte tracking every 4 hours. Suspected high dose → RED.',
        options: [
          { id: 'a', text: 'Classify using radiation dosimeter reading alone', correct: false },
          { id: 'b', text: 'Record TTE + serial CBC tracking to estimate exposure dose and classify', correct: true },
          { id: 'c', text: 'Admit all exposed persons for uniform inpatient observation', correct: false },
          { id: 'd', text: 'Immediately discharge asymptomatic exposed persons', correct: false },
        ]
      },
      {
        id: 5,
        desc: 'Psychosocial response and public communication. The greatest threat of a dirty bomb is psychological fear rather than radiation itself. Provide accurate information to prevent panic. Maintain exposed person registry and establish long-term follow-up system.',
        options: [
          { id: 'a', text: 'Minimize radiation risk in public announcement', correct: false },
          { id: 'b', text: 'Transparent and accurate information disclosure; establish exposed person registry and long-term follow-up system', correct: true },
          { id: 'c', text: 'Withhold information until test results are available', correct: false },
          { id: 'd', text: 'Provide only technical explanations understandable to experts', correct: false },
        ]
      },
    ],
    debrief: 'A dirty bomb (RDD) poses greater threats through psychological fear, economic disruption, and urban paralysis than actual radiation health effects. IAEA core principle: "Treat radioactively contaminated patients with life threats first, same as any trauma patient". Undressing achieves 90% decontamination; TTE is the fastest indicator of radiation dose. Transparency in crisis communication is key to preventing panic.'
  },
  {
    id: 'CB-008',
    type: 'biological',
    title: 'Suspected Biological Disaster — Suspected Anthrax White Powder',
    scenario: 'A suspicious package containing white powder was found at a downtown government building. Three employees have already been directly exposed to the powder, and approximately 200 people were in the same building. Epidemiological response per the SEIRV model and medical response are simultaneously required.',
    icon: '🦠',
    steps: [
      {
        id: 1,
        desc: 'Apply Identify-Isolate-Inform (3I) principle. Recognize biological threat → immediate scene isolation (containment) → shut down HVAC → notify health authorities. Prohibit exposed persons from moving; begin roster compilation.',
        options: [
          { id: 'a', text: 'Collect the powder and bring it to the nearest hospital', correct: false },
          { id: 'b', text: 'Scene isolation + HVAC shutdown + health authority notification + exposed persons list compilation', correct: true },
          { id: 'c', text: 'Issue immediate full building evacuation order', correct: false },
          { id: 'd', text: 'Maintain normal operations until powder composition is confirmed', correct: false },
        ]
      },
      {
        id: 2,
        desc: 'Sample collection and analysis. HAZMAT team collects samples wearing Level B PPE. Rapid field testing (lateral flow assay) + PCR laboratory submission. Respond assuming worst-case scenario (anthrax) until results confirmed.',
        options: [
          { id: 'a', text: 'Collect samples with ordinary gloves and send to laboratory', correct: false },
          { id: 'b', text: 'HAZMAT team collects samples with Level B PPE; begin response assuming anthrax', correct: true },
          { id: 'c', text: 'Wait for test results before deciding on response', correct: false },
          { id: 'd', text: 'Have exposed persons collect and submit their own samples', correct: false },
        ]
      },
      {
        id: 3,
        desc: 'Decontaminate exposed persons and administer prophylactic antibiotics. Direct exposures: undress → soap/water wash → immediately start Ciprofloxacin 500mg PO or Doxycycline 100mg PO. Indirect exposures (same space): start antibiotics; adjust based on test results.',
        options: [
          { id: 'a', text: 'Decide on antibiotics after confirming test results', correct: false },
          { id: 'b', text: 'Decontaminate direct exposures + immediate prophylactic Ciprofloxacin/Doxycycline; also start antibiotics for indirect exposures', correct: true },
          { id: 'c', text: 'Antibiotics for direct exposures only; indirect exposures start when symptomatic', correct: false },
          { id: 'd', text: 'Broad-spectrum antibiotic (Vancomycin) IV administration', correct: false },
        ]
      },
      {
        id: 4,
        desc: 'Epidemiological investigation and contact tracing. SEIRV model: Susceptible → Exposed → Infected → Recovered/Vaccinated. Record exposure time, distance, and mode. Build symptom monitoring system for incubation period (1-60 days).',
        options: [
          { id: 'a', text: 'Hospitalize and isolate all exposed persons', correct: false },
          { id: 'b', text: 'SEIRV model-based contact tracing; record exposure details; build incubation period symptom monitoring system', correct: true },
          { id: 'c', text: 'Track direct exposures only; exclude indirect exposures', correct: false },
          { id: 'd', text: 'Immediately vaccinate all contacts', correct: false },
        ]
      },
      {
        id: 5,
        desc: 'Complete long-term follow-up and preventive measures. If anthrax confirmed: 60-day prophylactic antibiotics + 3 AVA vaccine doses. Regular health check-ups. Operate psychological support program. Maintain observation period even if test negative.',
        options: [
          { id: 'a', text: 'Discontinue after 7 days of antibiotics', correct: false },
          { id: 'b', text: '60-day antibiotics + 3 AVA vaccines + regular check-ups + psychological support; maintain observation even if test negative', correct: true },
          { id: 'c', text: 'Vaccination only; discontinue antibiotics', correct: false },
          { id: 'd', text: 'Lift all measures 1 week later if asymptomatic', correct: false },
        ]
      },
    ],
    debrief: 'Key lessons from the 2001 US anthrax mail attacks: ① Biological threats are hard to recognize early — apply "if suspected, respond immediately" principle, ② Anthrax spores survive for decades so environmental decontamination is critical, ③ Managing adherence to 60-day prophylactic antibiotics is a challenge, ④ Information transparency is key to preventing panic and securing cooperation. Remember the Identify-Isolate-Inform (3I) principle.'
  },
  {
    id: 'CB-009',
    type: 'explosive',
    title: 'Industrial Dust Explosion + Mass Burn Patient Response',
    scenario: 'A dust explosion occurred at a large grain storage facility. Following the primary explosion, chain explosions caused partial building collapse, injuring over 60 workers with blast injuries and extensive burns. Due to the enclosed space, primary blast injury (blast lung) is expected to be prevalent.',
    icon: '💥',
    steps: [
      {
        id: 1,
        desc: 'Secure scene safety and assess additional explosion risk. Dust explosions carry very high risk of secondary chain explosions. Cooperate with EOD/fire service to confirm additional dust accumulation. No medical personnel entry until safety confirmed.',
        options: [
          { id: 'a', text: 'Immediately enter the building and begin rescue', correct: false },
          { id: 'b', text: 'Cooperate with fire/EOD to assess secondary explosion risk; staged entry after safety confirmation', correct: true },
          { id: 'c', text: 'Only guide self-evacuation by loudspeaker from a distance', correct: false },
          { id: 'd', text: 'Judge that 30 minutes post-explosion means no additional risk', correct: false },
        ]
      },
      {
        id: 2,
        desc: 'Systematic 5-type blast injury assessment. Primary (pressure wave → blast lung, tympanic membrane rupture, bowel rupture); Secondary (fragments/debris); Tertiary (body thrown and impacted); Quaternary (burns/asphyxia); Quinary (contaminants). Primary injury frequency increases in enclosed spaces.',
        options: [
          { id: 'a', text: 'Assess only visibly apparent injuries', correct: false },
          { id: 'b', text: 'Systematically assess all 5 blast injury types (Primary through Quinary); especially watch for blast lung patients appearing normal externally', correct: true },
          { id: 'c', text: 'Priority assessment for burn patients only', correct: false },
          { id: 'd', text: 'Perform tympanic membrane examination at hospital', correct: false },
        ]
      },
      {
        id: 3,
        desc: 'Burn patient triage and initial treatment. Calculate TBSA using Rule of Nines. Confirm 3 signs of inhalation injury (singed nasal hairs, hoarse voice, sooty sputum). Begin Parkland formula fluid resuscitation (4mL × kg × %TBSA). Decide on early intubation.',
        options: [
          { id: 'a', text: 'Apply cold water only to burn areas', correct: false },
          { id: 'b', text: 'Calculate TBSA by Rule of Nines; confirm inhalation injury signs; Parkland formula fluid resuscitation; early intubation if needed', correct: true },
          { id: 'c', text: 'Treat all burn patients identically', correct: false },
          { id: 'd', text: 'Apply burn ointment then transport', correct: false },
        ]
      },
      {
        id: 4,
        desc: 'Management of suspected blast lung patients. Bilateral crackles on auscultation, bloody sputum, hypoxia. Administer high-flow oxygen but use caution with positive pressure ventilation (risk of worsening pneumothorax). Prepare for chest tube insertion. 24-hour observation mandatory even for patients appearing normal externally.',
        options: [
          { id: 'a', text: 'Discharge if symptoms improve after oxygen administration', correct: false },
          { id: 'b', text: 'High-flow oxygen + caution with positive pressure ventilation + chest tube insertion readiness; 24-hour observation even if externally normal', correct: true },
          { id: 'c', text: 'Immediately start positive pressure mechanical ventilation', correct: false },
          { id: 'd', text: 'Rule out blast lung if no tympanic membrane rupture', correct: false },
        ]
      },
      {
        id: 5,
        desc: 'Distributed transport of mass burn patients. Confirm burn center capacity; transport severe burns (>20% TBSA) directly to burn center. Distribute patients according to each hospital\'s capacity. Continue fluid, analgesia, and temperature management during transport.',
        options: [
          { id: 'a', text: 'Transport all to the nearest hospital', correct: false },
          { id: 'b', text: 'Confirm burn center capacity then distribute transport by severity; continue fluid, analgesia, and temperature management during transport', correct: true },
          { id: 'c', text: 'Transport all patients to burn center only', correct: false },
          { id: 'd', text: 'Discharge minor burn patients after on-scene treatment', correct: false },
        ]
      },
    ],
    debrief: 'Characteristics of industrial dust explosions: ① Very high secondary explosion risk — scene safety check is paramount, ② Primary blast injury (blast lung) frequency in enclosed spaces is several times higher than open spaces, ③ Burns + blast injury combined patients have severity exceeding arithmetic sum, ④ Blast lung patients appearing normal can deteriorate sharply hours later — delayed reassessment essential, ⑤ When burn center capacity is exceeded, distribution to non-burn centers is unavoidable; remote burn specialist consultation is useful.'
  },
  {
    id: 'CB-010',
    type: 'chemical',
    title: 'Crush Syndrome — Earthquake Burial Victim Rescue',
    scenario: 'A magnitude 7.0 earthquake caused a multi-story building to collapse, with multiple survivors buried in the rubble. Rescue teams have found a victim with lower extremity compression for over 4 hours. Improper rescue can cause immediate cardiac arrest — a high-risk Crush Syndrome situation.',
    icon: '🏚️',
    steps: [
      {
        id: 1,
        desc: 'Assess buried victim and evaluate Crush Syndrome risk. Compression time ≥4 hours, large muscle group (lower extremity/gluteal) compression → high Crush Syndrome risk. Medical team must be deployed on-site before rescue. Jointly assess additional collapse risk with structural safety engineer.',
        options: [
          { id: 'a', text: 'Immediately remove debris for rapid rescue', correct: false },
          { id: 'b', text: 'Confirm compression time and location; deploy medical team on-site; jointly assess risk with structural safety engineer; then formulate rescue plan', correct: true },
          { id: 'c', text: 'Begin treatment at hospital after rescue', correct: false },
          { id: 'd', text: 'Short compression time means no risk; proceed directly to rescue', correct: false },
        ]
      },
      {
        id: 2,
        desc: 'Initiate pre-rescue fluid bolus. Start normal saline 1–1.5 L/hr IV before compression release. Goal: maintain urine output 200–300 mL/hr. Attach cardiac monitor (monitor for hyperkalemia). Add sodium bicarbonate if possible (urine alkalinization).',
        options: [
          { id: 'a', text: 'Begin IV fluids after rescue', correct: false },
          { id: 'b', text: 'Before rescue: normal saline 1–1.5 L/hr + cardiac monitor + sodium bicarbonate preparation', correct: true },
          { id: 'c', text: 'Administer dextrose solution', correct: false },
          { id: 'd', text: 'Apply tourniquet without fluids then rescue', correct: false },
        ]
      },
      {
        id: 3,
        desc: 'Compression release and immediate monitoring. On release, toxins (K⁺, myoglobin, lactate) are released into systemic circulation. Continuous ECG monitoring (hyperkalemia → arrhythmia → cardiac arrest). Confirm dark brown urine (myoglobinuria). Immediate Calcium gluconate IV if abnormal.',
        options: [
          { id: 'a', text: 'Only measure vital signs after compression release', correct: false },
          { id: 'b', text: 'Simultaneously with compression release: intensive ECG monitoring, confirm myoglobinuria, immediate Calcium gluconate IV if abnormal', correct: true },
          { id: 'c', text: 'Observation only until stable after compression release', correct: false },
          { id: 'd', text: 'Elevate lower extremities simultaneously with compression release', correct: false },
        ]
      },
      {
        id: 4,
        desc: 'Crush Syndrome complication management. Acute renal failure (tubular necrosis from myoglobin) → aggressive fluids + urine alkalinization. Hyperkalemia → Calcium gluconate + insulin/glucose + Kayexalate. Compartment syndrome → consider fasciotomy.',
        options: [
          { id: 'a', text: 'Restrict fluids when signs of renal failure appear', correct: false },
          { id: 'b', text: 'Aggressive fluids + urine alkalinization + hyperkalemia treatment + fasciotomy for compartment syndrome', correct: true },
          { id: 'c', text: 'Administer analgesics then observe course', correct: false },
          { id: 'd', text: 'Treatment impossible without dialysis equipment', correct: false },
        ]
      },
      {
        id: 5,
        desc: 'Field dialysis and transport decision. Start portable field dialysis immediately if available. If not, emergency transport to a dialysis-capable hospital. Reassess severity using REMS (Rapid Emergency Medicine Score). Determine rescue priority order when multiple victims are buried.',
        options: [
          { id: 'a', text: 'Transport all patients to the nearest hospital', correct: false },
          { id: 'b', text: 'Start field dialysis if possible; if not, emergency transport to dialysis-capable hospital; REMS for severity reassessment', correct: true },
          { id: 'c', text: 'Transport minor patients only; treat critical on-scene', correct: false },
          { id: 'd', text: 'Can be managed with fluids alone without dialysis', correct: false },
        ]
      },
    ],
    debrief: 'Crush Syndrome is a paradoxical situation where "rescue marks the beginning of the crisis". Key lessons: ① Pre-rescue fluid bolus determines life or death (prevents cardiac arrest from K⁺ release), ② Myoglobinuria (dark brown urine) is a warning sign of renal failure, ③ Fluid goal: urine output 200–300 mL/hr, ④ Early fluid administration for crush syndrome patients dramatically reduced mortality in the 1995 Kobe earthquake and 2023 Turkey earthquake. Disaster medical teams must have IV fluids and cardiac monitors ready at burial rescue sites.'
  },

];

const MCI_SCENARIOS = [
  {
    title: 'Subway Collision Accident',
    description: 'Two subway trains collide during rush hour; approximately 200 passengers affected',
    totalPatients: 47,
    resources: {
      ambulances: { total: 8, label: 'Ambulances' },
      doctors: { total: 5, label: 'Field Physicians' },
      helicopters: { total: 2, label: 'Medical Helicopters' },
      hospitals: { total: 3, label: 'Receiving Hospitals' }
    },
    zones: { red: 12, yellow: 15, green: 14, black: 6 },
    decisions: [
      {
        question: 'How will you determine patient transport priority in the underground scene?',
        options: [
          { id: 'a', text: 'Transport all RED patients to the surface first', correct: false },
          { id: 'b', text: 'Evacuate ambulatory GREEN patients first, then transport RED patients', correct: true },
          { id: 'c', text: 'Transport in order of discovery', correct: false },
          { id: 'd', text: 'Attempt to transport all patients simultaneously including BLACK', correct: false }
        ],
        explanation: 'In MCI, the principle is to evacuate GREEN (ambulatory) patients first to reduce scene congestion and secure space to focus on RED patient treatment.'
      },
      {
        question: '12 RED patients must be transported with 8 ambulances. Which strategy is most appropriate?',
        options: [
          { id: 'a', text: 'Transport 1 patient per ambulance; 4 patients wait', correct: false },
          { id: 'b', text: 'Transport all to the single nearest hospital', correct: false },
          { id: 'c', text: 'Distribute transport among 3 available hospitals; assign hospitals by severity', correct: true },
          { id: 'd', text: 'Use 2 medical helicopters to transport to distant major hospital', correct: false }
        ],
        explanation: 'In resource-limited situations, distributing patient transport across receiving hospitals is key. Concentrating at one hospital causes hospital overload.'
      },
      {
        question: 'When establishing an Incident Command System (ICS) on scene, what must be done first?',
        options: [
          { id: 'a', text: 'Prepare media briefing', correct: false },
          { id: 'b', text: 'Designate Incident Commander (IC) and establish command post', correct: true },
          { id: 'c', text: 'Request additional ambulances', correct: false },
          { id: 'd', text: 'Begin patient transport', correct: false }
        ],
        explanation: 'The first step in ICS (Incident Command System) is designating the Incident Commander and establishing a command post. Without a clear command structure, resource allocation and communication fall into chaos.'
      }
    ]
  },
  // ============================================
  // NEW MCI SCENARIOS
  // ============================================
  {
    title: 'Multi-story Building Collapse',
    description: 'Department store parking structure upper collapse (Sampoong/Mauna Resort type). Multiple persons buried in multi-story rubble; rescue equipment and medical resources both at limits.',
    totalPatients: 65,
    resources: {
      ambulances: { total: 10, label: 'Ambulances' },
      doctors: { total: 6, label: 'Field Physicians' },
      helicopters: { total: 3, label: 'Medical Helicopters' },
      hospitals: { total: 4, label: 'Receiving Hospitals' },
      rescueTeams: { total: 5, label: 'Rescue Teams' },
      engineers: { total: 2, label: 'Structural Safety Engineers' }
    },
    zones: { red: 18, yellow: 22, green: 17, black: 8 },
    decisions: [
      {
        question: 'Rescue order of survivors in collapse debris must be determined. The structural safety engineer warned of "possible additional collapse." How do you respond?',
        options: [
          { id: 'a', text: 'Ignore additional collapse warning; proceed with rescue immediately', correct: false },
          { id: 'b', text: 'Halt all rescue operations; wait until safety evaluation complete', correct: false },
          { id: 'c', text: 'Cooperate with structural safety engineer; prioritize rescue in safe areas + continuous monitoring', correct: true },
          { id: 'd', text: 'Increase personnel by deploying volunteers', correct: false }
        ],
        explanation: 'At building collapse scenes, cooperation with a structural engineer is essential. Additional collapse risk threatens rescuer safety; the best strategy is to identify dangerous areas while rescuing from safe zones first. Ignoring safety causes additional rescuer casualties; complete halt misses the Golden Hour.'
      },
      {
        question: 'A patient with >4 hours of lower extremity compression in debris has been found. What priority action should the medical team take before rescue?',
        options: [
          { id: 'a', text: 'Rescue immediately and rapidly transport to hospital', correct: false },
          { id: 'b', text: 'Start IV fluids (normal saline) before rescue; attach cardiac monitor', correct: true },
          { id: 'c', text: 'Administer analgesics then rescue', correct: false },
          { id: 'd', text: 'Measure vital signs after rescue', correct: false }
        ],
        explanation: 'Crush Syndrome occurs when muscle necrosis products (K⁺, myoglobin) are acutely released into the bloodstream upon compression release during rescue, causing cardiac arrest and acute renal failure. Pre-rescue fluid bolus initiation (normal saline 1–1.5 L/hr) and cardiac monitoring are mandatory. The principle is "rescue = start of medical treatment".'
      },
      {
        question: 'One of the 4 nearby hospitals (Level 1 trauma center) has reached capacity due to patient concentration. How will you adjust your transport strategy?',
        options: [
          { id: 'a', text: 'Continue transporting all RED patients to the Level 1 center', correct: false },
          { id: 'b', text: 'Stop trauma center transport; distribute evenly among remaining 3 hospitals', correct: false },
          { id: 'c', text: 'Inter-hospital coordination to reconfirm trauma center capacity; redirect YELLOW patients to other hospitals', correct: true },
          { id: 'd', text: 'Switch to transferring to distant tertiary hospital', correct: false }
        ],
        explanation: 'Hospital overload actually reduces overall response capacity. The optimal strategy is for Level 1 center to handle the most critical RED patients while redirecting stable YELLOW patients to nearby hospitals. Real-time inter-hospital communication (HICS) is essential for this.'
      }
    ]
  },
  {
    title: 'Chemical Plant Explosion and Toxic Gas Release',
    description: 'Gumi-type chemical plant explosion. Toxic substances including hydrogen fluoride (HF) released; damage spreading with the wind. Combined casualties among factory workers and nearby residents.',
    totalPatients: 38,
    resources: {
      ambulances: { total: 7, label: 'Ambulances' },
      doctors: { total: 4, label: 'Field Physicians' },
      helicopters: { total: 2, label: 'Medical Helicopters' },
      hospitals: { total: 3, label: 'Receiving Hospitals' },
      hazmat: { total: 2, label: 'HAZMAT Teams' },
      fireEngines: { total: 6, label: 'Fire Trucks' }
    },
    zones: { red: 10, yellow: 14, green: 10, black: 4 },
    decisions: [
      {
        question: 'On arrival, the wind direction is northeast. Where is the appropriate location for the medical command post and Triage zone?',
        options: [
          { id: 'a', text: 'In front of the factory main gate (closest location)', correct: false },
          { id: 'b', text: 'Northeast of the factory (downwind side)', correct: false },
          { id: 'c', text: 'Southwest of the factory (upwind side, opposite direction from wind)', correct: true },
          { id: 'd', text: 'Inside the factory building', correct: false }
        ],
        explanation: 'In toxic gas incidents, the medical command post and treatment zone must be established on the upwind side (opposite direction from the wind). If placed downwind, both medical staff and undecontaminated patients receive secondary gas exposure. Wind direction/speed is continuously confirmed via real-time links with fire departments and meteorological services.'
      },
      {
        question: 'Multiple patients with hydrogen fluoride (HF) skin exposure have arrived. What key information must be communicated to hospital emergency departments before decontamination?',
        options: [
          { id: 'a', text: 'Notify only patient count and estimated arrival time', correct: false },
          { id: 'b', text: 'Notify all of: exposure agent (HF), patient count, severity, decontamination status, antidote requirements', correct: true },
          { id: 'c', text: 'No separate notification needed as hospital will prepare independently', correct: false },
          { id: 'd', text: 'Explain situation after patient arrival', correct: false }
        ],
        explanation: 'HF exposure patients require calcium gluconate gel/injection preparation, isolation rooms, and specialized decontamination space in the emergency department. Arrival of undecontaminated HF patients without prior notification causes secondary contamination of staff and the ED. SBAR-format pre-notification including exposure agent, severity, and decontamination status is essential.'
      },
      {
        question: 'Nearby village residents complaining of eye, throat, and skin irritation are self-converging on scene. What is the priority action for the medical team on scene?',
        options: [
          { id: 'a', text: 'Begin emergency treatment for all converging residents immediately', correct: false },
          { id: 'b', text: 'Guide residents to upwind assembly point; classify and treat by symptom severity after Triage', correct: true },
          { id: 'c', text: 'Minor symptoms — instruct to wait at home', correct: false },
          { id: 'd', text: 'Immediately transport all to nearby hospital', correct: false }
        ],
        explanation: 'Affected residents self-converging must go through Triage before emergency treatment. Establish upwind safe assembly point; GREEN patients observe after decontamination; RED/YELLOW receive treatment then hospital transport. Uncontrolled convergence worsens scene chaos and causes medical staff burnout.'
      }
    ]
  },
  {
    title: 'Pandemic Medical Bed Crisis',
    description: 'COVID-19-type pandemic surge. National hospital ICU occupancy exceeds 95%; emergency department overcrowding severe. Regional hospital decision to switch medical Standards of Care required.',
    totalPatients: 120,
    resources: {
      icuBeds: { total: 8, label: 'Available ICU Beds' },
      ventilators: { total: 6, label: 'Available Ventilators' },
      doctors: { total: 12, label: 'Medical Staff' },
      nurses: { total: 24, label: 'Nursing Staff' },
      makeShift: { total: 1, label: 'Temporary Treatment Center' }
    },
    zones: { red: 22, yellow: 45, green: 48, black: 5 },
    decisions: [
      {
        question: 'The ICU is completely saturated. What Standards of Care should currently be applied?',
        options: [
          { id: 'a', text: 'Conventional Standards: individual optimal treatment same as normal times', correct: false },
          { id: 'b', text: 'Contingency Standards: some modifications allowed; effort to maintain same-level outcomes', correct: false },
          { id: 'c', text: 'Crisis Standards of Care: resource allocation for greatest number survival overall', correct: true },
          { id: 'd', text: 'Maintain first-come-first-served principle without resource allocation', correct: false }
        ],
        explanation: 'When medical demand significantly exceeds resources, transition to Crisis Standards of Care is unavoidable. This principle allocates resources toward "the greatest good for the greatest number" rather than individual optimal treatment. This transition must be transparently decided on legal and ethical grounds.'
      },
      {
        question: '12 patients need the available 6 ventilators. Which method of allocation priority decision is most ethical and practical?',
        options: [
          { id: 'a', text: 'Age criterion: younger patients first', correct: false },
          { id: 'b', text: 'First-come-first-served: first arrived patient first', correct: false },
          { id: 'c', text: 'Survival probability-based scoring (SOFA score, etc.) + ethics committee review', correct: true },
          { id: 'd', text: 'Decision by individual physician judgment', correct: false }
        ],
        explanation: 'Ventilator allocation under Crisis Standards must be based on medical survival probability scores (SOFA — Sequential Organ Failure Assessment, etc.) rather than simple age or first-come-first-served. Ethics committee review and transparent procedures protect medical staff and maintain social trust.'
      },
      {
        question: 'While operating a temporary treatment center for mild patients, medical staff resist saying "this is not our job." How do you respond as a leader?',
        options: [
          { id: 'a', text: 'Respect medical staff wishes and discontinue center operations', correct: false },
          { id: 'b', text: 'Force assignment by order', correct: false },
          { id: 'c', text: 'Explain crisis medicine goals and individual roles; provide concrete rotation schedule and support systems', correct: true },
          { id: 'd', text: 'Replace with volunteers', correct: false }
        ],
        explanation: 'Medical staff resistance in crisis situations stems from fear, burnout, and lack of information. Transparent goal sharing, clear role assignment, and protective resources (PPE, rotation cycles) are more effective than coercion. TeamSTEPPS leadership principle: creating a psychologically safe environment improves team performance.'
      }
    ]
  },
  {
    title: 'Itaewon-type Crowd Crush Incident',
    description: 'Crowd crush in a narrow alley with over 100,000 people gathered for Halloween. Multiple cardiac arrest patients; chaotic scene with police, fire, and medical responding.',
    totalPatients: 85,
    resources: {
      ambulances: { total: 12, label: 'Ambulances' },
      doctors: { total: 8, label: 'Field Physicians' },
      helicopters: { total: 2, label: 'Medical Helicopters' },
      hospitals: { total: 5, label: 'Receiving Hospitals' },
      police: { total: 30, label: 'Police Personnel' },
      bystanders: { total: 200, label: 'Volunteer Bystanders' }
    },
    zones: { red: 30, yellow: 25, green: 20, black: 10 },
    decisions: [
      {
        question: 'Police, fire, and medical teams are intermingled on scene, each issuing different instructions. What is the first action to resolve command chaos?',
        options: [
          { id: 'a', text: 'First-arrived agency continues in command', correct: false },
          { id: 'b', text: 'Police, fire, and medical representatives convene to determine Unified Commander and consolidate command post', correct: true },
          { id: 'c', text: 'Each agency operates independently; coordinate later', correct: false },
          { id: 'd', text: 'Wait until instructions arrive from central operations center', correct: false }
        ],
        explanation: 'A single Unified Command (the core of ICS) is essential in large-scale incidents involving multiple agencies. Command chaos causes duplicated resources, blind spots, and communication errors. One of the key lessons from the Itaewon tragedy was the absence of an initial command structure.'
      },
      {
        question: 'More than 30 cardiac arrest patients have occurred. What is the most effective resource allocation when on-scene CPR personnel are insufficient?',
        options: [
          { id: 'a', text: 'Only professional medical personnel perform CPR; prohibit general public access', correct: false },
          { id: 'b', text: 'Deploy professional medical personnel as CPR group leaders; immediately train and deploy on-scene bystanders as CPR assistants', correct: true },
          { id: 'c', text: 'Classify all cardiac arrest patients BLACK until CPR personnel arrive', correct: false },
          { id: 'd', text: 'Concentrate all resources on one patient', correct: false }
        ],
        explanation: 'In mass cardiac arrest situations, professionals alone cannot respond adequately. Using bystanders as immediate CPR assistants (Bystander CPR) with professional medical personnel as group leaders maximizes survival. Locating and distributing AEDs should proceed simultaneously.'
      },
      {
        question: 'Families of victims are converging on scene and interfering with rescue operations. How do you manage this situation?',
        options: [
          { id: 'a', text: 'Forcibly remove with police', correct: false },
          { id: 'b', text: 'Allow families to enter', correct: false },
          { id: 'c', text: 'Establish Family Assistance Center outside scene; provide regular information updates', correct: true },
          { id: 'd', text: 'Disclose situation to media to encourage voluntary withdrawal', correct: false }
        ],
        explanation: 'Family entry to scene interferes with rescue and causes secondary casualties. Establishing a Family Assistance Center to systematically provide regular information, psychological support, and identification confirmation is optimal. This is the reinforced disaster response standard following the Itaewon tragedy.'
      }
    ]
  },
  // ============================================
  // NEW MCI SCENARIOS (CBRN/Special Disaster)
  // ============================================
  {
    title: 'Subway Nerve Agent Chemical Terrorism',
    situation: 'An unidentified liquid was dispersed at a downtown subway station during rush hour, causing 50 people to collapse. Patients with seizures, hypersecretion, and ambulatory eye pain patients are intermixed. Response must be conducted with 1 HAZMAT team, 6 ambulances, and 3 medical personnel.',
    totalPatients: 50,
    resources: {
      ambulances: { total: 6, label: 'Ambulances' },
      doctors: { total: 3, label: 'Field Physicians' },
      hazmat: { total: 1, label: 'HAZMAT Teams' },
      hospitals: { total: 3, label: 'Receiving Hospitals' },
      antidoteKits: { total: 30, label: 'Atropine Kits' },
    },
    zones: { red: 8, yellow: 15, green: 22, black: 5 },
    decisions: [
      {
        question: 'Patients are continuing to emerge from the subway station on your arrival. What is the first action to perform?',
        options: [
          { id: 'a', text: 'Immediately enter the station interior to rescue patients', feedback: 'Entering without PPE makes medical personnel additional patients. Scene safety is the top priority.', correct: false },
          { id: 'b', text: 'Establish Hot/Warm/Cold Zones and upwind command post; staged entry after donning PPE', feedback: 'Zone establishment and PPE securing are top priority at CBRN scenes. No safety, no rescue.', correct: true },
          { id: 'c', text: 'Begin treatment with ambulatory patients first', feedback: 'Patient contact before decontamination risks secondary contamination.', correct: false },
          { id: 'd', text: 'Prioritize sample collection for substance identification', feedback: 'Patient safety and medical response take priority over substance identification.', correct: false },
        ],
      },
      {
        question: '50 patients must be managed with 30 Atropine kits. What is the antidote allocation strategy?',
        options: [
          { id: 'a', text: 'Distribute 1 kit to every exposed person', feedback: '30 kits cannot cover all 50 people. Critical patients require multiple kits.', correct: false },
          { id: 'b', text: 'Priority multiple dosing for seizure+respiratory failure patients; minor exposures get eye drops/observation', feedback: 'Severe nerve agent exposure may require tens of mg of Atropine. Differential allocation by severity is key.', correct: true },
          { id: 'c', text: 'First-come-first-served administration', feedback: 'First-come-first-served prevents antidote from reaching patients who need it most.', correct: false },
          { id: 'd', text: 'Defer administration until additional antidotes arrive', feedback: 'Missing the Golden Hour for nerve agent poisoning causes a sharp rise in mortality.', correct: false },
        ],
      },
      {
        question: 'A patient whose decontamination is not complete is in respiratory arrest. What is the hospital transport decision?',
        options: [
          { id: 'a', text: 'Transport after decontamination complete', feedback: 'Waiting for decontamination with a respiratory arrest patient means death.', correct: false },
          { id: 'b', text: 'Perform improvised decontamination (undress + water wash) → simultaneously administer Atropine and secure airway → confirm decontamination then transport; pre-notify hospital of possible incomplete decontamination', feedback: 'For life threats, improvised decontamination and treatment proceed simultaneously; always pre-notify the hospital.', correct: true },
          { id: 'c', text: 'Transport to hospital immediately in undecontaminated state', feedback: 'Transporting an undecontaminated patient without notification causes secondary hospital contamination.', correct: false },
          { id: 'd', text: 'Classify Black due to resource shortage', feedback: 'Giving up on a patient who can be treated with available resources is not appropriate.', correct: false },
        ],
      },
    ]
  },
  {
    title: 'Dirty Bomb (RDD) Harbor Explosion Response',
    situation: 'A dirty bomb (radiological dispersal device) exploded at an international seaport, injuring 80 people. Blast trauma and radioactive contamination are intermixed; port workers and nearby citizens were affected. Radiation survey meters are detecting high readings.',
    totalPatients: 80,
    resources: {
      ambulances: { total: 10, label: 'Ambulances' },
      doctors: { total: 5, label: 'Field Physicians' },
      helicopters: { total: 2, label: 'Medical Helicopters' },
      hospitals: { total: 4, label: 'Receiving Hospitals' },
      radiationTeam: { total: 2, label: 'Radiation Specialist Teams' },
    },
    zones: { red: 15, yellow: 25, green: 32, black: 8 },
    decisions: [
      {
        question: 'A patient with massive hemorrhage on scene is also radioactively contaminated. What is the treatment priority?',
        options: [
          { id: 'a', text: 'Treat hemorrhage after decontamination complete', feedback: 'Life-threatening trauma must be treated immediately regardless of radioactive contamination.', correct: false },
          { id: 'b', text: 'Treat life-threatening trauma first (hemorrhage control, airway), simultaneously decontaminate within feasible range', feedback: 'IAEA principle: treat life-threatening trauma immediately even in radioactively contaminated patients. Contaminated patients are not dangerous patients.', correct: true },
          { id: 'c', text: 'Wait until radiation level decreases', feedback: 'Misses the Golden Hour for hemorrhaging patients.', correct: false },
          { id: 'd', text: 'Transport radioactively contaminated patients to specialized facilities only', feedback: 'For life threats, the principle is transport to the nearest appropriate hospital.', correct: false },
        ],
      },
      {
        question: 'Hundreds of citizens near the explosion scene are panicking, saying "I am radioactively contaminated." How do you respond?',
        options: [
          { id: 'a', text: 'Reassure them "there is no radiation risk"', feedback: 'False reassurance in uncertain situations destroys trust.', correct: false },
          { id: 'b', text: 'Establish safe assembly point; radiation screening (survey); accurate information provision; decontamination guidance if needed', feedback: 'Systematic screening and transparent information provision are the most effective methods to reduce panic.', correct: true },
          { id: 'c', text: 'Recommend all visit hospital', feedback: 'Hundreds converging on hospitals will paralyze the medical system.', correct: false },
          { id: 'd', text: 'Instruct to wait until test results available', feedback: 'Instructions to wait amid uncertainty worsen panic.', correct: false },
        ],
      },
      {
        question: '2 patients with TTE (Time to Emesis) within 30 minutes have been found. What measures are required?',
        options: [
          { id: 'a', text: 'Symptomatic treatment same as general vomiting patient', feedback: 'TTE within 30 minutes suggests very high-dose (>8 Gy) exposure — a critical finding.', correct: false },
          { id: 'b', text: 'Record TTE, immediate RED classification, begin CBC/lymphocyte tracking, pre-contact hematopoietic stem cell transplantation center', feedback: 'TTE <1 hr suggests ≥6 Gy high-dose exposure. Early CBC monitoring and specialist center connection are essential.', correct: true },
          { id: 'c', text: 'Administer antiemetic then observe', feedback: 'Do not treat the vomiting itself; use it as an indicator of radiation dose.', correct: false },
          { id: 'd', text: 'Administer KI (potassium iodide)', feedback: 'KI is only effective for radioactive iodine inhalation; it has no effect on external exposure or other radionuclides.', correct: false },
        ],
      },
    ]
  },
  {
    title: 'Major Earthquake — Mass Crush Injury Patients',
    situation: 'A magnitude 7.0 major earthquake collapsed multiple multi-story buildings downtown. Over 300 estimated buried; of 45 rescued so far, most were rescued after >4 hours of lower extremity/gluteal compression and are at high risk for Crush Syndrome. Dialysis equipment and IV fluid supplies are limited.',
    totalPatients: 45,
    resources: {
      ambulances: { total: 8, label: 'Ambulances' },
      doctors: { total: 4, label: 'Field Physicians' },
      rescueTeams: { total: 6, label: 'Rescue Teams' },
      hospitals: { total: 3, label: 'Receiving Hospitals (1 with dialysis)' },
      ivFluids: { total: 100, label: 'IV Fluids (L)' },
    },
    zones: { red: 15, yellow: 18, green: 8, black: 4 },
    decisions: [
      {
        question: 'Rescue team found a survivor in the rubble with >6 hours of lower extremity compression. What is the medical team\'s first action before rescue?',
        options: [
          { id: 'a', text: 'Immediately remove debris for fastest possible rescue', feedback: 'Rescuing without IV fluids risks cardiac arrest from K⁺ release upon compression relief.', correct: false },
          { id: 'b', text: 'Start IV fluids (normal saline 1–1.5 L/hr) before rescue + attach cardiac monitor', feedback: '"Rescue = start of medical treatment". Fluid bolus and cardiac monitoring are essential before rescue.', correct: true },
          { id: 'c', text: 'Administer fluids at hospital after rescue', feedback: 'Cardiac arrest can occur between rescue and hospital transport.', correct: false },
          { id: 'd', text: 'Apply tourniquet to lower extremity then rescue', feedback: 'Tourniquet cannot substitute for fluids and worsens additional ischemic injury.', correct: false },
        ],
      },
      {
        question: '15 high-risk crush syndrome patients must be managed with 100 L of IV fluids. What is the fluid allocation strategy?',
        options: [
          { id: 'a', text: 'Equal distribution to 15 patients (6–7 L/person)', feedback: 'Differential allocation by severity is needed. Some patients require more fluid.', correct: false },
          { id: 'b', text: 'Priority allocation to patients with myoglobinuria or ECG abnormalities; emergency transport of anuric patients to dialysis-capable hospital', feedback: 'Myoglobinuria and ECG abnormalities are the most urgent complication signs warranting priority fluid allocation.', correct: true },
          { id: 'c', text: 'Defer administration until additional fluids arrive', feedback: 'Delaying fluids in crush syndrome increases the risk of renal failure and cardiac arrest.', correct: false },
          { id: 'd', text: 'Administer starting with the first-rescued patient', feedback: 'Allocation must be by severity criterion, not rescue order.', correct: false },
        ],
      },
      {
        question: 'There is only 1 dialysis-capable hospital, and 5 acute renal failure patients are already awaiting dialysis. 3 additional crush patients are anuric. How do you respond?',
        options: [
          { id: 'a', text: 'Proceed with dialysis in waiting order', feedback: 'Priority must vary based on rate of hyperkalemia progression.', correct: false },
          { id: 'b', text: 'Priority dialysis for patients with most severe hyperkalemia/ECG changes; attempt to secure additional remote dialysis centers; concurrent conservative hyperkalemia treatment', feedback: 'Hyperkalemia ECG changes are the most urgent indicator. Secure additional remote centers and provide conservative treatment concurrently.', correct: true },
          { id: 'c', text: 'Manage all patients with fluids only without dialysis', feedback: 'Acute renal failure in anuric state cannot be managed with fluids alone.', correct: false },
          { id: 'd', text: 'Classify patients for whom dialysis is impossible as Black', feedback: 'Abandonment is inappropriate as long as alternatives such as remote transport exist.', correct: false },
        ],
      },
    ]
  },
  {
    title: 'Industrial Dust Explosion — Mass Burn Patients',
    situation: 'A dust explosion at a large grain storage facility injured over 60 people. Chain explosions following the primary blast caused partial building collapse. Due to the enclosed space, blast lung and extensive burn patients are expected to be numerous. There is only 1 local burn center.',
    totalPatients: 60,
    resources: {
      ambulances: { total: 9, label: 'Ambulances' },
      doctors: { total: 5, label: 'Field Physicians' },
      helicopters: { total: 2, label: 'Medical Helicopters' },
      hospitals: { total: 4, label: 'Receiving Hospitals' },
      burnCenter: { total: 1, label: 'Burn Center (10 beds)' },
    },
    zones: { red: 18, yellow: 20, green: 15, black: 7 },
    decisions: [
      {
        question: '18 RED critical burn patients must be allocated to 10 burn center beds. Which strategy is best?',
        options: [
          { id: 'a', text: 'First-come-first-served for 10 burn center admissions; remainder wait', feedback: 'First-come-first-served without severity-based allocation may miss the most critical patients.', correct: false },
          { id: 'b', text: 'Priority burn center for inhalation injury patients; remaining critical patients to general hospital ICU + establish remote burn specialist consultation system', feedback: 'Inhalation injury is the most lethal, so burn center priority. General hospitals augment burn treatment capability with remote specialist consultation.', correct: true },
          { id: 'c', text: 'Attempt to transport all RED patients to burn center', feedback: '18 patients for 10 beds is physically impossible and causes overload.', correct: false },
          { id: 'd', text: 'Abandon burn center and distribute equally among all hospitals', feedback: 'Sending patients requiring specialized burn care only to non-specialist facilities increases mortality.', correct: false },
        ],
      },
      {
        question: 'A patient with only apparently minor wounds suddenly complains of bloody sputum and dyspnea 2 hours later. What diagnosis should be suspected?',
        options: [
          { id: 'a', text: 'Simple aspiration pneumonia', feedback: 'Delayed-onset dyspnea at an explosion scene should raise blast lung as the primary suspicion.', correct: false },
          { id: 'b', text: 'Blast lung — delayed presentation primary blast injury', feedback: 'Blast lung can suddenly deteriorate hours later even with normal appearance; 24-hour observation is essential for enclosed space explosion patients.', correct: true },
          { id: 'c', text: 'Panic attack', feedback: 'Bloody sputum is not a symptom of panic attack.', correct: false },
          { id: 'd', text: 'Inhalation burn', feedback: 'In a dust explosion environment, blast lung is a more specific diagnosis than inhalation burn.', correct: false },
        ],
      },
      {
        question: 'Chain explosion risk has not been completely resolved, but survivor signals are being detected inside the building. What is your decision as incident commander?',
        options: [
          { id: 'a', text: 'Accept the risk and immediately enter for rescue', feedback: 'Deploying rescuers under chain explosion risk can create additional casualties.', correct: false },
          { id: 'b', text: 'Cooperate with fire/EOD for safety assessment; limited rescue via safest entry route + continuous monitoring', feedback: 'Cooperation with structural safety experts to minimize risk while conducting rescue is the best approach.', correct: true },
          { id: 'c', text: 'Halt rescue until risk completely resolved', feedback: 'May miss the Golden Hour for survivors.', correct: false },
          { id: 'd', text: 'Conduct survival confirmation only with unmanned drone', feedback: 'Confirmation alone cannot save survivors.', correct: false },
        ],
      },
    ]
  },

];

const QUIZ_QUESTIONS = [
  // ============================================
  // ORIGINAL 12 QUESTIONS (KEPT EXACTLY)
  // ============================================
  {
    question: 'What is the first thing to assess in START Triage?',
    options: [
      'Presence of pulse',
      'Ambulatory status',
      'Level of consciousness',
      'Respiratory rate'
    ],
    correct: 1,
    explanation: 'The first step of START (Simple Triage and Rapid Treatment) is assessing ambulatory status. If the patient can walk, they are immediately classified as GREEN (Minor).'
  },
  {
    question: 'In START Triage, how is a patient classified who has no spontaneous breathing even after airway opening?',
    options: [
      'RED (Immediate)',
      'YELLOW (Delayed)',
      'BLACK (Deceased/Expectant)',
      'GREEN (Minor)'
    ],
    correct: 2,
    explanation: 'If spontaneous breathing is absent even after airway opening, the patient is classified as BLACK (Deceased/Expectant). In MCI situations, limited resources must be concentrated on patients with higher survival probability.'
  },
  {
    question: 'Which of the following does NOT belong to the 5 core functions of the Incident Command System (ICS) at an MCI scene?',
    options: [
      'Command',
      'Operations',
      'Education',
      'Planning'
    ],
    correct: 2,
    explanation: 'The 5 core functions of ICS are Command, Operations, Planning, Logistics, and Finance/Administration. Education is not a core ICS function.'
  },
  {
    question: 'What is the minimum level of protective equipment required to enter the Hot Zone at a chemical incident scene?',
    options: [
      'Level D (work clothes, safety shoes)',
      'Level C (full-face mask + cartridge)',
      'Level B (SCBA + chemical protective suit)',
      'Level A (fully-encapsulating chemical suit + SCBA)'
    ],
    correct: 2,
    explanation: 'A minimum of Level B (Self-Contained Breathing Apparatus + chemical protective suit) is required to enter a Hot Zone with an unidentified chemical. Level A is also recommended when the substance is unidentified.'
  },
  {
    question: 'What is the appropriate prophylactic antibiotic for cutaneous anthrax exposure?',
    options: [
      'Amoxicillin',
      'Ciprofloxacin',
      'Metronidazole',
      'Vancomycin'
    ],
    correct: 1,
    explanation: 'Ciprofloxacin or Doxycycline is recommended as prophylactic antibiotics for anthrax exposure. Administered for 60 days, concurrent with vaccination.'
  },
  {
    question: 'In a radiation incident, removing contaminated clothing reduces radioactive contamination by approximately what percentage?',
    options: [
      'Approximately 50%',
      'Approximately 70%',
      'Approximately 90%',
      'Approximately 30%'
    ],
    correct: 2,
    explanation: 'Removing clothing alone can eliminate approximately 90% of external radioactive contamination. This is the most fundamental yet effective first step in managing radioactively contaminated patients.'
  },
  {
    question: 'Which criterion correctly describes YELLOW (Delayed) patients in disaster triage?',
    options: [
      'Ambulatory with clear consciousness',
      'Respiratory rate ≥30, rapid pulse',
      'Respiration, circulation, and consciousness all normal but non-ambulatory',
      'Breathing resumed after airway opening'
    ],
    correct: 2,
    explanation: 'YELLOW patients have normal respiratory rate (<30), normal circulation (capillary refill ≤2 seconds or radial pulse palpable), and normal consciousness (able to follow simple commands), but are non-ambulatory.'
  },
  {
    question: 'What is the most significant difference between JumpSTART Triage (pediatric) and adult START?',
    options: [
      'Ambulatory status is not checked first',
      '5 rescue breaths are attempted when there is no breathing',
      'Only consciousness is checked instead of pulse',
      'All pediatric patients are classified as RED'
    ],
    correct: 1,
    explanation: 'JumpSTART attempts 5 rescue breaths for apneic pediatric patients (ages 1–8). After this, if breathing resumes the patient is classified RED; if not, BLACK.'
  },
  {
    question: 'Which best describes "Surge Capacity" in a mass casualty incident?',
    options: [
      'Daily outpatient capacity',
      'The ability to mobilize resources beyond normal capacity to accommodate patients during a disaster',
      'Patient-to-staff ratio in a hospital',
      'Maximum speed of ambulances'
    ],
    correct: 1,
    explanation: 'Surge Capacity refers to the healthcare system\'s ability to expand personnel, space, and supplies beyond normal capacity to accommodate patients during a mass casualty event.'
  },
  {
    question: 'What is the correct antidote combination for exposure to chemical weapon nerve agents (Sarin, VX)?',
    options: [
      'Naloxone + Flumazenil',
      'Atropine + Pralidoxime (2-PAM)',
      'Calcium gluconate + Sodium bicarbonate',
      'N-Acetylcysteine + Activated charcoal'
    ],
    correct: 1,
    explanation: 'Nerve agents inhibit acetylcholinesterase. Atropine (muscarinic receptor blockade) and Pralidoxime/2-PAM (enzyme reactivation) are the standard antidote combination.'
  },
  {
    question: 'What are the primary target organs of primary blast injury in an explosion?',
    options: [
      'Liver and spleen',
      'Lungs, tympanic membranes, and bowel (gas-containing organs)',
      'Bones and joints',
      'Skin and soft tissue'
    ],
    correct: 1,
    explanation: 'Primary blast injury results from the explosion pressure wave; gas-containing organs (lungs, tympanic membranes, bowel, sinuses) are most vulnerable. Pulmonary blast injury (blast lung) is the most lethal.'
  },
  {
    question: 'What is the correct S-A-L-T sequence of SALT Triage in disaster medical response?',
    options: [
      'Sort - Assess - Lifesaving - Treatment/Transport',
      'Scene - Alert - Level - Triage',
      'Stabilize - Assess - Load - Transport',
      'Screen - Allocate - Label - Transfer'
    ],
    correct: 0,
    explanation: 'SALT Triage: Sort, Assess, Lifesaving interventions, Treatment/Transport. Developed by the CDC as an all-hazards approach triage system.'
  },

  // ============================================
  // NEW QUIZ QUESTIONS — Disaster Management Cycle
  // ============================================
  {
    question: 'Which correctly lists the 4 stages of the Disaster Management Cycle in order?',
    options: [
      'Preparedness-Mitigation-Response-Recovery',
      'Mitigation-Preparedness-Response-Recovery',
      'Response-Preparedness-Mitigation-Recovery',
      'Recovery-Mitigation-Preparedness-Response'
    ],
    correct: 1,
    explanation: 'The Disaster Management Cycle consists of 4 stages: Mitigation → Preparedness → Response → Recovery. The stages are cyclical, with lessons from each stage informing the next.'
  },
  {
    question: 'Strengthening seismic-resistant building design belongs to which stage of the Disaster Management Cycle?',
    options: [
      'Preparedness',
      'Response',
      'Mitigation',
      'Recovery'
    ],
    correct: 2,
    explanation: 'Strengthening seismic-resistant building design is a structural measure that prevents disasters or reduces damage, belonging to the Mitigation stage. Mitigation encompasses all activities that eliminate or reduce risk factors before a disaster occurs.'
  },
  {
    question: 'The 2022 Itaewon crowd crush disaster is classified under which disaster type?',
    options: [
      'Natural disaster',
      'Societal/man-made disaster',
      'Technological disaster',
      'CBRNE terrorism'
    ],
    correct: 1,
    explanation: 'The Itaewon crowd crush is classified as a societal/man-made disaster, caused primarily by human behavior and management failures. Core causes identified include failure to manage overcrowding and absence of an initial incident command structure.'
  },
  {
    question: 'What is the most fundamental difference between an MCI (Mass Casualty Incident) and a Disaster?',
    options: [
      'An MCI is a state where medical demand exceeds available resources; a disaster is a broader concept affecting overall societal function',
      'MCI applies only to natural disasters; disaster applies only to man-made incidents',
      'An MCI is an incident with no fatalities; a disaster is an incident with fatalities',
      'MCI and disaster are different expressions of the same concept'
    ],
    correct: 0,
    explanation: 'An MCI (Mass Casualty Incident) is a situation where medical demand exceeds currently available resources. A disaster, by contrast, is a broader concept affecting not only healthcare but also the economy, social infrastructure, and the overall function of the community. A disaster always encompasses an MCI, but an MCI is not necessarily a disaster.'
  },

  // ============================================
  // STANDARDS OF CARE
  // ============================================
  {
    question: 'What is the primary objective of Crisis Standards of Care?',
    options: [
      'Provide the best possible care to each individual patient',
      'Guarantee the safety of medical staff above all else',
      'Achieve the best outcomes for the greatest number of patients',
      'Reduce healthcare costs'
    ],
    correct: 2,
    explanation: 'Crisis Standards of Care is the shift from individual optimal care to a resource allocation principle aimed at achieving "the greatest good for the greatest number" when medical resources are critically scarce. A concept proposed by the U.S. Institute of Medicine (IOM).'
  },
  {
    question: 'The community treatment centers operated during the COVID-19 pandemic correspond to which standard of care?',
    options: [
      'Conventional Standards',
      'Contingency Standards',
      'Crisis Standards',
      'Normal Standards'
    ],
    correct: 1,
    explanation: 'Community treatment centers adjust hospital admission criteria to accommodate mild patients in non-hospital facilities — a modified care approach corresponding to Contingency Standards. Full Crisis Standards apply when the resource allocation principles themselves change.'
  },

  // ============================================
  // ICS / HICS
  // ============================================
  {
    question: 'Which correctly lists all 5 core functions of the ICS (Incident Command System)?',
    options: [
      'Command-Operations-Planning-Logistics-Finance/Administration',
      'Command-Medical-Fire-Police-Administration',
      'Preparedness-Response-Recovery-Mitigation-Evaluation',
      'Command-Communications-Education-Training-Evaluation'
    ],
    correct: 0,
    explanation: 'The 5 core ICS functions: Command, Operations, Planning, Logistics, Finance/Administration. This structure applies uniformly regardless of disaster scale, activating only the functions needed.'
  },
  {
    question: 'What is the role of the Hospital Incident Commander in HICS (Hospital Incident Command System)?',
    options: [
      'Directly command the surgical team',
      'Overall director responsible for the hospital-wide disaster response',
      'Directly perform patient triage',
      'Handle media briefings exclusively'
    ],
    correct: 1,
    explanation: 'In HICS, the Hospital Incident Commander is the overall director for the hospital-wide disaster response, responsible for strategic decision-making, resource allocation priorities, and coordination with external agencies (fire, police, administration). This role does not involve directly treating patients.'
  },
  {
    question: 'Which is NOT included in the 4S strategy for expanding hospital Surge Capacity during a disaster?',
    options: [
      'Staff',
      'Stuff (supplies/equipment)',
      'Structure/Space',
      'Salary'
    ],
    correct: 3,
    explanation: 'The 4S strategy: Staff (securing personnel), Stuff (supplies/equipment/medications), Structure/Space (expanding facilities), Systems (changing policies/procedures/protocols). Salary is not part of the 4S. This strategy is a systematic approach to accommodate patients beyond normal hospital capacity.'
  },

  // ============================================
  // CBRNE DETAILED
  // ============================================
  {
    question: 'What does the SLUDGEM symptom pattern indicate?',
    options: [
      'Prodromal symptoms of radiation exposure',
      'Muscarinic symptoms from organophosphate nerve agent (Sarin, etc.) exposure',
      'Symptoms of inhalational anthrax infection',
      'Carbon monoxide poisoning symptoms'
    ],
    correct: 1,
    explanation: 'SLUDGEM: Salivation, Lacrimation, Urination, Defecation, GI distress, Emesis, Miosis. These are muscarinic receptor hyperactivation symptoms caused by organophosphate nerve agents (Sarin, VX) or organophosphate pesticide poisoning.'
  },
  {
    question: 'What is the highest level of protective equipment for entering a Hot Zone with an unidentified chemical substance?',
    options: [
      'Level D: regular work clothes + safety shoes',
      'Level C: air-purifying respirator + chemical protective suit',
      'Level B: SCBA + chemical protective suit',
      'Level A: fully-encapsulating vapor-protective suit + SCBA'
    ],
    correct: 3,
    explanation: 'Level A provides the highest level of skin and respiratory protection. It consists of a fully-encapsulating vapor-protective suit plus a self-contained breathing apparatus (SCBA). Essential for unidentified high-hazard chemicals and high-concentration vapor environments.'
  },
  {
    question: 'Why is potassium iodide (KI) administered during a nuclear power plant accident?',
    options: [
      'Directly treat cell damage caused by radiation',
      "Block the body\'s absorption of radioactive cesium",
      'Competitively inhibit thyroid uptake of radioactive iodine (¹³¹I)',
      'An antidote for acute radiation syndrome in general'
    ],
    correct: 2,
    explanation: 'Radioactive iodine (¹³¹I) selectively accumulates in the thyroid, increasing thyroid cancer risk. KI (potassium iodide) saturates thyroid receptors with stable iodine first, competitively blocking thyroid uptake of radioactive iodine. However, it has no effect on other radioactive substances (e.g., cesium).'
  },
  {
    question: 'Among the 5 types of blast injuries (Primary through Quinary), which type is clinically most common?',
    options: [
      'Primary: injury from pressure wave',
      'Secondary: injury from fragments and debris',
      'Tertiary: injury from being thrown by blast wind and impacted',
      'Quaternary: burns and asphyxiation injuries'
    ],
    correct: 1,
    explanation: 'The most common type of blast injury is Secondary blast injury. Penetrating wounds, lacerations, and fractures from projectiles such as fragments, glass, and building debris are the most frequent. Primary blast injury (pressure wave) is the most specific but occurs less frequently than secondary injury.'
  },
  {
    question: 'What is the most priority action in responding to a "Dirty Bomb (Radiological Dispersal Device, RDD)"?',
    options: [
      'Immediately distribute KI to the entire population',
      'Prevent spread of radioactive contamination and conduct on-site decontamination',
      'Immediately begin chemotherapy for radiation-exposed patients',
      'Begin medical response only after complete collection of explosive materials'
    ],
    correct: 1,
    explanation: 'A dirty bomb (RDD: Radiological Dispersal Device) combines radioactive material with conventional explosives. Psychological fear and contamination spread are greater threats than radiation itself. The top priority is preventing contamination spread (zone establishment) and decontamination (undress + wash), concurrent with blast injury treatment.'
  },

  // ============================================
  // Korean Disaster Cases
  // ============================================
  {
    question: 'Approximately how many people died in the 2003 Daegu subway fire disaster?',
    options: [
      'Approximately 50',
      'Approximately 100',
      'Approximately 192',
      'Approximately 300'
    ],
    correct: 2,
    explanation: 'The February 2003 Daegu subway Line 1 arson fire killed 192 and injured 148 people. It was a major disaster caused by multiple compounding failures: inadequate fire-resistant materials, failure to guide evacuation, and the decision to continue train operations.'
  },
  {
    question: 'Which was a correct Mitigation measure implemented after the Daegu subway fire disaster?',
    options: [
      'Reduction of subway operating speed',
      'Replacement of station interior materials with non-combustibles and installation of platform screen doors',
      'Strengthening of mandatory insurance enrollment',
      'Reduction of driver working hours'
    ],
    correct: 1,
    explanation: 'Following the Daegu subway disaster, key mitigation measures included replacing combustible materials in all subway stations with non-combustibles, nationwide installation of platform screen doors (PSD), and enhanced automatic fire suppression systems. These are model examples of mitigation-phase measures that structurally reduce damage in future similar incidents.'
  },
  {
    question: 'What is the key lesson from the 2014 Mauna Resort collapse in terms of disaster medicine?',
    options: [
      'Need for design standards to prepare for structural collapse from heavy snow',
      'Exposed problems in early disaster medical response — absence of on-scene medical command, patient transport confusion',
      'Strengthening safety management for university festivals',
      'Improving weather forecast accuracy'
    ],
    correct: 1,
    explanation: 'The 2014 Mauna Resort collapse (10 dead, 204 injured) at a Gyeongju resort exposed structural deficiencies in the disaster medical response system: absence of an on-scene medical command structure, patient transport confusion, and inadequate hospital surge preparation. It was the catalyst for strengthening the DMAT system.'
  },
  {
    question: 'What is the key lesson from the 2014 Sewol Ferry disaster in terms of disaster response?',
    options: [
      'Maritime traffic speed limits',
      'Importance of initial response within the Golden Hour and dangers of command structure confusion',
      'Mandatory shipping company insurance',
      'Passenger ferry age restrictions'
    ],
    correct: 1,
    explanation: 'The Sewol ferry disaster (304 dead or missing) was worsened by multiple compounding failures: failure to rescue within the Golden Hour of initial response, command structure confusion among the government, coast guard, and shipping company, and erroneous orders to wait. This tragedy led to the establishment of the Ministry of Public Safety and Security, strengthened safety education, and comprehensive revision of disaster response manuals.'
  },

  // ============================================
  // Infectious Disease Disasters
  // ============================================
  {
    question: 'Which correctly lists the 3T strategy for infectious disease response?',
    options: [
      'Test, Trace, Treat',
      'Triage, Transfer, Treat',
      'Track, Treat, Terminate',
      'Test, Teach, Terminate'
    ],
    correct: 0,
    explanation: '3T strategy: Test (expand testing), Trace (contact tracing), Treat (rapid treatment/isolation). Emphasized by WHO in COVID-19 response: early detection through testing, interrupting transmission through tracing, and preventing severe disease through treatment.'
  },
  {
    question: 'What is the core purpose of "Flatten the Curve"?',
    options: [
      'Reduce the total number of infectious disease deaths to zero',
      'Slow the rate of infection to prevent overloading the healthcare system',
      'Shorten the vaccine development timeline',
      'Minimize the total number of infections'
    ],
    correct: 1,
    explanation: 'Flattening the curve is a strategy using non-pharmaceutical interventions (social distancing, masking, etc.) to slow transmission, preventing short-term medical demand from exceeding healthcare system capacity (beds, ventilators, healthcare workers). The goal is managing patients per unit time rather than total patient numbers.'
  },
  {
    question: 'What is cited as the most critical problem of the 2015 Korean MERS outbreak?',
    options: [
      'The absence of effective treatment for MERS',
      'Collapse of public trust and spread of panic due to non-disclosure policy',
      'Insufficient mask production capacity',
      'Absence of specialized infectious disease hospitals'
    ],
    correct: 1,
    explanation: 'The most critical problem in the 2015 Korean MERS outbreak was the lack of information transparency — particularly the non-disclosure of the list of affected hospitals. This led to failed voluntary quarantine due to unknown transmission routes, public panic, and unnecessary avoidance of healthcare facilities. It left the lesson that transparency is paramount in risk communication.'
  },

  // ============================================
  // Psychological First Aid & Mental Health
  // ============================================
  {
    question: 'What are the 3 core steps of Psychological First Aid (PFA)?',
    options: [
      'Diagnosis-Treatment-Follow-up',
      'Look-Listen-Link',
      'Stabilization-Assessment-Treatment',
      'Contact-Assessment-Intervention'
    ],
    correct: 1,
    explanation: 'The 3 steps of PFA (Psychological First Aid): Look (assess the scene and the state of those affected), Listen (empathic and non-judgmental listening), Link (connect to resources — family, community support). PFA aims for immediate stabilization and connection, not psychotherapy, and can be performed by non-specialists.'
  },
  {
    question: 'What is the most effective method to prevent Burnout and Vicarious Trauma in healthcare workers after disaster response?',
    options: [
      'Leave immediately after work and rest alone',
      'Maintain shift work systems, peer support programs, and institutionalized self-care',
      'Record the damage situation in as much detail as possible to process later',
      'Suppress emotional expression and maintain professionalism'
    ],
    correct: 1,
    explanation: 'To prevent burnout in disaster healthcare workers, WHO and the International Red Cross recommend systematic shift rotation, peer support programs, post-crisis debriefing, and provision of self-care resources. Suppressing emotions actually increases PTSD risk, and organizational-level support systems are essential.'
  },

  // ============================================
  // Vulnerable Populations
  // ============================================
  {
    question: 'Why does JumpSTART Triage attempt 5 rescue breaths for apneic pediatric patients?',
    options: [
      'Because CPR is more effective in children',
      'Because pediatric apnea is often caused by hypoxia and ventilation alone may restore breathing',
      'Because unlike adults, children can maintain breathing even without a pulse',
      'Because JumpSTART does not require airway management in children'
    ],
    correct: 1,
    explanation: 'Unlike adults, pediatric apnea is more often caused by hypoxia (airway obstruction, respiratory depression) than cardiac problems. Breathing may resume with 5 rescue breaths alone, so they are not immediately classified BLACK. If breathing resumes: RED; if not: BLACK.'
  },
  {
    question: 'Which includes all major reasons why the elderly are classified as a vulnerable population during disasters?',
    options: [
      'Because the elderly lack disaster experience and panic severely',
      'Multiple factors: chronic disease, reduced mobility, social isolation, and cognitive decline',
      'Because the elderly often lack health insurance',
      'Because the elderly do not participate in disaster evacuation drills'
    ],
    correct: 1,
    explanation: 'Vulnerability factors for the elderly during disasters: reduced physiological compensatory ability from chronic diseases (COPD, diabetes, cardiovascular disease), difficulty self-evacuating due to reduced mobility, limited information access due to social isolation, difficulty assessing disaster situations due to cognitive decline, and complex medication regimens. These compounding factors account for disproportionately high mortality rates among the elderly during disasters.'
  },
  {
    question: 'What are the key considerations for persons with disabilities when developing disaster response plans?',
    options: [
      'Create dedicated separate evacuation facilities for persons with disabilities',
      'Designate evacuation assistance personnel, secure accessible communication means, and develop individualized evacuation plans',
      'Delegate entirely to the caregiver of the person with disabilities',
      'Persons with severe disabilities should shelter in place'
    ],
    correct: 1,
    explanation: 'Protecting persons with disabilities during disasters requires: developing Personalized Emergency Evacuation Plans (PEEP), designating evacuation assistance personnel for different disability types, diverse alarm and communication modalities for the visually and hearing impaired, and ensuring accessibility of mobility aids. The UN Convention on the Rights of Persons with Disabilities specifies disability-inclusive disaster response as a right.'
  },

  // ============================================
  // Crisis Leadership
  // ============================================
  {
    question: 'Which correctly lists the 4 characteristics of a crisis?',
    options: [
      'Undesirable-Unstable-Unexpected-Urgent',
      'Uncontrollable-Unpredictable-Unfair-Urgent',
      'Dangerous-Dynamic-Difficult-Demanding',
      'Fast-Furious-Fatal-Final'
    ],
    correct: 0,
    explanation: 'The 4U characteristics of a crisis: Undesirable (no one wants it), Unstable (rapidly changing, unstable situation), Unexpected (unanticipated circumstances), Urgent (immediate action required). These four characteristics compound to create the ultimate test of leadership.'
  },
  {
    question: 'What is the core principle for overcoming a crisis in the "Stockdale Paradox"?',
    options: [
      'Ignore the difficulties of reality through positive thinking',
      'Face the brutal reality while maintaining faith that you will ultimately prevail',
      'Quick escape is the best strategy',
      'Delay decisions in the face of uncertainty'
    ],
    correct: 1,
    explanation: 'The Stockdale Paradox (proposed by Jim Collins): named after Admiral James Stockdale, who survived as a Vietnam POW. Blind optimists who said "I\'ll be out by Christmas" were broken by disappointment, but those who faced brutal reality while maintaining the belief that "I will ultimately prevail" survived. The essence of strategic optimism.'
  },
  {
    question: 'What is the core message Viktor Frankl\'s lessons offer for crisis leadership?',
    options: [
      'When suffering is great, one must stop acting',
      'Even when we cannot control our circumstances, we can choose our attitude toward them',
      'In the worst situations, survival is the only goal',
      'A crisis is never a meaningful experience'
    ],
    correct: 1,
    explanation: 'Viktor Frankl, drawing on his experience surviving Nazi concentration camps, offered the insight: "Between stimulus and response there is a space, and in that space is our power to choose our response." In crisis leadership, this means we can exercise leadership by choosing our attitude and response rather than being controlled by uncontrollable external circumstances.'
  },
  {
    question: 'What characterizes a high-trust organization according to the "Speed of Trust"?',
    options: [
      'More review steps are needed for every decision',
      'Decision-making and execution speed increase, and unnecessary bureaucratic costs decrease',
      'A system of employees monitoring each other is strengthened',
      'Trust is unrelated to execution speed'
    ],
    correct: 1,
    explanation: 'Stephen Covey Jr.\'s "Speed of Trust": in high-trust organizations, decision-making is fast, communication is direct, and collaboration flows smoothly. Conversely, high distrust leads to complex approval processes, slower execution, and increased costs. Building trust in normal times is the foundation for rapid response during a crisis.'
  },
  {
    question: 'What are the 4 core elements of TeamSTEPPS?',
    options: [
      'Leadership-Situation Monitoring-Mutual Support-Communication',
      'Education-Training-Evaluation-Reward',
      'Plan-Execute-Review-Improve',
      'Command-Control-Coordination-Cooperation'
    ],
    correct: 0,
    explanation: 'TeamSTEPPS (Team Strategies and Tools to Enhance Performance and Patient Safety): Leadership, Situation Monitoring, Mutual Support, Communication. A team-based patient safety program developed by AHRQ, widely applied in disaster medicine as well.'
  },
  {
    question: 'What is the correct sequence of the SBAR communication tool?',
    options: [
      'Summary-Background-Assessment-Recommendation',
      'Situation-Background-Assessment-Recommendation',
      'Status-Brief-Action-Result',
      'Scene-Background-Alert-Response'
    ],
    correct: 1,
    explanation: 'SBAR: Situation (who the patient is and what is happening), Background (relevant history, medications), Assessment (what the current problem is), Recommendation (what is needed). Structured communication prevents information gaps and enables efficient handoffs in emergency situations.'
  },
  {
    question: 'What are the 4 core questions addressed in an AAR (After Action Review)?',
    options: [
      'Who/When/Where/How',
      'What was expected/What actually happened/Why the difference/What to sustain and improve',
      'Cost/Time/Personnel/Result',
      'Success/Failure/Accountability/Punishment'
    ],
    correct: 1,
    explanation: 'AAR\'s 4 questions: ① What was the expected result? ② What actually happened? ③ Why did the difference occur? ④ What should be sustained or improved next time? A core tool for organizational learning after disaster response, aimed at improvement rather than blame.'
  },
  {
    question: 'Which correctly lists the 3 stages of Lewin\'s Change Model in order?',
    options: [
      'Plan-Execute-Evaluate',
      'Unfreezing-Moving-Refreezing',
      'Awareness-Motivation-Action',
      'Resistance-Acceptance-Integration'
    ],
    correct: 1,
    explanation: 'Lewin\'s Change Model: Unfreezing (weakening forces maintaining the status quo, recognizing the need for change) → Moving (actual change toward a new direction) → Refreezing (stabilizing and institutionalizing the new state). A useful change management framework for post-disaster system improvement and new protocol implementation.'
  },
  {
    question: 'Which includes all core principles of the WHO crisis communication guidelines?',
    options: [
      'Speed, confidentiality, authoritative announcement',
      'Transparency, timeliness, empathy, consistency',
      'Optimistic messages, minimize fear, single channel',
      'Emphasize expertise, focus on technical explanations'
    ],
    correct: 1,
    explanation: 'WHO crisis communication principles: Transparent (disclose both what is known and unknown), Timely (provide information quickly), Empathic (acknowledge public emotions and concerns), Consistent (unified messaging across agencies). The information non-disclosure failure during the MERS outbreak demonstrated the importance of these principles.'
  },
  {
    question: 'What does Karl Weick\'s "Sensemaking" mean in the context of disaster response?',
    options: [
      'The process of quantifying disaster damage',
      'The cognitive process of constructing meaning about what is happening in a chaotic disaster situation and determining a course of action',
      'The process of planning disaster response drills',
      'The process of analyzing statistical data'
    ],
    correct: 1,
    explanation: 'Sensemaking (Weick): the process by which people interpret and assign meaning to what is happening in an uncertain and chaotic situation. In the initial disaster response, leaders must gather fragmented information to determine "what kind of situation is this?" and decide on a course of action — this process is sensemaking. Faulty sensemaking can lead to response failures.'
  },
  {
    question: 'What role does a "Guiding Coalition" play in crisis response?',
    options: [
      'A PR team exclusively handling media briefings',
      'A core leadership team that supports crisis leaders and drives change, composed of individuals with diverse competencies and credibility',
      'A committee that makes decisions on behalf of leadership',
      'An investigation team that identifies accountability after a crisis'
    ],
    correct: 1,
    explanation: 'The Guiding Coalition proposed by John Kotter: since a single leader has limitations in a crisis or change situation, a coalition of key individuals with diverse competencies (expertise, credibility, networks) is formed. In disaster response, key individuals from diverse areas — medicine, administration, external relations — must collaborate.'
  },

  // ============================================
  // BUILD BACK BETTER & Future Technology
  // ============================================
  {
    question: 'What is the core concept of "Build Back Better"?',
    options: [
      'Restoring disaster-damaged facilities to their original state as quickly as possible',
      'Rebuilding during disaster recovery into a safer and more resilient state than before',
      'A reconstruction approach that minimizes disaster damage costs',
      'A reconstruction strategy that maximizes international aid'
    ],
    correct: 1,
    explanation: 'Build Back Better (BBB): a disaster recovery principle adopted by the United Nations, aiming not for simple restoration to the original state, but rebuilding to a safer, more sustainable, and more resilient state than before the disaster. Adopted as a core principle in the Sendai Framework (2015-2030).'
  },
  {
    question: 'Which is INCORRECT regarding the use of future technologies in disaster medicine?',
    options: [
      'AI-based disaster prediction and resource allocation optimization',
      'Drone-based field reconnaissance and medication delivery',
      'VR/AR-based disaster medicine training',
      'Telemedicine is prohibited in disaster situations'
    ],
    correct: 3,
    explanation: 'Telemedicine is a valuable technology for disaster situations — when on-scene specialist medical staff are scarce, it enables remote clinical guidance, severity assessment, and decision support. Active use, not prohibition, is recommended. AI prediction, drone operations, and VR training are all future directions for disaster medicine.'
  },

  // ============================================
  // NEW QUIZ — CBRN/Special Disasters/AI Advanced
  // ============================================
  {
    id: 52,
    category: 'Chemical Triage - DUMBELS',
    question: 'Among the DUMBELS symptoms seen in nerve agent exposure, which sign is related to the pupils?',
    options: [
      'A. Pupil dilation (Mydriasis)',
      'B. Pupil constriction (Miosis)',
      'C. Double vision (Diplopia)',
      'D. Nystagmus',
    ],
    correct: 1,
    explanation: 'Nerve agents inhibit AChE, causing acetylcholine accumulation, and muscarinic receptor hyperactivation causes pupil constriction (Miosis). Miosis is one of the key signs of nerve agent exposure.'
  },
  {
    id: 53,
    category: 'Radiation Triage - TTE',
    question: 'At a dirty bomb (RDD) explosion scene, what is the estimated radiation exposure dose and triage classification for a patient who begins vomiting 45 minutes after the explosion?',
    options: [
      'A. <2 Gy - Green (Minor)',
      'B. 2-4 Gy - Yellow (Delayed)',
      'C. 4-6 Gy - Red (Immediate/Urgent)',
      'D. ≥6 Gy - Red (Immediate, very severe)',
    ],
    correct: 3,
    explanation: 'TTE (time to emesis) <1 hour = estimated exposure dose ≥6 Gy (severe ARS H4). TTE guide: <1hr → ≥6Gy, 1-2hr → 4-6Gy, 2-4hr → 2-4Gy, >4hr → <2Gy.'
  },
  {
    id: 54,
    category: 'Chemical Antidote',
    question: 'When a nerve agent-exposed patient shows no response to Atropine 2mg, what is the next action?',
    options: [
      'A. Stop Atropine administration and observe',
      'B. Double the Atropine dose to 4mg and repeat',
      'C. Administer Pralidoxime alone',
      'D. Switch to Diazepam',
    ],
    correct: 1,
    explanation: 'Nerve agent Atropine protocol: after initial 2mg bolus, if no response, double the dose and repeat (until symptom resolution). Pralidoxime is given concurrently; Diazepam is added for seizure control.'
  },
  {
    id: 55,
    category: 'Pediatric Triage - JumpSTART',
    question: 'A 6-year-old child is found at a disaster scene with no spontaneous breathing but a pulse is present. What is the next action according to JumpSTART?',
    options: [
      'A. Immediately classify as Black (Expectant)',
      'B. Immediately classify as Red (Immediate) and transport',
      'C. Open airway and attempt 5 rescue breaths',
      'D. Apply adult START algorithm',
    ],
    correct: 2,
    explanation: 'JumpSTART (pediatric MCI triage): Apnea + pulse present → open airway + 5 rescue breaths. If breathing resumes: Red (Immediate); if not: Black (Expectant). Differs from adult START — rescue breaths are attempted in children because apnea is more likely due to hypoxia leading to cardiac arrest.'
  },
  {
    id: 56,
    category: 'CBRN Zoning',
    question: 'Among the three zones at a CBRN scene, which zone is where \'regular medical treatment occurs after full decontamination\'?',
    options: [
      'A. Hot Zone (contaminated area)',
      'B. Warm Zone (decontamination area)',
      'C. Cold Zone (clean area)',
      'D. Any zone is acceptable',
    ],
    correct: 2,
    explanation: 'Cold Zone (clean area/Support Zone): entry after full decontamination; regular medical treatment and transport decisions. Hot Zone: PPE Level A/B, initial rapid triage. Warm Zone: decontamination, limited emergency care.'
  },
  {
    id: 57,
    category: 'Triage Principles - Blast Injury',
    question: 'Among the 4 mechanisms of blast injury, which involves direct pressure from the blast wave and causes damage primarily to the lungs, ears, and bowel?',
    options: [
      'A. Primary Blast Injury',
      'B. Secondary Blast Injury',
      'C. Tertiary Blast Injury',
      'D. Quaternary Blast Injury',
    ],
    correct: 0,
    explanation: 'Primary Blast Injury: direct blast wave pressure. Damages gas-containing organs — lungs (blast lung), ears (tympanic membrane rupture), bowel (blast abdomen), brain (PTBI). Secondary: fragments. Tertiary: projectile impact. Quaternary: burns/inhalation/crush.'
  },
  {
    id: 58,
    category: 'Reverse Triage',
    question: 'What is the most correct purpose of Reverse Triage?',
    options: [
      'A. Transport the most critically injured patients first',
      'B. Identify current inpatients eligible for early discharge to secure bed capacity',
      'C. Classify patients with low survival probability as Black',
      'D. Treat pediatric patients before adults',
    ],
    correct: 1,
    explanation: 'Reverse Triage: during a disaster, early discharge of current inpatients who will not require major interventions within the next 96 hours, freeing up beds for new disaster patients. An additional 10-20% of total beds can be secured (Pollaris & Sabbe, 2016).'
  },
  {
    id: 59,
    category: 'Triage Systems - Evidence',
    question: 'Among the following triage tools, which had the highest in-hospital mortality prediction AUC in the Zhang et al. (2021) study of 29,523 earthquake casualties?',
    options: [
      'A. START',
      'B. CareFlight',
      'C. REMS (Rapid Emergency Medicine Score)',
      'D. T-RTS',
    ],
    correct: 2,
    explanation: 'Zhang et al. earthquake casualty study (2021): REMS AUC 0.835 (highest) > TEWS 0.797 > START 0.750 > CareFlight 0.737 > T-RTS 0.736. However, START is still widely used due to its field applicability and ease of learning.'
  },
  {
    id: 60,
    category: 'Biological Disaster - SEIRV',
    question: 'In the SEIRV model for biological disasters, which group corresponds to \'E\' and what is the management for that group?',
    options: [
      'A. Infectious patients - immediate isolation and treatment',
      'B. Exposed but not yet infectious individuals - isolation/quarantine and prophylactic antibiotics/antivirals',
      'C. Recovered patients - medical resource support',
      'D. Vaccinated individuals - participation in transmission-blocking activities',
    ],
    correct: 1,
    explanation: 'SEIRV: S=Susceptible, E=Exposed (incubation period), I=Infectious, R=Removed (recovered/deceased), V=Vaccinated. \'E\' exposed group: isolation/quarantine + prophylactic antibiotics/antivirals.'
  },
  {
    id: 61,
    category: 'AI-Based Triage Algorithm',
    question: 'Which is NOT used as an input variable in an AI-based integrated CBRN/critical trauma severity classification algorithm?',
    options: [
      'A. Respiratory Rate',
      'B. AVPU Consciousness Level',
      'C. Patient Age and Gender',
      'D. CBRNE contamination symptoms',
    ],
    correct: 2,
    explanation: 'AI algorithm input variables: respiratory rate, pulse, consciousness level (AVPU), mobility, vital signs, trauma/poisoning symptoms, CBRNE contamination-based decontamination priority and emergency care logic. Age/gender are not primary input variables.'
  },
  {
    id: 62,
    category: 'Burn Triage - Inhalation Injury',
    question: 'Which does NOT belong to the 3 classic signs of inhalation injury?',
    options: [
      'A. Facial burns',
      'B. Singed nasal hairs',
      'C. Closed space exposure',
      'D. Extensive burns TBSA >90%',
    ],
    correct: 3,
    explanation: '3 classic signs of inhalation injury: 1) facial burns, 2) singed nasal hairs, 3) closed space exposure. Hoarse voice is a sign of progressive airway edema. TBSA >90% is a burn severity indicator, not a specific sign of inhalation injury.'
  },
  {
    id: 63,
    category: 'ARS - Lymphocyte Count',
    question: 'What exposure dose is the clinical threshold for administering hematopoietic growth factors such as G-CSF in Acute Radiation Syndrome (ARS)?',
    options: [
      'A. >1 Gy',
      'B. >2 Gy',
      'C. >4 Gy',
      'D. >6 Gy',
    ],
    correct: 1,
    explanation: 'Exposure dose ≥2 Gy is the clinical threshold for administering hematopoietic growth factors such as G-CSF. Confirmed by serial absolute lymphocyte count (ALC) tracking at 48-72 hours. Patients with ≥2 Gy exposure should be prioritized for transport to Radiation Injury Treatment Network (RITN) centers.'
  },
  {
    id: 64,
    category: 'CBRN Triage Levels',
    question: 'Among the 3-level CBRN triage, which level determines transport priority and confirms decontamination completion?',
    options: [
      'A. Level 1 - On-Site Triage',
      'B. Level 2 - Medical Triage',
      'C. Level 3 - Evacuation Triage',
      'D. Level 4 - Hospital Triage',
    ],
    correct: 2,
    explanation: 'CBRN 3 levels: Level 1 = on-site (ambulatory/non-ambulatory distinction); Level 2 = medical (4-color classification + CBRN symptoms included); Level 3 = evacuation (confirm decontamination complete, then determine transport priority). No transport to medical facilities before decontamination.'
  },
  {
    id: 65,
    category: 'Metaverse Training - AI Algorithm',
    question: 'Which scenario is included in AI-based metaverse simulation training?',
    options: [
      'A. Simple trauma patient treatment drills',
      'B. Mass patients from blast injuries and nerve agent poisoning due to chemical shell attack on forward outpost units',
      'C. In-hospital CPR drills',
      'D. Urban traffic accident mass casualty management',
    ],
    correct: 1,
    explanation: 'AI metaverse simulation scenario: Chemical shells fall on forward outpost units, causing mass patients from blast injuries and nerve agent poisoning — covers from incident occurrence through triage, treatment, and evacuation. AI virtual assistant provides real-time guidance via HUD/tablet.'
  },
  {
    id: 66,
    category: 'Crush Syndrome - Pre-extrication',
    question: 'What treatment must be performed before extricating a long-duration earthquake burial survivor?',
    options: [
      'A. Full-body X-ray',
      'B. Secure IV/IO access and begin aggressive fluid resuscitation',
      'C. Prophylactic antibiotic administration',
      'D. Determine fluid volume after blood tests',
    ],
    correct: 1,
    explanation: 'Pre-rescue fluid administration is mandatory: upon rescue, reperfusion injury → acute myoglobin release → acute kidney injury + hyperkalemia + cardiac arrest risk. Securing IV/IO access and initiating aggressive fluid resuscitation before rescue is key to preventing death. Also prepare a defibrillator.'
  },
  {
    id: 67,
    category: 'Triage Ethics - Utilitarian Principle',
    question: 'Which best describes the utilitarian principle applied in disaster medicine (triage)?',
    options: [
      'A. Provide the best care to the most critically injured patient',
      'B. Determine treatment order on a first-come, first-served basis',
      'C. Maximize survival probability for the greatest number with limited resources',
      'D. Prioritize the patient\'s own choice over medical judgment',
    ],
    correct: 2,
    explanation: 'Utilitarian principle in disaster medicine: \'the greatest good for the greatest number\'. Paradigm shift from individual optimal care → maximizing group survival. Prioritize patients with the highest survival probability, not the most critically ill. Crisis Standards of Care (CSC).'
  },
  {
    id: 68,
    category: 'Special Population - Pregnant',
    question: 'What is the minimum triage classification for a pregnant woman at a disaster scene?',
    options: [
      'A. Green (non-urgent)',
      'B. Yellow (urgent) or above',
      'C. Red (immediate)',
      'D. Apply the same criteria as the general population',
    ],
    correct: 1,
    explanation: 'Pregnant women are a special population where 2 lives (mother + fetus) are simultaneously at risk — minimum Yellow (urgent) or above classification is recommended. Apply Yellow floor even for mild symptoms. If cesarean section is needed, immediately transport to an obstetric specialist facility.'
  },
  {
    id: 69,
    category: 'Biological - Botulism',
    question: 'What are the clinical characteristics of botulism (Clostridium botulinum) as a bioterrorism agent and the key triage consideration?',
    options: [
      'A. Ascending paralysis, can recover spontaneously - Green classification',
      'B. Descending paralysis, ventilator dependence in multiple patients - resource allocation crisis',
      'C. Fever + rash, transmission prevention is the top priority',
      'D. Rapid respiratory symptoms, antibiotics within 24 hours required',
    ],
    correct: 1,
    explanation: 'Botulinum toxin: characterized by descending paralysis. Ventilator dependence in multiple patients → resource allocation crisis. Antitoxin exists but must be administered early. The core triage problem is the shortage of mechanical ventilation equipment for multiple critically ill patients.'
  },
  {
    id: 70,
    category: 'Basic Triage Classification',
    question: 'Which of the following represents the most fundamental patient classification principle at a mass casualty incident (MCI) scene?',
    options: [
      'A. Provide the best care to each individual patient',
      'B. Provide the greatest benefit to the greatest number of people',
      'C. Treat the most critically injured patient first',
      'D. Treat in order of arrival',
    ],
    correct: 1,
    explanation: 'The core principle of disaster medicine is "doing the greatest good for the largest number of people", a utilitarian paradigm that maximizes the benefit for the group as a whole rather than individual patients.'
  },
  {
    id: 71,
    category: 'Triage Color Classification',
    question: 'Which patients receive the Yellow tag?',
    options: [
      'A. Patients in immediate life-threatening danger requiring immediate life-saving interventions',
      'B. Moderate casualties with no immediate life threat but requiring treatment within 2-12 hours',
      'C. Ambulatory patients with minor injuries for whom outpatient care alone is sufficient',
      'D. Patients with injuries so extensive that they cannot be resuscitated with currently available resources',
    ],
    correct: 1,
    explanation: 'Yellow is the Delayed (T2/Priority 2) category — patients with no immediate life threat but requiring urgent medical treatment. Generally moderate casualties for whom treatment can be delayed 2 to 12 hours.'
  },
  {
    id: 72,
    category: 'START vs SALT Comparison',
    question: 'What is the most serious clinical limitation of the START algorithm?',
    options: [
      'A. Too complex to use, making field application difficult',
      'B. Under-triage rate of approximately 20%, with a high rate of incorrectly classifying critical patients into the delayed treatment group',
      'C. Does not include antidote administration procedures for chemical disasters',
      'D. Both B and C',
    ],
    correct: 3,
    explanation: 'START has an under-triage rate of approximately 20%, greatly exceeding the ACS-COT recommended standard of <5%. It also lacks the ability to assess CBRNE-specific presentations and does not include antidote administration procedures within the algorithm for chemical disasters.'
  },
  {
    id: 73,
    category: 'Nerve Agent Response',
    question: 'When applying the ABCDDs principle to a sarin-exposed patient, what do the two \'D\'s each stand for?',
    options: [
      'A. Diagnosis and Discharge',
      'B. Decontamination and Drugs (antidote administration)',
      'C. Documentation and Discharge',
      'D. Decontamination and Diagnosis',
    ],
    correct: 1,
    explanation: 'ABCDDs stands for Airway, Breathing, Circulation, Decontamination, and Drugs. For nerve agent-exposed patients, decontamination and immediate antidote administration (atropine, pralidoxime) are essential in addition to maintaining airway, breathing, and circulation.'
  },
  {
    id: 74,
    category: 'Radiological Disaster Response',
    question: 'What is the basic principle of patient classification per IAEA guidelines at a radiological disaster scene?',
    options: [
      'A. Determine treatment priority in order of highest radioactive contamination readings',
      'B. Do not provide treatment to radioactively contaminated patients until fully decontaminated',
      'C. Primary patient classification is based on the severity of medical condition, not radioactive contamination readings',
      'D. All radiation-exposed patients are given black tags',
    ],
    correct: 2,
    explanation: 'Per IAEA guidelines, primary patient classification in a radiological emergency must be based strictly on the severity of medical condition, not on radioactive contamination readings. Life-saving treatment is the top priority for patients with life-threatening hemorrhage or airway obstruction, regardless of radiation detector alarms.'
  },
  {
    id: 75,
    category: 'Acute Radiation Syndrome (ARS) Classification',
    question: 'What is the estimated clinical status of a patient who develops vomiting within 30 minutes of radiation exposure?',
    options: [
      'A. Mild or delayed exposure - watchful waiting needed',
      'B. Moderate exposure - outpatient blood count monitoring',
      'C. Serious exposure - immediate CBC and hematopoietic system protection measures',
      'D. Extreme whole-body radiation exposure - immediate hospitalization, decontamination, and intensive resuscitation required',
    ],
    correct: 3,
    explanation: 'Vomiting onset within 30 minutes of exposure suggests extreme whole-body radiation. May be accompanied by acute fever, severe headache, and watery diarrhea within 1 hour; immediate hospitalization and intensive resuscitation treatment are mandatory.'
  },
  {
    id: 76,
    category: 'CBRN Control Zones',
    question: 'What is the medical reason why the \'Disrobing\' process is important at CBRNE disaster scenes?',
    options: [
      'A. Facilitates patient identification',
      'B. Can replace thorough wet decontamination',
      'C. Achieves dry decontamination effect, immediately removing 75-90% of contaminants attached to the body',
      'D. Facilitates physical examination by medical staff',
    ],
    correct: 2,
    explanation: 'The disrobing process alone acts as dry decontamination, and is the fastest and most powerful first clinical action that can immediately remove 75-90% of contaminants attached to the body.'
  },
  {
    id: 77,
    category: 'Biological Disaster Epidemiology',
    question: 'What is the patient management principle for the \'E (Exposed)\' group in the SEIRV model for biological disasters?',
    options: [
      'A. Immediate thorough isolation and ICU ward assignment',
      'B. Prophylactic isolation and priority vaccination target',
      'C. Epidemiological investigation, symptom onset monitoring, and prophylactic antibiotics',
      'D. Can be utilized as quarantine personnel and volunteer workforce',
    ],
    correct: 2,
    explanation: 'E (Exposed) are individuals who have been exposed to a biological agent and may be infected but are in the incubation period and not yet infectious to others. Epidemiological investigation, symptom onset monitoring, and prophylactic antibiotics (e.g., for anthrax exposure) are the core management principles.'
  },
  {
    id: 78,
    category: 'AI-Based Triage',
    question: 'Why did ECRI identify the \'AI diagnostic dilemma\' as the top patient safety threat for 2026 in the Horizon Europe report?',
    options: [
      'A. AI is too slow to respond in real-time to emergency situations',
      'B. AI has blind spots where it fails to recognize subtle patient deterioration in atypical situations such as combined CBRN-E terrorism and crowd crush disasters',
      'C. AI systems are too expensive to deploy in the field',
      'D. AI always over-triages, wasting medical resources',
    ],
    correct: 1,
    explanation: 'Most commercially available machine learning models are trained on retrospective data from routine environments or textbook symptom descriptions, and therefore have blind spots — failing to recognize subtle patient deterioration in atypical situations such as combined CBRN-E terrorism and crowd crush disasters.'
  },
  {
    id: 79,
    category: 'Metaverse Simulation',
    question: 'What is the core metaverse training scenario in the Korean military AI-based CBRN/critical trauma classification algorithm research?',
    options: [
      'A. In-hospital general emergency patient triage drills',
      'B. Mass casualty situation from blast injuries and nerve agent poisoning due to chemical shell attack on forward units',
      'C. Mass casualty rescue drills after natural disasters (earthquake, flood)',
      'D. Emergency department overcrowding response drills during peacetime',
    ],
    correct: 1,
    explanation: 'The core training scenario in the research is \'mass casualty situation from blast injuries and nerve agent poisoning due to chemical shell attack on forward units\', recreating the entire process from incident occurrence through triage, emergency treatment, and evacuation in a metaverse virtual environment.'
  },
  {
    id: 80,
    category: 'Federated Learning',
    question: 'What is the primary reason for introducing Federated Learning in Horizon Europe Project BETHESDA?',
    options: [
      'A. To increase the training speed of AI models',
      'B. A technology that trains AI models at each institution and updates a global model without leaking raw data, when medical data cannot be centralized across countries due to GDPR and privacy regulations',
      'C. To reduce medical staff training costs',
      'D. To completely eliminate cybersecurity threats',
    ],
    correct: 1,
    explanation: 'Federated Learning trains AI models at each institution or user\'s local edge without leaking raw data externally, then transmits only encrypted parameters (weights) to a central server to update the global model. This enables real-time infectious disease surveillance and cross-border tracking while circumventing restrictive GDPR provisions.'
  },
  {
    id: 81,
    category: 'Blast Injury Classification',
    question: 'Why is over-triage particularly problematic at blast accident scenes?',
    options: [
      'A. Because patients lie about having more severe injuries',
      'B. Because there is a tendency to significantly over-estimate ICU transfer need in blast casualties, sending large numbers of mildly shocked patients to the ICU and saturating bed resources',
      'C. Because accurate assessment is difficult when medical staff wear protective suits',
      'D. Because blast casualties are always in critical condition',
    ],
    correct: 1,
    explanation: 'Comparative data between actual blast incidents and general trauma shows that in disaster environments, triage personnel significantly over-estimate the ICU transfer needs of blast casualties. This rapidly saturates ICU beds, resulting in truly critical patients not receiving appropriate intensive care.'
  },
  {
    id: 82,
    category: 'Mortality Paradox',
    question: 'What does the \'Mortality Paradox\' mean in the Korean medical-martial law crisis (2024-2025) research?',
    options: [
      'A. ED in-hospital mortality appeared lower than expected, but hidden casualties (cancer surgery delays, etc.) actually increased sharply',
      'B. No deaths occurred during the medical crisis',
      'C. Medical staff efforts reduced mortality by half',
      'D. AI accurately predicted mortality rates',
    ],
    correct: 0,
    explanation: 'The statistical stability of in-hospital ED mortality (adjusted RR 1.03) was the result of \'Heroic Triage\', but hidden casualties actually surged: 30-day mortality among cancer surgery waitlist patients rose 12%, deaths during acute MI transfers rose 8%, and stroke mortality rose 15%. Death shifted from the ED to the waitlist and transfer process — the \'Mortality Displacement\' phenomenon.'
  },
  {
    id: 83,
    category: 'MPTT-24 Algorithm',
    question: 'What is the key difference between the MPTT-24 algorithm and the conventional START algorithm?',
    options: [
      'A. Sets a lower respiratory rate threshold and uses the GCS scale',
      'B. Raises the respiratory rate threshold to ≥24 bpm and introduces the intuitive AVPU scale instead of GCS to shorten assessment time',
      'C. Classifies patients based on blood pressure alone',
      'D. Only assesses chemical agent exposure status',
    ],
    correct: 1,
    explanation: 'The two core innovations of MPTT-24 are: raising the respiratory rate (RR) threshold to ≥24 bpm to more rapidly identify tachypneic patients, and replacing the complex GCS with the more intuitive AVPU (Alert, Verbal, Pain, Unresponsive) scale to dramatically shorten per-patient assessment time.'
  },
  {
    id: 84,
    category: 'Dirty Resuscitation',
    question: 'In which situation should the concept of \'Dirty resuscitation\' be applied?',
    options: [
      'A. Performing resuscitation after sterilization when medical facilities are contaminated',
      'B. Immediately performing life-saving treatment concurrently within the contamination zone without waiting for complete wet decontamination for critically ill unstable contaminated patients with hypotension or respiratory arrest',
      'C. Providing emergency care using contaminated medical instruments',
      'D. Non-medical personnel performing resuscitation',
    ],
    correct: 1,
    explanation: 'Dirty resuscitation is the concept of immediately performing life-saving procedures such as CPR or airway maintenance concurrently within the contamination zone or during ongoing decontamination, when life-saving treatment cannot be delayed until complete wet decontamination is finished for critically unstable contaminated patients with hypotension or respiratory arrest.'
  },

];

// START Algorithm reference steps
const START_STEPS = [
  { num: '1', text: 'Ambulatory? → YES → GREEN (Minor)' },
  { num: '2', text: 'Breathing? → NO → Open Airway' },
  { num: '3', text: 'Breathing after airway opening? → NO → BLACK (Deceased)' },
  { num: '4', text: 'Breathing after airway opening? → YES → RED (Immediate)' },
  { num: '5', text: 'Respiratory rate > 30/min? → YES → RED (Immediate)' },
  { num: '6', text: 'Capillary refill > 2 sec? → YES → RED (Immediate)' },
  { num: '7', text: 'Follows simple commands? → NO → RED (Immediate)' },
  { num: '8', text: 'Follows simple commands? → YES → YELLOW (Delayed)' }
];

// ============================================
// NEW GAME MODE DATA
// ============================================

const ETHICS_DILEMMAS = [
  {
    id: 'ET-001',
    title: 'Ventilator Allocation — Intergenerational Equity',
    scenario: 'A large-scale respiratory pandemic. Only one ventilator remains in the ICU and two patients simultaneously require it. Patient A is a 20-year-old college student with no underlying conditions. Patient B is a 70-year-old retired physician who has made significant community contributions but has chronic heart failure. Both patients cannot survive without ventilator support.',
    options: [
      {
        id: 'a',
        text: 'Allocate to the 20-year-old patient (Utilitarianism: maximize expected lifespan and survival probability)',
        framework: 'Utilitarianism',
        pros: 'Maximizes expected lifespan and QALY; higher survival probability',
        cons: 'Age-based discrimination; ignores contributions to society'
      },
      {
        id: 'b',
        text: 'Allocate to the 70-year-old patient (Virtue Ethics: recognize social contribution and virtue)',
        framework: 'Virtue Ethics',
        pros: 'Recognizes social contribution',
        cons: 'Unfairness of criteria for measuring ongoing contribution'
      },
      {
        id: 'c',
        text: 'Determine by survival probability score (SOFA-based) with ethics committee review',
        framework: 'Procedural Justice',
        pros: 'Transparent and consistent criteria; minimizes individual bias',
        cons: 'Time-consuming; may be inappropriate in acute emergencies'
      },
      {
        id: 'd',
        text: 'Decide by lottery (Egalitarianism: all lives are equal)',
        framework: 'Egalitarianism',
        pros: 'Complete equality; no discrimination',
        cons: 'No medical basis; ignores survival probability'
      }
    ],
    noSingleAnswer: true,
    explanation: 'This dilemma is one of the most difficult decisions in disaster medicine. Multiple ethical frameworks clash: Utilitarianism (greatest good for the greatest number), Deontological ethics (equal value of life), Virtue Ethics (social contribution), and Procedural Justice (transparent criteria). Under Crisis Standards, survival-probability-based protocols (SOFA, etc.) are used, but ethics committee oversight and transparent procedures are essential. Allocation based solely on age is not supported by most ethical frameworks.',
    ethicalPrinciples: ['Autonomy', 'Beneficence', 'Non-maleficence', 'Justice']
  },
  {
    id: 'ET-002',
    title: 'Timing the Transition to Crisis Standards of Care',
    scenario: 'You are the ED director of a regional hospital. A major disaster has caused a surge of patients. Current ICU occupancy is 88%, and 70% of ventilators are in use. Some staff say "it\'s not a crisis yet" while others say "we must switch to crisis standards right now." What is your decision?',
    options: [
      {
        id: 'a',
        text: 'Maintain conventional standards for now — provide individual optimal care as long as resources remain',
        framework: 'Deontological approach',
        pros: 'Protects the best interests of individual patients',
        cons: 'No preparation for resource depletion; chaos from sudden transition'
      },
      {
        id: 'b',
        text: 'Immediately switch to crisis standards — change resource allocation principles',
        framework: 'Utilitarian approach',
        pros: 'Conserves resources; prepares for mass patient influx',
        cons: 'Reduced care quality for some individual patients; requires legal basis'
      },
      {
        id: 'c',
        text: 'Transition to Contingency Standards with ongoing monitoring and pre-established clear transition criteria',
        framework: 'Stepwise/procedural approach',
        pros: 'Flexible response; transparent criteria; allows organizational preparation',
        cons: 'Complexity of intermediate-stage decisions'
      },
      {
        id: 'd',
        text: 'Wait for instructions from a higher authority (hospital board, ministry of health)',
        framework: 'Delegation of authority',
        pros: 'Legal protection; consistent regional policy',
        cons: 'Delayed reflection of field conditions; may miss the golden window'
      }
    ],
    noSingleAnswer: true,
    explanation: 'Transitioning standards of care should not happen simply when resource shortages begin; clear criteria (occupancy rates, staffing, projected conditions) must be established in advance and applied transparently. Ideally, the stepwise transition criteria (Conventional → Contingency → Crisis) are pre-established in protocols, and on-site physicians and the ethics committee jointly make the determination.',
    ethicalPrinciples: ['Justice', 'Beneficence', 'Transparency', 'Accountability']
  },
  {
    id: 'ET-003',
    title: 'Infectious Disease Patient Information Disclosure vs. Privacy Protection',
    scenario: 'A novel infectious disease similar to MERS has emerged. You are the head of the local public health center. Disclosing the list of healthcare facilities visited by infected patients could prevent spread of infection, but the hospitals fear enormous economic losses and stigma. Individual patients may also face serious disadvantages in their workplace and family relationships. How will you decide?',
    options: [
      {
        id: 'a',
        text: 'Immediately fully disclose hospital names and visit dates — prioritize public health',
        framework: 'Utilitarianism / Public Health Ethics',
        pros: 'Increases voluntary quarantine; interrupts transmission; builds trust',
        cons: 'Stigma; economic harm to hospitals; patient privacy violation'
      },
      {
        id: 'b',
        text: 'Obtain patient consent and disclose only anonymized epidemiological information',
        framework: 'Respect for Autonomy / Privacy Protection',
        pros: 'Protects patient rights',
        cons: 'Anonymous information is insufficient for complete contact tracing'
      },
      {
        id: 'c',
        text: 'Disclose hospital names but keep individual patient information private; notify contacts directly',
        framework: 'Balanced approach / Principle of Proportionality',
        pros: 'Achieves public health goals while minimizing privacy infringement',
        cons: 'Practical limitations of the contact notification system'
      },
      {
        id: 'd',
        text: 'Wait for central health ministry decision; maintain non-disclosure locally',
        framework: 'Hierarchical decision-making',
        pros: 'Consistent national policy',
        cons: 'Delayed local response; risk of repeating the MERS situation'
      }
    ],
    noSingleAnswer: true,
    explanation: 'In the 2015 MERS outbreak, non-disclosure of the hospital list caused panic and collapse of public trust. Public health ethics follows the "principle of least infringement" — disclose only the minimum personal information necessary to achieve public health goals. Most experts agree that disclosing hospital names serves the public interest, while individually identifying information must be protected.',
    ethicalPrinciples: ['Autonomy', 'Justice', 'Common Good', 'Proportionality']
  },
  {
    id: 'ET-004',
    title: 'Healthcare Worker Self-Protection vs. Duty to Treat Patients',
    scenario: 'A patient with a high-risk Ebola-type virus arrives in the ED. Only 2 sets of adequate PPE (Level A) are currently available. There are 4 emergency team members and you are the team leader. If treatment is delayed, the patient has a high risk of death. Do team members without PPE have the right to refuse participation in treatment?',
    options: [
      {
        id: 'a',
        text: 'Only the 2 members with PPE treat the patient; the others focus on securing additional PPE and support roles',
        framework: 'Proportionate risk-sharing',
        pros: 'Protects team safety; efficient role distribution',
        cons: 'Possible reduction in care quality due to limited personnel'
      },
      {
        id: 'b',
        text: 'As a duty of the medical profession, all team members accept the risk and provide treatment',
        framework: 'Deontological professional ethics',
        pros: 'Protects the best interests of the patient',
        cons: 'Risk of healthcare worker infection; threat to their families; long-term workforce loss'
      },
      {
        id: 'c',
        text: 'Only volunteer healthcare workers (voluntary participants) are deployed for treatment; no coercion',
        framework: 'Respect for Autonomy',
        pros: 'Voluntary participation without coercion',
        cons: 'Treatment impossible if no volunteers step forward'
      },
      {
        id: 'd',
        text: 'Maintain patient isolation and delay treatment until PPE is secured',
        framework: 'Risk minimization',
        pros: 'Maximally protects team safety',
        cons: 'Patient deterioration; controversy over abandonment of duty to treat'
      }
    ],
    noSingleAnswer: true,
    explanation: 'WHO and medical ethics experts agree that healthcare workers have no obligation to be exposed to high-risk infections without reasonable protective equipment. At the same time, the medical profession has a duty to accept "acceptable risk." The key point is that institutions have a duty to provide adequate PPE, and when resources are scarce, treatment should be performed by the minimum personnel possible under maximum available protection while rapidly securing additional resources.',
    ethicalPrinciples: ['Beneficence', 'Non-maleficence', 'Autonomy', 'Reciprocity']
  },
  {
    id: 'ET-005',
    title: 'Finding a Family Member at the Triage Scene',
    scenario: 'You are a physician responsible for triage at a disaster scene. You suddenly realize the patient you were about to classify as BLACK is a member of your family. The patient is unconscious with no breathing after airway opening. The triage protocol calls for BLACK classification, but you personally want to do more. How will you act?',
    options: [
      {
        id: 'a',
        text: 'Immediately hand triage responsibility to another physician and step back from the scene',
        framework: 'Conflict of Interest Avoidance Principle',
        pros: 'Maintains objectivity; concentrates resources on other patients',
        cons: 'Personal suffering; difficulty of the decision'
      },
      {
        id: 'b',
        text: 'Follow the protocol: classify as BLACK, focus on other patients',
        framework: 'Deontological fairness',
        pros: 'Consistent protocol; fair to other patients',
        cons: 'Extreme conflict with personal emotions'
      },
      {
        id: 'c',
        text: 'Attempt additional resuscitation because it is a family member; briefly pause treatment of other patients',
        framework: 'Preferential treatment of close relations',
        pros: 'A human response',
        cons: 'Unfair to other patients; wastes resources; protocol violation'
      },
      {
        id: 'd',
        text: 'Ask another physician to re-confirm BLACK classification, then follow the protocol',
        framework: 'Procedural re-confirmation',
        pros: 'Maintains objectivity while showing human consideration',
        cons: 'Additional time required'
      }
    ],
    noSingleAnswer: true,
    explanation: 'This is one of the most humanly difficult scenarios in disaster medicine. Most disaster medicine ethics guidelines recommend that in situations of conflict of interest, the involved clinician avoid making the judgment directly and delegate to another healthcare provider. This prevents judgment distorted by personal emotions and protects the fair treatment of other patients.',
    ethicalPrinciples: ['Justice', 'Conflict of Interest', 'Autonomy', 'Duty']
  },
  {
    id: 'ET-006',
    title: 'Treatment Priority for Foreign Workers During Resource Scarcity',
    scenario: 'A major factory fire has injured 50 people, 20 of whom are undocumented foreign workers. Hospital resources are limited to treating only 30 patients. Some local residents demand "nationals first." As the medical team leader, how will you decide?',
    options: [
      {
        id: 'a',
        text: 'Nationals first — medical system funded by social resources (taxes)',
        framework: 'Nationalism/Communitarianism',
        pros: 'Gains community support',
        cons: 'Clear violation of medical ethics and human rights'
      },
      {
        id: 'b',
        text: 'Regardless of nationality, allocate based solely on medical severity (triage)',
        framework: 'Medical Universalism / Humanitarian Principles',
        pros: 'Upholds medical ethics; recognizes equal value of all lives',
        cons: 'Political and social pressure'
      },
      {
        id: 'c',
        text: 'Nationals first, but critically ill foreign patients treated as exceptions',
        framework: 'Compromise approach',
        pros: 'Realistic compromise',
        cons: 'Arbitrary criteria; opaque principles'
      },
      {
        id: 'd',
        text: 'Wait until a higher authority makes the decision',
        framework: 'Delegation of authority',
        pros: 'Legal protection',
        cons: 'Risk of death due to treatment delay'
      }
    ],
    noSingleAnswer: true,
    explanation: 'WHO, MSF (Médecins Sans Frontières), the International Red Cross, and all international humanitarian medical standards specify that in disaster medicine, treatment must be based solely on medical need, regardless of nationality, status, or ability to pay. Differential allocation based on nationality violates the fundamental medical ethics principles of Justice and Beneficence.',
    ethicalPrinciples: ['Justice', 'Beneficence', 'Human Dignity', 'Universality']
  },
  {
    id: 'ET-007',
    title: 'Ethics of Compulsory Healthcare Worker Mobilization During a Pandemic',
    scenario: 'A severe pandemic has created a critical shortage of healthcare personnel. The government has enacted legislation to compulsorily mobilize all licensed healthcare workers. A retired 70-year-old surgeon and a pediatrician currently on parental leave are included in the mobilization targets. Is this policy ethically justifiable?',
    options: [
      {
        id: 'a',
        text: 'Fully justified — individual sacrifice is inevitable for social solidarity during a disaster',
        framework: 'Communitarianism/Public Health Ethics',
        pros: 'Maximum mobilization of personnel',
        cons: 'Complete disregard for individual autonomy; exposure to risk'
      },
      {
        id: 'b',
        text: 'Completely unjustified — only voluntary participation is ethical',
        framework: 'Liberal autonomy',
        pros: 'Maximum protection of individual rights',
        cons: 'Unable to secure sufficient personnel'
      },
      {
        id: 'c',
        text: 'Conditionally justified — exclude at-risk groups (elderly, those caring for infants), prioritize healthy active clinicians, subject to provision of fair compensation and protection',
        framework: 'Principle of Proportionality / Reciprocal Obligation',
        pros: 'Balances securing personnel with protecting vulnerable groups',
        cons: 'Complexity in establishing criteria'
      },
      {
        id: 'd',
        text: 'Use exceptional incentives to attract volunteers rather than compulsory mobilization',
        framework: 'Voluntary incentivization',
        pros: 'Respects autonomy',
        cons: 'Uncertain whether adequate personnel can be secured quickly'
      }
    ],
    noSingleAnswer: true,
    explanation: 'In disaster medical mobilization ethics, the concept of "reciprocal obligation" is key. In return for the licenses, education, and social status society has provided to healthcare workers, there is an obligation to accept certain risks during a crisis. However, this obligation is justified only when conditions are met: reasonable protection (PPE, insurance), fair compensation, and exemption of vulnerable groups.',
    ethicalPrinciples: ['Autonomy', 'Justice', 'Reciprocity', 'Proportionality']
  },
  {
    id: 'ET-008',
    title: 'Pediatric vs. Adult Ventilator Allocation',
    scenario: 'After an earthquake disaster, only one ventilator remains in the hospital. Patient A is a 7-year-old child with pneumonia but no brain injury. Patient B is a 45-year-old adult with early multi-organ failure but still with recovery potential. When both patients have similar survival probabilities, how do you decide?',
    options: [
      {
        id: 'a',
        text: 'Child first — more future life-years (QALY maximization)',
        framework: 'Utilitarianism / QALY-based',
        pros: 'Maximizes expected survival years',
        cons: 'Controversy over age-based discrimination; devaluation of adult life'
      },
      {
        id: 'b',
        text: 'Adult first — greater contribution to medical resources (social contribution criterion)',
        framework: 'Social contribution criterion',
        pros: 'Recognizes social role',
        cons: 'Violates children\'s rights; ignores future potential contributions'
      },
      {
        id: 'c',
        text: 'Assess only medical survival probability; exclude age from criteria',
        framework: 'Medical criteria first',
        pros: 'Prevents age discrimination; consistent medical criteria',
        cons: 'No decision criteria when both patients have equal survival probability'
      },
      {
        id: 'd',
        text: 'Lottery — random allocation when survival probabilities are equal',
        framework: 'Egalitarianism',
        pros: 'Complete fairness',
        cons: 'Ignores medical nuances; family and social backlash'
      }
    ],
    noSingleAnswer: true,
    explanation: 'Pediatric vs. adult resource allocation is a difficult problem without consensus even among bioethicists worldwide. Many crisis standards protocols exclude age itself from allocation criteria and instead use physiological survival probability scores. Since children have different physiology from adults, separate scoring criteria (PELOD-2, etc.) are used, and the international trend is to avoid direct age-based discrimination.',
    ethicalPrinciples: ['Justice', 'Utilitarianism', 'Children\'s Rights', 'Equal Value of Life']
  },
  // ============================================
  // NEW ETHICS DILEMMAS (CBRN/Special Disaster)
  // ============================================
  {
    id: 'ETH-009',
    title: 'Nerve Agent Apneic Patients — Ethics of Expectant Classification',
    scenario: 'At the scene of a mass nerve agent exposure. Of 50 patients, 5 are in apnea + cardiopulmonary arrest and unresponsive to initial Atropine. Only 2 healthcare providers are available, and 30 doses of Atropine must cover the remaining 45 critically ill patients. Should the cardiac arrest patients be classified as Black (Expectant)?',
    noSingleAnswer: true,
    options: [
      {
        id: 'a',
        text: 'Classify all 5 as Black (Expectant) — concentrate resources on 45 potentially survivable patients',
        framework: 'Utilitarianism / Crisis Standards of Care (CSC)',
        pros: ['Maximizes survival of the greatest number', 'Efficient use of limited antidote', 'Consistent with CBRN MCI guidelines'],
        cons: ['May abandon some potentially survivable patients', 'Moral distress for healthcare providers']
      },
      {
        id: 'b',
        text: 'Attempt additional Atropine for all 5 — all lives are equal',
        framework: 'Deontological Ethics / Sanctity of Life',
        pros: ['Provides equal opportunity to all lives'],
        cons: ['Risk of 45 deaths if 30 antidote doses are exhausted', 'Inefficient resource allocation']
      },
      {
        id: 'c',
        text: 'Two additional doses; if no response, transition to Black — stepwise approach',
        framework: 'Principle of Proportionality / Time-limited trial',
        pros: ['Additional attempt provides moral justification', 'Limited resource consumption'],
        cons: ['Treatment of other patients delayed during additional attempt time']
      },
      {
        id: 'd',
        text: 'Convene an emergency ethics committee, then decide',
        framework: 'Procedural Justice',
        pros: ['Systematic and transparent decision-making'],
        cons: ['Convening an ethics committee on scene is unrealistic; golden window lost']
      },
    ],
    discussion: 'In a CBRN mass casualty situation, classifying cardiopulmonary arrest patients who are unresponsive to initial antidose as Expectant is a core application of Crisis Standards of Care. In normal circumstances, CPR is not abandoned, but in an MCI, it may be an unavoidable decision to achieve "the greatest good for the greatest number." All decisions must be documented and reassessed when resources become available.'
  },
  {
    id: 'ETH-010',
    title: 'Refusal to Treat Radiologically Contaminated Patients — Healthcare Worker Fear',
    scenario: 'After a dirty bomb explosion, a radiologically contaminated patient arrives at the ED. Decontamination has been completed, but some nurses are refusing to participate in treatment due to "radiation fear." The patient is in hemorrhagic shock and requires immediate surgery. One of the anesthesiologists on the surgical team is also hesitating to participate.',
    noSingleAnswer: true,
    options: [
      {
        id: 'a',
        text: 'Scientifically explain the safety of a decontaminated patient and encourage participation',
        framework: 'Educational approach / Risk communication',
        pros: ['Relieves fear through scientific evidence', 'Promotes voluntary participation'],
        cons: ['Fear may not be immediately resolved', 'Time delay']
      },
      {
        id: 'b',
        text: 'Respect the refusal and replace with other healthcare providers',
        framework: 'Respect for Autonomy',
        pros: ['Protects healthcare worker autonomy'],
        cons: ['Patient death if no replacement available', 'Team morale deterioration']
      },
      {
        id: 'c',
        text: 'Order participation as a professional medical duty, while providing additional protective equipment and promising exposure documentation',
        framework: 'Reciprocal Obligation / Proportionate Risk',
        pros: ['Protects patient life', 'Minimizes risk through protective measures'],
        cons: ['Ethical problems with coercive orders', 'Long-term damage to team relationships']
      },
      {
        id: 'd',
        text: 'Form a team of volunteer healthcare workers only and proceed with surgery',
        framework: 'Voluntary participation + patient priority',
        pros: ['Team cohesion through voluntary participation', 'Patient treatment proceeds'],
        cons: ['Reduced surgical quality if personnel insufficient']
      },
    ],
    discussion: 'Radiophobia is a psychological barrier far larger than the actual radiation risk. A decontaminated patient poses almost no radiation risk to healthcare providers. However, ignoring or coercing healthcare workers\' fears damages long-term team capability. The best approach is advance education, transparent confirmation that decontamination is complete, provision of additional protective equipment, and a commitment to radiation exposure documentation and follow-up.'
  },
  {
    id: 'ETH-011',
    title: 'Earthquake Burial Rescue Order — Who to Rescue First',
    scenario: 'Two buried survivors are found simultaneously at a building collapse scene. Patient A is a 5-year-old child — relatively accessible but buried under compression for over 4 hours. Patient B is a 35-year-old adult — difficult to access but with shorter compression time (1 hour), meaning lower crush syndrome risk. Only one rescue team is available.',
    noSingleAnswer: true,
    options: [
      {
        id: 'a',
        text: 'Rescue child (A) first — more accessible + urgent crush syndrome risk',
        framework: 'Medical urgency first / Child protection',
        pros: ['Prioritizes the more medically urgent patient', 'Efficient due to accessibility', 'Child protection principle'],
        cons: ['Access to the adult patient may become more difficult']
      },
      {
        id: 'b',
        text: 'Rescue adult (B) first — shorter compression time means lower complication risk; faster rescue possible',
        framework: 'Efficiency-based approach',
        pros: ['Quick rescue secures safety of one person rapidly'],
        cons: ['Increased risk of crush syndrome progression in the child']
      },
      {
        id: 'c',
        text: 'Assess based on medical urgency (compression time, vital signs); exclude age from criteria',
        framework: 'Medical criteria paramount',
        pros: ['Objective criteria without age discrimination'],
        cons: ['Accurate medical assessment may be difficult on scene']
      },
      {
        id: 'd',
        text: 'Split the rescue team and attempt simultaneous rescue',
        framework: 'Resource splitting',
        pros: ['Provides opportunity to both patients'],
        cons: ['Dividing a single team reduces rescue capacity; risk of failing both patients']
      },
    ],
    discussion: 'In disaster rescue, "who to rescue first" must be determined by comprehensively assessing medical urgency, accessibility, and probability of successful rescue. Medical urgency (risk of crush syndrome progression) is generally the most important criterion, while accessibility affects rescue efficiency. Age itself cannot be the criterion for rescue order, but pediatric physiological compensatory capacity and crush injury complication patterns differ from adults, requiring separate consideration.'
  },
  {
    id: 'ETH-012',
    title: 'Burn Patient Resource Allocation — Severe Burns vs. Multiple Moderate Burns',
    scenario: 'An industrial explosion has left only 5 beds available at the burn center. Patient A is a 40-year-old adult with 80% TBSA third-degree burns (survival rate <10%). Patients B-F are 5 individuals each with 20-30% TBSA second-degree burns (survival rate >80%). If intensive treatment is focused on A alone, 2 of patients B-F cannot receive burn center treatment.',
    noSingleAnswer: true,
    options: [
      {
        id: 'a',
        text: 'Attempt best treatment for Patient A — duty to treat as long as there is any survival possibility',
        framework: 'Deontological approach / Sanctity of Life',
        pros: ['Medical ethics of doing one\'s best for every life'],
        cons: ['Concentrating resources on a patient with <10% survival means 2 of 5 cannot be treated']
      },
      {
        id: 'b',
        text: 'Prioritize 5 patients B-F — maximize survival probability',
        framework: 'Utilitarianism / QALY maximization',
        pros: ['Maximum survival of the greatest number', 'Efficient use of limited resources'],
        cons: ['Deprives Patient A of treatment opportunity', 'Moral distress for healthcare providers']
      },
      {
        id: 'c',
        text: 'Provide palliative care to Patient A; allocate burn center beds to B-F',
        framework: 'Proportionate approach / Palliative care',
        pros: ['Provides humane care to A as well', 'Optimal resource allocation'],
        cons: ['Ethical burden of forgoing aggressive treatment for A']
      },
      {
        id: 'd',
        text: 'Attempt transfer to external burn centers while simultaneously treating all patients',
        framework: 'Resource expansion attempt',
        pros: ['Effort to provide opportunity to all patients'],
        cons: ['Time consumed during transfer attempts; realistic feasibility uncertain']
      },
    ],
    discussion: 'In burn patient resource allocation, survival probability is the most important medical criterion. While the survival rate for 80% TBSA third-degree burns is <10%, patients with 20-30% TBSA burns have survival rates >80%, making it justifiable under Crisis Standards of Care to prioritize resources for the latter. However, palliative care for Patient A (pain management, humane care) must be provided, and the framing should be a "change in treatment goals" rather than "abandonment."'
  },

];

const LEADERSHIP_SCENARIOS = [
  {
    id: 'LS-001',
    title: 'The Collapse of the Myth of Absolute Safety',
    situation: 'You are the medical director of a large hospital. A culture of safety complacency — "disasters will never happen at our hospital" — is widespread among staff. Even after a fire recently occurred at a nearby hospital, the prevailing response is "we are different." Today you must discuss disaster preparedness investment at the hospital board.',
    options: [
      { id: 'a', text: 'Report to the board that "our hospital is safe" and argue that disaster preparedness investment is unnecessary', correct: false },
      { id: 'b', text: 'Present the nearby hospital case with concrete data; help the board face the reality that "absolute safety does not exist" and propose a phased investment plan', correct: true },
      { id: 'c', text: 'Wait for the board\'s decision and maintain the status quo', correct: false },
      { id: 'd', text: 'Wait until staff develop safety awareness on their own', correct: false }
    ],
    bestChoice: 1,
    leadershipPrinciple: 'Overcoming the Illusion of Control — Facing Reality',
explanation: 'One of the core causes of the Fukushima nuclear accident was the "myth of absolute safety." Crisis leaders must counter organizational safety complacency ("It won\'t happen to us") by using concrete data and case studies to help the organization face reality. As the Stockdale Paradox demonstrates, acknowledging harsh reality is the starting point for genuine crisis preparedness.'
  },
  {
    id: 'LS-002',
    title: 'Early Pandemic — The Dilemma of Transparent Communication',
    situation: 'A novel infectious disease has emerged. You are the director of a regional public hospital. Confirmed case counts are still low and the risk level is unclear. Staff are anxious, and local media has begun reporting that "the hospital is hiding information." What is your initial communication strategy?',
    options: [
      { id: 'a', text: '"No official announcement until the situation is clear" — information control', correct: false },
      { id: 'b', text: '"There is nothing to worry about; everything is under control" — optimistic messaging', correct: false },
      { id: 'c', text: '"Transparently disclose both what is currently known and unknown, explain our response measures, and acknowledge uncertainty"', correct: true },
      { id: 'd', text: 'Wait until instructions arrive from a higher authority', correct: false }
    ],
    bestChoice: 2,
    leadershipPrinciple: 'Speed of Trust — Transparency and Timeliness',
    explanation: 'In the MERS outbreak, information non-disclosure caused distrust and panic. The Speed of Trust principle: transparency may increase anxiety in the short term, but builds trust over time and ultimately increases response speed. The core of WHO crisis communication principles is honestly conveying "what is known, what is unknown, and what is being done" simultaneously.'
  },
  {
    id: 'LS-003',
    title: 'Itaewon-Type Disaster — Establishing ICS Amid Chaos',
    situation: 'A large-scale crowd crush has occurred. Police, firefighters, emergency physicians, and volunteers are all mixed at the scene, each issuing different instructions. You are an emergency medicine physician who has just arrived. What must you do in the first 5 minutes?',
    options: [
      { id: 'a', text: 'Immediately begin treating the most critically ill patient', correct: false },
      { id: 'b', text: 'Delegate command to the police and focus exclusively on medical treatment', correct: false },
      { id: 'c', text: 'Identify or designate an incident commander; establish a command post; clearly define the medical sector lead role; establish unified command with other teams', correct: true },
      { id: 'd', text: 'Patrol the entire scene for situational awareness before making decisions', correct: false }
    ],
    bestChoice: 2,
    leadershipPrinciple: 'Incident Command System (ICS) — Establishing Order Amid Chaos',
    explanation: 'The key lesson from the Itaewon tragedy: establishing command structure in the first 5 minutes determines the quality of the entire subsequent response. Organize before you treat. The physician does not need to be the overall incident commander, but a clear command structure for the medical sector and establishment of unified command with other agencies is essential.'
  },
  {
    id: 'LS-004',
    title: '"Sucking Down" — Listening to Front-Line Voices',
    situation: 'A suspected anthrax mail terrorism incident has occurred. You are the director of a public health agency. Postal sorting workers on the front line have reported that "these symptoms seem related to anthrax," but middle managers said "they are not experts so we can ignore them." How will you respond?',
    options: [
      { id: 'a', text: 'Trust only expert opinions; ignore front-line worker reports', correct: false },
      { id: 'b', text: 'Immediately take the front-line worker report seriously, dispatch a specialist team, and directly confirm on site', correct: true },
      { id: 'c', text: 'Wait for additional reports', correct: false },
      { id: 'd', text: 'Announce to the media that it is "under investigation" and wait for results', correct: false }
    ],
    bestChoice: 1,
    leadershipPrinciple: '"Sucking Down" — Valuing Front-Line Information and Early Warning Systems',
    explanation: 'During the 2001 U.S. anthrax mail attack, early reports of symptoms from front-line postal workers were ignored, resulting in deaths. "Sucking Down" is a culture of directly transmitting information from front-line (field) workers to top decision-makers across organizational hierarchies. Crisis leaders must build systems that detect "weak signals" from the field early.'
  },
  {
    id: 'LS-005',
    title: 'MERS Hospital Infection — Information Disclosure Decision',
    situation: 'A MERS patient has been identified at your hospital, and 50 healthcare workers and patients have been exposed. The hospital director wants non-disclosure, saying "if we go public we may have to close." The Ministry of Health has not yet decided on disclosure. As the infection control officer, how will you act?',
    options: [
      { id: 'a', text: 'Follow hospital director\'s instructions and maintain non-disclosure', correct: false },
      { id: 'b', text: 'Notify exposed individuals individually but make no public announcement', correct: false },
      { id: 'c', text: 'Immediately and strongly recommend disclosure to the Ministry of Health; internally notify and quarantine all exposed individuals; consider media disclosure if necessary', correct: true },
      { id: 'd', text: 'Maintain non-disclosure even to exposed individuals until the Ministry of Health decides', correct: false }
    ],
    bestChoice: 2,
    leadershipPrinciple: 'Courage in Crisis Communication — Transparency vs. Organizational Interest',
    explanation: 'In the 2015 MERS outbreak, Samsung Seoul Hospital\'s non-disclosure decision led to a super-spreading event. In crisis leadership, the courageous decision to prioritize public health over organizational interests ultimately protects long-term organizational credibility. WHO crisis communication principle: transparency looks like a short-term loss but is a long-term investment in trust capital.'
  },
  {
    id: 'LS-006',
    title: 'Conducting an After Action Review (AAR) Following a Major Disaster',
    situation: 'The response to a major earthquake has concluded. The team is exhausted and relieved that "we did well," but there were several response failures (communication errors, transport confusion). Some managers say, "Everyone worked hard — does it really need to be picked apart?" As team leader, how will you conduct the AAR?',
    options: [
      { id: 'a', text: 'Skip the AAR to protect team morale; emphasize only the successes', correct: false },
      { id: 'b', text: 'Conduct the AAR with the sole purpose of finding who is responsible; focus only on failures', correct: false },
      { id: 'c', text: 'Conduct AAR within 72 hours; in a psychologically safe environment, discuss both successes and failures; focus on system improvement rather than individual accountability; incorporate findings into next drill', correct: true },
      { id: 'd', text: 'Conduct it after 6 months when sufficient time has passed', correct: false }
    ],
    bestChoice: 2,
    leadershipPrinciple: 'AAR — Building a Learning Organization Culture',
    explanation: 'The AAR (After Action Review) is one of the most important leadership actions following a disaster. Core principles: ① conduct within 72 hours (while memories are fresh), ② conduct in a psychologically safe environment (no blame), ③ discuss both successes and failures, ④ focus on systems, not individuals. A Learning Organization grows stronger after every disaster.'
  },
  // ============================================
  // NEW LEADERSHIP SCENARIOS (CBRN)
  // ============================================
  {
    id: 'LD-007',
    title: 'CBRN Scene Commander — Zone Establishment and PPE Conflict',
    situation: 'You have arrived as the medical commander at a CBRN terrorism scene. Zones (Hot/Warm/Cold) have not yet been established, and with PPE scarce, some medical personnel are attempting to enter the Hot Zone without protection, saying "patients are dying — we can\'t wait." Roles among police, fire, and medical personnel are confused.',
    options: [
      { id: 'a', text: 'Respect medical personnel\'s dedication and allow Hot Zone entry, instructing them to proceed as quickly as possible', correct: false, feedback: 'Medical personnel who enter without PPE become additional patients, not rescuers. Scene safety takes precedence over rescue.' },
      { id: 'b', text: 'Immediately order a ban on Hot Zone entry; establish zones; after securing PPE, allow staged entry; clearly distribute roles: police (control), fire (rescue/decontamination), medical (triage/treatment)', correct: true, feedback: '"Scene safety before patient rescue" — medical personnel without PPE become additional patients. Under ICS principles, zone establishment and role assignment are the top priority.' },
      { id: 'c', text: 'Halt all activity until the specialist HAZMAT team arrives', correct: false, feedback: 'A complete halt misses the golden window. Start what can be done safely within the available resources.' },
      { id: 'd', text: 'Delegate all decisions to the most experienced physician', correct: false, feedback: 'CBRN response is not a medical issue alone. Multi-agency unified command is essential.' },
    ],
    bestChoice: 1,
    leadershipPrinciple: 'Scene Safety First Principle — "You cannot save them if you become one of them"',
    explanation: 'At a CBRN scene, entry without PPE turns medical personnel into additional patients and further weakens response capacity. In the 1995 Tokyo sarin attack, 135 rescuers who entered without PPE were secondarily contaminated. The essence of crisis leadership is "maintaining principles in the face of emotional pressure." Immediately designate an ICS Safety Officer and strictly follow the sequence: secure safety → establish zones → don PPE → staged entry.'
  },
  {
    id: 'LD-008',
    title: 'Mass Burn Patients — Surge Capacity Decision for Burn Center',
    situation: 'An industrial explosion has produced 18 critically ill burn patients, but the regional burn center has only 10 beds. The burn center chief says "we can accept a maximum of 10." Sending the remaining 8 to general hospitals means they will not receive specialized burn care. As medical commander, how will you decide?',
    options: [
      { id: 'a', text: 'Respect the burn center\'s capacity; admit only 10; transfer the rest to general hospitals', correct: false, feedback: 'Transferring patients to general hospitals without augmenting their burn care capacity will increase mortality.' },
      { id: 'b', text: 'Prioritize patients with inhalation injury for burn center placement; establish remote burn specialist consultation for the rest in general hospital ICUs; activate surge capacity', correct: true, feedback: 'The optimal strategy is placing the most critical patients (inhalation injury) at the specialist center while augmenting general hospital capacity with remote consultation.' },
      { id: 'c', text: 'Force all 18 into the burn center — crisis situation requires exceeding capacity', correct: false, feedback: 'Placing 18 patients in 10 beds reduces care quality for all patients and may increase overall mortality.' },
      { id: 'd', text: 'Transfer all 8 remaining patients to a distant burn center', correct: false, feedback: 'There is risk of patient deterioration during transfer time. Augmenting nearby hospital capacity is the priority.' },
    ],
    bestChoice: 1,
    leadershipPrinciple: 'Surge Capacity Management — Creative Expansion of Resources',
    explanation: 'When mass specialized patients (burns, chemical, etc.) occur, exceeding specialist center capacity is typical. Crisis leadership means "optimizing within available resources." Key strategies: ① Prioritize patients requiring the most specialized care (inhalation injury, full-thickness burns) at specialist centers; ② Immediately establish a remote burn specialist consultation system (tele-burn) in general hospital ICUs; ③ Secure beds by early discharge of non-urgent patients from the burn center; ④ Activate the 4S (Staff, Stuff, Space, Systems) surge strategy.'
  },

];

const TEAMWORK_CHALLENGES = [
  {
    id: 'TW-001',
    title: 'ED Overcrowding — SBAR Reporting',
    scenario: 'You are an ED nurse. A suspected sepsis patient has been admitted with BP 80/50, temperature 39.5°C, and altered consciousness. You need to quickly report to the attending resident. What communication tool should you use?',
    clinicalContext: {
      patient: '64-year-old male, suspected sepsis',
      vitals: 'BP 80/50, HR 120, Temp 39.5°C, SpO2 92%',
      history: 'Diabetes; currently being treated for UTI',
      urgency: 'Immediate physician intervention required'
    },
    options: [
      { id: 'a', text: '"Doctor, the patient in room 606 doesn\'t look so good. Could you come take a look?"', correct: false, tool: 'Unstructured report' },
      { id: 'b', text: 'SBAR: "Situation: Room 606 sepsis suspect with BP dropped to 80/50. Background: 64-year-old with diabetes, being treated for UTI. Assessment: Possible septic shock. Recommendation: Request immediate bedside evaluation and initiation of resuscitation protocol"', correct: true, tool: 'SBAR' },
      { id: 'c', text: 'Document in the chart and wait for the physician to read it', correct: false, tool: 'Passive waiting' },
      { id: 'd', text: 'Explain the situation to another nurse and ask for a joint assessment', correct: false, tool: 'Peer consultation' }
    ],
    bestChoice: 1,
    teamsteppsTool: 'SBAR (Situation-Background-Assessment-Recommendation)',
    explanation: 'SBAR is a structured communication tool for medical teams that ensures all critical information is conveyed without omission, especially in acute clinical situations. Unstructured reports ("doesn\'t look so good") can prevent physicians from recognizing immediate danger. Septic shock has a golden window, making a clear and rapid SBAR communication lifesaving.'
  },
  {
    id: 'TW-002',
    title: 'Intraoperative Risk Discovery — Two-Challenge Rule',
    scenario: 'During surgery, a resident discovers suspicious tissue at the operative site. The resident told the attending once but received the response "keep going." The resident thinks it might be a vessel but is not certain. What should the resident do?',
    clinicalContext: {
      situation: 'Suspicious tissue discovered during laparoscopic surgery',
      concern: 'Possible major vessel',
      response: 'Attending physician ignored the first expression of concern',
      risk: 'Massive hemorrhage if incorrectly resected'
    },
    options: [
      { id: 'a', text: 'Continue as directed by the attending physician', correct: false, tool: 'Compliance with orders' },
      { id: 'b', text: 'Stop the surgery and leave the operating room', correct: false, tool: 'Excessive reaction' },
      { id: 'c', text: 'Two-Challenge Rule: Express concern strongly a second time ("I believe this may be a vessel. We must confirm before proceeding"); if still ignored, call a superior', correct: true, tool: 'Two-Challenge Rule' },
      { id: 'd', text: 'Document concerns in the chart only after surgery', correct: false, tool: 'Post-hoc documentation' }
    ],
    bestChoice: 2,
    teamsteppsTool: 'Two-Challenge Rule',
    explanation: 'Two-Challenge Rule: when a safety concern is ignored, it must be voiced strongly at least twice; if ignored a second time, there is an obligation to request supervisor intervention. This is a core TeamSTEPPS tool that empowers lower-ranking team members to raise safety concerns in hierarchical medical cultures. Inappropriate deference during surgery is one of the leading causes of medical errors.'
  },
  {
    id: 'TW-003',
    title: 'Mass Patient Arrival — Brief/Huddle/Debrief',
    scenario: 'You are the ED team leader. You receive notification that 20 patients from a major traffic accident will arrive in 30 minutes. The ED is currently operating normally. How will you direct the team to prepare?',
    clinicalContext: {
      notification: '30-minute advance notification',
      currentStatus: 'ED operating normally',
      incoming: 'Approximately 20 major trauma patients expected',
      available: '3 physicians, 6 nurses'
    },
    options: [
      { id: 'a', text: 'Each team member prepares independently', correct: false, tool: 'Individual preparation' },
      { id: 'b', text: 'Call a full team Huddle: share situation within 2 minutes, distribute roles, determine priorities, request additional personnel', correct: true, tool: 'Huddle' },
      { id: 'c', text: 'Take action after patients arrive and the situation unfolds', correct: false, tool: 'Reactive response' },
      { id: 'd', text: 'Delegate all decisions to the most experienced physician', correct: false, tool: 'Solo leadership' }
    ],
    bestChoice: 1,
    teamsteppsTool: 'Huddle (Rapid Team Meeting)',
    explanation: 'The TeamSTEPPS Huddle rapidly assembles the team to share current status, redistribute roles, and adjust plans when an unexpected change occurs. A 2-minute Huddle before mass patient arrival significantly reduces chaos after arrival. Brief (share plan in advance) → Huddle (readjust when situation changes) → Debrief (post-event review) is the structured team communication flow in TeamSTEPPS.'
  },
  {
    id: 'TW-004',
    title: 'Medication Error Risk — Closed-Loop Communication',
    scenario: 'A disaster scene physician verbally orders a nurse to administer "1mg epinephrine IV" in a chaotic environment. Ambient noise is high and multiple team members are talking simultaneously. As the nurse, what should you do?',
    clinicalContext: {
      order: 'Administer epinephrine 1mg IV',
      environment: 'High-noise disaster scene',
      risk: 'Risk of misinterpreting or mishearing verbal orders',
      urgency: 'Immediate administration required'
    },
    options: [
      { id: 'a', text: 'Immediately prepare and administer epinephrine', correct: false, tool: 'One-way receipt' },
      { id: 'b', text: 'Ask "epinephrine?" and wait for the physician\'s confirmation', correct: false, tool: 'Incomplete confirmation' },
      { id: 'c', text: 'Closed-Loop: "Epinephrine 1mg IV confirmed" (Read-back) → after administration: "Epinephrine 1mg IV administered" (Call-out)', correct: true, tool: 'Closed-Loop Communication' },
      { id: 'd', text: 'Document the order in the chart then delegate to another nurse', correct: false, tool: 'Task delegation' }
    ],
    bestChoice: 2,
    teamsteppsTool: 'Closed-Loop Communication',
    explanation: 'Closed-Loop Communication: ① Sender issues clear instruction → ② Receiver performs Read-back → ③ Sender verifies → ④ After completion, perform Call-out. In noisy and chaotic environments like disaster scenes, mishearing verbal orders is a major cause of medication errors. Research shows Read-back alone can reduce medication errors by up to 70%.'
  },
  {
    id: 'TW-005',
    title: 'Identifying Team Member Burnout — Mutual Support',
    scenario: 'After 72 hours of disaster response, an emergency medicine resident on your team is showing obvious signs of burnout: impaired judgment, hand tremors, and decreased concentration. The resident says "I\'m fine" and tries to keep working. You are the team leader. How will you respond?',
    clinicalContext: {
      situation: '72 consecutive hours of disaster response',
      signs: 'Hand tremors, impaired judgment, decreased concentration',
      selfReport: '"I\'m fine"',
      risk: 'A burned-out physician continuing to practice threatens patient safety'
    },
    options: [
      { id: 'a', text: 'Since they say they\'re fine, let them keep working', correct: false, tool: 'Bystander behavior' },
      { id: 'b', text: 'Publicly say "You are too exhausted" and force them to go home', correct: false, tool: 'Public criticism' },
      { id: 'c', text: 'Task Assistance: pull them aside privately and say "This situation is genuinely hard, and a brief rest will be better for both the patients and the team. I\'ll cover for a bit" — then arrange a handoff', correct: true, tool: 'Task Assistance / Mutual Support' },
      { id: 'd', text: 'Wait until the situation ends, then address it afterward', correct: false, tool: 'Post-hoc handling' }
    ],
    bestChoice: 2,
    teamsteppsTool: 'Task Assistance & Mutual Support',
    explanation: 'TeamSTEPPS Mutual Support: proactively identify team member overload/burnout and voluntarily provide Task Assistance. When a burned-out physician continues to practice, patient safety is threatened — the team leader\'s intervention is both team protection and a patient safety action. Public criticism damages team members\' self-esteem and provokes resistance, so a private and empathic approach is more effective.'
  },
  // ============================================
  // NEW TEAMWORK CHALLENGES (CBRN)
  // ============================================
  {
    id: 'TW-006',
    title: 'PPE-Donned Environment — Overcoming Communication Barriers',
    scenario: 'At a chemical disaster scene, all team members are wearing PPE Level B. A physician announced triage classification results, but a nurse could not hear clearly due to noise and voice distortion and attached an incorrect triage tag (GREEN instead of RED). The error was discovered when the patient\'s condition deteriorated.',
    clinicalContext: {
      patient: '42-year-old male, suspected nerve agent exposure',
      vitals: 'RR 28, HR 110, SpO2 88%, miosis (pupil constriction)',
      history: 'SLUDGEM symptoms progressing',
      urgency: 'RED classification required — immediate antidote administration',
    },
    options: [
      { id: 'a', text: 'Repeat triage results more loudly', correct: false, tool: 'Volume increase' },
      { id: 'b', text: 'Closed-Loop + Visual Verification: verbally announce triage color + pre-agreed hand signals (finger count) + visual confirmation after tag placement (Read-back)', correct: true, tool: 'Closed-Loop + Visual Verification' },
      { id: 'c', text: 'Physician directly places all triage tags', correct: false, tool: 'Solo tasking' },
      { id: 'd', text: 'Remove PPE to communicate, then re-don', correct: false, tool: 'PPE removal (dangerous)' },
    ],
    bestChoice: 1,
    teamsteppsTool: 'Closed-Loop Communication + Visual Verification (PPE Environment Adaptation)',
    explanation: 'In a PPE-donned environment, standard verbal communication is severely limited. TeamSTEPPS Closed-Loop Communication must be adapted for the PPE environment: ① Pre-agreed hand signal system (1 finger = RED, 2 = YELLOW, 3 = GREEN, fist = BLACK); ② Use loud voice and short phrases; ③ Visual mutual confirmation after tag placement (visual verification); ④ Buddy system (pairs) during team Huddles to prevent errors. Advance training is the key.'
  },
  {
    id: 'TW-007',
    title: 'Multi-Agency Joint Response — Using CUS Words',
    scenario: 'At a major earthquake response scene, the fire rescue team commander decides "there is additional collapse risk, but we have survivor signals so we will continue the rescue." You are the medical team leader at the scene and are seriously concerned about rescuer safety, but it is difficult to intervene in another agency\'s decision.',
    clinicalContext: {
      situation: 'Warning of additional building collapse risk',
      concern: 'Threat to rescuer safety',
      response: 'Fire rescue commander decides to continue rescue',
      risk: 'Additional collapse would bury rescuers → additional mass casualties',
    },
    options: [
      { id: 'a', text: 'Respect the fire department\'s decision and have the medical team stand by', correct: false, tool: 'Passive acceptance' },
      { id: 'b', text: 'Use CUS words: "I am Concerned about the additional collapse risk, I am Uncomfortable with the current rescue plan, This is a Safety issue" — request a joint risk assessment at the unified command post', correct: true, tool: 'CUS Words (Concerned-Uncomfortable-Safety)' },
      { id: 'c', text: 'Medical team independently orders a halt to rescue operations', correct: false, tool: 'Overstepping authority' },
      { id: 'd', text: 'Report to a higher authority and await instructions', correct: false, tool: 'Awaiting superior directives' },
    ],
    bestChoice: 1,
    teamsteppsTool: 'CUS Words (Concerned-Uncomfortable-Safety issue)',
    explanation: 'TeamSTEPPS CUS Words are a structured tool for escalating safety concerns step by step: ① "I am Concerned" (expressing concern), ② "I am Uncomfortable" (emphasizing discomfort), ③ "This is a Safety issue" (declaring a safety issue — requesting immediate halt of all activity). In multi-agency joint responses, when the medical team needs to raise safety concerns about another agency\'s decision, CUS words convey the message in a structured way without emotional conflict. Joint risk assessment at the Unified Command post is the final decision-making mechanism.'
  },

];
