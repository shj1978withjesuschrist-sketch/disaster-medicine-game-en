// ============================================
// DISASTER MEDICINE SURVIVAL GAME — V4
// Manga Character + Narrative Upgrade
// ============================================

// ---- CHARACTER SYSTEM ----
const CHARS = {
  mentor: {
    name: 'Dr. Sarah Chen',
    role: 'Mentor',
    emoji: '👨‍⚕️',
    color: 'var(--blue)',
    tagClass: 'mentor',
    greetings: [
      'Ready? This is the real thing!',
      'Every second in the field is a matter of life and death.',
      'Stay calm, but act swiftly!'
    ],
    correct: [
      'Excellent! That\'s exactly right!',
      'Perfect judgment!',
      'Do exactly this in the field!',
      'Now that\'s professional decision-making!'
    ],
    wrong: [
      'Let\'s think again.',
      'In the field, this mistake is fatal.',
      'Recall what you learned from the textbook.',
      'Unfortunate... but it\'s a learning opportunity.'
    ],
    hints: [
      'Recall the core principles.',
      'Check the patient\'s condition again.',
      'ABC — Airway, Breathing, Circulation is the foundation.'
    ]
  },
  nurse: {
    name: 'Nurse Maria Santos',
    role: 'Assistant',
    emoji: '👩‍⚕️',
    color: 'var(--green)',
    tagClass: 'nurse',
    support: [
      'Vital signs confirmed!',
      'Equipment ready!',
      'Monitoring patient condition.',
      'IV line secured!'
    ]
  },
  paramedic: {
    name: 'Paramedic James O’Brien',
    role: 'Field Responder',
    emoji: '🧑‍🚒',
    color: 'var(--orange)',
    tagClass: 'paramedic',
    reports: [
      'On scene! Reporting situation!',
      'Additional patient found! Requesting urgent support!',
      'Transport ready, awaiting orders!',
      'Scene safety confirmed!'
    ]
  },
  villain: {
    name: 'Disaster',
    role: 'Enemy',
    emoji: '💀',
    color: 'var(--red)',
    tagClass: 'villain',
    taunts: [
      'If your decision is slow, the patient dies...',
      'There\'s no time... hurry!',
      'Can you handle this disaster?',
      'Try to survive in this chaos...'
    ]
  },
  commander: {
    name: 'Chief Fatima Al-Rashid',
    role: 'Commander',
    emoji: '🎖️',
    color: 'var(--purple)',
    tagClass: 'commander',
    orders: [
      'Command post established! Operation commencing!',
      'Resource allocation decision needed!',
      'Inter-agency coordination activated!',
      'Escalating response level!'
    ]
  },
  patient: {
    name: 'Patient',
    role: 'Patient',
    emoji: '🤕',
    color: 'var(--yellow)',
    tagClass: 'patient',
    cries: [
      'Please save me... I can\'t breathe...',
      'My leg... I can\'t move it...',
      'My child is still inside!',
      'The bleeding won\'t stop!'
    ]
  }
};

function rnd(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

// Character dialogue builder
function charBubble(charKey, text, opts = {}) {
  const c = CHARS[charKey];
  const dir = opts.right ? 'right' : '';
  const bubbleClass = opts.urgent ? 'urgent' : opts.success ? 'success' : opts.warn ? 'warn' : '';
  const expression = opts.expression || '';
  return `
    <div class="char-container ${dir} anim-in" style="animation-delay:${opts.delay||0}ms">
      <div class="char-avatar-wrap">
        <div class="char-avatar" style="border-color:${c.color}">
          <span class="char-emoji">${c.emoji}</span>
          ${expression ? `<span class="char-expression">${expression}</span>` : ''}
        </div>
        <span class="char-name-tag ${c.tagClass}">${c.name}</span>
      </div>
      <div class="speech-bubble ${bubbleClass}">
        <div class="char-dialogue">${text}</div>
      </div>
    </div>`;
}

// Narrative panel builder
function narrativePanel(text, opts = {}) {
  const type = opts.type || 'danger';
  const tag = opts.tag || 'Situation Report';
  const tagClass = opts.tagClass || 'emergency';
  const icon = opts.icon || '🚨';
  return `
    <div class="narrative-panel ${type} anim-in">
      <div class="narrative-header">
        <span class="narrative-icon">${icon}</span>
        <span class="narrative-tag ${tagClass}">${tag}</span>
      </div>
      <div class="narrative-text">${text}</div>
    </div>`;
}

// Achievement toast
function showAchievement(icon, text, sub) {
  const el = document.createElement('div');
  el.className = 'achievement-toast';
  el.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <div>
      <div class="toast-text">${text}</div>
      ${sub ? `<div class="toast-sub">${sub}</div>` : ''}
    </div>`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 3500);
}

// ---- RPG CLASS SYSTEM ----
const CLASSES = {
  physician: {
    name: 'Emergency Medicine Specialist',
    icon: '🩺',
    desc: '+20% score bonus in Quiz and Triage',
    bonusModes: ['quiz', 'triage'],
    color: '#4fc3f7',
    passive: 'Diagnostic Instinct — Quiz time +3s'
  },
  commander: {
    name: 'Incident Commander',
    icon: '🎖️',
    desc: '+20% score bonus in MCI and Leadership',
    bonusModes: ['mci', 'leadership'],
    color: '#ffca28',
    passive: 'Command Authority — MCI time +5s'
  },
  specialist: {
    name: 'CBRNE Specialist',
    icon: '☢️',
    desc: '+30% score bonus in CBRNE',
    bonusModes: ['cbrne'],
    color: '#66bb6a',
    passive: 'Hazmat Detection — CBRNE clues revealed'
  },
  nurse: {
    name: 'Disaster Nurse',
    icon: '💉',
    desc: '+20% score bonus in Teamwork and Ethics',
    bonusModes: ['teamwork', 'ethics'],
    color: '#f06292',
    passive: 'Team Synergy — Teamwork hints revealed'
  }
};

// ---- SKILL TREE ----
const SKILL_TREE = {
  clinical: {
    name: 'Clinical Skills',
    icon: '🏥',
    color: '#4fc3f7',
    skills: [
      { id: 'triage_speed', name: 'Rapid Triage', desc: 'Triage time +5s', level: 2, cost: 1 },
      { id: 'quiz_mastery', name: 'Knowledge Master', desc: 'Quiz time +5s', level: 4, cost: 2 },
      { id: 'diagnosis_pro', name: 'Diagnosis Expert', desc: 'XP +50% on correct answer', level: 7, cost: 3 }
    ]
  },
  command: {
    name: 'Command Skills',
    icon: '⭐',
    color: '#ffca28',
    skills: [
      { id: 'quick_decide', name: 'Quick Decisions', desc: 'MCI time +10s', level: 2, cost: 1 },
      { id: 'leader_aura', name: 'Leader Aura', desc: 'Leadership score +25%', level: 4, cost: 2 },
      { id: 'commander_eye', name: 'Commander\'s Eye', desc: 'All mode bonus +10%', level: 7, cost: 3 }
    ]
  },
  response: {
    name: 'Response Skills',
    icon: '🛡️',
    color: '#66bb6a',
    skills: [
      { id: 'hazmat_sense', name: 'Hazmat Sense', desc: 'CBRNE score +25%', level: 2, cost: 1 },
      { id: 'ethics_insight', name: 'Ethics Insight', desc: 'Ethics XP +50%', level: 4, cost: 2 },
      { id: 'team_synergy', name: 'Team Synergy', desc: 'Teamwork score +30%', level: 7, cost: 3 }
    ]
  }
};

// ---- ACHIEVEMENT SYSTEM ----
const ACHIEVEMENTS = [
  // Combat
  { id: 'first_blood', name: 'First Answer', desc: 'Get your first correct answer', icon: '🎯', category: 'combat', check: g => g.totalCorrect >= 1 },
  { id: 'streak_5', name: '5-Answer Streak', desc: '5 correct answers in a row', icon: '🔥', category: 'combat', check: g => g.maxStreak >= 5 },
  { id: 'streak_10', name: 'Legendary Streak', desc: '10 correct answers in a row', icon: '⚡', category: 'combat', check: g => g.maxStreak >= 10 },
  { id: 'perfect_mode', name: 'Perfect Clear', desc: 'All correct in one mode', icon: '💎', category: 'combat', check: g => g.perfectModes > 0 },
  { id: 'score_1000', name: '1000 Points', desc: 'Reach a cumulative score of 1,000', icon: '🏅', category: 'combat', check: g => g.score >= 1000 },
  { id: 'score_3000', name: 'Legend', desc: 'Reach a cumulative score of 3,000', icon: '👑', category: 'combat', check: g => g.score >= 3000 },
  // Mastery
  { id: 'mode_master', name: 'Master of All', desc: 'Complete all modes', icon: '🌟', category: 'mastery', check: g => g.modesCompleted.size >= 7 },
  { id: 'boss_slayer', name: 'Boss Slayer', desc: 'Clear Boss Round with S grade', icon: '🐉', category: 'mastery', check: g => g.bossGrade === 'S' },
  { id: 'speed_demon', name: 'Speed Demon', desc: 'Answer all quiz questions within 5 seconds', icon: '⏱️', category: 'mastery', check: g => g.fastAnswers >= 15 },
  { id: 'triage_ace', name: 'Triage Ace', desc: 'Triage accuracy of 90% or more', icon: '🚑', category: 'mastery', check: g => g.triageAccuracy >= 90 },
  // Explorer
  { id: 'explorer', name: 'Explorer', desc: 'Challenge 3 or more modes', icon: '🗺️', category: 'explorer', check: g => g.modesCompleted.size >= 3 },
  { id: 'class_chosen', name: 'Class Chosen', desc: 'Select a class', icon: '🎭', category: 'explorer', check: g => !!g.playerClass },
  { id: 'skill_unlock', name: 'Skill Awakened', desc: 'Unlock your first skill', icon: '✨', category: 'explorer', check: g => g.unlockedSkills.length > 0 },
  { id: 'level_5', name: 'Skilled', desc: 'Reach Level 5', icon: '📈', category: 'explorer', check: g => g.level >= 5 },
  { id: 'level_10', name: 'Veteran', desc: 'Reach Level 10', icon: '🏆', category: 'explorer', check: g => g.level >= 10 },
  // SURGE
  { id: 'surge_clear', name: 'SURGE Cleared', desc: 'Complete SURGE chain scenario', icon: '🏥', category: 'mastery', check: g => g.modesCompleted.has('surge') },
  { id: 'zero_preventable', name: 'Zero Preventable Deaths', desc: 'Achieve 0 preventable deaths in SURGE', icon: '🛡️', category: 'legend', check: g => g.surgeZeroPD === true },
  { id: 'crossborder_cleared', name: 'Cross-Border Drill Cleared', desc: 'Complete the Cross-Border CBRNe Drill', icon: '🛂', category: 'mastery', check: g => g.modesCompleted.has('crossBorderCbrne') },
  // Legend
  { id: 'all_achieve', name: 'Complete', desc: 'Earn all achievements', icon: '🎊', category: 'legend', check: g => g.earnedAchievements.length >= 16 },
];

// ---- STORY ACT SYSTEM ----
const STORY_ACTS = [
  {
    id: 'act1',
    title: 'ACT 1: Emergency Dispatch',
    subtitle: 'You have arrived at the disaster scene. Start with patient triage!',
    modes: ['triage', 'quiz'],
    cutscene: {
      mentor: 'A mass casualty incident has occurred! Start with patient triage and review disaster medicine basics.',
      villain: 'There is no time... Can you really handle this?',
      bg: 'linear-gradient(135deg, #1a0a0a 0%, #2d1515 100%)'
    }
  },
  {
    id: 'act2',
    title: 'ACT 2: Field Response',
    subtitle: 'A special threat has been detected. Specialized response required!',
    modes: ['cbrne', 'mci'],
    cutscene: {
      mentor: 'CBRNE threat confirmed! Activate special response protocol and command the scene!',
      villain: 'Chemicals are spreading... casualties are mounting!',
      bg: 'linear-gradient(135deg, #0a1a0a 0%, #152d15 100%)'
    }
  },
  {
    id: 'act3',
    title: 'ACT 3: Team Operation',
    subtitle: 'Lead your team and make ethical decisions!',
    modes: ['ethics', 'leadership', 'teamwork'],
    cutscene: {
      mentor: 'Now is the time to command your team. Ethical judgment, leadership, and teamwork determine life and death!',
      villain: 'Chaos deepens... I\'m waiting for your team to collapse...',
      bg: 'linear-gradient(135deg, #0a0a1a 0%, #15152d 100%)'
    }
  },
  {
    id: 'final',
    title: 'FINAL: Final Exam',
    subtitle: 'Put everything on the line and challenge the final boss!',
    modes: ['boss'],
    cutscene: {
      mentor: 'The time has come to prove everything you\'ve learned. Stay calm!',
      villain: 'This is the final exam... I will finish you here!',
      bg: 'linear-gradient(135deg, #1a0a1a 0%, #2d152d 100%)'
    }
  }
];

// ---- DATA TRACKING API ----
const TRACKING_API = (() => {
  const p = '__PORT_8000__';
  if (!p.startsWith('__')) return p;
  const loc = window.location.href;
  const proxyMatch = loc.match(/^(https?:\/\/[^/]+\/sites\/proxy\/[^/]+)/);
  if (proxyMatch) return proxyMatch[1] + '/port/8000';
  if (loc.includes('github.io')) return 'https://disaster-med-backend-en.onrender.com';
  return 'http://localhost:8000';
})();

// ---- LOCAL DATA STORE (in-memory primary, localStorage fallback) ----
const LocalStore = {
  _key: 'disaster_med_sessions',
  _sessions: null, // in-memory primary store
  _currentSession: null, // in-memory current session

  _init() {
    if (this._sessions !== null) return;
    // 1) Try loading from localStorage first
    let stored = [];
    try { stored = JSON.parse(localStorage.getItem(this._key) || '[]'); } catch(e) {}
    // 2) Merge with seed data from global variable
    const seed = window.__SEED_SESSIONS || [];
    if (stored.length > 0) {
      this._sessions = stored;
    } else if (seed.length > 0) {
      this._sessions = seed.slice(); // copy
    } else {
      this._sessions = [];
    }
    console.log('LocalStore initialized: ' + this._sessions.length + ' sessions');
  },

  getSessions() {
    this._init();
    return this._sessions;
  },

  saveSession(session) {
    this._init();
    this._sessions.push(session);
    if (this._sessions.length > 500) this._sessions.splice(0, this._sessions.length - 500);
    try { localStorage.setItem(this._key, JSON.stringify(this._sessions)); } catch(e) {}
  },

  getCurrentSession() {
    return this._currentSession;
  },

  updateCurrentSession(data) {
    if (!this._currentSession) {
      this._currentSession = {
        nickname: '', started_at: new Date().toISOString(),
        modes: [], answers: [], device: 'unknown'
      };
    }
    Object.assign(this._currentSession, data);
  },

  addAnswer(answer) {
    if (!this._currentSession) return;
    if (!this._currentSession.answers) this._currentSession.answers = [];
    this._currentSession.answers.push(answer);
  },

  addModeResult(result) {
    if (!this._currentSession) return;
    if (!this._currentSession.modes) this._currentSession.modes = [];
    this._currentSession.modes.push(result);
  },

  finishSession(summary) {
    if (!this._currentSession) return;
    Object.assign(this._currentSession, summary, { ended_at: new Date().toISOString() });
    this.saveSession(this._currentSession);
    this._currentSession = null;
  }
};

const Tracker = {
  sessionId: null,
  modeStartTime: 0,
  questionStartTime: 0,
  currentMode: '',
  modeCorrect: 0,
  modeTotal: 0,
  modeScore: 0,
  enabled: true,

  async startSession(nickname) {
    if (!this.enabled) return;
    try {
      const deviceInfo = /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop';
      const res = await fetch(`${TRACKING_API}/api/session/start`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ nickname, device_info: deviceInfo })
      });
      if (res.ok) {
        const data = await res.json();
        this.sessionId = data.session_id;
      }
    } catch(e) { this.enabled = false; }
    const deviceInfo2 = /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop';
    LocalStore.updateCurrentSession({ nickname, started_at: new Date().toISOString(), device: deviceInfo2, modes: [], answers: [] });
    // Firebase real-time sync
    if (window.FirebaseSync && FirebaseSync.isReady()) {
      const sid = this.sessionId || ('LOCAL-' + Date.now());
      FirebaseSync.pushSessionUpdate({ sessionId: sid, nickname, team: window.G ? G.team : '', total_score: 0, max_level: 1, max_streak: 0, modes_completed: [], current_mode: null, device: deviceInfo2, started_at: new Date().toISOString() });
    }
  },

  async endSession(totalScore, maxLevel, maxStreak, modesCompleted) {
    if (!this.enabled || !this.sessionId) return;
    LocalStore.finishSession({ total_score: totalScore, max_level: maxLevel, max_streak: maxStreak, modes_completed: [...modesCompleted] });
    if (window.FirebaseSync && FirebaseSync.isReady()) {
      FirebaseSync.pushSessionUpdate({ sessionId: this.sessionId, nickname: G.nickname, team: G.team || '', total_score: totalScore, max_level: maxLevel, max_streak: maxStreak, modes_completed: [...modesCompleted], device: /Mobi|Android/i.test(navigator.userAgent)?'mobile':'desktop', started_at: LocalStore._currentSession?.started_at || '' });
    }
    try {
      await fetch(`${TRACKING_API}/api/session/end`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          session_id: this.sessionId,
          total_score: totalScore,
          max_level: maxLevel,
          max_streak: maxStreak,
          modes_completed: [...modesCompleted]
        })
      });
    } catch(e) {}
  },

  startMode(mode) {
    this.currentMode = mode;
    this.modeStartTime = Date.now();
    this.modeCorrect = 0;
    this.modeTotal = 0;
    this.modeScore = 0;
  },

  startQuestion() {
    this.questionStartTime = Date.now();
  },

  async recordAnswer(questionId, selectedAnswer, isCorrect, extras) {
    if (!this.enabled || !this.sessionId) return;
    const timeTaken = Math.round((Date.now() - this.questionStartTime) / 1000);
    this.modeTotal++;
    if (isCorrect) this.modeCorrect++;
    const localEntry = { mode: this.currentMode, question_id: String(questionId), selected: String(selectedAnswer), correct: isCorrect, time_sec: timeTaken, at: new Date().toISOString() };
    if (extras && typeof extras === 'object') localEntry.extras = extras;
    LocalStore.addAnswer(localEntry);
    if (window.FirebaseSync && FirebaseSync.isReady()) {
      const fbAnswer = { mode: this.currentMode, question_id: String(questionId), selected: String(selectedAnswer), correct: isCorrect, time_sec: timeTaken };
      if (extras && typeof extras === 'object') fbAnswer.extras = extras;
      FirebaseSync.pushAnswer(this.sessionId, fbAnswer);
      FirebaseSync.pushSessionUpdate({ sessionId: this.sessionId, nickname: G.nickname, team: G.team||'', total_score: G.score, max_level: G.level, max_streak: G.maxStreak, modes_completed: [...G.modesCompleted], current_mode: this.currentMode, current_progress: {correct: this.modeCorrect, total: this.modeTotal}, device: /Mobi|Android/i.test(navigator.userAgent)?'mobile':'desktop', started_at: '' });
    }
    try {
      const qBody = {
        session_id: this.sessionId,
        mode: this.currentMode,
        question_id: String(questionId),
        selected_answer: String(selectedAnswer),
        is_correct: isCorrect,
        time_taken_sec: timeTaken
      };
      if (extras && typeof extras === 'object') {
        try { qBody.extras = JSON.stringify(extras); } catch(e) {}
      }
      await fetch(`${TRACKING_API}/api/question/response`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(qBody)
      });
    } catch(e) {}
  },

  async endMode(score, details) {
    if (!this.enabled || !this.sessionId) return;
    const timeSpent = Math.round((Date.now() - this.modeStartTime) / 1000);
    this.modeScore = score;
    const localResult = { mode: this.currentMode, score, correct: this.modeCorrect, total: this.modeTotal, time_sec: timeSpent, at: new Date().toISOString() };
    if (details && typeof details === 'object') localResult.details = details;
    LocalStore.addModeResult(localResult);
    if (window.FirebaseSync && FirebaseSync.isReady()) {
      const fbResult = { mode: this.currentMode, score, correct: this.modeCorrect, total: this.modeTotal, time_sec: timeSpent };
      if (details && typeof details === 'object') fbResult.details = details;
      FirebaseSync.pushModeResult(this.sessionId, fbResult);
    }
    try {
      const body = {
        session_id: this.sessionId,
        mode: this.currentMode,
        score: score,
        total_questions: this.modeTotal,
        correct_answers: this.modeCorrect,
        time_spent_sec: timeSpent
      };
      if (details && typeof details === 'object') {
        // Backend `details` column is TEXT — stringify the structured payload.
        try { body.details = JSON.stringify(details); } catch(e) {}
      }
      await fetch(`${TRACKING_API}/api/mode/result`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
      });
    } catch(e) {}
    // Phase B: auto-trigger Post-test once 3+ modes done
    try { maybeTriggerPostTest(); } catch(e) {}
  }
};

// Phase B: Post-test auto-trigger
function maybeTriggerPostTest() {
  if (!window.Assessment) return;
  if (localStorage.getItem('posttest_result')) return;
  if (!localStorage.getItem('pretest_result')) return;
  const completed = (window.G && G.modesCompleted) ? G.modesCompleted.size : 0;
  if (completed >= 3) {
    setTimeout(function () { window.Assessment.triggerPostFlow(); }, 1200);
  }
}
window.maybeTriggerPostTest = maybeTriggerPostTest;

// ---- GAME STATE ----
const G = {
  nickname: '',
  score: 0,
  xp: 0,
  level: 1,
  streak: 0,
  maxStreak: 0,
  combo: 1,
  screen: 'intro',

  // Triage
  tPatientIdx: 0,
  tSelected: null,
  tResults: [],
  tTimer: 0,
  tTimerId: null,
  tTimePerPatient: 30,

  // Quiz
  qIdx: 0,
  qScore: 0,
  qAnswered: false,
  qTimer: 0,
  qTimerId: null,
  qTimePerQ: 20,

  // CBRNE
  cbIdx: 0,
  cbStep: 1,
  cbOrder: [],
  cbTimer: 0,
  cbTimerId: null,

  // MCI
  mciIdx: 0,
  mciScore: 0,
  mciTimer: 0,
  mciTimerId: null,

  // Boss round
  bossActive: false,
  bossQ: [],
  bossIdx: 0,
  bossScore: 0,
  bossTimer: 0,
  bossTimerId: null,

  // Ethics
  ethIdx: 0,
  ethScore: 0,
  ethTimer: 0,
  ethTimerId: null,
  ethAnswered: false,

  // Leadership
  leadIdx: 0,
  leadScore: 0,
  leadTimer: 0,
  leadTimerId: null,

  // Teamwork
  twIdx: 0,
  twScore: 0,
  twTimer: 0,
  twTimerId: null,

  // RPG
  playerClass: null,
  skillPoints: 0,
  unlockedSkills: [],
  earnedAchievements: [],
  totalCorrect: 0,
  perfectModes: 0,
  fastAnswers: 0,
  triageAccuracy: 0,
  bossGrade: null,
  currentAct: 0,
  storyMode: true,

  // Leaderboard
  leaderboard: [
    { name: 'Dr. S. Chen', score: 2850 },
    { name: 'M. Santos, RN', score: 2400 },
    { name: 'J. O’Brien', score: 2100 },
    { name: 'Dr. K. Asante', score: 1800 },
    { name: 'F. Al-Rashid', score: 1500 },
  ],

  // Modes completed
  modesCompleted: new Set(),

  // SURGE
  surge: null,
  surgeZeroPD: false
};

const $ = id => document.getElementById(id);
const app = $('app');

// ---- FIREBASE INIT ----
if (window.FirebaseSync) { FirebaseSync.init('en'); }

// ---- AUDIO ----
let audioCtx;
// Phase F: Audio settings (default ON, user can toggle)
if (typeof window !== 'undefined' && typeof window.SURGE_AUDIO_ENABLED === 'undefined') {
  try { window.SURGE_AUDIO_ENABLED = localStorage.getItem('surge_audio') !== 'off'; } catch(e) { window.SURGE_AUDIO_ENABLED = true; }
}
function toggleAudio() {
  window.SURGE_AUDIO_ENABLED = !window.SURGE_AUDIO_ENABLED;
  try { localStorage.setItem('surge_audio', window.SURGE_AUDIO_ENABLED ? 'on' : 'off'); } catch(e) {}
  if (!window.SURGE_AUDIO_ENABLED) stopBGM();
  else if (G.screen && G.screen !== 'intro') startBGM(G.screen === 'boss' || G.screen === 'cbrneAdvBoss' ? 'tense' : 'ambient');
}
window.toggleAudio = toggleAudio;

// Phase F: simple ambient/tense BGM (WebAudio, no asset files)
let bgmInterval = null, bgmStep = 0;
function stopBGM() { if (bgmInterval) { clearInterval(bgmInterval); bgmInterval = null; } }
function startBGM(mood) {
  if (!window.SURGE_AUDIO_ENABLED) return;
  stopBGM();
  try { if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) { return; }
  const patterns = {
    ambient: [110, 0, 0, 0, 138.6, 0, 0, 0, 130.8, 0, 0, 0, 110, 0, 0, 0],
    tense:   [82.4, 0, 82.4, 0, 110, 0, 82.4, 0, 87.3, 0, 87.3, 0, 116.5, 0, 87.3, 0]
  };
  const seq = patterns[mood] || patterns.ambient;
  bgmStep = 0;
  bgmInterval = setInterval(() => {
    if (!window.SURGE_AUDIO_ENABLED) { stopBGM(); return; }
    const f = seq[bgmStep % seq.length]; bgmStep++;
    if (!f) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass'; filter.frequency.value = 600;
      osc.type = mood === 'tense' ? 'sawtooth' : 'sine';
      osc.connect(filter); filter.connect(gain); gain.connect(audioCtx.destination);
      const now = audioCtx.currentTime;
      osc.frequency.setValueAtTime(f, now);
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.04, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
      osc.start(now); osc.stop(now + 0.55);
    } catch(e) {}
  }, 320);
}
window.startBGM = startBGM; window.stopBGM = stopBGM;

function sfx(type) {
  try {
    if (!window.SURGE_AUDIO_ENABLED) return;
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    const now = audioCtx.currentTime;
    if (type === 'correct') {
      osc.frequency.setValueAtTime(523, now);
      osc.frequency.setValueAtTime(659, now + 0.1);
      osc.frequency.setValueAtTime(784, now + 0.2);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
      osc.start(now); osc.stop(now + 0.4);
    } else if (type === 'wrong') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(200, now);
      osc.frequency.setValueAtTime(150, now + 0.15);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
      osc.start(now); osc.stop(now + 0.3);
    } else if (type === 'tick') {
      osc.frequency.setValueAtTime(880, now);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
      osc.start(now); osc.stop(now + 0.05);
    } else if (type === 'alert') {
      osc.type = 'square';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.setValueAtTime(880, now + 0.1);
      osc.frequency.setValueAtTime(440, now + 0.2);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
      osc.start(now); osc.stop(now + 0.3);
    } else if (type === 'boss') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(100, now);
      osc.frequency.linearRampToValueAtTime(200, now + 0.3);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
      osc.start(now); osc.stop(now + 0.5);
    } else if (type === 'levelup') {
      osc.frequency.setValueAtTime(523, now);
      osc.frequency.setValueAtTime(659, now + 0.12);
      osc.frequency.setValueAtTime(784, now + 0.24);
      osc.frequency.setValueAtTime(1047, now + 0.36);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.6);
      osc.start(now); osc.stop(now + 0.6);
    } else if (type === 'click') {
      osc.type = 'square';
      osc.frequency.setValueAtTime(1200, now);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
      osc.start(now); osc.stop(now + 0.04);
    } else if (type === 'siren') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(660, now);
      osc.frequency.linearRampToValueAtTime(880, now + 0.25);
      osc.frequency.linearRampToValueAtTime(660, now + 0.5);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
      osc.start(now); osc.stop(now + 0.6);
    } else if (type === 'heartbeat') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(60, now);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.start(now); osc.stop(now + 0.12);
      const osc2 = audioCtx.createOscillator(); const g2 = audioCtx.createGain();
      osc2.connect(g2); g2.connect(audioCtx.destination);
      osc2.type = 'sine'; osc2.frequency.setValueAtTime(60, now + 0.18);
      g2.gain.setValueAtTime(0.1, now + 0.18);
      g2.gain.exponentialRampToValueAtTime(0.001, now + 0.30);
      osc2.start(now + 0.18); osc2.stop(now + 0.30);
    }
  } catch (e) {}
}

// ---- SCORING ----
function addScore(pts) {
  const mode = G.screen;
  const classBonus = getClassBonus(mode);
  const skillBonus = getSkillBonus(mode);
  const actual = Math.round(pts * G.combo * classBonus * skillBonus);
  G.score += actual;
  return actual;
}

function addXP(amount) {
  // Skill bonus: diagnosis_pro gives +50% XP on correct
  if (G.unlockedSkills.includes('diagnosis_pro')) amount = Math.round(amount * 1.5);
  // Skill bonus: ethics_insight gives +50% XP in ethics mode
  if (G.screen === 'ethics' && G.unlockedSkills.includes('ethics_insight')) amount = Math.round(amount * 1.5);
  G.xp += amount;
  const oldLevel = G.level;
  G.level = Math.floor(G.xp / 200) + 1;
  if (G.level > oldLevel) {
    sfx('levelup');
    G.skillPoints += 1; // Grant skill point on level up
    showAchievement('⭐', `Level ${G.level} Reached!`, `Skill Point +1 (Total: ${G.skillPoints})`);
    checkAchievements();
  }
}

function getLevel() { return G.level; }

function updateStreak(correct) {
  if (correct) {
    G.streak++;
    G.maxStreak = Math.max(G.maxStreak, G.streak);
    G.combo = Math.min(1 + G.streak * 0.1, 3);
    if (G.streak === 3) showAchievement('🔥', '3-Answer Streak!', 'Combo bonus activated');
    if (G.streak === 5) showAchievement('⚡', '5-Answer Streak!', 'Combo x1.5 achieved!');
    if (G.streak === 10) showAchievement('💎', '10-Answer Streak!', 'Legendary streak!');
  } else {
    G.streak = 0;
    G.combo = 1;
  }
}

// ---- TIMER ----
function startCountdown(key, seconds, onTick, onEnd) {
  const idKey = key + '__intervalId';
  clearInterval(G[idKey]);
  G[key] = seconds;
  G[idKey] = setInterval(() => {
    G[key]--;
    if (onTick) onTick(G[key]);
    if (G[key] <= 5 && G[key] > 0) sfx('tick');
    if (G[key] <= 0) {
      clearInterval(G[idKey]);
      G[idKey] = null;
      if (onEnd) onEnd();
    }
  }, 1000);
}

function stopTimer(key) {
  const idKey = key + '__intervalId';
  clearInterval(G[idKey]);
  G[idKey] = null;
}

function stopAllTimers() {
  ['qTimer','advTimer','tacTimer','ctmTimer','triageTimer','mciTimer','ethicsTimer','leaderTimer','teamTimer','bossTimer'].forEach(function(k) { stopTimer(k); });
}

// ---- EFFECTS ----
function flashScreen(color) {
  app.classList.add(color === 'green' ? 'flash-green' : 'flash-red');
  setTimeout(() => app.classList.remove('flash-green', 'flash-red'), 500);
}

function shakeScreen() {
  app.classList.add('shake');
  setTimeout(() => app.classList.remove('shake'), 500);
}

function showImpact(color) {
  const el = document.createElement('div');
  el.className = `impact-frame ${color || ''}`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 600);
}

function showSpeedLines() {
  let el = document.querySelector('.speed-lines');
  if (!el) {
    el = document.createElement('div');
    el.className = 'speed-lines';
    document.body.appendChild(el);
  }
  el.classList.remove('active');
  void el.offsetWidth;
  el.classList.add('active');
}

function showDangerPulse(show) {
  let el = document.querySelector('.danger-pulse');
  if (show && !el) {
    el = document.createElement('div');
    el.className = 'danger-pulse';
    document.body.appendChild(el);
  } else if (!show && el) {
    el.remove();
  }
}

function confetti() {
  const colors = ['#ff3b5c','#00e676','#448aff','#ffca28','#b388ff','#00e5ff'];
  for (let i = 0; i < 40; i++) {
    const el = document.createElement('div');
    el.className = 'confetti';
    el.style.left = Math.random() * 100 + 'vw';
    el.style.background = colors[Math.floor(Math.random() * colors.length)];
    el.style.animationDelay = Math.random() * 0.5 + 's';
    el.style.animationDuration = (1 + Math.random()) + 's';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2500);
  }
}

function spawnParticles() {
  const container = document.getElementById('particles-container');
  if (!container) return;
  container.innerHTML = '';
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.width = p.style.height = (2 + Math.random() * 4) + 'px';
    p.style.animationDuration = (8 + Math.random() * 12) + 's';
    p.style.animationDelay = Math.random() * 10 + 's';
    container.appendChild(p);
  }
}

// ---- RPG FUNCTIONS ----

function getClassBonus(mode) {
  if (!G.playerClass) return 1;
  const cls = CLASSES[G.playerClass];
  if (cls.bonusModes.includes(mode)) return 1.2;
  // Commander's Eye skill: +10% all modes
  if (G.unlockedSkills.includes('commander_eye')) return 1.1;
  return 1;
}

function getSkillBonus(mode) {
  let bonus = 1;
  if (mode === 'cbrne' && G.unlockedSkills.includes('hazmat_sense')) bonus *= 1.25;
  if (mode === 'leadership' && G.unlockedSkills.includes('leader_aura')) bonus *= 1.25;
  if (mode === 'teamwork' && G.unlockedSkills.includes('team_synergy')) bonus *= 1.3;
  return bonus;
}

function getTimerBonus(mode) {
  let extra = 0;
  if (mode === 'triage' && G.unlockedSkills.includes('triage_speed')) extra += 5;
  if (mode === 'quiz' && G.unlockedSkills.includes('quiz_mastery')) extra += 5;
  if (mode === 'mci' && G.unlockedSkills.includes('quick_decide')) extra += 10;
  if (G.playerClass === 'physician' && mode === 'quiz') extra += 3;
  if (G.playerClass === 'commander' && mode === 'mci') extra += 5;
  return extra;
}

function checkAchievements() {
  ACHIEVEMENTS.forEach(a => {
    if (!G.earnedAchievements.includes(a.id) && a.check(G)) {
      G.earnedAchievements.push(a.id);
      sfx('levelup');
      showAchievement(a.icon, `Achievement Unlocked: ${a.name}`, a.desc);
      addXP(50);
      G.skillPoints++;
    }
  });
}

function renderClassSelect() {
  app.innerHTML = `
    <div class="screen class-select-screen">
      ${charBubble('mentor', `<strong>${G.nickname}</strong>, choose your <em>role</em> at the disaster scene! Each class has unique abilities.`)}
      <h2 class="class-title">🎭 Select Class</h2>
      <div class="class-grid">
        ${Object.entries(CLASSES).map(([key, cls]) => `
          <button class="class-card" onclick="selectClass('${key}')" style="--class-color:${cls.color}">
            <div class="class-icon-big">${cls.icon}</div>
            <div class="class-name">${cls.name}</div>
            <div class="class-desc">${cls.desc}</div>
            <div class="class-passive">💠 ${cls.passive}</div>
          </button>
        `).join('')}
      </div>
      <button class="btn-outline skip-class" onclick="selectClass(null)">Start without a class</button>
    </div>`;
}

function selectClass(cls) {
  G.playerClass = cls;
  if (cls) {
    sfx('levelup');
    showAchievement(CLASSES[cls].icon, `${CLASSES[cls].name} Selected!`, CLASSES[cls].passive);
    checkAchievements();
  }
  if (G.storyMode) {
    showCutscene(0);
  } else {
    G.screen = 'modes';
    render();
  }
}

function showCutscene(actIdx) {
  if (actIdx >= STORY_ACTS.length) { G.screen = 'modes'; render(); return; }
  G.currentAct = actIdx;
  const act = STORY_ACTS[actIdx];
  const cs = act.cutscene;

  app.innerHTML = `
    <div class="screen cutscene-screen" style="background:${cs.bg}">
      <div class="cut-act-label anim-in">${act.title}</div>
      <div class="cut-subtitle anim-in" style="animation-delay:300ms">${act.subtitle}</div>
      <div class="cut-dialogue-area">
        ${charBubble('mentor', cs.mentor, { delay: 600 })}
        ${charBubble('villain', cs.villain, { right: true, urgent: true, delay: 1000, expression: '😈' })}
      </div>
      <div class="cut-modes-preview anim-in" style="animation-delay:1400ms">
        ${act.modes.map(m => {
          const mode = [{ key: 'triage', icon: '🚑', t: 'Triage' }, { key: 'cbrne', icon: '☢️', t: 'CBRNE' },
            { key: 'mci', icon: '🏥', t: 'MCI' }, { key: 'quiz', icon: '📋', t: 'Quiz' },
            { key: 'ethics', icon: '⚖️', t: 'Ethics' }, { key: 'leadership', icon: '🎖️', t: 'Leadership' },
            { key: 'teamwork', icon: '🤝', t: 'Teamwork' }, { key: 'boss', icon: '👹', t: 'Boss' }]
            .find(x => x.key === m);
          return `<span class="cut-mode-chip">${mode?.icon || ''} ${mode?.t || m}</span>`;
        }).join('')}
      </div>
      <button class="btn-primary cut-start anim-in" style="animation-delay:1800ms" onclick="startAct(${actIdx})">
        Start Operation →
      </button>
    </div>`;
  sfx('alert');
}

function startAct(actIdx) {
  G.currentAct = actIdx;
  G.screen = 'modes';
  render();
}

function advanceStoryAct() {
  if (!G.storyMode) return;
  const act = STORY_ACTS[G.currentAct];
  if (!act) return;
  const allDone = act.modes.every(m => G.modesCompleted.has(m));
  if (allDone && G.currentAct < STORY_ACTS.length - 1) {
    G.currentAct++;
    // Show cutscene for next act after a short delay
    setTimeout(() => {
      sfx('alert');
      showAchievement('🎬', `${STORY_ACTS[G.currentAct].title} Unlocked!`, 'A new story unfolds!');
    }, 500);
  }
}

function renderSkillTree() {
  const branches = Object.entries(SKILL_TREE);
  app.innerHTML = `
    <div class="screen skilltree-screen">
      <div class="st-header">
        <button class="btn-outline" onclick="G.screen='modes';render();">← Back</button>
        <h2>🌲 Skill Tree</h2>
        <div class="sp-display">⭐ Skill Points: <strong>${G.skillPoints}</strong></div>
      </div>
      <div class="st-branches">
        ${branches.map(([key, branch]) => `
          <div class="st-branch" style="--branch-color:${branch.color}">
            <div class="st-branch-header">${branch.icon} ${branch.name}</div>
            ${branch.skills.map(skill => {
              const unlocked = G.unlockedSkills.includes(skill.id);
              const canUnlock = !unlocked && G.level >= skill.level && G.skillPoints >= skill.cost;
              const locked = !unlocked && !canUnlock;
              return `
                <div class="st-skill ${unlocked ? 'unlocked' : ''} ${locked ? 'locked' : ''} ${canUnlock ? 'available' : ''}">
                  <div class="st-skill-name">${skill.name}</div>
                  <div class="st-skill-desc">${skill.desc}</div>
                  <div class="st-skill-req">Lv.${skill.level} · ${skill.cost}SP</div>
                  ${canUnlock ? `<button class="st-unlock-btn" onclick="unlockSkill('${skill.id}','${key}',${skill.cost})">  Unlock</button>` : ''}
                  ${unlocked ? '<span class="st-check">✅</span>' : ''}
                </div>`;
            }).join('')}
          </div>
        `).join('')}
      </div>
    </div>`;
}

function unlockSkill(skillId, branch, cost) {
  if (G.skillPoints < cost || G.unlockedSkills.includes(skillId)) return;
  G.skillPoints -= cost;
  G.unlockedSkills.push(skillId);
  sfx('levelup');
  showAchievement('✨', 'Skill Unlocked!', SKILL_TREE[branch].skills.find(s => s.id === skillId)?.name);
  checkAchievements();
  renderSkillTree();
}

function renderAchievements() {
  const categories = { combat: '🗡️ Combat', mastery: '🏅 Mastery', explorer: '🗺️ Explorer', legend: '👑 Legend' };
  app.innerHTML = `
    <div class="screen achieve-screen">
      <div class="st-header">
        <button class="btn-outline" onclick="G.screen='modes';render();">← Back</button>
        <h2>🏆 Achievements</h2>
        <div class="sp-display">${G.earnedAchievements.length} / ${ACHIEVEMENTS.length}</div>
      </div>
      ${Object.entries(categories).map(([cat, label]) => `
        <div class="achieve-cat">
          <h3>${label}</h3>
          <div class="achieve-grid">
            ${ACHIEVEMENTS.filter(a => a.category === cat).map(a => {
              const earned = G.earnedAchievements.includes(a.id);
              return `
                <div class="achieve-card ${earned ? 'earned' : 'locked'}">
                  <div class="achieve-icon">${earned ? a.icon : '🔒'}</div>
                  <div class="achieve-name">${a.name}</div>
                  <div class="achieve-desc">${a.desc}</div>
                </div>`;
            }).join('')}
          </div>
        </div>
      `).join('')}
    </div>`;
}

// ---- RENDER FUNCTIONS ----

function render() {
  const s = G.screen;
  // Phase F: persist session on every screen change + adapt BGM mood by context.
  try { if (s !== 'intro' && s !== 'classSelect') saveSession(); } catch(e) {}
  try {
    if (window.SURGE_AUDIO_ENABLED && s !== 'intro') {
      const isTense = (s === 'boss' || s === 'cbrneAdvBoss' || s === 'tacticalBoss' || s === 'ctmBoss');
      if (!bgmInterval) startBGM(isTense ? 'tense' : 'ambient');
    }
  } catch(e) {}
  if (s === 'intro') renderIntro();
  else if (s === 'classSelect') renderClassSelect();
  else if (s === 'cutscene') showCutscene(G.currentAct);
  else if (s === 'skilltree') renderSkillTree();
  else if (s === 'achievements') renderAchievements();
  else if (s === 'modes') renderModeSelect();
  else if (s === 'triage') renderTriage();
  else if (s === 'quiz') renderQuiz();
  else if (s === 'cbrne') renderCBRNE();
  else if (s === 'mci') renderMCI();
  else if (s === 'ethics') renderEthics();
  else if (s === 'leadership') renderLeadership();
  else if (s === 'teamwork') renderTeamwork();
  else if (s === 'boss') renderBoss();
  else if (s === 'surgeSelect') renderSurgeSelect();
  else if (s === 'surge') renderSurgePhase();
  else if (s === 'surgeResults') {} // already rendered
  else if (s === 'results') renderResults();
  else if (s === 'cbrneAdv') renderCBRNEAdv();
  else if (s === 'cbrneAdvScenario') renderCBRNEAdvScenario();
  else if (s === 'cbrneAdvBoss') renderCBRNEAdvBoss();
  else if (s === 'tactical') renderTactical();
  else if (s === 'tacticalScenario') renderTacticalScenario();
  else if (s === 'tacticalBoss') renderTacticalBoss();
  else if (s === 'ctm') renderCTM();
  else if (s === 'ctmScenario') renderCTMScenario();
  else if (s === 'ctmBoss') renderCTMBoss();
  else if (s === 'crossBorderCbrne') renderCrossBorderCbrne();
  else if (s === 'crossBorderCbrneAAR') renderCrossBorderCbrneAAR();
}

// ---- PRIVACY POLICY MODAL ----
function showPrivacyModal() {
  const existing = document.getElementById('privacy-modal');
  if (existing) { existing.remove(); return; }
  const modal = document.createElement('div');
  modal.id = 'privacy-modal';
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(8,10,18,0.86);z-index:99999;display:flex;align-items:center;justify-content:center;padding:18px;backdrop-filter:blur(6px);';
  const inner = document.createElement('div');
  inner.style.cssText = 'max-width:640px;max-height:80vh;overflow-y:auto;background:#11141d;border:1px solid #2a3050;border-radius:14px;padding:28px;color:#cdd1dc;font-size:0.86rem;line-height:1.65;';
  inner.innerHTML = `
    <h2 style="margin:0 0 14px;color:#7fb0ff;font-size:1.15rem;">Privacy Notice (Summary)</h2>
    <p><strong>Owner / Controller:</strong> Shin’s Disaster Medicine Academy LLC (신재난의학아카데미 유한책임회사)<br><strong>Operating Partner:</strong> Soonchunhyang University Disaster Medicine Center</p>
    <p><strong>Data collected:</strong></p>
    <ul style="margin:6px 0 12px;padding-left:18px;">
      <li>Nickname (anonymous, max 30 chars)</li>
      <li>Selected team, class, device type (PC/mobile)</li>
      <li>Learning progress: per-mode score, answer correctness, response time</li>
      <li>Session start/end timestamps</li>
    </ul>
    <p><strong>Purpose:</strong> Aggregating educational outcomes, instructor feedback, and content improvement</p>
    <p><strong>Retention:</strong> Up to 2 years (then automatically anonymised or deleted)</p>
    <p><strong>Third parties:</strong> No data is sold or shared. Hosting only via Firebase Realtime Database (Google Cloud, EU/US) and Render.com.</p>
    <p><strong>Your rights:</strong> Access, rectification, erasure, and restriction of processing of your session data. Contact shj1978withjesuschrist@gmail.com at any time.</p>
    <p><strong>Important:</strong> Do not enter real names, government IDs, emails, phone numbers, or licence numbers as a nickname.</p>
    <p style="margin-top:18px;color:#9aa3b8;">Compliant with GDPR Art.13 · South Korea PIPA</p>
    <button id="privacy-close" style="margin-top:18px;padding:10px 22px;background:#7c3aed;color:#fff;border:none;border-radius:8px;font-size:0.92rem;font-weight:600;cursor:pointer;">Close</button>
  `;
  modal.appendChild(inner);
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });
  document.body.appendChild(modal);
  document.getElementById('privacy-close').addEventListener('click', () => modal.remove());
}
window.showPrivacyModal = showPrivacyModal;

// ---- INTRO ----
function renderIntro() {
  const deployUrl = window.location.href;
  app.innerHTML = `
    <div class="screen intro-screen">
      <div class="intro-top">
        <div class="game-logo">
          <div class="pulse-ring"></div>
          <svg viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="45" stroke="#ff3b5c" stroke-width="3"/>
            <path d="M50 25 L50 55" stroke="#ff3b5c" stroke-width="4" stroke-linecap="round"/>
            <path d="M35 40 L50 55 L65 40" stroke="#ff3b5c" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="50" cy="70" r="4" fill="#ff3b5c"/>
          </svg>
        </div>
        <h1 class="game-title">Disaster Medicine<br><span class="em">Survival</span></h1>
        <p class="game-subtitle">Shin’s Disaster Medicine Academy LLC<br>Interactive RPG Education Simulator v5</p>
      </div>
      <div class="qr-section" id="qr-section"></div>
      <div class="nick-input-wrap">
        <input class="nick-input" id="nick" placeholder="Enter Nickname" maxlength="8" autocomplete="off"/>
        <select class="nick-input" id="team-select" style="margin-top:8px;text-align:center;background:#161b2e;color:#aab;border:1px solid #2a3050;border-radius:12px;padding:12px 18px;font-size:1rem;width:100%;max-width:320px;">
          <option value="">🏷️ Select Team (optional)</option>
          <option value="Alpha">🔴 Team Alpha</option>
          <option value="Bravo">🔵 Team Bravo</option>
          <option value="Charlie">🟢 Team Charlie</option>
          <option value="Delta">🟡 Team Delta</option>
          <option value="Echo">🟣 Team Echo</option>
        </select>
      </div>
      <div class="privacy-box" style="max-width:520px;margin:14px auto 12px;padding:12px 16px;background:rgba(80,140,255,0.06);border:1px solid rgba(80,140,255,0.25);border-radius:10px;color:#cdd1dc;font-size:0.78rem;line-height:1.5;text-align:left;">
        <label style="display:flex;align-items:flex-start;gap:8px;cursor:pointer;">
          <input type="checkbox" id="consent-check" style="margin-top:3px;"/>
          <span>I consent to anonymous logging of my learning progress and answers (do <strong>not</strong> enter real names, emails, or any personal identifiers as a nickname). <a href="#" id="privacy-link" style="color:#7fb0ff;">View Privacy Notice</a></span>
        </label>
      </div>
      <button class="enter-btn" id="enter-btn" disabled>Ready to Deploy 🚑</button>
      <div class="badge-row">
        <span class="mini-badge">🎮 RPG System</span>
        <span class="mini-badge">🌲 Skill Tree</span>
        <span class="mini-badge">🏆 Achievements</span>
        <span class="mini-badge">👹 Boss</span>
      </div>
      <div class="admin-link-wrap">
        <button class="admin-link-btn" id="admin-link-btn">🔐 Admin</button>
      </div>
      <div class="disclaimer-box" style="max-width:520px;margin:18px auto 0;padding:14px 16px;background:rgba(255,80,80,0.06);border:1px solid rgba(255,80,80,0.25);border-radius:10px;color:#cdd1dc;font-size:0.78rem;line-height:1.5;text-align:left;">
        <strong style="color:#ff7a8a;">⚠️ For Educational & Training Use Only</strong><br>
        This simulation is intended solely for education and training. It is <strong>not a medical device</strong> and must not be used for diagnostic or treatment decisions. Real patient care must follow established clinical guidelines and the judgment of qualified medical professionals.
      </div>
      <div class="game-footer-credit">
        <p>© 2026 Shin’s Disaster Medicine Academy LLC. All rights reserved.</p>
        <p>Operating Partner: Soonchunhyang University Disaster Medicine Center · Aligned with the JOSHUA Initiative (Horizon Europe Cluster 3)</p>
      </div>
    </div>`;

  // QR code
  try {
    const qrDiv = $('qr-section');
    if (typeof qrcode !== 'undefined' && deployUrl.startsWith('http')) {
      const qr = qrcode(0, 'M');
      qr.addData(deployUrl);
      qr.make();
      const size = qr.getModuleCount();
      let svg = `<svg viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">`;
      svg += `<rect width="${size}" height="${size}" fill="#0e1118"/>`;
      for (let r = 0; r < size; r++)
        for (let c = 0; c < size; c++)
          if (qr.isDark(r, c))
            svg += `<rect x="${c}" y="${r}" width="1" height="1" fill="#eef0f6"/>`;
      svg += '</svg>';
      qrDiv.innerHTML = `<div class="qr-box">${svg}</div><span class="qr-label">Scan QR for Mobile Access</span>`;
    }
  } catch (e) {}

  // Privacy modal handler
  const privacyLink = document.getElementById('privacy-link');
  if (privacyLink) {
    privacyLink.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      showPrivacyModal();
    });
  }

  // Nick input
  const nickInput = $('nick');
  const enterBtn = $('enter-btn');
  const consentCheck = document.getElementById('consent-check');

  function refreshEnterBtn() {
    const hasNick = nickInput.value.trim().length >= 1;
    const hasConsent = !consentCheck || consentCheck.checked;
    enterBtn.disabled = !(hasNick && hasConsent);
  }
  nickInput.addEventListener('input', refreshEnterBtn);
  if (consentCheck) consentCheck.addEventListener('change', refreshEnterBtn);

  function tryStart() {
    if (!nickInput.value.trim()) return;
    if (consentCheck && !consentCheck.checked) {
      const box = document.querySelector('.privacy-box');
      if (box) {
        box.style.borderColor = '#ff5577';
        box.style.background = 'rgba(255,80,120,0.12)';
        setTimeout(() => { box.style.borderColor = ''; box.style.background = ''; }, 1200);
      }
      return;
    }
    startGame();
  }
  nickInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') tryStart();
  });
  enterBtn.addEventListener('click', tryStart);

  // Admin dashboard — built-in, reads from in-memory store
  $('admin-link-btn').addEventListener('click', () => {
    let overlay = document.getElementById('admin-overlay');
    if (overlay) { overlay.style.display = 'flex'; return; }
    overlay = document.createElement('div');
    overlay.id = 'admin-overlay';
    overlay.style.cssText = 'position:fixed;inset:0;z-index:99999;background:#0f0f23;display:flex;flex-direction:column;font-family:system-ui,sans-serif;overflow:hidden;';
    document.body.appendChild(overlay);
    renderAdminDashboard(overlay);
  });

  setTimeout(() => nickInput.focus(), 300);
  spawnParticles();
}


// ---- BUILT-IN ADMIN DASHBOARD ----
const MODE_LABELS = {
  triage: 'START Triage',
  quiz: 'Medical Knowledge Quiz',
  cbrne: 'CBRNE Response',
  mci: 'Mass Casualty Incident',
  decon: 'Decontamination',
  communication: 'Communication',
  hseep_tabletop: 'HSEEP Tabletop Exercise',
  hseep_functional: 'HSEEP Functional Exercise',
  hseep_fullscale: 'HSEEP Full-Scale Exercise',
  crossBorderCbrne: 'Cross-Border CBRNe Drill',
  boss: 'Final Boss Challenge',
  scenario: 'Scenario Mode',
  field: 'Field Operations',
  surge: 'SURGE Chain Simulation'
};

function renderAdminDashboard(overlay) {
  // SECURITY: Admin password is verified server-side. No plaintext stored client-side.
  let loggedIn = false;
  let activeTab = 'overview';
  let sortCol = 'started_at';
  let sortAsc = false;
  let nickFilter = '';
  let selectedSessionIdx = null;

  const styles = `
    <style>
      #ad-root { height:100%; display:flex; flex-direction:column; background:#0f0f23; color:#e0e0e0; }
      #ad-topbar { display:flex; align-items:center; justify-content:space-between; padding:10px 18px; background:#16213e; border-bottom:1px solid #1a1a3e; flex-shrink:0; }
      #ad-topbar h1 { margin:0; font-size:18px; color:#7f8fff; font-weight:700; }
      #ad-close { background:#e74c3c; color:#fff; border:none; padding:7px 16px; border-radius:7px; font-size:13px; cursor:pointer; font-weight:bold; }
      #ad-login { display:flex; flex-direction:column; align-items:center; justify-content:center; flex:1; gap:18px; }
      #ad-login h2 { color:#7f8fff; font-size:22px; margin:0; }
      #ad-login input { padding:10px 16px; border-radius:8px; border:1px solid #333; background:#1a1a2e; color:#e0e0e0; font-size:15px; width:260px; outline:none; }
      #ad-login button { padding:10px 32px; background:#7f8fff; color:#fff; border:none; border-radius:8px; font-size:15px; cursor:pointer; font-weight:bold; }
      #ad-login .ad-err { color:#e74c3c; font-size:13px; display:none; }
      #ad-tabs { display:flex; gap:4px; padding:10px 18px 0; background:#16213e; flex-shrink:0; }
      #ad-tabs button { padding:8px 16px; border:none; border-radius:8px 8px 0 0; font-size:13px; cursor:pointer; background:#1a1a2e; color:#aaa; font-weight:600; }
      #ad-tabs button.active { background:#0f0f23; color:#7f8fff; border-bottom:2px solid #7f8fff; }
      #ad-body { flex:1; overflow-y:auto; padding:18px; }
      .ad-card { background:#1a1a2e; border-radius:10px; padding:16px; margin-bottom:14px; border:1px solid #222255; }
      .ad-card h3 { margin:0 0 10px 0; color:#7f8fff; font-size:14px; text-transform:uppercase; letter-spacing:1px; }
      .ad-stat-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(140px,1fr)); gap:10px; margin-bottom:14px; }
      .ad-stat { background:#16213e; border-radius:8px; padding:12px 14px; text-align:center; }
      .ad-stat .val { font-size:26px; font-weight:700; color:#7f8fff; }
      .ad-stat .lbl { font-size:11px; color:#888; margin-top:2px; }
      table { width:100%; border-collapse:collapse; font-size:13px; }
      th { background:#16213e; color:#7f8fff; padding:8px 10px; text-align:left; cursor:pointer; user-select:none; font-weight:600; position:sticky; top:0; }
      th:hover { background:#1a1a2e; }
      td { padding:7px 10px; border-bottom:1px solid #1a1a2e; }
      tr:nth-child(even) td { background:#161628; }
      tr:hover td { background:#1c1c40; }
      .ad-search { padding:8px 12px; border-radius:7px; border:1px solid #333; background:#1a1a2e; color:#e0e0e0; font-size:13px; width:220px; margin-bottom:10px; outline:none; }
      .ad-export { padding:7px 16px; background:#2d6a4f; color:#fff; border:none; border-radius:7px; font-size:13px; cursor:pointer; font-weight:bold; margin-bottom:10px; margin-left:8px; }
      .badge-ok { color:#2ecc71; font-weight:700; }
      .badge-err { color:#e74c3c; font-weight:700; }
      select.ad-sel { padding:7px 10px; border-radius:7px; border:1px solid #333; background:#1a1a2e; color:#e0e0e0; font-size:13px; width:100%; margin-bottom:10px; outline:none; }
      /* Live Team Battle Styles */
      .live-pulse { display:inline-block; width:10px; height:10px; background:#e74c3c; border-radius:50%; animation:livePulse 1.2s infinite; margin-right:6px; }
      @keyframes livePulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(1.3)} }
      .team-card { background:linear-gradient(135deg,#1a1a2e 60%,#16213e); border-radius:14px; padding:18px; margin-bottom:14px; border:2px solid #222255; position:relative; overflow:hidden; }
      .team-card.team-alpha { border-color:#e74c3c44; } .team-card.team-bravo { border-color:#3498db44; }
      .team-card.team-charlie { border-color:#2ecc7144; } .team-card.team-delta { border-color:#f1c40f44; }
      .team-card.team-echo { border-color:#9b59b644; }
      .team-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; }
      .team-name { font-size:18px; font-weight:800; }
      .team-alpha .team-name { color:#e74c3c; } .team-bravo .team-name { color:#3498db; }
      .team-charlie .team-name { color:#2ecc71; } .team-delta .team-name { color:#f1c40f; }
      .team-echo .team-name { color:#9b59b6; }
      .team-score-big { font-size:32px; font-weight:900; color:#7f8fff; }
      .team-members { display:flex; flex-wrap:wrap; gap:6px; margin-top:8px; }
      .member-chip { background:#16213e; border:1px solid #2a3050; border-radius:8px; padding:5px 10px; font-size:12px; display:flex; align-items:center; gap:6px; }
      .member-chip .m-score { color:#7f8fff; font-weight:700; }
      .member-chip .m-mode { color:#888; font-size:11px; }
      .progress-bar-wrap { background:#0f0f23; border-radius:6px; height:8px; margin-top:8px; overflow:hidden; }
      .progress-bar-fill { height:100%; border-radius:6px; transition:width 0.5s ease; }
      .team-alpha .progress-bar-fill { background:linear-gradient(90deg,#e74c3c,#ff6b6b); }
      .team-bravo .progress-bar-fill { background:linear-gradient(90deg,#3498db,#5dade2); }
      .team-charlie .progress-bar-fill { background:linear-gradient(90deg,#2ecc71,#58d68d); }
      .team-delta .progress-bar-fill { background:linear-gradient(90deg,#f1c40f,#f9e547); }
      .team-echo .progress-bar-fill { background:linear-gradient(90deg,#9b59b6,#bb8fce); }
      .leaderboard-row { display:flex; align-items:center; padding:10px 14px; border-bottom:1px solid #1a1a2e; gap:12px; }
      .leaderboard-row:hover { background:#1c1c40; }
      .lb-rank { font-size:20px; font-weight:900; color:#7f8fff; min-width:36px; text-align:center; }
      .lb-rank.gold { color:#f1c40f; } .lb-rank.silver { color:#bdc3c7; } .lb-rank.bronze { color:#e67e22; }
      .live-activity { background:#16213e; border-radius:10px; padding:12px; margin-top:10px; max-height:200px; overflow-y:auto; }
      .activity-item { padding:4px 0; font-size:12px; color:#aaa; border-bottom:1px solid #1a1a2e; }
      .activity-item .act-nick { color:#7f8fff; font-weight:600; }
      .activity-item .act-mode { color:#2ecc71; }
      .no-firebase-msg { text-align:center; padding:40px; color:#888; }
      .no-firebase-msg h3 { color:#e74c3c; margin-bottom:10px; }
      .live-controls { display:flex; gap:8px; flex-wrap:wrap; margin-bottom:14px; }
      .live-controls button { padding:8px 16px; border-radius:8px; border:none; font-size:13px; cursor:pointer; font-weight:600; }
      .btn-live-start { background:#2ecc71; color:#fff; } .btn-live-start:hover { background:#27ae60; }
      .btn-live-reset { background:#e74c3c; color:#fff; } .btn-live-reset:hover { background:#c0392b; }
      .btn-live-export { background:#3498db; color:#fff; }
      .fullscreen-btn { position:absolute; top:10px; right:10px; background:#7f8fff33; border:1px solid #7f8fff44; color:#7f8fff; padding:6px 12px; border-radius:6px; font-size:12px; cursor:pointer; }
    </style>
  `;

  function getLabel(m) { return MODE_LABELS[m] || m; }

  function buildOverview(sessions) {
    if (!sessions.length) return '<div class="ad-card"><p style="color:#888">No session data found. Play the game first!</p></div>';
    const total = sessions.length;
    const nicks = new Set(sessions.map(s => s.nickname)).size;
    const scores = sessions.filter(s => s.total_score != null).map(s => s.total_score);
    const avgScore = scores.length ? Math.round(scores.reduce((a,b)=>a+b,0)/scores.length) : 0;
    // most played mode
    const modeCounts = {};
    sessions.forEach(s => (s.modes||[]).forEach(m => { modeCounts[m.mode] = (modeCounts[m.mode]||0)+1; }));
    const topMode = Object.entries(modeCounts).sort((a,b)=>b[1]-a[1])[0];
    const mobile = sessions.filter(s=>s.device==='mobile').length;
    const desktop = sessions.filter(s=>s.device==='desktop').length;
    const recent = sessions.slice().sort((a,b)=>b.started_at?.localeCompare(a.started_at||'')||0).slice(0,10);
    return `
      <div class="ad-stat-grid">
        <div class="ad-stat"><div class="val">${total}</div><div class="lbl">Total Sessions</div></div>
        <div class="ad-stat"><div class="val">${nicks}</div><div class="lbl">Unique Nicknames</div></div>
        <div class="ad-stat"><div class="val">${avgScore}</div><div class="lbl">Avg Score</div></div>
        <div class="ad-stat"><div class="val">${topMode ? getLabel(topMode[0]) : '-'}</div><div class="lbl">Most Played Mode</div></div>
        <div class="ad-stat"><div class="val">${mobile}</div><div class="lbl">Mobile</div></div>
        <div class="ad-stat"><div class="val">${desktop}</div><div class="lbl">Desktop</div></div>
      </div>
      <div class="ad-card">
        <h3>Recent 10 Sessions</h3>
        <table>
          <thead><tr><th>Nickname</th><th>Started</th><th>Score</th><th>Level</th><th>Device</th></tr></thead>
          <tbody>
            ${recent.map(s => `<tr>
              <td>${s.nickname||'-'}</td>
              <td>${s.started_at ? s.started_at.replace('T',' ').slice(0,19) : '-'}</td>
              <td>${s.total_score??'-'}</td>
              <td>${s.max_level??'-'}</td>
              <td>${s.device||'-'}</td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  function buildStudents(sessions, filter, col, asc) {
    let rows = sessions.slice();
    if (filter) rows = rows.filter(s => (s.nickname||'').toLowerCase().includes(filter.toLowerCase()));
    rows.sort((a,b) => {
      let va = a[col] ?? ''; let vb = b[col] ?? '';
      if (typeof va === 'number') return asc ? va-vb : vb-va;
      return asc ? String(va).localeCompare(String(vb)) : String(vb).localeCompare(String(va));
    });
    const arrow = (c) => col===c ? (asc?'▲':'▼') : '';
    return `
      <div style="display:flex;align-items:center;flex-wrap:wrap;gap:6px;margin-bottom:10px;">
        <input class="ad-search" id="ad-nick-filter" placeholder="Filter by nickname..." value="${filter}">
        <button class="ad-export" id="ad-export-btn">📥 Export CSV</button>
      </div>
      <div class="ad-card" style="padding:0;overflow:auto;">
        <table>
          <thead><tr>
            <th data-col="nickname">Nickname ${arrow('nickname')}</th>
            <th data-col="started_at">Time ${arrow('started_at')}</th>
            <th data-col="total_score">Score ${arrow('total_score')}</th>
            <th data-col="max_level">Level ${arrow('max_level')}</th>
            <th data-col="max_streak">Streak ${arrow('max_streak')}</th>
            <th>Modes</th>
            <th data-col="device">Device ${arrow('device')}</th>
          </tr></thead>
          <tbody>
            ${rows.map(s => `<tr>
              <td>${s.nickname||'-'}</td>
              <td>${s.started_at ? s.started_at.replace('T',' ').slice(0,19) : '-'}</td>
              <td>${s.total_score??'-'}</td>
              <td>${s.max_level??'-'}</td>
              <td>${s.max_streak??'-'}</td>
              <td>${(s.modes||[]).map(m=>getLabel(m.mode)).join(', ')||'-'}</td>
              <td>${s.device||'-'}</td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  function buildModeAnalysis(sessions) {
    const modeStats = {};
    sessions.forEach(s => {
      (s.modes||[]).forEach(m => {
        if (!modeStats[m.mode]) modeStats[m.mode] = { count:0, scores:[], accs:[], times:[] };
        const ms = modeStats[m.mode];
        ms.count++;
        if (m.score != null) ms.scores.push(m.score);
        if (m.total > 0) ms.accs.push(m.correct / m.total * 100);
        if (m.time_sec != null) ms.times.push(m.time_sec);
      });
    });
    const avg = arr => arr.length ? Math.round(arr.reduce((a,b)=>a+b,0)/arr.length) : '-';
    const rows = Object.entries(modeStats).sort((a,b)=>b[1].count-a[1].count);
    if (!rows.length) return '<div class="ad-card"><p style="color:#888">No mode data yet.</p></div>';
    return `
      <div class="ad-card" style="padding:0;overflow:auto;">
        <table>
          <thead><tr>
            <th>Mode</th><th>Sessions</th><th>Avg Score</th><th>Avg Accuracy</th><th>Avg Time (s)</th>
          </tr></thead>
          <tbody>
            ${rows.map(([mode, ms]) => `<tr>
              <td>${getLabel(mode)}</td>
              <td>${ms.count}</td>
              <td>${avg(ms.scores)}</td>
              <td>${ms.accs.length ? avg(ms.accs)+'%' : '-'}</td>
              <td>${avg(ms.times)}</td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  function buildDetailedData(sessions, selIdx) {
    const opts = sessions.map((s,i) => `<option value="${i}" ${selIdx===i?'selected':''}>${i+1}. ${s.nickname||'?'} — ${s.started_at ? s.started_at.replace('T',' ').slice(0,19) : '?'} (Score: ${s.total_score??'?'})</option>`).join('');
    let answerTable = '<p style="color:#888">Select a session to see detailed answers.</p>';
    if (selIdx !== null && sessions[selIdx]) {
      const answers = sessions[selIdx].answers || [];
      if (answers.length) {
        answerTable = `
          <div class="ad-card" style="padding:0;overflow:auto;margin-top:10px;">
            <table>
              <thead><tr><th>Mode</th><th>Question ID</th><th>Selected</th><th>Correct?</th><th>Time (s)</th><th>At</th></tr></thead>
              <tbody>
                ${answers.map(a => `<tr>
                  <td>${getLabel(a.mode)}</td>
                  <td>${a.question_id||'-'}</td>
                  <td>${a.selected??'-'}</td>
                  <td class="${a.correct?'badge-ok':'badge-err'}">${a.correct?'✓':'✗'}</td>
                  <td>${a.time_sec??'-'}</td>
                  <td>${a.at ? a.at.replace('T',' ').slice(0,19) : '-'}</td>
                </tr>`).join('')}
              </tbody>
            </table>
          </div>
        `;
      } else {
        answerTable = '<p style="color:#888">No answer data for this session.</p>';
      }
    }
    return `
      <div class="ad-card">
        <h3>Select Session</h3>
        <select class="ad-sel" id="ad-session-sel">
          <option value="">-- Select a session --</option>
          ${opts}
        </select>
      </div>
      ${answerTable}
    `;
  }

  function exportCSV(sessions) {
    const rows = [['Nickname','Started','Ended','Score','Level','Streak','Modes','Device']];
    sessions.forEach(s => {
      rows.push([
        s.nickname||'',
        s.started_at||'',
        s.ended_at||'',
        s.total_score??'',
        s.max_level??'',
        s.max_streak??'',
        (s.modes||[]).map(m=>m.mode).join('|'),
        s.device||''
      ]);
    });
    const csv = rows.map(r => r.map(v => '"'+String(v).replace(/"/g,'""')+'"').join(',')).join('\n');
    const blob = new Blob([csv], {type:'text/csv'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'disaster_med_sessions.csv'; a.click();
    URL.revokeObjectURL(url);
  }

  // ---- LIVE TEAM BATTLE DASHBOARD ----
  let _liveStudents = {};
  let _liveModeResults = {};
  let _liveListening = false;

  function startLiveListening() {
    if (_liveListening || !window.FirebaseSync || !FirebaseSync.isReady()) return;
    _liveListening = true;
    FirebaseSync.onStudentsUpdate(function(data) {
      _liveStudents = data || {};
      if (activeTab === 'live') renderDashboard();
    });
    FirebaseSync.onModeResultsUpdate(function(data) {
      _liveModeResults = data || {};
      if (activeTab === 'live') renderDashboard();
    });
  }

  function buildLiveTeamBattle() {
    if (!window.FirebaseSync || !FirebaseSync.isReady()) {
      return '<div class="no-firebase-msg"><h3>⚠️ Firebase Not Connected</h3><p>Real-time team battle requires Firebase. Check your internet connection and refresh.</p></div>';
    }
    startLiveListening();

    const students = Object.entries(_liveStudents);
    const TEAM_COLORS = { Alpha:'#e74c3c', Bravo:'#3498db', Charlie:'#2ecc71', Delta:'#f1c40f', Echo:'#9b59b6' };
    const TEAM_ICONS = { Alpha:'🔴', Bravo:'🔵', Charlie:'🟢', Delta:'🟡', Echo:'🟣' };
    const teams = {};
    let unassigned = [];

    students.forEach(function(entry) {
      var sid = entry[0], s = entry[1];
      if (s.team && TEAM_COLORS[s.team]) {
        if (!teams[s.team]) teams[s.team] = { members:[], totalScore:0, modesCount:0 };
        teams[s.team].members.push(s);
        teams[s.team].totalScore += (s.score || 0);
        teams[s.team].modesCount += (s.modes_completed || []).length;
      } else {
        unassigned.push(s);
      }
    });

    // Sort teams by score
    const sortedTeams = Object.entries(teams).sort(function(a,b) { return b[1].totalScore - a[1].totalScore; });

    // Individual leaderboard
    const allPlayers = students.map(function(e) { return e[1]; }).filter(function(s) { return s.nickname; }).sort(function(a,b) { return (b.score||0) - (a.score||0); });

    let teamCardsHTML = '';
    if (sortedTeams.length === 0) {
      teamCardsHTML = '<div class="ad-card" style="text-align:center;color:#888;"><p>🏁 Waiting for players to join teams...</p><p style="font-size:12px;">Students select their team on the game start screen</p></div>';
    }
    sortedTeams.forEach(function(entry, idx) {
      var tName = entry[0], tData = entry[1];
      var maxPossible = Math.max(tData.members.length * 50000, 1);
      var pct = Math.min(100, Math.round(tData.totalScore / maxPossible * 100));
      var rankIcon = idx===0 ? '🏆' : idx===1 ? '🥈' : idx===2 ? '🥉' : '▪️';
      teamCardsHTML += '<div class="team-card team-' + tName.toLowerCase() + '">';
      teamCardsHTML += '<div class="team-header"><div><span style="font-size:22px;">' + rankIcon + '</span> <span class="team-name">' + TEAM_ICONS[tName] + ' Team ' + tName + '</span></div><div class="team-score-big">' + tData.totalScore.toLocaleString() + '</div></div>';
      teamCardsHTML += '<div style="display:flex;gap:16px;font-size:12px;color:#888;"><span>👥 ' + tData.members.length + ' members</span><span>📋 ' + tData.modesCount + ' modes completed</span></div>';
      teamCardsHTML += '<div class="progress-bar-wrap"><div class="progress-bar-fill" style="width:' + pct + '%"></div></div>';
      teamCardsHTML += '<div class="team-members">';
      tData.members.sort(function(a,b) { return (b.score||0)-(a.score||0); }).forEach(function(m) {
        var curMode = m.current_mode ? (' | <span class="m-mode">' + (MODE_LABELS[m.current_mode]||m.current_mode) + '</span>') : '';
        var prog = m.current_progress ? ' (' + (m.current_progress.correct||0) + '/' + (m.current_progress.total||0) + ')' : '';
        teamCardsHTML += '<div class="member-chip"><span>' + (m.nickname||'?') + '</span><span class="m-score">' + (m.score||0) + '</span>' + curMode + prog + '</div>';
      });
      teamCardsHTML += '</div></div>';
    });

    // Individual leaderboard
    var lbHTML = '';
    allPlayers.slice(0, 15).forEach(function(p, i) {
      var rankClass = i===0?'gold':i===1?'silver':i===2?'bronze':'';
      var teamBadge = p.team ? '<span style="font-size:11px;color:' + (TEAM_COLORS[p.team]||'#888') + ';">' + (TEAM_ICONS[p.team]||'') + ' ' + p.team + '</span>' : '';
      var curMode = p.current_mode ? '<span style="font-size:11px;color:#2ecc71;">▶ ' + (MODE_LABELS[p.current_mode]||p.current_mode) + '</span>' : '';
      lbHTML += '<div class="leaderboard-row"><div class="lb-rank ' + rankClass + '">' + (i+1) + '</div><div style="flex:1;"><div style="font-weight:600;">' + (p.nickname||'?') + ' ' + teamBadge + '</div><div style="font-size:11px;color:#666;">' + curMode + '</div></div><div style="font-weight:800;color:#7f8fff;font-size:16px;">' + (p.score||0).toLocaleString() + '</div></div>';
    });

    var unassignedHTML = '';
    if (unassigned.length > 0) {
      unassignedHTML = '<div class="ad-card" style="margin-top:14px;"><h3>⚠️ Unassigned Players (' + unassigned.length + ')</h3><div class="team-members">';
      unassigned.forEach(function(u) {
        unassignedHTML += '<div class="member-chip"><span>' + (u.nickname||'?') + '</span><span class="m-score">' + (u.score||0) + '</span></div>';
      });
      unassignedHTML += '</div></div>';
    }

    return '<div style="position:relative;">' +
      '<div class="live-controls">' +
        '<div style="flex:1;display:flex;align-items:center;"><span class="live-pulse"></span><span style="color:#e74c3c;font-weight:700;font-size:14px;">LIVE</span><span style="color:#888;font-size:13px;margin-left:8px;">👥 ' + students.length + ' connected</span></div>' +
        '<button class="btn-live-export" id="live-export-btn">📥 Export Data</button>' +
        '<button class="btn-live-reset" id="live-reset-btn">🗑️ Reset All</button>' +
      '</div>' +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">' +
        '<div>' +
          '<div class="ad-card"><h3>🏆 Team Standings</h3></div>' +
          teamCardsHTML +
          unassignedHTML +
        '</div>' +
        '<div>' +
          '<div class="ad-card"><h3>👤 Individual Leaderboard</h3></div>' +
          '<div class="ad-card" style="padding:0;overflow:auto;max-height:600px;">' + (lbHTML || '<p style="padding:14px;color:#888;">No players yet</p>') + '</div>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  function renderDashboard() {
    const sessions = LocalStore.getSessions();
    let tabContent = '';
    if (activeTab === 'overview') tabContent = buildOverview(sessions);
    else if (activeTab === 'students') tabContent = buildStudents(sessions, nickFilter, sortCol, sortAsc);
    else if (activeTab === 'modes') tabContent = buildModeAnalysis(sessions);
    else if (activeTab === 'detail') tabContent = buildDetailedData(sessions, selectedSessionIdx);
    else if (activeTab === 'live') tabContent = buildLiveTeamBattle();

    overlay.innerHTML = styles + `
      <div id="ad-root">
        <div id="ad-topbar">
          <h1>🏥 Disaster Medicine Admin Dashboard</h1>
          <button id="ad-close">✕ Close</button>
        </div>
        <div id="ad-tabs">
          <button class="${activeTab==='live'?'active':''}" data-tab="live"><span class="live-pulse"></span> Live Battle</button>
          <button class="${activeTab==='overview'?'active':''}" data-tab="overview">📊 Overview</button>
          <button class="${activeTab==='students'?'active':''}" data-tab="students">👥 Students</button>
          <button class="${activeTab==='modes'?'active':''}" data-tab="modes">📈 Mode Analysis</button>
          <button class="${activeTab==='detail'?'active':''}" data-tab="detail">🔍 Detailed Data</button>
        </div>
        <div id="ad-body">${tabContent}</div>
      </div>
    `;

    // Close button
    overlay.querySelector('#ad-close').addEventListener('click', () => {
      overlay.style.display = 'none';
    });

    // Tab switching
    overlay.querySelectorAll('#ad-tabs button').forEach(btn => {
      btn.addEventListener('click', () => {
        activeTab = btn.dataset.tab;
        renderDashboard();
      });
    });

    // Students tab events
    if (activeTab === 'students') {
      const filterInput = overlay.querySelector('#ad-nick-filter');
      if (filterInput) {
        filterInput.addEventListener('input', () => {
          nickFilter = filterInput.value;
          renderDashboard();
        });
      }
      const exportBtn = overlay.querySelector('#ad-export-btn');
      if (exportBtn) exportBtn.addEventListener('click', () => exportCSV(sessions));
      overlay.querySelectorAll('th[data-col]').forEach(th => {
        th.addEventListener('click', () => {
          const col = th.dataset.col;
          if (sortCol === col) sortAsc = !sortAsc;
          else { sortCol = col; sortAsc = true; }
          renderDashboard();
        });
      });
    }

    // Detail tab events
    if (activeTab === 'detail') {
      const sel = overlay.querySelector('#ad-session-sel');
      if (sel) {
        sel.addEventListener('change', () => {
          selectedSessionIdx = sel.value !== '' ? parseInt(sel.value) : null;
          renderDashboard();
        });
      }
    }

    // Live Battle tab events
    if (activeTab === 'live') {
      const resetBtn = overlay.querySelector('#live-reset-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          if (confirm('Reset all live data? This will clear all current session data from Firebase.')) {
            if (window.FirebaseSync) FirebaseSync.clearLiveData();
            _liveStudents = {};
            _liveModeResults = {};
            renderDashboard();
          }
        });
      }
      const exportBtn = overlay.querySelector('#live-export-btn');
      if (exportBtn) {
        exportBtn.addEventListener('click', () => {
          const rows = [['Nickname','Team','Score','Level','Streak','Modes Completed','Current Mode','Device','Started']];
          Object.values(_liveStudents).forEach(s => {
            rows.push([s.nickname||'',s.team||'',s.score||0,s.level||1,s.streak||0,(s.modes_completed||[]).join('|'),s.current_mode||'',s.device||'',s.started_at||'']);
          });
          const csv = rows.map(r => r.map(v => '"'+String(v).replace(/"/g,'""')+'"').join(',')).join('\n');
          const blob = new Blob([csv], {type:'text/csv'});
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url; a.download = 'live_team_battle_data.csv'; a.click();
          URL.revokeObjectURL(url);
        });
      }
    }
  }

  // Show login screen first
  overlay.innerHTML = styles + `
    <div id="ad-root">
      <div id="ad-topbar">
        <h1>🏥 Disaster Medicine Admin Dashboard</h1>
        <button id="ad-close">✕ Close</button>
      </div>
      <div id="ad-login">
        <h2>🔐 Admin Login</h2>
        <input type="password" id="ad-pw" placeholder="Enter admin password" autocomplete="off">
        <button id="ad-login-btn">Login</button>
        <div class="ad-err" id="ad-err">Incorrect password. Try again.</div>
      </div>
    </div>
  `;

  overlay.querySelector('#ad-close').addEventListener('click', () => {
    overlay.style.display = 'none';
  });

  const tryLogin = async () => {
    const pwEl = overlay.querySelector('#ad-pw');
    const btn  = overlay.querySelector('#ad-login-btn');
    const errEl = overlay.querySelector('#ad-err');
    const pw = pwEl ? pwEl.value : '';
    if (!pw) return;
    if (btn) { btn.disabled = true; btn.textContent = 'Authenticating...'; }
    try {
      const res = await fetch(`${TRACKING_API}/api/admin/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ password: pw })
      });
      if (!res.ok) throw new Error('auth_failed');
      const data = await res.json();
      if (data && data.token) {
        window.__adminToken = data.token;
        window.__adminTokenExp = Date.now() + 60*60*1000;
        loggedIn = true;
        renderDashboard();
        return;
      }
      throw new Error('no_token');
    } catch(e) {
      if (errEl) {
        errEl.textContent = 'Wrong password or server unavailable.';
        errEl.style.display = 'block';
      }
      if (pwEl) { pwEl.value = ''; pwEl.focus(); }
    } finally {
      if (btn) { btn.disabled = false; btn.textContent = 'Login'; }
    }
  };

  overlay.querySelector('#ad-login-btn').addEventListener('click', tryLogin);
  overlay.querySelector('#ad-pw').addEventListener('keydown', e => {
    if (e.key === 'Enter') tryLogin();
  });
}

// ---- INPUT SANITIZATION (XSS prevention) ----
function sanitizeUserText(s, maxLen) {
  if (s == null) return '';
  let v = String(s);
  v = v.replace(/[<>]/g, '')
       .replace(/&/g, '\u0026')
       .replace(/"/g, '')
       .replace(/'/g, '')
       .replace(/`/g, '')
       .replace(/[\x00-\x1F\x7F\u200B-\u200F\u2028-\u202F\uFEFF]/g, '')
       .replace(/(javascript|data|vbscript)\s*:/gi, '');
  v = v.trim();
  return v.slice(0, maxLen || 30);
}
window.sanitizeUserText = sanitizeUserText;

// Phase F2: One-time pre-test per nickname (localStorage-backed gate).
function hasCompletedPreTestForNick(nick) {
  try {
    const raw = localStorage.getItem('surge_pretest_completed_v1');
    if (!raw) return false;
    const map = JSON.parse(raw);
    return !!(map && map[nick]);
  } catch(e) { return false; }
}
function markPreTestCompletedForNick(nick) {
  try {
    const raw = localStorage.getItem('surge_pretest_completed_v1');
    const map = raw ? JSON.parse(raw) : {};
    map[nick] = { completedAt: Date.now() };
    localStorage.setItem('surge_pretest_completed_v1', JSON.stringify(map));
  } catch(e) {}
}
window.hasCompletedPreTestForNick = hasCompletedPreTestForNick;
window.markPreTestCompletedForNick = markPreTestCompletedForNick;

function startGame() {
  const rawNick = $('nick').value.trim();
  const nick = sanitizeUserText(rawNick, 30);
  if (!nick) return;
  G.nickname = nick;
  const rawTeam = (document.getElementById('team-select') || {}).value || '';
  G.team = sanitizeUserText(rawTeam, 30);

  // Phase F2: Pre-test required ONCE per nickname before the game unlocks.
  // Auto-pass when this nickname has already completed it (or the Assessment
  // module retains a prior session record).
  const alreadyDone = hasCompletedPreTestForNick(nick)
    || (window.Assessment && window.Assessment.hasPreTest && window.Assessment.hasPreTest());

  if (alreadyDone) {
    _continueStartGame();
    return;
  }

  if (window.Assessment && window.Assessment.showPreTest) {
    alert('📊 A short pre-test is required before your first run with this nickname.\nIt measures learning outcomes — you only need to complete it once per nickname.');
    window.Assessment.showPreTest(function() {
      markPreTestCompletedForNick(nick);
      _continueStartGame();
    });
  } else {
    // Assessment module not loaded — proceed safely (fail-open to avoid lockout).
    console.warn('[SURGE] Assessment module not loaded — proceeding without pre-test.');
    _continueStartGame();
  }
}

function _continueStartGame() {
  G.score = 0;
  G.xp = 0;
  G.level = 1;
  G.streak = 0;
  G.maxStreak = 0;
  G.combo = 1;
  G.modesCompleted = new Set();
  // Reset RPG state
  G.playerClass = null;
  G.skillPoints = 0;
  G.unlockedSkills = [];
  G.earnedAchievements = [];
  G.totalCorrect = 0;
  G.perfectModes = 0;
  G.fastAnswers = 0;
  G.triageAccuracy = 0;
  G.bossGrade = null;
  G.currentAct = 0;
  G.storyMode = true;
  sfx('alert');
  // Phase F: auto-start ambient BGM after the first user gesture (Start button click).
  try { startBGM('ambient'); } catch(e) {}
  Tracker.startSession(nick);
  // RPG: go to class select first
  G.screen = 'classSelect';
  render();
}

// ---- HUD ----
function renderHUD(timerKey) {
  const timerVal = G[timerKey] || 0;
  const urgentClass = timerVal <= 5 ? 'urgent' : '';
  const classInfo = G.playerClass ? CLASSES[G.playerClass] : null;
  return `
    <div class="game-hud">
      <button class="hud-home-btn" onclick="goHomeHub()" title="Return to main hub" aria-label="Return to main hub" style="background:rgba(127,176,255,0.12);border:1px solid rgba(127,176,255,0.35);color:#cfe0ff;border-radius:10px;padding:6px 12px;font-size:0.85rem;font-weight:600;cursor:pointer;margin-right:8px;">← Hub</button>
      <div class="hud-left">
        <div class="hud-avatar">${classInfo ? classInfo.icon : G.nickname.charAt(0)}</div>
        <span class="hud-name">${G.nickname}</span>
        ${classInfo ? `<span class="hud-class-badge" style="background:${classInfo.color}22;color:${classInfo.color}">${classInfo.name}</span>` : ''}
      </div>
      <div class="hud-center">
        <div class="hud-stat"><span class="icon">⭐</span>${G.score}</div>
        <div class="hud-stat"><span class="icon">🎯</span>Lv.${G.level}</div>
        ${G.streak >= 2 ? `<span class="streak-badge">🔥${G.streak} Streak</span>` : ''}
      </div>
      <div class="hud-right">
        <div class="hud-timer ${urgentClass}" id="timer-display">${timerVal}s</div>
      </div>
    </div>
    <div class="xp-progress-bar">
      <div class="xp-fill" style="width:${(G.xp % 200) / 200 * 100}%"></div>
    </div>`;
}

// Phase F: Safe return to main hub — stops timers, persists session, navigates to mode select.
function goHomeHub() {
  const ok = confirm('Carefully exit the current mode and return to the main hub?\n(Score, XP, and achievements are preserved.)');
  if (!ok) return;
  try { stopAllTimers(); } catch(e) {}
  try { saveSession(); } catch(e) {}
  G.screen = 'modes';
  render();
}
window.goHomeHub = goHomeHub;

// Phase F: localStorage-backed session auto-save infrastructure.
function saveSession() {
  if (!G.nickname) return;
  try {
    const snap = {
      nickname: G.nickname, team: G.team, score: G.score, xp: G.xp, level: G.level,
      maxStreak: G.maxStreak, modesCompleted: Array.from(G.modesCompleted || []),
      playerClass: G.playerClass, skillPoints: G.skillPoints,
      unlockedSkills: G.unlockedSkills, earnedAchievements: G.earnedAchievements,
      currentAct: G.currentAct, screen: G.screen, savedAt: Date.now()
    };
    localStorage.setItem('surge_session_v1', JSON.stringify(snap));
  } catch(e) {}
}
function loadSession() {
  try {
    const raw = localStorage.getItem('surge_session_v1');
    if (!raw) return null;
    const snap = JSON.parse(raw);
    if (!snap || !snap.nickname) return null;
    if (Date.now() - (snap.savedAt || 0) > 7*24*3600*1000) return null; // 7-day expiry
    return snap;
  } catch(e) { return null; }
}
function clearSession() { try { localStorage.removeItem('surge_session_v1'); } catch(e) {} }
window.saveSession = saveSession; window.loadSession = loadSession; window.clearSession = clearSession;

function updateTimerDisplay(val) {
  const el = document.getElementById('timer-display');
  if (el) {
    el.textContent = val + 's';
    el.className = 'hud-timer' + (val <= 5 ? ' urgent' : '');
  }
}

// ---- MODE SELECT ----
function renderModeSelect() {
  const modes = [
    { key: 'triage', icon: '🚑', title: 'START Triage', desc: 'Rapidly triage patients at a mass casualty scene', tag: 'Field Triage', color: 'red' },
    { key: 'cbrne', icon: '☢️', title: 'CBRNE Response', desc: 'Handle Chemical, Biological, Radiological, Nuclear, Explosive threats', tag: 'Special Disaster', color: 'purple' },
    { key: 'mci', icon: '🏥', title: 'MCI Commander', desc: 'Command an MCI scene and allocate resources', tag: 'Field Command', color: 'yellow' },
    { key: 'quiz', icon: '📋', title: 'Disaster Medicine Quiz', desc: 'Test your core disaster medicine knowledge', tag: 'Knowledge Assessment', color: 'green' },
    { key: 'ethics', icon: '⚖️', title: 'Ethical Dilemmas', desc: 'Make extreme ethical decisions in disaster situations', tag: 'Medical Ethics', color: 'cyan' },
    { key: 'leadership', icon: '🎖️', title: 'Leadership Challenge', desc: 'Lead your team in a crisis', tag: 'Leadership', color: 'purple' },
    { key: 'teamwork', icon: '🤝', title: 'Teamwork Mission', desc: 'Collaborate with a multidisciplinary team to save patients', tag: 'Team Collaboration', color: 'amber' },
    { key: 'cbrneAdv', icon: '☣️', title: 'CBRNE Advanced', desc: 'Expert quiz & scenarios on 5 CBRNE threats', tag: 'CBRNE Expert', color: 'orange' },
    { key: 'tactical', icon: '🎯', title: 'Tactical Medicine', desc: 'TCCC/TECC tactical field emergency medicine', tag: 'Tactical Medicine', color: 'green' },
    { key: 'ctm', icon: '🛡️', title: 'Counter-Terrorism Medicine', desc: 'Expert knowledge and response in counter-terrorism medicine', tag: 'CTM', color: 'red' },
    { key: 'hseep', icon: '📋', title: 'HSEEP Exercise Design', desc: 'Master FEMA HSEEP-based disaster exercise design', tag: 'HSEEP', color: 'blue' },
    { key: 'crossBorderCbrne', icon: '🛂', title: 'Cross-Border CBRNe Drill', desc: 'Cross-border cyanide attack drill: roles, triage, antidote, semantic mapping, degraded network, AAR', tag: 'Cross-Border Drill', color: 'cyan' },
  ];

  const lb = [...G.leaderboard];
  const playerEntry = lb.find(e => e.name === G.nickname);
  if (!playerEntry && G.score > 0) lb.push({ name: G.nickname, score: G.score });
  else if (playerEntry) playerEntry.score = Math.max(playerEntry.score, G.score);
  lb.sort((a, b) => b.score - a.score);
  const top5 = lb.slice(0, 5);

  const classInfo = G.playerClass ? CLASSES[G.playerClass] : null;
  const act = STORY_ACTS[G.currentAct] || STORY_ACTS[0];
  const actModes = act.modes;

  // Check which modes get class bonus
  function getModeBonus(modeKey) {
    if (!classInfo) return '';
    if (classInfo.bonusModes.includes(modeKey)) return `<span class="mode-bonus-tag">+${modeKey === 'cbrne' ? '30' : '20'}% ${classInfo.icon}</span>`;
    return '';
  }

  app.innerHTML = `
    <div class="game-hud">
      <div class="hud-left">
        <div class="hud-avatar">${classInfo ? classInfo.icon : G.nickname.charAt(0)}</div>
        <span class="hud-name">${G.nickname}</span>
        ${classInfo ? `<span class="hud-class-badge" style="background:${classInfo.color}22;color:${classInfo.color}">${classInfo.name}</span>` : ''}
      </div>
      <div class="hud-center">
        <div class="hud-stat"><span class="icon">⭐</span>${G.score}</div>
        <div class="hud-stat"><span class="icon">🎯</span>Lv.${G.level}</div>
      </div>
      <div class="hud-right"></div>
    </div>
    <div class="xp-progress-bar"><div class="xp-fill" style="width:${(G.xp % 200) / 200 * 100}%"></div></div>
    <div class="screen mode-screen">
      <div class="rpg-nav-bar">
        <button class="rpg-nav-btn" onclick="G.screen='skilltree';render();">🌲 Skill Tree ${G.skillPoints > 0 ? `<span class="sp-dot">${G.skillPoints}</span>` : ''}</button>
        <button class="rpg-nav-btn" onclick="G.screen='achievements';render();">🏆 Achievements <span class="achieve-count">${G.earnedAchievements.length}/${ACHIEVEMENTS.length}</span></button>
        <button class="rpg-nav-btn" onclick="if(window.Assessment){window.Assessment.showPreTest();}else{alert('Assessment module not loaded');}" title="Voluntary pre/post learning outcome assessment">📊 Learning Outcome Measure</button>
      </div>

      <div class="story-act-banner anim-in">
        <div class="act-label">${act.title}</div>
        <div class="act-subtitle">${act.subtitle}</div>
        <div class="act-progress">
          ${STORY_ACTS.map((a, i) => `<span class="act-dot ${i < G.currentAct ? 'done' : ''} ${i === G.currentAct ? 'current' : ''}">${i+1}</span>`).join('')}
        </div>
      </div>

      <div class="mode-header">
        ${charBubble('mentor', `<strong>${G.nickname}</strong>${classInfo ? ` (${classInfo.icon} ${classInfo.name})` : ''}, which mission will you take on? Complete all missions to unlock the <em>Boss Round</em>!`)}
      </div>
      <div class="mode-grid stagger">
        ${modes.map(m => {
          const isActMode = actModes.includes(m.key);
          return `
          <button class="mode-card ${isActMode ? 'act-highlight' : ''}" data-mode="${m.key}" onclick="enterMode('${m.key}')">
            <div class="mode-icon">${m.icon}</div>
            <div class="mode-info">
              <h3>${m.title} ${G.modesCompleted.has(m.key) ? '✅' : ''}</h3>
              <p>${m.desc}</p>
              <div class="mode-tag-row">
                <span class="mode-tag">${m.tag}</span>
                ${getModeBonus(m.key)}
                ${isActMode ? '<span class="act-mode-tag">🎬 Current ACT</span>' : ''}
              </div>
            </div>
          </button>`;
        }).join('')}
        <button class="mode-card surge-card" data-mode="surge" onclick="G.screen='surgeSelect';render();">
          <div class="mode-icon">🏥</div>
          <div class="mode-info">
            <h3>SURGE Chain ${G.modesCompleted.has('surge') ? '✅' : '🆕'}</h3>
            <p style="font-size:0.7rem;color:#7f8fff;margin-bottom:2px;">Simulated Urgent Response & Group Exercise</p>
            <p>Scene→CCP→Transport→Hospital Chain Simulation</p>
            <div class="mode-tag-row">
              <span class="mode-tag">Full Response</span>
              <span class="mode-tag surge-tag">SURGE</span>
            </div>
          </div>
        </button>
        <button class="mode-card boss-card" data-mode="boss" onclick="enterMode('boss')" ${G.modesCompleted.size < 3 ? 'style="opacity:0.4;pointer-events:none"' : ''}>
          <div class="mode-icon">👹</div>
          <div class="mode-info">
            <h3>Boss Round ${G.modesCompleted.size < 3 ? '🔒' : '🔓'}</h3>
            <p>${G.modesCompleted.size < 3 ? `Complete ${3 - G.modesCompleted.size} more missions` : 'Challenge the final boss!'}</p>
            <span class="mode-tag">Final Challenge</span>
          </div>
        </button>
      </div>
      <div class="leaderboard-section anim-in">
        <h3>🏆 Leaderboard</h3>
        ${top5.map((e, i) => `
          <div class="lb-row">
            <div class="lb-rank ${i===0?'gold':i===1?'silver':i===2?'bronze':'normal'}">${i+1}</div>
            <div class="lb-name ${e.name===G.nickname?'me':''}">${e.name}</div>
            <div class="lb-score">${e.score}</div>
          </div>
        `).join('')}
      </div>
    </div>`;
}

function enterMode(mode) {
  G.screen = mode;
  Tracker.startMode(mode);
  if (mode === 'triage') { G.tPatientIdx = 0; G.tResults = []; G.tSelected = null; }
  if (mode === 'quiz') { G.qIdx = 0; G.qScore = 0; G.qAnswered = false; }
  if (mode === 'cbrne') { G.cbIdx = 0; G.cbStep = 1; G.cbOrder = []; }
  if (mode === 'mci') { G.mciIdx = 0; G.mciScore = 0; G._mciDecIdx = 0; }
  if (mode === 'ethics') { G.ethIdx = 0; G.ethScore = 0; G.ethAnswered = false; }
  if (mode === 'leadership') { G.leadIdx = 0; G.leadScore = 0; }
  if (mode === 'teamwork') { G.twIdx = 0; G.twScore = 0; }
  if (mode === 'boss') {
    const pool = [...QUIZ_QUESTIONS].sort(() => Math.random() - 0.5);
    G.bossQ = pool.slice(0, 10);
    G.bossIdx = 0; G.bossScore = 0; G.bossActive = true;
  }
  if (mode === 'cbrneAdv') {
    const content = window.CBRNE_CONTENT;
    if (!content) { alert('Failed to load CBRNE content'); return; }
    const allQ = Object.values(content.questions).flat();
    G.advQ = [...allQ].sort(() => Math.random() - 0.5).slice(0, 15);
    G.advIdx = 0; G.advScore = 0; G.advAnswered = false;
  }
  if (mode === 'tactical') {
    const content = window.TACTICAL_CTM_CONTENT;
    if (!content) { alert('Failed to load Tactical Medicine content'); return; }
    G.tacQ = [...content.tacticalQuestions].sort(() => Math.random() - 0.5).slice(0, 15);
    G.tacIdx = 0; G.tacScore = 0; G.tacAnswered = false;
  }
  if (mode === 'ctm') {
    const content = window.TACTICAL_CTM_CONTENT;
    if (!content) { alert('Failed to load Counter-Terrorism Medicine content'); return; }
    G.ctmQ = [...content.ctmQuestions].sort(() => Math.random() - 0.5).slice(0, 15);
    G.ctmIdx = 0; G.ctmScore = 0; G.ctmAnswered = false;
  }
  if (mode === 'crossBorderCbrne') {
    const content = window.CROSS_BORDER_CBRNE;
    if (!content) { alert('Failed to load Cross-Border CBRNe content'); return; }
    const driftMs = 1500 + Math.floor(Math.random() * 4000);
    G.cbxStartMs = Date.now();
    G.cbxStepIdx = 0;
    G.cbxAnswered = false;
    G.cbxSelected = null;
    G.cbxCorrectCount = 0;
    G.cbxAnswerLog = [];
    G.cbxMetrics = {
      triageDashboardLatencySec: null,
      handoverDelaySec: null,
      contaminatedTransportErrors: 0,
      degradedRecoverySec: null,
      perStepCorrect: {}
    };
    G.cbxBriefingMs = Date.now() + driftMs; // simulated comms-drift baseline
    // Per-session randomized copy of the drill steps with shuffled options.
    G.cbxSteps = (typeof buildRandomizedCrossBorderSteps === 'function')
      ? buildRandomizedCrossBorderSteps()
      : content.steps.map(s => ({ ...s }));
  }
  Tracker.startQuestion();
  render();
}

// ---- TRIAGE ----
function renderTriage() {
  const patients = SCENARIOS.triage.patients;
  const p = patients[G.tPatientIdx];
  if (!p) { showTriageResults(); return; }

  const vitKeys = Object.keys(p.vitals);
  const patientDialogue = rnd(CHARS.patient.cries);
  const mentorLine = G.tPatientIdx === 0
    ? 'First patient! Recall the START Triage algorithm. Assess in order: <strong>Breathing → Circulation → Mental Status</strong>!'
    : rnd(CHARS.mentor.hints);

  app.innerHTML = `
    ${renderHUD('tTimer')}
    <div class="screen triage-game">
      <div class="siren-bar"></div>
      ${narrativePanel(SCENARIOS.triage.description, { type: 'danger', tag: 'Emergency Situation', tagClass: 'emergency', icon: '🚨' })}
      ${charBubble('patient', patientDialogue, { right: true, urgent: true, expression: '😰' })}
      ${charBubble('mentor', mentorLine, { delay: 200 })}

      <div class="patient-card dramatic-reveal">
        <div class="patient-top">
          <div class="patient-avatar-info">
            <div class="patient-avatar">${p.icon}</div>
            <div>
              <div class="patient-name">${p.name}</div>
              <div class="patient-meta">${p.age} yrs · ${p.gender}</div>
            </div>
          </div>
          <div class="patient-counter">${G.tPatientIdx + 1} / ${patients.length}</div>
        </div>
        <div class="vitals-grid">
          ${vitKeys.map(k => {
            const v = p.vitals[k];
            return `<div class="vital-box ${v.status}">
              <div class="vital-label">${v.label}</div>
              <div class="vital-val">${v.value}</div>
            </div>`;
          }).join('')}
        </div>
        <div class="findings">
          <h4>Field Findings</h4>
          ${p.findings.map(f => `<div class="finding-row"><div class="finding-dot"></div><span>${f}</span></div>`).join('')}
        </div>
        <div class="triage-action-area">
          <h4>START Triage Classification</h4>
          <div class="triage-btns">
            ${[
              { t: 'red', label: 'RED', sub: 'Immediate (Critical)' },
              { t: 'yellow', label: 'YELLOW', sub: 'Delayed (Urgent)' },
              { t: 'green', label: 'GREEN', sub: 'Minor (Non-urgent)' },
              { t: 'black', label: 'BLACK', sub: 'Deceased/Expectant' }
            ].map(b => `
              <button class="t-btn ${G.tSelected === b.t ? 'selected' : ''}" data-t="${b.t}" onclick="selectTriage('${b.t}')">
                <span class="t-label">${b.label}</span>
                <span class="t-sub">${b.sub}</span>
              </button>
            `).join('')}
          </div>
          <button class="go-btn ${G.tSelected ? 'ready' : ''}" onclick="confirmTriage()">Confirm Triage →</button>
        </div>
      </div>
    </div>`;

  showDangerPulse(true);
  startCountdown('tTimer', G.tTimePerPatient + getTimerBonus('triage'), updateTimerDisplay, () => {
    // Time up - auto wrong
    G.tResults.push({ patient: p, chosen: 'timeout', correct: p.correctTriage });
    updateStreak(false);
    G.tPatientIdx++;
    G.tSelected = null;
    render();
  });
}

function selectTriage(color) {
  G.tSelected = color;
  document.querySelectorAll('.t-btn').forEach(b => b.classList.toggle('selected', b.dataset.t === color));
  document.querySelector('.go-btn').classList.add('ready');
  sfx('tick');
}

function confirmTriage() {
  if (!G.tSelected) return;
  stopTimer('tTimer');
  const p = SCENARIOS.triage.patients[G.tPatientIdx];
  const correct = G.tSelected === p.correctTriage;

  if (correct) {
    sfx('correct');
    flashScreen('green');
    showImpact('green');
    const pts = addScore(100);
    addXP(30);
    updateStreak(true);
    G.totalCorrect++;
  } else {
    sfx('wrong');
    shakeScreen();
    showImpact();
    addScore(-20);
    updateStreak(false);
  }
  checkAchievements();

  // Track answer
  Tracker.recordAnswer(`triage_${G.tPatientIdx}`, G.tSelected, correct);

  G.tResults.push({ patient: p, chosen: G.tSelected, correct: p.correctTriage });
  showSpeedLines();

  // Show feedback with character
  showTriageFeedback(p, correct);
}

function showTriageFeedback(p, correct) {
  const mentorLine = correct ? rnd(CHARS.mentor.correct) : rnd(CHARS.mentor.wrong);
  const triageLabels = { red: 'RED(Immediate)', yellow: 'YELLOW(Delayed)', green: 'GREEN(Minor)', black: 'BLACK(Deceased)' };

  const fbLayer = document.createElement('div');
  fbLayer.className = 'feedback-layer show';
  fbLayer.innerHTML = `
    <div class="fb-card">
      <div class="fb-icon ${correct ? 'correct' : 'wrong'}">${correct ? '✅' : '❌'}</div>
      <h2>${correct ? 'Correct Triage!' : 'Misclassification!'}</h2>
      ${!correct ? `<div class="fb-answer">Correct: ${triageLabels[p.correctTriage]}</div>` : ''}
      <div class="fb-char-section">
        <div class="fb-char-avatar">${CHARS.mentor.emoji}</div>
        <div class="fb-char-dialogue">
          <strong>${CHARS.mentor.name}:</strong> ${mentorLine}<br><br>${p.explanation}
        </div>
      </div>
      <div class="fb-points ${correct ? 'plus' : 'minus'}">${correct ? '+100' : '-20'}</div>
      ${G.streak >= 2 ? `<div class="fb-combo">🔥 ${G.streak} Streak! Combo x${G.combo.toFixed(1)}</div>` : ''}
      <button class="fb-next" onclick="nextTriagePatient()">Next Patient →</button>
    </div>`;
  document.body.appendChild(fbLayer);
}

function nextTriagePatient() {
  document.querySelector('.feedback-layer')?.remove();
  G.tPatientIdx++;
  G.tSelected = null;
  Tracker.startQuestion();
  showDangerPulse(false);
  render();
}

function showTriageResults() {
  showDangerPulse(false);
  stopTimer('tTimer');
  G.modesCompleted.add('triage');
  const total = G.tResults.length;
  const correct = G.tResults.filter(r => r.chosen === r.correct).length;
  const pct = Math.round((correct / total) * 100);
  G.triageAccuracy = pct;
  // Track perfect mode
  if (pct === 100 && total > 0) G.perfectModes++;
  checkAchievements();
  // Advance story act if all act modes completed
  advanceStoryAct();
  showModeResults('START Triage', pct, correct, total, '🚑');
}

// ---- QUIZ ----
function renderQuiz() {
  const total = Math.min(QUIZ_QUESTIONS.length, 15);
  const q = QUIZ_QUESTIONS[G.qIdx];
  if (!q || G.qIdx >= total) { showQuizResults(); return; }

  const mentorLine = G.qIdx === 0
    ? 'Testing your core disaster medicine knowledge. Choose carefully!'
    : G.qAnswered ? '' : rnd(CHARS.mentor.hints);

  app.innerHTML = `
    ${renderHUD('qTimer')}
    <div class="screen quiz-game">
      ${G.qIdx === 0 ? charBubble('mentor', mentorLine) : ''}
      <div class="quiz-progress-bar" style="position:relative">
        <button id="quizExitBtn" style="position:absolute;right:0;top:-2px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:#8b8fa3;padding:4px 12px;border-radius:8px;font-size:0.72rem;cursor:pointer">✕ Exit</button>
        <span class="quiz-pbar-num">${G.qIdx + 1}/${total}</span>
        <div class="pbar-track"><div class="pbar-fill" style="width:${((G.qIdx) / total) * 100}%"></div></div>
      </div>
      <div class="quiz-q-card anim-in">
        <div class="quiz-q-text">${q.question}</div>
        <div class="quiz-opts">
          ${q.options.map((opt, i) => {
            const letter = String.fromCharCode(65 + i);
            let cls = '';
            if (G.qAnswered) {
              if (i === q.correct) cls = 'correct';
              else if (i === G._quizSelected && i !== q.correct) cls = 'wrong';
            }
            return `<button class="q-opt ${cls}" onclick="answerQuiz(${i})" ${G.qAnswered ? 'disabled' : ''}>
              <span class="q-letter">${letter}</span>
              <span class="q-opt-text">${opt}</span>
            </button>`;
          }).join('')}
        </div>
        ${G.qAnswered ? `
          <div class="quiz-explanation">${q.explanation || ''}</div>
          <button class="quiz-next-btn" onclick="nextQuiz()">Next Question →</button>
        ` : ''}
      </div>
    </div>`;

  var _exitBtn = document.getElementById('quizExitBtn');
  if (_exitBtn) _exitBtn.addEventListener('click', function() { G.screen = 'modeSelect'; stopAllTimers(); render(); });

  if (!G.qAnswered) {
    startCountdown('qTimer', G.qTimePerQ + getTimerBonus('quiz'), updateTimerDisplay, () => {
      G.qAnswered = true;
      G._quizSelected = -1;
      updateStreak(false);
      sfx('wrong');
      shakeScreen();
      render();
    });
  }
}

function answerQuiz(idx) {
  if (G.qAnswered) return;
  G.qAnswered = true;
  G._quizSelected = idx;
  stopTimer('qTimer');

  const q = QUIZ_QUESTIONS[G.qIdx];
  const correct = idx === q.correct;

  // Track answer
  Tracker.recordAnswer(`quiz_${G.qIdx}`, String(idx), correct);

  if (correct) {
    sfx('correct');
    flashScreen('green');
    const timeBonus = Math.max(0, G.qTimer * 5);
    addScore(100 + timeBonus);
    addXP(25);
    G.qScore++;
    updateStreak(true);
    G.totalCorrect++;
    // Track fast answers for Speed Demon achievement
    const timeTaken = (G.qTimePerQ + getTimerBonus('quiz')) - G.qTimer;
    if (timeTaken <= 5) G.fastAnswers++;
  } else {
    sfx('wrong');
    shakeScreen();
    addScore(-10);
    updateStreak(false);
  }
  checkAchievements();
  render();
}

function nextQuiz() {
  G.qIdx++;
  G.qAnswered = false;
  G._quizSelected = undefined;
  Tracker.startQuestion();
  render();
}

function showQuizResults() {
  stopTimer('qTimer');
  G.modesCompleted.add('quiz');
  const total = Math.min(QUIZ_QUESTIONS.length, 15);
  const pct = Math.round((G.qScore / total) * 100);
  if (pct === 100 && total > 0) G.perfectModes++;
  checkAchievements();
  advanceStoryAct();
  showModeResults('Disaster Medicine Quiz', pct, G.qScore, total, '📋');
}

// ---- CBRNE ----
function renderCBRNE() {
  const scenarios = CBRNE_SCENARIOS;
  const sc = scenarios[G.cbIdx];
  if (!sc) { showCBRNEResults(); return; }

  const steps = sc.steps;
  // Build correct order from step.correct values (1-indexed)
  const sortedByCorrect = [...steps].sort((a, b) => a.correct - b.correct);
  const correctOrderIds = sortedByCorrect.map(s => steps.indexOf(s));

  const villainLine = rnd(CHARS.villain.taunts);
  const mentorLine = G.cbStep === 1
    ? `<strong>${sc.type}</strong> threat! Select the correct response sequence!`
    : `Select the next step. Order matters!`;

  app.innerHTML = `
    ${renderHUD('cbTimer')}
    <div class="screen cbrne-game">
      <div class="cbrne-tabs">
        ${scenarios.map((s, i) => `<button class="cbrne-tab ${i === G.cbIdx ? 'active' : ''}">${s.type}</button>`).join('')}
      </div>

      ${charBubble('villain', villainLine, { right: true, urgent: true, expression: '😈' })}
      ${charBubble('mentor', mentorLine, { delay: 200 })}

      <div class="cbrne-brief anim-in">
        <span class="threat-tag">${sc.icon || '☢️'} ${sc.type} Threat</span>
        <h2>${sc.title}</h2>
        <p>${sc.description}</p>
      </div>

      <div class="cbrne-progress-text">Response Step ${G.cbStep} / ${steps.length}</div>

      <div class="cbrne-steps stagger">
        ${(() => {
          // Phase F fix: shuffle display order so the correct sequence isn't revealed by the visual order.
          // Deterministic Fisher-Yates shuffle (seed = scenario title) to keep order stable across re-renders.
          const seed = String(sc.title).split('').reduce((a,c)=>a+c.charCodeAt(0),0) + G.cbIdx*31;
          const seededRand = (n) => { let x = seed*9301+n*49297; return ((x%233280)+233280)%233280/233280; };
          const order = steps.map((_,i)=>i);
          for (let i = order.length-1; i > 0; i--) {
            const j = Math.floor(seededRand(i) * (i+1));
            [order[i], order[j]] = [order[j], order[i]];
          }
          return order.map((i, displayIdx) => {
            const step = steps[i];
            const orderIdx = G.cbOrder.indexOf(i);
            const done = orderIdx !== -1;
            const isCorrect = done && (i === correctOrderIds[orderIdx]);
            return `<button class="cb-step ${done ? 'done' : ''} ${done ? (isCorrect ? 'ok' : 'nope') : ''}"
              onclick="pickCBRNEStep(${i})" ${done ? 'disabled' : ''}>
              <div class="cb-num">${done ? (orderIdx + 1) : '?'}</div>
              <div>
                <h4>${step.title}</h4>
                <p>${step.desc}</p>
              </div>
            </button>`;
          }).join('');
        })()}
      </div>
    </div>`;

  if (G.cbOrder.length === 0) {
    startCountdown('cbTimer', 60 + getTimerBonus('cbrne'), updateTimerDisplay, () => {
      finishCBRNEScenario();
    });
  }
}

function pickCBRNEStep(idx) {
  const sc = CBRNE_SCENARIOS[G.cbIdx];
  const steps = sc.steps;
  const sortedByCorrect = [...steps].sort((a, b) => a.correct - b.correct);
  const correctOrderIds = sortedByCorrect.map(s => steps.indexOf(s));

  G.cbOrder.push(idx);
  G.cbStep++;

  const expectedIdx = correctOrderIds[G.cbOrder.length - 1];
  const correct = idx === expectedIdx;

  // Track answer
  Tracker.recordAnswer(`cbrne_${G.cbIdx}_step${G.cbOrder.length}`, String(idx), correct);

  if (correct) {
    sfx('correct');
    flashScreen('green');
    addScore(50);
    addXP(15);
    updateStreak(true);
    G.totalCorrect++;
  } else {
    sfx('wrong');
    shakeScreen();
    updateStreak(false);
  }
  checkAchievements();

  if (G.cbOrder.length >= sc.steps.length) {
    finishCBRNEScenario();
  } else {
    render();
  }
}

function finishCBRNEScenario() {
  stopTimer('cbTimer');
  G.cbIdx++;
  G.cbStep = 1;
  G.cbOrder = [];
  if (G.cbIdx >= CBRNE_SCENARIOS.length) {
    G.modesCompleted.add('cbrne');
    showModeResults('CBRNE Response', null, null, null, '☢️');
  } else {
    Tracker.startQuestion();
    render();
  }
}

function showCBRNEResults() {
  G.modesCompleted.add('cbrne');
  advanceStoryAct();
  showModeResults('CBRNE Response', null, null, null, '☢️');
}

// ---- MCI ----
// MCI state tracks both scenario index and decision index within scenario
function renderMCI() {
  const scenarios = MCI_SCENARIOS;
  if (!G._mciDecIdx) G._mciDecIdx = 0;
  const sc = scenarios[G.mciIdx];
  if (!sc) { showMCIResults(); return; }

  const dec = sc.decisions[G._mciDecIdx];
  if (!dec) {
    // Move to next scenario
    G.mciIdx++;
    G._mciDecIdx = 0;
    render();
    return;
  }

  const commanderLine = G.mciIdx === 0 && G._mciDecIdx === 0
    ? 'Command post established! Resource allocation and decision-making are key. Make the best judgment as <strong>Incident Commander</strong>!'
    : rnd(CHARS.commander.orders);

  const paramedicLine = rnd(CHARS.paramedic.reports);
  const zones = sc.zones || {};

  app.innerHTML = `
    ${renderHUD('mciTimer')}
    <div class="screen mci-game">
      ${charBubble('commander', commanderLine, { delay: 0 })}
      ${charBubble('paramedic', paramedicLine, { right: true, delay: 150, expression: '🫡' })}

      ${narrativePanel(`<strong>${sc.title}</strong><br>${sc.description}`, { type: 'warning', tag: 'Scene Situation', tagClass: 'situation', icon: '🏥' })}

      <div class="mci-stats-row">
        <div class="mci-stat-chip"><div class="num" style="color:var(--red)">${zones.red || '?'}</div><div class="lbl">RED</div></div>
        <div class="mci-stat-chip"><div class="num" style="color:var(--yellow)">${zones.yellow || '?'}</div><div class="lbl">YELLOW</div></div>
        <div class="mci-stat-chip"><div class="num" style="color:var(--green)">${zones.green || '?'}</div><div class="lbl">GREEN</div></div>
        <div class="mci-stat-chip"><div class="num">${sc.totalPatients || '?'}</div><div class="lbl">Total</div></div>
      </div>

      <div class="mci-q-card anim-in">
        <div class="q-label">Decision ${G._mciDecIdx + 1}/${sc.decisions.length}</div>
        <div class="q-text">${dec.question}</div>
        <div class="mci-opts stagger">
          ${dec.options.map((opt, i) => `
            <button class="mci-opt" onclick="answerMCI(${i})">${opt.text}</button>
          `).join('')}
        </div>
      </div>
    </div>`;

  startCountdown('mciTimer', 45 + getTimerBonus('mci'), updateTimerDisplay, () => {
    updateStreak(false);
    sfx('wrong');
    G._mciDecIdx++;
    if (G._mciDecIdx >= sc.decisions.length) { G.mciIdx++; G._mciDecIdx = 0; }
    render();
  });
}

function answerMCI(idx) {
  stopTimer('mciTimer');
  const sc = MCI_SCENARIOS[G.mciIdx];
  const dec = sc.decisions[G._mciDecIdx];
  const chosen = dec.options[idx];
  const correct = chosen.correct;

  // Track answer
  Tracker.recordAnswer(`mci_${G.mciIdx}_dec${G._mciDecIdx}`, String(idx), correct);

  if (correct) {
    sfx('correct');
    flashScreen('green');
    addScore(150);
    addXP(40);
    G.mciScore++;
    updateStreak(true);
    G.totalCorrect++;
  } else {
    sfx('wrong');
    shakeScreen();
    addScore(-30);
    updateStreak(false);
  }
  checkAchievements();

  // Show feedback
  const mentorLine = correct ? rnd(CHARS.mentor.correct) : rnd(CHARS.mentor.wrong);
  const fbLayer = document.createElement('div');
  fbLayer.className = 'feedback-layer show';
  fbLayer.innerHTML = `
    <div class="fb-card">
      <div class="fb-icon ${correct ? 'correct' : 'wrong'}">${correct ? '✅' : '❌'}</div>
      <h2>${correct ? 'Good Command!' : 'Reconsider!'}</h2>
      <div class="fb-char-section">
        <div class="fb-char-avatar">${CHARS.mentor.emoji}</div>
        <div class="fb-char-dialogue">
          <strong>${CHARS.mentor.name}:</strong> ${mentorLine}<br><br>${dec.explanation || ''}
        </div>
      </div>
      <div class="fb-points ${correct ? 'plus' : 'minus'}">${correct ? '+150' : '-30'}</div>
      <button class="fb-next" onclick="nextMCI()">Next Situation →</button>
    </div>`;
  document.body.appendChild(fbLayer);
}

function nextMCI() {
  document.querySelector('.feedback-layer')?.remove();
  const sc = MCI_SCENARIOS[G.mciIdx];
  G._mciDecIdx++;
  if (!sc || G._mciDecIdx >= sc.decisions.length) {
    G.mciIdx++;
    G._mciDecIdx = 0;
  }
  Tracker.startQuestion();
  render();
}

function showMCIResults() {
  stopTimer('mciTimer');
  G.modesCompleted.add('mci');
  const totalDecisions = MCI_SCENARIOS.reduce((sum, s) => sum + s.decisions.length, 0);
  const pct = Math.round((G.mciScore / Math.max(totalDecisions, 1)) * 100);
  if (pct === 100 && totalDecisions > 0) G.perfectModes++;
  checkAchievements();
  advanceStoryAct();
  showModeResults('MCI Commander', pct, G.mciScore, totalDecisions, '🏥');
}

// ---- ETHICS ----
function renderEthics() {
  const dilemmas = ETHICS_DILEMMAS;
  const d = dilemmas[G.ethIdx];
  if (!d) { showEthicsResults(); return; }

  const mentorLine = G.ethIdx === 0
    ? 'In disaster situations, <strong>different ethical standards</strong> apply than in peacetime. Make your best judgment.'
    : 'Next dilemma. There is no single right answer, but there is a better choice.';

  app.innerHTML = `
    ${renderHUD('ethTimer')}
    <div class="screen ethics-game">
      ${charBubble('mentor', mentorLine, { delay: 0 })}

      ${narrativePanel(`<strong>${d.title}</strong>`, { type: 'info', tag: 'Ethical Dilemma', tagClass: 'mission', icon: '⚖️' })}

      <div class="dilemma-card anim-in">
        <div class="dilemma-label" style="color:var(--cyan)">Situation ${G.ethIdx + 1} / ${dilemmas.length}</div>
        <div class="dilemma-text">${d.scenario}</div>
        ${d.ethicalPrinciples ? `<div style="font-size:0.75rem;color:var(--text-muted);margin-bottom:12px">Related principles: ${d.ethicalPrinciples.join(', ')}</div>` : ''}
        <div class="dilemma-opts stagger">
          ${d.options.map((opt, i) => {
            let cls = '';
            if (G.ethAnswered) {
              cls = 'ok'; // All ethics options are valid perspectives
            }
            return `<button class="dilemma-opt ${cls}" onclick="answerEthics(${i})" ${G.ethAnswered ? 'disabled' : ''}>
              ${opt.text}
            </button>`;
          }).join('')}
        </div>
        ${G.ethAnswered ? `
          <div class="quiz-explanation">
            ${G._ethFeedback || ''}
            ${d.explanation ? `<br><br>${d.explanation}` : ''}
          </div>
          <button class="quiz-next-btn" onclick="nextEthics()">Next Dilemma →</button>
        ` : ''}
      </div>
    </div>`;

  if (!G.ethAnswered) {
    startCountdown('ethTimer', 40 + getTimerBonus('ethics'), updateTimerDisplay, () => {
      G.ethAnswered = true;
      G._ethFeedback = 'Time out! Rapid decisions are required in disaster situations.';
      updateStreak(false);
      sfx('wrong');
      render();
    });
  }
}

function answerEthics(idx) {
  if (G.ethAnswered) return;
  G.ethAnswered = true;
  stopTimer('ethTimer');

  const d = ETHICS_DILEMMAS[G.ethIdx];
  const chosen = d.options[idx];

  // Track answer (ethics has no wrong answer, always true)
  Tracker.recordAnswer(`ethics_${G.ethIdx}`, String(idx), true);

  // Ethics dilemmas have no single "score" — treat all answers as valid learning
  // Give points for engaging with the dilemma
  sfx('correct');
  flashScreen('green');
  addScore(80);
  addXP(35);
  G.ethScore++;
  updateStreak(true);
  G.totalCorrect++;
  checkAchievements();

  // Build feedback from pros/cons if available
  let feedback = '';
  if (chosen.framework) feedback += `<strong>Ethical Framework:</strong> ${chosen.framework}<br>`;
  if (chosen.pros) feedback += `<strong>Pros:</strong> ${chosen.pros}<br>`;
  if (chosen.cons) feedback += `<strong>Cons:</strong> ${chosen.cons}`;
  if (chosen.explanation) feedback = chosen.explanation;
  G._ethFeedback = feedback || 'Analyze the consequences of your choice.';

  render();
}

function nextEthics() {
  G.ethIdx++;
  G.ethAnswered = false;
  G._ethFeedback = '';
  Tracker.startQuestion();
  render();
}

function showEthicsResults() {
  stopTimer('ethTimer');
  G.modesCompleted.add('ethics');
  const total = ETHICS_DILEMMAS.length;
  const pct = Math.round((G.ethScore / total) * 100);
  checkAchievements();
  advanceStoryAct();
  showModeResults('Ethical Dilemmas', pct, G.ethScore, total, '⚖️');
}

// ---- LEADERSHIP ----
function renderLeadership() {
  const scenarios = LEADERSHIP_SCENARIOS;
  const sc = scenarios[G.leadIdx];
  if (!sc) { showLeadershipResults(); return; }

  const commanderLine = G.leadIdx === 0
    ? 'In a crisis, the <strong>leader\'s decision</strong> determines the fate of the entire team. Are you ready?'
    : rnd(CHARS.commander.orders);

  app.innerHTML = `
    ${renderHUD('leadTimer')}
    <div class="screen leadership-game">
      ${charBubble('commander', commanderLine, { delay: 0 })}

      ${narrativePanel(`<strong>${sc.title}</strong>`, { type: 'purple', tag: 'Leadership Situation', tagClass: 'mission', icon: '🎖️' })}

      <div class="dilemma-card anim-in">
        <div class="dilemma-label" style="color:var(--purple)">Situation ${G.leadIdx + 1} / ${scenarios.length}</div>
        <div class="dilemma-text">${sc.situation}</div>
        ${sc.leadershipPrinciple ? `<div style="font-size:0.75rem;color:var(--text-muted);margin-bottom:12px">Leadership Principle: ${sc.leadershipPrinciple}</div>` : ''}
        <div class="dilemma-opts stagger">
          ${sc.options.map((opt, i) => `
            <button class="dilemma-opt" onclick="answerLeadership(${i})">${opt.text}</button>
          `).join('')}
        </div>
      </div>
    </div>`;

  startCountdown('leadTimer', 35 + getTimerBonus('leadership'), updateTimerDisplay, () => {
    updateStreak(false);
    sfx('wrong');
    G.leadIdx++;
    render();
  });
}

function answerLeadership(idx) {
  stopTimer('leadTimer');
  const sc = LEADERSHIP_SCENARIOS[G.leadIdx];
  const chosen = sc.options[idx];
  const correct = chosen.correct;

  // Track answer
  Tracker.recordAnswer(`leadership_${G.leadIdx}`, String(idx), correct);

  if (correct) {
    sfx('correct');
    flashScreen('green');
    addScore(120);
    addXP(35);
    G.leadScore++;
    updateStreak(true);
    G.totalCorrect++;
  } else {
    sfx('wrong');
    shakeScreen();
    addScore(-15);
    updateStreak(false);
  }
  checkAchievements();

  const mentorLine = correct ? rnd(CHARS.mentor.correct) : rnd(CHARS.mentor.wrong);
  const explanation = chosen.explanation || sc.explanation || '';

  const fbLayer = document.createElement('div');
  fbLayer.className = 'feedback-layer show';
  fbLayer.innerHTML = `
    <div class="fb-card">
      <div class="fb-icon ${correct ? 'correct' : 'wrong'}">${correct ? '✅' : '❌'}</div>
      <h2>${correct ? 'Excellent Leadership!' : 'Think Again'}</h2>
      <div class="fb-char-section">
        <div class="fb-char-avatar">${CHARS.commander.emoji}</div>
        <div class="fb-char-dialogue">
          <strong>${CHARS.commander.name}:</strong> ${mentorLine}<br><br>${explanation}
        </div>
      </div>
      <div class="fb-points ${correct ? 'plus' : 'minus'}">${correct ? '+120' : '-15'}</div>
      <button class="fb-next" onclick="nextLeadership()">Next Situation →</button>
    </div>`;
  document.body.appendChild(fbLayer);
}

function nextLeadership() {
  document.querySelector('.feedback-layer')?.remove();
  G.leadIdx++;
  Tracker.startQuestion();
  render();
}

function showLeadershipResults() {
  stopTimer('leadTimer');
  G.modesCompleted.add('leadership');
  const total = LEADERSHIP_SCENARIOS.length;
  const pct = Math.round((G.leadScore / total) * 100);
  if (pct === 100 && total > 0) G.perfectModes++;
  checkAchievements();
  advanceStoryAct();
  showModeResults('Leadership Challenge', pct, G.leadScore, total, '🎖️');
}

// ---- TEAMWORK ----
function renderTeamwork() {
  const challenges = TEAMWORK_CHALLENGES;
  const ch = challenges[G.twIdx];
  if (!ch) { showTeamworkResults(); return; }

  const nurseReport = rnd(CHARS.nurse.support);
  const mentorLine = G.twIdx === 0
    ? 'Disaster response is all about <strong>teamwork</strong>! Understand each team member\'s role and achieve optimal collaboration!'
    : 'Next team mission. Who should take what role?';

  app.innerHTML = `
    ${renderHUD('twTimer')}
    <div class="screen teamwork-game">
      ${charBubble('mentor', mentorLine, { delay: 0 })}
      ${charBubble('nurse', nurseReport, { right: true, delay: 150, expression: '💪' })}

      ${narrativePanel(`<strong>${ch.title}</strong>`, { type: 'warning', tag: 'Team Mission', tagClass: 'alert', icon: '🤝' })}

      <div class="dilemma-card anim-in">
        <div class="dilemma-label" style="color:var(--amber)">Mission ${G.twIdx + 1} / ${challenges.length}</div>
        <div class="dilemma-text">${ch.scenario}</div>
        ${ch.clinicalContext ? `<div style="font-size:0.75rem;color:var(--text-muted);margin-bottom:12px">Clinical Context: ${typeof ch.clinicalContext === 'object' ? Object.entries(ch.clinicalContext).map(([k,v]) => `<strong>${k}:</strong> ${v}`).join(' · ') : ch.clinicalContext}</div>` : ''}
        <div class="dilemma-opts stagger">
          ${ch.options.map((opt, i) => `
            <button class="dilemma-opt" onclick="answerTeamwork(${i})">${opt.text}</button>
          `).join('')}
        </div>
      </div>
    </div>`;

  startCountdown('twTimer', 35 + getTimerBonus('teamwork'), updateTimerDisplay, () => {
    updateStreak(false);
    sfx('wrong');
    G.twIdx++;
    render();
  });
}

function answerTeamwork(idx) {
  stopTimer('twTimer');
  const ch = TEAMWORK_CHALLENGES[G.twIdx];
  const chosen = ch.options[idx];
  const correct = chosen.correct;

  // Track answer
  Tracker.recordAnswer(`teamwork_${G.twIdx}`, String(idx), correct);

  if (correct) {
    sfx('correct');
    flashScreen('green');
    addScore(120);
    addXP(35);
    G.twScore++;
    updateStreak(true);
    G.totalCorrect++;
  } else {
    sfx('wrong');
    shakeScreen();
    addScore(-15);
    updateStreak(false);
  }
  checkAchievements();

  const mentorLine = correct ? rnd(CHARS.mentor.correct) : rnd(CHARS.mentor.wrong);
  const toolInfo = chosen.tool || ch.teamsteppsTool || '';
  const explanation = chosen.explanation || ch.explanation || '';

  const fbLayer = document.createElement('div');
  fbLayer.className = 'feedback-layer show';
  fbLayer.innerHTML = `
    <div class="fb-card">
      <div class="fb-icon ${correct ? 'correct' : 'wrong'}">${correct ? '✅' : '❌'}</div>
      <h2>${correct ? 'Perfect Teamwork!' : 'Team Coordination Needed!'}</h2>
      <div class="fb-char-section">
        <div class="fb-char-avatar">${CHARS.nurse.emoji}</div>
        <div class="fb-char-dialogue">
          <strong>${CHARS.nurse.name}:</strong> ${mentorLine}<br><br>${explanation}
          ${toolInfo ? `<br><br>💡 <strong>Tools Used:</strong> ${toolInfo}` : ''}
        </div>
      </div>
      <div class="fb-points ${correct ? 'plus' : 'minus'}">${correct ? '+120' : '-15'}</div>
      <button class="fb-next" onclick="nextTeamwork()">Next Mission →</button>
    </div>`;
  document.body.appendChild(fbLayer);
}

function nextTeamwork() {
  document.querySelector('.feedback-layer')?.remove();
  G.twIdx++;
  Tracker.startQuestion();
  render();
}

function showTeamworkResults() {
  stopTimer('twTimer');
  G.modesCompleted.add('teamwork');
  const total = TEAMWORK_CHALLENGES.length;
  const pct = Math.round((G.twScore / total) * 100);
  if (pct === 100 && total > 0) G.perfectModes++;
  checkAchievements();
  advanceStoryAct();
  showModeResults('Teamwork Mission', pct, G.twScore, total, '🤝');
}

// ---- BOSS ROUND ----
function renderBoss() {
  const q = G.bossQ[G.bossIdx];
  if (!q || G.bossIdx >= G.bossQ.length) { showBossResults(); return; }

  const villainLine = G.bossIdx === 0
    ? 'This is the final exam... Prove everything you have learned!'
    : rnd(CHARS.villain.taunts);
  const mentorLine = 'Stay calm! Just do what you trained for!';

  app.innerHTML = `
    ${renderHUD('bossTimer')}
    <div class="screen quiz-game">
      <div class="boss-banner heartbeat-effect">
        <h2>👹 BOSS ROUND</h2>
        <p>Final Challenge — ${G.bossIdx + 1} / ${G.bossQ.length}</p>
      </div>

      ${charBubble('villain', villainLine, { right: true, urgent: true, expression: '👿', delay: 0 })}
      ${charBubble('mentor', mentorLine, { delay: 200 })}

      <div class="quiz-q-card anim-in">
        <div class="quiz-q-text">${q.question}</div>
        <div class="quiz-opts">
          ${q.options.map((opt, i) => {
            const letter = String.fromCharCode(65 + i);
            return `<button class="q-opt" onclick="answerBoss(${i})">
              <span class="q-letter">${letter}</span>
              <span class="q-opt-text">${opt}</span>
            </button>`;
          }).join('')}
        </div>
      </div>
    </div>`;

  showDangerPulse(true);
  startCountdown('bossTimer', 15 + getTimerBonus('boss'), updateTimerDisplay, () => {
    sfx('wrong');
    shakeScreen();
    updateStreak(false);
    G.bossIdx++;
    render();
  });
}

function answerBoss(idx) {
  stopTimer('bossTimer');
  const q = G.bossQ[G.bossIdx];
  const correct = idx === q.correct;

  // Track answer
  Tracker.recordAnswer(`boss_${G.bossIdx}`, String(idx), correct);

  if (correct) {
    sfx('correct');
    flashScreen('green');
    showImpact('green');
    addScore(200);
    addXP(50);
    G.bossScore++;
    updateStreak(true);
    G.totalCorrect++;
  } else {
    sfx('wrong');
    shakeScreen();
    showImpact();
    addScore(-50);
    updateStreak(false);
  }
  checkAchievements();

  showSpeedLines();

  const mentorLine = correct ? rnd(CHARS.mentor.correct) : rnd(CHARS.mentor.wrong);
  const fbLayer = document.createElement('div');
  fbLayer.className = 'feedback-layer show';
  fbLayer.innerHTML = `
    <div class="fb-card">
      <div class="fb-icon ${correct ? 'correct' : 'wrong'}">${correct ? '🏆' : '💀'}</div>
      <h2>${correct ? 'Boss Defeated!' : 'Boss Counterattack!'}</h2>
      <div class="fb-char-section">
        <div class="fb-char-avatar">${correct ? CHARS.mentor.emoji : CHARS.villain.emoji}</div>
        <div class="fb-char-dialogue">
          <strong>${correct ? CHARS.mentor.name : CHARS.villain.name}:</strong> ${correct ? mentorLine : 'That is not enough...'}
          <br><br>${q.explanation || ''}
        </div>
      </div>
      <div class="fb-points ${correct ? 'plus' : 'minus'}">${correct ? '+200' : '-50'}</div>
      <button class="fb-next" onclick="nextBoss()">Next →</button>
    </div>`;
  document.body.appendChild(fbLayer);
}

function nextBoss() {
  document.querySelector('.feedback-layer')?.remove();
  G.bossIdx++;
  Tracker.startQuestion();
  render();
}

function showBossResults() {
  showDangerPulse(false);
  stopTimer('bossTimer');
  G.bossActive = false;
  const total = G.bossQ.length;
  const pct = Math.round((G.bossScore / total) * 100);
  G.bossGrade = getGrade(pct);
  checkAchievements();
  showModeResults('Boss Round', pct, G.bossScore, total, '👹');
}

// ---- RESULTS (shared) ----
function showModeResults(title, pct, correct, total, icon) {
  // Update leaderboard
  const existing = G.leaderboard.find(e => e.name === G.nickname);
  if (existing) existing.score = Math.max(existing.score, G.score);
  else G.leaderboard.push({ name: G.nickname, score: G.score });
  G.leaderboard.sort((a, b) => b.score - a.score);

  const grade = (pct === null) ? getGradeByScore() : getGrade(pct);
  const gradeClass = grade === 'S' ? 's' : grade === 'A' ? 'a' : grade === 'B' ? 'b' : 'c';

  // Track mode completion
  Tracker.endMode(correct || G.score);
  Tracker.endSession(G.score, G.level, G.maxStreak, G.modesCompleted);

  const mentorLine = grade === 'S' ? 'Legendary skill! You will be a top physician even in the field!'
    : grade === 'A' ? 'Excellent score! You can perform well in real situations!'
    : grade === 'B' ? 'Not bad. Study a bit more and you will be perfect.'
    : 'Let\'s rebuild from the basics. Don\'t give up!';

  if (grade === 'S' || grade === 'A') confetti();

  app.innerHTML = `
    <div class="screen results-screen">
      ${charBubble('mentor', mentorLine, { success: grade === 'S' || grade === 'A' })}
      <div class="result-big anim-in">${icon}</div>
      <div class="result-sub">${title} Complete!</div>
      <div class="result-grade ${gradeClass} anim-in">Grade: ${grade}</div>
      ${pct !== null ? `
        <div class="result-stats anim-in">
          <div class="r-stat"><div class="val">${correct}/${total}</div><div class="lbl">Correct</div></div>
          <div class="r-stat"><div class="val">${pct}%</div><div class="lbl">Accuracy</div></div>
          <div class="r-stat"><div class="val">${G.maxStreak}</div><div class="lbl">Max Streak</div></div>
        </div>
      ` : `
        <div class="result-stats anim-in">
          <div class="r-stat"><div class="val">${G.score}</div><div class="lbl">Total Score</div></div>
          <div class="r-stat"><div class="val">Lv.${G.level}</div><div class="lbl">Level</div></div>
          <div class="r-stat"><div class="val">${G.maxStreak}</div><div class="lbl">Max Streak</div></div>
        </div>
      `}
      <div class="xp-bar-wrap anim-in">
        <div class="xp-bar-label"><span>XP</span><span>${G.xp} / ${G.level * 200}</span></div>
        <div class="xp-bar-track"><div class="xp-bar-fill" style="width:${Math.min(100, (G.xp % 200) / 200 * 100)}%"></div></div>
      </div>
      <div class="result-actions anim-in">
        <button class="btn-primary" onclick="G.screen='modes';render();">Select Mission 🏠</button>
        <button class="btn-outline" onclick="enterMode('${G.screen}')">Retry 🔄</button>
      </div>
    </div>`;

  G.screen = 'results';
}

function getGrade(pct) {
  if (pct >= 90) return 'S';
  if (pct >= 75) return 'A';
  if (pct >= 50) return 'B';
  return 'C';
}

function getGradeByScore() {
  if (G.score >= 2000) return 'S';
  if (G.score >= 1200) return 'A';
  if (G.score >= 600) return 'B';
  return 'C';
}

// =============================================
// SURGE CHAIN MODE — Sequential Chain Scenario
// =============================================

function renderSurgeSelect() {
  app.innerHTML = `
    <div class="screen surge-screen">
      ${renderHUD('surge')}
      <div class="surge-header anim-in">
        <div class="surge-badge">🏥 SURGE</div>
        <h2>Chain Scenario</h2>
        <p style="font-size:0.8rem;color:#7f8fff;margin:4px 0;">Simulated Urgent Response & Group Exercise</p>
        <p>From the scene to the hospital — experience the full disaster response chain</p>
      </div>
      <div class="surge-scenario-list stagger">
        ${SURGE_CHAIN_SCENARIOS.map((sc, i) => `
          <button class="surge-scenario-card" onclick="startSurgeChain(${i})">
            <div class="esc-icon">${sc.phases[0].icon}</div>
            <div class="esc-info">
              <h3>${sc.title}</h3>
              <p>${sc.description}</p>
              <div class="esc-meta">
                <span class="esc-tag">👤 ${sc.totalPatients} patients</span>
                <span class="esc-tag">📍 ${sc.phases.length} phases</span>
                <span class="esc-tag">⏱ ${sc.phases.reduce((s,p)=>s+p.timeLimit,0)}s</span>
              </div>
            </div>
          </button>
        `).join('')}
      </div>
      <button class="btn-outline" style="margin-top:20px" onclick="G.screen='modes';render();">← Select Mission</button>
    </div>`;
}

function startSurgeChain(scenarioIdx) {
  const sc = SURGE_CHAIN_SCENARIOS[scenarioIdx];
  G.surge = {
    scenarioIdx,
    scenario: sc,
    patients: sc.patientIds.map(id => {
      const p = SURGE_PATIENTS.find(ep => ep.id === id);
      return { ...p, currentTriage: null, sortCategory: null, treated: false, treatMinute: null, interventionsDone: [], assignedResource: null, transported: false, transportOrder: 0, edStabilized: false, outcome: null };
    }),
    phaseIdx: 0,
    decisions: {},
    resources: {},
    gameMinute: 0,
    phaseScore: 0,
    totalScore: 0,
    sieveResults: [],
    transportQueue: [],
    preventableDeaths: 0,
    // Initialize internal Phase state
    _sieveIdx: 0,
    _sieveCorrect: 0,
    _sieveTimerStarted: false,
    _sortIdx: 0,
    _sortCorrect: 0,
    _sortTimerStarted: false,
    _treatPhase: false,
    _treatCurrent: 0,
    _treatAssignments: {},
    _deconQueue: null,
    _deconDone: null,
    _deconSlots: 0,
    _transportOrder: null,
    _ambulancesAvail: null,
    _edProcessed: null
  };
  G.screen = 'surge';
  Tracker.startMode('surge_chain');
  Tracker.startQuestion();
  renderSurgePhase();
}

function renderSurgePhase() {
  const em = G.surge;
  if (!em || !em.scenario) { G.screen = 'modes'; render(); return; }
  const phase = em.scenario.phases[em.phaseIdx];
  if (!phase) { showSurgeFinalResults(); return; }

  if (phase.task === 'sieve_triage') renderSurgeSieve(phase);
  else if (phase.task === 'sort_and_treat') renderSurgeSort(phase);
  else if (phase.task === 'decontamination') renderSurgeDecontam(phase);
  else if (phase.task === 'transport_priority') renderSurgeTransport(phase);
  else if (phase.task === 'ed_management') renderSurgeED(phase);
  else { showSurgeFinalResults(); }
}

// ---- PHASE 1: Sieve Triage ----
function renderSurgeSieve(phase) {
  const em = G.surge;
  if (em._sieveIdx == null) em._sieveIdx = 0;
  if (em._sieveCorrect == null) em._sieveCorrect = 0;

  const patients = em.patients;
  const currentP = patients[em._sieveIdx];

  if (!currentP || em._sieveIdx >= patients.length) {
    // Sieve complete → stop timer then move to next phase
    stopTimer('surge_sieve');
    em.phaseScore = Math.round((em._sieveCorrect / patients.length) * 100);
    addScore(em._sieveCorrect * 150);
    addXP(em._sieveCorrect * 30);
    em.phaseIdx++;
    em._sieveIdx = 0;
    showSurgePhaseTransition();
    return;
  }

  const timeKey = 'surge_sieve';
  // Timer starts only on first render (prevent reset per patient)
  if (em._sieveIdx === 0 && !em._sieveTimerStarted) {
    em._sieveTimerStarted = true;
    startCountdown(timeKey, phase.timeLimit, null, () => {
      // Time's up — auto-advance remaining as wrong
      for (let i = em._sieveIdx; i < patients.length; i++) {
        patients[i].currentTriage = 'yellow'; // default
      }
      em.phaseScore = Math.round((em._sieveCorrect / patients.length) * 100);
      addScore(em._sieveCorrect * 150);
      addXP(em._sieveCorrect * 30);
      em.phaseIdx++;
      em._sieveIdx = 0;
      showSurgePhaseTransition();
    });
  }

  const progress = `${em._sieveIdx + 1}/${patients.length}`;
  const sieveHint = phase.hint || '';

  app.innerHTML = `
    <div class="screen surge-play-screen">
      ${renderHUD(timeKey)}
      <div class="surge-phase-bar">
        <span class="phase-icon">${phase.icon}</span>
        <span class="phase-name">${phase.name}</span>
        <span class="phase-progress">${progress}</span>
      </div>

      <div class="surge-patient-card anim-in">
        <div class="epc-header">
          <span class="epc-icon">${currentP.icon}</span>
          <div class="epc-info">
            <strong>${currentP.name}</strong> (${currentP.age} yrs, ${currentP.gender})
            <div class="epc-appearance">${currentP.appearance}</div>
          </div>
          <span class="epc-id">${currentP.id}</span>
        </div>

        <div class="epc-vitals">
          <div class="epc-vital"><span class="v-label">Walking</span><span class="v-val ${currentP.walking?'good':'bad'}">${currentP.walking?'Yes':'No'}</span></div>
          <div class="epc-vital"><span class="v-label">Breathing</span><span class="v-val ${currentP.sieve.breathing?'':'bad'}">${currentP.sieve.breathing?'Present':'Absent'}</span></div>
          ${currentP.sieve.breathing ? `
            <div class="epc-vital"><span class="v-label">Resp. Rate</span><span class="v-val ${currentP.sieve.respRate>30||currentP.sieve.respRate<10?'bad':''}">${currentP.sieve.respRate}/min</span></div>
            <div class="epc-vital"><span class="v-label">Cap Refill</span><span class="v-val ${currentP.sieve.capRefill>2?'bad':''}">${currentP.sieve.capRefill}s</span></div>
          ` : `
            <div class="epc-vital"><span class="v-label">After Airway</span><span class="v-val ${currentP.sieve.afterAirway?'warn':'bad'}">${currentP.sieve.afterAirway?'Breathing Restored':'No Breathing'}</span></div>
          `}
        </div>

        <div class="epc-injuries">
          ${currentP.injuries.map(inj => `<div class="epc-injury">• ${inj}</div>`).join('')}
        </div>
      </div>

      <div class="surge-triage-buttons anim-in">
        <button class="etb red" onclick="surgeSieveAnswer('red')">🔴 Immediate (RED)</button>
        <button class="etb yellow" onclick="surgeSieveAnswer('yellow')">🟡 Urgent (YELLOW)</button>
        <button class="etb green" onclick="surgeSieveAnswer('green')">🟢 Delayed (GREEN)</button>
        <button class="etb black" onclick="surgeSieveAnswer('black')">⚫ Deceased (BLACK)</button>
      </div>

      <div class="surge-hint">
        <details><summary>💡 Sieve Algorithm Hint</summary><p>${sieveHint}</p></details>
      </div>
    </div>`;
}

function surgeSieveAnswer(answer) {
  const em = G.surge;
  const p = em.patients[em._sieveIdx];
  const correct = p.correctSieve;
  p.currentTriage = answer;

  const isCorrect = answer === correct;
  if (isCorrect) {
    em._sieveCorrect++;
    G.streak++;
    if (G.streak > G.maxStreak) G.maxStreak = G.streak;
    showImpact('#10b981');
  } else {
    G.streak = 0;
    showImpact('#ef4444');
  }

  G.totalCorrect++;
  checkAchievements();

  // Brief feedback
  const fb = document.createElement('div');
  fb.className = `surge-feedback ${isCorrect ? 'correct' : 'wrong'} anim-in`;
  fb.innerHTML = `${isCorrect ? '✅ Correct!' : `❌ ${correct.toUpperCase()}`} — ${p.name}`;
  document.querySelector('.surge-play-screen')?.appendChild(fb);

  setTimeout(() => {
    em._sieveIdx++;
    renderSurgeSieve(em.scenario.phases[em.phaseIdx]);
  }, 800);
}

// ---- PHASE 2: Sort & Treat ----
function renderSurgeSort(phase) {
  const em = G.surge;
  // Only non-black patients continue
  const activePatients = em.patients.filter(p => p.currentTriage !== 'black');
  if (em._sortIdx == null) em._sortIdx = 0;
  if (em._sortCorrect == null) em._sortCorrect = 0;
  if (!em._treatPhase) em._treatPhase = false;

  // Phase A: Sort classification
  if (!em._treatPhase) {
    const currentP = activePatients[em._sortIdx];
    if (!currentP || em._sortIdx >= activePatients.length) {
      // Sort complete → stop timer then move to treatment assignment phase
      stopTimer('surge_sort');
      em._treatPhase = true;
      em._sortIdx = 0;
      renderSurgeTreat(phase);
      return;
    }

    const trts = sortScore(currentP);
    const expectedSort = sortCategory(currentP);

    const timeKey = 'surge_sort';
    // Timer starts only on first render
    if (em._sortIdx === 0 && !em._sortTimerStarted) {
      em._sortTimerStarted = true;
      startCountdown(timeKey, phase.timeLimit, null, () => {
        em._treatPhase = true;
        renderSurgeTreat(phase);
      });
    }

    app.innerHTML = `
      <div class="screen surge-play-screen">
        ${renderHUD(timeKey)}
        <div class="surge-phase-bar">
          <span class="phase-icon">${phase.icon}</span>
          <span class="phase-name">${phase.name} — Sort Classification</span>
          <span class="phase-progress">${em._sortIdx + 1}/${activePatients.length}</span>
        </div>

        <div class="surge-patient-card anim-in">
          <div class="epc-header">
            <span class="epc-icon">${currentP.icon}</span>
            <div class="epc-info">
              <strong>${currentP.name}</strong> (${currentP.age} yrs)
              <div class="epc-appearance">Sieve: ${currentP.currentTriage?.toUpperCase()}</div>
            </div>
          </div>
          <div class="epc-vitals sort-vitals">
            <div class="epc-vital"><span class="v-label">GCS</span><span class="v-val">${currentP.sort.gcs}</span></div>
            <div class="epc-vital"><span class="v-label">Resp. Rate</span><span class="v-val">${currentP.sort.respRate}/min</span></div>
            <div class="epc-vital"><span class="v-label">Systolic BP</span><span class="v-val">${currentP.sort.systolicBP}</span></div>
            <div class="epc-vital"><span class="v-label">TRTS</span><span class="v-val">${trts}/12</span></div>
          </div>
          <div class="epc-injuries">
            ${currentP.injuries.map(inj => `<div class="epc-injury">• ${inj}</div>`).join('')}
          </div>
        </div>

        <div class="surge-sort-buttons anim-in">
          <button class="etb t1" onclick="surgeSortAnswer('T1')">🔴 T1 (Immediate)</button>
          <button class="etb t2" onclick="surgeSortAnswer('T2')">🟡 T2 (Urgent)</button>
          <button class="etb t3" onclick="surgeSortAnswer('T3')">🟢 T3 (Delayed)</button>
        </div>

        <div class="surge-hint">
          <details><summary>💡 Sort (TRTS) Hint</summary><p>${phase.hint}</p></details>
        </div>
      </div>`;
  }
}

function surgeSortAnswer(answer) {
  const em = G.surge;
  const activePatients = em.patients.filter(p => p.currentTriage !== 'black');
  const p = activePatients[em._sortIdx];
  const expected = sortCategory(p);
  p.sortCategory = answer;

  const isCorrect = answer === expected;
  if (isCorrect) { em._sortCorrect++; G.streak++; if (G.streak > G.maxStreak) G.maxStreak = G.streak; showImpact('#10b981'); }
  else { G.streak = 0; showImpact('#ef4444'); }
  G.totalCorrect++;
  checkAchievements();

  setTimeout(() => {
    em._sortIdx++;
    renderSurgeSort(em.scenario.phases[em.phaseIdx]);
  }, 600);
}

// ---- PHASE 2B: Treatment Assignment ----
function renderSurgeTreat(phase) {
  const em = G.surge;
  const t1Patients = em.patients.filter(p => (p.sortCategory === 'T1' || p.currentTriage === 'red') && p.currentTriage !== 'black');
  const t2Patients = em.patients.filter(p => (p.sortCategory === 'T2' || p.currentTriage === 'yellow') && p.currentTriage !== 'black' && p.sortCategory !== 'T1');

  // Available resources for treatment
  const res = phase.availableResources;
  if (!em._treatAssignments) em._treatAssignments = {};
  if (!em._treatCurrent) em._treatCurrent = 0;

  const criticalPatients = [...t1Patients, ...t2Patients];
  const currentP = criticalPatients[em._treatCurrent];

  if (!currentP || em._treatCurrent >= criticalPatients.length) {
    // Treatment done → calculate and advance
    let treatScore = 0;
    criticalPatients.forEach(p => {
      const assigned = em._treatAssignments[p.id] || [];
      const needed = p.neededInterventions || [];
      const overlap = assigned.filter(a => needed.includes(a));
      const accuracy = needed.length > 0 ? overlap.length / needed.length : 0;
      p.treated = accuracy >= 0.5;
      p.treatMinute = em.gameMinute;
      if (p.treated) treatScore += 200;
    });
    addScore(treatScore + em._sortCorrect * 100);
    addXP(treatScore / 5 + em._sortCorrect * 20);
    em.phaseIdx++;
    em._sortIdx = 0; em._sortCorrect = 0; em._treatPhase = false;
    em._treatCurrent = 0; em._treatAssignments = {};
    showSurgePhaseTransition();
    return;
  }

  const needed = currentP.neededInterventions || [];
  const available = needed.map(key => INTERVENTIONS[key]).filter(Boolean);
  // Also add some distractors
  const allKeys = Object.keys(INTERVENTIONS);
  const distractors = allKeys.filter(k => !needed.includes(k)).sort(() => Math.random()-0.5).slice(0,3);
  const options = [...needed, ...distractors].sort(() => Math.random()-0.5);

  const assigned = em._treatAssignments[currentP.id] || [];

  app.innerHTML = `
    <div class="screen surge-play-screen">
      ${renderHUD('surge_sort')}
      <div class="surge-phase-bar">
        <span class="phase-icon">💊</span>
        <span class="phase-name">Treatment Assignment</span>
        <span class="phase-progress">${em._treatCurrent + 1}/${criticalPatients.length}</span>
      </div>

      <div class="surge-patient-card mini anim-in">
        <div class="epc-header">
          <span class="epc-icon">${currentP.icon}</span>
          <div class="epc-info">
            <strong>${currentP.name}</strong> — ${currentP.sortCategory || currentP.currentTriage?.toUpperCase()}
            <div class="epc-appearance">${currentP.injuries[0]}</div>
          </div>
          <div class="epc-timer-warn">
            ⏱ If untreated ${currentP.deterioration.untreatedMinutes}min → ${currentP.deterioration.outcome === 'death' ? '💀 Death' : '⚠️ Deterioration'}
          </div>
        </div>
      </div>

      <div class="surge-treat-grid anim-in">
        <p class="treat-instruction">Select required treatments (multiple choice):</p>
        <div class="treat-options">
          ${options.map(key => {
            const iv = INTERVENTIONS[key];
            if (!iv) return '';
            const isSelected = assigned.includes(key);
            return `<button class="treat-btn ${isSelected ? 'selected' : ''}" onclick="toggleSurgeTreat('${currentP.id}','${key}')">
              <span class="tb-icon">${iv.icon}</span>
              <span class="tb-name">${iv.name}</span>
              <span class="tb-time">${iv.timeIdeal} min</span>
            </button>`;
          }).join('')}
        </div>
      </div>

      <button class="btn-primary" style="margin-top:16px" onclick="confirmSurgeTreat()">Confirm →</button>
    </div>`;
}

function toggleSurgeTreat(patientId, interventionKey) {
  const em = G.surge;
  if (!em._treatAssignments[patientId]) em._treatAssignments[patientId] = [];
  const arr = em._treatAssignments[patientId];
  const idx = arr.indexOf(interventionKey);
  if (idx >= 0) arr.splice(idx, 1);
  else arr.push(interventionKey);
  renderSurgeTreat(em.scenario.phases[em.phaseIdx]);
}

function confirmSurgeTreat() {
  const em = G.surge;
  em._treatCurrent++;
  renderSurgeTreat(em.scenario.phases[em.phaseIdx]);
}

// ---- PHASE 3: Decontamination (CBRNE scenarios) ----
function renderSurgeDecontam(phase) {
  const em = G.surge;
  const activePatients = em.patients.filter(p => p.currentTriage !== 'black');
  if (!em._deconQueue) {
    // Sort by severity — T1 first
    em._deconQueue = [...activePatients].sort((a, b) => {
      const order = { red: 0, yellow: 1, green: 2 };
      return (order[a.currentTriage] || 2) - (order[b.currentTriage] || 2);
    });
    em._deconDone = [];
    em._deconSlots = phase.decontamStations || 2;
  }

  const remaining = em._deconQueue.filter(p => !em._deconDone.includes(p.id));

  if (remaining.length === 0) {
    // All decontaminated
    addScore(em._deconDone.length * 100);
    addXP(em._deconDone.length * 15);
    em.phaseIdx++;
    em._deconQueue = null; em._deconDone = null;
    showSurgePhaseTransition();
    return;
  }

  // Player picks priority order
  app.innerHTML = `
    <div class="screen surge-play-screen">
      ${renderHUD('surge_sort')}
      <div class="surge-phase-bar">
        <span class="phase-icon">${phase.icon}</span>
        <span class="phase-name">${phase.name}</span>
        <span class="phase-progress">${em._deconDone.length}/${activePatients.length} Complete</span>
      </div>

      <div class="surge-decon-info anim-in">
        <p>🚿 Decon stations: <strong>${em._deconSlots}</strong> | Time per patient: <strong>${phase.decontamTimePerPatient} min</strong></p>
        <p>Select next patient for decontamination (critical first):</p>
      </div>

      <div class="surge-decon-list anim-in">
        ${remaining.map(p => `
          <button class="decon-patient-btn" onclick="surgeDeconSelect('${p.id}')">
            <span class="dp-icon">${p.icon}</span>
            <span class="dp-name">${p.name}</span>
            <span class="dp-triage triage-${p.currentTriage}">${p.currentTriage?.toUpperCase()}</span>
            <span class="dp-injury">${p.injuries[0]}</span>
          </button>
        `).join('')}
      </div>
    </div>`;
}

function surgeDeconSelect(patientId) {
  const em = G.surge;
  em._deconDone.push(patientId);
  em.gameMinute += (em.scenario.phases[em.phaseIdx].decontamTimePerPatient || 5);
  renderSurgeDecontam(em.scenario.phases[em.phaseIdx]);
}

// ---- PHASE: Transport Priority ----
function renderSurgeTransport(phase) {
  const em = G.surge;
  const treatedPatients = em.patients.filter(p => p.currentTriage !== 'black' && p.currentTriage !== 'green');

  if (!em._transportOrder) em._transportOrder = [];
  if (!em._ambulancesAvail) em._ambulancesAvail = phase.ambulances || 3;

  const remaining = treatedPatients.filter(p => !em._transportOrder.includes(p.id));

  if (remaining.length === 0 || em._ambulancesAvail <= 0) {
    // Transport done
    let tScore = 0;
    em._transportOrder.forEach((pid, idx) => {
      const p = em.patients.find(pp => pp.id === pid);
      if (p) {
        p.transported = true;
        p.transportOrder = idx + 1;
        // Bonus for correct priority (T1 first)
        if (p.sortCategory === 'T1' && idx < 4) tScore += 200;
        else if (p.sortCategory === 'T2') tScore += 100;
      }
    });
    addScore(tScore);
    addXP(tScore / 5);
    em.phaseIdx++;
    em._transportOrder = null; em._ambulancesAvail = null;
    showSurgePhaseTransition();
    return;
  }

  app.innerHTML = `
    <div class="screen surge-play-screen">
      ${renderHUD('surge_sort')}
      <div class="surge-phase-bar">
        <span class="phase-icon">${phase.icon}</span>
        <span class="phase-name">${phase.name}</span>
        <span class="phase-progress">🚑 ${em._ambulancesAvail} remaining</span>
      </div>

      <div class="surge-transport-info anim-in">
        <p>Determine transport order. Ambulances: <strong>${em._ambulancesAvail}</strong>, Round-trip: ${phase.transportTimeMin}-${phase.transportTimeMax} min</p>
        <p>Transported: ${em._transportOrder.length} patients</p>
      </div>

      <div class="surge-transport-list anim-in">
        ${remaining.map(p => `
          <button class="transport-patient-btn" onclick="surgeTransportSelect('${p.id}')">
            <span class="tp-icon">${p.icon}</span>
            <span class="tp-name">${p.name}</span>
            <span class="tp-triage triage-${p.currentTriage}">${p.sortCategory || p.currentTriage?.toUpperCase()}</span>
            <span class="tp-injury">${p.injuries[0]}</span>
            <span class="tp-urgency">⏱ ${p.deterioration.untreatedMinutes} min</span>
          </button>
        `).join('')}
      </div>
    </div>`;
}

function surgeTransportSelect(patientId) {
  const em = G.surge;
  const phase = em.scenario.phases[em.phaseIdx];
  em._transportOrder.push(patientId);
  em._ambulancesAvail--;
  em.gameMinute += Math.round((phase.transportTimeMin + phase.transportTimeMax) / 2);

  // Return ambulance after round trip
  setTimeout(() => {
    if (em._ambulancesAvail !== null) em._ambulancesAvail++;
  }, 0);

  renderSurgeTransport(phase);
}

// ---- PHASE: ED Management ----
function renderSurgeED(phase) {
  const em = G.surge;
  const arrivedPatients = em.patients.filter(p => p.transported);

  if (!em._edProcessed) em._edProcessed = [];
  const remaining = arrivedPatients.filter(p => !em._edProcessed.includes(p.id));

  if (remaining.length === 0) {
    // ED phase done
    addScore(em._edProcessed.length * 150);
    addXP(em._edProcessed.length * 25);
    em.phaseIdx++;
    showSurgePhaseTransition();
    return;
  }

  const currentP = remaining[0];
  const edActions = [
    { key: 'stabilize', label: 'Stabilize', icon: '💉', desc: 'Stabilize with IV fluids/transfusion/monitoring' },
    { key: 'surgery', label: 'Emergency Surgery', icon: '🔪', desc: `Surgery time: ${currentP.surgeryTime} min` },
    { key: 'icu', label: 'ICU Admission', icon: '🏥', desc: 'Intensive care unit treatment' },
    { key: 'ward', label: 'General Ward', icon: '🛏️', desc: 'General ward observation' },
    { key: 'observe', label: 'Observation', icon: '👁️', desc: 'Decide after further examination' }
  ];

  app.innerHTML = `
    <div class="screen surge-play-screen">
      ${renderHUD('surge_sort')}
      <div class="surge-phase-bar">
        <span class="phase-icon">${phase.icon}</span>
        <span class="phase-name">${phase.name}</span>
        <span class="phase-progress">${em._edProcessed.length + 1}/${arrivedPatients.length}</span>
      </div>

      <div class="surge-patient-card anim-in">
        <div class="epc-header">
          <span class="epc-icon">${currentP.icon}</span>
          <div class="epc-info">
            <strong>${currentP.name}</strong> — ${currentP.sortCategory}
            <div class="epc-appearance">${currentP.injuries.join(', ')}</div>
          </div>
        </div>
        <div class="epc-vitals sort-vitals">
          <div class="epc-vital"><span class="v-label">BP</span><span class="v-val">${currentP.sort.systolicBP}</span></div>
          <div class="epc-vital"><span class="v-label">GCS</span><span class="v-val">${currentP.sort.gcs}</span></div>
          <div class="epc-vital"><span class="v-label">Surgery Needed</span><span class="v-val">${currentP.surgeryTime > 0 ? 'Yes ('+currentP.surgeryTime+' min)' : 'No'}</span></div>
          <div class="epc-vital"><span class="v-label">ICU</span><span class="v-val">${currentP.icuRequired ? 'Required' : 'Not Required'}</span></div>
        </div>
      </div>

      <div class="surge-ed-actions anim-in">
        <p>Select the next action for this patient:</p>
        ${edActions.map(a => `
          <button class="ed-action-btn" onclick="surgeEdDecision('${currentP.id}','${a.key}')">
            <span class="ea-icon">${a.icon}</span>
            <div class="ea-info"><strong>${a.label}</strong><span>${a.desc}</span></div>
          </button>
        `).join('')}
      </div>
    </div>`;
}

function surgeEdDecision(patientId, action) {
  const em = G.surge;
  const p = em.patients.find(pp => pp.id === patientId);
  if (!p) return;

  // Score based on appropriateness
  let bonus = 0;
  if (action === 'surgery' && p.surgeryTime > 0) bonus = 200;
  else if (action === 'icu' && p.icuRequired) bonus = 200;
  else if (action === 'stabilize' && p.sortCategory === 'T1') bonus = 150;
  else if (action === 'ward' && !p.icuRequired && p.surgeryTime === 0) bonus = 150;
  else if (action === 'observe' && p.sortCategory === 'T3') bonus = 100;
  else bonus = 50; // partial credit

  p.edStabilized = true;
  addScore(bonus);
  em._edProcessed.push(patientId);
  renderSurgeED(em.scenario.phases[em.phaseIdx]);
}

// ---- Phase Transition ----
function showSurgePhaseTransition() {
  const em = G.surge;
  if (!em || !em.scenario) { G.screen = 'modes'; render(); return; }

  // Stop all SURGE timers
  stopTimer('surge_sieve');
  stopTimer('surge_sort');

  const nextPhase = em.scenario.phases[em.phaseIdx];
  const prevPhase = em.scenario.phases[em.phaseIdx - 1];

  if (!nextPhase) {
    showSurgeFinalResults();
    return;
  }

  app.innerHTML = `
    <div class="screen surge-transition-screen">
      <div class="surge-phase-complete anim-in">
        <div class="epc-check">✅</div>
        <h2>${prevPhase?.name || ''} Complete!</h2>
      </div>
      <div class="surge-next-phase anim-in">
        <div class="enp-icon">${nextPhase.icon}</div>
        <h3>Next: ${nextPhase.name}</h3>
        <p>${nextPhase.description}</p>
        ${nextPhase.availableResources ? `
          <div class="enp-resources">
            ${Object.entries(nextPhase.availableResources).map(([k, v]) => {
              const rt = RESOURCE_TYPES[k];
              return `<span class="enp-res">${rt ? rt.icon : ''} ${rt ? rt.name : k} ×${v}</span>`;
            }).join('')}
          </div>
        ` : ''}
      </div>
      <button class="btn-primary anim-in" onclick="renderSurgePhase()">Continue →</button>
    </div>`;
}

// ---- Final Results ----
function showSurgeFinalResults() {
  const em = G.surge;
  if (!em) { G.screen = 'modes'; render(); return; }

  // Stop all SURGE timers
  stopTimer('surge_sieve');
  stopTimer('surge_sort');

  // Calculate preventable deaths
  let preventable = 0, totalDeaths = 0, survived = 0;
  em.patients.forEach(p => {
    if (!p.deterioration) { survived++; return; }
    if (p.deterioration.outcome === 'dead' || p.deterioration.treatedOutcome === 'dead') {
      totalDeaths++;
      return;
    }
    if (!p.treated && p.deterioration.outcome === 'death') {
      totalDeaths++;
      preventable++;
    } else {
      survived++;
    }
  });

  const totalPatients = em.patients.length;
  const survivalRate = Math.round((survived / totalPatients) * 100);
  const grade = preventable === 0 ? 'S' : preventable <= 1 ? 'A' : preventable <= 2 ? 'B' : 'C';

  // RPG integration
  G.modesCompleted.add('surge');
  if (preventable === 0) G.surgeZeroPD = true;
  advanceStoryAct('surge');
  addScore(preventable === 0 ? 2000 : 1000);
  addXP(300 - preventable * 50);
  checkAchievements();

  try { Tracker.endMode(survived); } catch(e) { console.warn('Tracker error:', e); }

  const gradeClass = grade === 'S' ? 's' : grade === 'A' ? 'a' : grade === 'B' ? 'b' : 'c';
  if (grade === 'S' || grade === 'A') { try { confetti(); } catch(e) {} }

  app.innerHTML = `
    <div class="screen surge-results-screen">
      <div class="surge-results-header anim-in">
        <div class="er-badge">🏥 SURGE CHAIN Complete</div>
        <h2>${em.scenario.title}</h2>
      </div>

      <div class="result-grade ${gradeClass} anim-in">Grade: ${grade}</div>

      <div class="surge-result-stats anim-in">
        <div class="ers-card">
          <div class="ers-val">${survived}</div>
          <div class="ers-label">Survived</div>
          <div class="ers-icon">💚</div>
        </div>
        <div class="ers-card death">
          <div class="ers-val">${totalDeaths}</div>
          <div class="ers-label">Deceased</div>
          <div class="ers-icon">💀</div>
        </div>
        <div class="ers-card ${preventable > 0 ? 'warn' : 'good'}">
          <div class="ers-val">${preventable}</div>
          <div class="ers-label">Preventable Deaths</div>
          <div class="ers-icon">${preventable > 0 ? '⚠️' : '✅'}</div>
        </div>
        <div class="ers-card">
          <div class="ers-val">${survivalRate}%</div>
          <div class="ers-label">Survival Rate</div>
          <div class="ers-icon">📊</div>
        </div>
      </div>

      <div class="surge-patient-outcomes anim-in">
        <h3>Patient Outcomes</h3>
        <div class="epo-list">
          ${em.patients.map(p => {
            const det = p.deterioration || {};
            const isDead = det.outcome === 'dead' || det.treatedOutcome === 'dead' || (!p.treated && det.outcome === 'death');
            const icon = isDead ? '💀' : p.treated ? '💚' : '⚠️';
            return `<div class="epo-row ${isDead ? 'dead' : 'alive'}">
              <span>${p.icon || '👤'}</span>
              <span>${p.name || 'Unknown'}</span>
              <span class="epo-triage triage-${p.currentTriage || 'yellow'}">${(p.currentTriage || '?').toUpperCase()}</span>
              <span>${icon}</span>
            </div>`;
          }).join('')}
        </div>
      </div>

      <div class="surge-debrief anim-in">
        <h3>📋 Debriefing</h3>
        <div class="debrief-text">
          ${preventable === 0 ? 'All savable patients were saved. A perfect chain from scene to hospital.' :
            preventable === 1 ? 'Nearly perfect. 1 preventable death occurred. Review time management and transport priority.' :
            `${preventable} preventable deaths occurred. Rapid treatment and transport of critical patients is key.`}
        </div>
      </div>

      <div class="result-actions anim-in">
        <button class="btn-primary" onclick="G.screen='modes';render();">Select Mission 🏠</button>
        <button class="btn-outline" onclick="G.screen='surgeSelect';render();">Other Scenarios 🔄</button>
      </div>
    </div>`;

  G.screen = 'surgeResults';
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  render();
});

// ============================================
// NEW GAME MODES: CBRNE Advanced / Tactical Medicine / Counter-Terrorism Medicine
// ============================================

// ---- HELPER: flatten CBRNE questions ----
function getCBRNEFlatQuestions() {
  const content = window.CBRNE_CONTENT;
  if (!content) return [];
  return Object.values(content.questions).flat();
}

// ============================================
// CBRNE Advanced QUIZ
// ============================================
function renderCBRNEAdv() {
  const total = (G.advQ || []).length;
  const q = (G.advQ || [])[G.advIdx];
  if (!q || G.advIdx >= total) { showCBRNEAdvHub(); return; }

  const mentorLine = G.advIdx === 0
    ? 'Expert quiz on 5 CBRNE threats! Testing your knowledge of Chemical, Biological, Radiological, Nuclear, and Explosive agents.'
    : G.advAnswered ? '' : rnd(CHARS.mentor.hints);

  app.innerHTML = `
    ${renderHUD('advTimer')}
    <div class="screen quiz-game">
      ${G.advIdx === 0 ? charBubble('mentor', mentorLine) : ''}
      <div class="quiz-progress-bar" style="position:relative">
        <button id="quizExitBtn" style="position:absolute;right:0;top:-2px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:#8b8fa3;padding:4px 12px;border-radius:8px;font-size:0.72rem;cursor:pointer">✕ Exit</button>
        <span class="quiz-pbar-num">${G.advIdx + 1}/${total}</span>
        <div class="pbar-track"><div class="pbar-fill" style="width:${(G.advIdx / total) * 100}%"></div></div>
      </div>
      <div class="quiz-q-card anim-in">
        ${q.category ? `<div style="font-size:0.72rem;color:var(--text-muted);margin-bottom:6px">☣️ ${q.category.toUpperCase()}</div>` : ''}
        <div class="quiz-q-text">${q.q}</div>
        <div class="quiz-opts">
          ${q.o.map((opt, i) => {
            const letter = String.fromCharCode(65 + i);
            let cls = '';
            if (G.advAnswered) {
              if (i === q.a) cls = 'correct';
              else if (i === G._advSelected && i !== q.a) cls = 'wrong';
            }
            return `<button class="q-opt ${cls}" onclick="answerCBRNEAdv(${i})" ${G.advAnswered ? 'disabled' : ''}>
              <span class="q-letter">${letter}</span>
              <span class="q-opt-text">${opt}</span>
            </button>`;
          }).join('')}
        </div>
        ${G.advAnswered ? `
          <div class="quiz-explanation">${q.exp || ''}</div>
          <button class="quiz-next-btn" onclick="nextCBRNEAdv()">Next Question →</button>
        ` : ''}
      </div>
    </div>`;

  var _exitBtn2 = document.getElementById('quizExitBtn');
  if (_exitBtn2) _exitBtn2.addEventListener('click', function() { G.screen = 'modeSelect'; stopAllTimers(); render(); });

  if (!G.advAnswered) {
    startCountdown('advTimer', 20 + getTimerBonus('cbrneAdv'), updateTimerDisplay, () => {
      G.advAnswered = true;
      G._advSelected = -1;
      updateStreak(false);
      sfx('wrong');
      shakeScreen();
      render();
    });
  }
}

function answerCBRNEAdv(idx) {
  if (G.advAnswered) return;
  G.advAnswered = true;
  G._advSelected = idx;
  stopTimer('advTimer');

  const q = G.advQ[G.advIdx];
  const correct = idx === q.a;

  Tracker.recordAnswer(`cbrneAdv_${G.advIdx}`, String(idx), correct);

  if (correct) {
    sfx('correct');
    flashScreen('green');
    const timeBonus = Math.max(0, G.advTimer * 5);
    addScore(100 + timeBonus);
    addXP(25);
    G.advScore++;
    updateStreak(true);
    G.totalCorrect++;
  } else {
    sfx('wrong');
    shakeScreen();
    addScore(-10);
    updateStreak(false);
  }
  checkAchievements();
  render();
}

function nextCBRNEAdv() {
  G.advIdx++;
  G.advAnswered = false;
  G._advSelected = undefined;
  Tracker.startQuestion();
  render();
}

function showCBRNEAdvHub() {
  stopTimer('advTimer');
  G.modesCompleted.add('cbrneAdv');
  const total = (G.advQ || []).length;
  const pct = Math.round(((G.advScore || 0) / Math.max(total, 1)) * 100);
  if (pct === 100 && total > 0) G.perfectModes++;
  const grade = getGrade(pct);
  const gradeClass = grade === 'S' ? 's' : grade === 'A' ? 'a' : grade === 'B' ? 'b' : 'c';
  Tracker.endMode(G.advScore || 0);
  checkAchievements();
  advanceStoryAct();
  if (grade === 'S' || grade === 'A') confetti();

  app.innerHTML = `
    <div class="screen results-screen">
      ${charBubble('mentor', grade === 'S' || grade === 'A' ? 'Target identified! CBRNE expert!' : 'Build your basics and try again!', { success: grade === 'S' || grade === 'A' })}
      <div class="result-big anim-in">☣️</div>
      <div class="result-sub">CBRNE Advanced Quiz Complete!</div>
      <div class="result-grade ${gradeClass} anim-in">Grade: ${grade}</div>
      <div class="result-stats anim-in">
        <div class="r-stat"><div class="val">${G.advScore || 0}/${total}</div><div class="lbl">Correct</div></div>
        <div class="r-stat"><div class="val">${pct}%</div><div class="lbl">Accuracy</div></div>
        <div class="r-stat"><div class="val">${G.maxStreak}</div><div class="lbl">Max Streak</div></div>
      </div>
      <div class="result-actions anim-in">
        <button class="btn-primary" onclick="enterMode('cbrneAdv')">🔄 Retry Quiz</button>
        <button class="btn-outline" onclick="startCBRNEAdvScenario()">📖 Scenario Mode</button>
        <button class="btn-outline" onclick="startCBRNEAdvBoss()">👹 Boss Battle</button>
        <button class="btn-outline" onclick="G.screen='modes';render();">🏠 Select Mission</button>
      </div>
    </div>`;
  G.screen = 'results';
}

function startCBRNEAdvScenario() {
  const content = window.CBRNE_CONTENT;
  if (!content || !content.scenarios || content.scenarios.length === 0) {
    alert('Cannot load CBRNE scenarios.'); return;
  }
  G.advScenIdx = 0;
  G.advScenStepIdx = 0;
  G.advScenScore = 0;
  G.advScenAnswered = false;
  G.screen = 'cbrneAdvScenario';
  Tracker.startMode('cbrneAdvScenario');
  render();
}

function startCBRNEAdvBoss() {
  const content = window.CBRNE_CONTENT;
  if (!content || !content.bossBattles || content.bossBattles.length === 0) {
    alert('Cannot load CBRNE Boss.'); return;
  }
  const boss = content.bossBattles[Math.floor(Math.random() * content.bossBattles.length)];
  // Flatten all phase questions into a single pool
  const phaseQs = boss.phases.flatMap(ph => {
    // Phase questions can be objects with q/o/a/exp or questionIds (references)
    if (ph.questions && Array.isArray(ph.questions)) return ph.questions;
    if (ph.questionIds && Array.isArray(ph.questionIds)) {
      return ph.questionIds.map(id => content.getQuestionById ? content.getQuestionById(id) : null).filter(Boolean);
    }
    return [];
  });
  G.advBoss = boss;
  G.advBossQ = phaseQs.length > 0 ? phaseQs.slice(0, 10) : [];
  G.advBossIdx = 0;
  G.advBossHp = boss.maxHp;
  G.advBossPlayerHp = 100;
  G.advBossScore = 0;
  G.screen = 'cbrneAdvBoss';
  Tracker.startMode('cbrneAdvBoss');
  render();
}

// ============================================
// CBRNE Advanced Scenario
// ============================================
function renderCBRNEAdvScenario() {
  const content = window.CBRNE_CONTENT;
  if (!content) { G.screen = 'modes'; render(); return; }
  const scenarios = content.scenarios;
  if (!scenarios || scenarios.length === 0) { G.screen = 'modes'; render(); return; }
  if (G.advScenIdx >= scenarios.length) { showCBRNEAdvScenarioResults(); return; }

  const sc = scenarios[G.advScenIdx];
  const steps = sc.steps || [];
  if (G.advScenStepIdx >= steps.length) {
    G.advScenIdx++;
    G.advScenStepIdx = 0;
    G.advScenAnswered = false;
    if (G.advScenIdx >= scenarios.length) { showCBRNEAdvScenarioResults(); return; }
    render(); return;
  }

  const step = steps[G.advScenStepIdx];

  app.innerHTML = `
    ${renderHUD('advScenTimer')}
    <div class="screen quiz-game">
      ${narrativePanel(`📍 <strong>${sc.title}</strong><br>Step ${G.advScenStepIdx + 1}/${steps.length}`, { type: 'danger', tag: 'CBRNE Scenario', tagClass: 'emergency', icon: '☣️' })}
      <div class="quiz-q-card anim-in" style="margin-top:12px">
        <div class="quiz-q-text" style="font-size:0.85rem;color:var(--text-muted);margin-bottom:10px">${step.narrative || ''}</div>
        <div class="quiz-q-text"><strong>${step.question || ''}</strong></div>
        <div class="quiz-opts">
          ${(step.options || []).map((opt, i) => {
            const letter = String.fromCharCode(65 + i);
            let cls = '';
            if (G.advScenAnswered) {
              if (opt.correct) cls = 'correct';
              else if (i === G._advScenSelected && !opt.correct) cls = 'wrong';
            }
            return `<button class="q-opt ${cls}" onclick="answerCBRNEAdvScenario(${i})" ${G.advScenAnswered ? 'disabled' : ''}>
              <span class="q-letter">${letter}</span>
              <span class="q-opt-text">${opt.text}</span>
            </button>`;
          }).join('')}
        </div>
        ${G.advScenAnswered ? `
          <div class="quiz-explanation">${(step.options[G._advScenSelected] || {}).feedback || ''}</div>
          <button class="quiz-next-btn" onclick="nextCBRNEAdvScenario()">Next Step →</button>
        ` : ''}
      </div>
    </div>`;

  if (!G.advScenAnswered) {
    startCountdown('advScenTimer', 30, updateTimerDisplay, () => {
      G.advScenAnswered = true;
      G._advScenSelected = -1;
      updateStreak(false);
      sfx('wrong');
      render();
    });
  }
}

function answerCBRNEAdvScenario(idx) {
  if (G.advScenAnswered) return;
  G.advScenAnswered = true;
  G._advScenSelected = idx;
  stopTimer('advScenTimer');

  const sc = window.CBRNE_CONTENT.scenarios[G.advScenIdx];
  const step = sc.steps[G.advScenStepIdx];
  const opt = step.options[idx];
  const correct = opt && opt.correct;

  Tracker.recordAnswer(`cbrneAdvScen_${G.advScenIdx}_${G.advScenStepIdx}`, String(idx), correct);

  if (correct) {
    sfx('correct');
    flashScreen('green');
    addScore(150);
    addXP(step.xp || 40);
    G.advScenScore++;
    updateStreak(true);
    G.totalCorrect++;
  } else {
    sfx('wrong');
    shakeScreen();
    addScore(-20);
    updateStreak(false);
  }
  checkAchievements();
  render();
}

function nextCBRNEAdvScenario() {
  G.advScenStepIdx++;
  G.advScenAnswered = false;
  G._advScenSelected = undefined;
  Tracker.startQuestion();
  render();
}

function showCBRNEAdvScenarioResults() {
  stopTimer('advScenTimer');
  G.modesCompleted.add('cbrneAdvScenario');
  const scenarios = window.CBRNE_CONTENT.scenarios;
  const totalSteps = scenarios.reduce((sum, sc) => sum + (sc.steps || []).length, 0);
  const pct = Math.round(((G.advScenScore || 0) / Math.max(totalSteps, 1)) * 100);
  const grade = getGrade(pct);
  const gradeClass = grade === 'S' ? 's' : grade === 'A' ? 'a' : grade === 'B' ? 'b' : 'c';
  Tracker.endMode(G.advScenScore || 0);
  if (grade === 'S' || grade === 'A') confetti();

  app.innerHTML = `
    <div class="screen results-screen">
      ${charBubble('mentor', grade === 'S' || grade === 'A' ? 'Perfectly executed CBRNE field response!' : 'Go through the scenario again to improve!', { success: grade === 'S' || grade === 'A' })}
      <div class="result-big anim-in">📖</div>
      <div class="result-sub">CBRNE Scenario Complete!</div>
      <div class="result-grade ${gradeClass} anim-in">Grade: ${grade}</div>
      <div class="result-stats anim-in">
        <div class="r-stat"><div class="val">${G.advScenScore || 0}/${totalSteps}</div><div class="lbl">Correct</div></div>
        <div class="r-stat"><div class="val">${pct}%</div><div class="lbl">Accuracy</div></div>
        <div class="r-stat"><div class="val">${G.score}</div><div class="lbl">Total Score</div></div>
      </div>
      <div class="result-actions anim-in">
        <button class="btn-primary" onclick="startCBRNEAdvScenario()">🔄 Retry Scenario</button>
        <button class="btn-outline" onclick="startCBRNEAdvBoss()">👹 Boss Battle</button>
        <button class="btn-outline" onclick="G.screen='modes';render();">🏠 Select Mission</button>
      </div>
    </div>`;
  G.screen = 'results';
}

// ============================================
// CBRNE Advanced Boss Battle
// ============================================
function renderCBRNEAdvBoss() {
  const boss = G.advBoss;
  if (!boss) { G.screen = 'cbrneAdv'; render(); return; }
  const q = (G.advBossQ || [])[G.advBossIdx];
  if (!q || G.advBossIdx >= (G.advBossQ || []).length) { showCBRNEAdvBossResults(); return; }

  const hpPct = Math.round(((G.advBossHp || 0) / (boss.maxHp || 100)) * 100);
  const playerHpPct = G.advBossPlayerHp || 0;

  app.innerHTML = `
    ${renderHUD('advBossTimer')}
    <div class="screen quiz-game">
      <div class="boss-banner heartbeat-effect" style="background:linear-gradient(135deg,#1a0a0a,#2d0a0a)">
        <h2>${boss.emoji || '👹'} ${boss.name}</h2>
        <div style="display:flex;gap:12px;align-items:center;justify-content:center;margin-top:8px">
          <span style="font-size:0.8rem;color:var(--text-muted)">Boss HP</span>
          <div style="flex:1;background:#333;border-radius:4px;height:10px;max-width:200px">
            <div style="width:${hpPct}%;background:var(--red);height:10px;border-radius:4px;transition:width 0.3s"></div>
          </div>
          <span style="font-size:0.85rem;color:var(--red)">${G.advBossHp}/${boss.maxHp}</span>
        </div>
        <div style="display:flex;gap:12px;align-items:center;justify-content:center;margin-top:4px">
          <span style="font-size:0.8rem;color:var(--text-muted)">My HP</span>
          <div style="flex:1;background:#333;border-radius:4px;height:8px;max-width:200px">
            <div style="width:${playerHpPct}%;background:var(--green);height:8px;border-radius:4px;transition:width 0.3s"></div>
          </div>
          <span style="font-size:0.85rem;color:var(--green)">${playerHpPct}</span>
        </div>
        <p style="font-size:0.75rem;margin-top:4px">Question ${G.advBossIdx + 1} / ${(G.advBossQ || []).length}</p>
      </div>
      ${charBubble('villain', rnd(CHARS.villain.taunts), { right: true, urgent: true, expression: '👿', delay: 0 })}
      <div class="quiz-q-card anim-in">
        <div class="quiz-q-text">${q.q}</div>
        <div class="quiz-opts">
          ${(q.o || []).map((opt, i) => {
            const letter = String.fromCharCode(65 + i);
            return `<button class="q-opt" onclick="answerCBRNEAdvBoss(${i})">
              <span class="q-letter">${letter}</span>
              <span class="q-opt-text">${opt}</span>
            </button>`;
          }).join('')}
        </div>
      </div>
    </div>`;

  showDangerPulse(true);
  startCountdown('advBossTimer', 15, updateTimerDisplay, () => {
    sfx('wrong');
    shakeScreen();
    updateStreak(false);
    G.advBossPlayerHp = Math.max(0, (G.advBossPlayerHp || 100) - 20);
    G.advBossIdx++;
    if (G.advBossPlayerHp <= 0) { showCBRNEAdvBossResults(); return; }
    render();
  });
}

function answerCBRNEAdvBoss(idx) {
  stopTimer('advBossTimer');
  const q = G.advBossQ[G.advBossIdx];
  const correct = idx === q.a;

  Tracker.recordAnswer(`cbrneAdvBoss_${G.advBossIdx}`, String(idx), correct);

  if (correct) {
    sfx('correct');
    flashScreen('green');
    showImpact('green');
    addScore(250);
    addXP(60);
    G.advBossScore++;
    updateStreak(true);
    G.totalCorrect++;
    const dmg = Math.floor((G.advBoss.maxHp || 100) / Math.max((G.advBossQ || []).length, 1));
    G.advBossHp = Math.max(0, (G.advBossHp || 0) - dmg);
  } else {
    sfx('wrong');
    shakeScreen();
    showImpact();
    addScore(-50);
    updateStreak(false);
    G.advBossPlayerHp = Math.max(0, (G.advBossPlayerHp || 100) - 15);
  }
  checkAchievements();
  showSpeedLines();

  const fbLayer = document.createElement('div');
  fbLayer.className = 'feedback-layer show';
  fbLayer.innerHTML = `
    <div class="fb-card">
      <div class="fb-icon ${correct ? 'correct' : 'wrong'}">${correct ? '🏆' : '💀'}</div>
      <h2>${correct ? 'Boss Hit!' : 'Boss Counterattack!'}</h2>
      <div class="fb-char-section">
        <div class="fb-char-avatar">${correct ? CHARS.mentor.emoji : CHARS.villain.emoji}</div>
        <div class="fb-char-dialogue">
          <strong>${correct ? CHARS.mentor.name : CHARS.villain.name}:</strong>
          ${correct ? rnd(CHARS.mentor.correct) : 'That record is not enough...'}
          ${q.exp ? `<br><br>${q.exp}` : ''}
        </div>
      </div>
      <div class="fb-points ${correct ? 'plus' : 'minus'}">${correct ? '+250' : '-50'}</div>
      <button class="fb-next" onclick="nextCBRNEAdvBoss()">Next →</button>
    </div>`;
  document.body.appendChild(fbLayer);
}

function nextCBRNEAdvBoss() {
  document.querySelector('.feedback-layer')?.remove();
  G.advBossIdx++;
  if (G.advBossPlayerHp <= 0 || G.advBossHp <= 0) { showCBRNEAdvBossResults(); return; }
  Tracker.startQuestion();
  render();
}

function showCBRNEAdvBossResults() {
  showDangerPulse(false);
  stopTimer('advBossTimer');
  const total = (G.advBossQ || []).length;
  const pct = Math.round(((G.advBossScore || 0) / Math.max(total, 1)) * 100);
  const win = (G.advBossHp || 0) <= 0 || pct >= 70;
  const grade = getGrade(pct);
  const gradeClass = grade === 'S' ? 's' : grade === 'A' ? 'a' : grade === 'B' ? 'b' : 'c';
  G.bossGrade = grade;
  Tracker.endMode(G.advBossScore || 0);
  checkAchievements();
  if (win) { confetti(); addXP(300); addScore(500); }

  app.innerHTML = `
    <div class="screen results-screen">
      <div class="result-big anim-in">${win ? '🏆' : '💀'}</div>
      <div class="result-sub">${win ? G.advBoss.name + ' Defeated!' : 'Defeated by the Boss...'}</div>
      <div class="result-grade ${gradeClass} anim-in">Grade: ${grade}</div>
      ${win && G.advBoss.reward ? `<div class="quiz-explanation" style="margin:12px 0">🏅 Reward: ${G.advBoss.reward.title || ''} +${G.advBoss.reward.xp || 0} XP</div>` : ''}
      <div class="result-stats anim-in">
        <div class="r-stat"><div class="val">${G.advBossScore || 0}/${total}</div><div class="lbl">Correct</div></div>
        <div class="r-stat"><div class="val">${pct}%</div><div class="lbl">Accuracy</div></div>
        <div class="r-stat"><div class="val">${G.advBossHp}</div><div class="lbl">Boss HP Remaining</div></div>
      </div>
      <div class="result-actions anim-in">
        <button class="btn-primary" onclick="startCBRNEAdvBoss()">🔄 Retry Boss</button>
        <button class="btn-outline" onclick="enterMode('cbrneAdv')">☣️ CBRNE Quiz</button>
        <button class="btn-outline" onclick="G.screen='modes';render();">🏠 Select Mission</button>
      </div>
    </div>`;
  G.screen = 'results';
}

// ============================================
// Tactical Medicine QUIZ
// ============================================
function renderTactical() {
  const total = (G.tacQ || []).length;
  const q = (G.tacQ || [])[G.tacIdx];
  if (!q || G.tacIdx >= total) { showTacticalHub(); return; }

  const mentorLine = G.tacIdx === 0
    ? 'Testing your TCCC/TECC tactical field emergency medicine skills! Apply the MARCH protocol and tactical response directly!'
    : G.tacAnswered ? '' : rnd(CHARS.mentor.hints);

  app.innerHTML = `
    ${renderHUD('tacTimer')}
    <div class="screen quiz-game">
      ${G.tacIdx === 0 ? charBubble('mentor', mentorLine) : ''}
      <div class="quiz-progress-bar" style="position:relative">
        <button id="quizExitBtn" style="position:absolute;right:0;top:-2px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:#8b8fa3;padding:4px 12px;border-radius:8px;font-size:0.72rem;cursor:pointer">✕ Exit</button>
        <span class="quiz-pbar-num">${G.tacIdx + 1}/${total}</span>
        <div class="pbar-track"><div class="pbar-fill" style="width:${(G.tacIdx / total) * 100}%"></div></div>
      </div>
      <div class="quiz-q-card anim-in">
        ${q.category ? `<div style="font-size:0.72rem;color:var(--text-muted);margin-bottom:6px">🎯 ${q.category.toUpperCase()}</div>` : ''}
        <div class="quiz-q-text">${q.q}</div>
        <div class="quiz-opts">
          ${(q.o || []).map((opt, i) => {
            const letter = String.fromCharCode(65 + i);
            let cls = '';
            if (G.tacAnswered) {
              if (i === q.a) cls = 'correct';
              else if (i === G._tacSelected && i !== q.a) cls = 'wrong';
            }
            return `<button class="q-opt ${cls}" onclick="answerTactical(${i})" ${G.tacAnswered ? 'disabled' : ''}>
              <span class="q-letter">${letter}</span>
              <span class="q-opt-text">${opt}</span>
            </button>`;
          }).join('')}
        </div>
        ${G.tacAnswered ? `
          <div class="quiz-explanation">${q.exp || ''}</div>
          <button class="quiz-next-btn" onclick="nextTactical()">Next Question →</button>
        ` : ''}
      </div>
    </div>`;

  var _exitBtn3 = document.getElementById('quizExitBtn');
  if (_exitBtn3) _exitBtn3.addEventListener('click', function() { G.screen = 'modeSelect'; stopAllTimers(); render(); });

  if (!G.tacAnswered) {
    startCountdown('tacTimer', 20 + getTimerBonus('tactical'), updateTimerDisplay, () => {
      G.tacAnswered = true;
      G._tacSelected = -1;
      updateStreak(false);
      sfx('wrong');
      shakeScreen();
      render();
    });
  }
}

function answerTactical(idx) {
  if (G.tacAnswered) return;
  G.tacAnswered = true;
  G._tacSelected = idx;
  stopTimer('tacTimer');

  const q = G.tacQ[G.tacIdx];
  const correct = idx === q.a;

  Tracker.recordAnswer(`tactical_q_${G.tacIdx}`, String(idx), correct);

  if (correct) {
    sfx('correct');
    flashScreen('green');
    const timeBonus = Math.max(0, G.tacTimer * 5);
    addScore(100 + timeBonus);
    addXP(25);
    G.tacScore++;
    updateStreak(true);
    G.totalCorrect++;
  } else {
    sfx('wrong');
    shakeScreen();
    addScore(-10);
    updateStreak(false);
  }
  checkAchievements();
  render();
}

function nextTactical() {
  G.tacIdx++;
  G.tacAnswered = false;
  G._tacSelected = undefined;
  Tracker.startQuestion();
  render();
}

function showTacticalHub() {
  stopTimer('tacTimer');
  G.modesCompleted.add('tactical');
  const total = (G.tacQ || []).length;
  const pct = Math.round(((G.tacScore || 0) / Math.max(total, 1)) * 100);
  if (pct === 100 && total > 0) G.perfectModes++;
  const grade = getGrade(pct);
  const gradeClass = grade === 'S' ? 's' : grade === 'A' ? 'a' : grade === 'B' ? 'b' : 'c';
  Tracker.endMode(G.tacScore || 0);
  checkAchievements();
  advanceStoryAct();
  if (grade === 'S' || grade === 'A') confetti();

  app.innerHTML = `
    <div class="screen results-screen">
      ${charBubble('mentor', grade === 'S' || grade === 'A' ? 'Ace of the tactical field! TCCC Master!' : 'Build your basics and try again!', { success: grade === 'S' || grade === 'A' })}
      <div class="result-big anim-in">🎯</div>
      <div class="result-sub">Tactical Medicine Quiz Complete!</div>
      <div class="result-grade ${gradeClass} anim-in">Grade: ${grade}</div>
      <div class="result-stats anim-in">
        <div class="r-stat"><div class="val">${G.tacScore || 0}/${total}</div><div class="lbl">Correct</div></div>
        <div class="r-stat"><div class="val">${pct}%</div><div class="lbl">Accuracy</div></div>
        <div class="r-stat"><div class="val">${G.maxStreak}</div><div class="lbl">Max Streak</div></div>
      </div>
      <div class="result-actions anim-in">
        <button class="btn-primary" onclick="enterMode('tactical')">🔄 Retry Quiz</button>
        <button class="btn-outline" onclick="startTacticalScenario()">📖 Scenario Mode</button>
        <button class="btn-outline" onclick="startTacticalBoss()">👹 Boss Battle</button>
        <button class="btn-outline" onclick="G.screen='modes';render();">🏠 Select Mission</button>
      </div>
    </div>`;
  G.screen = 'results';
}

function startTacticalScenario() {
  const content = window.TACTICAL_CTM_CONTENT;
  if (!content || !content.tacticalScenarios || content.tacticalScenarios.length === 0) {
    alert('Cannot load Tactical Medicine scenarios.'); return;
  }
  G.tacScenIdx = 0;
  G.tacScenStepIdx = 0;
  G.tacScenScore = 0;
  G.tacScenAnswered = false;
  G.screen = 'tacticalScenario';
  Tracker.startMode('tacticalScenario');
  render();
}

function startTacticalBoss() {
  const content = window.TACTICAL_CTM_CONTENT;
  if (!content || !content.bossBattles || content.bossBattles.length === 0) {
    alert('Cannot load Tactical Boss.'); return;
  }
  const tacticalBosses = content.bossBattles.filter(b => b.category === 'tactical');
  const bossPool = tacticalBosses.length > 0 ? tacticalBosses : content.bossBattles;
  const boss = bossPool[Math.floor(Math.random() * bossPool.length)];
  const phaseQs = boss.phases.flatMap(ph => ph.questions || []);
  G.tacBoss = boss;
  G.tacBossQ = phaseQs.slice(0, 10);
  G.tacBossIdx = 0;
  G.tacBossHp = boss.maxHp;
  G.tacBossPlayerHp = 100;
  G.tacBossScore = 0;
  G.screen = 'tacticalBoss';
  Tracker.startMode('tacticalBoss');
  render();
}

// ============================================
// Tactical Medicine Scenario
// ============================================
function renderTacticalScenario() {
  const content = window.TACTICAL_CTM_CONTENT;
  if (!content) { G.screen = 'modes'; render(); return; }
  const scenarios = content.tacticalScenarios;
  if (!scenarios || scenarios.length === 0) { G.screen = 'modes'; render(); return; }
  if (G.tacScenIdx >= scenarios.length) { showTacticalScenarioResults(); return; }

  const sc = scenarios[G.tacScenIdx];
  const steps = sc.steps || [];
  if (G.tacScenStepIdx >= steps.length) {
    G.tacScenIdx++;
    G.tacScenStepIdx = 0;
    G.tacScenAnswered = false;
    if (G.tacScenIdx >= scenarios.length) { showTacticalScenarioResults(); return; }
    render(); return;
  }

  const step = steps[G.tacScenStepIdx];
  const choices = step.choices || step.options || [];

  app.innerHTML = `
    ${renderHUD('tacScenTimer')}
    <div class="screen quiz-game">
      ${narrativePanel(`🎯 <strong>${sc.title}</strong><br>Step ${G.tacScenStepIdx + 1}/${steps.length}`, { type: 'danger', tag: 'Tactical Medicine Scenario', tagClass: 'emergency', icon: '🎯' })}
      <div class="quiz-q-card anim-in" style="margin-top:12px">
        <div class="quiz-q-text" style="font-size:0.85rem;color:var(--text-muted);margin-bottom:10px">${step.situation || step.narrative || ''}</div>
        <div class="quiz-q-text"><strong>${step.question || ''}</strong></div>
        <div class="quiz-opts">
          ${choices.map((opt, i) => {
            const letter = String.fromCharCode(65 + i);
            const optText = opt.text || '';
            const isCorrect = (opt.correct === true) || (typeof step.correctChoice !== 'undefined' && i === step.correctChoice) || (opt.outcome === 'good');
            let cls = '';
            if (G.tacScenAnswered) {
              if (isCorrect) cls = 'correct';
              else if (i === G._tacScenSelected && !isCorrect) cls = 'wrong';
            }
            return `<button class="q-opt ${cls}" onclick="answerTacticalScenario(${i})" ${G.tacScenAnswered ? 'disabled' : ''}>
              <span class="q-letter">${letter}</span>
              <span class="q-opt-text">${optText}</span>
            </button>`;
          }).join('')}
        </div>
        ${G.tacScenAnswered ? `
          <div class="quiz-explanation">${(choices[G._tacScenSelected] || {}).feedback || ''}</div>
          ${step.medicalInfo ? `<div class="quiz-explanation" style="border-left-color:var(--blue)">💡 ${step.medicalInfo}</div>` : ''}
          <button class="quiz-next-btn" onclick="nextTacticalScenario()">Next Step →</button>
        ` : ''}
      </div>
    </div>`;

  if (!G.tacScenAnswered) {
    startCountdown('tacScenTimer', 30, updateTimerDisplay, () => {
      G.tacScenAnswered = true;
      G._tacScenSelected = -1;
      updateStreak(false);
      sfx('wrong');
      render();
    });
  }
}

function answerTacticalScenario(idx) {
  if (G.tacScenAnswered) return;
  G.tacScenAnswered = true;
  G._tacScenSelected = idx;
  stopTimer('tacScenTimer');

  const sc = window.TACTICAL_CTM_CONTENT.tacticalScenarios[G.tacScenIdx];
  const step = sc.steps[G.tacScenStepIdx];
  const choices = step.choices || step.options || [];
  const opt = choices[idx];
  const correct = opt && (opt.correct === true || (typeof step.correctChoice !== 'undefined' && idx === step.correctChoice) || opt.outcome === 'good');

  Tracker.recordAnswer(`tacScen_${G.tacScenIdx}_${G.tacScenStepIdx}`, String(idx), correct);

  if (correct) {
    sfx('correct');
    flashScreen('green');
    addScore(150);
    addXP(40);
    G.tacScenScore++;
    updateStreak(true);
    G.totalCorrect++;
  } else {
    sfx('wrong');
    shakeScreen();
    addScore(-20);
    updateStreak(false);
  }
  checkAchievements();
  render();
}

function nextTacticalScenario() {
  G.tacScenStepIdx++;
  G.tacScenAnswered = false;
  G._tacScenSelected = undefined;
  Tracker.startQuestion();
  render();
}

function showTacticalScenarioResults() {
  stopTimer('tacScenTimer');
  G.modesCompleted.add('tacticalScenario');
  const scenarios = window.TACTICAL_CTM_CONTENT.tacticalScenarios;
  const totalSteps = scenarios.reduce((sum, sc) => sum + (sc.steps || []).length, 0);
  const pct = Math.round(((G.tacScenScore || 0) / Math.max(totalSteps, 1)) * 100);
  const grade = getGrade(pct);
  const gradeClass = grade === 'S' ? 's' : grade === 'A' ? 'a' : grade === 'B' ? 'b' : 'c';
  Tracker.endMode(G.tacScenScore || 0);
  if (grade === 'S' || grade === 'A') confetti();

  app.innerHTML = `
    <div class="screen results-screen">
      ${charBubble('mentor', grade === 'S' || grade === 'A' ? 'Complete mastery of the tactical field!' : 'Strengthen your resolve and try again!', { success: grade === 'S' || grade === 'A' })}
      <div class="result-big anim-in">📖</div>
      <div class="result-sub">Tactical Medicine Scenario Complete!</div>
      <div class="result-grade ${gradeClass} anim-in">Grade: ${grade}</div>
      <div class="result-stats anim-in">
        <div class="r-stat"><div class="val">${G.tacScenScore || 0}/${totalSteps}</div><div class="lbl">Correct</div></div>
        <div class="r-stat"><div class="val">${pct}%</div><div class="lbl">Accuracy</div></div>
        <div class="r-stat"><div class="val">${G.score}</div><div class="lbl">Total Score</div></div>
      </div>
      <div class="result-actions anim-in">
        <button class="btn-primary" onclick="startTacticalScenario()">🔄 Retry Scenario</button>
        <button class="btn-outline" onclick="startTacticalBoss()">👹 Boss Battle</button>
        <button class="btn-outline" onclick="G.screen='modes';render();">🏠 Select Mission</button>
      </div>
    </div>`;
  G.screen = 'results';
}

// ============================================
// Tactical Medicine Boss Battle
// ============================================
function renderTacticalBoss() {
  const boss = G.tacBoss;
  if (!boss) { G.screen = 'tactical'; render(); return; }
  const q = (G.tacBossQ || [])[G.tacBossIdx];
  if (!q || G.tacBossIdx >= (G.tacBossQ || []).length) { showTacticalBossResults(); return; }

  const hpPct = Math.round(((G.tacBossHp || 0) / (boss.maxHp || 100)) * 100);
  const playerHpPct = G.tacBossPlayerHp || 0;

  app.innerHTML = `
    ${renderHUD('tacBossTimer')}
    <div class="screen quiz-game">
      <div class="boss-banner heartbeat-effect" style="background:linear-gradient(135deg,#0a1a0a,#0a2d0a)">
        <h2>${boss.emoji || '🎯'} ${boss.name}</h2>
        <div style="display:flex;gap:12px;align-items:center;justify-content:center;margin-top:8px">
          <span style="font-size:0.8rem;color:var(--text-muted)">Boss HP</span>
          <div style="flex:1;background:#333;border-radius:4px;height:10px;max-width:200px">
            <div style="width:${hpPct}%;background:var(--red);height:10px;border-radius:4px;transition:width 0.3s"></div>
          </div>
          <span style="font-size:0.85rem;color:var(--red)">${G.tacBossHp}/${boss.maxHp}</span>
        </div>
        <div style="display:flex;gap:12px;align-items:center;justify-content:center;margin-top:4px">
          <span style="font-size:0.8rem;color:var(--text-muted)">My HP</span>
          <div style="flex:1;background:#333;border-radius:4px;height:8px;max-width:200px">
            <div style="width:${playerHpPct}%;background:var(--green);height:8px;border-radius:4px;transition:width 0.3s"></div>
          </div>
          <span style="font-size:0.85rem;color:var(--green)">${playerHpPct}</span>
        </div>
        <p style="font-size:0.75rem;margin-top:4px">Question ${G.tacBossIdx + 1} / ${(G.tacBossQ || []).length}</p>
      </div>
      ${charBubble('villain', rnd(CHARS.villain.taunts), { right: true, urgent: true, expression: '👿', delay: 0 })}
      <div class="quiz-q-card anim-in">
        <div class="quiz-q-text">${q.q}</div>
        <div class="quiz-opts">
          ${(q.o || []).map((opt, i) => {
            const letter = String.fromCharCode(65 + i);
            return `<button class="q-opt" onclick="answerTacticalBoss(${i})">
              <span class="q-letter">${letter}</span>
              <span class="q-opt-text">${opt}</span>
            </button>`;
          }).join('')}
        </div>
      </div>
    </div>`;

  showDangerPulse(true);
  startCountdown('tacBossTimer', 15, updateTimerDisplay, () => {
    sfx('wrong');
    shakeScreen();
    updateStreak(false);
    G.tacBossPlayerHp = Math.max(0, (G.tacBossPlayerHp || 100) - 20);
    G.tacBossIdx++;
    if (G.tacBossPlayerHp <= 0) { showTacticalBossResults(); return; }
    render();
  });
}

function answerTacticalBoss(idx) {
  stopTimer('tacBossTimer');
  const q = G.tacBossQ[G.tacBossIdx];
  const correct = idx === q.a;

  Tracker.recordAnswer(`tacBoss_${G.tacBossIdx}`, String(idx), correct);

  if (correct) {
    sfx('correct');
    flashScreen('green');
    showImpact('green');
    addScore(250);
    addXP(60);
    G.tacBossScore++;
    updateStreak(true);
    G.totalCorrect++;
    const dmg = Math.floor((G.tacBoss.maxHp || 100) / Math.max((G.tacBossQ || []).length, 1));
    G.tacBossHp = Math.max(0, (G.tacBossHp || 0) - dmg);
  } else {
    sfx('wrong');
    shakeScreen();
    showImpact();
    addScore(-50);
    updateStreak(false);
    G.tacBossPlayerHp = Math.max(0, (G.tacBossPlayerHp || 100) - 15);
  }
  checkAchievements();
  showSpeedLines();

  const fbLayer = document.createElement('div');
  fbLayer.className = 'feedback-layer show';
  fbLayer.innerHTML = `
    <div class="fb-card">
      <div class="fb-icon ${correct ? 'correct' : 'wrong'}">${correct ? '🏆' : '💀'}</div>
      <h2>${correct ? 'Boss Hit!' : 'Boss Counterattack!'}</h2>
      <div class="fb-char-section">
        <div class="fb-char-avatar">${correct ? CHARS.mentor.emoji : CHARS.villain.emoji}</div>
        <div class="fb-char-dialogue">
          <strong>${correct ? CHARS.mentor.name : CHARS.villain.name}:</strong>
          ${correct ? rnd(CHARS.mentor.correct) : 'That record is not enough...'}
          ${q.exp ? `<br><br>${q.exp}` : ''}
        </div>
      </div>
      <div class="fb-points ${correct ? 'plus' : 'minus'}">${correct ? '+250' : '-50'}</div>
      <button class="fb-next" onclick="nextTacticalBoss()">Next →</button>
    </div>`;
  document.body.appendChild(fbLayer);
}

function nextTacticalBoss() {
  document.querySelector('.feedback-layer')?.remove();
  G.tacBossIdx++;
  if (G.tacBossPlayerHp <= 0 || G.tacBossHp <= 0) { showTacticalBossResults(); return; }
  Tracker.startQuestion();
  render();
}

function showTacticalBossResults() {
  showDangerPulse(false);
  stopTimer('tacBossTimer');
  const total = (G.tacBossQ || []).length;
  const pct = Math.round(((G.tacBossScore || 0) / Math.max(total, 1)) * 100);
  const win = (G.tacBossHp || 0) <= 0 || pct >= 70;
  const grade = getGrade(pct);
  const gradeClass = grade === 'S' ? 's' : grade === 'A' ? 'a' : grade === 'B' ? 'b' : 'c';
  G.bossGrade = grade;
  Tracker.endMode(G.tacBossScore || 0);
  checkAchievements();
  if (win) { confetti(); addXP(300); addScore(500); }

  app.innerHTML = `
    <div class="screen results-screen">
      <div class="result-big anim-in">${win ? '🏆' : '💀'}</div>
      <div class="result-sub">${win ? G.tacBoss.name + ' Defeated!' : 'Defeated by the Boss...'}</div>
      <div class="result-grade ${gradeClass} anim-in">Grade: ${grade}</div>
      ${win && G.tacBoss.reward ? `<div class="quiz-explanation" style="margin:12px 0">🏅 Reward: ${G.tacBoss.reward.badge || ''}</div>` : ''}
      <div class="result-stats anim-in">
        <div class="r-stat"><div class="val">${G.tacBossScore || 0}/${total}</div><div class="lbl">Correct</div></div>
        <div class="r-stat"><div class="val">${pct}%</div><div class="lbl">Accuracy</div></div>
        <div class="r-stat"><div class="val">${G.tacBossHp}</div><div class="lbl">Boss HP Remaining</div></div>
      </div>
      <div class="result-actions anim-in">
        <button class="btn-primary" onclick="startTacticalBoss()">🔄 Retry Boss</button>
        <button class="btn-outline" onclick="enterMode('tactical')">🎯 Tactical Medicine Quiz</button>
        <button class="btn-outline" onclick="G.screen='modes';render();">🏠 Select Mission</button>
      </div>
    </div>`;
  G.screen = 'results';
}

// ============================================
// Counter-Terrorism Medicine QUIZ
// ============================================
function renderCTM() {
  const total = (G.ctmQ || []).length;
  const q = (G.ctmQ || [])[G.ctmIdx];
  if (!q || G.ctmIdx >= total) { showCTMHub(); return; }

  const mentorLine = G.ctmIdx === 0
    ? 'Expert Counter-Terrorism Medicine (CTM) quiz! Apply threat identification, CBRN response, and hospital protection!'
    : G.ctmAnswered ? '' : rnd(CHARS.mentor.hints);

  app.innerHTML = `
    ${renderHUD('ctmTimer')}
    <div class="screen quiz-game">
      ${G.ctmIdx === 0 ? charBubble('mentor', mentorLine) : ''}
      <div class="quiz-progress-bar" style="position:relative">
        <button id="quizExitBtn" style="position:absolute;right:0;top:-2px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:#8b8fa3;padding:4px 12px;border-radius:8px;font-size:0.72rem;cursor:pointer">✕ Exit</button>
        <span class="quiz-pbar-num">${G.ctmIdx + 1}/${total}</span>
        <div class="pbar-track"><div class="pbar-fill" style="width:${(G.ctmIdx / total) * 100}%"></div></div>
      </div>
      <div class="quiz-q-card anim-in">
        ${q.category ? `<div style="font-size:0.72rem;color:var(--text-muted);margin-bottom:6px">🛡️ ${q.category.toUpperCase()}</div>` : ''}
        <div class="quiz-q-text">${q.q}</div>
        <div class="quiz-opts">
          ${(q.o || []).map((opt, i) => {
            const letter = String.fromCharCode(65 + i);
            let cls = '';
            if (G.ctmAnswered) {
              if (i === q.a) cls = 'correct';
              else if (i === G._ctmSelected && i !== q.a) cls = 'wrong';
            }
            return `<button class="q-opt ${cls}" onclick="answerCTM(${i})" ${G.ctmAnswered ? 'disabled' : ''}>
              <span class="q-letter">${letter}</span>
              <span class="q-opt-text">${opt}</span>
            </button>`;
          }).join('')}
        </div>
        ${G.ctmAnswered ? `
          <div class="quiz-explanation">${q.exp || ''}</div>
          <button class="quiz-next-btn" onclick="nextCTM()">Next Question →</button>
        ` : ''}
      </div>
    </div>`;

  var _exitBtn4 = document.getElementById('quizExitBtn');
  if (_exitBtn4) _exitBtn4.addEventListener('click', function() { G.screen = 'modeSelect'; stopAllTimers(); render(); });

  if (!G.ctmAnswered) {
    startCountdown('ctmTimer', 20 + getTimerBonus('ctm'), updateTimerDisplay, () => {
      G.ctmAnswered = true;
      G._ctmSelected = -1;
      updateStreak(false);
      sfx('wrong');
      shakeScreen();
      render();
    });
  }
}

function answerCTM(idx) {
  if (G.ctmAnswered) return;
  G.ctmAnswered = true;
  G._ctmSelected = idx;
  stopTimer('ctmTimer');

  const q = G.ctmQ[G.ctmIdx];
  const correct = idx === q.a;

  Tracker.recordAnswer(`ctm_q_${G.ctmIdx}`, String(idx), correct);

  if (correct) {
    sfx('correct');
    flashScreen('green');
    const timeBonus = Math.max(0, G.ctmTimer * 5);
    addScore(100 + timeBonus);
    addXP(25);
    G.ctmScore++;
    updateStreak(true);
    G.totalCorrect++;
  } else {
    sfx('wrong');
    shakeScreen();
    addScore(-10);
    updateStreak(false);
  }
  checkAchievements();
  render();
}

function nextCTM() {
  G.ctmIdx++;
  G.ctmAnswered = false;
  G._ctmSelected = undefined;
  Tracker.startQuestion();
  render();
}

function showCTMHub() {
  stopTimer('ctmTimer');
  G.modesCompleted.add('ctm');
  const total = (G.ctmQ || []).length;
  const pct = Math.round(((G.ctmScore || 0) / Math.max(total, 1)) * 100);
  if (pct === 100 && total > 0) G.perfectModes++;
  const grade = getGrade(pct);
  const gradeClass = grade === 'S' ? 's' : grade === 'A' ? 'a' : grade === 'B' ? 'b' : 'c';
  Tracker.endMode(G.ctmScore || 0);
  checkAchievements();
  advanceStoryAct();
  if (grade === 'S' || grade === 'A') confetti();

  app.innerHTML = `
    <div class="screen results-screen">
      ${charBubble('mentor', grade === 'S' || grade === 'A' ? 'Counter-Terrorism Medicine expert! Excellent!' : 'Build your basics and try again!', { success: grade === 'S' || grade === 'A' })}
      <div class="result-big anim-in">🛡️</div>
      <div class="result-sub">Counter-Terrorism Medicine Quiz Complete!</div>
      <div class="result-grade ${gradeClass} anim-in">Grade: ${grade}</div>
      <div class="result-stats anim-in">
        <div class="r-stat"><div class="val">${G.ctmScore || 0}/${total}</div><div class="lbl">Correct</div></div>
        <div class="r-stat"><div class="val">${pct}%</div><div class="lbl">Accuracy</div></div>
        <div class="r-stat"><div class="val">${G.maxStreak}</div><div class="lbl">Max Streak</div></div>
      </div>
      <div class="result-actions anim-in">
        <button class="btn-primary" onclick="enterMode('ctm')">🔄 Retry Quiz</button>
        <button class="btn-outline" onclick="startCTMScenario()">📖 Scenario Mode</button>
        <button class="btn-outline" onclick="startCTMBoss()">👹 Boss Battle</button>
        <button class="btn-outline" onclick="G.screen='modes';render();">🏠 Select Mission</button>
      </div>
    </div>`;
  G.screen = 'results';
}

function startCTMScenario() {
  const content = window.TACTICAL_CTM_CONTENT;
  if (!content || !content.ctmScenarios || content.ctmScenarios.length === 0) {
    alert('Cannot load Counter-Terrorism Medicine scenarios.'); return;
  }
  G.ctmScenIdx = 0;
  G.ctmScenStepIdx = 0;
  G.ctmScenScore = 0;
  G.ctmScenAnswered = false;
  G.screen = 'ctmScenario';
  Tracker.startMode('ctmScenario');
  render();
}

function startCTMBoss() {
  const content = window.TACTICAL_CTM_CONTENT;
  if (!content || !content.bossBattles || content.bossBattles.length === 0) {
    alert('Cannot load CTM Boss.'); return;
  }
  const ctmBosses = content.bossBattles.filter(b => b.category === 'ctm' || b.category === 'counter_terrorism');
  const bossPool = ctmBosses.length > 0 ? ctmBosses : content.bossBattles;
  const boss = bossPool[Math.floor(Math.random() * bossPool.length)];
  const phaseQs = boss.phases.flatMap(ph => ph.questions || []);
  G.ctmBoss = boss;
  G.ctmBossQ = phaseQs.slice(0, 10);
  G.ctmBossIdx = 0;
  G.ctmBossHp = boss.maxHp;
  G.ctmBossPlayerHp = 100;
  G.ctmBossScore = 0;
  G.screen = 'ctmBoss';
  Tracker.startMode('ctmBoss');
  render();
}

// ============================================
// Counter-Terrorism Medicine Scenario
// ============================================
function renderCTMScenario() {
  const content = window.TACTICAL_CTM_CONTENT;
  if (!content) { G.screen = 'modes'; render(); return; }
  const scenarios = content.ctmScenarios;
  if (!scenarios || scenarios.length === 0) { G.screen = 'modes'; render(); return; }
  if (G.ctmScenIdx >= scenarios.length) { showCTMScenarioResults(); return; }

  const sc = scenarios[G.ctmScenIdx];
  const steps = sc.steps || [];
  if (G.ctmScenStepIdx >= steps.length) {
    G.ctmScenIdx++;
    G.ctmScenStepIdx = 0;
    G.ctmScenAnswered = false;
    if (G.ctmScenIdx >= scenarios.length) { showCTMScenarioResults(); return; }
    render(); return;
  }

  const step = steps[G.ctmScenStepIdx];
  const choices = step.choices || step.options || [];

  app.innerHTML = `
    ${renderHUD('ctmScenTimer')}
    <div class="screen quiz-game">
      ${narrativePanel(`🛡️ <strong>${sc.title}</strong><br>Step ${G.ctmScenStepIdx + 1}/${steps.length}`, { type: 'danger', tag: 'Counter-Terrorism Medicine Scenario', tagClass: 'emergency', icon: '🛡️' })}
      <div class="quiz-q-card anim-in" style="margin-top:12px">
        <div class="quiz-q-text" style="font-size:0.85rem;color:var(--text-muted);margin-bottom:10px">${step.situation || step.narrative || ''}</div>
        <div class="quiz-q-text"><strong>${step.question || ''}</strong></div>
        <div class="quiz-opts">
          ${choices.map((opt, i) => {
            const letter = String.fromCharCode(65 + i);
            const optText = opt.text || '';
            const isCorrect = (opt.correct === true) || (typeof step.correctChoice !== 'undefined' && i === step.correctChoice) || (opt.outcome === 'good');
            let cls = '';
            if (G.ctmScenAnswered) {
              if (isCorrect) cls = 'correct';
              else if (i === G._ctmScenSelected && !isCorrect) cls = 'wrong';
            }
            return `<button class="q-opt ${cls}" onclick="answerCTMScenario(${i})" ${G.ctmScenAnswered ? 'disabled' : ''}>
              <span class="q-letter">${letter}</span>
              <span class="q-opt-text">${optText}</span>
            </button>`;
          }).join('')}
        </div>
        ${G.ctmScenAnswered ? `
          <div class="quiz-explanation">${(choices[G._ctmScenSelected] || {}).feedback || ''}</div>
          ${step.medicalInfo ? `<div class="quiz-explanation" style="border-left-color:var(--blue)">💡 ${step.medicalInfo}</div>` : ''}
          <button class="quiz-next-btn" onclick="nextCTMScenario()">Next Step →</button>
        ` : ''}
      </div>
    </div>`;

  if (!G.ctmScenAnswered) {
    startCountdown('ctmScenTimer', 30, updateTimerDisplay, () => {
      G.ctmScenAnswered = true;
      G._ctmScenSelected = -1;
      updateStreak(false);
      sfx('wrong');
      render();
    });
  }
}

function answerCTMScenario(idx) {
  if (G.ctmScenAnswered) return;
  G.ctmScenAnswered = true;
  G._ctmScenSelected = idx;
  stopTimer('ctmScenTimer');

  const sc = window.TACTICAL_CTM_CONTENT.ctmScenarios[G.ctmScenIdx];
  const step = sc.steps[G.ctmScenStepIdx];
  const choices = step.choices || step.options || [];
  const opt = choices[idx];
  const correct = opt && (opt.correct === true || (typeof step.correctChoice !== 'undefined' && idx === step.correctChoice) || opt.outcome === 'good');

  Tracker.recordAnswer(`ctmScen_${G.ctmScenIdx}_${G.ctmScenStepIdx}`, String(idx), correct);

  if (correct) {
    sfx('correct');
    flashScreen('green');
    addScore(150);
    addXP(40);
    G.ctmScenScore++;
    updateStreak(true);
    G.totalCorrect++;
  } else {
    sfx('wrong');
    shakeScreen();
    addScore(-20);
    updateStreak(false);
  }
  checkAchievements();
  render();
}

function nextCTMScenario() {
  G.ctmScenStepIdx++;
  G.ctmScenAnswered = false;
  G._ctmScenSelected = undefined;
  Tracker.startQuestion();
  render();
}

function showCTMScenarioResults() {
  stopTimer('ctmScenTimer');
  G.modesCompleted.add('ctmScenario');
  const scenarios = window.TACTICAL_CTM_CONTENT.ctmScenarios;
  const totalSteps = scenarios.reduce((sum, sc) => sum + (sc.steps || []).length, 0);
  const pct = Math.round(((G.ctmScenScore || 0) / Math.max(totalSteps, 1)) * 100);
  const grade = getGrade(pct);
  const gradeClass = grade === 'S' ? 's' : grade === 'A' ? 'a' : grade === 'B' ? 'b' : 'c';
  Tracker.endMode(G.ctmScenScore || 0);
  if (grade === 'S' || grade === 'A') confetti();

  app.innerHTML = `
    <div class="screen results-screen">
      ${charBubble('mentor', grade === 'S' || grade === 'A' ? 'Masterfully resolved the counter-terrorism crisis!' : 'Strengthen your resolve and try again!', { success: grade === 'S' || grade === 'A' })}
      <div class="result-big anim-in">📖</div>
      <div class="result-sub">Counter-Terrorism Medicine Scenario Complete!</div>
      <div class="result-grade ${gradeClass} anim-in">Grade: ${grade}</div>
      <div class="result-stats anim-in">
        <div class="r-stat"><div class="val">${G.ctmScenScore || 0}/${totalSteps}</div><div class="lbl">Correct</div></div>
        <div class="r-stat"><div class="val">${pct}%</div><div class="lbl">Accuracy</div></div>
        <div class="r-stat"><div class="val">${G.score}</div><div class="lbl">Total Score</div></div>
      </div>
      <div class="result-actions anim-in">
        <button class="btn-primary" onclick="startCTMScenario()">🔄 Retry Scenario</button>
        <button class="btn-outline" onclick="startCTMBoss()">👹 Boss Battle</button>
        <button class="btn-outline" onclick="G.screen='modes';render();">🏠 Select Mission</button>
      </div>
    </div>`;
  G.screen = 'results';
}

// ============================================
// Counter-Terrorism Medicine Boss Battle
// ============================================
function renderCTMBoss() {
  const boss = G.ctmBoss;
  if (!boss) { G.screen = 'ctm'; render(); return; }
  const q = (G.ctmBossQ || [])[G.ctmBossIdx];
  if (!q || G.ctmBossIdx >= (G.ctmBossQ || []).length) { showCTMBossResults(); return; }

  const hpPct = Math.round(((G.ctmBossHp || 0) / (boss.maxHp || 100)) * 100);
  const playerHpPct = G.ctmBossPlayerHp || 0;

  app.innerHTML = `
    ${renderHUD('ctmBossTimer')}
    <div class="screen quiz-game">
      <div class="boss-banner heartbeat-effect" style="background:linear-gradient(135deg,#1a0a0a,#0a0a1a)">
        <h2>${boss.emoji || '🛡️'} ${boss.name}</h2>
        <div style="display:flex;gap:12px;align-items:center;justify-content:center;margin-top:8px">
          <span style="font-size:0.8rem;color:var(--text-muted)">Boss HP</span>
          <div style="flex:1;background:#333;border-radius:4px;height:10px;max-width:200px">
            <div style="width:${hpPct}%;background:var(--red);height:10px;border-radius:4px;transition:width 0.3s"></div>
          </div>
          <span style="font-size:0.85rem;color:var(--red)">${G.ctmBossHp}/${boss.maxHp}</span>
        </div>
        <div style="display:flex;gap:12px;align-items:center;justify-content:center;margin-top:4px">
          <span style="font-size:0.8rem;color:var(--text-muted)">My HP</span>
          <div style="flex:1;background:#333;border-radius:4px;height:8px;max-width:200px">
            <div style="width:${playerHpPct}%;background:var(--green);height:8px;border-radius:4px;transition:width 0.3s"></div>
          </div>
          <span style="font-size:0.85rem;color:var(--green)">${playerHpPct}</span>
        </div>
        <p style="font-size:0.75rem;margin-top:4px">Question ${G.ctmBossIdx + 1} / ${(G.ctmBossQ || []).length}</p>
      </div>
      ${charBubble('villain', rnd(CHARS.villain.taunts), { right: true, urgent: true, expression: '👿', delay: 0 })}
      <div class="quiz-q-card anim-in">
        <div class="quiz-q-text">${q.q}</div>
        <div class="quiz-opts">
          ${(q.o || []).map((opt, i) => {
            const letter = String.fromCharCode(65 + i);
            return `<button class="q-opt" onclick="answerCTMBoss(${i})">
              <span class="q-letter">${letter}</span>
              <span class="q-opt-text">${opt}</span>
            </button>`;
          }).join('')}
        </div>
      </div>
    </div>`;

  showDangerPulse(true);
  startCountdown('ctmBossTimer', 15, updateTimerDisplay, () => {
    sfx('wrong');
    shakeScreen();
    updateStreak(false);
    G.ctmBossPlayerHp = Math.max(0, (G.ctmBossPlayerHp || 100) - 20);
    G.ctmBossIdx++;
    if (G.ctmBossPlayerHp <= 0) { showCTMBossResults(); return; }
    render();
  });
}

function answerCTMBoss(idx) {
  stopTimer('ctmBossTimer');
  const q = G.ctmBossQ[G.ctmBossIdx];
  const correct = idx === q.a;

  Tracker.recordAnswer(`ctmBoss_${G.ctmBossIdx}`, String(idx), correct);

  if (correct) {
    sfx('correct');
    flashScreen('green');
    showImpact('green');
    addScore(250);
    addXP(60);
    G.ctmBossScore++;
    updateStreak(true);
    G.totalCorrect++;
    const dmg = Math.floor((G.ctmBoss.maxHp || 100) / Math.max((G.ctmBossQ || []).length, 1));
    G.ctmBossHp = Math.max(0, (G.ctmBossHp || 0) - dmg);
  } else {
    sfx('wrong');
    shakeScreen();
    showImpact();
    addScore(-50);
    updateStreak(false);
    G.ctmBossPlayerHp = Math.max(0, (G.ctmBossPlayerHp || 100) - 15);
  }
  checkAchievements();
  showSpeedLines();

  const fbLayer = document.createElement('div');
  fbLayer.className = 'feedback-layer show';
  fbLayer.innerHTML = `
    <div class="fb-card">
      <div class="fb-icon ${correct ? 'correct' : 'wrong'}">${correct ? '🏆' : '💀'}</div>
      <h2>${correct ? 'Boss Hit!' : 'Boss Counterattack!'}</h2>
      <div class="fb-char-section">
        <div class="fb-char-avatar">${correct ? CHARS.mentor.emoji : CHARS.villain.emoji}</div>
        <div class="fb-char-dialogue">
          <strong>${correct ? CHARS.mentor.name : CHARS.villain.name}:</strong>
          ${correct ? rnd(CHARS.mentor.correct) : 'That record is not enough...'}
          ${q.exp ? `<br><br>${q.exp}` : ''}
        </div>
      </div>
      <div class="fb-points ${correct ? 'plus' : 'minus'}">${correct ? '+250' : '-50'}</div>
      <button class="fb-next" onclick="nextCTMBoss()">Next →</button>
    </div>`;
  document.body.appendChild(fbLayer);
}

function nextCTMBoss() {
  document.querySelector('.feedback-layer')?.remove();
  G.ctmBossIdx++;
  if (G.ctmBossPlayerHp <= 0 || G.ctmBossHp <= 0) { showCTMBossResults(); return; }
  Tracker.startQuestion();
  render();
}

function showCTMBossResults() {
  showDangerPulse(false);
  stopTimer('ctmBossTimer');
  const total = (G.ctmBossQ || []).length;
  const pct = Math.round(((G.ctmBossScore || 0) / Math.max(total, 1)) * 100);
  const win = (G.ctmBossHp || 0) <= 0 || pct >= 70;
  const grade = getGrade(pct);
  const gradeClass = grade === 'S' ? 's' : grade === 'A' ? 'a' : grade === 'B' ? 'b' : 'c';
  G.bossGrade = grade;
  Tracker.endMode(G.ctmBossScore || 0);
  checkAchievements();
  if (win) { confetti(); addXP(300); addScore(500); }

  app.innerHTML = `
    <div class="screen results-screen">
      <div class="result-big anim-in">${win ? '🏆' : '💀'}</div>
      <div class="result-sub">${win ? G.ctmBoss.name + ' Defeated!' : 'Defeated by the Boss...'}</div>
      <div class="result-grade ${gradeClass} anim-in">Grade: ${grade}</div>
      ${win && G.ctmBoss.reward ? `<div class="quiz-explanation" style="margin:12px 0">🏅 Reward: ${G.ctmBoss.reward.badge || ''}</div>` : ''}
      <div class="result-stats anim-in">
        <div class="r-stat"><div class="val">${G.ctmBossScore || 0}/${total}</div><div class="lbl">Correct</div></div>
        <div class="r-stat"><div class="val">${pct}%</div><div class="lbl">Accuracy</div></div>
        <div class="r-stat"><div class="val">${G.ctmBossHp}</div><div class="lbl">Boss HP Remaining</div></div>
      </div>
      <div class="result-actions anim-in">
        <button class="btn-primary" onclick="startCTMBoss()">🔄 Retry Boss</button>
        <button class="btn-outline" onclick="enterMode('ctm')">🛡️ Counter-Terrorism Medicine Quiz</button>
        <button class="btn-outline" onclick="G.screen='modes';render();">🏠 Select Mission</button>
      </div>
    </div>`;
  G.screen = 'results';
}
// ============================================
// END OF NEW GAME MODES
// ============================================

// ============================================
// JRPG CAMPAIGN ENGINE
// Zelda / Final Fantasy Style JRPG
// ============================================

// ---- PATCH: render() ----
// Monkey-patch render to add campaign screens
(function() {
  var _origRender = render;
  render = function() {
    var s = G.screen;
    if (s === 'campaign') renderCampaignWorldMap();
    else if (s === 'campaignRole') renderCampaignRoleSelect();
    else if (s === 'campaignChapters') renderCampaignChapterMap();
    else if (s === 'campaignCinematic') renderCampaignCinematic();
    else if (s === 'campaignBriefing') renderCampaignBriefing();
    else if (s === 'campaignBattle') renderCampaignBattle();
    else if (s === 'campaignResult') renderCampaignChapterResult();
    else if (s === 'campaignComplete') renderCampaignComplete();
    else if (s === 'hseepMenu') renderHSEEPMenu();
    else if (s === 'hseepQuiz') renderHSEEPQuiz();
    else if (s === 'hseepScenario') renderHSEEPScenario();
    else if (s === 'hseepTemplate') renderHSEEPTemplate();
    else if (s === 'hseepCampaign') renderHSEEPCampaignMap();
    else if (s === 'hseepCampaignChapter') renderHSEEPCampaignChapter();
    else if (s === 'hseepCampaignResult') renderHSEEPCampaignResult();
    else _origRender();
  };
})();

// ---- PATCH: enterMode() to handle campaign ----
(function() {
  var _origEnter = enterMode;
  enterMode = function(mode) {
    if (mode === 'campaign') {
      G.screen = 'campaign';
      G.campaignState = G.campaignState || { selectedCampaign: null, selectedRole: null };
      G.campaignProgress = G.campaignProgress || {};
      Tracker.startMode('campaign');
      render();
      return;
    }
    if (mode === 'hseep') {
      G.screen = 'hseepMenu';
      G.hseep = G.hseep || {};
      Tracker.startMode('hseep');
      render();
      return;
    }
    _origEnter(mode);
  };
})();

// ---- PATCH: renderModeSelect to inject campaign card ----
(function() {
  var _origModeSelect = renderModeSelect;
  renderModeSelect = function() {
    _origModeSelect();
    // Insert campaign card into the mode grid after rendering
    var grid = document.querySelector('.mode-grid');
    if (grid && !document.querySelector('[data-mode="campaign"]')) {
      var card = document.createElement('button');
      card.className = 'mode-card';
      card.setAttribute('data-mode', 'campaign');
      card.style.cssText = 'border-color:rgba(255,215,0,0.35);background:linear-gradient(135deg,rgba(255,215,0,0.08),rgba(255,140,0,0.05));';
      card.innerHTML = `
        <div class="mode-icon">⚔️</div>
        <div class="mode-info">
          <h3>Campaign Mode ${G.campaignProgress && Object.keys(G.campaignProgress).length > 0 ? '▶' : '🆕'}</h3>
          <p>Cinematic narrative simulation — Lead immersive disaster response missions</p>
          <div class="mode-tag-row">
            <span class="mode-tag" style="background:rgba(255,215,0,0.15);color:#ffd700">Narrative Sim</span>
          </div>
        </div>`;
      card.onclick = function() { enterMode('campaign'); };
      grid.insertBefore(card, grid.firstChild);
    }
  };
})();

// ============================================
// CAMPAIGN HELPER FUNCTIONS
// ============================================

function getCampaignData() {
  return window.CAMPAIGN_MODE;
}

function getCampaignById(id) {
  var data = getCampaignData();
  if (!data) return null;
  return (data.campaigns || []).find(function(c) { return c.id === id; });
}

function getCampaignChapterData(campaignId, chapterIndex) {
  var campaign = getCampaignById(campaignId);
  if (!campaign) return null;
  return (campaign.chapters || [])[chapterIndex] || null;
}

function getCampaignProgress() {
  G.campaignProgress = G.campaignProgress || {};
  return G.campaignProgress;
}

function saveCampaignProgress() {
  // Progress lives in G.campaignProgress (session-persistent)
  // Structure: { campaignId: { chaptersCompleted: [0,1,2], bestScore: 1200, started: true } }
}

function getCampaignCompletedChapters(campaignId) {
  var prog = getCampaignProgress();
  if (!prog[campaignId]) return [];
  return prog[campaignId].chaptersCompleted || [];
}

function isCampaignUnlocked(campaignId) {
  var data = getCampaignData();
  if (!data) return false;
  var campaigns = data.campaigns || [];
  var idx = campaigns.findIndex(function(c) { return c.id === campaignId; });
  if (idx === 0) return true; // First campaign always unlocked
  if (idx < 0) return false;
  // Previous campaign must have at least 3 chapters done
  var prevId = campaigns[idx - 1].id;
  var prevDone = getCampaignCompletedChapters(prevId);
  return prevDone.length >= 3;
}

function isCampaignCompleted(campaignId) {
  var campaign = getCampaignById(campaignId);
  if (!campaign) return false;
  var done = getCampaignCompletedChapters(campaignId);
  return done.length >= (campaign.chapters || []).length;
}

function calculateBattleDamage(correct, role, difficulty) {
  if (correct) {
    // Enemy takes damage: base 15-30 based on difficulty
    var base = difficulty === 'hard' ? 30 : difficulty === 'medium' ? 22 : 15;
    return base + Math.floor(Math.random() * 8);
  } else {
    // Player takes damage: base 10-20
    var base = difficulty === 'hard' ? 20 : difficulty === 'medium' ? 15 : 10;
    return base + Math.floor(Math.random() * 6);
  }
}

function checkRoleBonus(roleId, challenge) {
  var data = getCampaignData();
  if (!data) return false;
  var role = (data.roles || []).find(function(r) { return r.id === roleId; });
  if (!role || !challenge) return false;
  var bonuses = role.bonuses || {};
  var qType = (challenge.type || '').toLowerCase();
  // Check if question type matches any role bonus category
  return Object.keys(bonuses).some(function(k) {
    return qType.indexOf(k) >= 0 || (challenge.id || '').indexOf(k) >= 0;
  });
}

function levelUpCheck() {
  if (!G.campaign) return false;
  var data = getCampaignData();
  var milestones = data ? (data.milestones || []) : [];
  var oldLevel = G.campaign.level || 1;
  var xp = G.campaign.xp || 0;
  // XP thresholds: 500, 1500, 3000, 5000, 8000
  var thresholds = [0, 500, 1500, 3000, 5000, 8000];
  var newLevel = 1;
  for (var i = thresholds.length - 1; i >= 0; i--) {
    if (xp >= thresholds[i]) { newLevel = i + 1; break; }
  }
  newLevel = Math.min(newLevel, 6);
  if (newLevel > oldLevel) {
    G.campaign.level = newLevel;
    var milestone = milestones[newLevel - 1];
    return milestone ? milestone.title : 'Level ' + newLevel;
  }
  return false;
}

function useItem(itemId) {
  if (!G.campaign) return false;
  var items = G.campaign.items || [];
  var idx = items.findIndex(function(i) { return i === itemId; });
  if (idx < 0) return false;
  items.splice(idx, 1);
  G.campaign.items = items;

  // Apply item effect
  if (itemId === 'medkit') {
    var heal = Math.floor((G.campaign.maxHp || 100) * 0.25);
    G.campaign.hp = Math.min(G.campaign.maxHp || 100, (G.campaign.hp || 0) + heal);
    showAchievement('🩹', 'First Aid Kit Used!', 'HP +' + heal);
  } else if (itemId === 'hint') {
    G.campaign.hintActive = true;
    showAchievement('💡', 'Hint Used!', 'Eliminates one wrong answer');
  } else if (itemId === 'shield') {
    G.campaign.shieldActive = true;
    showAchievement('🛡️', 'Shield Equipped!', 'Next wrong answer: no HP loss');
  } else if (itemId === 'doubleXP') {
    G.campaign.doubleXPCount = 3;
    showAchievement('⭐', 'Double XP!', 'Next 3 questions: XP x2');
  } else if (itemId === 'timefreeze') {
    G.campaign.timeFreezeActive = true;
    showAchievement('⏸️', 'Time Freeze!', 'Timer extended');
  } else if (itemId === 'antidote') {
    G.campaign.antidoteReady = true;
    showAchievement('💉', 'Antidote Ready!', 'Auto-revive when HP reaches 0');
  }
  return true;
}

function renderCampaignPlayerHUD() {
  if (!G.campaign) return '';
  var c = G.campaign;
  var data = getCampaignData();
  var roles = data ? (data.roles || []) : [];
  var role = roles.find(function(r) { return r.id === c.role; }) || {};
  var maxHp = c.maxHp || 100;
  var hp = Math.max(0, c.hp || 0);
  var hpPct = Math.round((hp / maxHp) * 100);
  var xpForLevel = [500, 1000, 1500, 2000, 3000, 8000];
  var levelIdx = Math.min((c.level || 1) - 1, xpForLevel.length - 1);
  var xpThisLevel = levelIdx > 0 ? [0,500,1500,3000,5000,8000][levelIdx] : 0;
  var xpNext = xpForLevel[levelIdx] || 8000;
  var xpPct = Math.round(Math.min(100, ((c.xp - xpThisLevel) / (xpNext - xpThisLevel + 1)) * 100));

  // Items in HUD (show up to 4)
  var itemSlots = [];
  var itemData = data ? (data.items || []) : [];
  var ownedItems = c.items || [];
  for (var i = 0; i < 4; i++) {
    var iid = ownedItems[i];
    if (iid) {
      var itemDef = itemData.find(function(d) { return d.id === iid; }) || {};
      var icon = iid === 'hint' ? '💡' : iid === 'medkit' ? '🩹' : iid === 'timefreeze' ? '⏸️' : iid === 'shield' ? '🛡️' : iid === 'doubleXP' ? '⭐' : iid === 'antidote' ? '💉' : '📦';
      itemSlots.push('<div class="hud-item" data-item-id="' + iid + '" title="' + (itemDef.desc || '') + '">' + icon + '</div>');
    } else {
      itemSlots.push('<div class="hud-item empty">·</div>');
    }
  }

  var data2 = getCampaignData();
  var milestones = data2 ? (data2.milestones || []) : [];
  var milestone = milestones[(c.level || 1) - 1] || {};

  return `<div class="player-hud">
    <div class="hud-avatar">${role.emoji || '👤'}</div>
    <div class="hud-info">
      <div class="hud-name">${role.name || 'Member'}</div>
      <div class="hud-title">${milestone.title || 'Lv.' + (c.level || 1)}</div>
    </div>
    <div class="hud-bars">
      <div class="hud-bar">
        <span class="bar-label">HP</span>
        <div class="bar-track"><div class="bar-fill hp" style="width:${hpPct}%"></div></div>
        <span class="bar-value">${hp}/${maxHp}</span>
      </div>
      <div class="hud-bar">
        <span class="bar-label">XP</span>
        <div class="bar-track"><div class="bar-fill xp" style="width:${xpPct}%"></div></div>
        <span class="bar-value">${c.xp || 0}</span>
      </div>
    </div>
    <div class="hud-items">${itemSlots.join('')}</div>
    <div class="hud-level">
      <div class="lv-num">${c.level || 1}</div>
      <div class="lv-label">LV</div>
    </div>
  </div>`;
}

function useCampaignItem(itemId) {
  if (useItem(itemId)) {
    render();
  }
}

// Helper: bind HUD item click listeners (called after each campaign screen render)
function bindCampaignHUDItems() {
  document.querySelectorAll('.hud-item[data-item-id]').forEach(function(el) {
    el.addEventListener('click', function() {
      var itemId = this.getAttribute('data-item-id');
      if (itemId) useCampaignItem(itemId);
    });
  });
}

// ============================================
// 1. WORLD MAP
// ============================================
function renderCampaignWorldMap() {
  var data = getCampaignData();
  if (!data) {
    app.innerHTML = '<div style="padding:40px;text-align:center;color:#ff3b5c">Failed to load campaign data</div>';
    return;
  }
  var campaigns = data.campaigns || [];
  var prog = getCampaignProgress();

  var nodes = campaigns.map(function(c, idx) {
    var unlocked = isCampaignUnlocked(c.id);
    var completed = isCampaignCompleted(c.id);
    var done = getCampaignCompletedChapters(c.id);
    var total = (c.chapters || []).length;
    var pct = total > 0 ? Math.round((done.length / total) * 100) : 0;
    var cls = completed ? 'completed' : !unlocked ? 'locked' : '';
    var color = c.cardColor || '#ffd700';
    return `<div class="campaign-node ${cls}" style="--node-color:${color}" data-campaign-id="${c.id}" data-unlocked="${unlocked}">
      <div class="node-icon">${c.icon || '⚔️'}</div>
      <div class="node-title">${(c.title || '').replace(/^.+?\s/, '')}</div>
      <div class="node-subtitle">${c.subtitle || ''}</div>
      <div class="node-meta">
        <span class="node-difficulty">${c.difficulty || '★☆☆☆☆'}</span>
        <span>${c.difficultyLabel || ''}</span>
        <span>⏱ ${c.estimatedTime || '45min'}</span>
      </div>
      ${total > 0 ? `<div class="node-progress">
        <div style="display:flex;justify-content:space-between;font-size:0.7rem;color:#6b7080;margin-bottom:4px">
          <span>Progress</span><span>${done.length}/${total} Chapters</span>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" style="width:${pct}%;background:${color}"></div>
        </div>
      </div>` : ''}
      ${!unlocked ? '<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:2rem">🔒</div>' : ''}
    </div>`;
  }).join('');

  app.innerHTML = `<div class="campaign-screen-wrap">
    <div class="world-map">
      <button class="back-btn" id="campaignBackToModes">← Back to Mission Select</button>
      <div class="world-map-title">⚔️ Disaster Response World</div>
      <div class="world-map-subtitle">Select a campaign and deploy to the disaster scene</div>
      <div class="campaign-nodes">${nodes}</div>
    </div>
  </div>`;

  // Event delegation for campaign node clicks
  var backToModesBtn = document.getElementById('campaignBackToModes');
  if (backToModesBtn) backToModesBtn.addEventListener('click', function() { G.screen='modes'; render(); });

  document.querySelectorAll('.campaign-node').forEach(function(node) {
    node.addEventListener('click', function() {
      var cid = this.getAttribute('data-campaign-id');
      var unlocked = this.getAttribute('data-unlocked') === 'true';
      if (unlocked) {
        selectCampaign(cid);
      } else {
        showAchievement('🔒','Locked Campaign','Complete 3 or more chapters of the previous campaign');
      }
    });
  });
}

function selectCampaign(campaignId) {
  G.campaignState = G.campaignState || {};
  G.campaignState.selectedCampaign = campaignId;
  G.screen = 'campaignRole';
  render();
}

// ============================================
// 2. ROLE SELECTION
// ============================================
function renderCampaignRoleSelect() {
  var data = getCampaignData();
  if (!data) return;
  var roles = data.roles || [];
  var campaignId = (G.campaignState || {}).selectedCampaign;
  var campaign = getCampaignById(campaignId);
  var selectedRole = (G.campaignState || {}).selectedRole;

  var roleCards = roles.map(function(r) {
    var sel = selectedRole === r.id ? 'selected' : '';
    return `<div class="role-card ${sel}" data-role-id="${r.id}">
      <div class="role-emoji">${r.emoji}</div>
      <div class="role-name">${r.name}</div>
      <div class="role-desc">${r.desc}</div>
      <div class="role-special">✨ ${r.special}</div>
    </div>`;
  }).join('');

  app.innerHTML = `<div class="campaign-screen-wrap">
    <div class="role-select">
      <button class="back-btn" id="roleBackBtn">← Back to World Map</button>
      <div class="role-select-title">Select Class</div>
      <div class="role-select-subtitle">${campaign ? campaign.title : ''} — Which role will you take on?</div>
      <div class="role-grid">${roleCards}</div>
      <button class="role-confirm-btn" id="roleConfirmBtn"
        ${selectedRole ? '' : 'disabled'}>
        ${selectedRole ? 'Ready to Deploy!' : 'Please select a class'}
      </button>
    </div>
  </div>`;

  // Event listeners
  document.getElementById('roleBackBtn').addEventListener('click', function() { G.screen='campaign'; render(); });
  document.getElementById('roleConfirmBtn').addEventListener('click', function() { if (!this.disabled) confirmCampaignRole(); });
  document.querySelectorAll('.role-card').forEach(function(card) {
    card.addEventListener('click', function() { selectCampaignRole(this.getAttribute('data-role-id')); });
  });
}

function selectCampaignRole(roleId) {
  G.campaignState = G.campaignState || {};
  G.campaignState.selectedRole = roleId;
  render();
}

function confirmCampaignRole() {
  var state = G.campaignState || {};
  if (!state.selectedRole || !state.selectedCampaign) return;

  // Initialize campaign state
  G.campaign = {
    id: state.selectedCampaign,
    role: state.selectedRole,
    currentChapter: 0,
    hp: 100,
    maxHp: 100,
    xp: 0,
    level: 1,
    items: ['hint', 'medkit'], // Starting items
    score: 0,
    chaptersCompleted: [],
    startedAt: Date.now(),
    totalCorrect: 0,
    totalAnswered: 0
  };

  G.screen = 'campaignChapters';
  render();
}

// ============================================
// 3. CHAPTER MAP
// ============================================
function renderCampaignChapterMap() {
  var c = G.campaign;
  if (!c) { G.screen = 'campaign'; render(); return; }

  var campaign = getCampaignById(c.id);
  if (!campaign) { G.screen = 'campaign'; render(); return; }

  var chapters = campaign.chapters || [];
  var completedChapters = c.chaptersCompleted || [];

  var chapterNodes = chapters.map(function(ch, idx) {
    var isDone = completedChapters.indexOf(idx) >= 0;
    var isActive = idx === c.currentChapter;
    var isLocked = !isDone && idx > c.currentChapter;
    var cls = isDone ? 'completed' : isActive ? 'active' : isLocked ? 'locked' : '';
    var numClass = isDone ? 'completed' : isActive ? 'active' : 'locked';
    var statusText = isDone ? '✅ Done' : isActive ? '▶ Current' : '🔒';
    var clickable = (!isLocked || isDone);

    return `<div class="chapter-node ${cls}" ${clickable ? 'data-chapter-idx="' + idx + '"' : ''}>
      <div class="ch-number ${numClass}">${idx + 1}</div>
      <div class="ch-info">
        <div class="ch-title">${ch.title || 'Chapter ' + (idx + 1)}</div>
        <div class="ch-subtitle">${ch.subtitle || ch.levelTitle || ''}</div>
      </div>
      <div class="ch-status">${statusText}</div>
    </div>`;
  }).join('');

  app.innerHTML = `<div class="campaign-screen-wrap">
    <div class="chapter-map">
      <button class="back-btn" id="chapterBackToWorld">← Back to World Map</button>
      <div class="chapter-map-header">
        <div class="campaign-icon">${campaign.icon || '⚔️'}</div>
        <h2>${campaign.title || ''}</h2>
        <p style="color:#8b8fa3;font-size:0.8rem">${campaign.subtitle || ''}</p>
      </div>
      <div class="chapter-path">${chapterNodes}</div>
    </div>
    ${renderCampaignPlayerHUD()}
  </div>`;

  // Event listeners for chapter map
  var chBackBtn = document.getElementById('chapterBackToWorld');
  if (chBackBtn) chBackBtn.addEventListener('click', function() { G.screen='campaign'; render(); });
  document.querySelectorAll('.chapter-node[data-chapter-idx]').forEach(function(node) {
    node.addEventListener('click', function() {
      var idx = parseInt(this.getAttribute('data-chapter-idx'));
      if (!isNaN(idx)) enterCampaignChapter(idx);
    });
  });
  bindCampaignHUDItems();
}

function enterCampaignChapter(chapterIdx) {
  if (!G.campaign) return;
  G.campaign.currentChapter = chapterIdx;
  G.campaign.currentCinematicSeen = false;
  G.screen = 'campaignCinematic';
  render();
}

// ============================================
// 4. CINEMATIC
// ============================================
function renderCampaignCinematic() {
  var c = G.campaign;
  if (!c) { G.screen = 'campaign'; render(); return; }

  var chapter = getCampaignChapterData(c.id, c.currentChapter);
  if (!chapter) { G.screen = 'campaignBriefing'; render(); return; }

  var cin = chapter.cinematic || {};
  var roleDialogue = (cin.roleDialogue || {})[c.role] || '';
  var data = getCampaignData();
  var roles = data ? (data.roles || []) : [];
  var role = roles.find(function(r) { return r.id === c.role; }) || {};

  var dialogueHtml = roleDialogue ? `
    <div class="cinematic-dialogue">
      <div class="speaker">${role.emoji || ''} ${role.name || ''}</div>
      <div class="speech">${roleDialogue}</div>
    </div>` : '';

  var atmosphereHtml = cin.atmosphere ? `
    <div style="text-align:center;font-size:0.8rem;color:#6b7080;font-style:italic;margin-bottom:16px">
      🌫️ ${cin.atmosphere}
    </div>` : '';

  app.innerHTML = `<div class="campaign-screen-wrap">
    <div class="cinematic">
      <div class="cinematic-chapter-tag">Chapter ${c.currentChapter + 1}</div>
      <div class="cinematic-title">${chapter.title || ''}</div>
      ${atmosphereHtml}
      <div class="cinematic-text">${cin.text || ''}</div>
      ${dialogueHtml}
      <button class="cinematic-continue" id="cinematicContinueBtn">Continue ▶</button>
    </div>
    ${renderCampaignPlayerHUD()}
  </div>`;

  var cinContBtn = document.getElementById('cinematicContinueBtn');
  if (cinContBtn) cinContBtn.addEventListener('click', function() { G.screen='campaignBriefing'; render(); });
  bindCampaignHUDItems();
}

// ============================================
// 5. BRIEFING
// ============================================
function renderCampaignBriefing() {
  var c = G.campaign;
  if (!c) { G.screen = 'campaign'; render(); return; }

  var chapter = getCampaignChapterData(c.id, c.currentChapter);
  if (!chapter) { G.screen = 'campaignChapters'; render(); return; }

  var br = chapter.briefing || {};
  var hazards = (br.hazards || []).map(function(h) { return '<li>' + h + '</li>'; }).join('');
  var resources = (br.resources || []).map(function(r) { return '<li style="margin:2px 0">' + r + '</li>'; }).join('');

  app.innerHTML = `<div class="campaign-screen-wrap">
    <div class="briefing">
      <button class="back-btn" id="briefingBackBtn">← Back to Cinematic</button>
      <div style="text-align:center;margin-bottom:16px">
        <div style="font-size:0.75rem;color:#448aff;letter-spacing:2px;text-transform:uppercase">Mission Briefing</div>
        <div style="font-size:1.2rem;font-weight:700;color:#eef0f6;margin-top:4px">${chapter.title || ''}</div>
      </div>
      <div class="briefing-card">
        <h3>🎯 Situation Report</h3>
        <div class="briefing-item"><span class="label">Situation</span><span class="value" style="max-width:60%;text-align:right">${br.situation || ''}</span></div>
        ${br.patientCount ? '<div class="briefing-item"><span class="label">Patient Count</span><span class="value">' + br.patientCount + '</span></div>' : ''}
        ${br.time ? '<div class="briefing-item"><span class="label">Time</span><span class="value">' + br.time + '</span></div>' : ''}
        <div class="briefing-item" style="border:none"><span class="label">Objective</span><span class="value" style="max-width:60%;text-align:right;color:#ffd700">${br.objective || ''}</span></div>
      </div>
      ${hazards ? `<div class="briefing-card">
        <h3>⚠️ Hazards</h3>
        <ul class="briefing-list">${hazards}</ul>
      </div>` : ''}
      ${resources ? `<div class="briefing-card">
        <h3>🚒 Available Resources</h3>
        <ul style="list-style:none">${resources}</ul>
      </div>` : ''}
      <button class="briefing-start-btn" id="briefingStartBtn">⚔️ Start Mission!</button>
    </div>
    ${renderCampaignPlayerHUD()}
  </div>`;

  var brBackBtn = document.getElementById('briefingBackBtn');
  if (brBackBtn) brBackBtn.addEventListener('click', function() { G.screen='campaignCinematic'; render(); });
  var brStartBtn = document.getElementById('briefingStartBtn');
  if (brStartBtn) brStartBtn.addEventListener('click', function() { startCampaignBattle(); });
  bindCampaignHUDItems();
}

// ============================================
// 6. BATTLE (CORE FF-STYLE GAMEPLAY)
// ============================================
function startCampaignBattle() {
  var c = G.campaign;
  if (!c) return;
  var chapter = getCampaignChapterData(c.id, c.currentChapter);
  if (!chapter) return;

  // Initialize battle state
  var questions = chapter.challenges || [];
  c.battleQuestions = questions.slice(); // copy
  c.currentQuestion = 0;
  c.chapterScore = 0;
  c.chapterCorrect = 0;
  c.chapterXpGained = 0;
  c.battleStartTime = Date.now();
  c.answered = false;
  c.selectedAnswer = null;

  // Enemy HP = number of questions * 20
  c.enemyHp = questions.length * 20;
  c.enemyMaxHp = c.enemyHp;

  // Restore player HP for new chapter (not carried over)
  // Actually HP carries — that's the challenge!

  G.screen = 'campaignBattle';
  Tracker.startMode('campaign_' + c.id + '_ch' + c.currentChapter);
  render();
}

function renderCampaignBattle() {
  var c = G.campaign;
  if (!c) { G.screen = 'campaign'; render(); return; }

  var questions = c.battleQuestions || [];
  var qIdx = c.currentQuestion || 0;

  if (qIdx >= questions.length) {
    showCampaignChapterResult(true);
    return;
  }

  var q = questions[qIdx];
  var answered = c.answered || false;
  var selected = c.selectedAnswer;

  var campaign = getCampaignById(c.id);
  var chapter = getCampaignChapterData(c.id, c.currentChapter);

  // Enemy sprite based on campaign
  var enemyEmojis = {
    urban_fire: '🔥', earthquake: '🌍', chemical: '☣️', flood: '🌊',
    mass_casualty: '💀', nuclear: '☢️'
  };
  var enemyEmoji = enemyEmojis[c.id] || (campaign ? campaign.icon : '💀') || '👹';
  var enemyName = campaign ? campaign.title.replace(/^.+?\s/, '') + ' Crisis' : 'Disaster';

  var hpPct = Math.round(((c.hp || 0) / (c.maxHp || 100)) * 100);
  var enemyHpPct = Math.round(((c.enemyHp || 0) / (c.enemyMaxHp || 1)) * 100);

  var labels = ['A', 'B', 'C', 'D'];
  var options = (q.o || []);

  // Hint: hide one wrong answer
  var hiddenIdx = -1;
  if (c.hintActive && !answered) {
    // Find a wrong answer to hide
    for (var hi = 0; hi < options.length; hi++) {
      if (hi !== q.a) { hiddenIdx = hi; break; }
    }
    c.hintActive = false;
  }

  var optionHtml = options.map(function(opt, i) {
    if (i === hiddenIdx) return ''; // Hidden by hint
    var cls = '';
    if (answered) {
      if (i === q.a) cls = 'correct';
      else if (i === selected) cls = 'wrong';
    }
    var disabledAttr = answered ? 'disabled' : '';
    return `<button class="battle-option ${cls}" ${disabledAttr} data-battle-answer="${i}">
      <span class="opt-label">${labels[i]}</span>
      <span>${opt}</span>
    </button>`;
  }).join('');

  var explanationHtml = '';
  if (answered && q.exp) {
    var isCorrect = selected === q.a;
    explanationHtml = `<div style="background:rgba(${isCorrect?'0,230,118':'255,59,92'},0.08);border:1px solid rgba(${isCorrect?'0,230,118':'255,59,92'},0.3);border-radius:8px;padding:12px;margin-top:8px;font-size:0.8rem;color:#c8cad8;line-height:1.6">
      <strong style="color:${isCorrect?'#00e676':'#ff3b5c'}">${isCorrect?'✅ Correct!':'❌ Wrong!'}</strong><br>${q.exp}
    </div>`;
  }

  var roleBonusHtml = '';
  if (answered && selected === q.a && q.roleBonus && q.roleBonus[c.role]) {
    roleBonusHtml = `<div style="background:rgba(255,215,0,0.08);border:1px solid rgba(255,215,0,0.3);border-radius:8px;padding:8px;margin-top:6px;font-size:0.75rem;color:#ffd700">
      ⭐ ${q.roleBonus[c.role]}
    </div>`;
  }

  var nextBtn = '';
  if (answered) {
    nextBtn = `<button id="battleNextBtn" style="display:block;width:100%;margin-top:12px;padding:12px;background:linear-gradient(135deg,#448aff,#b388ff);color:#fff;font-weight:700;border:none;border-radius:8px;cursor:pointer;font-size:0.9rem">
      ${qIdx + 1 >= questions.length ? 'View Chapter Results →' : 'Next Question →'}
    </button>`;
  }

  // Item use hint
  var doubleXPIndicator = (c.doubleXPCount || 0) > 0 ? `<span style="color:#ffd700;font-size:0.75rem">⭐ 2x XP (${c.doubleXPCount} left)</span>` : '';
  var shieldIndicator = c.shieldActive ? `<span style="color:#b388ff;font-size:0.75rem">🛡️ Shield Active</span>` : '';

  // Narrative for scenario type
  var narrativeHtml = '';
  if (q.narrative) {
    narrativeHtml = `<div style="background:rgba(68,138,255,0.05);border:1px solid rgba(68,138,255,0.2);border-radius:8px;padding:12px;margin-bottom:12px;font-size:0.85rem;color:#c8cad8;line-height:1.6;white-space:pre-line">${q.narrative}</div>`;
  }

  app.innerHTML = `<div class="campaign-screen-wrap">
    <div class="battle-screen">
      <!-- Enemy -->
      <div class="battle-enemy">
        <div class="enemy-sprite" id="enemySprite">${enemyEmoji}</div>
        <div class="enemy-name">${enemyName}</div>
        <div style="font-size:0.7rem;color:#6b7080;margin-bottom:4px">Question ${qIdx + 1} / ${questions.length}</div>
        <div class="battle-hp-bar">
          <div class="battle-hp-fill enemy" id="enemyHpFill" style="width:${enemyHpPct}%"></div>
        </div>
        <div style="font-size:0.7rem;color:#ff3b5c">Enemy HP: ${c.enemyHp}/${c.enemyMaxHp}</div>
      </div>

      <!-- Question -->
      <div class="battle-question">
        <div class="q-category">${q.type || 'QUIZ'} ${doubleXPIndicator} ${shieldIndicator}</div>
        ${narrativeHtml}
        <div class="q-text">${q.q}</div>
      </div>

      <!-- Options -->
      <div class="battle-options">${optionHtml}</div>

      ${explanationHtml}
      ${roleBonusHtml}
      ${nextBtn}
    </div>
    ${renderCampaignPlayerHUD()}
  </div>`;

  // Event listeners for battle
  document.querySelectorAll('[data-battle-answer]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var idx = parseInt(this.getAttribute('data-battle-answer'));
      if (!isNaN(idx)) answerCampaignBattle(idx);
    });
  });
  var battleNextBtn = document.getElementById('battleNextBtn');
  if (battleNextBtn) battleNextBtn.addEventListener('click', function() { nextCampaignQuestion(); });
  bindCampaignHUDItems();
}

function answerCampaignBattle(idx) {
  var c = G.campaign;
  if (!c || c.answered) return;

  var q = (c.battleQuestions || [])[c.currentQuestion || 0];
  if (!q) return;

  c.answered = true;
  c.selectedAnswer = idx;
  c.totalAnswered = (c.totalAnswered || 0) + 1;

  var correct = idx === q.a;
  var difficulty = q.difficulty || 'medium';

  Tracker.recordAnswer('campaign_' + c.id + '_q' + c.currentQuestion, String(idx), correct);

  if (correct) {
    sfx('correct');
    flashScreen('green');
    c.totalCorrect = (c.totalCorrect || 0) + 1;
    c.chapterCorrect = (c.chapterCorrect || 0) + 1;

    // XP calculation
    var baseXP = q.xp || 100;
    var roleBonus = checkRoleBonus(c.role, q);
    var multiplier = (c.doubleXPCount || 0) > 0 ? 2 : 1;
    if (roleBonus) multiplier *= 1.5;
    var xpGained = Math.round(baseXP * multiplier);

    c.xp = (c.xp || 0) + xpGained;
    c.chapterXpGained = (c.chapterXpGained || 0) + xpGained;
    c.chapterScore = (c.chapterScore || 0) + (q.xp || 100);

    if ((c.doubleXPCount || 0) > 0) c.doubleXPCount--;

    // Enemy takes damage
    var dmg = calculateBattleDamage(true, c.role, difficulty);
    c.enemyHp = Math.max(0, (c.enemyHp || 0) - dmg);

    addScore(q.xp || 100);
    addXP(xpGained);
    updateStreak(true);

    // Animate enemy hit
    setTimeout(function() {
      var sprite = document.getElementById('enemySprite');
      if (sprite) sprite.style.animation = 'enemyHit 0.5s ease, enemyFloat 3s ease-in-out infinite 0.5s';
      var fill = document.getElementById('enemyHpFill');
      if (fill) {
        var pct = Math.round(((c.enemyHp || 0) / (c.enemyMaxHp || 1)) * 100);
        fill.style.width = pct + '%';
      }
    }, 100);

    // Level up check
    var lvUp = levelUpCheck();
    if (lvUp) {
      showAchievement('🌟', 'Level Up!', lvUp + ' Achieved!');
    }

  } else {
    sfx('wrong');

    if (c.shieldActive) {
      c.shieldActive = false;
      showAchievement('🛡️', 'Shield Activated!', 'HP loss negated');
    } else {
      var dmg = calculateBattleDamage(false, c.role, difficulty);
      c.hp = Math.max(0, (c.hp || 0) - dmg);
      shakeScreen();

      // Antidote: auto-revive at near-death
      if (c.hp <= 0 && c.antidoteReady) {
        c.hp = Math.floor((c.maxHp || 100) * 0.1);
        c.antidoteReady = false;
        showAchievement('💉', 'Antidote Activated!', 'Revived at 10% HP!');
      }
    }
    updateStreak(false);
    addScore(-20);
  }

  checkAchievements();
  render();

  // Player death check after render
  if ((c.hp || 0) <= 0) {
    setTimeout(function() {
      showCampaignChapterResult(false);
    }, 1500);
  }
}

function nextCampaignQuestion() {
  var c = G.campaign;
  if (!c) return;
  c.currentQuestion = (c.currentQuestion || 0) + 1;
  c.answered = false;
  c.selectedAnswer = null;

  var questions = c.battleQuestions || [];
  if (c.currentQuestion >= questions.length) {
    showCampaignChapterResult(true);
    return;
  }

  Tracker.startQuestion();
  render();
}

// ============================================
// 7. CHAPTER RESULT
// ============================================
function showCampaignChapterResult(success) {
  var c = G.campaign;
  if (!c) return;
  c.lastResultSuccess = success;

  if (success) {
    // Mark chapter as completed
    if (c.chaptersCompleted.indexOf(c.currentChapter) < 0) {
      c.chaptersCompleted.push(c.currentChapter);
    }

    // Save to global progress
    var prog = getCampaignProgress();
    if (!prog[c.id]) prog[c.id] = { chaptersCompleted: [], bestScore: 0 };
    if (prog[c.id].chaptersCompleted.indexOf(c.currentChapter) < 0) {
      prog[c.id].chaptersCompleted.push(c.currentChapter);
    }
    prog[c.id].bestScore = Math.max(prog[c.id].bestScore || 0, c.score || 0);
    saveCampaignProgress();

    // Check if this was the last chapter
    var campaign = getCampaignById(c.id);
    var totalChapters = campaign ? (campaign.chapters || []).length : 6;
    if (c.chaptersCompleted.length >= totalChapters) {
      G.screen = 'campaignComplete';
      Tracker.endMode(c.chapterScore || 0);
      render();
      return;
    }

    // Earn a random item reward
    var rewardItems = ['hint', 'medkit', 'timefreeze', 'shield', 'doubleXP'];
    var rewardItem = rewardItems[Math.floor(Math.random() * rewardItems.length)];
    c.lastRewardItem = rewardItem;
    if ((c.items || []).length < 8) {
      c.items = c.items || [];
      c.items.push(rewardItem);
    }

    confetti();
    addXP(200);
  }

  Tracker.endMode(c.chapterScore || 0);
  G.screen = 'campaignResult';
  render();
}

function renderCampaignChapterResult() {
  var c = G.campaign;
  if (!c) { G.screen = 'campaign'; render(); return; }

  var success = c.lastResultSuccess;
  var chapter = getCampaignChapterData(c.id, c.currentChapter);
  var totalQ = (c.battleQuestions || []).length;
  var correct = c.chapterCorrect || 0;
  var accuracy = totalQ > 0 ? Math.round((correct / totalQ) * 100) : 0;
  var elapsed = Math.round(((Date.now() - (c.battleStartTime || Date.now())) / 1000));
  var minutes = Math.floor(elapsed / 60);
  var seconds = elapsed % 60;

  var icon = success ? '🏆' : '💀';
  var title = success ? 'Chapter Complete!' : 'Mission Failed...';
  var titleColor = success ? '#ffd700' : '#ff3b5c';

  // Success narrative
  var narrativeText = success
    ? 'Mission successfully completed. Excellent response.\nYour rapid judgment in the field saved many lives.'
    : 'HP depleted during the mission. Medical response at a disaster scene is grueling.\nChallenge again and achieve a better result.';

  var data = getCampaignData();
  var itemData = data ? (data.items || []) : [];
  var rewardItemId = c.lastRewardItem;
  var rewardItemDef = rewardItemId ? itemData.find(function(d) { return d.id === rewardItemId; }) : null;

  var lvUp = levelUpCheck();
  var levelUpHtml = lvUp ? `<div class="level-up-banner">
    <h3>🌟 Level Up!</h3>
    <p>You earned the title: ${lvUp}!</p>
  </div>` : '';

  var rewardsHtml = success && rewardItemDef ? `
    <div class="result-rewards">
      <h3>🎁 Chapter Rewards</h3>
      <div class="reward-item">📦 Item Acquired: ${rewardItemDef.name}</div>
      <div class="reward-item">✨ XP +${c.chapterXpGained || 0}</div>
      <div class="reward-item">⭐ Score +${c.chapterScore || 0}</div>
    </div>` : '';

  var nextChapter = c.currentChapter + 1;
  var campaign = getCampaignById(c.id);
  var hasNextChapter = campaign && nextChapter < (campaign.chapters || []).length;

  var actionBtns = success
    ? `${hasNextChapter ? `<button id="resultNextChapter" data-next-chapter="${nextChapter}" style="display:block;width:100%;margin-bottom:8px;padding:14px;background:linear-gradient(135deg,#ffd700,#ff8c00);color:#000;font-weight:700;border:none;border-radius:12px;cursor:pointer">Next Chapter →</button>` : ''}
       <button id="resultToChapterMap" style="display:block;width:100%;padding:12px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.1);color:#eef0f6;border:none;border-radius:12px;cursor:pointer">Back to Chapter Map</button>`
    : `<button id="resultRetry" style="display:block;width:100%;margin-bottom:8px;padding:14px;background:linear-gradient(135deg,#ff3b5c,#ff1744);color:#fff;font-weight:700;border:none;border-radius:12px;cursor:pointer">🔄 Retry</button>
       <button id="resultToChapterMap" style="display:block;width:100%;padding:12px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.1);color:#eef0f6;border:none;border-radius:12px;cursor:pointer">Back to Chapter Map</button>`;

  app.innerHTML = `<div class="campaign-screen-wrap">
    <div class="chapter-result">
      <div class="result-icon">${icon}</div>
      <h2 style="color:${titleColor}">${title}</h2>
      <p style="color:#8b8fa3;font-size:0.85rem">${chapter ? chapter.title : ''}</p>
      <div class="result-narrative">${narrativeText}</div>
      <div class="result-stats">
        <div class="result-stat">
          <div class="rs-value" style="color:#ffd700">${correct}/${totalQ}</div>
          <div class="rs-label">Correct</div>
        </div>
        <div class="result-stat">
          <div class="rs-value" style="color:${accuracy >= 70 ? '#00e676' : '#ff3b5c'}">${accuracy}%</div>
          <div class="rs-label">Accuracy</div>
        </div>
        <div class="result-stat">
          <div class="rs-value" style="color:#448aff">${minutes}:${seconds < 10 ? '0' + seconds : seconds}</div>
          <div class="rs-label">Time Elapsed</div>
        </div>
      </div>
      ${levelUpHtml}
      ${rewardsHtml}
      <div style="margin-top:16px">${actionBtns}</div>
    </div>
    ${renderCampaignPlayerHUD()}
  </div>`;

  // Event listeners for chapter result
  var nextChBtn = document.getElementById('resultNextChapter');
  if (nextChBtn) nextChBtn.addEventListener('click', function() {
    var nc = parseInt(this.getAttribute('data-next-chapter'));
    if (!isNaN(nc)) enterCampaignChapter(nc);
  });
  var retryBtn = document.getElementById('resultRetry');
  if (retryBtn) retryBtn.addEventListener('click', function() { startCampaignBattle(); });
  var toChMapBtn = document.getElementById('resultToChapterMap');
  if (toChMapBtn) toChMapBtn.addEventListener('click', function() { G.screen='campaignChapters'; render(); });
  bindCampaignHUDItems();
}

// ============================================
// 8. CAMPAIGN COMPLETE
// ============================================
function renderCampaignComplete() {
  var c = G.campaign;
  if (!c) { G.screen = 'campaign'; render(); return; }

  var campaign = getCampaignById(c.id);
  var data = getCampaignData();
  var roles = data ? (data.roles || []) : [];
  var role = roles.find(function(r) { return r.id === c.role; }) || {};

  var totalQ = (c.battleQuestions || []).length;
  var correct = c.totalCorrect || 0;
  var totalAnswered = c.totalAnswered || 1;
  var accuracy = Math.round((correct / Math.max(totalAnswered, 1)) * 100);
  var elapsed = Math.round(((Date.now() - (c.startedAt || Date.now())) / 60000));
  var finalTitle = role.maxTitle || 'Disaster Response Expert';
  var badge = campaign ? (campaign.completionBadge || '🏆 Campaign Complete') : '🏆 Campaign Complete';

  confetti();
  addXP(500);
  addScore(1000);

  app.innerHTML = `<div class="campaign-screen-wrap">
    <div class="campaign-complete">
      <div class="trophy">🏆</div>
      <h1>Campaign Complete!</h1>
      <div class="final-title">${badge}</div>
      <div style="font-size:1.1rem;color:#eef0f6;margin-bottom:8px">${finalTitle}</div>
      <div style="font-size:0.85rem;color:#8b8fa3;margin-bottom:24px">${role.name || ''} ${role.emoji || ''}</div>

      <div style="background:rgba(255,215,0,0.05);border:1px solid rgba(255,215,0,0.2);border-radius:12px;padding:20px;margin-bottom:20px">
        <div style="font-size:0.8rem;color:#ffd700;margin-bottom:12px;letter-spacing:1px">Campaign Stats</div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px">
          <div style="text-align:center">
            <div style="font-size:1.3rem;font-weight:700;color:#00e676">${accuracy}%</div>
            <div style="font-size:0.7rem;color:#8b8fa3">Accuracy</div>
          </div>
          <div style="text-align:center">
            <div style="font-size:1.3rem;font-weight:700;color:#ffd700">Lv.${c.level || 1}</div>
            <div style="font-size:0.7rem;color:#8b8fa3">Final Level</div>
          </div>
          <div style="text-align:center">
            <div style="font-size:1.3rem;font-weight:700;color:#448aff">${elapsed} min</div>
            <div style="font-size:0.7rem;color:#8b8fa3">Play Time</div>
          </div>
        </div>
      </div>

      <div style="background:linear-gradient(135deg,rgba(255,215,0,0.1),rgba(255,140,0,0.05));border:1px solid rgba(255,215,0,0.3);border-radius:16px;padding:20px;margin-bottom:24px">
        <div style="font-size:2rem;margin-bottom:8px">${role.emoji || '⭐'}</div>
        <div style="font-size:0.85rem;color:#c8cad8;line-height:1.7">${role.flavor || 'You have demonstrated outstanding disaster response capabilities.'}</div>
      </div>

      <button id="completeToWorld" style="display:block;width:100%;margin-bottom:8px;padding:14px;background:linear-gradient(135deg,#ffd700,#ff8c00);color:#000;font-weight:700;border:none;border-radius:12px;cursor:pointer;font-size:1rem">
        🌍 Back to World Map
      </button>
      <button id="completeToModes" style="display:block;width:100%;padding:12px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:#8b8fa3;border-radius:12px;cursor:pointer">
        🏠 Back to Mission Select
      </button>
    </div>
  </div>`;

  G.screen = 'campaignComplete';
  G.modesCompleted.add('campaign_' + (c.id || ''));

  var toWorldBtn = document.getElementById('completeToWorld');
  if (toWorldBtn) toWorldBtn.addEventListener('click', function() { G.screen='campaign'; render(); });
  var toModesBtn = document.getElementById('completeToModes');
  if (toModesBtn) toModesBtn.addEventListener('click', function() { G.screen='modes'; render(); });
}

// ============================================
// END OF JRPG CAMPAIGN ENGINE
// ============================================

// ============================================
// HSEEP GAME MODULE
// FEMA HSEEP Exercise Design Training
// ============================================

// ---- HSEEP HELPER: get question by ID ----
function hseepGetQuestionById(id) {
  var q = window.HSEEP_QUIZ_QUESTIONS;
  if (!q) return null;
  var cats = Object.keys(q);
  for (var i = 0; i < cats.length; i++) {
    var arr = q[cats[i]];
    for (var j = 0; j < arr.length; j++) {
      if (arr[j].id === id) return arr[j];
    }
  }
  return null;
}

// ---- HSEEP HELPER: category display info ----
function hseepCategoryInfo(key) {
  var map = {
    doctrine: { label: 'HSEEP Doctrine', icon: '📖', desc: '17 questions — Fundamentals, 6 principles, National Preparedness Goal' },
    exercise_types: { label: 'Exercise Types', icon: '📊', desc: '18 questions — 7 exercise types, Discussion-Based vs Operations-Based' },
    design_development: { label: 'Design & Development', icon: '🏗️', desc: '18 questions — 5 planning meetings, SMART objectives, scenario design' },
    conduct: { label: 'Exercise Conduct', icon: '🎬', desc: '15 questions — Briefings, controllers, MSEL injects, hotwash' },
    evaluation: { label: 'Evaluation', icon: '📊', desc: '16 questions — EEGs, P-S-M-U scale, data analysis, observation' },
    improvement: { label: 'Improvement Planning', icon: '📈', desc: '15 questions — AAR/IP, corrective actions, SMART fixes' },
    documents: { label: 'Exercise Documents', icon: '📄', desc: '16 questions — SitMan, ExPlan, MSEL, C/E Handbook, PFF' },
    core_capabilities: { label: 'Core Capabilities', icon: '🎯', desc: '15 questions — 32 core capabilities, 5 mission areas, THIRA' }
  };
  return map[key] || { label: key, icon: '📋', desc: '' };
}

// ============================================
// HSEEP MENU
// ============================================
function renderHSEEPMenu() {
  var app = $('app');
  app.innerHTML = `
    <div class="screen">
      <div style="padding:20px 16px 0">
        ${charBubble('mentor', 'Welcome to HSEEP Exercise Design! Choose your training path below.')}
      </div>
      <div style="padding:0 16px 16px">
        <div style="text-align:center;margin-bottom:20px">
          <div style="font-size:2.5rem">📋</div>
          <h2 style="font-size:1.3rem;font-weight:700;margin:6px 0 4px">HSEEP Exercise Design</h2>
          <div style="font-size:0.8rem;color:var(--text-muted)">FEMA Homeland Security Exercise and Evaluation Program</div>
        </div>

        <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:20px">

          <button id="hseepQuizBtn" style="display:flex;align-items:center;gap:14px;padding:16px;background:rgba(68,138,255,0.08);border:1px solid rgba(68,138,255,0.25);border-radius:14px;text-align:left;cursor:pointer;width:100%">
            <div style="font-size:2rem;flex-shrink:0">📝</div>
            <div>
              <div style="font-weight:700;font-size:1rem;color:#448aff">HSEEP Quiz</div>
              <div style="font-size:0.78rem;color:var(--text-muted);margin-top:2px">130 questions across 8 categories — test your HSEEP knowledge</div>
            </div>
          </button>

          <button id="hseepScenarioBtn" style="display:flex;align-items:center;gap:14px;padding:16px;background:rgba(102,187,106,0.08);border:1px solid rgba(102,187,106,0.25);border-radius:14px;text-align:left;cursor:pointer;width:100%">
            <div style="font-size:2rem;flex-shrink:0">🏗️</div>
            <div>
              <div style="font-weight:700;font-size:1rem;color:#66bb6a">Exercise Design Workshop</div>
              <div style="font-size:0.78rem;color:var(--text-muted);margin-top:2px">8 scenarios — build real exercises step by step</div>
            </div>
          </button>

          <button id="hseepTemplateBtn" style="display:flex;align-items:center;gap:14px;padding:16px;background:rgba(255,183,77,0.08);border:1px solid rgba(255,183,77,0.25);border-radius:14px;text-align:left;cursor:pointer;width:100%">
            <div style="font-size:2rem;flex-shrink:0">📄</div>
            <div>
              <div style="font-weight:700;font-size:1rem;color:#ffb74d">Template Builder</div>
              <div style="font-size:0.78rem;color:var(--text-muted);margin-top:2px">SitMan / ExPlan / MSEL / EEG / AAR — interactive document guides</div>
            </div>
          </button>

          <button id="hseepCampaignBtn" style="display:flex;align-items:center;gap:14px;padding:16px;background:linear-gradient(135deg,rgba(255,100,0,0.1),rgba(255,50,150,0.08));border:1px solid rgba(255,100,0,0.3);border-radius:14px;text-align:left;cursor:pointer;width:100%">
            <div style="font-size:2rem;flex-shrink:0">⚔️</div>
            <div>
              <div style="font-weight:700;font-size:1rem;color:#ff6400">HSEEP Campaign</div>
              <div style="font-size:0.78rem;color:var(--text-muted);margin-top:2px">10-chapter RPG — From Novice Planner to Exercise Director</div>
            </div>
          </button>
        </div>

        <button id="hseepBackBtn" style="display:block;width:100%;padding:12px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--text-muted);border-radius:12px;cursor:pointer;font-size:0.9rem">
          ← Back to Mission Select
        </button>
      </div>
    </div>`;

  document.getElementById('hseepQuizBtn').addEventListener('click', function() {
    G.hseep = G.hseep || {};
    G.hseep.quizState = null;
    G.screen = 'hseepQuiz';
    render();
  });
  document.getElementById('hseepScenarioBtn').addEventListener('click', function() {
    G.hseep = G.hseep || {};
    G.hseep.scenarioState = null;
    G.screen = 'hseepScenario';
    render();
  });
  document.getElementById('hseepTemplateBtn').addEventListener('click', function() {
    G.hseep = G.hseep || {};
    G.hseep.templateState = null;
    G.screen = 'hseepTemplate';
    render();
  });
  document.getElementById('hseepCampaignBtn').addEventListener('click', function() {
    G.hseep = G.hseep || {};
    G.screen = 'hseepCampaign';
    render();
  });
  document.getElementById('hseepBackBtn').addEventListener('click', function() {
    G.screen = 'modes';
    render();
  });
}

// ============================================
// HSEEP QUIZ
// ============================================
function renderHSEEPQuiz() {
  var app = $('app');
  var qs = window.HSEEP_QUIZ_QUESTIONS;
  if (!qs) {
    app.innerHTML = '<div class="screen"><div style="padding:20px;text-align:center">HSEEP content not loaded.</div></div>';
    return;
  }

  var h = G.hseep || {};
  G.hseep = h;

  // Phase: category select
  if (!h.quizCat) {
    var cats = Object.keys(qs);
    var html = '<div class="screen"><div style="padding:16px">';
    html += '<div style="display:flex;align-items:center;gap:10px;margin-bottom:16px">';
    html += '<button id="hseepQzBack" style="padding:8px 14px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.12);color:var(--text-muted);border-radius:8px;cursor:pointer;font-size:0.85rem">← Back</button>';
    html += '<h2 style="font-size:1.1rem;font-weight:700;flex:1">HSEEP Quiz — Select Category</h2>';
    html += '</div>';
    html += '<div style="display:flex;flex-direction:column;gap:10px">';
    // All categories option
    html += '<button class="hseep-cat-btn" data-cat="all" style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px;background:rgba(68,138,255,0.1);border:1px solid rgba(68,138,255,0.3);border-radius:12px;cursor:pointer;width:100%">';
    html += '<div style="display:flex;align-items:center;gap:10px"><span style="font-size:1.3rem">🌐</span><div style="text-align:left"><div style="font-weight:700;font-size:0.95rem;color:#448aff">All Categories</div><div style="font-size:0.75rem;color:var(--text-muted)">All 130 questions — mixed</div></div></div>';
    html += '<span style="font-size:0.8rem;color:var(--text-muted)">130 Qs</span></button>';
    cats.forEach(function(cat) {
      var info = hseepCategoryInfo(cat);
      var count = qs[cat].length;
      html += '<button class="hseep-cat-btn" data-cat="' + cat + '" style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:12px;cursor:pointer;width:100%">';
      html += '<div style="display:flex;align-items:center;gap:10px"><span style="font-size:1.3rem">' + info.icon + '</span><div style="text-align:left"><div style="font-weight:700;font-size:0.9rem">' + info.label + '</div><div style="font-size:0.73rem;color:var(--text-muted)">' + info.desc + '</div></div></div>';
      html += '<span style="font-size:0.8rem;color:var(--text-muted);flex-shrink:0">' + count + ' Qs</span></button>';
    });
    html += '</div></div></div>';
    app.innerHTML = html;

    document.getElementById('hseepQzBack').addEventListener('click', function() {
      G.screen = 'hseepMenu'; render();
    });
    document.querySelectorAll('.hseep-cat-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var cat = btn.getAttribute('data-cat');
        var pool = [];
        if (cat === 'all') {
          Object.keys(qs).forEach(function(c) { pool = pool.concat(qs[c]); });
        } else {
          pool = qs[cat].slice();
        }
        // Shuffle
        for (var i = pool.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var tmp = pool[i]; pool[i] = pool[j]; pool[j] = tmp;
        }
        h.quizCat = cat;
        h.quizPool = pool;
        h.quizIdx = 0;
        h.quizScore = 0;
        h.quizAnswered = false;
        h.quizSelected = undefined;
        h.quizStreak = 0;
        h.quizMaxStreak = 0;
        Tracker.startMode('hseep_quiz');
        render();
      });
    });
    return;
  }

  // Phase: quiz questions
  var pool = h.quizPool || [];
  if (h.quizIdx >= pool.length) {
    // Results
    renderHSEEPQuizResults();
    return;
  }

  var q = pool[h.quizIdx];
  var total = pool.length;
  var idx = h.quizIdx;
  var pct = Math.round((idx / total) * 100);
  var catInfo = hseepCategoryInfo(q.category || h.quizCat);

  var html = `
    <div class="screen quiz-game">
      <div style="padding:12px 16px 0">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <button id="hseepQzAbort" style="padding:6px 12px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.1);color:var(--text-muted);border-radius:8px;cursor:pointer;font-size:0.8rem">✕ Quit</button>
          <div style="flex:1;background:rgba(255,255,255,0.08);border-radius:6px;height:6px;overflow:hidden">
            <div style="height:100%;background:linear-gradient(90deg,#448aff,#7c4dff);width:${pct}%;transition:width 0.3s"></div>
          </div>
          <div style="font-size:0.8rem;color:var(--text-muted);min-width:52px;text-align:right">${idx + 1} / ${total}</div>
        </div>
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:8px">
          <span style="font-size:0.85rem">${catInfo.icon}</span>
          <span style="font-size:0.75rem;color:var(--text-muted)">${catInfo.label}</span>
          <span style="margin-left:auto;font-size:0.75rem;color:var(--green)">Score: ${h.quizScore}</span>
          ${h.quizStreak >= 3 ? '<span style="font-size:0.75rem;color:var(--orange)">🔥 x' + h.quizStreak + '</span>' : ''}
        </div>
      </div>
      <div class="quiz-q-card anim-in" style="margin:0 12px">
        <div style="font-size:0.72rem;color:var(--text-muted);margin-bottom:6px">Difficulty: ${(q.diff || 'normal').toUpperCase()}</div>
        <div class="quiz-q-text" style="font-size:0.95rem;margin-bottom:14px">${q.q}</div>
        <div class="quiz-opts" id="hseepQzOpts">
          ${(q.o || []).map(function(opt, i) {
            var letter = String.fromCharCode(65 + i);
            var cls = '';
            if (h.quizAnswered) {
              if (i === q.a) cls = 'correct';
              else if (i === h.quizSelected && i !== q.a) cls = 'wrong';
            }
            return '<button class="q-opt ' + cls + ' hseep-qz-opt" data-idx="' + i + '" ' + (h.quizAnswered ? 'disabled' : '') + '><span class="q-letter">' + letter + '</span><span class="q-opt-text">' + opt + '</span></button>';
          }).join('')}
        </div>
        ${h.quizAnswered ? `
          <div class="quiz-explanation" style="margin-top:12px">
            <strong>${h.quizSelected === q.a ? '✅ Correct!' : '❌ Incorrect'}</strong><br>
            ${q.exp || ''}
          </div>
          <button id="hseepQzNext" class="quiz-next-btn" style="margin-top:10px">Next Question →</button>
        ` : ''}
      </div>
    </div>`;

  app.innerHTML = html;

  document.getElementById('hseepQzAbort').addEventListener('click', function() {
    h.quizCat = null; h.quizPool = null; h.quizIdx = 0;
    G.screen = 'hseepMenu'; render();
  });

  if (!h.quizAnswered) {
    document.querySelectorAll('.hseep-qz-opt').forEach(function(btn) {
      btn.addEventListener('click', function() {
        if (h.quizAnswered) return;
        var chosen = parseInt(btn.getAttribute('data-idx'));
        h.quizAnswered = true;
        h.quizSelected = chosen;
        var correct = chosen === q.a;
        if (correct) {
          h.quizScore++;
          h.quizStreak++;
          if (h.quizStreak > (h.quizMaxStreak || 0)) h.quizMaxStreak = h.quizStreak;
          addScore(50);
          addXP(20);
          sfx('correct');
        } else {
          h.quizStreak = 0;
          sfx('wrong');
        }
        render();
      });
    });
  } else {
    var nextBtn = document.getElementById('hseepQzNext');
    if (nextBtn) nextBtn.addEventListener('click', function() {
      h.quizIdx++;
      h.quizAnswered = false;
      h.quizSelected = undefined;
      Tracker.startQuestion();
      render();
    });
  }
}

function renderHSEEPQuizResults() {
  var app = $('app');
  var h = G.hseep || {};
  var total = (h.quizPool || []).length;
  var score = h.quizScore || 0;
  var pct = Math.round((score / Math.max(total, 1)) * 100);
  var grade = getGrade(pct);
  var gradeClass = grade === 'S' ? 's' : grade === 'A' ? 'a' : grade === 'B' ? 'b' : 'c';
  G.modesCompleted.add('hseep_quiz');
  Tracker.endMode(score);
  checkAchievements();
  if (pct === 100 && total > 0) G.perfectModes++;
  if (grade === 'S' || grade === 'A') confetti();
  var catInfo = hseepCategoryInfo(h.quizCat || 'all');

  app.innerHTML = `
    <div class="screen results-screen">
      ${charBubble('mentor', grade === 'S' || grade === 'A' ? 'Outstanding HSEEP knowledge! You are ready to design real exercises!' : 'Good effort! Review the explanations and try again to master HSEEP.', { success: grade === 'S' || grade === 'A' })}
      <div class="result-big anim-in">📋</div>
      <div class="result-sub">HSEEP Quiz Complete — ${catInfo.label}</div>
      <div class="result-grade ${gradeClass} anim-in">Grade: ${grade}</div>
      <div class="result-stats anim-in">
        <div class="r-stat"><div class="val">${score}/${total}</div><div class="lbl">Correct</div></div>
        <div class="r-stat"><div class="val">${pct}%</div><div class="lbl">Accuracy</div></div>
        <div class="r-stat"><div class="val">${h.quizMaxStreak || 0}</div><div class="lbl">Max Streak</div></div>
      </div>
      <div class="result-actions anim-in" id="hseepQzResultBtns"></div>
    </div>`;

  var btns = document.getElementById('hseepQzResultBtns');
  var retryBtn = document.createElement('button');
  retryBtn.className = 'btn-primary';
  retryBtn.textContent = '🔄 Retry Same Category';
  retryBtn.addEventListener('click', function() {
    h.quizCat = null; h.quizPool = null; h.quizIdx = 0;
    h.quizScore = 0; h.quizAnswered = false;
    G.screen = 'hseepQuiz'; render();
  });
  var menuBtn = document.createElement('button');
  menuBtn.className = 'btn-outline';
  menuBtn.textContent = '📋 HSEEP Menu';
  menuBtn.addEventListener('click', function() {
    h.quizCat = null; G.screen = 'hseepMenu'; render();
  });
  var modesBtn = document.createElement('button');
  modesBtn.className = 'btn-outline';
  modesBtn.textContent = '🏠 Mission Select';
  modesBtn.addEventListener('click', function() { G.screen = 'modes'; render(); });
  btns.appendChild(retryBtn);
  btns.appendChild(menuBtn);
  btns.appendChild(modesBtn);
}

// ============================================
// HSEEP SCENARIO (Exercise Design Workshop)
// ============================================
function renderHSEEPScenario() {
  var app = $('app');
  var scenarios = window.HSEEP_SCENARIOS;
  if (!scenarios || scenarios.length === 0) {
    app.innerHTML = '<div class="screen"><div style="padding:20px;text-align:center">HSEEP scenarios not loaded.</div></div>';
    return;
  }

  var h = G.hseep || {};
  G.hseep = h;

  // Phase: scenario list
  if (h.scenIdx === undefined || h.scenIdx === null) {
    var html = '<div class="screen"><div style="padding:16px">';
    html += '<div style="display:flex;align-items:center;gap:10px;margin-bottom:16px">';
    html += '<button id="hseepScBack" style="padding:8px 14px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.12);color:var(--text-muted);border-radius:8px;cursor:pointer;font-size:0.85rem">← Back</button>';
    html += '<h2 style="font-size:1.05rem;font-weight:700;flex:1">Exercise Design Workshop</h2></div>';
    html += '<div style="display:flex;flex-direction:column;gap:10px">';
    scenarios.forEach(function(sc, i) {
      var done = (h.scenCompleted || {})[i];
      html += '<button class="hseep-sc-item" data-sci="' + i + '" style="display:flex;align-items:flex-start;gap:12px;padding:14px 16px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:12px;cursor:pointer;width:100%;text-align:left">';
      html += '<div style="font-size:1.6rem;flex-shrink:0">' + (done ? '✅' : '🏗️') + '</div>';
      html += '<div><div style="font-weight:700;font-size:0.9rem;color:#66bb6a">' + sc.title + '</div>';
      html += '<div style="font-size:0.75rem;color:var(--text-muted);margin-top:2px">' + sc.exerciseType + ' · ' + (sc.estimatedTime || '') + ' · ' + (sc.steps || []).length + ' steps</div>';
      html += '<div style="font-size:0.75rem;color:var(--text-muted);margin-top:4px">' + (sc.description || '').substring(0, 80) + '...</div>';
      html += '</div></button>';
    });
    html += '</div></div></div>';
    app.innerHTML = html;

    document.getElementById('hseepScBack').addEventListener('click', function() {
      G.screen = 'hseepMenu'; render();
    });
    document.querySelectorAll('.hseep-sc-item').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var idx = parseInt(btn.getAttribute('data-sci'));
        h.scenIdx = idx;
        h.scenStepIdx = 0;
        h.scenScore = 0;
        h.scenAnswered = false;
        h.scenSelected = undefined;
        h.scenBuilt = [];
        Tracker.startMode('hseep_scenario');
        render();
      });
    });
    return;
  }

  // Phase: step-by-step scenario
  var sc = scenarios[h.scenIdx];
  var steps = sc.steps || [];

  if (h.scenStepIdx >= steps.length) {
    // Scenario complete
    renderHSEEPScenarioResult(sc);
    return;
  }

  var step = steps[h.scenStepIdx];
  var stepNum = h.scenStepIdx + 1;
  var totalSteps = steps.length;
  var pct = Math.round(((stepNum - 1) / totalSteps) * 100);

  app.innerHTML = `
    <div class="screen quiz-game">
      <div style="padding:12px 16px 0">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <button id="hseepScAbort" style="padding:6px 12px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.1);color:var(--text-muted);border-radius:8px;cursor:pointer;font-size:0.8rem">✕ Quit</button>
          <div style="flex:1;background:rgba(255,255,255,0.08);border-radius:6px;height:6px;overflow:hidden">
            <div style="height:100%;background:linear-gradient(90deg,#66bb6a,#26a69a);width:${pct}%;transition:width 0.3s"></div>
          </div>
          <div style="font-size:0.8rem;color:var(--text-muted)">Step ${stepNum}/${totalSteps}</div>
        </div>
        <div style="font-size:0.8rem;color:#66bb6a;font-weight:600;margin-bottom:4px">🏗️ ${sc.title}</div>
        <div style="font-size:0.75rem;color:var(--text-muted);margin-bottom:8px">${step.phase || ''}</div>
      </div>
      <div class="quiz-q-card anim-in" style="margin:0 12px">
        <div class="quiz-q-text" style="font-size:0.93rem;margin-bottom:14px">${step.prompt || ''}</div>
        <div class="quiz-opts">
          ${(step.options || []).map(function(opt, i) {
            var letter = String.fromCharCode(65 + i);
            var cls = '';
            if (h.scenAnswered) {
              if (i === step.correct) cls = 'correct';
              else if (i === h.scenSelected && i !== step.correct) cls = 'wrong';
            }
            return '<button class="q-opt ' + cls + ' hseep-sc-opt" data-sci="' + i + '" ' + (h.scenAnswered ? 'disabled' : '') + '><span class="q-letter">' + letter + '</span><span class="q-opt-text">' + opt + '</span></button>';
          }).join('')}
        </div>
        ${h.scenAnswered ? `
          <div class="quiz-explanation" style="margin-top:12px">
            <strong>${h.scenSelected === step.correct ? '✅ Good decision!' : '❌ Reconsidering...'}</strong><br>
            ${step.feedback || ''}
          </div>
          ${step.templateOutput ? `<div style="background:rgba(68,138,255,0.07);border:1px solid rgba(68,138,255,0.2);border-radius:8px;padding:10px;margin-top:10px;font-family:monospace;font-size:0.72rem;color:#b0b8d0;white-space:pre-wrap;line-height:1.5">${step.templateOutput}</div>` : ''}
          <button id="hseepScNext" class="quiz-next-btn" style="margin-top:10px">${h.scenStepIdx + 1 >= steps.length ? 'View Results →' : 'Next Step →'}</button>
        ` : ''}
      </div>
    </div>`;

  document.getElementById('hseepScAbort').addEventListener('click', function() {
    h.scenIdx = null; G.screen = 'hseepScenario'; render();
  });

  if (!h.scenAnswered) {
    document.querySelectorAll('.hseep-sc-opt').forEach(function(btn) {
      btn.addEventListener('click', function() {
        if (h.scenAnswered) return;
        var chosen = parseInt(btn.getAttribute('data-sci'));
        h.scenAnswered = true;
        h.scenSelected = chosen;
        if (chosen === step.correct) {
          h.scenScore++;
          addScore(60);
          addXP(25);
          sfx('correct');
        } else {
          sfx('wrong');
        }
        if (step.templateOutput) h.scenBuilt.push(step.templateOutput);
        render();
      });
    });
  } else {
    var nextBtn = document.getElementById('hseepScNext');
    if (nextBtn) nextBtn.addEventListener('click', function() {
      h.scenStepIdx++;
      h.scenAnswered = false;
      h.scenSelected = undefined;
      render();
    });
  }
}

function renderHSEEPScenarioResult(sc) {
  var app = $('app');
  var h = G.hseep || {};
  var steps = (sc || {}).steps || [];
  var total = steps.length;
  var score = h.scenScore || 0;
  var pct = Math.round((score / Math.max(total, 1)) * 100);
  var grade = getGrade(pct);
  var gradeClass = grade === 'S' ? 's' : grade === 'A' ? 'a' : grade === 'B' ? 'b' : 'c';
  G.modesCompleted.add('hseep_scenario');
  Tracker.endMode(score);
  checkAchievements();
  if (pct === 100 && total > 0) G.perfectModes++;
  if (grade === 'S' || grade === 'A') confetti();
  h.scenCompleted = h.scenCompleted || {};
  h.scenCompleted[h.scenIdx] = true;

  app.innerHTML = `
    <div class="screen results-screen">
      ${charBubble('mentor', grade === 'S' || grade === 'A' ? 'Excellent exercise design decisions! You built a solid exercise framework.' : 'Good practice! Review the template outputs and refine your design skills.', { success: grade === 'S' || grade === 'A' })}
      <div class="result-big anim-in">🏗️</div>
      <div class="result-sub">Scenario Complete: ${(sc || {}).title || ''}</div>
      <div class="result-grade ${gradeClass} anim-in">Grade: ${grade}</div>
      <div class="result-stats anim-in">
        <div class="r-stat"><div class="val">${score}/${total}</div><div class="lbl">Correct Decisions</div></div>
        <div class="r-stat"><div class="val">${pct}%</div><div class="lbl">Accuracy</div></div>
        <div class="r-stat"><div class="val">${(h.scenBuilt || []).length}</div><div class="lbl">Template Sections</div></div>
      </div>
      <div class="result-actions anim-in" id="hseepScResultBtns"></div>
    </div>`;

  var btns = document.getElementById('hseepScResultBtns');
  var listBtn = document.createElement('button');
  listBtn.className = 'btn-primary';
  listBtn.textContent = '📋 Choose Another Scenario';
  listBtn.addEventListener('click', function() {
    h.scenIdx = null; h.scenStepIdx = 0;
    G.screen = 'hseepScenario'; render();
  });
  var menuBtn = document.createElement('button');
  menuBtn.className = 'btn-outline';
  menuBtn.textContent = '📋 HSEEP Menu';
  menuBtn.addEventListener('click', function() { G.screen = 'hseepMenu'; render(); });
  var modesBtn = document.createElement('button');
  modesBtn.className = 'btn-outline';
  modesBtn.textContent = '🏠 Mission Select';
  modesBtn.addEventListener('click', function() { G.screen = 'modes'; render(); });
  btns.appendChild(listBtn);
  btns.appendChild(menuBtn);
  btns.appendChild(modesBtn);
}

// ============================================
// HSEEP TEMPLATE BUILDER
// ============================================
function renderHSEEPTemplate() {
  var app = $('app');
  var templates = window.HSEEP_TEMPLATES;
  if (!templates) {
    app.innerHTML = '<div class="screen"><div style="padding:20px;text-align:center">HSEEP templates not loaded.</div></div>';
    return;
  }

  var h = G.hseep || {};
  G.hseep = h;

  var TEMPLATE_KEYS = ['sitman', 'explan', 'msel', 'eeg', 'aar_ip'];
  var TEMPLATE_LABELS = {
    sitman: { icon: '📓', label: 'Situation Manual (SitMan)', color: '#448aff' },
    explan: { icon: '📑', label: 'Exercise Plan (ExPlan)', color: '#66bb6a' },
    msel: { icon: '📋', label: 'Master Scenario Events List (MSEL)', color: '#ff9800' },
    eeg: { icon: '📊', label: 'Exercise Evaluation Guide (EEG)', color: '#ab47bc' },
    aar_ip: { icon: '📈', label: 'After-Action Report (AAR/IP)', color: '#26a69a' }
  };

  // Phase: template list
  if (!h.templateKey) {
    var html = '<div class="screen"><div style="padding:16px">';
    html += '<div style="display:flex;align-items:center;gap:10px;margin-bottom:16px">';
    html += '<button id="hseepTplBack" style="padding:8px 14px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.12);color:var(--text-muted);border-radius:8px;cursor:pointer;font-size:0.85rem">← Back</button>';
    html += '<h2 style="font-size:1.05rem;font-weight:700;flex:1">HSEEP Template Builder</h2></div>';
    html += '<div style="display:flex;flex-direction:column;gap:10px">';
    TEMPLATE_KEYS.forEach(function(key) {
      var tpl = templates[key];
      if (!tpl) return;
      var info = TEMPLATE_LABELS[key] || { icon: '📄', label: key, color: '#8b8fa3' };
      html += '<button class="hseep-tpl-item" data-tpl="' + key + '" style="display:flex;align-items:flex-start;gap:12px;padding:14px 16px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:12px;cursor:pointer;width:100%;text-align:left">';
      html += '<div style="font-size:1.6rem;flex-shrink:0">' + info.icon + '</div>';
      html += '<div><div style="font-weight:700;font-size:0.9rem;color:' + info.color + '">' + info.label + '</div>';
      html += '<div style="font-size:0.75rem;color:var(--text-muted);margin-top:3px">' + (tpl.description || '').substring(0, 90) + '...</div>';
      html += '<div style="font-size:0.73rem;color:var(--text-muted);margin-top:4px">Used for: ' + (Array.isArray(tpl.usedFor) ? tpl.usedFor.join(', ') : '') + '</div>';
      html += '</div></button>';
    });
    html += '</div></div></div>';
    app.innerHTML = html;

    document.getElementById('hseepTplBack').addEventListener('click', function() {
      G.screen = 'hseepMenu'; render();
    });
    document.querySelectorAll('.hseep-tpl-item').forEach(function(btn) {
      btn.addEventListener('click', function() {
        h.templateKey = btn.getAttribute('data-tpl');
        h.templateSectionIdx = 0;
        Tracker.startMode('hseep_template');
        render();
      });
    });
    return;
  }

  // Phase: section-by-section
  var tpl = templates[h.templateKey];
  if (!tpl) { h.templateKey = null; render(); return; }
  var sections = tpl.sections || [];
  var info = TEMPLATE_LABELS[h.templateKey] || { icon: '📄', label: h.templateKey, color: '#8b8fa3' };

  if (h.templateSectionIdx >= sections.length) {
    // Template complete
    renderHSEEPTemplateResult(tpl, info);
    return;
  }

  var section = sections[h.templateSectionIdx];
  var secNum = h.templateSectionIdx + 1;
  var totalSec = sections.length;
  var pct = Math.round(((secNum - 1) / totalSec) * 100);

  // Build section content HTML
  var secContentHtml = '';
  if (section.fields && Array.isArray(section.fields)) {
    section.fields.forEach(function(f) {
      if (typeof f === 'string') {
        secContentHtml += '<div style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06);font-size:0.82rem;color:var(--text-muted)">' + f + '</div>';
      } else {
        secContentHtml += '<div style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">';
        secContentHtml += '<div style="font-size:0.8rem;font-weight:600;color:#b0b8d0">' + (f.field || '') + '</div>';
        if (f.example) secContentHtml += '<div style="font-size:0.78rem;color:#66bb6a;margin-top:2px">Example: ' + f.example + '</div>';
        if (f.tip) secContentHtml += '<div style="font-size:0.75rem;color:var(--text-muted);font-style:italic;margin-top:2px">Tip: ' + f.tip + '</div>';
        secContentHtml += '</div>';
      }
    });
  } else if (section.subsections) {
    section.subsections.forEach(function(sub) {
      secContentHtml += '<div style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">';
      secContentHtml += '<div style="font-size:0.82rem;font-weight:600;color:#b0b8d0">' + (sub.title || '') + '</div>';
      secContentHtml += '<div style="font-size:0.78rem;color:var(--text-muted);margin-top:2px">' + (sub.content || '') + '</div>';
      secContentHtml += '</div>';
    });
  } else if (section.structure) {
    var st = section.structure;
    if (st.scenarioNarrative) secContentHtml += '<div style="font-size:0.8rem;color:var(--text-muted);padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.06)"><strong>Scenario Narrative:</strong> ' + st.scenarioNarrative + '</div>';
    if (st.keyIssues) secContentHtml += '<div style="font-size:0.8rem;color:var(--text-muted);padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.06)"><strong>Key Issues:</strong> ' + st.keyIssues + '</div>';
    if (st.discussionQuestions) secContentHtml += '<div style="font-size:0.8rem;color:var(--text-muted);padding:6px 0"><strong>Discussion Questions:</strong> ' + st.discussionQuestions + '</div>';
  } else if (section.content) {
    secContentHtml += '<div style="font-size:0.82rem;color:var(--text-muted);padding:6px 0;line-height:1.6">' + section.content + '</div>';
  }
  // Handle observationFormat at section level (AAR/IP capability analysis)
  if (section.observationFormat) {
    var obs = section.observationFormat;
    if (obs.strengthObservation) {
      secContentHtml += '<div style="background:rgba(76,175,80,0.08);border:1px solid rgba(76,175,80,0.2);border-radius:8px;padding:10px;margin-top:8px">';
      secContentHtml += '<div style="font-size:0.82rem;font-weight:700;color:#66bb6a;margin-bottom:6px">\u2705 Strength Example: ' + obs.strengthObservation.title + '</div>';
      secContentHtml += '<div style="font-size:0.76rem;color:var(--text-muted);line-height:1.5"><strong>Reference:</strong> ' + obs.strengthObservation.reference + '</div>';
      secContentHtml += '<div style="font-size:0.76rem;color:var(--text-muted);line-height:1.5;margin-top:4px"><strong>Analysis:</strong> ' + obs.strengthObservation.analysis + '</div>';
      secContentHtml += '<div style="font-size:0.76rem;color:var(--text-muted);line-height:1.5;margin-top:4px"><strong>Recommendation:</strong> ' + obs.strengthObservation.recommendation + '</div>';
      secContentHtml += '</div>';
    }
    if (obs.improvementObservation) {
      secContentHtml += '<div style="background:rgba(255,82,82,0.08);border:1px solid rgba(255,82,82,0.2);border-radius:8px;padding:10px;margin-top:8px">';
      secContentHtml += '<div style="font-size:0.82rem;font-weight:700;color:#ff5252;margin-bottom:6px">\u26a0\ufe0f Area for Improvement: ' + obs.improvementObservation.title + '</div>';
      secContentHtml += '<div style="font-size:0.76rem;color:var(--text-muted);line-height:1.5"><strong>Reference:</strong> ' + obs.improvementObservation.reference + '</div>';
      secContentHtml += '<div style="font-size:0.76rem;color:var(--text-muted);line-height:1.5;margin-top:4px"><strong>Analysis:</strong> ' + obs.improvementObservation.analysis + '</div>';
      secContentHtml += '<div style="font-size:0.76rem;color:var(--text-muted);line-height:1.5;margin-top:4px"><strong>Recommendation:</strong> ' + obs.improvementObservation.recommendation + '</div>';
      secContentHtml += '</div>';
    }
  }
  if (section.purpose) {
    secContentHtml = '<div style="font-size:0.8rem;color:#448aff;margin-bottom:8px;font-style:italic">' + section.purpose + '</div>' + secContentHtml;
  }
  if (tpl.keyFact && secNum === 1) {
    secContentHtml += '<div style="background:rgba(255,183,77,0.1);border:1px solid rgba(255,183,77,0.25);border-radius:8px;padding:10px;margin-top:10px;font-size:0.78rem;color:#ffb74d">💡 Key Fact: ' + tpl.keyFact + '</div>';
  }

  app.innerHTML = `
    <div class="screen">
      <div style="padding:12px 16px 0">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <button id="hseepTplAbort" style="padding:6px 12px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.1);color:var(--text-muted);border-radius:8px;cursor:pointer;font-size:0.8rem">✕ Quit</button>
          <div style="flex:1;background:rgba(255,255,255,0.08);border-radius:6px;height:6px;overflow:hidden">
            <div style="height:100%;background:linear-gradient(90deg,${info.color},rgba(255,255,255,0.4));width:${pct}%;transition:width 0.3s"></div>
          </div>
          <div style="font-size:0.8rem;color:var(--text-muted)">Section ${secNum}/${totalSec}</div>
        </div>
        <div style="font-size:0.85rem;color:${info.color};font-weight:700;margin-bottom:4px">${info.icon} ${info.label}</div>
      </div>
      <div style="margin:0 12px 16px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:14px;padding:14px">
        <div style="font-size:1rem;font-weight:700;margin-bottom:10px">Section ${section.sectionNumber || secNum}: ${section.title || ''}</div>
        <div id="hseepTplContent">${secContentHtml}</div>
        <button id="hseepTplNext" class="quiz-next-btn" style="margin-top:14px;width:100%">${secNum >= totalSec ? 'Complete Template ✓' : 'Next Section →'}</button>
      </div>
    </div>`;

  document.getElementById('hseepTplAbort').addEventListener('click', function() {
    h.templateKey = null; G.screen = 'hseepTemplate'; render();
  });
  document.getElementById('hseepTplNext').addEventListener('click', function() {
    h.templateSectionIdx++;
    addScore(30);
    addXP(15);
    render();
  });
}

function renderHSEEPTemplateResult(tpl, info) {
  var app = $('app');
  var h = G.hseep || {};
  G.modesCompleted.add('hseep_template');
  Tracker.endMode(1);
  checkAchievements();
  confetti();

  app.innerHTML = `
    <div class="screen results-screen">
      ${charBubble('mentor', 'You have mastered the ' + ((tpl || {}).abbreviation || '') + ' template structure. Now apply it to a real exercise!', { success: true })}
      <div class="result-big anim-in">${(info || {}).icon || '📄'}</div>
      <div class="result-sub">${(info || {}).label || 'Template'} — Complete</div>
      ${tpl && tpl.commonMistakes ? `<div style="background:rgba(255,50,50,0.07);border:1px solid rgba(255,50,50,0.2);border-radius:12px;padding:14px;margin:12px 0;text-align:left">
        <div style="font-size:0.85rem;font-weight:700;margin-bottom:8px;color:#ff5252">⚠️ Common Mistakes to Avoid</div>
        ${tpl.commonMistakes.map(function(m) { return '<div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:5px">• ' + m + '</div>'; }).join('')}
      </div>` : ''}
      <div class="result-actions anim-in" id="hseepTplResultBtns"></div>
    </div>`;

  var btns = document.getElementById('hseepTplResultBtns');
  var listBtn = document.createElement('button');
  listBtn.className = 'btn-primary';
  listBtn.textContent = '📄 Choose Another Template';
  listBtn.addEventListener('click', function() {
    h.templateKey = null; h.templateSectionIdx = 0;
    G.screen = 'hseepTemplate'; render();
  });
  var menuBtn = document.createElement('button');
  menuBtn.className = 'btn-outline';
  menuBtn.textContent = '📋 HSEEP Menu';
  menuBtn.addEventListener('click', function() { G.screen = 'hseepMenu'; render(); });
  var modesBtn = document.createElement('button');
  modesBtn.className = 'btn-outline';
  modesBtn.textContent = '🏠 Mission Select';
  modesBtn.addEventListener('click', function() { G.screen = 'modes'; render(); });
  btns.appendChild(listBtn);
  btns.appendChild(menuBtn);
  btns.appendChild(modesBtn);
}

// ============================================
// HSEEP CAMPAIGN MAP
// ============================================
function renderHSEEPCampaignMap() {
  var app = $('app');
  var campaign = window.HSEEP_CAMPAIGN;
  if (!campaign) {
    app.innerHTML = '<div class="screen"><div style="padding:20px;text-align:center">HSEEP campaign not loaded.</div></div>';
    return;
  }

  var h = G.hseep || {};
  G.hseep = h;
  h.campaignProgress = h.campaignProgress || {};

  var chapters = campaign.chapters || [];
  var milestones = campaign.milestones || [];
  var totalXP = h.campaignXP || 0;

  // Find current milestone
  var milestone = milestones[0] || {};
  for (var mi = milestones.length - 1; mi >= 0; mi--) {
    if (totalXP >= (milestones[mi].minScore || 0)) { milestone = milestones[mi]; break; }
  }

  var chapterHtml = chapters.map(function(ch, i) {
    var chNum = i + 1;
    var done = h.campaignProgress[chNum] && h.campaignProgress[chNum].completed;
    var locked = chNum > 1 && !h.campaignProgress[chNum - 1];
    var diffColor = ch.difficulty === 'expert' ? '#f44336' : ch.difficulty === 'hard' ? '#ff9800' : ch.difficulty === 'normal' ? '#448aff' : '#66bb6a';
    return '<button class="hseep-camp-ch" data-chnum="' + chNum + '" ' + (locked ? 'disabled' : '') + ' style="display:flex;align-items:center;gap:12px;padding:12px 14px;background:' + (done ? 'rgba(102,187,106,0.08)' : locked ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.04)') + ';border:1px solid ' + (done ? 'rgba(102,187,106,0.3)' : locked ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.1)') + ';border-radius:12px;cursor:' + (locked ? 'not-allowed' : 'pointer') + ';width:100%;text-align:left;opacity:' + (locked ? '0.45' : '1') + '">' +
      '<div style="font-size:1.4rem;flex-shrink:0">' + (done ? '✅' : locked ? '🔒' : '⚔️') + '</div>' +
      '<div style="flex:1">' +
        '<div style="font-size:0.82rem;font-weight:700">Ch.' + chNum + ': ' + ch.title + '</div>' +
        '<div style="font-size:0.72rem;color:var(--text-muted);margin-top:1px">' + (ch.subtitle || '') + '</div>' +
      '</div>' +
      '<div style="text-align:right;flex-shrink:0">' +
        '<div style="font-size:0.7rem;color:' + diffColor + ';font-weight:600">' + (ch.difficulty || 'normal').toUpperCase() + '</div>' +
        '<div style="font-size:0.68rem;color:var(--text-muted)">' + (ch.xpGoal || 0) + ' XP</div>' +
      '</div>' +
    '</button>';
  }).join('');

  app.innerHTML = `
    <div class="screen">
      <div style="padding:16px">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px">
          <button id="hseepCampBack" style="padding:8px 14px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.12);color:var(--text-muted);border-radius:8px;cursor:pointer;font-size:0.85rem">← Back</button>
          <div style="flex:1">
            <h2 style="font-size:1rem;font-weight:700;margin:0">${campaign.title || 'HSEEP Campaign'}</h2>
            <div style="font-size:0.72rem;color:var(--text-muted)">${campaign.subtitle || ''}</div>
          </div>
        </div>
        <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:12px;margin-bottom:14px;display:flex;align-items:center;gap:12px">
          <div style="font-size:1.8rem">${milestone.rank === 'HSEEP Master' ? '🏆' : '🎖️'}</div>
          <div>
            <div style="font-size:0.85rem;font-weight:700;color:${milestone.color || '#ffd700'}">${milestone.rank || 'Recruit'}</div>
            <div style="font-size:0.72rem;color:var(--text-muted);margin-top:1px">${totalXP} XP earned · ${milestone.desc || ''}</div>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px">${chapterHtml}</div>
      </div>
    </div>`;

  document.getElementById('hseepCampBack').addEventListener('click', function() {
    G.screen = 'hseepMenu'; render();
  });
  document.querySelectorAll('.hseep-camp-ch').forEach(function(btn) {
    btn.addEventListener('click', function() {
      if (btn.disabled) return;
      var chNum = parseInt(btn.getAttribute('data-chnum'));
      h.campaignChapter = chNum;
      h.campaignPhase = 'cinematic';
      h.campaignQIdx = 0;
      h.campaignQScore = 0;
      h.campaignAnswered = false;
      h.campaignSelected = undefined;
      G.screen = 'hseepCampaignChapter';
      render();
    });
  });
}

// ============================================
// HSEEP CAMPAIGN CHAPTER
// ============================================
function renderHSEEPCampaignChapter() {
  var app = $('app');
  var campaign = window.HSEEP_CAMPAIGN;
  if (!campaign) { G.screen = 'hseepCampaign'; render(); return; }

  var h = G.hseep || {};
  G.hseep = h;
  var chapters = campaign.chapters || [];
  var chIdx = (h.campaignChapter || 1) - 1;
  var ch = chapters[chIdx];
  if (!ch) { G.screen = 'hseepCampaign'; render(); return; }

  var phase = h.campaignPhase || 'cinematic';

  // --- CINEMATIC ---
  if (phase === 'cinematic') {
    var cin = ch.cinematic || {};
    app.innerHTML = `
      <div class="screen">
        <div style="padding:16px">
          <div style="background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:16px;margin-bottom:16px">
            <div style="font-size:0.72rem;color:var(--text-muted);letter-spacing:0.1em;margin-bottom:8px">CHAPTER ${ch.id} — ${ch.subtitle || ''}</div>
            <div style="font-size:1rem;font-weight:700;margin-bottom:12px">${ch.title}</div>
            <div style="font-size:0.82rem;color:#c8cad8;line-height:1.8;white-space:pre-line">${cin.text || ''}</div>
            ${cin.atmosphere ? '<div style="margin-top:12px;font-size:0.75rem;color:var(--text-muted);font-style:italic">🎬 ' + cin.atmosphere + '</div>' : ''}
          </div>
          <button id="hseepCinNext" style="display:block;width:100%;padding:14px;background:linear-gradient(135deg,rgba(68,138,255,0.2),rgba(124,77,255,0.15));border:1px solid rgba(68,138,255,0.4);color:#fff;font-weight:700;border-radius:12px;cursor:pointer;font-size:0.95rem">Read Briefing →</button>
          <button id="hseepCinBack" style="display:block;width:100%;padding:10px;margin-top:8px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);color:var(--text-muted);border-radius:12px;cursor:pointer;font-size:0.85rem">← Chapter Map</button>
        </div>
      </div>`;
    document.getElementById('hseepCinNext').addEventListener('click', function() {
      h.campaignPhase = 'briefing'; render();
    });
    document.getElementById('hseepCinBack').addEventListener('click', function() {
      G.screen = 'hseepCampaign'; render();
    });
    return;
  }

  // --- BRIEFING ---
  if (phase === 'briefing') {
    // Load questions for this chapter
    var qIds = ch.questions || [];
    h.campaignQPool = qIds.map(function(id) { return hseepGetQuestionById(id); }).filter(Boolean);
    // Shuffle pool
    var pool = h.campaignQPool;
    for (var pi = pool.length - 1; pi > 0; pi--) {
      var pj = Math.floor(Math.random() * (pi + 1));
      var tmp = pool[pi]; pool[pi] = pool[pj]; pool[pj] = tmp;
    }
    h.campaignQIdx = 0;
    h.campaignQScore = 0;
    h.campaignPlayerHP = 100;

    app.innerHTML = `
      <div class="screen">
        <div style="padding:16px">
          <div style="background:rgba(68,138,255,0.07);border:1px solid rgba(68,138,255,0.2);border-radius:16px;padding:16px;margin-bottom:14px">
            <div style="font-size:0.72rem;color:var(--text-muted);letter-spacing:0.1em;margin-bottom:6px">MISSION BRIEFING — CH.${ch.id}</div>
            <div style="font-size:1rem;font-weight:700;margin-bottom:10px">${ch.title}</div>
            <div style="font-size:0.82rem;color:#c8cad8;line-height:1.7">${ch.briefing || ''}</div>
            <div style="margin-top:12px">
              <div style="font-size:0.78rem;font-weight:600;margin-bottom:6px;color:#448aff">Chapter Objectives:</div>
              ${(ch.objectives || []).map(function(obj) { return '<div style="font-size:0.76rem;color:var(--text-muted);margin-bottom:4px">• ' + obj + '</div>'; }).join('')}
            </div>
          </div>
          <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:12px;margin-bottom:14px">
            <div style="display:flex;justify-content:space-between;font-size:0.8rem">
              <div><span style="color:var(--text-muted)">Questions:</span> <strong>${pool.length}</strong></div>
              <div><span style="color:var(--text-muted)">XP Goal:</span> <strong>${ch.xpGoal || 0}</strong></div>
              <div><span style="color:var(--text-muted)">Difficulty:</span> <strong style="text-transform:capitalize">${ch.difficulty || 'normal'}</strong></div>
            </div>
          </div>
          <button id="hseepBriefStart" style="display:block;width:100%;padding:14px;background:linear-gradient(135deg,rgba(68,138,255,0.25),rgba(124,77,255,0.2));border:1px solid rgba(68,138,255,0.5);color:#fff;font-weight:700;border-radius:12px;cursor:pointer;font-size:1rem">⚔️ Start Chapter</button>
          <button id="hseepBriefBack" style="display:block;width:100%;padding:10px;margin-top:8px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);color:var(--text-muted);border-radius:12px;cursor:pointer;font-size:0.85rem">← Back to Cinematic</button>
        </div>
      </div>`;
    document.getElementById('hseepBriefStart').addEventListener('click', function() {
      h.campaignPhase = 'questions'; render();
    });
    document.getElementById('hseepBriefBack').addEventListener('click', function() {
      h.campaignPhase = 'cinematic'; render();
    });
    return;
  }

  // --- QUESTIONS ---
  if (phase === 'questions') {
    var qpool = h.campaignQPool || [];
    var qIdx = h.campaignQIdx || 0;

    if (qIdx >= qpool.length) {
      // Go to boss
      h.campaignPhase = 'boss';
      h.campaignBossAnswered = false;
      h.campaignBossSelected = undefined;
      render();
      return;
    }

    var q = qpool[qIdx];
    var total = qpool.length;
    var pct = Math.round((qIdx / total) * 100);
    var catInfo = hseepCategoryInfo(q.category || '');

    app.innerHTML = `
      <div class="screen quiz-game">
        <div style="padding:12px 16px 0">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
            <div style="font-size:0.78rem;font-weight:700;color:#448aff">⚔️ Ch.${ch.id}: ${ch.title}</div>
            <div style="flex:1;background:rgba(255,255,255,0.08);border-radius:6px;height:5px;overflow:hidden;margin-left:8px">
              <div style="height:100%;background:linear-gradient(90deg,#448aff,#7c4dff);width:${pct}%;transition:width 0.3s"></div>
            </div>
            <div style="font-size:0.78rem;color:var(--text-muted)">${qIdx + 1}/${total}</div>
          </div>
          <div style="display:flex;justify-content:space-between;margin-bottom:8px;font-size:0.75rem">
            <span style="color:var(--text-muted)">${catInfo.icon} ${catInfo.label}</span>
            <span style="color:#66bb6a">Score: ${h.campaignQScore || 0}</span>
          </div>
        </div>
        <div class="quiz-q-card anim-in" style="margin:0 12px">
          <div style="font-size:0.72rem;color:var(--text-muted);margin-bottom:6px">Difficulty: ${(q.diff || 'normal').toUpperCase()}</div>
          <div class="quiz-q-text" style="font-size:0.92rem;margin-bottom:14px">${q.q}</div>
          <div class="quiz-opts">
            ${(q.o || []).map(function(opt, i) {
              var letter = String.fromCharCode(65 + i);
              var cls = '';
              if (h.campaignAnswered) {
                if (i === q.a) cls = 'correct';
                else if (i === h.campaignSelected && i !== q.a) cls = 'wrong';
              }
              return '<button class="q-opt ' + cls + ' hseep-camp-opt" data-qi="' + i + '" ' + (h.campaignAnswered ? 'disabled' : '') + '><span class="q-letter">' + letter + '</span><span class="q-opt-text">' + opt + '</span></button>';
            }).join('')}
          </div>
          ${h.campaignAnswered ? `
            <div class="quiz-explanation" style="margin-top:12px">
              <strong>${h.campaignSelected === q.a ? '✅ Correct!' : '❌ Incorrect'}</strong><br>${q.exp || ''}
            </div>
            <button id="hseepCampQNext" class="quiz-next-btn" style="margin-top:10px">
              ${qIdx + 1 >= total ? 'Boss Battle! 👹' : 'Next Question →'}
            </button>
          ` : ''}
        </div>
      </div>`;

    if (!h.campaignAnswered) {
      document.querySelectorAll('.hseep-camp-opt').forEach(function(btn) {
        btn.addEventListener('click', function() {
          if (h.campaignAnswered) return;
          var chosen = parseInt(btn.getAttribute('data-qi'));
          h.campaignAnswered = true;
          h.campaignSelected = chosen;
          if (chosen === q.a) {
            h.campaignQScore = (h.campaignQScore || 0) + 1;
            addScore(80);
            addXP(30);
            sfx('correct');
          } else {
            h.campaignPlayerHP = Math.max(0, (h.campaignPlayerHP || 100) - 15);
            sfx('wrong');
          }
          render();
        });
      });
    } else {
      var nextBtn = document.getElementById('hseepCampQNext');
      if (nextBtn) nextBtn.addEventListener('click', function() {
        h.campaignQIdx++;
        h.campaignAnswered = false;
        h.campaignSelected = undefined;
        render();
      });
    }
    return;
  }

  // --- BOSS BATTLE ---
  if (phase === 'boss') {
    var boss = ch.boss || {};
    var bossAnswered = h.campaignBossAnswered || false;
    var bossSelected = h.campaignBossSelected;
    var bossCorrect = bossSelected === boss.correct;

    app.innerHTML = `
      <div class="screen">
        <div style="padding:16px">
          ${charBubble('villain', 'Final challenge! Think carefully before answering...')}
          <div style="background:linear-gradient(135deg,rgba(255,50,50,0.1),rgba(255,100,0,0.07));border:1px solid rgba(255,50,50,0.3);border-radius:16px;padding:14px;margin-bottom:14px">
            <div style="font-size:0.72rem;color:#ff5252;font-weight:700;letter-spacing:0.08em;margin-bottom:6px">👹 BOSS BATTLE: ${boss.title || ''}</div>
            <div style="font-size:0.88rem;color:#c8cad8;line-height:1.7">${boss.scenario || ''}</div>
          </div>
          <div class="quiz-opts">
            ${(boss.options || []).map(function(opt, i) {
              var letter = String.fromCharCode(65 + i);
              var cls = '';
              if (bossAnswered) {
                if (i === boss.correct) cls = 'correct';
                else if (i === bossSelected && i !== boss.correct) cls = 'wrong';
              }
              return '<button class="q-opt ' + cls + ' hseep-boss-opt" data-bi="' + i + '" ' + (bossAnswered ? 'disabled' : '') + '><span class="q-letter">' + letter + '</span><span class="q-opt-text">' + opt + '</span></button>';
            }).join('')}
          </div>
          ${bossAnswered ? `
            <div class="quiz-explanation" style="margin-top:12px">
              <strong>${bossCorrect ? '🏆 Boss Defeated!' : '💀 Boss Wins This Round'}</strong><br>${boss.feedback || ''}
            </div>
            <button id="hseepBossNext" class="quiz-next-btn" style="margin-top:12px;width:100%">View Chapter Results →</button>
          ` : ''}
        </div>
      </div>`;

    if (!bossAnswered) {
      document.querySelectorAll('.hseep-boss-opt').forEach(function(btn) {
        btn.addEventListener('click', function() {
          if (h.campaignBossAnswered) return;
          var chosen = parseInt(btn.getAttribute('data-bi'));
          h.campaignBossAnswered = true;
          h.campaignBossSelected = chosen;
          h.campaignBossCorrect = chosen === boss.correct;
          if (h.campaignBossCorrect) {
            var xpReward = boss.xpReward || 200;
            h.campaignXP = (h.campaignXP || 0) + xpReward;
            addScore(500);
            addXP(xpReward);
            sfx('correct');
            confetti();
          } else {
            sfx('wrong');
          }
          render();
        });
      });
    } else {
      var bossNext = document.getElementById('hseepBossNext');
      if (bossNext) bossNext.addEventListener('click', function() {
        G.screen = 'hseepCampaignResult';
        render();
      });
    }
    return;
  }
}

// ============================================
// HSEEP CAMPAIGN RESULT
// ============================================
function renderHSEEPCampaignResult() {
  var app = $('app');
  var campaign = window.HSEEP_CAMPAIGN;
  var h = G.hseep || {};
  G.hseep = h;

  var chapters = (campaign || {}).chapters || [];
  var chIdx = (h.campaignChapter || 1) - 1;
  var ch = chapters[chIdx] || {};
  var boss = ch.boss || {};

  var qpool = h.campaignQPool || [];
  var qScore = h.campaignQScore || 0;
  var qTotal = qpool.length;
  var bossCorrect = h.campaignBossCorrect || false;
  var totalScore = qScore + (bossCorrect ? 1 : 0);
  var totalPossible = qTotal + 1;
  var pct = Math.round((totalScore / Math.max(totalPossible, 1)) * 100);
  var grade = getGrade(pct);
  var gradeClass = grade === 'S' ? 's' : grade === 'A' ? 'a' : grade === 'B' ? 'b' : 'c';
  var xpEarned = h.campaignXP || 0;

  // Mark chapter as completed
  h.campaignProgress = h.campaignProgress || {};
  if (grade === 'S' || grade === 'A' || bossCorrect || pct >= 60) {
    h.campaignProgress[h.campaignChapter] = { completed: true, grade: grade, xp: xpEarned };
    G.modesCompleted.add('hseep_campaign_ch' + h.campaignChapter);
    Tracker.endMode(totalScore);
    checkAchievements();
    addXP(Math.round((ch.xpGoal || 500) * (pct / 100)));
  }

  var isFinalChapter = (h.campaignChapter || 1) >= chapters.length;
  var allDone = isFinalChapter && (grade === 'S' || grade === 'A' || bossCorrect);
  if (grade === 'S' || grade === 'A') confetti();

  app.innerHTML = `
    <div class="screen results-screen">
      ${charBubble('mentor', bossCorrect ? 'Outstanding! Chapter complete!' : 'Good effort! Keep pushing toward mastery!', { success: bossCorrect })}
      <div class="result-big anim-in">${bossCorrect ? '🏆' : '📋'}</div>
      <div class="result-sub">Ch.${ch.id || h.campaignChapter}: ${ch.title || ''}</div>
      <div class="result-grade ${gradeClass} anim-in">Grade: ${grade}</div>
      <div class="result-stats anim-in">
        <div class="r-stat"><div class="val">${qScore}/${qTotal}</div><div class="lbl">Questions</div></div>
        <div class="r-stat"><div class="val">${bossCorrect ? 'WIN' : 'LOSS'}</div><div class="lbl">Boss Battle</div></div>
        <div class="r-stat"><div class="val">${pct}%</div><div class="lbl">Overall</div></div>
      </div>
      ${(ch.rewards || []).length > 0 && bossCorrect ? '<div style="background:rgba(255,215,0,0.08);border:1px solid rgba(255,215,0,0.25);border-radius:10px;padding:10px;margin:10px 0;font-size:0.8rem;color:#ffd700">🏅 ' + ch.rewards.join(' · ') + '</div>' : ''}
      ${allDone && boss.isFinalBoss ? '<div style="background:linear-gradient(135deg,rgba(255,215,0,0.12),rgba(255,140,0,0.08));border:1px solid rgba(255,215,0,0.4);border-radius:12px;padding:14px;margin:10px 0;font-size:0.82rem;color:#ffd700;line-height:1.6">' + ((campaign || {}).chapters && campaign.chapters[9] && campaign.chapters[9].completionCinematic ? campaign.chapters[9].completionCinematic.text.substring(0, 300) + '...' : '') + '</div>' : ''}
      <div class="result-actions anim-in" id="hseepCampResultBtns"></div>
    </div>`;

  var btns = document.getElementById('hseepCampResultBtns');

  if (!isFinalChapter) {
    var nextChBtn = document.createElement('button');
    nextChBtn.className = 'btn-primary';
    nextChBtn.textContent = '▶ Next Chapter';
    nextChBtn.addEventListener('click', function() {
      h.campaignChapter = (h.campaignChapter || 1) + 1;
      h.campaignPhase = 'cinematic';
      h.campaignQIdx = 0;
      h.campaignQScore = 0;
      h.campaignAnswered = false;
      h.campaignBossAnswered = false;
      G.screen = 'hseepCampaignChapter';
      render();
    });
    btns.appendChild(nextChBtn);
  }

  var retryBtn = document.createElement('button');
  retryBtn.className = isFinalChapter ? 'btn-primary' : 'btn-outline';
  retryBtn.textContent = '🔄 Retry Chapter';
  retryBtn.addEventListener('click', function() {
    h.campaignPhase = 'cinematic';
    h.campaignQIdx = 0;
    h.campaignQScore = 0;
    h.campaignAnswered = false;
    h.campaignBossAnswered = false;
    G.screen = 'hseepCampaignChapter';
    render();
  });
  var mapBtn = document.createElement('button');
  mapBtn.className = 'btn-outline';
  mapBtn.textContent = '🗺️ Chapter Map';
  mapBtn.addEventListener('click', function() {
    G.screen = 'hseepCampaign'; render();
  });
  var menuBtn = document.createElement('button');
  menuBtn.className = 'btn-outline';
  menuBtn.textContent = '🏠 Mission Select';
  menuBtn.addEventListener('click', function() { G.screen = 'modes'; render(); });
  btns.appendChild(retryBtn);
  btns.appendChild(mapBtn);
  btns.appendChild(menuBtn);
}

// ============================================
// END OF HSEEP GAME MODULE
// ============================================

// =============================================
// CROSS-BORDER CBRNe DRILL — render & flow
// Mode key: crossBorderCbrne
// =============================================
function renderCrossBorderCbrne() {
  const content = window.CROSS_BORDER_CBRNE;
  if (!content) { app.innerHTML = '<div class="screen"><p>Cross-Border CBRNe content failed to load.</p><button class="btn-outline" onclick="G.screen=\'modes\';render();">← Back</button></div>'; return; }
  // Use the per-session randomized step set (built in enterMode). Fall back to
  // the source content only as a defensive default; correctness is carried on
  // each option, so either is safe.
  const steps = (Array.isArray(G.cbxSteps) && G.cbxSteps.length) ? G.cbxSteps : content.steps;
  const step = steps[G.cbxStepIdx];
  if (!step) { finishCrossBorderCbrne(); return; }

  const totalSteps = steps.length;
  const progressPct = Math.round((G.cbxStepIdx / totalSteps) * 100);

  const rolesHtml = content.roles.map(r => {
    const active = (step.role === r.key) || (step.role === 'all');
    return `<div class="cbx-role ${active ? 'active' : ''}">
      <div class="cbx-role-icon">${r.icon}</div>
      <div class="cbx-role-text">
        <div class="cbx-role-name">${r.name}</div>
        <div class="cbx-role-desc">${r.desc}</div>
      </div>
    </div>`;
  }).join('');

  let bodyHtml = '';
  if (step.kind === 'briefing') {
    const matrixRows = content.briefing.matrix.map(m =>
      `<tr><td>${m.hazard}</td><td>${m.sector}</td><td>${m.task}</td><td>${m.inject}</td><td>${m.expected}</td><td>${m.risk}</td></tr>`
    ).join('');
    const semRows = content.semanticsTable.map(s =>
      `<tr><td>${s.sourceSystem}</td><td>${s.sourceTerm}</td><td>${s.dashboardTerm}</td><td>${s.koreanTerm}</td><td>${s.flag}</td></tr>`
    ).join('');
    bodyHtml = `
      <div class="cbx-briefing">
        <h3>${content.briefing.title}</h3>
        <p class="cbx-loc">📍 ${content.briefing.location}</p>
        <p>${content.briefing.summary}</p>
        <div class="cbx-objectives">
          <strong>Drill objectives</strong>
          <ul>${content.briefing.objectives.map(o => `<li>${o}</li>`).join('')}</ul>
        </div>
        <div class="cbx-matrix-wrap">
          <strong>Scenario matrix</strong>
          <div class="cbx-table-scroll">
            <table class="cbx-table">
              <thead><tr><th>Hazard</th><th>Sector</th><th>Task</th><th>Inject</th><th>Expected action</th><th>Failure risk</th></tr></thead>
              <tbody>${matrixRows}</tbody>
            </table>
          </div>
        </div>
        <div class="cbx-matrix-wrap">
          <strong>Medical semantics mapping</strong>
          <div class="cbx-table-scroll">
            <table class="cbx-table">
              <thead><tr><th>Source system</th><th>Source term</th><th>Shared dashboard</th><th>Korean DMAT/START</th><th>Flag / notes</th></tr></thead>
              <tbody>${semRows}</tbody>
            </table>
          </div>
        </div>
        <button class="btn-primary cbx-ack" onclick="advanceCrossBorderCbrne(true)">${step.acknowledge} →</button>
      </div>`;
  } else if (step.kind === 'mcq') {
    const patientHtml = step.patient ? `<div class="cbx-patient"><span class="cbx-pin">🧑‍⚕️ Patient</span> ${step.patient}</div>` : '';
    const optsHtml = step.options.map((opt, i) => {
      const isCorrect = !!(opt.isCorrect || opt.correct);
      let cls = 'cbx-opt';
      if (G.cbxAnswered) {
        if (isCorrect) cls += ' correct';
        if (G.cbxSelected === i && !isCorrect) cls += ' wrong';
      }
      const dis = G.cbxAnswered ? 'disabled' : '';
      return `<button class="${cls}" ${dis} onclick="answerCrossBorderCbrne(${i})">
        <span class="cbx-opt-letter">${String.fromCharCode(65 + i)}</span>
        <span class="cbx-opt-text">${opt.text}</span>
        ${G.cbxAnswered ? `<div class="cbx-opt-why">${opt.why}</div>` : ''}
      </button>`;
    }).join('');
    const nextBtn = G.cbxAnswered
      ? `<button class="btn-primary cbx-next" onclick="advanceCrossBorderCbrne(false)">Next decision →</button>`
      : '';
    const phaseTag = step.phase ? `<span class="cbx-phase">${step.phase}</span>` : '';
    bodyHtml = `
      <div class="cbx-step-card">
        <div class="cbx-step-meta">Decision ${G.cbxStepIdx} / ${totalSteps - 1} ${phaseTag}</div>
        <h3>${step.title}</h3>
        ${patientHtml}
        <p class="cbx-prompt">${step.prompt}</p>
        <div class="cbx-opts">${optsHtml}</div>
        ${nextBtn}
      </div>`;
  }

  app.innerHTML = `
    ${renderHUD('cbxTimer')}
    <div class="screen cbx-screen">
      <div class="cbx-header">
        <span class="cbx-tag">🛂 Cross-Border CBRNe Drill</span>
        <div class="cbx-progress"><div class="cbx-progress-fill" style="width:${progressPct}%"></div></div>
      </div>
      ${charBubble('mentor', step.kind === 'briefing'
        ? 'Briefing first. Read the matrix and the semantics mapping — both will matter during the drill.'
        : 'Decide as the highlighted role. Watch for distractors that match common Kahoot misconceptions.', { delay: 0 })}
      <div class="cbx-roles">${rolesHtml}</div>
      ${bodyHtml}
      <div class="cbx-exit-row">
        <button class="btn-outline" onclick="G.screen='modes';stopAllTimers();render();">← Exit Drill</button>
      </div>
    </div>`;
}

function answerCrossBorderCbrne(idx) {
  if (G.cbxAnswered) return;
  const content = window.CROSS_BORDER_CBRNE;
  const steps = (Array.isArray(G.cbxSteps) && G.cbxSteps.length) ? G.cbxSteps : content.steps;
  const step = steps[G.cbxStepIdx];
  if (!step || step.kind !== 'mcq') return;

  const opt = step.options[idx];
  // Score by option identity, not array position. Options are shuffled per
  // session, so the index is just a display position.
  const correct = !!(opt.isCorrect || opt.correct);
  G.cbxAnswered = true;
  G.cbxSelected = idx;

  const tNow = Date.now();
  const elapsedSec = Math.max(0, Math.round((tNow - (G.cbxBriefingMs || tNow)) / 1000));
  // Per-question response time uses Tracker.questionStartTime so it is
  // independent of the cumulative drill clock.
  const responseTimeSec = Math.max(0, Math.round((tNow - (Tracker.questionStartTime || tNow)) / 1000));
  const displayedOptionOrder = Array.isArray(step.displayedOptionOrder) && step.displayedOptionOrder.length
    ? step.displayedOptionOrder.slice()
    : step.options.map(o => o.id);
  G.cbxAnswerLog.push({
    stepIndex: typeof step.stepIndex === 'number' ? step.stepIndex : G.cbxStepIdx,
    stepId: step.id,
    construct: step.construct || step.metric || null,
    phase: step.phase || null,
    role: step.role,
    promptLabel: step.title || null,
    correctOptionId: step.correctOptionId || null,
    selectedDisplayIndex: idx,
    selectedOptionId: opt.id || null,
    selectedOptionLabel: opt.text || null,
    displayedOptionOrder,
    isCorrect: correct,
    correct, // back-compat
    selected: idx, // back-compat
    elapsedSec,
    responseTimeSec,
    at: new Date().toISOString()
  });
  if (step.metric) G.cbxMetrics.perStepCorrect[step.metric] = correct;

  // Metric capture per step type
  if (step.id === 'triage' && correct) G.cbxMetrics.triageDashboardLatencySec = elapsedSec;
  if (step.id === 'allocation') G.cbxMetrics.handoverDelaySec = elapsedSec;
  if (step.id === 'allocation' && !correct) G.cbxMetrics.contaminatedTransportErrors += 1;
  if (step.id === 'degraded' && correct) G.cbxMetrics.degradedRecoverySec = elapsedSec;

  Tracker.recordAnswer(`crossBorderCbrne_${step.id}`, opt.id || String(idx), correct, {
    stepIndex: typeof step.stepIndex === 'number' ? step.stepIndex : G.cbxStepIdx,
    stepId: step.id,
    construct: step.construct || step.metric || null,
    phase: step.phase || null,
    role: step.role || null,
    promptLabel: step.title || null,
    correctOptionId: step.correctOptionId || null,
    selectedOptionId: opt.id || null,
    selectedOptionLabel: opt.text || null,
    selectedDisplayIndex: idx,
    displayedOptionOrder,
    isCorrect: correct,
    responseTimeSec
  });

  if (correct) {
    sfx('correct');
    flashScreen('green');
    addScore(120);
    addXP(30);
    G.cbxCorrectCount++;
    updateStreak(true);
    G.totalCorrect++;
  } else {
    sfx('wrong');
    shakeScreen();
    addScore(-20);
    updateStreak(false);
  }
  checkAchievements();
  render();
}

function advanceCrossBorderCbrne(fromBriefing) {
  G.cbxStepIdx++;
  G.cbxAnswered = false;
  G.cbxSelected = null;
  Tracker.startQuestion();
  const content = window.CROSS_BORDER_CBRNE;
  const steps = (Array.isArray(G.cbxSteps) && G.cbxSteps.length) ? G.cbxSteps : content.steps;
  if (G.cbxStepIdx >= steps.length) {
    finishCrossBorderCbrne();
    return;
  }
  render();
}

// Build the structured AAR / details payload used for both persistence (Tracker
// endMode `details` field, Firebase mode_results) and the AAR render. Single
// source of truth so admin-side analytics match what the learner sees.
function buildCrossBorderCbrneSummary() {
  const content = window.CROSS_BORDER_CBRNE;
  if (!content) return null;
  const steps = (Array.isArray(G.cbxSteps) && G.cbxSteps.length) ? G.cbxSteps : content.steps;
  const mcqSteps = steps.filter(s => s.kind === 'mcq');
  const total = mcqSteps.length;
  const correct = G.cbxCorrectCount || 0;
  const accuracyPct = total > 0 ? Math.round((correct / total) * 100) : 0;
  const log = (G.cbxAnswerLog || []).slice();
  const m = G.cbxMetrics || {};
  const targets = content.aarTargets || {};
  const perStep = m.perStepCorrect || {};

  const triageOk = !!perStep.triageAccuracy;
  const antidoteOk = !!perStep.antidote;
  const semanticsOk = !!perStep.semantics;
  const preDeconOk = !!perStep.preDecon;
  const degradedOk = !!perStep.degraded;
  const allocationOk = !!perStep.contaminatedTransport;

  const triageLatencyMissed = m.triageDashboardLatencySec != null && m.triageDashboardLatencySec > targets.triageDashboardLatencySec;
  const handoverMissed = m.handoverDelaySec != null && m.handoverDelaySec > targets.handoverDelaySec;
  const degradedRecMissed = m.degradedRecoverySec != null && m.degradedRecoverySec > targets.degradedRecoverySec;

  const strengths = [];
  const improvements = [];
  if (triageOk) strengths.push('MASS/START Red/Immediate classification correct'); else improvements.push('Reinforce MASS/START Red/Immediate criteria for inhalational toxidromes');
  if (antidoteOk) strengths.push('Cyanide antidote (Hydroxocobalamin) selected correctly'); else improvements.push('Cyanide antidote: Hydroxocobalamin — distinguish from Ca-gluconate (HF) and atropine/2-PAM (nerve agents)');
  if (preDeconOk) strengths.push('Pre-decontamination life-saving priority applied'); else improvements.push('Apply Priority 0 life-saving intervention before routine wet decon for arresting patients');
  if (semanticsOk) strengths.push('Cross-border semantic mapping handled with provenance and flag'); else improvements.push('Preserve source label, map to shared dashboard, and flag non-equivalence');
  if ((m.contaminatedTransportErrors || 0) === 0) strengths.push('Zero preventable contaminated transports'); else improvements.push('Avoid transport of non-decontaminated casualties without receiver alert');

  const recs = [];
  if (!semanticsOk) recs.push('Pre-publish a bilingual EU↔KOR triage-term mapping table on the shared COP and rehearse it during quarterly handover drills');
  if (!degradedOk || degradedRecMissed) recs.push('Inject a degraded-network event in every functional drill (≥6 min latency, duplicate / lost messages) and require timestamp + uncertainty flags + radio fallback');
  if (!antidoteOk || !preDeconOk) recs.push('Pre-stage Hydroxocobalamin (Cyanokit) at transport hubs and rehearse the Priority-0 pre-decon algorithm with hot-zone teams');
  if (!allocationOk) recs.push('Codify a receiver-alert + capacity-confirm-before-transport check into the standing cross-border SOP, with a written cross-border notification SLA');
  if (triageLatencyMissed) recs.push(`Reduce triage→dashboard latency: target ≤${targets.triageDashboardLatencySec}s. Use one-tap dashboard entry from field tablets and pre-printed Red/Immediate stickers`);
  if (handoverMissed) recs.push(`Reduce hospital handover delay: target ≤${targets.handoverDelaySec}s. Standardise a 5-line cross-border handover script (ID, agent, decon status, triage, ETA)`);
  if (recs.length === 0) recs.push('Maintain the current playbook: bilingual semantic mapping, degraded-network injects, pre-staged Hydroxocobalamin and pre-transport receiver alerts are all on target. Schedule a quarterly re-drill to prevent decay.');

  // Per-step correctness summary keyed by stepId (admin-side analytics).
  const perStepSummary = mcqSteps.map(s => {
    const entry = log.find(l => l.stepId === s.id);
    return {
      stepIndex: typeof s.stepIndex === 'number' ? s.stepIndex : null,
      stepId: s.id,
      construct: s.construct || s.metric || null,
      phase: s.phase || null,
      role: s.role || null,
      correctOptionId: s.correctOptionId || null,
      selectedOptionId: entry ? (entry.selectedOptionId || null) : null,
      isCorrect: entry ? !!entry.isCorrect : false,
      responseTimeSec: entry ? entry.responseTimeSec : null,
      displayedOptionOrder: entry ? entry.displayedOptionOrder : (s.displayedOptionOrder || [])
    };
  });

  return {
    modeKey: 'crossBorderCbrne',
    modeName: 'Cross-Border CBRNe Drill',
    language: (typeof window !== 'undefined' && window.GAME_LANG) ? window.GAME_LANG : 'en',
    nickname: G.nickname || null,
    team: G.team || null,
    sessionId: (typeof Tracker !== 'undefined' && Tracker.sessionId) ? Tracker.sessionId : null,
    startedAt: G.cbxStartMs ? new Date(G.cbxStartMs).toISOString() : null,
    completedAt: new Date().toISOString(),
    totalQuestions: total,
    totalCorrect: correct,
    accuracyPct,
    score: G.score || 0,
    xp: G.xp || 0,
    maxStreak: G.maxStreak || 0,
    aarMetrics: {
      triageDashboardLatencySec: m.triageDashboardLatencySec,
      handoverLatencySec: m.handoverDelaySec,
      contaminatedTransportErrors: m.contaminatedTransportErrors || 0,
      degradedNetworkRecoverySec: m.degradedRecoverySec,
      targets: {
        triageDashboardLatencySec: targets.triageDashboardLatencySec,
        handoverDelaySec: targets.handoverDelaySec,
        contaminatedTransportErrors: targets.contaminatedTransportErrors,
        degradedRecoverySec: targets.degradedRecoverySec
      },
      pass: {
        triageDashboardLatency: m.triageDashboardLatencySec != null && m.triageDashboardLatencySec <= targets.triageDashboardLatencySec,
        handover: m.handoverDelaySec != null && m.handoverDelaySec <= targets.handoverDelaySec,
        contaminatedTransport: (m.contaminatedTransportErrors || 0) <= (targets.contaminatedTransportErrors || 0),
        degradedRecovery: m.degradedRecoverySec != null && m.degradedRecoverySec <= targets.degradedRecoverySec
      }
    },
    perStepCorrect: perStep,
    perStepSummary,
    answerLog: log,
    strengths,
    improvements,
    recommendations: recs
  };
}

function finishCrossBorderCbrne() {
  G.modesCompleted.add('crossBorderCbrne');
  const content = window.CROSS_BORDER_CBRNE;
  const steps = (Array.isArray(G.cbxSteps) && G.cbxSteps.length) ? G.cbxSteps : content.steps;
  const mcqSteps = steps.filter(s => s.kind === 'mcq');
  const total = mcqSteps.length;
  const pct = total > 0 ? Math.round((G.cbxCorrectCount / total) * 100) : 0;
  if (pct === 100 && total > 0) G.perfectModes++;
  checkAchievements();
  advanceStoryAct();
  const summary = buildCrossBorderCbrneSummary();
  G.cbxSummary = summary;
  Tracker.endMode(G.cbxCorrectCount, summary);
  Tracker.endSession(G.score, G.level, G.maxStreak, G.modesCompleted);
  G.screen = 'crossBorderCbrneAAR';
  render();
}

function renderCrossBorderCbrneAAR() {
  const content = window.CROSS_BORDER_CBRNE;
  const targets = content.aarTargets;
  const m = G.cbxMetrics || {};
  const log = G.cbxAnswerLog || [];

  function metricRow(label, actual, target, unit, betterLower) {
    let pass;
    if (actual == null) pass = false;
    else if (betterLower) pass = actual <= target;
    else pass = actual >= target;
    const cls = pass ? 'aar-pass' : 'aar-fail';
    const actualText = (actual == null) ? '—' : (actual + unit);
    const tgtText = (betterLower ? '≤ ' : '≥ ') + target + unit;
    return `<tr class="${cls}"><td>${label}</td><td>${actualText}</td><td>${tgtText}</td><td>${pass ? '✅' : '⚠️'}</td></tr>`;
  }

  const perStep = m.perStepCorrect || {};
  const triageOk = !!perStep.triageAccuracy;
  const antidoteOk = !!perStep.antidote;
  const semanticsOk = !!perStep.semantics;
  const preDeconOk = !!perStep.preDecon;

  const strengths = [];
  const improvements = [];
  if (triageOk) strengths.push('MASS/START Red/Immediate classification correct'); else improvements.push('Reinforce MASS/START Red/Immediate criteria for inhalational toxidromes');
  if (antidoteOk) strengths.push('Cyanide antidote (Hydroxocobalamin) selected correctly'); else improvements.push('Cyanide antidote: Hydroxocobalamin — distinguish from Ca-gluconate (HF) and atropine/2-PAM (nerve agents)');
  if (preDeconOk) strengths.push('Pre-decontamination life-saving priority applied'); else improvements.push('Apply Priority 0 life-saving intervention before routine wet decon for arresting patients');
  if (semanticsOk) strengths.push('Cross-border semantic mapping handled with provenance and flag'); else improvements.push('Preserve source label, map to shared dashboard, and flag non-equivalence');
  if ((m.contaminatedTransportErrors || 0) === 0) strengths.push('Zero preventable contaminated transports'); else improvements.push('Avoid transport of non-decontaminated casualties without receiver alert');

  const degradedOk = !!perStep.degraded;
  const allocationOk = !!perStep.contaminatedTransport;
  const triageLatencyMissed = m.triageDashboardLatencySec != null && m.triageDashboardLatencySec > targets.triageDashboardLatencySec;
  const handoverMissed = m.handoverDelaySec != null && m.handoverDelaySec > targets.handoverDelaySec;
  const degradedRecMissed = m.degradedRecoverySec != null && m.degradedRecoverySec > targets.degradedRecoverySec;

  const recs = [];
  if (!semanticsOk) recs.push('Pre-publish a bilingual EU↔KOR triage-term mapping table on the shared COP and rehearse it during quarterly handover drills');
  if (!degradedOk || degradedRecMissed) recs.push('Inject a degraded-network event in every functional drill (≥6 min latency, duplicate / lost messages) and require timestamp + uncertainty flags + radio fallback');
  if (!antidoteOk || !preDeconOk) recs.push('Pre-stage Hydroxocobalamin (Cyanokit) at transport hubs and rehearse the Priority-0 pre-decon algorithm with hot-zone teams');
  if (!allocationOk) recs.push('Codify a receiver-alert + capacity-confirm-before-transport check into the standing cross-border SOP, with a written cross-border notification SLA');
  if (triageLatencyMissed) recs.push(`Reduce triage→dashboard latency: target ≤${targets.triageDashboardLatencySec}s. Use one-tap dashboard entry from field tablets and pre-printed Red/Immediate stickers`);
  if (handoverMissed) recs.push(`Reduce hospital handover delay: target ≤${targets.handoverDelaySec}s. Standardise a 5-line cross-border handover script (ID, agent, decon status, triage, ETA)`);
  if (recs.length === 0) {
    recs.push('Maintain the current playbook: bilingual semantic mapping, degraded-network injects, pre-staged Hydroxocobalamin and pre-transport receiver alerts are all on target. Schedule a quarterly re-drill to prevent decay.');
  }

  const timelineHtml = log.map((l, i) => {
    const stepDef = content.steps.find(s => s.id === l.stepId);
    return `<div class="aar-tl-row ${l.correct ? 'ok' : 'no'}">
      <span class="aar-tl-num">${i+1}</span>
      <span class="aar-tl-time">+${l.elapsedSec}s</span>
      <span class="aar-tl-step">${stepDef ? stepDef.title : l.stepId}</span>
      <span class="aar-tl-mark">${l.correct ? '✅' : '❌'}</span>
    </div>`;
  }).join('');

  const semRows = content.semanticsTable.map(s =>
    `<tr><td>${s.sourceSystem}</td><td>${s.sourceTerm}</td><td>${s.dashboardTerm}</td><td>${s.koreanTerm}</td><td>${s.flag}</td></tr>`
  ).join('');

  const grade = pctGrade(G.cbxCorrectCount, content.steps.filter(s=>s.kind==='mcq').length);
  if (grade === 'S' || grade === 'A') confetti();

  app.innerHTML = `
    <div class="screen results-screen cbx-aar-screen">
      ${charBubble('mentor', 'Hot wash. Read the timeline, then the metric table — that is where decisions become evidence.', { success: true })}
      <div class="result-big anim-in">🛂</div>
      <div class="result-sub">Cross-Border CBRNe Drill — After-Action Review</div>
      <div class="result-grade ${grade==='S'?'s':grade==='A'?'a':grade==='B'?'b':'c'} anim-in">Grade: ${grade}</div>

      <div class="aar-section anim-in">
        <h3>Decision timeline</h3>
        <div class="aar-tl">${timelineHtml || '<em>No decisions logged.</em>'}</div>
      </div>

      <div class="aar-section anim-in">
        <h3>Drill metrics</h3>
        <table class="aar-metrics">
          <thead><tr><th>Metric</th><th>Result</th><th>Target</th><th></th></tr></thead>
          <tbody>
            ${metricRow('Triage accuracy (Red/Immediate)', triageOk ? 100 : 0, 100, '%', false)}
            ${metricRow('Cyanide antidote correctness', antidoteOk ? 100 : 0, 100, '%', false)}
            ${metricRow('Semantic mapping accuracy', semanticsOk ? 100 : 0, 100, '%', false)}
            ${metricRow('Triage → dashboard latency', m.triageDashboardLatencySec, targets.triageDashboardLatencySec, 's', true)}
            ${metricRow('Handover delay', m.handoverDelaySec, targets.handoverDelaySec, 's', true)}
            ${metricRow('Preventable contaminated transport', m.contaminatedTransportErrors || 0, targets.contaminatedTransportErrors, '', true)}
            ${metricRow('Degraded-network recovery', m.degradedRecoverySec, targets.degradedRecoverySec, 's', true)}
          </tbody>
        </table>
      </div>

      <div class="aar-section anim-in">
        <h3>Strengths</h3>
        <ul class="aar-list ok">${strengths.map(s=>`<li>${s}</li>`).join('') || '<li>None identified yet.</li>'}</ul>
        <h3>Areas for improvement</h3>
        <ul class="aar-list no">${improvements.map(s=>`<li>${s}</li>`).join('') || '<li>None — well done.</li>'}</ul>
        <h3>Recommendations</h3>
        <ul class="aar-list rec">${recs.map(s=>`<li>${s}</li>`).join('')}</ul>
      </div>

      <div class="aar-section anim-in">
        <h3>Medical semantics mapping (reference)</h3>
        <div class="cbx-table-scroll">
          <table class="cbx-table">
            <thead><tr><th>Source system</th><th>Source term</th><th>Shared dashboard</th><th>Korean DMAT/START</th><th>Flag / notes</th></tr></thead>
            <tbody>${semRows}</tbody>
          </table>
        </div>
      </div>

      <div class="result-stats anim-in">
        <div class="r-stat"><div class="val">${G.cbxCorrectCount}/${content.steps.filter(s=>s.kind==='mcq').length}</div><div class="lbl">Correct decisions</div></div>
        <div class="r-stat"><div class="val">${G.score}</div><div class="lbl">Total score</div></div>
        <div class="r-stat"><div class="val">${G.maxStreak}</div><div class="lbl">Max streak</div></div>
      </div>

      <div class="result-actions anim-in">
        <button class="btn-primary" onclick="G.screen='modes';render();">Select Mission 🏠</button>
        <button class="btn-outline" onclick="enterMode('crossBorderCbrne')">Retry Drill 🔄</button>
      </div>
    </div>`;
}

function pctGrade(correct, total) {
  if (!total) return 'C';
  const pct = Math.round((correct / total) * 100);
  if (pct >= 90) return 'S';
  if (pct >= 75) return 'A';
  if (pct >= 50) return 'B';
  return 'C';
}

