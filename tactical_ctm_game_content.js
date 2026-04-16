// ============================================
// TACTICAL / COUNTER-TERRORISM MEDICINE
// Game Content — RPG Educational Module
// Tactical Medicine & Counter-Terrorism Medicine Game Content
//
// Source:
//   Heejun Shin, 『Tactical Medicine』 (2026, 1261p)
//   Heejun Shin, 'Counter-Terrorism Medicine' (2023, 467p)
// ============================================

// ============================================
// SECTION 1: TACTICAL QUIZ QUESTIONS (60+)
// ============================================

const tacticalQuestions = [

  // ─── TCCC ───────────────────────────────────
  {
    q: "Which of the following correctly lists the 3 phases of TCCC (Tactical Combat Casualty Care) in order?",
    o: [
      "Care Under Fire → Tactical Field Care → Tactical Evacuation Care",
      "Tactical Field Care → Care Under Fire → Tactical Evacuation Care",
      "Tactical Evacuation Care → Tactical Field Care → Care Under Fire",
      "Care Under Fire → Tactical Evacuation Care → Tactical Field Care"
    ],
    a: 0,
    exp: "TCCC consists of 3 phases: ① Care Under Fire (CUF) → ② Tactical Field Care (TFC) → ③ Tactical Evacuation Care (TACEVAC). The scope of care in each phase differs based on the level of threat.",
    diff: "normal",
    category: "tccc"
  },
  {
    q: "In the TCCC phase 'Care Under Fire,' what is the correct action for a wounded team member?",
    o: [
      "Immediately rush over and apply the MARCH protocol",
      "The wounded member self-applies a tourniquet and continues engaging the threat",
      "Stop all engagement and focus entirely on treating the casualty",
      "Prioritize airway management first"
    ],
    a: 1,
    exp: "In the Care Under Fire phase, 'Self-Aid' is the top priority. The wounded member self-applies a tourniquet, moves to cover, and continues engaging. Threat elimination takes priority over medical care — teammates are expected to bypass the casualty to neutralize the threat first.",
    diff: "normal",
    category: "tccc"
  },
  {
    q: "Which of the following is NOT one of the top 3 preventable causes of death in TCCC?",
    o: [
      "Controllable extremity hemorrhage",
      "Tension pneumothorax",
      "Airway obstruction",
      "Hypothermia"
    ],
    a: 3,
    exp: "The 3 preventable causes of death in TCCC are: ① controllable extremity hemorrhage, ② tension pneumothorax, ③ airway obstruction. Hypothermia is the 'H' in MARCH and an important item, but it is not among the top 3 preventable causes of death.",
    diff: "normal",
    category: "tccc"
  },
  {
    q: "In what year did the Republic of Korea Armed Forces officially adopt TCCC as doctrine and expand it across all branches?",
    o: ["2018", "2019", "2021", "2023"],
    a: 2,
    exp: "In 2021, the Republic of Korea Armed Forces Medical Command officially adopted K-TCCC — a version of the U.S. TCCC guidelines adapted for Korean military conditions — and expanded its distribution across all branches.",
    diff: "normal",
    category: "tccc"
  },
  {
    q: "Which statement best describes the environment of the TCCC 'Tactical Field Care (TFC)' phase?",
    o: [
      "A hot zone with active ongoing gunfire",
      "A warm zone with limited or intermittent threat",
      "A cold zone where safety is fully secured",
      "An environment identical to a hospital emergency department"
    ],
    a: 1,
    exp: "Tactical Field Care (TFC) corresponds to the 'Warm Zone.' The threat is limited or intermittent, allowing application of the MARCH protocol and more extensive care. Unlike Care Under Fire (hot zone), a more thorough assessment and treatment can be performed.",
    diff: "normal",
    category: "tccc"
  },
  {
    q: "Which of the following is NOT a primary role of TEMS (Tactical Emergency Medical Support)?",
    o: [
      "Treating injuries of SWAT team members",
      "Treating civilian casualties",
      "Protecting the life of a suspect",
      "Issuing law enforcement orders as an on-scene commander"
    ],
    a: 3,
    exp: "TEMS (Tactical Emergency Medical Support) protects the lives of team members, civilians, and even suspects. However, issuing law enforcement orders is the role of the police commander. The TMP (Tactical Medical Provider) exercises medical authority only within the 'Dual Command' structure.",
    diff: "normal",
    category: "tccc"
  },

  // ─── TECC ───────────────────────────────────
  {
    q: "Which statement most accurately describes the relationship between TECC (Tactical Emergency Casualty Care) and TCCC?",
    o: [
      "TECC is the military version of TCCC, reserved for special forces",
      "TECC is the civilian version of TCCC, applied in urban terror and law enforcement environments",
      "TCCC and TECC are identical protocols",
      "TECC is an older system developed before TCCC"
    ],
    a: 1,
    exp: "TECC (Tactical Emergency Casualty Care) is the civilian version of TCCC. While TCCC is specialized for military combat environments, TECC is applied in civilian tactical environments such as urban terrorism, law enforcement (SWAT operations), and mass shooting events.",
    diff: "normal",
    category: "tecc"
  },
  {
    q: "Which TCCC phase corresponds to the TECC phase 'Direct Threat Care'?",
    o: [
      "Tactical Evacuation Care",
      "Tactical Field Care",
      "Care Under Fire",
      "Pre-Hospital Care"
    ],
    a: 2,
    exp: "TECC's 'Direct Threat Care' corresponds to TCCC's 'Care Under Fire (CUF).' The main elements are self-care, tourniquet application, and taking cover under active threat.",
    diff: "normal",
    category: "tecc"
  },
  {
    q: "What is the core protocol applied during the TECC 'Indirect Threat Care' phase?",
    o: ["STOP protocol", "MARCH protocol", "ABCDE protocol", "SALT triage"],
    a: 1,
    exp: "TECC's 'Indirect Threat Care' corresponds to TCCC's Tactical Field Care. In this phase, the MARCH protocol (Massive hemorrhage → Airway → Respiration → Circulation → Hypothermia prevention) is applied for more comprehensive care.",
    diff: "normal",
    category: "tecc"
  },

  // ─── MARCH ──────────────────────────────────
  {
    q: "Which of the following is the correct alphabetical sequence for the MARCH protocol?",
    o: [
      "Massive Hemorrhage → Airway → Respiration → Circulation → Hypothermia",
      "Medical → Airway → Resuscitation → Circulation → Hypothermia",
      "Massive Hemorrhage → Assessment → Respiration → Cardiology → Hypothermia",
      "Movement → Airway → Respiration → Circulation → Head injury"
    ],
    a: 0,
    exp: "MARCH protocol: M (Massive Hemorrhage Control) → A (Airway) → R (Respiration) → C (Circulation) → H (Hypothermia Prevention). The key is controlling life-threatening hemorrhage before airway management.",
    diff: "normal",
    category: "tccc"
  },
  {
    q: "Why does 'M (Massive Hemorrhage)' precede 'A (Airway)' in the MARCH protocol?",
    o: [
      "Airway management can always be delayed",
      "The leading preventable cause of death in combat/terrorist situations is exsanguination",
      "Hemorrhage control is simpler than airway management",
      "M stands for 'Military' and is unrelated to sequence"
    ],
    a: 1,
    exp: "The leading preventable cause of death in combat/terrorist situations is exsanguination. Extremity hemorrhage in particular can be controlled with rapid tourniquet application, so MARCH places hemorrhage control before airway management. This is a key difference from the conventional ABCDE framework.",
    diff: "hard",
    category: "tccc"
  },
  {
    q: "Which of the following is NOT part of the 'Triad of Death' in MARCH's 'H (Hypothermia)' element?",
    o: ["Hypothermia", "Coagulopathy", "Metabolic Acidosis", "Sepsis"],
    a: 3,
    exp: "The Triad of Death consists of: ① Hypothermia, ② Coagulopathy, ③ Metabolic Acidosis. These three form a vicious cycle that dramatically raises mortality in severe trauma patients. Sepsis is not included.",
    diff: "hard",
    category: "tccc"
  },

  // ─── HEMORRHAGE CONTROL ─────────────────────
  {
    q: "In cases of amputation or severe extremity hemorrhage, how many cm above the wound should a tourniquet be applied?",
    o: ["1-3 cm", "5-10 cm", "15-20 cm", "20-30 cm"],
    a: 1,
    exp: "A tourniquet should be applied approximately 5-10 cm above the wound site. Applying it too close is ineffective; too far causes unnecessary tissue damage. Tighten until bleeding stops and always record the time of application.",
    diff: "normal",
    category: "hemorrhage_control"
  },
  {
    q: "What is the most important action that must be taken when applying a tourniquet?",
    o: [
      "Release every 30 minutes to check circulation",
      "Always record the time of application",
      "Use only when there is no fracture",
      "Remove immediately after application to disinfect the wound"
    ],
    a: 1,
    exp: "The 'Time Applied' must always be recorded when applying a tourniquet. As application time increases, the risk of tissue damage grows — this information is critical for subsequent treatment decisions. Periodically releasing the tourniquet to check circulation is generally not recommended.",
    diff: "normal",
    category: "hemorrhage_control"
  },
  {
    q: "In cases of severe hemorrhage such as proximal thigh amputation, how many tourniquets may be applied?",
    o: ["Only 1", "Up to 2", "Up to 3", "As many as needed"],
    a: 1,
    exp: "In cases such as proximal thigh amputation where a single tourniquet cannot control hemorrhage, two tourniquets may be applied side by side. This supplements compression pressure in the thick proximal muscle tissue.",
    diff: "hard",
    category: "hemorrhage_control"
  },
  {
    q: "Which statement about Tranexamic Acid (TXA) is correct?",
    o: [
      "It must be administered within 6 hours of injury",
      "Give an initial 1,000 mg IV over 10 minutes, followed by 1,000 mg over 8 hours",
      "It is included in the official scope of practice for Level 1 paramedics in Korea",
      "It is a topical hemostatic agent applied directly to the wound"
    ],
    a: 1,
    exp: "TXA dosing: initial 1,000 mg IV over 10 minutes → followed by 1,000 mg over 8 hours. Must be given within 3 hours of injury (contraindicated after 3 hours). Reduces mortality and transfusion requirements. In Korea, TXA administration is not currently included in the official scope of practice for Level 1 paramedics — a legal limitation.",
    diff: "hard",
    category: "hemorrhage_control"
  },
  {
    q: "What is junctional hemorrhage?",
    o: [
      "Hemorrhage at the junction of two blood vessels",
      "Hemorrhage at junctions where extremities meet the torso, such as the axilla or groin",
      "Hemorrhage involving simultaneous arterial and venous injury",
      "Internal organ hemorrhage"
    ],
    a: 1,
    exp: "Junctional hemorrhage is bleeding at junctions where extremities meet the torso — such as the axilla or groin — where a conventional tourniquet cannot be applied. Specialized devices such as the SAM Junctional Tourniquet (SJT), Combat Ready Clamp (CRoC), and JETT are used for compression.",
    diff: "hard",
    category: "hemorrhage_control"
  },
  {
    q: "What active ingredient is found in hemostatic gauze used for wound packing?",
    o: [
      "Povidone-iodine, chlorhexidine",
      "Kaolin or Chitosan",
      "Epinephrine, thrombin",
      "Antibiotics, steroids"
    ],
    a: 1,
    exp: "Hemostatic gauze (QuikClot, HemCon, etc.) contains kaolin or chitosan to promote blood clotting. Pack deeply into the wound and maintain strong direct pressure for at least 3 minutes. Used for junctional or torso hemorrhage not controllable with a tourniquet.",
    diff: "normal",
    category: "hemorrhage_control"
  },
  {
    q: "Via which vessel is REBOA (Resuscitative Endovascular Balloon Occlusion of the Aorta) inserted?",
    o: ["Internal jugular vein", "Subclavian vein", "Femoral artery", "Radial artery"],
    a: 2,
    exp: "REBOA is inserted via the femoral artery, with the balloon catheter inflated in the aorta to temporarily occlude blood flow proximal to the hemorrhage site. Applied in Zone 1 (below the diaphragm) or Zone 3 (below the renal arteries), it serves as a 'bridge' to keep abdominal/pelvic hemorrhage patients alive until reaching the operating room.",
    diff: "boss",
    category: "hemorrhage_control"
  },
  {
    q: "How much internal bleeding can result from an isolated femur fracture?",
    o: ["Up to 500 mL", "1-2 liters", "Up to 500 mL", "5 liters or more"],
    a: 1,
    exp: "An isolated femur fracture can cause 1-2 liters of internal bleeding; bilateral femur fractures can result in up to 3 liters of blood loss. This can lead to hypovolemic shock, requiring immediate traction splint application and fluid resuscitation.",
    diff: "normal",
    category: "hemorrhage_control"
  },
  {
    q: "What is the target systolic blood pressure in Permissive Hypotension management?",
    o: ["60-70 mmHg", "80-90 mmHg", "100-110 mmHg", "120-130 mmHg"],
    a: 1,
    exp: "The target systolic blood pressure in permissive hypotension is 80-90 mmHg. Raising blood pressure to normal levels can disrupt clots and re-initiate bleeding, so an intentionally low pressure is maintained. Exception: traumatic brain injury (TBI) patients require systolic BP >110 mmHg.",
    diff: "hard",
    category: "hemorrhage_control"
  },

  // ─── AIRWAY ─────────────────────────────────
  {
    q: "Why is an SGA-first strategy adopted for airway management in tactical environments?",
    o: [
      "Because SGA is always more effective than endotracheal intubation",
      "Because success rates are higher in time- and resource-limited environments",
      "Because SGA has no contraindications for any age group",
      "Because endotracheal intubation has been prohibited as too dangerous"
    ],
    a: 1,
    exp: "In tactical environments, the 'SGA-first strategy' — prioritizing supraglottic airway devices (SGA, LMA, i-gel, etc.) due to their high success rates in time- and resource-limited conditions — is an international trend. In Korean 119 EMS statistics from 2017-2018, endotracheal intubation accounted for only 11.3% (2,428 of 21,574 cases), with the remainder using SGA.",
    diff: "normal",
    category: "airway"
  },
  {
    q: "Among RSI (Rapid Sequence Intubation) induction agents, which is the most hemodynamically stable and preferred for head injury patients?",
    o: ["Ketamine", "Midazolam", "Etomidate", "Propofol"],
    a: 2,
    exp: "Etomidate: 0.3 mg/kg IV, onset within 1 minute, duration 3-5 minutes. It is the most hemodynamically stable induction agent, preferred for head injury patients. Ketamine raises blood pressure, making it useful in hypotensive shock; midazolam may lower blood pressure.",
    diff: "hard",
    category: "airway"
  },
  {
    q: "Which RSI induction agent is most appropriate for a patient in hypotensive shock, and why?",
    o: [
      "Etomidate — does not lower blood pressure",
      "Ketamine — has bronchodilatory and vasopressor effects",
      "Midazolam — has the shortest duration of action",
      "Propofol — has the most powerful sedative effect"
    ],
    a: 1,
    exp: "Ketamine (1-2 mg/kg IV) has bronchodilatory and vasopressor effects, making it useful for patients in hypotensive shock. Its unique sympathomimetic property raises blood pressure, making it the preferred induction agent for traumatic shock patients requiring airway management.",
    diff: "hard",
    category: "airway"
  },
  {
    q: "What is the dose and key characteristic of succinylcholine used as a neuromuscular blocking agent in RSI?",
    o: [
      "0.5 mg/kg IV, safe due to long duration of action",
      "1.5 mg/kg IV, short duration allowing rapid recovery if intubation fails",
      "3 mg/kg IV, most powerful muscle relaxation",
      "0.1 mg/kg IV, no cardiac side effects"
    ],
    a: 1,
    exp: "Succinylcholine dose: 1.5 mg/kg IV, onset within 1 minute, duration 5-10 minutes. Its short duration is its greatest advantage — rapid recovery if intubation fails. Contraindicated in patients with hyperkalemia or a history of malignant hyperthermia.",
    diff: "boss",
    category: "airway"
  },
  {
    q: "What surgical airway procedure is used as the 'last resort' when RSI fails?",
    o: ["Tracheotomy", "Cricothyrotomy", "Nasotracheal intubation", "Retrograde intubation"],
    a: 1,
    exp: "In a Can't Intubate, Can't Ventilate (CICV) situation, cricothyrotomy is the last resort. Used when severe facial trauma prevents oral or nasal airway access. Under Korean law, this procedure is within the exclusive scope of physicians — paramedics cannot perform it.",
    diff: "normal",
    category: "airway"
  },
  {
    q: "In which situation is nasopharyngeal airway (NPA) insertion contraindicated?",
    o: [
      "A conscious patient with an intact gag reflex",
      "A patient with suspected basilar skull fracture",
      "A patient without nasal bleeding",
      "An adult patient"
    ],
    a: 1,
    exp: "NPA insertion is contraindicated when basilar skull fracture is suspected. There is risk that the airway device inserted through the nose could enter the intracranial space through the fractured skull base. For patients with a gag reflex, NPA is actually more suitable than OPA.",
    diff: "hard",
    category: "airway"
  },
  {
    q: "Where is the needle inserted for Needle Chest Decompression (NCD) to treat tension pneumothorax?",
    o: [
      "2nd intercostal space, midclavicular line (or 4th-5th ICS, anterior axillary line)",
      "3rd intercostal space, right sternal border",
      "Posterior inferior angle of the scapula",
      "1st intercostal space, below the clavicle"
    ],
    a: 0,
    exp: "Needle Chest Decompression: insert a 14-16 gauge needle at the 2nd intercostal space, midclavicular line, or the 4th-5th intercostal space, anterior axillary line. Tension pneumothorax is characterized by dyspnea, tracheal deviation, distended neck veins, absent breath sounds on auscultation, and hypotension.",
    diff: "hard",
    category: "airway"
  },

  // ─── ZONES OF CARE ──────────────────────────
  {
    q: "Which statement correctly describes the 'Hot Zone' among the 3 Zones of Care?",
    o: [
      "Full MARCH protocol can be applied",
      "The area where the Rescue Task Force (RTF) primarily operates",
      "A zone with active gunfire/threat where only minimal care (tourniquet application) is performed",
      "The area where DMAT operates the field medical station"
    ],
    a: 2,
    exp: "The Hot Zone is an area with active gunfire/threat. It corresponds to the Care Under Fire phase, where only minimal care (tourniquet application, self-care, taking cover) is possible. MARCH protocol is applied in the warm zone; DMAT operation and full treatment occur in the cold zone.",
    diff: "normal",
    category: "zones_of_care"
  },
  {
    q: "In which zone of care does the Rescue Task Force (RTF) operate?",
    o: ["Hot Zone", "Warm Zone", "Cold Zone", "Operates in all zones"],
    a: 1,
    exp: "The RTF (Rescue Task Force) is an integrated response team where, under police escort, medical personnel enter the 'Warm Zone' to rescue and treat casualties. Once police secure the warm zone, ballistic-equipped paramedics enter to provide advanced emergency care.",
    diff: "normal",
    category: "zones_of_care"
  },
  {
    q: "Which disaster response team operates in the Cold Zone?",
    o: ["SWAT team", "RTF (Rescue Task Force)", "DMAT (Disaster Medical Assistance Team)", "EOD (Explosive Ordnance Disposal)"],
    a: 2,
    exp: "DMAT (Disaster Medical Assistance Team) operates the field medical station in the safety-secured 'Cold Zone.' Full medical care and hospital transfer preparation take place here. Korean DMAT operates exclusively in the cold zone after the scene is secured.",
    diff: "normal",
    category: "zones_of_care"
  },
  {
    q: "What was the core problem with South Korea's disaster response revealed by the Itaewon disaster (2022)?",
    o: [
      "Shortage of medical equipment",
      "Failure of unified communication and command systems between police, fire, and local government",
      "Absolute shortage of paramedics",
      "Hospital emergency department overload"
    ],
    a: 1,
    exp: "The Itaewon disaster of 2022 highlighted the failure of unified communication and command systems between police, fire services, and local government. To address this, a mutual liaison officer exchange program between the National Police Agency and the National Fire Agency was implemented starting in 2023.",
    diff: "normal",
    category: "zones_of_care"
  },
  {
    q: "Under current South Korean law, what is the principle governing 119 EMS entry into the Hot Zone?",
    o: [
      "Entry is permitted freely at any time",
      "Entry is permitted only when accompanied by a physician",
      "Entry is principally restricted by law",
      "Entry is permitted with authorization from the fire chief"
    ],
    a: 2,
    exp: "Under current South Korean law, 119 EMS entry into the Hot Zone is principally restricted. This creates a structural limitation — loss of the golden hour. South Korea also lacks an official TMP (Tactical Medical Provider) designation, underscoring the need to introduce the RTF concept.",
    diff: "hard",
    category: "zones_of_care"
  },

  // ─── BLAST INJURIES ─────────────────────────
  {
    q: "Among the 4 types of blast injuries, what is the mechanism of 'Primary Blast Injury'?",
    o: [
      "Penetrating injury from shrapnel from the explosive casing or surrounding objects",
      "Blunt trauma from the body being thrown by the blast wind",
      "Barotrauma caused by the overpressure blast wave",
      "Burns from flame and gas"
    ],
    a: 2,
    exp: "Primary Blast Injury is barotrauma caused by the overpressure blast wave. Air-containing structures (tympanic membrane, lungs, bowel) are primarily injured, causing tympanic membrane rupture, pulmonary contusion, and bowel perforation. At 15-50 psi or more, tympanic membrane perforation occurs in over 50% of patients.",
    diff: "normal",
    category: "blast_injuries"
  },
  {
    q: "What was the most common injury type among casualties of the 2013 Boston Marathon bombing?",
    o: [
      "Head injuries and concussions",
      "Burns and inhalation injuries",
      "Lower extremity injuries and traumatic amputations from shrapnel",
      "Penetrating chest injuries"
    ],
    a: 2,
    exp: "In the 2013 Boston Marathon bombing (3 killed, 260+ injured), the majority of injuries were secondary blast injuries — lower extremity injuries and traumatic amputations from shrapnel. Bystanders and off-duty medical personnel improvised tourniquets on scene to control massive hemorrhage, which was decisive in improving survival.",
    diff: "normal",
    category: "blast_injuries"
  },
  {
    q: "What is the correct principle regarding the 'secondary device' hazard in blast scene response?",
    o: [
      "The scene is safe after 5 minutes following the first explosion",
      "EMS personnel should immediately enter the scene to rescue casualties",
      "Terrorists may lure responders with an initial blast before triggering a secondary device — enter only after EOD safety clearance",
      "Only police need to verify secondary device hazards"
    ],
    a: 2,
    exp: "Terrorists use the tactic of luring responders with an initial blast, then detonating a secondary device. This is a major form of EMS terrorism. Entry is only permitted after EOD safety clearance; awareness of secondary attack risk is the absolute top priority.",
    diff: "hard",
    category: "blast_injuries"
  },
  {
    q: "Which of the following is an example of Quaternary Blast Injury?",
    o: [
      "Pulmonary contusion from the overpressure blast wave",
      "Penetrating injury from metal shrapnel",
      "Fractures from being thrown against a wall by the blast wind",
      "Burns from fire and crush injury from building collapse"
    ],
    a: 3,
    exp: "Quaternary Blast Injury includes other injuries caused by flame, gas, building collapse, etc.: burns, asphyxia, crush injuries, and radiation exposure. Remember the sequence: 1st (blast wave), 2nd (shrapnel), 3rd (throw/fall), 4th (other).",
    diff: "normal",
    category: "blast_injuries"
  },
  {
    q: "Which physical finding is an important indicator of blast wave exposure?",
    o: ["Epistaxis", "Tympanic membrane rupture", "Conjunctival hemorrhage", "Skin rash"],
    a: 1,
    exp: "Tympanic membrane rupture is an important indicator of blast wave exposure. It is accompanied by tinnitus, hearing loss, and ear pain. When tympanic membrane rupture is identified, pulmonary injury and tension pneumothorax from primary blast injury must always be considered in the MARCH protocol.",
    diff: "normal",
    category: "blast_injuries"
  },

  // ─── ACTIVE_SHOOTER ─────────────────────────
  {
    q: "In the Hartford Consensus THREAT principle, what does 'H' stand for?",
    o: [
      "Hospital transport",
      "Hemorrhage control",
      "Hot zone entry",
      "Head injury assessment"
    ],
    a: 1,
    exp: "THREAT: T (Threat suppression) → H (Hemorrhage control) → R (Rapid Extraction) → E (Assessment by medical personnel) → A (Transport). 'H' stands for Hemorrhage control — the first medical intervention performed immediately after threat suppression.",
    diff: "normal",
    category: "active_shooter"
  },
  {
    q: "Why did the pre-Columbine response paradigm (5C) fail during the 1999 Columbine High School shooting?",
    o: [
      "There were too few police officers",
      "The contain-and-negotiate strategy was ineffective against perpetrators planning to die, allowing 46 minutes of indiscriminate killing",
      "The medical team arrived late to the scene",
      "Explosives were used, making it unpredictable"
    ],
    a: 1,
    exp: "The old 5C paradigm (Contain → Control → Call SWAT → Communicate → Come up with a plan) was based on containment and negotiation, which was ineffective against perpetrators who planned to die. Indiscriminate killing continued for 46 minutes, after which the paradigm shifted to the Rapid Response Team approach: 'Immediately move toward the threat; stopping the killing is the top priority.'",
    diff: "normal",
    category: "active_shooter"
  },
  {
    q: "In the 5-step medical response to AAMCI (Active Attacker Mass Casualty Incidents), what corresponds to Step 4?",
    o: [
      "Self-care by the wounded",
      "Spontaneous assistance by uninjured civilians",
      "Initial response by police, fire, and EMS",
      "Rescue Task Force (RTF) deployment"
    ],
    a: 3,
    exp: "AAMCI medical response 5 steps: Step 1 (self-care by wounded) → Step 2 (civilian bystander support) → Step 3 (initial public response: police/fire/EMS) → Step 4 (RTF response) → Step 5 (specialized medical team and hospital system). In Step 4, RTF is deployed under police escort.",
    diff: "hard",
    category: "active_shooter"
  },
  {
    q: "Which event highlighted the importance of the 'Stop the Bleed' campaign?",
    o: [
      "9/11 attacks (2001)",
      "Oklahoma City bombing (1995)",
      "Boston Marathon bombing (2013)",
      "Columbine shooting (1999)"
    ],
    a: 2,
    exp: "In the 2013 Boston Marathon bombing, bystanders and off-duty medical personnel improvised tourniquets to control massive hemorrhage, significantly improving survival rates. This event became the impetus for raising public awareness of 'Stop the Bleed' training.",
    diff: "normal",
    category: "active_shooter"
  },
  {
    q: "In the START triage system, above what respiratory rate (breaths/min) is a patient classified as Immediate (Red)?",
    o: ["Over 20/min", "Over 25/min", "Over 30/min", "Over 35/min"],
    a: 2,
    exp: "In START triage, a respiratory rate ≥30/min classifies the patient as Immediate (Red). Additional Red criteria include: absent radial pulse or capillary refill time >2 seconds, or inability to follow simple commands. Patients with <30 respirations/min may still be classified Red based on circulation and mental status.",
    diff: "normal",
    category: "active_shooter"
  },
  {
    q: "What is the key difference between JumpSTART (pediatric) and adult START triage?",
    o: [
      "JumpSTART uses different respiratory rate criteria",
      "For an apneic child with a pulse, 5 rescue breaths are attempted before reassessment",
      "JumpSTART applies only to children aged 10 and older",
      "JumpSTART omits mental status assessment"
    ],
    a: 1,
    exp: "The key difference of JumpSTART (applied to children ≤8 years or <45 kg): for an apneic child with a pulse, 5 rescue breaths are attempted before reassessment. Because the primary cause of pediatric cardiac arrest is respiratory failure (not cardiac), respiratory recovery is attempted first.",
    diff: "hard",
    category: "active_shooter"
  },

  // ─── EQUIPMENT ──────────────────────────────
  {
    q: "Which of the following is NOT a standard component of an IFAK (Individual First Aid Kit)?",
    o: [
      "CAT (Combat Application Tourniquet)",
      "Hemostatic gauze",
      "Chest seal — with one-way valve",
      "IV set"
    ],
    a: 3,
    exp: "Standard IFAK components: CAT/SOFT-T Wide tourniquet, compression bandage, hemostatic gauze, nasopharyngeal airway (NPA), chest seal (one-way valve), Israeli bandage, nitrile gloves. An IV set is advanced equipment included in an Advanced Medical Kit — not a standard IFAK component.",
    diff: "normal",
    category: "tccc"
  },
  {
    q: "Which NIJ ballistic vest level, used by most SWAT teams, can stop M4/AR-15 rifle rounds?",
    o: ["Type IIA", "Type II", "Type IIIA", "Type III"],
    a: 3,
    exp: "NIJ levels: Type IIA/II/IIIA (handgun protection) → Type III (M4/AR-15 rifle rounds, used by most SWAT) → Type IV (armor-piercing rounds). TMP requires a minimum of Level II, and wearing a ballistic vest improves gunfight survival probability 3-4 times.",
    diff: "normal",
    category: "tccc"
  },
  {
    q: "What is the correct principle for TMP (Tactical Medical Provider) uniform markings in tactical environments?",
    o: [
      "Prominently display a large red cross to identify as medical personnel",
      "Wear the same color/style uniform as teammates and attach a small green cross or caduceus with velcro",
      "Wear all-white uniform to identify as medical personnel",
      "Wear only tactical clothing with no markings"
    ],
    a: 1,
    exp: "In tactical environments, a large red cross marking can make the TMP a target. The TMP wears the same camouflage/low-key uniform as teammates and attaches a small green cross or caduceus via velcro. Both friendly fire prevention and target identification avoidance must be considered simultaneously.",
    diff: "hard",
    category: "tccc"
  },
  {
    q: "When should intraosseous (IO) access be considered?",
    o: [
      "When the patient is conscious",
      "When peripheral IV access repeatedly fails",
      "In the early stages of shock",
      "When drug administration is not needed"
    ],
    a: 1,
    exp: "IO access is considered as an alternative when peripheral IV access fails. Particularly important for pediatric shock patients with difficult vascular access. Intraosseous drug delivery speed is equivalent to IV; EZ-IO and similar devices are used.",
    diff: "normal",
    category: "tccc"
  },

  // ─── ADDITIONAL TACTICAL ────────────────────
  {
    q: "What tools are used in RAM (Remote Assessment Medicine)?",
    o: [
      "Medical ultrasound, CT scanner",
      "High-magnification scope, binoculars, night-vision device",
      "Thermometer, blood pressure cuff",
      "Stethoscope, pulse oximeter"
    ],
    a: 1,
    exp: "RAM (Remote Assessment Medicine) is a technique in which the TMP visually assesses a patient from a safe distance without direct contact. Tools include high-magnification scopes, binoculars, and night-vision devices. Signs of life (chest movement, limb movement, communication attempts) and signs presumptive of death are assessed from a distance.",
    diff: "hard",
    category: "tccc"
  },
  {
    q: "Which of the following is NOT one of the 3 principles of CBRN radiation scene response?",
    o: ["Minimize time", "Maximize distance", "Use shielding", "High temperature exposure"],
    a: 3,
    exp: "3 principles of CBRN radiation scene response: ① Time — minimize exposure time; ② Distance — maximize distance from source (doubling distance reduces dose by 1/4, inverse square law); ③ Shielding — use concrete walls, vehicles, etc. High temperature exposure is not a radiation response principle.",
    diff: "normal",
    category: "tccc"
  },
  {
    q: "What percentage of radioactive contamination can be removed by clothing removal alone?",
    o: ["Approximately 30-40%", "Approximately 50-60%", "Approximately 80-90%", "Approximately 95-99%"],
    a: 2,
    exp: "Clothing removal alone can eliminate approximately 80-90% of total radioactive contamination. Subsequently, thorough skin washing with soap and water is performed. Key principle: treatment of life-threatening trauma takes priority over decontamination; radioactive contamination itself rarely poses an immediate life threat.",
    diff: "normal",
    category: "tccc"
  },
  {
    q: "What heart rate (beats/min) in a pediatric patient indicates shock?",
    o: ["Over 100/min", "Over 120/min", "Over 140/min", "Over 160/min"],
    a: 3,
    exp: "A heart rate of over 160/min in a pediatric patient indicates shock. Unlike adults, children maintain blood pressure within normal range during shock compensation before a sudden drop — making tachycardia a critical indicator. Sudden conversion to bradycardia signals a critical deterioration.",
    diff: "hard",
    category: "tccc"
  },
  {
    q: "In the Prolonged Field Care (PFC) nursing checklist 'SHEEP VOMIT,' what does 'P' stand for?",
    o: ["Positioning", "Pulse monitoring", "Psychology (patient psychological stabilization)", "Pain management"],
    a: 2,
    exp: "SHEEP VOMIT: S (Skin/Suction) → H (Hygiene) → E (Environment) → E (Extended) → P (Psychology — patient psychological stabilization) → V (Vitals) → O (Observation) → M (Massage/Movement) → I (Ins and Outs) → T (Trending). In prolonged field care, patient psychological stabilization directly affects survival.",
    diff: "boss",
    category: "tccc"
  },
  {
    q: "What is the maximum range of a TASER (electronic control device)?",
    o: ["3.5 m", "7.5 m", "10.6 m (35 feet)", "15 m"],
    a: 2,
    exp: "The maximum range of a TASER is approximately 10.6 m (35 feet), delivering approximately 80-125 microcoulombs over 5 seconds to cause neuromuscular incapacitation (NMI). After TASER use, the TMP must assess probe insertion sites, secondary injuries, and mental status.",
    diff: "hard",
    category: "active_shooter"
  },
  {
    q: "What must absolutely NOT be done when treating abdominal evisceration?",
    o: [
      "Covering eviscerated organs with saline-moistened dressing",
      "Pushing eviscerated organs back into the abdominal cavity",
      "Using a thermal blanket to prevent heat loss",
      "Positioning the patient with knees bent"
    ],
    a: 1,
    exp: "Abdominal evisceration management: ① Never push eviscerated organs back into the abdominal cavity; ② Cover organs with clean moist (saline) dressings; ③ Prevent heat loss with a moisture barrier; ④ Position patient with knees bent to reduce abdominal tension. Forcing organs back causes additional contamination and injury.",
    diff: "normal",
    category: "tccc"
  },
  {
    q: "What is the correct method for preserving an amputated body part?",
    o: [
      "Place directly on ice for maximum cooling",
      "Wrap in sterile gauze, place in a plastic bag, then store in a container of ice-water mixture",
      "Wrap in dry sterile gauze and store at room temperature",
      "Submerge completely in normal saline"
    ],
    a: 1,
    exp: "Amputated part preservation: ① Rinse with sterile saline; ② Wrap in moist sterile gauze and seal in a plastic bag; ③ Store in a container of ice-water mixture to keep cool. Direct contact with ice causes frostbite damage — strictly prohibited.",
    diff: "normal",
    category: "tccc"
  },
  {
    q: "In eFAST (Extended Focused Assessment with Sonography for Trauma) ultrasound, what does 'absent lung sliding' indicate?",
    o: [
      "Pneumonia",
      "Pneumothorax",
      "Pulmonary Contusion",
      "Normal Finding"
    ],
    a: 1,
    exp: "Absent lung sliding on eFAST ultrasound indicates pneumothorax. eFAST is a non-invasive bedside ultrasound protocol evaluating: chest (pneumothorax/hemothorax), pericardium (pericardial effusion → cardiac tamponade), and abdomen (intraabdominal hemorrhage).",
    diff: "hard",
    category: "airway"
  },
  {
    q: "Which of the following is NOT an indication for 'Load-and-Go' in a tactical setting?",
    o: [
      "Suspected uncontrolled internal hemorrhage",
      "Tension pneumothorax",
      "Minor laceration with spontaneous hemorrhage control",
      "Severe head/cervical spine injury"
    ],
    a: 2,
    exp: "Load-and-Go indications: uncontrolled internal hemorrhage, severe head/cervical spine injury, tension pneumothorax, abdominal evisceration, severe burns (including airway burns), survivable cardiac arrest. Minor laceration with spontaneous hemorrhage control is eligible for Stay-and-Play (treat on scene, then transport).",
    diff: "normal",
    category: "zones_of_care"
  },
  {
    q: "Who developed the 'Ambulance Volante (Flying Ambulance)' in the history of tactical medicine?",
    o: [
      "Clara Barton",
      "Dominique Jean Larrey",
      "Florence Nightingale",
      "George Washington"
    ],
    a: 1,
    exp: "Napoleonic era military surgeon Dominique Jean Larrey developed the 'Ambulance Volante (Flying Ambulance),' establishing the first systematic battlefield medical evacuation system. This is regarded as the origin of modern tactical medicine and MEDEVAC systems.",
    diff: "normal",
    category: "tccc"
  },
  {
    q: "What is the correct position for applying a pelvic binder?",
    o: [
      "Abdomen above the navel",
      "At the level of the greater trochanter of the femur",
      "Above the iliac crest",
      "Thigh above the knee"
    ],
    a: 1,
    exp: "The pelvic binder is applied at the level of the greater trochanters to stabilize the pelvis. Unstable pelvic fractures cause massive internal hemorrhage with very high mortality. Incorrect placement (above the iliac crests) renders the device ineffective.",
    diff: "hard",
    category: "hemorrhage_control"
  },
  {
    q: "What field hospital system, introduced during the Korean War, marked the beginning of helicopter medical evacuation?",
    o: ["DUSTOFF", "MASH", "MEDEVAC", "CASEVAC"],
    a: 1,
    exp: "MASH (Mobile Army Surgical Hospital) was introduced during the Korean War and marked the beginning of helicopter medical evacuation. The Vietnam War subsequently established the DUSTOFF (Dedicated Unhesitating Service To Our Fighting Forces) helicopter evacuation system.",
    diff: "normal",
    category: "tccc"
  },
  {
    q: "How much higher is the injury/illness rate for paramedics working shifts of 16 hours or more compared to those working 8-12 hours?",
    o: ["20% higher", "40% higher", "60% higher", "80% higher"],
    a: 2,
    exp: "A 2015 U.S. study found that paramedics working shifts of 16+ hours had 60% higher rates of injury and illness compared to colleagues working 8-12 hours. Additionally, 72% of paramedics reported poor sleep quality (2024 systematic review), and 30% reported excessive daytime sleepiness.",
    diff: "boss",
    category: "tccc"
  },
  {
    q: "What is the most appropriate medical lesson from the Copenhagen mall shooting (2022, Denmark)?",
    o: [
      "TEMS is only needed in very large cities",
      "Even peaceful societies can face unpredictable active attacker threats",
      "If gun control is strengthened, tactical medicine becomes unnecessary",
      "Response by military-trained personnel alone is sufficient"
    ],
    a: 1,
    exp: "The 2022 Copenhagen Fields shopping mall shooting demonstrated that even stable, peaceful Nordic societies can face unpredictable active attacker threats. The Copenhagen metropolitan EMS operates 21 ambulance bases, 62 ambulances, and 5 physician-based emergency medical teams (including 1 TEMS).",
    diff: "normal",
    category: "active_shooter"
  },
  {
    q: "What does 'CISD' stand for in CISM (Critical Incident Stress Management)?",
    o: [
      "Critical Incident Scene Documentation",
      "Critical Incident Stress Debriefing",
      "Chemical Incident Safety Directive",
      "Civilian Incident Support Division"
    ],
    a: 1,
    exp: "CISD in CISM (Critical Incident Stress Management) stands for Critical Incident Stress Debriefing. Other components include PFA (Psychological First Aid) and defusing (small group support immediately after an incident). Essential for tactical medical provider mental health management.",
    diff: "hard",
    category: "tccc"
  },
  {
    q: "How did the Israeli 'Black Sabbath' incident contribute to the development of tactical medicine?",
    o: [
      "Development of drone-based medication delivery methods",
      "Urban combat experience providing insights for the development of Korean tactical medicine",
      "Establishment of CBRN response systems",
      "Development of remote surgery systems"
    ],
    a: 1,
    exp: "Israeli urban combat experience (including Black Sabbath) serves as an important case study for contemplating the development of Korean tactical medicine. Key elements include urban siege warfare, civilian protection, and legal/policy/clinical approaches. Israeli combat medical experience is an important reference for global tactical medicine education.",
    diff: "boss",
    category: "active_shooter"
  },
  {
    q: "Which historical fact about DNBI (Disease and Non-Battle Injuries) is correct?",
    o: [
      "In war, combat injuries have always caused more deaths than disease",
      "Historically, tropical diseases and infectious diseases have killed more soldiers than weapons",
      "DNBI is no longer a problem in modern warfare",
      "DNBI applies only to soldiers and is irrelevant to civilians"
    ],
    a: 1,
    exp: "Historically, tropical diseases, smallpox, and other infectious diseases have killed more soldiers than weapons. For this reason, the TMP (Tactical Medical Provider) must be a versatile generalist — proficient not only in trauma care but also in tropical medicine (dengue, malaria, etc.), psychological nursing, and long-term medication management.",
    diff: "hard",
    category: "tccc"
  }
];

// ============================================
// SECTION 2: CTM QUIZ QUESTIONS (50+)
// ============================================

const ctmQuestions = [

  // ─── CTM BASICS ─────────────────────────────
  {
    q: "In what year and at which institution was Counter-Terrorism Medicine (CTM) first introduced?",
    o: [
      "2001 — U.S. Centers for Disease Control and Prevention (CDC)",
      "2017 — Harvard Medical School (Boston) & BIDMC Disaster Medicine Fellowship",
      "2013 — European Society for Emergency Medicine (EuSEM)",
      "2005 — World Health Organization (WHO)"
    ],
    a: 1,
    exp: "CTM (Counter-Terrorism Medicine) was first introduced in 2017, led by the Harvard Medical School (Boston) and BIDMC (Beth Israel Deaconess Medical Center) Disaster Medicine Fellowship, published in the journal Prehospital and Disaster Medicine (PDM). It is a subspecialty of Disaster Medicine.",
    diff: "normal",
    category: "ctm_basics"
  },
  {
    q: "Which of the following is NOT one of the three GTD (Global Terrorism Database) criteria for defining a terrorist attack?",
    o: [
      "Aims to achieve political, economic, religious, or social goals",
      "Intends to convey a message to a broader audience beyond the immediate victims",
      "Must involve the use of explosives or weapons",
      "Must fall outside the context of legitimate acts of war"
    ],
    a: 2,
    exp: "GTD's three criteria for terrorism: I. Political, economic, religious, or social objectives; II. Intent to convey a message beyond immediate victims; III. Outside the context of legitimate acts of war. Use of explosives or weapons is not a required criterion — psychological threats or cyberattacks may also constitute terrorism.",
    diff: "normal",
    category: "ctm_basics"
  },
  {
    q: "Which of the following correctly identifies the three core elements of CTM (Counter-Terrorism Medicine)?",
    o: [
      "Intent — Violence — Health Care Impact",
      "Defense — Medicine — Police",
      "Detection — Response — Recovery",
      "Threat — Victim — Medical Staff"
    ],
    a: 0,
    exp: "The three core elements of CTM are: Intent, Violence, and Health Care Impact. Unlike ordinary criminal violence, terrorism involves the complex interplay of all three, delivering a direct shock to the healthcare system.",
    diff: "normal",
    category: "ctm_basics"
  },
  {
    q: "Which of the following lists the four phases of the CTM disaster cycle in the correct order?",
    o: [
      "Mitigation → Preparedness → Response → Recovery",
      "Preparedness → Mitigation → Response → Recovery",
      "Response → Mitigation → Preparedness → Recovery",
      "Recovery → Preparedness → Response → Mitigation"
    ],
    a: 0,
    exp: "The four phases of the CTM disaster cycle: ① Mitigation (prevention) → ② Preparedness (readiness) → ③ Response (immediate action) → ④ Recovery (restoration). This mirrors the general disaster management cycle; in CTM, pre-event prevention and preparedness are as critical as response and recovery.",
    diff: "normal",
    category: "ctm_basics"
  },
  {
    q: "Which scholar defined disaster medicine as the 'marriage of medical care in crisis situations and emergency management'?",
    o: ["Heejun Shin", "Gregory Ciottone", "Frank Hoffman", "Peter Rosen"],
    a: 1,
    exp: "Gregory Ciottone defined disaster medicine as the 'Marriage of Medical Care in Crisis Situations and Emergency Management.' He also served as the Massachusetts DMAT leader during the 9/11 attacks.",
    diff: "normal",
    category: "ctm_basics"
  },

  // ─── TERRORISM HISTORY ──────────────────────
  {
    q: "Which 1st-century Roman-era Jewish assassination group is considered the earliest precursor to modern terrorism?",
    o: ["Hassan-i Sabbah", "Sicarii", "Narodnaya Volya", "Hezbollah"],
    a: 1,
    exp: "The 1st-century Sicarii used short daggers (sica) to assassinate prominent Roman officials and Jewish collaborators in public spaces, inducing widespread fear among crowds. Considered the archetype of psychological terrorism, they were the earliest group to pursue broad psychological impact beyond simple assassination.",
    diff: "hard",
    category: "terrorism_history"
  },
  {
    q: "Which historical event first used the word 'terror' in its current meaning?",
    o: [
      "American Civil War (1861–1865)",
      "French Revolution (1793, Reign of Terror)",
      "World War I (1914–1918)",
      "Russian Revolution (1917)"
    ],
    a: 1,
    exp: "The word 'terror' was first used in its current meaning during Robespierre's 'Reign of Terror' in the 1793 French Revolution. Mass executions by guillotine and other means suppressed political opposition — characterized by large-scale state-sponsored violence.",
    diff: "normal",
    category: "terrorism_history"
  },
  {
    q: "ETA (1959–2018) was a terrorist group fighting for independence of which region in which country?",
    o: [
      "United Kingdom — Scotland",
      "France — Brittany",
      "Spain — Basque Country",
      "Italy — Sicily"
    ],
    a: 2,
    exp: "ETA (1959–2018) was a separatist terrorist group that killed approximately 800 people in pursuit of Basque independence from Spain. They ceased operations following 1997 negotiations and officially dissolved in 2018 — Spain's longest-active terrorist organization.",
    diff: "normal",
    category: "terrorism_history"
  },
  {
    q: "How many people were killed on 'Bloody Sunday' (January 30, 1972) in Northern Ireland?",
    o: ["5", "10", "14", "25"],
    a: 2,
    exp: "On January 30, 1972 — 'Bloody Sunday' — British troops opened fire on unarmed protesters in Derry, Northern Ireland, killing 14 and wounding more than 15. The event galvanized the IRA's armed campaign.",
    diff: "hard",
    category: "terrorism_history"
  },
  {
    q: "Approximately how many people were killed in the September 11, 2001 terrorist attacks?",
    o: ["~1,000", "~2,000", "~3,000 or more", "~5,000"],
    a: 2,
    exp: "The September 11, 2001 al-Qaeda attacks on the World Trade Center, the Pentagon, and Pennsylvania killed more than 3,000 people. The event transformed global awareness of terrorism and shifted U.S. disaster management paradigms — one of the deadliest terrorist attacks in history.",
    diff: "normal",
    category: "terrorism_history"
  },
  {
    q: "What were the casualties of the 2004 Madrid train bombings?",
    o: [
      "50 killed, 300 injured",
      "191 killed, more than 2,000 injured",
      "300 killed, 1,000 injured",
      "100 killed, 500 injured"
    ],
    a: 1,
    exp: "The March 11, 2004 Madrid Atocha station train bombings killed 191 people and injured more than 2,000. Carried out by an al-Qaeda-linked cell, it is one of the deadliest terrorist attacks in European history and influenced the Spanish general elections.",
    diff: "normal",
    category: "terrorism_history"
  },
  {
    q: "Who first coined the term 'Hybrid Warfare' and in what year?",
    o: [
      "Colin Powell, 1991",
      "Frank Hoffman, 2007",
      "Henry Kissinger, 1980",
      "Carl von Clausewitz, 1832"
    ],
    a: 1,
    exp: "The concept of Hybrid Warfare was first used by researcher Frank Hoffman in 2007. It is characterized by the combined use of conventional military force + irregular warfare + cyberattacks + EMP + CBRNE weapons — a new form of warfare with direct impact on civilian populations.",
    diff: "hard",
    category: "terrorism_history"
  },
  {
    q: "Which strategy of ISIS (2013–2019) most distinguished it from previous terrorist organizations?",
    o: [
      "First development of suicide bombing tactics",
      "Sophisticated use of social media for propaganda and recruitment",
      "First use of chemical weapons",
      "Sophisticated hostage negotiation strategies"
    ],
    a: 1,
    exp: "ISIS (the Islamic State, 2013–2019) distinguished itself from prior terrorist organizations primarily through its sophisticated use of social media (YouTube, Twitter, Facebook) for propaganda and recruitment while holding territory in Iraq and Syria. It also effectively weaponized social media to inspire 'lone wolf' attacks worldwide.",
    diff: "normal",
    category: "terrorism_history"
  },

  // ─── TERRORISM STATISTICS ───────────────────
  {
    q: "According to GTD statistics (1970–2020), which weapon type ranked first in terrorist attacks in East Asia?",
    o: ["Firearms (38.88%)", "Incendiary weapons (33.38%)", "Explosives (39.54%)", "Chemical weapons (2.18%)"],
    a: 2,
    exp: "GTD statistics (1970–2020) for East Asia — weapon types: Explosives 308 (39.54%) #1; Incendiary weapons 260 (33.38%) #2; Melee 84 (10.78%) #3; Firearms 38 (4.88%) #4; Chemical weapons 17 (2.18%) #5. Explosives account for approximately 40% of all attacks.",
    diff: "hard",
    category: "terrorism_statistics"
  },
  {
    q: "According to GTD statistics (1970–2020), which weapon type had by far the highest average deaths and injuries per incident in U.S. terrorist attacks?",
    o: ["Explosives (0.22 per incident)", "Firearms (1.20 per incident)", "Vehicles (143.62 per incident)", "Chemical weapons (0 per incident)"],
    a: 2,
    exp: "In U.S. terrorism statistics, vehicles rank first with an average of 143.62 deaths and 1,045.29 injuries per incident — because this category includes the 9/11 aircraft-building collisions. Firearms rank second with 1.20 deaths per incident.",
    diff: "hard",
    category: "terrorism_statistics"
  },
  {
    q: "According to GTD statistics, how many times higher is the average death toll per incident for suicide bombings compared to non-suicide bombings?",
    o: ["~2x", "~5x", "~9x", "~20x"],
    a: 2,
    exp: "Suicide bombings average 9.66 deaths per incident — approximately 9 times higher than non-suicide bombings (1.09). Injuries average 19.77 vs. 3.20, about 6 times higher. Suicide bombings represent only 6.59% of all bombing incidents but account for 38.52% of all bombing fatalities.",
    diff: "normal",
    category: "terrorism_statistics"
  },
  {
    q: "According to GTD statistics (1970–2020), which CBRNe weapon type had the highest average number of injuries per use?",
    o: ["Explosives (4.23 per use)", "Radiological weapons (0 per use)", "Chemical weapons (45 per use)", "Biological weapons (25.97 per use)"],
    a: 2,
    exp: "Among CBRNe weapons, chemical weapons average 45 injuries per use — the highest. Despite very low frequency of use (0.29%), their per-use impact is overwhelming. Radiological weapons are recorded with 0 deaths and 0 injuries per the GTD.",
    diff: "hard",
    category: "terrorism_statistics"
  },
  {
    q: "What is the total number of terrorism-related deaths worldwide according to GTD statistics (1970–2020)?",
    o: ["~50,000", "~100,000", "~163,903", "~300,000"],
    a: 2,
    exp: "According to GTD statistics (1970–2020), global terrorism caused a total of 163,903 deaths and 400,030 injuries. Explosives account for 157,357 deaths (96.0%) — the vast majority.",
    diff: "normal",
    category: "terrorism_statistics"
  },
  {
    q: "According to the GTD (1970–2020), which region had the highest number of terrorist attacks worldwide?",
    o: [
      "North America (2,499)",
      "Western Europe (1,512)",
      "Middle East / North Africa (MENA, 32,553)",
      "East Asia (779)"
    ],
    a: 2,
    exp: "In GTD statistics, the Middle East/North Africa (MENA) region had 32,553 incidents (31.69%) — the highest of any region. Iraq leads all individual countries with 18,781 incidents (18.3%). East Asia has a relatively low rate, but complacency is not warranted.",
    diff: "hard",
    category: "terrorism_statistics"
  },

  // ─── CBRNE TERRORISM ────────────────────────
  {
    q: "Which statistics correctly describe the 1995 Tokyo subway sarin attack?",
    o: [
      "13 killed, 1,000 injured",
      "13 killed, 5,500 injured",
      "50 killed, 500 injured",
      "3 killed, 200 injured"
    ],
    a: 1,
    exp: "The March 20, 1995 Aum Shinrikyo sarin attack on the Tokyo subway killed 13 and injured 5,500. The enclosed, poorly ventilated subway environment maximized casualties. It is one of the most significant chemical terrorist attacks in history.",
    diff: "normal",
    category: "cbrne_terrorism"
  },
  {
    q: "In the toxidrome mnemonic 'SLUDGEM' for nerve agent (sarin, VX, etc.) exposure, what does the 'M' stand for?",
    o: [
      "Mydriasis (pupil dilation)",
      "Miosis (pupil constriction)",
      "Muscle cramps",
      "Memory loss"
    ],
    a: 1,
    exp: "SLUDGEM: Salivation, Lacrimation, Urination, Defecation, GI distress, Emesis, Miosis. Nerve agents inhibit cholinesterase, causing parasympathetic overstimulation. Miosis (pupil constriction) is the most characteristic early sign.",
    diff: "hard",
    category: "cbrne_terrorism"
  },
  {
    q: "What antidote(s) should be administered for nerve agent (sarin, VX) exposure?",
    o: [
      "Naloxone",
      "Atropine + Pralidoxime",
      "Furosemide",
      "Epinephrine"
    ],
    a: 1,
    exp: "Antidotes for nerve agents (sarin, VX, and other organophosphates): Atropine + Pralidoxime (2-PAM). Atropine blocks muscarinic receptors to suppress secretions, bradycardia, and bronchospasm; pralidoxime reactivates cholinesterase. Immediate administration is critical.",
    diff: "normal",
    category: "cbrne_terrorism"
  },
  {
    q: "What are the three hallmark symptoms of opioid toxidrome?",
    o: [
      "Fever, diaphoresis, tachycardia",
      "Miosis (pinpoint pupils), decreased consciousness, respiratory depression (apnea)",
      "Muscle rigidity, seizures, hypertension",
      "Nausea, vomiting, diarrhea"
    ],
    a: 1,
    exp: "The three hallmark symptoms of opioid toxidrome: miosis (pinpoint pupils), decreased consciousness (sedation), and respiratory depression/apnea. In the 2002 Moscow Theater hostage crisis, the failure to recognize this toxidrome and delayed naloxone administration following the Russian Spetsnaz use of fentanyl+halothane gas caused at least 170 deaths, including 133 hostages.",
    diff: "normal",
    category: "cbrne_terrorism"
  },
  {
    q: "What was the composition of the gas used by Russian Spetsnaz in the 2002 Moscow Theater hostage crisis?",
    o: [
      "Sarin + Chlorine gas",
      "VX + Mustard gas",
      "Fentanyl derivative + Halothane",
      "Anthrax + Botulinum"
    ],
    a: 2,
    exp: "In the October 2002 Moscow Theater hostage crisis, Russian Spetsnaz pumped a mixture of fentanyl derivative + halothane through the ventilation system (announced by the Russian Health Minister 4 days later). Outcome: at least 170 dead including 133 hostages, 700+ injured. Delayed naloxone administration was the primary cause of death.",
    diff: "hard",
    category: "cbrne_terrorism"
  },
  {
    q: "Which of the following is NOT a Category A (highest risk) bioterrorism agent?",
    o: ["Anthrax", "Tularemia", "Salmonella", "Botulinum toxin"],
    a: 2,
    exp: "Category A bioterrorism agents (highest risk): Anthrax, Tularemia, hemorrhagic fever viruses, Botulinum toxin, Smallpox, etc. These are characterized by airborne transmissibility and capacity for mass casualties. Salmonella is not a Category A agent; it was used in the 1984 Rajneeshees attack, injuring 778.",
    diff: "hard",
    category: "cbrne_terrorism"
  },
  {
    q: "What is a 'Dirty Bomb' (RDD — Radioactive Dispersal Device)?",
    o: [
      "A small nuclear weapon that causes a nuclear explosion",
      "A device combining radioactive material with conventional explosives to disperse radiation",
      "A chemical bomb combining toxic gas with explosives",
      "A bomb containing biological agents"
    ],
    a: 1,
    exp: "A Dirty Bomb (RDD, Radioactive Dispersal Device) combines radioactive material with conventional explosives. Rather than causing a nuclear explosion, the blast disperses radioactive material widely, generating fear and long-term contamination. Hiroshima/Nagasaki lesson: the majority of deaths were caused by blast force, projectiles, and thermal injury — not radiation.",
    diff: "normal",
    category: "cbrne_terrorism"
  },
  {
    q: "Which radiation dose range requires medical intervention?",
    o: ["0.1–1 Gy", "2–10 Gy", "15–20 Gy", "≥50 Gy"],
    a: 1,
    exp: "Biological effects of radiation exposure: <2 Gy — no medical intervention required; 2–10 Gy — medical intervention needed (bone marrow suppression, GI injury); >10 Gy — survival unlikely. Long-term effects include thyroid cancer, solid tumors, and leukemia.",
    diff: "hard",
    category: "cbrne_terrorism"
  },
  {
    q: "What characterizes PPE Level A in CBRNE scene decontamination?",
    o: [
      "Air-purifying respirator only",
      "Full self-contained breathing apparatus (SCBA) + chemical-resistant suit (highest protection)",
      "Standard N95 mask + surgical gown",
      "Ballistic helmet + ballistic vest"
    ],
    a: 1,
    exp: "PPE levels: Level A (highest — SCBA + chemical-resistant suit, chemical hot zone) → Level B (supplied air + less protective suit, warm zone) → Level C (air-purifying respirator + chemical-resistant suit, known low concentration) → Level D (minimal — no respiratory protection). Each level applies to different zones and threat types.",
    diff: "normal",
    category: "cbrne_terrorism"
  },
  {
    q: "How many people died in the 2001 anthrax letter attacks (Amerithrax)?",
    o: ["3", "7", "15", "30"],
    a: 1,
    exp: "The 2001 Amerithrax anthrax letter attacks killed 7 people. Letters containing anthrax spores were mailed to U.S. journalists, Senate offices, and government agencies. The event highlighted the difficulty of distinguishing bioterrorism from natural outbreaks, and the importance of early detection systems.",
    diff: "normal",
    category: "cbrne_terrorism"
  },

  // ─── SPECIAL POPULATIONS ────────────────────
  {
    q: "What were the casualties in the 2004 Beslan school hostage crisis in Russia?",
    o: [
      "50 killed (including 10 children)",
      "186 killed (all children)",
      "334 killed (including 186 children)",
      "100 killed (including 50 children)"
    ],
    a: 2,
    exp: "In the 2004 Beslan school siege, Chechen militants took more than 1,200 hostages and planted explosives throughout the building. Of the 334 killed, 186 were children; 727 were injured. The event demonstrated the extreme vulnerability of schools as soft targets.",
    diff: "normal",
    category: "special_populations"
  },
  {
    q: "Which of the following is NOT a reason why children are more vulnerable to chemical terrorism?",
    o: [
      "Increased inhalation risk due to proximity to the ground",
      "Lower physiological reserve than adults, leading to rapid deterioration",
      "Higher body surface area-to-mass ratio, increasing hypothermia risk",
      "Stronger immune system than adults, providing greater toxin resistance"
    ],
    a: 3,
    exp: "Children's vulnerabilities in chemical terrorism: ① Proximity to the ground increases inhalation (gases accumulate at lower levels); ② Lower physiological reserve leads to rapid deterioration; ③ Higher body surface area-to-mass ratio increases hypothermia risk; ④ Communication barriers delay toxidrome recognition. Children's immature immune systems make them more susceptible to toxins.",
    diff: "normal",
    category: "special_populations"
  },
  {
    q: "What percentage of children who witness or are harmed by terrorism develop PTSD?",
    o: ["~5–10%", "~10–15%", "~28–50%", "~70–80%"],
    a: 2,
    exp: "PTSD develops in 28–50% of children who witness or are harmed by terrorism. Parental response to terrorism directly contributes to symptom development in children, so psychological stabilization of parents must also be addressed when treating pediatric patients. The JumpSTART triage system is used for pediatric terrorism response.",
    diff: "hard",
    category: "special_populations"
  },
  {
    q: "According to GTD statistics (1970–2020), how many terrorist attacks targeted educational institutions worldwide, and how many people were killed?",
    o: [
      "1,000 incidents, ~500 killed",
      "4,626 incidents, ~3,895 killed",
      "10,000 incidents, ~10,000 killed",
      "500 incidents, ~200 killed"
    ],
    a: 1,
    exp: "Terrorist attacks targeting educational institutions globally (GTD 1970–2020): 4,626 incidents, ~3,895 killed, ~10,272 injured — approximately 2.7% of all terrorist incidents. Top attack type: bombing/explosion (2,324); top country: Pakistan (976); top region: South Asia (41.05%).",
    diff: "hard",
    category: "special_populations"
  },
  {
    q: "Which of the following correctly defines a 'Soft Target' and gives appropriate examples?",
    o: [
      "A heavily defended facility such as a military base",
      "A publicly accessible, civilian facility with limited security measures (e.g., hospitals, schools, shopping malls)",
      "Reinforced structures such as underground shelters or bunkers",
      "Law enforcement facilities such as police stations or military units"
    ],
    a: 1,
    exp: "A Soft Target is a publicly accessible, civilian facility with limited security measures. Prime examples include hospitals (24/7 access), schools, shopping malls, and public transportation. Their high accessibility and low security make them prime terrorist targets — which is why threat awareness training for civilians is critical.",
    diff: "normal",
    category: "special_populations"
  },
  {
    q: "According to GTD statistics (1970–2019), what was the success rate of terrorist attacks targeting hospitals worldwide?",
    o: ["~50%", "~70%", "~87.9%", "~95%"],
    a: 2,
    exp: "GTD statistics (1970–2019) on hospital terrorism: 399 of 454 total incidents (87.9%) were successful. Attacks occurred in 61 countries across 6 continents, including 50 suicide attacks (11.0%) and 74 multi-incident attacks (16.3%). MENA (39.4%) and South Asia (27.5%) had the highest rates.",
    diff: "hard",
    category: "special_populations"
  },
  {
    q: "When an ambulance is used as a VBIED in a secondary attack targeting EMS, how many times more explosives can it carry compared to a single suicide bomber?",
    o: ["~10x", "~50x", "~150x", "~500x"],
    a: 2,
    exp: "An ambulance used as a VBIED (Vehicle-Borne Improvised Explosive Device) can carry more than 150 times the explosives of a suicide bomber (5–12 kg). Secondary attacks on EMS have been documented since 1997, with 39 incidents in the past decade — EMS personnel must be aware that their own vehicles can be weaponized.",
    diff: "hard",
    category: "special_populations"
  },
  {
    q: "In the 'Run, Hide, Fight' strategy, what is the highest-priority action?",
    o: [
      "Fight — confront the attacker",
      "Hide — immediately shelter in a safe location",
      "Run — escape from the danger zone",
      "Report — immediately contact law enforcement"
    ],
    a: 2,
    exp: "Run, Hide, Fight strategy: ① Run — immediately escape the danger zone (top priority) → ② Hide — if escape is impossible, shelter in place → ③ Fight — use force as an absolute last resort. Running is always the first choice; fighting is considered only when life is directly threatened.",
    diff: "normal",
    category: "special_populations"
  },
  {
    q: "Regarding drone (UAV)-based terrorist threats, what did Aum Shinrikyo attempt?",
    o: [
      "Drone-based camera surveillance",
      "Exploring methods to deliver chemical weapons via drone",
      "Dropping cyber-hacking equipment via drone",
      "Attempting to transport nuclear materials via drone"
    ],
    a: 1,
    exp: "Before the 1995 Tokyo subway sarin attack, Aum Shinrikyo explored using UAVs (drones) to deliver chemical weapons. France's counter-terrorism coordination unit (UCLAT) has also warned of the possibility of drone-based bioweapon attacks at large sporting events.",
    diff: "hard",
    category: "cbrne_terrorism"
  },
  {
    q: "Who is HEAT (Hostile Environment Awareness Training) designed for?",
    o: [
      "Combat soldiers only",
      "People who work or travel in high-risk or extremely hazardous environments",
      "Emergency medicine physicians only",
      "Terrorism analysts only"
    ],
    a: 1,
    exp: "HEAT (Hostile Environment Awareness Training) is a mandatory strategy for people who work or travel in high-risk/extremely hazardous environments — including healthcare workers, NGO staff, journalists, and humanitarian aid personnel. Only 11 of the 22 major NGOs currently provide threat awareness training.",
    diff: "normal",
    category: "special_populations"
  },
  {
    q: "What is the decontamination efficiency of the PRISM (Primary Response Incident Scene Management) protocol?",
    o: [
      "~30–40% decontamination efficiency",
      "~60–70% decontamination efficiency",
      "Nearly 100% decontamination efficiency",
      "Decontamination efficiency cannot be measured"
    ],
    a: 2,
    exp: "The PRISM protocol (U.S. national disaster management decontamination system) demonstrated nearly 100% decontamination efficiency for exposed hair and skin in Operation DOWNPOUR. Steps: ① clothing removal and drying → ② mass decontamination via ladder pipe water spray → ③ technical decontamination.",
    diff: "hard",
    category: "cbrne_terrorism"
  },
  {
    q: "What agent was used in the 1984 Rajneeshees bioterrorism attack, and what were the casualties?",
    o: [
      "Anthrax — 7 killed",
      "Salmonella — 778 injured",
      "Botulinum toxin — 50 killed",
      "Smallpox virus — 100 injured"
    ],
    a: 1,
    exp: "In 1984 in Oregon, the Rajneeshee religious cult contaminated restaurant salad bars with Salmonella, injuring 778 (across 4 incidents) — the largest bioterrorism casualty event in U.S. history. The difficulty of distinguishing food poisoning from bioterrorism highlighted the threat of food/water supply contamination as a form of bioterrorism.",
    diff: "hard",
    category: "cbrne_terrorism"
  },
  {
    q: "What was South Korea's terrorism risk tier in the 2022 Global Terrorism Index (GTI)?",
    o: [
      "Highest risk (top tier)",
      "High risk (top 25%)",
      "Moderate risk (top 50%)",
      "Lowest tier (rank 93, low risk)"
    ],
    a: 3,
    exp: "In the 2022 GTI, South Korea ranked 93rd — the lowest risk tier. Japan (71st), China (67th), and Taiwan (92nd) also fall in the same tier. However, the July 2022 assassination of former Prime Minister Shinzo Abe demonstrates that East Asia is not immune to terrorism.",
    diff: "normal",
    category: "terrorism_statistics"
  },
  {
    q: "According to 2021 statistics on attacks against humanitarian aid workers (NGOs, medical teams), how many were killed?",
    o: ["~30", "~70", "140", "~300"],
    a: 2,
    exp: "2021 humanitarian aid worker security statistics: 267 reported attacks, 203 seriously injured, 117 kidnapped, 140 killed (most since 2013). An ICRC survey found 28% (219/796) of returned staff experienced health deterioration, and 12% were directly involved in at least one security incident.",
    diff: "hard",
    category: "special_populations"
  },
  {
    q: "What was targeted by the Stuxnet (2010) cyberweapon?",
    o: [
      "U.S. power grid",
      "Iranian nuclear enrichment facility",
      "Russian banking system",
      "European hospital network"
    ],
    a: 1,
    exp: "The 2010 Stuxnet virus attacked centrifuges at Iran's Natanz nuclear enrichment facility, disrupting the nuclear program. Attributed to a U.S.–Israel joint operation, it was the world's first state-level cyberweapon. The 2017 NotPetya cyberattack caused damage to Ukrainian hospitals and other institutions.",
    diff: "normal",
    category: "cbrne_terrorism"
  },
  {
    q: "What injury pattern is characteristic of a TARMAC (Targeted Automobile Ramming Mass Casualty) attack?",
    o: [
      "Primarily burns and inhalation injuries",
      "Head, torso, abdomen, and proximity injuries are characteristic",
      "Limb amputation is the most common injury",
      "Tympanic membrane rupture and pulmonary injury are the main findings"
    ],
    a: 1,
    exp: "TARMAC (Targeted Automobile Ramming Mass Casualty) attacks involve mass casualties from vehicle/truck ramming, with characteristic injury patterns of head, torso, abdominal, and proximity injuries. Vehicles rank first in U.S. terrorism statistics with an average of 143.62 deaths per incident — one of the most lethal attack methods.",
    diff: "normal",
    category: "cbrne_terrorism"
  },
  {
    q: "According to GTD statistics, in which year did explosive terrorism reach its annual peak, and how many incidents occurred?",
    o: [
      "2001 — surge immediately after 9/11",
      "2014 — 7,806 incidents",
      "2019 — more than 10,000 incidents",
      "2003 — start of the Iraq War"
    ],
    a: 1,
    exp: "Explosive terrorism reached its annual peak of 7,806 incidents in 2014 according to GTD statistics — coinciding with ISIS at its height. Peak years for other CBRNe weapons: chemical weapons (2016, 26 incidents), biological weapons (2002, 16 incidents), radiological weapons (2000, 10 incidents).",
    diff: "boss",
    category: "terrorism_statistics"
  },

  // ─── ADDITIONAL CTM ──────────────────────────
  {
    q: "When an ambulance is used as a terrorist weapon in a secondary attack, how many times more explosives can it carry compared to a single bomber?",
    o: [
      "~10x",
      "~50x",
      "~150x or more",
      "Approximately the same"
    ],
    a: 2,
    exp: "An ambulance used as a VBIED (vehicle-borne improvised explosive device) can carry more than 150 times the explosives of a suicide bomber (5–12 kg). Because EMS personnel and ambulances can themselves become secondary attack targets, always consider secondary blast risk when approaching the scene of an initial explosion.",
    diff: "hard",
    category: "terrorism_statistics"
  },
  {
    q: "Which researcher first used the term 'Hybrid Warfare' and in what year?",
    o: [
      "Gregory Ciottone, 2001",
      "Frank Hoffman, 2007",
      "Dominique Jean Larrey, 1812",
      "Clara Barton, 1865"
    ],
    a: 1,
    exp: "The term 'Hybrid Warfare' was first used by researcher Frank Hoffman in 2007. It is characterized by the combined use of conventional military force + irregular warfare + cyberattacks + EMP + CBRNe weapons. Its defining feature is direct impact on civilians without ethical or legal constraints.",
    diff: "normal",
    category: "ctm_basics"
  },
  {
    q: "What is the decontamination efficiency of the PRISM (Primary Response Incident Scene Management) protocol?",
    o: [
      "~50%",
      "~70%",
      "~85%",
      "Nearly 100%"
    ],
    a: 3,
    exp: "PRISM protocol decontamination efficiency in Operation DOWNPOUR was confirmed at nearly 100% for exposed hair and skin. PRISM steps: Phase 1 (clothing removal/drying) → Phase 2 (mass decontamination via ladder pipe water spray) → Phase 3 (technical decontamination).",
    diff: "hard",
    category: "cbrne_terrorism"
  },
  {
    q: "According to GTD statistics (1970–2020), which chemical terrorism incident caused the most casualties (injuries) in East Asia?",
    o: [
      "1994 Matsumoto sarin attack (500 injured)",
      "1995 Tokyo subway sarin attack (5,500 injured)",
      "Chinese chemical plant explosion (1,724 injured)",
      "South Korean chemical spill incident (134 injured)"
    ],
    a: 1,
    exp: "On March 20, 1995, Aum Shinrikyo released sarin gas on the Tokyo subway, killing 13 and injuring 5,500. The enclosed subway environment maximized inhalation casualties. This is one of the most significant chemical terrorist attacks in history.",
    diff: "normal",
    category: "cbrne_terrorism"
  },
  {
    q: "According to 2021 statistics on attacks against NGO humanitarian aid workers, how many were killed?",
    o: [
      "55",
      "95",
      "140",
      "200 or more"
    ],
    a: 2,
    exp: "2021 statistics on attacks against humanitarian aid workers: 267 attacks → 140 killed (most since 2013), 203 seriously injured, 117 kidnapped. An ICRC survey found 28% (219/796) of returned staff experienced health deterioration — underscoring the importance of HEAT training in humanitarian environments.",
    diff: "hard",
    category: "terrorism_statistics"
  },
  {
    q: "Which of the following correctly identifies the three core elements of CTM (Counter-Terrorism Medicine)?",
    o: [
      "Intent + Violence + Health Care Impact",
      "Prevention + Detection + Response",
      "Planning + Training + Evaluation",
      "Law Enforcement + Medicine + Politics"
    ],
    a: 0,
    exp: "The three core elements of CTM (Counter-Terrorism Medicine): ① Intent ② Violence ③ Health Care Impact. An event is defined as requiring CTM medical response when all three elements are present. CTM was first introduced in 2017 by Harvard Medical School & BIDMC, as a subspecialty of Disaster Medicine.",
    diff: "normal",
    category: "ctm_basics"
  },
  {
    q: "What is the correct priority order for the Run-Hide-Fight strategy?",
    o: [
      "Fight → Hide → Run",
      "Hide → Run → Fight",
      "Run → Hide → Fight",
      "Fight → Run → Hide"
    ],
    a: 2,
    exp: "Run-Hide-Fight strategy: ① Run — escape to a safe exit first ② Hide — if escape is impossible, shelter in place ③ Fight — use force only as an absolute last resort. This is a core component of HEAT (Hostile Environment Awareness Training) and the basic response civilians must know in soft targets such as hospitals and schools.",
    diff: "normal",
    category: "ctm_basics"
  },
  {
    q: "According to GTD hospital terrorism statistics (1970–2019), which region ranked first in number of attacks?",
    o: [
      "South Asia (125)",
      "Sub-Saharan Africa (56)",
      "Middle East / North Africa (179)",
      "Western Europe (31)"
    ],
    a: 2,
    exp: "Top region for hospital terrorism: Middle East/North Africa (MENA) — 179 incidents (39.4%). 2nd: South Asia (125, 27.5%); 3rd: Sub-Saharan Africa (56, 12.3%). Top countries: Iraq (47, 10.4%), Pakistan (46), Yemen (43). Hospitals become terrorist targets because of their soft target characteristics (24/7 access + limited security).",
    diff: "hard",
    category: "terrorism_statistics"
  }

];

// ============================================
// SECTION 3: TACTICAL BOSS BATTLES (3 bosses)
// ============================================

const bossBattles = [

  // ─── BOSS 1: ACTIVE SHOOTER ─────────────────
  {
    id: "boss_active_shooter",
    name: "Dark Shadow — Urban Active Shooter",
    nameEn: "Dark Shadow — Urban Active Shooter",
    emoji: "🎯",
    hp: 600,
    maxHp: 600,
    category: "tactical",
    description: "A mass shooting has erupted in a large shopping mall in the heart of the city. The attacker, 'Dark Shadow,' is militarily trained and has created multiple casualties while planting secondary explosive devices. Apply the Hartford Consensus THREAT protocol perfectly to take control of the scene!",
    phases: [
      {
        name: "Phase 1: Hot Zone — Entry Decision",
        hpThreshold: 0.75,
        questions: [
          {
            q: "You arrive on scene and gunshots are still being heard. What is the correct first action?",
            o: [
              "Immediately enter the mall to rescue casualties",
              "The scene is still a Hot Zone — wait outside for law enforcement/EOD to suppress the threat",
              "Rapidly enter without body armor to preserve the golden hour",
              "Contact the helicopter evacuation team immediately"
            ],
            a: 1,
            exp: "In the Hot Zone, EMS and medical personnel are restricted from entry until law enforcement has suppressed the threat. The T (Threat suppression) of the THREAT protocol must precede H (Hemorrhage control). Secondary explosive device risk must also be recognized."
          },
          {
            q: "Police have neutralized the attacker. Gunfire has stopped but the presence of explosives is uncertain. What is the next action?",
            o: [
              "Enter immediately and apply MARCH",
              "Wait for EOD (Explosive Ordnance Disposal) to confirm safety",
              "Wait 1 minute, then enter",
              "Independently establish a Warm Zone without police escort"
            ],
            a: 1,
            exp: "Even when gunfire stops, EOD clearance is mandatory when explosive presence is uncertain. Terrorists use secondary device tactics to lure responders before triggering a second explosion. Entry without safety clearance puts rescuers themselves at risk."
          }
        ]
      },
      {
        name: "Phase 2: Warm Zone — MARCH Protocol Application",
        hpThreshold: 0.50,
        questions: [
          {
            q: "You have entered the Warm Zone. You find a young man with a gunshot wound to the leg and massive hemorrhage. What is the first step of MARCH?",
            o: [
              "Assess the airway and insert an NPA",
              "Apply a tourniquet 5–10 cm proximal to the wound immediately and record the time",
              "Establish IV access first for fluid administration",
              "Cover with a warming blanket to prevent shock"
            ],
            a: 1,
            exp: "M (Massive Hemorrhage Control) is the top priority of the MARCH protocol. Immediately apply a tourniquet 5–10 cm proximal to the wound and always record the application time. In tactical environments, hemorrhage control (M) precedes airway management (A)."
          },
          {
            q: "After tourniquet application, the patient reports difficulty breathing and has an open wound on the left chest. What is the treatment?",
            o: [
              "Attempt endotracheal intubation immediately",
              "Apply a Chest Seal dressing to seal 3 sides and monitor for tension pneumothorax",
              "Sit the patient upright to assist breathing",
              "Assess eligibility for lung transplantation"
            ],
            a: 1,
            exp: "Open pneumothorax treatment: apply a one-way valve Chest Seal dressing with 3-sided (or 4-sided) occlusion. 3-sided occlusion is recommended because complete 4-sided sealing can cause tension pneumothorax. Continued assessment of MARCH steps A (Airway) and R (Respiration) is required."
          }
        ]
      },
      {
        name: "Phase 3: Massive Hemorrhage Control — Junctional Bleeding",
        hpThreshold: 0.25,
        questions: [
          {
            q: "The next patient has a gunshot wound to the groin (inguinal region) with massive hemorrhage in an area where a standard tourniquet cannot be applied. What is the treatment?",
            o: [
              "Apply a standard tourniquet directly to the groin",
              "Apply a SAM Junctional Tourniquet or pack hemostatic gauze into the wound",
              "Rapidly administer IV fluids to maintain blood pressure",
              "Do not apply pressure until surgical intervention is available"
            ],
            a: 1,
            exp: "Junctional hemorrhage refers to bleeding in areas where standard tourniquets cannot be applied — such as the groin or axilla. Use junctional-specific devices (SAM Junctional Tourniquet/SJT, Combat Ready Clamp/CRoC, JETT) or pack hemostatic gauze (QuikClot, HemCon) deeply into the wound and apply firm pressure for at least 3 minutes."
          },
          {
            q: "You are considering TXA (Tranexamic Acid). The patient is 4 hours post-injury. Should it be administered?",
            o: [
              "Administer 2,000 mg IV immediately",
              "TXA is contraindicated as more than 3 hours have passed",
              "Administer at half the standard dose",
              "It can be administered orally"
            ],
            a: 1,
            exp: "TXA (Tranexamic Acid) must be administered within 3 hours of injury. After 3 hours, it is contraindicated — it may over-suppress clot formation, worsening hemorrhage. Standard dosing: initial 1,000 mg IV over 10 minutes, then an additional 1,000 mg over 8 hours."
          }
        ]
      },
      {
        name: "Phase 4: Cold Zone — Final Evacuation and TACEVAC",
        hpThreshold: 0,
        questions: [
          {
            q: "You are performing START triage on multiple casualties in the Cold Zone. What triage category is assigned to a patient who walks to the assembly point on their own?",
            o: ["Red (Immediate)", "Yellow (Delayed)", "Green (Minor)", "Black (Deceased)"],
            a: 2,
            exp: "START triage first step: assess ambulation. Patients who can walk on their own are immediately classified as Green (Minor). This is the fastest and most efficient triage method, allowing medical resources to focus on critical patients."
          },
          {
            q: "What is the target systolic blood pressure for a patient with suspected traumatic brain injury (TBI)?",
            o: ["60–70 mmHg", "80–90 mmHg", ">110 mmHg", ">150 mmHg"],
            a: 2,
            exp: "The permissive hypotension target for general trauma patients is systolic 80–90 mmHg; however, TBI patients require systolic BP >110 mmHg to maintain cerebral perfusion pressure. Permissive hypotension in TBI patients worsens secondary brain injury."
          }
        ]
      }
    ],
    reward: { xp: 6000, coins: 2500, title: "Tactical Medicine Master" },
    defeatMessage: "Dark Shadow has been neutralized! You applied every principle of tactical medicine perfectly, saving countless lives. You are a true Tactical Medicine Master!",
    bossAttacks: [
      { name: "Secondary Explosive Device Threat", damage: 80, description: "Hidden secondary bomb on scene — no EOD clearance before entry means a fatal hit!" },
      { name: "MARCH Chaos", damage: 60, description: "Multiple casualties collapse simultaneously — prioritization errors increase losses!" },
      { name: "Junctional Hemorrhage Storm", damage: 100, description: "Massive bleeding in a tourniquet-inaccessible zone — immediate junctional intervention required!" }
    ]
  },

  // ─── BOSS 2: BLAST TERROR ───────────────────
  {
    id: "boss_blast_wave",
    name: "Blast King — Explosive Terror Mastermind",
    nameEn: "Blast King — Explosive Terror Mastermind",
    emoji: "💣",
    hp: 700,
    maxHp: 700,
    category: "tactical",
    description: "Two pressure-cooker bombs have detonated in sequence at a fictional urban marathon modeled on the 2013 Boston Marathon. The 'Blast King's' bombs have produced hundreds of casualties. Understand the four blast injury types and maximize survivors using START triage and the MARCH protocol!",
    phases: [
      {
        name: "Phase 1: First Response at the Blast Scene",
        hpThreshold: 0.75,
        questions: [
          {
            q: "The first explosion has occurred and your ambulance has arrived on scene. A secondary explosion is still possible. What is the first action?",
            o: [
              "Immediately rescue the nearest casualty",
              "Do not enter the scene without EOD safety clearance",
              "Accept the risk and enter because there are many casualties",
              "Report to dispatch and stand by"
            ],
            a: 1,
            exp: "Top priority at a blast scene: recognize the secondary device threat! Terrorists use the first explosion to lure responders, then detonate a secondary bomb. Never enter without EOD (Explosive Ordnance Disposal) clearance. Rescuer safety is the top priority."
          },
          {
            q: "The scene has been confirmed safe. The first patient complains of tinnitus and ear pain. What blast injury type do these symptoms suggest?",
            o: [
              "Quaternary blast injury (burns)",
              "Tertiary blast injury (fractures from being thrown)",
              "Primary blast injury (tympanic membrane rupture from shock wave)",
              "Secondary blast injury (fragment penetration)"
            ],
            a: 2,
            exp: "Tinnitus, hearing loss, and ear pain suggest tympanic membrane rupture — characteristic of Primary Blast Injury. The blast wave damages air-containing structures (tympanic membrane, lungs, bowel). When tympanic membrane rupture is found, always consider concurrent pulmonary contusion and tension pneumothorax."
          }
        ]
      },
      {
        name: "Phase 2: START Triage — Managing Mass Casualties",
        hpThreshold: 0.50,
        questions: [
          {
            q: "Among multiple casualties, one patient has a respiratory rate of 35/min and an absent radial pulse. What is the START triage category?",
            o: ["Green", "Yellow", "Red (Immediate)", "Black"],
            a: 2,
            exp: "START Red criteria: respiratory rate >30/min OR absent radial pulse (or capillary refill >2 sec), unable to follow simple commands. This patient has RR 35/min and absent radial pulse — meeting both Red criteria. Immediate (Red) treatment is required."
          },
          {
            q: "An 8-year-old pediatric casualty had no breathing before airway opening, and still has no breathing after airway opening. What is the next step in JumpSTART triage?",
            o: [
              "Immediately classify as Black",
              "Check for a pulse — if present, attempt 5 rescue breaths",
              "Begin CPR immediately",
              "Apply START triage the same as for adults"
            ],
            a: 1,
            exp: "In JumpSTART (pediatric triage), if apnea persists after airway opening, check for a pulse. If a pulse is present, attempt 5 rescue breaths — because pediatric cardiac arrest is primarily caused by respiratory failure, not cardiac problems. If breathing returns after rescue breaths → Red; if still absent → Black."
          }
        ]
      },
      {
        name: "Phase 3: Traumatic Amputation Management",
        hpThreshold: 0.25,
        questions: [
          {
            q: "A patient has a traumatic lower extremity amputation from shrapnel. How many cm proximal to the amputation site should the tourniquet be applied?",
            o: ["1–2 cm proximal", "5–10 cm proximal", "20 cm proximal", "Immediately above the amputation"],
            a: 1,
            exp: "Apply the tourniquet 5–10 cm proximal to the amputation site. At the 2013 Boston Marathon bombing, civilians who knew this principle improvised tourniquets on the spot, saving many lives — a testament to the importance of Stop the Bleed training."
          },
          {
            q: "You find a severed foot. What is the correct method for preserving it?",
            o: [
              "Place it directly in a container of ice",
              "Wrap in sterile gauze, seal in a plastic bag, and place in an ice-water mixture",
              "Submerge completely in normal saline",
              "Keep it warm to preserve tissue"
            ],
            a: 1,
            exp: "Amputated part preservation: ① rinse with sterile saline → ② wrap in moist sterile gauze → ③ seal in a plastic bag → ④ place in an ice-water mixture container. Direct contact with ice causes frostbite damage to the amputated tissue."
          }
        ]
      },
      {
        name: "Phase 4: Hospital Transport and Mass Casualty System",
        hpThreshold: 0,
        questions: [
          {
            q: "Which factor was most decisive in improving survival rates according to the lessons of the Boston Marathon bombing?",
            o: [
              "Increasing the number of hospital operating rooms",
              "Early Warm Zone deployment through police-EMS cooperation and civilian 'Stop the Bleed' training",
              "Drug delivery using the latest drones",
              "Use of AI triage systems"
            ],
            a: 1,
            exp: "In the 2013 Boston Marathon bombing, the most decisive factors in improving survival were: ① early Warm Zone deployment through police-EMS cooperation, and ② on-scene civilians improvising and applying tourniquets (acting as 'Stop the Bleed' responders). Rapid application of basic airway management was also a key lesson."
          },
          {
            q: "What device should be applied to a patient with suspected femur fracture?",
            o: [
              "Pelvic Binder",
              "Traction Splint (e.g., Kendrick Traction Device/KTD)",
              "Air Splint",
              "Compression with an Israeli bandage"
            ],
            a: 1,
            exp: "Femur fracture treatment: apply a Traction Splint. The Kendrick Traction Device (KTD) is recommended; improvised splints (branches, rifles, trekking poles, etc.) can also be used. A femur fracture alone can cause 1–2 liters of internal bleeding, potentially leading to hypovolemic shock."
          }
        ]
      }
    ],
    reward: { xp: 7000, coins: 3000, title: "Explosion Scene Hero" },
    defeatMessage: "Blast King has been defeated! You fully understood the four blast injury types and applied START triage and MARCH with precision — you are a true hero of the explosion scene!",
    bossAttacks: [
      { name: "Chain Explosion", damage: 90, description: "Secondary explosive device — failure to minimize response time causes massive casualties!" },
      { name: "Mass Casualty Surge", damage: 70, description: "Inaccurate START triage means losing patients who could have been saved!" },
      { name: "Tympanic Bomb", damage: 50, description: "Primary blast injury — missing pulmonary injury in tinnitus patients leads to tension pneumothorax!" }
    ]
  },

  // ─── BOSS 3: CTM MASTERMIND ─────────────────
  {
    id: "boss_ctm_mastermind",
    name: "Chemical Queen — CBRNE Terror Mastermind",
    nameEn: "Chemical Queen — CBRNE Terror Mastermind",
    emoji: "☣️",
    hp: 800,
    maxHp: 800,
    category: "ctm",
    description: "The leader of an international terrorist organization, 'Chemical Queen,' has launched a complex CBRNE attack. Nerve agents have been released in an enclosed underground concert hall, and a nearby hospital is under cyberattack. Apply GTD statistics lessons and chemical terrorism response protocols perfectly to stop this ruthless attack!",
    phases: [
      {
        name: "Phase 1: Chemical Attack Scene — Toxidrome Identification",
        hpThreshold: 0.75,
        questions: [
          {
            q: "In an enclosed concert hall, an unknown gas has been released and multiple people are collapsing. Symptoms: salivation, lacrimation, miosis (pinpoint pupils), muscle cramps. What is the suspected agent and antidote?",
            o: [
              "Opioid — administer Naloxone",
              "Choking agent — administer oxidizer",
              "Nerve agent (sarin-type) — administer Atropine + Pralidoxime",
              "Radioactive material — confirm with Geiger counter"
            ],
            a: 2,
            exp: "SLUDGEM symptoms (salivation, lacrimation, urination, defecation, GI distress, emesis, miosis) are classic for nerve agent (sarin, VX, and other organophosphate) exposure. Immediately administer Atropine (muscarinic receptor block) + Pralidoxime (cholinesterase reactivation). Entry without PPE exposes rescuers — Level A/B PPE is mandatory!"
          },
          {
            q: "Intelligence reports that Chemical Queen is dispersing aerosols via drone. What delivery method did Aum Shinrikyo explore before the Tokyo subway attack in the 1990s?",
            o: [
              "Ground delivery using explosives",
              "Chemical weapon delivery via drone (UAV)",
              "Contamination of the water supply system",
              "Mixing into food"
            ],
            a: 1,
            exp: "Before the 1995 Tokyo subway sarin attack, Aum Shinrikyo had already explored delivering chemical weapons via drone (UAV). France's counter-terrorism coordination unit (UCLAT) has also warned of the potential for drone-based attacks at large events. Drones are a major emerging threat in modern terrorism."
          }
        ]
      },
      {
        name: "Phase 2: CBRN Zone Control — Scene Management",
        hpThreshold: 0.50,
        questions: [
          {
            q: "You are establishing zone control at a chemical attack scene. In which zone can treatment be performed without appropriate PPE?",
            o: [
              "Hot Zone — most heavily contaminated",
              "Warm Zone — limited PPE",
              "Cold Zone — uncontaminated safe area",
              "PPE-free treatment is possible in all zones"
            ],
            a: 2,
            exp: "CBRNE zones: Hot Zone (Level A PPE required, law enforcement only); Warm Zone (Level B PPE, limited immediate threat); Cold Zone (Level D/standard, triage/treatment/transport station, RSI possible). At a chemical attack scene, the only zone where treatment without PPE is possible is the uncontaminated Cold Zone."
          },
          {
            q: "What is the first decontamination measure for a patient contaminated with a nerve agent?",
            o: [
              "Administer antidote immediately",
              "Remove clothing — can eliminate 80–90% of contamination",
              "Fully submerge the patient in water",
              "Measure contamination level with a Geiger counter"
            ],
            a: 1,
            exp: "Clothing removal alone can eliminate 80–90% of contamination in chemical/radiological exposure patients. PRISM protocol: ① remove clothing (double-bag and seal) → ② mass water rinse → ③ technical decontamination. Important: treat life-threatening injuries before decontamination; rescuers must wear PPE during clothing removal."
          }
        ]
      },
      {
        name: "Phase 3: Opioid Gas Attack — Moscow Theater Scenario",
        hpThreshold: 0.25,
        questions: [
          {
            q: "Chemical Queen is planning to use 'sleep gas' to suppress a hostage situation. What is the correct countermeasure applying lessons from the 2002 Moscow Theater hostage crisis?",
            o: [
              "Administer high-dose steroids to hostages before gas deployment",
              "Pre-stock adequate Naloxone and ensure advance coordination between medical teams and tactical teams",
              "Air-purifying masks alone are sufficient",
              "Wait for natural recovery after gas deployment"
            ],
            a: 1,
            exp: "In the 2002 Moscow Theater hostage crisis, the fentanyl+halothane gas deployed by Russian Spetsnaz killed more than 170 people including 133 hostages. The primary causes were insufficient Naloxone and lack of advance coordination between medical and tactical teams. Key lesson for opioid attack preparedness: pre-stock adequate Naloxone + advance military-medical team coordination."
          },
          {
            q: "Multiple hostages are down with decreased consciousness, miosis, and apnea. The cause has been confirmed as opioid gas. What is the immediate medical intervention?",
            o: [
              "Administer Atropine + Pralidoxime",
              "Secure airway, then administer Naloxone",
              "Administer Epinephrine",
              "Administer IV steroids"
            ],
            a: 1,
            exp: "Response to opioid toxidrome (miosis, decreased consciousness, respiratory depression): secure the airway first, then immediately administer Naloxone. Naloxone is an opioid receptor antagonist with immediate reversal effect. Rapid mass delivery of Naloxone via drone is a current area of research. Atropine is the antidote for nerve agents — not opioids."
          }
        ]
      },
      {
        name: "Phase 4: Final Counter-Terrorism Defense — System Recovery",
        hpThreshold: 0,
        questions: [
          {
            q: "Chemical Queen's cyberattack has paralyzed the hospital's computer systems. What is the most urgent medical response measure?",
            o: [
              "Temporarily close the hospital",
              "Switch to offline backup systems and paper charts, and activate HICS (Hospital Incident Command System)",
              "Suspend patient care until internet connectivity is restored",
              "Leave resolution entirely to the IT team while medical staff stand by"
            ],
            a: 1,
            exp: "When hospital systems are paralyzed by cyber terrorism (ransomware, etc.): switch to offline backup + paper charts + activate HICS (Hospital Incident Command System) immediately. As with the 2017 NotPetya cyberattack that damaged Ukrainian hospitals and institutions worldwide, paralysis of digital infrastructure directly leads to loss of life."
          },
          {
            q: "In the CTM disaster cycle, what are the core tasks of the 'Recovery' phase?",
            o: [
              "Providing immediate emergency care",
              "Prevention education and system improvement",
              "Post-event analysis, trauma support, and system restoration and improvement",
              "Law enforcement operational planning"
            ],
            a: 2,
            exp: "CTM disaster cycle Recovery phase: thorough post-event analysis (debriefing), trauma support for victims and responders (CISM, PFA), healthcare system restoration, vulnerability mitigation, and system improvement are the core tasks. CISD (Critical Incident Stress Debriefing) and PFA (Psychological First Aid) are key recovery tools."
          }
        ]
      }
    ],
    reward: { xp: 8000, coins: 3500, title: "Counter-Terrorism Medicine Expert" },
    defeatMessage: "Chemical Queen has been neutralized! You recognized CBRNE toxidromes, administered chemical terrorism antidotes, and responded to cyberterrorism — saving hundreds of lives with complete Counter-Terrorism Medicine expertise!",
    bossAttacks: [
      { name: "SLUDGEM Storm", damage: 100, description: "Mass nerve agent release — failure to recognize toxidrome delays antidote administration, causing mass casualties!" },
      { name: "Opioid Fog", damage: 80, description: "Fentanyl aerosol drone attack — insufficient Naloxone means the Moscow Theater tragedy repeats!" },
      { name: "Hospital Cyberattack", damage: 60, description: "Ransomware paralyzes the medical system — without an offline response plan, treatment is impossible!" }
    ]
  }
];

// ============================================
// SECTION 4: TACTICAL SCENARIOS (3 RPG Scenarios)
// ============================================

const tacticalScenarios = [

  // ─── TACTICAL SCENARIO 1: ACTIVE SHOOTER ───
  {
    id: "tactical_scenario_active_shooter",
    title: "🔫 Active Shooter Response — Seoul International Convention Center",
    titleEn: "Active Shooter Response — Seoul International Convention Center",
    description: "An armed attacker is opening indiscriminate fire on event attendees at the Seoul Yeouido International Convention Center. You are a Tactical Medical Provider (TMP) assigned to the first-arriving SWAT team. Apply the Hartford Consensus THREAT principles and TCCC perfectly to minimize casualties.",
    category: "active_shooter",
    difficulty: "hard",
    estimatedTime: "20 minutes",
    learningObjectives: [
      "Real-world application of the Hartford Consensus THREAT protocol",
      "Care zone (Hot/Warm/Cold) determination and RTF activation",
      "MARCH protocol and massive hemorrhage control",
      "Understanding the Columbine paradigm shift"
    ],
    steps: [
      {
        id: 1,
        situation: "At 10:30 AM, gunshots are heard from the main hall on the 2nd floor of the convention center. Your team has arrived outside the building. Police have not yet secured the attacker, and gunfire continues inside.",
        question: "As the TMP (Tactical Medical Provider) in this situation, what is your first action?",
        choices: [
          { text: "Immediately enter the building to rescue casualties", outcome: "bad", feedback: "Incorrect! Active gunfire means this is a Hot Zone. A TMP entering the Hot Zone without police escort endangers the TMP themselves. The T (Threat suppression) of the THREAT principle must come first." },
          { text: "The scene is a Hot Zone — wait outside for police threat suppression while preparing for Warm Zone transition", outcome: "good", feedback: "Correct! In the Hot Zone, TMP operates outside per Care Under Fire principles, organizing the RTF and preparing medical resources until police suppress the threat. This is the T phase of THREAT." },
          { text: "Request additional SWAT deployment from police HQ and leave the scene", outcome: "neutral", feedback: "Partially appropriate. Requesting additional resources is correct, but you must not leave the scene. Medical preparation and RTF organization should begin from outside." },
          { text: "Don body armor and immediately enter with 2 officers", outcome: "neutral", feedback: "Dangerous while the attacker has not yet been neutralized. RTF operations under police leadership are principally conducted after the attacker has been neutralized." }
        ],
        correctChoice: 1,
        medicalInfo: "Columbine paradigm shift: The traditional 5C approach (Contain-Control-Call SWAT-Communicate-Plan) is ineffective against perpetrators with suicidal intent. The modern principle is rapid response teams immediately eliminating the threat. TMP provides medical support within this system."
      },
      {
        id: 2,
        situation: "15 minutes later, police have neutralized the attacker and declared the building a Warm Zone. Gunfire has stopped but the possibility of intermittent threats remains. You organize the RTF (Rescue Task Force) and enter.",
        question: "Which principle for RTF operations in the Warm Zone is correct?",
        choices: [
          { text: "Medical personnel enter alone to treat casualties quickly", outcome: "bad", feedback: "Incorrect! The RTF principle is that medical personnel enter 'under police escort'. Solo entry exposes medical personnel to residual threats." },
          { text: "Medical personnel in body armor enter under police cover and apply MARCH", outcome: "good", feedback: "Correct! RTF: Police secure Warm Zone safety → body-armored medical personnel enter → MARCH protocol applied. This is the H (Hemorrhage control) and R (Rapid Extraction) phases of the Hartford Consensus THREAT principle." },
          { text: "Wait in the Cold Zone until police have 100% eliminated all threats", outcome: "neutral", feedback: "Partially appropriate. Perfect safety clearance is realistically impossible. The modern principle is to decide RTF entry at an acceptable risk level." },
          { text: "Park the ambulance as close as possible to the building entrance and wait for casualty transport", outcome: "bad", feedback: "Incorrect! Passive waiting wastes the golden hour. The core of RTF is 'actively entering the Warm Zone' to treat casualties." }
        ],
        correctChoice: 1,
        medicalInfo: "RTF composition: Police (escort) + body-armored paramedics (treatment). Korean reality: This is why joint training between the police special unit and 119 EMS is necessary."
      },
      {
        id: 3,
        situation: "Inside the hall you find an adult male with a gunshot wound to the thigh and massive hemorrhage. He is conscious but confused, with a weak radial pulse.",
        question: "What is the immediate treatment according to the MARCH protocol?",
        choices: [
          { text: "First check the airway and insert an NPA", outcome: "neutral", feedback: "M (Massive Hemorrhage) takes priority over airway. Femoral hemorrhage is an immediately life-threatening situation." },
          { text: "Apply a tourniquet 5-10 cm proximal to the wound and record the application time", outcome: "good", feedback: "Correct! MARCH M phase: tourniquet 5-10 cm proximal application + time recording is the top priority. Femoral hemorrhage can cause fatal shock within minutes." },
          { text: "Rapidly administer 2 liters of IV fluid to normalize blood pressure", outcome: "bad", feedback: "Incorrect! Excessive IV fluids with uncontrolled hemorrhage disrupt clot formation and worsen bleeding. Permissive hypotension (systolic 80-90 mmHg) is the principle." },
          { text: "Immediately administer TXA 2,000 mg", outcome: "neutral", feedback: "TXA can be considered, but direct hemorrhage control with a tourniquet must come first. TXA dosing: initial 1,000 mg (over 10 minutes), then 1,000 mg (over 8 hours)." }
        ],
        correctChoice: 1,
        medicalInfo: "Leading preventable cause of death in combat/terror situations: controllable extremity hemorrhage. The tourniquet is the single most important intervention in tactical environments."
      },
      {
        id: 4,
        situation: "After applying the tourniquet you continue the patient assessment. An open sucking wound is found on the left chest, and respiratory distress is progressively worsening.",
        question: "What is the treatment in the R (Respiration) phase of MARCH?",
        choices: [
          { text: "Immediately perform endotracheal intubation (RSI)", outcome: "neutral", feedback: "In the Warm Zone, a supraglottic airway (SGA-first) strategy is recommended. RSI can be performed more safely in the Cold Zone." },
          { text: "Apply a chest seal dressing (vented/one-way valve) with 3-side occlusion", outcome: "good", feedback: "Correct! Open pneumothorax treatment: 3-side occlusion with a vented chest seal dressing. Full 4-side sealing risks tension pneumothorax, so one side is left open." },
          { text: "Completely wrap the chest wound with an Israeli bandage", outcome: "bad", feedback: "Incorrect! Completely sealing an open pneumothorax with an Israeli bandage can worsen it to a tension pneumothorax. A vented chest seal dressing is required." },
          { text: "Percuss the chest to check for tension pneumothorax before treating", outcome: "neutral", feedback: "Diagnostic evaluation is needed, but for an obvious open chest wound, immediate chest sealing takes priority." }
        ],
        correctChoice: 1,
        medicalInfo: "Essential IFAK contents: vented chest seal dressing. Open pneumothorax can progress to tension pneumothorax even after chest sealing, so continuous monitoring is required."
      },
      {
        id: 5,
        situation: "After treatment you move the patient to the Cold Zone. More than 10 casualties are gathering there. START triage must be performed.",
        question: "In START triage, how would you classify a patient with a respiratory rate of 28/min, normal radial pulse, and response to simple commands?",
        choices: [
          { text: "Black (Deceased)", outcome: "bad", feedback: "Incorrect! Black is for patients who are apneic even after airway repositioning, or have no chance of survival." },
          { text: "Red (Immediate)", outcome: "neutral", feedback: "A respiratory rate of 28 is less than 30, so it does not meet the tachypnea threshold. Normal radial pulse, responds to commands — this patient is Yellow." },
          { text: "Yellow (Delayed)", outcome: "good", feedback: "Correct! START flow: respiratory rate <30 → normal pulse → follows commands → Yellow (Delayed). Immediate treatment is not required, but treatment is needed when medical resources are available." },
          { text: "Green (Minor)", outcome: "bad", feedback: "Incorrect! Green is for ambulatory patients who can walk independently. This patient cannot move without treatment." }
        ],
        correctChoice: 2,
        medicalInfo: "START Yellow criteria: non-ambulatory + respiratory rate 10-30/min + normal pulse + able to follow simple commands. Treatment is needed as soon as resources are available."
      },
      {
        id: 6,
        situation: "After triage: 2 Red, 3 Yellow, 5 Green. One of the Red patients is suspected to have a traumatic brain injury (TBI).",
        question: "How does the blood pressure management goal for a suspected TBI patient differ from a general trauma patient?",
        choices: [
          { text: "Target the same systolic 80-90 mmHg", outcome: "bad", feedback: "Incorrect! Permissive hypotension is contraindicated in TBI patients. Reduced cerebral perfusion pressure worsens secondary brain injury." },
          { text: "TBI patients require maintaining systolic BP >110 mmHg", outcome: "good", feedback: "Correct! TBI patients target systolic BP >110 mmHg to maintain cerebral perfusion pressure. This is a critical difference from the permissive hypotension (80-90 mmHg) used for general trauma." },
          { text: "TBI patients receive no IV fluids at all", outcome: "bad", feedback: "Incorrect! It is not about withholding fluids, but about setting a higher blood pressure target (>110 mmHg) to maintain adequate cerebral perfusion pressure." },
          { text: "TBI patients also target the same systolic 60-70 mmHg", outcome: "bad", feedback: "Incorrect! Systolic 60-70 mmHg is severe hypotension that further worsens TBI." }
        ],
        correctChoice: 1,
        medicalInfo: "Key TBI principle: maintain systolic BP >110 mmHg to prevent secondary brain injury. Hypotension + hypoxia dramatically increase mortality in TBI patients."
      },
      {
        id: 7,
        situation: "Field treatment is complete and you prepare for transport. One patient has ongoing active bleeding from the axillary area — a junctional hemorrhage not controllable with a tourniquet.",
        question: "What is the most appropriate treatment for axillary (junctional) hemorrhage?",
        choices: [
          { text: "Apply pressure with an Israeli bandage alone", outcome: "neutral", feedback: "Partially appropriate. Pressure bandage alone is often insufficient to control junctional hemorrhage." },
          { text: "Pack hemostatic gauze (QuikClot etc.) deeply into the wound and maintain strong direct pressure for at least 3 minutes", outcome: "good", feedback: "Correct! Junctional hemorrhage not amenable to tourniquet → wound packing is the answer. Pack kaolin/chitosan hemostatic gauze deeply and apply firm pressure for 3+ minutes." },
          { text: "Apply only the SAM Junctional Tourniquet (SJT)", outcome: "neutral", feedback: "SJT is primarily used for inguinal (groin) hemorrhage. For axillary bleeding, wound packing is the first-line treatment." },
          { text: "Cool the bleeding area with ice", outcome: "bad", feedback: "Incorrect! Ice cooling has no hemostatic effect and risks frostbite. Wound packing with direct pressure is the principle." }
        ],
        correctChoice: 1,
        medicalInfo: "Junctional hemorrhage devices: SAM Junctional Tourniquet, Combat Ready Clamp (CRoC), JETT, AAJT. When these are unavailable in the field, hemostatic gauze packing with firm direct pressure is the best option."
      },
      {
        id: 8,
        situation: "All casualties have been treated. Hypothermia prevention is needed before transport. Massive hemorrhage patients face the risk of the Triad of Death.",
        question: "Which of the following is NOT included in the Triad of Death?",
        choices: [
          { text: "Hypothermia", outcome: "bad", feedback: "Hypothermia is a core component of the Triad of Death." },
          { text: "Coagulopathy", outcome: "bad", feedback: "Coagulopathy is a core component of the Triad of Death." },
          { text: "Metabolic Acidosis", outcome: "bad", feedback: "Metabolic acidosis is a core component of the Triad of Death." },
          { text: "Hypotension", outcome: "good", feedback: "Correct! The Triad of Death is hypothermia + coagulopathy + metabolic acidosis. Hypotension is a symptom of hemorrhagic shock, not a component of the triad." }
        ],
        correctChoice: 3,
        medicalInfo: "Triad of Death prevention: remove wet clothing + warming blanket (Mylar space blanket) + warmed IV fluids. Massive hemorrhage patients always carry a risk of hypothermia."
      }
    ],
    reward: { xp: 1500, coins: 600, badge: "🛡️ Tactical Medical Vanguard" }
  },

  // ─── TACTICAL SCENARIO 2: BOSTON MARATHON BOMBING ───
  {
    id: "tactical_scenario_boston_marathon",
    title: "💥 Boston Marathon Bombing Recreation — Mass Blast Incident",
    titleEn: "Boston Marathon Bombing Recreation — Mass Blast Incident",
    description: "April 15, 2013, Boston Marathon finish line. Two pressure-cooker bombs detonated in succession. 3 were killed and more than 260 were injured. You are a member of the disaster medical team on scene. Perform blast injury treatment, patient triage, and amputation management perfectly.",
    category: "blast_injuries",
    difficulty: "hard",
    estimatedTime: "25 minutes",
    learningObjectives: [
      "Classifying the four blast injury types",
      "Recognizing secondary explosion risk",
      "Traumatic amputation management",
      "Applying lessons from the Boston Marathon bombing"
    ],
    steps: [
      {
        id: 1,
        situation: "Smoke rises near the finish line with an explosion. Dozens are down, many with severe lower-extremity bleeding. You and your teammates are about to rush to the scene.",
        question: "What is the most important first action immediately after the explosion?",
        choices: [
          { text: "Rush in immediately and begin treating the nearest casualty", outcome: "bad", feedback: "Incorrect! You have overlooked the secondary device risk. Terrorists use the tactic of planting secondary bombs to lure responders." },
          { text: "Assess the scene with secondary device risk in mind, and enter only after EOD confirmation", outcome: "good", feedback: "Correct! Rule #1 for blast scene response: awareness of secondary device risk. EOD safety clearance must come first — this is the key lesson from the Boston Marathon bombing." },
          { text: "Call the hospital to report the number of casualties and wait for ambulances", outcome: "neutral", feedback: "Hospital notification is necessary, but secondary blast risk assessment must precede any decision to enter and treat." },
          { text: "Locate the most severely injured patient and focus treatment there", outcome: "bad", feedback: "Incorrect! Entering without assessing secondary blast risk and scene safety can turn medical personnel into additional casualties." }
        ],
        correctChoice: 1,
        medicalInfo: "Boston Marathon 2013 lessons: Coordinated police-EMS collaboration enabling early Warm Zone entry was decisive in improving survival. Off-duty medical personnel and bystanders who improvised tourniquets to control massive hemorrhage were key factors in reducing casualties."
      },
      {
        id: 2,
        situation: "EOD has declared the scene safe. Upon entry you find: ① a patient with tinnitus and hearing loss (no visible trauma), ② a patient with shrapnel-embedded lower extremity lacerations, ③ a patient thrown by the blast and struck a wall, ④ a patient with respiratory distress from gas inhalation.",
        question: "Which correctly matches the four blast injury types (Primary–Quaternary)?",
        choices: [
          { text: "① Primary / ② Secondary / ③ Tertiary / ④ Quaternary", outcome: "good", feedback: "Correct! ① tympanic rupture/tinnitus = Primary (blast wave) / ② shrapnel penetration = Secondary (fragments) / ③ thrown and struck = Tertiary (displacement) / ④ gas inhalation = Quaternary (flame/gas). Perfect classification!" },
          { text: "① Secondary / ② Primary / ③ Quaternary / ④ Tertiary", outcome: "bad", feedback: "Incorrect! Primary is blast-wave injury characterized by tympanic rupture, pulmonary contusion, and intestinal rupture. Shrapnel is Secondary." },
          { text: "① Quaternary / ② Tertiary / ③ Secondary / ④ Primary", outcome: "bad", feedback: "Incorrect! Review the order: Primary: blast wave, Secondary: fragments, Tertiary: displacement, Quaternary: flame/gas/collapse." },
          { text: "Classify all as Secondary (shrapnel) injuries", outcome: "bad", feedback: "Incorrect! Blast injuries are divided into four distinct types. Treatment priorities differ by type." }
        ],
        correctChoice: 0,
        medicalInfo: "Primary: blast wave → tympanic membrane, lungs, intestines. Secondary: fragments → penetrating injury. Tertiary: displacement/impact → fractures, head injury. Quaternary: flame, gas, collapse → burns, asphyxia."
      },
      {
        id: 3,
        situation: "Multiple patients have traumatic amputation injuries to the lower extremities. The first patient has a complete amputation below the knee with massive hemorrhage.",
        question: "What is the first step in managing a traumatic amputation?",
        choices: [
          { text: "Irrigate the amputation site and prepare for hospital transport", outcome: "bad", feedback: "Incorrect! With active massive hemorrhage, irrigation is performed after hemorrhage control." },
          { text: "Apply a tourniquet 5-10 cm proximal to the amputation and record the time", outcome: "good", feedback: "Correct! Amputation = immediate tourniquet. Apply 5-10 cm proximal, tighten until bleeding stops, always record application time. At the Boston scene, bystanders improvised this treatment and saved countless lives." },
          { text: "Attempt to directly reattach the amputated part on scene", outcome: "bad", feedback: "Incorrect! Field reattachment is not possible. After immediate hemorrhage control, the amputated part is preserved separately." },
          { text: "Place the amputated part directly on ice", outcome: "bad", feedback: "Incorrect! Direct ice contact causes freeze injury. Correct method: wrap in moist sterile gauze, place in a plastic bag, then in a container of ice water (no direct ice contact)." }
        ],
        correctChoice: 1,
        medicalInfo: "Amputation treatment sequence: ① tourniquet (5-10 cm proximal, time recorded) → ② moist sterile dressing on stump → ③ amputated part: wrap in sterile gauze, place in plastic bag, preserve in ice-water container (no direct ice contact)."
      },
      {
        id: 4,
        situation: "You have found the amputated leg of the second amputation patient. Treatment is needed to preserve it correctly.",
        question: "What is the correct method to preserve an amputated limb?",
        choices: [
          { text: "Place the amputated surface directly on dry ice", outcome: "bad", feedback: "Incorrect! Direct contact with dry ice (extremely low temperature) causes severe freeze injury." },
          { text: "Irrigate with sterile saline, wrap in moist sterile gauze, place in a plastic bag, and preserve in an ice-water container", outcome: "good", feedback: "Correct! Amputated part preservation — 3 steps: ① saline irrigation → ② moist sterile gauze + plastic bag → ③ ice+water container (no direct contact). Proper cold preservation improves replantation success rate." },
          { text: "Store at room temperature during transport", outcome: "bad", feedback: "Incorrect! Room temperature storage accelerates tissue damage. Cold preservation (around 4°C) extends the viable replantation window." },
          { text: "Submerge directly in a saline container", outcome: "neutral", feedback: "Partially appropriate. Saline is a good choice, but prolonged submersion can damage tissue. The standard method is wrapping in moist gauze, placing in plastic, then in an ice-water container." }
        ],
        correctChoice: 1,
        medicalInfo: "Absolute contraindications for amputated parts: direct ice contact (freeze injury) / dry ice / preservatives / room temperature. With proper cold preservation, replantation window: limb within 6 hours, finger within 12 hours."
      },
      {
        id: 5,
        situation: "There are more than 50 casualties on scene. Triage must be performed quickly. An 8-year-old child is found with no breathing initially; after airway repositioning, still no breathing. A pulse is palpable.",
        question: "When using JumpSTART, what is the next step for this child?",
        choices: [
          { text: "Immediately classify as Black", outcome: "bad", feedback: "Incorrect! In JumpSTART, apnea with a palpable pulse in a child warrants 5 rescue breaths first. The primary cause of pediatric cardiac arrest is respiratory failure." },
          { text: "Classify immediately as Black without attempting airway reopening, same as adult START", outcome: "bad", feedback: "Incorrect! You have missed the key difference between JumpSTART and START. JumpSTART provides children (≤8 years or <45 kg) an opportunity for 5 rescue breaths." },
          { text: "Attempt 5 rescue breaths. If breathing resumes, classify Red; if still apneic, classify Black", outcome: "good", feedback: "Correct! JumpSTART key difference: apneic child with pulse → 5 rescue breaths → breathing resumes = Red / still apneic = Black. Because respiratory causes dominate pediatric cardiac arrest, this step saves lives." },
          { text: "Begin CPR immediately", outcome: "neutral", feedback: "CPR is not performed within the triage system. CPR during triage wastes resources. Perform only the 5 JumpSTART rescue breaths, then classify." }
        ],
        correctChoice: 2,
        medicalInfo: "JumpSTART applies to: children ≤8 years or <45 kg. Key difference from START: apnea + palpable pulse → 5 rescue breaths → reassess. This step is the key to improving pediatric survival."
      },
      {
        id: 6,
        situation: "A patient with suspected tympanic membrane rupture complains of tinnitus and hearing loss. No visible trauma, but the patient was near the explosion.",
        question: "When tympanic membrane rupture is suspected, what is the most important additional assessment for this patient?",
        choices: [
          { text: "Perform a hearing test immediately and call an ENT specialist", outcome: "neutral", feedback: "Hearing testing will be needed later, but it is not the most important immediate assessment at a blast scene." },
          { text: "Actively assess for primary blast lung injury (pulmonary contusion) and tension pneumothorax", outcome: "good", feedback: "Correct! Tympanic membrane rupture is a marker of blast wave (primary blast injury). The same blast wave can cause pulmonary contusion and potential tension pneumothorax, so active evaluation is required in the R (Respiration) phase of MARCH." },
          { text: "The patient can walk, so classify as Green and move to the next patient", outcome: "bad", feedback: "Incorrect! Even ambulatory patients can develop delayed symptoms from primary blast lung injury. Tympanic rupture patients should be classified at minimum Yellow with continuous respiratory monitoring." },
          { text: "Prescribe antibiotics and irrigate the ear", outcome: "bad", feedback: "Incorrect! Prescribing antibiotics or irrigating the ear at the scene is inappropriate. Pulmonary injury assessment is a far more important immediate priority." }
        ],
        correctChoice: 1,
        medicalInfo: "Relationship between tympanic rupture and pulmonary injury: 15-50 psi blast wave → tympanic perforation in >50% of patients. The same blast wave can cause pulmonary contusion and air embolism (a leading cause of death). Always suspect 'tympanic rupture = possible pulmonary injury'."
      },
      {
        id: 7,
        situation: "You are considering TXA administration for a massive hemorrhage patient. The patient is being treated 2 hours after the explosion.",
        question: "Is TXA (tranexamic acid) administration appropriate for this patient?",
        choices: [
          { text: "Appropriate. Administer initial 1,000 mg IV over 10 minutes", outcome: "good", feedback: "Correct! TXA must be administered within 3 hours of injury. At 2 hours, it is within the window. Initial dose: 1,000 mg IV over 10 minutes → then 1,000 mg over 8 hours." },
          { text: "Not appropriate. TXA must never be given to blast patients", outcome: "bad", feedback: "Incorrect! TXA should be actively considered for patients with significant hemorrhage. Within 3 hours of injury + significant bleeding → TXA is appropriate even for blast patients." },
          { text: "Not appropriate. More than 3 hours have already passed, so it is contraindicated", outcome: "bad", feedback: "Incorrect! 2 hours elapsed is within the 3-hour window, so administration is appropriate. Beyond 3 hours, TXA may increase thrombotic risk and is contraindicated." },
          { text: "Administer only TXA 500 mg", outcome: "bad", feedback: "Incorrect! Standard TXA dosing: initial 1,000 mg (over 10 minutes), then 1,000 mg (over 8 hours). 500 mg is sub-therapeutic." }
        ],
        correctChoice: 0,
        medicalInfo: "TXA key points: administration within 3 hours of trauma reduces mortality and transfusion requirements. Administration after 3 hours increases thrombotic risk. Korean status: not included in the official scope of practice for Level 1 EMTs (legal reform needed)."
      }
    ],
    reward: { xp: 2000, coins: 800, badge: "💥 Explosive Specialist Rescuer" }
  },

  // ─── TACTICAL SCENARIO 3: SWAT OPERATION ───
  {
    id: "tactical_scenario_swat",
    title: "⚡ SWAT Operation Medical Support — Armed Hostage Situation",
    titleEn: "SWAT Operation Medical Support — Armed Hostage Situation",
    description: "Three armed assailants are holding 15 hostages at a bank in downtown Seoul. You are a Tactical Medical Provider (TMP) assigned to the police special operations team. Execute the 3 phases of TCCC and hemorrhage control perfectly to ensure mission success and minimize casualties.",
    category: "tccc",
    difficulty: "boss",
    estimatedTime: "30 minutes",
    learningObjectives: [
      "Applying the 3 phases of TCCC",
      "Remote Assessment Medicine (RAM) technique",
      "Understanding REBOA and non-compressible torso hemorrhage",
      "RSI drug selection (Etomidate vs Ketamine)",
      "Dual Command system"
    ],
    steps: [
      {
        id: 1,
        situation: "The special operations team is in standoff at the bank entrance. Gunshots were heard inside and a casualty is visible through a first-floor window. Direct approach is impossible — this is a Hot Zone. You are observing the casualty through high-powered binoculars.",
        question: "In this situation, which of the following is NOT a vital sign assessable by Remote Assessment Medicine (RAM)?",
        choices: [
          { text: "Subtle chest movement from breathing", outcome: "bad", feedback: "Chest movement from breathing is a core survival sign in RAM." },
          { text: "Subtle spontaneous movement of limbs or head", outcome: "bad", feedback: "Spontaneous movement is a core sign of a conscious survivor." },
          { text: "Pupil size and light reflex", outcome: "good", feedback: "Correct! Pupil reaction is difficult to observe at distance without direct contact. RAM focuses on macroscopic signs observable through binoculars, night-vision, or high-power scopes. Pupil assessment requires direct approach." },
          { text: "Presence of a large pool of blood", outcome: "bad", feedback: "Blood pooling is an important RAM observation item evaluated as an indicator of presumed death." }
        ],
        correctChoice: 2,
        medicalInfo: "RAM survival signs: respiratory chest movement, subtle limb/head movement, communication attempts. Presumed-death signs: complete absence of movement, large blood pool, pale/cyanotic skin, obviously non-survivable trauma."
      },
      {
        id: 2,
        situation: "During negotiations, a special operations officer suddenly takes a gunshot wound to the abdomen and goes down. Gunfire continues. This is a Care Under Fire (CUF) situation.",
        question: "What is the immediate treatment in the CUF phase?",
        choices: [
          { text: "Rush in immediately to dress the abdominal wound", outcome: "bad", feedback: "Incorrect! Running toward a shooting creates additional casualties. In CUF, self-aid and cover take priority." },
          { text: "Radio the injured officer to move behind cover and apply a tourniquet themselves", outcome: "good", feedback: "Correct! CUF: Self-Aid is the top priority. The injured officer self-applies a tourniquet and moves behind cover. Abdominal wounds are difficult to control directly, but if extremity bleeding is also present, tourniquet takes priority." },
          { text: "Request emergency evacuation immediately and leave the scene", outcome: "neutral", feedback: "Evacuation request is necessary, but rather than leaving the scene, maintain cover while coordinating threat elimination." },
          { text: "Request police snipers to eliminate the attacker", outcome: "neutral", feedback: "Partially appropriate but not the TMP's direct role. This is a decision for the tactical commander. TMP must focus on medical support." }
        ],
        correctChoice: 1,
        medicalInfo: "TCCC CUF key principle: the goal is not 'the best medic' but 'a medic who survives the scene'. Self-aid → cover → assist in threat elimination. Bypassing a wounded comrade to eliminate the threat first ultimately saves more lives."
      },
      {
        id: 3,
        situation: "The special operations team has neutralized the attackers and a Warm Zone has been declared. You approach the abdominal gunshot patient. Conscious but systolic BP 75 mmHg, heart rate 130. Abdominal hemorrhage is suspected.",
        question: "What is the field treatment goal for this patient with suspected non-compressible torso hemorrhage (NCTH)?",
        choices: [
          { text: "Immediately administer 2 liters of IV fluid to raise BP above 120 mmHg", outcome: "bad", feedback: "Incorrect! Normalizing BP with an uncontrolled hemorrhage source disrupts clot formation and worsens bleeding. Permissive hypotension is the principle." },
          { text: "Prepare REBOA insertion, maintain systolic 80-90 mmHg, and immediately transport Load-and-Go to a surgical center", outcome: "good", feedback: "Correct! NCTH = not controllable in the field. REBOA uses a femoral artery catheter to occlude the aorta → temporarily blocking blood flow proximal to the hemorrhage site. Goal: permissive hypotension (80-90 mmHg) + immediate Load-and-Go transport to a surgical center." },
          { text: "Apply firm pressure to the abdomen to control hemorrhage", outcome: "bad", feedback: "Incorrect! Internal abdominal hemorrhage cannot be controlled with external pressure. This is the meaning of 'Non-Compressible' hemorrhage." },
          { text: "Complete thorough field treatment before deciding on transport (Stay-and-Play)", outcome: "bad", feedback: "Incorrect! NCTH is an absolute indication for Load-and-Go. Delaying field treatment time dramatically reduces survival. Immediate transport is the best approach." }
        ],
        correctChoice: 1,
        medicalInfo: "REBOA: Resuscitative Endovascular Balloon Occlusion of the Aorta. Femoral artery → catheter insertion → balloon inflation in aorta → blocks blood flow proximal to hemorrhage site. Applied at Zone 1 (below diaphragm) or Zone 3 (below renal arteries). Serves as a 'bridge' during transport to a surgical facility."
      },
      {
        id: 4,
        situation: "One of the hostages has severe facial trauma and an oral airway cannot be established. RSI (Rapid Sequence Intubation) is needed. The patient is hypotensive with BP 90 mmHg.",
        question: "Which RSI induction agent is most appropriate for a hypotensive patient?",
        choices: [
          { text: "Etomidate 0.3 mg/kg", outcome: "neutral", feedback: "Partially appropriate. Etomidate is hemodynamically stable, but ketamine is more appropriate for hypotensive patients without head injury." },
          { text: "Ketamine 1-2 mg/kg", outcome: "good", feedback: "Correct! Ketamine raises blood pressure and causes bronchodilation, making it the optimal induction agent for hypotensive and hemorrhagic shock patients. Sympathomimetic stimulation raises BP." },
          { text: "Midazolam 0.2 mg/kg", outcome: "bad", feedback: "Incorrect! Midazolam can lower blood pressure and is dangerous in an already hypotensive patient." },
          { text: "Propofol 1-2 mg/kg", outcome: "bad", feedback: "Incorrect! Propofol can cause severe hypotension and is contraindicated in hemodynamically unstable patients." }
        ],
        correctChoice: 1,
        medicalInfo: "RSI induction agent comparison: Etomidate (hemodynamically stable, preferred with head injury) vs Ketamine (raises BP, preferred in hypotension/shock). Ketamine also bronchodilates, beneficial in asthma. Neuromuscular blockers: Succinylcholine (1.5 mg/kg) or Rocuronium (1.2 mg/kg)."
      },
      {
        id: 5,
        situation: "After RSI, endotracheal intubation is difficult (3 failed attempts). The patient's oxygen saturation is dropping rapidly. This is a Can't Intubate situation.",
        question: "In a 'Can't Intubate, Can Ventilate' situation, what is the next step?",
        choices: [
          { text: "Continue attempting intubation (4th attempt)", outcome: "bad", feedback: "Incorrect! Repeated attempts after 3 failures worsen airway trauma and waste time. A backup plan is needed." },
          { text: "Insert a supraglottic airway (SGA: i-gel, LMA, etc.)", outcome: "good", feedback: "Correct! Can't Intubate + Can Ventilate: immediately use SGA (i-gel, LMA, etc.). The SGA-first strategy has high success rates in tactical environments and is an international trend. Korean 119 statistics (2017-2018) also showed i-gel dominating at 18,502 uses." },
          { text: "Maintain only BVM ventilation while waiting for transport", outcome: "neutral", feedback: "BVM is acceptable as a temporary measure, but SGA should be inserted for a stable long-term airway." },
          { text: "Perform cricothyrotomy immediately", outcome: "neutral", feedback: "Cricothyrotomy is the last resort for 'Can't Intubate, Can't Ventilate' situations. Since BVM ventilation is currently possible, SGA comes first." }
        ],
        correctChoice: 1,
        medicalInfo: "Airway management sequence: BVM → SGA → ETI (intubation) → Cricothyrotomy. Tactical environment: SGA-first strategy (high success rate). Cricothyrotomy: absolute last resort. Under Korean law, EMTs cannot perform cricothyrotomy (physician-only procedure)."
      },
      {
        id: 6,
        situation: "The hostage rescue operation is complete. Special operations officers and hostages have been transported to the Cold Zone. As TMP, you must submit a Dual Command report after the operation.",
        question: "In the TMP's Dual Command system, to whom does the TMP report?",
        choices: [
          { text: "Report only to the police commander", outcome: "bad", feedback: "Incorrect! Dual Command means TMP reports to both command structures." },
          { text: "Report only to the medical commander", outcome: "bad", feedback: "Incorrect! Reporting only to the medical commander severs law enforcement operational information." },
          { text: "Report simultaneously to both law enforcement (police) command and medical command", outcome: "good", feedback: "Correct! TMP operates within two authority structures: ① law enforcement commander (operational aspect) + ② medical commander (medical aspect). This dual structure improves the efficiency of medical support in tactical situations." },
          { text: "Report only to the National Disaster and Safety Headquarters", outcome: "bad", feedback: "Incorrect! Reporting to the Disaster and Safety Headquarters may be required, but at the scene, the TMP's direct reporting targets are the police commander and the medical commander." }
        ],
        correctChoice: 2,
        medicalInfo: "Dual Command is the unique command structure of the TMP. Korean status: no official TMP qualification exists, 119 EMS entry into hot zones is legally restricted, command structure issues exposed by the Itaewon disaster → from 2023, a mutual liaison officer dispatch system between the National Police Agency and the Fire Agency has been implemented."
      }
    ],
    reward: { xp: 2500, coins: 1000, badge: "⚡ SWAT Tactical Medicine Expert" }
  }
];

// ============================================
// SECTION 5: CTM SCENARIOS (3 RPG Scenarios)
// ============================================

const ctmScenarios = [

  // ─── CTM SCENARIO 1: SCHOOL HOSTAGE ───
  {
    id: "ctm_scenario_school_hostage",
    title: "🏫 Educational Institution Hostage Crisis — Beslan-Style Event",
    titleEn: "Educational Institution Hostage Crisis — Beslan-Style Event",
    description: "A simulation modeled on the 2004 Beslan school siege in Russia. Armed forces have seized an elementary school on the outskirts of Seoul, taking 800 students and staff hostage. You are the on-scene medical officer (CTM team leader). Apply pediatric mass casualty management and Counter-Terrorism Medicine (CTM) principles.",
    category: "ctm_basics",
    difficulty: "hard",
    estimatedTime: "25 minutes",
    learningObjectives: [
      "Understanding soft target characteristics of educational institution terrorism",
      "Pediatric JumpSTART triage and special vulnerabilities",
      "Applying the CTM 4-phase disaster cycle",
      "Real-world application of Beslan lessons"
    ],
    steps: [
      {
        id: 1,
        situation: "3 hours into the school hostage crisis. The armed forces have planted explosives in the building. Your medical team is on standby in the Cold Zone. A request has come from the negotiation team that insulin is needed for a hostage with diabetes.",
        question: "What is the appropriate role of the TMP in a Barricade Medicine situation?",
        choices: [
          { text: "Enter the building directly to rescue the hostages", outcome: "bad", feedback: "Incorrect! Medical personnel entering the Hot Zone alone is prohibited. Barricade Medicine centers on 'remote medical support'." },
          { text: "Support the negotiation team by using medical supplies (insulin) as a negotiation tool, and remotely instruct hostages on first aid", outcome: "good", feedback: "Correct! Barricade Medicine roles: ① provide medical information (suspect's medications/history) ② remote medical guidance (instruct hostages via radio/phone) ③ use medical supplies as a negotiation card. As in the Beslan incident, medical support during negotiations is a key tactic for reducing casualties." },
          { text: "Immediately deploy DMAT into the Hot Zone", outcome: "bad", feedback: "Incorrect! DMAT operates only in the Cold Zone. Entry into the Hot Zone or Warm Zone is legally restricted." },
          { text: "Focus solely on preparing the field medical team rather than assessing hostage status", outcome: "neutral", feedback: "Field preparation is necessary, but medical support for the negotiation team (Barricade Medicine) must be performed simultaneously." }
        ],
        correctChoice: 1,
        medicalInfo: "Barricade Medicine: During negotiations, TMP acts as medical expert performing ① scene safety analysis ② remote assessment of hostage medical status ③ medical advisory support for negotiation tactics."
      },
      {
        id: 2,
        situation: "Negotiations have failed and explosions occur inside the building. Hundreds of hostages are streaming out. Children make up approximately 60% (480) of all hostages.",
        question: "When pediatric mass casualties occur, what is the key difference from adult triage?",
        choices: [
          { text: "Use the same START triage for children as for adults", outcome: "bad", feedback: "Incorrect! Children (≤8 years or <45 kg) must use JumpSTART. Applying adult START to children results in inaccurate triage." },
          { text: "Use JumpSTART, and attempt 5 rescue breaths for apneic children with a palpable pulse", outcome: "good", feedback: "Correct! Key JumpSTART difference: apneic child with pulse → 5 rescue breaths → breathing resumes (Red) / still apneic (Black). Respiratory failure is the primary cause of pediatric cardiac arrest. The Beslan incident emphasized the importance of pediatric triage systems." },
          { text: "Classify all children as Red (Immediate)", outcome: "bad", feedback: "Incorrect! Classifying all children as Red wastes resources on minor cases. Accurate JumpSTART triage is required." },
          { text: "Treat children after adults", outcome: "bad", feedback: "Incorrect! Children have lower physiological reserve than adults and can deteriorate rapidly. Priority must be determined by triage criteria." }
        ],
        correctChoice: 1,
        medicalInfo: "Special vulnerabilities of children: ① proximity to ground + higher ventilation rate → increased chemical inhalation risk ② lower physiological reserve → rapid deterioration ③ higher body surface area-to-mass ratio → hypothermia risk ④ larger head-to-body ratio → higher likelihood of head trauma ⑤ inability to communicate → delayed recognition of toxic syndromes."
      },
      {
        id: 3,
        situation: "Three children injured by the explosion: A (8 years, crying and able to move independently), B (10 years, apneic with palpable pulse), C (12 years, respiratory rate 35/min).",
        question: "What is the correct JumpSTART classification?",
        choices: [
          { text: "A: Green, B: Red (re-evaluate after 5 rescue breaths), C: Red", outcome: "good", feedback: "Correct! A (ambulatory) = Green. B (apneic + pulse) = 5 rescue breaths → Red if breathing resumes. C (RR 35/min = >30) = Red. Perfect JumpSTART classification!" },
          { text: "A: Yellow, B: Black, C: Red", outcome: "bad", feedback: "Incorrect! A is ambulatory so Green. In JumpSTART, a child with a pulse is not classified Black before attempting 5 rescue breaths." },
          { text: "Classify all as Red", outcome: "bad", feedback: "Incorrect! A is ambulatory and therefore Green. The purpose of triage is optimal resource allocation, so accurate classification is critical." },
          { text: "A: Green, B: Black (apneic), C: Yellow (breathing present)", outcome: "bad", feedback: "Incorrect! B has a pulse, so JumpSTART requires 5 rescue breaths first. C has an RR of 35/min, which meets the Red threshold (>30/min)." }
        ],
        correctChoice: 0,
        medicalInfo: "JumpSTART key: applies to children ≤8 years or <45 kg. Difference from adult START: apnea + pulse → 5 rescue breaths. Beslan incident: 186 children killed → the event that awakened the world to the need for a pediatric-specific triage system."
      },
      {
        id: 4,
        situation: "A drum containing chemical agents was found among the explosion debris. Some children are showing extreme secretions, pupil constriction, and convulsions.",
        question: "What toxidrome corresponds to the symptoms (excessive secretions, miosis, convulsions) these children are showing?",
        choices: [
          { text: "Opioid toxidrome — administer naloxone", outcome: "bad", feedback: "Opioid toxidrome is miosis + decreased consciousness + respiratory depression. Excessive secretions and convulsions are more characteristic of nerve agents than opioids." },
          { text: "Nerve agent toxidrome (SLUDGEM) — administer atropine + pralidoxime", outcome: "good", feedback: "Correct! SLUDGEM = Salivation, Lacrimation, Urination, Defecation, GI distress, Emesis, Miosis. Classic presentation of nerve agent (sarin etc.) exposure. Antidote: atropine + pralidoxime. Children are at higher inhalation risk than adults and may present with more severe symptoms." },
          { text: "Choking agent toxidrome — administer oxygen", outcome: "bad", feedback: "Choking agents primarily cause respiratory distress and spasm. The SLUDGEM pattern is characteristic of nerve agents." },
          { text: "Radiation exposure — decontaminate and observe", outcome: "bad", feedback: "Radiation exposure may cause early nausea/vomiting, but this differs from the SLUDGEM pattern. Immediate neurological symptoms suggest chemical rather than radiation exposure." }
        ],
        correctChoice: 1,
        medicalInfo: "Tokyo subway sarin attack (1995) lessons: 13 dead, 5,500 injured. Nerve agent effects maximized in enclosed spaces. Children: proximity to ground + higher ventilation rate → greater toxic substance inhalation. Immediate atropine + pralidoxime administration is critical for survival."
      },
      {
        id: 5,
        situation: "The incident has concluded. The current phase of the CTM 4-phase disaster cycle is Recovery. Many of the child survivors have been psychologically traumatized.",
        question: "What is the approximate rate of PTSD development in children affected by terrorism?",
        choices: [
          { text: "5-10%", outcome: "bad", feedback: "Incorrect! The actual rate is much higher. The psychological impact on children affected by terrorism can be more severe than in adults." },
          { text: "10-15%", outcome: "bad", feedback: "Incorrect! Research data shows a higher rate." },
          { text: "28-50%", outcome: "good", feedback: "Correct! PTSD develops in 28-50% of children who witness or are affected by terrorism. Additionally, parents' responses to terrorism directly contribute to children's symptom development. Pediatric psychological support is essential in the CTM Recovery phase." },
          { text: "70% or more", outcome: "bad", feedback: "Incorrect! 28-50% is the accurate range. This is still a very high figure that underscores the importance of pediatric mental health support." }
        ],
        correctChoice: 2,
        medicalInfo: "CTM 4 phases: Mitigation → Preparedness → Response → Recovery. Pediatric psychological support in Recovery: CISM (Critical Incident Stress Management), PFA (Psychological First Aid), long-term follow-up. Beslan incident: 186 children killed → triggered a global paradigm shift in educational institution security."
      },
      {
        id: 6,
        situation: "During the After-Action Review, preventable causes of death are being analyzed. The reasons educational institutions are classified as 'soft targets' are being examined.",
        question: "According to GTD statistics, what proportion of all terrorist attacks target educational institutions?",
        choices: [
          { text: "Approximately 10%", outcome: "bad", feedback: "Incorrect! The actual proportion is much lower." },
          { text: "Approximately 5%", outcome: "bad", feedback: "Incorrect! Even lower." },
          { text: "Approximately 2.7%", outcome: "good", feedback: "Correct! GTD 1970-2020: educational institution attacks = 4,626 = approximately 2.7% of all attacks. Approximately 3,895 killed, 10,272 injured. While the proportion appears low, the actual toll is very high. Schools are security-vulnerable 'soft targets'." },
          { text: "Approximately 0.5%", outcome: "bad", feedback: "Incorrect! Per GTD, educational institution attacks represent approximately 2.7% (4,626 incidents) of all attacks." }
        ],
        correctChoice: 2,
        medicalInfo: "Educational institution terrorism statistics (GTD 1970-2020): total 4,626 incidents, 3,895 killed, 10,272 injured. Top attack type: bombs/explosions (2,324). Top country: Pakistan (976). Soft target characteristics: publicly accessible, non-secured environment, large numbers of vulnerable civilians (children)."
      }
    ],
    reward: { xp: 2000, coins: 800, badge: "🏫 Pediatric Rescue Expert" }
  },

  // ─── CTM SCENARIO 2: 9/11 STYLE ───
  {
    id: "ctm_scenario_911_style",
    title: "✈️ 9/11-Style Mass Terror Response",
    titleEn: "9/11-Style Mass Terror Response",
    description: "September 11, 2001. The worst terror attack in history — Al-Qaeda's aircraft hijacking killed more than 3,000 people. You are the team leader of the DMAT (Disaster Medical Assistance Team) dispatched to Manhattan, New York. Apply mass terror response, CBRNe threat assessment, and the NIMS command system perfectly.",
    category: "ctm_basics",
    difficulty: "boss",
    estimatedTime: "30 minutes",
    learningObjectives: [
      "Understanding the scale and medical response of the 9/11 attacks",
      "CBRNe threat assessment methods",
      "ICS/NIMS incident command system",
      "Large-scale MCI hospital surge response",
      "Understanding GTD statistics"
    ],
    steps: [
      {
        id: 1,
        situation: "At 8:46 AM, a passenger aircraft strikes the north tower of the World Trade Center. Numerous casualties are anticipated. As you approach the scene, an alert comes in of a second impact.",
        question: "In the initial response to a large-scale terrorist attack, which phase of the CTM disaster cycle is most critical?",
        choices: [
          { text: "Mitigation — re-examine preventive measures", outcome: "neutral", feedback: "Mitigation is a pre-event prevention phase. With the event already occurring, the Response phase takes priority." },
          { text: "Preparedness — review prior training plans", outcome: "neutral", feedback: "The Preparedness phase should occur beforehand. This is now the Response phase." },
          { text: "Response — immediately activate ICS, deploy DMAT, initiate hospital surge response", outcome: "good", feedback: "Correct! When terrorism occurs, immediate Response phase activation is needed: immediately activate ICS + deploy DMAT + prepare hospital surge capacity. Gregory Ciottone leading the Massachusetts DMAT at 9/11 is a prime example." },
          { text: "Recovery — develop a post-incident response plan", outcome: "bad", feedback: "Incorrect! Recovery is the post-incident phase. Immediate response is needed now." }
        ],
        correctChoice: 2,
        medicalInfo: "CTM 4 phases: Mitigation → Preparedness → Response → Recovery. 9/11 Response phase key lessons: ① immediate ICS/NIMS activation ② multi-wave DMAT deployment ③ local hospital surge capacity ④ maintain communications (radio network overload occurred). CTM definition: first introduced at Harvard Medical School & BIDMC Fellowship in 2017."
      },
      {
        id: 2,
        situation: "After the building collapse, more than 4,000 casualties are anticipated. An unidentified powder substance has been found at the scene. CBRNe threat potential must be assessed.",
        question: "Which actual bioterrorism incident occurred immediately after 9/11 and resulted in 7 deaths?",
        choices: [
          { text: "Salmonella dispersal (Oregon restaurants)", outcome: "bad", feedback: "The salmonella attack was carried out by the Rajneeshees in 1984. 778 injured with no deaths." },
          { text: "Anthrax letter attacks (Amerithrax, 2001)", outcome: "good", feedback: "Correct! Immediately after 9/11 in 2001, letters containing anthrax spores were sent to journalists and senators, killing 7. The timing overlapping with 9/11 maximized psychological terror. Bioterrorism is difficult to distinguish from natural disease, making early detection critical." },
          { text: "Smallpox dispersal (New York subway)", outcome: "bad", feedback: "This event did not actually occur. Smallpox is a Tier 1 bioterrorism agent but was not used in the 2001 attacks." },
          { text: "Sarin gas attack (Washington D.C.)", outcome: "bad", feedback: "This event did not actually occur. The most notable sarin gas terrorism case is the 1995 Tokyo subway attack." }
        ],
        correctChoice: 1,
        medicalInfo: "2001 anthrax attack (Amerithrax): 7 killed, numerous exposed. Anthrax is a Tier 1 bioterrorism agent: ① airborne transmission possible ② mass casualty potential ③ difficult to distinguish from natural disease. Treatment: pre-exposure vaccination + antibiotics (Ciprofloxacin or Doxycycline)."
      },
      {
        id: 3,
        situation: "You must establish a field command structure. ICS (Incident Command System) is being applied in a situation where thousands of casualties are anticipated.",
        question: "What is the role of the Law Enforcement Medical Coordinator (LEMC) in ICS?",
        choices: [
          { text: "Directly triage and treat patients", outcome: "bad", feedback: "Incorrect! Direct treatment is the role of the field medical team. LEMC has a coordination role." },
          { text: "Coordinate between law enforcement and medical sections, managing medical resource allocation and command", outcome: "good", feedback: "Correct! LEMC (Law Enforcement Medical Coordinator): links law enforcement ↔ medical sections. Korea currently lacks this position. 9/11 showed that command confusion amplified casualties — underscoring the importance of a unified command system." },
          { text: "Communicate with media to convey information to the public", outcome: "bad", feedback: "Media communication is the role of the Public Information Officer (PIO)." },
          { text: "Determine which patients are transported to hospital", outcome: "neutral", feedback: "Partially correct. LEMC includes transport decisions, but the core role is coordinating the link between law enforcement and medical sections." }
        ],
        correctChoice: 1,
        medicalInfo: "ICS structure: Incident Commander → Operations Section → LEMC (Tactical Medical Commander) → Hot/Warm/Cold Zone teams. 9/11 lesson: command confusion severely reduced response efficiency. Standardized via NIMS (National Incident Management System). Korean status: LEMC position does not exist."
      },
      {
        id: 4,
        situation: "Confirmed at the collapse scene that this was a conventional explosion, not a nuclear detonation like Hiroshima/Nagasaki. However, the possibility of a dirty bomb (RDD) containing radioactive material must be assessed.",
        question: "After RDD (Radiological Dispersal Device, dirty bomb) exposure, what proportion of radioactive contamination can be removed by removing clothing?",
        choices: [
          { text: "Approximately 20-30%", outcome: "bad", feedback: "Incorrect! The actual effect is much higher. Clothing removal is the simplest and most effective decontamination method." },
          { text: "Approximately 50-60%", outcome: "bad", feedback: "Incorrect! Research shows the effect of clothing removal is much higher than this." },
          { text: "Approximately 80-90%", outcome: "good", feedback: "Correct! Clothing removal alone can eliminate 80-90% of radioactive contamination. This is why immediate clothing removal is the top priority at radiation incident scenes. Subsequent soap-and-water washing removes additional contamination." },
          { text: "Nearly 100%", outcome: "bad", feedback: "Clothing removal eliminates 80-90%. The remainder requires additional decontamination with soap and water. The PRISM protocol steps are needed." }
        ],
        correctChoice: 2,
        medicalInfo: "3 principles of radiation response: ① time (minimize) ② distance (maximize, inverse-square law) ③ shielding (concrete, vehicles). Decontamination sequence: ① clothing removal (80-90%) → ② soap-and-water wash → ③ Geiger counter verification. Radiation dose: 2-10 Gy = medical intervention needed / >10 Gy = very low survival probability."
      },
      {
        id: 5,
        situation: "You are contacting local hospitals for surge response. US terrorism statistics (GTD 1970-2020) clearly demonstrate the destructive power of vehicle attacks.",
        question: "According to US GTD statistics, which type of terrorist attack has the highest deaths per incident?",
        choices: [
          { text: "Firearms — average 1.20 deaths per incident", outcome: "bad", feedback: "Firearms at 1.20 per incident is significant, but other types are far more lethal." },
          { text: "Explosives — average 0.22 deaths per incident", outcome: "bad", feedback: "Explosives are used most frequently but have low deaths per incident." },
          { text: "Vehicles — average 143.62 deaths per incident", outcome: "good", feedback: "Correct! In US GTD statistics, vehicle attacks overwhelmingly lead at an average of 143.62 deaths and 1,045.29 injuries per incident. This is because 9/11 was a vehicle (aircraft) terrorist attack. Total vehicle terrorism deaths: 3,016 (81% of all)." },
          { text: "Biological weapons — average 0.33 deaths per incident", outcome: "bad", feedback: "Biological weapons have 38 injuries per incident but only 0.33 deaths per incident." }
        ],
        correctChoice: 2,
        medicalInfo: "US GTD 1970-2020: total 2,499 incidents → 3,713 killed, 26,035 injured. Vehicle attacks: only 21 incidents but 3,016 killed (81.3%). The 9/11 aircraft attack completely dominates this statistic. Vehicle attacks at 143.62 deaths per incident overwhelm all other types."
      },
      {
        id: 6,
        situation: "After the 9/11 response is complete, GTD statistics are analyzed to assess future terrorism risk. The lethality of suicide bombings versus non-suicide bombings is compared.",
        question: "How many times more lethal per incident is a suicide bombing compared to a non-suicide bombing, on average?",
        choices: [
          { text: "Approximately 2-3 times", outcome: "bad", feedback: "Incorrect! The actual difference is much larger." },
          { text: "Approximately 5 times", outcome: "bad", feedback: "Incorrect! GTD data shows an even larger difference." },
          { text: "Approximately 9 times (suicide 9.66 vs non-suicide 1.09)", outcome: "good", feedback: "Correct! GTD 1970-2019: suicide bombings average 9.66 deaths per incident vs 1.09 for non-suicide. Suicide bombings are approximately 9 times more lethal than non-suicide bombings. After 9/11 in 2001, suicide terrorism became systematized as a major attack methodology." },
          { text: "Approximately 15 times or more", outcome: "bad", feedback: "Incorrect! 9 times (9.66 vs 1.09) is accurate. Still a remarkable difference." }
        ],
        correctChoice: 2,
        medicalInfo: "Suicide terrorism statistics (GTD): 5,416 incidents (6.59%) → 52,417 killed (38.52%). First modern suicide bombing (Beirut 1981) → Hezbollah 300 killed in 1983 → systematized after 9/11 in 2001. Using an ambulance as a VBIED allows >150 times more explosive than a bomber (5-12 kg) → risk of Secondary Attack."
      }
    ],
    reward: { xp: 2500, coins: 1000, badge: "✈️ Counter-Terrorism Medical Strategist" }
  },

  // ─── CTM SCENARIO 3: HYBRID WAR OPIOID ───
  {
    id: "ctm_scenario_hybrid_opioid",
    title: "🎭 Hybrid Warfare — Moscow Theater-Style Opioid Gas Attack",
    titleEn: "Hybrid Warfare — Moscow Theater-Style Opioid Gas Attack",
    description: "A simulation modeled on the October 2002 Moscow theater hostage crisis. Chechen rebel-style armed forces are holding 850 hostages at a Seoul grand theater. Like the Russian Spetsnaz 'sleep gas' tactic, Korean special forces are considering introducing chemical agents through the ventilation system. You must provide medical consultation as a CTM specialist.",
    category: "cbrne_terrorism",
    difficulty: "boss",
    estimatedTime: "30 minutes",
    learningObjectives: [
      "Medical lessons from the Moscow theater incident",
      "Recognizing and treating opioid toxidrome",
      "CBRNe elements of hybrid warfare",
      "Naloxone administration principles",
      "Chemical zone designation and PPE"
    ],
    steps: [
      {
        id: 1,
        situation: "Armed forces are holding 850 hostages in the theater. Command is considering introducing 'sleep gas' through the ventilation system. As medical advisor, your opinion is being sought.",
        question: "What was the composition of the gas used in the 2002 Moscow theater hostage crisis?",
        choices: [
          { text: "Sarin — nerve agent", outcome: "bad", feedback: "Incorrect! Sarin is a lethal nerve agent not used for hostage incapacitation. What was used in the Moscow incident was an opioid-based agent." },
          { text: "Fentanyl derivative + halothane mixture — announced by Russian Health Minister 4 days later", outcome: "good", feedback: "Correct! 2002 Moscow theater: Russian Spetsnaz introduced a fentanyl derivative + halothane mixture through the ventilation system. The Russian Health Minister disclosed this 4 days after the event. Result: at least 170 killed including 133 hostages, 700+ injured. Medical response failure: delayed identification of the chemical agent + delayed naloxone administration amplified deaths." },
          { text: "Chloroform — inhalation anesthetic", outcome: "bad", feedback: "Chloroform is an outdated anesthetic. The main component in the Moscow incident was a fentanyl derivative." },
          { text: "VX — nerve agent", outcome: "bad", feedback: "Incorrect! VX is an extremely lethal nerve agent. The Moscow incident used an opioid-based agent." }
        ],
        correctChoice: 1,
        medicalInfo: "Moscow theater (2002): 850 hostages + 40 Chechen rebels. Fentanyl+halothane used → 170+ killed. Medical failure causes: ① chemical agent unidentified → antidote not prepared ② delayed naloxone administration ③ lack of prior coordination between military operation and medical team. Lessons: pre-position antidotes + integrate medical team into operations planning."
      },
      {
        id: 2,
        situation: "Chemical agents have been introduced through the ventilation system. Dozens of hostages are streaming out. Many are losing consciousness or experiencing slowed breathing.",
        question: "What are the three hallmark symptoms of Opioid Toxidrome?",
        choices: [
          { text: "Miosis (pupil constriction) + decreased consciousness + respiratory depression", outcome: "good", feedback: "Correct! Opioid toxidrome triad: ① miosis (pinpoint pupils) ② decreased consciousness (coma) ③ respiratory depression (bradypnea/apnea). When these three are observed, immediate naloxone administration is required. At the Moscow theater, delayed recognition of these symptoms amplified deaths." },
          { text: "Mydriasis (pupil dilation) + tachycardia + hyperthermia", outcome: "bad", feedback: "Incorrect! These are symptoms of sympathomimetic toxidrome (cocaine, amphetamines, etc.). Opioids cause the opposite: miosis + bradycardia + hypothermia." },
          { text: "Excessive secretions + miosis + convulsions", outcome: "bad", feedback: "Incorrect! Excessive secretions + convulsions are symptoms of nerve agents (SLUDGEM). Opioids do not cause excessive secretions; respiratory depression is the primary symptom." },
          { text: "Respiratory distress + seizures + cyanosis", outcome: "bad", feedback: "Partially appropriate. Cyanosis can result from opioid respiratory depression, but seizures are primarily symptoms of nerve agents or choking agents. The opioid triad is miosis + decreased consciousness + respiratory depression." }
        ],
        correctChoice: 0,
        medicalInfo: "Opioid toxidrome mnemonic: 3M = Miosis + Mental depression (decreased consciousness) + Mixed (respiratory depression). Antidote: immediate naloxone administration. Routes: IV, IM, intranasal (nasal spray). Repeat dosing may be needed (when opioid half-life exceeds naloxone)."
      },
      {
        id: 3,
        situation: "Hundreds are down. All show miosis, decreased consciousness, and respiratory depression. Your team has naloxone.",
        question: "In an opioid gas attack mass casualty situation, what is the top priority consideration for naloxone administration?",
        choices: [
          { text: "Since naloxone is an opioid antagonist, confirm the exact opioid type before administration", outcome: "bad", feedback: "Incorrect! When opioid toxidrome is suspected, immediate administration without confirmation is the principle. Waiting for confirmation in a mass casualty situation causes unnecessary deaths." },
          { text: "If opioid toxidrome is suspected, immediately administer naloxone and provide respiratory support", outcome: "good", feedback: "Correct! When opioid toxidrome is suspected, immediately administer naloxone. The key medical lesson from the Moscow incident: 'delayed naloxone administration amplified deaths'. Drone-based rapid mass naloxone delivery is also under research." },
          { text: "Naloxone is a prescription drug, so administer only after a physician's order", outcome: "bad", feedback: "Incorrect! In emergency situations, immediate treatment takes priority. In many countries, naloxone has been reclassified as OTC (no prescription required) and can be used by laypeople." },
          { text: "Place patients in recovery position and wait for spontaneous recovery", outcome: "bad", feedback: "Incorrect! Severe respiratory depression is lethal without immediate naloxone administration. Waiting for spontaneous recovery is equivalent to allowing death." }
        ],
        correctChoice: 1,
        medicalInfo: "Naloxone dosing: 0.4-2 mg IV/IM/intranasal → repeat every 2-3 minutes if no response (max 10 mg). Duration of action: 30-90 minutes (may be shorter than the opioid — repeat dosing needed). CReDO program: community-integrated opioid emergency response program. Drone naloxone delivery: under research for mass casualty situations."
      },
      {
        id: 4,
        situation: "During treatment, some medical personnel who entered without PPE are beginning to experience secondary opioid exposure. PPE level must be determined for the scene.",
        question: "What is the appropriate PPE level in a Warm Zone with known chemical contamination?",
        choices: [
          { text: "Level D — work clothes only, no respiratory protection", outcome: "bad", feedback: "Incorrect! Level D has no respiratory protection and is immediately dangerous in a chemically contaminated environment." },
          { text: "Level C — air-purifying respirator + chemical-resistant suit", outcome: "good", feedback: "Correct! Level C PPE is appropriate for the Warm Zone (chemical contamination, lower concentration). Level B uses self-contained breathing apparatus for higher protection when entering the Hot Zone. Level A is maximum protection for the highest concentration Hot Zone chemical environments." },
          { text: "Level A — fully encapsulating suit with SCBA", outcome: "neutral", feedback: "Level A is maximum protection, but it is excessive for the Warm Zone and restricts movement. Level C is more appropriate for the Warm Zone." },
          { text: "N95 mask and gloves are sufficient", outcome: "bad", feedback: "Incorrect! N95 is used for biological threats (viruses, etc.). A chemically contaminated environment requires chemical-resistant PPE." }
        ],
        correctChoice: 1,
        medicalInfo: "PPE levels: A (maximum, SCBA + chemical suit, Hot Zone) / B (high, SCBA + less protective suit, Hot Zone entry support) / C (intermediate, air-purifying respirator + chemical suit, Warm Zone) / D (minimal, work clothes, Cold Zone). Opioid gas: skin absorption is possible → chemical-resistant suit is essential."
      },
      {
        id: 5,
        situation: "A report has come in about the possibility of opioid aerosol dispersal via drone (UAV). The drone terrorism threat is being assessed.",
        question: "What is the most appropriate reason fentanyl is particularly dangerous as a terrorism weapon?",
        choices: [
          { text: "Inexpensive and easily purchasable as a legal pharmaceutical", outcome: "neutral", feedback: "Partially correct. However, the core danger as a terrorism threat lies in its lethal dose and delivery method." },
          { text: "LD50 comparable to sarin gas, purchasable on the dark web, and dispersible via drone aerosol", outcome: "good", feedback: "Correct! Fentanyl's triple threat: ① LD50 comparable to sarin ② dark web accessibility ③ drone aerosol delivery capability. The Moscow theater established fentanyl-based chemical weapons as a precedent. In the first 4 months of 2021, 6,494 pounds were seized at US borders (exceeding the full year 2020 total of 4,776 pounds)." },
          { text: "Odorless and therefore undetectable before exposure", outcome: "neutral", feedback: "Partially correct. However, the core terrorism threat lies in its lethal dose, accessibility, and delivery method." },
          { text: "Synthesis is extremely difficult, making it only manufacturable by nation-states", outcome: "bad", feedback: "Incorrect! Fentanyl is relatively easy to synthesize and can be manufactured by non-state actors. This is a factor that increases its danger." }
        ],
        correctChoice: 1,
        medicalInfo: "Fentanyl terrorism potential: LD50 at sarin level + dark web purchasable + drone-dispersible. 2019 Canada: record 42 kg of carfentanil (ultra-potent fentanyl derivative) seized. CReDO program: community-integrated opioid emergency response model."
      },
      {
        id: 6,
        situation: "The final phase of the hybrid warfare scenario. A simultaneous cyber attack on hospitals has occurred. Ransomware has paralyzed the hospital computer systems, making patient records inaccessible.",
        question: "What is the core principle in responding to hospital cyber terrorism?",
        choices: [
          { text: "Negotiate with the hackers to restore systems", outcome: "bad", feedback: "Incorrect! Negotiating with hackers encourages further attacks. The principle is not to yield to cyber terrorism." },
          { text: "Activate offline backup systems + switch to manual patient records + maintain essential medical functions", outcome: "good", feedback: "Correct! Core hospital cyber terrorism response: ① activate offline backups ② switch to manual (paper) records ③ maintain essential medical functions in isolation. 2017 NotPetya: affected Ukrainian hospitals, Merck pharmaceuticals, and nuclear power plants. Growing evidence that ransomware attacks contribute to increased hospital mortality." },
          { text: "Immediately transfer all patients to other hospitals", outcome: "bad", feedback: "Incorrect! Transferring all patients is unrealistic and creates additional risks during transfer. Core functions must be maintained while attempting recovery." },
          { text: "Suspend all medical activities until cyber specialists arrive", outcome: "bad", feedback: "Incorrect! Suspending medical activities threatens patient lives. Switch to offline systems and continue medical activities." }
        ],
        correctChoice: 1,
        medicalInfo: "Hybrid warfare (Frank Hoffman, 2007): combines traditional military + cyber attacks + information warfare + CBRNE. NotPetya (2017): affected Ukrainian nuclear power plants + hospitals + Merck pharmaceuticals. Healthcare cybersecurity: offline backups + network isolation + manual protocols are essential. Hospitals have dual vulnerability as both 'soft targets' and 'critical infrastructure'."
      }
    ],
    reward: { xp: 3000, coins: 1200, badge: "🎭 Hybrid Warfare Expert" }
  }
];

// ============================================
// EXPORT: window.TACTICAL_CTM_CONTENT
// ============================================

window.TACTICAL_CTM_CONTENT = {
  tacticalQuestions,
  ctmQuestions,
  bossBattles,
  tacticalScenarios,
  ctmScenarios
};

// ─── Statistics Summary (for Console verification) ──────────────
console.log('✅ TACTICAL_CTM_CONTENT loaded successfully:');
console.log('  Tactical Medicine Quiz:', tacticalQuestions.length, 'questions');
console.log('  Counter-Terrorism Medicine Quiz:', ctmQuestions.length, 'questions');
console.log('  Boss Battles:', bossBattles.length, 'items');
console.log('  Tactical Scenarios:', tacticalScenarios.length, 'items (total',
  tacticalScenarios.reduce((s, sc) => s + sc.steps.length, 0), 'steps)');
console.log('  CTM Scenarios:', ctmScenarios.length, 'items (total',
  ctmScenarios.reduce((s, sc) => s + sc.steps.length, 0), 'steps)');
