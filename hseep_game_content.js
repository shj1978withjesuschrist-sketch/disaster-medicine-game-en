// ============================================
// HSEEP (Homeland Security Exercise and Evaluation Program)
// Disaster Medicine Education RPG — HSEEP Content Module
// ============================================
// Source: FEMA HSEEP 2020 Doctrine, National Preparedness Goal (2nd Ed.),
//         Montana HSEEP Course Manual (2022), Indiana HSEEP Exercise Guide
// All variable names prefixed with HSEEP_ to avoid collision
// ============================================

"use strict";

// ============================================
// SECTION 1: HSEEP_QUIZ_QUESTIONS
// Organized by category — 120+ questions total
// ============================================

const HSEEP_QUIZ_QUESTIONS = {

  // ==========================================
  // CATEGORY 1: DOCTRINE — 17 questions
  // HSEEP fundamentals, 6 principles, National Preparedness Goal
  // ==========================================
  doctrine: [
    {
      id: "hseep_doctrine_q01",
      q: "Which of the following is NOT one of the 6 fundamental principles of HSEEP?",
      o: [
        "Senior Leader Guidance",
        "Informed by Risk",
        "Budget-Centered Planning",
        "Common Methodology"
      ],
      a: 2,
      exp: "The 6 HSEEP principles are: ① Senior Leader Guidance ② Informed by Risk ③ Capability-Based, Objective-Driven ④ Progressive Exercise Planning ⑤ Whole Community Integration ⑥ Common Methodology. 'Budget-Centered Planning' is not one of them.",
      diff: "normal",
      category: "doctrine"
    },
    {
      id: "hseep_doctrine_q02",
      q: "What is the official HSEEP definition of an 'exercise'?",
      o: [
        "A real-world emergency response event used for training purposes",
        "An event or activity delivered through discussion or action to develop, assess, or validate plans, policies, procedures, and capabilities",
        "A simulation game played by emergency managers to test their knowledge",
        "A formal inspection of emergency equipment and personnel"
      ],
      a: 1,
      exp: "Per HSEEP 2020 Doctrine: 'An exercise is an event or activity, delivered through discussion or action, to develop, assess, or validate plans, policies, procedures, and capabilities that jurisdictions/organizations can use to achieve planned objectives.'",
      diff: "normal",
      category: "doctrine"
    },
    {
      id: "hseep_doctrine_q03",
      q: "The National Preparedness Goal states: 'A secure and resilient nation with the capabilities required across the whole community to prevent, protect against, mitigate, respond to, and recover from the threats and hazards that pose the greatest risk.' How many mission areas does this goal define?",
      o: ["3", "4", "5", "6"],
      a: 2,
      exp: "The National Preparedness Goal defines 5 mission areas: Prevention, Protection, Mitigation, Response, and Recovery — often remembered as PPMRR. Each mission area contains multiple core capabilities.",
      diff: "normal",
      category: "doctrine"
    },
    {
      id: "hseep_doctrine_q04",
      q: "What is the primary purpose of exercises in the HSEEP framework?",
      o: [
        "To certify emergency personnel for deployment",
        "To provide a low-risk environment to assess and validate plans, policies, procedures, and capabilities",
        "To identify and discipline personnel who perform poorly",
        "To meet federal grant reporting requirements only"
      ],
      a: 1,
      exp: "Exercises provide a low-risk environment to: familiarize personnel with roles/responsibilities; foster meaningful interaction; assess and validate plans, policies, procedures, and capabilities; identify strengths and areas for improvement; and strengthen the whole community.",
      diff: "easy",
      category: "doctrine"
    },
    {
      id: "hseep_doctrine_q05",
      q: "The HSEEP principle of 'Progressive Exercise Planning' means which of the following?",
      o: [
        "Exercises must always follow a strict linear sequence from Seminar to Full-Scale Exercise",
        "A variety of exercises are aligned to a common set of program priorities with increasing complexity over time, though not always linear",
        "Each exercise must be progressively harder than the last for the same personnel",
        "Exercise budgets must increase progressively each year"
      ],
      a: 1,
      exp: "Progressive Exercise Planning includes various exercises aligned to a common set of program priorities and objectives with increasing complexity over time. HSEEP 2020 explicitly states: 'This does not always imply a linear progression of exercise types.' The approach is flexible.",
      diff: "normal",
      category: "doctrine"
    },
    {
      id: "hseep_doctrine_q06",
      q: "Which of the following best describes 'Whole Community Integration' as an HSEEP principle?",
      o: [
        "Only federal agencies should be involved in exercise planning",
        "Exercises should engage all levels of government, private sector, nonprofit, and faith-based organizations throughout the HSEEP cycle",
        "The entire community must participate as players in every exercise",
        "Community integration is required only for Full-Scale Exercises"
      ],
      a: 1,
      exp: "Whole Community Integration encourages planners to engage all levels of government, private sector, nonprofit, and faith-based organizations throughout program management, design and development, conduct, evaluation, and improvement planning — the entire HSEEP cycle.",
      diff: "normal",
      category: "doctrine"
    },
    {
      id: "hseep_doctrine_q07",
      q: "The HSEEP Cycle consists of how many phases?",
      o: ["3", "4", "5", "6"],
      a: 2,
      exp: "The HSEEP Cycle has 5 phases: ① Program Management ② Exercise Design and Development ③ Exercise Conduct ④ Exercise Evaluation ⑤ Improvement Planning. These feed back into the Integrated Preparedness Cycle.",
      diff: "easy",
      category: "doctrine"
    },
    {
      id: "hseep_doctrine_q08",
      q: "Which acronym describes the Integrated Preparedness Cycle into which the HSEEP Cycle is nested?",
      o: ["SMART", "POETE", "THIRA", "NIMS"],
      a: 1,
      exp: "POETE stands for: Plan → Organize/Equip → Train → Exercise → Evaluate/Improve. This Integrated Preparedness Cycle is a continuous process, and the HSEEP Cycle is nested within the 'Exercise' and 'Evaluate/Improve' phases.",
      diff: "hard",
      category: "doctrine"
    },
    {
      id: "hseep_doctrine_q09",
      q: "According to HSEEP, when should senior leaders be engaged in the exercise process?",
      o: [
        "Only at the beginning, during the Concept and Objectives meeting",
        "Only at the end, to review the After-Action Report",
        "Early and frequently throughout the exercise process",
        "Only for Full-Scale Exercises — not needed for smaller exercises"
      ],
      a: 2,
      exp: "Senior Leader Guidance is the first HSEEP principle for good reason: 'Early and frequent engagement of senior leaders is key to success.' They provide overarching guidance throughout the design process to ensure alignment with their intent.",
      diff: "normal",
      category: "doctrine"
    },
    {
      id: "hseep_doctrine_q10",
      q: "What document serves as the roadmap for selecting and prioritizing individual exercises in a multi-year program?",
      o: [
        "Exercise Plan (ExPlan)",
        "Integrated Preparedness Plan (IPP)",
        "Master Scenario Events List (MSEL)",
        "After-Action Report (AAR)"
      ],
      a: 1,
      exp: "The Integrated Preparedness Plan (IPP) is a document for combining efforts across the POETE Cycle. It serves as a multi-year exercise program roadmap, targets resources where most useful, and informs the progressive approach — how exercises increase in complexity over time.",
      diff: "normal",
      category: "doctrine"
    },
    {
      id: "hseep_doctrine_q11",
      q: "HSEEP aligns with which of the following national frameworks and systems? (Select the most comprehensive answer)",
      o: [
        "Only the National Incident Management System (NIMS)",
        "National Preparedness System, NIMS, National Response Framework, and THIRA",
        "Only the National Response Framework and NIMS",
        "Only grant requirements from DHS and FEMA"
      ],
      a: 1,
      exp: "HSEEP supports the National Preparedness System (NPS) and aligns with: the National Preparedness Goal, NIMS, the National Response Framework (NRF), THIRA (Threat and Hazard Identification and Risk Assessment), and the Stakeholder Preparedness Review.",
      diff: "normal",
      category: "doctrine"
    },
    {
      id: "hseep_doctrine_q12",
      q: "Which HSEEP principle states that exercises should evaluate current capability levels and identify gaps?",
      o: [
        "Senior Leader Guidance",
        "Informed by Risk",
        "Capability-Based, Objective-Driven",
        "Whole Community Integration"
      ],
      a: 2,
      exp: "'Capability-Based, Objective-Driven' means exercises evaluate current capability levels/targets and identify gaps. Exercises focus on assessing performance against capability-based objectives — not just training exercises but actual capability measurement.",
      diff: "normal",
      category: "doctrine"
    },
    {
      id: "hseep_doctrine_q13",
      q: "What is the purpose of the 'Informed by Risk' HSEEP principle?",
      o: [
        "To ensure exercises have a clear safety plan",
        "To help jurisdictions identify risks in their exercise design process",
        "To use risk and capability assessments to identify priorities, objectives, and capabilities through exercises",
        "To inform the public about exercise risks and limitations"
      ],
      a: 2,
      exp: "'Informed by Risk' means identifying and assessing risks and associated impacts helps jurisdictions identify and evaluate priorities, objectives, and capabilities through exercises. Exercises should be risk-based — derived from THIRA or other threat/hazard assessments.",
      diff: "normal",
      category: "doctrine"
    },
    {
      id: "hseep_doctrine_q14",
      q: "What is the most recently revised version of HSEEP Doctrine?",
      o: ["January 2018", "January 2020", "March 2021", "September 2022"],
      a: 1,
      exp: "The HSEEP Doctrine was most recently revised in January 2020. It is published by FEMA's National Exercise Division and serves as the U.S. national standard for exercises.",
      diff: "hard",
      category: "doctrine"
    },
    {
      id: "hseep_doctrine_q15",
      q: "Which of the following is NOT a purpose of exercises as described in HSEEP?",
      o: [
        "Familiarize personnel with roles and responsibilities",
        "Penalize organizations that fail to meet standards",
        "Foster meaningful interaction and communication across jurisdictions",
        "Identify strengths and areas for improvement"
      ],
      a: 1,
      exp: "Exercises are meant to be conducted in a 'no-fault environment.' Penalizing organizations is explicitly contrary to HSEEP principles. Exercises are learning opportunities, not pass/fail tests. The other three options are legitimate purposes of exercises.",
      diff: "easy",
      category: "doctrine"
    },
    {
      id: "hseep_doctrine_q16",
      q: "The Integrated Preparedness Planning Workshop (IPPW) is best described as:",
      o: [
        "A training course for new exercise planners",
        "A meeting that establishes the strategy and structure for an exercise program and sets the foundation for individual exercise planning",
        "A certification exam for HSEEP compliance",
        "A post-exercise review meeting for senior leaders"
      ],
      a: 1,
      exp: "The IPPW establishes the strategy and structure for an exercise program, while setting the foundation for planning, conduct, and evaluation of individual exercises. Its outcome is the Integrated Preparedness Plan (IPP) and Integrated Preparedness Schedule (IPS).",
      diff: "normal",
      category: "doctrine"
    },
    {
      id: "hseep_doctrine_q17",
      q: "Which of the following organizations should be represented at an IPPW?",
      o: [
        "Only senior government officials and elected leaders",
        "Only professional emergency management staff",
        "The whole community — government, private sector, nonprofits, faith-based organizations, and community members",
        "Only federal agency representatives"
      ],
      a: 2,
      exp: "The IPPW should include: senior leaders (direction/resources), planning/training/exercise managers, individuals knowledgeable about community risks and capabilities, representatives from all relevant disciplines, advocates for those with functional needs, and community representatives (businesses, healthcare, volunteers, NGOs, faith-based orgs).",
      diff: "normal",
      category: "doctrine"
    }
  ],

  // ==========================================
  // CATEGORY 2: EXERCISE TYPES — 18 questions
  // All 7 exercise types: Seminar through FSE
  // ==========================================
  exercise_types: [
    {
      id: "hseep_types_q01",
      q: "How many exercise types does HSEEP define, and what are the two broad categories?",
      o: [
        "5 types: Discussion-Based and Operations-Based",
        "6 types: Low, Medium, and High Complexity",
        "7 types: Discussion-Based and Operations-Based",
        "8 types: Training and Evaluation"
      ],
      a: 2,
      exp: "HSEEP defines 7 exercise types in 2 categories: Discussion-Based (Seminar, Workshop, Tabletop Exercise, Game) and Operations-Based (Drill, Functional Exercise, Full-Scale Exercise). The progressive approach moves from Discussion-Based toward Operations-Based.",
      diff: "easy",
      category: "exercise_types"
    },
    {
      id: "hseep_types_q02",
      q: "A Seminar is BEST described as which type of exercise?",
      o: [
        "An operations-based exercise testing a single function",
        "A discussion-based exercise that orients participants to authorities, strategies, plans, policies, and procedures",
        "A complex exercise involving multiple agencies with real resource deployment",
        "A competitive exercise where teams are scored against each other"
      ],
      a: 1,
      exp: "A Seminar is a discussion-based exercise that orients participants to or provides an overview of authorities, strategies, plans, policies, procedures, protocols, resources, concepts, and ideas. It has the lowest complexity of all exercise types and is a good starting point.",
      diff: "easy",
      category: "exercise_types"
    },
    {
      id: "hseep_types_q03",
      q: "What is the PRIMARY distinguishing feature of a Workshop compared to a Seminar?",
      o: [
        "Workshops involve actual resource deployment",
        "Workshops are focused on achieving or building a specific product through increased participant interaction",
        "Workshops are only for senior officials, while Seminars are for all staff",
        "Workshops require a MSEL; Seminars do not"
      ],
      a: 1,
      exp: "The key difference: a Workshop has 'increased participant interaction focused on achieving or building a product.' While a Seminar primarily orients and informs (lecture-based with limited interaction), a Workshop produces tangible deliverables like Emergency Operations Plans, Mutual Aid Agreements, or SOPs.",
      diff: "normal",
      category: "exercise_types"
    },
    {
      id: "hseep_types_q04",
      q: "A Tabletop Exercise (TTX) is designed to achieve which primary goal?",
      o: [
        "Deploy resources to test logistical procedures",
        "Generate dialogue of various issues to facilitate conceptual understanding and identify strengths and areas for improvement",
        "Test a single critical function within one organization",
        "Validate communications equipment and systems"
      ],
      a: 1,
      exp: "A TTX is designed to generate a dialogue of various issues to facilitate a conceptual understanding, identify strengths and areas for improvement, and/or achieve changes in perceptions about plans, policies, or procedures. It is discussion-based with no real resource deployment.",
      diff: "normal",
      category: "exercise_types"
    },
    {
      id: "hseep_types_q05",
      q: "What is the typical number of participants in a Tabletop Exercise (TTX)?",
      o: ["5–10", "15–50", "50–200", "100–1,000+"],
      a: 1,
      exp: "A TTX typically involves 15–50 key decision-makers, functional leads, and senior officials. This smaller group enables in-depth discussion and problem-solving. By contrast, a Full-Scale Exercise may involve 100–1,000+ participants.",
      diff: "normal",
      category: "exercise_types"
    },
    {
      id: "hseep_types_q06",
      q: "Which exercise type is defined as 'a structured form of play designed for individuals or teams in a competitive or noncompetitive environment, guided by clear rules, data, and procedures'?",
      o: ["Seminar", "Workshop", "Tabletop Exercise", "Game"],
      a: 3,
      exp: "A Game is a discussion-based exercise that is a structured form of play designed for individuals or teams in a competitive or noncompetitive environment. Players are guided by clear rules, data, and procedures depicting an actual or hypothetical situation requiring decision-making.",
      diff: "normal",
      category: "exercise_types"
    },
    {
      id: "hseep_types_q07",
      q: "What is the defining characteristic of a Drill compared to other operations-based exercises?",
      o: [
        "A Drill involves multiple agencies in a coordinated response",
        "A Drill tests and evaluates multiple functions across multiple agencies",
        "A Drill validates a single operation or function within a single agency or organization",
        "A Drill is only used for communication system testing"
      ],
      a: 2,
      exp: "A Drill is an operations-based exercise often employed to validate a SINGLE operation or function in a SINGLE agency or organization. This narrow focus distinguishes it from Functional Exercises (multiple functions) and Full-Scale Exercises (multi-agency real response).",
      diff: "normal",
      category: "exercise_types"
    },
    {
      id: "hseep_types_q08",
      q: "In a Functional Exercise (FE), how are resources typically handled?",
      o: [
        "All resources are fully deployed in real time, just like a real emergency",
        "No resources are used at all — it is purely discussion-based",
        "Movement of resources is usually simulated — conducted in a realistic, real-time environment",
        "Resources are deployed only for the final 30 minutes of the exercise"
      ],
      a: 2,
      exp: "A Functional Exercise tests capabilities in a realistic, real-time environment; however, movement of resources is usually SIMULATED. This distinguishes it from a Full-Scale Exercise where resources actually move. FEs commonly use a SimCell and MSEL to inject simulated events.",
      diff: "normal",
      category: "exercise_types"
    },
    {
      id: "hseep_types_q09",
      q: "A Full-Scale Exercise (FSE) is typically the most complex exercise type. What is its defining characteristic?",
      o: [
        "It can only be conducted once every 5 years",
        "It requires federal authorization before it can be conducted",
        "It often involves multiple agencies, jurisdictions, and REAL-TIME movement of resources",
        "It is conducted entirely online using simulation software"
      ],
      a: 2,
      exp: "An FSE is typically the most complex and resource-intensive exercise type. It often involves multiple agencies, jurisdictions/organizations, and REAL-TIME movement of resources. Participants perform roles as they would in a real emergency, with simultaneous activities across a large exercise site.",
      diff: "normal",
      category: "exercise_types"
    },
    {
      id: "hseep_types_q10",
      q: "Which exercise type would be MOST appropriate for developing or making major changes to an Emergency Operations Plan (EOP)?",
      o: ["Drill", "Tabletop Exercise", "Workshop", "Full-Scale Exercise"],
      a: 2,
      exp: "A Workshop is the exercise type designed to develop a product (like an EOP) through increased participant interaction. The IPPW itself is the most well-known example, producing the Integrated Preparedness Plan. Seminars orient; Workshops produce.",
      diff: "normal",
      category: "exercise_types"
    },
    {
      id: "hseep_types_q11",
      q: "An EOC activation exercise testing command, control, and coordination functions — but with simulated field resources — is an example of which exercise type?",
      o: ["Drill", "Tabletop Exercise", "Functional Exercise", "Full-Scale Exercise"],
      a: 2,
      exp: "An EOC activation exercise with simulated resources is a classic Functional Exercise. FEs test capabilities at the management/command level (EOC, command post, headquarters), use a SimCell, and involve simulated (not real) resource movement. If resources actually deployed, it would be an FSE.",
      diff: "normal",
      category: "exercise_types"
    },
    {
      id: "hseep_types_q12",
      q: "What is a common mistake practitioners make regarding the term 'drill'?",
      o: [
        "Using it to describe any operations-based exercise, even when multiple agencies are involved",
        "Assuming drills require a SitMan",
        "Thinking drills cannot be conducted without a MSEL",
        "Believing drills always require senior leader participation"
      ],
      a: 0,
      exp: "Per HSEEP 2020: 'Drills are commonly misused — a drill tests only ONE function in ONE agency.' When people say 'we're doing a drill' but mean a multi-agency operational exercise, they are misusing the term. Precision in HSEEP terminology matters for proper exercise design.",
      diff: "normal",
      category: "exercise_types"
    },
    {
      id: "hseep_types_q13",
      q: "In the HSEEP progressive approach, which sequence correctly represents increasing complexity?",
      o: [
        "FSE → FE → Drill → TTX → Workshop → Seminar",
        "Seminar → Workshop → TTX → Drill → FE → FSE",
        "Drill → Seminar → TTX → Workshop → FE → FSE",
        "TTX → FSE → Seminar → Workshop → FE → Drill"
      ],
      a: 1,
      exp: "The HSEEP progressive approach moves from lower to higher complexity: Seminar → Workshop → TTX (discussion-based) → Drill → Functional Exercise → Full-Scale Exercise (operations-based). Note: The Game fits between TTX and Drill. This is a general guideline, not a strict requirement.",
      diff: "normal",
      category: "exercise_types"
    },
    {
      id: "hseep_types_q14",
      q: "Which exercise types require a SimCell and MSEL?",
      o: [
        "Seminar and Workshop",
        "Tabletop Exercise and Game",
        "Drill only",
        "Functional Exercise and Full-Scale Exercise"
      ],
      a: 3,
      exp: "SimCell and MSEL are used in operations-based exercises with sufficient complexity: Functional Exercises and Full-Scale Exercises. Drills sometimes use a basic MSEL but rarely a SimCell. Discussion-based exercises (Seminar, Workshop, TTX, Game) do not use SimCell or MSEL.",
      diff: "normal",
      category: "exercise_types"
    },
    {
      id: "hseep_types_q15",
      q: "A fire evacuation drill for a single building with one agency is an example of which exercise type?",
      o: ["Seminar", "Workshop", "Tabletop Exercise", "Drill"],
      a: 3,
      exp: "A fire evacuation drill for a single building/agency is a classic Drill — it tests a single function (evacuation) within a single organization. Other common drill examples include: communication/notification drills, EOC activation drills, mass notification system tests.",
      diff: "easy",
      category: "exercise_types"
    },
    {
      id: "hseep_types_q16",
      q: "Which exercise type has the longest typical planning lead time?",
      o: [
        "Seminar (days–weeks)",
        "Tabletop Exercise (4–8 weeks)",
        "Functional Exercise (8–16 weeks)",
        "Full-Scale Exercise (6–18 months)"
      ],
      a: 3,
      exp: "Full-Scale Exercises require 6–18 months of planning lead time due to their complexity: multiple venues, extensive staffing, actors/role players, props, equipment, and significant coordination across agencies. By contrast, a Seminar can be planned in days to weeks.",
      diff: "normal",
      category: "exercise_types"
    },
    {
      id: "hseep_types_q17",
      q: "Discussion-based exercises are focused primarily on which type of issues?",
      o: [
        "Operational and tactical issues",
        "Equipment testing and logistics",
        "Strategic and policy-oriented issues",
        "Physical fitness and rescue techniques"
      ],
      a: 2,
      exp: "Discussion-based exercises focus on STRATEGIC, POLICY-ORIENTED issues. They familiarize players with or develop new plans, policies, procedures, and agreements. They do not require real deployment of resources. Operations-based exercises focus on operational/tactical implementation.",
      diff: "normal",
      category: "exercise_types"
    },
    {
      id: "hseep_types_q18",
      q: "Which pair of exercise types share these characteristics: REAL-TIME response, actual or simulated resource movement, use of MSEL and control structure?",
      o: [
        "Seminar and Workshop",
        "TTX and Game",
        "Drill, Functional Exercise, and Full-Scale Exercise",
        "Only Full-Scale Exercise"
      ],
      a: 2,
      exp: "All three operations-based exercises (Drill, FE, FSE) share: real-time response, use of resources (minimal/simulated/real), and some form of control structure. The key difference is: Drills test one function in one agency; FEs use simulated resources; FSEs use real resources with multiple agencies.",
      diff: "normal",
      category: "exercise_types"
    }
  ],

  // ==========================================
  // CATEGORY 3: DESIGN & DEVELOPMENT — 18 questions
  // 5 planning meetings, SMART objectives, scenario
  // ==========================================
  design_development: [
    {
      id: "hseep_design_q01",
      q: "What are the 5 exercise planning meetings in the correct sequential order?",
      o: [
        "IPM → C&O → MPM → MSEL → FPM",
        "C&O → IPM → MPM → MSEL → FPM",
        "MPM → C&O → IPM → FPM → MSEL",
        "FPM → MPM → IPM → C&O → MSEL"
      ],
      a: 1,
      exp: "The 5 planning meetings in order are: ① Concept and Objectives (C&O) → ② Initial Planning Meeting (IPM) → ③ Midterm Planning Meeting (MPM) → ④ MSEL Meeting (operations-based only) → ⑤ Final Planning Meeting (FPM). Each meeting builds on the previous one.",
      diff: "normal",
      category: "design_development"
    },
    {
      id: "hseep_design_q02",
      q: "The Concept and Objectives (C&O) meeting is best described as:",
      o: [
        "The formal end of the exercise planning process",
        "The meeting where the MSEL is built in detail",
        "The formal beginning of the exercise planning process — used to identify scope, objectives, and form the planning team",
        "A meeting only required for Full-Scale Exercises"
      ],
      a: 2,
      exp: "The C&O Meeting is the formal BEGINNING of the exercise planning process. Its purpose is to identify scope, exercise objectives, and form the planning team. For less complex exercises, the C&O can be combined with the IPM.",
      diff: "normal",
      category: "design_development"
    },
    {
      id: "hseep_design_q03",
      q: "What is the primary outcome of the Initial Planning Meeting (IPM)?",
      o: [
        "Final approval of all exercise documents",
        "Clearly defined objectives and capabilities; initial capability targets; scenario variables; draft documentation",
        "Construction of the MSEL timeline",
        "Selection of actors and role players"
      ],
      a: 1,
      exp: "The IPM produces: clearly defined objectives and capabilities; initial capability targets and critical tasks; scenario variables (threat/scope/venue/conditions); a list of participating organizations; draft documentation (SitMan, ExPlan); and identification of source documents (plans, policies).",
      diff: "normal",
      category: "design_development"
    },
    {
      id: "hseep_design_q04",
      q: "The MSEL Meeting is required for which types of exercises?",
      o: [
        "All exercise types including Seminars and Workshops",
        "Operations-based exercises only (Drill, FE, FSE)",
        "Full-Scale Exercises only",
        "Discussion-based exercises only"
      ],
      a: 1,
      exp: "The MSEL Meeting is for OPERATIONS-BASED exercises only. The MSEL (Master Scenario Events List) is a chronological timeline of events and injects used to drive player actions in Drills, Functional Exercises, and Full-Scale Exercises. Discussion-based exercises use facilitator guides instead.",
      diff: "normal",
      category: "design_development"
    },
    {
      id: "hseep_design_q05",
      q: "What is the critical rule regarding the Final Planning Meeting (FPM)?",
      o: [
        "All participants must attend in person; virtual attendance is not allowed",
        "The FPM must occur exactly 30 days before the exercise",
        "No major changes to design, scope, or documentation should be made after or at the FPM",
        "Senior leaders must personally chair the FPM"
      ],
      a: 2,
      exp: "The FPM rule: 'No major changes to design, scope, or documentation after or at the FPM.' The FPM is the formal end of the planning process — all documents are finalized and approved. After the FPM, planners prepare supporting materials and disseminate documentation to all personnel.",
      diff: "normal",
      category: "design_development"
    },
    {
      id: "hseep_design_q06",
      q: "Which of the following correctly describes the SMART criteria for exercise objectives?",
      o: [
        "Strategic, Measurable, Achievable, Realistic, Timely",
        "Specific, Measurable, Achievable, Relevant, Time-bound",
        "Specific, Manageable, Actionable, Reasonable, Timed",
        "Systematic, Measurable, Accurate, Realistic, Tactical"
      ],
      a: 1,
      exp: "SMART stands for: Specific (clear, precise — who/what/where/when), Measurable (can be quantified — observable behavior), Achievable (realistic given constraints), Relevant (tied to a preparedness priority and core capability), Time-bound (has a specific timeframe). All 5 criteria must be met.",
      diff: "easy",
      category: "design_development"
    },
    {
      id: "hseep_design_q07",
      q: "Which of the following is an example of a properly written SMART objective?",
      o: [
        "Improve communication between agencies during the exercise",
        "Test the Emergency Operations Plan",
        "Demonstrate the ability of Central City staff to receive, develop, and disseminate a public alert using the city's notification system regarding a HAZMAT spill within 15 minutes of initial notification, in accordance with the Communications Annex of the EOP",
        "Practice evacuation procedures for the building"
      ],
      a: 2,
      exp: "The correct answer is SMART because: Specific (Central City staff, notification system, HAZMAT spill), Measurable (disseminate a public alert), Achievable (within exercise scope), Relevant (Emergency Operations Plan Communications Annex), Time-bound (within 15 minutes). The others are vague and cannot be evaluated.",
      diff: "normal",
      category: "design_development"
    },
    {
      id: "hseep_design_q08",
      q: "What are the 5 elements that define exercise scope?",
      o: [
        "Purpose, Objectives, Scenario, Documents, Resources",
        "Exercise Type, Participation Level, Location, Duration, Other Considerations",
        "Senior Leaders, Planning Team, SimCell, MSEL, EEGs",
        "Budget, Staffing, Technology, Props, Moulage"
      ],
      a: 1,
      exp: "The 5 scope elements are: ① Exercise Type (discussion- or operations-based) ② Participation Level (dates, number of personnel, resources) ③ Exercise Location (venue) ④ Exercise Duration (time needed to address objectives) ⑤ Other Considerations (additional activities, local sensitivities). Defining scope early keeps the exercise manageable.",
      diff: "normal",
      category: "design_development"
    },
    {
      id: "hseep_design_q09",
      q: "A scenario in HSEEP is best described as:",
      o: [
        "The list of questions used by facilitators during the exercise",
        "A model or outline of the simulated sequence of events that drives participant discussions or actions",
        "The document distributed to players containing their roles and responsibilities",
        "The formal written agreement outlining participant level of play"
      ],
      a: 1,
      exp: "A scenario is a model or outline of the simulated sequence of events that drives participant discussions or actions. Elements include: Conditions (allowing demonstration of objectives), Context/Narrative (comprehensive background), and Technical Details (date/time, damage parameters).",
      diff: "normal",
      category: "design_development"
    },
    {
      id: "hseep_design_q10",
      q: "What is the recommended number of SMART objectives for a Tabletop Exercise?",
      o: ["1–2", "3–5", "10–15", "As many as needed to cover all gaps"],
      a: 1,
      exp: "HSEEP best practices recommend 3–5 objectives for a TTX. Too many objectives = inability to evaluate all of them. More complex exercises (FSEs) may have more objectives, but they must all be measurable and achievable within the exercise. Quality over quantity.",
      diff: "normal",
      category: "design_development"
    },
    {
      id: "hseep_design_q11",
      q: "What documents should planners review BEFORE beginning exercise design?",
      o: [
        "Only the current Emergency Operations Plan",
        "Only grant requirements and previous exercise schedules",
        "Senior leader guidance, IPP, relevant AARs/IPs, THIRA, plans/policies/procedures, and grant requirements",
        "Only the HSEEP 2020 Doctrine manual"
      ],
      a: 2,
      exp: "Before design begins, planners review: senior leader intent/guidance; Integrated Preparedness Plan (IPP); relevant AARs/IPs from real-world incidents and exercises; program reports; THIRA or other threat/hazard assessments; Stakeholder Preparedness Review; organization plans/policies/procedures; and grant/cooperative agreement requirements.",
      diff: "normal",
      category: "design_development"
    },
    {
      id: "hseep_design_q12",
      q: "Which of the following is NOT a characteristic of a good exercise scenario?",
      o: [
        "Plausible, realistic, and challenging",
        "So complex that participants must look up procedures during the exercise",
        "Credible enough for participants to suspend disbelief",
        "Derived from THIRA or other threat/hazard assessments"
      ],
      a: 1,
      exp: "A good scenario should NOT be so complex that it loses focus on objectives. Best practices: plausible/realistic/challenging; credible enough to suspend disbelief; risk-based from THIRA; of sufficient magnitude to be realistic; facilitating accomplishment of objectives. Complexity should serve objectives, not overshadow them.",
      diff: "normal",
      category: "design_development"
    },
    {
      id: "hseep_design_q13",
      q: "What is the purpose of In-Progress Reviews (IPRs) between planning meetings?",
      o: [
        "To brief senior leaders on exercise status",
        "To ensure tasks and assignments are on track between formal planning meetings",
        "To substitute for planning meetings when participants cannot attend",
        "To review and approve the MSEL injects"
      ],
      a: 1,
      exp: "In-Progress Reviews (IPRs) occur BETWEEN exercise planning meetings to ensure tasks and assignments are on track. They are shorter, focused check-in meetings that maintain momentum and identify issues before the next formal planning meeting.",
      diff: "normal",
      category: "design_development"
    },
    {
      id: "hseep_design_q14",
      q: "Who is the 'Exercise Director' in an exercise planning team?",
      o: [
        "The person who manages the MSEL during exercise conduct",
        "The person providing strategic oversight and direction on the HSEEP Cycle for an individual exercise and providing opening statements",
        "The lead facilitator who runs the TTX discussion",
        "The logistics coordinator responsible for venue setup"
      ],
      a: 1,
      exp: "The Exercise Director provides strategic oversight and direction on the HSEEP Cycle for an individual exercise. They also provide opening statements during conduct. They are distinct from the Exercise Planning Team Lead, who manages the day-to-day planning team operations.",
      diff: "normal",
      category: "design_development"
    },
    {
      id: "hseep_design_q15",
      q: "The 'Extent of Play Agreement' is:",
      o: [
        "A document describing the exercise scenario",
        "A formal written agreement outlining the participating organization's level of play during the exercise",
        "A contract between jurisdictions defining financial responsibilities for the exercise",
        "The document that lists all MSEL injects and their timing"
      ],
      a: 1,
      exp: "The Extent of Play Agreement is a formal written agreement outlining the PARTICIPATING ORGANIZATION'S level of play during the exercise. It defines what activities they will actually perform versus what will be simulated — especially important in multi-agency exercises where different organizations may have different levels of participation.",
      diff: "normal",
      category: "design_development"
    },
    {
      id: "hseep_design_q16",
      q: "During scenario development, when should planners conduct a 'talk-through'?",
      o: [
        "Before the C&O meeting to give senior leaders a preview",
        "After finalizing the scenario — with the entire planning team — to identify problems before finalizing",
        "During the exercise to ensure players understand the scenario",
        "After the FPM to make final adjustments"
      ],
      a: 1,
      exp: "During scenario development, step 5 is to 'conduct a talk-through with the entire planning team to identify problems.' This review catches errors, gaps, and implausibilities before the scenario is finalized. It is done BEFORE finalization, not after.",
      diff: "hard",
      category: "design_development"
    },
    {
      id: "hseep_design_q17",
      q: "What does the 'Midterm Planning Meeting (MPM)' focus on?",
      o: [
        "Finalizing all exercise documents",
        "Developing scenario details and timeline; reviewing progress on documentation development",
        "Selecting participants and distributing invitations",
        "Conducting the Controller and Evaluator briefing"
      ],
      a: 1,
      exp: "The MPM focuses on developing scenario details and timeline, reviewing progress on documentation, and checking in on product development. Outcomes include: reviewed documentation; draft Facilitator Guide or C/E Handbook with EEGs; well-developed scenario with injects; agreement on exercise site; logistics requirements.",
      diff: "normal",
      category: "design_development"
    },
    {
      id: "hseep_design_q18",
      q: "Which planning meeting is described as 'the formal beginning of the development phase'?",
      o: [
        "Concept and Objectives (C&O) Meeting",
        "Initial Planning Meeting (IPM)",
        "Midterm Planning Meeting (MPM)",
        "Final Planning Meeting (FPM)"
      ],
      a: 1,
      exp: "The IPM is described as 'the formal beginning of the DEVELOPMENT phase' — distinct from the C&O Meeting which is the beginning of the PLANNING PROCESS overall. At the IPM, draft documentation begins and the planning team starts collaborative assignments.",
      diff: "hard",
      category: "design_development"
    }
  ],

  // ==========================================
  // CATEGORY 4: CONDUCT — 15 questions
  // Briefings, control structure, MSEL injects
  // ==========================================
  conduct: [
    {
      id: "hseep_conduct_q01",
      q: "For an operations-based exercise, how many types of pre-exercise briefings does HSEEP define, and who receives each?",
      o: [
        "2 types: Player Brief and Observer Brief",
        "3 types: Senior Leader, Controller/Evaluator, and Player Briefs",
        "5 types: Senior Leader, C/E, Actor, Player, and Observer Briefs",
        "1 type: A single all-hands briefing for everyone"
      ],
      a: 2,
      exp: "HSEEP defines 5 briefings before an operations-based exercise: ① Senior Leader Brief (senior officials — overview and alignment with their intent) ② Controller and Evaluator Brief (C/Es — scenario, control concept, responsibilities, EEG instructions) ③ Actor Brief (role players — safety, acting instructions) ④ Player Brief (all players — roles, parameters, safety) ⑤ Observer Brief (VIPs/observers — scenario, schedule, limitations).",
      diff: "normal",
      category: "conduct"
    },
    {
      id: "hseep_conduct_q02",
      q: "What is the role of the 'SimCell' (Simulation Cell) Controller during an operations-based exercise?",
      o: [
        "Manages the registration table and sign-in sheets",
        "Delivers scenario messages representing non-participating entities' actions to drive exercise play",
        "Conducts the player hotwash after the exercise",
        "Oversees safety and security throughout the exercise"
      ],
      a: 1,
      exp: "The SimCell Controller delivers scenario messages representing non-playing entities' actions, activities, and conversations. The SimCell 'simulates' the response of organizations not physically present, creating a realistic environment. For example, the SimCell might role-play a state emergency management agency receiving calls from the exercise EOC.",
      diff: "normal",
      category: "conduct"
    },
    {
      id: "hseep_conduct_q03",
      q: "What is the 'Player Hotwash'?",
      o: [
        "A formal post-exercise report submitted to senior leaders within 30 days",
        "An informal discussion immediately following exercise play where players discuss perceived strengths and areas for improvement",
        "A decontamination procedure for HAZMAT exercises",
        "A technical briefing by exercise evaluators about their findings"
      ],
      a: 1,
      exp: "The Player Hotwash is an informal discussion IMMEDIATELY following exercise play, led by a facilitator. Players discuss perceived strengths and areas for improvement. Results are documented and contributed to the AAR/IP. It captures initial impressions while memories are freshest.",
      diff: "normal",
      category: "conduct"
    },
    {
      id: "hseep_conduct_q04",
      q: "What are the three types of MSEL events?",
      o: [
        "Inject, Scenario, and Debrief",
        "Inject, Contingency Inject, and Expected Action",
        "Primary, Secondary, and Tertiary Events",
        "Phase 1, Phase 2, and Phase 3 Injects"
      ],
      a: 1,
      exp: "The 3 MSEL event types: ① Inject — a scripted event introduced by control staff to build the exercise environment and drive play ② Contingency Inject — introduced when a key expected action did NOT occur, providing another opportunity to meet objectives ③ Expected Action — an anticipated action to be taken by a player (what the player SHOULD do in response to an inject).",
      diff: "normal",
      category: "conduct"
    },
    {
      id: "hseep_conduct_q05",
      q: "What is a 'Contingency Inject' and when is it used?",
      o: [
        "A backup scenario used if the original scenario becomes unrealistic",
        "A MSEL event introduced when a key player expected action did not occur as planned, providing another opportunity to meet objectives",
        "An emergency inject used when a real-world emergency occurs during the exercise",
        "A surprise element added to increase difficulty for experienced participants"
      ],
      a: 1,
      exp: "A Contingency Inject is a MSEL event introduced WHEN A KEY PLAYER EXPECTED ACTION DID NOT OCCUR AS PLANNED. It provides an additional opportunity to meet objectives. For example, if players don't request mutual aid when expected, a contingency inject might directly prompt them with information that should trigger the request.",
      diff: "normal",
      category: "conduct"
    },
    {
      id: "hseep_conduct_q06",
      q: "What is the 'Lead Controller's' primary responsibility during an operations-based exercise?",
      o: [
        "Running the facilitator-led discussion with players",
        "Monitoring exercise progression, communicating exercise activities across all venues, and managing control staff",
        "Developing the MSEL and approving injects",
        "Conducting the post-exercise debrief for evaluators"
      ],
      a: 1,
      exp: "The Lead Controller monitors exercise progression, communicates exercise activities across all venues, and manages control staff. The Lead Controller is distinct from the MSEL Manager (who manages inject delivery timing) and the Lead Evaluator (who oversees data collection).",
      diff: "normal",
      category: "conduct"
    },
    {
      id: "hseep_conduct_q07",
      q: "For a discussion-based exercise, which position is responsible for keeping discussions on track and within time limits?",
      o: [
        "Lead Evaluator",
        "Exercise Director",
        "Lead Facilitator/Presenter",
        "Resource Lead"
      ],
      a: 2,
      exp: "The Lead Facilitator/Presenter oversees all facilitation in discussion-based exercises. Good facilitator skills include: keeping side conversations minimal; keeping discussions on track and within time limits; controlling group dynamics; speaking competently without dominating; possessing functional expertise; and summarizing player discussions.",
      diff: "normal",
      category: "conduct"
    },
    {
      id: "hseep_conduct_q08",
      q: "How early should exercise staff arrive before StartEx?",
      o: [
        "At exactly the StartEx time",
        "15 minutes before StartEx",
        "Several hours before StartEx for setup, registration, and rehearsal",
        "The day before the exercise"
      ],
      a: 2,
      exp: "HSEEP guidance specifies arriving 'several hours before StartEx' for discussion-based exercises (and potentially days in advance for operations-based exercises). This allows time for: room configuration, A/V setup and testing, materials distribution, registration table setup, and rehearsal of structure, roles, and timing.",
      diff: "normal",
      category: "conduct"
    },
    {
      id: "hseep_conduct_q09",
      q: "What is 'StartEx' in the context of exercise conduct?",
      o: [
        "The opening remarks by the Exercise Director",
        "The official start of the exercise",
        "The first scenario inject delivered to players",
        "The time when players first receive their SitMan"
      ],
      a: 1,
      exp: "StartEx is the official start of the exercise — the moment when exercise play formally begins. Correspondingly, EndEx is the official end of the exercise. These terms mark the boundaries of the actual exercise play period, distinct from pre-exercise briefings and post-exercise hotwash.",
      diff: "easy",
      category: "conduct"
    },
    {
      id: "hseep_conduct_q10",
      q: "What is the 'Ground Truth Advisor's' role in an operations-based exercise?",
      o: [
        "Provides ground-level safety monitoring for the exercise site",
        "Ensures scenario details remain consistent during exercise conduct",
        "Manages the logistics of the exercise site, including parking and traffic",
        "Delivers injects to players from the SimCell"
      ],
      a: 1,
      exp: "The Ground Truth Advisor ensures scenario details remain CONSISTENT during exercise conduct. This prevents contradictions in the scenario as different controllers interact with players. 'Ground Truth' is also a document that provides detailed scenario elements (maps, layouts, resources) that must remain consistent.",
      diff: "hard",
      category: "conduct"
    },
    {
      id: "hseep_conduct_q11",
      q: "Who receives the ExPlan (Exercise Plan) during an operations-based exercise?",
      o: [
        "Controllers and Evaluators only",
        "Players and Observers",
        "Senior Leaders only",
        "Everyone including the SimCell staff"
      ],
      a: 1,
      exp: "The ExPlan is distributed to PLAYERS and OBSERVERS. It provides general information: exercise objectives, scope, background, schedule, and roles. Importantly, the ExPlan does NOT include scenario details (those go in the C/E Handbook and MSEL, which are for controllers and evaluators only).",
      diff: "normal",
      category: "conduct"
    },
    {
      id: "hseep_conduct_q12",
      q: "What should exercise staff do if they observe a problem during exercise play?",
      o: [
        "Immediately stop the exercise to fix the problem",
        "Interrupt the players to correct their actions in real time",
        "Note the problem for the AAR without stopping the exercise; only stop for real safety issues",
        "Announce the problem over the public address system"
      ],
      a: 2,
      exp: "HSEEP best practice: 'Don't stop to fix problems mid-exercise — note them for the AAR; stopping disrupts learning.' The only exception is a real-world safety emergency or when a code word is used to pause/stop the exercise for safety. Exercise problems are learning opportunities, not failures to fix in real time.",
      diff: "normal",
      category: "conduct"
    },
    {
      id: "hseep_conduct_q13",
      q: "What is a 'no-fault environment' in exercise conduct?",
      o: [
        "An environment where no technical faults in equipment are allowed",
        "An atmosphere emphasizing that the exercise is about improving systems and learning, not blaming individuals",
        "A guarantee that no participant will lose their job as a result of poor performance",
        "A legal protection for exercise planners against liability"
      ],
      a: 1,
      exp: "A 'no-fault environment' means the exercise is about LEARNING, not blame. HSEEP emphasizes: 'Exercises are not tests that people pass or fail; they are learning opportunities.' Facilitators must explicitly state this at the start. This encourages honest discussion and creative problem-solving without fear of judgment.",
      diff: "easy",
      category: "conduct"
    },
    {
      id: "hseep_conduct_q14",
      q: "What is the 'Debrief' activity that occurs immediately after exercise play?",
      o: [
        "A player-led discussion of what went right and wrong",
        "A controllers, facilitators, and evaluators discussion of observations for a shared understanding, where evaluators complete any outstanding EEG notes",
        "A press conference for media and observers",
        "A senior leader presentation of preliminary findings"
      ],
      a: 1,
      exp: "The Debrief (distinct from the Player Hotwash) is for controllers, facilitators, and evaluators. They discuss observations for shared understanding, evaluators complete any outstanding EEG notes, and teams collect attendance records, Participant Feedback Forms, and debrief notes. This is an internal control/evaluator activity.",
      diff: "normal",
      category: "conduct"
    },
    {
      id: "hseep_conduct_q15",
      q: "Which briefing includes detailed MSEL event descriptions, EEG instructions, and control structure responsibilities?",
      o: [
        "Player Brief",
        "Actor Brief",
        "Observer Brief",
        "Controller and Evaluator Brief"
      ],
      a: 3,
      exp: "The Controller and Evaluator (C/E) Brief provides: exercise overview; location/area; schedule of events; scenario; control concept; specific C/E responsibilities; and EEG instructions. This detailed briefing ensures controllers and evaluators know exactly what to expect and how to manage their responsibilities.",
      diff: "normal",
      category: "conduct"
    }
  ],

  // ==========================================
  // CATEGORY 5: EVALUATION — 16 questions
  // EEG, P-S-M-U rating, data collection
  // ==========================================
  evaluation: [
    {
      id: "hseep_eval_q01",
      q: "What does EEG stand for, and what is its primary purpose?",
      o: [
        "Exercise Evaluation Guide — provides evaluators with a standardized tool to guide data collection and capture performance results",
        "Emergency Exercise Guidelines — provides planners with a checklist for exercise design",
        "Exercise Event Generator — automatically creates MSEL injects based on objectives",
        "Evaluator Experience Guide — teaches evaluators how to conduct post-exercise interviews"
      ],
      a: 0,
      exp: "EEG = Exercise Evaluation Guide. It provides evaluators with a STANDARDIZED tool to guide data collection and capture performance results. EEGs align to exercise objectives and capabilities, and list relevant capability targets and critical tasks. Each jurisdiction develops its OWN EEGs based on their unique plans and procedures.",
      diff: "easy",
      category: "evaluation"
    },
    {
      id: "hseep_eval_q02",
      q: "The HSEEP performance rating scale uses which four ratings?",
      o: [
        "Excellent, Good, Fair, Poor",
        "Pass, Near-Pass, Near-Fail, Fail",
        "P (Performed without Challenges), S (Performed with Some Challenges), M (Performed with Major Challenges), U (Unable to be Performed)",
        "Red, Yellow, Green, Black"
      ],
      a: 2,
      exp: "The P-S-M-U Rating Scale: P = Performed without Challenges (objective achieved, no negative impact); S = Performed with Some Challenges (objective achieved, but some challenges); M = Performed with Major Challenges (partially achieved, notable deficiencies); U = Unable to be Performed (capability not demonstrated).",
      diff: "normal",
      category: "evaluation"
    },
    {
      id: "hseep_eval_q03",
      q: "An evaluator observes that an EOC team successfully activated and issued a public alert within the required 15-minute window, but their initial notification to field units was delayed by 5 minutes due to a communications procedure issue. What P-S-M-U rating is MOST appropriate?",
      o: [
        "P — Performed without Challenges",
        "S — Performed with Some Challenges",
        "M — Performed with Major Challenges",
        "U — Unable to be Performed"
      ],
      a: 1,
      exp: "Rating 'S — Performed with Some Challenges' is most appropriate here. The objective (issuing a public alert within 15 minutes) was achieved — but some challenges were observed (delayed notification to field units due to a procedure issue). The delay negatively impacted other activities, fitting the 'S' criteria.",
      diff: "normal",
      category: "evaluation"
    },
    {
      id: "hseep_eval_q04",
      q: "A 'Capability Target' in an EEG is composed of which three elements?",
      o: [
        "Who, What, When",
        "Critical Task + Impact + Timeframe",
        "Objective + Rating + Recommendation",
        "Agency + POC + Completion Date"
      ],
      a: 1,
      exp: "A Capability Target is a performance threshold composed of: Critical Task (the specific action) + Impact (the consequence of the action) + Timeframe (within what time frame). Example: 'Within 15 minutes of notification [timeframe], contain HAZMAT release from 2 sites [critical task] achieving containment [impact].'",
      diff: "normal",
      category: "evaluation"
    },
    {
      id: "hseep_eval_q05",
      q: "When does evaluation planning begin in the HSEEP exercise cycle?",
      o: [
        "After the exercise — when evaluators collect their notes",
        "At the Final Planning Meeting (FPM)",
        "During the Initial Planning Meeting (IPM) — early identification ensures design and conduct best support evaluation",
        "At the Midterm Planning Meeting (MPM)"
      ],
      a: 2,
      exp: "Evaluation planning begins during the INITIAL PLANNING MEETING (IPM). Early identification ensures the design and conduct of the exercise best support effective evaluation. This allows EEGs to be developed in parallel with the scenario and MSEL, so they all align.",
      diff: "normal",
      category: "evaluation"
    },
    {
      id: "hseep_eval_q06",
      q: "Which of the following is NOT a data collection method listed in HSEEP?",
      o: [
        "Direct Observation",
        "Polygraph testing of participants",
        "Documentation Review",
        "Feedback Forms and Surveys"
      ],
      a: 1,
      exp: "HSEEP data collection methods are: Direct Observation (real-time), Documentation Review (authoritative record), Feedback Forms and Surveys (easy to administer), Interviews (individual or group — in-depth), and Hotwash and Debrief (group discussion). Polygraph testing has no role in exercise evaluation.",
      diff: "easy",
      category: "evaluation"
    },
    {
      id: "hseep_eval_q07",
      q: "What is the purpose of 'Root Cause Analysis' in exercise evaluation?",
      o: [
        "To identify which individual made the most mistakes during the exercise",
        "To identify the most basic causal factor for why an expected action did not occur",
        "To calculate the total cost of corrective actions needed",
        "To compare this exercise's results with national benchmark scores"
      ],
      a: 1,
      exp: "Root Cause Analysis focuses on identifying the most basic CAUSAL FACTOR for why an expected action did not occur. It asks: Why did this happen? What contributed to this? Understanding root causes — not just symptoms — leads to effective corrective actions that actually fix the underlying problem.",
      diff: "normal",
      category: "evaluation"
    },
    {
      id: "hseep_eval_q08",
      q: "In 'Event Reconstruction' data analysis, what is the analyst NOT concerned with at this stage?",
      o: [
        "Who was involved in the event",
        "What happened during the event",
        "When the event occurred",
        "Why the event occurred"
      ],
      a: 3,
      exp: "Event Reconstruction consolidates information from multiple sources into a single, fact-based account. For each decision, action, or communication, it identifies: WHO, WHAT, WHEN, WHERE, and HOW. Importantly, 'WHY' is NOT addressed during event reconstruction — 'why' is reserved for Root Cause Analysis.",
      diff: "hard",
      category: "evaluation"
    },
    {
      id: "hseep_eval_q09",
      q: "What is the purpose of 'Trend Analysis' in exercise evaluation?",
      o: [
        "To calculate statistical trends in participant test scores",
        "To identify patterns in strengths, areas for improvement, and major changes over time across multiple exercises",
        "To track weather trends that might affect exercise scheduling",
        "To analyze trends in exercise budget expenditures"
      ],
      a: 1,
      exp: "Trend Analysis identifies PATTERNS in strengths, areas for improvement, and major changes over time. It is especially useful for multi-exercise programs — if the same issue appears in 3 consecutive exercises, Trend Analysis identifies this recurring problem, guiding planning and training priorities.",
      diff: "normal",
      category: "evaluation"
    },
    {
      id: "hseep_eval_q10",
      q: "What is the After-Action Meeting (AAM)?",
      o: [
        "The player hotwash conducted immediately after exercise play",
        "A forum to review the draft AAR/IP and reach final consensus on findings and corrective actions",
        "A press conference where exercise findings are presented to the public",
        "A meeting to plan the next exercise in the multi-year program"
      ],
      a: 1,
      exp: "The After-Action Meeting (AAM) is a forum to: review and revise the draft AAR/IP; discuss exercise results; identify areas for improvement; reach FINAL CONSENSUS on corrective actions. Outcomes include: finalized AAR/IP consensus; agreement on corrective actions, deadlines, and responsible stakeholders.",
      diff: "normal",
      category: "evaluation"
    },
    {
      id: "hseep_eval_q11",
      q: "Which statement about EEGs is correct?",
      o: [
        "FEMA provides a single, universal EEG that all jurisdictions use",
        "EEGs are developed specific to each jurisdiction because each has unique capability targets and critical tasks based on their own plans and procedures",
        "EEGs are only required for Full-Scale Exercises",
        "EEGs are completed by players after the exercise to rate their own performance"
      ],
      a: 1,
      exp: "HSEEP states: 'Because each jurisdiction has unique targets and critical tasks, EEGs are developed specific to their plans, policies, procedures, and protocols.' FEMA provides EEG templates, but each jurisdiction must customize them based on their own objectives, plans, and local context.",
      diff: "normal",
      category: "evaluation"
    },
    {
      id: "hseep_eval_q12",
      q: "What are the four steps of effective evaluation in the HSEEP framework?",
      o: [
        "Plan, Observe, Analyze, Report",
        "Design, Conduct, Evaluate, Improve",
        "Collect, Sort, Rate, Publish",
        "Train, Test, Score, Certify"
      ],
      a: 0,
      exp: "Effective evaluation includes 4 steps: ① Planning for exercise evaluation ② Observing the exercise and collecting data ③ Analyzing collected data ④ Reporting outcomes in an After-Action Report (AAR). These 4 steps connect the exercise to improvement planning and the Integrated Preparedness Cycle.",
      diff: "normal",
      category: "evaluation"
    },
    {
      id: "hseep_eval_q13",
      q: "What makes an AAR observation a 'Strength' vs. an 'Area for Improvement'?",
      o: [
        "Strengths are always listed first; Areas for Improvement are listed second",
        "Strengths are actions that went exceptionally well with positive impact; Areas for Improvement are outcomes that did not meet expectations with negative impact",
        "Strengths require corrective actions; Areas for Improvement do not",
        "Strengths are identified by players; Areas for Improvement are identified by evaluators"
      ],
      a: 1,
      exp: "Strengths: actions that went exceptionally well; had a positive impact on desired outcomes; yielded better-than-expected results. Areas for Improvement: outcomes that did not meet expectations; had negative impact on desired outcomes; factors that contributed to inability to meet critical tasks or targets.",
      diff: "normal",
      category: "evaluation"
    },
    {
      id: "hseep_eval_q14",
      q: "The AAR Executive Summary should contain:",
      o: [
        "Full details of all observations and corrective actions",
        "The MSEL timeline and all injected events",
        "3 major strengths, 3 primary areas for improvement, overall assessment, and future exercise recommendations",
        "Personnel performance ratings for all exercise participants"
      ],
      a: 2,
      exp: "The AAR Executive Summary should contain: 3 MAJOR STRENGTHS, 3 PRIMARY AREAS FOR IMPROVEMENT, an overall assessment of exercise success, and recommendations for future exercises. It is a high-level summary for senior leaders who may not read the full AAR.",
      diff: "normal",
      category: "evaluation"
    },
    {
      id: "hseep_eval_q15",
      q: "What is 'Data Synthesis' in exercise evaluation?",
      o: [
        "Creating computer-generated data visualizations of exercise results",
        "Compiling and reviewing data from multiple sources to identify potential issues and examine the strength of evidence",
        "Distributing data from the AAR to all participating agencies",
        "Synthesizing all MSEL injects into a single narrative"
      ],
      a: 1,
      exp: "Data Synthesis is one of four analysis techniques. It involves: compiling and reviewing data from multiple sources; identifying potential issues requiring resolution; and examining the strength of evidence for each issue. Combined with Event Reconstruction, Trend Analysis, and Root Cause Analysis, it forms the evaluation analytical framework.",
      diff: "normal",
      category: "evaluation"
    },
    {
      id: "hseep_eval_q16",
      q: "Rating 'U — Unable to be Performed' on the P-S-M-U scale means:",
      o: [
        "The capability was partially demonstrated with some deficiencies",
        "The evaluator was unable to observe the activity due to positioning issues",
        "The targets and critical tasks were NOT performed in a manner that achieved the objective; the capability was not demonstrated",
        "The exercise was stopped before the capability could be tested"
      ],
      a: 2,
      exp: "U = Unable to be Performed: The targets and critical tasks were NOT performed in a manner that achieved the objective(s). The capability was NOT demonstrated. This is the most critical rating — it indicates a significant capability gap that requires immediate corrective action.",
      diff: "normal",
      category: "evaluation"
    }
  ],

  // ==========================================
  // CATEGORY 6: IMPROVEMENT PLANNING — 15 questions
  // AAR/IP, corrective actions, tracking
  // ==========================================
  improvement: [
    {
      id: "hseep_improve_q01",
      q: "Within how many days should an AAR/IP typically be completed after an exercise?",
      o: ["30 days", "60 days", "90 days", "180 days"],
      a: 2,
      exp: "The AAR/IP should be completed within 90 DAYS of the exercise. Waiting too long causes people to forget details and corrective actions are delayed. The 90-day standard ensures findings remain actionable and relevant.",
      diff: "normal",
      category: "improvement"
    },
    {
      id: "hseep_improve_q02",
      q: "What is the primary goal of Improvement Planning in HSEEP?",
      o: [
        "To document exercise results for grant reporting purposes",
        "To turn areas for improvement into concrete, measurable corrective actions that strengthen capabilities",
        "To evaluate individual performance and identify personnel changes",
        "To plan the next exercise in the multi-year program"
      ],
      a: 1,
      exp: "Improvement Planning turns areas for improvement from exercises into CONCRETE, MEASURABLE CORRECTIVE ACTIONS that strengthen capabilities. It transitions the HSEEP Cycle back into the Integrated Preparedness Cycle (POETE), ensuring exercises lead to real improvements.",
      diff: "easy",
      category: "improvement"
    },
    {
      id: "hseep_improve_q03",
      q: "Which of the following is an example of a SMART corrective action?",
      o: [
        "Improve inter-agency communications",
        "Train all staff on EOC procedures",
        "Central City will hold a seminar addressing role/responsibility confusion among HAZMAT-responding organizations, with planning completed by September 1 (90 days) and all players identified by September 15 (105 days)",
        "Fix the communications problems identified in the exercise"
      ],
      a: 2,
      exp: "The correct answer is SMART: Specific (Central City, HAZMAT organizations, role/responsibility confusion), Measurable (seminar conducted, players identified), Achievable (seminar is a feasible action), Relevant (directly addresses the identified confusion), Time-bound (deadlines of 90 and 105 days). The other options are vague and unmeasurable.",
      diff: "normal",
      category: "improvement"
    },
    {
      id: "hseep_improve_q04",
      q: "The Improvement Plan (IP) matrix includes all of the following EXCEPT:",
      o: [
        "Capability and Observation Title",
        "Primary Responsible Agency and Agency POC",
        "Start Date and Completion Date",
        "Individual performance ratings for named responders"
      ],
      a: 3,
      exp: "The IP matrix columns include: Capability, Observation Title, Recommendation, Corrective Action Description, Capability Element, Primary Responsible Agency, Agency POC, Start Date, Completion Date. It does NOT include individual performance ratings — HSEEP exercises are conducted in a no-fault environment, not for individual evaluation.",
      diff: "normal",
      category: "improvement"
    },
    {
      id: "hseep_improve_q05",
      q: "What is the 'Capability Element' column in the IP matrix?",
      o: [
        "The specific core capability being evaluated",
        "Which element of POETE is addressed: Plan, Organize/Equip, Train, Exercise, or Evaluate/Improve",
        "The capability target as stated in the EEG",
        "The technical specifications of the equipment involved"
      ],
      a: 1,
      exp: "The Capability Element identifies which element of the POETE Integrated Preparedness Cycle is addressed by the corrective action: Plan (update plans/policies/procedures), Organize/Equip (organizational structure or equipment changes), Train (provide training), Exercise (conduct additional exercises), or Evaluate/Improve (continuous improvement processes).",
      diff: "hard",
      category: "improvement"
    },
    {
      id: "hseep_improve_q06",
      q: "What tool does FEMA provide for tracking corrective actions from exercise AARs?",
      o: [
        "The MSEL Builder in PrepToolkit",
        "The National Exercise Schedule (NEXS) System",
        "The Corrective Action Program (CAP) System in PrepToolkit",
        "The EEG Builder in PrepToolkit"
      ],
      a: 2,
      exp: "FEMA's Corrective Action Program (CAP) System, accessed through PrepToolkit (preptoolkit.fema.gov), is used to track corrective actions through to completion. Corrective actions captured in the AAR/IP should be tracked and reported on until completion.",
      diff: "normal",
      category: "improvement"
    },
    {
      id: "hseep_improve_q07",
      q: "What should be validated at the start of the next exercise cycle, regarding the previous exercise's corrective actions?",
      o: [
        "That the corrective actions were documented in the AAR",
        "That stakeholders successfully IMPLEMENTED the previous corrective actions",
        "That the corrective actions were reviewed by senior leaders",
        "That the corrective actions met SMART criteria"
      ],
      a: 1,
      exp: "Stakeholders should VALIDATE that previous corrective actions were successfully IMPLEMENTED — not just documented. This is a critical step to ensure exercises actually improve preparedness. If corrective actions are not implemented, the same issues will appear in the next exercise.",
      diff: "normal",
      category: "improvement"
    },
    {
      id: "hseep_improve_q08",
      q: "The 'guiding questions' for developing corrective actions focus on potential changes to all of the following EXCEPT:",
      o: [
        "Plans and procedures",
        "Organizational structures",
        "Individual performance bonuses and penalties",
        "Equipment or resources"
      ],
      a: 2,
      exp: "Guiding questions for corrective actions ask about changes to: plans and procedures, organizational structures, management processes, equipment or resources, and training. Individual performance bonuses/penalties are never part of HSEEP improvement planning — exercises are no-fault learning events.",
      diff: "normal",
      category: "improvement"
    },
    {
      id: "hseep_improve_q09",
      q: "How does Improvement Planning connect back to the larger preparedness system?",
      o: [
        "It only feeds into the next exercise of the same type",
        "Corrective actions and updated priorities feed back into the Integrated Preparedness Cycle, informing future IPPW sessions and IPP updates",
        "Improvement Planning is a standalone process separate from other preparedness activities",
        "It only connects to federal-level grant reporting"
      ],
      a: 1,
      exp: "Improvement Planning transitions the HSEEP Cycle BACK into the Integrated Preparedness Cycle. Corrective actions lead to changes in Plans/Policies/Procedures, Training, Equipment, and Staffing. Updated preparedness priorities then inform the next IPPW and IPP — restarting the cycle with improved capabilities.",
      diff: "normal",
      category: "improvement"
    },
    {
      id: "hseep_improve_q10",
      q: "Which of the three continuous improvement principles focuses on using a shared terminology and process across all mission areas?",
      o: [
        "Supporting Preparedness",
        "A Consistent Approach",
        "Effective Issue Resolution and Information Sharing",
        "Whole Community Integration"
      ],
      a: 1,
      exp: "'A Consistent Approach' employs consistent methodology for continuous improvement across all applicable mission areas (Prevention, Protection, Mitigation, Response, Recovery). This enables shared understanding of terminology, functions, processes, and tools — and fosters improvement-related interoperability.",
      diff: "hard",
      category: "improvement"
    },
    {
      id: "hseep_improve_q11",
      q: "What is a common mistake regarding corrective action assignment?",
      o: [
        "Assigning too many corrective actions to one agency",
        "Assigning corrective actions without real owners or real deadlines, causing them to never be completed",
        "Making corrective actions too specific and measurable",
        "Completing corrective actions too quickly"
      ],
      a: 1,
      exp: "A critical common mistake: 'Corrective actions without accountability are never completed.' HSEEP best practice: 'Assign real owners with real deadlines.' Without a named Point of Contact (POC) and a specific completion date, corrective actions languish — and the same problems appear in the next exercise.",
      diff: "normal",
      category: "improvement"
    },
    {
      id: "hseep_improve_q12",
      q: "What does 'Effective Issue Resolution and Information Sharing' as a continuous improvement principle mean?",
      o: [
        "Issues must be escalated to the highest level of government for resolution",
        "All issues must be published publicly for community awareness",
        "Complete continuous improvement action items at the lowest level possible and facilitate sharing of strengths and areas for improvement",
        "Issues must be resolved within 30 days without exception"
      ],
      a: 2,
      exp: "This principle means: ① Complete continuous improvement action items at the LOWEST LEVEL POSSIBLE (subsidiarity) ② Facilitate SHARING of strengths and areas for improvement with other jurisdictions/organizations. DHS's Lessons Learned Information Sharing (LLIS) is a resource for sharing exercise findings nationally.",
      diff: "hard",
      category: "improvement"
    },
    {
      id: "hseep_improve_q13",
      q: "The AAR/IP improvement loop follows which sequence?",
      o: [
        "Exercise → AAR/IP → Corrective Actions → Plans/Training/Equipment Changes → Next Exercise",
        "Plans → Exercise → Pass/Fail → Certification → Next Plans",
        "IPPW → AAR → Seminar → Drill → FSE → Repeat",
        "Senior Leaders → IPP → Objectives → Exercise → Forget"
      ],
      a: 0,
      exp: "The improvement loop: Exercise identifies strengths/areas for improvement → Root Cause Analysis → Draft AAR/IP → AAM → Final AAR/IP → SMART Corrective Actions assigned with POCs/deadlines → Tracked through CAP System → Changes to Plans/Policies/Training/Equipment → Updated priorities inform next IPPW → New exercise cycle.",
      diff: "normal",
      category: "improvement"
    },
    {
      id: "hseep_improve_q14",
      q: "Which component of the AAR/IP specifically analyzes what happened for each capability evaluated and provides recommendations?",
      o: [
        "Executive Summary",
        "Exercise Overview",
        "Analysis of Capabilities section",
        "Conclusion"
      ],
      a: 2,
      exp: "The 'Analysis of Capabilities' section is the core of the AAR. For each capability evaluated, it provides: Observation Title, Reference (plans/SOPs), Analysis (what happened, consequences — what was supposed to happen vs. what did happen), and Recommendations for improvement.",
      diff: "normal",
      category: "improvement"
    },
    {
      id: "hseep_improve_q15",
      q: "When prioritizing corrective actions after an exercise, what should guide the prioritization?",
      o: [
        "Alphabetical order of the capabilities involved",
        "Which corrective actions are cheapest to implement",
        "Which corrective actions are easiest to complete",
        "The most critical issues with the greatest impact on preparedness"
      ],
      a: 3,
      exp: "HSEEP best practice: 'Prioritize corrective actions — don't try to fix everything at once; focus on the most critical issues.' Prioritization should be based on impact on preparedness — which gaps pose the greatest risk to mission success. Cost and ease of implementation are secondary considerations.",
      diff: "normal",
      category: "improvement"
    }
  ],

  // ==========================================
  // CATEGORY 7: DOCUMENTS — 16 questions
  // ExPlan, SitMan, MSEL, EEG, AAR/IP
  // ==========================================
  documents: [
    {
      id: "hseep_docs_q01",
      q: "The Situation Manual (SitMan) is the primary participant document for which type of exercise?",
      o: [
        "Operations-based exercises (Drill, FE, FSE)",
        "Discussion-based exercises (Seminar, Workshop, TTX, Game)",
        "Full-Scale Exercises only",
        "Functional Exercises only"
      ],
      a: 1,
      exp: "The SitMan is the primary participant reference for DISCUSSION-BASED exercises. It provides background information, exercise scope, schedule, objectives, and the scenario narrative that drives discussions. Operations-based exercises use the ExPlan instead (which does NOT include scenario details).",
      diff: "normal",
      category: "documents"
    },
    {
      id: "hseep_docs_q02",
      q: "The Exercise Plan (ExPlan) does NOT include which of the following?",
      o: [
        "Exercise objectives and scope",
        "The detailed scenario and MSEL injects",
        "Roles and responsibilities for participants",
        "Administration and logistics information"
      ],
      a: 1,
      exp: "The ExPlan does NOT include detailed scenario information or MSEL injects — those go in the C/E Handbook (for controllers and evaluators only). The ExPlan contains: general exercise information, objectives, scope, background, schedule, roles, and logistics. This prevents players from having advance knowledge of what to expect.",
      diff: "normal",
      category: "documents"
    },
    {
      id: "hseep_docs_q03",
      q: "Which MSEL columns are REQUIRED for every event entry?",
      o: [
        "Event #, Date, and Cost",
        "Event #, Time/Phase, Event Type, Inject/Description, Originator, Target Player, Expected Player Action, Objective(s)",
        "Inject, Actor, Costume, and Set Design",
        "Phase, Rating, and Post-Exercise Notes"
      ],
      a: 1,
      exp: "The MSEL columns include: Event # (sequential), Time/Phase (when), Event Type (Inject/Expected Action/Contingency), Inject/Description (what SimCell delivers), Originator (who delivers), Target Player/Position (who receives), Expected Player Action (what player should do), Objective(s) (which objective this supports), and Notes.",
      diff: "normal",
      category: "documents"
    },
    {
      id: "hseep_docs_q04",
      q: "The Controller/Evaluator (C/E) Handbook is distributed to which group?",
      o: [
        "All players and observers",
        "Senior leaders only",
        "Controllers and evaluators only",
        "All participants including players"
      ],
      a: 2,
      exp: "The C/E Handbook is for CONTROLLERS AND EVALUATORS only. It provides specific exercise information and guidance including: the MSEL, controller instructions, evaluator guidance, and EEGs. Players receive the ExPlan or SitMan, NOT the C/E Handbook — keeping scenario details confidential.",
      diff: "normal",
      category: "documents"
    },
    {
      id: "hseep_docs_q05",
      q: "What does the 'Ground Truth' document provide in an operations-based exercise?",
      o: [
        "The legal authority for conducting the exercise",
        "Detailed elements of the scenario that must remain consistent: maps, facility layouts, resource lists",
        "A real-time account of what is happening in the exercise",
        "The official record of who attended the exercise"
      ],
      a: 1,
      exp: "Ground Truth provides detailed elements of the scenario that must remain CONSISTENT during development and conduct to maintain realism. It includes maps, facility layouts, and resource lists. The Ground Truth Advisor ensures these details don't contradict each other as different controllers interact with players.",
      diff: "normal",
      category: "documents"
    },
    {
      id: "hseep_docs_q06",
      q: "The Participant Feedback Form (PFF) serves what purpose?",
      o: [
        "A legal release form participants sign before the exercise",
        "A mechanism to collect input from all participants on strengths, areas for improvement, and exercise conduct quality",
        "A form evaluators use to rate individual participant performance",
        "An attendance record for grant compliance"
      ],
      a: 1,
      exp: "The PFF collects input from ALL PARTICIPANTS on: strengths they observed, areas for improvement they perceived, and quality of exercise conduct (logistics, scenario, facilitation). PFF data contributes to AAR/IP development alongside EEG observations — combining evaluator and participant perspectives.",
      diff: "normal",
      category: "documents"
    },
    {
      id: "hseep_docs_q07",
      q: "Which document would a new participant in a TTX use as their primary reference throughout the exercise?",
      o: [
        "The ExPlan",
        "The C/E Handbook",
        "The Situation Manual (SitMan)",
        "The MSEL"
      ],
      a: 2,
      exp: "In a TTX (a discussion-based exercise), all participants receive and use the SITUATION MANUAL (SitMan) as their primary reference. The SitMan contains the scenario background, modules, discussion questions, and exercise information they need throughout the discussion.",
      diff: "easy",
      category: "documents"
    },
    {
      id: "hseep_docs_q08",
      q: "What are the four key sections of a SitMan?",
      o: [
        "Introduction, Methods, Results, Discussion",
        "Exercise Overview; General Information; Modules (1, 2, 3...); Appendices",
        "Scenario, MSEL, EEGs, AAR/IP",
        "Purpose, Scope, Objectives, Timeline"
      ],
      a: 1,
      exp: "The SitMan's four sections: ① Exercise Overview (name, dates, scope, objectives, scenario summary, sponsor, POC) ② General Information (objectives/capabilities table; roles; structure; guidelines; evaluation) ③ Modules (scenario narrative with discussion questions for each module) ④ Appendices (schedule, acronyms, plans, participant list).",
      diff: "normal",
      category: "documents"
    },
    {
      id: "hseep_docs_q09",
      q: "For which exercise type is an AAR/IP REQUIRED (vs. optional)?",
      o: [
        "Seminar and Workshop only",
        "All exercise types without exception",
        "Drill, Functional Exercise, and Full-Scale Exercise (and recommended for TTX)",
        "Full-Scale Exercise only"
      ],
      a: 2,
      exp: "Per HSEEP document requirements: AAR/IP is REQUIRED for Drill, FE, and FSE. It is RECOMMENDED (but optional) for TTX. For Seminar and Workshop, an executive summary or workshop summary report is typical (AAR/IP is optional). Games may or may not require an AAR/IP.",
      diff: "normal",
      category: "documents"
    },
    {
      id: "hseep_docs_q10",
      q: "What is the Control Staff Instructions (COSIN) document used for?",
      o: [
        "Instructions for actors and role players on their symptoms and behaviors",
        "For large exercises — detailed guidelines for control and simulation support; management structure for control activities",
        "Legal instructions for participants regarding liability during the exercise",
        "The facilitator's guide for leading TTX discussions"
      ],
      a: 1,
      exp: "COSIN (Control Staff Instructions) is used for LARGE exercises. It provides detailed guidelines for control and simulation support staff, and defines the management structure for all control activities. It is an additional document beyond the C/E Handbook, used when the control structure is sufficiently complex.",
      diff: "hard",
      category: "documents"
    },
    {
      id: "hseep_docs_q11",
      q: "What is the 'Facilitator Guide' in a discussion-based exercise?",
      o: [
        "A document given to all participants to guide their discussion contributions",
        "A document for exercise facilitators outlining instructions, key issues, discussion questions, timing guides, and key points to cover",
        "A guide for senior leaders on how to facilitate policy decisions during the exercise",
        "A guide for evaluators on how to rate discussion quality"
      ],
      a: 1,
      exp: "The Facilitator Guide is for EXERCISE FACILITATORS only. It outlines: instructions and key issues for moving participants through exercise play; discussion questions; timing guides; facilitation notes; and key points to cover. It is the TTX facilitator's primary tool for managing the exercise discussion.",
      diff: "normal",
      category: "documents"
    },
    {
      id: "hseep_docs_q12",
      q: "Which document combination is REQUIRED for a Full-Scale Exercise?",
      o: [
        "SitMan and Facilitator Guide",
        "Agenda and Sign-in Sheets only",
        "ExPlan, MSEL, C/E Handbook, EEGs, and AAR/IP",
        "SitMan, EEGs, and AAR/IP"
      ],
      a: 2,
      exp: "A Full-Scale Exercise requires: ExPlan (for players/observers), MSEL (for controllers/SimCell), C/E Handbook (for controllers/evaluators), EEGs (for evaluators), and AAR/IP (post-exercise). Additional recommended documents: Ground Truth, EvalPlan, COSIN, Actor Briefs.",
      diff: "normal",
      category: "documents"
    },
    {
      id: "hseep_docs_q13",
      q: "What is PrepToolkit?",
      o: [
        "A physical kit of supplies for exercise logistics",
        "FEMA's web-based application for managing preparedness activities, including MSEL Builder, EEG Builder, CAP System, and NEXS",
        "A training manual for exercise planners",
        "A database of past exercise reports"
      ],
      a: 1,
      exp: "PrepToolkit (preptoolkit.fema.gov) is FEMA's web-based application for managing preparedness activities. It supports HSEEP implementation through tools including: MSEL Builder, EEG Builder, Corrective Action Program (CAP) System, and National Exercise Schedule (NEXS) System.",
      diff: "normal",
      category: "documents"
    },
    {
      id: "hseep_docs_q14",
      q: "The 'Evaluation Plan (EvalPlan)' is distinct from EEGs because:",
      o: [
        "The EvalPlan is for players; EEGs are for evaluators",
        "The EvalPlan provides guidance, instructions, and structure for evaluators/note takers on how to evaluate and observe — the overall evaluation framework",
        "EvalPlan is required for all exercises; EEGs are only for FSEs",
        "The EvalPlan contains the actual performance ratings; EEGs are for note-taking only"
      ],
      a: 1,
      exp: "The EvalPlan provides guidance, instructions, and STRUCTURE for evaluators/note takers on how to evaluate and observe during the exercise — it is the overall evaluation framework. EEGs are the specific data collection tools for each objective/capability. The EvalPlan tells evaluators HOW to use the EEGs.",
      diff: "hard",
      category: "documents"
    },
    {
      id: "hseep_docs_q15",
      q: "A 'Player Handout' in an operations-based exercise is best described as:",
      o: [
        "A complete copy of the ExPlan",
        "A supplement to the ExPlan providing a quick-reference guide (pocket-size trifold or bifold)",
        "The MSEL distributed to all players",
        "A legal document players must sign"
      ],
      a: 1,
      exp: "A Player Handout supplements the ExPlan — it is a compact, quick-reference guide (often a pocket-size trifold or bifold). It gives players the essential information they need at their fingertips during exercise play without requiring them to carry the full ExPlan.",
      diff: "normal",
      category: "documents"
    },
    {
      id: "hseep_docs_q16",
      q: "In which HSEEP document do exercise objectives, scope, participating organizations, sponsor information, and Point of Contact all appear together in a single 'Exercise Overview' table?",
      o: [
        "The MSEL",
        "The EEG",
        "The SitMan or ExPlan Exercise Overview section",
        "The Improvement Plan matrix"
      ],
      a: 2,
      exp: "Both the SitMan (for discussion-based) and the ExPlan (for operations-based) begin with an Exercise Overview table that consolidates: exercise name, dates, scope, focus areas, capabilities, objectives, threat/hazard, scenario summary, sponsor, participating organizations, and POC.",
      diff: "normal",
      category: "documents"
    }
  ],

  // ==========================================
  // CATEGORY 8: CORE CAPABILITIES — 15 questions
  // National Preparedness Goal 32 core capabilities
  // ==========================================
  core_capabilities: [
    {
      id: "hseep_caps_q01",
      q: "How many total core capabilities are defined in the National Preparedness Goal?",
      o: ["20", "25", "32", "40"],
      a: 2,
      exp: "The National Preparedness Goal defines 32 core capabilities organized across 5 mission areas. Three capabilities — Planning, Public Information and Warning, and Operational Coordination — span ALL five mission areas. The remaining capabilities are specific to one or more mission areas.",
      diff: "normal",
      category: "core_capabilities"
    },
    {
      id: "hseep_caps_q02",
      q: "Which three core capabilities span ALL five mission areas of the National Preparedness Goal?",
      o: [
        "Planning, Training, and Evaluation",
        "Planning, Public Information and Warning, and Operational Coordination",
        "Intelligence and Information Sharing, Planning, and Logistics",
        "Operational Coordination, Mass Care Services, and Public Health"
      ],
      a: 1,
      exp: "The three cross-cutting capabilities that span ALL five mission areas (Prevention, Protection, Mitigation, Response, Recovery) are: ① Planning ② Public Information and Warning ③ Operational Coordination. These are foundational to all emergency management activities.",
      diff: "normal",
      category: "core_capabilities"
    },
    {
      id: "hseep_caps_q03",
      q: "The Prevention mission area focuses on:",
      o: [
        "Reducing the loss of life and property by lessening the impact of future disasters",
        "Preventing, avoiding, or stopping an imminent, threatened, or actual act of terrorism",
        "Responding quickly to save lives and protect property",
        "Restoring infrastructure and community well-being after a disaster"
      ],
      a: 1,
      exp: "Prevention: 'Prevent, avoid, or stop an imminent, threatened, or actual act of terrorism.' Prevention-specific capabilities include: Intelligence and Information Sharing; Interdiction and Disruption; Screening, Search, and Detection; and Forensics and Attribution.",
      diff: "normal",
      category: "core_capabilities"
    },
    {
      id: "hseep_caps_q04",
      q: "Which core capability involves 'delaying, diverting, intercepting, halting, apprehending, or securing threats and/or hazards'?",
      o: [
        "Screening, Search, and Detection",
        "Forensics and Attribution",
        "Interdiction and Disruption",
        "Intelligence and Information Sharing"
      ],
      a: 2,
      exp: "'Interdiction and Disruption' involves delaying, diverting, intercepting, halting, apprehending, or securing threats and/or hazards. This is a Prevention and Protection mission area capability, distinct from 'Screening, Search, and Detection' which identifies threats through surveillance.",
      diff: "normal",
      category: "core_capabilities"
    },
    {
      id: "hseep_caps_q05",
      q: "Which mission area's capabilities focus on reducing vulnerability and building resilient systems to lessen future disaster impact?",
      o: ["Prevention", "Protection", "Mitigation", "Recovery"],
      a: 2,
      exp: "Mitigation: 'Reduce the loss of life and property by lessening the impact of future disasters.' Mitigation capabilities include: Community Resilience; Long-term Vulnerability Reduction; Risk and Disaster Resilience Assessment; and Threats and Hazards Identification.",
      diff: "normal",
      category: "core_capabilities"
    },
    {
      id: "hseep_caps_q06",
      q: "Which Response capability covers providing lifesaving medical treatment via EMS and avoiding additional disease through public health support?",
      o: [
        "Mass Care Services",
        "Mass Search and Rescue Operations",
        "Public Health, Healthcare, and Emergency Medical Services",
        "Fatality Management Services"
      ],
      a: 2,
      exp: "'Public Health, Healthcare, and Emergency Medical Services' provides lifesaving medical treatment via EMS and avoids additional disease/injury through public health, medical, and behavioral health support. This is a key Response mission area capability.",
      diff: "normal",
      category: "core_capabilities"
    },
    {
      id: "hseep_caps_q07",
      q: "'Mass Care Services' as a Response capability includes:",
      o: [
        "Search and rescue of trapped survivors",
        "Providing life-sustaining services including hydration, feeding, sheltering, temporary housing, evacuee support, and reunification",
        "Providing EMS and emergency medical treatment",
        "Managing deceased victims and mortuary processes"
      ],
      a: 1,
      exp: "Mass Care Services provides: hydration, feeding, sheltering, temporary housing, evacuee support, reunification, and distribution of emergency supplies. This is distinct from: Mass Search and Rescue (finding survivors), Public Health/EMS (medical treatment), and Fatality Management (managing deceased).",
      diff: "normal",
      category: "core_capabilities"
    },
    {
      id: "hseep_caps_q08",
      q: "The Recovery mission area capability 'Economic Recovery' aims to:",
      o: [
        "Restore power and utilities within 72 hours of a disaster",
        "Return economic and business activities to a healthy state and develop new employment opportunities",
        "Recover stolen assets and financial fraud losses",
        "Manage FEMA disaster grants and financial assistance programs"
      ],
      a: 1,
      exp: "Economic Recovery: 'Return economic and business activities (including food and agriculture) to a healthy state; develop new business and employment opportunities for an economically viable community.' It focuses on community economic revitalization, not just financial recovery for individual victims.",
      diff: "normal",
      category: "core_capabilities"
    },
    {
      id: "hseep_caps_q09",
      q: "Which Protection mission area capability involves protecting electronic communications systems from damage, unauthorized use, and exploitation?",
      o: [
        "Physical Protective Measures",
        "Access Control and Identity Verification",
        "Cybersecurity",
        "Supply Chain Integrity and Security"
      ],
      a: 2,
      exp: "Cybersecurity: 'Protect (and, if needed, restore) electronic communications systems, information, and services from damage, unauthorized use, and exploitation.' Protection-specific capabilities also include Access Control, Physical Protective Measures, Supply Chain Integrity, and Risk Management for Protection.",
      diff: "normal",
      category: "core_capabilities"
    },
    {
      id: "hseep_caps_q10",
      q: "How many core capabilities are in the Response mission area?",
      o: ["7", "11", "15", "8"],
      a: 2,
      exp: "The Response mission area has 15 core capabilities — the most of any mission area. These include the 3 cross-cutting capabilities (Planning, Public Information, Operational Coordination) plus 12 Response-specific capabilities such as Critical Transportation, Mass Care Services, Operational Communications, and Public Health/EMS.",
      diff: "hard",
      category: "core_capabilities"
    },
    {
      id: "hseep_caps_q11",
      q: "The 'Fatality Management Services' core capability covers which functions?",
      o: [
        "Triage and emergency treatment of critically injured survivors",
        "Decedent remains recovery, victim identification, mortuary processes, temporary storage, and counseling to the bereaved",
        "Mass grave operations and memorials for disaster victims",
        "Death notification and family support services only"
      ],
      a: 1,
      exp: "Fatality Management Services provides: decedent remains recovery, victim identification, mortuary processes, temporary storage or permanent internment solutions, and counseling to the bereaved. This capability is specifically for managing DECEASED victims — distinct from Mass Search and Rescue (finding survivors) and EMS (treating injured).",
      diff: "normal",
      category: "core_capabilities"
    },
    {
      id: "hseep_caps_q12",
      q: "The 'Situational Assessment' capability in the Response mission area provides what?",
      o: [
        "A strategic assessment of long-term recovery needs",
        "Decision-relevant information for all decision-makers regarding the nature/extent of the hazard, cascading effects, and response status",
        "An assessment of individual responder performance during the incident",
        "A financial assessment of disaster costs for FEMA reimbursement"
      ],
      a: 1,
      exp: "Situational Assessment: 'Provide all decision-makers with decision-relevant information regarding the nature and extent of the hazard, cascading effects, and response status.' This real-time situational awareness capability is essential for effective incident management and resource deployment.",
      diff: "normal",
      category: "core_capabilities"
    },
    {
      id: "hseep_caps_q13",
      q: "Which Recovery capability specifically addresses protecting natural, cultural, and historic resources?",
      o: [
        "Community Resilience",
        "Long-term Vulnerability Reduction",
        "Natural and Cultural Resources",
        "Health and Social Services"
      ],
      a: 2,
      exp: "'Natural and Cultural Resources' protects natural and cultural resources and historic properties through appropriate planning, mitigation, response, and recovery actions. This Recovery-specific capability ensures disasters do not permanently destroy irreplaceable heritage and environmental assets.",
      diff: "normal",
      category: "core_capabilities"
    },
    {
      id: "hseep_caps_q14",
      q: "The 'Operational Communications' Response capability ensures:",
      o: [
        "All responders have smartphones and social media access",
        "Capacity for timely communications in support of security, situational awareness, and operations by all available means among all response forces",
        "A single unified communications platform for all responders nationwide",
        "Public communications and warnings to the general population"
      ],
      a: 1,
      exp: "Operational Communications ensures: 'Capacity for timely communications in support of security, situational awareness, and operations by all available means among all response forces.' This is distinct from 'Public Information and Warning' which communicates to the public — Operational Communications focuses on responder-to-responder communications.",
      diff: "normal",
      category: "core_capabilities"
    },
    {
      id: "hseep_caps_q15",
      q: "Which mission area focuses on 'protecting citizens, residents, visitors, and assets against threats and hazards in a manner that allows interests and way of life to thrive'?",
      o: ["Prevention", "Protection", "Mitigation", "Response"],
      a: 1,
      exp: "Protection: 'Protect citizens, residents, visitors, and assets against threats and hazards in a manner that allows interests and way of life to thrive.' Protection has 11 capabilities including: Cybersecurity, Physical Protective Measures, Access Control, Supply Chain Integrity, and Risk Management for Protection Programs.",
      diff: "normal",
      category: "core_capabilities"
    }
  ]

}; // end HSEEP_QUIZ_QUESTIONS

// ============================================
// SECTION 2: HSEEP_SCENARIOS
// Interactive drill-building scenarios — 8 scenarios with 6-10 steps each
// Students BUILD real exercises step by step
// ============================================

const HSEEP_SCENARIOS = [

  // ==========================================
  // SCENARIO 1: Build a Tabletop Exercise (TTX) — Earthquake
  // ==========================================
  {
    id: "build_ttx_earthquake",
    title: "Build a Tabletop Exercise from Scratch",
    description: "You are the new Emergency Manager for Riverside County. A 6.8 magnitude earthquake has struck the region before — and could again. Your mission: design a TTX to test the county's Earthquake Emergency Operations Plan. Go from blank page to complete SitMan.",
    exerciseType: "TTX",
    scenario: "Earthquake — 6.8 Magnitude",
    difficulty: "normal",
    estimatedTime: "20 min",
    learningObjectives: [
      "Apply SMART criteria to exercise objective writing",
      "Identify required documents for a TTX",
      "Understand the 5 exercise planning meetings",
      "Develop a realistic scenario narrative"
    ],
    steps: [
      {
        stepNumber: 1,
        phase: "Senior Leader Engagement",
        prompt: "Your county Emergency Management Director says: 'We need to test our earthquake response plans.' Before you do anything else, what is the MOST important first action according to HSEEP?",
        type: "multiple_choice",
        options: [
          "Begin writing the scenario narrative immediately",
          "Engage senior leaders to get specific guidance, intent, and priorities for the exercise",
          "Reserve a conference room and send invitations",
          "Review the federal HSEEP 2020 Doctrine manual cover to cover"
        ],
        correct: 1,
        feedback: "Correct! 'Senior Leader Guidance' is the FIRST HSEEP principle. Before designing anything, you must engage senior leaders to understand their specific intent, preparedness priorities, and desired outcomes. The Director's statement is vague — you need specifics about which capabilities to test and what gaps to address.",
        templateOutput: "SENIOR LEADER GUIDANCE RECORD\nDate: [Today]\nSenior Leader: Emergency Management Director\nGuidance Received: Test earthquake response capabilities, focusing on EOC activation and inter-agency coordination\nPriorities Identified: [To be refined at C&O Meeting]"
      },
      {
        stepNumber: 2,
        phase: "Exercise Foundation Review",
        prompt: "You're preparing for the Concept and Objectives (C&O) Meeting. Which documents should you review BEFORE the meeting to inform the discussion? Choose the most complete answer.",
        type: "multiple_choice",
        options: [
          "Only the county's Earthquake Emergency Operations Plan",
          "The previous year's grant report and budget",
          "Relevant AARs/IPs from past exercises and real incidents, THIRA, existing plans/policies/procedures, IPP, and grant requirements",
          "Only the FEMA National Preparedness Goal"
        ],
        correct: 2,
        feedback: "The exercise foundation review requires examining: the Integrated Preparedness Plan (IPP), relevant AARs/IPs from previous exercises and real-world incidents, THIRA (to understand threat landscape), existing plans/policies/procedures, and grant/cooperative agreement requirements. This comprehensive review ensures your exercise is truly risk-based and addresses real gaps.",
        templateOutput: "EXERCISE FOUNDATION REVIEW CHECKLIST\n✓ Reviewed: County THIRA (Earthquake = Tier 1 threat)\n✓ Reviewed: Previous Exercise AAR/IP (2 years ago — coordination gaps identified)\n✓ Reviewed: County Earthquake Emergency Operations Plan (EOP) Annex\n✓ Reviewed: Integrated Preparedness Plan (IPP)\n✓ Reviewed: Grant requirements (EMPG: exercises required annually)\n⚠ Gap Identified: Inter-agency communication procedures not tested in 3 years"
      },
      {
        stepNumber: 3,
        phase: "Objective Setting",
        prompt: "You need to write a SMART objective for the earthquake TTX. Which of the following is properly written?",
        type: "multiple_choice",
        options: [
          "Improve emergency communications during earthquake response",
          "Test the county's earthquake response capabilities",
          "Demonstrate the ability of Riverside County EOC staff to activate the EOC to Level 2 operations and establish unified command with field operations within 45 minutes of initial earthquake notification, in accordance with Section 4.2 of the County EOP",
          "Practice coordination between all county departments"
        ],
        correct: 2,
        feedback: "Option C is the only SMART objective: Specific (Riverside County EOC staff, EOC Level 2 activation, unified command), Measurable (EOC activation and unified command establishment are observable), Achievable (45 minutes is realistic), Relevant (addresses the coordination gap identified in previous AARs, aligned to EOP Section 4.2), Time-bound (within 45 minutes of notification). The other options are vague and cannot be evaluated.",
        templateOutput: "EXERCISE OBJECTIVE #1 (SMART)\n'Demonstrate the ability of Riverside County EOC staff to activate the EOC to Level 2 operations and establish unified command with field operations within 45 minutes of initial earthquake notification, in accordance with Section 4.2 of the County Emergency Operations Plan.'\n\nSMART Check:\n✓ Specific: Riverside County EOC staff, Level 2 activation\n✓ Measurable: EOC activation and unified command establishment\n✓ Achievable: 45-minute window is realistic for TTX\n✓ Relevant: Addresses gap from previous AAR, linked to EOP\n✓ Time-bound: Within 45 minutes of notification"
      },
      {
        stepNumber: 4,
        phase: "Scope Definition",
        prompt: "You're defining the exercise scope. For this earthquake TTX, you're considering: 2–4 hours, 20 key decision-makers from county departments, in a single conference room, focused on EOC activation and inter-agency coordination. Is this scope appropriate for a TTX?",
        type: "multiple_choice",
        options: [
          "No — TTXs must involve at least 50 participants from multiple agencies",
          "No — TTXs must be at least 8 hours long to be effective",
          "Yes — 2–8 hours, 15–50 participants, and a discussion-based format focused on key decision-makers is the typical TTX profile",
          "No — this scope requires a Functional Exercise, not a TTX"
        ],
        correct: 2,
        feedback: "This scope is well-suited for a TTX. TTX typical profile: 2–8 hours duration, 15–50 key decision-makers, low-to-moderate resource requirements, conducted in a meeting room. A TTX generates dialogue about plans without requiring real resource deployment — perfect for testing EOC coordination procedures conceptually before an operational exercise.",
        templateOutput: "EXERCISE SCOPE DEFINITION\nExercise Type: Tabletop Exercise (TTX)\nDuration: 3 hours\nParticipation Level: 20 key decision-makers (EOC department leads)\nLocation: County Emergency Operations Center — Conference Room A\nFocus: EOC activation procedures, inter-agency coordination, public alert issuance\nExtent of Play: Discussion only — no actual resources deployed or activated"
      },
      {
        stepNumber: 5,
        phase: "Scenario Development",
        prompt: "You're developing the earthquake scenario narrative. At 10:42 AM on a weekday, a 6.8 magnitude earthquake strikes 12 miles northeast of Riverside County. You need to describe the immediate conditions. Which approach BEST follows HSEEP scenario development principles?",
        type: "multiple_choice",
        options: [
          "Create the most extreme scenario possible to stress-test participants",
          "Use a scenario so simple that all participants can easily succeed",
          "Develop a plausible, realistic, and challenging scenario derived from the county's THIRA — of sufficient magnitude to be realistic but focused on enabling objective achievement",
          "Copy the scenario from a neighboring county's past exercise"
        ],
        correct: 2,
        feedback: "A good scenario must be: plausible/realistic/challenging, credible enough for participants to suspend disbelief, risk-based (derived from THIRA), of sufficient magnitude to be realistic, and designed to facilitate objective achievement. It should NOT be so complex that it loses focus on objectives, nor so easy that it doesn't test capabilities.",
        templateOutput: "SCENARIO NARRATIVE — Module 1 (0:00–1:00)\n[SIMULATED TIME: 10:42 AM, Tuesday]\nA 6.8 magnitude earthquake strikes 12 miles NE of downtown Riverside. Shaking lasts 35 seconds. Initial reports: structural damage downtown, power outages in 3 districts, highway on-ramp collapsed (Route 91), hospital reports generator failure.\nEstimated casualties: 50–80 (unconfirmed).\nCounty Warning System: Mass notification alert auto-triggered.\n\nModue 1 Discussion Questions:\n1. Who has authority to activate the EOC Level 2? What is the notification procedure?\n2. Which agencies must be contacted within the first 30 minutes?\n3. What is the protocol for establishing unified command with field operations?"
      },
      {
        stepNumber: 6,
        phase: "SitMan Construction",
        prompt: "You're assembling the Situation Manual (SitMan). Which section should contain the discussion questions for each phase of the exercise scenario?",
        type: "multiple_choice",
        options: [
          "The Exercise Overview section",
          "The Appendices",
          "The General Information section",
          "The Modules section (Module 1, Module 2, Module 3)"
        ],
        correct: 3,
        feedback: "Discussion questions belong in the MODULES section of the SitMan. Each module covers a phase of the scenario with time-stamped events and targeted discussion questions by functional group (e.g., EOC Directors, Public Works, Public Health). The SitMan structure: ① Exercise Overview ② General Information ③ Modules ④ Appendices.",
        templateOutput: "SITMAN MODULE STRUCTURE\nModule 1 (Hour 1): Initial Response — EOC Activation\n  Scenario: Earthquake at 10:42 AM — initial reports\n  Key Issues: EOC activation authority, notification procedures\n  Discussion Questions: [3-5 questions]\n\nModule 2 (Hour 2): Coordinated Response\n  Scenario: 90 minutes post-earthquake — cascading effects\n  Key Issues: Unified command, resource requests, public alerts\n  Discussion Questions: [3-5 questions]\n\nModule 3 (Hour 3): Recovery Transition\n  Scenario: 4 hours post-earthquake — transition to recovery\n  Key Issues: Inter-agency handoffs, situation report dissemination\n  Discussion Questions: [3-5 questions]"
      },
      {
        stepNumber: 7,
        phase: "EEG Development",
        prompt: "As the Lead Evaluator, you must develop an EEG to assess the 'Operational Coordination' core capability. What is the most critical component of the EEG that defines what SUCCESS looks like?",
        type: "multiple_choice",
        options: [
          "The evaluator's personal opinion of the exercise discussion quality",
          "The Capability Target — composed of Critical Task + Impact + Timeframe — defining the performance threshold",
          "The attendance list of all participants",
          "The budget allocated for corrective actions"
        ],
        correct: 1,
        feedback: "The Capability Target is the heart of the EEG. It defines the performance threshold composed of: Critical Task (what must be done), Impact (consequence of the action), and Timeframe (when it must be done). Example: 'Within 45 minutes of earthquake notification [timeframe], EOC staff will activate to Level 2 and establish unified command [critical task] achieving coordinated incident command [impact].'",
        templateOutput: "EEG — Operational Coordination Capability\nExercise: Riverside County Earthquake TTX\nMission Area: Response\nCore Capability: Operational Coordination\nObjective: [SMART Objective from Step 3]\n\nCapability Target:\n'Within 45 minutes of earthquake notification, EOC staff will activate to Level 2 and establish unified command with field operations, achieving coordinated incident command per EOP Section 4.2.'\n\nCritical Tasks:\n1. EOC Director or designated authority officially declares Level 2 activation\n2. All primary EOC sections are staffed and operational\n3. Unified Command established with incident commander at field level\n4. Situation report (SitRep) issued to all agencies within 60 minutes\n\nObservation Space: [evaluator notes]\nRating: P / S / M / U"
      },
      {
        stepNumber: 8,
        phase: "Post-Exercise Planning",
        prompt: "The TTX is complete. Players conducted an excellent discussion. What must you do NEXT, and within what timeframe?",
        type: "multiple_choice",
        options: [
          "Schedule the next exercise immediately — TTX findings are not important enough for an AAR",
          "Immediately conduct the Player Hotwash, then complete the After-Action Report/Improvement Plan (AAR/IP) within 90 days",
          "Submit the SitMan to FEMA for national review",
          "Wait 6 months for the corrective actions to be implemented before writing the AAR"
        ],
        correct: 1,
        feedback: "Immediately after the TTX: ① Player Hotwash (informal discussion capturing initial impressions while fresh) ② Evaluators complete EEG notes and debrief ③ Collect all PFFs (Participant Feedback Forms) ④ Draft AAR within 90 days ⑤ Conduct After-Action Meeting (AAM) to validate findings ⑥ Finalize AAR/IP with SMART corrective actions assigned to responsible parties with deadlines.",
        templateOutput: "POST-EXERCISE TIMELINE\nImmediately: Player Hotwash (30 min, facilitated)\nSame day: Evaluator debrief, collect PFFs\nWithin 2 weeks: Draft AAR circulation for review\nWithin 45 days: After-Action Meeting (AAM)\nWithin 90 days: FINAL AAR/IP completed and distributed\n\nAAR/IP Preliminary Findings:\n  Strengths: [to be documented]\n  Areas for Improvement: [to be documented]\n  Corrective Actions: [SMART, with POC and deadlines]"
      }
    ],
    finalProduct: {
      title: "Completed Earthquake TTX Package",
      components: [
        "Signed Senior Leader Guidance Record",
        "Exercise Foundation Review Checklist",
        "3 SMART Exercise Objectives",
        "Exercise Scope Definition Statement",
        "3-Module Scenario Narrative (SitMan-ready)",
        "EEG for Operational Coordination Capability",
        "Post-Exercise AAR/IP Timeline"
      ],
      achievement: "TTX Architect — You designed a complete Tabletop Exercise from concept to evaluation!",
      xpEarned: 750
    }
  },

  // ==========================================
  // SCENARIO 2: Evacuation Drill Design
  // ==========================================
  {
    id: "build_drill_evacuation",
    title: "Design an Evacuation Drill",
    description: "You are the Safety Officer for a regional hospital with 800 staff. The hospital's evacuation procedure hasn't been tested in 2 years. A corrective action from the last Joint Commission survey requires a documented evacuation drill within 60 days. Build the drill from the ground up.",
    exerciseType: "Drill",
    scenario: "Hospital Building Evacuation",
    difficulty: "easy",
    estimatedTime: "15 min",
    learningObjectives: [
      "Understand a Drill as a single-function, single-agency exercise",
      "Write an ExPlan for an operations-based exercise",
      "Develop EEGs for drill evaluation",
      "Understand drill briefings and conduct procedures"
    ],
    steps: [
      {
        stepNumber: 1,
        phase: "Exercise Type Selection",
        prompt: "A Joint Commission corrective action requires you to 'test the hospital's full evacuation capability including all departments, external agency coordination, and real ambulance movement.' What exercise type is this?",
        type: "multiple_choice",
        options: [
          "Drill — it tests evacuation, which is a single function",
          "Functional Exercise — it involves multiple departments but no real resource movement",
          "Full-Scale Exercise — it involves multiple agencies and REAL resource movement (ambulances)",
          "Tabletop Exercise — it can be done through discussion to save resources"
        ],
        correct: 2,
        feedback: "Careful! This is a FULL-SCALE EXERCISE. Why? Because it involves MULTIPLE AGENCIES (hospital + external EMS) with REAL resource movement (actual ambulances mobilized). A Drill tests ONE function in ONE agency. A Functional Exercise simulates resource movement. An FSE moves resources for real. The corrective action as described requires an FSE, not a drill.",
        templateOutput: "EXERCISE TYPE ANALYSIS\nRequired test: Full hospital evacuation + external agency coordination + real ambulance movement\nExercise Type: FULL-SCALE EXERCISE (not a Drill)\nRationale: Multiple agencies involved; real-time resource movement required\nNote: If budget/time is limited, consider a Functional Exercise (simulated ambulances) or sequencing with a Drill first"
      },
      {
        stepNumber: 2,
        phase: "Scoping the Drill",
        prompt: "You've convinced leadership to start with a simpler exercise first: a Drill of just one function — evacuation of the ICU and CCU floors only, with hospital staff only, no external agencies. Now which exercise type is correct?",
        type: "multiple_choice",
        options: [
          "Full-Scale Exercise",
          "Functional Exercise",
          "Drill",
          "Tabletop Exercise"
        ],
        correct: 2,
        feedback: "Now it IS a Drill: one function (evacuation), one agency (hospital), limited scope (ICU/CCU only). This is classic drill design — focus on ONE function to provide immediate feedback and measurable results. Common drill examples from HSEEP: fire evacuation drill, communication drill, EOC activation drill, mass notification test.",
        templateOutput: "DRILL SCOPE DEFINITION\nDrill Name: ICU/CCU Evacuation Drill\nExercise Type: Drill\nFunction Tested: Patient evacuation from ICU and CCU\nParticipating Agency: Metro General Hospital (ICU and CCU staff only)\nDuration: 2 hours\nLocation: ICU (4th floor), CCU (5th floor), Evacuation Routes A and B\nParticipants: ~35 ICU/CCU nursing, clinical, and support staff"
      },
      {
        stepNumber: 3,
        phase: "Objective Writing",
        prompt: "Write a SMART objective for the ICU/CCU Evacuation Drill. Which option is correct?",
        type: "multiple_choice",
        options: [
          "Test staff knowledge of evacuation procedures",
          "Evacuate the ICU and CCU safely",
          "Demonstrate the ability of Metro General Hospital ICU and CCU staff to safely evacuate all patients from the 4th and 5th floors to the designated assembly area within 12 minutes of the evacuation alarm, in accordance with Hospital Policy EP-2.3",
          "Practice fire evacuation for all hospital floors"
        ],
        correct: 2,
        feedback: "Option C is the only SMART objective: Specific (ICU/CCU staff, 4th and 5th floors, designated assembly area), Measurable (all patients evacuated, verifiable), Achievable (12 minutes is realistic for the scope), Relevant (tied to Hospital Policy EP-2.3 and Joint Commission requirement), Time-bound (within 12 minutes of alarm). The others lack specificity and measurability.",
        templateOutput: "DRILL OBJECTIVE #1\n'Demonstrate the ability of Metro General Hospital ICU and CCU staff to safely evacuate all patients from the 4th and 5th floors to the designated assembly area within 12 minutes of the evacuation alarm, in accordance with Hospital Policy EP-2.3.'"
      },
      {
        stepNumber: 4,
        phase: "ExPlan Development",
        prompt: "For this drill, you need to write an Exercise Plan (ExPlan). What does the ExPlan NOT include?",
        type: "multiple_choice",
        options: [
          "Exercise objectives and scope",
          "Roles and responsibilities for players and evaluators",
          "The detailed scenario of what will happen during the drill (specific events, timing of injects)",
          "Administration and logistics information (parking, attire, communication)"
        ],
        correct: 2,
        feedback: "The ExPlan does NOT include the detailed scenario or specific inject timing — those go in the C/E Handbook (for controllers and evaluators only). Players receive the ExPlan with general information (objectives, scope, schedule, roles, logistics), but NOT the specific drill events. This prevents 'gaming' the drill by knowing exactly what to expect.",
        templateOutput: "EXPLAN OUTLINE — ICU/CCU Evacuation Drill\n1. Exercise Overview Table\n   - Type: Drill | Date: [Date] | Duration: 2 hours\n   - Objective: [SMART Objective from Step 3]\n   - Scope: ICU/CCU floors, hospital staff only\n2. Scenario Overview (brief background — not detailed events)\n3. Exercise Roles and Responsibilities\n   - Players: ICU/CCU nursing, clinical, support staff\n   - Evaluators: Safety Officer, Charge Nurse Observers\n4. Exercise Conduct (rules, safety, real-emergency code words)\n5. Administration: Dress code, communication, refreshments"
      },
      {
        stepNumber: 5,
        phase: "Briefing Preparation",
        prompt: "Before the drill starts (StartEx), you must brief different groups. What information should the EVALUATOR brief specifically include that the PLAYER brief does not?",
        type: "multiple_choice",
        options: [
          "The time and date of the exercise",
          "Safety procedures and code words to stop the exercise",
          "Specific scenario event timing, EEG guidance, and controller/evaluator responsibilities during the drill",
          "Parking and logistics information"
        ],
        correct: 2,
        feedback: "The Controller and Evaluator Brief includes specific exercise information not shared with players: scenario event timing, EEG instructions, C/E responsibilities, and the control concept. Players receive general information (roles, parameters, safety). Evaluators must know WHAT to look for and WHEN events will happen — players must not.",
        templateOutput: "EVALUATOR BRIEF AGENDA\n1. Exercise overview and safety protocols\n2. Evaluator assignments (who covers which area)\n3. EEG walkthrough — what to observe and how to rate\n4. Drill timeline: [CONFIDENTIAL — not for players]\n   T+0: Alarm activated (simulated)\n   T+3: Check evacuation route A status\n   T+8: Check assembly area accountability\n   T+12: Evaluate completion\n5. Contingency plan: If evacuation stalls at T+8, evaluators note but do not intervene\n6. Post-drill: Complete EEGs, attend debrief at [time]"
      },
      {
        stepNumber: 6,
        phase: "EEG and Post-Drill",
        prompt: "The drill is complete. Evaluators observed that all patients were evacuated in 10 minutes 42 seconds (within the 12-minute objective). However, 3 nurses left without signing the accountability roster, and 1 patient's chart was not brought to the assembly area per Policy EP-2.3. What P-S-M-U rating is appropriate?",
        type: "multiple_choice",
        options: [
          "P — Performed without Challenges (all patients evacuated within time)",
          "S — Performed with Some Challenges (objective met but policy deviations observed)",
          "M — Performed with Major Challenges (policy deviations are too significant)",
          "U — Unable to be Performed (the drill failed)"
        ],
        correct: 1,
        feedback: "'S — Performed with Some Challenges' is correct. The primary objective (all patients evacuated within 12 minutes) WAS achieved. However, some challenges were observed: accountability roster incomplete (3 nurses not signed) and medical record not brought as required by Policy EP-2.3. These deviations negatively impacted other activities (accountability accuracy) — fitting the 'S' definition.",
        templateOutput: "EEG RATING WORKSHEET\nCapability: Environmental Response/Health and Safety\nObjective: 12-minute evacuation of ICU/CCU per EP-2.3\nCapability Target: All patients evacuated within 12 minutes\n\nObservations:\n  ✓ All patients physically evacuated in 10:42 (under 12-min target)\n  ✗ 3 nurses did not complete accountability roster signature\n  ✗ Patient chart #4421 not brought to assembly area (EP-2.3 requirement)\n\nRating: S — Performed with Some Challenges\n\nAAR Entry:\n  Strength: Rapid physical evacuation achieved; staff demonstrated effective patient movement techniques\n  Area for Improvement: Accountability process and medical record policy compliance require reinforcement training\n  Corrective Action: [SMART corrective action to be developed]"
      }
    ],
    finalProduct: {
      title: "Completed Hospital Evacuation Drill Package",
      components: [
        "Exercise Type Analysis (Drill vs. FSE clarification)",
        "Drill Scope Definition",
        "1 SMART Objective",
        "ExPlan Outline",
        "Evaluator Brief Agenda",
        "Completed EEG with P-S-M-U Rating"
      ],
      achievement: "Drill Master — You designed and evaluated a real operational drill!",
      xpEarned: 600
    }
  },

  // ==========================================
  // SCENARIO 3: Functional Exercise — EOC Activation
  // ==========================================
  {
    id: "build_fe_eoc",
    title: "Design a Functional Exercise: EOC Activation",
    description: "Your state emergency management agency has never exercised its new Emergency Operations Center (EOC) activation procedures. After a TTX last year identified significant gaps in command and control, your IPP calls for a Functional Exercise this year. Design an FE to test EOC management with a hurricane scenario.",
    exerciseType: "FE",
    scenario: "Hurricane Category 3 — Coastal State",
    difficulty: "hard",
    estimatedTime: "25 min",
    learningObjectives: [
      "Understand the FE's distinguishing features (SimCell, MSEL, simulated resources)",
      "Build a basic MSEL structure",
      "Design the control structure for an FE",
      "Apply the progressive exercise approach"
    ],
    steps: [
      {
        stepNumber: 1,
        phase: "Progressive Approach Context",
        prompt: "Last year's TTX identified that EOC staff struggle with unified command establishment. This year's IPP calls for an FE. How does this align with the HSEEP Progressive Approach?",
        type: "multiple_choice",
        options: [
          "It doesn't align — you should skip to a Full-Scale Exercise to really challenge the team",
          "It aligns perfectly: the TTX identified gaps conceptually; the FE now tests operational implementation of those same procedures in a real-time environment with simulated resources",
          "The progressive approach requires completing a Workshop before an FE",
          "Progressive planning means every jurisdiction must do all 7 exercise types in strict sequence"
        ],
        correct: 1,
        feedback: "This is textbook progressive exercise planning. The TTX discussed and identified gaps → the FE now tests those same procedures operationally in a real-time environment. HSEEP states the approach 'does not always imply a linear progression' — what matters is that each exercise builds on previous findings. The FE is the right next step to test EOC procedures with real-time pressure.",
        templateOutput: "PROGRESSIVE APPROACH JUSTIFICATION\nYear 1: TTX — Identified gaps in EOC unified command procedures\nYear 2: FE — Test operational EOC management with simulated hurricane resources\nYear 3 (planned): FSE — Full multi-agency hurricane response with real resource deployment\n\nThis 3-year progression: Discussion → Operational (simulated) → Operational (real)\nAddresses same capability (Operational Coordination) with increasing complexity each year"
      },
      {
        stepNumber: 2,
        phase: "FE vs. FSE Distinction",
        prompt: "During exercise design, a colleague suggests: 'Instead of simulating field resources in the SimCell, let's actually deploy 3 National Guard units and 5 ambulances.' Would this change the exercise type?",
        type: "multiple_choice",
        options: [
          "No — deploying real resources just makes the FE more realistic",
          "Yes — deploying real resources changes this from a Functional Exercise to a Full-Scale Exercise",
          "No — as long as the EOC is the primary focus, it remains an FE",
          "Yes — deploying Guard units makes it a military exercise, not HSEEP-compliant"
        ],
        correct: 1,
        feedback: "Correct! The defining difference between an FE and FSE is resource deployment. FE = simulated resource movement (SimCell handles field activity). FSE = REAL resource movement. Deploying actual Guard units and ambulances changes this to a Full-Scale Exercise — requiring significantly more planning time (6–18 months), coordination, and resources.",
        templateOutput: "FE DESIGN CONSTRAINT\nResource Movement: SIMULATED (via SimCell)\nFE Focus: EOC command, control, and coordination\nWho is in the room: EOC staff (playing their actual roles in real time)\nWho is NOT in the room: Field responders (simulated by SimCell staff)\nSimCell Role: Represent field conditions, agency calls, resource status reports\n\nIf real resources deployed → Becomes a FULL-SCALE EXERCISE"
      },
      {
        stepNumber: 3,
        phase: "Control Structure Design",
        prompt: "For this hurricane FE, you need to establish the control structure. Which position is specifically responsible for managing the timely and accurate delivery of MSEL injects?",
        type: "multiple_choice",
        options: [
          "Lead Controller",
          "MSEL Manager",
          "Lead Evaluator",
          "Ground Truth Advisor"
        ],
        correct: 1,
        feedback: "The MSEL Manager is specifically responsible for managing timely and accurate delivery of injects and expected actions, and decides WHEN to release contingency injects. The Lead Controller oversees overall exercise progression. The Lead Evaluator manages data collection. These are distinct, critical roles in an FE control structure.",
        templateOutput: "FE CONTROL STRUCTURE\nExercise Director: State EM Director\nSafety Controller: Safety Officer\nLead Controller: Planning Team Lead\nMSEL Manager: Exercise Coordinator\nSimCell Controller: 4 staff representing different agencies\nGround Truth Advisor: Hurricane SME\nLead Evaluator: Assessment Team Lead\nVenue Evaluators: 2 evaluators covering EOC positions\nResource Lead: Logistics Coordinator\n\nTotal Control/Evaluation Staff: ~15 for this FE"
      },
      {
        stepNumber: 4,
        phase: "MSEL Construction",
        prompt: "You're building the MSEL for the hurricane FE. A key inject is: at T+2 hours, the SimCell will call the EOC Operations Section Chief, posing as the State Transportation Department, reporting that Route 17 is closed due to flooding. What is the 'Expected Player Action' for this inject?",
        type: "multiple_choice",
        options: [
          "The player should ignore the call and continue their current task",
          "The Operations Section Chief should log the route closure, update the resource routing plan, notify the EOC Director, and coordinate alternate evacuation routes with the Logistics Section",
          "The player should call FEMA immediately",
          "The SimCell should wait for the player to call them first"
        ],
        correct: 1,
        feedback: "The 'Expected Player Action' column in the MSEL describes what the player SHOULD do in response to the inject. This EOC Operations Chief should: log the information, update routing, notify the Director, and coordinate alternative routes. This expected action directly tests the Operational Coordination objective — and if the player doesn't do it, a contingency inject can prompt them.",
        templateOutput: "MSEL EVENT ENTRY\nEvent #: 012\nTime/Phase: T+2:00 (2 hours into exercise)\nEvent Type: Inject\nInject/Description: SimCell (as State DOT) calls EOC Operations Section Chief: 'Route 17 at Mile Marker 45 is now impassable due to 3-foot flooding. Estimated closure time: unknown. We have traffic backed up 8 miles northbound.'\nOriginator: SimCell Station 2\nTarget Player: EOC Operations Section Chief\nExpected Player Action: Log route closure in EOC status board; update evacuation routing plan; notify EOC Director and Logistics Section; coordinate alternate evacuation routes (Routes 19 and 23); issue advisory to county shelters\nObjective(s): Objective 2 (Operational Coordination — resource routing)\nNotes: If no action within 20 minutes, deliver Contingency Inject #012C: 'EOC Director receives call from county 911 center asking for routing guidance'"
      },
      {
        stepNumber: 5,
        phase: "Briefing Types",
        prompt: "For this FE, you will have EOC staff as players, SimCell staff as controllers, and a team of evaluators. You need to brief each group differently. What unique information must the ACTOR BRIEF include for your SimCell staff?",
        type: "multiple_choice",
        options: [
          "The ExPlan objectives and scope — same as the Player Brief",
          "Exercise overview, safety procedures, real-emergency procedures, acting instructions, schedule, ID badges, and symptomatology cards",
          "The AAR/IP findings from the previous TTX",
          "The full MSEL with all 50 injects"
        ],
        correct: 1,
        feedback: "The Actor Brief (for SimCell staff and role players) covers: exercise overview; SAFETY (critical — especially for ops-based exercises); real-emergency procedures (what to do if something real happens); ACTING INSTRUCTIONS (how to portray their character convincingly); schedule; ID badge instructions; and symptomatology cards (if applicable). SimCell staff need to know HOW to act their roles, not just what to inject.",
        templateOutput: "ACTOR BRIEF — SimCell Staff\n1. Exercise overview and SimCell purpose\n2. SAFETY: Code word to pause exercise = 'TIME OUT'; code to end = 'ENDEX'; real emergency = 'ACTUAL EMERGENCY'\n3. Role assignments:\n   - Sim Station 1: State EOC (calls, status reports)\n   - Sim Station 2: State DOT, State Police\n   - Sim Station 3: County Emergency Managers (3 counties)\n   - Sim Station 4: Media simulation, public inquiry calls\n4. Acting instructions: Portray your character realistically; inject realistic urgency; follow MSEL timing exactly\n5. Contingency inject protocol: If MSEL Manager signals, deliver assigned contingency inject\n6. SimCell boundaries: Do NOT provide answers; if asked directly, say 'We need your decision/request'"
      },
      {
        stepNumber: 6,
        phase: "Evaluation",
        prompt: "During the FE, an evaluator observes that the EOC team took 35 minutes (vs. the 20-minute objective) to issue the first public alert about Hurricane landfall. The alert was ultimately issued accurately and completely. What P-S-M-U rating is appropriate, and what AAR entry should be written?",
        type: "multiple_choice",
        options: [
          "P — They eventually issued the alert correctly",
          "S — Alert was issued but significantly exceeded the time target; some challenges",
          "M — The time delay was a major challenge; objective was only partially achieved",
          "U — The team failed to meet the objective"
        ],
        correct: 2,
        feedback: "'M — Performed with Major Challenges' is correct. The objective required issuing the alert within 20 minutes — they took 35 minutes (75% over time). While the capability was eventually demonstrated (alert was issued), the 15-minute delay represents a SIGNIFICANT challenge that could have life-safety implications in a real hurricane. The objective was only PARTIALLY achieved (correct content, but failed time standard).",
        templateOutput: "EEG RATING — Public Information and Warning\nCapability Target: Issue hurricane landfall public alert within 20 minutes of landfall confirmation\nObserved: Alert issued at T+35 minutes (15 minutes over target)\nAlert content: Accurate and complete ✓\nAlert timing: Failed target (35 min vs. 20 min) ✗\n\nRating: M — Performed with Major Challenges\n\nAAR Observation:\nObservation Title: Delayed Public Alert Issuance During Hurricane Scenario\nAnalysis: EOC public information staff required 35 minutes to issue the initial hurricane landfall alert, versus the 20-minute standard in the EOP Communications Annex. Observation identified: Public Information Officer unfamiliar with WebEOC alert system; approval routing required 3 signatures but only 2 authorized officials were present. Impact: A 15-minute delay in a real event could result in failure of residents to take shelter before landfall.\nRecommendation: Conduct targeted training on WebEOC alert system; revise approval procedure to allow alternate signatories."
      },
      {
        stepNumber: 7,
        phase: "AAR Development",
        prompt: "You are writing the AAR Executive Summary for this FE. What are the three components the Executive Summary MUST include?",
        type: "multiple_choice",
        options: [
          "Full exercise schedule, MSEL injects list, and participant roster",
          "3 major strengths, 3 primary areas for improvement, overall assessment, and future exercise recommendations",
          "Corrective action assignments, deadlines, and budget estimates",
          "Individual ratings for each EOC position"
        ],
        correct: 1,
        feedback: "The AAR Executive Summary must contain: ① 3 MAJOR STRENGTHS ② 3 PRIMARY AREAS FOR IMPROVEMENT ③ Overall assessment of exercise success ④ Future exercise recommendations. This high-level summary allows senior leaders to quickly understand what the exercise revealed without reading the entire AAR.",
        templateOutput: "AAR EXECUTIVE SUMMARY DRAFT\nExercise: State Hurricane FE | Date: [Date]\nOverall Assessment: The FE successfully tested EOC hurricane procedures. Key capability gaps identified require corrective action before the planned Full-Scale Exercise.\n\n3 MAJOR STRENGTHS:\n1. EOC staff demonstrated rapid physical activation (Level 3 in 28 minutes vs. 45-min target)\n2. Inter-agency coordination with State Police was seamless throughout the exercise\n3. EOC logistics team successfully managed resource requests with no duplication errors\n\n3 PRIMARY AREAS FOR IMPROVEMENT:\n1. Public alert issuance delayed 15 minutes beyond standard (WebEOC system unfamiliarity)\n2. Unified command not established with field until T+90 minutes (target: T+45 minutes)\n3. Situation report format inconsistent — 3 of 5 SitReps did not follow EOP template\n\nFuture Exercise Recommendation: Conduct targeted drills for public alert procedures and SitRep drafting before FSE scheduled in Year 3."
      }
    ],
    finalProduct: {
      title: "Completed Hurricane Functional Exercise Package",
      components: [
        "Progressive Approach Justification",
        "FE vs. FSE Distinction Analysis",
        "Control Structure Design",
        "3 Sample MSEL Event Entries",
        "SimCell Actor Brief",
        "EEG with M Rating and AAR Observation",
        "AAR Executive Summary Draft"
      ],
      achievement: "Functional Exercise Architect — You designed a full EOC Functional Exercise!",
      xpEarned: 900
    }
  },

  // ==========================================
  // SCENARIO 4: MSEL Construction — Chemical Spill
  // ==========================================
  {
    id: "build_msel_chemical",
    title: "Construct a MSEL: Chemical Spill Response",
    description: "You are the MSEL Manager for a Full-Scale Exercise involving a chlorine tanker derailment. Your exercise objectives focus on HAZMAT response coordination, evacuation, and public notification. Build a 6-event MSEL that tests these objectives systematically.",
    exerciseType: "FSE",
    scenario: "Railroad HAZMAT — Chlorine Tanker Derailment",
    difficulty: "hard",
    estimatedTime: "20 min",
    learningObjectives: [
      "Understand the MSEL column structure",
      "Differentiate Injects, Expected Actions, and Contingency Injects",
      "Design injects that drive specific exercise objectives",
      "Understand SimCell and MSEL Manager roles"
    ],
    steps: [
      {
        stepNumber: 1,
        phase: "MSEL Fundamentals",
        prompt: "The MSEL is the 'engine' of an operations-based exercise. Which statement about the MSEL is FALSE?",
        type: "multiple_choice",
        options: [
          "The MSEL is a chronological timeline of scripted events and injects",
          "Each MSEL event is linked to one or more exercise objectives",
          "The MSEL is distributed to all players so they know what to expect",
          "The MSEL includes the Expected Player Action for each inject"
        ],
        correct: 2,
        feedback: "FALSE: The MSEL is NOT distributed to players. It is provided to the C/E Handbook (controllers and evaluators only). Players must respond to injects as if they were real — not because they saw them coming. Distributing the MSEL to players undermines the entire purpose of an operations-based exercise.",
        templateOutput: "MSEL ACCESS CONTROL\n✓ Controllers: Full MSEL with all injects and timing\n✓ Evaluators: Full MSEL to track expected actions\n✓ SimCell Staff: Their assigned inject scripts\n✗ PLAYERS: Do NOT receive MSEL\n✗ OBSERVERS: Do NOT receive MSEL\n✗ Senior Leaders: Do NOT receive MSEL (they receive Observer Brief)"
      },
      {
        stepNumber: 2,
        phase: "Initial Inject Design",
        prompt: "Your FSE begins with the chlorine tanker derailment at T+0. What is the FIRST inject that should appear in the MSEL to start exercise play?",
        type: "multiple_choice",
        options: [
          "A call from FEMA asking for a situation report",
          "A 911 call to the Fire Department dispatch from a citizen reporting a train derailment with a yellow cloud visible",
          "A weather report showing wind conditions",
          "A resource inventory from the logistics team"
        ],
        correct: 1,
        feedback: "The first inject must SET THE SCENE and drive initial player action. A 911 citizen call reporting the derailment with a visible yellow cloud is the perfect trigger: it's realistic, creates urgency, and immediately tests dispatch protocols, initial HAZMAT identification, and first responder notification procedures — all core to the exercise objectives.",
        templateOutput: "MSEL EVENT #001\nEvent #: 001\nTime: T+0:00\nEvent Type: Inject\nInject/Description: SimCell (as 911 Dispatch) broadcasts: 'All units — 911 caller reports a train derailment on the Norfolk Southern line at Mile Marker 224, near Pine Ridge Road. Caller reports loud hissing sound, yellow-green cloud visible, multiple people running away from the area. Wind from the southwest at 12 mph.'\nOriginator: SimCell Station 1\nTarget Player: Fire Dispatch / Incident Commander\nExpected Player Action: Dispatch HAZMAT Unit; initiate ICS; establish Incident Command Post; notify county EOC; begin HAZMAT identification from ERG\nObjective(s): Obj 1 (HAZMAT Response), Obj 3 (Operational Coordination)\nNotes: If no IC established by T+15, deliver Contingency Inject 001C"
      },
      {
        stepNumber: 3,
        phase: "Inject Sequencing",
        prompt: "At T+30 minutes, you want to test the public notification objective. Which MSEL inject would BEST force players to activate the public alert system?",
        type: "multiple_choice",
        options: [
          "SimCell (as State EOC) calls to say the exercise is going well",
          "SimCell (as County Health Department) reports 15 people with eye irritation and difficulty breathing have self-presented to the County Urgent Care Center, 0.5 miles downwind of the derailment site",
          "SimCell provides a weather update confirming no wind change",
          "SimCell (as Railroad) apologizes for the incident"
        ],
        correct: 1,
        feedback: "This inject creates URGENCY and directly tests the public notification objective. By reporting symptomatic victims at a nearby facility, it forces players to: assess the HAZMAT release scope, determine the evacuation zone, activate the public alert system, and coordinate with health authorities. The inject provides a consequence (real victims nearby) that demands an immediate public warning decision.",
        templateOutput: "MSEL EVENT #008\nEvent #: 008\nTime: T+0:30\nEvent Type: Inject\nInject/Description: SimCell (as County Health Dept. Medical Director) calls EOC Operations Chief: 'We have 15 walk-ins at County Urgent Care on Pine Ridge Road — presenting with eye irritation, tearing, coughing, difficulty breathing. They were near the train tracks. We need guidance — should we shelter-in-place or evacuate this facility?'\nOriginator: SimCell Station 3\nTarget Player: EOC Operations Chief / Public Information Officer\nExpected Player Action: Determine evacuation zone radius (based on chlorine ERG); activate Emergency Alert System; issue shelter-in-place or evacuation order for 0.5-mile radius; notify County Urgent Care of protective action decision; coordinate patient transport with EMS\nObjective(s): Obj 2 (Public Information and Warning), Obj 1 (HAZMAT Response)\nNotes: Contingency inject if no alert issued by T+45: SimCell (as local TV news) calls PIO asking for on-camera statement"
      },
      {
        stepNumber: 4,
        phase: "Contingency Injects",
        prompt: "At T+45 minutes, EOC staff has NOT issued the public alert yet (the expected action from Event #008). As MSEL Manager, what should you do?",
        type: "multiple_choice",
        options: [
          "Stop the exercise and tell players they missed the objective",
          "Wait — players may still issue the alert on their own",
          "Release the pre-designed Contingency Inject to give players another opportunity to demonstrate the capability",
          "Remove the public alert objective from the evaluation"
        ],
        correct: 2,
        feedback: "Release the Contingency Inject! Its purpose is exactly this: 'A MSEL event introduced when a key player expected action did NOT occur as planned, providing an ADDITIONAL OPPORTUNITY to meet objectives.' Good MSEL design always includes contingency injects. The exercise shouldn't stop or fail — players get another realistic prompt to demonstrate the capability.",
        templateOutput: "CONTINGENCY INJECT #008C\nEvent #: 008C (Contingency)\nTrigger: No public alert issued by T+45 (expected from Event #008)\nTime: T+0:45 (MSEL Manager judgment call)\nEvent Type: Contingency Inject\nInject/Description: SimCell (as Local TV Station WKRC) calls EOC Public Information Officer: 'This is Jennifer Kim from WKRC News. We have a camera crew at the Pine Ridge Road train derailment. We're going live in 5 minutes with this story — we have footage of people being treated for what looks like chemical exposure. Do you have a statement? Should residents in the area take any protective action?'\nOriginator: SimCell Station 4 (Media Simulation)\nTarget Player: Public Information Officer\nExpected Player Action: Coordinates with EOC Director; issues public statement; activates Emergency Alert System for evacuation/shelter order\nObjective: Obj 2 (Public Information and Warning)"
      },
      {
        stepNumber: 5,
        phase: "Expected Action vs. Inject",
        prompt: "In the MSEL, what is the difference between an 'Inject' and an 'Expected Action'?",
        type: "multiple_choice",
        options: [
          "They are the same thing — just different terms",
          "An Inject is what CONTROLLERS deliver TO players; an Expected Action is what players SHOULD DO in response",
          "An Inject is for Discussion-Based exercises; Expected Action is for Operations-Based exercises",
          "An Inject is scripted; Expected Actions are improvised"
        ],
        correct: 1,
        feedback: "Inject = what controllers/SimCell DELIVER to players (e.g., a 911 call, a radio message, a situation report). Expected Action = what players SHOULD DO in RESPONSE to the inject (e.g., dispatch HAZMAT, notify EOC, issue public alert). Evaluators observe whether the Expected Actions actually occur — this is the core of MSEL-based evaluation.",
        templateOutput: "MSEL CONCEPT SUMMARY\nInject → Drives Player Activity\nExpected Action → What Evaluators Observe\nContingency Inject → Backup if Expected Action doesn't occur\n\nExample Flow:\nEvent #008 INJECT: Health Dept. reports symptomatic victims\n  ↓\nExpected Action: Players issue public alert within 15 minutes\n  ↓\nEvaluator: Did they issue the alert? How long did it take? Was it accurate?\n  ↓\nIf no alert by T+45: Release Contingency Inject #008C\n  ↓\nRating: P/S/M/U based on actual performance"
      },
      {
        stepNumber: 6,
        phase: "MSEL Completion and Handoff",
        prompt: "Your 6-event MSEL draft is complete. At the Final Planning Meeting (FPM), which groups must receive the MSEL?",
        type: "multiple_choice",
        options: [
          "All participants including players and observers",
          "Senior leaders only",
          "Controllers, evaluators, and SimCell staff — in the C/E Handbook",
          "The Exercise Director and Planning Team Lead only"
        ],
        correct: 2,
        feedback: "The MSEL is distributed to controllers, evaluators, and SimCell staff — incorporated into the Controller/Evaluator (C/E) Handbook. PLAYERS and OBSERVERS do NOT receive the MSEL. At the FPM, all final documents are approved. After the FPM, no major changes to the MSEL should occur.",
        templateOutput: "MSEL DISTRIBUTION LIST (after FPM approval)\n✓ Lead Controller: Full MSEL for progression monitoring\n✓ MSEL Manager: Full MSEL for inject timing management\n✓ SimCell Station 1: Events #001, #004, #006 inject scripts\n✓ SimCell Station 2: Events #002, #005 inject scripts\n✓ SimCell Station 3: Events #003, #008 inject scripts\n✓ Lead Evaluator: Full MSEL for expected action tracking\n✓ Venue Evaluators: MSEL events relevant to their assigned area\n\n✗ Players: Do NOT receive\n✗ Observers: Do NOT receive\n✗ Media: Do NOT receive"
      }
    ],
    finalProduct: {
      title: "Completed Chemical Spill MSEL (6 Core Events + 2 Contingency Injects)",
      components: [
        "MSEL access control policy",
        "Event #001 (Initial derailment report)",
        "Event #008 (Symptomatic victims — public alert trigger)",
        "Contingency Inject #008C (Media call escalation)",
        "Inject vs. Expected Action concept diagram",
        "MSEL distribution list for FPM"
      ],
      achievement: "MSEL Architect — You built an operational MSEL for a Full-Scale HAZMAT Exercise!",
      xpEarned: 850
    }
  },

  // ==========================================
  // SCENARIO 5: EEG Development — Mass Casualty
  // ==========================================
  {
    id: "build_eeg_mass_casualty",
    title: "Develop an EEG for Mass Casualty Response",
    description: "A hospital is conducting a Functional Exercise using a mass shooting scenario with 40 simulated casualties. As Lead Evaluator, you must develop the Exercise Evaluation Guide (EEG) for the 'Mass Search and Rescue Operations' and 'Public Health, Healthcare, and EMS' capabilities.",
    exerciseType: "FE",
    scenario: "Active Shooter — Mass Casualty Incident",
    difficulty: "normal",
    estimatedTime: "20 min",
    learningObjectives: [
      "Understand EEG structure and components",
      "Write effective capability targets",
      "Identify appropriate critical tasks",
      "Apply P-S-M-U rating scale"
    ],
    steps: [
      {
        stepNumber: 1,
        phase: "EEG Purpose",
        prompt: "Why are EEGs developed SPECIFIC to each jurisdiction rather than using a single universal FEMA EEG?",
        type: "multiple_choice",
        options: [
          "To give each jurisdiction the freedom to ignore national standards",
          "Because each jurisdiction has unique capability targets and critical tasks based on their own plans, policies, and procedures",
          "Because federal EEGs are classified and cannot be shared with local jurisdictions",
          "To reduce the paperwork burden on FEMA"
        ],
        correct: 1,
        feedback: "EEGs must be jurisdiction-specific because each organization has UNIQUE capability targets and critical tasks based on THEIR OWN plans, policies, procedures, and protocols. FEMA provides templates, but the content (capability targets, critical tasks) must reflect the jurisdiction's actual plans — otherwise you're evaluating against something they never agreed to follow.",
        templateOutput: "EEG DEVELOPMENT PRINCIPLE\nFEMA provides: EEG Template (structure, format, rating scale)\nJurisdiction provides: The CONTENT based on their specific:\n  • Plans (Emergency Operations Plan, Mass Casualty Plan)\n  • Policies (Hospital policies, EMS protocols)\n  • Procedures (SOPs, protocols)\n  • Protocols (Trauma activation, triage protocols)\n\nResult: An EEG that evaluates performance against THIS hospital's OWN standards — not a generic national benchmark."
      },
      {
        stepNumber: 2,
        phase: "Capability Target Writing",
        prompt: "You're writing the Capability Target for 'Public Health, Healthcare, and EMS' capability. A Capability Target is composed of Critical Task + Impact + Timeframe. Which option is a properly written Capability Target?",
        type: "multiple_choice",
        options: [
          "Treat all mass casualty patients appropriately",
          "Within 30 minutes of mass casualty activation, the hospital trauma team will triage and initiate treatment for all incoming casualties, achieving zero preventable deaths among salvageable patients, in accordance with Hospital Mass Casualty Protocol MCP-4",
          "Test the hospital's mass casualty response",
          "Improve trauma care outcomes during a mass casualty event"
        ],
        correct: 1,
        feedback: "Option B is a proper Capability Target: Critical Task ('triage and initiate treatment for all incoming casualties'), Impact ('achieving zero preventable deaths among salvageable patients'), Timeframe ('within 30 minutes of mass casualty activation'), and Reference ('Hospital Mass Casualty Protocol MCP-4'). It is observable, measurable, and tied to a specific standard.",
        templateOutput: "EEG CAPABILITY TARGET\nCapability: Public Health, Healthcare, and Emergency Medical Services\nCapability Target:\n'Within 30 minutes of mass casualty activation, the hospital trauma team will triage and initiate treatment for all incoming casualties, achieving zero preventable deaths among salvageable patients, in accordance with Hospital Mass Casualty Protocol MCP-4.'\n\nCapability Target Components:\n✓ Critical Task: Triage and initiate treatment for all casualties\n✓ Impact: Zero preventable deaths among salvageable patients\n✓ Timeframe: Within 30 minutes of mass casualty activation\n✓ Reference: Hospital Mass Casualty Protocol MCP-4"
      },
      {
        stepNumber: 3,
        phase: "Critical Tasks",
        prompt: "Under the Capability Target, you need to list Critical Tasks — specific actions needed to achieve the target. Which list of critical tasks is MOST appropriate for the mass casualty scenario?",
        type: "multiple_choice",
        options: [
          "1. Answer phone calls from media; 2. Update the hospital website; 3. Order additional medical supplies",
          "1. Activate mass casualty protocol and notify all department heads; 2. Establish triage area outside ED; 3. Assign patients to trauma bays using START triage; 4. Activate the blood bank and surgical suites; 5. Establish patient tracking system",
          "1. Evacuate the hospital; 2. Lock down all entrances; 3. Call 911",
          "1. Document all events in real time; 2. Brief senior leadership; 3. Submit FEMA report"
        ],
        correct: 1,
        feedback: "Critical Tasks must be SPECIFIC ACTIONS that directly achieve the Capability Target. The correct list covers: system activation, triage setup, patient sorting, resource mobilization, and patient tracking — all of which are observable, measurable actions tied to mass casualty protocol. Critical tasks are the 'what' that evaluators will specifically observe during the exercise.",
        templateOutput: "EEG CRITICAL TASKS — Mass Casualty Response\n1. Trauma team leader officially activates Hospital Mass Casualty Protocol MCP-4 and notifies all department heads within 5 minutes of incident notification\n2. External triage area established in ED ambulance bay within 10 minutes of protocol activation\n3. All incoming casualties triaged using START algorithm with triage tags applied within 5 minutes of patient arrival\n4. Blood bank placed on standby and surgical suites activated within 15 minutes of protocol activation\n5. Patient tracking system (SAVE system) activated and patient identification documented for all casualties within 30 minutes\n6. Hospital Command Center (HCC) fully staffed and operational within 20 minutes of protocol activation"
      },
      {
        stepNumber: 4,
        phase: "Observation During Exercise",
        prompt: "During the FE, as an evaluator observing the triage area, what specific behaviors should you document in your EEG Observation Space?",
        type: "multiple_choice",
        options: [
          "Your personal opinions about how the team 'seemed' to handle the situation",
          "Specific observable actions: who did what, when, with what result — activation of plans, resource requests, decisions made, information shared",
          "Only the mistakes you observe — not the things that went well",
          "A general summary of the overall exercise atmosphere"
        ],
        correct: 1,
        feedback: "Evaluators must document SPECIFIC OBSERVABLE ACTIONS: Who did what? When? What was the result? Evaluators observe: activation or implementation of plans/procedures, requests for resources, roles and responsibilities of agencies, pertinent decisions made, and information sharing. 'The team seemed unprepared' is NOT useful — 'At T+18 min, no patient tracking system activated (Critical Task 5 not met)' IS useful.",
        templateOutput: "EEG OBSERVATION SPACE (Sample Entries)\nT+0:00: Mass casualty protocol activation announced over intercom by Trauma Team Leader\nT+0:05: Department head notifications began — verified 7 of 9 departments received calls\nT+0:08: Triage team moved to ED ambulance bay. Triage tags and START reference cards present.\nT+0:15: First simulated casualty arrived. START triage applied correctly in 2 min 30 sec.\nT+0:22: Blood bank notified (7 min within standard). Surgical suites activation confirmed.\nT+0:35: SAVE patient tracking system still NOT activated (Critical Task 5 deadline exceeded)\n  → Note: Charge nurse stated 'we couldn't find the SAVE system login credentials'\nT+0:40: Hospital Command Center staffed — missing: Finance Section Chief, Safety Officer\nT+0:45: SAVE system finally activated (15 min beyond 30-min objective)\nRating consideration: Critical tasks 1-4 met; Tasks 5 and 6 partially met — likely S or M rating"
      },
      {
        stepNumber: 5,
        phase: "Applying P-S-M-U",
        prompt: "Based on your observations: mass casualty protocol activated on time ✓, triage area established on time ✓, START triage applied correctly ✓, blood bank activated on time ✓, SAVE patient tracking delayed 15 min ✗, HCC staffed but missing 2 positions ✗. What P-S-M-U rating do you assign?",
        type: "multiple_choice",
        options: [
          "P — Most things went well enough",
          "S — Objective substantially met but 2 critical tasks had notable issues",
          "M — Two critical task failures represent major challenges affecting objective achievement",
          "U — The mass casualty response failed completely"
        ],
        correct: 1,
        feedback: "S — Performed with Some Challenges is correct. 4 of 6 critical tasks were met on time; 2 tasks had challenges (SAVE system delayed, HCC incomplete). The PRIMARY capability target (triage and initiate treatment within 30 min) was substantially achieved — the overall objective was met. But challenges were observed (delays, missing HCC positions) that negatively impacted other activities. Rating 'M' would require the objective to be only PARTIALLY achieved.",
        templateOutput: "EEG FINAL RATING\nCapability: Public Health, Healthcare, and EMS\nRating: S — Performed with Some Challenges\n\nRationale:\n✓ ACHIEVED: Mass casualty protocol activation (on time)\n✓ ACHIEVED: Triage area established (on time)\n✓ ACHIEVED: START triage applied correctly\n✓ ACHIEVED: Blood bank/surgical suite activation (on time)\n✗ CHALLENGE: SAVE patient tracking delayed 15 min (login credential issue)\n✗ CHALLENGE: HCC missing 2 positions (not fully operational)\n\nStrength: Core triage and treatment procedures executed effectively\nArea for Improvement: Patient tracking system access and HCC staffing protocols\nRecommendation: Establish shared credential access for SAVE system; develop HCC alternate staffing roster"
      },
      {
        stepNumber: 6,
        phase: "EEG to AAR Pipeline",
        prompt: "After the exercise, how do EEG observations translate into the AAR?",
        type: "multiple_choice",
        options: [
          "EEG ratings are published directly without further analysis",
          "EEG observations are consolidated, analyzed for root causes, and become the basis for AAR observations (Strengths and Areas for Improvement) and ultimately corrective actions",
          "EEG data is used only for grant reporting, not the AAR",
          "EEG ratings are averaged into a single overall exercise score"
        ],
        correct: 1,
        feedback: "EEG observations are the raw data that feed into the AAR through data analysis. The process: EEG observations (raw data) → Data Synthesis/Analysis → Root Cause Analysis (WHY did issues occur?) → AAR Observations (Strengths and Areas for Improvement) → Recommendations → Improvement Plan (SMART corrective actions). The EEG is the foundation of the entire post-exercise improvement process.",
        templateOutput: "EEG → AAR PIPELINE\nEEG Observation: 'SAVE patient tracking system activated 15 min late; staff could not find login credentials'\n  ↓ Data Analysis\nRoot Cause: Login credentials not included in mass casualty protocol activation checklist; no annual credentials verification procedure\n  ↓ AAR Observation\n'Patient tracking system activation was delayed 15 minutes beyond the Protocol MCP-4 standard due to staff inability to access SAVE system login credentials. This delay increases risk of patient identity errors during a high-volume mass casualty event.'\n  ↓ Recommendation\n'Integrate SAVE system login credentials into the mass casualty protocol activation checklist; conduct annual credentials verification drill'\n  ↓ Corrective Action (SMART)\n'Hospital IT Department will integrate SAVE system credentials into the MCP-4 checklist and conduct annual verification drill by [DATE], with Charge Nurse Manager as POC'"
      }
    ],
    finalProduct: {
      title: "Completed Mass Casualty EEG Package",
      components: [
        "EEG development rationale",
        "Capability Target (Critical Task + Impact + Timeframe)",
        "6 Critical Tasks",
        "Sample Observation Space entries (time-stamped)",
        "P-S-M-U Rating with rationale",
        "EEG-to-AAR pipeline example"
      ],
      achievement: "Master Evaluator — You developed a comprehensive EEG and applied the P-S-M-U rating scale!",
      xpEarned: 800
    }
  },

  // ==========================================
  // SCENARIO 6: AAR/IP Writing — Post-Exercise Analysis
  // ==========================================
  {
    id: "write_aar_ip",
    title: "Write an AAR/IP After a Hurricane Exercise",
    description: "A 4-hour hurricane Tabletop Exercise has just concluded. Players discussed hurricane evacuation planning, shelter operations, and inter-agency coordination. You are the Lead Evaluator. Your EEGs show mixed results. Write the AAR and develop SMART corrective actions for the Improvement Plan.",
    exerciseType: "TTX",
    scenario: "Hurricane Evacuation Planning",
    difficulty: "normal",
    estimatedTime: "20 min",
    learningObjectives: [
      "Structure an AAR correctly",
      "Write effective AAR observations",
      "Conduct root cause analysis",
      "Develop SMART corrective actions for the IP matrix"
    ],
    steps: [
      {
        stepNumber: 1,
        phase: "AAR Structure",
        prompt: "You're organizing the AAR for the hurricane TTX. What is the correct structure of an HSEEP After-Action Report?",
        type: "multiple_choice",
        options: [
          "Introduction, Methods, Results, Discussion, Conclusion",
          "Cover Page, Executive Summary, Exercise Overview, Analysis of Capabilities, Conclusion, Appendices",
          "Mission Statement, Goals, Objectives, Performance, Score",
          "Incident Summary, Response Timeline, Resource List, Budget Analysis"
        ],
        correct: 1,
        feedback: "The HSEEP AAR structure: ① Cover/Title Page (name, date, organization, DRAFT/FINAL) ② Executive Summary (3 strengths, 3 areas for improvement, overall assessment) ③ Exercise Overview (design summary, objectives, scope, participants, timeline) ④ Analysis of Capabilities (core section — observation, reference, analysis, recommendations for each capability) ⑤ Conclusion ⑥ Appendices (acronyms, IP matrix, participant list).",
        templateOutput: "HURRICANE TTX AAR — DOCUMENT OUTLINE\n[DRAFT]\nExercise: Coastal County Hurricane Evacuation TTX\nDate: [Date] | Organization: Coastal County EM | Classification: DRAFT\n\n1. Executive Summary\n2. Exercise Overview\n   2.1 Exercise Design Summary\n   2.2 Exercise Objectives\n   2.3 Scope and Participating Organizations\n   2.4 Exercise Timeline\n3. Analysis of Capabilities\n   3.1 Operational Coordination\n   3.2 Mass Care Services\n   3.3 Critical Transportation\n4. Conclusion\nAppendix A: Acronyms\nAppendix B: Improvement Plan\nAppendix C: Participant List"
      },
      {
        stepNumber: 2,
        phase: "Observation Writing",
        prompt: "An evaluator observed: 'EOC staff didn't know which evacuation zones to activate for a Category 3 storm.' How should this be written as an AAR observation?",
        type: "multiple_choice",
        options: [
          "Staff were confused and unprepared during the exercise",
          "EOC Staff Unfamiliar with Hurricane Evacuation Zone Procedures: During Module 2 of the TTX, when presented with a simulated Category 3 hurricane scenario, 6 of 8 EOC staff were unable to correctly identify which evacuation zones should be activated, per the Hurricane Annex, Section 3. This suggests a gap in familiarity with the evacuation zone classification system that could result in inappropriate or delayed evacuation orders during a real hurricane event.",
          "Evacuation zones need to be improved",
          "Some staff didn't know the procedures, but others did, so it's okay"
        ],
        correct: 1,
        feedback: "Strong AAR observations require: ① Clear statement of the issue ② Brief description of the analysis ③ Description of the impact/result. Option B does all three: specific observation (6 of 8 staff, Module 2), analysis (unable to identify zones per Hurricane Annex Section 3), and impact (could result in inappropriate or delayed evacuation orders). Vague language in AARs leads to vague corrective actions.",
        templateOutput: "AAR OBSERVATION #3\nObservation Title: EOC Staff Unfamiliar with Hurricane Evacuation Zone Procedures\nCapability: Critical Transportation\nCore Capability Rating: M — Performed with Major Challenges\n\nReference: Hurricane Annex to County EOP, Section 3.2 — Evacuation Zone Classification\n\nAnalysis:\nDuring Module 2 of the TTX, when presented with a Category 3 hurricane scenario, 6 of 8 EOC staff were unable to correctly identify which evacuation zones (Zones A and B) should be activated. Staff indicated they were not aware the Hurricane Annex had been revised in 2023 to change Zone boundaries. This suggests a communication gap in plan update dissemination and a lack of familiarity with current evacuation zone classifications.\n\nImpact:\nIn a real Category 3 hurricane, this gap could result in failure to order timely evacuation of high-risk coastal areas, potentially exposing thousands of residents to life-threatening storm surge.\n\nRecommendation:\nConduct targeted training on revised Hurricane Annex evacuation zone classifications for all EOC staff; establish plan update notification procedures."
      },
      {
        stepNumber: 3,
        phase: "Root Cause Analysis",
        prompt: "To develop an effective corrective action for the evacuation zone issue, what root cause analysis question is MOST important to answer?",
        type: "multiple_choice",
        options: [
          "How many staff members were confused?",
          "Which specific staff members need to be replaced?",
          "WHY didn't staff know the procedures — was it a training gap, a plan update notification failure, a resource gap, or something else?",
          "How much will corrective training cost?"
        ],
        correct: 2,
        feedback: "Root Cause Analysis focuses on WHY the expected action did not occur — the MOST BASIC causal factor. In this case: Why didn't staff know? Because the Hurricane Annex was updated in 2023 but notifications didn't reach all EOC staff — a COMMUNICATION/NOTIFICATION gap, not just a training gap. A corrective action targeting only 'training' would miss the root cause (update dissemination process).",
        templateOutput: "ROOT CAUSE ANALYSIS\nObservation: 6 of 8 EOC staff unable to identify correct evacuation zones\nSymptom: Staff don't know the procedures\n  ↓\nWhy? Staff were not aware the Hurricane Annex was revised in 2023\n  ↓\nWhy? The plan update was not formally communicated to EOC staff\n  ↓\nWhy? There is no established procedure for notifying EOC staff when plans are revised\n  ↓\nROOT CAUSE: Absence of a plan update notification and verification process\n\nCorrectiveAction Focus:\nNOT just 'train staff on evacuation zones'\nBUT 'establish plan update notification process AND train staff on current procedures'\nCapability Element: Plan (update notification SOP needed)"
      },
      {
        stepNumber: 4,
        phase: "SMART Corrective Action",
        prompt: "Based on the root cause analysis, write a SMART corrective action for the Improvement Plan. Which option is SMART?",
        type: "multiple_choice",
        options: [
          "Train all EOC staff on hurricane procedures",
          "Fix the communication problems identified in the exercise",
          "Coastal County Emergency Management will: (1) develop a Plan Update Notification SOP by September 30; (2) distribute and train all 24 EOC staff on the revised Hurricane Annex evacuation zones by October 31; (3) EM Director to verify completion and report to the County Administrator by November 15",
          "Improve the Hurricane Annex and make sure everyone knows about it"
        ],
        correct: 2,
        feedback: "Option C is SMART: Specific (Coastal County EM, Plan Update Notification SOP, 24 EOC staff, Hurricane Annex evacuation zones), Measurable (SOP developed, all 24 staff trained, completion report), Achievable (realistic timeline), Relevant (directly addresses root cause — notification gap), Time-bound (September 30, October 31, November 15 deadlines). Options A, B, D are vague and unmeasurable.",
        templateOutput: "IMPROVEMENT PLAN — CORRECTIVE ACTION #3\nCapability: Critical Transportation\nObservation Title: EOC Staff Unfamiliar with Hurricane Evacuation Zone Procedures\nRecommendation: Establish plan update notification process; train all EOC staff on revised zones\n\nCorrective Action:\n'Coastal County Emergency Management will: (1) develop a Plan Update Notification SOP by September 30 [Year]; (2) distribute and train all 24 EOC staff on revised Hurricane Annex evacuation zones by October 31 [Year]; and (3) EM Director to verify completion and report status to the County Administrator by November 15 [Year].'\n\nCapability Element: Plan (SOP development); Train (EOC staff training)\nPrimary Responsible Agency: Coastal County Emergency Management\nAgency POC: [Name], EM Training Coordinator\nStart Date: [Date + 2 weeks]\nCompletion Date: November 15 [Year]"
      },
      {
        stepNumber: 5,
        phase: "After-Action Meeting",
        prompt: "Before finalizing the AAR/IP, you must conduct an After-Action Meeting (AAM). What is the primary purpose of the AAM?",
        type: "multiple_choice",
        options: [
          "To present the final AAR to the public",
          "To review the draft AAR/IP and reach FINAL CONSENSUS on findings and corrective actions with all participating stakeholders",
          "To plan the next exercise in the multi-year program",
          "To assign blame for the gaps identified during the exercise"
        ],
        correct: 1,
        feedback: "The AAM is an interactive session to: review and revise the draft AAR/IP; discuss exercise results; reach FINAL CONSENSUS on corrective actions, proposed deadlines, and responsible stakeholders. The AAM ensures all participants agree on what was found and what needs to be done — preventing disputes after the AAR is finalized.",
        templateOutput: "AFTER-ACTION MEETING AGENDA\nDate: [3 weeks after exercise]\nParticipants: All participating agency leads, exercise planning team\n\nAgenda:\n1. Welcome and AAM purpose (5 min)\n2. Review of draft AAR — Executive Summary (10 min)\n3. Discussion: Analysis of Capabilities (30 min)\n   - Operational Coordination: Findings and recommendations\n   - Mass Care Services: Findings and recommendations\n   - Critical Transportation: Findings and recommendations\n4. Review of Draft Improvement Plan (20 min)\n   - Validate corrective actions\n   - Confirm responsible agencies and POCs\n   - Confirm start and completion dates\n5. Final consensus vote on AAR/IP (10 min)\n6. Distribution plan for final AAR/IP (5 min)\n\nOutcome: Signed consensus on final AAR/IP; all corrective actions formally accepted by responsible agencies"
      },
      {
        stepNumber: 6,
        phase: "Corrective Action Tracking",
        prompt: "The final AAR/IP has been signed and distributed. What must happen to corrective actions to ensure they are actually implemented?",
        type: "multiple_choice",
        options: [
          "Corrective actions are automatically implemented once the AAR is published",
          "Each corrective action must be tracked and reported on until completion — using FEMA's CAP System in PrepToolkit; status reported to senior leaders regularly",
          "Corrective actions are reviewed only at the next IPPW in 2–3 years",
          "The Lead Evaluator is personally responsible for implementing all corrective actions"
        ],
        correct: 1,
        feedback: "Corrective actions must be ACTIVELY TRACKED until completion — not just documented and forgotten. HSEEP: 'Corrective actions should be tracked and reported on until completion.' FEMA's Corrective Action Program (CAP) System in PrepToolkit is the tool for this. Status should be reported to senior leaders regularly. The next exercise should VALIDATE that previous corrective actions were successfully implemented.",
        templateOutput: "CORRECTIVE ACTION TRACKING PLAN\nTool: FEMA Corrective Action Program (CAP) System — PrepToolkit\n\nFor Each Corrective Action:\n1. Enter into CAP System within 2 weeks of AAR finalization\n2. Assign POC with direct accountability\n3. Set interim check-in dates (monthly for complex CAs)\n4. Report status to EM Director quarterly\n\nCA #3 Tracking:\nSOP Development: Due September 30 → Check-in: September 1\nStaff Training: Due October 31 → Check-in: October 1\nCompletion Report: Due November 15 → EM Director review\n\nNext Exercise: Validate CA #3 implementation — include evacuation zone question in next TTX and observe whether staff now know the correct zones\n\nLoop Closes: Validated corrective action → Updated preparedness priorities → Next IPPW → Updated IPP → New exercise cycle"
      }
    ],
    finalProduct: {
      title: "Completed Hurricane TTX AAR/IP Package",
      components: [
        "AAR document structure outline",
        "AAR Observation #3 (complete, with analysis and impact)",
        "Root Cause Analysis tree",
        "SMART Corrective Action for IP matrix",
        "After-Action Meeting agenda",
        "Corrective Action tracking plan"
      ],
      achievement: "AAR/IP Specialist — You wrote a complete After-Action Report and Improvement Plan!",
      xpEarned: 800
    }
  },

  // ==========================================
  // SCENARIO 7: Full-Scale Exercise Planning
  // ==========================================
  {
    id: "plan_fse_multiagency",
    title: "Plan a Multi-Agency Full-Scale Exercise",
    description: "Year 3 of your progressive exercise program. Your county has completed discussion-based exercises and operational drills. Now: design a multi-agency Full-Scale Exercise (FSE) involving fire, EMS, law enforcement, hospitals, public health, and the EOC, using a mass casualty/active shooter scenario.",
    exerciseType: "FSE",
    scenario: "Active Shooter — Mass Casualty, Multi-Agency",
    difficulty: "hard",
    estimatedTime: "25 min",
    learningObjectives: [
      "Understand FSE as the most complex exercise type",
      "Apply the progressive approach",
      "Design the full planning meeting sequence for an FSE",
      "Identify unique FSE documentation and control requirements"
    ],
    steps: [
      {
        stepNumber: 1,
        phase: "Progressive Approach Validation",
        prompt: "Your 3-year program: Year 1 (TTX on active shooter response), Year 2 (Drills: communication drill, hospital drill, EOC activation FE), Year 3 (FSE). A senior leader asks why you're finally ready for an FSE. How do you explain the progressive approach?",
        type: "multiple_choice",
        options: [
          "We needed to complete all 7 exercise types in order before doing an FSE",
          "The TTX identified gaps conceptually; drills and the FE addressed and tested those gaps operationally; the FSE now validates that all fixes work together in a full multi-agency real-time response",
          "We simply ran out of time and must do the FSE now regardless of readiness",
          "FSEs are required annually by federal grant requirements"
        ],
        correct: 1,
        feedback: "This is exactly the progressive approach in action: TTX (conceptual understanding, gaps identified) → Drills/FE (individual functions and EOC procedures tested operationally) → FSE (full multi-agency validation). Each stage addressed the shortfalls of the previous one. The FSE tests whether ALL the pieces now work together in real time. This is how HSEEP is designed to build capability.",
        templateOutput: "PROGRESSIVE APPROACH DOCUMENTATION\nYear 1 (TTX): Identified gaps — inter-agency coordination, command structure, public alert timing\nYear 1 Corrective Actions: ICS training conducted; EOP revised; public alert procedure updated\n\nYear 2 (Drills + FE): \n  - Communication drill: Verified alert procedure works ✓\n  - Hospital drill: Evacuation procedures verified ✓\n  - EOC Activation FE: EOC management procedures tested ✓\nYear 2 Corrective Actions: SAVE system access fixed; alternate HCC staffing roster created\n\nYear 3 (FSE): VALIDATE that all components work together\n  - Multi-agency response coordination\n  - Real resource deployment\n  - Unified command with all agencies\n  - Public alerts during active response"
      },
      {
        stepNumber: 2,
        phase: "FSE Lead Time",
        prompt: "Your senior leader asks: 'Can we run this FSE in 8 weeks?' What should you tell them about FSE planning lead time?",
        type: "multiple_choice",
        options: [
          "8 weeks is plenty — we've done simpler exercises before",
          "Full-Scale Exercises require 6–18 months of planning lead time; 8 weeks is inadequate for coordinating multiple agencies, developing documents, conducting planning meetings, recruiting actors, and logistical preparations",
          "6–8 weeks is standard for all exercise types",
          "Lead time doesn't matter if you use the previous TTX scenario"
        ],
        correct: 1,
        feedback: "FSEs require 6–18 MONTHS of lead time. Why? Multiple venues to coordinate; extensive staffing (all planning team positions plus SimCell, controllers, evaluators); actors and role players (with Actor Briefs); props and special effects (moulage, vehicles, props); equipment (communications, medical supplies); multi-agency coordination; and the full 5-planning-meeting sequence. Rushing an FSE creates gaps and safety issues.",
        templateOutput: "FSE PLANNING TIMELINE (12-MONTH PLAN)\nMonth 1–2: Senior leader engagement; IPPW if not recent; C&O Meeting\nMonth 3–4: Initial Planning Meeting; begin ExPlan and scenario development\nMonth 5–6: Midterm Planning Meeting; develop MSEL, EEGs, C/E Handbook\nMonth 7–8: MSEL Meeting; finalize all MSEL events; recruit and assign actors\nMonth 9–10: Final Planning Meeting; approve all documents; rehearse\nMonth 11: C/E Briefing; Actor Briefing; final logistics\nMonth 12: EXERCISE DATE; conduct FSE\nMonth 13–15: AAR/IP development; After-Action Meeting; finalize AAR/IP"
      },
      {
        stepNumber: 3,
        phase: "FSE Documents",
        prompt: "Which combination of documents is required for an FSE that is NOT required for a TTX?",
        type: "multiple_choice",
        options: [
          "SitMan and Facilitator Guide",
          "EEGs and AAR/IP",
          "MSEL, C/E Handbook, Control Staff Instructions (COSIN), Actor Briefs, and Ground Truth document",
          "Exercise Objectives and a Scenario Summary"
        ],
        correct: 2,
        feedback: "FSEs require additional documentation beyond TTX documents. TTX requires: SitMan, EEGs, AAR/IP, Facilitator Guide. FSEs ALSO require: ExPlan (not SitMan), MSEL (chronological inject timeline), C/E Handbook (for controllers/evaluators), Ground Truth (consistent scenario details), EvalPlan, and for large FSEs, COSIN (Control Staff Instructions) and Actor Briefs for role players.",
        templateOutput: "FSE DOCUMENT SUITE\nFor Players/Observers:\n  ✓ Exercise Plan (ExPlan)\n  ✓ Player Handout (trifold quick reference)\n\nFor Controllers/Evaluators:\n  ✓ Controller/Evaluator (C/E) Handbook (contains MSEL + EEGs)\n  ✓ Ground Truth document\n  ✓ Evaluation Plan (EvalPlan)\n  ✓ Control Staff Instructions (COSIN) — for large FSE\n\nFor Actors/Role Players:\n  ✓ Actor Briefs (roles, symptoms, safety)\n\nPost-Exercise:\n  ✓ AAR/IP (required within 90 days)"
      },
      {
        stepNumber: 4,
        phase: "Safety Planning",
        prompt: "Your FSE uses simulated casualties with moulage makeup, real ambulances responding, and pyrotechnic smoke effects. What unique safety requirement does HSEEP specify for FSEs?",
        type: "multiple_choice",
        options: [
          "Safety is the player's personal responsibility; planners need not address it",
          "Safety is only important for HAZMAT exercises, not active shooter scenarios",
          "The Safety/Security Controller must ensure a safe environment throughout; safety issues regarding props, actors, and special effects must be continuously monitored; all participants are briefed on real-emergency procedures and code words to pause/stop the exercise",
          "Safety planning can wait until the day before the exercise"
        ],
        correct: 2,
        feedback: "Safety is especially critical for FSEs. HSEEP: 'Safety issues particularly regarding props and special effects must be monitored.' Required: Safety/Security Controller (dedicated position); safety procedures briefed to ALL participants; code words for pause ('TIME OUT') and stop ('ENDEX' or real emergency); moulage and pyrotechnic use reviewed for safety; all vehicles and equipment operated safely.",
        templateOutput: "FSE SAFETY PLAN HIGHLIGHTS\nSafety Controller: [Name], dedicated position throughout exercise\n\nCode Words:\n  Pause exercise: 'TIME OUT' (broadcast on radio)\n  End exercise: 'ENDEX' (broadcast on all channels)\n  Real emergency: 'ACTUAL EMERGENCY — ALL PLAY STOPS'\n\nSpecial Effects Safety:\n  - Moulage: Non-toxic materials only; brief actors on application/removal\n  - Smoke effects: Pre-approved by Fire Marshal; downwind assessment conducted\n  - Vehicles: Speed limits posted; staged areas marked; pedestrian exclusion zones\n\nActor Safety:\n  - All actors briefed on self-identification: 'I am an actor'\n  - Medical monitoring for any actor portraying injured victim\n  - Real first aid kit at every venue\n\nObserver/Media Safety:\n  - Designated observer areas only; escort required at all times\n  - Observer/Media Area Controller assigned"
      },
      {
        stepNumber: 5,
        phase: "Unified Command",
        prompt: "During the FSE, fire, law enforcement, and EMS all arrive at the 'active shooter with mass casualties' scene simultaneously. Each agency wants to be 'in command.' What HSEEP/NIMS-aligned approach should your exercise test for this?",
        type: "multiple_choice",
        options: [
          "One agency (Fire) should always be in charge at all incidents",
          "Each agency operates independently with no coordination",
          "Unified Command — a multi-agency command structure under ICS where all agencies maintain authority but coordinate through a single shared command post",
          "The agency with the most personnel automatically assumes command"
        ],
        correct: 2,
        feedback: "HSEEP specifies FSEs 'often include many players under cooperative systems (ICS/Unified Command).' Unified Command (UC) under ICS is the NIMS standard: each agency brings a representative to a shared Incident Command Post (ICP); decisions are made jointly; operational objectives are shared; each agency maintains its chain of command internally. This is exactly the type of multi-agency coordination an FSE is designed to test.",
        templateOutput: "FSE UNIFIED COMMAND STRUCTURE\nIncident Command Post Location: [Central staging area]\n\nUnified Command Representatives:\n  Fire Chief (or designee) — Fire/Rescue operations\n  Law Enforcement Incident Commander — Scene security, tactical\n  EMS Medical Director — Mass casualty medical operations\n  Emergency Manager — Agency coordination, resources\n\nShared Incident Objectives (written together at ICP):\n  1. Neutralize threat (Law Enforcement lead)\n  2. Establish casualty collection point (EMS lead)\n  3. Conduct mass casualty triage (EMS/Fire joint)\n  4. Coordinate hospital notifications (EMS/EM joint)\n  5. Manage scene perimeter and public safety (Law Enforcement lead)\n\nOperations Section: Integrated across all agencies\nLogistics: Shared resource pool\nFinance/Admin: Separate per agency"
      },
      {
        stepNumber: 6,
        phase: "SimCell Design",
        prompt: "In your FSE, the SimCell represents 35 non-participating entities (hospitals, state EOC, neighboring counties, media). What is the SimCell's primary role during exercise play?",
        type: "multiple_choice",
        options: [
          "The SimCell provides players with the correct answers when they are stuck",
          "The SimCell delivers simulated messages, calls, and actions from non-playing entities to drive exercise play and create a realistic environment",
          "The SimCell only manages the MSEL timer and has no contact with players",
          "The SimCell is optional for FSEs and only used in Functional Exercises"
        ],
        correct: 1,
        feedback: "The Simulation Cell (SimCell) is essential for operations-based exercises (FE and FSE). SimCell Controllers deliver scenario messages representing non-participating entities — they simulate calls from hospitals ('we're at capacity'), deliver media inquiry messages, simulate state EOC requests for situation reports, and inject environmental updates. This creates a realistic operational environment without requiring every outside agency to physically participate. SimCells are managed by SimCell Controllers who work from the MSEL.",
        templateOutput: "FSE SIMCELL OPERATIONAL PLAN\nSimCell Location: [Building B, Room 204 — isolated from main exercise venue]\nSimCell Lead: [Name]\nSimCell Staff: [5–8 controllers per venue, working in shifts]\n\nSimulated Entities:\n  Hospital A: 'Receiving capacity reached; divert all patients'\n  State EOC: 'Request SITREP every 30 minutes'\n  Neighboring County: 'Mutual aid team deploying — ETA 45 min'\n  Media/Press: 'Requesting comment on casualty numbers'\n  Public Hotline: 'Simulated 911 call volume spike'\n  Utility Company: 'Power restoration ETA 2 hours'\n\nInject Delivery Methods:\n  - Radio transmission (scripted communications)\n  - Phone calls (scripted talking points)\n  - Written messages/faxes (pre-printed)\n  - Email simulation (if EOC uses WebEOC/E-Team)\n\nContingency SimCell Injects:\n  If players fail to request mutual aid → SimCell proactively offers it\n  If hospital coordination delayed → SimCell escalates urgency"
      },
      {
        stepNumber: 7,
        phase: "Evaluation Strategy",
        prompt: "With 6 objectives, 12 venues, 300 participants, and multiple simultaneous activities in your FSE, how should you organize your evaluation team?",
        type: "multiple_choice",
        options: [
          "One evaluator is sufficient for all venues — they just walk around",
          "Assign one Lead Evaluator to oversee all evaluation; assign Venue Evaluators to each exercise location with specific EEG assignments; conduct debrief immediately after EndEx",
          "Evaluators should only observe the command post, not field operations",
          "Evaluation can be done after the exercise by watching video recordings"
        ],
        correct: 1,
        feedback: "Effective FSE evaluation requires a structured evaluation team: Lead Evaluator (oversees all evaluation, coordinates data collection); Venue Evaluators (one or more per venue, observe specific functions and record on EEGs); Note Takers (support data collection); all assigned specific EEGs and capability targets. With 12 venues you need 12+ evaluators. After EndEx: immediate C/E Debrief → collect EEGs and PFFs → data synthesis → AAR/IP (within 90 days).",
        templateOutput: "FSE EVALUATION TEAM STRUCTURE\nLead Evaluator: [Name] — overall coordination, final AAR responsibility\n\nVenue Evaluator Assignments:\n  Unified Command Post: 2 evaluators (Objective 1, 2)\n  Mass Casualty Site Alpha: 2 evaluators (Objective 3, 4)\n  Hospital Emergency Operations: 1 evaluator (Objective 4)\n  County EOC: 2 evaluators (Objectives 1, 2, 5)\n  Evacuation Route Control Points: 1 evaluator (Objective 5)\n  Mass Casualty Collection Point: 1 evaluator (Objective 3)\n  Family Assistance Center: 1 evaluator (Objective 6)\n\nData Collection Methods:\n  Primary: Direct observation (EEGs)\n  Secondary: Participant Feedback Forms (PFFs)\n  Tertiary: Hotwash notes; documentation review\n\nPost-Exercise Timeline:\n  EndEx → 1 hour: C/E Debrief (evaluators share initial observations)\n  Day 1–7: Evaluators submit EEG notes to Lead Evaluator\n  Day 7–30: Data synthesis and analysis\n  Day 30–45: Draft AAR/IP\n  Day 45–60: After-Action Meeting (AAM)\n  Day 60–90: Final AAR/IP distributed to all participants"
      },
      {
        stepNumber: 8,
        phase: "FSE AAR/IP",
        prompt: "After your FSE, the AAR identifies 3 strengths and 8 areas for improvement. One critical finding: ICS Unified Command was established 47 minutes after incident start — the plan requires 15 minutes. What is the BEST corrective action format?",
        type: "multiple_choice",
        options: [
          "Corrective Action: 'Improve Unified Command speed' — assigned to 'everyone' with no deadline",
          "Corrective Action: 'By March 31, the Fire Department, Law Enforcement, and EMS will co-facilitate a 4-hour workshop on Unified Command protocols; followed by a drill testing UC establishment within 15 minutes. Responsible: Emergency Manager; POC: [Name/contact]; Start: January 15; Completion: March 31.'",
          "Corrective Action: 'Conduct another FSE' — this will fix the problem automatically",
          "No corrective action needed — 47 minutes is close enough to 15 minutes"
        ],
        correct: 1,
        feedback: "SMART Corrective Actions require: Specific (what action, who does it); Measurable (workshop + drill with 15-minute standard); Achievable (realistic in given timeframe); Relevant (directly addresses UC coordination gap); Time-bound (specific start and completion dates, specific POC). The AAR/IP matrix should capture: Capability, Observation, Recommendation, Corrective Action, Responsible Agency, POC, Start Date, Completion Date.",
        templateOutput: "FSE AAR/IP IMPROVEMENT PLAN MATRIX (Sample Row)\n\nCapability: Operational Coordination\nObservation Title: Delayed Unified Command Establishment\nAnalysis: During the FSE, Unified Command was established 47 minutes after incident initiation. The Joint Operational Plan requires UC within 15 minutes. Delay caused by: (1) absence of pre-identified UC representative from Law Enforcement; (2) ICP location not pre-coordinated; (3) no pre-scripted UC checklist.\nRecommendation: Conduct joint Unified Command workshop and drill across Fire, Law Enforcement, and EMS.\nCorrective Action: Fire Dept, Law Enforcement, and EMS will co-facilitate a half-day Unified Command workshop (March 15) followed by a Drill testing UC establishment within 15 minutes (May 30). Pre-designated UC representatives will be identified by March 1.\nCapability Element: Train; Plan\nPrimary Responsible Agency: Emergency Management Office\nAgency POC: [Director Name], [Phone/Email]\nStart Date: January 15\nCompletion Date: May 30\nStatus: [Tracked via CAP System]"
      }
    ],
    finalProduct: "Completed Full-Scale Exercise Plan, MSEL, and Post-Exercise AAR/IP",
    learningObjectives: [
      "Design a Full-Scale Exercise from scratch using HSEEP methodology",
      "Identify lead time requirements for FSE planning",
      "Build a complete document suite for an FSE",
      "Design a multi-agency evaluation strategy",
      "Write SMART corrective actions from FSE findings"
    ]
  },

  // ============================================
  // SCENARIO 8: IPPW — Multi-Year Exercise Planning
  // ============================================
  {
    id: "ippw_multiyear",
    title: "Integrated Preparedness Planning Workshop (IPPW)",
    description: "Facilitate an IPPW to design a 3-year exercise program for a mid-size county",
    exerciseType: "Workshop (IPPW)",
    difficulty: "hard",
    estimatedTime: "50 minutes",
    prerequisite: "Recommended: Complete at least 3 other scenarios first",
    steps: [
      {
        stepNumber: 1,
        phase: "IPPW Purpose",
        prompt: "Your county has not conducted formal exercise planning in 3 years. The Emergency Manager wants to restart. What is the PRIMARY purpose of conducting an IPPW?",
        type: "multiple_choice",
        options: [
          "To train frontline responders on disaster response procedures",
          "To establish the strategy and structure for an exercise program, develop a multi-year schedule, confirm whole community coordination, and produce the Integrated Preparedness Plan (IPP)",
          "To conduct a tabletop exercise on the county's most likely hazard",
          "To review the AAR from the last exercise"
        ],
        correct: 1,
        feedback: "The IPPW is a program-level planning meeting, not an individual exercise. Its purpose: use senior leader guidance to set preparedness priorities; develop a multi-year schedule; confirm whole community coordination; prevent duplication; ensure efficient resource use. Outputs: Integrated Preparedness Plan (IPP) and Integrated Preparedness Schedule (IPS).",
        templateOutput: "IPPW PLANNING CHECKLIST\nPre-IPPW:\n  □ Brief senior leaders on IPPW purpose\n  □ Identify whole community participants\n  □ Gather THIRA, prior AAR/IPs, grant requirements\n  □ Reserve venue with breakout capability\n  □ Prepare read-ahead materials\n\nIPPW Participant Categories:\n  □ Senior leaders (Mayor, County Executive, Department Heads)\n  □ Planning, training, exercise, grant program managers\n  □ Law enforcement, fire, EMS, public health\n  □ Private sector and critical infrastructure\n  □ Volunteer organizations (CERT, Red Cross, VOAD)\n  □ Faith-based community representatives\n  □ Advocates for access and functional needs\n  □ Healthcare system representatives\n  □ Schools and educational institutions"
      },
      {
        stepNumber: 2,
        phase: "Threat and Hazard Input",
        prompt: "During the IPPW, the facilitator asks: 'What threats and hazards should drive our exercise priorities?' Which document is the PRIMARY source for answering this question?",
        type: "multiple_choice",
        options: [
          "The previous AAR/IP from the last exercise",
          "The national news and current events",
          "The Threat and Hazard Identification and Risk Assessment (THIRA) — the county's formal risk assessment",
          "Personal opinions of senior leaders without documented risk data"
        ],
        correct: 2,
        feedback: "The THIRA is the foundational risk document that drives exercise priorities. It identifies jurisdictional threats/hazards, their probability and magnitude, and capability gaps. HSEEP: exercises should be 'informed by risk.' Other inputs: prior AAR/IPs, external sources (grant requirements, state/national reports), accreditation requirements.",
        templateOutput: "IPPW RISK ANALYSIS INPUT SUMMARY\nSource: County THIRA (last updated: [Date])\n\nTop-Ranked Threats/Hazards:\n  1. Severe Weather / Tornado (Probability: High / Impact: High)\n  2. HazMat Transportation Incident (Probability: Moderate / Impact: High)\n  3. Active Shooter / Mass Casualty (Probability: Low / Impact: Catastrophic)\n  4. Cyber Attack on Critical Infrastructure (Probability: Moderate / Impact: High)\n  5. Pandemic / Public Health Emergency (Probability: Moderate / Impact: High)\n\nOpen Corrective Actions from Prior Exercises:\n  - EOC activation time consistently exceeds 2-hour target\n  - Mass notification system procedures unclear to 60% of staff\n  - No current Mutual Aid Agreement with neighboring County B\n\nGrant Requirements:\n  - EMPG: Requires one TTX and one operations-based exercise annually"
      },
      {
        stepNumber: 3,
        phase: "Preparedness Priorities",
        prompt: "Based on your THIRA review, IPPW participants identify 'EOC Activation and Coordination' as the top preparedness priority. What is the CORRECT next step?",
        type: "multiple_choice",
        options: [
          "Immediately design a Full-Scale Exercise to test EOC activation",
          "Write detailed SOPs for EOC activation during the IPPW itself",
          "Translate the priority into a multi-year exercise objective and schedule appropriate exercise types progressively",
          "Conduct an online survey of all county employees about their EOC knowledge"
        ],
        correct: 2,
        feedback: "After setting priorities, the IPPW translates them into a multi-year program. For EOC Activation: Year 1 — Seminar (orient new EOC staff) + TTX (test EOC coordination plan); Year 2 — Drill (time EOC notification) + FE (full EOC activation); Year 3 — validate improvements through FSE. Each year builds on findings from the previous. The IPPW creates this schedule (IPS) and captures it in the IPP.",
        templateOutput: "IPPW PRIORITY-TO-PROGRAM MAPPING\nPriority 1: EOC Activation and Coordination\n\n3-Year Exercise Plan:\n  YEAR 1 (Discussion-Based Foundation)\n    Q2: Seminar — EOC roles and plan orientation for all new staff\n    Q3: Workshop — Revise EOC Standard Operating Procedures\n    Q4: Tabletop Exercise — EOC activation using Severe Weather scenario\n\n  YEAR 2 (Operational Validation)\n    Q1: Implement corrective actions from Year 1 TTX\n    Q2: Drill — EOC notification and activation (timed; 2-hour target)\n    Q3: Functional Exercise — Full EOC activation with SimCell active\n\n  YEAR 3 (Integration)\n    Q1: Implement corrective actions from Year 2 FE\n    Q3: Full-Scale Exercise — Multi-agency response; full EOC operational\n    Q4: IPPW — Reassess priorities; develop next 3-year cycle"
      },
      {
        stepNumber: 4,
        phase: "Whole Community Integration",
        prompt: "The IPPW planning team consists only of fire, EMS, and law enforcement. The Emergency Manager notices private hospitals, schools, and faith-based organizations are absent. What should the EM do?",
        type: "multiple_choice",
        options: [
          "Proceed without them — first responders are the only ones who matter in exercises",
          "Send them the finished IPP by email and ask for comments",
          "Pause the IPPW and re-invite the missing whole community partners — their input is essential",
          "Conduct a separate planning process for non-governmental organizations"
        ],
        correct: 2,
        feedback: "HSEEP Principle #5: Whole Community Integration. Missing stakeholders = missing perspectives. Hospitals must know mass casualty surge plans; schools have student safety needs; faith-based organizations provide shelter and volunteer resources. Without them, exercises miss critical interfaces, and corrective actions won't be implemented across the whole community.",
        templateOutput: "IPPW WHOLE COMMUNITY STAKEHOLDER LIST\nGovernment:\n  □ Mayor/County Executive, Emergency Management, Fire, Law Enforcement, EMS\n  □ Public Health, Transportation/Public Works, Utilities, Schools\n\nPrivate Sector:\n  □ Hospitals and Healthcare Systems\n  □ Critical Infrastructure (power, water, communications, food supply)\n  □ Business community (Chamber of Commerce)\n\nNon-Governmental:\n  □ Red Cross / VOAD (Voluntary Organizations Active in Disaster)\n  □ Faith-based organizations\n  □ Community Emergency Response Teams (CERT)\n\nVulnerable Populations Advocates:\n  □ Disability rights advocates\n  □ Organizations serving elderly populations\n  □ Non-English speaking community leaders"
      },
      {
        stepNumber: 5,
        phase: "IPP Development",
        prompt: "The IPPW is complete. What is the PRIMARY document that captures the priorities, exercise types, and 3-year schedule agreed upon at the IPPW?",
        type: "multiple_choice",
        options: [
          "The After-Action Report (AAR)",
          "The Master Scenario Events List (MSEL)",
          "The Integrated Preparedness Plan (IPP) — a document combining efforts across all elements of the Integrated Preparedness Cycle with a multi-year exercise schedule",
          "The Situation Manual (SitMan)"
        ],
        correct: 2,
        feedback: "The Integrated Preparedness Plan (IPP) is the primary IPPW output. It includes: preparedness priorities; the multi-year exercise program; training activities; plan development activities; resource requirements; funding sources; and the Integrated Preparedness Schedule (IPS). The IPP serves as the roadmap for the next 3–5 years of preparedness activities.",
        templateOutput: "INTEGRATED PREPAREDNESS PLAN (IPP) — TABLE OF CONTENTS\n[County Name] IPP — Version 1.0\n\nSECTION 1: EXECUTIVE SUMMARY\n  1.1 Purpose and Scope\n  1.2 Senior Leader Guidance\n  1.3 Key Preparedness Priorities\n\nSECTION 2: JURISDICTION OVERVIEW\n  2.1 Jurisdiction Profile; 2.2 Whole Community Stakeholders; 2.3 Existing Plans\n\nSECTION 3: THREAT AND HAZARD OVERVIEW\n  3.1 THIRA Summary; 3.2 Capability Gap Assessment; 3.3 Open Corrective Actions\n\nSECTION 4: PREPAREDNESS PRIORITIES\n  4.1 EOC Activation and Coordination\n  4.2 Mass Notification\n  4.3 Mass Casualty Response\n\nSECTION 5: INTEGRATED PREPAREDNESS SCHEDULE (IPS)\n  5.1 Year 1 Activities; 5.2 Year 2 Activities; 5.3 Year 3 Activities\n\nSECTION 6: RESOURCES AND FUNDING\n  6.1 Budget; 6.2 Grant Alignment; 6.3 Staffing\n\nSECTION 7: REPORTING AND REVIEW\n  7.1 Reporting Schedule; 7.2 Senior Leader Updates; 7.3 IPP Revision Triggers"
      },
      {
        stepNumber: 6,
        phase: "Progressive Planning Rationale",
        prompt: "A new county commissioner asks why the 3-year plan doesn't START with a Full-Scale Exercise. 'Why waste time on seminars and tabletops?' What is the correct response?",
        type: "multiple_choice",
        options: [
          "The commissioner is right — FSEs find all problems at once",
          "The progressive approach is required by law — all types must be completed in order",
          "Starting with an FSE when plans are untested risks exposing significant operational failures publicly, wastes resources on capabilities not yet trained, and demoralizes participants; the progressive approach builds knowledge through lower-risk exercises before testing integrated operations",
          "All exercise types are equally effective — order doesn't matter"
        ],
        correct: 2,
        feedback: "HSEEP Principle #4: Progressive Exercise Planning Approach. Starting with an FSE when plans are untested is like taking a final exam without studying. The progressive approach: (1) builds shared understanding through seminars/workshops; (2) tests plans through TTX; (3) tests specific functions through drills; (4) integrates at management level through FE; (5) validates full integration through FSE. It is also more cost-efficient.",
        templateOutput: "PROGRESSIVE APPROACH — COST COMPARISON\n\nProgressive 3-Year Program:\n  Year 1 — Seminar ($500) + Workshop ($1,000) + TTX ($3,000): $4,500\n  Year 2 — Corrective Actions ($8,000) + Drill ($2,000) + FE ($15,000): $25,000\n  Year 3 — Corrective Actions ($12,000) + FSE ($75,000): $87,000\n  Total: ~$116,500 — with systematic improvement at each stage\n\nFSE-First Approach:\n  Year 1 FSE ($75,000): Major failures; 15+ corrective actions; staff demoralized\n  Year 2 FSE ($75,000): Some improvement; still significant gaps\n  Year 3 FSE ($75,000): Marginally better\n  Total: $225,000 — with less systematic learning\n\nConclusion: Progressive approach is more effective AND more cost-efficient"
      }
    ],
    finalProduct: "Integrated Preparedness Plan (IPP) with 3-Year Exercise Schedule",
    learningObjectives: [
      "Explain the purpose and outputs of the IPPW",
      "Identify required whole community participants",
      "Connect THIRA findings to preparedness priorities",
      "Design a progressive 3-year exercise program",
      "Describe the structure of the IPP and IPS"
    ]
  }
];
// ============================================

const HSEEP_TEMPLATES = {

  // ==========================================
  // TEMPLATE 1: SITUATION MANUAL (SitMan)
  // ==========================================
  sitman: {
    name: "Situation Manual (SitMan)",
    abbreviation: "SitMan",
    description: "The primary participant reference document for discussion-based exercises. Contains the exercise overview, general information, scenario narrative organized into modules, and appendices. Distributed to ALL participants.",
    usedFor: ["Tabletop Exercise (TTX)", "Seminar (if discussion-based)", "Workshop"],
    notUsedFor: ["Drills", "Functional Exercises", "Full-Scale Exercises — use ExPlan instead"],
    keyFact: "The SitMan contains the scenario information. The ExPlan does NOT contain the scenario (that goes in the C/E Handbook for ops-based exercises).",
    sections: [
      {
        sectionNumber: 1,
        title: "Exercise Overview",
        purpose: "Provides the 'who, what, when, where' summary for the entire exercise at a glance",
        fields: [
          { field: "Exercise Name", example: "City of Riverdale Earthquake Response TTX", tip: "Include type (TTX) in the name for clarity" },
          { field: "Exercise Dates", example: "March 15, 2025 — 9:00 AM to 3:00 PM", tip: "Include start and end times" },
          { field: "Exercise Location", example: "City Hall, Council Chambers, 100 Main Street, Riverdale", tip: "Include room/building name" },
          { field: "Exercise Scope", example: "This TTX focuses on the City of Riverdale's earthquake response plans, including EOC activation, mass notification, and inter-agency coordination with County OEM.", tip: "Keep to 2–3 sentences; define what IS included and what is out-of-scope" },
          { field: "Focus Areas / Core Capabilities", example: "Operational Coordination; Public Information and Warning; Mass Care Services", tip: "List the specific core capabilities being exercised" },
          { field: "Exercise Objectives", example: "1. Assess the ability of City staff to activate the EOC within 2 hours of a major earthquake. 2. Evaluate inter-agency coordination protocols...", tip: "List all SMART objectives — typically 3–5 for a TTX" },
          { field: "Threat/Hazard", example: "7.2 magnitude earthquake; epicenter 15 miles northeast of Riverdale; significant structural damage citywide", tip: "Summarize the scenario hazard in one or two sentences" },
          { field: "Exercise Sponsor", example: "City of Riverdale Office of Emergency Management", tip: "The primary organization responsible for the exercise" },
          { field: "Participating Organizations", example: "City OEM, Fire Dept, Police Dept, Public Works, Health Dept, Red Cross Chapter, County OEM", tip: "List all organizations sending participants" },
          { field: "Point of Contact", example: "Jane Smith, Emergency Manager — jsmith@riverdale.gov — (555) 867-5309", tip: "The person to contact for logistical questions" }
        ]
      },
      {
        sectionNumber: 2,
        title: "General Information",
        purpose: "Explains how the exercise works — rules, roles, structure, and evaluation. Read and understood by all participants before play begins.",
        subsections: [
          {
            title: "Exercise Objectives and Capabilities (Table)",
            content: "A table mapping each objective to its core capability and mission area",
            format: "| Objective # | SMART Objective Statement | Core Capability | Mission Area |"
          },
          {
            title: "Exercise Roles and Responsibilities",
            content: "Defines the four participant roles",
            roles: [
              { role: "Players", description: "Respond to the scenario; discuss issues and solutions; represent their actual positions/agencies; make decisions based on their plans and procedures" },
              { role: "Facilitators", description: "Provide situation updates; prompt discussion with questions; keep discussion on track; do not participate as players; ensure all objectives are addressed" },
              { role: "Evaluators", description: "Observe and document discussions; assess performance against EEGs; do not participate in discussions; compile data for AAR/IP" },
              { role: "Observers", description: "Attend for informational purposes only; do not participate in discussions; may include VIPs, media, neighboring jurisdictions" }
            ]
          },
          {
            title: "Exercise Structure",
            content: "Describes the modules (e.g., 'Module 1 — Initial Response; Module 2 — Escalating Operations; Module 3 — Recovery Considerations')",
            format: "Each module has a scenario update, key issues, and discussion questions"
          },
          {
            title: "Exercise Guidelines",
            content: "The ground rules for exercise participation",
            rules: [
              "This exercise is conducted in a no-fault environment. The purpose is to improve systems, not to evaluate individual performance.",
              "This is a discussion exercise — no actual resources will be mobilized.",
              "Assume the scenario as presented; do not change scenario conditions.",
              "Use existing plans, procedures, and resources as they would exist during a real event.",
              "If a real emergency occurs, the Exercise Director will announce 'REAL WORLD — ALL PLAY STOPS.'"
            ]
          },
          {
            title: "Exercise Evaluation",
            content: "Brief description of how evaluation occurs — EEGs guide evaluators; PFFs collected at end; AAR/IP produced within 90 days"
          }
        ]
      },
      {
        sectionNumber: 3,
        title: "Modules (1, 2, 3...)",
        purpose: "The scenario content — each module presents a new phase of the scenario with discussion questions",
        structure: {
          scenarioNarrative: "Time-stamped scenario description presenting conditions at that point in the incident. Written in present tense as if it is happening now.",
          keyIssues: "A bulleted list of the major issues this module is intended to surface for discussion",
          discussionQuestions: "5–10 facilitated discussion questions, organized by functional group (Operations, Logistics, Communications, etc.)",
          exampleModule: {
            title: "Module 1 — Initial Response (Exercise Time: H+0 to H+2)",
            narrative: "0634 hours. A 7.2 magnitude earthquake has struck 15 miles northeast of Riverdale. Shaking lasted approximately 45 seconds. Initial reports indicate widespread structural damage across the downtown corridor. Power is out in 60% of the city. 911 call volume has exceeded system capacity. The City EOC has not yet been activated. Mayor Chen is requesting a situation briefing.",
            keyIssues: [
              "EOC activation decision and timeline",
              "Initial assessment and situational awareness",
              "Mass notification system activation",
              "Inter-agency resource requests"
            ],
            discussionQuestions: [
              "(Operations) What triggers EOC activation per your Emergency Operations Plan? Who has activation authority?",
              "(Operations) What are your immediate priorities in the first 30 minutes?",
              "(Communications) How do you notify the public of the earthquake and initial safety guidance?",
              "(Logistics) What mutual aid resources can you request, and from whom?",
              "(All) How do you establish situational awareness when communications are degraded?"
            ]
          }
        }
      },
      {
        sectionNumber: 4,
        title: "Appendices",
        purpose: "Supporting reference materials",
        appendices: [
          { name: "Appendix A: Exercise Schedule", content: "Detailed time schedule for the exercise day" },
          { name: "Appendix B: Acronyms", content: "Full glossary of acronyms used in the SitMan" },
          { name: "Appendix C: Relevant Plans and References", content: "List of plans, SOPs, and documents relevant to exercise discussion" },
          { name: "Appendix D: Participating Organization List", content: "Confirmed list of all participating organizations and number of representatives" },
          { name: "Appendix E: Participant Feedback Form (PFF)", content: "The feedback form to be completed by all participants at exercise conclusion" }
        ]
      }
    ],
    commonMistakes: [
      "Including scenario 'answer keys' in the SitMan — let participants work through problems themselves",
      "Making the SitMan too long (>50 pages) — participants don't read it",
      "Not including the exercise guidelines (no-fault environment, real-world emergency procedures)",
      "Writing scenario narratives in past tense — use present tense for immersion",
      "Distributing SitMan by email days before the exercise — participants lose interest; distribute day-of"
    ]
  },

  // ==========================================
  // TEMPLATE 2: EXERCISE PLAN (ExPlan)
  // ==========================================
  explan: {
    name: "Exercise Plan (ExPlan)",
    abbreviation: "ExPlan",
    description: "The general information document for operations-based exercises. Provides exercise objectives, scope, background, schedule, and participant roles. Does NOT include scenario information (that goes in the C/E Handbook). Typically 10–20 pages. Distributed to players and observers.",
    usedFor: ["Drill", "Functional Exercise (FE)", "Full-Scale Exercise (FSE)"],
    notUsedFor: ["Tabletop Exercises — use SitMan instead"],
    keyFact: "The ExPlan does NOT contain the scenario. Players receive objectives but not the MSEL events. This maintains exercise realism.",
    sections: [
      {
        sectionNumber: 1,
        title: "General Information",
        fields: [
          { field: "Exercise Name", example: "Riverdale County Mass Casualty Functional Exercise 2025", tip: "Include exercise type in the name" },
          { field: "Exercise Type", example: "Functional Exercise", tip: "Use precise HSEEP terminology" },
          { field: "Dates and Times", example: "June 10, 2025 — 0800 to 1700", tip: "Include setup time (often day before) and EndEx time" },
          { field: "Location(s)", example: "Primary Venue: County EOC, 500 County Rd. SimCell Location: Building B, Room 204.", tip: "List all venues separately" },
          { field: "Exercise Sponsor", example: "Riverdale County Office of Emergency Management", tip: "" },
          { field: "Point of Contact", example: "John Lee, Exercise Director — jlee@riverdalecounty.gov", tip: "" },
          { field: "Participating Organizations", example: "County OEM, Fire District 1, 2, 3; Sheriff's Office; Hospital A, B; Public Health; Red Cross", tip: "Confirm participation in writing before ExPlan distribution" }
        ]
      },
      {
        sectionNumber: 2,
        title: "Scenario Overview",
        purpose: "Provides general background of the scenario without revealing the MSEL events. Gives players enough context to understand the operational environment.",
        content: "Brief scenario background (1–2 paragraphs): date/time, general incident type, geographic scope, initial conditions. Does NOT include specific inject details, casualties, or expected player actions.",
        example: "At 0800 on June 10, 2025, a simulated chemical spill at the Riverdale Industrial Park has resulted in a declared mass casualty incident. Multiple agencies are responding under Unified Command. This exercise will test County EOC coordination, inter-agency resource management, and public information operations. [No further scenario details — those are in the C/E Handbook.]"
      },
      {
        sectionNumber: 3,
        title: "Exercise Objectives and Capabilities",
        format: "Table with 3 columns: Objective Number | SMART Objective | Core Capability Aligned",
        example: [
          { obj: 1, statement: "Within 60 minutes of exercise start, the County EOC will activate to Level 2 operations and establish communications with all responding agencies per the County EOP, Annex C.", capability: "Operational Coordination" },
          { obj: 2, statement: "Within 30 minutes of mass casualty declaration, EMS will establish a Casualty Collection Point and initiate START triage per Mass Casualty Annex procedures.", capability: "Public Health, Healthcare, and EMS" },
          { obj: 3, statement: "Within 15 minutes of notification, Public Information Officer will draft and disseminate public protective action alert via county mass notification system.", capability: "Public Information and Warning" }
        ]
      },
      {
        sectionNumber: 4,
        title: "Exercise Structure",
        content: "Timeline of major exercise phases, key events (without specific injects), venue descriptions, and communication protocols between venues"
      },
      {
        sectionNumber: 5,
        title: "Exercise Conduct",
        fields: [
          "Rules of the exercise (no-fault environment; movement of resources simulated not real; SimCell represents non-playing entities)",
          "Safety procedures: Safety Controller name; code word for pause: 'TIME OUT'; code word for end: 'ENDEX'; real emergency procedure",
          "Control structure: who the lead controller is; how injects are delivered; how contingency injects work"
        ]
      },
      {
        sectionNumber: 6,
        title: "Exercise Roles and Responsibilities",
        roles: ["Players", "Controllers", "Evaluators", "Observers", "Actors/Role Players (FSE/FE only)"]
      },
      {
        sectionNumber: 7,
        title: "Administration and Logistics",
        fields: [
          "Registration: check-in location, time, required ID",
          "Attire: appropriate clothing (uniforms, ID badges, safety vests for controllers)",
          "Communications: radio channels assigned by role; cell phone use policies",
          "Parking: designated areas by participant type",
          "Meals and refreshments: provided or self-provided"
        ]
      }
    ],
    commonMistakes: [
      "Including MSEL events or scenario details in the ExPlan — this ruins exercise realism",
      "Distributing the ExPlan too late — participants need 2+ weeks to review",
      "Making it generic — ExPlan should reference the jurisdiction's specific plans and procedures",
      "Omitting the safety section and real-emergency procedures"
    ]
  },

  // ==========================================
  // TEMPLATE 3: MASTER SCENARIO EVENTS LIST (MSEL)
  // ==========================================
  msel: {
    name: "Master Scenario Events List (MSEL)",
    abbreviation: "MSEL",
    description: "A chronological timeline of expected actions and scripted events (injects) to be delivered by controllers during operations-based exercises. The MSEL ensures exercise objectives are met by driving player activity through simulated events. Contained in the Controller/Evaluator Handbook — NOT distributed to players.",
    usedFor: ["Functional Exercise (FE)", "Full-Scale Exercise (FSE)", "Some Drills (complex ones)"],
    notUsedFor: ["Seminars", "Workshops", "Tabletop Exercises"],
    keyFact: "MSEL events must be tied to specific exercise objectives. Every inject should drive player actions that demonstrate performance against a SMART objective.",
    columns: [
      { column: "Event #", description: "Sequential number (e.g., 001, 002)", example: "MSEL-001" },
      { column: "Time / Phase", description: "Exact time or exercise phase when inject is delivered", example: "H+0:15 (15 minutes after StartEx)" },
      { column: "Event Type", description: "Inject / Expected Action / Contingency Inject", example: "Inject" },
      { column: "Inject/Description", description: "The full text of what the SimCell or Controller delivers to the player", example: "SimCell calls EOC Director: 'This is Hospital A Emergency Operations. We are currently at 80% capacity. We have received 12 patients. We estimate surge capacity will be reached in 90 minutes. We need guidance on patient diversion procedures.'" },
      { column: "Originator", description: "Who delivers the inject (SimCell, Controller name, Radio)", example: "SimCell — Hospital A representative" },
      { column: "Target Player/Position", description: "The specific player or position who receives the inject", example: "EOC Director / Medical Branch Director" },
      { column: "Expected Player Action", description: "What the player is expected to DO in response — this is what evaluators observe", example: "EOC Director activates patient surge protocol per EOP Annex H; notifies all hospitals of divert status; requests county health officer to activate Hospital Incident Command" },
      { column: "Objective(s)", description: "Which exercise objective(s) this event tests", example: "Objective 2 — Medical Surge Coordination" },
      { column: "Notes", description: "Contingency plans, special instructions for controller, timing flexibility", example: "If player does not activate surge protocol within 10 minutes, deliver Contingency Inject MSEL-001C" }
    ],
    eventTypes: {
      inject: "A MSEL event introduced to a player by control staff representing non-playing entities, to build the exercise environment and drive play. Example: SimCell calls the EOC representing the State EOC requesting a situation report.",
      contingencyInject: "A MSEL event introduced ONLY when a key player expected action did NOT occur as planned. Gives an additional opportunity to meet objectives. Example: If the EOC has not requested mutual aid by H+1:00, deliver: 'County Emergency Manager calling — have you considered requesting State mutual aid?' ",
      expectedAction: "A MSEL event representing an anticipated action to be taken by a player — what evaluators expect to see. Example: Within H+0:30, EOC Director should have issued initial Situation Report to State EOC."
    },
    sampleMSEL: [
      {
        eventNum: "MSEL-001",
        time: "H+0:05",
        type: "Inject",
        description: "SimCell (as 911 Dispatch): 'EOC, this is dispatch. We are receiving approximately 200 calls per minute regarding the chemical release. We have confirmed 47 patients at the scene, approximately 12 critical. Three mass casualty units are en route. ETA 8 minutes.'",
        originator: "SimCell",
        target: "EOC Operations Chief",
        expectedAction: "EOC Operations Chief declares MCI; activates Mass Casualty Annex; notifies Hospital Coordination; assigns medical branch director",
        objectives: ["Objective 1", "Objective 2"],
        notes: "If MCI not declared within 10 min, deliver Contingency Inject MSEL-001C"
      },
      {
        eventNum: "MSEL-001C",
        time: "H+0:15 (contingency)",
        type: "Contingency Inject",
        description: "SimCell (as EMS Medical Director on radio): 'EOC, I'm declaring this a Mass Casualty Incident — I need the EOC to formally acknowledge and activate the MCI response.'",
        originator: "SimCell",
        target: "EOC Director",
        expectedAction: "EOC Director formally declares MCI and activates Mass Casualty Annex",
        objectives: ["Objective 1"],
        notes: "Deliver only if MSEL-001 expected action was NOT performed"
      },
      {
        eventNum: "MSEL-002",
        time: "H+0:20",
        type: "Inject",
        description: "SimCell (as County PIO via phone): 'EOC, I'm getting calls from 4 different TV stations. What is our public message right now? I need to go on air in 15 minutes.'",
        originator: "SimCell",
        target: "Public Information Officer (PIO)",
        expectedAction: "PIO drafts initial public advisory per PIO Annex; coordinates with EOC Director for approval; releases shelter-in-place message through mass notification system within 15 minutes",
        objectives: ["Objective 3"],
        notes: "Evaluator: Time from inject to first public message release"
      }
    ],
    developmentTips: [
      "Write MSEL events backward from objectives: what must players DO to demonstrate each objective? Those actions are the expected actions. What injects will DRIVE those actions? Those are the injects.",
      "Every objective should have 3–5 MSEL events supporting it",
      "Always write contingency injects for critical expected actions — plan for players not doing what you expect",
      "Time your injects realistically — don't flood players with 5 simultaneous events; they can't respond to all of them",
      "Test the MSEL with a 'table read' before the exercise — walk through every inject and expected action",
      "MSEL must be reviewed and approved at the MSEL Meeting and FPM"
    ]
  },

  // ==========================================
  // TEMPLATE 4: EXERCISE EVALUATION GUIDE (EEG)
  // ==========================================
  eeg: {
    name: "Exercise Evaluation Guide (EEG)",
    abbreviation: "EEG",
    description: "A standardized tool guiding evaluators to collect data and capture performance results. EEGs align to exercise objectives, capabilities, and critical tasks. Every EEG is specific to the jurisdiction's own plans, SOPs, and capability targets — there is no universal EEG. Used for ALL exercise types.",
    keyFact: "EEGs are specific to each jurisdiction. They reference that jurisdiction's specific plans, SOPs, and capability targets. An EEG from another jurisdiction cannot simply be copied — it must be adapted.",
    ratingScale: {
      name: "P-S-M-U Rating Scale",
      ratings: [
        {
          code: "P",
          fullName: "Performed without Challenges",
          description: "The targets and critical tasks were completed in a manner that achieved the objective(s) and did not negatively impact the performance of other activities. Performance did not create additional health/safety risks or violate applicable plans, policies, or regulations.",
          aarImplication: "Document as a STRENGTH in the AAR"
        },
        {
          code: "S",
          fullName: "Performed with Some Challenges",
          description: "The targets and critical tasks were completed in a manner that achieved the objective(s), but some challenges were observed (e.g., negative impact on other activities, contributed to additional risks, or not fully consistent with applicable plans).",
          aarImplication: "Document in AAR with specific challenges identified; minor corrective action recommended"
        },
        {
          code: "M",
          fullName: "Performed with Major Challenges",
          description: "The targets and critical tasks were completed but with significant challenges. The objective was partially achieved; there were notable deficiencies.",
          aarImplication: "Document as an AREA FOR IMPROVEMENT; root cause analysis required; SMART corrective action needed"
        },
        {
          code: "U",
          fullName: "Unable to be Performed",
          description: "The targets and critical tasks were not performed in a manner that achieved the objective(s). The capability was not demonstrated.",
          aarImplication: "Document as a critical AREA FOR IMPROVEMENT; prioritize in IP; immediate corrective action required"
        }
      ]
    },
    sections: [
      {
        sectionNumber: 1,
        title: "Header Information",
        fields: [
          { field: "Exercise Name", example: "Riverdale County Mass Casualty FE 2025" },
          { field: "Exercise Date", example: "June 10, 2025" },
          { field: "Organization Being Evaluated", example: "County Emergency Operations Center" },
          { field: "Venue / Functional Area", example: "EOC — Operations Section" },
          { field: "Evaluator Name", example: "Dr. Maria Chen, MPH — Assigned to Operations Section" },
          { field: "Mission Area", example: "Response" }
        ]
      },
      {
        sectionNumber: 2,
        title: "Core Capability and Objective",
        fields: [
          { field: "Core Capability", example: "Operational Coordination", tip: "Choose from the 32 NPG Core Capabilities" },
          { field: "Exercise Objective", example: "Within 60 minutes of exercise start, the County EOC will activate to Level 2 operations and establish communications with all responding agencies per the County EOP, Annex C.", tip: "Copy directly from the exercise design documents" }
        ]
      },
      {
        sectionNumber: 3,
        title: "Capability Targets and Critical Tasks",
        description: "The specific performance standards the evaluator observes against",
        capabilityTargetFormat: "[Critical Task] within [Timeframe] achieving [Impact/Standard]",
        example: {
          capabilityTarget: "EOC will achieve Level 2 operational status within 60 minutes of StartEx, with all agency liaisons present and communications established with all 8 responding agencies.",
          criticalTasks: [
            "EOC Director receives notification and makes activation decision within 15 minutes",
            "EOC staff report to duty stations within 30 minutes of activation",
            "All agency liaisons are at their EOC positions within 60 minutes",
            "Communications check completed with all 8 agencies within 60 minutes",
            "Initial Situation Report (SITREP) sent to State EOC within 90 minutes"
          ],
          sourceDocuments: ["County EOP, Annex C (EOC Activation), Section 3.2", "EOC SOP 2023-04, Activation Procedures"]
        }
      },
      {
        sectionNumber: 4,
        title: "Observation Space",
        description: "Lines for evaluator to record real-time observations during the exercise",
        prompts: [
          "Time of key actions observed:",
          "Specific behaviors or communications noted:",
          "Comparison to plans/SOPs:",
          "Issues or discrepancies observed:",
          "Quotes from participants (capture exact words when possible):"
        ]
      },
      {
        sectionNumber: 5,
        title: "Rating and Analysis",
        fields: [
          { field: "Rating (P/S/M/U)", tip: "Apply rating based on overall performance against ALL critical tasks" },
          { field: "Evaluator Narrative", tip: "Write a clear, factual narrative: what happened, what was supposed to happen, what the difference was, and what the impact was" },
          { field: "Identified Strengths", tip: "Specific positive observations" },
          { field: "Identified Areas for Improvement", tip: "Specific gaps or deficiencies — be precise and factual, not judgmental" }
        ]
      }
    ],
    developmentSteps: [
      "1. Research: Identify the jurisdiction's plans, SOPs, and capability targets for this capability",
      "2. Select Template: Use FEMA's EEG templates from PrepToolkit as a starting point",
      "3. Insert Basic Information: Exercise name, date, organization, venue",
      "4. Insert Exercise Objective: The SMART objective aligned to this capability",
      "5. Identify Capability Targets: Performance thresholds (Critical Task + Impact + Timeframe)",
      "6. Identify Critical Tasks: Specific actions from the jurisdiction's plans/SOPs",
      "7. Review and Refine: Ensure tasks can be demonstrated within the exercise scope",
      "8. Finalize and Coordinate: Share with Exercise Planning Team; align to MSEL events"
    ],
    commonMistakes: [
      "Using another jurisdiction's EEG without adapting it to local plans",
      "Setting capability targets that cannot be demonstrated in the exercise format",
      "Evaluator narrative that is vague ('coordination was good') rather than specific",
      "Not citing the source plan/SOP that the critical task comes from",
      "Rating performance P when critical tasks were partially completed"
    ]
  },

  // ==========================================
  // TEMPLATE 5: AFTER-ACTION REPORT / IMPROVEMENT PLAN (AAR/IP)
  // ==========================================
  aar_ip: {
    name: "After-Action Report / Improvement Plan (AAR/IP)",
    abbreviation: "AAR/IP",
    description: "The combined post-exercise document that analyzes exercise outcomes and prescribes corrective actions. The AAR documents strengths and areas for improvement; the IP translates areas for improvement into SMART corrective actions. Required for TTX, Drill, FE, and FSE. Must be completed typically within 90 days of the exercise.",
    keyFact: "The AAR/IP is confidential during the draft phase. It should not be released publicly until finalized through the After-Action Meeting (AAM) process.",
    deadline: "Typically within 90 days of exercise conduct",
    aarSections: [
      {
        sectionNumber: 1,
        title: "Cover / Title Page",
        fields: [
          { field: "Exercise Name", example: "Riverdale County Mass Casualty Functional Exercise 2025" },
          { field: "Exercise Date(s)", example: "June 10, 2025" },
          { field: "Exercise Type", example: "Functional Exercise" },
          { field: "Draft or Final", example: "DRAFT — For Official Use Only", tip: "Draft until After-Action Meeting; mark clearly" },
          { field: "Report Date", example: "August 15, 2025 (65 days post-exercise)" },
          { field: "Prepared By", example: "County OEM Exercise Team; Lead Evaluator: Dr. Maria Chen" }
        ]
      },
      {
        sectionNumber: 2,
        title: "Executive Summary",
        purpose: "3-page maximum summary for senior leaders. Should stand alone.",
        required: [
          "3 major strengths observed during the exercise",
          "3 primary areas for improvement",
          "Overall assessment of exercise success",
          "Recommendation for next exercise type and focus"
        ],
        example: {
          strengths: [
            "EOC staff demonstrated exceptional situational awareness, activating to full operational status in 52 minutes — within the 60-minute target.",
            "Public Information Officer issued the first public alert in 11 minutes — exceeding the 15-minute standard.",
            "Inter-agency communication using the shared radio channel was effective with no significant coordination failures."
          ],
          areasForImprovement: [
            "Patient surge coordination was delayed — Hospital Incident Command notification occurred 47 minutes after MCI declaration (target: 15 minutes).",
            "Mutual aid requests were not properly documented per Mutual Aid Annex procedures.",
            "The Logistics Section Chief was unfamiliar with the resource request process, causing a 30-minute delay in equipment procurement."
          ]
        }
      },
      {
        sectionNumber: 3,
        title: "Exercise Overview",
        content: "Summary of exercise design — objectives, scope, participants, timeline, threat/hazard scenario. This is not an evaluation — just the facts of what the exercise was."
      },
      {
        sectionNumber: 4,
        title: "Analysis of Capabilities",
        structure: "One sub-section per core capability evaluated. Each contains: Observation Title, Reference (plan/SOP citation), Analysis (what happened vs. what should have happened), Recommendation.",
        observationFormat: {
          strengthObservation: {
            title: "EOC Activation Timeline (Strength)",
            reference: "County EOP, Annex C — EOC Activation, Section 3.2",
            analysis: "The EOC Director received StartEx notification at 0800 and made the activation decision within 12 minutes. All EOC positions were filled by 0852 — 52 minutes after StartEx, within the 60-minute target per the EOP. Communications with all 8 responding agencies were confirmed by 0858.",
            recommendation: "Continue current EOC activation training and maintain the established activation roster. Consider documenting the specific communication tree that proved effective as a best practice."
          },
          improvementObservation: {
            title: "Hospital Surge Coordination (Area for Improvement)",
            reference: "County EOP, Annex H — Mass Casualty Response, Section 5.1; Hospital Coordination SOP 2022-07",
            analysis: "Per Annex H, the Medical Branch Director should notify all county hospitals of potential surge within 15 minutes of MCI declaration. The MCI was declared at H+0:10. Hospital Incident Command notification did not occur until H+0:57 — 47 minutes after MCI declaration and 32 minutes beyond the target. Observation: The Medical Branch Director was uncertain of the hospital notification procedure and had not recently reviewed Annex H. Two contingency injects were required to prompt action. Impact: Had this been a real event, hospitals would have had insufficient time to prepare surge capacity, potentially resulting in preventable patient deterioration.",
            recommendation: "Conduct a hospital coordination workshop to clarify roles and procedures. Revise Annex H to provide a simple checklist for the Medical Branch Director. Schedule a drill specifically testing hospital notification within 6 months."
          }
        }
      },
      {
        sectionNumber: 5,
        title: "Conclusion",
        content: "Overall assessment of whether the exercise met its objectives; summary of the most critical improvement areas; recommendation for follow-on exercises and training"
      },
      {
        sectionNumber: 6,
        title: "Appendices",
        appendices: [
          "Appendix A: Acronyms",
          "Appendix B: Improvement Plan (IP) Matrix",
          "Appendix C: Participant List (by organization and position)",
          "Appendix D: Participant Feedback Form Summary"
        ]
      }
    ],
    ipMatrix: {
      description: "The Improvement Plan (IP) is typically Appendix B of the AAR. It translates each area for improvement into a specific SMART corrective action.",
      columns: [
        "Capability",
        "Observation Title",
        "Recommendation",
        "Corrective Action Description (SMART)",
        "Capability Element (Plan/Organize/Train/Equip/Exercise)",
        "Primary Responsible Agency",
        "Agency POC",
        "Start Date",
        "Completion Date",
        "Status (for tracking)"
      ],
      smartReminder: "Every corrective action must be SMART: Specific (what exactly will be done), Measurable (defined deliverable), Achievable (realistic given resources), Relevant (addresses root cause), Time-bound (start and completion dates).",
      exampleRow: {
        capability: "Public Health, Healthcare, and EMS",
        observationTitle: "Hospital Surge Coordination Delay",
        recommendation: "Conduct hospital coordination workshop and revise Annex H with notification checklist",
        correctedAction: "County OEM and County Health Department will co-facilitate a 4-hour Hospital Surge Coordination Workshop (target date: October 15) attended by Medical Branch Directors from all 8 county hospitals and the County Health Officer. Workshop product: Revised Annex H with one-page notification checklist. Following the workshop, a drill testing hospital notification within 15 minutes will be conducted by December 1.",
        capabilityElement: "Train; Plan",
        responsibleAgency: "County Office of Emergency Management / County Health Department",
        poc: "Dr. Robert Kim, County Health Officer — rkim@riverdalehealth.gov — (555) 234-5678",
        startDate: "September 1",
        completionDate: "December 1",
        status: "In Progress"
      }
    },
    aarProcess: [
      "Step 1: Evaluators complete EEGs; collect Participant Feedback Forms at EndEx",
      "Step 2: C/E Debrief (evaluators share initial observations within hours of EndEx)",
      "Step 3: Lead Evaluator conducts data synthesis (Days 1–7)",
      "Step 4: Lead Evaluator conducts data analysis — event reconstruction, trend analysis, root cause analysis (Days 7–30)",
      "Step 5: Draft AAR/IP written (Days 30–45)",
      "Step 6: After-Action Meeting (AAM) — review and finalize AAR/IP with stakeholders (Day 45–60)",
      "Step 7: Final AAR/IP distributed to all participants (by Day 90)",
      "Step 8: Corrective actions entered into CAP System; tracking begins"
    ],
    commonMistakes: [
      "Waiting more than 90 days — memories fade; findings lose relevance",
      "Writing vague corrective actions without deadlines or responsible parties",
      "Not conducting the After-Action Meeting — evaluators alone should not finalize the AAR without stakeholder input",
      "Using the AAR to assign blame rather than improve systems",
      "Marking the AAR as public before the AAM — draft AARs should be 'For Official Use Only'",
      "Failing to track corrective actions after the AAR is distributed — the most common HSEEP failure"
    ]
  }
};

// ============================================
// SECTION 4: HSEEP_CAMPAIGN — 10-Chapter Progressive Campaign
// ============================================

const HSEEP_CAMPAIGN = {
  title: "Path to HSEEP Mastery",
  subtitle: "From Novice Planner to Exercise Director",
  description: "A 10-chapter RPG campaign following your journey from learning the fundamentals of HSEEP doctrine to independently designing and executing a Full-Scale Exercise. Each chapter builds on the last — your skills, knowledge, and confidence grow with every mission.",
  totalChapters: 10,

  roles: [
    {
      id: "exercise_planner",
      name: "Exercise Planner",
      description: "A newly assigned emergency management professional tasked with building the jurisdiction's exercise program from the ground up.",
      bonuses: { design: +20, documents: +15, facilitation: +10 },
      special: "Document Mastery — Eliminates one wrong answer on document-related questions",
      flavor: "Staring at a blank ExPlan template at 9 AM Monday. By the end of this, you will fill it with confidence."
    },
    {
      id: "evaluator",
      name: "Exercise Evaluator",
      description: "A subject-matter expert assigned to evaluate exercise performance and produce findings that actually improve preparedness.",
      bonuses: { evaluation: +25, analysis: +20, aar: +15 },
      special: "Observer's Eye — Reveals the 'evaluator's perspective' hint on conduct questions",
      flavor: "Clipboard in hand, pen ready. Your job is not to judge people — it is to find where the systems need work."
    },
    {
      id: "exercise_director",
      name: "Exercise Director",
      description: "A senior emergency management official responsible for strategic oversight of the entire exercise program.",
      bonuses: { leadership: +25, strategy: +20, stakeholders: +15 },
      special: "Senior Leader Access — +10% XP on IPPW and program management questions",
      flavor: "You sit at the head of the planning table. Everything flows from your intent."
    },
    {
      id: "training_officer",
      name: "Training and Exercise Officer",
      description: "A federal, state, or local training professional who designs, delivers, and evaluates exercises as a core job function.",
      bonuses: { training: +20, facilitation: +20, conduct: +15 },
      special: "FEMA Certified — Eliminates one wrong answer on IS-120.c and E/K/L0146 course content",
      flavor: "You have attended more exercises than you can count. Now you make them happen."
    }
  ],

  milestones: [
    { chapter: 1, title: "HSEEP Recruit", rank: "Recruit", minScore: 0, color: "#9e9e9e", desc: "First day on the job. You know the acronym HSEEP. Now let's find out what it actually means." },
    { chapter: 2, title: "Exercise Apprentice", rank: "Apprentice", minScore: 600, color: "#4caf50", desc: "You can tell a TTX from a Drill. Senior planners trust you with the sign-in sheets." },
    { chapter: 3, title: "Planning Team Member", rank: "Team Member", minScore: 1800, color: "#2196f3", desc: "You contribute meaningfully to planning meetings. You own at least one section of the SitMan." },
    { chapter: 4, title: "Lead Planner", rank: "Lead Planner", minScore: 3500, color: "#9c27b0", desc: "You run the MPM. You write SMART objectives that evaluators actually love. You are not afraid of the MSEL." },
    { chapter: 5, title: "Exercise Manager", rank: "Manager", minScore: 6000, color: "#ff9800", desc: "You manage the whole exercise lifecycle. You have survived a 300-person Full-Scale Exercise." },
    { chapter: 6, title: "HSEEP Master", rank: "HSEEP Master", minScore: 10000, color: "#f44336", desc: "You ARE the exercise program. Other jurisdictions call you for advice. You have the FEMA challenge coin to prove it." }
  ],

  chapters: [
    // ==========================================
    // CHAPTER 1: HSEEP Doctrine Foundations
    // ==========================================
    {
      id: 1,
      title: "Foundations of Exercise Doctrine",
      subtitle: "Welcome to the World of HSEEP",
      chapterType: "doctrine",
      xpGoal: 600,
      hp: 100,
      difficulty: "easy",
      cinematic: {
        text: "MONDAY. 8:47 AM.\n\nYour first day as the new Emergency Management Coordinator. The previous coordinator left suddenly — 'family reasons,' they said — leaving behind one filing cabinet full of paper, one half-finished exercise plan from 2019, and a desk covered in sticky notes with acronyms you don't recognize.\n\nAAR. MSEL. EEG. IPPW.\n\nYour supervisor knocks on the door frame.\n\n'Good news — the city council wants us to run a major exercise this fall. Bad news — they have no idea what that means. Neither does anyone else here. You are now the HSEEP expert.'\n\nShe slides a document across the desk. The cover reads: 'Homeland Security Exercise and Evaluation Program — 2020 Doctrine.'\n\n'Start here. And yes, there will be a test.'",
        atmosphere: "Quiet office. Fluorescent lights. The hum of a government building on a Monday morning. A weight settling on your shoulders — and the first spark of something that might be purpose."
      },
      briefing: "Before you can design a single exercise, you need to understand what HSEEP is, why it exists, and the 6 principles that govern every exercise in the United States. This chapter establishes the foundation everything else is built on.",
      objectives: [
        "Define HSEEP and explain its role in the National Preparedness System",
        "Identify the 6 fundamental principles of HSEEP",
        "Describe the purpose of exercises",
        "Explain how HSEEP connects to the Integrated Preparedness Cycle"
      ],
      questions: [
        "hseep_doctrine_q01", "hseep_doctrine_q02", "hseep_doctrine_q03", "hseep_doctrine_q04",
        "hseep_doctrine_q05", "hseep_doctrine_q06", "hseep_doctrine_q07", "hseep_doctrine_q08",
        "hseep_doctrine_q09", "hseep_doctrine_q10", "hseep_doctrine_q11", "hseep_doctrine_q12"
      ],
      boss: {
        title: "Supervisor's Challenge",
        scenario: "Your supervisor returns. 'Before you design anything, I need you to explain HSEEP to the City Council in plain language. They want to know: What is an exercise? Why do we do them? What makes HSEEP different from just winging it?' In your own words — using the doctrine — what are the THREE most important things about HSEEP you would tell them?",
        type: "synthesis",
        correctAnswer: {
          key_points: [
            "HSEEP is the national standard for exercises — consistent methodology used across all levels of government and whole community",
            "Exercises provide a low-risk environment to test plans, find gaps, and improve capabilities before a real disaster",
            "HSEEP is informed by risk (THIRA) and driven by 6 principles; it connects to the National Preparedness Goal"
          ]
        },
        options: [
          "HSEEP is a FEMA checklist that tells us exactly what exercises to run and when to run them",
          "HSEEP is a consistent national methodology that uses exercises to identify gaps and improve preparedness capabilities in a low-risk environment, guided by senior leaders and risk assessments",
          "HSEEP is primarily about compliance with federal grant requirements",
          "HSEEP is optional for local governments — only states need to follow it"
        ],
        correct: 1,
        xpReward: 200,
        feedback: "HSEEP is not a checklist or mandate — it is a flexible, scalable, consistent methodology used by the whole community. Its core value is creating a safe environment to find and fix capability gaps before they become catastrophic failures in a real disaster. You've earned the City Council's attention. Chapter 1 complete."
      },
      rewards: ["HSEEP Doctrine Badge", "150 XP bonus for perfect score"],
      unlocks: "Chapter 2: The Seven Types of Exercises"
    },

    // ==========================================
    // CHAPTER 2: Mastering Exercise Types
    // ==========================================
    {
      id: 2,
      title: "Mastering Exercise Types",
      subtitle: "Choosing the Right Tool for the Right Job",
      chapterType: "exercise_types",
      xpGoal: 750,
      hp: 100,
      difficulty: "easy",
      cinematic: {
        text: "TUESDAY. The city council has approved your exercise program budget: $50,000 for the year.\n\nYou sit down to plan. You know you need exercises. But which ones? The fire chief wants a 'big realistic drill.' The hospital administrator wants a 'tabletop something.' The mayor wants a 'full-scale exercise like they do on TV.'\n\nYou open your HSEEP manual to Section 3.\n\nSeven exercise types. Discussion-based. Operations-based. Seminars. Workshops. TTX. Games. Drills. Functional Exercises. Full-Scale Exercises.\n\nEach one has a purpose. Each one has a cost. And choosing the wrong one will waste your budget AND your credibility.\n\nThe question is: which tool is right for which job?",
        atmosphere: "Conference room. Whiteboard with diagrams half-erased. Coffee cups everywhere. Three department heads looking at you expectantly."
      },
      briefing: "HSEEP defines 7 distinct exercise types across two categories: Discussion-Based and Operations-Based. Each type has a specific purpose, typical duration, resource requirements, and required documents. Choosing the right exercise type is one of the most important decisions in exercise design.",
      objectives: [
        "Distinguish between discussion-based and operations-based exercise types",
        "Match exercise purposes to the correct exercise type",
        "Identify the appropriate documents required for each exercise type",
        "Apply the progressive approach to exercise planning"
      ],
      questions: [
        "hseep_types_q01", "hseep_types_q02", "hseep_types_q03", "hseep_types_q04",
        "hseep_types_q05", "hseep_types_q06", "hseep_types_q07", "hseep_types_q08",
        "hseep_types_q09", "hseep_types_q10", "hseep_types_q11", "hseep_types_q12",
        "hseep_types_q13", "hseep_types_q14", "hseep_types_q15"
      ],
      boss: {
        title: "The Budget Battle",
        scenario: "The fire chief comes to your office. 'I want to run a Full-Scale Exercise for our new hazmat protocol. We wrote it last month. Big exercise — real trucks, actors in hazmat suits, the whole thing.' Your budget: $50,000. Your timeline: 6 months. The hazmat protocol has never been tested. What do you tell the chief?",
        options: [
          "Agree — a Full-Scale Exercise is the most impressive and comprehensive; it will definitely find any problems with the protocol",
          "Recommend starting with a Workshop to refine the protocol, then a Tabletop Exercise to discuss it, then a Drill to test the specific hazmat function — using FSE resources only after foundational issues are resolved through less costly exercises",
          "Suggest skipping directly to a Functional Exercise as a compromise between the chief's request and your budget",
          "Tell the chief that FEMA requires 5 years of progressive exercises before any FSE can be conducted"
        ],
        correct: 1,
        xpReward: 200,
        feedback: "Progressive approach wins. A new, untested protocol should never be tested first in a Full-Scale Exercise — significant failures in front of 200+ participants with TV cameras present would be embarrassing AND would produce too many findings to address systematically. Start low-risk: Workshop (refine the protocol) → TTX (test it in discussion) → Drill (test the specific hazmat function) → FE or FSE (full integration once foundation is solid). Your $50K goes much further this way too."
      },
      rewards: ["Exercise Type Specialist Badge", "150 XP bonus"],
      unlocks: "Chapter 3: The Five Planning Meetings"
    },

    // ==========================================
    // CHAPTER 3: The Art of Planning Meetings
    // ==========================================
    {
      id: 3,
      title: "The Art of Planning Meetings",
      subtitle: "C&O → IPM → MPM → MSEL → FPM",
      chapterType: "design_development",
      xpGoal: 900,
      hp: 100,
      difficulty: "normal",
      cinematic: {
        text: "THREE WEEKS LATER.\n\nYou've decided on a Tabletop Exercise for the fall. The topic: earthquake response. The date: October 15. The problem: you have no idea how to actually plan it.\n\nYou've seen other cities 'plan' exercises by reserving a conference room and ordering sandwiches. Then they act surprised when the exercise reveals nothing useful.\n\nHSEEP prescribes something different. Something rigorous. Five structured planning meetings, each with a clear purpose, specific discussion points, and defined outputs. Each meeting builds on the last. Skip one — and the gaps show up in the exercise.\n\nYour calendar is open. Your conference room is booked. The planning team is gathering.\n\nMeeting 1: Concept and Objectives. Here we go.",
        atmosphere: "Planning meeting room. Whiteboard. Blank agenda forms. A diverse group around the table — fire, police, public health, public works, hospital rep. Skeptical faces. You're running this."
      },
      briefing: "The 5 exercise planning meetings are the backbone of exercise design. Each serves a distinct purpose: C&O (establish concept and team), IPM (begin development), MPM (check progress and build scenario), MSEL Meeting (build the event list), FPM (finalize everything). Understanding the sequence, purposes, and outputs of each meeting is essential for any exercise planner.",
      objectives: [
        "Explain the purpose and outcomes of each of the 5 exercise planning meetings",
        "Identify which discussion points belong in which meeting",
        "Recognize the role of IPRs and the C/E Briefing in the planning process",
        "Apply the planning meeting sequence to a real exercise design scenario"
      ],
      questions: [
        "hseep_design_q01", "hseep_design_q02", "hseep_design_q03", "hseep_design_q04",
        "hseep_design_q05", "hseep_design_q06", "hseep_design_q07", "hseep_design_q08",
        "hseep_design_q09", "hseep_design_q10", "hseep_design_q11", "hseep_design_q12",
        "hseep_design_q13", "hseep_design_q14", "hseep_design_q15"
      ],
      boss: {
        title: "The Skipped Meeting",
        scenario: "Two weeks before the TTX, your planning team lead announces: 'We're running out of time. Let's cancel the Final Planning Meeting and just send the SitMan by email.' You know this is a mistake. What critical things are missed when you skip the FPM?",
        options: [
          "Nothing critical — the FPM is optional for TTXs",
          "Final approval of all exercise documents; resolution of open planning issues; attendee buy-in on exercise processes; confirmation of task assignments and logistics; the rule that no major changes occur after FPM is now violated",
          "Only the catering order needs to be confirmed at the FPM",
          "The FPM is only required for operations-based exercises"
        ],
        correct: 1,
        xpReward: 200,
        feedback: "The FPM is the 'formal end of the exercise planning process.' Skipping it means: documents may not be approved (participants get outdated SitMan); open issues remain unresolved (no one knows who owns the registration table); participants don't understand exercise processes (facilitators improvise on the day); task assignments aren't confirmed (logistics breakdown). The '24-hour email' substitute always fails. Run the FPM."
      },
      rewards: ["Meeting Maestro Badge", "175 XP bonus"],
      unlocks: "Chapter 4: SMART Objectives and Scenario Design"
    },

    // ==========================================
    // CHAPTER 4: SMART Objectives and Scenario Design
    // ==========================================
    {
      id: 4,
      title: "SMART Objectives and Scenario Design",
      subtitle: "The Blueprint of Every Exercise",
      chapterType: "design_development",
      xpGoal: 900,
      hp: 100,
      difficulty: "normal",
      cinematic: {
        text: "SIX WEEKS TO THE TTX.\n\nYou have your planning team. You have your meeting schedule. Now comes the hard part.\n\nObjectives.\n\nNot the easy kind — 'participants will gain awareness' — that tells an evaluator nothing. HSEEP demands more. Specific. Measurable. Achievable. Relevant. Time-bound.\n\nYou write your first attempt: 'Participants will improve their earthquake response.'\n\nYour lead evaluator reads it and sets it down gently. 'That is not an objective. That is a hope.'\n\nShe is right. But you have also seen vague objectives wreck exercises — evaluators guess at what to measure; participants don't know what they're supposed to do; the AAR says 'exercise was successful' without defining success.\n\nThe scenario is your other challenge. It has to be realistic enough that participants forget it's pretend — but controlled enough that it tests exactly what you need to measure.\n\nYou pick up your pen. Let's write objectives that mean something.",
        atmosphere: "Your office, late afternoon. A whiteboard covered in draft objectives — most crossed out. Your lead evaluator across the desk, reading your drafts with a professional poker face."
      },
      briefing: "Exercise objectives define success. Without SMART objectives, evaluators don't know what to measure, players don't know what they're demonstrating, and the AAR is meaningless. Scenario design is the art of creating a realistic, risk-based situation that drives players to demonstrate every objective.",
      objectives: [
        "Apply SMART criteria to write effective exercise objectives",
        "Identify the elements of effective scenario design",
        "Distinguish between a strong and weak exercise objective",
        "Describe how scenarios should drive objective demonstration"
      ],
      questions: [
        "hseep_design_q01", "hseep_design_q02", "hseep_design_q04", "hseep_design_q06",
        "hseep_design_q08", "hseep_design_q09", "hseep_design_q11", "hseep_design_q12",
        "hseep_design_q13", "hseep_design_q14", "hseep_design_q15", "hseep_design_q16",
        "hseep_conduct_q05", "hseep_conduct_q06", "hseep_conduct_q10"
      ],
      boss: {
        title: "Objective Rescue Operation",
        scenario: "Your planning team submits 8 draft objectives for the earthquake TTX. You must cut to 5 and make them SMART. Objective #3 currently reads: 'Players will understand how to coordinate with external agencies.' Rewrite it as a proper SMART objective.",
        options: [
          "Players will coordinate with external agencies effectively during an earthquake",
          "Within 30 minutes of EOC activation, the EOC Director will establish communication and resource coordination with the County OEM, Red Cross, and Public Works per the City Emergency Operations Plan, Annex D",
          "External agency coordination will be tested and improved during the exercise",
          "Participants will gain awareness of external agency coordination processes"
        ],
        correct: 1,
        xpReward: 200,
        feedback: "S — Specific: names exactly who (EOC Director), what (communicate and coordinate), and with whom (County OEM, Red Cross, Public Works) and per what plan (EOP Annex D). M — Measurable: success can be observed (communication established, resource coordination documented). A — Achievable: within the TTX scope. R — Relevant: tied to real response capability. T — Time-bound: within 30 minutes of EOC activation. That is a SMART objective."
      },
      rewards: ["Objective Architect Badge", "175 XP bonus"],
      unlocks: "Chapter 5: Document Mastery"
    },

    // ==========================================
    // CHAPTER 5: Document Mastery
    // ==========================================
    {
      id: 5,
      title: "Document Mastery",
      subtitle: "The SitMan, ExPlan, and Every Paper That Makes an Exercise Work",
      chapterType: "documents",
      xpGoal: 1000,
      hp: 100,
      difficulty: "normal",
      cinematic: {
        text: "FOUR WEEKS TO THE TTX.\n\nYour SitMan template is open. 47 blank pages stare at you.\n\nEvery exercise has documents. Badly designed documents confuse participants, frustrate facilitators, and hide exactly the gaps you're trying to find. Well-designed documents guide the exercise like a rail — participants know what role to play, facilitators know what to prompt, evaluators know what to look for.\n\nThe SitMan is the participant's guide to the universe of the scenario. The ExPlan is the operational manual that tells everyone how the exercise runs. For operations-based exercises, the C/E Handbook holds everything the controllers and evaluators need.\n\nRight document. Right audience. Right time.\n\nYou start typing. Slow at first. Then faster.",
        atmosphere: "Laptop. Reference documents spread across the desk. Your HSEEP manual open to the template section. The soft satisfaction of words filling a blank page."
      },
      briefing: "HSEEP exercise documents serve specific, distinct purposes and are distributed to specific audiences. Confusing which document goes to whom — or what information belongs in which document — is one of the most common planning mistakes. This chapter covers the full document suite for both discussion-based and operations-based exercises.",
      objectives: [
        "Identify the purpose, audience, and content of each HSEEP exercise document",
        "Distinguish between SitMan and ExPlan and know when each is used",
        "Explain what the C/E Handbook contains and who receives it",
        "Describe the function of EEGs, PFFs, and the AAR/IP"
      ],
      questions: [
        "hseep_docs_q01", "hseep_docs_q02", "hseep_docs_q03", "hseep_docs_q04",
        "hseep_docs_q05", "hseep_docs_q06", "hseep_docs_q07", "hseep_docs_q08",
        "hseep_docs_q09", "hseep_docs_q10", "hseep_docs_q11", "hseep_docs_q12",
        "hseep_docs_q13", "hseep_docs_q14", "hseep_docs_q15", "hseep_docs_q16"
      ],
      boss: {
        title: "The Document Disaster",
        scenario: "One week before the exercise, a planning team member accidentally emails the complete MSEL (with all injects and expected actions) to all 75 exercise participants. The ExPlan was already distributed. What is the immediate impact, and what should you do?",
        options: [
          "Nothing — participants probably didn't read it anyway",
          "The exercise is compromised because participants now know all inject scenarios and expected actions, destroying realism; options: cancel and reschedule, redesign the exercise scenario with different injects immediately, or convert to a TTX format where scenario is expected to be known",
          "Add more injects to compensate for the compromised ones",
          "Proceed as planned — evaluators can still observe if actions are taken correctly"
        ],
        correct: 1,
        xpReward: 250,
        feedback: "The MSEL is ONLY for controllers and evaluators — it must never go to players. Players knowing the injects in advance destroys exercise validity. Real options: (1) Cancel and reschedule with new scenario (most valid, costly); (2) Develop entirely new MSEL events within 1 week using a different scenario angle (feasible if team is fast); (3) Acknowledge the limitation in the AAR. This is why MSEL documents must be marked 'CONTROLLERS AND EVALUATORS ONLY' and distributed only in locked formats. Document security is part of exercise planning."
      },
      rewards: ["Document Master Badge", "200 XP bonus"],
      unlocks: "Chapter 6: Building MSELs and Designing Injects"
    },

    // ==========================================
    // CHAPTER 6: Building MSELs and Designing Injects
    // ==========================================
    {
      id: 6,
      title: "Building MSELs and Designing Injects",
      subtitle: "Scripting the Scenario — Every Event Has a Purpose",
      chapterType: "design_development",
      xpGoal: 1000,
      hp: 100,
      difficulty: "normal",
      cinematic: {
        text: "THREE WEEKS TO THE FUNCTIONAL EXERCISE.\n\nYou've graduated from TTXs. The city wants a Functional Exercise — EOC activation, SimCell, the whole structure. And that means one thing above all others:\n\nThe MSEL.\n\nMaster Scenario Events List. The chronological spine of every operations-based exercise. Every inject, every expected action, every contingency — timed to the minute. The difference between an exercise that tests objectives and one that becomes an improvised chaos session.\n\nYou sit at the MSEL Meeting with your planning team. The whiteboard is covered with sticky notes — each one representing a potential inject.\n\nYour job: take 47 sticky notes and turn them into a document that will guide 200 participants through 8 hours of simulated emergency response — and capture every performance data point you need for the AAR.\n\nThe clock is ticking. The MSEL isn't going to write itself.",
        atmosphere: "Conference room. Sticky notes. Timelines drawn on whiteboards. The smell of coffee that's been sitting too long. Everyone crowded around a spreadsheet projected on the wall."
      },
      briefing: "The MSEL is the operational heart of every operations-based exercise. Every inject must drive player action that demonstrates at least one exercise objective. Contingency injects ensure you can still meet objectives if players don't respond as expected. This chapter covers MSEL structure, inject types, and the craft of MSEL design.",
      objectives: [
        "Describe the structure and columns of an MSEL",
        "Distinguish between Injects, Contingency Injects, and Expected Actions",
        "Explain how MSEL events are linked to exercise objectives",
        "Apply MSEL design principles to create effective injects"
      ],
      questions: [
        "hseep_design_q03", "hseep_design_q05", "hseep_design_q07", "hseep_design_q10",
        "hseep_conduct_q01", "hseep_conduct_q02", "hseep_conduct_q03", "hseep_conduct_q04",
        "hseep_conduct_q07", "hseep_conduct_q08", "hseep_conduct_q09", "hseep_conduct_q11",
        "hseep_conduct_q12", "hseep_conduct_q13", "hseep_conduct_q14"
      ],
      boss: {
        title: "The Dead Exercise",
        scenario: "Your Functional Exercise is underway. H+1:30. Players at the EOC are supposed to have requested mutual aid from the neighboring county 30 minutes ago. They haven't. Your MSEL has a 'Mutual Aid Request' inject for H+0:45 that was already delivered — but players dismissed it. Objective 3 (demonstrating mutual aid coordination) has not been demonstrated. What do you do?",
        options: [
          "Stop the exercise and tell players they should have requested mutual aid",
          "Deliver the pre-prepared Contingency Inject: a second, more urgent call from the neighboring county: 'We have resources standing by — do you want us to respond?' This gives players another opportunity to demonstrate the capability",
          "Let the exercise continue — if they don't demonstrate it, that becomes an AAR finding",
          "Tell the MSEL Manager to add a new inject on the spot"
        ],
        correct: 1,
        xpReward: 250,
        feedback: "Contingency Injects exist exactly for this situation. Every critical expected action should have at least one contingency inject planned in advance. The contingency doesn't tell players the answer — it escalates the pressure or provides additional context that should prompt the action. Option C is partially correct (failure to demonstrate IS an AAR finding), but a well-planned exercise always gives players a second opportunity before declaring failure. Option A breaks the exercise. Option D violates FPM principles (no major changes during exercise)."
      },
      rewards: ["MSEL Architect Badge", "200 XP bonus"],
      unlocks: "Chapter 7: Exercise Conduct and Control"
    },

    // ==========================================
    // CHAPTER 7: Exercise Conduct and Control
    // ==========================================
    {
      id: 7,
      title: "Exercise Conduct and Control",
      subtitle: "StartEx to EndEx — Managing the Day",
      chapterType: "conduct",
      xpGoal: 1100,
      hp: 100,
      difficulty: "normal",
      cinematic: {
        text: "EXERCISE DAY. 0627 AM.\n\nThe EOC parking lot is filling up. Controllers and evaluators are arriving, badges around their necks. The SimCell is getting their last briefing. The sign-in tables are set up.\n\nYou are the Lead Controller. Everything that happens today — every inject, every contingency, every 'TIME OUT' and every 'ENDEX' — flows through you.\n\nYour radio crackles: 'Lead Controller, this is SimCell. We are ready.'\nYour phone buzzes: 'Lead Controller, two players haven't checked in. Do we wait?'\nYour evaluator taps your shoulder: 'What's the code word to stop the exercise if there's a real emergency?'\n\nYou have 33 minutes until StartEx.\n\nDeep breath. You have planned for this. You know exactly what to do.",
        atmosphere: "The controlled chaos of exercise day. Radios crackling. Evaluators with clipboards. Controllers checking their MSEL. The anticipation before a large event."
      },
      briefing: "Exercise conduct is where months of planning meet reality. Controllers manage the flow of events using the MSEL. Evaluators observe and document. Facilitators keep discussions on track. Safety controllers monitor for hazards. And at the end — the Hotwash and Debrief capture the first round of post-exercise insights.",
      objectives: [
        "Describe the pre-exercise setup and briefing sequence",
        "Explain the roles of controllers, evaluators, and facilitators during conduct",
        "Identify the five types of exercise briefings and their audiences",
        "Describe Hotwash and Debrief procedures"
      ],
      questions: [
        "hseep_conduct_q01", "hseep_conduct_q02", "hseep_conduct_q03", "hseep_conduct_q04",
        "hseep_conduct_q05", "hseep_conduct_q06", "hseep_conduct_q07", "hseep_conduct_q08",
        "hseep_conduct_q09", "hseep_conduct_q10", "hseep_conduct_q11", "hseep_conduct_q12",
        "hseep_conduct_q13", "hseep_conduct_q14", "hseep_conduct_q15", "hseep_conduct_q16"
      ],
      boss: {
        title: "Real Emergency Mid-Exercise",
        scenario: "Your Full-Scale Exercise is at H+3:00. 200 participants are actively engaged across 6 venues. Suddenly, your Safety Controller calls you on radio: 'Lead Controller — actor at Venue 3 has a real cardiac event. Confirmed medical emergency. Requesting guidance.' What is your IMMEDIATE next step?",
        options: [
          "Continue the exercise but dispatch exercise actors portraying paramedics to handle it",
          "Immediately broadcast on all radio channels: 'ALL PLAYERS — REAL WORLD — ALL PLAY STOPS. THIS IS NOT PART OF THE EXERCISE.' Then call 911 for real emergency services.",
          "Pause the exercise at Venue 3 only; continue at other venues",
          "Wait for the Safety Controller to handle it and resume the exercise after"
        ],
        correct: 1,
        xpReward: 250,
        feedback: "REAL WORLD emergencies ALWAYS stop the exercise completely. The code word 'REAL WORLD' (or equivalent — must be pre-briefed) is broadcast immediately on ALL channels. Exercise play stops everywhere. Real emergency services are called (911). The patient receives real medical care — not role-player 'treatment.' Document the incident for the AAR and safety review. The exercise CANNOT continue until the emergency is fully resolved and all participants are aware. This is non-negotiable. Safety is always Priority #1."
      },
      rewards: ["Lead Controller Badge", "225 XP bonus"],
      unlocks: "Chapter 8: The Science of Evaluation"
    },

    // ==========================================
    // CHAPTER 8: The Science of Evaluation
    // ==========================================
    {
      id: 8,
      title: "The Science of Evaluation",
      subtitle: "EEGs, P-S-M-U, and the Art of Objective Observation",
      chapterType: "evaluation",
      xpGoal: 1100,
      hp: 100,
      difficulty: "hard",
      cinematic: {
        text: "ENDEX. 1703.\n\nThe exercise is over. Players are filling out their Participant Feedback Forms. Controllers are debriefing in the back hallway.\n\nYou sit with your evaluation team in a conference room. Six evaluators. 14 EEGs. Hours of handwritten notes. Participant Feedback Forms. A whiteboard. And the question that everything comes down to:\n\n'What actually happened, and what does it mean for preparedness?'\n\nThis is the part most exercise programs get wrong. They run the exercise, everyone says 'good job,' and nothing changes.\n\nHSEEP evaluation is different. It is systematic. It is evidence-based. Every observation is grounded in a reference to actual plans and procedures. Every finding is rated on a 4-point scale that tells you exactly how much work is needed.\n\nAnd then the hard part: root cause analysis. Not 'what went wrong' but WHY it went wrong — and what specific change will prevent it from happening again.\n\nYour evaluators look at you. 'Where do we start?'",
        atmosphere: "Post-exercise quiet. The building emptying. Clipboards and EEGs spread across the conference table. The weight of responsibility — this analysis will drive real change."
      },
      briefing: "Evaluation is the bridge between exercise play and real preparedness improvement. This chapter covers EEG structure, the P-S-M-U rating scale, observation techniques, data collection methods, and the four data analysis techniques. Good evaluation turns raw observations into actionable findings.",
      objectives: [
        "Describe the components and purpose of an Exercise Evaluation Guide (EEG)",
        "Apply the P-S-M-U rating scale correctly",
        "Explain the four data analysis techniques",
        "Distinguish between strengths and areas for improvement in AAR context"
      ],
      questions: [
        "hseep_eval_q01", "hseep_eval_q02", "hseep_eval_q03", "hseep_eval_q04",
        "hseep_eval_q05", "hseep_eval_q06", "hseep_eval_q07", "hseep_eval_q08",
        "hseep_eval_q09", "hseep_eval_q10", "hseep_eval_q11", "hseep_eval_q12",
        "hseep_eval_q13", "hseep_eval_q14", "hseep_eval_q15", "hseep_eval_q16"
      ],
      boss: {
        title: "The Rating Dilemma",
        scenario: "Evaluating Objective 2 (EOC activates to Level 2 within 60 minutes). Observed: EOC reached Level 2 at H+1:15 (75 minutes — 15 minutes over the 60-minute target). However, the delay was caused by a legitimate communications failure with a key agency — not by EOC staff unfamiliarity with procedures. Staff performed correctly once communications were restored. What is the appropriate P-S-M-U rating and rationale?",
        options: [
          "P — Performed without Challenges: the EOC eventually activated, so it's a success",
          "U — Unable to be Performed: 75 minutes is outside the target window, so the capability was not demonstrated",
          "S — Performed with Some Challenges: the target and critical tasks were completed, achieving the objective, but with challenges (delayed timeline due to communications failure) that had negative impact on other activities",
          "M — Performed with Major Challenges: any deviation from the timeline must be rated M"
        ],
        correct: 2,
        xpReward: 250,
        feedback: "'S — Performed with Some Challenges' is correct. The critical tasks WERE performed; Level 2 was achieved; the objective was accomplished — but with challenges. The 15-minute delay had operational impact (other activities dependent on EOC were delayed). The 'S' rating captures this nuance: success with challenges. A 'U' rating would be incorrect because the capability WAS demonstrated — just imperfectly. The communications failure should be documented as the root cause in the AAR, leading to a corrective action to improve inter-agency communications protocols."
      },
      rewards: ["Lead Evaluator Badge", "225 XP bonus"],
      unlocks: "Chapter 9: AAR/IP and Improvement Planning"
    },

    // ==========================================
    // CHAPTER 9: AAR/IP and Improvement Planning
    // ==========================================
    {
      id: 9,
      title: "AAR/IP and Improvement Planning",
      subtitle: "Turning Findings Into Real Preparedness Change",
      chapterType: "improvement",
      xpGoal: 1200,
      hp: 100,
      difficulty: "hard",
      cinematic: {
        text: "THIRTY DAYS AFTER ENDEX.\n\nThe draft AAR is 42 pages. Three major strengths. Seven areas for improvement. Each finding supported by specific observations from six evaluators.\n\nThe After-Action Meeting is tomorrow. You will sit across the table from every department head, every agency director, every person whose organization appears in the 'Areas for Improvement' section.\n\nSome of them will push back. 'That wasn't our fault.' 'The scenario was unrealistic.' 'We couldn't have known that.'\n\nYour job is not to assign blame. It never was. Your job is to find the systemic causes — the planning gaps, the training gaps, the procedure gaps — and turn them into corrective actions that are specific enough to actually fix something.\n\nSMART. Or they won't be done.\n\nYou've spent 30 days on this document. Tomorrow, it becomes the property of the whole community.\n\nTomorrow, the real work begins.",
        atmosphere: "Your desk. 11 PM. Final review of the AAR draft. Coffee. The knowledge that this document — if used correctly — will prevent real harm in a real disaster."
      },
      briefing: "The AAR/IP is the most important output of the HSEEP cycle. Without it, exercises are events rather than investments. This chapter covers the AAR structure, the Improvement Plan matrix, SMART corrective actions, the After-Action Meeting, and corrective action tracking — the system that closes the loop and turns exercise findings into real capability improvement.",
      objectives: [
        "Describe the structure and purpose of the AAR/IP",
        "Write SMART corrective actions from exercise findings",
        "Explain the After-Action Meeting process",
        "Describe how corrective actions are tracked to completion"
      ],
      questions: [
        "hseep_improve_q01", "hseep_improve_q02", "hseep_improve_q03", "hseep_improve_q04",
        "hseep_improve_q05", "hseep_improve_q06", "hseep_improve_q07", "hseep_improve_q08",
        "hseep_improve_q09", "hseep_improve_q10", "hseep_improve_q11", "hseep_improve_q12",
        "hseep_improve_q13", "hseep_improve_q14", "hseep_improve_q15", "hseep_improve_q16"
      ],
      boss: {
        title: "Corrective Action or Wishful Thinking?",
        scenario: "Your AAR identifies that 'the EOC's resource request process is unclear and took 45 minutes when the SOP requires 15 minutes.' A department head proposes the following corrective action: 'Training will be improved to fix the resource request process.' Is this a SMART corrective action?",
        options: [
          "Yes — training improvement is clearly the right fix",
          "No — it is not SMART. It lacks Specificity (what training?), Measurability (what outcome?), Achievability (who does it?), Relevance (training addresses the symptom but is the SOP the actual problem?), and Time-bound deadline. A SMART version: 'County OEM will revise the resource request SOP to include a one-page quick reference card. Training will be delivered to all EOC staff via a 2-hour exercise in March. Completion target: April 30. POC: Emergency Manager.'",
          "Partially — it needs a deadline but is otherwise acceptable",
          "Yes — any training corrective action is inherently SMART"
        ],
        correct: 1,
        xpReward: 250,
        feedback: "Vague corrective actions are the #1 reason AAR findings are never implemented. 'Training will be improved' without specifics means: no one knows what training, no one measures whether it happened, no one is accountable, and no one tracks completion. SMART requires: Specific (what exact training on what content), Measurable (what deliverable or pass/fail criterion), Achievable (realistic given budget and staff), Relevant (does training actually fix the ROOT CAUSE — or does the SOP need to change first?), Time-bound (specific deadline and POC)."
      },
      rewards: ["Improvement Architect Badge", "250 XP bonus"],
      unlocks: "Chapter 10: The Final Challenge"
    },

    // ==========================================
    // CHAPTER 10: Full-Scale Exercise Planning Project
    // ==========================================
    {
      id: 10,
      title: "Final Challenge: Full-Scale Exercise Design Project",
      subtitle: "Everything You've Learned. One Exercise. The Whole Community Watching.",
      chapterType: "comprehensive",
      xpGoal: 1500,
      hp: 150,
      difficulty: "expert",
      cinematic: {
        text: "ONE YEAR LATER.\n\nYou are not the same person who walked into that office with the sticky notes and the half-finished exercise plan.\n\nYou have run a TTX. A Drill. A Functional Exercise. You have written SitMans and ExPlans and MSELs and EEGs. You have survived an After-Action Meeting where a fire chief argued with every finding for 40 minutes.\n\nAnd you have made a difference. The EOC activates in 42 minutes now. The mass notification system works. Three corrective actions from last year's TTX are closed — verified by this year's Drill.\n\nToday, the Governor's Office calls. They want a regional Full-Scale Exercise. Multi-county. Real resources moving. Actors in the field. A SimCell with 40 simulators. 500 participants. National media may be present.\n\nLead time: 12 months.\n\nBudget: $500,000.\n\nExercise Director: You.\n\nThis is what you've been training for. The whole community is watching.\n\nReady?",
        atmosphere: "The same office — but now your walls are covered with exercise calendars, AAR findings, corrective action tracking sheets, and a framed HSEEP doctrine poster. This is your domain now."
      },
      briefing: "This final chapter tests everything learned in the campaign. You will answer comprehensive questions spanning all five phases of the HSEEP cycle, design elements of a Full-Scale Exercise, and synthesize knowledge from every previous chapter. This is the HSEEP mastery challenge.",
      objectives: [
        "Apply all HSEEP principles across the full exercise cycle",
        "Design key elements of a Full-Scale Exercise",
        "Synthesize doctrine, exercise types, planning, conduct, evaluation, and improvement planning",
        "Demonstrate readiness to independently lead an exercise program"
      ],
      questions: [
        "hseep_doctrine_q01", "hseep_types_q03", "hseep_types_q07", "hseep_design_q01",
        "hseep_design_q04", "hseep_design_q08", "hseep_design_q12", "hseep_conduct_q01",
        "hseep_conduct_q06", "hseep_conduct_q10", "hseep_eval_q01", "hseep_eval_q05",
        "hseep_eval_q10", "hseep_improve_q01", "hseep_improve_q06", "hseep_improve_q12",
        "hseep_docs_q03", "hseep_docs_q08", "hseep_caps_q01", "hseep_caps_q07"
      ],
      boss: {
        title: "THE HSEEP MASTER CHALLENGE",
        scenario: "A 7.2 earthquake has just struck your region. In the aftermath, the Governor asks: 'Our exercises didn't prepare us for this. We need a 3-year exercise program that will actually make a difference.' You have 10 minutes to brief the Governor. Drawing on everything you've learned, outline the key elements of a HSEEP-compliant 3-year exercise program that would genuinely improve earthquake preparedness. What are the FIRST FOUR things you tell the Governor?",
        options: [
          "We will run one Full-Scale Earthquake Exercise every year for 3 years — the biggest exercises produce the best results",
          "(1) Conduct an IPPW with whole community partners to identify capability gaps and set priorities informed by THIRA; (2) Build progressively — Year 1: Seminar and TTX to refine plans; Year 2: Drill and Functional Exercise to test operations; Year 3: Full-Scale Exercise to validate integrated response; (3) Develop SMART objectives tied to specific core capabilities and use EEGs to measure performance; (4) Complete AAR/IPs within 90 days and track corrective actions through the CAP System to close gaps before the next exercise",
          "Hire consultants to design the exercises — HSEEP is too complex for internal staff",
          "Run the same earthquake scenario every year at increasing scale to build muscle memory"
        ],
        correct: 1,
        xpReward: 500,
        feedback: "PERFECT. You have demonstrated HSEEP mastery. The four elements capture: (1) Program Management — IPPW with whole community, THIRA-informed; (2) Progressive approach — building capability before testing it, each exercise building on the last; (3) Design and Evaluation — SMART objectives and EEGs that measure what matters; (4) Improvement Planning — the HSEEP Cycle closes with action, not just findings. You are ready. The Governor extends their hand. 'You have the job.' CAMPAIGN COMPLETE.",
        isFinalBoss: true
      },
      completionCinematic: {
        text: "ENDEX.\n\nNot just for the exercise. For the campaign.\n\nYou have walked the full HSEEP Cycle — from blank page to mastery. You know the doctrine. You know the 7 exercise types. You can run a planning meeting without breaking a sweat. You have written MSELs that drove real player action. Your EEGs have produced findings that changed plans, procedures, and training programs.\n\nMost importantly: you know why it matters.\n\nEvery exercise you design, every corrective action you track, every SMART objective you write — it all exists to answer one question:\n\nWhen the real disaster comes — and it will come — are we ready?\n\nBecause of the work you've done, the answer is a little more 'yes' than it was before.\n\nHSEEP MASTER. Badge unlocked. Campaign complete.\n\nNow go design the next exercise.",
        atmosphere: "Sunrise. The city below — ready, because you made it so."
      },
      rewards: ["HSEEP Master Badge", "500 XP bonus", "Certificate of HSEEP Competency (Printable)", "Unlock: Expert Mode — All Questions Shuffled"],
      finalMessage: "You have completed the Path to HSEEP Mastery campaign. You now have the knowledge to design, conduct, evaluate, and improve exercises at any level — from a small tabletop to a multi-agency Full-Scale Exercise. Share what you've learned. The whole community depends on planners like you."
    }
  ]
};

// ============================================
// EXPORTS — Make all HSEEP content available
// ============================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    HSEEP_QUIZ_QUESTIONS,
    HSEEP_SCENARIOS,
    HSEEP_TEMPLATES,
    HSEEP_CAMPAIGN
  };
} else if (typeof window !== 'undefined') {
  window.HSEEP_QUIZ_QUESTIONS = HSEEP_QUIZ_QUESTIONS;
  window.HSEEP_SCENARIOS = HSEEP_SCENARIOS;
  window.HSEEP_TEMPLATES = HSEEP_TEMPLATES;
  window.HSEEP_CAMPAIGN = HSEEP_CAMPAIGN;
}

// ============================================
// SUMMARY
// ============================================
// HSEEP_QUIZ_QUESTIONS: 130 questions across 8 categories
//   - doctrine (17), exercise_types (18), design_development (18)
//   - conduct (15), evaluation (16), improvement (15)
//   - documents (16), core_capabilities (15)
// HSEEP_SCENARIOS: 8 interactive drill-building scenarios
//   1. build_ttx_earthquake         (7 steps)
//   2. build_drill_evacuation       (6 steps)
//   3. build_fe_eoc                 (7 steps)
//   4. build_msel_chemical          (7 steps)
//   5. build_eeg_mass_casualty      (7 steps)
//   6. write_aar_ip                 (7 steps)
//   7. plan_fse_multiagency         (8 steps)
//   8. ippw_multiyear               (6 steps)
// HSEEP_TEMPLATES: 5 interactive template builders
//   - sitman, explan, msel, eeg, aar_ip
// HSEEP_CAMPAIGN: 10-chapter progressive RPG campaign
//   Ch.1 HSEEP Doctrine | Ch.2 Exercise Types | Ch.3 Planning Meetings
//   Ch.4 SMART Objectives | Ch.5 Documents | Ch.6 MSELs and Injects
//   Ch.7 Conduct and Control | Ch.8 Evaluation | Ch.9 AAR/IP
//   Ch.10 Full-Scale Exercise Final Challenge
// ============================================
