// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize basic functionality
    initializeSkillSliders();
    initializeProfileImageUpload();
    initializeTheme();
});

// Skill Sliders Animation with Intersection Observer
function initializeSkillSliders() {
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const slider = entry.target;
                const level = parseInt(slider.getAttribute('data-level')) || 0;
                const bars = slider.querySelectorAll('.skill-bar');
                
                bars.forEach((bar, index) => {
                    setTimeout(() => {
                        if (index < level) {
                            bar.classList.add('filled', 'animate');
                        }
                    }, index * 100); // Staggered animation
                });
                
                observer.unobserve(slider);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.skill-slider').forEach(slider => {
        observer.observe(slider);
    });
} 