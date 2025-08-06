// App functionality
document.addEventListener('DOMContentLoaded', function() {
    // Language switcher functionality
    initLanguageSwitcher();
    
    // Smooth scrolling function
    window.scrollToSection = function(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            // If section doesn't exist, scroll to hero
            document.querySelector('.hero-section').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.timeline-item, .cv-section-block, .profile-card, .education-card, .certification-card');
    animatedElements.forEach(el => observer.observe(el));

    // Add loading animation
    document.body.classList.add('loaded');

    // Add parallax effect to hero shapes
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax1 = document.querySelector('.shape-1');
        const parallax2 = document.querySelector('.shape-2');
        const parallax3 = document.querySelector('.shape-3');
        
        if (parallax1) parallax1.style.transform = `translateY(${scrolled * 0.1}px)`;
        if (parallax2) parallax2.style.transform = `translateY(${scrolled * 0.15}px)`;
        if (parallax3) parallax3.style.transform = `translateY(${scrolled * 0.2}px)`;
    });

    // Add typing effect to hero name
    const heroName = document.querySelector('.hero-name');
    if (heroName) {
        const originalText = heroName.textContent;
        heroName.textContent = '';
        let i = 0;
        
        const typeEffect = () => {
            if (i < originalText.length) {
                heroName.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeEffect, 100);
            }
        };
        
        setTimeout(typeEffect, 1000);
    }

    // Add hover effects for skill tags
    const skillTags = document.querySelectorAll('.skill-tag, .tech-tag, .cert-skill');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add hover effects for certification cards
    const certificationCards = document.querySelectorAll('.certification-card');
    certificationCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click analytics (if needed)
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            console.log('CV button clicked');
            // Add analytics tracking here if needed
        });
    }

    // Add print functionality
    const addPrintButton = () => {
        const cvHeader = document.querySelector('.cv-header');
        if (cvHeader) {
            const printButton = document.createElement('button');
            printButton.innerHTML = '<i class="fas fa-print"></i> Imprimir CV';
            printButton.className = 'back-button';
            printButton.style.marginLeft = '1rem';
            printButton.addEventListener('click', () => {
                window.print();
            });
            cvHeader.querySelector('.back-button').parentNode.insertBefore(printButton, cvHeader.querySelector('.back-button').nextSibling);
        }
    };

    addPrintButton();

    // Add dark mode toggle (optional)
    const addDarkModeToggle = () => {
        const toggle = document.createElement('button');
        toggle.innerHTML = '<i class="fas fa-moon"></i>';
        toggle.className = 'dark-mode-toggle';
        toggle.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            background: rgba(255, 255, 255, 0.2);
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            color: white;
            cursor: pointer;
            backdrop-filter: blur(10px);
            font-size: 1.2rem;
            transition: all 0.3s ease;
        `;
        
        toggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            toggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
            localStorage.setItem('darkMode', isDark);
        });

        // Check for saved dark mode preference
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
            toggle.innerHTML = '<i class="fas fa-sun"></i>';
        }

        document.body.appendChild(toggle);
    };

    // Uncomment to enable dark mode
    // addDarkModeToggle();

    // Performance optimization: Lazy load images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Add contact form validation (if contact form is added later)
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            // Close any modals or return to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });

    // Add share functionality
    const addShareButton = () => {
        if (navigator.share) {
            const shareButton = document.createElement('button');
            shareButton.innerHTML = '<i class="fas fa-share-alt"></i> Compartir';
            shareButton.className = 'back-button';
            shareButton.style.marginLeft = '1rem';
            shareButton.addEventListener('click', async () => {
                try {
                    await navigator.share({
                        title: 'Ariel Arnedo - Sr Software Developer',
                        text: 'Conoce el perfil profesional de Ariel Arnedo',
                        url: window.location.href
                    });
                } catch (err) {
                    console.log('Error sharing:', err);
                }
            });
            
            const cvHeader = document.querySelector('.cv-header');
            if (cvHeader) {
                cvHeader.appendChild(shareButton);
            }
        }
    };

    addShareButton();
});

// PWA Installation prompt
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    // Show install button
    const installButton = document.createElement('button');
    installButton.innerHTML = '<i class="fas fa-download"></i> Instalar App';
    installButton.className = 'cta-button';
    installButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1000;
        animation: pulse 2s infinite;
    `;
    
    installButton.addEventListener('click', async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            console.log(`User response to install prompt: ${outcome}`);
            deferredPrompt = null;
            installButton.remove();
        }
    });

    document.body.appendChild(installButton);
});

// Add pulse animation for install button
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

// Language Switcher Functionality
function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    const savedLanguage = localStorage.getItem('language') || 'es';
    
    // Set initial language
    setLanguage(savedLanguage);
    
    // Add click listeners
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
            localStorage.setItem('language', lang);
        });
    });
}

function setLanguage(language) {
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === language) {
            btn.classList.add('active');
        }
    });
    
    // Update content
    updateContent(language);
    
    // Update document language
    document.documentElement.lang = language;
}

function updateContent(language) {
    const elements = document.querySelectorAll(`[data-${language}]`);
    
    elements.forEach(element => {
        const text = element.getAttribute(`data-${language}`);
        if (text) {
            // Handle different element types
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = text;
            } else if (element.hasAttribute('title')) {
                element.title = text;
            } else if (element.tagName === 'TITLE') {
                element.textContent = text;
                document.title = text;
            } else if (element.tagName === 'META' && element.getAttribute('name') === 'description') {
                element.setAttribute('content', text);
            } else {
                element.textContent = text;
            }
        }
    });
    
    // Update specific content that requires special handling
    updateSpecialContent(language);
}

function updateSpecialContent(language) {
    // Update profile description
    const profileDesc = document.querySelector('.profile-card.full-width p');
    if (profileDesc) {
        const descriptions = {
            es: 'Ingeniero de Sistemas con experiencia y formación en desarrollo y diseño de software. Apasionado por implementar buenas prácticas de programación para conseguir software de alta calidad aplicando patrones de diseño y código limpio. Ha participado en desarrollos front-end y back-end en equipos de trabajo auto-organizados basados en el marco metodológico SCRUM. Es una persona proactiva y orientada al detalle. Su experiencia ha sido principalmente con Java, Spring Boot, Play-Framework. Ha colaborado estrechamente con equipos frontend, integrado servicios de terceros y diseñado estructuras de bases de datos en entornos como PostgresSQL, DynamoDB, entre otros. Su capacidad para implementar lógica de negocio, realizar pruebas exhaustivas y mantener una documentación clara destaca su compromiso con la calidad y la eficiencia en cada proyecto.',
            en: 'Systems Engineer with experience and training in software development and design. Passionate about implementing good programming practices to achieve high-quality software by applying design patterns and clean code. Has participated in front-end and back-end developments in self-organized work teams based on the SCRUM methodological framework. He is a proactive and detail-oriented person. His experience has been mainly with Java, Spring Boot, Play-Framework. He has worked closely with frontend teams, integrated third-party services and designed database structures in environments such as PostgresSQL, DynamoDB, among others. His ability to implement business logic, perform exhaustive testing and maintain clear documentation highlights his commitment to quality and efficiency in every project.'
        };
        profileDesc.textContent = descriptions[language];
    }
    
    // Update profession title
    const professionTitle = document.querySelector('.profession-title');
    if (professionTitle) {
        const professions = {
            es: 'Ingeniería de sistemas',
            en: 'Systems Engineering'
        };
        professionTitle.textContent = professions[language];
    }
    
    // Update profile card headers
    const profileHeaders = document.querySelectorAll('.profile-card h3');
    const headerTranslations = {
        es: ['Profesión', 'Descripción del Perfil', 'Experiencia Laboral'],
        en: ['Profession', 'Profile Description', 'Work Experience']
    };
    
    profileHeaders.forEach((header, index) => {
        if (headerTranslations[language][index]) {
            header.textContent = headerTranslations[language][index];
        }
    });
    
    // Update skill categories
    const skillCategories = document.querySelectorAll('.skill-category h4');
    const categoryTranslations = {
        es: ['Backend & Frameworks', 'Build Tools & Testing', 'Bases de Datos', 'Cloud & AWS', 'Seguridad & Auth', 'Arquitectura & Mensajería', 'DevOps & CI/CD'],
        en: ['Backend & Frameworks', 'Build Tools & Testing', 'Databases', 'Cloud & AWS', 'Security & Auth', 'Architecture & Messaging', 'DevOps & CI/CD']
    };
    
    skillCategories.forEach((category, index) => {
        if (categoryTranslations[language][index]) {
            category.textContent = categoryTranslations[language][index];
        }
    });
    
    // Update education types
    const educationTypes = document.querySelectorAll('.education-type');
    const educationTranslations = {
        es: ['Pre-grado', 'Bachillerato'],
        en: ['Undergraduate', 'High School']
    };
    
    educationTypes.forEach((type, index) => {
        if (educationTranslations[language][index]) {
            type.textContent = educationTranslations[language][index];
        }
    });
    
    // Update education details
    updateEducationDetails(language);
    
    // Update work experience descriptions
    updateWorkExperienceDescriptions(language);
    
    // Update certification descriptions
    updateCertificationDescriptions(language);
}

function updateEducationDetails(language) {
    const educationCards = document.querySelectorAll('.education-card');
    const educationData = {
        es: [
            {
                title: 'Ingeniero de Sistemas',
                institution: 'Universidad de Cartagena',
                country: 'Colombia',
                year: '2021'
            },
            {
                title: 'Bachiller Técnico',
                institution: 'Inetit',
                country: 'Colombia',
                year: '2008'
            }
        ],
        en: [
            {
                title: 'Systems Engineer',
                institution: 'University of Cartagena',
                country: 'Colombia',
                year: '2021'
            },
            {
                title: 'Technical High School Graduate',
                institution: 'Inetit',
                country: 'Colombia',
                year: '2008'
            }
        ]
    };
    
    educationCards.forEach((card, index) => {
        if (educationData[language][index]) {
            const data = educationData[language][index];
            const title = card.querySelector('h3');
            if (title) title.textContent = data.title;
            
            const institution = card.querySelector('.institution');
            if (institution) institution.textContent = data.institution;
        }
    });
}

function updateWorkExperienceDescriptions(language) {
    // This would be a comprehensive function to update all work experience descriptions
    // For brevity, I'll add key translations here
    const workDescriptions = {
        es: {
            devsu: 'Desarrollo del motor de tokenización de tarjetas digitales y físicas en las diferentes wallet del mercado (Apple Pay y Google Pay) del Banco Pichincha. El proyecto involucra la implementación de soluciones seguras para la tokenización de medios de pago, integrando con los principales proveedores de wallets digitales y garantizando el cumplimiento de estándares de seguridad financiera.',
            pragma: 'Desarrollo de una plataforma tecnológica integral para empresa colombiana del sector transporte especializada en viajes y carga de mercancías. La solución centraliza y automatiza los principales procesos operativos y administrativos de la compañía.'
        },
        en: {
            devsu: 'Development of the tokenization engine for digital and physical cards in different market wallets (Apple Pay and Google Pay) for Banco Pichincha. The project involves implementing secure solutions for payment method tokenization, integrating with major digital wallet providers and ensuring compliance with financial security standards.',
            pragma: 'Development of a comprehensive technological platform for a Colombian company in the transportation sector specialized in travel and freight. The solution centralizes and automates the main operational and administrative processes of the company.'
        }
    };
    
    // Update specific descriptions (you can expand this based on needs)
    const devsuDesc = document.querySelector('.timeline-item:first-child .project-description');
    if (devsuDesc) {
        devsuDesc.innerHTML = `<strong>${language === 'es' ? 'Cliente: Banco Pichincha Ecuador S.A.' : 'Client: Banco Pichincha Ecuador S.A.'}</strong><br>${workDescriptions[language].devsu}`;
    }
}

function updateCertificationDescriptions(language) {
    const certificationDescriptions = {
        es: [
            'Certificación en el uso avanzado de GitHub Copilot para acelerar el desarrollo de software, mejorando la productividad y calidad del código.',
            'Fundamentos de los servicios en la nube de Microsoft Azure, incluyendo conceptos básicos de cloud computing y servicios principales.',
            'Diseño y arquitectura de sistemas de gran escala, patrones de diseño, microservicios y mejores prácticas para sistemas distribuidos.',
            'Curso completo sobre las últimas versiones de Spring Framework y Spring Boot, incluyendo nuevas características y mejores prácticas.',
            'Testing avanzado en aplicaciones Spring Boot utilizando JUnit 5, Mockito y otras herramientas de testing para garantizar la calidad del software.'
        ],
        en: [
            'Advanced certification in using GitHub Copilot to accelerate software development, improving code productivity and quality.',
            'Fundamentals of Microsoft Azure cloud services, including basic cloud computing concepts and core services.',
            'Design and architecture of large-scale systems, design patterns, microservices and best practices for distributed systems.',
            'Complete course on the latest versions of Spring Framework and Spring Boot, including new features and best practices.',
            'Advanced testing in Spring Boot applications using JUnit 5, Mockito and other testing tools to ensure software quality.'
        ]
    };
    
    const certDescriptions = document.querySelectorAll('.cert-description');
    certDescriptions.forEach((desc, index) => {
        if (certificationDescriptions[language][index]) {
            desc.textContent = certificationDescriptions[language][index];
        }
    });
}
