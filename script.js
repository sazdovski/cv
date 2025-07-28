// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize basic functionality
    initializeSkillSliders();
    initializeProfileImageUpload();
    initializeTheme();
});

// Theme Management
function initializeTheme() {
    // Check for saved theme preference or default to 'dark'
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}



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



// Profile Image Upload
function initializeProfileImageUpload() {
    const profileImageContainer = document.querySelector('.profile-image-container');
    const profileImage = document.getElementById('profileImage');

    profileImageContainer.addEventListener('click', function() {
        // Create file input
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        
        fileInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    profileImage.src = event.target.result;
                    profileImage.style.objectFit = 'cover';
                };
                reader.readAsDataURL(file);
            }
        });
        
        fileInput.click();
    });
}



// Contact Info Click Handlers
function initializeContactHandlers() {
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach(item => {
        item.addEventListener('click', function() {
            const text = this.textContent.trim();
            
            if (text.includes('@')) {
                // Email
                window.open(`mailto:${text.split(' ')[1]}`, '_blank');
            } else if (text.includes('+')) {
                // Phone
                window.open(`tel:${text.split(' ')[1]}`, '_blank');
            } else if (text.includes('linkedin')) {
                // LinkedIn
                window.open(`https://${text.split(' ')[1]}`, '_blank');
            }
        });
    });
}

// Initialize contact handlers
setTimeout(() => {
    initializeContactHandlers();
}, 500); 