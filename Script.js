// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    
    // AOS Animation
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Typing Effect
    const typed = new Typed('#typing', {
        strings: [
            'Backend Engineer',
            'Java Spring Boot Expert', 
            'Full Stack Developer',
            'Database Specialist'
        ],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });

    // Scroll Progress
    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        document.querySelector('.scroll-progress').style.width = scrolled + '%';
    });

    // Header Scroll Effect
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth Scrolling & Active Nav
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Update active nav link
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        let current = 'home';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 200;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Ensure content visibility on load
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});
