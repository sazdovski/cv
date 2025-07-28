# David Sazdovski - Professional CV Website

A modern, interactive CV website with glassmorphism design, skill sliders, and smooth animations.

## 🚀 How to Run Locally

### Method 1: Using Python's Built-in Server (Recommended)

1. **Navigate to the project directory:**
   ```bash
   cd path/to/cv-folder
   ```

2. **Start the server:**
   
   **For Python 3:**
   ```bash
   python -m http.server 8000
   ```
   
   **For Python 2:**
   ```bash
   python -m SimpleHTTPServer 8000
   ```

3. **Open your browser and go to:**
   ```
   http://localhost:8000
   ```

### Method 2: Using Node.js Live Server

1. **Install live-server globally:**
   ```bash
   npm install -g live-server
   ```

2. **Navigate to the project directory and run:**
   ```bash
   live-server
   ```

### Method 3: Using PHP's Built-in Server

1. **Navigate to the project directory:**
   ```bash
   cd path/to/cv-folder
   ```

2. **Start the server:**
   ```bash
   php -S localhost:8000
   ```

3. **Open your browser and go to:**
   ```
   http://localhost:8000
   ```

### Method 4: Using VS Code Live Server Extension

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 📁 File Structure

```
cv/
├── index.html          # Main HTML file
├── styles.css          # CSS styles with animations
├── script.js           # JavaScript for interactions
├── profile.svg         # Profile image placeholder
└── README.md           # This file
```

## 🎨 Features

- **Modern Glassmorphism Design**: Beautiful translucent cards with backdrop blur
- **Interactive Skill Sliders**: Animated 1-10 skill rating system with groups
- **Smooth Animations**: CSS keyframes and JavaScript transitions
- **Responsive Design**: Mobile-friendly layout
- **Cool Effects**: 
  - Typewriter effect for name
  - Parallax scrolling
  - Hover animations
  - Floating elements
  - Mouse follower
  - Ripple effects
- **Professional Sections**:
  - Profile with photo upload
  - Skills with grouped sliders
  - Experience timeline
  - Certifications
  - Languages with proficiency levels

## 🛠️ Customization

### Updating Profile Photo

1. **Replace the placeholder:**
   - Replace `profile.svg` with your actual photo (`profile.jpg`, `profile.png`, etc.)
   - Update the src in `index.html` if using a different file name
   - Recommended size: 400x400px square

2. **Click to upload:**
   - Click on the profile image when viewing the site to upload a new photo

### Updating Personal Information

**Contact Information** (in `index.html`):
```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <span>your.email@example.com</span>
</div>
```

**Name and Title:**
```html
<h1 class="name">Your Name</h1>
<h2 class="title">Your Professional Title</h2>
```

### Customizing Skills

**Skill Levels** (1-10 scale):
```html
<div class="skill-item">
    <span>Skill Name</span>
    <div class="skill-slider">
        <div class="skill-fill" data-level="8"></div>
        <span class="skill-value">8</span>
    </div>
</div>
```

**Adding New Skill Groups:**
```html
<div class="skill-group">
    <h4><i class="fas fa-icon-name"></i> Group Name</h4>
    <!-- Add skill items here -->
</div>
```

### Color Scheme

The main colors can be changed in `styles.css`:
- Primary: `#06b6d4` (cyan)
- Secondary: `#3b82f6` (blue)
- Background: `#0f172a` (dark slate)

### Adding New Sections

Follow this structure in `index.html`:
```html
<section class="section" id="section-name">
    <div class="section-header">
        <i class="fas fa-icon"></i>
        <h3>Section Title</h3>
    </div>
    <div class="section-content">
        <!-- Your content here -->
    </div>
</section>
```

## 🎯 Skill Categories

The skills are organized into these groups:
- **Testing & QA**: Selenium, Manual Testing, Cucumber, TestNG, API Testing
- **Programming**: Java, C#, JavaScript, React.js
- **Tools & Frameworks**: Postman, JMeter, Spring Boot, Jenkins
- **DevOps & Cloud**: AWS, Docker, CI/CD
- **Databases**: PostgreSQL, MySQL, SQL Server
- **Methodologies**: Agile/Scrum, Kanban, Test Planning

## 🔧 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 📱 Mobile Responsive

The website automatically adapts to different screen sizes:
- Desktop: Full layout with side-by-side sections
- Tablet: Adjusted grid layouts
- Mobile: Single column layout

## 🚀 Performance Features

- Throttled scroll events for smooth performance
- Intersection Observer for efficient animations
- Optimized CSS animations
- Lazy loading effects

## 📝 License

This project is open source and available under the MIT License.

---

**Note**: Replace the placeholder content with your actual information and profile photo before hosting the website. 