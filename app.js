// ============================================
// DISASTER MEDICINE SURVIVAL GAME — V4
// Manga Character + Narrative Upgrade
// ============================================

// ---- CHARACTER SYSTEM ----
const CHARS = {
  mentor: {
    name: 'Dr. Kim Eungup',
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
    name: 'Nurse Park Hana',
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
    name: 'Paramedic Lee Gugup',
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
    name: 'Chief Choi Jihwi',
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
  // EMERGO
  { id: 'emergo_clear', name: 'EMERGO Cleared', desc: 'Complete EMERGO chain scenario', icon: '🏥', category: 'mastery', check: g => g.modesCompleted.has('emergo') },
  { id: 'zero_preventable', name: 'Zero Preventable Deaths', desc: 'Achieve 0 preventable deaths in EMERGO', icon: '🛡️', category: 'legend', check: g => g.emergoZeroPD === true },
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
  },

  async endSession(totalScore, maxLevel, maxStreak, modesCompleted) {
    if (!this.enabled || !this.sessionId) return;
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

  async recordAnswer(questionId, selectedAnswer, isCorrect) {
    if (!this.enabled || !this.sessionId) return;
    const timeTaken = Math.round((Date.now() - this.questionStartTime) / 1000);
    this.modeTotal++;
    if (isCorrect) this.modeCorrect++;
    try {
      await fetch(`${TRACKING_API}/api/question/response`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          session_id: this.sessionId,
          mode: this.currentMode,
          question_id: String(questionId),
          selected_answer: String(selectedAnswer),
          is_correct: isCorrect,
          time_taken_sec: timeTaken
        })
      });
    } catch(e) {}
  },

  async endMode(score) {
    if (!this.enabled || !this.sessionId) return;
    const timeSpent = Math.round((Date.now() - this.modeStartTime) / 1000);
    this.modeScore = score;
    try {
      await fetch(`${TRACKING_API}/api/mode/result`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          session_id: this.sessionId,
          mode: this.currentMode,
          score: score,
          total_questions: this.modeTotal,
          correct_answers: this.modeCorrect,
          time_spent_sec: timeSpent
        })
      });
    } catch(e) {}
  }
};

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
    { name: 'Dr. Kim', score: 2850 },
    { name: 'Lee Regi', score: 2400 },
    { name: 'Park Ganho', score: 2100 },
    { name: 'Choi Eungup', score: 1800 },
    { name: 'Jeong Gujo', score: 1500 },
  ],

  // Modes completed
  modesCompleted: new Set(),

  // EMERGO
  emergo: null,
  emergoZeroPD: false
};

const $ = id => document.getElementById(id);
const app = $('app');

// ---- AUDIO ----
let audioCtx;
function sfx(type) {
  try {
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
  else if (s === 'emergoSelect') renderEmergoSelect();
  else if (s === 'emergo') renderEmergoPhase();
  else if (s === 'emergoResults') {} // already rendered
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
}

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
        <p class="game-subtitle">Shin's Disaster Medicine Academy LLC<br>Interactive RPG Education Simulator v5</p>
      </div>
      <div class="qr-section" id="qr-section"></div>
      <div class="nick-input-wrap">
        <input class="nick-input" id="nick" placeholder="Enter Nickname" maxlength="8" autocomplete="off"/>
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
      <div class="game-footer-credit">
        <p>© 2026 Shin's Disaster Medicine Academy LLC. All rights reserved.</p>
        <p>Education Operations: Soonchunhyang University Disaster Medicine Center</p>
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

  // Nick input
  const nickInput = $('nick');
  const enterBtn = $('enter-btn');
  nickInput.addEventListener('input', () => {
    enterBtn.disabled = nickInput.value.trim().length < 1;
  });
  nickInput.addEventListener('keydown', e => {
    if (e.key === 'Enter' && nickInput.value.trim()) startGame();
  });
  enterBtn.addEventListener('click', startGame);

  // Admin dashboard link
  $('admin-link-btn').addEventListener('click', () => {
    // Navigate to admin.html in the same deployed site
    const base = window.location.href.replace(/\/[^/]*$/, '/');
    window.open(base + 'admin.html', '_blank');
  });

  setTimeout(() => nickInput.focus(), 300);
  spawnParticles();
}

function startGame() {
  const nick = $('nick').value.trim();
  if (!nick) return;
  G.nickname = nick;
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
        <button class="mode-card emergo-card" data-mode="emergo" onclick="G.screen='emergoSelect';render();">
          <div class="mode-icon">🏥</div>
          <div class="mode-info">
            <h3>EMERGO Chain ${G.modesCompleted.has('emergo') ? '✅' : '🆕'}</h3>
            <p>Scene→CCP→Transport→Hospital — Chain scenario</p>
            <div class="mode-tag-row">
              <span class="mode-tag">Full Response</span>
              <span class="mode-tag emergo-tag">EMERGO</span>
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
      <div class="quiz-progress-bar">
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
        ${steps.map((step, i) => {
          const orderIdx = G.cbOrder.indexOf(i);
          const done = orderIdx !== -1;
          const isCorrect = done && (i === correctOrderIds[orderIdx]);
          return `<button class="cb-step ${done ? 'done' : ''} ${done ? (isCorrect ? 'ok' : 'nope') : ''}"
            onclick="pickCBRNEStep(${i})" ${done ? 'disabled' : ''}>
            <div class="cb-num">${done ? (orderIdx + 1) : (i + 1)}</div>
            <div>
              <h4>${step.title}</h4>
              <p>${step.desc}</p>
            </div>
          </button>`;
        }).join('')}
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
// EMERGO CHAIN MODE — Sequential Chain Scenario
// =============================================

function renderEmergoSelect() {
  app.innerHTML = `
    <div class="screen emergo-screen">
      ${renderHUD('emergo')}
      <div class="emergo-header anim-in">
        <div class="emergo-badge">🏥 EMERGO</div>
        <h2>Chain Scenario</h2>
        <p>From the scene to the hospital — experience the full disaster response chain</p>
      </div>
      <div class="emergo-scenario-list stagger">
        ${EMERGO_CHAIN_SCENARIOS.map((sc, i) => `
          <button class="emergo-scenario-card" onclick="startEmergoChain(${i})">
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

function startEmergoChain(scenarioIdx) {
  const sc = EMERGO_CHAIN_SCENARIOS[scenarioIdx];
  G.emergo = {
    scenarioIdx,
    scenario: sc,
    patients: sc.patientIds.map(id => {
      const p = EMERGO_PATIENTS.find(ep => ep.id === id);
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
  G.screen = 'emergo';
  Tracker.startMode('emergo_chain');
  Tracker.startQuestion();
  renderEmergoPhase();
}

function renderEmergoPhase() {
  const em = G.emergo;
  if (!em || !em.scenario) { G.screen = 'modes'; render(); return; }
  const phase = em.scenario.phases[em.phaseIdx];
  if (!phase) { showEmergoFinalResults(); return; }

  if (phase.task === 'sieve_triage') renderEmergoSieve(phase);
  else if (phase.task === 'sort_and_treat') renderEmergoSort(phase);
  else if (phase.task === 'decontamination') renderEmergoDecontam(phase);
  else if (phase.task === 'transport_priority') renderEmergoTransport(phase);
  else if (phase.task === 'ed_management') renderEmergoED(phase);
  else { showEmergoFinalResults(); }
}

// ---- PHASE 1: Sieve Triage ----
function renderEmergoSieve(phase) {
  const em = G.emergo;
  if (em._sieveIdx == null) em._sieveIdx = 0;
  if (em._sieveCorrect == null) em._sieveCorrect = 0;

  const patients = em.patients;
  const currentP = patients[em._sieveIdx];

  if (!currentP || em._sieveIdx >= patients.length) {
    // Sieve complete → stop timer then move to next phase
    stopTimer('emergo_sieve');
    em.phaseScore = Math.round((em._sieveCorrect / patients.length) * 100);
    addScore(em._sieveCorrect * 150);
    addXP(em._sieveCorrect * 30);
    em.phaseIdx++;
    em._sieveIdx = 0;
    showEmergoPhaseTransition();
    return;
  }

  const timeKey = 'emergo_sieve';
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
      showEmergoPhaseTransition();
    });
  }

  const progress = `${em._sieveIdx + 1}/${patients.length}`;
  const sieveHint = phase.hint || '';

  app.innerHTML = `
    <div class="screen emergo-play-screen">
      ${renderHUD(timeKey)}
      <div class="emergo-phase-bar">
        <span class="phase-icon">${phase.icon}</span>
        <span class="phase-name">${phase.name}</span>
        <span class="phase-progress">${progress}</span>
      </div>

      <div class="emergo-patient-card anim-in">
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

      <div class="emergo-triage-buttons anim-in">
        <button class="etb red" onclick="emergoSieveAnswer('red')">🔴 Immediate (RED)</button>
        <button class="etb yellow" onclick="emergoSieveAnswer('yellow')">🟡 Urgent (YELLOW)</button>
        <button class="etb green" onclick="emergoSieveAnswer('green')">🟢 Delayed (GREEN)</button>
        <button class="etb black" onclick="emergoSieveAnswer('black')">⚫ Deceased (BLACK)</button>
      </div>

      <div class="emergo-hint">
        <details><summary>💡 Sieve Algorithm Hint</summary><p>${sieveHint}</p></details>
      </div>
    </div>`;
}

function emergoSieveAnswer(answer) {
  const em = G.emergo;
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
  fb.className = `emergo-feedback ${isCorrect ? 'correct' : 'wrong'} anim-in`;
  fb.innerHTML = `${isCorrect ? '✅ Correct!' : `❌ ${correct.toUpperCase()}`} — ${p.name}`;
  document.querySelector('.emergo-play-screen')?.appendChild(fb);

  setTimeout(() => {
    em._sieveIdx++;
    renderEmergoSieve(em.scenario.phases[em.phaseIdx]);
  }, 800);
}

// ---- PHASE 2: Sort & Treat ----
function renderEmergoSort(phase) {
  const em = G.emergo;
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
      stopTimer('emergo_sort');
      em._treatPhase = true;
      em._sortIdx = 0;
      renderEmergoTreat(phase);
      return;
    }

    const trts = sortScore(currentP);
    const expectedSort = sortCategory(currentP);

    const timeKey = 'emergo_sort';
    // Timer starts only on first render
    if (em._sortIdx === 0 && !em._sortTimerStarted) {
      em._sortTimerStarted = true;
      startCountdown(timeKey, phase.timeLimit, null, () => {
        em._treatPhase = true;
        renderEmergoTreat(phase);
      });
    }

    app.innerHTML = `
      <div class="screen emergo-play-screen">
        ${renderHUD(timeKey)}
        <div class="emergo-phase-bar">
          <span class="phase-icon">${phase.icon}</span>
          <span class="phase-name">${phase.name} — Sort Classification</span>
          <span class="phase-progress">${em._sortIdx + 1}/${activePatients.length}</span>
        </div>

        <div class="emergo-patient-card anim-in">
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

        <div class="emergo-sort-buttons anim-in">
          <button class="etb t1" onclick="emergoSortAnswer('T1')">🔴 T1 (Immediate)</button>
          <button class="etb t2" onclick="emergoSortAnswer('T2')">🟡 T2 (Urgent)</button>
          <button class="etb t3" onclick="emergoSortAnswer('T3')">🟢 T3 (Delayed)</button>
        </div>

        <div class="emergo-hint">
          <details><summary>💡 Sort (TRTS) Hint</summary><p>${phase.hint}</p></details>
        </div>
      </div>`;
  }
}

function emergoSortAnswer(answer) {
  const em = G.emergo;
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
    renderEmergoSort(em.scenario.phases[em.phaseIdx]);
  }, 600);
}

// ---- PHASE 2B: Treatment Assignment ----
function renderEmergoTreat(phase) {
  const em = G.emergo;
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
    showEmergoPhaseTransition();
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
    <div class="screen emergo-play-screen">
      ${renderHUD('emergo_sort')}
      <div class="emergo-phase-bar">
        <span class="phase-icon">💊</span>
        <span class="phase-name">Treatment Assignment</span>
        <span class="phase-progress">${em._treatCurrent + 1}/${criticalPatients.length}</span>
      </div>

      <div class="emergo-patient-card mini anim-in">
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

      <div class="emergo-treat-grid anim-in">
        <p class="treat-instruction">Select required treatments (multiple choice):</p>
        <div class="treat-options">
          ${options.map(key => {
            const iv = INTERVENTIONS[key];
            if (!iv) return '';
            const isSelected = assigned.includes(key);
            return `<button class="treat-btn ${isSelected ? 'selected' : ''}" onclick="toggleEmergoTreat('${currentP.id}','${key}')">
              <span class="tb-icon">${iv.icon}</span>
              <span class="tb-name">${iv.name}</span>
              <span class="tb-time">${iv.timeIdeal} min</span>
            </button>`;
          }).join('')}
        </div>
      </div>

      <button class="btn-primary" style="margin-top:16px" onclick="confirmEmergoTreat()">Confirm →</button>
    </div>`;
}

function toggleEmergoTreat(patientId, interventionKey) {
  const em = G.emergo;
  if (!em._treatAssignments[patientId]) em._treatAssignments[patientId] = [];
  const arr = em._treatAssignments[patientId];
  const idx = arr.indexOf(interventionKey);
  if (idx >= 0) arr.splice(idx, 1);
  else arr.push(interventionKey);
  renderEmergoTreat(em.scenario.phases[em.phaseIdx]);
}

function confirmEmergoTreat() {
  const em = G.emergo;
  em._treatCurrent++;
  renderEmergoTreat(em.scenario.phases[em.phaseIdx]);
}

// ---- PHASE 3: Decontamination (CBRNE scenarios) ----
function renderEmergoDecontam(phase) {
  const em = G.emergo;
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
    showEmergoPhaseTransition();
    return;
  }

  // Player picks priority order
  app.innerHTML = `
    <div class="screen emergo-play-screen">
      ${renderHUD('emergo_sort')}
      <div class="emergo-phase-bar">
        <span class="phase-icon">${phase.icon}</span>
        <span class="phase-name">${phase.name}</span>
        <span class="phase-progress">${em._deconDone.length}/${activePatients.length} Complete</span>
      </div>

      <div class="emergo-decon-info anim-in">
        <p>🚿 Decon stations: <strong>${em._deconSlots}</strong> | Time per patient: <strong>${phase.decontamTimePerPatient} min</strong></p>
        <p>Select next patient for decontamination (critical first):</p>
      </div>

      <div class="emergo-decon-list anim-in">
        ${remaining.map(p => `
          <button class="decon-patient-btn" onclick="emergoDeconSelect('${p.id}')">
            <span class="dp-icon">${p.icon}</span>
            <span class="dp-name">${p.name}</span>
            <span class="dp-triage triage-${p.currentTriage}">${p.currentTriage?.toUpperCase()}</span>
            <span class="dp-injury">${p.injuries[0]}</span>
          </button>
        `).join('')}
      </div>
    </div>`;
}

function emergoDeconSelect(patientId) {
  const em = G.emergo;
  em._deconDone.push(patientId);
  em.gameMinute += (em.scenario.phases[em.phaseIdx].decontamTimePerPatient || 5);
  renderEmergoDecontam(em.scenario.phases[em.phaseIdx]);
}

// ---- PHASE: Transport Priority ----
function renderEmergoTransport(phase) {
  const em = G.emergo;
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
    showEmergoPhaseTransition();
    return;
  }

  app.innerHTML = `
    <div class="screen emergo-play-screen">
      ${renderHUD('emergo_sort')}
      <div class="emergo-phase-bar">
        <span class="phase-icon">${phase.icon}</span>
        <span class="phase-name">${phase.name}</span>
        <span class="phase-progress">🚑 ${em._ambulancesAvail} remaining</span>
      </div>

      <div class="emergo-transport-info anim-in">
        <p>Determine transport order. Ambulances: <strong>${em._ambulancesAvail}</strong>, Round-trip: ${phase.transportTimeMin}-${phase.transportTimeMax} min</p>
        <p>Transported: ${em._transportOrder.length} patients</p>
      </div>

      <div class="emergo-transport-list anim-in">
        ${remaining.map(p => `
          <button class="transport-patient-btn" onclick="emergoTransportSelect('${p.id}')">
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

function emergoTransportSelect(patientId) {
  const em = G.emergo;
  const phase = em.scenario.phases[em.phaseIdx];
  em._transportOrder.push(patientId);
  em._ambulancesAvail--;
  em.gameMinute += Math.round((phase.transportTimeMin + phase.transportTimeMax) / 2);

  // Return ambulance after round trip
  setTimeout(() => {
    if (em._ambulancesAvail !== null) em._ambulancesAvail++;
  }, 0);

  renderEmergoTransport(phase);
}

// ---- PHASE: ED Management ----
function renderEmergoED(phase) {
  const em = G.emergo;
  const arrivedPatients = em.patients.filter(p => p.transported);

  if (!em._edProcessed) em._edProcessed = [];
  const remaining = arrivedPatients.filter(p => !em._edProcessed.includes(p.id));

  if (remaining.length === 0) {
    // ED phase done
    addScore(em._edProcessed.length * 150);
    addXP(em._edProcessed.length * 25);
    em.phaseIdx++;
    showEmergoPhaseTransition();
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
    <div class="screen emergo-play-screen">
      ${renderHUD('emergo_sort')}
      <div class="emergo-phase-bar">
        <span class="phase-icon">${phase.icon}</span>
        <span class="phase-name">${phase.name}</span>
        <span class="phase-progress">${em._edProcessed.length + 1}/${arrivedPatients.length}</span>
      </div>

      <div class="emergo-patient-card anim-in">
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

      <div class="emergo-ed-actions anim-in">
        <p>Select the next action for this patient:</p>
        ${edActions.map(a => `
          <button class="ed-action-btn" onclick="emergoEdDecision('${currentP.id}','${a.key}')">
            <span class="ea-icon">${a.icon}</span>
            <div class="ea-info"><strong>${a.label}</strong><span>${a.desc}</span></div>
          </button>
        `).join('')}
      </div>
    </div>`;
}

function emergoEdDecision(patientId, action) {
  const em = G.emergo;
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
  renderEmergoED(em.scenario.phases[em.phaseIdx]);
}

// ---- Phase Transition ----
function showEmergoPhaseTransition() {
  const em = G.emergo;
  if (!em || !em.scenario) { G.screen = 'modes'; render(); return; }

  // Stop all EMERGO timers
  stopTimer('emergo_sieve');
  stopTimer('emergo_sort');

  const nextPhase = em.scenario.phases[em.phaseIdx];
  const prevPhase = em.scenario.phases[em.phaseIdx - 1];

  if (!nextPhase) {
    showEmergoFinalResults();
    return;
  }

  app.innerHTML = `
    <div class="screen emergo-transition-screen">
      <div class="emergo-phase-complete anim-in">
        <div class="epc-check">✅</div>
        <h2>${prevPhase?.name || ''} Complete!</h2>
      </div>
      <div class="emergo-next-phase anim-in">
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
      <button class="btn-primary anim-in" onclick="renderEmergoPhase()">Continue →</button>
    </div>`;
}

// ---- Final Results ----
function showEmergoFinalResults() {
  const em = G.emergo;
  if (!em) { G.screen = 'modes'; render(); return; }

  // Stop all EMERGO timers
  stopTimer('emergo_sieve');
  stopTimer('emergo_sort');

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
  G.modesCompleted.add('emergo');
  if (preventable === 0) G.emergoZeroPD = true;
  advanceStoryAct('emergo');
  addScore(preventable === 0 ? 2000 : 1000);
  addXP(300 - preventable * 50);
  checkAchievements();

  try { Tracker.endMode(survived); } catch(e) { console.warn('Tracker error:', e); }

  const gradeClass = grade === 'S' ? 's' : grade === 'A' ? 'a' : grade === 'B' ? 'b' : 'c';
  if (grade === 'S' || grade === 'A') { try { confetti(); } catch(e) {} }

  app.innerHTML = `
    <div class="screen emergo-results-screen">
      <div class="emergo-results-header anim-in">
        <div class="er-badge">🏥 EMERGO CHAIN Complete</div>
        <h2>${em.scenario.title}</h2>
      </div>

      <div class="result-grade ${gradeClass} anim-in">Grade: ${grade}</div>

      <div class="emergo-result-stats anim-in">
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

      <div class="emergo-patient-outcomes anim-in">
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

      <div class="emergo-debrief anim-in">
        <h3>📋 Debriefing</h3>
        <div class="debrief-text">
          ${preventable === 0 ? 'All savable patients were saved. A perfect chain from scene to hospital.' :
            preventable === 1 ? 'Nearly perfect. 1 preventable death occurred. Review time management and transport priority.' :
            `${preventable} preventable deaths occurred. Rapid treatment and transport of critical patients is key.`}
        </div>
      </div>

      <div class="result-actions anim-in">
        <button class="btn-primary" onclick="G.screen='modes';render();">Select Mission 🏠</button>
        <button class="btn-outline" onclick="G.screen='emergoSelect';render();">Other Scenarios 🔄</button>
      </div>
    </div>`;

  G.screen = 'emergoResults';
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
      <div class="quiz-progress-bar">
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
      <div class="quiz-progress-bar">
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
      <div class="quiz-progress-bar">
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
          <p>Zelda/FF-style storytelling RPG — Conquer the world of disaster</p>
          <div class="mode-tag-row">
            <span class="mode-tag" style="background:rgba(255,215,0,0.15);color:#ffd700">JRPG</span>
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
