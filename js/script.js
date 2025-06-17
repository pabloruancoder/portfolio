document.addEventListener('DOMContentLoaded', function() {
    // --- RASTREADOR DE ANIMAÇÕES DE DIGITAÇÃO ---
    let activeTypeEffects = {};

    // --- INICIALIZAÇÃO AOS ---
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 50,
            delay: 100,
        });
    }

    // --- HEADER SCROLLED ---
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY >= 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- NAVEGAÇÃO E SCROLL SUAVE ---
    const navLinks = document.querySelectorAll('.nav__link[href^="#"], .nav__link[href^="index.html#"]');
    const heroButtonLink = document.querySelector('.hero__container .button[href^="#"]');

    function setActiveLink(currentHash) {
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href').replace('index.html', '');
            if (linkHref === currentHash) {
                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        });
    }

    function smoothScrollTo(targetIdInput) {
        let targetId = targetIdInput;
        if (targetId.startsWith('index.html#')) {
            targetId = targetId.substring('index.html'.length);
        }

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.querySelector('.header') ? document.querySelector('.header').offsetHeight : 0;
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetHref = this.getAttribute('href');
            if (targetHref.startsWith('#') || targetHref.startsWith('index.html#')) {
                e.preventDefault();
                smoothScrollTo(targetHref);
                const navMenu = document.getElementById('nav-menu');
                if (navMenu && navMenu.classList.contains('show-menu')) {
                    navMenu.classList.remove('show-menu');
                }
            } else if (targetHref === '#todos-os-projetos' && window.location.pathname.includes('todos-projetos.html')) {
                e.preventDefault();
                smoothScrollTo(targetHref);
            }
        });
    });

    if (heroButtonLink) {
        heroButtonLink.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            smoothScrollTo(targetId);
        });
    }

    // --- ATIVAR LINK DA SEÇÃO ATUAL NA NAVEGAÇÃO ---
    const sections = document.querySelectorAll('section[id]');
    function scrollActive() {
        const scrollY = window.pageYOffset;
        const headerHeight = header ? header.offsetHeight : 0;
        let currentSectionId = '#home';

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - headerHeight - 150;
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                currentSectionId = '#' + sectionId;
            }
        });
        if ((window.innerHeight + scrollY) >= document.body.offsetHeight - 100) {
            const lastSection = sections[sections.length - 1];
            if (lastSection) currentSectionId = '#' + lastSection.getAttribute('id');
        }
        setActiveLink(currentSectionId);
    }

    if (sections.length > 0 && (window.location.pathname.endsWith('/') || window.location.pathname.endsWith('index.html') || window.location.pathname === '')) {
        window.addEventListener('scroll', scrollActive);
        scrollActive();
    } else if (window.location.pathname.includes('todos-projetos.html')) {
        setActiveLink('#todos-os-projetos');
    }

    // --- ATUALIZAR ANO NO FOOTER ---
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- EFEITO DE DIGITAÇÃO (FUNÇÃO ATUALIZADA) ---
    function typeEffect(element, text, speed, callback) {
        if (!element || typeof text === 'undefined' || text === null || !element.id) {
            console.error("Elemento para typeEffect precisa de um ID.");
            return;
        }

        if (activeTypeEffects[element.id]) {
            clearTimeout(activeTypeEffects[element.id]);
        }

        let i = 0;
        element.innerHTML = "";

        function typing() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                activeTypeEffects[element.id] = setTimeout(typing, speed);
            } else {
                delete activeTypeEffects[element.id];
                if (callback) callback();
            }
        }
        typing();
    }

    // Efeito de digitação para o nome (não precisa de tradução)
    const nameElement = document.getElementById('typed-name');
    if (nameElement) {
        const yourName = nameElement.textContent || "Pablo Ruan";
        nameElement.textContent = '';
        typeEffect(nameElement, yourName, 100);
    }

    // --- MENU MOBILE ---
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show-menu');
        });
    }

    // --- FILTRO DE PROJETOS ---
    function inicializarFiltrosDeProjetos() {
        const filtroItems = document.querySelectorAll('.projetos-filtros__item');
        const projetoCards = document.querySelectorAll('.projetos__container .projeto__card');

        if (filtroItems.length > 0 && projetoCards.length > 0) {
            filtroItems.forEach(item => {
                item.addEventListener('click', function() {
                    filtroItems.forEach(el => el.classList.remove('active-filter'));
                    this.classList.add('active-filter');

                    const filterValue = this.getAttribute('data-filter');

                    projetoCards.forEach(card => {
                        const cardCategories = card.getAttribute('data-category');
                        if (filterValue === 'all' || (cardCategories && cardCategories.split(' ').includes(filterValue))) {
                            card.classList.remove('projeto-hidden');
                            card.style.display = '';
                        } else {
                            card.classList.add('projeto-hidden');
                        }
                    });
                    if (typeof AOS !== 'undefined') {
                        AOS.refresh();
                    }
                });
            });
        }
    }

    if (document.querySelector('.projetos-filtros')) {
        inicializarFiltrosDeProjetos();
    }

    // --- BOTÃO VOLTAR AO TOPO ---
    const backToTopButton = document.getElementById("backToTopBtn");
    if (backToTopButton) {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add("show");
            } else {
                backToTopButton.classList.remove("show");
            }
        });
        backToTopButton.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // --- FORMULÁRIO DE CONTATO ---
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    const googleAppScriptURL = 'https://script.google.com/macros/s/AKfycby-4R_aKVq-_7ArJunG5pvz65h8QD10xLyElqXEHU2BDZNX9NFmxPV4S3lVCwp9CG-3dQ/exec';

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonHTML = submitButton.innerHTML;

            submitButton.disabled = true;
            submitButton.innerHTML = 'Enviando... <i class="fas fa-spinner fa-spin"></i>';
            formMessage.textContent = '';
            formMessage.className = 'contact__form-message';

            if (!googleAppScriptURL || googleAppScriptURL === 'COLE_A_URL_DO_SEU_APP_DA_WEB_AQUI') {
                formMessage.textContent = 'Erro: URL do script de envio não configurada.';
                formMessage.classList.add('error');
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonHTML;
                console.error("URL do Google Apps Script não foi definida no script.js.");
                return;
            }

            const formData = new FormData(contactForm);

            fetch(googleAppScriptURL, {
                    method: 'POST',
                    body: formData,
                    mode: 'cors'
                })
                .then(response => {
                    if (!response.ok && response.type === 'opaque') {
                        console.warn("Resposta opaca recebida. Assumindo sucesso devido à política CORS do Apps Script.");
                        return {
                            result: 'success_opaque',
                            message: 'Mensagem enviada (resposta opaca).'
                        };
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.result === 'success' || data.result === 'success_opaque') {
                        formMessage.textContent = 'Mensagem enviada com sucesso!';
                        formMessage.classList.add('success');
                        contactForm.reset();
                    } else {
                        formMessage.textContent = 'Erro ao enviar mensagem: ' + (data.message || 'Tente novamente.');
                        formMessage.classList.add('error');
                        console.error("Erro retornado pelo script:", data);
                    }
                })
                .catch(error => {
                    console.error('Erro no fetch:', error);
                    formMessage.textContent = 'Erro de rede ao enviar mensagem. Verifique sua conexão ou tente novamente.';
                    formMessage.classList.add('error');
                })
                .finally(() => {
                    submitButton.disabled = false;
                    submitButton.innerHTML = originalButtonHTML;
                });
        });
    }

    // --- GALERIA MODAL ---
    const galleryModal = document.getElementById("galleryModal");
    const modalCloseButton = document.getElementById("modalCloseButton");
    const modalImage = document.getElementById("modalImage");
    const modalProjectTitle = document.getElementById("modalProjectTitle");
    const modalPrevButton = document.getElementById("modalPrevButton");
    const modalNextButton = document.getElementById("modalNextButton");
    const modalImageCounter = document.getElementById("modalImageCounter");
    const modalImageCaption = document.getElementById("modalImageCaption");
    const openGalleryButtons = document.querySelectorAll(".open-gallery-button");

    let currentGalleryImages = [];
    let currentImageIndex = 0;
    let currentGalleryTitle = "";

    const projectGalleries = {
        "Sistema Financeiro": {
            title: "Sistema Financeiro",
            images: [{
                src: "assets/sistema-financeiro/print1.png",
                caption: "Visão geral do Dashboard"
            }, {
                src: "assets/sistema-financeiro/print2.png",
                caption: "Tela de Transações"
            }, {
                src: "assets/sistema-financeiro/print3.png",
                caption: "Geração de Relatórios"
            }, {
                src: "assets/sistema-financeiro/print4.png",
                caption: "Detalhe do Orçamento"
            }, ]
        },
        "Fitness Pro": {
            title: "Fitness Pro",
            images: [{
                src: "assets/fitness-pro/print1.png",
                caption: "Visão Geral do App"
            }, {
                src: "assets/fitness-pro/print2.png",
                caption: "Nutrição - Planejador de Dieta"
            }, {
                src: "assets/fitness-pro/print3.png",
                caption: "Nutrição - Receitas"
            }, {
                src: "assets/fitness-pro/print4.png",
                caption: "Biblioteca de Exercícios"
            }, {
                src: "assets/fitness-pro/print5.png",
                caption: "Treinos - Registro Diário e Histórico"
            }, {
                src: "assets/fitness-pro/print6.png",
                caption: "Calculadora de Métricas Corporais"
            }, {
                src: "assets/fitness-pro/print7.png",
                caption: "Acompanhamento de Progresso"
            }, {
                src: "assets/fitness-pro/print8.png",
                caption: "Perfil"
            }, {
                src: "assets/fitness-pro/print9.png",
                caption: "Configurações"
            }]
        },
        "Mãos que falam": {
            title: "Mãos que falam",
            images: [{
                src: "assets/maos-que-falam/print1.png",
                caption: "Visão geral da interface"
            }, {
                src: "assets/maos-que-falam/print2.png",
                caption: "Chat"
            }, {
                src: "assets/maos-que-falam/print3.png",
                caption: "Interface do chat de tradução"
            }]
        },
        "Ingles Facil": {
            title: "Ingles Facil",
            images: [{
                src: "assets/ingles-facil/ingles.png",
                caption: "Tela inicial da plataforma interativa"
            }, {
                src: "assets/ingles-facil/print1.png",
                caption: "Módulo 1: Aula sobre o Alfabeto com pronúncia e exemplos"
            }, {
                src: "assets/ingles-facil/print2.png",
                caption: "Lição interativa sobre os números de 0 a 10"
            }, {
                src: "assets/ingles-facil/print3.png",
                caption: "Atividade prática sobre as cores básicas"
            }, {
                src: "assets/ingles-facil/print4.png",
                caption: "Sistema de gamificação para motivar o aprendizado"
            }, {
                src: "assets/ingles-facil/print5.png",
                caption: "Glossário completo com busca e filtros para consulta rápida"
            }]
        }
    };

    function showImage(index) {
        if (!modalImage || !modalImageCounter || !modalImageCaption || !modalPrevButton || !modalNextButton) return;
        
        if (currentGalleryImages.length === 0 || index < 0 || index >= currentGalleryImages.length) {
            modalImage.style.display = 'none';
            modalImageCounter.textContent = 'Nenhuma imagem disponível';
            modalImageCaption.textContent = '';
            modalPrevButton.classList.add("disabled");
            modalNextButton.classList.add("disabled");
            return;
        }
        modalImage.style.display = 'block';
        modalImage.src = currentGalleryImages[index].src;
        modalImage.alt = currentGalleryImages[index].caption || `Imagem ${index + 1} de ${currentGalleryTitle}`;
        modalImageCounter.textContent = `${index + 1} / ${currentGalleryImages.length}`;
        modalImageCaption.textContent = currentGalleryImages[index].caption || '';

        modalPrevButton.classList.toggle("disabled", index === 0);
        modalNextButton.classList.toggle("disabled", index === currentGalleryImages.length - 1);
    }

    function openModal(projectName) {
        const galleryData = projectGalleries[projectName];
        if (galleryModal && galleryData && galleryData.images && galleryData.images.length > 0) {
            const lang = document.documentElement.lang;
            const titleSuffix = translations[lang]['gallery_title_suffix'] || ' - Image Gallery';
            
            currentGalleryImages = galleryData.images;
            currentGalleryTitle = galleryData.title + titleSuffix;
            currentImageIndex = 0;

            if(modalProjectTitle) modalProjectTitle.textContent = currentGalleryTitle;
            showImage(currentImageIndex);
            galleryModal.style.display = "block";
            document.body.style.overflow = "hidden"; 
            if(galleryModal.hasAttribute('tabindex')) galleryModal.focus(); else galleryModal.setAttribute('tabindex', '-1'); galleryModal.focus();
        } else {
            alert("Galeria para este projeto ainda não disponível ou imagens não definidas.");
            console.error("Dados da galeria não encontrados ou vazios para o projeto:", projectName);
        }
    }

    function closeModal() {
        if (galleryModal) {
            galleryModal.style.display = "none";
            document.body.style.overflow = "auto"; 
        }
    }

    openGalleryButtons.forEach(button => {
        button.addEventListener("click", function(e) {
            e.preventDefault();
            const projectName = this.getAttribute("data-project-name");
            if (projectName) {
                openModal(projectName);
            }
        });
    });

    if (modalCloseButton) modalCloseButton.addEventListener("click", closeModal);
    if (modalPrevButton) modalPrevButton.addEventListener("click", () => {
        if (!modalPrevButton.classList.contains("disabled")) {
            currentImageIndex--;
            showImage(currentImageIndex);
        }
    });

    if (modalNextButton) modalNextButton.addEventListener("click", () => {
        if (!modalNextButton.classList.contains("disabled")) {
            currentImageIndex++;
            showImage(currentImageIndex);
        }
    });

    if (galleryModal) galleryModal.addEventListener("click", (event) => {
        if (event.target === galleryModal) closeModal();
    });

    document.addEventListener("keydown", function(event) {
        if (galleryModal && galleryModal.style.display === "block") {
            if (event.key === "Escape") closeModal();
            else if (event.key === "ArrowLeft") modalPrevButton.click();
            else if (event.key === "ArrowRight") modalNextButton.click();
        }
    });


    // --- CÓDIGO DE INTERNACIONALIZAÇÃO (I18N) ---
    const langSwitcherButtons = document.querySelectorAll('.lang-switcher__btn');
    let currentLang = localStorage.getItem('lang') || navigator.language || 'pt-BR';
    
    // Simplifica o código do idioma (ex: 'pt-BR' -> 'pt-BR', 'en-US' -> 'en-US', 'es-AR' -> 'es-ES')
    if (currentLang.startsWith('en')) currentLang = 'en-US';
    else if (currentLang.startsWith('es')) currentLang = 'es-ES';
    else currentLang = 'pt-BR'; // Padrão

    const updateContent = (lang) => {
        if (typeof translations === 'undefined' || !translations[lang]) {
            console.error(`Traduções para o idioma "${lang}" não encontradas.`);
            return;
        }

        const langTranslations = translations[lang];

        // Traduz textos normais
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            if (langTranslations[key]) {
                el.innerHTML = langTranslations[key];
            }
        });

        // Traduz placeholders
        document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
            const key = el.getAttribute('data-translate-placeholder');
            if (langTranslations[key]) el.placeholder = langTranslations[key];
        });

        // Traduz titles (para tooltips)
        document.querySelectorAll('[data-translate-title]').forEach(el => {
            const key = el.getAttribute('data-translate-title');
            if (langTranslations[key]) el.title = langTranslations[key];
        });

        // Atualiza o efeito de digitação do subtítulo
        const roleElement = document.getElementById('typed-role');
        if (roleElement) {
            const roleKey = roleElement.getAttribute('data-translate');
            const translatedRole = langTranslations[roleKey] || roleElement.textContent;
            typeEffect(roleElement, translatedRole, 75);
        }

        // Atualiza título da página
        const titleElement = document.querySelector('title');
        if (titleElement) {
            const titleKey = titleElement.getAttribute('data-translate');
            if (langTranslations[titleKey]) titleElement.textContent = langTranslations[titleKey];
        }

        // Atualiza o atributo lang do HTML
        document.documentElement.lang = lang;

        // Atualiza o botão ativo
        langSwitcherButtons.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
    };

    langSwitcherButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedLang = button.getAttribute('data-lang');
            localStorage.setItem('lang', selectedLang);
            currentLang = selectedLang;
            updateContent(currentLang);
        });
    });

    // Inicia a página com o idioma correto
    updateContent(currentLang);

    // --- INICIALIZAÇÃO TSPARTICLES ---
    if (document.getElementById('tsparticles')) {
        // Pega a cor primária calculada pelo CSS
        const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();

        tsParticles.load("tsparticles", {
            fpsLimit: 120,
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: primaryColor }, // Usa a cor real, não a variável
                shape: { type: "circle" },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
                },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: primaryColor, // Usa a cor real, não a variável
                    opacity: 0.4,
                    width: 1,
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    attract: { enable: false },
                },
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "grab" },
                    onclick: { enable: true, mode: "push" },
                    resize: true,
                },
                modes: {
                    grab: { distance: 140, line_opacity: 1 },
                    push: { particles_nb: 4 },
                },
            },
            retina_detect: true,
        });
    }

}); // Fim do DOMContentLoaded