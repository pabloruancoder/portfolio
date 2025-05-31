document.addEventListener('DOMContentLoaded', function() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 50,
            delay: 100,
        });
    }

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
            }
            else if (targetHref === '#todos-os-projetos' && window.location.pathname.includes('todos-projetos.html')) {
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
             const lastSection = sections[sections.length-1];
             if (lastSection) currentSectionId = '#' + lastSection.getAttribute('id');
        }
        setActiveLink(currentSectionId);
    }

    if (sections.length > 0 && (window.location.pathname.endsWith('/') || window.location.pathname.endsWith('index.html') || window.location.pathname === '') ) {
        window.addEventListener('scroll', scrollActive);
        scrollActive(); 
    } else if (window.location.pathname.includes('todos-projetos.html')) {
        setActiveLink('#todos-os-projetos');
    }

    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    function typeEffect(element, text, speed, callback) {
        if (!element || !text) return;
        let i = 0;
        const originalText = text;
        element.innerHTML = "";

        function typing() {
            if (i < originalText.length) {
                element.innerHTML += originalText.charAt(i);
                i++;
                setTimeout(typing, speed);
            } else {
                if (callback) callback();
            }
        }
        typing();
    }

    const nameElement = document.getElementById('typed-name');
    const roleElement = document.getElementById('typed-role');

    if (nameElement && roleElement) {
        const yourName = nameElement.textContent || "Pablo Ruan";
        const yourRole = roleElement.textContent || "Junior Systems Analyst & Developer, and AI Developer";

        nameElement.textContent = '';
        roleElement.textContent = '';

        typeEffect(nameElement, yourName, 100, () => {
            setTimeout(() => {
                typeEffect(roleElement, yourRole, 75);
            }, 300);
        });
    }

    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show-menu');
        });
    }

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
         if (typeof AOS !== 'undefined') {
            setTimeout(() => {
                AOS.refreshHard();
            }, 300);
        }
    }

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

    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    const googleAppScriptURL = 'COLE_A_URL_DO_SEU_APP_DA_WEB_AQUI'; 

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonHTML = submitButton.innerHTML;

            submitButton.disabled = true;
            submitButton.innerHTML = 'Enviando... <i class="fas fa-spinner fa-spin"></i>';
            formMessage.textContent = '';
            formMessage.className = 'contact__form-message';

            if (!googleAppScriptURL || googleAppScriptURL === 'https://script.google.com/macros/s/AKfycby-4R_aKVq-_7ArJunG5pvz65h8QD10xLyElqXEHU2BDZNX9NFmxPV4S3lVCwp9CG-3dQ/exec') {
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
                    return { result: 'success_opaque', message: 'Mensagem enviada (resposta opaca).' };
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
            title: "Sistema Financeiro - Galeria de Imagens",
            images: [
                { src: "assets/sistema-financeiro/print1.png", caption: "Visão geral do Dashboard" },
                { src: "assets/sistema-financeiro/print2.png", caption: "Tela de Transações" },
                { src: "assets/sistema-financeiro/print3.png", caption: "Geração de Relatórios" },
                { src: "assets/sistema-financeiro/print4.png", caption: "DRE" },
            ]
        },
    };

    function showImage(index) {
        if (currentGalleryImages.length === 0 || index < 0 || index >= currentGalleryImages.length) {
            modalImage.style.display = 'none';
            modalImageCounter.textContent = 'Nenhuma imagem disponível';
            modalImageCaption.textContent = '';
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
            currentGalleryImages = galleryData.images;
            currentGalleryTitle = galleryData.title || projectName + " - Galeria";
            currentImageIndex = 0;

            modalProjectTitle.textContent = currentGalleryTitle;
            showImage(currentImageIndex);
            galleryModal.style.display = "block";
            document.body.style.overflow = "hidden"; 
            galleryModal.focus(); 
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
            openModal(projectName);
        });
    });

    if (modalCloseButton) {
        modalCloseButton.addEventListener("click", closeModal);
    }

    if (modalPrevButton) {
        modalPrevButton.addEventListener("click", () => {
            if (currentImageIndex > 0) {
                currentImageIndex--;
                showImage(currentImageIndex);
            }
        });
    }

    if (modalNextButton) {
        modalNextButton.addEventListener("click", () => {
            if (currentImageIndex < currentGalleryImages.length - 1) {
                currentImageIndex++;
                showImage(currentImageIndex);
            }
        });
    }

    if (galleryModal) {
        galleryModal.addEventListener("click", function(event) {
            if (event.target === galleryModal) {
                closeModal();
            }
        });
    }

    document.addEventListener("keydown", function(event) {
        if (galleryModal && galleryModal.style.display === "block") {
            if (event.key === "Escape") {
                closeModal();
            } else if (event.key === "ArrowLeft") {
                if (currentImageIndex > 0) {
                    currentImageIndex--;
                    showImage(currentImageIndex);
                }
            } else if (event.key === "ArrowRight") {
                 if (currentImageIndex < currentGalleryImages.length - 1) {
                    currentImageIndex++;
                    showImage(currentImageIndex);
                }
            }
        }
    });
});