// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for anchor links
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

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Projects data
const projects = [
    {
        title: "Medical Assistant Bot",
        description: "AI-powered medical assistant with multimodal capabilities using GPT-4 Vision and RAG architecture. Features secure deployment on AWS SageMaker with FAISS vector search.",
        tech: ["Python", "LangChain", "OpenAI GPT-4", "FAISS", "Docker", "AWS SageMaker", "JUnit", "Robot Framework"],
        highlights: ["Multimodal AI (text + image)", "RAG architecture", "Enterprise deployment", "Privacy-first design"],
        github: "https://github.com/wbott/medical-assistant-bot",
        category: "Healthcare AI"
    },
    {
        title: "Butterfly Classification ML",
        description: "Professional computer vision pipeline classifying 75 butterfly species with 83% accuracy using VGG16 transfer learning. Includes comprehensive testing with 97% coverage.",
        tech: ["Python", "TensorFlow", "VGG16", "OpenCV", "Docker", "PyTest"],
        highlights: ["83% accuracy on 75 classes", "97% test coverage", "Multiple neural architectures", "Production-ready deployment"],
        github: "https://github.com/wbott/ml-classification-butterflies",
        category: "Computer Vision"
    },
    {
        title: "Loan Default Prediction",
        description: "Large-scale financial risk modeling system processing 2.2M records with advanced feature engineering and XGBoost classification achieving 72.78% ROC AUC.",
        tech: ["Python", "XGBoost", "Pandas", "Scikit-learn", "Jupyter"],
        highlights: ["2.2M records processed", "Advanced feature engineering", "Class imbalance handling", "Financial risk insights"],
        github: "https://github.com/wbott/ml-classification-loans",
        category: "Financial ML"
    },
    {
        title: "RAG Movie Recommender Redux",
        description: "Privacy-preserving movie recommendation engine using local LLaMA 3 inference with RAG architecture. Features semantic search and enterprise-grade containerization.",
        tech: ["Python", "LLaMA 3", "LangChain", "FAISS", "Docker", "Ollama"],
        highlights: ["Local LLM inference", "Privacy-preserving", "RAG architecture", "GPU acceleration"],
        github: "https://github.com/wbott/rag-movie-rec-redux",
        category: "RAG Systems"
    },
    {
        title: "Mobile Phone Price Prediction",
        description: "Comprehensive regression analysis of smartphone market dynamics using Random Forest achieving 95% R² score with sophisticated feature engineering.",
        tech: ["Python", "Random Forest", "Ridge Regression", "Matplotlib", "Seaborn"],
        highlights: ["95% R² score", "Market insights", "Multicollinearity handling", "Statistical analysis"],
        github: "https://github.com/wbott/ml-regression-mobile-phones",
        category: "Market Analysis"
    },
    {
        title: "RAG Movie Recommender",
        description: "Conversational AI movie recommendation system with multi-agent architecture using OpenAI models and vector search across 7,225 movie chunks.",
        tech: ["Python", "OpenAI GPT-3.5", "LangChain", "FAISS", "Gradio"],
        highlights: ["Multi-agent architecture", "7,225 text chunks", "Sub-second queries", "Gradio web UI"],
        github: "https://github.com/wbott/rag-movie-rec",
        category: "Conversational AI"
    },
    {
        title: "MCP Postal Geocoder",
        description: "High-performance geocoding service using US Census Bureau data with <1ms exact lookups and 100+ concurrent connection support. Complete MCP server/client implementation with 33,791 postal codes.",
        tech: ["Python", "SQLite", "FastMCP", "Streamlit", "US Census Data"],
        highlights: ["<1ms exact lookups", "33,791 US postal codes", "100+ concurrent connections", "Multi-platform deployment"],
        github: "https://github.com/wbott/mcp-postal-geocoder",
        category: "Geospatial Infrastructure"
    }
];

// Render projects
function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <div class="project-header">
                <h3 class="project-title">${project.title}</h3>
                <span class="project-category">${project.category}</span>
            </div>
            <p class="project-description">${project.description}</p>
            <div class="project-highlights">
                <h4>Key Highlights:</h4>
                <ul>
                    ${project.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                </ul>
            </div>
            <div class="project-tech">
                ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.github}" target="_blank" class="project-link">
                    <i class="fab fa-github"></i>
                    View Code
                </a>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Initialize projects when DOM is loaded
document.addEventListener('DOMContentLoaded', renderProjects);

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all project cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const elementsToObserve = document.querySelectorAll('.project-card, .about, .contact');
    elementsToObserve.forEach(el => observer.observe(el));
});