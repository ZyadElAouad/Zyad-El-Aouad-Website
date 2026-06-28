// --- 1. SYSTEM CLOCK & REAL-TIME COUNTDOWN ---
const targetDate = new Date("2026-08-01T00:00:00Z").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const daysVal = document.getElementById('countdown-days');
    const hoursVal = document.getElementById('countdown-hours');
    const minsVal = document.getElementById('countdown-mins');
    const secsVal = document.getElementById('countdown-secs');

    if (distance < 0) {
        if (daysVal) daysVal.textContent = "00";
        if (hoursVal) hoursVal.textContent = "00";
        if (minsVal) minsVal.textContent = "00";
        if (secsVal) secsVal.textContent = "00";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysVal) daysVal.textContent = String(days).padStart(2, '0');
    if (hoursVal) hoursVal.textContent = String(hours).padStart(2, '0');
    if (minsVal) minsVal.textContent = String(minutes).padStart(2, '0');
    if (secsVal) secsVal.textContent = String(seconds).padStart(2, '0');
}
setInterval(updateCountdown, 1000);
updateCountdown();


// --- 2. DYNAMIC SYSTEM TELEMETRY LOGS ---
const telemetryLog = document.getElementById('telemetry-log');

const defaultTeaserLogs = {
    en: [
        "ADCS core checks... PASSED",
        "Orbital trajectory calibration... NOMINAL",
        "Dojo waitlist compiler... RUNNING",
        "GNC feedback parameters... ACCURATE",
        "Student stress monitoring kernel... DEPLOYED",
        "Stress-to-Resilience ratio: 1.0 | SAFE",
        "Boeing application spec templates... ACCESSED",
        "ESA presentation slides... ENCRYPTED",
        "Waitlist slots available: 5 / 5",
        "Secure socket connection verified... NOMINAL"
    ],
    jp: [
        "ADCSコア整合性チェック... 完了",
        "軌道アライメントキャリブレーション... 正常",
        "道場待機リストコンパイラ... 稼働中",
        "GNCフィードバックパラメータ... 正確",
        "ストレス・レジリエンス監視コア... 展開済",
        "耐ストレス比率：1.0 | 安全圏内",
        "ボーイング選考仕様テンプレート... 読込完了",
        "ESAプレゼンテーションスライド... 暗号化完了",
        "待機枠残数：5枠 / 5枠",
        "セキュアソケット通信確認... 正常接続"
    ],
    fr: [
        "Vérifications noyau ADCS... SUCCÈS",
        "Calibrage de trajectoire orbitale... NOMINAL",
        "Compilateur waitlist Dojo... EN COURS",
        "Paramètres rétroaction GNC... CORRECTS",
        "Surveillance stress étudiant... ACTIVÉE",
        "Ratio Stress-Résilience : 1.0 | SÉCURISÉ",
        "Modèles de candidature Boeing... ACCÉDÉS",
        "Présentations ESA Clean Space... ENCRYPTÉES",
        "Places disponibles waitlist : 5 / 5",
        "Connexion socket sécurisée... STABLE"
    ],
    es: [
        "Verificaciones núcleo ADCS... CORRECTO",
        "Calibración trayectoria orbital... NOMINAL",
        "Compilador lista espera Dojo... EJECUTANDO",
        "Parámetros retroalimentación GNC... PRECISOS",
        "Monitoreo estrés del estudiante... ACTIVO",
        "Relación Estrés-Resiliencia: 1.0 | SEGURO",
        "Plantillas candidaturas Boeing... ACCEDIDO",
        "Diapositivas ponencias ESA... ENCRIPTADO",
        "Plazas disponibles lista de espera: 5 / 5",
        "Conexión socket segura... NOMINAL"
    ],
    ar: [
        "فحوصات نواة ADCS... ناجحة",
        "معايرة المسار المداري... عادية",
        "برنامج تجميع لائحة الانتظار... يعمل",
        "معاملات تغذية GNC... دقيقة",
        "مراقبة مستوى التوتر عند الطلاب... نشط",
        "معامل الصلابة ضد التوتر: 1.0 | آمن",
        "قوالب تقديم Boeing... تم الدخول",
        "عروض ESA التقديمية... مشفرة",
        "المقاعد الشاغرة فالانتظار: 5 / 5",
        "اتصال السوكيت الآمن... عادي"
    ]
};

let activeLogs = [...defaultTeaserLogs.en];

function addTelemetryLine() {
    if (!telemetryLog) return;
    const randomMsg = activeLogs[Math.floor(Math.random() * activeLogs.length)];
    const newLineElement = document.createElement('div');
    newLineElement.className = 'telemetry-line';
    newLineElement.textContent = `> ${randomMsg}`;
    telemetryLog.appendChild(newLineElement);
    
    // Auto-scroll
    telemetryLog.scrollTop = telemetryLog.scrollHeight;
    
    // Limit lines
    while (telemetryLog.childNodes.length > 5) {
        telemetryLog.removeChild(telemetryLog.firstChild);
    }
}
setInterval(addTelemetryLine, 3000);


// --- 3. CANVAS SPEED-LINES ANIMATION ---
const canvas = document.getElementById('speed-lines-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    window.addEventListener('resize', () => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    });

    const speedLineCount = 50;
    const lines = [];
    for (let i = 0; i < speedLineCount; i++) {
        lines.push({
            x: Math.random() * width,
            y: Math.random() * height,
            length: Math.random() * 100 + 40,
            speed: Math.random() * 6 + 2,
            opacity: Math.random() * 0.3 + 0.1
        });
    }

    function animateSpeedLines() {
        ctx.clearRect(0, 0, width, height);
        lines.forEach(line => {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${line.opacity})`;
            ctx.lineWidth = 1;
            ctx.moveTo(line.x, line.y);
            ctx.lineTo(line.x + line.length, line.y);
            ctx.stroke();
            
            line.x -= line.speed;
            if (line.x + line.length < 0) {
                line.x = width + Math.random() * 50;
                line.y = Math.random() * height;
            }
        });
        requestAnimationFrame(animateSpeedLines);
    }
    animateSpeedLines();
}


// --- 4. WAITLIST REGISTRATION INTAKE ---
const waitlistForm = document.getElementById('waitlist-form');
const waitlistResponse = document.getElementById('waitlist-response');

if (waitlistForm) {
    waitlistForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('waitlist-name').value;
        const email = document.getElementById('waitlist-email').value;
        const struggle = document.getElementById('waitlist-struggle').value;
        
        playSynthSound('submit');
        
        waitlistForm.style.display = 'none';
        if (waitlistResponse) {
            waitlistResponse.style.display = 'block';
            waitlistResponse.textContent = `> SECURING WAITLIST DATA MATRIX...\n> COMPILING ADMISSION OBJECTIVE: ${struggle.toUpperCase()}\n> SYSTEM ALLOCATION GRANTED...`;
            
            setTimeout(() => {
                const uuid = "BEWIN-" + Math.floor(100000 + Math.random() * 900000);
                const currentLang = localStorage.getItem('iron_engineer_lang') || 'en';
                
                let secureMsg = `===================================================
   BEWINNERENGINEER DOJO ADMISSION WAITLIST
===================================================
UUID: ${uuid}
CANDIDATE NAME: ${name.toUpperCase()}
SECURE CHANNEL: ${email}
PRIMARY BOTTLENECK: ${struggle.toUpperCase()}

[STATUS]: PRIORITY WAITLIST TICKET GENERATED
[RESILIENCE]: EMOTIONAL SHIELD ACTIVE
===================================================`;
                
                waitlistResponse.textContent = secureMsg;
                
                // Add Email Transmit Action
                const actionDiv = document.createElement('div');
                actionDiv.style.marginTop = '15px';
                actionDiv.style.display = 'flex';
                actionDiv.style.gap = '10px';
                
                const mailBtn = document.createElement('a');
                const mailSubject = encodeURIComponent(`[Waitlist] BeWinnerEngineer Admission Request - ${name}`);
                const mailBody = encodeURIComponent(secureMsg);
                mailBtn.href = `mailto:elaouadzyad@gmail.com?subject=${mailSubject}&body=${mailBody}`;
                mailBtn.className = 'terminal-btn-submit';
                mailBtn.style.textAlign = 'center';
                mailBtn.style.textDecoration = 'none';
                mailBtn.style.fontSize = '0.85rem';
                mailBtn.style.padding = '6px 12px';
                mailBtn.textContent = 'SEND EMAIL INTENT';
                actionDiv.appendChild(mailBtn);
                
                const copyBtn = document.createElement('button');
                copyBtn.className = 'terminal-btn-submit';
                copyBtn.style.borderColor = 'var(--accent-gold)';
                copyBtn.style.color = 'var(--accent-gold)';
                copyBtn.style.fontSize = '0.85rem';
                copyBtn.style.padding = '6px 12px';
                copyBtn.textContent = 'COPY CONTRACT';
                copyBtn.addEventListener('click', () => {
                    navigator.clipboard.writeText(secureMsg);
                    copyBtn.textContent = 'COPIED!';
                    playSynthSound('beep');
                });
                actionDiv.appendChild(copyBtn);
                
                waitlistResponse.appendChild(actionDiv);
            }, 1500);
        }
    });
}


// --- 5. PRE-LAUNCH NEWSLETTER INTENT ---
const newsletterEmail = document.getElementById('newsletter-email');
const newsletterBtn = document.getElementById('newsletter-btn');

if (newsletterBtn && newsletterEmail) {
    newsletterBtn.addEventListener('click', () => {
        const mailVal = newsletterEmail.value;
        if (!mailVal || !mailVal.includes('@')) {
            alert("Please enter a valid email channel.");
            return;
        }
        playSynthSound('submit');
        newsletterBtn.textContent = "SUBSCRIBED";
        newsletterBtn.disabled = true;
        newsletterEmail.disabled = true;
        
        // Save subscriber locally
        const subs = JSON.parse(localStorage.getItem('teaser_newsletter_subs') || '[]');
        subs.push({ email: mailVal, date: new Date().toISOString() });
        localStorage.setItem('teaser_newsletter_subs', JSON.stringify(subs));
    });
}


// --- 6. SYNTHESIZED RETRO AUDIO ENGINE (WEB AUDIO API) ---
let audioCtx = null;
let isAudioActive = false;
const audioToggle = document.getElementById('audio-toggle');
const audioStatus = document.getElementById('audio-status-indicator');

if (audioToggle) {
    audioToggle.addEventListener('click', () => {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        isAudioActive = !isAudioActive;
        
        if (isAudioActive) {
            audioStatus.style.backgroundColor = 'var(--accent-cyan)';
            audioToggle.querySelector('span:nth-child(2)').textContent = "AUDIO SYSTEM: ACTIVE";
            playSynthSound('beep');
        } else {
            audioStatus.style.backgroundColor = '#555';
            audioToggle.querySelector('span:nth-child(2)').textContent = "AUDIO SYSTEM: INACTIVE";
        }
    });
}

function playSynthSound(type) {
    if (!isAudioActive || !audioCtx) return;
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    const now = audioCtx.currentTime;
    if (type === 'beep') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, now);
        gainNode.gain.setValueAtTime(0.04, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
        osc.start(now);
        osc.stop(now + 0.15);
    } else if (type === 'submit') {
        osc.type = 'square';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.linearRampToValueAtTime(600, now + 0.4);
        gainNode.gain.setValueAtTime(0.02, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        osc.start(now);
        osc.stop(now + 0.4);
    }
}

// Attach hover sound to action items
const updateHoverListeners = () => {
    const interactiveElements = document.querySelectorAll('.btn-bankai, .lang-btn, .countdown-box');
    interactiveElements.forEach(elem => {
        elem.addEventListener('mouseenter', () => {
            if (isAudioActive) playSynthSound('beep');
        });
    });
};
updateHoverListeners();


// --- 7. MULTI-LANGUAGE SYSTEM CONTROLLER ---
function setLanguage(lang) {
    if (typeof translations === 'undefined' || !translations[lang]) return;
    
    // Update HTML Lang & Dir attributes
    document.documentElement.setAttribute('lang', lang);
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
    }

    // Traverse all [data-i18n] nodes
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(elem => {
        const key = elem.getAttribute('data-i18n');
        const val = translations[lang][key];
        if (val !== undefined) {
            if (elem.tagName === 'INPUT' && elem.hasAttribute('placeholder')) {
                elem.setAttribute('placeholder', val);
            } else if (elem.tagName === 'TEXTAREA' && elem.hasAttribute('placeholder')) {
                elem.setAttribute('placeholder', val);
            } else {
                elem.innerHTML = val;
            }
        }
    });

    // Update active telemetry log ticks
    if (defaultTeaserLogs[lang]) {
        activeLogs = [...defaultTeaserLogs[lang]];
    }

    // Save language code
    localStorage.setItem('iron_engineer_lang', lang);

    // Toggle button active states
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Bind language switcher clicks
const initLanguageSelector = () => {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedLang = btn.getAttribute('data-lang');
            setLanguage(selectedLang);
            playSynthSound('beep');
        });
    });

    // Load saved language or fallback
    const savedLang = localStorage.getItem('iron_engineer_lang') || 'en';
    setLanguage(savedLang);
};

initLanguageSelector();
