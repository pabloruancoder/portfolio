document.addEventListener('DOMContentLoaded', function() {

    // Inicializa a biblioteca AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,      // Duração da animação em ms
            easing: 'ease-in-out', // Tipo de easing
            once: true,         // Animação acontece apenas uma vez
            offset: 50,         // Offset (em px) para disparar a animação antes do elemento aparecer
            delay: 100,         // Atraso global para animações
        });
    }

    // Adiciona sombra e fundo ao header ao rolar a página
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

    // Smooth scroll para links âncora e 'active-link'
    const navLinks = document.querySelectorAll('.nav__link[href^="#"], .nav__link[href^="index.html#"]'); // Inclui links para index.html#
    const heroButtonLink = document.querySelector('.hero__container .button[href^="#"]');

    function setActiveLink(currentHash) {
        navLinks.forEach(link => {
            // Normaliza o href para comparar com o hash (remove 'index.html' se presente)
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
        // Se o link for para index.html#secao, remove 'index.html'
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
            // Se o link for para outra página (ex: todos-projetos.html), não previne o default
            if (targetHref.startsWith('#') || targetHref.startsWith('index.html#')) {
                e.preventDefault();
                smoothScrollTo(targetHref);

                // Fecha menu mobile se estiver aberto após clique (se implementado)
                const navMenu = document.getElementById('nav-menu');
                if (navMenu && navMenu.classList.contains('show-menu')) {
                    navMenu.classList.remove('show-menu');
                }
            }
            // Se for um link para #todos-os-projetos na página todos-projetos.html, e já estiver nela:
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

    // Scrollspy: Destaca o link da navegação correspondente à seção visível
    const sections = document.querySelectorAll('section[id]');
    function scrollActive() {
        const scrollY = window.pageYOffset;
        const headerHeight = header ? header.offsetHeight : 0;
        let currentSectionId = '#home'; // Default para o topo

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - headerHeight - 150; // Ajuste o offset aqui
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                currentSectionId = '#' + sectionId;
            }
        });
        // Caso especial para o final da página (contato)
        if ((window.innerHeight + scrollY) >= document.body.offsetHeight - 100) {
             const lastSection = sections[sections.length-1];
             if (lastSection) currentSectionId = '#' + lastSection.getAttribute('id');
        }
        setActiveLink(currentSectionId);
    }

    // Só adiciona scrollspy se houver seções na página (para não dar erro em páginas sem seções com ID)
    if (sections.length > 0 && (window.location.pathname.endsWith('/') || window.location.pathname.endsWith('index.html')) ) {
        window.addEventListener('scroll', scrollActive);
        scrollActive(); // Executa uma vez ao carregar para definir o estado inicial
    } else if (window.location.pathname.includes('todos-projetos.html')) {
        // Lógica específica para a página de todos os projetos, se necessário para o link ativo
        setActiveLink('#todos-os-projetos');
    }


    // Atualiza o ano no rodapé
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Efeito "Máquina de Escrever"
    function typeEffect(element, text, speed, callback) {
        if (!element || !text) return; // Checagem para evitar erros
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

    // Toggle do menu mobile
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show-menu');
        });
        // Fecha o menu se clicar em um link dentro dele (já tratado no loop dos navLinks)
    }


    // --- LÓGICA PARA FILTROS DE PROJETOS (Funciona em todos-projetos.html) ---
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
                            card.style.display = ''; // Reseta para o display original (flex)
                        } else {
                            card.classList.add('projeto-hidden');
                        }
                    });
                     if (typeof AOS !== 'undefined') {
                        AOS.refresh(); // Re-calcula posições após mostrar/esconder
                    }
                });
            });
        }
    }

    // Chama a função de filtros se estiver na página correta
    if (document.querySelector('.projetos-filtros')) {
        inicializarFiltrosDeProjetos();
         if (typeof AOS !== 'undefined') {
            setTimeout(() => { // Pequeno delay para garantir que o DOM esteja pronto para o refresh
                AOS.refreshHard(); // Força o AOS a recalcular tudo
            }, 300);
        }
    }
});