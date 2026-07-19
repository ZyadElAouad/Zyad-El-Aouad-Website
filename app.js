// --- 0. THEME SWITCHER INITIALIZATION (FAST) ---
(function() {
    const currentTheme = localStorage.getItem('theme') || 'dark';
    if (currentTheme === 'light') {
        document.body.classList.add('light-theme');
    }
})();

// --- 1. TELEMETRY & SYSTEM STATUS TICKS ---
const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE"; // Put your Web3Forms access key here to receive form submissions via email automatically!
const telemetryLog = document.getElementById('telemetry-log');
const telemetryTimer = document.getElementById('telemetry-timer');

// Update system clock
function updateSysTime() {
    const now = new Date();
    const timeStr = `SYS_TIME: ${now.toTimeString().split(' ')[0]}`;
    if (telemetryTimer) telemetryTimer.textContent = timeStr;
}
setInterval(updateSysTime, 1000);
updateSysTime();

// Simulated orbital data lines
const telemetryMessages = [
    "ADCS State: Quaternion [q0: 0.7071, q1: 0.0000, q2: 0.7071, q3: 0.0000]",
    "Stabilization error: Theta_err = 0.043 deg | NOMINAL",
    "Magnetorquer command: M_cmd = [-0.14, 0.55, 0.88] A·m²",
    "Estimated orbit altitude: H_ellipsoid = 542.12 km",
    "ESA ESTEC clean-space protocols... ACTIVE",
    "Planet Q rocket telemetry streaming: P_chamber = 4.3 MPa",
    "Reaction wheels velocity: W_spd = [1240, -1890, 520] RPM",
    "Adaptive controller stack: Stack converged in 4.2 seconds",
    "UAV velocity vector: V = [12.4, 0.52, -1.89] m/s",
    "Ansys validation suite: Safety margin MS = 1.62 | APPROVED",
    "Language matrix verification: JP, EN, FR, AR, SP... ACTIVE"
];

function addTelemetryLine() {
    if (!telemetryLog) return;
    const randomMsg = telemetryMessages[Math.floor(Math.random() * telemetryMessages.length)];
    const newLineElement = document.createElement('div');
    newLineElement.className = 'telemetry-line';
    newLineElement.textContent = `> ${randomMsg}`;
    telemetryLog.appendChild(newLineElement);
    
    // Auto-scroll
    telemetryLog.scrollTop = telemetryLog.scrollHeight;
    
    // Limit lines to 15
    while (telemetryLog.childNodes.length > 15) {
        telemetryLog.removeChild(telemetryLog.firstChild);
    }
}
setInterval(addTelemetryLine, 3500);

// --- 2. PROGRESS BAR & THEME SWITCHER HANDLERS ---
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const progressBars = document.querySelectorAll('.stat-bar-fill');
        progressBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-width');
            bar.style.width = targetWidth;
        });
    }, 400);

    // Setup Theme Toggle Button
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        updateThemeUI();
        themeToggleBtn.addEventListener('click', () => {
            if (document.body.classList.contains('light-theme')) {
                document.body.classList.remove('light-theme');
                localStorage.setItem('theme', 'dark');
            } else {
                document.body.classList.add('light-theme');
                localStorage.setItem('theme', 'light');
            }
            updateThemeUI();
        });
    }

    function updateThemeUI() {
        const isLight = document.body.classList.contains('light-theme');
        const iconEl = document.getElementById('theme-toggle-icon');
        const textEl = document.getElementById('theme-toggle-text');
        if (iconEl) iconEl.textContent = isLight ? '🌙' : '☀';
        if (textEl) textEl.textContent = isLight ? 'DARK' : 'LIGHT';
    }
});

// --- 3. CANVAS DEEP SPACE STARFIELD ANIMATION ---
const canvas = document.getElementById('speed-lines-canvas');
const ctx = canvas ? canvas.getContext('2d') : null;

let width = window.innerWidth;
let height = window.innerHeight;
if (canvas && ctx) {
    canvas.width = width;
    canvas.height = height;

    window.addEventListener('resize', () => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    });
}

// 3 Layers of Stars for deep space depth/parallax
const stars = [];
const layers = [
    { count: 140, depth: 0.1, speed: 0.02, minSize: 0.2, maxSize: 0.6, baseAlpha: 0.25 }, // Deepest / Slowest / Smallest
    { count: 70,  depth: 0.4, speed: 0.05, minSize: 0.6, maxSize: 1.2, baseAlpha: 0.45 }, // Midground
    { count: 25,  depth: 0.9, speed: 0.12, minSize: 1.2, maxSize: 2.0, baseAlpha: 0.70 }  // Foreground / Brightest
];

layers.forEach((layer) => {
    for (let i = 0; i < layer.count; i++) {
        stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * (layer.maxSize - layer.minSize) + layer.minSize,
            speedX: -layer.speed * (Math.random() * 0.4 + 0.8), // slow leftward movement
            speedY: (Math.random() * 0.02 - 0.01) * layer.speed, // tiny vertical drift
            baseOpacity: Math.random() * 0.2 + layer.baseAlpha,
            twinkleSpeed: Math.random() * 0.01 + 0.003,
            phase: Math.random() * Math.PI * 2,
            depth: layer.depth
        });
    }
});

// Interactive mouse parallax variables (inertia eased)
let mouseX = width / 2;
let mouseY = height / 2;
let targetParallaxX = 0;
let targetParallaxY = 0;
let currentParallaxX = 0;
let currentParallaxY = 0;

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    // Max parallax displacement is 25px in either direction
    targetParallaxX = ((width / 2) - mouseX) * 0.03;
    targetParallaxY = ((height / 2) - mouseY) * 0.03;
});

// Scrolling parallax offset
let scrollYOffset = window.scrollY;
window.addEventListener('scroll', () => {
    scrollYOffset = window.scrollY;
});

// Shooting star definition
class ShootingStar {
    constructor() {
        this.reset();
    }
    
    reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * (height * 0.4); // Start in top half
        this.length = Math.random() * 80 + 50;
        this.speedX = -(Math.random() * 10 + 12); // Shoots left
        this.speedY = Math.random() * 4 + 4;      // Shoots down
        this.opacity = 1;
        this.decay = Math.random() * 0.018 + 0.012; // Fade speed
        this.active = Math.random() < 0.2; // 20% chance of starting immediately, else delayed
        this.delayTimer = Math.random() * 300; // Delay frame count
    }
    
    update() {
        if (!this.active) {
            this.delayTimer--;
            if (this.delayTimer <= 0) {
                this.active = true;
            }
            return;
        }
        
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= this.decay;
        
        if (this.opacity <= 0 || this.x < -this.length || this.y > height + this.length) {
            this.reset();
        }
    }
    
    draw(context) {
        if (!this.active || !context) return;
        
        const isLight = document.body.classList.contains('light-theme');
        const colorPrefix = isLight ? '0, 0, 0' : '255, 255, 255';
        const opacityMult = isLight ? 0.35 : 1;
        
        const grad = context.createLinearGradient(
            this.x, this.y, 
            this.x - this.speedX * 2, this.y - this.speedY * 2
        );
        grad.addColorStop(0, `rgba(${colorPrefix}, ${this.opacity * opacityMult})`);
        grad.addColorStop(1, `rgba(${colorPrefix}, 0)`);
        
        context.beginPath();
        context.strokeStyle = grad;
        context.lineWidth = 1.5;
        context.moveTo(this.x, this.y);
        context.lineTo(this.x - this.speedX * 1.5, this.y - this.speedY * 1.5);
        context.stroke();
    }
}

const shootingStarsCount = 2;
const shootingStars = [];
for (let i = 0; i < shootingStarsCount; i++) {
    shootingStars.push(new ShootingStar());
}

let starTime = 0;
function animateStarfield() {
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);
    starTime += 1;
    
    // Easing for mouse parallax to make it ultra-smooth
    currentParallaxX += (targetParallaxX - currentParallaxX) * 0.05;
    currentParallaxY += (targetParallaxY - currentParallaxY) * 0.05;
    
    stars.forEach(star => {
        // Shimmering sinusoidal twinkle
        const twinkle = Math.sin(starTime * star.twinkleSpeed + star.phase);
        const opacity = Math.max(0.05, star.baseOpacity + twinkle * 0.15);
        
        // Calculate dynamic position incorporating drift, scroll parallax, and eased mouse parallax
        const scrollEffect = scrollYOffset * 0.1 * star.depth;
        const mouseEffectX = currentParallaxX * star.depth;
        const mouseEffectY = currentParallaxY * star.depth;
        
        let drawX = star.x + mouseEffectX;
        let drawY = star.y - scrollEffect + mouseEffectY;
        
        // Wrap coordinates to draw bounds
        drawX = (drawX % width + width) % width;
        drawY = (drawY % height + height) % height;
        
        const isLight = document.body.classList.contains('light-theme');
        const colorPrefix = isLight ? '0, 0, 0' : '255, 255, 255';
        const opacityMult = isLight ? 0.3 : 1;
        const shadowOpacity = isLight ? 0.1 : 0.4;
        
        ctx.beginPath();
        ctx.fillStyle = `rgba(${colorPrefix}, ${opacity * opacityMult})`;
        
        // Draw standard stars, foreground stars get a tiny premium glow
        if (star.size > 1.4) {
            ctx.shadowBlur = 4;
            ctx.shadowColor = `rgba(${colorPrefix}, ${shadowOpacity})`;
        } else {
            ctx.shadowBlur = 0;
        }
        
        ctx.arc(drawX, drawY, star.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Update natural drifting position of stars
        star.x += star.speedX;
        star.y += star.speedY;
        
        // Natural drift bounds check & wrap
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;
    });
    
    // Reset shadow values for shooting stars
    ctx.shadowBlur = 0;
    
    // Update and draw classy shooting stars
    shootingStars.forEach(s => {
        s.update();
        s.draw(ctx);
    });
    
    requestAnimationFrame(animateStarfield);
}

if (canvas && ctx) {
    animateStarfield();
}


// --- 4. INTERACTIVE BOOKING / TERMINAL INTAKE MODAL ---
const bookingModal = document.getElementById('booking-modal');
const openBookingBtns = document.querySelectorAll('a[href="#booking"], .dojo-action');
const closeBookingBtn = document.getElementById('close-booking');
const dojoForm = document.getElementById('dojo-form');
const terminalResponse = document.getElementById('terminal-response');
const intakePillar = document.getElementById('intake-pillar');

openBookingBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (bookingModal) bookingModal.classList.add('active');
        playSynthSound('open');
        
        // Auto-select option if clicked from a specific service card
        const service = btn.getAttribute('data-service');
        if (service && intakePillar) {
            intakePillar.value = service;
        }
    });
});

if (closeBookingBtn) {
    closeBookingBtn.addEventListener('click', () => {
        if (bookingModal) bookingModal.classList.remove('active');
        playSynthSound('close');
    });
}

// Close modal when clicking outside
if (bookingModal) {
    bookingModal.addEventListener('click', (e) => {
        if (e.target === bookingModal) {
            bookingModal.classList.remove('active');
            playSynthSound('close');
        }
    });
}

// Handle form submission
if (dojoForm) {
    dojoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('intake-name').value;
        const email = document.getElementById('intake-email').value;
        const pillar = document.getElementById('intake-pillar').value;
        const objectives = document.getElementById('intake-objectives').value;
        
        playSynthSound('submit');
        
        // Save subscriber locally to the newsletter database
        const subs = JSON.parse(localStorage.getItem('teaser_newsletter_subs') || '[]');
        if (!subs.some(s => s.email === email)) {
            subs.push({ email: email, date: new Date().toISOString(), source: 'dojo_intake' });
            localStorage.setItem('teaser_newsletter_subs', JSON.stringify(subs));
        }

        // Hide form inputs and animate compilation
        dojoForm.style.display = 'none';
        terminalResponse.style.display = 'block';
        terminalResponse.textContent = `> INITIALIZING SYSTEMS PROTOCOL...\n> COMPILING SYSTEMS MATRIX FOR: ${name.toUpperCase()}\n> ANALYZING ADCS POTENTIAL...`;
        
        setTimeout(() => {
            terminalResponse.textContent += `\n> HARDENING RESILIENCE ARMOR ON MENTORSHIP PILLAR: ${pillar.toUpperCase()}...`;
        }, 800);

        setTimeout(() => {
            terminalResponse.textContent += `\n> SUBSCRIBING SECURE CHANNEL TO SYSTEMS NEWSLETTER... SUCCESS`;
        }, 1500);

        setTimeout(() => {
            // Build the terminal certificate output text
            const contractUUID = "SYS-" + Math.floor(100000 + Math.random() * 900000);
            const CALENDLY_LINK = "https://calendly.com/elaouadzyad/30min";
            const bodyText = `
===================================================
   SYSTEMS ENGINEERING CODE OF CONDUCT & INTAKE
===================================================
UUID: ${contractUUID}
INTAKE CANDIDATE: ${name.toUpperCase()}
SECURE CHANNEL: ${email}
SELECTED PILLAR: ${pillar}

DEVELOPMENT OBJECTIVES METADATA:
"${objectives}"

[STATUS]: APPROVED FOR THE GATE MENTORSHIP STAGE
[ACTION REQUIRED]: 
1. SEND THIS EMAIL PACKET TO THE INSTRUCTOR (elaouadzyad@gmail.com)
2. BOOK YOUR 1-ON-1 DEEP DIVE ON CALENDLY:
   ${CALENDLY_LINK}
===================================================`;
            
            terminalResponse.textContent = bodyText;
            
            // Automatically submit to Web3Forms in the background if key is provided
            if (WEB3FORMS_ACCESS_KEY && WEB3FORMS_ACCESS_KEY !== "YOUR_ACCESS_KEY_HERE") {
                terminalResponse.textContent += `\n\n> TRANSMITTING ADMISSION DATA MATRIX TO OPERATOR CONTROL STATION...`;
                fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify({
                        access_key: WEB3FORMS_ACCESS_KEY,
                        subject: `[Dojo Admissions] Systems Mentorship Request - ${name}`,
                        from_name: "BeWinnerEngineer Dojo",
                        name: name,
                        email: email,
                        pillar: pillar,
                        objectives: objectives,
                        uuid: contractUUID
                    })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        terminalResponse.textContent = bodyText + `\n\n[SUCCESS]: ADMISSION DATA MATRIX SECURELY TRANSMITTED TO OPERATOR INBOX.`;
                    } else {
                        terminalResponse.textContent = bodyText + `\n\n[ERROR]: TRANSMISSION FAILURE. PLEASE USE MANUAL TRANSMISSION BUTTON BELOW.`;
                    }
                })
                .catch(err => {
                    terminalResponse.textContent = bodyText + `\n\n[ERROR]: TRANSMISSION OFFLINE. PLEASE USE MANUAL TRANSMISSION BUTTON BELOW.`;
                });
            }
            
            // Build direct mailto link
            const mailSubject = encodeURIComponent(`[Dojo Admissions] Systems Mentorship Request - ${name}`);
            const mailBody = encodeURIComponent(bodyText);
            const mailtoLink = `mailto:elaouadzyad@gmail.com?subject=${mailSubject}&body=${mailBody}`;
            
            // Append Action Button to Terminal
            const actionDiv = document.createElement('div');
            actionDiv.style.marginTop = '20px';
            actionDiv.style.display = 'flex';
            actionDiv.style.gap = '15px';
            
            const mailBtn = document.createElement('a');
            mailBtn.href = mailtoLink;
            mailBtn.className = 'terminal-btn-submit';
            mailBtn.style.textAlign = 'center';
            mailBtn.style.textDecoration = 'none';
            mailBtn.textContent = 'TRANSMIT ADMISSION PACKET VIA EMAIL';
            actionDiv.appendChild(mailBtn);

            const calendlyBtn = document.createElement('a');
            calendlyBtn.href = CALENDLY_LINK;
            calendlyBtn.target = '_blank';
            calendlyBtn.className = 'terminal-btn-submit';
            calendlyBtn.style.borderColor = 'var(--accent-cyan)';
            calendlyBtn.style.color = 'var(--accent-cyan)';
            calendlyBtn.style.textAlign = 'center';
            calendlyBtn.style.textDecoration = 'none';
            calendlyBtn.textContent = 'BOOK 1-ON-1 ON CALENDLY';
            actionDiv.appendChild(calendlyBtn);

            const copyBtn = document.createElement('button');
            copyBtn.className = 'terminal-btn-submit';
            copyBtn.style.borderColor = 'var(--accent-gold)';
            copyBtn.style.color = 'var(--accent-gold)';
            copyBtn.textContent = 'COPY ADMISSION CONTRACT TO CLIPBOARD';
            copyBtn.addEventListener('click', () => {
                navigator.clipboard.writeText(bodyText);
                copyBtn.textContent = 'CONTRACT SECURED / COPIED!';
                playSynthSound('beep');
            });
            actionDiv.appendChild(copyBtn);
            
            terminalResponse.appendChild(actionDiv);
        }, 2500);
    });
}


// --- 5. DETAILED BLUEPRINT SPEC DRAWER MODAL & BLOG READER ---
const blueprintModal = document.getElementById('blueprint-modal');
const closeBlueprintBtn = document.getElementById('close-blueprint');
const blueprintBody = document.getElementById('blueprint-body-content');
const triggerBlueprintBtns = document.querySelectorAll('.portfolio-btn-trigger');

const blueprintDetails = {
    'hybrid-rocket': {
        title: "TADORI-TADORI HYBRID PROPULSION SYSTEM",
        content: `
            <div class="drawer-content-box">
                <div class="drawer-header">
                    <h4>FILE: KU_PLANET_Q_PROPULSION_RECONSTRUCTION.LOG</h4>
                    <p>// LOCATION: KYUSHU UNIVERSITY // CLUB: PLANET Q</p>
                </div>
                <div class="drawer-body">
                    <p><strong>System Objective:</strong> Establish high-accuracy computational thrust profile reconstruction and structural simulation templates for the Tadori-Tadori Class hybrid rocket test vehicle.</p>
                    <p><strong>Aerospace GNC Context:</strong> Calculated the center of pressure shifting dynamics during hybrid propellant grain regression to model aerodynamic flight stability coefficients.</p>
                    <p><strong>Mentorship Application:</strong> Demonstrates real-world, high-pressure dynamic structural design and instrumentation constraints. Taught directly under GNC Autopilot Tuner (Simulink control tuning) and Cloud FEA Validator (Ansys finite element hardening).</p>
                </div>
                <div class="drawer-specs">
                    <h5>TECHNICAL HARDWARE VERIFICATION</h5>
                    <p>&gt; Fuel grain geometry: Star-port regression topology</p>
                    <p>&gt; Solid Grain Material: HTPB (Hydroxyl-terminated polybutadiene)</p>
                    <p>&gt; Combustion telemetry: SolidWorks structure & ANSYS thermal deformation matching</p>
                </div>
            </div>
        `
    },
    'cubesat-adcs': {
        title: "SART CUBESAT ATTITUDE CONTROL SUITE",
        content: `
            <div class="drawer-content-box">
                <div class="drawer-header">
                    <h4>FILE: SART_3U_CUBESAT_ADCS_Telemetry.LOG</h4>
                    <p>// LOCATION: SPACE SYSTEMS DEVELOPMENT / CUBESAT LAB</p>
                </div>
                <div class="drawer-body">
                    <p><strong>System Objective:</strong> Model, simulate, and design calibration loops for a 3U Nano-satellite Attitude Determination and Control System (ADCS).</p>
                    <p><strong>Aerospace GNC Context:</strong> Formulated Euler equations of rigid body rotation in quaternion state-space. Integrated reaction wheel inertia matrices and magnetic torquer coil outputs linked to Extended Kalman Filter (EKF) magnetometer estimations.</p>
                    <p><strong>Mentorship Application:</strong> Learn the exact mathematical modeling pipeline required by ESA research hubs. Skip the textbook fluff: we study numerical integrators, sensor disturbance modeling, and control saturation.</p>
                </div>
                <div class="drawer-specs">
                    <h5>SIMULATOR READOUT PARAMETERS</h5>
                    <p>&gt; Control loop: PD Lyapunov-based feedback pointing control</p>
                    <p>&gt; Disturbance profiles: Gravitational gradient, aerodynamic drag torque, solar radiation</p>
                    <p>&gt; Integration scheme: High-fidelity ODE45 MATLAB/Simulink simulation suite</p>
                </div>
            </div>
        `
    },
    'esa-clean-space': {
        title: "UNDERACTUATED DEBRIS STABILIZATION PROJECT",
        content: `
            <div class="drawer-content-box">
                <div class="drawer-header">
                    <h4>FILE: ESA_CLEAN_SPACE_DAYS_2026_ABSTRACT.LOG</h4>
                    <p>// LOCATION: ESTEC / EUROPEAN SPACE AGENCY</p>
                </div>
                <div class="drawer-body">
                    <p><strong>System Objective:</strong> Develop attitude matching and post-capture detumbling control laws for non-cooperative active debris removal (ADR) under actuator degradation.</p>
                    <p><strong>Aerospace GNC Context:</strong> Solved complex multi-body momentum transfer models during immediate capture impact. Formulated adaptive Lyapunov control laws to ensure pointing stabilization when thrusters are in underactuated states (failed or throttled).</p>
                    <p><strong>Mentorship Application:</strong> The gold standard of aerospace presentation preparation. Learn how to draft papers, organize rigorous mathematical proofs, and present systems architectures to demanding executive boards (like ESA/ESTEC Panels).</p>
                </div>
                <div class="drawer-specs">
                    <h5>SELECTED PRESENTATION METADATA</h5>
                    <p>&gt; Conference: ESA Clean Space Days 2026, ESTEC, Noordwijk</p>
                    <p>&gt; Scope: Active Debris Removal (ADRIOS Directives)</p>
                    <p>&gt; Core controls: Underactuated multi-body dynamics, transition mechanics</p>
                </div>
            </div>
        `
    }
};

// Open Project Blueprint Modals
triggerBlueprintBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const projectKey = btn.getAttribute('data-project');
        const data = blueprintDetails[projectKey];
        if (data && blueprintBody && blueprintModal) {
            const blueprintHeaderTitle = document.getElementById('blueprint-header-title');
            if (blueprintHeaderTitle) {
                blueprintHeaderTitle.textContent = `${projectKey.toUpperCase()}_SPEC_READER.EXE`;
            }
            blueprintBody.innerHTML = data.content;
            blueprintModal.classList.add('active');
            playSynthSound('open');
            // Hide edit log button for projects
            const editBlogBtn = document.getElementById('edit-active-blog-btn');
            if (editBlogBtn) editBlogBtn.style.display = 'none';
        }
    });
});

if (closeBlueprintBtn) {
    closeBlueprintBtn.addEventListener('click', () => {
        if (blueprintModal) blueprintModal.classList.remove('active');
        playSynthSound('close');
    });
}

if (blueprintModal) {
    blueprintModal.addEventListener('click', (e) => {
        if (e.target === blueprintModal) {
            blueprintModal.classList.remove('active');
            playSynthSound('close');
        }
    });
}


// --- 6. MISSION LOGS (BLOG) DATABASE & DYNAMIC RENDER ---
const defaultBlogs = [
    {
        id: "blog-post-1",
        title: "SURVIVING THE HELL OF PLANET Q (KYUSHU ROCKETRY)",
        tag: "PROPULSION",
        date: "2026-05-12",
        image: "assets/manga_ichigo.jpg",
        excerpt: "A tactical breakdown of Planet Q's hybrid combustion loops, grain regression coefficients, and working under academic stress.",
        content: `
            <p>Entering the rocketry club (Planet Q) at Kyushu University was a trial by fire. In Japan, academic clubs operate with professional-level intensity. We weren't just building toys; we simulated and launched multi-kilonewton hybrid rockets.</p>
            <p><strong>The Core Challenge:</strong> Star-port regression topology stability. Under thermal combustion pressure, the solid HTPB grain burns unevenly, shifting the center of mass. This introduces high-frequency oscillations that test the structural limits of the fuselage.</p>
            <p><strong>Survival Strategies:</strong> You must treat code design like career armor. We automated thrust profile integrations in Python, validating our chamber pressure readings (4.5 MPa limits) against structural models in ANSYS. To survive, remain a student at the height of challenge.</p>
        `,
        comments: [
            { name: "CAD_WARRIOR_45", date: "2026-05-15", msg: "This grain regression simulation template saved my thesis! Margins of safety are perfectly calculated." },
            { name: "AOCS_DEV", date: "2026-05-18", msg: "Planet Q launches are legendary. Solid Mechanics ANSYS thermal checks are must-reads." }
        ]
    },
    {
        id: "blog-post-2",
        title: "LYAPUNOV ATTITUDE CONTROLLERS: DRIFTING IN ORBIT",
        tag: "ADCS & GNC",
        date: "2026-05-24",
        image: "assets/manga_kakugo_1.jpg",
        excerpt: "How to tune non-linear attitude tracking loops to execute agile synchronization maneuvers with tumbling targets.",
        content: `
            <p>Just as Takumi in <em>Initial D</em> drifts along the absolute boundary of friction, a satellite servicer must drift along the control boundary of tumbling debris to safely capture it. Traditional linear controllers (PID) fail because the inertia tensor of the servicer-debris stack shifts violently post-capture.</p>
            <p><strong>The GNC Control Law:</strong> We formulate a Lyapunov candidate function representing attitude errors in quaternion state space. We define the derivative to guarantee global asymptotic stability even under thruster underactuation.</p>
            <p><strong>Simulink Optimization:</strong> Implement an adaptive boundary layer in your sliding mode control blocks. This dampens actuator chattering, preventing reaction wheels from saturating. This is the 'Initial D' approach to GNC—smooth, optimal flow.</p>
        `,
        comments: [
            { name: "SATELLITE_ENTHUSIAST", date: "2026-05-26", msg: "Lyapunov stability criterion for spacecraft stack relative motion was a bit abstract for me, but the Initial D drift comparison makes absolute sense!" }
        ]
    },
    {
        id: "blog-post-3",
        title: "COMPOSE RESUME ARMOR THAT RECEIVES ESA COMPLIANCE",
        tag: "CAREER ARMOR",
        date: "2026-06-01",
        image: "assets/manga_ken.jfif",
        excerpt: "Ditch generic templates. Learn how to structure aerospace resumes that display S-Class engineering power levels.",
        content: `
            <p>When presenting GNC architectures to the European Space Agency (ESA) or interviewing for competitive spots like the Boeing externship, generic, text-heavy resumes get filtered out instantly. Insufficient technical framing represents weak career armor.</p>
            <p><strong>The Exoskeleton Framework:</strong> Your resume must read like a systems architecture manual. Do not say 'Assisted with CAD models.' Instead, write: 'Designed 3-axis Cubesat ADCS simulator in MATLAB/Simulink; calibrated EKF sensor fusion loop to achieve pointing accuracy &lt; 0.05 deg.'</p>
            <p><strong>Define your Power Level:</strong> Show your margins of safety, compile times, and code validation ratios. Highlight your ability to manage UAV teams under crisis. Give recruiters quantitative proofs of your structural resilience.</p>
        `,
        comments: []
    }
];

// Load Blogs database
let blogsDB = [];

function loadBlogsDatabase() {
    const rawData = localStorage.getItem('iron_engineer_db');
    if (!rawData) {
        blogsDB = JSON.parse(JSON.stringify(defaultBlogs)); // Deep copy
        localStorage.setItem('iron_engineer_db', JSON.stringify(blogsDB));
    } else {
        blogsDB = JSON.parse(rawData);
    }
    updateJsonMonitor();
}

function updateJsonMonitor() {
    const monitor = document.getElementById('db-json-monitor');
    if (monitor) {
        monitor.textContent = JSON.stringify(blogsDB, null, 4);
    }
}

const blueprintCommentsBlock = document.getElementById('blueprint-comments-block');

function renderComments(post) {
    if (!blueprintCommentsBlock) return;
    blueprintCommentsBlock.style.display = 'block';
    
    const commentsListHTML = (post.comments || []).map(c => `
        <div class="comms-node">
            <div class="comms-meta">
                <span class="comms-operator">[Operator: ${c.name.toUpperCase()}]</span>
                <span>${c.date}</span>
            </div>
            <div class="comms-message">&gt; ${c.msg}</div>
        </div>
    `).join('');

    blueprintCommentsBlock.innerHTML = `
        <div class="comms-section">
            <h4 class="comms-title">COMMUNICATION FEED</h4>
            <div class="comms-list" id="modal-comments-list">
                ${commentsListHTML || '<div style="color:var(--steel); font-family:var(--font-mono); font-size:0.85rem; padding:10px 0;">// NO ACTIVE FEED DETECTED. WRITE ENTRY TO INITIALIZE COMMS...</div>'}
            </div>
            
            <form id="comment-post-form" class="comms-form" data-active-post-id="${post.id}">
                <div class="json-monitor-title">> DEPLOY COMMS PACKET</div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 12px;">
                    <input type="text" id="comment-author" class="terminal-input" required placeholder="OPERATOR HANDLE (Name)">
                    <input type="email" id="comment-email" class="terminal-input" placeholder="SECURE CHANNEL (Email)">
                </div>
                <textarea id="comment-text" class="terminal-input" rows="3" required placeholder="Write comment details here..." style="margin-bottom: 12px; resize: none;"></textarea>
                <button type="submit" class="terminal-btn-submit" style="font-size: 0.9rem; padding: 8px 18px; width: auto;">TRANSMIT COMMS PACKET</button>
            </form>
        </div>
    `;

    // Auto scroll list
    const commsList = document.getElementById('modal-comments-list');
    if (commsList) commsList.scrollTop = commsList.scrollHeight;

    // Submit handler
    const commentForm = document.getElementById('comment-post-form');
    if (commentForm) {
        commentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const author = document.getElementById('comment-author').value;
            const text = document.getElementById('comment-text').value;
            const activePostId = commentForm.getAttribute('data-active-post-id');
            
            playSynthSound('submit');
            
            const nowStamp = new Date().toISOString().split('T')[0];
            const newComment = {
                name: author,
                date: nowStamp,
                msg: text
            };

            const targetPost = blogsDB.find(p => p.id === activePostId);
            if (targetPost) {
                if (!targetPost.comments) targetPost.comments = [];
                targetPost.comments.push(newComment);
                localStorage.setItem('iron_engineer_db', JSON.stringify(blogsDB));
                renderComments(targetPost);
                updateJsonMonitor();
            }
        });
    }
}

function renderBlogPosts() {
    const container = document.getElementById('blog-posts-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    blogsDB.forEach(post => {
        const card = document.createElement('div');
        card.className = 'blog-card manga-outline';
        
        card.innerHTML = `
            <div class="blog-card-img-box">
                <img src="${post.image}" alt="${post.title}" class="blog-card-img">
            </div>
            <div class="blog-card-content">
                <div>
                    <div class="blog-card-meta">
                        <span>LOG_${post.id.replace('blog-post-', '').padStart(3, '0')} // ${post.tag}</span>
                        <span>${post.date}</span>
                    </div>
                    <h3 class="blog-card-title">${post.title}</h3>
                    <p class="blog-card-excerpt">${post.excerpt}</p>
                </div>
                <button class="blog-card-action" data-post-id="${post.id}">READ ENTRY &rarr;</button>
            </div>
        `;
        
        container.appendChild(card);
    });

    // Wire up dynamic click events to open blog post in modal with comment thread
    container.querySelectorAll('.blog-card-action').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const postId = btn.getAttribute('data-post-id');
            const post = blogsDB.find(p => p.id === postId);
            if (post && blueprintBody && blueprintModal) {
                const blueprintHeaderTitle = document.getElementById('blueprint-header-title');
                if (blueprintHeaderTitle) {
                    blueprintHeaderTitle.textContent = `MISSION_LOG_READER.EXE`;
                }
                blueprintBody.innerHTML = `
                    <div class="drawer-content-box">
                        <div class="drawer-header">
                            <h4>LOG ENTRY // STACK: ${post.tag.toUpperCase()}</h4>
                            <p>// DATE: ${post.date} // MISSION LOG: ${post.id.toUpperCase()}</p>
                        </div>
                        <h2 class="dojo-title" style="font-size: 2.4rem; margin-bottom: 20px;">${post.title}</h2>
                        <div class="drawer-body">
                            ${post.content}
                        </div>
                    </div>
                `;
                renderComments(post);
                blueprintModal.classList.add('active');
                playSynthSound('open');
                
                // Show edit button for blogs and set target post id
                const editBlogBtn = document.getElementById('edit-active-blog-btn');
                if (editBlogBtn) {
                    editBlogBtn.style.display = 'block';
                    editBlogBtn.setAttribute('data-active-post-id', post.id);
                }
            }
        });
        btn.addEventListener('mouseenter', () => {
            if (isAudioActive) playSynthSound('beep');
        });
    });
}

// Hide comments list and edit button for standard projects
triggerBlueprintBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (blueprintCommentsBlock) blueprintCommentsBlock.style.display = 'none';
        const editBlogBtn = document.getElementById('edit-active-blog-btn');
        if (editBlogBtn) editBlogBtn.style.display = 'none';
    });
});

// Initialize on load
loadBlogsDatabase();
renderBlogPosts();


// --- 7. INLINE BLOG TAB TOGGLES & REAL-TIME EDITOR ---
const blogTabRead = document.getElementById('blog-tab-read');
const blogTabForge = document.getElementById('blog-tab-forge');
const blogViewPanel = document.getElementById('blog-view-panel');
const blogWritePanel = document.getElementById('blog-write-panel');

const editorBlogForm = document.getElementById('editor-blog-form');
const editTitle = document.getElementById('editor-blog-title');
const editTag = document.getElementById('editor-blog-tag');
const editDate = document.getElementById('editor-blog-date');
const editImage = document.getElementById('editor-blog-image');
const editExcerpt = document.getElementById('editor-blog-excerpt');
const editContent = document.getElementById('editor-blog-content');

const liveCardSandbox = document.getElementById('live-card-sandbox');
const htmlSnippetBox = document.getElementById('html-snippet-box');
const wipeDbBtn = document.getElementById('wipe-db-btn');
const copySnippetBtn = document.getElementById('copy-snippet-btn');

let editingPostId = null;
const editActiveBlogBtn = document.getElementById('edit-active-blog-btn');
const cancelEditBtn = document.getElementById('cancel-edit-btn');
const submitEditorBlogBtn = document.getElementById('submit-editor-blog');

// Tab toggling events
if (blogTabRead && blogTabForge) {
    blogTabRead.addEventListener('click', () => {
        blogTabRead.classList.add('active-tab');
        blogTabForge.classList.remove('active-tab');
        blogViewPanel.classList.add('active-panel');
        blogWritePanel.classList.remove('active-panel');
        playSynthSound('open');
    });

    blogTabForge.addEventListener('click', () => {
        blogTabForge.classList.add('active-tab');
        blogTabRead.classList.remove('active-tab');
        blogWritePanel.classList.add('active-panel');
        blogViewPanel.classList.remove('active-panel');
        playSynthSound('open');
        updateJsonMonitor();
        updateLivePreview();
        
        // Auto-fill compilation stamp with current date
        if (editDate && !editDate.value) {
            editDate.value = new Date().toISOString().split('T')[0];
        }
    });
}

// Check URL Hash on load / footer clicks
function handleHashChange() {
    if (window.location.hash === '#blog' && blogTabForge) {
        blogTabForge.click();
    }
}
window.addEventListener('hashchange', handleHashChange);
window.addEventListener('DOMContentLoaded', handleHashChange);

// Edit active blog button inside spec drawer click handler
if (editActiveBlogBtn) {
    editActiveBlogBtn.addEventListener('click', () => {
        const postId = editActiveBlogBtn.getAttribute('data-active-post-id');
        const post = blogsDB.find(p => p.id === postId);
        if (post) {
            // Close the spec modal
            if (blueprintModal) blueprintModal.classList.remove('active');
            playSynthSound('close');
            
            // Switch to Forge tab
            if (blogTabForge) {
                blogTabForge.click();
            }
            
            // Pre-fill inputs
            if (editTitle) editTitle.value = post.title;
            if (editTag) editTag.value = post.tag;
            if (editDate) editDate.value = post.date;
            if (editImage) editImage.value = post.image;
            if (editExcerpt) editExcerpt.value = post.excerpt;
            
            // Revert HTML-formatted paragraphs to raw text
            let rawContent = post.content;
            rawContent = rawContent.replace(/<p>/g, '').replace(/<\/p>/g, '\n\n');
            rawContent = rawContent.replace(/<br\s*\/?>/g, '\n');
            rawContent = rawContent.trim();
            
            if (editContent) editContent.value = rawContent;
            
            // Set editing ID
            editingPostId = post.id;
            
            // Toggle buttons
            if (submitEditorBlogBtn) {
                submitEditorBlogBtn.textContent = "> UPDATE LOG IN DATABASE";
            }
            if (cancelEditBtn) {
                cancelEditBtn.style.display = 'block';
            }
            
            // Sync live preview
            updateLivePreview();
        }
    });
}

// Cancel edit button click handler
if (cancelEditBtn) {
    cancelEditBtn.addEventListener('click', () => {
        if (editorBlogForm) {
            editorBlogForm.reset();
        }
        editingPostId = null;
        if (submitEditorBlogBtn) {
            submitEditorBlogBtn.textContent = "> TRANSMIT LOG TO DATABASE";
        }
        cancelEditBtn.style.display = 'none';
        if (blogTabRead) {
            blogTabRead.click();
        }
        playSynthSound('close');
    });
}

// Keystroke-by-keystroke real-time editor preview
function updateLivePreview() {
    if (!liveCardSandbox) return;
    const titleVal = (editTitle.value || 'SLIDING MODE CONTROL').toUpperCase();
    const tagVal = (editTag.value || 'ADCS & GNC').toUpperCase();
    const dateVal = editDate.value || new Date().toISOString().split('T')[0];
    const imageVal = editImage.value || 'assets/manga_ichigo.jpg';
    const excerptVal = editExcerpt.value || 'Real-time sync telemetry compiling...';
    
    let displayIndex;
    if (editingPostId) {
        const match = editingPostId.match(/\d+/);
        displayIndex = match ? parseInt(match[0], 10) : blogsDB.length + 1;
    } else {
        displayIndex = blogsDB.length + 1;
    }
    
    liveCardSandbox.innerHTML = `
        <div class="blog-card manga-outline" style="width: 100%; max-width: 380px;">
            <div class="blog-card-img-box">
                <img src="${imageVal}" alt="${titleVal}" class="blog-card-img" style="filter: grayscale(10%) contrast(120%);">
            </div>
            <div class="blog-card-content">
                <div>
                    <div class="blog-card-meta">
                        <span>LOG_${String(displayIndex).padStart(3, '0')} // ${tagVal}</span>
                        <span>${dateVal}</span>
                    </div>
                    <h3 class="blog-card-title">${titleVal}</h3>
                    <p class="blog-card-excerpt">${excerptVal}</p>
                </div>
                <button class="blog-card-action" style="pointer-events: none;">PREVIEW LOG &rarr;</button>
            </div>
        </div>
    `;

    // Compile HTML snippet card in real-time
    const htmlSnippet = `
<!-- Blog Card: ${titleVal} -->
<div class="blog-card manga-outline">
    <div class="blog-card-img-box">
        <img src="${imageVal}" alt="${titleVal}" class="blog-card-img">
    </div>
    <div class="blog-card-content">
        <div>
            <div class="blog-card-meta">
                <span>LOG_${String(displayIndex).padStart(3, '0')} // ${tagVal}</span>
                <span>${dateVal}</span>
            </div>
            <h3 class="blog-card-title">${titleVal}</h3>
            <p class="blog-card-excerpt">${excerptVal}</p>
        </div>
        <button class="blog-card-action" data-post-id="${editingPostId || 'blog-post-' + displayIndex}">READ ENTRY &rarr;</button>
    </div>
</div>`.trim();

    if (htmlSnippetBox) htmlSnippetBox.value = htmlSnippet;
}

// Register keystroke listeners
[editTitle, editTag, editDate, editImage, editExcerpt, editContent].forEach(input => {
    if (input) {
        input.addEventListener('input', updateLivePreview);
        input.addEventListener('change', updateLivePreview);
    }
});

// Image & Code Insertion Toolbar logic
const btnImg = document.getElementById('toolbar-btn-img');
const btnCode = document.getElementById('toolbar-btn-code');
const toolbarImageSelect = document.getElementById('toolbar-image-select');

if (btnImg && editContent && toolbarImageSelect) {
    btnImg.addEventListener('click', () => {
        const startPos = editContent.selectionStart;
        const endPos = editContent.selectionEnd;
        const text = editContent.value;
        const imgTag = `\n<img src="${toolbarImageSelect.value}" class="blog-body-img" alt="Illustration">\n`;
        editContent.value = text.substring(0, startPos) + imgTag + text.substring(endPos);
        editContent.focus();
        updateLivePreview();
        playSynthSound('beep');
    });
}

if (btnCode && editContent) {
    btnCode.addEventListener('click', () => {
        const startPos = editContent.selectionStart;
        const endPos = editContent.selectionEnd;
        const text = editContent.value;
        const codeTag = `\n<pre><code>// Insert code here\n\n</code></pre>\n`;
        editContent.value = text.substring(0, startPos) + codeTag + text.substring(endPos);
        editContent.focus();
        updateLivePreview();
        playSynthSound('beep');
    });
}

// Form Submission & Database Save
if (editorBlogForm) {
    editorBlogForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const title = editTitle.value.toUpperCase();
        const tag = editTag.value.toUpperCase();
        const date = editDate.value;
        const image = editImage.value;
        const excerpt = editExcerpt.value;
        const contentRaw = editContent.value;
        
        playSynthSound('submit');
        
        // Parse paragraphs: insert raw HTML tag blocks directly, encapsulate normal texts in paragraph tags
        const formattedContent = contentRaw.split('\n\n').map(para => {
            const trimmed = para.trim();
            if (trimmed.startsWith('<img') || trimmed.startsWith('<pre')) {
                return trimmed;
            }
            return `<p>${trimmed.replace(/\n/g, '<br>')}</p>`;
        }).join('\n');
        
        if (editingPostId) {
            // Edit existing blog post
            const postIndex = blogsDB.findIndex(p => p.id === editingPostId);
            if (postIndex !== -1) {
                const originalComments = blogsDB[postIndex].comments || [];
                blogsDB[postIndex] = {
                    id: editingPostId,
                    title: title,
                    tag: tag,
                    date: date,
                    image: image,
                    excerpt: excerpt,
                    content: formattedContent,
                    comments: originalComments
                };
            }
            editingPostId = null;
            if (submitEditorBlogBtn) {
                submitEditorBlogBtn.textContent = "> TRANSMIT LOG TO DATABASE";
            }
            if (cancelEditBtn) {
                cancelEditBtn.style.display = 'none';
            }
        } else {
            // Add new blog post
            const newPostId = "blog-post-" + (blogsDB.length + 1);
            const newPost = {
                id: newPostId,
                title: title,
                tag: tag,
                date: date,
                image: image,
                excerpt: excerpt,
                content: formattedContent,
                comments: []
            };
            blogsDB.push(newPost);
        }
        
        localStorage.setItem('iron_engineer_db', JSON.stringify(blogsDB));
        
        renderBlogPosts();
        updateJsonMonitor();
        
        // Return to view logs
        blogTabRead.click();
        
        // Reset form inputs
        editorBlogForm.reset();
        editDate.value = new Date().toISOString().split('T')[0];
    });
}

// Wipe Database button
if (wipeDbBtn) {
    wipeDbBtn.addEventListener('click', () => {
        if (confirm("Reset local storage database to default settings?")) {
            localStorage.removeItem('iron_engineer_db');
            loadBlogsDatabase();
            renderBlogPosts();
            playSynthSound('close');
            htmlSnippetBox.value = '';
        }
    });
}

// Copy HTML Snippet button
if (copySnippetBtn) {
    copySnippetBtn.addEventListener('click', () => {
        if (htmlSnippetBox.value) {
            navigator.clipboard.writeText(htmlSnippetBox.value);
            copySnippetBtn.textContent = "SNIPPET SECURED / COPIED!";
            playSynthSound('beep');
            setTimeout(() => {
                copySnippetBtn.textContent = "COPY SNIPPET TO CLIPBOARD";
            }, 2000);
        }
    });
}


// --- 8. SYNTHESIZED MECHANICAL AUDIO SYSTEM (WEB AUDIO API) ---
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
        gainNode.gain.setValueAtTime(0.05, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
        osc.start(now);
        osc.stop(now + 0.15);
    } 
    else if (type === 'open') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.exponentialRampToValueAtTime(660, now + 0.25);
        gainNode.gain.setValueAtTime(0.03, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
    } 
    else if (type === 'close') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(550, now);
        osc.frequency.exponentialRampToValueAtTime(150, now + 0.2);
        gainNode.gain.setValueAtTime(0.03, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        osc.start(now);
        osc.stop(now + 0.2);
    } 
    else if (type === 'submit') {
        osc.type = 'square';
        osc.frequency.setValueAtTime(110, now);
        osc.frequency.linearRampToValueAtTime(880, now + 0.6);
        gainNode.gain.setValueAtTime(0.02, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
        osc.start(now);
        osc.stop(now + 0.6);
    }
}

// Attach hover sound to action items
let playHoverBeep = () => {
    if (isAudioActive) playSynthSound('beep');
};

const updateHoverListeners = () => {
    const interactiveElements = document.querySelectorAll('.btn-bankai, .dojo-action, .portfolio-btn-trigger, .terminal-close, .blog-card-action, .gallery-item, .blog-tab-btn, .toolbar-btn, .lang-btn');
    interactiveElements.forEach(elem => {
        elem.removeEventListener('mouseenter', playHoverBeep);
        elem.addEventListener('mouseenter', playHoverBeep);
    });
};

updateHoverListeners();

// Re-bind hover sounds when blogs render dynamically
const originalRenderBlogs = renderBlogPosts;
renderBlogPosts = function() {
    originalRenderBlogs();
    updateHoverListeners();
};


// --- 9. LANGUAGE TRANSLATION STATE MACHINE ---
function setLanguage(lang) {
    if (typeof translations === 'undefined' || !translations[lang]) return;
    
    // Update html lang & dir
    document.documentElement.setAttribute('lang', lang);
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
    }

    // Update all data-i18n elements
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

    // Update dynamic telemetry logs list
    if (typeof localizedTelemetryMessages !== 'undefined' && localizedTelemetryMessages[lang]) {
        telemetryMessages.length = 0;
        telemetryMessages.push(...localizedTelemetryMessages[lang]);
    }

    // Update blueprint details specs
    if (typeof localizedBlueprintDetails !== 'undefined' && localizedBlueprintDetails[lang]) {
        Object.assign(blueprintDetails, localizedBlueprintDetails[lang]);
    }

    // Update default blogs in database
    if (typeof localizedDefaultBlogs !== 'undefined' && localizedDefaultBlogs[lang]) {
        localizedDefaultBlogs[lang].forEach(defPost => {
            const existingPost = blogsDB.find(p => p.id === defPost.id);
            if (existingPost) {
                existingPost.title = defPost.title;
                existingPost.tag = defPost.tag;
                existingPost.date = defPost.date;
                existingPost.image = defPost.image;
                existingPost.excerpt = defPost.excerpt;
                existingPost.content = defPost.content;
            }
        });
        localStorage.setItem('iron_engineer_db', JSON.stringify(blogsDB));
        renderBlogPosts();
        updateJsonMonitor();
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

// Wire up language buttons
const initLanguageSelector = () => {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedLang = btn.getAttribute('data-lang');
            setLanguage(selectedLang);
            playSynthSound('beep');
        });
    });

    // Load saved language or fallback to english
    const savedLang = localStorage.getItem('iron_engineer_lang') || 'en';
    setLanguage(savedLang);
};

// Initialize language selector immediately
initLanguageSelector();

// --- NEWSLETTER SUBSCRIPTION LOGIC ---
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
        if (!subs.some(s => s.email === mailVal)) {
            subs.push({ email: mailVal, date: new Date().toISOString(), source: 'homepage_newsletter' });
            localStorage.setItem('teaser_newsletter_subs', JSON.stringify(subs));
        }
        
        // Transmit to Web3Forms automatically if key is set
        if (WEB3FORMS_ACCESS_KEY && WEB3FORMS_ACCESS_KEY !== "YOUR_ACCESS_KEY_HERE") {
            fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    subject: `[Newsletter] BeWinnerEngineer New Subscriber - ${mailVal}`,
                    from_name: "BeWinnerEngineer Newsletter",
                    email: mailVal,
                    source: "homepage_newsletter"
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log("Newsletter transmission success:", data);
            })
            .catch(err => {
                console.error("Newsletter transmission failed:", err);
            });
        }
    });
}


