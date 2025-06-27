# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static portfolio website for William Bott showcasing AI/ML projects and professional recommendations. The site is built with vanilla HTML, CSS, and JavaScript without any build tools or frameworks.

## Architecture

### File Structure
- `index.html` - Main portfolio page with hero, about, projects, and contact sections
- `recommendations.html` - Dedicated page for professional testimonials
- `styles.css` - Complete CSS styling for both pages with responsive design
- `script.js` - JavaScript for navigation, smooth scrolling, project rendering, and animations

### Key Components
- **Responsive Navigation**: Fixed navbar with mobile hamburger menu
- **Dynamic Project Rendering**: Projects are defined as JavaScript objects and rendered dynamically
- **Smooth Scrolling**: Internal anchor links with smooth scroll behavior
- **Intersection Observer**: Animation triggers for sections coming into view
- **Mobile-First Design**: Responsive breakpoints at 768px and 480px

## Development Commands

This is a static website with no build process. To develop:

```bash
# Serve locally (any static server)
python -m http.server 8000
# or
npx serve .
# or
php -S localhost:8000
```

## Project Data Management

Projects are stored as JavaScript objects in `script.js:41-90`. Each project has:
- `title`: Project name
- `description`: Brief description with technical details
- `tech`: Array of technologies used
- `highlights`: Key achievements/features
- `github`: Repository URL
- `category`: Project category for filtering

## Styling Architecture

CSS is organized into logical sections:
- Reset and base styles
- Navigation (including mobile)
- Hero section with animations
- About section with skills grid
- Projects grid with hover effects
- Contact section
- Recommendations page specific styles
- Responsive media queries

## Key Features

- **Performance**: No external dependencies beyond fonts and icons
- **SEO**: Semantic HTML structure
- **Accessibility**: Proper ARIA attributes and keyboard navigation
- **Mobile Responsive**: Works on all screen sizes
- **Professional Design**: Clean, modern aesthetic with smooth animations

## Content Updates

To add new projects, modify the `projects` array in `script.js`. To update recommendations, edit the HTML directly in `recommendations.html`.