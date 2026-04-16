// ============================================
// DISASTER MEDICINE SIMULATOR — CAMPAIGN MODE
// ============================================
// Campaign Mode: Cinematic Story-Based RPG Disaster Medicine Education
// Author: Disaster Medicine Edu Project
// Based on: CIREcourse CBRNE / Tactical Medicine / Counter-Terrorism Medicine
// ============================================

window.CAMPAIGN_MODE = {

  // ==========================================
  // ROLES — Player Job Selection
  // ==========================================
  roles: [
    {
      id: 'paramedic',
      name: 'Paramedic',
      emoji: '🚑',
      desc: 'A field-frontline EMS professional who directly treats patients. Preserves the golden hour with quick judgment and hands-on skill.',
      bonuses: { triage: +15, treatment: +20, transport: +10 },
      special: 'First Aid Master — Double bonus XP when correct on treatment questions',
      flavor: 'Pulling on gloves in the back of the ambulance, heading toward the scene. These hands save lives.',
      startLevel: 1,
      maxTitle: 'Senior Paramedic',
      unlockHint: 'Available from the start'
    },
    {
      id: 'emergency_doc',
      name: 'Emergency Physician',
      emoji: '👨‍⚕️',
      desc: 'A specialist managing critical patients in the ER. The key leader in diagnosis and treatment decisions.',
      bonuses: { diagnosis: +20, treatment: +15, leadership: +10 },
      special: 'Diagnostic Instinct — Automatically eliminates 1 wrong answer on diagnostic questions',
      flavor: 'Receiving an emergency call in the on-call room. Must lead the major trauma team.',
      startLevel: 1,
      maxTitle: 'CBRNE Response Physician',
      unlockHint: 'Available from the start'
    },
    {
      id: 'hazmat',
      name: 'HAZMAT Specialist',
      emoji: '☣️',
      desc: 'Expert in CBRNE scene decontamination and contamination control. Detects and neutralizes invisible threats.',
      bonuses: { decon: +25, ppe: +20, zones: +15 },
      special: 'Contamination Detector — Eliminates 1 wrong answer on chemical/radiological questions',
      flavor: 'Checking the APR mask while suiting up in Level A gear. The hot zone is my domain.',
      startLevel: 1,
      maxTitle: 'HAZMAT Master',
      unlockHint: 'Available from the start'
    },
    {
      id: 'commander',
      name: 'Disaster Incident Commander',
      emoji: '🎖️',
      desc: 'The leader commanding MCI scenes. The one who creates order out of chaos.',
      bonuses: { leadership: +25, triage: +10, communication: +15 },
      special: 'Command Instinct — +10 seconds on command/decision-making timed questions',
      flavor: 'Spreading out the map, picking up the radio. Every life and death on this scene depends on my decisions.',
      startLevel: 1,
      maxTitle: 'Regional Disaster Commander-in-Chief',
      unlockHint: 'Available from the start'
    },
    {
      id: 'swat_medic',
      name: 'Special Forces Tactical Medic',
      emoji: '🎯',
      desc: 'Provides tactical medical support during SWAT operations. A warrior preserving survival between combat and medicine.',
      bonuses: { tactical: +25, hemorrhage: +20, airway: +10 },
      special: 'MARCH Expert — Restore 10% HP when correct on tactical questions',
      flavor: 'Strapping on the body armor, checking the IFAK. Must treat patients even where bullets fly.',
      startLevel: 1,
      maxTitle: 'Tactical Medicine Master',
      unlockHint: 'Available from the start'
    },
    {
      id: 'nurse',
      name: 'Emergency Nurse',
      emoji: '👩‍⚕️',
      desc: 'A specialist managing multiple ER patients simultaneously. Quiet but the real backbone of the scene.',
      bonuses: { triage: +15, multitask: +20, patient_care: +15 },
      special: 'Multitasking — +5 second bonus on timed questions',
      flavor: 'Writing the patient list on the ER whiteboard. Another day, another battle begins.',
      startLevel: 1,
      maxTitle: 'Disaster Nursing Specialist',
      unlockHint: 'Available from the start'
    }
  ],

  // ==========================================
  // MILESTONES — Growth Stages
  // ==========================================
  milestones: [
    { chapter: 1, title: 'Trainee',     rank: 'Trainee',         minScore: 0,    color: '#9e9e9e', desc: 'A newcomer stepping onto the scene for the first time. Everything is unfamiliar and frightening, but the will to learn is overflowing.' },
    { chapter: 2, title: 'Junior Responder', rank: 'Junior Responder', minScore: 500,  color: '#4caf50', desc: 'Has learned the basic protocols. Building real-world experience under senior guidance.' },
    { chapter: 3, title: 'Intermediate Specialist', rank: 'Intermediate',     minScore: 1500, color: '#2196f3', desc: 'Can make independent judgments and act accordingly. Has learned to remain steady in crisis.' },
    { chapter: 4, title: 'Advanced Specialist', rank: 'Advanced',         minScore: 3000, color: '#9c27b0', desc: 'Analyzes complex situations and leads the team. Junior colleagues look up to them as a role model.' },
    { chapter: 5, title: 'Senior Expert', rank: 'Senior Expert',    minScore: 5000, color: '#ff9800', desc: 'An expert unshaken by any disaster. Beginning to take on the role of educator.' },
    { chapter: 6, title: 'Master',     rank: 'Master',           minScore: 8000, color: '#f44336', desc: 'The pinnacle of disaster response. A legendary medical professional who has saved countless lives.' }
  ],

  // ==========================================
  // ITEMS — Game Items
  // ==========================================
  items: [
    { id: 'hint',       name: '💡 Hint',    desc: 'Eliminates one wrong answer',           uses: 1, rarity: 'common',   value: 100 },
    { id: 'medkit',     name: '🩹 Med Kit', desc: 'Restores 25% HP',             uses: 1, rarity: 'common',   value: 150 },
    { id: 'timefreeze', name: '⏸️ Time Freeze', desc: 'Extends timer by 10 seconds',        uses: 1, rarity: 'uncommon', value: 200 },
    { id: 'shield',     name: '🛡️ Protective Suit',  desc: 'Negates HP loss from a wrong answer',   uses: 1, rarity: 'uncommon', value: 250 },
    { id: 'doubleXP',   name: '⭐ Double XP', desc: 'Double XP on next 3 questions',             uses: 1, rarity: 'rare',     value: 300 },
    { id: 'antidote',   name: '💉 Antidote',  desc: 'Revive with 10% HP from lethal situation',      uses: 1, rarity: 'rare',     value: 400 },
    { id: 'decon_kit',  name: '🧴 Decon Kit', desc: 'Exempt from CBRNE wrong-answer penalty',     uses: 1, rarity: 'epic',     value: 500 },
    { id: 'command_radio', name: '📻 Command Radio', desc: 'Teamwork bonus — +20% XP for entire next chapter', uses: 1, rarity: 'epic', value: 600 }
  ],

  // ==========================================
  // CAMPAIGNS
  // ==========================================
  campaigns: [

    // ==========================================
    // CAMPAIGN 1: 🔥 Urban High-Rise Fire
    // ==========================================
    {
      id: 'urban_fire',
      title: '🔥 Urban High-Rise Fire',
      subtitle: 'Seoul Gangnam High-Rise Building Fire — Mass Casualty Response',
      difficulty: '★☆☆☆☆',
      difficultyLabel: 'Beginner',
      estimatedTime: '45 min',
      background: 'linear-gradient(135deg, #ff4500 0%, #ff8c00 50%, #ffd700 100%)',
      cardColor: '#ff4500',
      icon: '🔥',
      unlockLevel: 0,
      synopsis: 'A massive fire has erupted at a high-rise building on Teheran-ro in Seoul\'s Gangnam district. At 3:47 AM, with 30+ casualties and climbing, you must manage everything from START triage to hospital transport. Your first campaign to master the fundamentals of disaster medical response.',
      skills: ['START Triage', 'MCI Management', 'Burn Treatment', 'ICS/NIMS', 'Scene Command'],
      completionBadge: '🔥 Fire Response Specialist',
      chapters: [
        // ---- Chapter 1 ----
        {
          id: 'ch1_dispatch',
          title: 'Chapter 1: Emergency Dispatch',
          subtitle: 'Emergency Call at Dawn',
          levelTitle: 'Trainee',
          xpGoal: 500,
          hp: 100,
          timeLimit: 45,
          cinematic: {
            text: '3:47 AM.\n\nA state-of-the-art 35-story office building on Teheran-ro, Gangnam-gu, Seoul. Black smoke is staining the sky.\n\nYour radio crackles to life.\n\n"119 HQ to all units. Fire on all floors above the 15th at Tower on 135 Teheran-ro, Gangnam. Multiple casualties estimated. Dispatch immediately. Over."\n\nYour heart pounds. Your hands automatically begin the equipment check.',
            atmosphere: 'Sirens wailing. Orange flames visible from the distant building. Smoke billowing into the sky.',
            roleDialogue: {
              paramedic: '"Airway kit, tourniquet, AED, spinal board... all ready." Muttering while checking equipment in the back of the ambulance. "It\'s going to be a long one." Sirens blaring.',
              emergency_doc: 'Picking up the phone urgently from the hospital on-call room. "Request for field medical command, Doctor." Removing the white coat, reaching for protective gear. "Let\'s start with triage."',
              hazmat: 'Listening to the radio from atop the equipment truck. "Cause of fire unconfirmed. Possible chemical storage floor involved." Checking the respirator. "PPE first, always PPE first."',
              commander: 'Spreading out the map for command post setup. "Wind from the northwest, building entrance to the south... command post 150m to the east." Issuing orders over the radio.',
              swat_medic: '"Confirmed no hostage situation at fire scene." Report comes in over radio. Checking the IFAK. "Medical support takes priority for now."',
              nurse: '"ER on standby. Mass patient intake protocol activated." Writing quickly on the whiteboard. "Secure beds, prep blood packs, get the burn kit out."'
            }
          },
          briefing: {
            situation: 'Fire above the 15th floor of a 35-story building in Gangnam, Seoul — approximately 30 casualties estimated',
            hazards: ['Building collapse risk', 'Toxic gases (carbon monoxide, hydrogen cyanide)', 'Power outage', 'Elevators out of service'],
            resources: ['3 ambulances', '5 fire trucks', '12 paramedics', '1 field medical support vehicle'],
            objective: 'Confirm scene safety then conduct START Triage — transport critical patients within golden hour',
            patientCount: 'Estimated 30',
            time: '03:47 AM'
          },
          challenges: [
            {
              id: 'c1_q1',
              type: 'quiz',
              q: 'What is the first action to take upon arriving at a fire scene?',
              o: [
                'Immediately enter the building to rescue patients',
                'Confirm scene safety and assess hazards',
                'Begin treating the nearest patient first',
                'Contact the hospital to secure beds'
              ],
              a: 1,
              exp: 'Scene Safety is the top priority. In the CSCATTT principles of MIMMS, S (Safety) is the second most important element after C (Command). Entering an unsafe scene turns rescuers into patients. You must always follow the order: Safety → BSI → Patient Approach.',
              difficulty: 'easy',
              xp: 100,
              timeBonus: 30,
              roleBonus: {
                commander: 'Commander Instinct: Safety assessment is the first principle of scene command. +Bonus XP!',
                hazmat: 'HAZMAT Experience: You have internalized the importance of hazard assessment. +Bonus XP!'
              }
            },
            {
              id: 'c1_q2',
              type: 'scenario',
              narrative: 'You have arrived on scene. Casualties are scattered across the plaza in front of the building, and thick black smoke continues to pour from the 15th floor. The fire chief approaches.\n\n"Medical team is here. Currently about 25 people have made it out of the building, and it appears more than 5 are still trapped inside."',
              q: 'What is the priority action according to MCI (Mass Casualty Incident) principles?',
              o: [
                'Form an entry team immediately to rescue the 5 trapped inside',
                'Begin START triage on the 25 accessible patients outside first',
                'Request helicopter support and attempt rooftop rescue',
                'Immediately transport all patients to the nearest hospital'
              ],
              a: 1,
              exp: 'MCI Golden Principle: "Greatest Good for Greatest Number". Triaging the 25 already accessible patients with START is the top priority. Rescuing the 5 trapped individuals is the fire team\'s domain, and indiscriminate hospital transport can overload hospitals and actually increase fatalities.',
              difficulty: 'easy',
              xp: 120,
              roleBonus: {
                paramedic: 'Paramedic Instinct: Treating accessible patients first is the core of MCI!'
              }
            },
            {
              id: 'c1_q3',
              type: 'quiz',
              q: 'Which of the following is NOT a correct criterion for "Immediate (RED)" classification in START triage?',
              o: [
                'Respiratory rate ≥30/min',
                'Capillary refill time >2 seconds',
                'Unable to follow simple commands',
                'Able to walk independently'
              ],
              a: 3,
              exp: 'Walking ability is the first step of START triage — ambulatory patients are classified GREEN (minor). RED criteria: ① RR >30/min or <10/min ② capillary refill >2 sec (absent radial pulse) ③ Altered mental status (unable to follow simple commands). If any one of these three criteria is met, classify as Immediate (RED).',
              difficulty: 'easy',
              xp: 100
            },
            {
              id: 'c1_q4',
              type: 'triage',
              narrative: 'A 45-year-old male patient is before you. He cannot walk on his own and is lying on a stretcher. RR 22/min, weak radial pulse palpable, capillary refill 4 seconds, responds slowly to simple commands.',
              q: 'What is the START triage classification for this patient?',
              o: [
                '🟢 GREEN (Minor — Can be delayed)',
                '🟡 YELLOW (Delayed — Can wait for treatment)',
                '🔴 RED (Immediate — Urgent treatment)',
                '⚫ BLACK (Dead or Expectant)'
              ],
              a: 2,
              exp: 'START algorithm: Non-ambulatory → Check breathing (present, 22/min — normal range) → Check circulation → Capillary refill 4 sec (>2 sec) → Immediate (RED). If there are signs of perfusion deficit, classify as RED. Internal hemorrhage from blunt abdominal trauma must also be considered.',
              difficulty: 'easy',
              xp: 150
            },
            {
              id: 'c1_q5',
              type: 'quiz',
              q: 'What does the "3T" in the CSCATTT principle stand for?',
              o: [
                'Triage, Treatment, Transportation',
                'Time, Temperature, Toxicology',
                'Team, Training, Technology',
                'Tactical, Technical, Therapeutic'
              ],
              a: 0,
              exp: 'CSCATTT is the core framework of MIMMS (Major Incident Medical Management and Support): C (Command & Control), S (Safety), C (Communication), A (Assessment), T (Triage), T (Treatment), T (Transportation). The last three T\'s are called the "3T." The scene is managed in this order.',
              difficulty: 'easy',
              xp: 100
            }
          ],
          successNarrative: 'Thanks to your swift and systematic judgment, 25 patients have been classified using START triage.\n\nRED 5 | YELLOW 8 | GREEN 10 | BLACK 2\n\nThe golden hour has begun. Critical patients are awaiting transport.\n\n"Good, Phase 1 complete. Next is determining treatment priorities."',
          failNarrative: 'Delayed decisions plunged the scene into chaos. Casualties are mixed together in disorder, and 2 RED patients are rapidly deteriorating.\n\n"Start over from the beginning. Safety first, then triage."',
          rewards: { xp: 600, items: ['hint', 'medkit'], levelUp: 'Trainee → Junior Responder' }
        },

        // ---- Chapter 2 ----
        {
          id: 'ch2_triage',
          title: 'Chapter 2: Choices in the Flames',
          subtitle: 'START Triage Field Application',
          levelTitle: 'Junior Responder',
          xpGoal: 800,
          hp: 100,
          timeLimit: 40,
          cinematic: {
            text: '04:15. The plaza outside the building has been transformed into a temporary medical zone.\n\nFirefighters continue to carry casualties out of the building. Smoke, heat, and cries blend together. 18 patients are spread out before you.\n\nA voice comes through the radio. "Medical team, please expedite severity classification. Two ambulances are standing by for hospital transport."',
            atmosphere: 'The dawn air is acrid with smoke. Paramedics rush about, and the groans of the wounded fill the air.',
            roleDialogue: {
              paramedic: '"18 patients... I can\'t handle them all alone. Let\'s split into teams." Signaling a colleague while approaching the first patient.',
              emergency_doc: '"Follow the START algorithm precisely. Emotions can wait." Draping the stethoscope around the neck and getting started.',
              hazmat: '"Checking the smoke composition. Was there a chemical storage area in this building?" Monitoring the air while assessing patients.',
              commander: '"Split the zone. 9 on the left, 9 on the right. Assign 2 per team." Issuing orders over the radio.',
              swat_medic: '"Find the bleeding patients first. MARCH — massive hemorrhage is the top priority."',
              nurse: '"Color tags ready? Red, yellow, green, black — start tagging each patient."'
            }
          },
          briefing: {
            situation: '18 casualties waiting, severity classification incomplete',
            hazards: ['Ongoing fire', 'Risk of carbon monoxide poisoning', 'Secondary collapse warning'],
            resources: ['2 ambulances', '6 paramedics', '2 medical teams', 'Triage tags and basic emergency kits'],
            objective: 'Complete START triage and prepare priority transport for RED patients',
            patientCount: '18',
            time: 'Dawn 04:15'
          },
          challenges: [
            {
              id: 'c2_q1',
              type: 'triage',
              narrative: 'Patient A: 28-year-old female. Collapsed from smoke inhalation. No breathing → No breathing even after airway opening. No pulse. Fixed dilated pupils.',
              q: 'What is this patient\'s START classification?',
              o: ['🔴 RED (Immediate)', '🟡 YELLOW (Delayed)', '🟢 GREEN (Minor)', '⚫ BLACK (Expectant/Dead)'],
              a: 3,
              exp: 'START algorithm: Non-ambulatory → No breathing → No spontaneous breathing even after airway opening → BLACK (Dead/Expectant). If there is no breathing after opening the airway, classify as BLACK. In an MCI setting, performing CPR on one patient can mean losing many others, so it is not performed.',
              difficulty: 'easy',
              xp: 120
            },
            {
              id: 'c2_q2',
              type: 'triage',
              narrative: 'Patient B: 52-year-old male. Ambulatory. Burns and lacerations on left arm. Alert and oriented. Walked to the medical zone on his own.',
              q: 'What is this patient\'s START classification?',
              o: ['🔴 RED (Immediate)', '🟡 YELLOW (Delayed)', '🟢 GREEN (Minor)', '⚫ BLACK (Expectant/Dead)'],
              a: 2,
              exp: 'First step of the START algorithm: Can the patient walk? Patients who can walk on their own are GREEN (Minor). Arm burns and lacerations are serious but not an immediate life threat. GREEN patients are moved to a separate area to wait.',
              difficulty: 'easy',
              xp: 100
            },
            {
              id: 'c2_q3',
              type: 'triage',
              narrative: 'Patient C: 34-year-old female. Non-ambulatory. RR 34/min. Weak radial pulse palpable. Capillary refill 1.5 sec. Responds to simple commands. Ongoing hemorrhage from an open fracture of the right femur.',
              q: 'What is this patient\'s START classification?',
              o: ['🔴 RED (Immediate)', '🟡 YELLOW (Delayed)', '🟢 GREEN (Minor)', '⚫ BLACK (Expectant/Dead)'],
              a: 0,
              exp: 'START algorithm: Non-ambulatory → RR 34/min (>30) → Immediate (RED). If the respiratory rate exceeds 30/min, classify as RED immediately without circulatory assessment. Open femoral fracture hemorrhage is also a RED finding requiring urgent intervention.',
              difficulty: 'medium',
              xp: 150
            },
            {
              id: 'c2_q4',
              type: 'quiz',
              q: 'What is the criteria for using JumpSTART at a fire scene?',
              o: [
                'Elderly patients aged 65 or older',
                'Pediatric patients aged 8 or under, or weighing less than 45 kg',
                'Pregnant patients',
                'All unconscious patients'
              ],
              a: 1,
              exp: 'JumpSTART is a pediatric-specific triage system, applied to patients aged 8 or under or weighing less than 45 kg. Key difference from START: If an apneic child has a pulse, 5 rescue breaths are attempted. This is because respiratory failure is the leading cause of pediatric cardiac arrest.',
              difficulty: 'medium',
              xp: 130
            },
            {
              id: 'c2_q5',
              type: 'scenario',
              narrative: 'Interim report: Classification complete — RED 5, YELLOW 8, GREEN 4, BLACK 1. Two ambulances ready.\n\nThe hospital has called in. "ER currently at capacity. Can accept a maximum of 3 RED patients."',
              q: 'What is the correct transport decision in this situation?',
              o: [
                'Transport all RED patients to a single hospital',
                'Distribute RED patients across multiple hospitals and monitor hospital capacity in real time',
                'Transport YELLOW patients first and continue on-scene treatment for RED',
                'Request a helicopter to transport all RED patients to a major hospital'
              ],
              a: 1,
              exp: 'MCI transport principle: Hospital Diversion. Concentrating on one hospital overloads the ER and increases mortality. Coordinate with regional emergency medical center coordinators to monitor each hospital\'s real-time capacity and distribute RED patients across multiple hospitals.',
              difficulty: 'medium',
              xp: 160
            }
          ],
          successNarrative: 'All 18 patients classified. The 5 RED patients were distributed to different hospitals, preserving the golden hour.\n\nYour systematic triage has increased the survival odds for at least 3 more lives today.',
          failNarrative: 'Classification delays cost you the transport window. One RED patient is rapidly deteriorating on scene. Start over from the beginning.',
          rewards: { xp: 800, items: ['hint', 'timefreeze'], levelUp: null }
        },

        // ---- Chapter 3 ----
        {
          id: 'ch3_treatment',
          title: 'Chapter 3: Flames and Smoke',
          subtitle: 'Severe Burns and Inhalation Injury Treatment',
          levelTitle: 'Intermediate Specialist',
          xpGoal: 1000,
          hp: 100,
          timeLimit: 35,
          cinematic: {
            text: '04:52. The field treatment station is now operational.\n\nFive critical patients in the RED zone are awaiting treatment. Two of them have severe burns. There are also inhalation injury patients. Resources are limited.\n\n"Doctor, this patient\'s airway is compromised!" A junior paramedic\'s urgent voice rings out.',
            atmosphere: 'Under the white tarp of the temporary treatment station. The sounds of medical equipment and patients\' labored breathing fill the air.',
            roleDialogue: {
              paramedic: '"Airway first. Get the airway kit out." Kneeling before the most critical patient.',
              emergency_doc: '"ABCDE order. A — Airway first." Mentally reviewing RSI medications.',
              hazmat: '"Smoke inhalation patient — have you confirmed the chemical composition? Carbon monoxide? Hydrogen cyanide?"',
              commander: '"Split into Treatment Teams 1 and 2. Team 1 handles airway patients, Team 2 handles burns."',
              swat_medic: '"Trauma assessment — begin MARCH. M — Any massive hemorrhage?"',
              nurse: '"Start vital signs monitoring. Attach the pulse oximeter and check every 10 minutes."'
            }
          },
          briefing: {
            situation: '5 RED patients requiring simultaneous treatment — mix of burns, inhalation injuries, and fractures',
            hazards: ['Airway burns', 'Carbon monoxide (CO) poisoning', 'Hypothermia', 'Psychological panic'],
            resources: ['2 basic emergency kits', 'Oxygen supply equipment', 'Burn dressings', 'IV fluids'],
            objective: 'Apply severe burn and inhalation injury treatment principles',
            patientCount: '5 (all RED)',
            time: 'Dawn 04:52'
          },
          challenges: [
            {
              id: 'c3_q1',
              type: 'quiz',
              q: 'What is the first treatment to administer to an inhalation injury patient at a fire scene?',
              o: [
                'Administer bronchodilator (salbutamol)',
                'Administer 100% high-concentration oxygen',
                'Intravenous steroid injection',
                'Prophylactic antibiotic administration'
              ],
              a: 1,
              exp: 'The key treatment for carbon monoxide (CO) poisoning and inhalation injury is 100% high-concentration oxygen. CO\'s affinity for hemoglobin is over 200 times that of oxygen. High-concentration oxygen reduces the CO half-life from 5 hours to 1 hour. All fire scene casualties should be presumed to have CO poisoning and given oxygen.',
              difficulty: 'medium',
              xp: 140
            },
            {
              id: 'c3_q2',
              type: 'quiz',
              q: 'In the "Rule of Nines" used to estimate burn body surface area in adult patients, what percentage is the head and neck?',
              o: ['4.5%', '9%', '18%', '1%'],
              a: 1,
              exp: 'Rule of Nines: Head + neck 9%, each arm 9%, anterior trunk 18%, posterior trunk 18%, each leg 18%, genitalia 1%. This allows rapid estimation of burn area. For pediatric patients, use the "Lund and Browder" chart (children have proportionally larger heads).',
              difficulty: 'medium',
              xp: 130
            },
            {
              id: 'c3_q3',
              type: 'scenario',
              narrative: '45-year-old female patient, 30% total body surface area burns. Alert but complaining of extreme pain. Pulse 120/min, BP 90/60 mmHg. Signs of decreased urine output.',
              q: 'What is the correct fluid resuscitation plan for this patient?',
              o: [
                'Withhold all IV fluids (concern for worsening edema at burn site)',
                'Apply Parkland formula: 4 mL x body weight (kg) x burn area (%) → administer over first 24 hours',
                'Rapidly infuse 1L of normal saline within 15 minutes',
                'Supplement fluids orally only'
              ],
              a: 1,
              exp: 'Parkland formula: Total fluid volume for the first 24 hours = 4 mL x body weight (kg) x burn BSA (%). Half is given in the first 8 hours, the remaining half over the next 16 hours. The solution used is Lactated Ringer\'s). Urine output goal: 0.5 mL/kg/hr or more.',
              difficulty: 'hard',
              xp: 180
            },
            {
              id: 'c3_q4',
              type: 'quiz',
              q: 'What is the first field intervention for a patient with suspected tension pneumothorax at a fire scene?',
              o: [
                'Decide after chest CT scan',
                'Needle Chest Decompression: 2nd intercostal space, midclavicular line',
                'Connect to a mechanical ventilator',
                'Auscultate both sides and wait 10 minutes'
              ],
              a: 1,
              exp: 'Tension pneumothorax = a life-threatening emergency. Characterized by absent breath sounds on auscultation, tracheal deviation, jugular venous distension, and hypotension. Immediate needle decompression is required. Location: Midclavicular Line, 2nd Intercostal Space. Use a 14-16 gauge needle. There is no time to wait for a CT scan.',
              difficulty: 'hard',
              xp: 160
            },
            {
              id: 'c3_q5',
              type: 'scenario',
              narrative: 'A smoke inhalation patient has suddenly started seizing. Oxygen was being administered when bilateral equal pupil constriction was noted. Copious secretions are present.',
              q: 'What is the most appropriate treatment when suspecting hydrogen cyanide (HCN) poisoning in this patient?',
              o: [
                'Increasing supplemental oxygen alone is sufficient',
                'Intravenous Hydroxocobalamin administration',
                'Seizure control with atropine administration',
                'Seizure control with diazepam followed by observation'
              ],
              a: 1,
              exp: 'Hydrogen cyanide (HCN) is produced when plastics and synthetic fibers burn. Toxicity: Blocks cellular oxygen utilization → tissue hypoxia. Symptoms: Seizures, decreased consciousness, impaired pupillary response. Treatment: Hydroxocobalamin — binds with HCN to form cyanocobalamin → excreted in urine. This is the current standard of care (TOC).',
              difficulty: 'hard',
              xp: 200
            }
          ],
          successNarrative: 'Initial treatment for all 5 patients is complete. The airway burn patient had their airway preemptively secured, and burn patients have started receiving fluids per the Parkland formula.\n\n"Good. Now for transport."',
          failNarrative: 'A judgment error during treatment delayed a critical intervention. But we learn from mistakes. Let\'s try again.',
          rewards: { xp: 1000, items: ['medkit', 'shield'], levelUp: 'Junior Responder → Intermediate Specialist' }
        },

        // ---- Chapter 4 ----
        {
          id: 'ch4_command',
          title: 'Chapter 4: Command HQ',
          subtitle: 'Field Command Post Operations and ICS',
          levelTitle: 'Advanced Specialist',
          xpGoal: 1200,
          hp: 100,
          timeLimit: 35,
          cinematic: {
            text: '05:30. The flames are under control, but the scene is still chaos.\n\nYou have set up at the on-scene command post. The commanders of three teams — fire, police, and medical — are looking at you. Reports pour in over the radio: hospital status, ambulance locations, additional casualty discoveries.\n\n"From this point on, you are the on-scene medical commander. Make your decisions."',
            atmosphere: 'Inside the command vehicle. Maps, radios, monitors. Outside the window the fire is out but smoke continues.',
            roleDialogue: {
              paramedic: '"First time commanding. But trust the field experience. One thing at a time."',
              emergency_doc: '"Making medical judgments is different from overall coordination. But the principles are the same."',
              hazmat: '"Contamination zone extent report complete. Now is the time for command decisions."',
              commander: '"This is my place. Need to see the whole picture." Places a hand on the map.',
              swat_medic: '"Apply a tactical perspective. Set priorities and communicate them to the team."',
              nurse: '"Hospital bed count confirmed. Awaiting command decisions now."'
            }
          },
          briefing: {
            situation: 'Fire being suppressed. Field command post established. Multi-agency coordination required.',
            hazards: ['Ongoing secondary collapse risk', 'Injured responders', 'Media access requests'],
            resources: ['5 ambulances', '1 helicopter', '3 hospitals on standby', 'Full fire team deployed'],
            objective: 'Understanding ICS (Incident Command System) and multi-agency coordination',
            patientCount: 'Total 32 being managed',
            time: '05:30 AM'
          },
          challenges: [
            {
              id: 'c4_q1',
              type: 'quiz',
              q: 'What is the appropriate level of "Span of Control" as a core principle of ICS (Incident Command System)?',
              o: ['1:3 to 1:7 (one supervisor managing 3-7 people)', '1:10 to 1:15', '1:2 to 1:3', 'No limit — varies by situation'],
              a: 0,
              exp: 'ICS Span of Control: The appropriate number of people directly managed by one supervisor is 3-7 (ideal: 5). Too many breaks communication; too few wastes resources. In a large-scale incident, deviating from this principle can cause the command structure to collapse.',
              difficulty: 'medium',
              xp: 150
            },
            {
              id: 'c4_q2',
              type: 'scenario',
              narrative: 'Hospital A has called in. "Can accept 2 RED patients." Hospital B: "1 RED + OR available." Hospital C: "Burn specialty hospital, can accept all burn patients."\n\nAmong the current 5 RED patients: 2 femoral fractures, 2 severe burns, 1 head injury.',
              q: 'What is the correct transport distribution?',
              o: [
                'Transport all to Hospital C (burn specialty)',
                'Head injury → B (has OR), 2 burn patients → C, 2 fractures → A',
                'Transport all to nearest Hospital A',
                'Helicopter all to a large hospital'
              ],
              a: 1,
              exp: 'Trauma dispersal transport principle: Send patients to the appropriate specialty facility. Head injury → hospital with neurosurgical OR (B), burns → burn specialty hospital (C), fractures → hospital with orthopedics available (A). All Sending all patients to one facility causes hospital overload.',
              difficulty: 'hard',
              xp: 200
            },
            {
              id: 'c4_q3',
              type: 'quiz',
              q: 'In NIMS (National Incident Management System), when is "Unified Command" needed?',
              o: [
                'Simple traffic accident',
                'Incident managed entirely by a single agency',
                'Multi-agency incident with multiple agencies responding simultaneously',
                'Small-scale fire'
              ],
              a: 2,
              exp: 'Unified Command: Used in complex incidents where multiple agencies (fire, police, medical, military, etc.) respond simultaneously. Commanders from each agency collaborate under a single command structure. A fire incident like this, where fire, police, and medical teams respond together, is a classic scenario for Unified Command.',
              difficulty: 'hard',
              xp: 160
            },
            {
              id: 'c4_q4',
              type: 'quiz',
              q: 'What is NOT necessary information for a field medical commander when deciding patient distribution between hospitals?',
              o: [
                'Current ER saturation at each hospital',
                'Transport time to each hospital',
                'Medical school affiliation of each hospital\'s staff',
                'Specialty services and OR availability at each hospital'
              ],
              a: 2,
              exp: 'Key factors in hospital distribution decisions: transport time, ER capacity, specialty facilities (trauma center, burn center, neurosurgery, etc.), OR availability. Medical staff\'s personal background is entirely irrelevant. In MCI, only objective capabilities and resources are the criteria.',
              difficulty: 'medium',
              xp: 130
            },
            {
              id: 'c4_q5',
              type: 'scenario',
              narrative: 'Suddenly a new report comes in. "7 additional casualties found in underground parking. 2 critical." Only 1 ambulance remains, and field medical personnel are at their limit.',
              q: 'What is the correct response in a resource-limited situation?',
              o: [
                'Stop all ongoing transports and focus entirely on the underground parking',
                'Request additional nearby resources while simultaneously dispatching a team to the underground parking and maintaining priorities',
                'Defer underground parking casualties for later and handle only current patients',
                'Redirect all personnel to the underground parking'
              ],
              a: 1,
              exp: 'MCI Surge response principle: Request additional resources while simultaneously continuing on-scene response. Already-treated patients must not be abandoned, nor can new casualties be neglected. In ICS, For situations like this, reserve resources and resource request channels must always be kept open.',
              difficulty: 'hard',
              xp: 220
            }
          ],
          successNarrative: 'Under your command, the scene has stabilized. All RED patients have been transported to the appropriate hospitals, and treatment began immediately upon discovery of additional casualties in the basement.\n\nAt the command post, the fire chief nods. "Well done."',
          failNarrative: 'Delay in command decisions caused confusion. But command is learned from experience.',
          rewards: { xp: 1200, items: ['doubleXP', 'command_radio'], levelUp: 'Intermediate Specialist → Advanced Specialist' }
        },

        // ---- Chapter 5 ----
        {
          id: 'ch5_hospital',
          title: 'Chapter 5: Night at the Hospital',
          subtitle: 'Hospital Mass Patient Reception and Response',
          levelTitle: 'Senior Expert',
          xpGoal: 1500,
          hp: 100,
          timeLimit: 30,
          cinematic: {
            text: '06:20. General hospital emergency room.\n\nAmbulances that have been running all night are lined up. The ER entrance is already a battlefield. Patients fill the corridors. The medical staff are exhausted.\n\nThe hospital director finds you. "We need to activate HICS (Hospital Incident Command System). Please take charge as the hospital disaster medical officer."',
            atmosphere: 'Fluorescent-lit emergency department. Monitor alarms, footsteps of medical staff, sounds of patients.',
            roleDialogue: {
              paramedic: '"We sent this many from the scene? I\'m sorry. We did our best." A sigh after arriving at the hospital.',
              emergency_doc: '"Activating HICS. ER expansion, OR prep, blood bank contact." The mind races quickly.',
              hazmat: '"Did any contaminated patients enter without decontamination?" Checks the ER entrance.',
              commander: '"Establishing the in-hospital command structure comes first. Who decides what."',
              swat_medic: '"2 injured firefighters admitted. Tactical thinking is necessary even outside a tactical environment."',
              nurse: '"Contacting to secure ward beds. OR nursing team emergency assembly complete."'
            }
          },
          briefing: {
            situation: 'Hospital mass patient influx — HICS activation requested',
            hazards: ['Medical staff exhaustion', 'Blood shortage', 'OR saturation', 'Possible undecontaminated patient entry'],
            resources: ['20 ER beds (18 currently in use)', '3 ORs (2 in use)', '48-hour blood supply reserve'],
            objective: 'Understand hospital disaster response system and apply HICS',
            patientCount: 'Total 32 incoming (RED 5, YELLOW 8, GREEN 19)',
            time: '06:20 AM'
          },
          challenges: [
            {
              id: 'c5_q1',
              type: 'quiz',
              q: 'Which of the following is NOT an appropriate first step when activating HICS (Hospital Incident Command System)?',
              o: [
                'Establish disaster zones within the ER',
                'Immediately send all non-medical hospital staff home',
                'Accelerate discharges of scheduled admissions to free up beds',
                'Request emergency resources from the blood bank and pharmacy'
              ],
              a: 1,
              exp: 'When HICS is activated, non-medical staff also have disaster support roles (patient guidance, family communication, administrative support, etc.). Sending them home immediately only worsens staff shortages. Correct initial steps: zone establishment, freeing beds via accelerated discharge, resource requests, and redeployment of non-medical staff.',
              difficulty: 'hard',
              xp: 170
            },
            {
              id: 'c5_q2',
              type: 'scenario',
              narrative: 'A report came in that a patient entered the ER "without decontamination." Three medical staff who contacted the patient are reporting tearing, runny nose, and cough.',
              q: 'What is the most appropriate action in this situation?',
              o: [
                'Have all symptomatic staff continue working in the ER',
                'Immediately isolate symptomatic staff, close the affected zone, and activate hospital decontamination protocol',
                'Discharge the patient immediately',
                'Determine the symptoms are stress-related and ignore them'
              ],
              a: 1,
              exp: 'Secondary Contamination response principle: Immediately isolate symptomatic staff and close the affected zone. If chemical contamination is suspected, activate the in-hospital decontamination protocol. This lesson comes from the 1995 Tokyo sarin attack, where 23 ER staff were secondarily contaminated by patients who arrived without decontamination.',
              difficulty: 'hard',
              xp: 220
            },
            {
              id: 'c5_q3',
              type: 'quiz',
              q: 'What is the main purpose of "Bottleneck Area Operation" in the 12-step hospital disaster response?',
              o: [
                'Completely block hospital entrances',
                'Control patient flow during mass influx to prevent uncontrolled entry',
                'Restrict media access to the hospital',
                'Prevent medical staff from leaving'
              ],
              a: 1,
              exp: 'Bottleneck Area: Controls patient flow during mass patient influx to prevent ER paralysis. Zones are divided by acuity — RED receives immediate treatment, YELLOW waits, GREEN is processed in a separate area. This allows medical resources to concentrate on patients who need them most.',
              difficulty: 'medium',
              xp: 150
            },
            {
              id: 'c5_q4',
              type: 'quiz',
              q: 'Which of the following does NOT belong in the "Lethal Triad (Triad of Death)" in ER initial response to a severe burn patient (≥30% TBSA)?',
              o: ['Hypothermia', 'Coagulopathy', 'Metabolic Acidosis', 'Hypertension'],
              a: 3,
              exp: 'Lethal Triad (Triad of Death): ① Hypothermia ② Coagulopathy ③ Metabolic Acidosis. These three form a vicious cycle. When hypothermia begins in a burn+hemorrhage patient, coagulopathy worsens, leading to increased bleeding → acidosis. Warming, blood product transfusion, and acidosis correction are key.',
              difficulty: 'hard',
              xp: 180
            },
            {
              id: 'c5_q5',
              type: 'scenario',
              narrative: 'Resource-limited situation: only 1 OR available. Three patients simultaneously requiring surgery: A (internal abdominal hemorrhage), B (epidural hematoma), C (femur fracture + vascular injury).',
              q: 'How should surgical priority be determined?',
              o: [
                'A (internal abdominal hemorrhage) → B (head) → C (femur)',
                'B (epidural hematoma) → A (abdomen) → C (femur)',
                'C (femur) → A (abdomen) → B (head)',
                'Random method such as coin flip'
              ],
              a: 1,
              exp: 'Surgical priority: Epidural hematoma can herniate within minutes — most urgent. Internal abdominal hemorrhage can be temporarily stabilized with fluids — next priority. Femur fracture + vascular injury can be temporized with tourniquet and fluid. In actual clinical practice, exact patient status assessment must guide the decision.',
              difficulty: 'very_hard',
              xp: 250
            }
          ],
          successNarrative: 'The hospital has stabilized. All 3 surgeries completed. Secondary contamination of medical staff was intercepted early.\n\nThrough the windows, dawn is slowly breaking. Tonight, you saved many lives.',
          failNarrative: 'A few decisions were wrong. But every disaster experience is preparation for the next.',
          rewards: { xp: 1500, items: ['doubleXP', 'antidote'], levelUp: 'Advanced Specialist → Senior Expert' }
        },

        // ---- Chapter 6: BOSS ----
        {
          id: 'ch6_boss',
          title: 'Chapter 6: Final Collapse — Ultimate Test',
          subtitle: 'Boss Chapter: Secondary Collapse + Additional Casualties + Comprehensive Test',
          levelTitle: 'Master',
          xpGoal: 2000,
          hp: 100,
          timeLimit: 25,
          cinematic: {
            text: '07:02.\n\nJust when you thought it was over, screams came through the radio.\n\n"Full emergency alert! Secondary structural collapse at Tower underground parking garage! 3 fire rescue team members trapped! An estimated 10 additional civilians buried!"\n\nThe scene has become a warzone again. All the experience built since dawn was for this moment.\n\nYou must use everything you have learned.',
            atmosphere: 'The ground shakes with dust. Sirens wail again.',
            roleDialogue: {
              paramedic: '"Starting again. This time you\'re not alone. We\'re here."',
              emergency_doc: '"Total casualties estimated at 50+. Immediately reorganize medical resources."',
              hazmat: '"Secondary collapse — possible gas line rupture. Recheck PPE immediately."',
              commander: '"I must choose. Trapped firefighters vs buried civilians. Only one set of resources."',
              swat_medic: '"Assembling team to enter the collapse zone. Prepare MARCH protocol."',
              nurse: '"Preparing ER for second mass influx. Contacting blood bank again emergency."'
            }
          },
          briefing: {
            situation: 'Secondary structural collapse — 3 firefighters trapped, estimated 10 civilians buried',
            hazards: ['Possible gas line rupture', 'Electrical short circuit', 'Risk of tertiary collapse', 'Medical resource depletion'],
            resources: ['2 ambulances', '1 helicopter (standby)', 'Firefighter rescue team (trapped)', 'Medical team of 5'],
            objective: 'Comprehensive disaster response — MCI principles, resource allocation, ethical decisions, full medical knowledge',
            patientCount: '13 additional (estimated)',
            time: '07:02 AM'
          },
          challenges: [
            {
              id: 'c6_q1',
              type: 'scenario',
              narrative: 'Who do you rescue first: the 3 trapped firefighters (easier rescue, location known) or the 10 buried civilians (location uncertain, survival uncertain)?\n\nResources: Only 1 rescue team available.',
              q: 'What is the correct decision according to MCI ethical principles?',
              o: [
                'Firefighters first — they are more valuable as disaster responders',
                'Civilians first — there are more of them',
                'Rescue those with higher survival probability first — currently the located firefighters',
                'Decide by coin flip'
              ],
              a: 2,
              exp: 'MCI core principle: "Greatest Good for Greatest Number". Rescuing the group with a known location and higher survival probability first saves more lives overall. However, this is an ethically difficult decision, and all disaster medicine involves such dilemmas. The fact that firefighters can return as additional rescue personnel is also considered.',
              difficulty: 'very_hard',
              xp: 300
            },
            {
              id: 'c6_q2',
              type: 'quiz',
              q: 'What complication requires the most caution when rescuing a crush injury patient from a collapse scene?',
              o: [
                'Simple fracture',
                'Reperfusion Syndrome — sudden release of potassium and myoglobin after crush relief',
                'Superficial laceration',
                'Dehydration'
              ],
              a: 1,
              exp: 'Crush Syndrome: When prolonged crush is suddenly released → potassium (K+) and myoglobin from necrotic muscle enter the bloodstream → cardiac dysrhythmia (hyperkalemia), renal failure (myoglobinuria). Treatment: establish IV access and begin fluids before extrication, mandatory ECG monitoring immediately after release. International crush extrication protocols recommend fluid administration BEFORE rescue.',
              difficulty: 'very_hard',
              xp: 280
            },
            {
              id: 'c6_q3',
              type: 'quiz',
              q: 'What does "Platinum 10 Minutes" mean in the TACEVAC (Tactical Evacuation) principle?',
              o: [
                'CT scan within 10 minutes of hospital arrival',
                'Escape from fire scene within 10 minutes',
                'Target time to begin transport of critical trauma patients within 10 minutes of scene arrival',
                'Begin suppression within 10 minutes of fire truck dispatch'
              ],
              a: 2,
              exp: '"Platinum 10 Minutes": The principle of minimizing on-scene treatment time for critical trauma patients (especially internal bleeding) and initiating transport within 10 minutes. Related: "Golden Hour" refers to the 1-hour window in which trauma patients must receive definitive care. "Load and Go" is more appropriate than "Stay and Play" for patients with internal bleeding.',
              difficulty: 'hard',
              xp: 240
            },
            {
              id: 'c6_q4',
              type: 'scenario',
              narrative: 'One of the buried civilians has been rescued. 50-year-old male. 4 hours of crush. Unresponsive. Faint pulse. Severe crush injury to right leg. Urine appears brown.',
              q: 'What does brown urine indicate, and what is the most urgent treatment?',
              o: [
                'Dehydration — fluid replacement is sufficient',
                'Myoglobinuria — aggressive fluid administration and diuresis promotion to prevent renal failure',
                'Hematuria — request urology consultation',
                'Bile excretion problem — liver function test'
              ],
              a: 1,
              exp: 'Brown urine = Myoglobinuria. Myoglobin from crushed muscle blocks renal tubules, potentially causing acute renal failure. Treatment: ① Large volume fluids (normal saline 1-2 L/hr) → target urine output 200-300 mL/hr ② Urinary alkalinization (sodium bicarbonate) ③ Mannitol (promote diuresis). Preventing renal failure is the key goal.',
              difficulty: 'very_hard',
              xp: 320
            },
            {
              id: 'c6_q5',
              type: 'quiz',
              q: 'What does "Can Do" mean in the START triage "30-2-Can Do" principle learned throughout this campaign?',
              o: [
                'Ability to walk 30 meters',
                'Ability to follow simple commands — assessment of consciousness level',
                'Ability to breathe independently',
                'Ability to call for help independently'
              ],
              a: 1,
              exp: 'START "30-2-Can Do": ①30 (respiratory rate >30 → RED), ②2 (capillary refill >2 seconds → RED), ③Can Do (can follow simple commands → YELLOW, cannot → RED). If any of the three criteria is abnormal, classify as Immediate (RED). This rapid assessment, completed within 30 seconds, determines the life or death of dozens at an MCI scene.',
              difficulty: 'medium',
              xp: 200
            }
          ],
          successNarrative: 'The last patient has been loaded into the ambulance.\n\n07:48. The sky over Seoul is glowing red.\n\nToday you helped save 32 lives. Every single decision you made became someone\'s story of survival.\n\n"🔥 Urban High-Rise Fire Campaign Complete."\n"Fire Response Specialist" badge earned.',
          failNarrative: '"The final chapter is the hardest. But reaching this far is already remarkable. Try again."',
          rewards: { xp: 2500, items: ['doubleXP', 'antidote', 'command_radio'], levelUp: 'Senior Expert → Master', badge: '🔥 Fire Response Expert' }
        }
      ]
    },

    // ==========================================
    // CAMPAIGN 2: ☣️ Chemical Terror Attack
    // ==========================================
    {
      id: 'chemical_terror',
      title: '☣️ Chemical Terror Attack',
      subtitle: 'Seoul Subway Sarin Attack — The 1995 Tokyo Nightmare Revisited',
      difficulty: '★★★☆☆',
      difficultyLabel: 'Intermediate',
      estimatedTime: '55 min',
      background: 'linear-gradient(135deg, #2d5016 0%, #4a7c20 40%, #8bc34a 100%)',
      cardColor: '#4a7c20',
      icon: '☣️',
      unlockLevel: 0,
      synopsis: 'The nightmare of the 1995 Tokyo subway sarin attack is being recreated in Seoul. Mysterious symptoms on the subway, donning PPE, zone establishment, PRISM decontamination, antidote administration — experience the full process of chemical terror response.',
      skills: ['Toxidrome recognition', 'PPE levels', 'Decontamination protocol', 'Nerve agent antidotes', 'Chain of Chemical Survival'],
      completionBadge: '☣️ Chemical Terror Response Expert',
      chapters: [
        // ---- Chapter 1 ----
        {
          id: 'chem_ch1',
          title: 'Chapter 1: Mysterious Symptoms',
          subtitle: 'Seoul Subway Line 2 Gangnam Station',
          levelTitle: 'Trainee',
          xpGoal: 500,
          hp: 100,
          timeLimit: 45,
          cinematic: {
            text: '08:12. Rush hour.\n\nSeoul Metro Line 2, Gangnam Station platform. Morning rush hour with thousands of commuters.\n\nSuddenly, emergency calls flood in. "People are collapsing!" "I can\'t see!" "I can\'t breathe!"\n\nYou are on scene inside the station as the first responder. Before you, about 30 people are vomiting, seizing, and collapsing.\n\nA strange smell in the air... no, there is no smell. That\'s what makes it even more terrifying.',
            atmosphere: 'The distinctive smell of the subway station. Fluorescent lighting. People collapsed. Chaos.',
            roleDialogue: {
              paramedic: '"No smell. Sarin? Gloves first." Immediately puts on gloves and surveys the scene.',
              emergency_doc: '"Need to assess symptom pattern. Pupils... constricted. Secretions... excessive. Muscle spasms. This is..."',
              hazmat: '"Fall back immediately! Contaminated zone! No approach without PPE, ever!"',
              commander: '"Seal all station entrances! Evacuate passengers! Report suspected chemical terror immediately!"',
              swat_medic: '"Nerve agent symptoms. Is there a MARK 1 kit?" Checks equipment.',
              nurse: '"Requesting hospital emergency declaration. Notifying of multiple nerve agent poisoning patients."'
            }
          },
          briefing: {
            situation: '30+ people with unknown symptoms on the subway — suspected chemical terror',
            hazards: ['Unknown chemical agent', 'No approach without PPE', 'Secondary contamination risk', 'Enclosed space'],
            resources: ['3 PPE kits (in vehicle)', 'Basic first aid kit', 'Radio'],
            objective: 'Recognize toxidrome and make initial chemical agent assessment',
            patientCount: 'Approximately 30',
            time: '08:12 AM'
          },
          challenges: [
            {
              id: 'chem_c1_q1',
              type: 'quiz',
              q: 'Which symptom combination correctly describes the typical toxidrome of nerve agent poisoning?',
              o: [
                'Pupil dilation, dry mouth, fever, rapid pulse',
                'Miosis (pupil constriction), hypersecretion, bradycardia, muscle spasms',
                'Miosis, respiratory depression, drowsiness (opioid-like)',
                'Dry skin, rapid pulse, agitation'
              ],
              a: 1,
              exp: 'Nerve Agent toxidrome — DUMBELS: D (Defecation/Diarrhea), U (Urination), M (Miosis), B (Bradycardia + Bronchospasm), E (Emesis), L (Lacrimation), S (Salivation/Secretion). Mechanism: AChE inhibition → ACh accumulation → cholinergic hyperactivity. Miosis (pupil constriction) is the most characteristic finding.',
              difficulty: 'easy',
              xp: 120
            },
            {
              id: 'chem_c1_q2',
              type: 'quiz',
              q: 'What is the most distinctive physical property of Sarin (GB)?',
              o: ['Strong garlic odor', 'Odorless', 'Sweet almond smell', 'Greenish gas'],
              a: 1,
              exp: 'Sarin (GB) is colorless and odorless. This is one of the reasons it is so dangerous — it is difficult to detect. Comparison: Tabun (GA) has a faint fruity odor, Soman (GD) smells of camphor, VX smells oily. In the 1995 Tokyo subway incident, the initial failure to detect an odor also delayed response.',
              difficulty: 'easy',
              xp: 100
            },
            {
              id: 'chem_c1_q3',
              type: 'quiz',
              q: 'Which of the following statements about the 1995 Tokyo subway sarin attack is FALSE?',
              o: [
                'Aum Shinrikyo carried it out',
                '13 dead, thousands injured',
                'Hospitals learned of the incident through TV news',
                'All paramedics wore appropriate PPE during response'
              ],
              a: 3,
              exp: 'Lessons from the 1995 Tokyo sarin attack: Most paramedics entered the scene without PPE, and secondary contamination was widespread. This is why PPE is the first principle in chemical disaster response (first link of the Chain of Chemical Survival). The fact that hospitals learned of the event through TV also illustrates the communication failure at the time.',
              difficulty: 'medium',
              xp: 130
            },
            {
              id: 'chem_c1_q4',
              type: 'quiz',
              q: 'Which correctly lists the 4-step order of the "Chain of Chemical Survival"?',
              o: [
                'Antidote → Decontamination → PPE → Basic care',
                'PPE → Decontamination → Antidote → Basic and supportive care',
                'Decontamination → PPE → Basic care → Antidote',
                'Basic care → PPE → Antidote → Decontamination'
              ],
              a: 1,
              exp: 'Chain of Chemical Survival (Barelli et al. 2008): ① PPE → ② Decontamination → ③ Antidote therapy → ④ Basic and supportive care. PPE comes first. Approaching without PPE turns the rescuer into a patient.',
              difficulty: 'medium',
              xp: 150
            },
            {
              id: 'chem_c1_q5',
              type: 'scenario',
              narrative: '3 responders have arrived on scene. Only 2 PPE sets available. 30 patients are suffering.',
              q: 'What is the correct initial action?',
              o: [
                'Enter immediately without PPE to rescue as many patients as possible',
                '2 personnel don PPE for limited entry; 1 requests support and maintains base',
                'All personnel wait until 2 more PPE sets arrive',
                'Only 1 person dons PPE and attempts to rescue everyone'
              ],
              a: 1,
              exp: 'Without PPE, rescuers become patients. When PPE is limited: personnel with PPE perform essential minimum tasks (begin decontamination, move most critical patients); the rest focus on acquiring additional PPE and requesting support. Entering without PPE only increases casualties.',
              difficulty: 'medium',
              xp: 140
            }
          ],
          successNarrative: 'Your careful judgment prevented secondary contamination. Scene containment was maintained until the HAZMAT team arrived.\n\n"Nerve agent suspected confirmed. High probability of sarin." The report comes in over the radio.',
          failNarrative: 'You entered without PPE. Now you are also a patient. In chemical disasters, rescuer safety comes first.',
          rewards: { xp: 600, items: ['hint', 'decon_kit'], levelUp: 'Trainee → Junior Responder' }
        },

        // ---- Chapter 2 ----
        {
          id: 'chem_ch2',
          title: 'Chapter 2: PPE Donning & Zone Establishment',
          subtitle: 'Beginning of Contamination Control',
          levelTitle: 'Junior Responder',
          xpGoal: 800,
          hp: 100,
          timeLimit: 40,
          cinematic: {
            text: '08:25. HAZMAT team arrives.\n\nTeams in white protective suits are deploying their equipment. Police cordons are being set up around the station. The scene keeps expanding.\n\n"We need to establish zones right now. Before the contamination spreads!"',
            atmosphere: 'Subway station exit. Teams in protective suits moving. Onlooking citizens. Tension.',
            roleDialogue: {
              paramedic: '"Level B suit donned. Respirator checked. Ready."',
              emergency_doc: '"Determining the extent of the contaminated zone comes first. What about the underground ventilation system?"',
              hazmat: '"Begin setting up Hot Zone, Warm Zone, Cold Zone. Check wind direction — right now."',
              commander: '"Has the full station evacuation order been issued? Adjacent stations must also be sealed."',
              swat_medic: '"Assessing SWAT team entry — no additional threats identified at this time."',
              nurse: '"Setting up patient reception area for post-decontamination."'
            }
          },
          briefing: {
            situation: 'Chemical contamination spreading — urgent zone establishment and PPE donning required',
            hazards: ['Nerve agent vapor dispersal', 'Secondary contamination', 'Panicking civilians breaching zones'],
            resources: ['HAZMAT team', 'Level A/B/C PPE', 'Contamination detection equipment', 'Decontamination facility'],
            objective: 'Understand PPE levels and establish 3-zone system',
            patientCount: 'Approximately 30 (within zone)',
            time: '08:25 AM'
          },
          challenges: [
            {
              id: 'chem_c2_q1',
              type: 'quiz',
              q: 'According to OSHA standards, what PPE level is required for first-responding firefighters entering the Hot Zone (direct contamination area) of a chemical terror incident?',
              o: ['Level A', 'Level B', 'Level C', 'Level D'],
              a: 0,
              exp: 'OSHA PPE levels: ① Level A: Hot Zone firefighters — fully encapsulating suit + SCBA (Self-Contained Breathing Apparatus) ② Level B: EMS decontamination zone or unidentified agent in hospital ③ Level C: Agent identified, not at life-threatening concentration + hospital staff ④ Level D: Standard work attire. Level A provides the highest level of protection.',
              difficulty: 'medium',
              xp: 150
            },
            {
              id: 'chem_c2_q2',
              type: 'quiz',
              q: 'What is the role of the "Warm Zone" in the 3-zone system?',
              o: [
                'Zone where directly contaminated patients are located',
                'Contamination reduction zone where decontamination activities take place',
                'Completely safe hospital/support zone',
                'Police control zone'
              ],
              a: 1,
              exp: '3-Zone System: ① Hot Zone (Exclusion Zone): Immediate contamination area — highest PPE level required ② Warm Zone (Contamination Reduction Zone): Decontamination activity zone — Level B/C PPE ③ Cold Zone (Support Zone): Clean zone — hospital, command post, media. Contaminated patients are decontaminated in the Warm Zone before moving to the Cold Zone.',
              difficulty: 'medium',
              xp: 140
            },
            {
              id: 'chem_c2_q3',
              type: 'quiz',
              q: 'What percentage of external contamination can "Disrobing" alone remove in a chemical disaster?',
              o: ['Approximately 40-50%', 'Approximately 60-70%', 'Approximately 80-90%', 'Approximately 100%'],
              a: 2,
              exp: 'Disrobing removes approximately 80-90% of external contamination. This is Step 1 of the PRISM decontamination protocol and the fastest, most effective initial decontamination method. Clothing is placed in sealable plastic bags for separate storage. However, contamination that directly contacted the body requires additional decontamination procedures.',
              difficulty: 'easy',
              xp: 110
            },
            {
              id: 'chem_c2_q4',
              type: 'quiz',
              q: 'What is the correct order of the PRISM (Primary Response Incident Scene Management) 3-step decontamination protocol?',
              o: [
                'Wet wash → Disrobe → Dry decontamination',
                'Disrobe + Dry decontamination → Ladder Pipe System irrigation (15 sec) → Secondary technical decon (15-90 sec)',
                'Administer antidote → Disrobe → Wash',
                'Ladder pipe wash → Disrobe → Technical decon'
              ],
              a: 1,
              exp: 'PRISM 3-step decontamination: ① Step 1: Disrobing + Dry decontamination (remove powder, wipe with paper) ② Step 2: Ladder Pipe System irrigation — 15-second warm water irrigation ③ Step 3: Secondary/Technical decontamination — wash with baby shampoo and cotton towel for 15-90 seconds. Full 3-step application removes 100% (±1%) of chemical contamination.',
              difficulty: 'medium',
              xp: 160
            },
            {
              id: 'chem_c2_q5',
              type: 'scenario',
              narrative: '15 patients being decontaminated in the Warm Zone. 5 of them are rapidly deteriorating. Miosis, bronchospasm, seizures.',
              q: 'What treatment must begin immediately alongside decontamination?',
              o: [
                'No treatment at all until decontamination is complete',
                'Begin antidote (atropine) administration in the Warm Zone — continue decon and treatment in parallel',
                'Move the 5 to the Cold Zone first, then administer antidote',
                'Immediately airlift to hospital'
              ],
              a: 1,
              exp: 'In the Chain of Chemical Survival, decontamination and antidote administration can proceed in parallel. Bronchospasm and seizures from nerve agent poisoning are immediate life threats. Antidote (atropine) can be administered during decontamination. However, the administering medical staff must be wearing PPE. "Save life first; decon proceeds in parallel" is the principle.',
              difficulty: 'hard',
              xp: 180
            }
          ],
          successNarrative: 'Zone setup complete. Decontamination begins. Clothing removal alone eliminates 80% of contamination.\n\n"Excellent. Initiating PRISM protocol. Proceed with first-line decontamination."',
          failNarrative: 'Zone boundaries are confused. A contaminated patient entered the Cold Zone. Secondary contamination has occurred. Start over.',
          rewards: { xp: 800, items: ['hint', 'timefreeze'], levelUp: null }
        },

        // ---- Chapter 3 ----
        {
          id: 'chem_ch3',
          title: 'Chapter 3: Administer the Antidote',
          subtitle: 'Nerve Agent Antidote Protocol',
          levelTitle: 'Intermediate Specialist',
          xpGoal: 1000,
          hp: 100,
          timeLimit: 35,
          cinematic: {
            text: '08:47. Decontamination station within the Warm Zone.\n\n22 decontaminated patients are being transferred to the cold zone. But 8 remain critical. Seizures, bronchospasm, decreased consciousness.\n\n"Begin antidote administration!" The physician\'s order has been given.\n\nAtropine, pralidoxime, diazepam — these three determine life or death.',
            atmosphere: 'Inside the decontamination station. Medical staff in masks. Sounds of seizing patients.',
            roleDialogue: {
              paramedic: '"Atropine 2mg IV ready." Picks up the syringe.',
              emergency_doc: '"Report secretion status. Atropine endpoint is drying of secretions."',
              hazmat: '"Hot Zone residual patient check complete. Decontamination 100% in progress."',
              commander: '"Hospital chemical terror preparedness declaration complete. 10 ambulances on standby."',
              swat_medic: '"Pralidoxime must be given before aging. Hurry."',
              nurse: '"Patient A seizing. Prepare diazepam."'
            }
          },
          briefing: {
            situation: '8 critical nerve agent (sarin) poisoning patients — antidote needed immediately',
            hazards: ['AChE "aging" irreversible conversion', 'Respiratory failure', 'Refractory seizures'],
            resources: ['Atropine ampoules', 'Pralidoxime (2-PAM)', 'Diazepam', 'Oxygen supply'],
            objective: 'Understand and apply nerve agent antidote protocol',
            patientCount: '8 critical',
            time: '08:47 AM'
          },
          challenges: [
            {
              id: 'chem_c3_q1',
              type: 'quiz',
              q: 'What is the endpoint (stopping criterion) for atropine administration in nerve agent poisoning?',
              o: [
                'When pulse exceeds 100 beats per minute',
                'When secretions dry and bronchospasm resolves',
                'When pupils are maximally dilated',
                'When the patient regains consciousness'
              ],
              a: 1,
              exp: 'Atropine endpoint: "Drying of secretions + resolution of bronchospasm". Drying of secretions is the most important criterion. Pupil dilation and fast pulse are side effects of atropine, not efficacy criteria. In nerve agent poisoning, atropine must be administered in sufficient amounts (sometimes hundreds of mg in extreme cases).',
              difficulty: 'hard',
              xp: 200
            },
            {
              id: 'chem_c3_q2',
              type: 'quiz',
              q: 'Which correctly describes the mechanism and timing limitation of pralidoxime (2-PAM)?',
              o: [
                'Blocks acetylcholine receptors — effective at any time',
                'Reactivates AChE — must be given before "aging" to be effective',
                'Directly suppresses nerve excitation — given after seizure onset',
                'Destroys AChE — immediate effect'
              ],
              a: 1,
              exp: 'Pralidoxime (2-PAM): Binds to organophosphate-inactivated AChE → reactivates AChE. Key limitation: "Aging" phenomenon — after nerve agent binds to AChE, given sufficient time (minutes to hours depending on agent), the bond becomes irreversible. After aging, 2-PAM is ineffective. Therefore, it must be administered as early as possible. Soman (GD) has the fastest aging.',
              difficulty: 'very_hard',
              xp: 250
            },
            {
              id: 'chem_c3_q3',
              type: 'quiz',
              q: 'What drug is used to control seizures in a nerve agent poisoning patient?',
              o: ['Lidocaine', 'Diazepam', 'Epinephrine', 'Amiodarone'],
              a: 1,
              exp: 'Seizure treatment in nerve agent poisoning: Diazepam — a benzodiazepine. Suppresses sustained neural firing caused by ACh hyperactivity. The 3 nerve agent antidotes: ① Atropine: blocks muscarinic effects ② Pralidoxime (2-PAM): reactivates AChE ③ Diazepam: seizure control. All three are used together.',
              difficulty: 'medium',
              xp: 160
            },
            {
              id: 'chem_c3_q4',
              type: 'scenario',
              narrative: 'What nerve agent was used in the 2017 assassination of the North Korean leader\'s half-brother at Kuala Lumpur Airport?',
              q: 'Which nerve agent was used?',
              o: ['Sarin (GB)', 'VX', 'Soman (GD)', 'Tabun (GA)'],
              a: 1,
              exp: 'VX was used in the 2017 Kuala Lumpur Airport assassination of Kim Jong-nam (half-brother of North Korean leader Kim Jong-un). VX is an oily, persistent nerve agent with very high skin penetration. This incident is a rare case of VX being used as an actual assassination weapon and is documented as an example of VX use by a non-state actor.',
              difficulty: 'easy',
              xp: 130
            },
            {
              id: 'chem_c3_q5',
              type: 'quiz',
              q: 'What is the current standard of care (TOC) antidote for cyanide poisoning?',
              o: ['Atropine', 'Naloxone', 'Hydroxocobalamin', 'EDTA'],
              a: 2,
              exp: 'Cyanide antidote: Hydroxocobalamin (Cyanokit®). Binds to cyanide to form cyanocobalamin (vitamin B12) → excreted in urine. Since burning plastic/synthetic fibers at fire scenes produces hydrogen cyanide (HCN), HCN poisoning should be considered in patients with inhalation injuries at fire scenes.',
              difficulty: 'hard',
              xp: 190
            }
          ],
          successNarrative: 'Antidote administration complete. Patients\' secretions are decreasing and bronchospasm is improving.\n\n"Good atropine response. 2-PAM appears to be taking effect as well."',
          failNarrative: 'Delayed antidote administration or wrong drug selected. Patient condition deteriorating. Review again.',
          rewards: { xp: 1000, items: ['medkit', 'doubleXP'], levelUp: 'Junior Responder → Intermediate Specialist' }
        },

        // ---- Chapter 4 ----
        {
          id: 'chem_ch4',
          title: 'Chapter 4: Spread of Contamination',
          subtitle: 'Chemical Agent Classification and Additional Threats',
          levelTitle: 'Advanced Specialist',
          xpGoal: 1200,
          hp: 100,
          timeLimit: 35,
          cinematic: {
            text: '09:15. Urgent call from police investigation unit.\n\n"2 additional packages found inside the station. Contents unidentified. Possible additional agents." Simultaneously, a report comes in from the hospital. "In addition to inhalation symptom patients, 3 more patients with skin blistering identified."\n\nIt may not just be sarin. A mixed-agent attack.',
            atmosphere: 'Tension at maximum. The radio keeps sounding.',
            roleDialogue: {
              paramedic: '"Blisters? That\'s not a nerve agent symptom. Has another agent been mixed in?"',
              emergency_doc: '"Blisters → Vesicant agent. Mustard or lewisite." Re-examining the diagnosis.',
              hazmat: '"Analysis team deployed for additional packages. Agent identification is top priority."',
              commander: '"Escalating to combined terror attack. Requesting additional HAZMAT teams."',
              swat_medic: '"Other stations need to be checked too. This could be a simultaneous multi-site attack."',
              nurse: '"Setting up additional isolation zone for vesicant patients."'
            }
          },
          briefing: {
            situation: 'Suspected nerve agent + vesicant combined attack — additional agent classification needed',
            hazards: ['Additional contamination source', 'Vesicant contact hazard', 'Patients with mixed symptoms'],
            resources: ['Toxicology classification guide', 'Additional PPE', 'Vesicant treatment kit'],
            objective: 'Understand classification of 10 chemical agent types and recognize toxidromes',
            patientCount: '3 new + existing patients',
            time: '09:15 AM'
          },
          challenges: [
            {
              id: 'chem_c4_q1',
              type: 'quiz',
              q: 'Which of the following is a vesicant agent that causes skin blisters?',
              o: ['Sarin', 'Mustard Gas', 'Phosgene', 'Chlorine'],
              a: 1,
              exp: 'Vesicants: Chemical agents that form severe blisters on skin, eyes, and respiratory mucosa. Major vesicants: ① Mustard Gas (Blister Agent): Most representative vesicant, first used in WWI ② Lewisite: Immediate pain + blistering ③ Phosgene Oxime. Mustard is the "silent emergency" — blisters form hours later with no immediate pain.',
              difficulty: 'medium',
              xp: 150
            },
            {
              id: 'chem_c4_q2',
              type: 'quiz',
              q: 'What category of agent did Russian forces use in the 2002 Moscow theater hostage crisis?',
              o: ['Nerve agent', 'Opioid + anesthetic combination', 'Vesicant', 'Blood agent'],
              a: 1,
              exp: '2002 Moscow Theater Hostage Crisis (Nord-Ost): Russian forces used a combination of carfentanil + anesthetic. Result: 130+ hostages died (mostly due to lack of appropriate antidote/treatment). The antidote for opioid chemical weapons is naloxone. This incident demonstrated the danger of opioid agents and the importance of medical response.',
              difficulty: 'hard',
              xp: 200
            },
            {
              id: 'chem_c4_q3',
              type: 'quiz',
              q: 'What is the most important initial treatment for patients exposed to respiratory agents such as chlorine or phosgene?',
              o: [
                'Immediate atropine administration',
                'Immediate decontamination + high-flow oxygen + bronchodilator as indicated',
                'Immediate transfusion',
                'Supportive care only — no antidote available'
              ],
              a: 1,
              exp: 'Respiratory agents (choking/pulmonary agents): chlorine, phosgene, chloropicrin, etc. Cause pulmonary injury + pulmonary edema. Initial treatment: ① Immediate decontamination (evacuate from contaminated area) ② High-flow oxygen ③ Bronchodilator (salbutamol) for bronchospasm ④ Consider hyperbaric oxygen if pulmonary edema progresses. No specific antidote, but oxygen and supportive care are key.',
              difficulty: 'hard',
              xp: 180
            },
            {
              id: 'chem_c4_q4',
              type: 'scenario',
              narrative: 'Field treatment of 3 patients with skin blisters. Should the blisters be popped or not?',
              q: 'What is the correct method for treating skin blisters caused by a vesicant (mustard gas)?',
              o: [
                'Pop the blister to remove the fluid',
                'Leave the blister intact and cover with sterile dressing',
                'Apply an ice pack directly to the blister',
                'Apply antibiotic ointment directly to the blister'
              ],
              a: 1,
              exp: 'Vesicant blister treatment: Do NOT pop the blister. The blister fluid may still contain the agent, posing secondary contamination risk. Skin protective function must also be maintained. Correct treatment: ① Protect with sterile dressing ② Prevent secondary infection ③ Consult wound specialist. However, if the blister is very large and impedes movement, trained medical personnel may carefully drain it under sterile conditions.',
              difficulty: 'hard',
              xp: 210
            },
            {
              id: 'chem_c4_q5',
              type: 'quiz',
              q: 'What is the antidote for hydrofluoric acid (HF) exposure?',
              o: ['Atropine', 'Calcium (calcium gluconate/chloride)', 'Naloxone', 'Hydroxocobalamin'],
              a: 1,
              exp: 'Hydrofluoric acid (HF) antidote: Calcium (Calcium Gluconate/Chloride). Fluoride ions chelate calcium/magnesium in tissue → hypocalcemia, cardiac dysrhythmia. Treatment: Apply calcium gel directly to skin + IV calcium administration. Systemic toxicity is strong; even small exposures can be fatal.',
              difficulty: 'hard',
              xp: 190
            }
          ],
          successNarrative: 'Successfully responded to the combined agent attack. The additional package agent was confirmed as mustard gas and immediately isolated.',
          failNarrative: 'Judgment is difficult in combined agent situations. Review again.',
          rewards: { xp: 1200, items: ['shield', 'doubleXP'], levelUp: 'Intermediate Specialist → Advanced Specialist' }
        },

        // ---- Chapter 5 ----
        {
          id: 'chem_ch5',
          title: 'Chapter 5: Hospital CBRNE Response',
          subtitle: 'Hospital Chemical Disaster Response System',
          levelTitle: 'Senior Expert',
          xpGoal: 1500,
          hp: 100,
          timeLimit: 30,
          cinematic: {
            text: '10:00 AM. Seoul General Hospital Emergency Room.\n\nSome arriving patients entered without decontamination. Five ER staff members have begun showing tearing and respiratory symptoms. The hospital is at risk of becoming a secondary contamination zone.',
            atmosphere: 'Hospital alarm system activated. Medical staff in confusion.',
            roleDialogue: {
              paramedic: '"Undecontaminated patient entered the ER. Worst case scenario."',
              emergency_doc: '"Seal the ER. First, determine the extent of secondary contamination."',
              hazmat: '"Immediately don hospital Level C PPE. Cut off ER ventilation."',
              commander: '"Activate HICS chemical disaster mode. Notify all staff."',
              swat_medic: '"Trace patient movement. Who passed through where."',
              nurse: '"Immediately isolate symptomatic staff. Record names."'
            }
          },
          briefing: {
            situation: 'Hospital ER secondary contamination — HICS chemical disaster mode required',
            hazards: ['Secondary contamination of medical staff', 'Treatment gaps', 'Media access'],
            resources: ['Level C PPE', 'Hospital decontamination zone', 'Antidote stockpile'],
            objective: 'Understand the 12-step hospital chemical disaster response',
            patientCount: '20 admitted patients + 5 symptomatic staff',
            time: '10:00 AM'
          },
          challenges: [
            {
              id: 'chem_c5_q1',
              type: 'quiz',
              q: 'What was the primary channel through which hospitals learned of the 1995 Tokyo sarin attack being a chemical terror incident?',
              o: ['Official government emergency broadcast', 'Through TV news', 'Direct statements from patients', '119 emergency coordinator'],
              a: 1,
              exp: 'Key lesson from the 1995 Tokyo sarin attack: Many hospitals learned it was a chemical terror event through TV news. The official notification system had broken down. This experience demonstrated the need to establish real-time communication between hospitals, the scene, and government during chemical disasters. Today, immediate notification through HICS and regional medical coordinators is the standard.',
              difficulty: 'medium',
              xp: 140
            },
            {
              id: 'chem_c5_q2',
              type: 'quiz',
              q: 'What should be done first after "Hospital Disaster Declaration (HICS activation)" during hospital chemical disaster response?',
              o: [
                'Brief the media on the situation',
                'Set up ER decontamination zone + don PPE for medical staff',
                'Transfer all patients to general wards',
                'Suspend 24-hour operations'
              ],
              a: 1,
              exp: 'First steps in hospital chemical disaster response: ① Set up decontamination zone outside the ER ② Medical staff don PPE (Level C or higher) ③ Isolate contaminated patients ④ Activate HICS command structure. Media briefing comes later; patient care comes first.',
              difficulty: 'medium',
              xp: 150
            },
            {
              id: 'chem_c5_q3',
              type: 'quiz',
              q: 'What is the optimal shower water temperature for decontamination in the ORCHIDS protocol?',
              o: ['20°C (cold water)', '35°C (warm, near body temperature)', '45°C (hot water)', 'Temperature does not matter'],
              a: 1,
              exp: 'ORCHIDS (Optimal decontamination conditions): Research on optimal decontamination conditions found that 35°C warm water yielded the best results. Cold water causes hypothermia and patient resistance; too-hot water poses burn risk and increases absorption through vasodilation. 35°C is the balance point between effective washing and patient comfort.',
              difficulty: 'hard',
              xp: 170
            },
            {
              id: 'chem_c5_q4',
              type: 'scenario',
              narrative: 'Patients continue entering the ER with the chemical agent unidentified. What PPE level should be used?',
              q: 'Agent unidentified + possible life-threatening concentration → what PPE level must medical staff wear?',
              o: ['Level A', 'Level B', 'Level C', 'Level D (standard gown)'],
              a: 1,
              exp: 'OSHA standard: Unidentified agent or possible life-threatening concentration → Level B PPE. Level B: Positive-pressure SCBA + chemical-resistant suit (full encapsulation not required). Level A for Hot Zone entry, Level C when agent is identified and concentration not at life-threatening level, Level D for routine work.',
              difficulty: 'hard',
              xp: 180
            },
            {
              id: 'chem_c5_q5',
              type: 'quiz',
              q: 'What is the correct answer to "Can antidotes be administered in the Warm Zone?" in a chemical disaster?',
              o: [
                'Never — drug administration only in Cold Zone',
                'Yes — PPE-equipped medical staff can administer antidote concurrent with decontamination',
                'Unnecessary — natural recovery after decontamination is complete',
                'Only for nerve agents — not possible for other agents'
              ],
              a: 1,
              exp: 'Warm Zone antidote administration: Yes, it is possible. In the Chain of Chemical Survival, decontamination and antidote administration can proceed in parallel. If bronchospasm or seizures from nerve agent poisoning are an immediate life threat, waiting for decontamination may be more dangerous. However, administering medical staff must be wearing appropriate PPE.',
              difficulty: 'medium',
              xp: 150
            }
          ],
          successNarrative: 'Hospital secondary contamination was caught early. All symptomatic staff are isolated and receiving treatment. The hospital continues to operate.',
          failNarrative: 'Secondary contamination has spread throughout the hospital. Go back and review.',
          rewards: { xp: 1500, items: ['antidote', 'doubleXP'], levelUp: 'Advanced Specialist → Senior Expert' }
        },

        // ---- Chapter 6: BOSS ----
        {
          id: 'chem_ch6',
          title: 'Chapter 6: Shadow of Sarin — Final Test',
          subtitle: 'Boss Chapter: Full Recreation of the Tokyo Nightmare',
          levelTitle: 'Master',
          xpGoal: 2000,
          hp: 100,
          timeLimit: 20,
          cinematic: {
            text: '11:00. Three hours since the incident began.\n\nTotal casualties: 47. Of those, 2 dead. Dozens receiving hospital treatment.\n\nAnd the final report: "One suspect captured inside the subway station. Intelligence on additional attack plans is being gathered."\n\nEverything you have learned so far converges in this final comprehensive test.',
            atmosphere: 'Operations command post. Monitors. Tense team members.',
            roleDialogue: {
              paramedic: '"I don\'t think I\'ll ever forget what I saw today. But we did it."',
              emergency_doc: '"45 of 47 survived. This is what we accomplished."',
              hazmat: '"Full scene decontamination complete. But for an even better response in the future."',
              commander: '"This experience will change Korea\'s chemical disaster response protocol."',
              swat_medic: '"Today proved once again that training saves lives."',
              nurse: '"45 patients will be able to return home to their families alive."'
            }
          },
          briefing: {
            situation: 'Incident winding down — comprehensive assessment and future response planning',
            hazards: ['Possible residual contamination', 'Medical staff exhaustion', 'Psychological trauma'],
            resources: ['Full CBRNE team', 'Hospital support system', 'Disaster psychological support team'],
            objective: 'Comprehensive evaluation of the entire chemical terror response process',
            patientCount: 'Total 47 patients processed',
            time: '11:00 AM'
          },
          challenges: [
            {
              id: 'chem_c6_q1',
              type: 'quiz',
              q: 'Which correctly lists the 4 links of the Chain of Chemical Survival in order?',
              o: [
                'PPE → Decontamination → Antidote → Basic/supportive care',
                'Decontamination → PPE → Basic care → Antidote',
                'Antidote → PPE → Decontamination → Basic care',
                'Basic care → Antidote → Decontamination → PPE'
              ],
              a: 0,
              exp: 'Chain of Chemical Survival (Barelli et al., European Journal of Emergency Medicine 2008): PPE → Decontamination → Antidote Therapy → BLS (Basic and Supportive Care). The order must be strictly followed. Without PPE, the next step cannot proceed.',
              difficulty: 'medium',
              xp: 200
            },
            {
              id: 'chem_c6_q2',
              type: 'quiz',
              q: 'What antidote is used for patients exposed to opioid chemical weapons (Moscow theater hostage crisis type)?',
              o: ['Atropine', 'Naloxone', 'Hydroxocobalamin', 'Pralidoxime (2-PAM)'],
              a: 1,
              exp: 'Antidote for opioid chemical weapons (carfentanil, fentanyl, etc.): Naloxone — opioid receptor antagonist. In the 2002 Moscow theater hostage crisis, the absence of adequate naloxone preparation resulted in 130+ deaths. Naloxone is now included in CBRNE on-scene antidote stockpiles.',
              difficulty: 'hard',
              xp: 240
            },
            {
              id: 'chem_c6_q3',
              type: 'quiz',
              q: 'What is the chemical contamination removal rate when the full PRISM 3-step decontamination is applied?',
              o: ['Approximately 70%', 'Approximately 85%', 'Approximately 95%', '100% (SD ±1%)'],
              a: 3,
              exp: 'Research results for the PRISM 3-step decontamination protocol (disrobing + ladder pipe irrigation + technical decon): 100% (SD ±1%) chemical contamination removal. This is why PRISM has been adopted as the standard protocol for chemical disaster decontamination.',
              difficulty: 'medium',
              xp: 180
            },
            {
              id: 'chem_c6_q4',
              type: 'scenario',
              narrative: 'Post-incident analysis: What is the most important lesson from today\'s incident?',
              q: 'What did we do better today compared to Tokyo 1995?',
              o: [
                'We used a stronger antidote',
                'Donning PPE, early zone establishment, and decon protocol minimized secondary contamination',
                'We used faster ambulances',
                'We were lucky'
              ],
              a: 1,
              exp: 'Tokyo 1995 vs today: In Tokyo, the major problems were entry without PPE, lack of decontamination system, and hospital secondary contamination. Today\'s success factors: ① Preventing secondary contamination by wearing PPE ② Immediate zone establishment (Hot/Warm/Cold) ③ Applying PRISM decontamination protocol ④ Following the Chain of Chemical Survival. Preparation and training determine life and death.',
              difficulty: 'easy',
              xp: 160
            },
            {
              id: 'chem_c6_q5',
              type: 'quiz',
              q: 'Which of the following is NOT a common cause of disrobing delays at a chemical terror scene?',
              o: [
                'Decontamination facilities/equipment not arriving on time',
                'Lack of training — not knowing the procedure',
                'Adequate training and preparation',
                'Insufficient training process'
              ],
              a: 2,
              exp: 'Common causes of decontamination delays of over 1 hour in real incidents: ① Decontamination facilities/equipment not arriving on time ② Lack of training ③ Insufficient training process ④ Delayed zone establishment. According to CBRNE training materials, decontamination initiation often takes over 1 hour in real events. Recommended: begin within 15 minutes. "Adequate training and preparation" is actually a factor that prevents delays.',
              difficulty: 'medium',
              xp: 200
            }
          ],
          successNarrative: 'Chemical Terror Campaign Complete.\n\nWhat you learned today: Chemical survival chain, PPE, zone establishment, PRISM decontamination, nerve agent antidotes.\n\nThis knowledge will one day save dozens, even hundreds of lives.\n\n"☣️ Chemical Terror Response Specialist" badge earned.',
          failNarrative: '"Chemical disasters are among the most complex of all disasters. Try again."',
          rewards: { xp: 2500, items: ['doubleXP', 'antidote', 'decon_kit'], levelUp: 'Senior Expert → Master', badge: '☣️ Chemical Terror Response Expert' }
        }
      ]
    },

    // ==========================================
    // CAMPAIGN 3: 🦠 Biological Terror
    // ==========================================
    {
      id: 'biological_terror',
      title: '🦠 Biological Terror Attack',
      subtitle: 'Seoul City Hall White Powder Terror — A Reenactment of the 2001 Amerithrax Attack',
      difficulty: '★★☆☆☆',
      difficultyLabel: 'Beginner-Intermediate',
      estimatedTime: '50 min',
      background: 'linear-gradient(135deg, #1a237e 0%, #283593 40%, #3949ab 100%)',
      cardColor: '#283593',
      icon: '🦠',
      unlockLevel: 0,
      synopsis: 'The nightmare of the 2001 American Amerithrax letter terror attacks has been recreated in Seoul. A suspicious white powder letter delivered to Seoul City Hall — is it anthrax? A campaign to learn all about CDC Category A biological agents.',
      skills: ['CDC Bioagent Classification', 'Anthrax Treatment', 'Isolation Protocols', 'Antibiotic Therapy', 'POD Operations'],
      completionBadge: '🦠 Biological Terror Response Expert',
      chapters: [
        // ---- Chapter 1 ----
        {
          id: 'bio_ch1',
          title: 'Chapter 1: The Suspicious Letter',
          subtitle: 'Seoul City Hall, Suspicious White Powder',
          levelTitle: 'Trainee',
          xpGoal: 500,
          hp: 100,
          timeLimit: 45,
          cinematic: {
            text: '2:15 PM. Seoul City Hall mail room.\n\n"A strange letter arrived. White powder is leaking out."\n\nThe clerk, face pale, called it in. The letter had been opened, and white powder spread through the air. Three employees were in the area.\n\n2001 — The Amerithrax letter terror. Is that nightmare now being replayed in Seoul?',
            atmosphere: 'Inside a government building. A quiet afternoon office. And fear.',
            roleDialogue: {
              paramedic: '"Don\'t touch anything! Get out of the room!"',
              emergency_doc: '"Check for symptoms. Possible inhalation exposure. Need to consider prophylactic antibiotics."',
              hazmat: '"White powder = suspected bioterrorism. Activating BSL-3 response protocol."',
              commander: '"Lock down the building. Isolate exposed persons. Report bioterrorism immediately."',
              swat_medic: '"Checking for additional threats. Any other packages?"',
              nurse: '"Starting symptom monitoring for all 3 exposed. Collecting their personal information."'
            }
          },
          briefing: {
            situation: 'White powder letter in a government building — suspected bioterrorism',
            hazards: ['Unknown biological agent', 'Airborne spore dispersal', 'Secondary infection of exposed persons'],
            resources: ['HAZMAT Team', 'PPE Level B', 'Isolation Zone', 'Federal Laboratory Support'],
            objective: 'Initial bioterrorism response — Suspect, Isolate, Report',
            patientCount: '3 exposed persons',
            time: '14:15'
          },
          challenges: [
            {
              id: 'bio_c1_q1',
              type: 'quiz',
              q: 'What was the total death toll in the 2001 American Amerithrax letter terror attack?',
              o: ['2', '5', '10', '22'],
              a: 1,
              exp: '2001 Amerithrax letter attacks: Five letters containing anthrax spores were sent to NBC, NY Post, senators, and others. Total: 22 infected (11 cutaneous + 11 inhalational), 5 dead. Estimated damage: ~$1 billion. Widespread impact across Florida, New York, New Jersey, Washington DC.',
              difficulty: 'easy',
              xp: 100
            },
            {
              id: 'bio_c1_q2',
              type: 'quiz',
              q: 'Which of the following does NOT belong to CDC Category A (highest priority) bioterrorism agents?',
              o: ['Anthrax (Bacillus anthracis)', 'Smallpox (Variola major)', 'Salmonella', 'Ebola virus'],
              a: 2,
              exp: 'CDC Category A biological agents (6 total): Anthrax (Bacillus anthracis), Botulism (Clostridium botulinum toxin), Plague (Yersinia pestis), Smallpox (Variola major), Tularemia (Francisella tularensis), Viral Hemorrhagic Fevers (VHF — Ebola, Marburg, etc.). Salmonella is Category B. Category A criteria: high transmissibility/mortality, causes social disruption, requires special response measures.',
              difficulty: 'medium',
              xp: 130
            },
            {
              id: 'bio_c1_q3',
              type: 'quiz',
              q: 'Among the three forms of Bacillus anthracis infection, which is the most lethal?',
              o: ['Cutaneous Anthrax', 'Gastrointestinal Anthrax', 'Inhalational Anthrax', 'All have equal lethality'],
              a: 2,
              exp: 'Anthrax infection lethality (most to least): #1 Inhalational Anthrax — >80% mortality without treatment, #2 Gastrointestinal Anthrax, #3 Cutaneous Anthrax — most common and least lethal. Weaponized anthrax delivered as aerosol to cause inhalational disease is the most dangerous form. Important: anthrax does NOT spread person-to-person.',
              difficulty: 'easy',
              xp: 110
            },
            {
              id: 'bio_c1_q4',
              type: 'quiz',
              q: 'What is the duration of prophylactic antibiotic therapy (PEP) after anthrax exposure?',
              o: ['7 days', '14 days', '30 days', '60 days'],
              a: 3,
              exp: 'Post-Exposure Prophylaxis (PEP) for anthrax exposure: Ciprofloxacin 500mg BID or Doxycycline 100mg BID — 60 days. Reason: anthrax spores may take up to 60 days to germinate in the lungs. Anthrax vaccine is also co-administered.',
              difficulty: 'medium',
              xp: 150
            },
            {
              id: 'bio_c1_q5',
              type: 'scenario',
              narrative: 'One of the three exposed employees already has a black eschar (black scab) and a painless ulcer on the hand.',
              q: 'This finding is consistent with which form of anthrax infection?',
              o: [
                'Inhalational anthrax — the most dangerous',
                'Cutaneous anthrax — infection through skin contact',
                'Gastrointestinal anthrax — infection through ingestion',
                'Meningeal anthrax — brain infection'
              ],
              a: 1,
              exp: 'Cutaneous Anthrax: Anthrax spores penetrate through skin wounds → within 1–5 days: small papule → vesicle → central necrosis (black eschar) + surrounding edema. Characteristically painless. The most common form of anthrax infection (95%) and the least lethal. Treatment: Ciprofloxacin or Doxycycline.',
              difficulty: 'medium',
              xp: 140
            }
          ],
          successNarrative: 'All three exposed persons are isolated, and the City Hall building has been locked down. Powder samples have been sent to the lab. Anthrax confirmation results will arrive within 48 hours.',
          failNarrative: 'Initial response was insufficient. In bioterrorism, early isolation is paramount.',
          rewards: { xp: 600, items: ['hint', 'medkit'], levelUp: 'Trainee → Junior Responder' }
        },

        // ---- Chapter 2 ----
        {
          id: 'bio_ch2',
          title: 'Chapter 2: Anthrax Confirmed',
          subtitle: 'Anthrax Diagnosis and Initial Treatment',
          levelTitle: 'Junior Responder',
          xpGoal: 800,
          hp: 100,
          timeLimit: 40,
          cinematic: {
            text: '48 hours later. Lab results are in.\n\n"Positive confirmed. Bacillus anthracis — anthrax."\n\nBeyond the initial three exposed persons, 12 additional employees from adjacent offices may have been exposed. A total of 15 must receive prophylactic antibiotics. And should the public be notified?',
            atmosphere: 'City Hall, 24 hours later. Police perimeter. Teams in biohazard suits.',
            roleDialogue: {
              paramedic: '"Antibiotics for all 15, immediately. No time to waste."',
              emergency_doc: '"If inhalational anthrax is confirmed, 60 days of antibiotic treatment is required."',
              hazmat: '"Beginning full building decontamination. BSL-3 procedures."',
              commander: '"We need to decide whether to go public. Panic versus the public\'s right to know."',
              swat_medic: '"Alert for additional letters. Other agencies may have received similar packages."',
              nurse: '"Starting preparations to set up a POD (Point of Dispensing)."'
            }
          },
          briefing: {
            situation: 'Anthrax confirmed — treatment of 15 exposed persons + public preventive measures needed',
            hazards: ['Inhalational anthrax incubation period up to 60 days', 'Secondary spread', 'Public panic'],
            resources: ['Ciprofloxacin stockpile', 'Doxycycline', 'Anthrax vaccine', 'POD facility'],
            objective: 'Anthrax treatment protocol + public prophylaxis preparation',
            patientCount: '15 exposed persons',
            time: '48 hours later'
          },
          challenges: [
            {
              id: 'bio_c2_q1',
              type: 'quiz',
              q: 'What is the characteristic chest X-ray (CXR) finding in the diagnosis of Inhalational Anthrax?',
              o: [
                'Pulmonary nodules',
                'Mediastinal widening + pleural effusions',
                'Pneumothorax',
                'No pneumonia pattern'
              ],
              a: 1,
              exp: 'Inhalational anthrax CXR findings: mediastinal widening is the classic sign. This occurs because anthrax infects the mediastinal lymph nodes. Pleural effusions may also be present. Anthrax diagnosis: blood culture, PCR, ELISA (requires specialized laboratory).',
              difficulty: 'hard',
              xp: 190
            },
            {
              id: 'bio_c2_q2',
              type: 'quiz',
              q: 'Which antibiotic and dosage is correct for first-line inpatient treatment of anthrax?',
              o: [
                'Amoxicillin 500mg PO TID',
                'Ciprofloxacin 400mg IV BID or Doxycycline 100mg IV BID',
                'Vancomycin 1g IV twice daily',
                'Metronidazole 500mg IV TID'
              ],
              a: 1,
              exp: 'Anthrax treatment: Ciprofloxacin 400mg IV BID or Doxycycline 100mg IV BID. Switch to oral Cipro 500mg when stable. Total treatment duration: 60 days including oral antibiotic phase. Rifampin, Clindamycin may be added. Severe cases require ICU and mechanical ventilation.',
              difficulty: 'medium',
              xp: 160
            },
            {
              id: 'bio_c2_q3',
              type: 'quiz',
              q: 'Can anthrax spread from person to person?',
              o: [
                'Yes — respiratory transmission',
                'No — no person-to-person transmission',
                'Only through skin contact',
                'Only through food ingestion'
              ],
              a: 1,
              exp: 'Bacillus anthracis: no direct person-to-person transmission. Routes of infection: contact with contaminated soil/animals (cutaneous anthrax), ingesting contaminated food (GI anthrax), inhaling contaminated aerosol (inhalational anthrax). This is paradoxically why anthrax is favored as a biological weapon — a controllable "pinpoint" attack. In bioterrorism, however, it is aerosolized to maximize casualties.',
              difficulty: 'easy',
              xp: 110
            },
            {
              id: 'bio_c2_q4',
              type: 'scenario',
              narrative: 'All 15 exposed persons need antibiotics. However, one of the 12 is pregnant and one has renal failure.',
              q: 'What is the antibiotic choice in these special circumstances?',
              o: [
                'Pregnant patient → Ciprofloxacin (regardless of fetal risk), Renal failure → Doxycycline',
                'Pregnant patient → Ciprofloxacin (anthrax risk outweighs fetal risk), Renal failure → dose-adjusted Cipro or Amoxicillin',
                'Neither can receive antibiotics — vaccines only',
                'Both should be admitted for observation only'
              ],
              a: 1,
              exp: 'Special circumstances in anthrax exposure: Pregnant patient — administer Ciprofloxacin. The lethal risk of inhalational anthrax far outweighs fetal risk (>80% mortality without treatment). Renal failure — dose adjustment required (Cipro is renally excreted). Drug selection proceeds when benefits outweigh risks.',
              difficulty: 'hard',
              xp: 200
            },
            {
              id: 'bio_c2_q5',
              type: 'quiz',
              q: 'Which statement correctly describes the 1979 Soviet Sverdlovsk anthrax incident?',
              o: [
                'A food-borne outbreak of gastrointestinal anthrax',
                'Unintentional release of anthrax from a military facility — victims were located downwind of the facility',
                'An intentional attack by anthrax terrorists',
                'A natural soil anthrax outbreak'
              ],
              a: 1,
              exp: '1979 Sverdlovsk: weaponized anthrax was unintentionally released into the atmosphere from a Soviet military facility (Compound 19). Most victims were distributed in a narrow downwind corridor (key evidence). The Soviet Union blamed contaminated meat, but it was later revealed to be aerosol anthrax. Deaths: 64+. This incident is key evidence of the existence of a Soviet biological weapons program.',
              difficulty: 'medium',
              xp: 150
            }
          ],
          successNarrative: 'Prophylactic antibiotics administered to all 15 persons. None progressed to inhalational anthrax. The rapid response made 60 days of prophylactic treatment possible.',
          failNarrative: 'Initial treatment was delayed. Anthrax can have an incubation period of up to 60 days.',
          rewards: { xp: 800, items: ['hint', 'timefreeze'], levelUp: null }
        },

        // ---- Chapter 3 ----
        {
          id: 'bio_ch3',
          title: 'Chapter 3: The Terror of Category A',
          subtitle: 'Botulinum, Plague, and Smallpox',
          levelTitle: 'Intermediate Specialist',
          xpGoal: 1000,
          hp: 100,
          timeLimit: 35,
          cinematic: {
            text: 'During the investigation, traces were found of the perpetrator researching bioterrorism information online. His notes contain evidence that he considered other agents beyond anthrax.\n\nYou must prepare for all of Category A.',
            atmosphere: 'Emergency operations conference room. A list of biological agents is written on the whiteboard.',
            roleDialogue: {
              paramedic: '"Six Category A agents. We need to know them all."',
              emergency_doc: '"Botulinum is characterized by descending paralysis. Smallpox — no vaccines for 40 years."',
              hazmat: '"Pneumonic plague can spread person-to-person. N95 is mandatory."',
              commander: '"We can only call ourselves prepared if we\'re ready for all six Category A agents."',
              swat_medic: '"Integrated CBRN response — biological agents are characterized by delayed effects."',
              nurse: '"Checking vaccine stockpile status. Do we have smallpox vaccines in reserve?"'
            }
          },
          briefing: {
            situation: 'Comprehensive preparedness training for all Category A biological agents',
            hazards: ['Different transmission routes for each agent', 'Vaccine/antibiotic stockpile status', 'Public panic management'],
            resources: ['CDC Strategic National Stockpile', 'Laboratory confirmation system', 'Isolation facilities'],
            objective: 'Understand the clinical characteristics of all 6 Category A biological agents',
            patientCount: 'Virtual scenario training',
            time: 'Training session'
          },
          challenges: [
            {
              id: 'bio_c3_q1',
              type: 'quiz',
              q: 'Which neurological finding is correct for Botulinum Toxin poisoning?',
              o: [
                'Ascending flaccid paralysis',
                'Descending flaccid paralysis',
                'Spastic paralysis',
                'Hemiplegia'
              ],
              a: 1,
              exp: 'Botulinum toxin: Descending FLACCID Paralysis — begins with cranial nerves and progresses downward. Early symptoms: diplopia, dysarthria, dysphagia. Progression: respiratory muscle paralysis → mechanical ventilation needed (weeks to months). Treatment: Equine serum heptavalent botulism antitoxin, mechanical ventilation support. Antibiotics not needed.',
              difficulty: 'hard',
              xp: 190
            },
            {
              id: 'bio_c3_q2',
              type: 'quiz',
              q: 'Which form of plague (Yersinia pestis) can spread from person to person?',
              o: [
                'Bubonic plague',
                'Septicemic plague',
                'Pneumonic plague',
                'None can spread person-to-person'
              ],
              a: 2,
              exp: 'Forms of plague: ① Bubonic: flea bite → lymph node swelling (bubo), no person-to-person spread ② Septicemic: sepsis, DIC, no spread ③ Pneumonic: cough, hemoptysis, chest pain — spreads person-to-person via respiratory droplets. Pneumonic plague requires isolation room + N95, minimum 72-hour isolation. This is why pneumonic plague is the most dangerous form in a bioterrorism context.',
              difficulty: 'medium',
              xp: 160
            },
            {
              id: 'bio_c3_q3',
              type: 'quiz',
              q: 'Within what timeframe after smallpox exposure can vaccination prevent infection or reduce severity?',
              o: [
                'Within 1 hour of exposure',
                'Within 1–4 days post-exposure (prevention), 4–7 days (severity reduction)',
                'More than 1 week post-exposure',
                'Vaccine is ineffective'
              ],
              a: 1,
              exp: 'Smallpox vaccine efficacy: vaccination within 1–4 days post-exposure → can prevent infection. Within 4–7 days → can reduce severity. Since smallpox was declared eradicated in 1980, the general public has not been vaccinated for 40+ years — no immunity. Antiviral: TPOXX (Tecovirimat) — FDA approved 2018. Key treatment: isolation + ring vaccination.',
              difficulty: 'medium',
              xp: 170
            },
            {
              id: 'bio_c3_q4',
              type: 'quiz',
              q: 'How many people could potentially be killed by 1 gram of aerosolized botulinum toxin?',
              o: ['Approximately 100', 'Approximately 10,000', 'Over 1.5 million', 'A handful'],
              a: 2,
              exp: 'Lethal efficiency of botulinum toxin: 1 gram of aerosolized botulinum toxin could kill a minimum of 1.5 million people. It has the lowest LD50 (lethal dose for 50% of subjects) of any known toxin. This is why botulinum is classified as one of the most potentially dangerous CDC Category A agents.',
              difficulty: 'hard',
              xp: 200
            },
            {
              id: 'bio_c3_q5',
              type: 'quiz',
              q: 'Which of the following is a CDC Category B bioterrorism agent?',
              o: [
                'Anthrax (Bacillus anthracis)',
                'Ebola virus',
                'Ricin toxin (from castor beans)',
                'Smallpox (Variola major)'
              ],
              a: 2,
              exp: 'CDC Category B agents: Ricin toxin, Brucellosis, Salmonella, Staphylococcal enterotoxin B, Q fever, some Tularemia, etc. Category A (highest): Anthrax, Botulism, Plague, Smallpox, Tularemia, VHF. Category C: emerging pathogens (Nipah, Hantavirus, SARS).',
              difficulty: 'medium',
              xp: 150
            }
          ],
          successNarrative: 'All Category A knowledge acquired. This knowledge will protect you and your team in the next biological terror event.',
          failNarrative: 'Response differs completely depending on the type of biological agent. Study again.',
          rewards: { xp: 1000, items: ['doubleXP', 'medkit'], levelUp: 'Junior Responder → Intermediate Specialist' }
        },

        // ---- Chapter 4 ----
        {
          id: 'bio_ch4',
          title: 'Chapter 4: Isolation and Control',
          subtitle: 'Infectious Disease Transmission Prevention Protocol',
          levelTitle: 'Advanced Specialist',
          xpGoal: 1200,
          hp: 100,
          timeLimit: 35,
          cinematic: {
            text: 'Investigation reveals that anthrax letters were simultaneously sent to five government agencies across Seoul. Exposed persons now number in the dozens.\n\nLarge-scale prophylaxis and preventive medication are needed. POD (Points of Dispensing) setup begins.',
            atmosphere: 'Emergency operations center. The agencies that received letters are being marked on a map.',
            roleDialogue: {
              paramedic: '"Simultaneous response at five agencies? We don\'t have enough resources."',
              emergency_doc: '"We need to identify the number of exposed and set priorities."',
              hazmat: '"All five buildings need decontamination. We have to split the teams."',
              commander: '"Determine POD locations. Consider both accessibility and safety."',
              swat_medic: '"Confirming security at each agency — checking for additional threats."',
              nurse: '"We need a system to distribute antibiotics to thousands of people."'
            }
          },
          briefing: {
            situation: 'Simultaneous anthrax letters to 5 agencies — large-scale prophylaxis system needed',
            hazards: ['Hundreds of exposed persons expected', 'Insufficient antibiotic stockpile', 'Mass hospital visits due to panic'],
            resources: ['CDC Strategic National Stockpile', 'POD facilities', 'Public health team', 'Antibiotics'],
            objective: 'Understand the POD system and large-scale public health response',
            patientCount: 'Potentially hundreds exposed',
            time: '72 hours after incident'
          },
          challenges: [
            {
              id: 'bio_c4_q1',
              type: 'quiz',
              q: 'What is the primary purpose of the POD (Points of Dispensing) system?',
              o: [
                'Relieving hospital emergency room overload',
                'Rapidly distributing medical countermeasures (antibiotics, vaccines, etc.) to the community during a large-scale public health crisis',
                'Training location for medical personnel',
                'Storage for contaminated materials'
              ],
              a: 1,
              exp: 'POD (Points of Dispensing): temporary distribution sites established to rapidly deliver medical countermeasures (medications, vaccines) to the community during a public health emergency. Types: ① Open POD (public spaces) ② Closed POD (workplaces, schools) ③ Drive-Through POD ④ Mobile POD (areas with limited transportation access). Goal: efficiently process large numbers of exposed persons without sending them all to hospital emergency rooms.',
              difficulty: 'medium',
              xp: 150
            },
            {
              id: 'bio_c4_q2',
              type: 'quiz',
              q: 'Of the six key steps of biological disaster response (FEMA), which is the first?',
              o: [
                'Distributing medications',
                'Detect and Characterize the Threat',
                'Establishing isolation zones',
                'Notifying the media'
              ],
              a: 1,
              exp: 'FEMA 6-step biological disaster response: 1) Detect and Characterize the Threat 2) Communicate with Partners and Public 3) Control the Spread of Disease 4) Augment Mass Care Services 5) Augment Health and Medical Services 6) Restore Essential Services. Detection and characterization come first — "you must know what it is before you can respond."',
              difficulty: 'medium',
              xp: 140
            },
            {
              id: 'bio_c4_q3',
              type: 'quiz',
              q: 'Which grouping contains only biological agents capable of person-to-person transmission?',
              o: [
                'Anthrax + Botulinum toxin',
                'Pneumonic plague + Smallpox + Viral hemorrhagic fever',
                'Anthrax + Tularemia',
                'Botulinum toxin + Ricin'
              ],
              a: 1,
              exp: 'Biological agents capable of person-to-person transmission: Pneumonic plague (respiratory droplets), Smallpox (airborne, contact), Viral hemorrhagic fevers — Ebola, etc. (body fluid contact). No person-to-person transmission: Anthrax, Botulinum toxin, Tularemia, Bubonic/Septicemic plague. Transmissible agents require isolation + N95 or higher PPE.',
              difficulty: 'hard',
              xp: 200
            },
// PART 2 — continues from campaign_mode_part1.js
// bio_c4_q4 (already started in part1, this is the CONTINUATION block)
// We resume after bio_c4_q3 closing brace

            {
              id: 'bio_c4_q4',
              type: 'scenario',
              narrative: 'A patient with pneumonic plague arrives at the hospital emergency room. Isolation measures are needed.',
              q: 'What is the minimum isolation period and required PPE for a patient with pneumonic plague?',
              o: [
                '24-hour isolation + standard surgical mask',
                'Isolation for at least 72 hours + N95 respirator',
                'No isolation needed — antibiotics only',
                'Negative-pressure isolation room + 14 days'
              ],
              a: 1,
              exp: 'Pneumonic plague isolation: isolation required until at least 72 hours of antibiotic treatment has been completed. PPE: N95 respirator (to prevent respiratory droplet transmission). Treatment: Streptomycin 15mg/kg IM for 10 days or Gentamicin 5mg/kg IV for 7–10 days. Pneumonic plague is the only form of plague capable of person-to-person transmission.',
              difficulty: 'hard',
              xp: 200,
              roleBonus: { emergency_doc: 'Emergency Physician: Immediately identifies isolation guidelines by transmission route.' }
            },
            {
              id: 'bio_c4_q5',
              type: 'quiz',
              q: 'What special role does the emergency department (ED) play when a biological disaster occurs at a hospital?',
              o: [
                'Last line of defense — admit and isolate all patients',
                'First Touch for bioterrorism victims — early recognition is decisive',
                'A transfer hub to immediately hand patients off to quarantine authorities',
                'Assign all patients to ICU without triage'
              ],
              a: 1,
              exp: 'During bioterrorism, the ED is likely to be the "First Touch" for victims. Because symptoms are nonspecific, the ED physician\'s early recognition and isolation decision is the key to preventing spread. Core principle: Isolate → Treat clinically. Primary antibiotics: Cipro & Doxy (effective for most Category A agents).',
              difficulty: 'hard',
              xp: 200,
              roleBonus: { emergency_doc: 'This is your specialty. Diagnostic bonus XP +100!' }
            }
          ],
          successNarrative: 'Your rapid isolation measures and diagnosis confirmed an anthrax attack.\nAll relevant agencies were immediately notified, and antibiotic treatment has begun.\nA prophylactic vaccination plan is now being activated...',
          failNarrative: 'Delayed isolation led to additional hospital exposures. Three healthcare workers have started prophylactic antibiotics. It\'s late, but response must begin now.',
          rewards: { xp: 1000, items: ['shield', 'timefreeze'], levelUp: 'Advanced Specialist → Senior Expert' }
        },
        {
          id: 'bio_ch5',
          title: 'Chapter 5: National Vaccination Operation',
          subtitle: 'POD System Activation',
          levelTitle: 'Senior Expert',
          cinematic: {
            text: 'The scope of anthrax casualties is expanding.\nThe government has declared an emergency nationwide vaccination operation.\nPOD (Point of Dispensing) centers are being established at 10 locations across Seoul.\n\nYou have been appointed as the POD operations medical advisor.\nTens of thousands of citizens are lining up for vaccinations and antibiotics.',
            roleDialogue: {
              paramedic: '"Emergency personnel must be deployed to each POD site. Epinephrine ready for anaphylaxis reactions."',
              emergency_doc: '"We need to rapidly screen symptomatic individuals. Distinguishing inhalational from cutaneous anthrax is critical."',
              hazmat: '"Verify exposure — ask where they came from and whether they had contact with white powder first."',
              commander: '"All 10 PODs activating simultaneously. Personnel deployment, crowd flow control, media management — all at once."',
              swat_medic: '"Strengthening POD security. If the crowd panics, crowd safety takes priority over on-site medical care."',
              nurse: '"The vaccination lines are too long. We need a fast registration system and an adverse reaction observation zone."'
            }
          },
          briefing: {
            situation: 'Anthrax terror confirmed — national PEP (post-exposure prophylaxis) operation activated',
            hazards: ['Crowd panic', 'Drug shortage', 'Counterfeit drug distribution', 'Risk of secondary attack'],
            resources: ['Antibiotic stockpile (CDC Strategic National Stockpile)', '10 POD centers', '200 medical volunteers'],
            objective: 'Master POD operating principles and apply Post-Exposure Prophylaxis (PEP) protocol'
          },
          challenges: [
            {
              id: 'bio_c5_q1',
              type: 'quiz',
              q: 'What is the advantage of the "Drive-Through" type POD (Point of Dispensing)?',
              o: [
                'Allows detailed individual examination',
                'Recipients stay in their vehicle, minimizing exposure risk',
                'No need for large public spaces',
                'Can only operate at night'
              ],
              a: 1,
              exp: 'Drive-Through POD: recipients receive medications while remaining in their vehicle. Advantages: minimizes infection exposure (stays inside vehicle), faster throughput, accessible for those with physical limitations. POD types: Open (public), Closed (specific group), Drive-Through, Mobile (underserved/remote areas). Each type is selected based on the situation.',
              difficulty: 'medium',
              xp: 160
            },
            {
              id: 'bio_c5_q2',
              type: 'quiz',
              q: 'What is the duration of prophylactic antibiotic (PEP) therapy after inhalational anthrax exposure?',
              o: [
                '7 days',
                '14 days',
                '30 days',
                '60 days'
              ],
              a: 3,
              exp: 'PEP for inhalational anthrax exposure (Bacillus anthracis): Ciprofloxacin 500mg BID or Doxycycline 100mg BID — 60 days in both cases. Reason: anthrax spores can remain dormant in the lungs for up to 60 days. Anthrax vaccine may also be provided simultaneously.',
              difficulty: 'medium',
              xp: 160
            },
            {
              id: 'bio_c5_q3',
              type: 'scenario',
              narrative: 'At the POD center, a man in his 50s complains of "severe cough, chest pain, and fever for the past 3 days."\nFindings are suspicious for inhalational anthrax.',
              q: 'What is the most important immediate treatment for this patient?',
              o: [
                'Prescribe PEP antibiotics only and send home',
                'Immediate isolation and hospitalization — IV antibiotic therapy required',
                'Wait for PCR test results',
                'Prescribe common cold medication and observe'
              ],
              a: 1,
              exp: 'Symptomatic patient with suspected inhalational anthrax: immediate isolation + hospitalization + IV antibiotics (Ciprofloxacin 400mg IV BID or Doxycycline 100mg IV BID). Sending the patient home alone risks delayed treatment and further transmission. Early treatment determines survival in anthrax. Chest X-ray: mediastinal widening is the characteristic finding.',
              difficulty: 'hard',
              xp: 200
            },
            {
              id: 'bio_c5_q4',
              type: 'quiz',
              q: 'Why are "Cipro & Doxy" so widely used as key antibiotics in biological disaster response?',
              o: [
                'They are the cheapest antibiotics',
                'They are broadly effective against most CDC Category A biological agents',
                'They have absolutely no side effects',
                'Only available in injectable form'
              ],
              a: 1,
              exp: 'Ciprofloxacin and Doxycycline are effective against most CDC Category A biological agents (anthrax, plague, tularemia, etc.). They can be taken orally and are relatively easy to obtain. Both are stockpiled in large quantities in the CDC Strategic National Stockpile for biological disaster response.',
              difficulty: 'medium',
              xp: 160
            },
            {
              id: 'bio_c5_q5',
              type: 'procedure',
              q: 'List the 6 steps of FEMA biological disaster response in the correct order.',
              o: [
                'Detect threat → Communicate → Control spread → Augment care → Augment medical → Recovery',
                'Communicate → Detect threat → Control spread → Recovery → Augment care → Augment medical',
                'Control spread → Detect threat → Communicate → Recovery → Augment care → Augment medical',
                'Augment medical → Augment care → Detect threat → Communicate → Control spread → Recovery'
              ],
              a: 0,
              exp: 'FEMA 6-step biological disaster response: 1) Detect & Characterize the Threat 2) Communicate with Partners & Public 3) Control Spread 4) Augment Mass Care 5) Augment Health & Medical Services 6) Augment Essential Services for Recovery. Detection must always come first.',
              difficulty: 'hard',
              xp: 220
            }
          ],
          successNarrative: 'The POD operation was successfully activated.\n30,000 people received prophylactic antibiotics, and further spread has been halted.\nUnder your medical guidance, no secondary infections occurred.',
          failNarrative: 'Confusion during POD operations left hundreds of citizens without prophylaxis. Some symptomatic cases have been found, but it is not too late.',
          rewards: { xp: 1200, items: ['doubleXP', 'medkit'], levelUp: 'Senior Expert Level Enhancement' }
        },
        {
          id: 'bio_ch6',
          title: 'Chapter 6: The Final Threat — Smallpox Containment Operation',
          subtitle: 'Boss Chapter — The Most Feared Biological Agent',
          levelTitle: 'Master',
          cinematic: {
            text: 'The worst-case scenario has become reality.\n\nWhile the anthrax incident was being managed, another terror group has released the smallpox virus as an aerosol into the city center.\n\nThis virus, for which humanity has not been vaccinated in over 40 years, could spread across the globe.\nYou have been summoned as a medical advisor to the National Biological Disaster Response Committee.\n\nThis is the true final battle.',
            roleDialogue: {
              paramedic: '"Smallpox? For real? Our generation has never been vaccinated against smallpox. Nobody has..."',
              emergency_doc: '"Confirming clinical picture: 12–14 day incubation after fever. Characteristic rash — all lesions progress at the same stage. This is different from chickenpox."',
              hazmat: '"If it was aerosolized, the exposure range is enormous. Tracing initial exposures is the top priority."',
              commander: '"Activating ring vaccination strategy. Vaccinate all contacts of confirmed cases within 24 hours. Securing isolation centers."',
              swat_medic: '"We must prevent additional release attempts by the terror cell — simultaneously with the medical response."',
              nurse: '"Confirmed smallpox patients: complete airborne isolation. N95 or higher. Double isolation rooms. If a confirmed case arrives at the ED, full closure may be necessary."'
            }
          },
          briefing: {
            situation: 'Smallpox (Variola major) aerosol terror attack — urban release confirmed',
            hazards: ['Highest-risk agent capable of airborne transmission', 'No herd immunity (unvaccinated for 40+ years)', 'Risk of international spread', 'Ring vaccination is the only containment strategy'],
            resources: ['Smallpox vaccine stockpile', 'TPOXX (Tecovirimat) antiviral', 'Isolation ward', 'Epidemiological investigation team'],
            objective: 'Understand smallpox clinical features, determine containment strategy, apply treatment protocol — comprehensive boss chapter'
          },
          challenges: [
            {
              id: 'bio_c6_q1',
              type: 'quiz',
              q: 'Within what timeframe after smallpox exposure can vaccination prevent infection?',
              o: [
                'Within 24 hours of exposure',
                'Within 1–4 days (96 hours) post-exposure — prevention possible',
                'Within 7–14 days post-exposure',
                'No effect after symptom onset'
              ],
              a: 1,
              exp: 'Smallpox vaccine: vaccination within 1–4 days (96 hours) post-exposure can prevent infection. Within 4–7 days can reduce severity. After 7 days the effect is unclear. Smallpox is currently officially stored only at the CDC (USA) and VECTOR Institute (Russia). Last natural case: 1977. Last death: 1978 Birmingham laboratory accident, UK.',
              difficulty: 'veryhard',
              xp: 280
            },
            {
              id: 'bio_c6_q2',
              type: 'quiz',
              q: 'Which antiviral treatment for smallpox received FDA approval in 2018?',
              o: [
                'Remdesivir',
                'TPOXX (Tecovirimat)',
                'Acyclovir',
                'Oseltamivir (Tamiflu)'
              ],
              a: 1,
              exp: 'TPOXX (Tecovirimat): FDA approved July 2018 (Fast Track, Orphan Drug Program). The first antiviral available for treating smallpox. Variola Immune Globulin (VIG) is also available. Supportive care + quarantine + ring vaccination are the core containment strategies.',
              difficulty: 'veryhard',
              xp: 280
            },
            {
              id: 'bio_c6_q3',
              type: 'scenario',
              narrative: '12 confirmed smallpox cases. Contact tracing identified 240 primary contacts.\nThe epidemiologist asks: "What should be prioritized for a containment strategy?"',
              q: 'What is the "Ring Vaccination" strategy for containing smallpox?',
              o: [
                'Vaccinate the entire population immediately — the fastest method',
                'Vaccinate contacts of confirmed cases and their contacts in expanding concentric circles',
                'Vaccinate healthcare workers first, then observe the rest',
                'Containment through isolation alone without vaccination'
              ],
              a: 1,
              exp: 'Ring Vaccination: a strategy of vaccinating outward from confirmed cases in expanding concentric circles, vaccinating contacts first, then contacts of contacts. The proven method used to eradicate smallpox in 1977. More efficient than mass vaccination and addresses vaccine shortage issues. Since smallpox has a 12–14 day incubation period, rapid contact tracing is essential.',
              difficulty: 'veryhard',
              xp: 300
            },
            {
              id: 'bio_c6_q4',
              type: 'quiz',
              q: 'Which option correctly lists all six CDC Category A biological agents?',
              o: [
                'Anthrax, Botulism, Plague, Smallpox, Tularemia, Viral Hemorrhagic Fevers',
                'Anthrax, Sarin, Plague, Smallpox, Ebola, Ricin',
                'Anthrax, Botulism, Cholera, Smallpox, Tularemia, Ebola',
                'Sarin, VX, Plague, Smallpox, Tularemia, Viral Hemorrhagic Fevers'
              ],
              a: 0,
              exp: 'CDC Category A (highest-risk biological agents, designated 1999): 1) Anthrax (Bacillus anthracis) 2) Botulism (Clostridium botulinum toxin) 3) Plague (Yersinia pestis) 4) Smallpox (Variola major) 5) Tularemia (Francisella tularensis) 6) Viral Hemorrhagic Fevers (Ebola, Marburg, Lassa). Do not confuse with chemical agents (Sarin, VX).',
              difficulty: 'veryhard',
              xp: 300
            },
            {
              id: 'bio_c6_q5',
              type: 'scenario',
              narrative: 'Day 3 of the mass containment operation.\nConfirmed cases have risen to 47, but the containment perimeter is holding.\nThe Prime Minister asks: "When should we notify the World Health Organization (WHO)?"',
              q: 'What are the international reporting obligations and information-sharing principles in a biological disaster?',
              o: [
                'Maintain secrecy until containment fails',
                'Immediately notify WHO under the International Health Regulations (IHR 2005) when a potential Public Health Emergency of International Concern arises',
                'Report when confirmed cases exceed 1,000',
                'Report only after domestic response is fully completed'
              ],
              a: 1,
              exp: 'International Health Regulations (IHR 2005): Smallpox, wild-type polio, and similar diseases must be reported to WHO immediately upon even a single case. Rapid international information sharing is the only means of preventing global spread. In 1979, the Soviet Union concealed the Sverdlovsk anthrax accident → a lesson in information-sharing failure. Transparency and immediate reporting are key to securing international trust and cooperation.',
              difficulty: 'veryhard',
              xp: 320
            }
          ],
          successNarrative: 'Ring vaccination operation successful. Smallpox spread has been contained.\nAll 47 confirmed cases are in isolated treatment with no further transmission.\n\nYou have become the first-ever "Biological Disaster Master" in the history of the Republic of Korea.\nThis experience will be an invaluable asset in preventing the next threat.',
          failNarrative: 'Containment failed. But without your initial response, the damage would have been far greater. Try again.',
          rewards: {
            xp: 2000,
            items: ['doubleXP', 'shield', 'medkit'],
            achievement: '🦠 Biological Disaster Master',
            levelUp: 'Master — Biological Terror Response Expert'
          }
        }
      ]
    },

    // =====================================================
    // CAMPAIGN 4: Radiological Disaster (Radiological Emergency)
    // =====================================================
    {
      id: 'radiological_disaster',
      title: '☢️ Radiological Disaster',
      subtitle: 'Seoul City Center Dirty Bomb (RDD) Explosion — Radiological Contamination Response',
      difficulty: '★★★☆☆',
      estimatedTime: '50 min',
      background: 'linear-gradient(135deg, #7B2FBE, #FF6B35)',
      icon: '☢️',
      unlockLevel: 2,
      story: 'An explosion occurred in the heart of Seoul\'s city center. They thought it was an ordinary bomb — but then radioactive material was detected. A dirty bomb (RDD). You must move before the panic spreads.',
      chapters: [
        {
          id: 'rad_ch1',
          title: 'Chapter 1: Explosion Recognition',
          subtitle: 'What Just Exploded?',
          levelTitle: 'Trainee',
          cinematic: {
            text: '10:23 AM. Gwanghwamun Square, Seoul.\n\nA sudden explosion sends white smoke billowing upward.\n\nAt first, it was assumed to be a conventional bomb.\nBut the radiation measurement officer arriving on scene shouts over the radio.\n\n"Radiation detected! Radiation detected! It\'s a dirty bomb!"',
            roleDialogue: {
              paramedic: '"Radiation? Our PPE can\'t handle this... Right now we need Time-Distance-Shielding. Fall back!"',
              emergency_doc: '"RDD explosion. First priority is treating blast injuries — radiation exposure itself is rarely an immediate life threat. Start evacuating conscious patients."',
              hazmat: '"Measuring radiation levels comes first. Nobody enters before measurement. Geiger counter activated!"',
              commander: '"Set initial evacuation zone at 500m. Police perimeter activated. Direction... which way is the wind blowing?"',
              swat_medic: '"Multiple casualties from the blast. Avoid the Hot Zone and help casualties move to the Cold Zone."',
              nurse: '"Activating hospital radiation contamination patient protocol. Setting up decon zone at ER entrance."'
            }
          },
          briefing: {
            situation: 'Gwanghwamun RDD explosion — dirty bomb containing radioactive cesium (Cs-137)',
            hazards: ['Radiation exposure', 'Blast fragment injuries', 'Radioactive dust inhalation', 'Crowd panic'],
            resources: ['Radiation detection equipment', '20 paramedics', 'PPE Level C', 'Decontamination equipment'],
            objective: 'Recognize scene conditions, establish initial safety zones, apply the 3 principles of radiation response'
          },
          challenges: [
            {
              id: 'rad_c1_q1',
              type: 'quiz',
              q: 'What is an RDD (Radiological Dispersal Device, or Dirty Bomb)?',
              o: [
                'A nuclear bomb using nuclear fission',
                'A conventional explosive mixed with radioactive powder/pellets',
                'A chemical weapon that releases radioactive gas',
                'A device that generates an electromagnetic pulse (EMP)'
              ],
              a: 1,
              exp: 'RDD (Dirty Bomb): a device combining conventional explosives (e.g., dynamite) with radioactive powder or pellets to scatter radioactive material upon detonation. Unlike a nuclear bomb, no nuclear fission occurs → primary goal is to cause radiation exposure and panic. CDC definition. Key risk: psychological fear can cause more damage than actual radiation.',
              difficulty: 'easy',
              xp: 80,
              roleBonus: { hazmat: 'HAZMAT expertise activated! Bonus XP +40.' }
            },
            {
              id: 'rad_c1_q2',
              type: 'quiz',
              q: 'In the 3 core principles of radiation disaster response (Time-Distance-Shielding), what does the "Distance" principle mean?',
              o: [
                'Move as fast as possible',
                'The farther from the radiation source, the less exposure (double the distance → 1/4 the dose, inverse square law)',
                'Maintain a fixed measurement distance',
                'Shelter inside a building'
              ],
              a: 1,
              exp: '3 principles of radiation response — Time: minimize time at the scene. Distance: inverse square law — doubling the distance reduces radiation dose to 1/4. Shielding: use dense materials such as concrete walls or vehicles for shielding. Applying all three simultaneously greatly reduces the risk of radiation exposure.',
              difficulty: 'easy',
              xp: 80
            },
            {
              id: 'rad_c1_q3',
              type: 'quiz',
              q: 'What is the initial evacuation (Shelter-in-Place) zone radius immediately after an RDD explosion?',
              o: [
                '100 meters',
                '250 meters',
                '500 meters',
                '1,000 meters'
              ],
              a: 2,
              exp: 'Initial Shelter-in-Place zone: 500m radius from the explosion point in all directions. Once contamination direction is confirmed, extend 2km in that direction. The initial 500m zone covers all directions to account for uncertainty. Source: FEMA RDD Response Guidelines.',
              difficulty: 'easy',
              xp: 80
            },
            {
              id: 'rad_c1_q4',
              type: 'quiz',
              q: 'What is the top priority in treating a patient with suspected radiation exposure?',
              o: [
                'Approach only after completing radiation measurements',
                'Provide medical care only after decontamination is complete',
                'Life-threatening trauma (bleeding, airway) is the top priority — radiation contamination itself rarely causes an immediate life threat',
                'Do not touch the patient at all — risk of responder exposure'
              ],
              a: 2,
              exp: 'RDD scene treatment principle: radioactive contamination itself rarely constitutes an immediate life threat. Treat life threats using ABCDE first. Radiation-contaminated patients can receive the same emergency treatment as conventional trauma patients — but with PPE. The radiation dose transmitted from contamination to healthcare workers is minimal.',
              difficulty: 'easy',
              xp: 80
            },
            {
              id: 'rad_c1_q5',
              type: 'scenario',
              narrative: '15 casualties have been transported to the Cold Zone. Some are injured from blast fragments; others are suspected to be contaminated with radioactive dust.',
              q: 'Removing clothing (undressing) from a radiation-contaminated patient eliminates approximately what percentage of external contamination?',
              o: [
                'About 50%',
                'About 70%',
                'About 80–90%',
                'Almost no effect'
              ],
              a: 2,
              exp: 'Effect of clothing removal in external radiation contamination: approximately 80–90% reduction. The same applies in chemical disasters (80–90%). Removed clothing must be sealed in plastic bags. After undressing, washing skin with soap and water can remove additional contamination. The simplest and most effective Step 1 of decontamination.',
              difficulty: 'easy',
              xp: 80
            }
          ],
          successNarrative: 'A 500m evacuation zone has been established and casualty transport has begun.\nThe radiation measurement team is assessing the scene.\nGolden hour — it starts now.',
          failNarrative: 'Delayed initial response caused unnecessary radiation exposure to on-scene personnel. Let\'s review from the beginning.',
          rewards: { xp: 400, items: ['hint'], levelUp: 'Trainee → Junior Responder' }
        },
        {
          id: 'rad_ch2',
          title: 'Chapter 2: Radiation Measurement',
          subtitle: 'Rad vs Rem vs Gray vs Sievert',
          levelTitle: 'Junior Responder',
          cinematic: {
            text: 'The radiation measurement team has arrived.\n\nThe Geiger-Muller counter is buzzing. The readings are climbing.\n\n"What are the units? Rem? Gray? Sievert? How much is dangerous?"\n\nYou must understand radiation units to assess the situation.',
            roleDialogue: {
              paramedic: '"I can read the numbers, but the units are all different. I can\'t tell if rem is high or low."',
              emergency_doc: '"Radiation dose assessment: initial CBC is key. Track lymphocyte counts every 2–3 hours."',
              hazmat: '"Reading 200 rem — this is ARS (Acute Radiation Syndrome) range. Bone marrow damage may be starting."',
              commander: '"If these numbers get to the press, there will be panic. We need an official briefing with expert explanation."',
              swat_medic: '"Bulletproof vests don\'t block radiation. Move behind dense shielding!"',
              nurse: '"Checking for tympanic membrane perforation among trauma patients — a sign of primary blast injury. Trauma treatment before radiation measurement."'
            }
          },
          briefing: {
            situation: 'Radiation measurement begun — interpreting units and assessing exposure levels',
            hazards: ['Confusion over radiation units', 'Incorrect response due to under/overestimation', 'Psychological panic'],
            resources: ['Radiation measurement equipment', 'Radiation medicine specialist', 'Nuclear Safety and Security Commission'],
            objective: 'Understand radiation units, identify ARS threshold doses, begin initial medical assessment'
          },
          challenges: [
            {
              id: 'rad_c2_q1',
              type: 'quiz',
              q: 'Radiation unit conversion: how many rad is 1 Gray (Gy)?',
              o: [
                '1 rad',
                '10 rad',
                '100 rad',
                '1,000 rad'
              ],
              a: 2,
              exp: 'Radiation unit conversion: 1 Gy = 100 rad / 1 rad = 0.01 Gy. Dose equivalent: 1 Sv (Sievert) = 100 rem / 1 rem = 0.01 Sv. Simplified: 1 R (Roentgen) ≈ 1 rad ≈ 1 rem (gamma rays in air). SI units: Gy (absorbed dose), Sv (dose equivalent). Older units: rad, rem.',
              difficulty: 'medium',
              xp: 120
            },
            {
              id: 'rad_c2_q2',
              type: 'quiz',
              q: 'What clinical findings appear with 100–200 rem radiation exposure?',
              o: [
                'No symptoms (same as <25 rem)',
                'Nausea/vomiting in 5–50%, occurring 3–6 hours later, white blood cell decrease',
                'Immediate loss of consciousness and seizures',
                '100% mortality'
              ],
              a: 1,
              exp: 'Radiation 100–200 rem: nausea/vomiting in 5–50% (3–6 hours later), WBC decrease. Prognosis: Excellent, mortality 0–15%. 200–600 rem: vomiting in 50–100% (2–3 hours later), bone marrow/hematologic/GI damage, mortality 15–80%. 600–1,000 rem: 100% vomiting (15–30 min), mortality 80–90%. >3,500 rem: CNS symptoms, mortality 100%.',
              difficulty: 'medium',
              xp: 140
            },
            {
              id: 'rad_c2_q3',
              type: 'quiz',
              q: 'What is the specific treatment used after radioactive cesium (Cesium) exposure?',
              o: [
                'Atropine',
                'Potassium Iodide (KI)',
                'Prussian Blue',
                'Hydroxocobalamin'
              ],
              a: 2,
              exp: 'Radiation-specific treatments: Prussian Blue — used for internal cesium (Cs) or thallium (Tl) contamination. Potassium Iodide (KI) — used for radioactive iodine (I-131) exposure, most effective within 1 day of exposure. DTPA — for internal radioactive contamination. Bone marrow transplant/stem cell transfusion — for severe bone marrow damage. This incident involves cesium, so Prussian Blue is applied.',
              difficulty: 'medium',
              xp: 140,
              roleBonus: { hazmat: 'HAZMAT Expert: Immediately identifies cesium antidote! Bonus XP +70.' }
            },
            {
              id: 'rad_c2_q4',
              type: 'quiz',
              q: 'How frequently should CBC (complete blood count) be checked during the initial 12 hours in Acute Radiation Syndrome (ARS)?',
              o: [
                'Every 12 hours',
                'Every 6 hours',
                'Every 4 hours',
                'Every 2–3 hours'
              ],
              a: 3,
              exp: 'ARS CBC monitoring: initial 12 hours — every 2–3 hours. Following 3 days — every 4–6 hours. Tracking lymphocyte counts is key — the rate of early lymphocyte decline reflects the radiation dose. Rapidly falling lymphocytes approaching zero suggests severe bone marrow damage. Immediate consultation with a hematologist and radiation accident specialist is needed.',
              difficulty: 'hard',
              xp: 180
            },
            {
              id: 'rad_c2_q5',
              type: 'quiz',
              q: 'In the radiation response 100-minute framework, what is the timeframe for the "RECOGNIZE" phase?',
              o: [
                '0–1 min',
                '0–5 min',
                '5–15 min',
                '15–40 min'
              ],
              a: 1,
              exp: 'Radiation 100-minute response framework: RECOGNIZE — 0–5 min / INFORM — 5–10 min / INITIATE (multi-agency response) — 5–40 min / MEASURE & MAP — 15–90 min / EVACUATE & MONITOR — 70+ min. Recognition in the first 5 minutes determines the direction of the entire response.',
              difficulty: 'hard',
              xp: 180
            }
          ],
          successNarrative: 'Radiation dose assessment complete.\nScene contamination levels and ARS-risk patients have been identified.\nPrussian Blue administration has begun for cesium-contaminated patients.',
          failNarrative: 'Unit confusion led to triage errors. Some high-risk patients were categorized as low priority. Reassess.',
          rewards: { xp: 600, items: ['hint', 'medkit'], levelUp: 'Junior Responder → Intermediate Specialist' }
        },
        {
          id: 'rad_ch3',
          title: 'Chapter 3: ARS Classification and Decontamination',
          subtitle: 'Staged Management of Acute Radiation Syndrome',
          levelTitle: 'Intermediate Specialist',
          cinematic: {
            text: 'Radiation exposure patients are flooding the hospital emergency room.\nSome patients are vomiting immediately, while others appear completely fine.\nLooking fine can actually be more dangerous.\n\nOnly those who understand the 4 phases of ARS can classify correctly.',
            roleDialogue: {
              paramedic: '"I can\'t tell if the one with severe nausea is more dangerous, or the one with no symptoms."',
              emergency_doc: '"Watch for ARS latent phase — don\'t be misled just because early symptoms improved. That\'s the Latent Stage."',
              hazmat: '"Decon sequence: undress first → Ladder Pipe 15 seconds → Secondary decon 90 seconds. PRISM Triple Protocol."',
              commander: '"The decon zone and treatment zone must be completely separated. No contaminated patients can enter the clean zone."',
              swat_medic: '"If a radiation patient also has trauma, MARCH comes first. Hemorrhage kills faster than radiation exposure."',
              nurse: '"Blue wristband for decontaminated patients. Red for undecontaminated. Don\'t mix them up."'
            }
          },
          briefing: {
            situation: '30 suspected ARS patients presenting to hospital — decontamination and triage needed',
            hazards: ['Underestimation due to ARS latent phase', 'Hospital contamination from undecontaminated patients', 'Healthcare worker radiation exposure'],
            resources: ['PRISM decontamination equipment', 'CBC testing equipment', 'Radiation specialist team', 'Isolation rooms'],
            objective: 'Understand the 4 stages of ARS, apply PRISM Triple Protocol, classify patient risk levels'
          },
          challenges: [
            {
              id: 'rad_c3_q1',
              type: 'quiz',
              q: 'Which lists the 4 stages of ARS (Acute Radiation Syndrome) in the correct order?',
              o: [
                'Latent → Prodromal → Manifest Illness → Recovery/Death',
                'Prodromal → Latent → Manifest Illness → Recovery/Death',
                'Manifest Illness → Prodromal → Latent → Recovery/Death',
                'Prodromal → Manifest Illness → Latent → Recovery/Death'
              ],
              a: 1,
              exp: 'ARS 4 stages: 1) Prodromal — nausea, vomiting, diarrhea (minutes to days later, dose-dependent) 2) Latent — patient appears healthy (asymptomatic) — DANGER! 3) Manifest Illness — syndrome-specific symptoms (hematopoietic, GI, CNS/cardiovascular) 4) Recovery or Death. Never let your guard down just because the patient looks fine during the latent phase.',
              difficulty: 'medium',
              xp: 140
            },
            {
              id: 'rad_c3_q2',
              type: 'quiz',
              q: 'What is the correct duration for Step 2 (Ladder Pipe System Irrigation) of the PRISM Triple Protocol?',
              o: [
                '5 seconds',
                '15 seconds',
                '60 seconds',
                '5 minutes'
              ],
              a: 1,
              exp: 'PRISM Triple Protocol: Step 1) Disrobing + Dry Decon — remove clothing, remove visible powder/dust Step 2) Ladder Pipe System Irrigation — 15-second irrigation with lukewarm water Step 3) Secondary/Technical Decon — scrub for 15–90 seconds with baby shampoo and cotton cloth. When all 3 steps are completed, 100% (SD ±1%) of chemical/radiation contamination is removed. Source: ORCHIDS protocol.',
              difficulty: 'medium',
              xp: 140
            },
            {
              id: 'rad_c3_q3',
              type: 'scenario',
              narrative: 'Patient A: was at the explosion scene at 10:30 AM. Currently complaining of nausea and vomiting. Vital signs normal.\nPatient B: was at the same scene at the same time. Currently has no symptoms whatsoever.',
              q: 'How do you assess the ARS risk for these two patients?',
              o: [
                'Patient A is more dangerous — has immediate symptoms',
                'Patient B is more dangerous — lack of symptoms may indicate the ARS latent phase',
                'Same risk because they received the same exposure',
                'Patient B with no symptoms can be discharged'
              ],
              a: 2,
              exp: 'In reality, since the exact dose for both patients is unknown, they must be assessed as equal risk and CBC must be tracked. However, due to the nature of the ARS latent phase, "no symptoms ≠ safe." In particular, patients exposed to 600–1000 rem may briefly appear asymptomatic after initial vomiting, then deteriorate rapidly. CBC monitoring is mandatory for all exposed patients.',
              difficulty: 'hard',
              xp: 200
            },
            {
              id: 'rad_c3_q4',
              type: 'quiz',
              q: 'What treatment is used for radioactive iodine (I-131) exposure, and when is it most effective?',
              o: [
                'Prussian Blue — immediately after exposure',
                'Potassium Iodide (KI) — most effective within 1 day of exposure',
                'Atropine — within 72 hours of exposure',
                'DTPA — within 1 week'
              ],
              a: 1,
              exp: 'Potassium Iodide (KI): protects the thyroid from radioactive iodine (I-131) inhalation/ingestion. Mechanism: pre-loading the thyroid with stable iodine prevents absorption of radioactive iodine. Most effective: within 1 day (24 hours) post-exposure. Most effective when given before exposure. Purpose: prevent thyroid cancer. Used during Chernobyl and Fukushima accidents.',
              difficulty: 'hard',
              xp: 180
            },
            {
              id: 'rad_c3_q5',
              type: 'quiz',
              q: 'What are the characteristic ARS symptoms at radiation doses >3,500 rem?',
              o: [
                'Nausea occurring 3–6 hours later',
                'WBC decrease from bone marrow damage',
                'CNS symptoms — seizures, tremors, vomiting within 3 minutes, 100% mortality',
                'GI symptoms — diarrhea, fever'
              ],
              a: 2,
              exp: 'ARS by radiation dose: >3,500 rem — CNS/Cardiovascular Syndrome: 100% vomiting within 3 min, seizures, tremors, stupor → 100% mortality. 1,000–3,500 rem — GI Syndrome: vomiting within 5–20 min, diarrhea, fever → nearly 100% mortality. 200–1,000 rem — Hematopoietic Syndrome: bone marrow damage, vomiting within 15 min–3 hours → 15–90% mortality. 100–200 rem — Mild: vomiting within 3–6 hours → 0–15% mortality.',
              difficulty: 'hard',
              xp: 200
            }
          ],
          successNarrative: 'Decontamination operation successfully completed.\n8 high-risk ARS patients have been transferred to isolation rooms.\nCBC monitoring system is now active.',
          failNarrative: 'Decon protocol confusion allowed some contaminated patients into the hospital clean zone. Emergency decontamination is required.',
          rewards: { xp: 800, items: ['timefreeze', 'shield'], levelUp: 'Intermediate Specialist → Advanced Specialist' }
        },
        {
          id: 'rad_ch4',
          title: 'Chapter 4: Long-Term Follow-Up Management',
          subtitle: 'Survivor Monitoring and Community Recovery',
          levelTitle: 'Advanced Specialist',
          cinematic: {
            text: '72 hours after the explosion.\n\nThe acute threat has been contained. But the real war has just begun.\n\nThousands of "possible exposed individuals" fear they will develop cancer.\nLong-term effects of radiation — cancer, fetal malformations, genetic disorders.\n\nIt is time for the public health system to build a long-term monitoring framework.',
            roleDialogue: {
              paramedic: '"No fatalities. But what happens long-term? Do they get cancer?"',
              emergency_doc: '"Delayed radiation effects: cancer, fetal malformation, blood disorders. Some may not appear for 5–20 years."',
              hazmat: '"Individual dose records for long-term tracking are critical from now on. Exposure amounts must be documented."',
              commander: '"We need a long-term tracking system linked to resident registration data. This is a decades-long project."',
              swat_medic: '"First responders on our team also need exposure records. Essential later for compensation claims and health monitoring."',
              nurse: '"Building cancer screening programs, psychological support programs — radiophobia is also a condition that needs treatment."'
            }
          },
          briefing: {
            situation: 'Radiological disaster response at 72 hours — building long-term monitoring system',
            hazards: ['Cancer risk from radiation', 'Psychological radiophobia', 'Long-term health tracking failure', 'Social stigma'],
            resources: ['Nuclear Safety and Security Commission', 'National Cancer Center', 'Mental health support team', 'Radiation epidemiology experts'],
            objective: 'Understand delayed radiation effects, apply the 6 objectives of long-term monitoring'
          },
          challenges: [
            {
              id: 'rad_c4_q1',
              type: 'quiz',
              q: 'Which of the following is a "delayed effect" of radiation?',
              o: [
                'Skin redness, acute radiation burns',
                'Nausea, vomiting',
                'Cancer, fetal malformation, genetic disease, blood disorders',
                'Seizures, loss of consciousness'
              ],
              a: 2,
              exp: 'Immediate radiation effects: skin irritation/burns, Acute Radiation Syndrome. Delayed effects: cancer (most significant), fetal malformation, genetic disease, blood disorders. Confirmed through epidemiological studies on Hiroshima/Nagasaki survivors. The surge in thyroid cancer after the Chernobyl accident is a representative example of delayed effects.',
              difficulty: 'medium',
              xp: 140
            },
            {
              id: 'rad_c4_q2',
              type: 'quiz',
              q: 'Of the six objectives of population monitoring in a radioactively contaminated area, which is related to "internal contamination"?',
              o: [
                'Tracking external radiation dose',
                'Evaluating radioactive material intake/ingestion (internal contamination)',
                'Recording evacuation routes',
                'Assessing mental health status'
              ],
              a: 1,
              exp: '6 objectives of population radiation monitoring: 1) Refer those in need of medical treatment 2) Confirm radioactive contamination of body/clothing (external contamination) 3) Confirm ingestion of radioactive material (internal contamination) 4) Decontamination 5) Assess radiation dose and health risk 6) Evaluate long-term health effects. Internal contamination: radioactive material entering the body via inhalation, ingestion, or wounds — consider DTPA treatment.',
              difficulty: 'medium',
              xp: 140
            },
            {
              id: 'rad_c4_q3',
              type: 'scenario',
              narrative: '2 weeks after the incident. 5,000 citizens visit the hospital worried about thyroid cancer and leukemia.\nMost of the actual radiation doses received were in the 25–100 rem range.',
              q: 'What is the clinical prognosis for 25–100 rem radiation exposure?',
              o: [
                'High risk of immediate death',
                'Serious bone marrow damage — intensive care needed',
                'Excellent prognosis — mild weakness, no mortality',
                'Certain cancer development — 100% within 5 years'
              ],
              a: 2,
              exp: 'Radiation dose 25–100 rem: No vomiting, mild weakness, Excellent prognosis, No mortality. 100–200 rem: 5–50% vomiting, Excellent prognosis, 0–15% mortality. Low doses carry low acute risk, but long-term cancer risk does exist (though it is important not to exaggerate). Accurate information is essential to prevent panic.',
              difficulty: 'hard',
              xp: 180
            },
            {
              id: 'rad_c4_q4',
              type: 'quiz',
              q: 'What are the 3 key roles of the Emergency Operations Center (EOC) in a radiological disaster?',
              o: [
                'On-site medical treatment, antibiotic administration, hospital transport',
                'Issue protective actions, notify partners and request support, consolidate and map radiation data',
                'Apprehend perpetrators, disarm explosives, control media',
                'Blood tests, ARS treatment, long-term tracking'
              ],
              a: 1,
              exp: 'EOC 3 key roles in radiological disaster: 1) Issue Protective Actions for the public 2) Notify Partners and Request Assistance 3) Consolidate and Map Radiation Data. The EOC handles command/coordination/information roles rather than direct on-scene response.',
              difficulty: 'hard',
              xp: 180
            },
            {
              id: 'rad_c4_q5',
              type: 'scenario',
              narrative: '"Radiation readings have returned to normal. When can the contaminated zone be reopened?" asks the government.',
              q: 'What does the "7-10 Rule" for radioactive fallout decay mean?',
              o: [
                'Radiation decreases by 70% after 10 days',
                'Radiation decreases 10-fold every 7 times the elapsed time (e.g., if baseline is set at 1 hour, value is 1/10 at 7 hours)',
                'Radiation decreases to 1/10 every 7 hours',
                'Radiation drops to 7% after 10 hours'
              ],
              a: 2,
              exp: 'Radioactive fallout 7-10 Rule: for every 7-fold increase in time, radiation dose decreases by 1/10. Example: baseline 100 at 1 hour → 10 at 7 hours → 1 at 49 hours. This allows estimation of safe re-entry timing. Source: FEMA 2023 Nuclear Detonation Response Planning Guidance. Re-entry decisions must be confirmed with actual measurements plus expert judgment.',
              difficulty: 'hard',
              xp: 220
            }
          ],
          successNarrative: 'The long-term monitoring system has been established.\nA database of 5,000 exposed residents is complete.\nThis system will protect their health for the next 20 years.',
          failNarrative: 'Failed to build the tracking system. Five years from now, cancer patients will have no record of their exposure.',
          rewards: { xp: 1000, items: ['doubleXP', 'shield'], levelUp: 'Advanced Specialist → Senior Expert' }
        },
        {
          id: 'rad_ch5',
          title: 'Chapter 5: Community Recovery',
          subtitle: 'Environmental Decontamination and Return Decision',
          levelTitle: 'Senior Expert',
          cinematic: {
            text: '3 weeks after the explosion.\n\nResidents of the contaminated zone near Gwanghwamun are demanding to return.\nRadiation readings have dropped, but no one can guarantee complete safety.\n\nBetween scientific judgment and societal demands, you must provide medical counsel.',
            roleDialogue: {
              paramedic: '"We worked on-scene every day — do we also need long-term health monitoring?"',
              emergency_doc: '"Return criteria: annual radiation exposure must be below 1 mSv to meet public safety standards."',
              hazmat: '"Confirming decontamination complete — soil, building surfaces, and drainage systems all need to be re-measured."',
              commander: '"The return decision must be scientific, not political. A clear position from the medical advisory committee is needed."',
              swat_medic: '"Some areas still have residual contamination. In some cases, complete removal is technically impossible."',
              nurse: '"Residents need sufficient information before return is decided. We must prevent panic and build trust."'
            }
          },
          briefing: {
            situation: 'RDD contaminated zone return decision — medical and scientific judgment required',
            hazards: ['Residual radioactivity', 'Social conflict', 'Politicization of public health decisions'],
            resources: ['Radiation measurement data', 'IAEA advisory consultation', 'Public health experts'],
            objective: 'Establish return criteria, additional decontamination methods, and public health communication strategy'
          },
          challenges: [
            {
              id: 'rad_c5_q1',
              type: 'quiz',
              q: 'What is the correct principle for in-hospital decontamination of a patient with external radiation contamination?',
              o: [
                'Decontaminate after the patient enters the ER',
                'Undress + wash in an external decon zone before ER entry',
                'No decon needed if the patient is wearing protective clothing',
                'CT scan before decontamination'
              ],
              a: 1,
              exp: 'In-hospital treatment of radiation-contaminated patients: establish a Decon Zone outside the hospital ER. Patient must undress + receive initial washing (PRISM Steps 1–2) before entering the ER. Enter ER only after decontamination is complete. Exception: immediately life-threatening emergencies (airway, bleeding) → treat immediately, then decontaminate. The goal is to prevent internal hospital contamination.',
              difficulty: 'medium',
              xp: 160
            },
            {
              id: 'rad_c5_q2',
              type: 'quiz',
              q: 'When SCBA (self-contained breathing apparatus) is unavailable during the initial 15 minutes, what respiratory protection can be used instead for radiation?',
              o: [
                'Standard surgical mask',
                'APR (Air-Purifying Respirator) with P100 or HEPA filter attached',
                'Gas mask only',
                'Can enter without protective equipment'
              ],
              a: 1,
              exp: 'Radiation response PPE (initial 15 min): When SCBA available → Positive Pressure SCBA preferred. Without SCBA → APR (Air-Purifying Respirator) with P100 or HEPA filter. When SCBA interferes with operations (e.g., driving) → Full-face APR. After 15 min: Half-face APR + P100 or N95 Respirator. Throughout entire response: protective eyewear + gloves + standard uniform.',
              difficulty: 'medium',
              xp: 160
            },
            {
              id: 'rad_c5_q3',
              type: 'scenario',
              narrative: '"Radiation readings vary by zone. Within 500m of the blast center: still elevated. 500m-2km: approaching baseline. Beyond 2km: normal." Citizens want to return.',
              q: 'Which correctly prioritizes the return of residents?',
              o: [
                'Closest zone first — they have been displaced the longest',
                'Allow return to zones beyond 2km first — where radiation is below safe limits',
                'Allow everyone to return simultaneously — no discrimination',
                'Leave the return decision to individual citizens'
              ],
              a: 1,
              exp: 'Return decision principle: phased return starting with the safest zones. Zone 500m-2km is approaching baseline → return possible after expert review. Within 500m of blast center: decision pending further decon and measurement. Return criteria: general public annual exposure ≤1 mSv. Official radiation safety inspection required before permitting return.',
              difficulty: 'hard',
              xp: 200
            },
            {
              id: 'rad_c5_q4',
              type: 'quiz',
              q: 'Why is concealing radiation exposure facts (e.g., the 1979 Soviet Sverdlovsk anthrax incident) problematic?',
              o: [
                'Damages international trust but no medical problem',
                'Delays initial response, causes diagnostic errors, amplifies harm + destroys international trust',
                'Only a media problem with no impact on medical outcomes',
                'Concealment is necessary to prevent panic'
              ],
              a: 1,
              exp: '1979 Sverdlovsk event: unintentional release of anthrax from a Soviet military facility → 96 infected, 64 died. The Soviet Union blamed contaminated meat (cover-up). Result: failed initial medical response, diagnostic errors, additional deaths. Lesson: concealment delays initial response → amplifies harm → destroys international trust. Transparency and immediate notification (IHR 2005) are the foundation of international public health.',
              difficulty: 'hard',
              xp: 200
            },
            {
              id: 'rad_c5_q5',
              type: 'quiz',
              q: 'What is the optimal shower water temperature for wet decontamination in the ORCHIDS protocol?',
              o: [
                '10°C (cold water)',
                '20°C (lukewarm water)',
                '35°C (maintaining body temperature)',
                '45°C (hot water)'
              ],
              a: 2,
              exp: 'ORCHIDS Protocol optimal conditions: shower temperature 35°C / shower duration 60–90 seconds / detergent 0.5% Argos™ or FloraFree™ / cleaning tool cotton flannel facecloth. 35°C effectively removes contaminants without causing hypothermia. Cold water risks hypothermia; hot water risks skin damage and contaminant spread.',
              difficulty: 'hard',
              xp: 200
            }
          ],
          successNarrative: 'The return plan has been established.\n80,000 residents from zones beyond 2km have begun returning.\nThe long-term tracking program is also now active.',
          failNarrative: 'A hasty return decision sent some residents back to still-contaminated areas. Additional monitoring is required.',
          rewards: { xp: 1200, items: ['doubleXP', 'medkit'], levelUp: 'Senior Expert Deepening' }
        },
        {
          id: 'rad_ch6',
          title: 'Chapter 6: The Final Challenge — Nuclear Facility Accident',
          subtitle: 'Boss Chapter — Beyond Chernobyl',
          levelTitle: 'Master',
          cinematic: {
            text: 'The worst-case scenario.\n\n While the RDD incident was being managed,, a new report comes from the north.\n\n"Anomaly detected at a nearby nuclear power plant. Cooling system malfunction."\n\nChernobyl. Fukushima. Those words flash through your mind.\nYou are immediately summoned to the National Nuclear Disaster Response Team.\n\nThis is the final boss.',
            roleDialogue: {
              paramedic: '"A nuclear power plant accident? This is on a completely different level from the RDD. The radiation levels could be..."',
              emergency_doc: '"Reviewing Chernobyl survivor medical records. 28 ARS deaths. Most from Hematopoietic Syndrome."',
              hazmat: '"Level A full suit required — no approach without it. Zone radius is dozens of times larger than for RDD."',
              commander: '"Lesson from Japan at Fukushima: initial 20km evacuation + media response simultaneously. We must do the same."',
              swat_medic: '"Even special forces must know when to retreat in the face of radiation. Reckless entry means deaths in the line of duty."',
              nurse: '"Securing ARS treatment beds. Hematopoietic stem cell transplant team on standby. A regular ER can\'t handle this."'
            }
          },
          briefing: {
            situation: 'Nuclear plant cooling system failure → possible large-scale radiation release',
            hazards: ['Extremely high radiation levels', 'Risk of nuclear fuel meltdown', 'Large-scale evacuation needed', 'Long-term environmental contamination'],
            resources: ['IAEA Emergency Response Team', 'Military CBRN Response Unit', 'Korea Institute of Radiological and Medical Sciences', 'International cooperation'],
            objective: 'Comprehensive radiation knowledge test — the highest-difficulty nuclear disaster response scenario'
          },
          challenges: [
            {
              id: 'rad_c6_q1',
              type: 'quiz',
              q: 'In FEMA\'s planning baseline 10 kT nuclear surface detonation, which correctly matches damage zone color codes with radiation doses?',
              o: [
                'Red: <1 Gy (lethal), Yellow: 1-8 Gy, Green: >8 Gy',
                'Red: >8 Gy (lethal), Yellow: 1-8 Gy (injurious to lethal), Green: <1 Gy (below acute injury threshold)',
                'Red: 0.01-1 Gy, Yellow: >100 Gy, Green: 1-8 Gy',
                'All zones have the same radiation dose'
              ],
              a: 1,
              exp: '10 kT nuclear surface detonation damage zones: Red >8 Gy (>800 rad) — Lethal. Yellow 1-8 Gy (100-800 rad) — Injurious to Lethal. Green <1 Gy (<100 rad) — Below acute injury threshold. Reference: Hiroshima (~15 kT), Nagasaki (~21 kT). Just 20 oz (0.6L) of uranium nuclear fission can produce a 10 kT detonation.',
              difficulty: 'veryhard',
              xp: 280
            },
            {
              id: 'rad_c6_q2',
              type: 'quiz',
              q: 'What is the radiation dose range for ARS Hematopoietic Syndrome?',
              o: [
                '25-100 rem',
                '200-1,000 rem',
                '1,000-3,500 rem',
                '>3,500 rem'
              ],
              a: 1,
              exp: 'ARS syndrome classification: Hematopoietic Syndrome — 200-1,000 rem: bone marrow damage, WBC/platelet decrease, bleeding/infection risk. Gastrointestinal Syndrome — 1,000-3,500 rem: GI mucosa destruction, diarrhea, fever. Cardiovascular/CNS Syndrome — >3,500 rem: brain/vascular damage, seizures, 100% mortality. Cutaneous Radiation Syndrome: acute skin radiation exposure — can occur without ARS.',
              difficulty: 'veryhard',
              xp: 280
            },
            {
              id: 'rad_c6_q3',
              type: 'scenario',
              narrative: 'An evacuation order has been issued for 1 million residents within 20km of the nuclear plant.\nRadiation readings are surging.\nA report has come in that radioactive iodine has been released.',
              q: 'What measure protects the thyroid in the event of radioactive iodine release?',
              o: [
                'Potassium Iodide (KI) — administer before exposure or immediately',
                'Prussian Blue — immediately after iodine exposure',
                'Atropine — thyroid function protection',
                'Avoiding iodine-containing foods (seaweed) alone is sufficient'
              ],
              a: 0,
              exp: 'Thyroid protection from radioactive iodine (I-131): administer Potassium Iodide (KI). Mechanism: "loading" the thyroid with stable iodine blocks absorption of radioactive iodine. Most effective: before exposure. Effective up to 24 hours post-exposure. Used during Chernobyl and Fukushima accidents. Thyroid cancer prevention has been validated. Once the thyroid is saturated with iodine, it cannot absorb radioactive iodine.',
              difficulty: 'veryhard',
              xp: 300
            },
            {
              id: 'rad_c6_q4',
              type: 'quiz',
              q: 'Under what condition does the approximation "1 R ≈ 1 rad ≈ 1 rem" apply in nuclear disasters?',
              o: [
                'Applicable to all types of radiation',
                'Limited to gamma rays in air — used for practical nuclear disaster field calculations',
                'Applicable only to alpha radiation',
                'Applicable only to neutron radiation'
              ],
              a: 1,
              exp: '1 R ≈ 1 rad ≈ 1 rem: an approximation limited to gamma rays (or X-rays) in air. Used for quick calculations at nuclear disaster scenes. Roentgen (R): ionization capacity / rad/Gray: absorbed dose / rem/Sievert: biological effect dose equivalent. Alpha radiation has 20× greater biological effect at the same absorbed dose, requiring separate weighting. Source: FEMA 2023 Nuclear Detonation Response Planning Guidance.',
              difficulty: 'veryhard',
              xp: 300
            },
            {
              id: 'rad_c6_q5',
              type: 'scenario',
              narrative: '72 hours after the nuclear accident. Among 20 ARS patients in the ER, 3 have lymphocyte counts dropping rapidly toward zero.\nEstimated exposure: 600-1,000 rem (severe Hematopoietic Syndrome).',
              q: 'What is the treatment protocol for 600-1,000 rem ARS bone marrow damage?',
              o: [
                'Administer antibiotics only and observe',
                'Immediate discharge — expect natural recovery',
                'Blood transfusion + myeloid cytokines (growth factors) + bone marrow transplant if needed',
                'Administer chemotherapy to eliminate damaged cells'
              ],
              a: 2,
              exp: '600-1,000 rem ARS treatment: Blood Transfusion + Myeloid Cytokines (e.g., G-CSF) + Bone Marrow Transplant in severe cases. Prognosis: Poor, mortality 80-90%. 200-600 rem: blood transfusion + growth factors (mortality 15-80%). >1,000 rem: bone marrow transplant + intensive care (death nearly certain). At Chernobyl, 13 patients received bone marrow transplants → 11 died (rejection).',
              difficulty: 'veryhard',
              xp: 320
            }
          ],
          successNarrative: 'The nuclear plant cooling system has been emergency-restored.\nA major meltdown has been prevented.\nYour medical judgment saved hundreds of thousands of lives.\n\nCongratulations — Radiological Disaster Master.',
          failNarrative: 'Cooling system restoration was delayed. But without your initial medical response, the damage would have been far greater.',
          rewards: {
            xp: 2000,
            items: ['doubleXP', 'shield', 'medkit'],
            achievement: '☢️ Radiological Disaster Master',
            levelUp: 'Master — Radiological Emergency Medicine Expert'
          }
        }
      ]
    },

    // =====================================================
    // CAMPAIGN 5: Active Shooter Response
    // =====================================================
    {
      id: 'active_shooter',
      title: '🎯 Active Shooter',
      subtitle: 'Mass Shooting at a Major Shopping Mall — TCCC/TECC Response',
      difficulty: '★★★★☆',
      estimatedTime: '55 min',
      background: 'linear-gradient(135deg, #1a1a2e, #e94560)',
      icon: '🎯',
      unlockLevel: 3,
      story: 'A shooting has erupted at the largest shopping mall in Korea. Code Black. All the training was for this moment. Stop the bleeding. Save the lives.',
      chapters: [
        {
          id: 'as_ch1',
          title: 'Chapter 1: Call Received',
          subtitle: 'Code Black — Active Shooter',
          levelTitle: 'Trainee',
          cinematic: {
            text: 'Saturday, 2 PM.\n\nSeoul\'s largest shopping mall.\n\nSuddenly, gunshots ring out. One. Two. Rapid succession.\n\nPeople start running. Screams.\n\nEmergency calls flood the 119 dispatch center.\n"There\'s a shooter at the mall! People are dying!"',
            roleDialogue: {
              paramedic: '"Active shooter scene. Standard protocol: no entry until police secure the Hot Zone. But people are dying inside."',
              emergency_doc: '"Activating hospital emergency response. Trauma surgery team mobilized. Blood bank at maximum readiness. Golden hour starts now."',
              hazmat: '"No chemical element detected — firearms only. Ballistic gear before PPE."',
              commander: '"Setting up command post. Activating police ICS and medical ICS simultaneously. Proceed per THREAT protocol."',
              swat_medic: '"SWAT deploying. Neutralize threat first. Medical support after Warm Zone is secured."',
              nurse: '"ER on standby. Multiple penetrating trauma patients expected. Maximum hemorrhage control supplies ready."'
            }
          },
          briefing: {
            situation: 'Mass shooting at a major shopping mall — multiple casualties',
            hazards: ['Active shooter', 'Secondary attack possibility', 'Crowd panic', 'Civilian casualties'],
            resources: ['Police Special Response Team', '6 EMS units', 'Ballistic equipment', 'Tourniquet kits'],
            objective: 'Understand Run-Hide-Fight principles, apply THREAT protocol, establish scene zones'
          },
          challenges: [
            {
              id: 'as_c1_q1',
              type: 'quiz',
              q: 'In an Active Shooter situation, what is the principle of "Run" in the civilian priority sequence Run-Hide-Fight?',
              o: [
                'Run out of the building no matter what',
                'If there is an escape route, evacuate immediately — leave belongings, bring others along, call 911 from safety',
                'Flee only after confirming where the shooter is',
                'Only flee when with two or more people'
              ],
              a: 1,
              exp: 'Run: If there is an escape route, evacuate immediately. Leave belongings, take others with you, call 911 from a safe place. Hide: If escape is impossible, hide in a lockable room, turn off lights, silence phones, barricade the door with furniture. Fight: Last resort — respond aggressively to the shooter. This is the new response paradigm that emerged after Columbine (1999).',
              difficulty: 'easy',
              xp: 80
            },
            {
              id: 'as_c1_q2',
              type: 'quiz',
              q: 'In the THREAT principle, what does "H" stand for?',
              o: [
                'Hostage (hostage negotiation)',
                'Hemorrhage Control',
                'Hospital Notification',
                'Hazmat (hazardous material check)'
              ],
              a: 1,
              exp: 'THREAT principle (Hartford Consensus): T — Threat suppression H — Hemorrhage Control R — Rapid Extrication to safety E — Evaluation by EMS A&T — Transport to definitive care. This principle from the Hartford Consensus emphasizes how critical hemorrhage control is in active shooter situations.',
              difficulty: 'easy',
              xp: 80
            },
            {
              id: 'as_c1_q3',
              type: 'quiz',
              q: 'What treatment is applied in the "Warm Zone" of an active shooter care zone?',
              o: [
                'No treatment — evacuation only',
                'Full MARCH protocol can be applied',
                'Tourniquet application only — too dangerous near Hot Zone',
                'RSI (Rapid Sequence Intubation) only'
              ],
              a: 1,
              exp: 'Active shooter care zones: Hot Zone (direct threat) — self-care only, tourniquet only, threat elimination first. Warm Zone (indirect/limited threat) — full MARCH protocol can be applied, RTF (Rescue Task Force) operational area. Cold Zone (safe area) — complete medical care, DMAT field medical station. RTF: medical personnel enter Warm Zone under police escort to provide care.',
              difficulty: 'easy',
              xp: 80
            },
            {
              id: 'as_c1_q4',
              type: 'quiz',
              q: 'How did the response paradigm change after the Columbine High School shooting (1999)?',
              o: [
                'A more fortified contain-and-negotiate strategy',
                'From 5C containment-negotiation to Rapid Response Teams — move immediately toward the threat to stop the killing',
                'Allowing civilian arming',
                'Deploying military inside schools'
              ],
              a: 1,
              exp: 'Pre-Columbine (5C strategy): Contain → Control → Call SWAT → Communicate → Come up with a plan. Problem: while negotiating for 46 minutes, the suicidal perpetrators continued killing. Post-Columbine paradigm: Rapid Response Team — upon arrival, immediately move toward the threat to stop the killing. Negotiation is for hostage situations. Negotiation is useless with a suicidal perpetrator.',
              difficulty: 'easy',
              xp: 80
            },
            {
              id: 'as_c1_q5',
              type: 'scenario',
              narrative: 'Police have arrived on scene. Reports indicate the shooter is on the 3rd floor. Casualties are on the 1st and 2nd floors.',
              q: 'What is the role of the RTF (Rescue Task Force) in this situation?',
              o: [
                'Immediately enter the 3rd floor to neutralize the shooter',
                'After police secure the Warm Zone, enter with ballistic-equipped medical personnel to treat casualties',
                'Enter the scene only after the shooter is fully neutralized',
                'Wait at the hospital to treat transported patients'
              ],
              a: 1,
              exp: 'RTF (Rescue Task Force): police escort + medical personnel (wearing ballistic gear) enter the Warm Zone together to treat casualties. Police alone cannot provide medical care; medical personnel alone cannot secure safety → integrated operation. Korea status: joint training between police special response teams + 119 paramedics is needed. The need for improvement was highlighted after the 2022 Itaewon crowd crush.',
              difficulty: 'medium',
              xp: 120
            }
          ],
          successNarrative: 'The command post is set up and police and medical teams are in a cooperative structure.\nThe RTF has completed preparations to enter the Warm Zone.\nIt is time to rescue survivors.',
          failNarrative: 'Initial scene confusion delayed the response. The golden hour is slipping away.',
          rewards: { xp: 400, items: ['hint'], levelUp: 'Trainee → Junior Responder' }
        },
        {
          id: 'as_ch2',
          title: 'Chapter 2: MARCH Protocol',
          subtitle: 'Five Steps That Save Lives',
          levelTitle: 'Junior Responder',
          cinematic: {
            text: 'Entering the Warm Zone.\n\nMultiple people are down on the floor.\nBlood is flowing. Some are unconscious.\n\nMARCH. MARCH. MARCH.\nThese 5 letters are everything to you right now.',
            roleDialogue: {
              paramedic: '"M — Massive Hemorrhage first! Find the tourniquet!"',
              emergency_doc: '"A — Airway. Check airway. Unconscious patient — NPA (nasopharyngeal airway) ready."',
              hazmat: '"In this situation, IFAK (Individual First Aid Kit) comes before HAZMAT equipment."',
              commander: '"C — Circulation. Check for shock signs. Assess all casualties simultaneously."',
              swat_medic: '"H — Hypothermia Prevention. Hemorrhagic shock patients are vulnerable to hypothermia. Thermal blanket."',
              nurse: '"R — Respiration. If tension pneumothorax suspected, prepare needle decompression. Auscultate breath sounds."'
            }
          },
          briefing: {
            situation: 'Entering Warm Zone — 8 casualties found',
            hazards: ['Multiple penetrating injuries', 'Massive hemorrhage', 'Airway injury', 'Active shooting ongoing'],
            resources: ['IFAK kit', '4 tourniquets', 'Pressure bandages', 'Nasopharyngeal airways'],
            objective: 'Apply MARCH protocol in sequence, tourniquet technique, tension pneumothorax treatment'
          },
          challenges: [
            {
              id: 'as_c2_q1',
              type: 'quiz',
              q: 'Why is the first step "M" of the MARCH protocol prioritized above all else?',
              o: [
                'Because it is easier than managing the airway',
                'Because "massive hemorrhage" is the leading cause of preventable death in combat/terror scenarios',
                'Because it takes more time than other treatments',
                'Because it is the regulation-mandated order'
              ],
              a: 1,
              exp: 'Why Massive Hemorrhage is top priority in MARCH: in combat/terror scenarios, the #1 cause of preventable death is massive hemorrhage — especially extremity bleeding. Stop it quickly and the patient can survive. Based on TCCC guidelines. The MARCH innovation was moving M to the front of the traditional ABCDE sequence for tactical environments. Boston Marathon bombing (2013) — tourniquets saved dozens.',
              difficulty: 'medium',
              xp: 120
            },
            {
              id: 'as_c2_q2',
              type: 'quiz',
              q: 'What is the correct application position for a tourniquet?',
              o: [
                'Directly over the bleeding site',
                '5-10cm proximal (toward the heart) from the bleeding site',
                'Below the bleeding site',
                'As close to the heart as possible'
              ],
              a: 1,
              exp: 'Tourniquet application: 5-10cm proximal (toward the heart) from the bleeding site. Tighten until bleeding stops. Time of application must always be recorded (risk of nerve/vascular damage if applied >2 hours). Two may be needed in severe cases such as high femoral amputation. CAT (Combat Application Tourniquet) or SOFT-T Wide is standard equipment. Confirm hemorrhage control after application.',
              difficulty: 'medium',
              xp: 120
            },
            {
              id: 'as_c2_q3',
              type: 'scenario',
              narrative: '35-year-old male. Right thigh gunshot wound. Active hemorrhage. Conscious. Pulse: 130 bpm. BP: 80/50.',
              q: 'What is the correct sequence of immediate treatment per the MARCH protocol?',
              o: [
                'Secure airway → give IV fluids → apply tourniquet',
                'Apply tourniquet (M) → check airway (A) → check respiration (R) → give IV fluids (C) → keep warm (H)',
                'Give IV fluids → raise blood pressure → tourniquet',
                'Immediately transport to hospital — no treatment'
              ],
              a: 1,
              exp: 'MARCH sequence: M — immediately control femoral hemorrhage with tourniquet. A — check airway (patient is conscious, maintaining own airway). R — check respiration (confirm whether gunshot is thoracic). C — signs of shock: hypotension (80/50), tachycardia (130) → give IV fluids. Target BP: 80-90 mmHg (Permissive Hypotension). H — hemorrhagic shock patients are prone to hypothermia → thermal blanket.',
              difficulty: 'hard',
              xp: 200,
              roleBonus: { swat_medic: 'SWAT Medic: Can perform MARCH with eyes closed. Bonus XP +100!' }
            },
            {
              id: 'as_c2_q4',
              type: 'quiz',
              q: 'What is the insertion site for Needle Chest Decompression (NCD) in treating Tension Pneumothorax?',
              o: [
                'Midclavicular line, 4th-5th intercostal space',
                'Midclavicular line (MCL), 2nd intercostal space (or anterior axillary line, 4th-5th ICS)',
                'Midsternal line',
                'Posterior axillary line'
              ],
              a: 1,
              exp: 'Needle Chest Decompression (NCD) for tension pneumothorax: MCL (midclavicular line) 2nd ICS or AAL (anterior axillary line) 4th-5th ICS. Use 14-16 gauge needle. Symptoms: rapidly worsening dyspnea, tracheal deviation, JVD, absent unilateral breath sounds, hypotension. Without immediate treatment: cardiac compression → death. Key treatment in MARCH "R (Respiration)" step.',
              difficulty: 'hard',
              xp: 180
            },
            {
              id: 'as_c2_q5',
              type: 'quiz',
              q: 'What is the target systolic blood pressure for "Permissive Hypotension" in a tactical environment?',
              o: [
                '120 mmHg or higher (maintain normal blood pressure)',
                '80-90 mmHg',
                'Below 60 mmHg',
                'Raise as high as possible without a specific target'
              ],
              a: 1,
              exp: 'Permissive Hypotension: target systolic BP 80-90 mmHg. Reason: raising BP too high can disrupt clot formation and restart bleeding. Exception: TBI (traumatic brain injury) patients require systolic >110 mmHg (to maintain cerebral perfusion). Source: tactical medicine textbooks. "Lethal triad": hypothermia + coagulopathy + metabolic acidosis = fatal.',
              difficulty: 'hard',
              xp: 180
            }
          ],
          successNarrative: 'MARCH protocol complete. 6 of 8 have been stabilized.\nTourniquet application controlled massive hemorrhage in 3 patients.\nTransport within the golden hour is achievable.',
          failNarrative: 'Confusion in treatment sequence worsened some patients\' conditions. Recall MARCH.',
          rewards: { xp: 600, items: ['medkit', 'hint'], levelUp: 'Junior Responder → Intermediate Specialist' }
        },
        {
          id: 'as_ch3',
          title: 'Chapter 3: Massive Hemorrhage Control',
          subtitle: 'Stop the Bleed, Stop the Bleed, Stop the Bleed',
          levelTitle: 'Intermediate Specialist',
          cinematic: {
            text: 'More casualties have been found.\n\n12 casualties. All gunshot wounds.\nSome have extremity hemorrhage. Others have junctional bleeding (axilla, groin).\nAreas that cannot be controlled with a tourniquet.\n\nNew tools are needed.',
            roleDialogue: {
              paramedic: '"Axillary hemorrhage — can\'t apply a tourniquet there. Need wound packing."',
              emergency_doc: '"Starting TXA (tranexamic acid). Seriously bleeding patients — effective only within 3 hours."',
              hazmat: '"Junctional tourniquet — SAM JT. A tool that can be used for groin hemorrhage."',
              commander: '"Setting up CCP (Casualty Collection Point). Gather patients → triage → transport."',
              swat_medic: '"QuikClot, HemCon — hemostatic gauze. Kaolin-based. Pack deep into the wound and hold pressure for 3 minutes."',
              nurse: '"TXA 1000mg over 10 minutes → then additional 1000mg over 8 hours. Don\'t forget."'
            }
          },
          briefing: {
            situation: '12 shooting casualties — various types of hemorrhage',
            hazards: ['Junctional hemorrhage (tourniquet not applicable)', 'Non-compressible abdominal/thoracic hemorrhage', 'Shock progression'],
            resources: ['Hemostatic gauze (QuikClot, HemCon)', 'Junctional tourniquet (SAM JT)', 'TXA (tranexamic acid)', 'REBOA (intra-aortic balloon)'],
            objective: 'Understand various hemorrhage control techniques, TXA dosing, junctional tourniquet'
          },
          challenges: [
            {
              id: 'as_c3_q1',
              type: 'quiz',
              q: 'What is the correct technique for wound packing?',
              o: [
                'Lightly place gauze over the wound and apply pressure',
                'Pack hemostatic gauze deep into the wound and maintain firm direct pressure for at least 3 minutes',
                'Wash with water first, then insert gauze',
                'Only effective when used in pairs'
              ],
              a: 1,
              exp: 'Wound Packing: pack hemostatic gauze (QuikClot — kaolin-based, HemCon — chitosan-based) deep into the wound and maintain firm direct pressure for at least 3 minutes. Indications: areas where tourniquet is not applicable — junctional hemorrhage (axilla, groin, neck), torso bleeding. Caution: insufficient packing depth renders the technique ineffective. Maintain pressure until bleeding stops.',
              difficulty: 'medium',
              xp: 140
            },
            {
              id: 'as_c3_q2',
              type: 'quiz',
              q: 'In what situation should TXA (tranexamic acid) NOT be used?',
              o: [
                'Systolic BP below 90 mmHg',
                'More than 3 hours have elapsed since the traumatic event',
                'Age 65 or older',
                'Pregnancy'
              ],
              a: 1,
              exp: 'TXA (Tranexamic Acid) contraindication: do NOT use if more than 3 hours have elapsed since the traumatic event — it may actually be harmful. Indication: serious hemorrhaging patients. Dosage: initial 1,000mg over 10 minutes → additional 1,000mg over 8 hours. Effects: reduces mortality and transfusion requirements. Korea status: not officially included in Level 1 paramedic scope of practice (legal reform needed).',
              difficulty: 'medium',
              xp: 140
            },
            {
              id: 'as_c3_q3',
              type: 'scenario',
              narrative: 'Femoral gunshot wound patient. Tourniquet applied. At 30 minutes — checking the tourniquet time reveals no record was made.',
              q: 'Why is recording the time of tourniquet application important?',
              o: [
                'Because it is a legal documentation requirement',
                'Risk of nerve/vascular damage after >2 hours — essential information for hospital to decide whether to release it',
                'To determine when to replace the tourniquet',
                'Not important — just keep it on'
              ],
              a: 1,
              exp: 'Recording tourniquet time is mandatory: the risk of nerve/vascular damage increases after >2 hours of application. Essential information for the hospital to decide whether to safely release or continue it. Recording method: write the time on the tourniquet with a permanent marker (e.g., "TK 14:35"). One of the key lessons from the Boston Marathon bombing (2013): the importance of documenting application time.',
              difficulty: 'hard',
              xp: 180
            },
            {
              id: 'as_c3_q4',
              type: 'quiz',
              q: 'Where is the pelvic binder applied in treating a pelvic fracture?',
              o: [
                'Above the navel',
                'At the level of the greater trochanter of the femur',
                'Above the pubic symphysis',
                'At the lumbar level'
              ],
              a: 1,
              exp: 'Pelvic Binder: apply at the level of the greater trochanter of the femur. Reason: unstable pelvic fracture → massive internal hemorrhage → very high mortality. Pelvic binder stabilizes the pelvis → reduces internal bleeding. Must be applied exactly at the greater trochanter level to be effective. Too high or too low renders it ineffective.',
              difficulty: 'hard',
              xp: 180
            },
            {
              id: 'as_c3_q5',
              type: 'quiz',
              q: 'What is the most important medical lesson from the Boston Marathon bombing (2013)?',
              o: [
                'The importance of CT scanning',
                'Civilian hemorrhage control (Stop the Bleed) training and improvised tourniquets saved survivors',
                'Helicopter transport was key',
                'Inter-hospital communication'
              ],
              a: 1,
              exp: 'Boston Marathon bombing (April 15, 2013): two pressure cooker bombs detonated near the finish line → 3 dead, 260+ injured. Lessons: 1) On-scene civilians and off-duty medical personnel improvised tourniquets → prevented massive hemorrhage → dozens survived. 2) Demonstrated the need for public "Stop the Bleed" training. 3) Integrated police-EMS cooperation enabled early Warm Zone entry → improved survival rates. This event sparked the nationwide expansion of the Stop the Bleed campaign.',
              difficulty: 'hard',
              xp: 200
            }
          ],
          successNarrative: 'Hemorrhage controlled in all 12 casualties.\nTXA administration complete and transport has begun.\nThe lessons of Boston have been applied in Seoul.',
          failNarrative: 'Delayed hemorrhage control sent 2 patients into shock. Provide focused treatment now.',
          rewards: { xp: 800, items: ['timefreeze', 'shield'], levelUp: 'Intermediate Specialist → Advanced Specialist' }
        },
        {
          id: 'as_ch4',
          title: 'Chapter 4: Tactical Evacuation',
          subtitle: 'TACEVAC — Leave No One Behind',
          levelTitle: 'Advanced Specialist',
          cinematic: {
            text: 'One shooter has been neutralized. But 2 shooters are still inside the building.\n\nCasualties must be evacuated. Now. While gunfire continues.\n\nTACEVAC — Evacuation under fire.',
            roleDialogue: {
              paramedic: '"No transport without police escort. Confirm RTF route before moving."',
              emergency_doc: '"Treatment during transport: check airway, recheck bleeding, maintain IV. Transport ≠ stopping treatment."',
              hazmat: '"CBRN element confirmed absent. Replace protective gear with ballistic equipment."',
              commander: '"Transport priority: RED (immediate) → YELLOW (delayed) → GREEN (minor). BLACK last."',
              swat_medic: '"TACEVAC — Tactical Evacuation Care. Continue treatment during transport. Hold the shoulder carry."',
              nurse: '"Pre-arrival hospital report: number of patients, injury types, vital signs, treatments already applied."'
            }
          },
          briefing: {
            situation: 'Casualty evacuation needed while shooting is ongoing',
            hazards: ['Incoming fire during transport', 'Deterioration during transport', 'Evacuation route selection'],
            resources: ['RTF police escort', '5 ambulances', 'Transport litters', 'In-transit treatment kit'],
            objective: 'TACEVAC principles, en-route treatment, Load-and-Go criteria, hospital pre-notification'
          },
          challenges: [
            {
              id: 'as_c4_q1',
              type: 'quiz',
              q: 'Of the 3 phases of TCCC, what treatment is primarily performed in the "Tactical Evacuation Care (TACEVAC)" phase?',
              o: [
                'Initial tourniquet application only',
                'Stop treatment and focus on transport only',
                'Continued treatment and monitoring during transport — including responding to deterioration',
                'All treatment begins upon hospital arrival'
              ],
              a: 2,
              exp: 'TCCC 3 phases: Care Under Fire (CUF) — Hot Zone, tourniquet only. Tactical Field Care (TFC) — Warm Zone, full MARCH. Tactical Evacuation Care (TACEVAC) — during transport, continued treatment + monitoring. During TACEVAC: recheck airway, recheck bleeding, maintain IV, monitor vital signs, immediately respond to deterioration. "Transport ≠ end of treatment."',
              difficulty: 'medium',
              xp: 140
            },
            {
              id: 'as_c4_q2',
              type: 'quiz',
              q: 'Which of the following does NOT require an immediate "Load-and-Go" transport decision?',
              o: [
                'Suspected uncontrolled internal hemorrhage',
                'Potentially survivable cardiac arrest',
                'Closed forearm fracture (no bleeding)',
                'Tension pneumothorax'
              ],
              a: 2,
              exp: 'Load-and-Go indications: uncontrolled internal hemorrhage, severe head/cervical spine injury, tension pneumothorax, abdominal organ evisceration, severe burns (including airway burns), potentially survivable cardiac arrest. Stay-and-Play (treat on scene before transport): limb fractures, controlled bleeding, patients with stable vitals. Closed forearm fracture (no bleeding) → Stay-and-Play appropriate.',
              difficulty: 'medium',
              xp: 140
            },
            {
              id: 'as_c4_q3',
              type: 'scenario',
              narrative: 'During transport, Patient A (femoral gunshot wound, tourniquet applied) suddenly begins losing consciousness.\nVitals: BP 70/40, HR 140, RR 28, SpO2 92%.',
              q: 'What is the most likely cause and immediate treatment?',
              o: [
                'Sleep state — continue transport as is',
                'Hemorrhagic shock progressing or pneumothorax — reassess MARCH, give IV fluids, recheck respirations',
                'Pain-induced syncope — administer analgesics',
                'Hypoglycemia — administer glucose'
              ],
              a: 1,
              exp: 'En-route deterioration treatment: hypotension (70/40) + tachycardia (140) + tachypnea (28) + SpO2 92% → hemorrhagic shock worsening or pneumothorax. Reassess MARCH: M — check tourniquet status, recheck bleeding. A — recheck airway. R — SpO2 92% → suspect pneumothorax, auscultate breath sounds. C — give IV fluids (target BP 80-90). H — maintain warmth. Consider stopping transport vs. rapid transport decision.',
              difficulty: 'hard',
              xp: 200
            },
            {
              id: 'as_c4_q4',
              type: 'quiz',
              q: 'What information must be included in a pre-hospital notification to the hospital?',
              o: [
                'Patient name, ID number, insurance information',
                'Number of patients, injury types, vital signs, treatments already applied, estimated arrival time',
                'Cause of incident, perpetrator information, legal status',
                'Reason for hospital selection'
              ],
              a: 1,
              exp: 'Pre-hospital notification (MIST/ATMIST Report): M (Mechanism) I (Injuries) S (Signs — vital signs) T (Treatment already applied). Include estimated arrival time + number of patients. This gives the hospital time to prepare the trauma team, OR, and blood bank. At the Boston Marathon bombing, pre-notification allowed hospitals to be fully prepared → improved survival rates.',
              difficulty: 'hard',
              xp: 180
            },
            {
              id: 'as_c4_q5',
              type: 'quiz',
              q: 'In the 5-step medical response to an AAMCI (Active Attack Mass Casualty Incident), which step is the "RTF response" phase?',
              o: [
                'Step 1',
                'Step 2',
                'Step 3',
                'Step 4'
              ],
              a: 3,
              exp: 'AAMCI medical response 5 steps: Step 1 — injured/civilians self-administer first aid (self-rescue). Step 2 — voluntary assistance from uninjured civilians. Step 3 — initial response by first-arriving police/fire/EMS. Step 4 — RTF (Rescue Task Force) deployment (integrated police + medical team, Warm Zone entry). Step 5 — linking to specialty medical teams and hospital system. RTF is Step 4.',
              difficulty: 'hard',
              xp: 180
            }
          ],
          successNarrative: 'All casualties have been safely evacuated.\nBoth remaining shooters have been neutralized by police.\nTrauma teams are standing by at the hospital.',
          failNarrative: 'Inadequate care during transport worsened one patient\'s condition. Let this be a lesson.',
          rewards: { xp: 1000, items: ['doubleXP', 'shield'], levelUp: 'Advanced Specialist → Senior Expert' }
        },
        {
          id: 'as_ch5',
          title: 'Chapter 5: Hospital Trauma Care',
          subtitle: 'Golden Hour — ER Battle',
          levelTitle: 'Senior Expert',
          cinematic: {
            text: 'The Emergency Room.\n\nCasualties are pouring in.\n18 total. 5 need immediate surgery.\n\nThe ER has turned into a battlefield.\n\nYou are the leader of the medical team.',
            roleDialogue: {
              paramedic: '"I\'ll help with triage. Rapidly sort RED-YELLOW-GREEN-BLACK using START."',
              emergency_doc: '"RSI prep. Ketamine 2mg/kg IV. Trauma CT rolling. Surgery team ready in 5 minutes."',
              hazmat: '"In this situation I\'m a trauma assistant. I\'ll help establish IV lines."',
              commander: '"Activating HICS (Hospital Incident Command System). Secure beds, expand ORs, maximize blood supply."',
              swat_medic: '"GSW patient X-ray: confirm fragment locations first. Localize before removal."',
              nurse: '"Blood typing and cross-matching simultaneously. Type O emergency blood ready. No time."'
            }
          },
          briefing: {
            situation: 'Hospital receiving mass trauma patients — HICS activated',
            hazards: ['Hospital overload', 'Insufficient ORs', 'Blood shortage', 'Additional incoming patients'],
            resources: ['Trauma surgery team', '2 CT scanners', 'Transfusion team', '10 ICU beds'],
            objective: 'Hospital mass casualty response system, RSI medications, trauma treatment protocol'
          },
          challenges: [
            {
              id: 'as_c5_q1',
              type: 'quiz',
              q: 'Which characteristic of Ketamine used in RSI for gunshot wound patients is correct?',
              o: [
                'Causes blood pressure decrease — unsuitable for hemorrhagic shock',
                'Bronchodilation and blood pressure elevation → useful for hypotensive shock patients',
                'Duration of 30-60 minutes is too long for tactical environments',
                'Has no anticonvulsant effect'
              ],
              a: 1,
              exp: 'RSI induction agent Ketamine: 1-2mg/kg IV, onset 5-10 min. Advantages: bronchodilation (useful for asthma, pneumothorax), blood pressure elevation (useful for hypotensive shock patients). Hemorrhagic shock + GSW patient → Ketamine is ideal. Etomidate: hemodynamically stable, preferred for head injuries. Midazolam: may lower BP, has anticonvulsant effect.',
              difficulty: 'medium',
              xp: 160
            },
            {
              id: 'as_c5_q2',
              type: 'quiz',
              q: 'Of the 12-step ER response when HICS is activated, what is "Step 3"?',
              o: [
                'Hospital disaster declaration',
                'Decontamination',
                'ED zone establishment',
                'Security reinforcement'
              ],
              a: 1,
              exp: 'Hospital disaster 12 steps: 1) Early disaster declaration (HICS activated) 2) Declare transition to disaster system 3) Decontamination 4) Use of antidotes 5) ED zone establishment 6) ED expansion + HICS facility setup 7) Security reinforcement 8) ED bed securing 9) Reserve disaster bed securing 10) ED staff reinforcement 11) Bottleneck zone operations 12) Additional measures. In a shooting incident, decontamination need is low, so some steps are adjusted.',
              difficulty: 'hard',
              xp: 180
            },
            {
              id: 'as_c5_q3',
              type: 'scenario',
              narrative: '27-year-old female, abdominal gunshot wound. BP 75/40, HR 142, abdominal rigidity, obtunded. FAST ultrasound: large amount of blood in peritoneal cavity.',
              q: 'What immediate action is needed for this patient?',
              o: [
                'CT scan, then surgical decision',
                'FAST positive + unstable vitals → immediate Emergent Laparotomy',
                '2L IV fluids, then reassess',
                'Observe and monitor vital signs'
              ],
              a: 1,
              exp: 'Non-compressible truncal hemorrhage (NCTH) + unstable vitals + FAST positive: immediately decide Emergent Laparotomy. No time to wait for CT — bleeding is faster than CT time. FAST (eFAST): confirms blood in peritoneal cavity, pericardial blood, pneumothorax. Unstable patient + FAST positive = go directly to OR. Stable patient + FAST positive = CT can be obtained.',
              difficulty: 'hard',
              xp: 220
            },
            {
              id: 'as_c5_q4',
              type: 'quiz',
              q: 'Under Korean regulations, what airway management skills are "permitted" for Level 1 paramedics?',
              o: [
                'Cricothyrotomy',
                'OPA, NPA insertion + supraglottic airway (i-gel, LMA) + endotracheal intubation in cardiac arrest',
                'Full RSI (Rapid Sequence Intubation)',
                'No airway skills permitted'
              ],
              a: 1,
              exp: 'Korean Level 1 paramedic permitted airway management (2025): Permitted — OPA/NPA insertion, supraglottic airway devices (LMA, i-gel), endotracheal intubation (cardiac arrest only), BVM ventilation, airway suctioning. Not permitted — cricothyrotomy (physician only), full RSI (sedative/neuromuscular blocking agent administration restricted). 2017-2018 statistics: supraglottic airways accounted for 89% of all 119 airway interventions nationwide.',
              difficulty: 'hard',
              xp: 200
            },
            {
              id: 'as_c5_q5',
              type: 'quiz',
              q: 'What is "Secondary Blast Injury" in blast trauma?',
              o: [
                'Blast overpressure injury from the shock wave (tympanic membranes, lungs)',
                'Penetrating injury from flying fragments (metal, glass, bomb components)',
                'Blunt trauma from the victim being thrown',
                'Burns, gas inhalation, building collapse injuries'
              ],
              a: 1,
              exp: 'Four categories of blast injury: Primary — barotrauma from shock wave (tympanic membranes, lungs, bowel). Secondary — penetrating injuries from flying fragments (metal, glass, nails, bolts, and other objects packed into the bomb by the terrorist). Tertiary — blunt trauma from the victim being thrown by the blast force. Quaternary — burns, gas inhalation, collapse, psychological effects. In a bombing scenario, all four types can occur simultaneously.',
              difficulty: 'hard',
              xp: 200
            }
          ],
          successNarrative: '16 of 18 have received surgery or stable treatment.\n2 are critical but survivable.\nThis was the decisive battle of the ER trauma team.',
          failNarrative: 'Treatment priority error. But most patients survived. You can do better next time.',
          rewards: { xp: 1200, items: ['doubleXP', 'medkit'], levelUp: 'Senior Expert Deepening' }
        },
        {
          id: 'as_ch6',
          title: 'Chapter 6: The Final Battle — Triple Threat',
          subtitle: 'Boss Chapter — Explosion + Gunfire + Hostage',
          levelTitle: 'Master',
          cinematic: {
            text: 'It seemed the mall situation was being contained.\n\nBut suddenly — an explosion.\n\nOne of the shooters was wearing a suicide vest.\nExplosion. 20 new casualties.\nSimultaneously, another shooter has taken children hostage.\n\nThis is the true worst case.\n\nWhat will you choose?',
            roleDialogue: {
              paramedic: '"Blast casualties and shooting casualties at the same time. Where do we start?"',
              emergency_doc: '"Watch for primary blast injury — even those who look fine may have pulmonary contusion or bowel rupture."',
              hazmat: '"Suicide vest — must rule out chemical or radiation components. CBRN check."',
              commander: '"Watch for secondary device! Terrorists plant secondary devices to lure first responders."',
              swat_medic: '"Hostage situation + explosion + medical — three things at once. This is maximum difficulty."',
              nurse: '"Combined blast and GSW patients. The hardest cases. Start with MARCH, don\'t waver."'
            }
          },
          briefing: {
            situation: 'Suicide bombing + shooting + hostage — all three simultaneously',
            hazards: ['Combined blast injuries', 'Secondary device risk', 'Possible CBRN elements', 'Hostage safety'],
            resources: ['All available personnel', 'Emergency helicopter', 'EOD (Explosive Ordnance Disposal)', 'Crisis negotiation team'],
            objective: 'Highest-difficulty combined disaster — comprehensive test of all tactical medicine, blast injury, CBRN, and command integration'
          },
          challenges: [
            {
              id: 'as_c6_q1',
              type: 'quiz',
              q: 'What is the correct response to the risk of a Secondary Device at a suicide bombing scene?',
              o: [
                'Rapidly treat all casualties at the blast center',
                'Recognize risk of secondary device → hold off entry before EOD safety clearance, move casualties to a safe zone before treatment',
                'Probability of secondary device is low — ignore',
                'Medical personnel enter alone before police arrive'
              ],
              a: 1,
              exp: 'Secondary Device risk: terrorists lure first responders with a primary blast, then detonate a secondary device. Always get EOD (Explosive Ordnance Disposal) safety clearance before entering the blast scene. Move casualties to a safe zone away from the blast center before treating. Boston Marathon (2013): two bombs detonated in sequence (30-second interval). Israeli experience: this tactic is commonly used.',
              difficulty: 'veryhard',
              xp: 280
            },
            {
              id: 'as_c6_q2',
              type: 'quiz',
              q: 'What are the 3 most vulnerable organs in Primary Blast Injury?',
              o: [
                'Liver, spleen, kidneys',
                'Tympanic membranes, lungs (pulmonary contusion), bowel (air-containing organs)',
                'Heart, brain, skin',
                'Muscles, skeletal structures, blood vessels'
              ],
              a: 1,
              exp: 'Primary Blast Injury (barotrauma from shock wave): most vulnerable organs — air-containing structures: 1) Tympanic membranes — >50% rupture at ≥15-50 psi 2) Lungs — pulmonary contusion, air embolism 3) Bowel — bowel rupture. Tympanic membrane rupture = an important indicator of shock wave exposure. Even patients who appear fine may have ruptured eardrums/pulmonary contusion. Checking for tinnitus and hearing loss is essential.',
              difficulty: 'veryhard',
              xp: 280
            },
            {
              id: 'as_c6_q3',
              type: 'scenario',
              narrative: 'Among 20 combined blast and GSW casualties, 4 are pediatric patients.\nPediatric patient, 7 years old, conscious, apneic, pulse present.',
              q: 'Under the JumpSTART pediatric triage method, what is the treatment for this patient?',
              o: [
                'Same as adult START — apnea immediately classified BLACK',
                'Pulse present + apneic → attempt 5 rescue breaths → if breathing restored, RED; if not, BLACK',
                'All pediatric patients are always classified RED',
                'Children under 8 are excluded from triage'
              ],
              a: 1,
              exp: 'JumpSTART (pediatric START, for children <8 years or <45 kg): difference from adult START — apneic child → check pulse → if pulse present, attempt 5 rescue breaths → if breathing restored, RED; if not restored, BLACK. Reason: the primary cause of pediatric cardiac arrest is a respiratory problem, so rescue breaths have value. In adult START, apnea after airway opening is immediately BLACK.',
              difficulty: 'veryhard',
              xp: 300
            },
            {
              id: 'as_c6_q4',
              type: 'quiz',
              q: 'What is the role of the Tactical Medical Provider (TMP) in "Barricade Medicine" during a hostage situation?',
              o: [
                'Directly participate in hostage rescue operations',
                'Provide medical information, give remote medical instructions, use medical supplies as a negotiating card to support the negotiation team',
                'Enter immediately without negotiation',
                'No medical role — negotiators only'
              ],
              a: 1,
              exp: 'Barricade Medicine: the TMP provides medical support to the negotiation team in a hostage/armed standoff situation. Roles: 1) Provide medical information (suspect medications, psychiatric history, etc.) 2) Give remote medical instructions (guide hostages via phone/radio in first aid) 3) Use medical supplies (e.g., insulin) as a negotiating card — "We\'ll give you the medication if you release one hostage." One of the TMP\'s unique roles.',
              difficulty: 'veryhard',
              xp: 300
            },
            {
              id: 'as_c6_q5',
              type: 'scenario',
              narrative: 'All threats have been neutralized. All 38 casualties have been treated. 3 fatalities.\nYou hear from the incident commander:\n"Without your medical leadership today, the death toll would have exceeded 20."',
              q: 'What is the most appropriate key lesson from this incident?',
              o: [
                'More gun control is needed',
                'Integrated police-EMS-hospital training, public Stop the Bleed education, and building the RTF system determines survival rates',
                'Personal armament is the solution',
                'Faster ambulances are needed'
              ],
              a: 1,
              exp: 'Key lessons from active shooter response (Boston Marathon + international cases): 1) Integrated police-EMS RTF system → early Warm Zone entry → securing the golden hour. 2) Public Stop the Bleed training → on-scene civilians as first rescuers. 3) Hospital pre-notification → trauma team fully prepared. 4) Standardized MARCH protocol training. 5) Regular joint training to maintain integrated on-scene response capability.',
              difficulty: 'veryhard',
              xp: 320
            }
          ],
          successNarrative: '35 of 38 casualties survived.\n3 fatalities — patients who died on-scene from initial gunshot wounds.\n\nYour leadership saved dozens of lives.\n\n🎯 Active Shooter Response Master — Achieved',
          failNarrative: 'You gave your best. Combined disasters always leave lessons. Try again.',
          rewards: {
            xp: 2500,
            items: ['doubleXP', 'shield', 'medkit', 'timefreeze'],
            achievement: '🎯 Tactical Medicine Master',
            levelUp: 'Master — Tactical Emergency Medicine Expert'
          }
        }
      ]
    },

    // =====================================================
    // CAMPAIGN 6: Multi-Vector Terror (Multi-Domain Terror)
    // Final Boss Campaign — Olympic Multi-Site Terror Attack
    // =====================================================
    {
      id: 'multi_terror',
      title: '💣 Multi-Vector Terror Attack',
      subtitle: 'Olympic Multi-Site Terror Attack — Final Boss Campaign',
      difficulty: '★★★★★',
      estimatedTime: '70 min',
      background: 'linear-gradient(135deg, #0a0a0a, #ff0000, #ffd700)',
      icon: '💣',
      unlockLevel: 5,
      story: 'Seoul Olympics. The whole world is watching. And so are the terrorists. Explosion + chemical + hostages. Everything at once. You must use everything you have learned.',
      chapters: [
        {
          id: 'mt_ch1',
          title: 'Chapter 1: First Explosion',
          subtitle: 'Olympic Opening Ceremony — First Strike',
          levelTitle: 'Trainee',
          cinematic: {
            text: 'Seoul Olympic Opening Ceremony.\nA historic moment with 195 nations participating.\n\nBut 2 hours before the opening.\n\nA powerful explosion occurs near the main stadium.\n\nHundreds of casualties. Smoke. Chaos.\n\nAnd worse news arrives.\n\n"The first explosion was only the beginning."',
            roleDialogue: {
              paramedic: '"Mass MCI. Start with CSCATTT. We need Command first."',
              emergency_doc: '"Blast injury patterns: primary-pressure wave, secondary-fragmentation, tertiary-throw, quaternary-burns. All possible."',
              hazmat: '"Checking CBRN elements. Chemical, biological, radiation baselines — measuring now."',
              commander: '"Activate ICS immediately. NIMS principles. Unified command. Without command structure right now, we become the next casualties."',
              swat_medic: '"Maximum alert for secondary attack. The first explosion may be a lure for responders."',
              nurse: '"Declare hospital emergency. Activate HICS. Expecting hundreds of major trauma patients."'
            }
          },
          briefing: {
            situation: 'Mass explosion near Olympic main stadium — first strike',
            hazards: ['Secondary attack', 'Unconfirmed CBRN elements', 'Hundreds of casualties', 'International media exposure'],
            resources: ['Olympic medical team', 'Seoul Fire/EMS', 'Special counter-terrorism unit', 'International medical support'],
            objective: 'Initial multi-disaster response, CSCATTT principles, initial CBRN screening'
          },
          challenges: [
            {
              id: 'mt_c1_q1',
              type: 'quiz',
              q: 'In the CSCATTT principles of MIMMS (Major Incident Medical Management and Support), what does the first "C" stand for?',
              o: [
                'Casualties (casualty count)',
                'Command & Control',
                'CBRN (Chemical, Biological, Radiological, Nuclear)',
                'Communication'
              ],
              a: 1,
              exp: 'CSCATTT principles: C — Command & Control, S — Safety, C — Communication, A — Assessment, T — Triage, T — Treatment, T — Transportation. The last three T\'s are called the "3Ts". Command & Control comes first — medical response without structure compounds the chaos. Source: UK MIMMS protocol.',
              difficulty: 'medium',
              xp: 140
            },
            {
              id: 'mt_c1_q2',
              type: 'quiz',
              q: 'In a mass casualty incident (MCI), when applying the "Greatest Good for Greatest Number" principle, what does BLACK classification in START triage mean?',
              o: [
                'This patient must be treated first',
                'Deceased or unsurvivable — treatment withheld given current available resources',
                'Minor injury — treat later',
                'Unknown — needs re-assessment'
              ],
              a: 1,
              exp: 'MCI START triage BLACK (deceased/expectant): Prevents resource expenditure on non-survivable patients in resource-limited settings. Applies the "Greatest Good for Greatest Number" principle. This is an ethically difficult decision but essential in MCI. Human dignity must still be maintained after BLACK classification. Re-evaluation possible when resources increase. Treatment priority: RED > YELLOW > GREEN > BLACK.',
              difficulty: 'medium',
              xp: 140
            },
            {
              id: 'mt_c1_q3',
              type: 'scenario',
              narrative: '"CBRN screening results: Radiation — normal. Biological — checking. Chemical — abnormal readings detected at one location."',
              q: 'When chemical agent presence is suspected, what is the immediate action to take?',
              o: [
                'Continue treating casualties until chemical levels are confirmed',
                'Immediately activate chemical agent response — re-establish Hot/Warm/Cold Zones, don PPE Level B/C, set up decontamination zone',
                'Treat as conventional trauma only until chemical is confirmed',
                'Wait for specialist chemical team before taking action'
              ],
              a: 1,
              exp: 'When chemical agent is suspected: immediately switch to chemical response mode. 1) Re-establish zones (Hot/Warm/Cold) 2) Don PPE immediately (Level B or higher — when agent unidentified) 3) Set up decontamination zone 4) Apply Chemical Chain of Survival (PPE → decon → antidote → BLS). Must respond immediately at the suspicion stage, even before confirmation, to prevent further harm. Tokyo subway sarin attack (1995): delayed initial chemical response → in-hospital contamination spread.',
              difficulty: 'hard',
              xp: 200
            },
            {
              id: 'mt_c1_q4',
              type: 'quiz',
              q: 'What are the 4 phases of the disaster cycle in Counter-Terrorism Medicine (CTM)?',
              o: [
                'Detection → Response → Recovery → Learning',
                'Mitigation → Preparedness → Response → Recovery',
                'Prevention → Training → Response → Evaluation',
                'Alert → Evacuation → Treatment → Transport'
              ],
              a: 1,
              exp: 'CTM disaster cycle 4 phases: 1) Mitigation — risk reduction, preventive measures. 2) Preparedness — training, planning, resource acquisition. 3) Response — immediate action when an incident occurs. 4) Recovery — post-incident restoration, learning, improvement. These 4 phases are the standard model for all disaster management (FEMA, WHO), not just CTM. Current situation: "Response" phase.',
              difficulty: 'hard',
              xp: 200
            },
            {
              id: 'mt_c1_q5',
              type: 'scenario',
              narrative: 'Paramedics arrive at the blast scene. Approximately 200 casualties estimated. It is unclear where to begin.',
              q: 'In MASS Triage (Move-Assess-Sort-Send), what does the "Move" phase mean?',
              o: [
                'Immediately transport all patients to hospital',
                'Direct ambulatory patients (minor injuries) to the designated green zone to focus on critical patients',
                'Medical personnel move to evaluate each patient individually',
                'Do not gather casualties in one place'
              ],
              a: 1,
              exp: 'MASS Triage: Move → Assess → Sort → Send. Move phase: "If you can walk, come this way!" → Separate GREEN patients who can move voluntarily → Focus on remaining critical patients. This single step alone organizes the scene. Same principle as the first step of START. Ambulatory = GREEN; medical personnel do not need to go to each patient individually.',
              difficulty: 'hard',
              xp: 200
            }
          ],
          successNarrative: 'Command structure is established.\nCBRN screening is underway and casualty triage has begun.\nBut warnings of a secondary attack are starting to come in...',
          failNarrative: 'Initial confusion persisted. But it is not too late.',
          rewards: { xp: 500, items: ['hint', 'medkit'], levelUp: 'Trainee → Junior Responder' }
        },
        {
          id: 'mt_ch2',
          title: 'Chapter 2: Chemical Attack Confirmed',
          subtitle: 'Nerve Agent — Mass Poisoning',
          levelTitle: 'Junior Responder',
          cinematic: {
            text: 'After the second explosion.\n\n"My eyes are burning! I can\'t breathe!"\n"Saliva is drooling... muscles are cramping..."',
            roleDialogue: {
              paramedic: '"Cholinergic toxidrome! It\'s a nerve agent. All DUMBELS signs present."',
              emergency_doc: '"Prepare atropine! Don\'t rush — without patient decontamination, we\'ll get hit too."',
              hazmat: '"Possible sarin. Colorless, odorless. More dangerous in subway or enclosed spaces. Level B PPE immediately."',
              commander: '"Same pattern as Tokyo 1995 sarin attack. Issue contaminated patient alert to all hospitals."',
              swat_medic: '"Secure escape routes. Move away from the direction of contamination."',
              nurse: '"Set up hospital decon line. No one enters the ER without clothing removal."'
            }
          },
          briefing: {
            situation: 'Mass release of nerve agent (suspected sarin) — hundreds symptomatic',
            hazards: ['Nerve agent spread', 'Secondary contamination', 'PPE shortage', 'Delayed decontamination'],
            resources: ['Atropine injection', 'Pralidoxime (2-PAM)', 'Diazepam', 'Level B PPE', 'PRISM decon equipment'],
            objective: 'Recognize nerve agent toxidrome, antidote protocol, PPE level determination'
          },
          challenges: [
            {
              id: 'mt_c2_q1',
              type: 'quiz',
              q: 'In the nerve agent (sarin) toxidrome "DUMBELS", what symptom does "D" represent?',
              o: [
                'Dyspnea',
                'Diarrhea + Defecation',
                'Dizziness',
                'Dysrhythmia'
              ],
              a: 1,
              exp: 'DUMBELS — muscarinic nerve agent symptoms: D — Diarrhea/Defecation, U — Urination, M — Miosis (pupil constriction), B — Bradycardia/Bronchoconstriction/Bronchorrhea, E — Emesis, L — Lacrimation, S — Salivation/Secretion. Nerve agents = acetylcholinesterase (AChE) inhibition → excess acetylcholine (ACh) → continuous nerve firing.',
              difficulty: 'medium',
              xp: 140,
              roleBonus: { hazmat: 'HAZMAT Expert: Immediately recognizes nerve agent toxidrome! Bonus XP +70.' }
            },
            {
              id: 'mt_c2_q2',
              type: 'quiz',
              q: 'Why are atropine and pralidoxime (2-PAM) administered simultaneously to nerve agent poisoning patients?',
              o: [
                'For faster effect',
                'Atropine: blocks muscarinic effects / 2-PAM: reactivates AChE (before aging) — two different mechanisms',
                'Because neither alone is sufficient',
                'To reduce side effects'
              ],
              a: 1,
              exp: 'Dual antidote therapy for nerve agents: Atropine — anticholinergic action, blocks muscarinic effects (tears, saliva, vomiting, bradycardia). Pralidoxime (2-PAM, Oxime) — reactivates AChE before "aging." However, 2-PAM must be administered before AChE is permanently inactivated ("aged") → rapid administration essential. Diazepam: for seizures. Atropine shortage was one cause of increased deaths in the Tokyo subway incident.',
              difficulty: 'hard',
              xp: 200
            },
            {
              id: 'mt_c2_q3',
              type: 'quiz',
              q: 'What was the most important lesson learned from the 1995 Tokyo subway sarin attack?',
              o: [
                'Sarin has a strong odor and is easily detected',
                'Hospitals learned of the incident from TV news — communication failure, in-hospital contamination spread, lack of inter-agency coordination',
                'All sarin victims died',
                'Atropine was ineffective'
              ],
              a: 1,
              exp: 'Tokyo subway sarin (March 20, 1995, Aum Shinrikyo): 13 dead, thousands injured. Lessons: 1) Hospitals learned of incident from TV news → communication failure. 2) Contaminated patients arrived at hospitals without decontamination → secondary in-hospital contamination. 3) Absence of inter-agency coordination framework. 4) Physician diagnostic expertise was decisive. 5) Stronger inter-agency coordination and planning needed. Sarin is colorless and odorless → difficult to detect.',
              difficulty: 'hard',
              xp: 200
            },
            {
              id: 'mt_c2_q4',
              type: 'quiz',
              q: 'Among nerve agent types, what are the characteristics of "VX"?',
              o: [
                'Odorless, rapidly volatile',
                'Oily, persistent — strong skin absorption, used in the 2017 assassination of Kim Jong-nam',
                'Slightly fruity odor',
                'Camphor-like smell'
              ],
              a: 1,
              exp: 'Nerve agent classification: G-series (volatile) — Tabun (GA, slight fruity odor), Sarin (GB, odorless), Soman (GD, slight camphor odor), Cyclosarin (GF). V-series (persistent) — VX: oily texture, low volatility, strong skin absorption → lethal by skin contact alone. 2017 assassination of Kim Jong-nam (half-brother of North Korean leader) at Kuala Lumpur International Airport using VX. All are colorless or yellowish gas, tasteless, volatilize at room temperature.',
              difficulty: 'hard',
              xp: 200
            },
            {
              id: 'mt_c2_q5',
              type: 'quiz',
              q: 'What is the correct sequence of the 4 links in the Chain of Chemical Survival?',
              o: [
                'Antidote → PPE → Decontamination → BLS',
                'PPE → Decontamination → Antidote → BLS',
                'Decontamination → PPE → BLS → Antidote',
                'BLS → PPE → Antidote → Decontamination'
              ],
              a: 1,
              exp: 'Chain of Chemical Survival (Barelli et al., 2008): 1) PPE (Personal Protective Equipment) 2) Decontamination 3) Antidote Therapy 4) Basic and Supportive Care (BLS/supportive care). This sequence is critical — cannot decontaminate without PPE, cannot safely administer antidote without decontamination. Self-protection of field medical personnel is a prerequisite for patient protection.',
              difficulty: 'hard',
              xp: 220
            }
          ],
          successNarrative: 'The chemical agent response team has taken control of the scene.\nThe decontamination line is operational and antidote administration has begun.\nBut a third threat is being detected...',
          failNarrative: 'Patients arrived at the hospital before decontamination. In-hospital contamination began. The lesson of Tokyo 1995 repeated itself.',
          rewards: { xp: 700, items: ['hint', 'timefreeze'], levelUp: 'Junior Responder → Intermediate Specialist' }
        },

        {
          id: 'mt_ch3',
          title: 'Chapter 3: CBRNE Comprehensive Assessment',
          subtitle: 'Simultaneous Multi-Threat Identification',
          levelTitle: 'Intermediate Specialist',
          cinematic: {
            text: 'Reports flood the operations center.\n\nBlast site — mass casualties.\nChemical site — decontamination in progress.\nOlympic Village — suspicious powder found.\nRadiation detectors — abnormal readings in some areas.\n\nSimultaneous attacks. The chaos the terrorists wanted is reaching its peak.',
            roleDialogue: {
              paramedic: '"Where do we go? Explosion? Chemical? Radiation? There\'s no priority order."',
              emergency_doc: '"We need to prioritize each CBRNE threat. Start with the most immediate death threat."',
              hazmat: '"For multiple sites, distributing resources is key. Assign specialist teams to each threat."',
              commander: '"Activate NIMS Unified Command post. Connect via video conference with each site commander."',
              swat_medic: '"Preparing medical support for the hostage site. Moving toward the Athletes\' Village."',
              nurse: '"Preparing to activate ER HICS. Initiating multi-contaminated patient intake protocol."'
            }
          },
          briefing: {
            situation: 'Simultaneous explosion (trauma), chemical (nerve agent), radiological (RDD), biological (suspicious powder)',
            hazards: ['Multi-contaminated patients', 'Difficulty distributing resources', 'Command structure confusion'],
            resources: ['One specialist CBRNE team per threat', 'Unified Command post', '2 helicopters'],
            objective: 'CBRNE threat classification and specialist team deployment, Unified Command activation'
          },
          challenges: [
            {
              id: 'mt_c3_q1',
              type: 'quiz',
              q: 'In a CBRNE multi-hazard disaster, what is the first link of the "Chain of Chemical Survival"?',
              o: ['Administer antidote immediately', 'Don PPE (Personal Protective Equipment)', 'Begin decontamination', 'Provide BLS'],
              a: 1,
              exp: 'Chain of Chemical Survival (Barelli et al., 2008): 1) Don PPE → 2) Decontamination → 3) Antidote → 4) BLS. Without PPE, responders themselves may become contaminated — self-protection of responders is a prerequisite for patient protection.',
              difficulty: 'medium',
              xp: 150
            },
            {
              id: 'mt_c3_q2',
              type: 'scenario',
              narrative: 'Radiation meters showed abnormal readings in parts of the blast site. Possible RDD (dirty bomb).',
              q: 'What initial evacuation zone radius should be established in the initial response to an RDD explosion?',
              o: ['50m radius', '100m radius', '500m radius', 'Immediately evacuate entire 2km radius'],
              a: 2,
              exp: 'RDD (Radiological Dispersal Device) initial response: Establish initial evacuation/shelter zone of 500m radius from explosion point (CDC/FEMA guidelines). Extend up to 2km in confirmed contamination direction. Radiological contamination itself is not immediately lethal, but poses long-term risk if inhaled or ingested.',
              difficulty: 'medium',
              xp: 150
            },
            {
              id: 'mt_c3_q3',
              type: 'quiz',
              q: 'When applying the "Greatest Good for Greatest Number" principle in resource allocation during a CBRNE multi-hazard disaster, which description is most appropriate?',
              o: [
                'Concentrate all resources on the most critical patients',
                'Allocate resources to save the maximum number of potentially survivable patients',
                'First-come, first-served',
                'Commander\'s discretionary judgment'
              ],
              a: 1,
              exp: 'MCI principle — Greatest Good for Greatest Number: Rather than expending resources on the few unsalvageable patients (BLACK), prioritize the many potentially survivable patients (RED/YELLOW). This involves ethical dilemmas but is the core principle of disaster medicine. START triage operates on this principle.',
              difficulty: 'hard',
              xp: 180
            },
            {
              id: 'mt_c3_q4',
              type: 'scenario',
              narrative: 'White powder found at the Olympic Athletes\' Village — initial testing suggests anthrax.',
              q: 'What prophylactic antibiotic (PEP) should be immediately initiated for suspected anthrax-exposed individuals?',
              o: [
                'Amoxicillin for 7 days',
                'Ciprofloxacin 500mg BID or Doxycycline 100mg BID — 60 days',
                'Penicillin V for 10 days',
                'Single-dose ceftriaxone injection'
              ],
              a: 1,
              exp: 'Anthrax post-exposure prophylaxis (PEP): Ciprofloxacin 500mg BID or Doxycycline 100mg BID for 60 days. Why 60 days: anthrax spores can remain dormant in the lungs for up to 60 days. Protocol applied to exposed individuals during the 2001 Amerithrax attacks. Early initiation is critical.',
              difficulty: 'hard',
              xp: 200
            },
            {
              id: 'mt_c3_q5',
              type: 'quiz',
              q: 'What is the primary purpose of "Unified Command," a core component of NIMS (National Incident Management System)?',
              o: [
                'A single agency monopolizes all decisions',
                'A framework where multiple agencies set shared objectives and coordinate resources',
                'Police directly command medical teams',
                'Each agency operates completely independently'
              ],
              a: 1,
              exp: 'NIMS Unified Command: Multiple agencies (police + fire + medical + military) set shared objectives + joint decision-making + maximize resource efficiency. Successfully applied during the Boston Marathon bombing (2013). The absence of unified command was the key failure point in the Itaewon crowd crush (2022).',
              difficulty: 'hard',
              xp: 200
            }
          ],
          successNarrative: 'CBRNE threat classification is complete.\nExplosion: Trauma response team deployed.\nChemical: HAZMAT team decontamination in progress.\nRadiation: Protective gear team zone setup complete.\nThe Unified Command post manages three fronts simultaneously.',
          failNarrative: 'Threat classification failed. Due to misallocated resources, chemically contaminated patients arrived at the hospital without decontamination.',
          rewards: { xp: 800, items: ['hint', 'shield', 'doubleXP'], levelUp: 'Intermediate Specialist → Advanced Specialist' }
        },
        {
          id: 'mt_ch4',
          title: 'Chapter 4: Multi-Site Command',
          subtitle: 'Athletes\' Village Hostage + Blast Site Simultaneous Management',
          levelTitle: 'Advanced Specialist',
          cinematic: {
            text: '4:22 PM.\n\nReports come in that armed hostage-takers have seized the gymnastics arena at the Athletes\' Village.\nOver 100 casualties remain at the blast site.\nThe chemical decontamination line is operational.\n\n"1972 Munich, 1996 Atlanta... now Seoul."\nThe commander\'s face hardens.',
            roleDialogue: {
              paramedic: '"Request for hostage situation support has come in. But our team is still tied down at the blast site."',
              emergency_doc: '"The worst-case scenario is casualties during the hostage situation. Medical support needs to be attached to the negotiation team."',
              hazmat: '"Chemical site decontamination is 70% complete. We can redeploy part of the team to the Athletes\' Village."',
              commander: '"We need to run unified command over two ICS structures. NIMS framework — coordinate all sites from a single command post."',
              swat_medic: '"As a special forces medic, running TEMS for the hostage situation — this is my specialty."',
              nurse: '"The ER is already at its limit. Need to request hospital disaster declaration (HICS) from the director."'
            }
          },
          briefing: {
            situation: 'Simultaneous management of hostage situation + blast site. 50 hostages in gymnasium at Athletes\' Village.',
            hazards: ['Armed hostage-takers', 'Additional explosion threat if negotiation fails', 'Limited medical access to casualties'],
            resources: ['Special forces (including negotiation team)', '2 medical teams', '1 helicopter'],
            objective: 'Multi-site ICS integration, hostage medical support, continued blast site treatment'
          },
          challenges: [
            {
              id: 'mt_c4_q1',
              type: 'quiz',
              q: 'In the ICS (Incident Command System), when is "Unified Command" required?',
              o: [
                'When a single agency has sufficient resources',
                'Complex incidents involving multiple agencies/jurisdictions',
                'When the incident will resolve within 24 hours',
                'When only medical institutions are involved'
              ],
              a: 1,
              exp: 'ICS Unified Command is used when multiple agencies (police + fire + military + medical + local government) are simultaneously involved. Each agency commander sets shared objectives + operates from a single command post. Key success factor in the Boston bombing (2013). Use Single Command when only one agency is involved.',
              difficulty: 'hard',
              xp: 180
            },
            {
              id: 'mt_c4_q2',
              type: 'scenario',
              narrative: 'A report comes in that a hostage is showing signs of diabetic shock. The hostage-taker is willing to allow a physician to enter.',
              q: 'What is the role of a TMP (Tactical Medical Provider) in this situation?',
              o: [
                'Enter unconditionally to treat the patient',
                'Coordinate with the negotiation team to provide medical supplies + remote medical instructions',
                'Refuse entry — safety not secured',
                'Request helicopter evacuation of the patient'
              ],
              a: 1,
              exp: 'Barricade Medicine: TMP supports the negotiation team by ① providing medical information ② using medical supplies as a negotiating card ③ remotely directing hostages via radio/phone on first aid (blood glucose check, sugar administration). Reckless entry endangers both the TMP and the hostages.',
              difficulty: 'hard',
              xp: 200
            },
            {
              id: 'mt_c4_q3',
              type: 'quiz',
              q: 'What is the most appropriate criterion for activating HICS (Hospital Incident Command System)?',
              o: [
                'Patient volume increases 10% above normal',
                'A mass casualty event exceeding the hospital\'s normal operating capacity',
                'One physician absent from ER duty',
                'Only reports of an incident occurring near the hospital'
              ],
              a: 1,
              exp: 'HICS activation: Events exceeding the hospital\'s normal operating capacity — MCI patient surge, disaster declaration, anticipated CBRNE contaminated patients, etc. Upon HICS activation: ED expansion, emergency staff mobilization, emergency supply procurement, accelerated discharges to secure beds.',
              difficulty: 'hard',
              xp: 180
            },
            {
              id: 'mt_c4_q4',
              type: 'scenario',
              narrative: 'HICS has been activated at the hospital. The ER is at saturation.',
              q: 'What is the most effective immediate bed-acquisition strategy following HICS activation?',
              o: [
                'Send home non-admitted outpatients + early discharge of stable surgical patients',
                'Immediately construct a new hospital building',
                'Transfer patients to hospitals in other cities',
                'Close the ER entrance'
              ],
              a: 0,
              exp: 'HICS surge capacity: 1) Discharge non-admitted outpatients 2) Early discharge of stable surgical patients 3) Transfer long-term patients to nursing facilities 4) Convert corridors/auditoriums to temporary treatment areas. This is called "expanding surge capacity."',
              difficulty: 'hard',
              xp: 200
            },
            {
              id: 'mt_c4_q5',
              type: 'quiz',
              q: 'Why is it critically important to recognize the risk of a Secondary Device at a bombing scene?',
              o: [
                'Because secondary explosions are smaller and therefore safe',
                'Terrorists use them to lure responders in order to inflict greater casualties',
                'Because fire trucks can trigger secondary explosions',
                'Because paramedics are explosives experts'
              ],
              a: 1,
              exp: 'Secondary Device tactic: Use initial explosion to lure responders to the scene, then detonate secondary device to maximize responder casualties. The Boston Marathon (2013) also used two explosives detonated in sequence. EOD (Explosive Ordnance Disposal) safety clearance is mandatory before scene entry.',
              difficulty: 'expert',
              xp: 220
            }
          ],
          successNarrative: 'The Unified Command post has stabilized.\nGlucose was delivered to the diabetic hostage, and negotiations are progressing.\nTreatment at the blast site continues.\nBut the greatest challenge still remains...',
          failNarrative: 'Command confusion caused inter-team conflict. The hostage situation deteriorated and medical resources were misallocated.',
          rewards: { xp: 900, items: ['hint', 'medkit', 'shield'], levelUp: 'Advanced Specialist → Senior Expert' }
        },
        {
          id: 'mt_ch5',
          title: 'Chapter 5: Hospital Surge Response',
          subtitle: 'Simultaneous CBRNE + Hundreds of Trauma Patients Arriving',
          levelTitle: 'Senior Expert',
          cinematic: {
            text: '6:15 PM. Alarms sound at ERs across Seoul.\n\nSeoul Olympic Hospital ER — 120 blast trauma patients waiting.\nSeverance ER — 80 chemical exposure patients.\nAsan Medical Center — 40 suspected radiological contamination patients.\n\nThe medical surge has begun.\nNational Disaster Medical System — DMAT deployed nationwide.',
            roleDialogue: {
              paramedic: '"Tired from shuttling back and forth between the scene and the hospital. But we can\'t stop."',
              emergency_doc: '"The ER is a war zone. One more round of START triage — who needs the OR right now."',
              hazmat: '"Need to set up a temporary decon zone outside the hospital. Contaminated patients must not enter the hospital interior."',
              commander: '"Assess nationwide DMAT resource status. Coordinate helicopter transport routes. Confirm patient capacity per hospital."',
              swat_medic: '"The hostage situation is resolved. Now I can devote myself to casualty medical support."',
              nurse: '"Re-check the triage tags. Some patients\' conditions have changed."'
            }
          },
          briefing: {
            situation: 'Nationwide ER surge. Combined influx of CBRNE and trauma patients.',
            hazards: ['In-hospital contamination risk', 'Medical staff exhaustion', 'Blood/medical supply shortage'],
            resources: ['5 DMAT teams', '1 military field hospital', '2 temporary trauma centers'],
            objective: 'Nationwide hospital surge response, patient distribution, DMAT coordination'
          },
          challenges: [
            {
              id: 'mt_c5_q1',
              type: 'quiz',
              q: 'Which best describes the primary mission of a DMAT (Disaster Medical Assistance Team)?',
              o: [
                'Support military operations at disaster sites',
                'Field emergency medical support + hospital surge support',
                'Radiological decontamination',
                'Insurance processing and administrative work'
              ],
              a: 1,
              exp: 'DMAT (Disaster Medical Assistance Team): A specialized medical team deployed to disaster sites and hospital surge situations. Provides field emergency care, operates temporary medical stations, and supports overburdened hospitals. Nationwide deployment system for multi-site disasters.',
              difficulty: 'medium',
              xp: 160
            },
            {
              id: 'mt_c5_q2',
              type: 'scenario',
              narrative: '50 patients waiting in the ER. Only 3 physicians. Performing START triage.',
              q: 'Which of the following patients should be classified as "Immediate (RED)" in START?',
              o: [
                'Respiratory rate 25, CRT 2 sec, follows simple commands, lower extremity fracture',
                'No breathing, apneic even after airway opening, no pulse',
                'Respiratory rate 35, CRT 4 sec, cannot follow commands, abdominal penetrating injury',
                'Ambulatory, minor laceration, alert and oriented'
              ],
              a: 2,
              exp: 'START classification: A) YELLOW — RR 25 (normal), CRT 2 sec (normal), follows commands / B) BLACK — apneic even after airway opening / C) RED — RR 35 (>30), CRT 4 sec (>2 sec), cannot follow commands → Immediate / D) GREEN — ambulatory. Correct answer: C',
              difficulty: 'hard',
              xp: 200
            },
            {
              id: 'mt_c5_q3',
              type: 'quiz',
              q: 'A chemically contaminated patient arrives at the hospital without decontamination. What is the first action to take?',
              o: [
                'Immediately begin ER treatment',
                'Perform clothing removal and decontamination outside the hospital immediately, then admit',
                'Transfer to another hospital',
                'Hand off to family'
              ],
              a: 1,
              exp: 'Preventing contaminated patients from entering the hospital: clothing removal outside (removing clothing = eliminates 80-90% of contamination) + water rinse. During the 1995 Tokyo subway sarin attack, undecontaminated patients arrived at hospitals, causing secondary contamination of medical staff. HICS: establishing an external decon line is mandatory.',
              difficulty: 'hard',
              xp: 180
            },
            {
              id: 'mt_c5_q4',
              type: 'scenario',
              narrative: 'Type O blood is depleted at the blood bank. 10 patients with severe hemorrhagic trauma are waiting.',
              q: 'What is the best course of action in this situation?',
              o: [
                'Cancel surgery for all hemorrhaging patients',
                'Maximize hemorrhage control + urgent blood bank request + consider TXA administration',
                'Ask patient families to donate blood',
                'Replace everything with normal saline'
              ],
              a: 1,
              exp: 'Strategy when blood is depleted: 1) Maximize hemorrhage control (tourniquet, hemostatic gauze, REBOA) 2) Urgent blood bank request 3) Administer tranexamic acid (TXA) — reduces mortality and transfusion requirement (1000mg within 3 hours post-trauma) 4) Permissive hypotension management (maintain systolic 80-90mmHg). Normal saline cannot replace blood.',
              difficulty: 'expert',
              xp: 220
            },
            {
              id: 'mt_c5_q5',
              type: 'quiz',
              q: 'When treating a radiologically contaminated patient, why should life-threatening trauma care take priority over radiological decontamination?',
              o: [
                'Radiological decontamination must always come first',
                'External radiological contamination rarely poses an immediate life threat, whereas traumatic hemorrhage can be immediately fatal',
                'Radiological decontamination has no benefit if done later',
                'Wearing protective gear is more important than decontamination'
              ],
              a: 1,
              exp: 'Principle for treating radiologically contaminated patients: "Life-threatening trauma care first → clothing removal + decontamination." External radiological contamination rarely causes an immediate life threat, but open hemorrhage can be fatal within minutes. MARCH → clothing removal + decontamination sequence.',
              difficulty: 'expert',
              xp: 240
            }
          ],
          successNarrative: 'The nationwide hospital network weathered the surge.\nDMAT teams were deployed to exactly the right places, and patient distribution was successfully managed.\nNow only the final gate remains...',
          failNarrative: 'Hospital resources were depleted. Three surgical patients ran out of time.',
          rewards: { xp: 1000, items: ['hint', 'medkit', 'timefreeze', 'doubleXP'], levelUp: 'Senior Expert → Master Preparation' }
        },
        {
          id: 'mt_ch6',
          title: 'Chapter 6: Final Showdown — Olympic Disaster Comprehensive Report',
          subtitle: '🏆 Final Boss Chapter — Everything Is Tested',
          levelTitle: 'Master',
          isBossChapter: true,
          cinematic: {
            text: 'Midnight. Seoul Olympic Main Stadium.\n\nAll sites are under control.\nExplosion — contained.\nChemical — decontamination complete.\nRadiation — zones established.\nHostages — released.\n\nBut one final threat remains.\nThe terrorists\' ultimatum:\n"If demands are not met within 48 hours, we will release a biological agent into the greater Seoul water supply."\n\nAll of your knowledge is needed now.',
            roleDialogue: {
              paramedic: '"All this experience has brought us here. One last thing — we need to stop the biological threat too."',
              emergency_doc: '"If a biological agent is released into the water supply, infections will grow exponentially. We need to prepare the POD system."',
              hazmat: '"Water supply contamination = all decontamination becomes meaningless. Deploy water monitoring teams immediately."',
              commander: '"This is not the end but the beginning. Real disaster medicine is about building post-event response systems."',
              swat_medic: '"Special forces are already deployed. We\'ll neutralize the terrorists. You prepare the medical response."',
              nurse: '"Preparing to activate the POD system. Confirming antibiotic stockpile. Vaccination teams on standby."'
            }
          },
          briefing: {
            situation: 'Biological agent water supply contamination threat. Suspected anthrax or botulinum toxin.',
            hazards: ['Millions affected if water supply contaminated', 'Biological agent characteristics unconfirmed', 'Social panic and disruption'],
            resources: ['CDC partner laboratory', '50 potential POD locations', 'National antibiotic stockpile'],
            objective: 'Biological agent identification, POD system preparation, crisis communication, final comprehensive briefing'
          },
          challenges: [
            {
              id: 'mt_c6_q1',
              type: 'quiz',
              q: 'When evaluating the possibility of "anthrax" use in a water supply contamination threat, what is the most important characteristic?',
              o: [
                'Person-to-person transmission possible — immediate isolation required',
                'No person-to-person transmission — but lethal if inhaled, extremely resistant in spore form',
                'Easily destroyed by heat — removable by water treatment',
                'Symptoms appear immediately — death within 1 hour'
              ],
              a: 1,
              exp: 'Anthrax key facts: 1) No person-to-person transmission 2) Extremely resistant in spore form 3) Inhalational form is most lethal 4) Incubation period 1-5 days (up to 60 days) 5) Treatment: ciprofloxacin or doxycycline for 60 days. 2001 Amerithrax — letter anthrax spores infected 22, killed 5, cost $1 billion.',
              difficulty: 'expert',
              xp: 250
            },
            {
              id: 'mt_c6_q2',
              type: 'scenario',
              narrative: 'Public panic following the water supply contamination threat. Thousands of citizens flooded the ER. Most have no evidence of actual exposure.',
              q: 'In a POD (Points of Dispensing) system, what should be checked first when distributing prophylactic antibiotics?',
              o: [
                'Confirm citizen name and national ID number',
                'Assess actual exposure risk + confirm allergies + check contraindications',
                'Distribute unconditionally to all citizens',
                'Distribute only after confirming physician prescription'
              ],
              a: 1,
              exp: 'POD system antibiotic distribution: 1) Assess exposure risk (prioritize residents of actually contaminated areas) 2) Confirm allergies (cipro/penicillin) 3) Check contraindications (pregnancy, pediatric dose limits) 4) Educate on duration (anthrax PEP: 60 days). Prevent unnecessary antibiotic overuse. POD types: Open POD, Closed POD, Drive-Through POD, Mobile POD.',
              difficulty: 'expert',
              xp: 280
            },
            {
              id: 'mt_c6_q3',
              type: 'quiz',
              q: 'In a complex CBRNE terror attack, which correctly lists the 4 links of the "Chain of Chemical Survival" in order?',
              o: [
                'Decontamination → PPE → Antidote → BLS',
                'PPE → Decontamination → Antidote → BLS',
                'Antidote → PPE → Decontamination → BLS',
                'BLS → PPE → Decontamination → Antidote'
              ],
              a: 1,
              exp: 'Chain of Chemical Survival 4-link sequence: 1) PPE → 2) Decontamination → 3) Antidote therapy → 4) BLS (basic supportive care). Barelli et al., European Journal of Emergency Medicine 2008. Cannot decontaminate without PPE; administering antidote without decontamination is dangerous.',
              difficulty: 'expert',
              xp: 300
            },
            {
              id: 'mt_c6_q4',
              type: 'scenario',
              narrative: 'Final briefing. Today: explosion, chemical terror, radiological RDD, hostages, and biological threat all occurred simultaneously.',
              q: 'What are the long-term tasks of the "Recovery" phase in post-CBRNE multi-hazard disaster response?',
              o: [
                'Block media coverage',
                'Mental health support + long-term follow-up + system improvement + lesson documentation',
                'Award medical personnel involved',
                'Immediate site restoration'
              ],
              a: 1,
              exp: 'Disaster Recovery phase essentials: 1) Mental health support (survivor/responder PTSD management) 2) Long-term follow-up (cancer risk in radiation-exposed, neurological damage in chemical-exposed) 3) System improvement (command structure, resource allocation lessons) 4) Lesson documentation. CTM disaster cycle 4 phases: Mitigation → Preparedness → Response → Recovery.',
              difficulty: 'expert',
              xp: 320
            },
            {
              id: 'mt_c6_q5',
              type: 'scenario',
              narrative: '🏆 Final Master Question. Boston 2013, Tokyo 1995, Moscow 2002, Munich 1972 — the lessons of history have become today\'s reality.',
              q: 'In disaster medicine, what is the most appropriate practice of the principle "learn from historical cases"?',
              o: [
                'Disasters are one-time events, so the future cannot be predicted',
                'Better prepare for the next disaster through case studies + simulation training + protocol updates',
                'Only experienced physicians can handle disaster response',
                'Disaster preparedness is the government\'s responsibility, so individual medical personnel preparation is unnecessary'
              ],
              a: 1,
              exp: 'Core philosophy of disaster medicine: every disaster leaves a lesson. Tokyo sarin (1995) → established chemical terror protocols. 9/11 (2001) → standardized NIMS/ICS. Boston (2013) → "Stop the Bleed" public education. Columbine (1999) → active attacker response paradigm. "Low probability, High Impact — do not confuse probability with possibility (Gregory Ciottone)."',
              difficulty: 'master',
              xp: 500
            }
          ],
          successNarrative: '🎊 Mission Complete.\n\n5:00 AM. The Seoul sky begins to brighten.\n\nThe dust settles over the blast site,\nthe decontamination line quietly stands down,\nthe radiation meter alarms fall silent.\n\nYou did it.\n\nExplosion, chemical, radiation, hostages, biological threat —\nin the worst multi-vector terror attack in history,\nyou saved hundreds of lives.\n\nThis is the essence of disaster medicine:\nto create order amid chaos,\nto maintain systems even in the grip of fear,\nand to never give up until the very last moment.\n\nYou are now a true Master.\n\n🏅 Olympic Disaster Response Master Achieved',
          failNarrative: 'You fell at the final gate. But this failure forges a stronger disaster responder. Try again.',
          rewards: {
            xp: 2000,
            items: ['hint', 'medkit', 'timefreeze', 'shield', 'doubleXP'],
            levelUp: 'Master Achieved',
            achievement: '🏆 Olympic Disaster Response Master',
            unlockTitle: 'Regional Disaster Overall Commander'
          }
        }
      ]  // end campaigns[5].chapters
    }   // end campaigns[5] — olympic_terror
  ],    // end campaigns array

  // ==========================================
  // MILESTONES — Growth Stages
  // ==========================================
  milestones: [
    { chapter: 1, title: 'Trainee', rank: 'Trainee', minScore: 0,
      description: 'Beginning to learn basic concepts. Many hints, low difficulty.',
      color: '#95a5a6' },
    { chapter: 2, title: 'Junior Responder', rank: 'Junior Responder', minScore: 500,
      description: 'Beginning to apply basic protocols. Medium difficulty.',
      color: '#27ae60' },
    { chapter: 3, title: 'Intermediate Specialist', rank: 'Intermediate', minScore: 1500,
      description: 'Responding to complex scenarios. Hints reduced.',
      color: '#2980b9' },
    { chapter: 4, title: 'Advanced Specialist', rank: 'Advanced', minScore: 3000,
      description: 'Advanced decision-making. Increased time pressure.',
      color: '#8e44ad' },
    { chapter: 5, title: 'Senior Expert', rank: 'Senior Expert', minScore: 5000,
      description: 'Expert-level decisions. Complex scenarios.',
      color: '#e67e22' },
    { chapter: 6, title: 'Master', rank: 'Master', minScore: 8000,
      description: 'Final boss chapter. Comprehensive test of all knowledge.',
      color: '#e74c3c' }
  ],

  // ==========================================
  // ITEMS — Items/Power-ups
  // ==========================================
  items: [
    {
      id: 'hint',
      name: '💡 Hint',
      desc: 'Eliminates one wrong answer',
      uses: 1,
      rarity: 'common',
      flavor: '"Experience creates wisdom. A single hint can save a life."'
    },
    {
      id: 'medkit',
      name: '🩹 Med Kit',
      desc: 'Restores 25% HP',
      uses: 1,
      rarity: 'common',
      flavor: '"Tourniquet, bandages, epinephrine. Life fits inside a small kit."'
    },
    {
      id: 'timefreeze',
      name: '⏸️ Time Freeze',
      desc: 'Extends timer by 10 seconds',
      uses: 1,
      rarity: 'uncommon',
      flavor: '"The golden hour does not wait. But today it will."'
    },
    {
      id: 'shield',
      name: '🛡️ Protective Suit',
      desc: 'Negates HP loss from one wrong answer',
      uses: 1,
      rarity: 'rare',
      flavor: '"Just as a Level A protective suit shields you at a chemical scene, this shield protects you."'
    },
    {
      id: 'doubleXP',
      name: '⭐ Double XP',
      desc: 'Double XP on next 3 questions',
      uses: 1,
      rarity: 'rare',
      flavor: '"Focus doubles your experience."'
    },
    {
      id: 'antidote',
      name: '💉 Antidote',
      desc: 'Removes toxic effects and restores 15% HP',
      uses: 1,
      rarity: 'uncommon',
      flavor: '"Atropine. The specific antidote for nerve agents. Time is life."'
    },
    {
      id: 'decon_kit',
      name: '🚿 Decon Kit',
      desc: 'Removes contamination penalty + restores 20% HP',
      uses: 1,
      rarity: 'rare',
      flavor: '"Remove clothing + 15-second rinse. 90% of contamination eliminated."'
    },
    {
      id: 'radio',
      name: '📻 Radio',
      desc: 'Provides role-specific bonus hint on next question',
      uses: 1,
      rarity: 'uncommon',
      flavor: '"Connected to the field command post. Knowing when to call for help is also a professional skill."'
    }
  ],

  // ==========================================
  // ACHIEVEMENTS — Achievement System
  // ==========================================
  achievements: [
    { id: 'first_blood', name: 'First Deployment', desc: 'Complete the first chapter', icon: '🏅', xpBonus: 100 },
    { id: 'fire_master', name: '🔥 Fire Master', desc: 'Complete the Urban High-Rise Fire campaign', icon: '🏆', xpBonus: 500 },
    { id: 'chem_expert', name: '☣️ Chemical Terror Expert', desc: 'Complete the Chemical Terror Attack campaign', icon: '🏆', xpBonus: 500 },
    { id: 'bio_specialist', name: '🦠 Biological Disaster Specialist', desc: 'Complete the Biological Terror Attack campaign', icon: '🏆', xpBonus: 500 },
    { id: 'rad_guardian', name: '☢️ Radiation Guardian', desc: 'Complete the Radiological Disaster campaign', icon: '🏆', xpBonus: 500 },
    { id: 'swat_medic', name: '🎯 Tactical Medic Master', desc: 'Complete the Active Shooter Response campaign', icon: '🏆', xpBonus: 500 },
    { id: 'olympic_hero', name: '🏅 Olympic Disaster Hero', desc: 'Complete the Multi-Vector Terror Attack campaign', icon: '👑', xpBonus: 2000 },
    { id: 'perfect_score', name: 'Perfect Response', desc: 'Complete a chapter with no wrong answers', icon: '⭐', xpBonus: 200 },
    { id: 'speed_demon', name: 'Golden Hour Guardian', desc: 'Answer all timed questions with 5+ seconds remaining', icon: '⚡', xpBonus: 300 },
    { id: 'all_campaigns', name: 'Disaster Medicine Master', desc: 'Complete all 6 campaigns', icon: '🌟', xpBonus: 5000 }
  ],

  // ==========================================
  // METADATA
  // ==========================================
  meta: {
    version: '1.0.0',
    totalCampaigns: 6,
    totalChapters: 36,
    estimatedTotalTime: '4-5 hours',
    medicalSources: [
      'CIREcourse CBRNE Lecture Materials (Heejun Shin MD, MS, FIBODM)',
      'Tactical Medicine Textbook (Shin Heejun, Soonchunhyang University Bucheon Hospital)',
      'Counter-Terrorism Medicine (Shin Heejun, 2023)',
      'START Triage Protocol',
      'TCCC/TECC Guidelines',
      'Hartford Consensus — THREAT Protocol',
      'NIMS/ICS Framework',
      'CDC Bioterrorism Agent Classification (1999)',
      'FEMA Nuclear Detonation Planning Guidance (2023)',
      'Barelli et al., European Journal of Emergency Medicine 2008',
      'Ciottone GR, N Engl J Med 2018'
    ],
    historicalEvents: [
      '1995 Tokyo Subway Sarin Attack (Aum Shinrikyo)',
      '2001 Amerithrax Anthrax Letter Attacks',
      '2002 Moscow Theater Hostage Crisis',
      '2013 Boston Marathon Bombing',
      '1999 Columbine High School Shooting',
      '2022 Itaewon Crowd Crush',
      '2017 Kim Jong-nam VX Assassination'
    ]
  }

};  // END window.CAMPAIGN_MODE
