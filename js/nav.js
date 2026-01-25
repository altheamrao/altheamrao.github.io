// Navigation HTML template
const navTemplate = `<aside class="sidebar">
    <!-- Site Title -->
    <header class="site-header">
        <h1 class="site-title">
            <a href="index.html">Althea M. Rao<span class="chinese-name">饒梦溪</span></a>
        </h1>
    </header>

    <!-- Navigation -->
    <nav class="main-nav">
        <!-- Projects Section -->
        <div class="nav-section">
            <h2 class="nav-section-title">Projects</h2>
            <!-- First 10 projects (always visible) -->
            <ul class="nav-list nav-projects">
                <li><a href="projects/soft-trigger.html">Soft Trigger</a></li>
                <li><a href="projects/commit-to-memory.html">Commit to Memory, Know It Will Perish</a></li>
                <li><a href="projects/feeling-cloudy.html">Feeling Cloudy</a></li>
                <li><a href="projects/teach-the-machine.html">Teach The Machine Something About Cloud</a></li>
                <li><a href="projects/ground-ensemble.html">Ground Ensemble</a></li>
                <li><a href="projects/life-scope.html">Life Scope</a></li>
                <li><a href="projects/poor-body-memory-berry.html">Poor Body: Memory Berry</a></li>
                <li><a href="projects/lost-genital-department.html">The Lost Genital Department: An Opera</a></li>
                <li><a href="projects/chestful-of-whispers.html">Chestful of Whispers</a></li>
                <li><a href="projects/moon-tapestry.html">Moon Tapestry</a></li>
            </ul>
            <!-- Remaining projects (hidden by default) -->
            <ul class="nav-list nav-projects nav-projects-more" id="nav-more">
                <li><a href="projects/i-was-once-here.html">I Was Once Here, I Might Still Be</a></li>
                <li><a href="projects/born-to-unwilling-parents.html">Born to Unwilling Parents</a></li>
                <li><a href="projects/eat-this-cake.html">Eat This Cake If It Makes You Happy</a></li>
                <li><a href="projects/vagina-chorus.html">Vagina Chorus</a></li>
                <li><a href="projects/the-view.html">The View</a></li>
                <li><a href="projects/pillar-of-salt.html">Pillar of Salt</a></li>
                <li><a href="projects/touch-the-dance.html">Touch: the Dance</a></li>
                <li><a href="projects/blindfold.html">Blindfold</a></li>
                <li><a href="projects/three-seasons.html">Three Seasons</a></li>
                <li><a href="projects/white-mushroom-black-earth.html">White Mushroom, Black Earth</a></li>
                <li><a href="projects/facebook-body-talks.html">Facebook/Body Talks</a></li>
                <li><a href="projects/sacred-harp.html">Sacred Harp</a></li>
                <li><a href="projects/andante-kizuna.html">Andante: Kizuna</a></li>
            </ul>
            <button class="nav-toggle" id="nav-toggle" aria-expanded="false">
                <span class="nav-toggle-text">More</span>
                <span class="nav-toggle-icon">↓</span>
            </button>
        </div>

        <!-- Info Pages Section -->
        <div class="nav-section">
            <ul class="nav-list nav-info">
                <li><a href="bio.html">Bio</a></li>
                <li><a href="artist-statement.html">Artist Statement</a></li>
                <li><a href="cv.html">CV</a></li>
            </ul>
            <ul class="nav-list nav-info nav-info-more" id="nav-info-more">
                <li><a href="stss.html">STSS</a></li>
                <li><a href="lor.html">Letter of Recommendation</a></li>
                <li><a href="academic-job-market.html">Job Market Guide</a></li>
            </ul>
            <button class="nav-toggle" id="nav-info-toggle" aria-expanded="false">
                <span class="nav-toggle-text">More</span>
                <span class="nav-toggle-icon">↓</span>
            </button>
        </div>
    </nav>

    <!-- Social / Footer -->
    <div class="sidebar-footer">
        <div class="social-links">
            <a href="https://www.instagram.com/cloudvilll/" target="_blank" rel="noopener noreferrer" class="social-link" title="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span class="sr-only">Instagram</span>
            </a>
            <a href="#" class="social-link contact-link" data-u="althea.rao" data-d="gmail.com" title="Email">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="M22 7l-10 7L2 7"></path>
                </svg>
                <span class="sr-only">Email</span>
            </a>
        </div>
        <p class="copyright">© ${new Date().getFullYear()} Althea M. Rao. All rights reserved.</p>
    </div>
</aside>`;

document.addEventListener('DOMContentLoaded', () => {
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (!navPlaceholder) return;

    // Determine path prefix based on page location
    const isInSubfolder = window.location.pathname.includes('/projects/');

    // Adjust paths for subfolders
    let html = navTemplate;
    if (isInSubfolder) {
        // Add ../ prefix to all relative href attributes
        html = html.replace(/href="(?!http|#|\.\.\/)/g, 'href="../');
    }

    navPlaceholder.outerHTML = html;

    // Initialize toggles after nav is loaded
    initNavToggles();
    setActiveLink();
    initContactLink();
});

function initContactLink() {
    const contactLink = document.querySelector('.contact-link');
    if (contactLink) {
        contactLink.addEventListener('click', (e) => {
            e.preventDefault();
            const u = contactLink.getAttribute('data-u');
            const d = contactLink.getAttribute('data-d');
            window.location.href = 'mailto:' + u + '@' + d;
        });
    }
}

function initNavToggles() {
    // Projects toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMore = document.getElementById('nav-more');
    if (navToggle && navMore) {
        navToggle.addEventListener('click', () => {
            const isExpanded = navMore.classList.toggle('expanded');
            navToggle.classList.toggle('expanded', isExpanded);
            navToggle.setAttribute('aria-expanded', isExpanded);
            navToggle.querySelector('.nav-toggle-text').textContent = isExpanded ? 'Less' : 'More';
        });
    }

    // Info toggle
    const navInfoToggle = document.getElementById('nav-info-toggle');
    const navInfoMore = document.getElementById('nav-info-more');
    if (navInfoToggle && navInfoMore) {
        navInfoToggle.addEventListener('click', () => {
            const isExpanded = navInfoMore.classList.toggle('expanded');
            navInfoToggle.classList.toggle('expanded', isExpanded);
            navInfoToggle.setAttribute('aria-expanded', isExpanded);
            navInfoToggle.querySelector('.nav-toggle-text').textContent = isExpanded ? 'Less' : 'More';
        });
    }
}

function setActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.nav-list a');

    links.forEach(link => {
        const href = link.getAttribute('href');
        const linkPage = href.split('/').pop();

        if (linkPage === currentPage) {
            link.classList.add('active');

            // Expand parent section if link is in hidden "more" section
            const parentMore = link.closest('.nav-projects-more, .nav-info-more');
            if (parentMore) {
                parentMore.classList.add('expanded');

                // Find and update the corresponding toggle button
                const toggleId = parentMore.id === 'nav-more' ? 'nav-toggle' : 'nav-info-toggle';
                const toggle = document.getElementById(toggleId);
                if (toggle) {
                    toggle.classList.add('expanded');
                    toggle.setAttribute('aria-expanded', 'true');
                    toggle.querySelector('.nav-toggle-text').textContent = 'Less';
                }
            }
        }
    });
}

// Media protection - prevent casual downloading
function initMediaProtection() {
    // Disable right-click on images and videos
    document.addEventListener('contextmenu', (e) => {
        if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO') {
            e.preventDefault();
            return false;
        }
    });

    // Disable drag on images
    document.addEventListener('dragstart', (e) => {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
            return false;
        }
    });

    // Disable image selection
    document.querySelectorAll('img, video').forEach(el => {
        el.setAttribute('draggable', 'false');
        el.style.userSelect = 'none';
        el.style.webkitUserSelect = 'none';
    });
}

// Run media protection after DOM is loaded
document.addEventListener('DOMContentLoaded', initMediaProtection);

// Also run on dynamically loaded content
const observer = new MutationObserver(() => {
    document.querySelectorAll('img, video').forEach(el => {
        el.setAttribute('draggable', 'false');
        el.style.userSelect = 'none';
        el.style.webkitUserSelect = 'none';
    });
});
observer.observe(document.body, { childList: true, subtree: true });
