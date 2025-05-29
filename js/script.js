document.addEventListener('DOMContentLoaded', function() {

    // Inicializa a biblioteca AOS (Animate On Scroll)
    AOS.init({
        duration: 800,      // Duração da animação em ms
        easing: 'ease-in-out', // Tipo de easing
        once: true,         // Animação acontece apenas uma vez
        offset: 50,         // Offset (em px) para disparar a animação antes do elemento aparecer
        delay: 100,         // Atraso global para animações
    });

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
    const navLinks = document.querySelectorAll('.nav__link[href^="#"]');
    const heroButtonLink = document.querySelector('.hero__container .button[href^="#"]'); // Botão do Hero

    function setActiveLink(currentHash) {
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentHash) {
                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        });
    }

    function smoothScrollTo(targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.querySelector('.header') ? document.querySelector('.header').offsetHeight : 0;
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            // Atualiza o hash na URL sem pular diretamente e define o link ativo
            // history.pushState(null, null, targetId); // Comentado pois o scrollspy faz melhor
            // setActiveLink(targetId); // O scrollspy já faz isso
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            smoothScrollTo(targetId);
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

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - headerHeight - 100; // Ajuste o offset aqui
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                setActiveLink('#' + sectionId);
            }
        });
        // Se nenhuma seção estiver "ativa" (ex: no topo antes da primeira seção)
        if (scrollY < (document.querySelector('#sobre') ? document.querySelector('#sobre').offsetTop - headerHeight - 100 : 500) ) {
             navLinks.forEach(link => link.classList.remove('active-link'));
        }
         // Se estiver no final da página, ativa o último link (contato)
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) { // Perto do final
            const lastSectionId = sections[sections.length - 1].getAttribute('id');
            setActiveLink('#' + lastSectionId);
        }

    }
    window.addEventListener('scroll', scrollActive);
    scrollActive(); // Executa uma vez ao carregar para definir o estado inicial

    // Atualiza o ano no rodapé
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Efeito "Máquina de Escrever" (mantido e melhorado)
    function typeEffect(element, text, speed, callback) {
        let i = 0;
        const originalText = text;
        element.innerHTML = "";
        // Para evitar "pulos", pode-se definir uma altura mínima se souber ou calcular
        // element.style.minHeight = element.offsetHeight + 'px';

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
    const roleElement = document.getElementById('typed-role'); // Certifique-se que o ID está correto no HTML

    if (nameElement && roleElement) {
        const yourName = nameElement.textContent || "[Seu Nome]"; // Pega do HTML ou fallback
        const yourRole = roleElement.textContent || "Desenvolvedor [Sua Especialidade]";

        nameElement.textContent = ''; // Limpa para o efeito
        roleElement.textContent = ''; // Limpa para o efeito

        typeEffect(nameElement, yourName, 100, () => {
            setTimeout(() => { // Adiciona um pequeno delay antes de começar a digitar o cargo
                typeEffect(roleElement, yourRole, 75);
            }, 300);
        });
    }

    // Adicionar data-aos-delay dinamicamente para itens em listas (opcional)
    // Exemplo para itens de habilidade
    const skillItems = document.querySelectorAll('.habilidade__item');
    skillItems.forEach((item, index) => {
        if (!item.getAttribute('data-aos-delay')) { // Só adiciona se não houver um delay específico
            item.setAttribute('data-aos-delay', (index + 1) * 100);
        }
        if(!item.getAttribute('data-aos')){ // Adiciona um efeito padrão se não houver
             item.setAttribute('data-aos', 'fade-up');
        }
    });
     // Exemplo para cards de projeto (se estiverem em um container com a classe .projetos-grid)
    const projectCards = document.querySelectorAll('.projetos-grid .projeto-card');
    projectCards.forEach((card, index) => {
        if (!card.getAttribute('data-aos-delay')) {
            card.setAttribute('data-aos-delay', (index % 3) * 150); // Delay escalonado para até 3 por linha
        }
         if(!card.getAttribute('data-aos')){
             card.setAttribute('data-aos', 'zoom-in-up');
        }
    });

});