// ============================================
// CBRNE Disaster Medicine RPG Educational Game — CBRNE Content
// ============================================
// Source: CIREcourse Lectures (Heejun Shin MD, MS, FIBODM)
// Dedicated content for Disaster Medicine RPG Educational Game
// ============================================

// ============================================
// SECTION 1: QUIZ QUESTIONS
// ============================================

const CBRNE_ADV_QUIZ_QUESTIONS = {

  // ==========================================
  // CHEMICAL (Chemical Disaster) — 28 questions
  // ==========================================
  chemical: [
    {
      id: "chem_q01",
      q: "What are the 4 links of the Chain of Chemical Survival, in order?",
      o: [
        "PPE → Decontamination → Antidote → Basic/Supportive Care",
        "Decontamination → PPE → Antidote → Basic/Supportive Care",
        "Antidote → PPE → Decontamination → Basic/Supportive Care",
        "Basic/Supportive Care → PPE → Decontamination → Antidote"
      ],
      a: 0,
      exp: "Chain of Chemical Survival — 4 links: ① PPE (Personal Protective Equipment) → ② Decontamination → ③ Antidote therapy → ④ BLS (Basic and Supportive Care). Order matters: no decontamination without PPE, no antidote without decontamination.",
      diff: "normal",
      category: "chemical"
    },
    {
      id: "chem_q02",
      q: "How many people died in the 1995 Tokyo subway sarin attack?",
      o: ["3", "13", "50", "130"],
      a: 1,
      exp: "On March 20, 1995, Aum Shinrikyo released sarin on the Tokyo subway, killing 13 and injuring thousands. It was one of the worst terrorist incidents in Japanese history.",
      diff: "normal",
      category: "chemical"
    },
    {
      id: "chem_q03",
      q: "What is the primary mechanism of action of nerve agents (such as sarin)?",
      o: [
        "Inhibits acetylcholinesterase (AChE), causing accumulation of acetylcholine (ACh)",
        "Blocks dopamine receptors, causing muscle rigidity",
        "Activates GABA receptors, suppressing the central nervous system",
        "Blocks sodium channels, disrupting nerve conduction"
      ],
      a: 0,
      exp: "Nerve agents are organophosphate compounds that inhibit AChE (acetylcholinesterase). This causes accumulation of ACh (acetylcholine) without breakdown, leading to continuous stimulation of the autonomic nervous system, muscles, and CNS. The result is sustained contraction of the diaphragm, leading to death by asphyxiation.",
      diff: "normal",
      category: "chemical"
    },
    {
      id: "chem_q04",
      q: "In the DUMBELS toxidrome caused by nerve agent poisoning, what symptom does 'M' represent?",
      o: ["Muscle spasm", "Miosis (pupil constriction)", "Mental confusion", "Myocardial bradycardia"],
      a: 1,
      exp: "DUMBELS: Defecation, Urination, Miosis, Bradycardia, Emesis, Lacrimation, Salivation. These are the muscarinic effects of nerve agents. Miosis (pupil constriction) is one of the earliest signs to appear.",
      diff: "normal",
      category: "chemical"
    },
    {
      id: "chem_q05",
      q: "Which combination correctly represents the antidotes for nerve agents?",
      o: [
        "Atropine + Pralidoxime (2-PAM) + Diazepam",
        "Naloxone + Hydroxocobalamin + Calcium",
        "Methylene blue + Atropine + Oxygen",
        "Pyridoxine + 2-PAM + Naloxone"
      ],
      a: 0,
      exp: "Nerve agent (organophosphate) antidote triad: ① Atropine (blocks muscarinic effects) ② Pralidoxime/2-PAM (reactivates AChE — must be given before 'aging') ③ Diazepam (seizure control). Distinguishing the role of each drug is key.",
      diff: "normal",
      category: "chemical"
    },
    {
      id: "chem_q06",
      q: "What is the odor characteristic of sarin (GB)?",
      o: ["Sweet, fruity odor", "Camphor-like odor", "Odorless (no smell)", "Rotten egg smell"],
      a: 2,
      exp: "Sarin (GB) is famous for being colorless and odorless. By contrast, tabun (GA) has a faint fruity odor, soman (GD) has a camphor-like odor, and VX is oily and persistent. Sarin's odorlessness makes it more dangerous because victims cannot detect exposure.",
      diff: "normal",
      category: "chemical"
    },
    {
      id: "chem_q07",
      q: "According to OSHA standards, what PPE level is required for first responders (firefighters) in the Hot Zone of a chemical disaster?",
      o: ["Level A", "Level B", "Level C", "Level D"],
      a: 0,
      exp: "OSHA regulations: Hot Zone first responders (firefighters) must wear Level A suit. Level A = fully encapsulating protective suit + SCBA (Self-Contained Breathing Apparatus). Level B: EMS on-scene decon/unidentified hospital situation. Level C: confirmed non-lethal concentration. Level D: general hospital staff.",
      diff: "normal",
      category: "chemical"
    },
    {
      id: "chem_q08",
      q: "In the PRISM (Primary Response Incident Scene Management) 3-step protocol, what is the recommended duration for Step 2 'ladder pipe system wash'?",
      o: ["5 seconds", "15 seconds", "60 seconds", "90 seconds"],
      a: 1,
      exp: "PRISM 3-step protocol: ① Disrobing + Dry decontamination → ② Ladder pipe wash 15 seconds (lukewarm water) → ③ Secondary/technical decontamination 15–90 seconds (baby shampoo + scrub tool). Completing all 3 steps removes 100% (SD ±1%) of chemical contamination.",
      diff: "normal",
      category: "chemical"
    },
    {
      id: "chem_q09",
      q: "What percentage of external chemical contamination can be removed by clothing removal (disrobing) alone?",
      o: ["50%", "70%", "80–90%", "100%"],
      a: 2,
      exp: "Clothing removal alone can eliminate 80–90% of external contamination. This applies equally to both chemical and radiological disasters. When water supply is delayed, immediately initiating dry decontamination (disrobing) is key.",
      diff: "normal",
      category: "chemical"
    },
    {
      id: "chem_q10",
      q: "What is the optimal shower water temperature for wet decontamination in the ORCHIDS protocol?",
      o: ["15°C", "25°C", "35°C", "45°C"],
      a: 2,
      exp: "ORCHIDS protocol optimal conditions: shower temperature 35°C, shower duration 60–90 seconds, detergent 0.5% (v/v) Argos™ or FloraFree™, scrub tool: cotton flannel (face cloth). 35°C is the temperature for effective decontamination without skin irritation.",
      diff: "hard",
      category: "chemical"
    },
    {
      id: "chem_q11",
      q: "What nerve agent was used in the 2017 assassination of Kim Jong-nam at Kuala Lumpur International Airport, Malaysia?",
      o: ["Sarin (GB)", "VX", "Soman (GD)", "Tabun (GA)"],
      a: 1,
      exp: "In 2017, Kim Jong-nam, half-brother of North Korean leader Kim Jong-un, was assassinated with VX nerve agent at Kuala Lumpur International Airport, Malaysia. VX has an oily texture and high skin permeability, making it lethal in small amounts.",
      diff: "normal",
      category: "chemical"
    },
    {
      id: "chem_q12",
      q: "What is the treatment of choice (TOC) antidote for cyanide (blood agent) poisoning?",
      o: ["Atropine", "Hydroxocobalamin", "Naloxone", "Pyridoxine"],
      a: 1,
      exp: "The TOC (Treatment of Choice) for cyanide-based blood agents is hydroxocobalamin. Amyl nitrite is also usable. In the 2002 Moscow theater hostage crisis, an opioid + anesthetic mixture was used, killing more than 130 people.",
      diff: "hard",
      category: "chemical"
    },
    {
      id: "chem_q13",
      q: "In the 3-Zone System used for chemical disaster zone setup, in which zone does decontamination occur?",
      o: ["Hot Zone (Exclusion Zone)", "Warm Zone (Contamination Reduction Zone)", "Cold Zone (Support Zone)", "Neutral Zone"],
      a: 1,
      exp: "3-Zone system: ① Hot Zone (contaminated area, maximum PPE required) → ② Warm Zone (contamination reduction zone, decontamination performed) → ③ Cold Zone (clean area, hospital/staging). Decontamination occurs in the Warm Zone, the corridor between Hot Zone and Cold Zone.",
      diff: "normal",
      category: "chemical"
    },
    {
      id: "chem_q14",
      q: "In the MIMMS (Major Incident Medical Management and Support) framework CSCATTT, what do the final 3 T's represent?",
      o: [
        "Triage, Treatment, Transportation",
        "Training, Technology, Teamwork",
        "Toxicology, Trauma, Triage",
        "Threat, Tactics, Transfer"
      ],
      a: 0,
      exp: "CSCATTT: Command, Safety, Communication, Assessment, Triage, Treatment, Transportation. The final 3 T's — Triage-Treatment-Transportation — are the core of actual medical response.",
      diff: "normal",
      category: "chemical"
    },
    {
      id: "chem_q15",
      q: "Which of the following is a correct nicotinic effect of nerve agents?",
      o: [
        "Miosis and increased secretions",
        "Fasciculations and muscle paralysis",
        "Bradycardia and bronchoconstriction",
        "Nausea, vomiting, and diarrhea"
      ],
      a: 1,
      exp: "Nerve agent toxicity has 3 components: ① Muscarinic effects (DUMBELS — bradycardia, miosis, increased secretions, bronchoconstriction, GI symptoms) ② Nicotinic effects (fasciculations → muscle paralysis, tachycardia, hypertension) ③ CNS effects (anxiety, seizures, coma). Nicotinic effects primarily affect skeletal muscle.",
      diff: "hard",
      category: "chemical"
    },
    {
      id: "chem_q16",
      q: "What is the antidote for hydrofluoric acid (HF) exposure?",
      o: ["Methylene blue", "Calcium", "Pralidoxime (2-PAM)", "Naloxone"],
      a: 1,
      exp: "Essential antidote matching to remember: Hydrofluoric acid/fluoride → Calcium (Ca²⁺). Cyanide → Hydroxocobalamin. Organophosphate/nerve agents → Atropine + oxime. Methemoglobin-forming agents → Methylene blue. Hydrazine → Pyridoxine.",
      diff: "hard",
      category: "chemical"
    },
    {
      id: "chem_q17",
      q: "What is the most significant response difference between an industrial chemical accident (like the 1984 Bhopal gas leak) and a terrorist chemical attack?",
      o: [
        "Industrial accidents do not require PPE but terrorism does",
        "Terrorism additionally requires reinforcement of law enforcement (police/military)",
        "Terrorism uses antidotes but industrial accidents use only supportive care",
        "Industrial accidents do not require decontamination"
      ],
      a: 1,
      exp: "Key difference: Terrorism → chemical incident response + law enforcement (police/military) reinforcement needed. Accident → chemical incident response only. A terrorist scene is also a crime scene, so cooperation with law enforcement is essential for evidence preservation, security, and prevention of secondary attacks.",
      diff: "hard",
      category: "chemical"
    },
    {
      id: "chem_q18",
      q: "What was one of the key lessons from the FEMA analysis of the 1995 Tokyo subway sarin attack?",
      o: [
        "Decontamination equipment was insufficient",
        "Hospitals relied on TV news for incident information",
        "Sarin antidotes were in short supply",
        "Level A PPE suits were unavailable"
      ],
      a: 1,
      exp: "Lessons from the Tokyo sarin attack (FEMA analysis): ① Poor communications delayed response ② Contamination spread across all subway lines ③ Hospitals had to obtain incident information from TV news ④ Physician expertise was critical for diagnosis ⑤ Highlighted need for inter-agency coordination and planning.",
      diff: "normal",
      category: "chemical"
    },
    {
      id: "chem_q19",
      q: "What are the characteristics of VX nerve agent?",
      o: [
        "Odorless, gaseous state, rapid degradation",
        "Oily texture, persistence, high skin permeability",
        "Sweet odor, water-soluble, dangerous only by inhalation",
        "Camphor odor, colorless, evaporates immediately"
      ],
      a: 1,
      exp: "VX characteristics: oily texture, persistent (does not evaporate easily), extremely high skin permeability — lethal in tiny amounts (even skin contact). Far more persistent and dangerous than G-series agents (Sarin, Soman, Tabun). This is why VX was used in the 2017 assassination of Kim Jong-nam.",
      diff: "hard",
      category: "chemical"
    },
    {
      id: "chem_q20",
      q: "What is the very first step in the 12-step hospital response to a chemical disaster?",
      o: [
        "Perform decontamination",
        "Early declaration of hospital disaster (HICS activation)",
        "Administer antidote",
        "Enhance security"
      ],
      a: 1,
      exp: "Step 1 of the 12-step hospital response: Early declaration of hospital disaster (HICS/Hospital Incident Command System activation). Subsequent steps: Disaster system activation declaration → Decontamination → Antidote use → ED zone setup → HICS facility expansion → Security enhancement → ED bed mobilization...",
      diff: "hard",
      category: "chemical"
    },
    {
      id: "chem_q21",
      q: "What chemical agent did Russian forces use in the 2002 Moscow theater hostage crisis?",
      o: [
        "Sarin",
        "Cyanide",
        "Opioid precursor + anesthetic mixture",
        "Nerve agent VX"
      ],
      a: 2,
      exp: "In the 2002 Moscow theater hostage crisis, Russian forces used an opioid precursor + anesthetic mixture, killing more than 130 civilian hostages. This case demonstrated the dangers of opioid-class chemical agents.",
      diff: "hard",
      category: "chemical"
    },
    {
      id: "chem_q22",
      q: "What is the recommended time for initiating decontamination after chemical exposure?",
      o: ["Within 5 minutes", "Within 15 minutes", "Within 30 minutes", "Within 1 hour"],
      a: 1,
      exp: "Decontamination should begin within 15 minutes. In real incidents, delays of over 1 hour are common due to inadequate facilities and training. The effectiveness of decontaminating wet contaminants decreases exponentially with time, so early initiation saves lives.",
      diff: "normal",
      category: "chemical"
    },
    {
      id: "chem_q23",
      q: "What drug is administered for seizure control in nerve agent poisoning?",
      o: ["Atropine", "Pralidoxime (2-PAM)", "Diazepam", "Hydroxocobalamin"],
      a: 2,
      exp: "Diazepam (a benzodiazepine) is used for seizure control in nerve agent poisoning. Atropine blocks muscarinic effects, and 2-PAM reactivates AChE. All three drugs are essential components of nerve agent treatment.",
      diff: "normal",
      category: "chemical"
    },
    {
      id: "chem_q24",
      q: "What triage method is used first in pre-decontamination triage at a chemical disaster scene?",
      o: ["START triage", "MASS triage", "TST (Ten Second Triage)", "SALT triage"],
      a: 1,
      exp: "Chemical disaster scene triage order: 1st = MASS (Move, Assess, Sort, Send); 2nd = pre-decontamination chemical triage algorithm. Unlike general trauma MCI, MASS is used first at chemical scenes to rapidly sort large numbers of patients.",
      diff: "hard",
      category: "chemical"
    },
    {
      id: "chem_q25",
      q: "What is the first sign to appear in nerve agent poisoning?",
      o: ["Seizure", "Miosis (pupil constriction)", "Muscle paralysis", "Loss of consciousness"],
      a: 1,
      exp: "The earliest sign of nerve agent poisoning is miosis (pupil constriction). This is an early indicator of cholinergic toxidrome; as toxicity progresses, the full DUMBELS syndrome appears (increased salivation/lacrimation/secretions, urination, defecation, vomiting, bronchoconstriction).",
      diff: "normal",
      category: "chemical"
    },
    {
      id: "chem_q26",
      q: "Which group carried out the Tokyo subway sarin attack?",
      o: ["Al-Qaeda", "Aum Shinrikyo", "ISIS", "Hamas"],
      a: 1,
      exp: "The March 20, 1995 Tokyo subway sarin attack was carried out by Aum Shinrikyo, a religious doomsday cult led by Shoko Asahara. They believed the apocalypse was coming and held the distorted belief that being killed by them would save victims from hell.",
      diff: "normal",
      category: "chemical"
    },
    {
      id: "chem_q27",
      q: "Which correctly matches the code names for the 4 G-series nerve agents (Tabun, Sarin, Soman, Cyclosarin)?",
      o: [
        "Tabun=GA, Sarin=GB, Soman=GD, Cyclosarin=GF",
        "Tabun=GB, Sarin=GA, Soman=GF, Cyclosarin=GD",
        "Tabun=GD, Sarin=GF, Soman=GA, Cyclosarin=GB",
        "Tabun=GF, Sarin=GD, Soman=GB, Cyclosarin=GA"
      ],
      a: 0,
      exp: "G-series codes: Tabun=GA (faint fruity odor), Sarin=GB (odorless), Soman=GD (camphor odor), Cyclosarin=GF. V-series: VX is oily and persistent. All are colorless or yellowish liquid, tasteless, and vaporize at room temperature.",
      diff: "hard",
      category: "chemical"
    },
    {
      id: "chem_q28",
      q: "What is the antidote for 'opioid-class agent' exposure in a chemical disaster?",
      o: ["Atropine", "Naloxone", "Hydroxocobalamin", "Pralidoxime (2-PAM)"],
      a: 1,
      exp: "The antidote for opioid-class chemical agents (fentanyl, carfentanil, etc.) is naloxone. Toxidrome: bradycardia or apnea, sedation, miosis. Opioid agents were also used in the 2002 Moscow theater incident.",
      diff: "normal",
      category: "chemical"
    }
  ],

  // ==========================================
  // BIOLOGICAL (Biological Disaster) — 28 questions
  // ==========================================
  biological: [
    {
      id: "bio_q01",
      q: "How many people died in the 2001 U.S. Amerithrax anthrax mail attack?",
      o: ["2", "5", "11", "22"],
      a: 1,
      exp: "The 2001 Amerithrax incident: 22 total infected (11 cutaneous anthrax + 11 inhalation anthrax), 5 deaths. Five letters were sent to Florida AMI, New York NBC/NY Post, and Washington D.C. Senate offices. Total cost estimated at $1 billion.",
      diff: "normal",
      category: "biological"
    },
    {
      id: "bio_q02",
      q: "Which option includes all CDC Bioterrorism Category A pathogens?",
      o: [
        "Anthrax, Botulinum, Plague, Smallpox, Tularemia, Viral Hemorrhagic Fever",
        "Anthrax, Salmonella, Ricin, Q fever, Brucella",
        "Plague, Ebola, HIV, Influenza, Cholera",
        "Smallpox, SARS, Hantavirus, Nipah virus"
      ],
      a: 0,
      exp: "CDC Category A (highest priority): ① Anthrax (Bacillus anthracis) ② Botulinum toxin (Clostridium botulinum) ③ Plague (Yersinia pestis) ④ Smallpox (Variola major) ⑤ Tularemia (Francisella tularensis) ⑥ Viral hemorrhagic fevers (Ebola, Marburg, Lassa, etc.). Easily transmitted, high mortality, cause panic/social disruption, require special public health response.",
      diff: "normal",
      category: "biological"
    },
    {
      id: "bio_q03",
      q: "Rank the 3 forms of anthrax infection from highest to lowest mortality.",
      o: [
        "Inhalational > Gastrointestinal > Cutaneous",
        "Cutaneous > Inhalational > Gastrointestinal",
        "Gastrointestinal > Cutaneous > Inhalational",
        "Inhalational > Cutaneous > Gastrointestinal"
      ],
      a: 0,
      exp: "The 3 forms of anthrax (Bacillus anthracis): ① Inhalational — most lethal ② Gastrointestinal ③ Cutaneous — least lethal. Important: anthrax is non-communicable (no person-to-person transmission). Spores are highly resistant in most environmental conditions and are found in soil.",
      diff: "normal",
      category: "biological"
    },
    {
      id: "bio_q04",
      q: "Which is the only form of plague (Yersinia pestis) capable of person-to-person transmission?",
      o: ["Bubonic plague", "Septicemic plague", "Pneumonic plague", "Cutaneous plague"],
      a: 2,
      exp: "3 forms of plague: ① Bubonic (fever, headache, painful lymph nodes/buboes) ② Septicemic (hypotension, multi-organ failure, DIC) ③ Pneumonic — the only form transmissible person-to-person via respiratory droplets. Pneumonic plague patients require N95 mask + isolation room for at least 72 hours.",
      diff: "normal",
      category: "biological"
    },
    {
      id: "bio_q05",
      q: "Why did Aum Shinrikyo's 1993 anthrax attack in Tokyo's Kameido district fail?",
      o: [
        "It was detected in advance by police",
        "A non-virulent vaccine strain was used",
        "The anthrax spores were not sufficiently dried",
        "The dispersal device malfunctioned"
      ],
      a: 1,
      exp: "Aum Shinrikyo attempted to aerosolize Bacillus anthracis anthrax in Tokyo's Kameido in 1993 but failed. Reason: a non-virulent vaccine strain (not a virulent strain) was used. No one became ill. This is the most well-known failed bioterrorism attempt in history.",
      diff: "hard",
      category: "biological"
    },
    {
      id: "bio_q06",
      q: "How many people can a minimum of 1 gram of aerosolized botulinum toxin kill?",
      o: ["100,000", "500,000", "1.5 million", "5 million"],
      a: 2,
      exp: "The lethal potential of botulinum toxin: 1 gram aerosolized can kill a minimum of 1.5 million people. It is one of the most toxic substances known on earth. Clostridium botulinum is an anaerobic gram-positive rod found in soil and water.",
      diff: "normal",
      category: "biological"
    },
    {
      id: "bio_q07",
      q: "What is the characteristic form of paralysis in botulinum toxin poisoning?",
      o: [
        "Ascending spastic paralysis (cranial nerves → limbs)",
        "Descending flaccid paralysis (starting from cranial nerves)",
        "Symmetric spastic paralysis (limbs simultaneously)",
        "Asymmetric hemiplegia"
      ],
      a: 1,
      exp: "Botulinum toxin characteristics: descending flaccid paralysis — begins at cranial nerves and progresses downward. Symptoms: acute onset without fever, dizziness, diplopia, respiratory difficulty, speech difficulty. Can progress to respiratory failure. No person-to-person transmission.",
      diff: "normal",
      category: "biological"
    },
    {
      id: "bio_q08",
      q: "What is the vaccination window after smallpox exposure within which infection can be prevented?",
      o: ["Within 6 hours after exposure", "Within 1–4 days after exposure", "Within 7–14 days after exposure", "Within 1 month after exposure"],
      a: 1,
      exp: "Smallpox vaccine: vaccination within 1–4 days after exposure can prevent infection. Vaccination within 4–7 days can reduce severity. Smallpox incubation period: 12–14 days. The world population has had no immunity for 40 years due to cessation of vaccination. TPOXX (Tecovirimat) is an antiviral approved by the FDA in July 2018.",
      diff: "normal",
      category: "biological"
    },
    {
      id: "bio_q09",
      q: "How long is the antibiotic treatment duration for inhalational anthrax?",
      o: ["14 days", "21 days", "30 days", "60 days"],
      a: 3,
      exp: "Anthrax treatment: Ciprofloxacin 400 mg IV BID or Doxycycline 100 mg IV BID → switch to oral Cipro 500 mg when stable. Total oral antibiotic duration: 60 days. Post-Exposure Prophylaxis (PEP) is also 60 days (Cipro 500 mg BID or Doxy 100 mg BID).",
      diff: "normal",
      category: "biological"
    },
    {
      id: "bio_q10",
      q: "What is the minimum isolation period for a patient with pneumonic plague?",
      o: ["12 hours", "24 hours", "48 hours", "72 hours"],
      a: 3,
      exp: "Pneumonic plague can spread person-to-person via respiratory droplets, requiring N95 mask + isolation room for at least 72 hours. Chest X-ray findings: infiltrates, consolidation, cavitation. Treatment: Streptomycin 15 mg/kg BID IM for 10 days or Gentamicin 5 mg/kg/day IV for 7–10 days.",
      diff: "normal",
      category: "biological"
    },
    {
      id: "bio_q11",
      q: "What bacterium shows a 'safety pin' appearance on Gram stain?",
      o: ["Anthrax (Bacillus anthracis)", "Yersinia pestis (plague)", "Francisella tularensis (tularemia)", "Clostridium botulinum"],
      a: 1,
      exp: "Yersinia pestis (plague) is a gram-negative coccobacillus that appears in a 'safety pin' shape on Gram stain (bipolar staining). Transmitted from rodents to humans via flea bites. Characterized by painful, swollen lymph nodes (buboes).",
      diff: "hard",
      category: "biological"
    },
    {
      id: "bio_q12",
      q: "What pathogen was used in the 1984 Rajneeshee bioterrorism attack in The Dalles, Oregon?",
      o: ["Anthrax", "Salmonella", "Botulinum toxin", "Smallpox virus"],
      a: 1,
      exp: "The 1984 Rajneeshee incident: Salmonella contamination of salad bars at restaurants in The Dalles, Oregon. Motive: influence local elections. Result: 750 infected, 12% of the local community infected. All local hospital beds were full within 2 weeks. The first large-scale bioterrorism attack in U.S. history.",
      diff: "hard",
      category: "biological"
    },
    {
      id: "bio_q13",
      q: "What is the truth about the 1979 Soviet Sverdlovsk anthrax incident?",
      o: [
        "It was a naturally occurring anthrax outbreak",
        "It was a gastrointestinal anthrax cluster caused by contaminated meat",
        "Anthrax spores were released into the air from a military facility",
        "A chemical weapon accidentally exploded"
      ],
      a: 2,
      exp: "Sverdlovsk anthrax incident (1979): Weaponized anthrax was accidentally released from a Soviet military facility. Total 96 infected (17 cutaneous, 79 gastrointestinal), 64 deaths. The Soviet Union initially claimed contaminated meat as the cause, but evidence showed most victims were located downwind of the military facility.",
      diff: "hard",
      category: "biological"
    },
    {
      id: "bio_q14",
      q: "What is the most important supportive care in botulinum toxin poisoning?",
      o: [
        "Immediate administration of antibiotics (Ciprofloxacin)",
        "Airway management and respiratory support (mechanical ventilation for weeks)",
        "Antipyretics and fluid replacement",
        "Steroids to reduce nerve edema"
      ],
      a: 1,
      exp: "Botulinum toxin treatment: airway management and ventilatory support are the top priority — mechanical ventilation for weeks may be needed. Passive immunization: equine heptavalent botulinum antitoxin. No antibiotics, no broadly used vaccine. Clinical diagnosis confirmed at specialized labs via ELISA or PCR on serum/stool/nasal swab.",
      diff: "normal",
      category: "biological"
    },
    {
      id: "bio_q15",
      q: "Who was the last person to die in the 1978 Birmingham smallpox incident?",
      o: [
        "A graduate student in the adjacent laboratory",
        "A Birmingham medical school laboratory worker",
        "The emergency physician who treated the patient",
        "A public health official who handled the smallpox specimen"
      ],
      a: 1,
      exp: "The 1978 Birmingham smallpox incident: A Birmingham Medical School staff member contracted smallpox in the laboratory and died — the last known death from smallpox in human history. Her mother was also infected but survived. The 'Shooter Report' documented the findings of a broad inquiry into laboratory smallpox specimen security.",
      diff: "hard",
      category: "biological"
    },
    {
      id: "bio_q16",
      q: "Which of the following is included in CDC Bioterrorism Category C?",
      o: [
        "Anthrax, Botulinum, Smallpox",
        "Salmonella, Ricin, Brucella",
        "Nipah virus, West Nile virus, Hantavirus, SARS",
        "Q fever, Glanders, Ebola"
      ],
      a: 2,
      exp: "CDC classification: Category A (highest priority) — Anthrax/Botulinum/Plague/Smallpox/Tularemia/VHF. Category B (2nd priority) — Brucella/Ricin/Salmonella/Q fever, etc. Category C (3rd priority, emerging pathogens) — Nipah virus, West Nile virus, Hantavirus, SARS. Category C consists of emerging pathogens that could be engineered for future bioterrorism.",
      diff: "hard",
      category: "biological"
    },
    {
      id: "bio_q17",
      q: "What is the characteristic of the 'Drive-Through POD' in the POD (Point of Dispensing) system for biological disaster response?",
      o: [
        "Home visit service for elderly with mobility limitations",
        "Receive medical countermeasures without getting out of the vehicle",
        "Closed type open only to specific workers or students",
        "Mobile type deployed to remote areas by helicopter"
      ],
      a: 1,
      exp: "POD types: ① Open POD — public location accessible to anyone ② Closed POD — specific group (workplace, school) ③ Drive-Through POD — receive countermeasures without leaving vehicle ④ Mobile POD — for underserved/remote areas. Key infrastructure for rapid mass distribution during biological disasters.",
      diff: "hard",
      category: "biological"
    },
    {
      id: "bio_q18",
      q: "What is the most important epidemiological characteristic of Bacillus anthracis (anthrax)?",
      o: [
        "It is easily transmitted person-to-person",
        "Spores are highly resistant to most environmental conditions",
        "It naturally disappears within a few days",
        "It only infects animals; humans are not susceptible"
      ],
      a: 1,
      exp: "Key characteristics of anthrax: gram-positive spore-forming rod. Spores are highly resistant to most environmental conditions (can survive in soil for decades). No person-to-person transmission. Found in soil. Chest X-ray: mediastinal widening + pleural effusion. The durability of spores increases its danger as a biological weapon.",
      diff: "normal",
      category: "biological"
    },
    {
      id: "bio_q19",
      q: "Which of the 6 forms of tularemia is the most dangerous?",
      o: ["Ulceroglandular — most common form", "Pulmonary form", "Glandular form", "Oropharyngeal form"],
      a: 1,
      exp: "Tularemia (Francisella tularensis) — 6 forms ranked by severity: ① Pulmonary — most dangerous ② Glandular ③ Ulceroglandular — most common ④ Oculoglandular ⑤ Oropharyngeal ⑥ Typhoidal. Transmitted via tick, deer fly, contaminated meat, direct contact, animal bite, or aerosol.",
      diff: "hard",
      category: "biological"
    },
    {
      id: "bio_q20",
      q: "What antiviral did the FDA approve for smallpox treatment in 2018?",
      o: ["Remdesivir", "TPOXX(Tecovirimat)", "Acyclovir", "Ribavirin"],
      a: 1,
      exp: "TPOXX (Tecovirimat) was approved by the FDA in July 2018 through fast-track and orphan drug programs as an antiviral for smallpox. Additional treatments: variola immune globulin (VIG), ring vaccination, isolation. Vaccination within 1–4 days after exposure can prevent infection.",
      diff: "normal",
      category: "biological"
    },
    {
      id: "bio_q21",
      q: "What event directly caused the 1994 plague outbreak in Surat, India?",
      o: [
        "Deliberate dispersal of plague bacteria by terrorists",
        "Environmental disaster caused by 1993 earthquake and floods",
        "Contaminated water supply",
        "A traveler returning from Africa"
      ],
      a: 1,
      exp: "Surat plague (1994): Caused by environmental disaster — the 1993 earthquake (20,000 deaths) followed by floods. Pneumonic plague outbreak: 900 infected, 56 deaths. Economic impact: $260 million for the city of Surat, $1 billion in Indian export losses, 50% decline in tourism. A case of natural disaster leading to biological disaster — a complex disaster.",
      diff: "hard",
      category: "biological"
    },
    {
      id: "bio_q22",
      q: "Which best describes the symptoms of viral hemorrhagic fever (VHF)?",
      o: [
        "High fever, arthralgia, skin rash, mucosal bleeding, shock",
        "Mainly nausea, vomiting, and diarrhea only",
        "Respiratory difficulty and chest pain are the main symptoms",
        "Progressive paralysis without fever"
      ],
      a: 0,
      exp: "VHF (Ebola, Marburg, Lassa, etc.) symptoms: fever, malaise, myalgia, shock, nausea, vomiting, widespread mucosal bleeding (pan-hemorrhage), rash. Diagnosis: thrombocytopenia, coagulopathy, DIC, elevated liver enzymes, systemic SIRS. Easily transmissible person-to-person. Treatment: supportive care, newer agent Remdesivir.",
      diff: "normal",
      category: "biological"
    },
    {
      id: "bio_q23",
      q: "In biological disaster response, which facility first encounters victims as the primary contact healthcare institution?",
      o: ["Local public health center", "Emergency Department (ED)", "National health institute isolation ward", "Military medical unit"],
      a: 1,
      exp: "Bioterrorism victims are first encountered at the Emergency Department (ED). Core principle: immediate isolation → clinical treatment. Key antibiotics: Cipro & Doxycycline (broad coverage for most Category A pathogens). Low-probability but high-impact events — do not confuse probability with possibility.",
      diff: "normal",
      category: "biological"
    },
    {
      id: "bio_q24",
      q: "What is the duration of Post-Exposure Prophylaxis (PEP) for plague?",
      o: ["3 days", "7 days", "14 days", "60 days"],
      a: 1,
      exp: "PEP duration by pathogen: Anthrax = 60 days, Plague = 7 days, Tularemia = 14 days. Plague PEP: Ciprofloxacin 500 mg BID or Doxycycline 100 mg BID for 7 days. Be careful not to confuse anthrax's 60 days with plague's 7 days.",
      diff: "hard",
      category: "biological"
    },
    {
      id: "bio_q25",
      q: "Which of the following is NOT one of the 4 classification criteria for biological disasters?",
      o: ["Cause of occurrence (natural/accidental/intentional)", "Transmissibility (communicable/non-communicable)", "Scale of economic damage", "Scale (local/national/global)"],
      a: 2,
      exp: "4 classifications of biological disasters: ① Cause (natural, accidental, intentional) ② Transmissibility (communicable vs non-communicable — pneumonic plague vs anthrax) ③ Scale (local, regional, national, global) ④ Biological agent type (bacteria, virus, toxin, etc.). Economic damage is a consequence, not a classification criterion.",
      diff: "hard",
      category: "biological"
    },
    {
      id: "bio_q26",
      q: "What is the characteristic chest X-ray finding of inhalational anthrax exposure?",
      o: [
        "Hyperinflation and pneumothorax",
        "Mediastinal widening and pleural effusions",
        "Ground-glass opacity and consolidation",
        "Pleural thickening and calcification"
      ],
      a: 1,
      exp: "Characteristic CXR findings of inhalational anthrax: mediastinal widening + pleural effusions, reflecting mediastinal lymph node involvement. Diagnosis: history + Gram stain/blood culture + PCR (LRN laboratory required). Treatment: Cipro 400 mg IV BID or Doxy 100 mg IV BID + Rifampin or Clindamycin as needed.",
      diff: "hard",
      category: "biological"
    },
    {
      id: "bio_q27",
      q: "How many anthrax letters were sent in the Amerithrax (2001) incident?",
      o: ["2 letters", "5 letters", "10 letters", "22 letters"],
      a: 1,
      exp: "Amerithrax (2001): 5 letters sent — Florida AMI, New York NBC, New York Post, Washington D.C. Daschle Senate office, Leahy Senate office. Affected states: Florida, New York, New Jersey, Washington D.C., Connecticut, Virginia, Maryland. First case: an editor who presented to a Florida ER.",
      diff: "normal",
      category: "biological"
    },
    {
      id: "bio_q28",
      q: "What is the first of the 6 response phases proposed by FEMA for biological disaster response?",
      o: [
        "Communicate with the public and external partners",
        "Detect and characterize the threat",
        "Control the spread of disease",
        "Augment medical services"
      ],
      a: 1,
      exp: "FEMA biological disaster response 6 phases: ① Detect and Characterize the threat → ② Communicate with external partners and the public → ③ Control the spread of disease → ④ Augment mass care and human services → ⑤ Augment health and medical services → ⑥ Achieve recovery by augmenting essential services.",
      diff: "hard",
      category: "biological"
    }
  ],

  // ==========================================
  // RADIOLOGICAL (Radiological Disaster) — 27 questions
  // ==========================================
  radiological: [
    {
      id: "rad_q01",
      q: "What is an RDD (Radiological Dispersal Device)?",
      o: [
        "A weapon using nuclear fusion reactions",
        "Radioactive material + conventional explosives = Dirty Bomb",
        "A device that generates electromagnetic pulses (EMP)",
        "A device that directly emits radiation from a nuclear reactor"
      ],
      a: 1,
      exp: "RDD (Radiological Dispersal Device, 'Dirty Bomb') = conventional explosives such as dynamite + radioactive powder/pellets. When detonated, radioactive material disperses into the surrounding area. Unlike a nuclear explosion, there is no nuclear reaction, but radioactive contamination occurs. Based on CDC definition.",
      diff: "normal",
      category: "radiological"
    },
    {
      id: "rad_q02",
      q: "In radiation dose units, how many rads (rad) equal 1 Gray (Gy)?",
      o: ["1 rad", "10 rad", "100 rad", "1000 rad"],
      a: 2,
      exp: "Radiation dose unit conversion: 1 Gy (Gray) = 100 rad, 1 rad = 0.01 Gy. Sievert (Sv) and rem: 1 Sv = 100 rem. SI units: Gy (absorbed dose), Sv (equivalent dose). Traditional units: rad, rem.",
      diff: "normal",
      category: "radiological"
    },
    {
      id: "rad_q03",
      q: "How many rem equal 1 Sievert (Sv)?",
      o: ["1 rem", "10 rem", "100 rem", "1000 rem"],
      a: 2,
      exp: "Key unit conversions: 1 Sv = 100 rem, 1 rem = 0.01 Sv. 1 Gy = 100 rad, 1 rad = 0.01 Gy. Radiation injury is determined by dose/time, distance from source, and shielding.",
      diff: "normal",
      category: "radiological"
    },
    {
      id: "rad_q04",
      q: "What are the 4 stages of Acute Radiation Syndrome (ARS) in order?",
      o: [
        "Prodromal → Latent → Manifest Illness → Recovery/Death",
        "Latent → Prodromal → Manifest Illness → Recovery/Death",
        "Manifest Illness → Prodromal → Latent → Recovery/Death",
        "Prodromal → Manifest Illness → Latent → Recovery/Death"
      ],
      a: 0,
      exp: "ARS 4 stages: ① Prodromal — nausea/vomiting/diarrhea, minutes to days after exposure, speed determined by dose ② Latent — period when patient appears healthy (symptoms seem absent) ③ Manifest Illness — hematopoietic/gastrointestinal/cardiovascular-neurological syndromes ④ Recovery or Death — most deaths occur within months of exposure.",
      diff: "normal",
      category: "radiological"
    },
    {
      id: "rad_q05",
      q: "At a radiation dose of 100–200 rem, what is the onset time and incidence of vomiting?",
      o: ["Immediately, 100%", "15–30 minutes later, 100%", "3–6 hours later, 5–50%", "2–3 hours later, 50–100%"],
      a: 2,
      exp: "Dose-dependent vomiting characteristics: 25–100 rem = no vomiting. 100–200 rem = 3–6 hours later, 5–50% incidence. 200–600 rem = 2–3 hours later, 50–100%. 600–1000 rem = 15–30 minutes later, 100%. 1000–3500 rem = 5–20 minutes later, 100%. >3500 rem = within 3 minutes, 100%. Earlier onset of vomiting indicates higher dose.",
      diff: "hard",
      category: "radiological"
    },
    {
      id: "rad_q06",
      q: "What is the primary syndrome at a radiation dose >3500 rem?",
      o: [
        "Hematopoietic syndrome",
        "Gastrointestinal syndrome",
        "Cardiovascular/CNS syndrome",
        "Cutaneous radiation syndrome"
      ],
      a: 2,
      exp: "ARS syndrome classification: ① Hematopoietic (bone marrow) syndrome: 200–1000 rem ② Gastrointestinal syndrome: 1000–3500 rem ③ Cardiovascular/CNS syndrome: >3500 rem — seizures, tremors, 100% mortality. At >3500 rem: vomiting within 3 minutes, 100% mortality. Brain and spinal cord are the primary affected organs.",
      diff: "normal",
      category: "radiological"
    },
    {
      id: "rad_q07",
      q: "What is the most effective treatment for radioactive iodine exposure after radiation, and when should it be administered?",
      o: [
        "Prussian blue, immediately upon exposure",
        "Potassium iodide (KI), within 1 day of exposure",
        "DTPA, within 24 hours of exposure",
        "Stem cell transplantation, as soon as possible after exposure"
      ],
      a: 1,
      exp: "Radiation-specific treatments: ① Potassium iodide (KI) — radioactive iodine exposure, most effective within 1 day ② Prussian blue — cesium or thallium exposure ③ DTPA — internal contamination ④ Stem cell transfusion — severe bone marrow damage ⑤ Myeloid cytokines — hematopoietic stimulation.",
      diff: "normal",
      category: "radiological"
    },
    {
      id: "rad_q08",
      q: "What treatment is used for cesium (Cesium) or thallium (Thallium) radiation contamination?",
      o: ["Potassium iodide (KI)", "DTPA", "Prussian blue", "Hydroxocobalamin"],
      a: 2,
      exp: "Radiation contamination treatment matching: Radioactive iodine → KI (potassium iodide). Cesium/thallium → Prussian blue. Internal contamination → DTPA (diethylenetriamine pentaacetate). Severe bone marrow damage → stem cell transplantation. Hematopoietic stimulation → myeloid cytokines.",
      diff: "normal",
      category: "radiological"
    },
    {
      id: "rad_q09",
      q: "What is the initial shelter-in-place radius immediately after an RDD (Dirty Bomb) explosion?",
      o: ["100 meters", "250 meters", "500 meters", "1 kilometer"],
      a: 2,
      exp: "RDD response initial evacuation zone: 500 meters in all directions from the detonation point. Once contamination direction confirmed → expand to 2 km in confirmed direction. 100-minute framework: RECOGNIZE (0–5 min) → INFORM (5–10 min) → INITIATE (5–40 min) → MEASURE & MAP (15–90 min) → EVACUATE & MONITOR (>70 min).",
      diff: "normal",
      category: "radiological"
    },
    {
      id: "rad_q10",
      q: "After the direction of radiation contamination is confirmed, how far is the shelter zone extended?",
      o: ["500 meters", "1 kilometer", "2 kilometers", "5 kilometers"],
      a: 2,
      exp: "After initial 500m shelter-in-place, once contamination direction is confirmed, extend to 2 km in the confirmed direction. This accounts for the downwind dispersal pattern of radioactive fallout. Zone designations are updated as time progresses.",
      diff: "normal",
      category: "radiological"
    },
    {
      id: "rad_q11",
      q: "How frequently should CBC (complete blood count) be monitored during the first 12 hours after radiation exposure?",
      o: ["Every 30 minutes", "Every 1 hour", "Every 2–3 hours", "Every 6–12 hours"],
      a: 2,
      exp: "CBC monitoring schedule: First 12 hours after exposure = every 2–3 hours, then for 3 days = every 4–6 hours. Lymphocyte count monitoring is key. Referral to radiation accident and hematology specialists is needed. General treatment: antiemetics for nausea/vomiting, fluid support.",
      diff: "hard",
      category: "radiological"
    },
    {
      id: "rad_q12",
      q: "How does a patient appear during the Latent stage of ARS?",
      o: [
        "Dehydrated from severe vomiting and diarrhea",
        "Suffering from skin redness and blistering",
        "Appearing healthy with no symptoms",
        "Experiencing seizures and decreased consciousness"
      ],
      a: 2,
      exp: "The trap of the ARS Latent stage: the patient appears healthy and has no symptoms. This is a clinical trap — severe internal damage is actually progressing. An important decision point in the RPG game: do not be complacent just because there are no symptoms. After the latent period, the condition deteriorates rapidly in the manifest illness stage.",
      diff: "normal",
      category: "radiological"
    },
    {
      id: "rad_q13",
      q: "Which of the following is NOT a delayed effect of radiation exposure?",
      o: ["Cancer", "Fetal abnormalities", "Skin burns", "Blood disorders"],
      a: 2,
      exp: "Immediate effects: skin irritation/burns, Acute Radiation Syndrome (ARS). Delayed effects: cancer, fetal abnormalities, genetic disorders, blood disorders. Skin burns are an immediate effect. Cutaneous Radiation Syndrome occurs from acute radiation exposure to the skin and can occur independently without ARS.",
      diff: "normal",
      category: "radiological"
    },
    {
      id: "rad_q14",
      q: "In the PRISM protocol for radiation decontamination, how long does Step 3 (secondary decontamination) take after Step 2 (ladder pipe wash)?",
      o: ["5 seconds", "15 seconds", "90 seconds", "5 minutes"],
      a: 2,
      exp: "PRISM 3 steps: ① Undressing + dry decontamination ② Ladder pipe lukewarm water rinse 15 seconds ③ Secondary/technical decontamination 90 seconds (baby shampoo + cotton wipes). Completing all 3 PRISM steps can remove 100% (SD±1%) of chemical/radiation contamination.",
      diff: "normal",
      category: "radiological"
    },
    {
      id: "rad_q15",
      q: "For first responders within the first 15 minutes of a radiation incident who cannot use SCBA (e.g., while driving), what respiratory protection is recommended?",
      o: [
        "Surgical mask",
        "Half-face APR + P100 or HEPA filter",
        "N95 mask",
        "Full-face APR + P100 filter"
      ],
      a: 3,
      exp: "Radiation PPE table: First 15 minutes — SCBA positive-pressure respirator (preferred). When SCBA interferes with operations (e.g., driving) — full-face APR + P100 or HEPA filter. After 15 minutes — half-face APR + P100/HEPA filter, or N95. Always: protective eyewear, gloves, standard duty uniform.",
      diff: "hard",
      category: "radiological"
    },
    {
      id: "rad_q16",
      q: "What is the prognosis and mortality rate at a radiation exposure dose of 200–600 rem?",
      o: [
        "Excellent, 0% mortality",
        "Good, 15–80% mortality",
        "Poor, 80–90% mortality",
        "Death, 100%"
      ],
      a: 1,
      exp: "Dose-dependent prognosis: 25–100 rem = excellent, 0%. 100–200 rem = excellent, 0–15%. 200–600 rem = good, 15–80%. 600–1000 rem = poor, 80–90%. 1000–3500 rem = death, nearly 100%. >3500 rem = death, 100%. 200–600 rem affects bone marrow, hematopoietic system, and gastrointestinal tract.",
      diff: "hard",
      category: "radiological"
    },
    {
      id: "rad_q17",
      q: "In the time-based response mission for a radiological disaster, what is the time window for the 'RECOGNIZE' phase?",
      o: ["0–2 minutes", "0–5 minutes", "5–10 minutes", "10–15 minutes"],
      a: 1,
      exp: "100-minute framework: RECOGNIZE (identify radiation at explosion scene) = 0–5 min. INFORM (initial hot zone notification to responders and public, notify relevant agencies) = 5–10 min. INITIATE (begin life-saving without radiation monitoring) = 5–40 min. MEASURE & MAP (radiation measurement) = 15–90 min. EVACUATE & MONITOR (evacuation, check community reception centers) = >70 min.",
      diff: "hard",
      category: "radiological"
    },
    {
      id: "rad_q18",
      q: "What is the key content of Public Information Announcement (PIA) #1?",
      o: [
        "Providing information on radiation hazards",
        "Instructions directing immediate field evacuation",
        "Immediate shelter-in-place instructions",
        "Holding a press conference for the media"
      ],
      a: 2,
      exp: "PIA 3 phases: #1 — Pre-approved public message including immediate shelter-in-place instructions (upon recognition of explosion). #2 — Radiation hazard information + re-emphasize shelter-in-place. #3 — Press conference including response, evacuation, and self-decontamination information. Remember the order: shelter-in-place first, then provide information.",
      diff: "hard",
      category: "radiological"
    },
    {
      id: "rad_q19",
      q: "What are the symptoms of Cutaneous Radiation Syndrome?",
      o: [
        "Nausea, vomiting, diarrhea, hair loss",
        "Skin redness, blistering, ulceration",
        "Hypotension, tachycardia, decreased consciousness",
        "Lymphadenopathy and bleeding tendency"
      ],
      a: 1,
      exp: "Cutaneous Radiation Syndrome: Acute radiation exposure to the skin causes reddening, blistering, and ulceration. Can occur independently without ARS (e.g., during radiation therapy). Confined to the radiation-burned area only.",
      diff: "normal",
      category: "radiological"
    },
    {
      id: "rad_q20",
      q: "What are the 3 factors that determine the degree of injury from radiation exposure?",
      o: [
        "Type of radiation, exposure time, patient age",
        "Dose/time, distance from source, shielding",
        "Exposure area, absorbed dose, whole-body vs. localized",
        "Type of radioisotope, half-life, distribution in the body"
      ],
      a: 1,
      exp: "3 factors determining radiation injury: ① Dose per time — how much radiation was received and how quickly ② Distance from source — inversely proportional to the square of distance ③ Shielding — material between the radiation and the body. These 3 factors are the core principles of radiation protection.",
      diff: "normal",
      category: "radiological"
    },
    {
      id: "rad_q21",
      q: "Which of the following is NOT one of the 3 roles of the EOC (Emergency Operations Center) in radiological disaster response?",
      o: [
        "Issuing protective measures to the public",
        "Notifying partners and requesting support",
        "Integrating and mapping radiation data",
        "Conducting direct on-scene decontamination"
      ],
      a: 3,
      exp: "EOC (Emergency Operations Center) roles: ① Issue protective measures to the public ② Notify partners and request support ③ Integrate and map radiation data. Direct on-scene decontamination is the role of the field response team, not the EOC. The EOC handles command, control, and coordination functions.",
      diff: "hard",
      category: "radiological"
    },
    {
      id: "rad_q22",
      q: "Which of the following is NOT one of the 6 goals of Population Monitoring after radiation exposure?",
      o: [
        "Determining referral for medical treatment",
        "Confirming external contamination (body/clothing)",
        "Immediate treatment of radiation-induced cancer",
        "Performing decontamination"
      ],
      a: 2,
      exp: "6 goals of Population Monitoring: ① Determine whether medical treatment referral is needed ② Confirm external contamination ③ Confirm internal contamination ④ Perform decontamination ⑤ Assess radiation dose received and health risks ⑥ Assess long-term health effects. 'Immediate treatment' of radiation-induced cancer does not apply (cancer develops years to decades later).",
      diff: "hard",
      category: "radiological"
    },
    {
      id: "rad_q23",
      q: "What are the primary target organs at a radiation exposure dose of 1000–3500 rem?",
      o: [
        "Brain and spinal cord (CNS)",
        "Bone marrow and hematopoietic system",
        "Microvasculature and gastrointestinal tract",
        "Lungs and heart"
      ],
      a: 2,
      exp: "ARS dose-dependent target organs: 200–1000 rem = bone marrow/hematopoietic system/GI tract (hematopoietic syndrome). 1000–3500 rem = microvasculature (tiny blood vessels)/GI tract (gastrointestinal syndrome) — diarrhea, fever, electrolyte maintenance. >3500 rem = brain/spinal cord (CNS syndrome) — seizures, tremors. Higher doses affect increasingly radioresistant tissues.",
      diff: "hard",
      category: "radiological"
    },
    {
      id: "rad_q24",
      q: "What rule describes the law of radioactive decay of nuclear fallout after a nuclear incident in a radiological disaster?",
      o: ["1-2 rule", "3-5 rule", "7-10 rule", "12-24 rule"],
      a: 2,
      exp: "Fallout decay '7-10 rule': For every 7-fold increase in time after detonation, radiation intensity decreases by approximately one-tenth. Example: Starting at 100 R/hr, radiation drops sharply over time. This is why 'sheltering indoors for 12–24 hours' is effective.",
      diff: "hard",
      category: "radiological"
    },
    {
      id: "rad_q25",
      q: "When should 'Dry Decontamination' be prioritized at a radiological disaster scene?",
      o: [
        "When radiation dose is 100 rem or higher",
        "When water supply is delayed",
        "When contaminated with liquid radioactive material",
        "When internal contamination is suspected"
      ],
      a: 1,
      exp: "When water supply is delayed or unavailable, immediately begin dry decontamination: undress → remove powder/dust from skin/hair (using a soft brush). Because decontamination effectiveness for wet contaminants decreases exponentially with time delay, starting with dry decontamination first is critical.",
      diff: "normal",
      category: "radiological"
    },
    {
      id: "rad_q26",
      q: "What is the recommended treatment at a radiation exposure dose of 600–1000 rem?",
      o: [
        "Reassurance and observation",
        "Blood transfusion and hematopoietic recovery",
        "Hematopoietic cytokines + bone marrow transplantation",
        "Electrolyte maintenance and sedatives"
      ],
      a: 2,
      exp: "Dose-dependent treatment: 25–100 rem = reassurance. 100–200 rem = hematopoietic recovery. 200–600 rem = blood transfusion + hematopoietic cytokines. 600–1000 rem = hematopoietic cytokines + bone marrow transplantation (poor prognosis, 80–90% mortality). 1000–3500 rem = electrolyte maintenance (fatal outcome). >3500 rem = sedatives (100% mortality).",
      diff: "hard",
      category: "radiological"
    },
    {
      id: "rad_q27",
      q: "Which triage systems are used in radiological disaster response?",
      o: [
        "Only START and MASS are used",
        "START, SMART, and Radiological Disaster Triage",
        "Only TST (Ten Second Triage) is used",
        "Only SALT and CSCATTT are used"
      ],
      a: 1,
      exp: "Radiological disaster triage systems: ① START (reorganized radiological version) ② SMART triage ③ Radiological Disaster Triage (Medical Management of Radiological Casualties, 4th ed., 2013). A specialized triage system that reflects ARS severity according to radiation exposure dose is required.",
      diff: "hard",
      category: "radiological"
    }
  ],

  // ==========================================
  // NUCLEAR (Nuclear Disaster) — 27 questions
  // ==========================================
  nuclear: [
    {
      id: "nuc_q01",
      q: "What is the basic unit used to express the yield of a nuclear explosion?",
      o: [
        "Megawatt (MW)",
        "Kiloton (kT) TNT equivalent",
        "Rem unit",
        "Joule unit"
      ],
      a: 1,
      exp: "The scale of nuclear explosions is expressed in TNT equivalent, primarily in kilotons (kT, 1,000 tons of TNT equivalent). 1 kT nuclear device = 1,000 tons of TNT explosive force. FEMA planning standard: 10 kT surface burst. Historical: Hiroshima ~15 kT, Nagasaki ~21 kT.",
      diff: "normal",
      category: "nuclear"
    },
    {
      id: "nuc_q02",
      q: "What mass of fissioned uranium atoms is required to produce a 10 kT nuclear explosion?",
      o: ["1 kilogram (1 kg)", "Approximately 20 ounces (≈0.6 liters)", "100 kilograms", "1 ton"],
      a: 1,
      exp: "Remarkable fact: Fissioning just 20 ounces (≈0.6 L) of uranium atoms produces a 10 kT explosion. This is 10 times the power of the 2020 Beirut ammonium nitrate port explosion (~1 kT equivalent). Understanding the scale of destructive power held by a small amount of nuclear material is important.",
      diff: "normal",
      category: "nuclear"
    },
    {
      id: "nuc_q03",
      q: "How many kilotons (kT) of nuclear explosion equivalent energy was released by the 2020 Beirut ammonium nitrate port explosion?",
      o: ["0.01 kT", "Approximately 1 kT", "10 kT", "100 kT"],
      a: 1,
      exp: "The 2020 Beirut explosion released energy equivalent to approximately 1 kT of nuclear explosion. The FEMA planning standard of a 10 kT nuclear device is 10 times more powerful. The Beirut explosion was one of the largest non-nuclear explosions in history, injuring thousands and destroying thousands of buildings.",
      diff: "normal",
      category: "nuclear"
    },
    {
      id: "nuc_q04",
      q: "What is the most important protective action (top priority recommendation) after a nuclear explosion?",
      o: [
        "Immediately evacuate quickly using a vehicle",
        "Stay outside and wear protective clothing",
        "Get inside a building, stay inside, and stay tuned for information",
        "Go to the rooftop of a tall building to avoid radiation"
      ],
      a: 2,
      exp: "Top priority protective action after a nuclear explosion: 'Get Inside, Stay Inside, Stay Tuned.' Shelter in a basement or the center of a large, dense building. Stay for 12–24 hours or more. Sheltering in a building is more effective at reducing fallout exposure than immediate evacuation.",
      diff: "normal",
      category: "nuclear"
    },
    {
      id: "nuc_q05",
      q: "What is the recommended shelter-in-place duration after a nuclear explosion?",
      o: ["1–2 hours", "4–6 hours", "12–24 hours", "72 hours"],
      a: 2,
      exp: "By the '7-10 rule,' fallout radioactivity decreases rapidly over time. Sheltering indoors for 12–24 hours greatly reduces fallout exposure. Stay inside for this period unless additional guidance is provided. Best means of receiving information: AM/FM radio.",
      diff: "normal",
      category: "nuclear"
    },
    {
      id: "nuc_q06",
      q: "What is the best means of getting information after a nuclear explosion?",
      o: ["Social media", "Internet portal sites", "AM/FM radio", "TV broadcast"],
      a: 2,
      exp: "After a nuclear explosion, EMP (electromagnetic pulse) can disrupt the power grid. AM/FM radio is the most reliable source of information. Next: TV, mobile phone, internet (if available). Internet and social media are unreliable during power outages or widespread disruption.",
      diff: "normal",
      category: "nuclear"
    },
    {
      id: "nuc_q07",
      q: "What radiation dose corresponds to the 'Red Zone' of a 10 kT nuclear explosion?",
      o: [
        "<1 Gy (<100 rad)",
        "1–8 Gy (100–800 rad)",
        ">8 Gy (>800 rad)",
        ">35 Gy (>3500 rad)"
      ],
      a: 2,
      exp: "Radiation dose by zone for a 10 kT surface burst: Red Zone = >8 Gy (>800 rad) — lethal. Yellow Zone = 1–8 Gy (100–800 rad) — injurious to lethal. Green Zone = <1 Gy (<100 rad) — below acute injury threshold. Survival in the Red Zone is nearly impossible.",
      diff: "normal",
      category: "nuclear"
    },
    {
      id: "nuc_q08",
      q: "What is the decision dose for withdrawal of emergency responders from the hot zone as established by the NCRP (National Council on Radiation Protection)?",
      o: ["0.1 Gy (10 rad)", "0.5 Gy (50 rad)", "1 Gy (100 rad)", "2.5 Gy (250 rad)"],
      a: 1,
      exp: "NCRP decision dose: When the cumulative absorbed dose reaches 0.5 Gy (50 rad), a decision must be made whether to withdraw emergency responders from the hot zone. This is a decision point, not a dose limit. Adherence to the ALARA principle (As Low As Reasonably Achievable) is the foundation.",
      diff: "hard",
      category: "nuclear"
    },
    {
      id: "nuc_q09",
      q: "What is the maximum radiation exposure an emergency responder may accept for 'life-saving or large population protection' with full risk awareness?",
      o: [
        "50 mSv (5 rem)",
        "100 mSv (10 rem)",
        "250 mSv (25 rem)",
        ">250 mSv (>25 rem)"
      ],
      a: 3,
      exp: "Emergency responder dose criteria: All occupational exposure = 50 mSv (5 rem). Property protection for public welfare = 100 mSv (10 rem). Life-saving/large population protection = 250 mSv (25 rem). Full risk awareness + life-saving/population protection = >250 mSv (>25 rem). NCRP decision dose = 500 mGy (50 rad).",
      diff: "hard",
      category: "nuclear"
    },
    {
      id: "nuc_q10",
      q: "According to data from the Hiroshima/Nagasaki bombings (1945), what caused 83–91% of burns among survivors?",
      o: [
        "Flame burns",
        "Flash burns alone",
        "Radiation burns",
        "Combined flash + flame burns"
      ],
      a: 1,
      exp: "Hiroshima/Nagasaki burn data (Lebow et al., 1981; War Department, 1945): Flash alone = 83–91%, Combined flash + flame = 6–15%, Flame alone = 2–3%. Flash burns were the overwhelming majority. This demonstrates how powerful the immediate thermal radiation is after a nuclear explosion.",
      diff: "hard",
      category: "nuclear"
    },
    {
      id: "nuc_q11",
      q: "What is the role of RTR sites (RTR 1–3) in the RTR (Radiation Triage, Treatment, and Transport) system?",
      o: [
        "Definitive treatment facility (equivalent to a hospital)",
        "Initial triage/treatment hubs that spontaneously form during an incident",
        "Assembly points for mass evacuation",
        "Dedicated radiation measurement monitoring stations"
      ],
      a: 1,
      exp: "RTR system components: RTR sites (1–3) = initial triage/treatment hubs that spontaneously form during an incident. Assembly Centers (AC) = gathering points. Medical Centers (MC) = treatment facilities. Evacuation Centers (EC) = population evacuation. RTR site 3 may be located at a designated AC depending on location/infrastructure.",
      diff: "hard",
      category: "nuclear"
    },
    {
      id: "nuc_q12",
      q: "What does the ALARA principle mean?",
      o: [
        "All Life Actions Require Assessment",
        "As Low As Reasonably Achievable",
        "Always Limit Any Radiation Activity",
        "Assess Losses And Reduce Accordingly"
      ],
      a: 1,
      exp: "ALARA = As Low As Reasonably Achievable. The core principle of radiation protection, requiring that radiation exposure be minimized while still performing necessary activities. It is a guide for balancing life-saving and responder safety.",
      diff: "normal",
      category: "nuclear"
    },
    {
      id: "nuc_q13",
      q: "For which type of radiation does the approximation '1 R ≈ 1 rad ≈ 1 rem' hold in nuclear disaster planning?",
      o: [
        "Alpha radiation",
        "Beta radiation",
        "Gamma radiation in air",
        "Neutron radiation"
      ],
      a: 2,
      exp: "1 R ≈ 1 rad ≈ 1 rem: A simplified approximation that holds for gamma radiation in air. Used for convenience in nuclear disaster planning (FEMA 2023). This approximation does not apply to other radiation types or tissues.",
      diff: "hard",
      category: "nuclear"
    },
    {
      id: "nuc_q14",
      q: "What is the primary effect of the Electromagnetic Pulse (EMP) from a nuclear explosion?",
      o: [
        "Expanding the range of radiation exposure",
        "Disrupting the power grid and infrastructure",
        "Dispersing radioactive fallout in the atmosphere",
        "Generating chemical contaminants"
      ],
      a: 1,
      exp: "Nuclear explosion EMP (Electromagnetic Pulse, Source Region EMP = SREMP): Disrupts the power grid causing widespread infrastructure damage. Affects electronic devices, communication systems, and medical equipment. This is also why AM/FM radio is the primary information source after a nuclear explosion.",
      diff: "hard",
      category: "nuclear"
    },
    {
      id: "nuc_q15",
      q: "What is the key difference between a hydrogen bomb (H-bomb) and an atomic bomb (A-bomb)?",
      o: [
        "H-bomb uses fission, A-bomb uses fusion",
        "A-bomb uses fission, H-bomb uses fusion (triggered by fission)",
        "Both bombs operate on the same principle",
        "H-bomb is a chemical reaction, A-bomb is a nuclear reaction"
      ],
      a: 1,
      exp: "Atomic bomb (A-bomb, Hiroshima/Nagasaki type) = fission reaction (uranium or plutonium). Hydrogen bomb (H-bomb/thermonuclear bomb) = two-stage reaction that triggers fusion via fission. H-bomb is tens to thousands of times more powerful than A-bomb. FEMA planning standard is a 10 kT (A-bomb level) surface burst.",
      diff: "hard",
      category: "nuclear"
    },
    {
      id: "nuc_q16",
      q: "What is the last of the 6 goals of Population Monitoring after a nuclear explosion?",
      o: [
        "Determining whether medical treatment referral is needed",
        "Confirming external contamination",
        "Perform decontamination",
        "Assessing long-term health effects"
      ],
      a: 3,
      exp: "Order of 6 Population Monitoring goals: ① Determine need for medical treatment referral ② Confirm external contamination ③ Confirm internal contamination ④ Perform decontamination ⑤ Assess dose and health risks ⑥ Assess long-term health effects. Remember that the last goal is long-term follow-up.",
      diff: "normal",
      category: "nuclear"
    },
    {
      id: "nuc_q17",
      q: "How many response zones has FEMA defined as planning guidance for a 10 kT nuclear surface burst?",
      o: ["3 zones", "4 zones", "5 zones", "6 zones"],
      a: 2,
      exp: "FEMA 2023 nuclear explosion response planning: Defines 5 different zones (Planning Guidance Zones) based on distance from the detonation point, with different response activities and protective measures applied in each zone.",
      diff: "hard",
      category: "nuclear"
    },
    {
      id: "nuc_q18",
      q: "Approximately how many kilotons (kT) was the yield of the Hiroshima atomic bomb?",
      o: ["5 kT", "15 kT", "50 kT", "100 kT"],
      a: 1,
      exp: "Historical nuclear explosions: Hiroshima = ~15 kT, Nagasaki = ~21 kT. FEMA planning standard = 10 kT surface burst (slightly smaller than Hiroshima). Combined deaths in both cities numbered in the hundreds of thousands. Modern nuclear weapons are tens to thousands of times more powerful.",
      diff: "normal",
      category: "nuclear"
    },
    {
      id: "nuc_q19",
      q: "What is the radiation dose range corresponding to the 'Yellow Zone' in a nuclear disaster?",
      o: [
        "<1 Gy (<100 rad)",
        "1–8 Gy (100–800 rad)",
        "8–35 Gy (800–3500 rad)",
        ">35 Gy (>3500 rad)"
      ],
      a: 1,
      exp: "10 kT explosion zones: Green Zone = <1 Gy (<100 rad) — below acute injury threshold. Yellow Zone = 1–8 Gy (100–800 rad) — injurious to lethal range. Red Zone = >8 Gy (>800 rad) — lethal. The Yellow Zone overlaps with the ARS hematopoietic and gastrointestinal syndrome ranges.",
      diff: "hard",
      category: "nuclear"
    },
    {
      id: "nuc_q20",
      q: "During rescue operations after a nuclear explosion, what is the maximum radiation exposure allowed for emergency responders for the purpose of 'property protection for public welfare'?",
      o: ["50 mSv (5 rem)", "100 mSv (10 rem)", "250 mSv (25 rem)", ">250 mSv (>25 rem)"],
      a: 1,
      exp: "Allowable radiation exposure criteria (emergency responders): All occupational exposure → 50 mSv (5 rem). Property protection for public welfare → 100 mSv (10 rem, conditions: exceeding 50 mSv unavoidable + monitoring feasible). Life-saving/large population protection → 250 mSv (25 rem). Full risk awareness + life-saving → >250 mSv.",
      diff: "hard",
      category: "nuclear"
    },
    {
      id: "nuc_q21",
      q: "What is the first survival action when a nuclear bomb detonates?",
      o: [
        "Immediately move to the nearest vehicle and escape quickly",
        "Run in the opposite direction of the detonation to maximize distance",
        "Immediately drop to the ground to avoid the flash/blast wave, then shelter in a building",
        "Climb to high ground to avoid fallout"
      ],
      a: 2,
      exp: "Immediate nuclear explosion survival actions: Immediately drop to the ground to avoid the flash and blast wave → Get Inside (a building, especially a basement or center of a large, dense building) → Stay Inside (12–24 hours) → Stay Tuned (AM/FM radio). Immediate evacuation is effective only if begun before fallout descends, but sheltering indoors is more practical.",
      diff: "normal",
      category: "nuclear"
    },
    {
      id: "nuc_q22",
      q: "What is the NCRP decision dose that serves as the withdrawal criterion for emergency responders from the hot zone?",
      o: [
        "It is a dose limit, and withdrawal is mandatory upon reaching this dose",
        "It is a decision point at which the withdrawal decision is made",
        "It is a recommended maximum allowable dose that must never be exceeded",
        "It is a legally binding regulatory limit"
      ],
      a: 1,
      exp: "Important: 0.5 Gy (50 rad) = NCRP decision dose, NOT a dose limit. This is the point at which a decision must be made whether to withdraw emergency responders from the hot zone. In a life-saving situation, it may be exceeded with full risk awareness (ALARA principle applies).",
      diff: "hard",
      category: "nuclear"
    },
    {
      id: "nuc_q23",
      q: "What does the '7-10 rule' for the decay of fallout radioactivity over time after a nuclear explosion mean?",
      o: [
        "Radioactivity decreases to 10% after 7 hours",
        "For every 7-fold increase in time, radiation intensity decreases by approximately 1/10",
        "Radioactivity decreases to 7% after 10 hours",
        "Radioactivity decreases to one-tenth after 7 days"
      ],
      a: 1,
      exp: "Fallout decay '7-10 rule': For every 7-fold increase in time, radiation intensity decreases by approximately one-tenth. Example: From 100 R/hr, 10 R/hr after 7 times the elapsed time. This rule is the basis for 'sheltering indoors for 12–24 hours' being the most important protective action. Fallout decreases rapidly within days, so early sheltering is key.",
      diff: "hard",
      category: "nuclear"
    },
    {
      id: "nuc_q24",
      q: "Which answer includes all 4 components of the RTR system?",
      o: [
        "RTR sites, triage centers, hospitals, emergency response bases",
        "RTR sites (1–3), Assembly Centers (AC), Medical Centers (MC), Evacuation Centers (EC)",
        "Hot zone, warm zone, cold zone, hospital",
        "On-scene treatment post, transport zone, operating room, ICU"
      ],
      a: 1,
      exp: "RTR system 4 components: ① RTR sites (1–3) — spontaneously formed initial triage/treatment hubs ② AC (Assembly Centers) ③ MC (Medical Centers) ④ EC (Evacuation Centers). RTR site 3 may be located at a designated AC depending on location.",
      diff: "normal",
      category: "nuclear"
    },
    {
      id: "nuc_q25",
      q: "In a nuclear disaster, what is the most reliable means for the public to get information, and why?",
      o: [
        "TV — because it can provide visual information",
        "Internet — because real-time updates are possible",
        "AM/FM radio — because it is least affected by EMP damage and only requires a simple receiver",
        "Social media — because information can be disseminated quickly"
      ],
      a: 2,
      exp: "Why AM/FM radio is the best information source in a nuclear disaster: Even when nuclear EMP disrupts the power grid, simple radio receivers are less affected. TV, internet, and social media depend on power or network. Next after radio: TV → mobile phone → internet (if available).",
      diff: "normal",
      category: "nuclear"
    },
    {
      id: "nuc_q26",
      q: "In a nuclear disaster, in what situation is shelter-in-place more effective than immediate evacuation?",
      o: [
        "72 hours after the nuclear explosion",
        "When evacuation routes are fully secured",
        "Especially during the first few hours immediately after the nuclear explosion",
        "After the direction of fallout is confirmed"
      ],
      a: 2,
      exp: "Sheltering indoors is more effective during the first few hours immediately after a nuclear explosion. Reasons: ① Immediate evacuation risks increased fallout exposure ② Evacuation routes may be congested or blocked ③ The building itself provides radiation shielding. As time passes and fallout decays, consider evacuation when safe evacuation becomes more feasible.",
      diff: "hard",
      category: "nuclear"
    },
    {
      id: "nuc_q27",
      q: "Approximately how many kilotons (kT) was the yield of the Nagasaki atomic bomb?",
      o: ["10 kT", "15 kT", "21 kT", "50 kT"],
      a: 2,
      exp: "Historical nuclear explosions: Hiroshima = ~15 kT (Little Boy), Nagasaki = ~21 kT (Fat Man). FEMA planning standard 10 kT is slightly smaller than Hiroshima. Both explosions immediately killed tens of thousands, with hundreds of thousands more dying from radiation effects.",
      diff: "normal",
      category: "nuclear"
    }
  ],

  // ==========================================
  // EXPLOSIVE / CTM (Explosives/Counter-Terrorism Medicine) — 28 questions
  // ==========================================
  explosive: [
    {
      id: "exp_q01",
      q: "Among the 5 mechanisms of blast injury, which organs are primarily affected by Primary Blast Injury?",
      o: [
        "Bones and Joints",
        "Air-filled organs (lungs, ears, gastrointestinal tract)",
        "Skin and soft tissues",
        "Brain and spinal cord"
      ],
      a: 1,
      exp: "5 mechanisms of blast injury: ① Primary — blast wave (pressure wave) → air-filled organs (lung = 'blast lung', ears, GI tract) ② Secondary — penetrating trauma from fragments/shrapnel → most common injury ③ Tertiary — acceleration/deceleration (thrown and struck) → blunt trauma ④ Quaternary — burns (thermal) ⑤ Quinary — toxic inflammation (chemical/biological/radiological contamination).",
      diff: "normal",
      category: "explosive"
    },
    {
      id: "exp_q02",
      q: "Among the 5 mechanisms of blast injury, which is the most common cause of injury?",
      o: ["Primary (blast wave)", "Secondary (fragments/shrapnel)", "Tertiary (acceleration/deceleration)", "Quaternary (burns)"],
      a: 1,
      exp: "Secondary Blast Injury = penetrating trauma from fragments and shrapnel → most common cause of injury. Explosives often contain lethality-enhancing additions such as nails, bolts, and metal pieces. Treatment per ATLS standards is required.",
      diff: "normal",
      category: "explosive"
    },
    {
      id: "exp_q03",
      q: "Which location had the most fatalities during the 2015 Paris terror attack?",
      o: ["Stade de France", "La Casa Nostra", "Bataclan Concert Hall", "Café Comptoir Voltaire"],
      a: 2,
      exp: "November 13, 2015 Paris attacks: At the Bataclan Concert Hall, 3 attackers held hostages for 2 hours before police stormed at 12:20 AM, and attackers detonated suicide vests, killing at least 89. Total deaths 130+. The Lancet 2017: military-civilian medical cooperation, pediatric trauma management, and inter-agency coordination were key lessons.",
      diff: "normal",
      category: "explosive"
    },
    {
      id: "exp_q04",
      q: "What type of weapon was used in the 2016 Nice truck attack (Bastille Day)?",
      o: [
        "Bomb attack (IED)",
        "Rifle/firearm attack",
        "Vehicle (truck) ramming attack",
        "Chemical weapon attack"
      ],
      a: 2,
      exp: "July 14, 2016 (Bastille Day), a truck drove into crowds on the Promenade des Anglais in Nice. Entered at 22:30, stopped by police at 22:35 near the Palais de la Méditerranée. Vehicle (non-explosive) attacks: In GTD 1970–2020 data, only 127 incidents (0.07%) but average 176.44 casualties per incident — the highest per-incident casualty count.",
      diff: "normal",
      category: "explosive"
    },
    {
      id: "exp_q05",
      q: "According to global terrorism data (GTD) from 1970–2020, which weapon type was used most frequently by incident count?",
      o: ["Firearms", "Explosives", "Vehicle", "Chemical weapons"],
      a: 1,
      exp: "GTD 1970–2020 statistics: Explosives = 90,003 incidents (51.43%) — most incidents. Firearms = 52,406 incidents (29.95%). Total: 174,995 incidents, 354,382 killed, 511,319 injured. However, casualties per incident: vehicle (non-explosive) = 176.44 — the highest.",
      diff: "normal",
      category: "explosive"
    },
    {
      id: "exp_q06",
      q: "What are the 3 treatment zones of TECC (Tactical Emergency Casualty Care)?",
      o: [
        "Hot zone, warm zone, cold zone",
        "Direct Threat Care (hot), Indirect Threat Care (warm), Evacuation Care",
        "On-scene, in-transit, pre-hospital phase",
        "Primary response, secondary response, tertiary response"
      ],
      a: 1,
      exp: "TECC 3 zones: ① Direct Threat Care (hot zone) — care under immediate threat ② Indirect Threat Care (warm zone) — perform S-C-ABE (Safety, Circulation, Airway, Breathing, Environment) ③ Evacuation Care — care during transport. TCCC applies military principles to urban environments.",
      diff: "normal",
      category: "explosive"
    },
    {
      id: "exp_q07",
      q: "In TECC Indirect Threat Care, what does 'C' stand for in the S-C-ABE protocol?",
      o: ["Command", "Circulation/Hemorrhage control", "Contamination check", "Communication"],
      a: 1,
      exp: "S-C-ABE: S (Safety), C (Circulation/hemorrhage control — massive hemorrhage control), A (Airway), B (Breathing), E (Environment/Evacuation). Similar to the MARCH or M-A-R-C-H protocol. In the indirect threat zone, hemorrhage control first, then airway and breathing.",
      diff: "hard",
      category: "explosive"
    },
    {
      id: "exp_q08",
      q: "What does '3T' stand for in CSCATTT?",
      o: [
        "Training, Technology, Teamwork",
        "Triage, Treatment, Transportation",
        "Threat, Target, Tactics",
        "Trauma, Triage, Transfer"
      ],
      a: 1,
      exp: "MIMMS (UK MCI framework) CSCATTT: Command, Safety, Communication, Assessment, Triage, Treatment, Transportation. The last 3T = Triage-Treatment-Transportation. These are the 3 core steps of actual medical response.",
      diff: "normal",
      category: "explosive"
    },
    {
      id: "exp_q09",
      q: "What is the definition of CTM (Counter-Terrorism Medicine)?",
      o: [
        "A medical specialty that responds only to chemical weapon terrorism",
        "A medical specialty that responds to terrorist attacks",
        "Medical support after explosive ordnance disposal",
        "Medical specialty for rehabilitation of terrorism victims"
      ],
      a: 1,
      exp: "CTM (Counter-Terrorism Medicine) = the medical specialty dealing with terrorist attacks. Components: target hardening, tactical EMS, MCI/ICS, injury mechanism patterns, traumatology, CBRNE, psychological recovery, community rehabilitation, interoperability, HVA (Hazard Vulnerability Analysis), medical facility targeting response. Reflects the reality that EMS itself becomes a terrorist target.",
      diff: "normal",
      category: "explosive"
    },
    {
      id: "exp_q10",
      q: "What does 'H' stand for in the THREAT protocol?",
      o: [
        "Hazard identification",
        "Hemorrhage control",
        "Hospital notification",
        "Hypothermia prevention"
      ],
      a: 1,
      exp: "THREAT protocol: T (Threat suppression), H (Hemorrhage control), R (Rapid extrication), E (Assessment), A (Transport). Priority order at a terrorist scene: threat suppression → hemorrhage control → extrication → assessment → transport. Source: Alpert EA, Grossman SA. EMS Terrorism Response. StatPearls 2023.",
      diff: "normal",
      category: "explosive"
    },
    {
      id: "exp_q11",
      q: "What are the 3 steps of the 3 Echo protocol?",
      o: [
        "Evaluate, Execute, Evacuate",
        "Enter, Evaluate, Evacuate",
        "Engage, Establish, Exit",
        "Examine, Estimate, Extract"
      ],
      a: 1,
      exp: "3 Echo protocol: Enter, Evaluate, Evacuate. A simple three-step on-scene response protocol. Used together with the THREAT protocol for standardizing initial response at terrorist scenes.",
      diff: "normal",
      category: "explosive"
    },
    {
      id: "exp_q12",
      q: "In TST (Ten Second Triage), how is a 'walking patient' classified in terms of priority?",
      o: ["P1 (Immediate)", "P2 (Delayed)", "P3 (Minimal/Minor)", "Not Breathing (Deceased)"],
      a: 2,
      exp: "TST (NHS UK Ten Second Triage) algorithm: ① Can walk? → Yes = P3 (Minimal/Minor). ② Cannot walk + severe bleeding? → Yes = pressure/tourniquet/packing → P1. ③ Cannot walk + no bleeding + speaking + penetrating injury (front/back) → P1. ④ Speaking + no penetrating injury → P2. ⑤ Cannot speak + breathing → P1 (open airway). ⑥ Cannot speak + not breathing → Not Breathing.",
      diff: "normal",
      category: "explosive"
    },
    {
      id: "exp_q13",
      q: "What is the average number of casualties per incident for chemical weapon terrorist attacks?",
      o: ["5", "20", "45", "176"],
      a: 2,
      exp: "GTD 1970–2020 analysis by weapon type: Chemical weapons = 295 incidents (0.17%), 13,275 casualties, average 45 casualties per incident. Explosives = 4.23 per incident. Vehicle (non-explosive) = 176.44 per incident (highest). Chemical weapons cause more than 10 times as many casualties per incident as explosives.",
      diff: "hard",
      category: "explosive"
    },
    {
      id: "exp_q14",
      q: "What is the title of the medical personnel who work alongside SWAT teams in TEMS (Tactical Emergency Medical Support)?",
      o: [
        "Emergency Medical Technician (EMT)",
        "Tactical Medical Provider (TMP)",
        "Combat Medic",
        "Trauma Surgeon"
      ],
      a: 1,
      exp: "TEMS = Integration of medical and tactical response in hostile environments. Provides pre-hospital emergency medical care during SWAT training and deployment. Personnel working alongside SWAT = TMP (Tactical Medical Providers). Reference: Campbell et al. Tactical Medicine Essentials.",
      diff: "hard",
      category: "explosive"
    },
    {
      id: "exp_q15",
      q: "What is a 'Secondary Attack (double-tap)' at a terrorist scene?",
      o: [
        "A second bomb within the same building",
        "An attack targeting responders (police/EMS) who arrive after the initial attack",
        "A follow-up attack at the same location two days later",
        "A simultaneous attack at two different locations"
      ],
      a: 1,
      exp: "Secondary Attack ('double-tap'): An additional attack targeting responders (paramedics, police, firefighters, etc.) who arrive at the scene after the initial attack. Growing trend of EMS being targeted as 'soft targets.' Responder safety is the top priority — do not approach until the scene is confirmed safe.",
      diff: "normal",
      category: "explosive"
    },
    {
      id: "exp_q16",
      q: "Which of the following is NOT a key lesson from The Lancet 2017 report on the Paris attacks (2015)?",
      o: [
        "Medical preparedness and adaptability",
        "Military-civilian medical service cooperation",
        "Pediatric trauma management",
        "Radiation exposure management protocol after a nuclear explosion"
      ],
      a: 3,
      exp: "Key lessons from The Lancet 2017 on Paris/Nice incidents: ① Medical preparedness and adaptability ② Military-civilian medical cooperation ③ Pediatric trauma management ④ Inter-agency coordination ⑤ Pre-hospital damage control. Radiation exposure management is unrelated to the context of explosive terrorism.",
      diff: "hard",
      category: "explosive"
    },
    {
      id: "exp_q17",
      q: "What was the total number of deaths from global terrorism from 1970 to 2020?",
      o: ["54,382", "154,382", "354,382", "554,382"],
      a: 2,
      exp: "GTD 1970–2020 overall statistics: Total incidents 174,995, total deaths 354,382, total injuries 511,319, overall average casualties per incident 21.53. Figures include the 9/11 attacks.",
      diff: "hard",
      category: "explosive"
    },
    {
      id: "exp_q18",
      q: "A patient presenting with hearing loss, tympanic membrane perforation, and respiratory distress without external wounds after an explosion has what type of blast injury?",
      o: [
        "Secondary blast injury (penetrating trauma from fragments)",
        "Primary blast injury (organ damage from pressure wave)",
        "Tertiary blast injury (thrown and struck)",
        "Quaternary blast injury (burns)"
      ],
      a: 1,
      exp: "Primary Blast Injury: The blast wave (pressure wave) damages air-filled organs. 'Blast lung' = lung injury + respiratory distress, tympanic membrane perforation, GI tract injury. Can present without external wounds. Treatment dilemma: blast lung injury vs. pneumothorax (management differs).",
      diff: "normal",
      category: "explosive"
    },
    {
      id: "exp_q19",
      q: "A patient thrown 20 meters by an explosion has what mechanism of blast injury?",
      o: ["Primary (pressure wave)", "Secondary (fragments)", "Tertiary (acceleration/deceleration)", "Quaternary (burns)"],
      a: 2,
      exp: "Tertiary Blast Injury: Acceleration/deceleration from the explosion — blunt trauma from being thrown and striking an object. Can cause skull fractures, spinal injuries, internal organ damage, etc. May be observed in areas beyond the immediate blast scene.",
      diff: "normal",
      category: "explosive"
    },
    {
      id: "exp_q20",
      q: "What is the standard hospital response protocol for explosive terrorism scenes?",
      o: [
        "ACLS (Advanced Cardiac Life Support)",
        "ATLS (Advanced Trauma Life Support)",
        "CSCATTT (MIMMS framework)",
        "TECC (Tactical Emergency Casualty Care)"
      ],
      a: 1,
      exp: "Hospital treatment standard for injuries from explosive terrorism: Systematic trauma care based on ATLS (Advanced Trauma Life Support). ATLS is the international standard for major trauma care. CSCATTT is the on-scene command framework; TECC is tactical field care.",
      diff: "normal",
      category: "explosive"
    },
    {
      id: "exp_q21",
      q: "According to CTM (Counter-Terrorism Medicine) take-home messages, what takes a 'leading role'?",
      o: [
        "Law enforcement (police)",
        "Military",
        "Counter-Terrorism Medicine (CTM) itself",
        "Public health agencies"
      ],
      a: 2,
      exp: "CTM 6 take-home messages: ① Strong governance ② Military-civilian cooperation ③ Integrated command and control ④ Preparedness and specialized training ⑤ Ensuring responder safety ⑥ CTM plays a leading role. CTM is not merely medical support but serves as the core coordination role in terrorism response.",
      diff: "hard",
      category: "explosive"
    },
    {
      id: "exp_q22",
      q: "In GTD data from 1970–2020, how many casualties on average per incident did biological weapon attacks produce?",
      o: ["0", "Approximately 26", "45", "176"],
      a: 1,
      exp: "GTD biological weapons: 31 incidents (0.02%), 9 killed, 805 injured, average 25.97 casualties per incident. Chemical weapons: 45 per incident. Explosives: 4.23 per incident. Biological weapon incidents are very rare but produce substantial casualties when they occur.",
      diff: "hard",
      category: "explosive"
    },
    {
      id: "exp_q23",
      q: "TCCC (Tactical Casualty Care) applies principles from which environment to urban settings?",
      o: ["Emergency medicine principles", "Military principles", "Maritime rescue principles", "Aerospace medicine principles"],
      a: 1,
      exp: "TCCC (Tactical Casualty Care) = Military principles applied to urban environments. TECC (Tactical Emergency Casualty Care) is the civilian/EMS version. The Ukraine war (TCCC Ukraine) is a recent major reference case. TEMS is the integration of SWAT and medical care.",
      diff: "normal",
      category: "explosive"
    },
    {
      id: "exp_q24",
      q: "Which answer includes all injury types addressed by the Stop the Bleed program?",
      o: [
        "Blast injury, radiation injury, chemical injury",
        "Knife injury, gunshot injury, blast injury, crushing injury, penetrating injury",
        "Head injury, chest injury, abdominal injury",
        "Burns, drowning, high-altitude injury"
      ],
      a: 1,
      exp: "Stop the Bleed program injury types: ① Knife injury ② Gunshot injury ③ Blast injury ④ Crushing injury ⑤ Penetrating injury. A public training program that covers all external injuries amenable to hemorrhage control.",
      diff: "hard",
      category: "explosive"
    },
    {
      id: "exp_q25",
      q: "How long did the terrorists hold hostages at the Bataclan Concert Hall in Paris?",
      o: ["30 minutes", "1 hour", "2 hours", "4 hours"],
      a: 2,
      exp: "Bataclan Concert Hall siege: 3 attackers entered at 9:40 PM → approximately 2-hour hostage situation → police stormed at 12:20 AM → attackers detonated suicide vests → at least 89 killed. It was the site with the most casualties in the Paris attacks.",
      diff: "normal",
      category: "explosive"
    },
    {
      id: "exp_q26",
      q: "Which best describes the clinical characteristics of explosive terrorism victims?",
      o: [
        "Mostly elderly patients with simple trauma",
        "Young victims, complex severe injuries, hemodynamic instability, low GCS",
        "Mostly minor injuries with little need for ICU care",
        "No chest injury with extremity fractures as the main injury"
      ],
      a: 1,
      exp: "Clinical characteristics of explosive terrorism victims: Young victims, severe and complex injuries, hemodynamic instability, low Glasgow Coma Score (GCS), increased ICU and surgical intervention, multidimensional injury patterns — requiring trauma surgery oversight. More severe and complex than typical explosive accidents.",
      diff: "normal",
      category: "explosive"
    },
    {
      id: "exp_q27",
      q: "Which of the following is NOT a way terrorists exploit ambulances?",
      o: [
        "Using as a Vehicle-Borne Improvised Explosive Device (VBIED)",
        "As a means of transporting weapons, explosives, combatants, and terrorists",
        "For their original purpose of safely evacuating patients",
        "Targeting EMS as a 'soft target'"
      ],
      a: 2,
      exp: "Terrorist exploitation of ambulances: ① VBIED (vehicle-borne explosive device) ② Transporting weapons/explosives/combatants/terrorists ③ Attacking EMS as a soft target. 'Original purpose (patient evacuation)' is not a method of exploitation. CTM is the specialized field responding to these new threats.",
      diff: "normal",
      category: "explosive"
    },
    {
      id: "exp_q28",
      q: "According to GTD (1970–2020) data, how many deaths resulted from radiological weapon incidents?",
      o: ["0", "9", "100", "596"],
      a: 1,
      exp: "GTD radiological weapons (1970–2020): 12 incidents (0.01%), 9 killed, 0 injured. Comparison: Chemical = 596 killed, Biological = 9 killed, Radiological = 9 killed. Radiological attack incidents are fewest, with no injured (direct deaths only). Do not confuse low frequency with low probability.",
      diff: "hard",
      category: "explosive"
    }
  ]

}; // end CBRNE_ADV_QUIZ_QUESTIONS

// ============================================
// SECTION 2: BOSS BATTLES
// ============================================

const CBRNE_ADV_BOSS_BATTLES = [
  {
    id: "boss_chemical",
    name: "Sarin the Nerve Agent Overlord",
    nameEn: "Sarin the Nerve Agent Overlord",
    emoji: "☠️",
    hp: 500,
    maxHp: 500,
    category: "chemical",
    phases: [
      {
        name: "Phase 1: Toxidrome Identification",
        description: "Sarin hides its true identity! Identify the DUMBELS syndrome and expose the threat!",
        questionIds: ["chem_q03", "chem_q04", "chem_q06", "chem_q25"],
        hpThreshold: 0.75,
        attackMessage: "Sarin has been released in the subway! Pupils are constricting and saliva is dripping! Identify the toxidrome immediately!",
        damageIfWrong: 40
      },
      {
        name: "Phase 2: Emergency Decontamination",
        description: "Contamination is spreading! Decontaminate immediately using the PRISM protocol!",
        questionIds: ["chem_q08", "chem_q09", "chem_q10", "chem_q22"],
        hpThreshold: 0.50,
        attackMessage: "Contamination has spread to the warm zone! Casualties are rising due to decontamination delay! Implement PRISM now!",
        damageIfWrong: 50
      },
      {
        name: "Phase 3: Triple Antidote Administration",
        description: "Time for antidotes! Administer Atropine + 2-PAM + Diazepam correctly!",
        questionIds: ["chem_q05", "chem_q12", "chem_q16", "chem_q23"],
        hpThreshold: 0.25,
        attackMessage: "Seizures have started! The diaphragm is contracting! Administer all 3 antidotes in the correct order and dosage!",
        damageIfWrong: 60
      },
      {
        name: "Phase 4: Chain of Chemical Survival Final Showdown",
        description: "Execute all 4 links of the Chain of Chemical Survival perfectly! Defeat Sarin forever!",
        questionIds: ["chem_q01", "chem_q07", "chem_q13", "chem_q17"],
        hpThreshold: 0.0,
        attackMessage: "Sarin's final offensive! The entire system is about to collapse! Execute the complete Chain of Chemical Survival perfectly!",
        damageIfWrong: 70
      }
    ],
    description: "On March 20, 1995, sarin was simultaneously released on 5 Tokyo subway lines. 13 killed, thousands injured. It was Japan's worst terrorist attack, carried out by the Aum Shinrikyo cult. In 2017, VX was used to assassinate Kim Jong-nam of North Korea. Nerve agents inhibit AChE, accumulate ACh, and permanently contract the diaphragm, leading to asphyxiation. Only the Chain of Chemical Survival (PPE → Decontamination → Antidote → BLS) can defeat this overlord!",
    loreQuote: "\"Hospitals had to learn about the incident from TV news.\" — FEMA, 1995 Tokyo Lesson",
    reward: {
      xp: 5000,
      coins: 2000,
      title: "Chemical Disaster Response Expert",
      titleEn: "Chemical Disaster Response Expert",
      badge: "💊",
      unlockedContent: ["chem_scenario_advanced", "chem_skill_master"]
    },
    weaknesses: ["atropine", "pralidoxime", "decontamination", "PPE"],
    bgColor: "#0d1a00",
    accentColor: "#39ff14",
    bossArt: "☠️🧪🌫️",
    soundtrack: "tense_chemical"
  },

  {
    id: "boss_biological",
    name: "Anthrax the Spore Demon",
    nameEn: "Anthrax the Spore Demon",
    emoji: "🦠",
    hp: 500,
    maxHp: 500,
    category: "biological",
    phases: [
      {
        name: "Phase 1: Pathogen Identification and Classification",
        description: "Anthrax is transforming! Accurately identify the threat using the CDC A/B/C classification system!",
        questionIds: ["bio_q02", "bio_q03", "bio_q18", "bio_q28"],
        hpThreshold: 0.75,
        attackMessage: "An envelope containing white powder has been found! Is 2001 Amerithrax repeating?! Classify the pathogen immediately!",
        damageIfWrong: 40
      },
      {
        name: "Phase 2: Isolation and Epidemiological Investigation",
        description: "Anthrax is spreading! Block the transmission route and activate the POD!",
        questionIds: ["bio_q01", "bio_q17", "bio_q23", "bio_q27"],
        hpThreshold: 0.50,
        attackMessage: "More infected patients are flooding the emergency room! Isolation and epidemiological investigation have begun! Activate the POD system!",
        damageIfWrong: 50
      },
      {
        name: "Phase 3: Antibiotic Treatment and Prophylaxis",
        description: "The 60-day antibiotic battle! Determine the appropriate drug and duration of administration!",
        questionIds: ["bio_q09", "bio_q14", "bio_q24", "bio_q30"],
        hpThreshold: 0.25,
        attackMessage: "Inhalation anthrax! The most lethal form! Counter-attack with the correct dosage and duration of Cipro and Doxy!",
        damageIfWrong: 60
      },
      {
        name: "Phase 4: All-Out Bioterrorism Response",
        description: "Anthrax's final spore assault! Mobilize all knowledge of biological disaster response!",
        questionIds: ["bio_q06", "bio_q07", "bio_q08", "bio_q22"],
        hpThreshold: 0.0,
        attackMessage: "Final offensive with botulinum, plague, and smallpox! Final battle with all knowledge of the CBRNE biological section!",
        damageIfWrong: 70
      }
    ],
    description: "On September 18, 2001, letters containing anthrax were sent across the United States. 5 killed, 22 infected, $1 billion in damages. This event, called Amerithrax, showed the world the reality of bioterrorism. Spores survive in soil for decades. 1 gram of botulinum can kill 1.5 million people. Immunity to smallpox has been absent for 40 years. Bioterrorism is a low-probability, high-impact event — do not confuse probability with possibility!",
    loreQuote: "\"Bioterrorism victims will first be encountered at the Emergency Department (ED). Immediately isolate and treat clinically.\" — CIREcourse",
    reward: {
      xp: 5000,
      coins: 2000,
      title: "Biological Disaster Response Expert",
      titleEn: "Biological Disaster Response Expert",
      badge: "🧫",
      unlockedContent: ["bio_scenario_advanced", "bio_skill_master"]
    },
    weaknesses: ["ciprofloxacin", "doxycycline", "isolation", "POD"],
    bgColor: "#1a0a00",
    accentColor: "#ff6600",
    bossArt: "🦠📮☣️",
    soundtrack: "tense_biological"
  },

  {
    id: "boss_radiological",
    name: "Dirty Bomb the Radiation Contaminator",
    nameEn: "Dirty Bomb the Radiation Contaminator",
    emoji: "☢️",
    hp: 500,
    maxHp: 500,
    category: "radiological",
    phases: [
      {
        name: "Phase 1: Radiation Recognition and Zone Establishment",
        description: "The dirty bomb has detonated! 0–10 minute golden time — establish radiation zones immediately!",
        questionIds: ["rad_q01", "rad_q09", "rad_q10", "rad_q17"],
        hpThreshold: 0.75,
        attackMessage: "Explosion in the city center! Radiation detector alarming! Establish 500-meter zone immediately! Activate the 100-minute RDD response timeline!",
        damageIfWrong: 40
      },
      {
        name: "Phase 2: Acute Radiation Syndrome (ARS) Assessment",
        description: "The dirty bomb is spreading ARS! Assess the exposure dose and diagnose the syndrome stage!",
        questionIds: ["rad_q04", "rad_q05", "rad_q06", "rad_q12"],
        hpThreshold: 0.50,
        attackMessage: "Victims have started vomiting! Do not fall into the trap of the latent period! Accurately assess the 4 stages of ARS!",
        damageIfWrong: 50
      },
      {
        name: "Phase 3: Radiation-Specific Treatment Administration",
        description: "Match the radiation antidotes correctly! Potassium iodide? Prussian blue? Getting it wrong is fatal!",
        questionIds: ["rad_q07", "rad_q08", "rad_q11", "rad_q16"],
        hpThreshold: 0.25,
        attackMessage: "Radioactive internal contamination! External contamination! Bone marrow destruction! Choose the correct treatment!",
        damageIfWrong: 60
      },
      {
        name: "Phase 4: All-Out Radiation Response",
        description: "Dirty bomb's final contamination wave! Seize final victory with all knowledge of radiological disaster!",
        questionIds: ["rad_q02", "rad_q03", "rad_q14", "rad_q20"],
        hpThreshold: 0.0,
        attackMessage: "Gy? rem? rad? Sv? Unit confusion incoming! PRISM decontamination! CBC monitoring! Complete mastery of radiological disaster!",
        damageIfWrong: 70
      }
    ],
    description: "Dirty Bomb = radioactive material + conventional explosives. Not a nuclear weapon, but disperses radioactive contamination widely. Acute Radiation Syndrome (ARS) was documented after the Chernobyl explosion and Hiroshima/Nagasaki atomic bombs. Higher doses mean vomiting starts sooner: within 3 minutes at >3500 rem. The latent period trap — at the moment the patient looks healthy, the bone marrow is being destroyed inside!",
    loreQuote: "\"3 principles of radiation protection: Dose/time, distance, shielding. ALARA principle — As Low As Reasonably Achievable.\" — NCRP",
    reward: {
      xp: 5000,
      coins: 2000,
      title: "Radiological Disaster Response Expert",
      titleEn: "Radiological Disaster Response Expert",
      badge: "⚛️",
      unlockedContent: ["rad_scenario_advanced", "rad_skill_master"]
    },
    weaknesses: ["potassiumIodide", "prussianBlue", "DTPA", "CBCmonitoring"],
    bgColor: "#001a00",
    accentColor: "#00ff88",
    bossArt: "☢️💣🌊",
    soundtrack: "tense_radiological"
  },

  {
    id: "boss_nuclear",
    name: "Atomic the Nuclear Storm Lord",
    nameEn: "Atomic the Nuclear Storm Lord",
    emoji: "💥",
    hp: 500,
    maxHp: 500,
    category: "nuclear",
    phases: [
      {
        name: "Phase 1: Immediate Nuclear Explosion Survival",
        description: "Atomic has detonated! First 10 minutes — decide your immediate survival actions!",
        questionIds: ["nuc_q01", "nuc_q04", "nuc_q05", "nuc_q06"],
        hpThreshold: 0.75,
        attackMessage: "Nuclear explosion flash! EMP has cut all communications! Immediately implement Get Inside, Stay Inside, Stay Tuned!",
        damageIfWrong: 40
      },
      {
        name: "Phase 2: Radiation Zone Classification and Survivor Assessment",
        description: "Atomic's zone-based attack! Assess the Red/Yellow/Green zones and ARS dose!",
        questionIds: ["nuc_q07", "nuc_q08", "nuc_q09", "nuc_q19"],
        hpThreshold: 0.50,
        attackMessage: "Survivors are approaching! Red Zone, Yellow Zone, Green Zone — where are they from?! Remember the NCRP decision dose!",
        damageIfWrong: 50
      },
      {
        name: "Phase 3: Hiroshima Data and RTR Triage",
        description: "History is repeating! Counter-attack with Hiroshima/Nagasaki data and the RTR system!",
        questionIds: ["nuc_q10", "nuc_q11", "nuc_q16", "nuc_q24"],
        hpThreshold: 0.25,
        attackMessage: "Flash burns account for 83–91%! Establish RTR sites! Correctly position Assembly Centers, Medical Centers, and Evacuation Centers!",
        damageIfWrong: 60
      },
      {
        name: "Phase 4: All-Out Nuclear Disaster Showdown",
        description: "Atomic's final nuclear offensive! Achieve final victory with the ALARA principle and 7-10 rule!",
        questionIds: ["nuc_q12", "nuc_q13", "nuc_q18", "nuc_q23"],
        hpThreshold: 0.0,
        attackMessage: "ALARA! 7-10 rule! Hiroshima 15kT, Nagasaki 21kT! Final battle for complete nuclear disaster mastery!",
        damageIfWrong: 70
      }
    ],
    description: "Hiroshima (~15 kT), Nagasaki (~21 kT). FEMA planning standard: 10 kT surface burst. Fissioning just 20 ounces of uranium produces a 10 kT explosion. Red Zone: >8 Gy (lethal), Yellow Zone: 1–8 Gy, Green Zone: <1 Gy. Top priority protective action: 'Get Inside, Stay Inside, Stay Tuned' — 12–24 hours. By the 7-10 rule, fallout decreases rapidly over time. Protect responders with the ALARA principle!",
    loreQuote: "\"Sheltering in a building is more effective than immediate evacuation during the first few hours after a nuclear explosion.\" — FEMA 2023",
    reward: {
      xp: 5000,
      coins: 2000,
      title: "Nuclear Disaster Response Expert",
      titleEn: "Nuclear Disaster Response Expert",
      badge: "☢️",
      unlockedContent: ["nuc_scenario_advanced", "nuc_skill_master"]
    },
    weaknesses: ["shelterInPlace", "ALARA", "RTRsystem", "dosimetery"],
    bgColor: "#1a1000",
    accentColor: "#ffcc00",
    bossArt: "💥🌑⚡",
    soundtrack: "tense_nuclear"
  },

  {
    id: "boss_explosive",
    name: "Blast the Terror Storm",
    nameEn: "Blast the Terror Storm",
    emoji: "💣",
    hp: 520,
    maxHp: 520,
    category: "explosive",
    phases: [
      {
        name: "Phase 1: Blast Injury Mechanism Identification",
        description: "Blast has attacked the concert hall! Immediately identify the 5 blast injury mechanisms!",
        questionIds: ["exp_q01", "exp_q02", "exp_q18", "exp_q19"],
        hpThreshold: 0.75,
        attackMessage: "Paris Bataclan is being reenacted! Blast wave, fragments, bodies thrown, burns... Accurately classify the injury mechanisms!",
        damageIfWrong: 40
      },
      {
        name: "Phase 2: Multi-Site Terrorism Command",
        description: "Blast launches simultaneous multi-site attack! Establish command structure using the CSCATTT framework!",
        questionIds: ["exp_q08", "exp_q09", "exp_q15", "exp_q21"],
        hpThreshold: 0.50,
        attackMessage: "Secondary attack (double-tap) alert! Responders have been targeted! Immediately apply CSCATTT and safety principles!",
        damageIfWrong: 50
      },
      {
        name: "Phase 3: Tactical Medical Response",
        description: "Blast is targeting EMS! Execute TECC and S-C-ABE perfectly!",
        questionIds: ["exp_q06", "exp_q07", "exp_q10", "exp_q14"],
        hpThreshold: 0.25,
        attackMessage: "EMS is surrounded! TECC 3 zones — Direct Threat, Indirect Threat, Evacuation Care! Execute the S-C-ABE protocol!",
        damageIfWrong: 60
      },
      {
        name: "Phase 4: CTM Final Integrated Response",
        description: "Blast's final area-wide attack! Mobilize all CTM knowledge!",
        questionIds: ["exp_q05", "exp_q11", "exp_q12", "exp_q20"],
        hpThreshold: 0.0,
        attackMessage: "THREAT! 3Echo! TST! ATLS! Final battle with complete CTM knowledge!",
        damageIfWrong: 70
      }
    ],
    description: "November 13, 2015 Paris. 89 killed at Bataclan alone. More than 130 total killed. July 14, 2016 Nice. Truck drove into Bastille Day crowds. GTD 1970–2020: Explosives = 51.43%, 174,995 incidents, 354,382 killed. Vehicle attacks = 176.44 casualties per incident (highest). Chemical = 45 per incident. EMS is becoming a soft target for terrorism. CTM (Counter-Terrorism Medicine) must play a leading role!",
    loreQuote: "\"CTM does not merely provide medical support — it plays a leading role in terrorism response.\" — CIREcourse CTM Take-Home Message",
    reward: {
      xp: 5200,
      coins: 2100,
      title: "Counter-Terrorism Medicine Specialist",
      titleEn: "Counter-Terrorism Medicine Specialist",
      badge: "🛡️",
      unlockedContent: ["exp_scenario_advanced", "exp_skill_master", "cbrne_master_badge"]
    },
    weaknesses: ["CSCATTT", "TECC", "ATLS", "responderSafety"],
    bgColor: "#1a0000",
    accentColor: "#ff3333",
    bossArt: "💣🔥🚨",
    soundtrack: "tense_explosive"
  }
];

// ============================================
// SECTION 3: RPG SCENARIOS
// ============================================

const CBRNE_ADV_SCENARIOS = [
  {
    id: "scenario_chemical_subway",
    title: "Seoul Subway Line 2 Chemical Spill Incident",
    category: "chemical",
    difficulty: "hard",
    estimatedTime: "20 minutes",
    totalXP: 1800,
    description: "8 PM rush hour, Gangnam Station on Seoul Subway Line 2. A radio call comes in: 'Passengers are collapsing. Strange smell...' You are the incident commander and must make immediate decisions. Is 1995 Tokyo being repeated in Seoul?",
    setting: "Gangnam Station, Seoul Subway Line 2, rush hour — estimated 50+ victims",
    characterRole: "Incident Commander",
    backgroundImage: "subway_chemical",
    steps: [
      {
        id: "step_chem_1",
        narrative: "A radio call comes from the Gangnam Station platform: 'Passengers are tearing up, running noses, and coughing. Some have collapsed and extreme pupil constriction has been observed.' You are the first responder on scene. PPE is in the vehicle.",
        question: "What should you do first?",
        options: [
          {
            text: "Enter the scene immediately without PPE and rescue the collapsed patients",
            correct: false,
            feedback: "Fatal error! Entering without PPE makes you a secondary victim. Chemical scene rule: 'safety first'. The first link of the Chain of Chemical Survival is PPE.",
            xpLost: 50
          },
          {
            text: "Block scene access, establish the 3-zone system (hot/warm/cold), then don PPE",
            correct: true,
            feedback: "Correct! Chain of Chemical Survival link 1: PPE → link 2: Decontamination → link 3: Antidote → link 4: BLS. No medical action is possible without securing safety.",
            xpGained: 300
          },
          {
            text: "Immediately retrieve the antidote (Atropine) and administer it to all patients",
            correct: false,
            feedback: "To administer antidote to patients who have not yet been decontaminated, PPE is required first. Also, indiscriminate Atropine administration carries overdose risk.",
            xpLost: 30
          },
          {
            text: "Call 119 and wait at a distance",
            correct: false,
            feedback: "Calling for help is necessary, but as incident commander you must immediately establish zones and command. Passive waiting increases casualties.",
            xpLost: 20
          }
        ],
        xp: 300,
        timeLimit: 30
      },
      {
        id: "step_chem_2",
        narrative: "PPE Level B is donned. One patient is having seizures. Miosis, excessive salivation, muscle fasciculations, and urination are confirmed. Classic SLUDGEM syndrome is present.",
        question: "What is the primary treatment needed for this patient?",
        options: [
          {
            text: "Immediately begin CPR",
            correct: false,
            feedback: "The patient has a pulse (bradycardic but present). In nerve agent poisoning, antidote takes priority. CPR alone cannot resolve AChE inhibition.",
            xpLost: 40
          },
          {
            text: "After decontamination, administer Atropine + Pralidoxime (2-PAM); add Diazepam if seizures persist",
            correct: true,
            feedback: "Perfect! Nerve agent antidote triple: Atropine (block muscarinic effects) + 2-PAM (reactivate AChE, must be given before 'aging') + Diazepam (seizure control). Must be administered after decontamination or with PPE.",
            xpGained: 350
          },
          {
            text: "Administer oxygen and then Naloxone",
            correct: false,
            feedback: "Naloxone is an opioid antidote. Nerve agent (organophosphate) poisoning requires Atropine + 2-PAM. Toxidrome identification is critical.",
            xpLost: 50
          },
          {
            text: "Rapidly infuse IV fluids and observe",
            correct: false,
            feedback: "IV fluids alone cannot resolve AChE inhibition in nerve agent poisoning. Antidote administration is immediately required.",
            xpLost: 30
          }
        ],
        xp: 350,
        timeLimit: 45
      },
      {
        id: "step_chem_3",
        narrative: "You are establishing a decontamination zone but water supply is delayed. A report comes in that water won't be available for 30 minutes. Patients continue to show symptoms.",
        question: "What is the decontamination principle when water supply is delayed?",
        options: [
          {
            text: "Wait 30 minutes until water arrives, then begin wet decontamination",
            correct: false,
            feedback: "Dangerous! Decontamination effectiveness for wet contaminants decreases exponentially with time delay. A 30-minute delay can cause irreversible damage.",
            xpLost: 60
          },
          {
            text: "Immediately begin dry decontamination (undress + remove visible particulates), then switch to wet decontamination when water arrives",
            correct: true,
            feedback: "Correct! PRISM: Undressing alone removes 80–90% of external contamination. Dry decontamination first, then after water arrives: ladder pipe 15 sec → secondary decontamination 90 sec.",
            xpGained: 350
          },
          {
            text: "Leave contaminated clothing in place and administer antidote first",
            correct: false,
            feedback: "Contaminated clothing causes continued exposure. Decontamination comes first. Chain of Chemical Survival order: PPE → Decontamination → Antidote → BLS.",
            xpLost: 40
          },
          {
            text: "Decontaminate directly in the hot zone using antibiotic spray without water",
            correct: false,
            feedback: "Antibiotics are not chemical decontamination agents. Removing clothing (undressing) is the most immediate and effective dry decontamination.",
            xpLost: 30
          }
        ],
        xp: 350,
        timeLimit: 35
      },
      {
        id: "step_chem_4",
        narrative: "Decontamination has begun. You contact a hospital and they say 'We're watching the news. We can't get accurate incident information.' You recall the nightmare of 1995 Tokyo.",
        question: "How do you respond to this situation where the hospital is getting information from TV news?",
        options: [
          {
            text: "The media will inform them quickly, so there's no need to contact the hospital directly from the scene",
            correct: false,
            feedback: "This is the lesson from 1995 Tokyo! Hospitals must not rely on TV news; they must receive incident information through direct medical communication channels.",
            xpLost: 50
          },
          {
            text: "Immediately transmit incident type, expected patient count, and toxidrome information to the hospital through direct medical communication channels",
            correct: true,
            feedback: "The biggest lesson from 1995 Tokyo: hospitals had to get information from TV news. Direct communication is key. Should also include activation of the Hospital Incident Command System (HICS).",
            xpGained: 400
          },
          {
            text: "Use social media to share the situation",
            correct: false,
            feedback: "Social media is not an official medical communication channel. It risks spreading confusion and misinformation.",
            xpLost: 30
          },
          {
            text: "Handle hospital response later and focus on on-scene care",
            correct: false,
            feedback: "Early hospital notification and HICS activation are the top priority in the 12-step chemical disaster hospital response. Must be done concurrently with on-scene care.",
            xpLost: 40
          }
        ],
        xp: 400,
        timeLimit: 30
      },
      {
        id: "step_chem_5",
        narrative: "Triage has begun. There are 3 groups: ambulatory patients (no toxidrome), collapsed patients (miosis + fasciculations + respiratory distress), and unresponsive patients (not breathing). The pre-decontamination chemical triage algorithm must be applied.",
        question: "Which method should be used as the primary triage at a chemical disaster scene?",
        options: [
          {
            text: "Use START triage only",
            correct: false,
            feedback: "The primary triage at a chemical disaster scene is MASS (Move, Assess, Sort, Send). START is used together with the post-decontamination triage algorithm.",
            xpLost: 30
          },
          {
            text: "Use MASS triage as primary, then apply the pre-decontamination chemical triage algorithm",
            correct: true,
            feedback: "Correct! Chemical disaster triage sequence: Primary = MASS → Secondary = pre-decontamination chemical triage algorithm (KEY: START + Antidote). Also confirm toxidrome criteria: IGSA syndrome, GI symptoms, CNS symptoms.",
            xpGained: 400
          },
          {
            text: "Use TST (Ten Second Triage)",
            correct: false,
            feedback: "TST is for UK NHS explosives/general trauma MCI. In chemical disasters, MASS + chemical triage algorithm with added toxidrome assessment takes priority.",
            xpLost: 20
          },
          {
            text: "Classify all patients as RED and immediately administer antidote",
            correct: false,
            feedback: "Classifying everyone RED without triage makes resource allocation impossible. Ambulatory patients (no toxidrome) are GREEN; those with toxidrome are prioritized.",
            xpLost: 30
          }
        ],
        xp: 400,
        timeLimit: 40,
        isFinalStep: true,
        completionMessage: "Chemical disaster response completed successfully! You executed all 4 links of the Chain of Chemical Survival perfectly. You did not repeat the lessons of 1995 Tokyo!"
      }
    ]
  },

  {
    id: "scenario_biological_hospital",
    title: "Cluster Respiratory Illness at Emergency Department — Suspected Bioterrorism",
    category: "biological",
    difficulty: "hard",
    estimatedTime: "20 minutes",
    totalXP: 1800,
    description: "Over 48 hours, 20 patients with fever, cough, and hemoptysis have presented to the Emergency Department (ED). All attended the same national security conference. Gram stain shows 'safety pin'-shaped organisms. Is this natural infection, or bioterrorism?",
    setting: "University hospital Emergency Department — 20 patients, possible healthcare worker exposure",
    characterRole: "Emergency Medicine Resident (on-scene physician)",
    backgroundImage: "hospital_bio",
    steps: [
      {
        id: "step_bio_1",
        narrative: "Over 48 hours, 20 patients have presented to the ED. All attended the same conference. Fever, cough, hemoptysis. Gram-negative bacilli, 'safety pin' morphology. Common link: national security conference. You must first identify the suspected causative organism.",
        question: "Which organism shows a 'safety pin' appearance on Gram stain?",
        options: [
          {
            text: "Anthrax (Bacillus anthracis)",
            correct: false,
            feedback: "Anthrax is a Gram-positive spore-forming rod. It is not Gram-negative and does not have a 'safety pin' morphology.",
            xpLost: 40
          },
          {
            text: "Yersinia pestis (plague)",
            correct: true,
            feedback: "Correct! Yersinia pestis is a Gram-negative bacillus that appears as a 'safety pin' shape due to bipolar staining. Pneumonic plague can spread person-to-person!",
            xpGained: 350
          },
          {
            text: "Francisella tularensis (tularemia)",
            correct: false,
            feedback: "Tularemia is also a Gram-negative bacillus, but the 'safety pin' morphology is not characteristic. The safety pin appearance is characteristic of Y. pestis (plague).",
            xpLost: 30
          },
          {
            text: "Clostridium botulinum",
            correct: false,
            feedback: "Botulinum is a Gram-positive anaerobic rod. It is neither Gram-negative nor a bacillus with bipolar staining.",
            xpLost: 40
          }
        ],
        xp: 350,
        timeLimit: 30
      },
      {
        id: "step_bio_2",
        narrative: "Yersinia pestis has been confirmed. Pneumonic plague transmitted by respiratory droplets is suspected. Some of the 20 patients are already coughing near healthcare workers. Risk of healthcare worker exposure exists.",
        question: "What isolation measures are required for patients with pneumonic plague?",
        options: [
          {
            text: "Isolate in a standard room for 24 hours, then begin antibiotics",
            correct: false,
            feedback: "Pneumonic plague requires a minimum of 72-hour isolation. 24 hours is insufficient. N95 mask is also mandatory.",
            xpLost: 50
          },
          {
            text: "N95 mask + isolation room for at least 72 hours",
            correct: true,
            feedback: "Correct! Pneumonic plague can spread person-to-person via respiratory droplets → N95 mask mandatory + isolation room minimum 72 hours. This is why pneumonic plague is a core risk factor in CDC Category A.",
            xpGained: 400
          },
          {
            text: "Use a surgical mask only and treat in the same ward",
            correct: false,
            feedback: "Surgical masks are insufficient to prevent airborne transmission. N95 masks and an isolation room are mandatory. Healthcare workers could become super-spreaders.",
            xpLost: 60
          },
          {
            text: "Treat without PPE and provide antibiotic prophylaxis only",
            correct: false,
            feedback: "Healthcare workers exposed without PPE become additional sources of infection. Isolation, PPE, and antibiotic treatment must all be implemented simultaneously.",
            xpLost: 40
          }
        ],
        xp: 400,
        timeLimit: 35
      },
      {
        id: "step_bio_3",
        narrative: "Isolation has begun. You must select treatment antibiotics. Pneumonic plague can have 100% mortality without treatment.",
        question: "What is the first-line antibiotic treatment for pneumonic plague?",
        options: [
          {
            text: "Ciprofloxacin 500mg oral, 7 days",
            correct: false,
            feedback: "Oral Cipro is for mild cases or prophylaxis. Severe pneumonic plague requires injectable Streptomycin or Gentamicin.",
            xpLost: 30
          },
          {
            text: "Streptomycin 15mg/kg BID IM for 10 days OR Gentamicin 5mg/kg/day IV for 7–10 days",
            correct: true,
            feedback: "Correct! First-line plague treatment: Streptomycin 15mg/kg BID IM 10 days OR Gentamicin 5mg/kg/day IV 7–10 days. Alternatives: Cipro or Doxy. Post-exposure prophylaxis: Cipro 500mg BID or Doxy 100mg BID for 7 days.",
            xpGained: 350
          },
          {
            text: "Amoxicillin-Clavulanate oral, 14 days",
            correct: false,
            feedback: "Amoxicillin-Clavulanate is not a first-line choice for plague. Streptomycin, Gentamicin, Cipro, and Doxycycline are used.",
            xpLost: 40
          },
          {
            text: "Vancomycin IV, 14 days",
            correct: false,
            feedback: "Vancomycin targets Gram-positive organisms. It is not effective against plague (Gram-negative).",
            xpLost: 50
          }
        ],
        xp: 350,
        timeLimit: 40
      },
      {
        id: "step_bio_4",
        narrative: "Treatment has begun. Post-exposure prophylaxis is also needed for 12 exposed healthcare workers. Public health authorities must be notified, and further spread must be prevented.",
        question: "What is the post-exposure prophylaxis (PEP) duration for healthcare workers exposed to pneumonic plague?",
        options: [
          {
            text: "3 days",
            correct: false,
            feedback: "3 days is insufficient for plague PEP. Plague PEP is 7 days. Be careful not to confuse this with anthrax PEP (60 days).",
            xpLost: 40
          },
          {
            text: "7 days",
            correct: true,
            feedback: "Plague PEP = 7 days (Cipro 500mg BID or Doxy 100mg BID). Comparison: Anthrax = 60 days, Tularemia = 14 days. Remember the exact PEP duration for each pathogen!",
            xpGained: 400
          },
          {
            text: "14 days",
            correct: false,
            feedback: "14 days is the PEP duration for tularemia. Plague PEP is 7 days.",
            xpLost: 30
          },
          {
            text: "60 days",
            correct: false,
            feedback: "60 days is the PEP/treatment duration for anthrax. Plague PEP is 7 days.",
            xpLost: 40
          }
        ],
        xp: 400,
        timeLimit: 30
      },
      {
        id: "step_bio_5",
        narrative: "All measures have been taken. Finally, the possibility of bioterrorism must be considered. Notification to public health authorities and contact with law enforcement are needed. Should Code Blue be declared?",
        question: "What is the top priority principle for ED action when bioterrorism is suspected?",
        options: [
          {
            text: "Wait for definitive evidence before disclosing",
            correct: false,
            feedback: "Dangerous delay! In a bioterrorism event, speed of initial response determines the scale of harm. Report immediately at the stage of suspicion.",
            xpLost: 60
          },
          {
            text: "Immediately isolate and treat clinically while simultaneously reporting to public health authorities and law enforcement",
            correct: true,
            feedback: "Core of biological disaster response: 'isolate → treat clinically' while simultaneously reporting immediately to public health authorities and law enforcement. Low-probability, high-impact event — do not confuse probability with possibility!",
            xpGained: 400
          },
          {
            text: "Handle internally within the hospital without alerting anyone outside",
            correct: false,
            feedback: "Bioterrorism cannot be managed by a single hospital alone. Notifying public health authorities is a legal obligation and essential for preventing further spread.",
            xpLost: 50
          },
          {
            text: "Notify the media first so the public can take precautions",
            correct: false,
            feedback: "Media disclosure can cause panic and chaos. Systematic response through official channels (public health authorities) comes first.",
            xpLost: 40
          }
        ],
        xp: 400,
        timeLimit: 30,
        isFinalStep: true,
        completionMessage: "Biological disaster response successful! You identified the plague bacterium, isolated patients, treated them, and notified authorities. You applied the lessons of Amerithrax 2001!"
      }
    ]
  },

  {
    id: "scenario_radiological_rdd",
    title: "Urban Radiological Dispersal Device (RDD) Explosion Response",
    category: "radiological",
    difficulty: "hard",
    estimatedTime: "25 minutes",
    totalXP: 2000,
    description: "9 AM. An explosion has occurred at Gwanghwamun Square in downtown Seoul. Radiation detectors are alarming. A 'dirty bomb' combining explosives and radioactive material is suspected. The 100-minute timeline has begun.",
    setting: "Gwanghwamun Square, Seoul — thousands of citizens, radiation detector alarms",
    characterRole: "Radiation Safety Officer / Incident Commander",
    backgroundImage: "city_rdd",
    steps: [
      {
        id: "step_rad_1",
        narrative: "Immediately after the explosion, 0–5 minutes. Radiation detectors are alarming. Casualties are visible at the scene. The urge to rescue is strong. But remember what the first step of the 100-minute timeline is.",
        question: "At 0–5 minutes after the explosion, what is the first action in RDD response?",
        options: [
          {
            text: "Immediately enter the scene and rescue casualties",
            correct: false,
            feedback: "The 0–5 minute phase is 'RECOGNIZE' — recognizing the presence of radiation at the explosion scene. Entering without radiation monitoring will contaminate responders.",
            xpLost: 50
          },
          {
            text: "Recognize the presence of radiation and confirm the initial hazard zone",
            correct: true,
            feedback: "Correct! 0–5 min: RECOGNIZE — recognize the presence of radiation at the explosion scene. 5–10 min: INFORM — notify responders and public of initial hot zone and shelter-in-place, notify authorities. The order must be followed.",
            xpGained: 300
          },
          {
            text: "Immediately declare a 500-meter evacuation zone and evacuate residents",
            correct: false,
            feedback: "Declaring an evacuation zone is correct, but the priority action at 0–5 minutes is 'radiation recognition.' Evacuation orders come in the INFORM phase (5–10 min).",
            xpLost: 20
          },
          {
            text: "Immediately contact the media to report the incident",
            correct: false,
            feedback: "Official authority notification comes first. Media announcements must come through official channels after systematic control. Misinformation causes panic.",
            xpLost: 30
          }
        ],
        xp: 300,
        timeLimit: 25
      },
      {
        id: "step_rad_2",
        narrative: "Radiation has been confirmed. You are in the 5–10 minute window. The public must be informed and initial protective measures taken. The first Public Information Announcement (PIA #1) is ready.",
        question: "What is the key message of PIA #1 (first Public Information Announcement)?",
        options: [
          {
            text: "Providing scientific explanation of radiation hazards and long-term health effect information",
            correct: false,
            feedback: "PIA #1 is not for scientific explanation. Immediate action instructions are the core.",
            xpLost: 30
          },
          {
            text: "Immediate shelter-in-place instructions",
            correct: true,
            feedback: "PIA #1: Pre-approved public message including immediate shelter-in-place instructions. PIA #2: Radiation hazard information + re-emphasize shelter-in-place. PIA #3: Press conference (response, evacuation, self-decontamination information). Order: shelter-in-place first, information later.",
            xpGained: 350
          },
          {
            text: "Immediate field evacuation order",
            correct: false,
            feedback: "Initially, shelter-in-place takes priority over field evacuation. Rapid evacuation before radiation direction is confirmed can cause greater exposure.",
            xpLost: 20
          },
          {
            text: "Provide treatment information after confirming the type of radioactive material",
            correct: false,
            feedback: "Treatment information is not part of PIA #1. Immediate protective action instructions take priority.",
            xpLost: 30
          }
        ],
        xp: 350,
        timeLimit: 30
      },
      {
        id: "step_rad_3",
        narrative: "The initial shelter-in-place zone must be established. What is the initial shelter zone radius after an RDD explosion?",
        question: "What is the initial shelter-in-place zone radius immediately after an RDD explosion?",
        options: [
          {
            text: "100 meters",
            correct: false,
            feedback: "100 meters is too narrow. Given the dispersal radius of radioactive material from an RDD, a minimum of 500 meters is required.",
            xpLost: 50
          },
          {
            text: "500 meters",
            correct: true,
            feedback: "Correct! Initial shelter-in-place zone: 500 meters in all directions from the detonation point. Once contamination direction confirmed → expand to 2 km in the confirmed direction.",
            xpGained: 400
          },
          {
            text: "1 kilometer",
            correct: false,
            feedback: "1 km is not the initial standard. The correct sequence is: initial 500 m, then expand to 2 km after direction is confirmed.",
            xpLost: 30
          },
          {
            text: "5 kilometers",
            correct: false,
            feedback: "5 km is excessively wide. It wastes resources and creates unnecessary confusion. Initial 500 m, then 2 km after direction is confirmed.",
            xpLost: 30
          }
        ],
        xp: 400,
        timeLimit: 25
      },
      {
        id: "step_rad_4",
        narrative: "A patient has arrived. Vomiting started 20 minutes after the explosion. You must estimate the radiation exposure dose. Assess the ARS stage and begin treatment.",
        question: "What is the estimated radiation exposure dose for a patient who began vomiting within 20 minutes of the explosion?",
        options: [
          {
            text: "100–200 rem (no nausea, or onset 3–6 hours later)",
            correct: false,
            feedback: "100–200 rem has a vomiting incidence of 5–50% with onset 3–6 hours later. Vomiting within 20 minutes indicates a much higher dose.",
            xpLost: 40
          },
          {
            text: "600–1000 rem (vomiting 15–30 min later, 100%)",
            correct: true,
            feedback: "Correct! 600–1000 rem: vomiting 15–30 min later, 100% incidence. Prognosis: poor (80–90% mortality). Treatment: hematopoietic cytokines + consider bone marrow transplantation. >3500 rem: vomiting within 3 minutes, 100% mortality.",
            xpGained: 400
          },
          {
            text: "200–600 rem (vomiting 2–3 hours later, 50–100%)",
            correct: false,
            feedback: "200–600 rem: vomiting 2–3 hours later. Vomiting within 20 minutes suggests 600 rem or more.",
            xpLost: 30
          },
          {
            text: ">3500 rem (vomiting within 3 min, CNS syndrome, 100% mortality)",
            correct: false,
            feedback: "At >3500 rem, vomiting and seizures would have appeared within 3 minutes. Vomiting at 20 minutes falls in the 600–1000 rem range.",
            xpLost: 20
          }
        ],
        xp: 400,
        timeLimit: 40
      },
      {
        id: "step_rad_5",
        narrative: "Treatment of ARS patients has begun. It has been confirmed the RDD contained radioactive cesium (Cs-137). What treatment should be administered to patients with suspected internal contamination?",
        question: "What treatment is used for internal contamination with radioactive cesium (Cs-137)?",
        options: [
          {
            text: "Potassium iodide (KI)",
            correct: false,
            feedback: "KI is used for radioactive iodine (I-131) exposure. It is not effective for cesium contamination.",
            xpLost: 50
          },
          {
            text: "Prussian blue",
            correct: true,
            feedback: "Correct! Prussian blue = treatment for internal cesium (Cs) or thallium (Tl) contamination. KI = radioactive iodine. DTPA = other internal contamination. Treatment must be precisely matched to the radioactive material.",
            xpGained: 450
          },
          {
            text: "DTPA(Diethylenetriamine pentaacetate)",
            correct: false,
            feedback: "DTPA is used for internal contamination with certain radionuclides, but the first-line choice for cesium is Prussian blue.",
            xpLost: 20
          },
          {
            text: "Stem cell transplantation",
            correct: false,
            feedback: "Stem cell transplantation is supportive care after severe bone marrow damage. The first-line specific treatment for internal cesium contamination is Prussian blue.",
            xpLost: 30
          }
        ],
        xp: 450,
        timeLimit: 35,
        isFinalStep: true,
        completionMessage: "Radiological disaster response successful! You adhered to the 100-minute timeline, accurately assessed ARS, and administered Prussian blue for cesium contamination!"
      }
    ]
  },

  {
    id: "scenario_nuclear_detonation",
    title: "Nuclear Detonation Response — 10 kT Urban Nuclear Terrorism",
    category: "nuclear",
    difficulty: "boss",
    estimatedTime: "25 minutes",
    totalXP: 2200,
    description: "The worst-case scenario has become reality. A 10 kT nuclear device has detonated in a city center. EMP has cut communications. You are the commander of the surviving emergency response team. Immediate decisions must be made according to FEMA 2023 guidance.",
    setting: "Downtown 10 kT nuclear explosion — EMP power grid disruption, communication cutoff, thousands of casualties",
    characterRole: "Emergency Response Team Commander",
    backgroundImage: "nuclear_blast",
    steps: [
      {
        id: "step_nuc_1",
        narrative: "The flash of the nuclear explosion has passed. EMP has knocked out power. People around you are trying to flee. Most are outdoors. What is your first order?",
        question: "What is the immediate survival action principle right after a nuclear explosion?",
        options: [
          {
            text: "Evacuate as quickly as possible away from the detonation point using a vehicle",
            correct: false,
            feedback: "Evacuating immediately after the explosion risks radiation exposure during the time fallout descends. 'Get inside a building' is the first principle.",
            xpLost: 60
          },
          {
            text: "Immediately enter a building (basement or center of a large, dense building) and stay for 12–24 hours",
            correct: true,
            feedback: "Top priority nuclear disaster principle: 'Get Inside, Stay Inside, Stay Tuned.' A basement or a large, dense building is best. By the 7-10 rule, fallout drops rapidly over time, making 12–24 hours of indoor sheltering most effective.",
            xpGained: 400
          },
          {
            text: "Climb to the rooftop to avoid fallout",
            correct: false,
            feedback: "The rooftop is a dangerous position with direct fallout exposure. The building interior, especially a basement, is best.",
            xpLost: 70
          },
          {
            text: "Find an AM/FM radio to gather information",
            correct: false,
            feedback: "Gathering radio information ('Stay Tuned') is correct but is not the first action. Immediate indoor sheltering ('Get Inside') is the top priority.",
            xpLost: 20
          }
        ],
        xp: 400,
        timeLimit: 20
      },
      {
        id: "step_nuc_2",
        narrative: "You have sheltered indoors. Survivors are streaming in. Some were closer to the detonation point. You must assess the radiation dose for Red Zone survivors.",
        question: "What radiation dose is expected for a survivor from the 'Red Zone' of a 10 kT nuclear explosion?",
        options: [
          {
            text: "<1 Gy (below acute injury threshold)",
            correct: false,
            feedback: "<1 Gy is the Green Zone dose. Red Zone = >8 Gy (lethal).",
            xpLost: 40
          },
          {
            text: "1–8 Gy (100–800 rad)",
            correct: false,
            feedback: "1~8 Gy is the Yellow Zone (injury to lethal range). Red Zone = >8 Gy.",
            xpLost: 30
          },
          {
            text: ">8 Gy (>800 rad) — lethal",
            correct: true,
            feedback: "Correct! Red Zone = >8 Gy (>800 rad) — lethal. Yellow Zone = 1–8 Gy. Green Zone = <1 Gy. Red Zone survivors have Expectant or very poor prognosis in RTR triage.",
            xpGained: 400
          },
          {
            text: ">35 Gy (>3500 rad) — CNS syndrome",
            correct: false,
            feedback: ">35 Gy (>3500 rem) leads to CNS syndrome with seizures and immediate death. The Red Zone threshold is >8 Gy; some may be even higher.",
            xpLost: 20
          }
        ],
        xp: 400,
        timeLimit: 30
      },
      {
        id: "step_nuc_3",
        narrative: "The emergency response team has been assembled. A team member's cumulative radiation dose has reached 50 rad (0.5 Gy). A decision must be made per NCRP criteria.",
        question: "What is the NCRP-based action when an emergency responder reaches a cumulative dose of 0.5 Gy (50 rad)?",
        options: [
          {
            text: "It is a legal dose limit requiring unconditional immediate withdrawal",
            correct: false,
            feedback: "0.5 Gy is a decision dose, not a dose limit. It is not mandatory withdrawal, but a point at which the withdrawal decision must be made.",
            xpLost: 40
          },
          {
            text: "NCRP decision dose reached — a point at which withdrawal from the hot zone must be decided (not mandatory withdrawal)",
            correct: true,
            feedback: "Correct! 0.5 Gy (50 rad) = NCRP decision dose. Not a dose limit. In a life-saving situation, it may be exceeded with full risk awareness (ALARA principle). >250 mSv is allowed under conditions of life-saving + full risk awareness.",
            xpGained: 450
          },
          {
            text: "This dose is safe, so work can continue",
            correct: false,
            feedback: "0.5 Gy is a decision point. Ignoring it and continuing to work violates the ALARA principle. The withdrawal decision must be made based on the situation.",
            xpLost: 30
          },
          {
            text: "This dose level is where ARS symptoms appear immediately",
            correct: false,
            feedback: "At 0.5 Gy (50 rad), there are no immediate ARS symptoms. Symptoms begin to appear at 1 Gy (100 rad) or higher.",
            xpLost: 30
          }
        ],
        xp: 450,
        timeLimit: 35
      },
      {
        id: "step_nuc_4",
        narrative: "The RTR triage system must be established. Survivors are spontaneously gathering. Where should the first component of the RTR system be set up?",
        question: "Which component of the RTR system forms spontaneously first?",
        options: [
          {
            text: "Medical Centers (MC)",
            correct: false,
            feedback: "Medical Centers are the formal treatment facilities in the RTR system. What spontaneously forms in the early stages of an incident is the RTR sites.",
            xpLost: 30
          },
          {
            text: "RTR Sites (1–3) — initial triage/treatment hubs that spontaneously form during an incident",
            correct: true,
            feedback: "Correct! RTR 1–3 sites = initial triage/treatment hubs that spontaneously form during an incident. The system then establishes AC (Assembly Centers), MC (Medical Centers), and EC (Evacuation Centers) in sequence.",
            xpGained: 400
          },
          {
            text: "Evacuation Centers (EC)",
            correct: false,
            feedback: "Evacuation Centers are the population evacuation component. What spontaneously forms first in the early stages of an incident is the RTR sites.",
            xpLost: 30
          },
          {
            text: "Assembly Centers (AC)",
            correct: false,
            feedback: "Assembly Centers operate alongside RTR sites, but what spontaneously forms first is the RTR sites.",
            xpLost: 20
          }
        ],
        xp: 400,
        timeLimit: 30
      },
      {
        id: "step_nuc_5",
        narrative: "Emergency care has begun. According to Hiroshima/Nagasaki data, what type of burn affects the majority of burn survivors? Knowing this allows you to prioritize treatment.",
        question: "According to Hiroshima/Nagasaki data, what is the most common type of burn among burn survivors?",
        options: [
          {
            text: "Flame burns (2–3%)",
            correct: false,
            feedback: "Flame burns are the fewest at 2–3%. Flash burns dominate at 83–91%.",
            xpLost: 30
          },
          {
            text: "Flash burns alone (83–91%)",
            correct: true,
            feedback: "Historical data: Flash burns alone = 83–91% (Lebow et al., 1981), combined flash + flame = 6–15%, flame alone = 2–3%. The thermal radiation at the moment of nuclear explosion is most lethal.",
            xpGained: 450
          },
          {
            text: "Radiation burns (50–60%)",
            correct: false,
            feedback: "Direct skin burns from radiation itself differ from flash burns. Flash burns account for the most at 83–91%.",
            xpLost: 40
          },
          {
            text: "Combined flash + flame burns (6–15%)",
            correct: false,
            feedback: "Combined burns are 6–15%. The most common is flash alone (83–91%).",
            xpLost: 20
          }
        ],
        xp: 450,
        timeLimit: 30,
        isFinalStep: true,
        completionMessage: "Nuclear disaster response successful! Get Inside, Stay Inside, Stay Tuned — 7-10 rule — NCRP decision dose — RTR system. You executed all principles perfectly!"
      }
    ]
  },

  {
    id: "scenario_explosive_concert",
    title: "Concert Hall Bombing — Paris 2015 Reenactment",
    category: "explosive",
    difficulty: "boss",
    estimatedTime: "25 minutes",
    totalXP: 2200,
    description: "An explosion has occurred at a large concert hall in Seoul. More than 200 casualties. There is a secondary attack warning. EMS may be targeted. You are the incident commander and a Counter-Terrorism Medicine (CTM) specialist. Apply CSCATTT.",
    setting: "Seoul Olympic Gymnastics Arena — 5,000 spectators, post-explosion chaos, secondary attack warning",
    characterRole: "Incident Commander / CTM Specialist",
    backgroundImage: "concert_blast",
    steps: [
      {
        id: "step_exp_1",
        narrative: "You arrive at the scene immediately after the explosion. More than 200 people are down. Some are walking. An EMS crew member says 'There is a secondary attack warning.' What is your first action?",
        question: "What is the scene entry principle when there is a secondary attack warning?",
        options: [
          {
            text: "There are many casualties, so everyone immediately enters the scene to begin treatment",
            correct: false,
            feedback: "Secondary attack (double-tap) targets the first responders! EMS is a soft target. Everyone entering without scene safety confirmation puts all responders at risk.",
            xpLost: 70
          },
          {
            text: "Stage responders in a safe location until the scene is confirmed safe, then enter after law enforcement confirms safety",
            correct: true,
            feedback: "CTM principle #1: Responder safety is the top priority. During secondary attack warning, work with law enforcement (LEMC) to confirm safety before entering. CSCATTT: S (Safety) is second after C (Command).",
            xpGained: 400
          },
          {
            text: "A small number of responders enter first; others wait",
            correct: false,
            feedback: "Even a small entry without safety confirmation exposes responders to secondary attack risk. Official law enforcement safety confirmation is required.",
            xpLost: 30
          },
          {
            text: "Use an ambulance as a shield to enter",
            correct: false,
            feedback: "Terrorists may identify an ambulance as a VBIED (vehicle-borne explosive device) target. Indiscriminate use without safety confirmation is dangerous.",
            xpLost: 40
          }
        ],
        xp: 400,
        timeLimit: 25
      },
      {
        id: "step_exp_2",
        narrative: "The scene has been confirmed safe. Triage must begin. You have decided to use TST (Ten Second Triage). First patient: approaching on foot. No bleeding.",
        question: "In TST, how is a patient approaching on foot classified?",
        options: [
          {
            text: "P1 (Immediate) — immediate treatment",
            correct: false,
            feedback: "In TST, a walking patient is P3 (Minimal/Minor). Able to ambulate independently = minor.",
            xpLost: 30
          },
          {
            text: "P2 (Delayed) — delayed treatment",
            correct: false,
            feedback: "In TST, a walking patient is P3. P2 is a patient who cannot walk but can speak without a penetrating injury.",
            xpLost: 20
          },
          {
            text: "P3 (Minimal/Minor) — minor treatment",
            correct: true,
            feedback: "TST first step: Can walk? → Yes = P3 (Minimal). Next: Cannot walk + severe bleeding → hemostasis → P1. Cannot walk + speaking + penetrating injury → P1. Cannot walk + speaking + no penetrating injury → P2.",
            xpGained: 350
          },
          {
            text: "Not Breathing — deceased/expectant",
            correct: false,
            feedback: "A patient walking toward you cannot be Not Breathing. Not Breathing is a patient who cannot walk, cannot speak, and is not breathing.",
            xpLost: 40
          }
        ],
        xp: 350,
        timeLimit: 20
      },
      {
        id: "step_exp_3",
        narrative: "Second patient: down, with severe arterial bleeding from the thigh. Speaking. You immediately reach for a tourniquet. What is the triage and treatment for this patient?",
        question: "What is the TST classification and treatment for a patient who cannot walk and has severe bleeding?",
        options: [
          {
            text: "P2 (Delayed) — prioritize transport without hemorrhage control",
            correct: false,
            feedback: "Severe bleeding = P1. Transporting without hemorrhage control leads to death in transit. Hemorrhage control comes first.",
            xpLost: 60
          },
          {
            text: "P1 (Immediate) — immediate hemostasis with tourniquet/pressure/packing",
            correct: true,
            feedback: "TST: Cannot walk + severe bleeding → P1 + immediate pressure/tourniquet/packing. Stop the Bleed principle: controlling external bleeding saves lives. Bleeding from secondary blast injury (fragments) is most common.",
            xpGained: 400
          },
          {
            text: "P3 (Minor) — wait for self-hemostasis",
            correct: false,
            feedback: "Arterial bleeding cannot achieve self-hemostasis. Immediate P1 classification + hemorrhage control measures are required.",
            xpLost: 70
          },
          {
            text: "Black (deceased/expectant) — prevent resource waste",
            correct: false,
            feedback: "A patient who is speaking is not Black. Severe bleeding + conscious = P1; immediate hemorrhage control is appropriate.",
            xpLost: 50
          }
        ],
        xp: 400,
        timeLimit: 25
      },
      {
        id: "step_exp_4",
        narrative: "Third patient: tympanic membrane perforation, no external bleeding, complaining of respiratory distress. States 'the shock wave threw me and I hit the wall.' What blast injury mechanism is this?",
        question: "Tympanic membrane perforation + no external bleeding + respiratory distress indicates which blast injury mechanism?",
        options: [
          {
            text: "Secondary blast injury (penetrating from fragments)",
            correct: false,
            feedback: "Secondary injury is penetrating trauma from fragments/shrapnel. There would be external bleeding. This patient has no external bleeding.",
            xpLost: 30
          },
          {
            text: "Primary blast injury (pressure wave — air-filled organ damage, 'blast lung')",
            correct: true,
            feedback: "Correct! Primary Blast Injury = pressure wave → air-filled organs (lungs = 'blast lung', ears, GI tract). Tympanic membrane perforation + respiratory distress + no external bleeding = classic primary injury. Treatment dilemma: blast lung vs. pneumothorax (management differs).",
            xpGained: 400
          },
          {
            text: "Tertiary blast injury (acceleration/deceleration — thrown and struck)",
            correct: false,
            feedback: "Tertiary injury is blunt trauma from being thrown and striking a wall. 'Being thrown and hitting' suggests a tertiary component, but tympanic membrane perforation and respiratory distress are more consistent with primary injury.",
            xpLost: 20
          },
          {
            text: "Quaternary blast injury (burns)",
            correct: false,
            feedback: "Quaternary injury is burns (thermal). This patient shows no burn findings.",
            xpLost: 30
          }
        ],
        xp: 400,
        timeLimit: 30
      },
      {
        id: "step_exp_5",
        narrative: "The scene command structure must be established. Apply the CSCATTT (MIMMS) framework. The core 3 steps of medical response, '3T', must be executed correctly.",
        question: "What is the correct content and order of '3T' in MIMMS CSCATTT?",
        options: [
          {
            text: "Training → Technology → Teamwork",
            correct: false,
            feedback: "3T is not Training/Technology/Teamwork.",
            xpLost: 30
          },
          {
            text: "Triage → Treatment → Transportation",
            correct: true,
            feedback: "CSCATTT last 3T: Triage → Treatment → Transportation. Full: Command - Safety - Communication - Assessment - Triage - Treatment - Transportation. Paris/Nice lesson: complete implementation of this system saves lives.",
            xpGained: 450
          },
          {
            text: "Trauma → Triage → Transfer",
            correct: false,
            feedback: "The correct 3T = Triage, Treatment, Transportation.",
            xpLost: 20
          },
          {
            text: "Threat → Tactics → Target",
            correct: false,
            feedback: "3T is not Threat/Tactics/Target. It is Triage-Treatment-Transportation.",
            xpLost: 30
          }
        ],
        xp: 450,
        timeLimit: 25,
        isFinalStep: true,
        completionMessage: "Explosive counter-terrorism medicine response successful! You avoided the secondary attack, performed TST triage, and applied CSCATTT perfectly. You applied the lessons of Paris 2015!"
      }
    ]
  }
];

// ============================================
// SECTION 4: SKILL TREE
// ============================================

const CBRNE_ADV_SKILL_TREE = {

  chemical: [
    {
      id: "chem_sk_1",
      name: "Toxicology Fundamentals",
      nameEn: "Toxicology Fundamentals",
      icon: "🔬",
      prereq: null,
      unlockLevel: 1,
      description: "Understand the basic classification and toxicity principles of chemical warfare agents. Fundamentals of organophosphates, nerve agents, blood agents, and blister agents.",
      passiveBonus: "Chemical quiz correct answer: XP +5%",
      requiredXP: 0,
      relatedQuestions: ["chem_q03", "chem_q04", "chem_q15"]
    },
    {
      id: "chem_sk_2",
      name: "Toxidrome Expert",
      nameEn: "Toxidrome Expert",
      icon: "👁️",
      prereq: "chem_sk_1",
      unlockLevel: 3,
      description: "Immediately identify DUMBELS, SLUDGEM, and cholinergic toxidromes. Differentiate toxidromes for nerve agents, opioids, and blood agents.",
      passiveBonus: "Toxidrome-related questions: time bonus +10 seconds",
      requiredXP: 500,
      relatedQuestions: ["chem_q04", "chem_q06", "chem_q12", "chem_q16"]
    },
    {
      id: "chem_sk_3",
      name: "PPE Master",
      nameEn: "PPE Master",
      icon: "🦺",
      prereq: "chem_sk_1",
      unlockLevel: 5,
      description: "Perfectly select OSHA PPE Levels A/B/C/D by zone. Practical application of appropriate PPE for hot zone/warm zone/cold zone.",
      passiveBonus: "Safety-related decisions: HP loss on wrong answer -20%",
      requiredXP: 800,
      relatedQuestions: ["chem_q07", "chem_q13"]
    },
    {
      id: "chem_sk_4",
      name: "Antidote Triple",
      nameEn: "Antidote Triple",
      icon: "💊",
      prereq: "chem_sk_2",
      unlockLevel: 8,
      description: "Fully master the roles and indications of Atropine + 2-PAM + Diazepam. Master the complete antidote matrix (HF→Ca, Cyanide→Hydroxocobalamin, etc.).",
      passiveBonus: "Antidote-related correct answer: XP +15%",
      requiredXP: 1500,
      relatedQuestions: ["chem_q05", "chem_q12", "chem_q16", "chem_q23", "chem_q28"]
    },
    {
      id: "chem_sk_5",
      name: "PRISM Decontamination Expert",
      nameEn: "PRISM Decontamination Expert",
      icon: "🚿",
      prereq: "chem_sk_3",
      unlockLevel: 10,
      description: "Perfectly execute the PRISM 3-step protocol. Master ORCHIDS optimal conditions and the principles of dry/wet decontamination selection.",
      passiveBonus: "Decontamination scenarios: bonus XP +200",
      requiredXP: 2000,
      relatedQuestions: ["chem_q08", "chem_q09", "chem_q10", "chem_q22"]
    },
    {
      id: "chem_sk_6",
      name: "Chain of Chemical Survival Master",
      nameEn: "Chain of Chemical Survival Master",
      icon: "⛓️",
      prereq: ["chem_sk_4", "chem_sk_5"],
      unlockLevel: 15,
      description: "Supreme expert in immediately executing the chemical survival chain (PPE→decontamination→antidote→BLS) on scene. Full mastery of hospital HICS activation protocol.",
      passiveBonus: "Chemical disaster boss battle damage +25%",
      requiredXP: 5000,
      relatedQuestions: ["chem_q01", "chem_q17", "chem_q20"]
    }
  ],

  biological: [
    {
      id: "bio_sk_1",
      name: "Biosafety Fundamentals",
      nameEn: "Biosafety Fundamentals",
      icon: "🧫",
      prereq: null,
      unlockLevel: 1,
      description: "Understand the 4 classification criteria for biological disasters and the concepts of communicable/non-communicable agents. Basic study of CDC classification framework.",
      passiveBonus: "Biological quiz first-attempt correct answer: XP +5%",
      requiredXP: 0,
      relatedQuestions: ["bio_q02", "bio_q25", "bio_q28"]
    },
    {
      id: "bio_sk_2",
      name: "Category A Pathogen Expert",
      nameEn: "Category A Pathogen Expert",
      icon: "☣️",
      prereq: "bio_sk_1",
      unlockLevel: 3,
      description: "Fully understand the 6 CDC Category A pathogens (anthrax/botulinum/plague/smallpox/tularemia/VHF). Master clinical features, transmission routes, and treatment.",
      passiveBonus: "Category A-related boss battle HP +50",
      requiredXP: 500,
      relatedQuestions: ["bio_q03", "bio_q04", "bio_q06", "bio_q07", "bio_q08"]
    },
    {
      id: "bio_sk_3",
      name: "Epidemiological Investigator",
      nameEn: "Epidemiological Investigator",
      icon: "🔍",
      prereq: "bio_sk_1",
      unlockLevel: 5,
      description: "Analyze biological disaster epidemiological cases (Amerithrax 2001, Sverdlovsk 1979, etc.) and identify patterns.",
      passiveBonus: "Epidemiology scenarios: consecutive correct answer bonus x1.5",
      requiredXP: 800,
      relatedQuestions: ["bio_q01", "bio_q05", "bio_q12", "bio_q13", "bio_q27"]
    },
    {
      id: "bio_sk_4",
      name: "Antibiotic Protocol Master",
      nameEn: "Antibiotic Protocol Master",
      icon: "💉",
      prereq: "bio_sk_2",
      unlockLevel: 8,
      description: "Accurately match antibiotic treatment (Cipro/Doxy/Streptomycin/Gentamicin) and PEP duration by pathogen. Anthrax 60 days vs. plague 7 days vs. tularemia 14 days.",
      passiveBonus: "Antibiotic question correct answer: XP +20%",
      requiredXP: 1500,
      relatedQuestions: ["bio_q09", "bio_q10", "bio_q24"]
    },
    {
      id: "bio_sk_5",
      name: "POD System Expert",
      nameEn: "POD System Expert",
      icon: "🏥",
      prereq: "bio_sk_3",
      unlockLevel: 10,
      description: "Understand the 4 types of Points of Dispensing (POD) systems and organize the distribution of medical countermeasures during large-scale biological disasters.",
      passiveBonus: "Biological scenarios: decision bonus +150 XP",
      requiredXP: 2000,
      relatedQuestions: ["bio_q17", "bio_q23"]
    },
    {
      id: "bio_sk_6",
      name: "Biological Disaster Response Director",
      nameEn: "Biological Disaster Response Director",
      icon: "🦠",
      prereq: ["bio_sk_4", "bio_sk_5"],
      unlockLevel: 15,
      description: "Command the entire biological disaster response system (detection→notification→isolation→treatment→recovery). Supreme expert in low-probability, high-impact bioterrorism response.",
      passiveBonus: "Biological disaster boss battle all-phase damage +25%",
      requiredXP: 5000,
      relatedQuestions: ["bio_q22", "bio_q23", "bio_q26"]
    }
  ],

  radiological: [
    {
      id: "rad_sk_1",
      name: "Radiation Physics Basics",
      nameEn: "Radiation Physics Basics",
      icon: "⚛️",
      prereq: null,
      unlockLevel: 1,
      description: "Understand radiation units (Gy/Sv/rad/rem) and conversions, and the 3 factors determining radiation injury (dose/distance/shielding).",
      passiveBonus: "Unit conversion question correct answer: XP +5%",
      requiredXP: 0,
      relatedQuestions: ["rad_q02", "rad_q03", "rad_q13", "rad_q20"]
    },
    {
      id: "rad_sk_2",
      name: "ARS Diagnostician",
      nameEn: "ARS Diagnostician",
      icon: "🩺",
      prereq: "rad_sk_1",
      unlockLevel: 3,
      description: "Fully understand the 4 stages of Acute Radiation Syndrome (ARS) and syndrome types by dose (hematopoietic/gastrointestinal/CNS). Estimate dose from time of vomiting onset.",
      passiveBonus: "ARS-related boss battle HP +50",
      requiredXP: 500,
      relatedQuestions: ["rad_q04", "rad_q05", "rad_q06", "rad_q12"]
    },
    {
      id: "rad_sk_3",
      name: "Radiation Zone Expert",
      nameEn: "Radiation Zone Expert",
      icon: "🗺️",
      prereq: "rad_sk_1",
      unlockLevel: 5,
      description: "Fully master the RDD response 100-minute timeline and zone establishment (500m→2km) principles. Master the 3 PIA message sequence.",
      passiveBonus: "Radiation scenarios: first decision bonus +200 XP",
      requiredXP: 800,
      relatedQuestions: ["rad_q09", "rad_q10", "rad_q17", "rad_q18"]
    },
    {
      id: "rad_sk_4",
      name: "Radiation Treatment Specialist",
      nameEn: "Radiation Treatment Specialist",
      icon: "💊",
      prereq: "rad_sk_2",
      unlockLevel: 8,
      description: "Accurately match treatments by radioactive material (KI/Prussian blue/DTPA/stem cells). Fully master CBC monitoring schedule.",
      passiveBonus: "Radiation treatment question correct answer: XP +20%",
      requiredXP: 1500,
      relatedQuestions: ["rad_q07", "rad_q08", "rad_q11", "rad_q16"]
    },
    {
      id: "rad_sk_5",
      name: "PRISM Radiological Decon Expert",
      nameEn: "PRISM Radiological Decon Expert",
      icon: "🚿",
      prereq: "rad_sk_3",
      unlockLevel: 10,
      description: "Fully master the PRISM protocol for radiological decontamination and PPE selection (SCBA/APR/N95). Apply the principle that undressing removes 90% of contamination.",
      passiveBonus: "Decontamination consecutive correct answers: bonus x2",
      requiredXP: 2000,
      relatedQuestions: ["rad_q14", "rad_q15", "rad_q25"]
    },
    {
      id: "rad_sk_6",
      name: "Radiological Disaster Master",
      nameEn: "Radiological Disaster Master",
      icon: "☢️",
      prereq: ["rad_sk_4", "rad_sk_5"],
      unlockLevel: 15,
      description: "Command the entire radiological disaster response from RDD to nuclear plant accidents. Fully implement ALARA principles and the 6 goals of population monitoring.",
      passiveBonus: "Radiological disaster boss battle all-phase damage +25%",
      requiredXP: 5000,
      relatedQuestions: ["rad_q19", "rad_q21", "rad_q22", "rad_q24"]
    }
  ],

  nuclear: [
    {
      id: "nuc_sk_1",
      name: "Nuclear Physics Basics",
      nameEn: "Nuclear Physics Basics",
      icon: "💥",
      prereq: null,
      unlockLevel: 1,
      description: "Understand nuclear explosion yield (kT/MT), historical cases (Hiroshima/Nagasaki), and fission principles. 1 kT = 1,000 tons TNT equivalent.",
      passiveBonus: "Nuclear physics question correct answer: XP +5%",
      requiredXP: 0,
      relatedQuestions: ["nuc_q01", "nuc_q02", "nuc_q03", "nuc_q18", "nuc_q27"]
    },
    {
      id: "nuc_sk_2",
      name: "Immediate Survival Expert",
      nameEn: "Immediate Survival Expert",
      icon: "🏠",
      prereq: "nuc_sk_1",
      unlockLevel: 3,
      description: "Fully understand the 'Get Inside, Stay Inside, Stay Tuned' principle and the 12–24 hour evacuation basis (7-10 Rule).",
      passiveBonus: "Survival action boss battle HP +50",
      requiredXP: 500,
      relatedQuestions: ["nuc_q04", "nuc_q05", "nuc_q06", "nuc_q21", "nuc_q23", "nuc_q26"]
    },
    {
      id: "nuc_sk_3",
      name: "Radiation Zone Analyst",
      nameEn: "Radiation Zone Analyst",
      icon: "📊",
      prereq: "nuc_sk_1",
      unlockLevel: 5,
      description: "Fully understand the red/yellow/green zone dose ranges and RTR system for a 10 kT explosion. Master flash burn data.",
      passiveBonus: "Zone-related scenario correct answer: bonus XP +200",
      requiredXP: 800,
      relatedQuestions: ["nuc_q07", "nuc_q10", "nuc_q11", "nuc_q19", "nuc_q24"]
    },
    {
      id: "nuc_sk_4",
      name: "Radiation Protection Expert",
      nameEn: "Radiation Protection Expert",
      icon: "🛡️",
      prereq: "nuc_sk_3",
      unlockLevel: 8,
      description: "Fully apply NCRP decision dose (0.5 Gy), situational permissible doses, and ALARA principles. Emergency responder dose management.",
      passiveBonus: "ALARA/dose-related question correct answer: XP +20%",
      requiredXP: 1500,
      relatedQuestions: ["nuc_q08", "nuc_q09", "nuc_q12", "nuc_q20", "nuc_q22"]
    },
    {
      id: "nuc_sk_5",
      name: "EMP Response Expert",
      nameEn: "EMP Response Expert",
      icon: "⚡",
      prereq: "nuc_sk_2",
      unlockLevel: 10,
      description: "Fully understand the effects of nuclear explosion EMP (electromagnetic pulse) on infrastructure and response in communication blackout situations.",
      passiveBonus: "Communication/information scenario decision bonus +150 XP",
      requiredXP: 2000,
      relatedQuestions: ["nuc_q06", "nuc_q14", "nuc_q25"]
    },
    {
      id: "nuc_sk_6",
      name: "Nuclear Disaster Supreme Commander",
      nameEn: "Nuclear Disaster Supreme Commander",
      icon: "💫",
      prereq: ["nuc_sk_4", "nuc_sk_5"],
      unlockLevel: 15,
      description: "Command the entire nuclear explosion response (immediate survival→zone establishment→RTR triage→long-term recovery) at supreme commander level. Fully apply FEMA 2023 5-zone framework.",
      passiveBonus: "Nuclear disaster boss battle all-phase damage +25%",
      requiredXP: 5000,
      relatedQuestions: ["nuc_q13", "nuc_q16", "nuc_q17"]
    }
  ],

  explosive: [
    {
      id: "exp_sk_1",
      name: "Blast Injury Basics",
      nameEn: "Blast Injury Basics",
      icon: "💣",
      prereq: null,
      unlockLevel: 1,
      description: "Understand the definitions of 5 blast injury mechanisms (primary–quinary) and the body parts affected by each mechanism.",
      passiveBonus: "Blast injury quiz first-attempt correct answer: XP +5%",
      requiredXP: 0,
      relatedQuestions: ["exp_q01", "exp_q02", "exp_q18", "exp_q19"]
    },
    {
      id: "exp_sk_2",
      name: "Counter-Terrorism Medicine Expert",
      nameEn: "Counter-Terrorism Medicine Expert",
      icon: "🚨",
      prereq: "exp_sk_1",
      unlockLevel: 3,
      description: "Understand the definition and components of CTM, the differences between TEMS/TCCC/TECC, and how terrorists exploit EMS.",
      passiveBonus: "CTM-related boss battle HP +50",
      requiredXP: 500,
      relatedQuestions: ["exp_q09", "exp_q14", "exp_q15", "exp_q27"]
    },
    {
      id: "exp_sk_3",
      name: "Triage Master",
      nameEn: "Triage Master",
      icon: "🏷️",
      prereq: "exp_sk_1",
      unlockLevel: 5,
      description: "Apply START, TST (10-second triage), and SALT triage in practice. Fully master the TST 6-step algorithm.",
      passiveBonus: "Triage scenario decision bonus +200 XP",
      requiredXP: 800,
      relatedQuestions: ["exp_q12", "exp_q26"]
    },
    {
      id: "exp_sk_4",
      name: "TECC Tactical Medical Expert",
      nameEn: "TECC Tactical Medical Expert",
      icon: "⚕️",
      prereq: "exp_sk_2",
      unlockLevel: 8,
      description: "Fully execute TECC 3 zones (direct threat/indirect threat/evacuation) and the S-C-ABE protocol. Master THREAT and 3 Echo protocols.",
      passiveBonus: "Tactical medicine question correct answer: XP +20%",
      requiredXP: 1500,
      relatedQuestions: ["exp_q06", "exp_q07", "exp_q10", "exp_q11"]
    },
    {
      id: "exp_sk_5",
      name: "CSCATTT Command Expert",
      nameEn: "CSCATTT Command Expert",
      icon: "🎖️",
      prereq: "exp_sk_3",
      unlockLevel: 10,
      description: "Fully apply MIMMS CSCATTT framework to command large-scale terrorist MCI. Complete analysis of the Paris/Nice cases.",
      passiveBonus: "Command scenario decision bonus +200 XP",
      requiredXP: 2000,
      relatedQuestions: ["exp_q03", "exp_q04", "exp_q05", "exp_q08", "exp_q16", "exp_q17"]
    },
    {
      id: "exp_sk_6",
      name: "CTM Leading Expert",
      nameEn: "CTM Leading Expert",
      icon: "🛡️",
      prereq: ["exp_sk_4", "exp_sk_5"],
      unlockLevel: 15,
      description: "Lead the field of Counter-Terrorism Medicine (CTM). Master the full CTM cycle including military-civilian cooperation, unified command, responder safety, and community recovery.",
      passiveBonus: "Explosives boss battle all-phase damage +30% + all CBRNE boss battles HP +100",
      requiredXP: 5000,
      relatedQuestions: ["exp_q21", "exp_q22", "exp_q23", "exp_q24"]
    }
  ]

}; // end CBRNE_ADV_SKILL_TREE

// ============================================
// SECTION 5: EXPORT
// ============================================

window.CBRNE_CONTENT = {
  questions: CBRNE_ADV_QUIZ_QUESTIONS,
  bossBattles: CBRNE_ADV_BOSS_BATTLES,
  scenarios: CBRNE_ADV_SCENARIOS,
  skillTree: CBRNE_ADV_SKILL_TREE,

  // Metadata
  meta: {
    version: "1.0.0",
    createdAt: "2025",
    source: "CIREcourse Lectures — Heejun Shin MD, MS, FIBODM",
    totalQuestions: (
      Object.values(CBRNE_ADV_QUIZ_QUESTIONS).reduce((sum, cat) => sum + cat.length, 0)
    ),
    categories: ["chemical", "biological", "radiological", "nuclear", "explosive"],
    categoryLabels: {
      chemical: "Chemical Disaster (Chemical)",
      biological: "Biological Disaster (Biological)",
      radiological: "Radiological Disaster (Radiological)",
      nuclear: "Nuclear Disaster (Nuclear)",
      explosive: "Explosives/Counter-Terrorism Medicine (Explosive/CTM)"
    },
    difficultyDistribution: {
      normal: "Core Foundational Knowledge",
      hard: "Advanced Clinical Application",
      boss: "Maximum Difficulty Integrated Questions"
    }
  },

  // Helper functions
  getQuestionsByCategory: function(category) {
    return this.questions[category] || [];
  },

  getQuestionById: function(id) {
    for (const cat of Object.values(this.questions)) {
      const found = cat.find(q => q.id === id);
      if (found) return found;
    }
    return null;
  },

  getBossByCategory: function(category) {
    return this.bossBattles.find(b => b.category === category) || null;
  },

  getScenarioByCategory: function(category) {
    return this.scenarios.filter(s => s.category === category);
  },

  getSkillsByCategory: function(category) {
    return this.skillTree[category] || [];
  },

  getRandomQuestions: function(category, count, difficulty = null) {
    let pool = this.questions[category] || [];
    if (difficulty) {
      pool = pool.filter(q => q.diff === difficulty);
    }
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }
};

// Also expose individual constants for backward compatibility
window.CBRNE_ADV_QUIZ_QUESTIONS = CBRNE_ADV_QUIZ_QUESTIONS;
window.CBRNE_ADV_BOSS_BATTLES = CBRNE_ADV_BOSS_BATTLES;
window.CBRNE_ADV_SCENARIOS = CBRNE_ADV_SCENARIOS;
window.CBRNE_ADV_SKILL_TREE = CBRNE_ADV_SKILL_TREE;

console.log(
  "[CBRNE_CONTENT] Loaded successfully. " +
  Object.values(CBRNE_ADV_QUIZ_QUESTIONS).reduce((sum, c) => sum + c.length, 0) +
  " questions, " +
  CBRNE_ADV_BOSS_BATTLES.length + " bosses, " +
  CBRNE_ADV_SCENARIOS.length + " scenarios, " +
  Object.keys(CBRNE_ADV_SKILL_TREE).length + " skill categories."
);
