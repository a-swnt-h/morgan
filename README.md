# 🚀 Alex Morgan - Modern Personal Portfolio Website

A sleek, responsive, and high-performance personal portfolio website built with modern **HTML5**, **CSS3**, and **Vanilla JavaScript**. Designed with a futuristic dark theme, glowing electric cyan/blue accents, glassmorphism, and smooth interactive micro-animations.

---

## ✨ Features

- **🎨 Modern Dark Mode Design**: Deep charcoal/slate background complemented with glowing cyan and blue accents, radial mesh lighting, and glassmorphic cards.
- **📱 Fully Responsive**: Seamless experience optimized for mobile screens, tablets, laptops, and ultra-wide desktops.
- **🧭 Interactive Navigation**:
  - Fixed header with dynamic background blur and shrink-on-scroll effect.
  - **ScrollSpy** active section highlighting.
  - Smooth animated mobile hamburger navigation drawer.
- **👋 Dynamic Hero Section**:
  - Live availability badge with pulsing status indicator.
  - Interactive waving hand emoji and high-resolution developer portrait with ambient neon glow.
  - Floating tech highlight badges (*Frontend Pro* & *Creative Tech*).
  - Call-to-action buttons with subtle light-sweep hover animations.
- **👨‍💻 Comprehensive About Section**:
  - Detailed background, coding journey, and clear career vision.
  - Key milestone stat counters (*Years Coding*, *Projects Completed*, *Client Focus*).
- **🛠️ Interactive Skills Arsenal**:
  - Dedicated cards for **HTML5**, **CSS3**, **JavaScript (ES6+)**, and **React**.
  - Animated proficiency progress bars that trigger when scrolled into view.
- **💼 Featured Projects Showcase**:
  - **Aether AI Analytics**: Dark-mode SaaS AI prediction dashboard with chart widgets.
  - **Aeon Cyber Audio**: Cyber aesthetic e-commerce storefront with cart & product filters.
  - **TaskFlow AI**: Agile Kanban board with sprint analytics and drag-and-drop workflows.
  - Tech badges and quick-access *Live Demo* and *GitHub Code* buttons.
- **✉️ Validated Contact Form**:
  - Clean inputs with custom focus rings and real-time field validation (Name, Email, Message).
  - Animated button loading state with spinner.
  - Accessible success confirmation alerts with automatic reset.
- **🌐 Social Media Integration**:
  - Hover-reactive SVG icons for **GitHub**, **LinkedIn**, and **Instagram**.
- **⬆️ Back-to-Top Floating Button**:
  - Smooth scroll back to top that reveals after scrolling past the hero section.

---

## 🛠️ Built With

- **HTML5**: Semantic markup, accessible attributes (ARIA), SEO meta tags, and Open Graph tags.
- **CSS3 (Vanilla)**:
  - Custom Properties (CSS variables) for design system tokens.
  - Modern Flexbox & CSS Grid layouts.
  - Glassmorphism (`backdrop-filter: blur`).
  - Keyframe animations & smooth transitions.
- **JavaScript (Vanilla ES6+)**:
  - `IntersectionObserver` for scroll-triggered reveal animations.
  - DOM manipulation and event delegation.
  - Form validation with regular expressions.
  - Zero heavy external dependencies.
- **Google Fonts**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) & [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono).

---

## 📂 Project Directory Structure

```text
├── assets/
│   └── images/
│       ├── profile.jpg          # Profile photo / avatar
│       ├── project1.jpg         # Aether AI Analytics mockup
│       ├── project2.jpg         # Aeon Cyber Audio mockup
│       └── project3.jpg         # TaskFlow AI Kanban board mockup
├── index.html                   # Main semantic HTML structure
├── style.css                    # Design system, styling & responsive queries
├── script.js                    # Interaction logic, validation & animations
└── README.md                    # Project documentation
```

---

## 🚀 Quick Start Guide

### 1. Clone the Repository
```bash
git clone https://github.com/a-swnt-h/morgan.git
cd morgan
```

### 2. Run Locally

Since this portfolio is built with pure web technologies (zero build steps needed), you can run it in multiple ways:

#### Option A: Direct Browser Opening
Simply double-click `index.html` or drag it into any web browser (Chrome, Firefox, Edge, Safari).

#### Option B: Using Python HTTP Server
```bash
# Python 3
python -m http.server 8080
```
Then visit `http://localhost:8080` in your browser.

#### Option C: Using Node.js / npx
```bash
npx serve .
```

#### Option D: VS Code Live Server
If using VS Code, right-click `index.html` and click **"Open with Live Server"**.

---

## ⚙️ Customization

It's easy to personalize this portfolio for your own profile:

1. **Personal Information**:
   - Open `index.html` and update the title, name, bio, and social media links inside `<div class="hero-content">` and `<section id="about">`.
2. **Profile Image & Project Images**:
   - Replace the files in `assets/images/` with your own images (keep the same filenames or update `src` attributes in `index.html`).
3. **Skills**:
   - Edit percentages and descriptions in `<section id="skills">`.
4. **Projects**:
   - Update titles, descriptions, demo links, and GitHub repositories in `<section id="projects">`.
5. **Color Scheme**:
   - Modify `--accent-cyan`, `--accent-blue`, or the background gradients in `style.css` under the `:root` block to match your personal brand.

---

## 🌐 Deploy to GitHub Pages (Free Hosting)

You can publish this portfolio live to the web in less than a minute:

1. Go to your repository on GitHub: `https://github.com/a-swnt-h/morgan`.
2. Click **Settings** > **Pages** (under the "Code and automation" sidebar).
3. Under **Branch**, select `main` and set the folder to `/ (root)`.
4. Click **Save**.
5. Your portfolio will be live at `https://a-swnt-h.github.io/morgan/`! 🎉

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE). Feel free to customize and use it for your personal portfolio!
