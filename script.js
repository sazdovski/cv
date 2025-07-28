// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize basic functionality
    initializeSkillSliders();
    initializeProfileImageUpload();
    initializeTheme();
});

// Theme Management
function initializeTheme() {
    // Check for saved theme preference or default to 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// PDF Download Function
async function downloadPDF() {
    // Show loading state
    const downloadBtn = document.querySelector('.download-btn');
    const originalText = downloadBtn.innerHTML;
    downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating PDF...';
    downloadBtn.disabled = true;

    try {
        // Clone the container to avoid modifying the original
        const element = document.querySelector('.container').cloneNode(true);
        
        // Remove theme switcher from PDF
        const themeSwitcher = element.querySelector('.theme-switcher');
        if (themeSwitcher) themeSwitcher.remove();
        
        // Remove download section from PDF
        const downloadSection = element.querySelector('.download-section');
        if (downloadSection) downloadSection.remove();
        
        // Create a temporary container for PDF generation
        const tempContainer = document.createElement('div');
        tempContainer.style.position = 'absolute';
        tempContainer.style.left = '-9999px';
        tempContainer.style.width = '210mm'; // A4 width
        tempContainer.style.background = 'white';
        tempContainer.style.color = '#333';
        tempContainer.appendChild(element);
        document.body.appendChild(tempContainer);
        
        // Configure pdf options with better settings
        const opt = {
            margin: [10, 10, 10, 10],
            filename: 'David_Sazdovski_CV.pdf',
            image: { 
                type: 'jpeg', 
                quality: 1.0 
            },
            html2canvas: { 
                scale: 2,
                useCORS: true,
                letterRendering: true,
                allowTaint: true,
                backgroundColor: '#ffffff',
                logging: false,
                width: 794, // A4 width in pixels at 96 DPI
                height: 1123 // A4 height in pixels at 96 DPI
            },
            jsPDF: { 
                unit: 'mm', 
                format: 'a4', 
                orientation: 'portrait',
                compress: true
            },
            pagebreak: { 
                mode: ['avoid-all', 'css', 'legacy'] 
            }
        };

        // Check if html2pdf is available
        if (typeof html2pdf !== 'undefined') {
            await html2pdf().set(opt).from(tempContainer).save();
        } else {
            // Fallback: open print dialog
            window.print();
        }
        
        // Clean up
        document.body.removeChild(tempContainer);
        
    } catch (error) {
        console.error('PDF generation failed:', error);
        alert('PDF generation failed. Please try using the print function (Ctrl+P).');
    } finally {
        // Restore button state
        downloadBtn.innerHTML = originalText;
        downloadBtn.disabled = false;
    }
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