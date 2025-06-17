// --- START OF FILE js/translations.js ---

const translations = {
    "pt-BR": {
        // --- GERAL & NAVBAR & FOOTER ---
        "page_title_home": "Meu Portfólio Profissional - Pablo Ruan",
        "page_title_projects": "Todos os Projetos - Pablo Ruan",
        "nav_home": "Início",
        "nav_about": "Sobre Mim",
        "nav_experience": "Experiência",
        "nav_education": "Formação",
        "nav_skills": "Habilidades",
        "nav_projects": "Projetos",
        "nav_contact": "Contato",
        "footer_text": "Pablo Ruan. Todos os direitos reservados.",
        "back_to_top": "Voltar ao topo",

        // --- HERO SECTION ---
        "hero_greeting": "Olá, eu sou",
        "hero_role": "Analista e Desenvolvedor de Sistemas Júnior, e Desenvolvedor de IA",
        "hero_button": "Veja meus projetos",

        // --- ABOUT SECTION ---
        "about_title": "Sobre Mim",
        "about_subtitle": "Minha introdução",
        "about_p1": "Eu sou Pablo Ruan, Analista e Desenvolvedor de Sistemas Júnior e Desenvolvedor de IA, dedicado a promover soluções impulsionadas pela tecnologia com um forte foco em inovação. Atualmente, como Analista e Desenvolvedor de Sistemas Júnior, contribuo para projetos impactantes que melhoram a saúde e o bem-estar da comunidade.",
        "about_p2": "Estou cursando Bacharelado em Administração, Marketing e Gestão na Universidade Federal do Piauí, com formatura prevista para dezembro de 2026. Além disso, possuo certificação técnica em Desenvolvimento de Sistemas pelo Instituto Federal do Piauí, concluída em 2021.",
        "about_p3": "Minha jornada profissional é definida por um compromisso com o aprendizado contínuo e a aplicação prática do conhecimento em iniciativas que impulsionam mudanças significativas. Tenho experiência no desenvolvimento de APIs e uma paixão por Inteligência Artificial. Estou sempre aberto a explorar oportunidades de colaboração e discutir ideias transformadoras. Sinta-se à vontade para se conectar comigo para discutir potenciais sinergias.",

        // --- EXPERIENCE SECTION ---
        "experience_title": "Experiência Profissional",
        "experience_subtitle": "Minha trajetória",
        "exp1_date": "julho de 2024 - Presente",
        "exp1_title": "Analista e Desenvolvedor de Sistema Jr.",
        "exp1_company": "Vem Prevenir",
        "exp1_desc": "Contribuindo para projetos impactantes que melhoram a saúde e o bem-estar da comunidade através de soluções tecnológicas.",
        "exp2_date": "julho de 2024 - novembro de 2024 (5 meses)",
        "exp2_title": "Founders at Campus",
        "exp2_company": "Google for Startups",
        "exp2_desc": "Participei da 3ª Turma do programa Founders at Campus, com acesso ao Campus do Google for Startups e mentorias.",

        // --- EDUCATION SECTION ---
        "education_title": "Formação Acadêmica",
        "education_subtitle": "Meus estudos",
        "edu1_date": "junho de 2021 - dezembro de 2026 (Previsto)",
        "edu1_title": "Universidade Federal do Piauí",
        "edu1_desc": "Bacharelado em Administração, Negócios e Marketing",
        "edu2_date": "agosto de 2020 - julho de 2021",
        "edu2_title": "IFPI - Instituto Federal do Piauí",
        "edu2_desc": "Curso Técnico Integrado em Desenvolvimento de Sistemas",

        // --- SKILLS SECTION ---
        "skills_title": "Habilidades",
        "skills_subtitle": "Minhas ferramentas técnicas",
        "skills_cat1": "IA & Cloud",
        "skills_cat2": "Linguagens de Programação",
        "skills_cat3": "Backend & Desenvolvimento de APIs",
        "skills_cat4": "Frontend",
        "skills_cat5": "Ferramentas, Segurança & Outros",

        // --- PROJECTS SECTION (HOME) ---
        "projects_title": "Meus Projetos",
        "projects_subtitle": "Alguns trabalhos e estudos recentes",
        "project_status_dev": "(Em Desenvolvimento)",
        "project_status_proto": "(Protótipo)",
        "project_details": "Ver Detalhes",
        "project_repo": "Repositório",
        "see_more_projects": "Ver mais projetos",

        // --- ALL PROJECTS PAGE ---
        "all_projects_title": "Todos os Meus Projetos",
        "all_projects_subtitle": "Explore meu trabalho por categoria",
        "filter_all": "Todos",
        "filter_web": "Web",
        "filter_mobile": "Mobile",
        "filter_ia": "IA/ML",
        "filter_data": "Dados",
        "filter_tool": "Ferramentas",
        "filter_python": "Python",
        "filter_fit": "Fit",
        "filter_learning": "Aprendizado",
        "back_to_portfolio": "Voltar ao Portfólio",
        "gallery_button": "Ver Galeria",
        "gallery_title_suffix": "- Galeria de Imagens",

        // --- DESCRIÇÕES DOS PROJETOS ---
        "maos_que_falam_desc": "<strong>Conceito:</strong> Aplicação web para reconhecimento de Libras em tempo real, usando a câmera do usuário, Visão Computacional e Machine Learning.<br><strong>Funcionalidades:</strong> Tradução de gestos para texto com feedback visual avançado, interface moderna e um vasto vocabulário de sinais.<br><strong>Tecnologias:</strong> Python (MediaPipe, Scikit-learn, OpenCV), HTML, CSS, JavaScript.",
        "sistema_financeiro_desc": "<strong>Conceito:</strong> Sistema financeiro para Pessoa Física (PF) e Pessoa Jurídica (PJ) visando a organização financeira. Já possui transações, orçamentos, relatórios, DRE, gráficos e histórico desenvolvidos.<br><strong>Progresso/Próximos Passos:</strong> Exploração de APIs para captura automática de extratos bancários e lançamento de transações. A meta futura é consolidar essa integração.<br><strong>Tecnologias:</strong> Python, JSON, Banco de Dados.",
        "fitness_pro_desc": "<strong>Conceito:</strong> Sistema que ajuda o usuário a gerenciar a jornada fitness, acompanhando receitas, progresso de peso e hábitos diários. O objetivo é organizar e facilitar o dia a dia do usuário.<br><strong>Funcionalidades:</strong> Visão geral, Nutrição (planejador de Dieta, Receitas), Biblioteca de Exercícios, Treinos (registrar Treinos diários e históricos), Calculadora Métricas, Progresso.<br><strong>Tecnologias:</strong> Python (CustomTkinter, Tkinter, TkCalendar), MySQL, JSON.",
        "ingles_facil_desc": "<strong>Conceito:</strong> Plataforma interativa para aprendizado de inglês, começando pelos fundamentos, com aulas dinâmicas, gamificação e glossário.<br><strong>Progresso:</strong> Módulo 1 (Fundamental) com 3 aulas interativas (Alfabeto, Números 0-10, Cores básicas), incluindo pronúncia, dicas, vídeos práticos, gamificação e glossário filtrável.<br><strong>Tecnologias:</strong> HTML, CSS, JavaScript.",

        // --- CONTACT SECTION ---
        "contact_title": "Contato",
        "contact_subtitle": "Envie uma mensagem",
        "form_name": "Nome Completo",
        "form_name_placeholder": "Seu nome",
        "form_email": "Seu Melhor Email",
        "form_email_placeholder": "seu.email@exemplo.com",
        "form_subject": "Assunto",
        "form_subject_placeholder": "Motivo do contato",
        "form_message": "Sua Mensagem",
        "form_message_placeholder": "Escreva sua mensagem aqui...",
        "form_button": "Enviar Mensagem",
        "contact_alternative": "Ou, se preferir, me encontre aqui:",
    },
    "en-US": {
        // --- GERAL & NAVBAR & FOOTER ---
        "page_title_home": "My Professional Portfolio - Pablo Ruan",
        "page_title_projects": "All Projects - Pablo Ruan",
        "nav_home": "Home",
        "nav_about": "About Me",
        "nav_experience": "Experience",
        "nav_education": "Education",
        "nav_skills": "Skills",
        "nav_projects": "Projects",
        "nav_contact": "Contact",
        "footer_text": "Pablo Ruan. All rights reserved.",
        "back_to_top": "Back to top",

        // --- HERO SECTION ---
        "hero_greeting": "Hello, I'm",
        "hero_role": "Junior Systems Analyst & Developer, and AI Developer",
        "hero_button": "See my projects",

        // --- ABOUT SECTION ---
        "about_title": "About Me",
        "about_subtitle": "My introduction",
        "about_p1": "I am Pablo Ruan, a Junior Systems Analyst & Developer and AI Developer, dedicated to advancing technology-driven solutions with a strong focus on innovation. Currently, as a Junior Systems Analyst & Developer, I contribute to impactful projects that enhance community health and well-being.",
        "about_p2": "I am pursuing a Bachelor's degree in Administration, Marketing, and Management at the Federal University of Piauí, expected to graduate in December 2026. Additionally, I hold a technical certification in Systems Development from the Federal Institute of Piauí, completed in 2021.",
        "about_p3": "My professional journey is defined by a commitment to continuous learning and the practical application of knowledge in initiatives that drive significant change. I have experience in API development and a passion for Artificial Intelligence. I am always open to exploring collaboration opportunities and discussing transformative ideas. Feel free to connect with me to discuss potential synergies.",

        // --- EXPERIENCE SECTION ---
        "experience_title": "Professional Experience",
        "experience_subtitle": "My journey",
        "exp1_date": "July 2024 - Present",
        "exp1_title": "Jr. Systems Analyst & Developer",
        "exp1_company": "Vem Prevenir",
        "exp1_desc": "Contributing to impactful projects that improve community health and well-being through technological solutions.",
        "exp2_date": "July 2024 - November 2024 (5 months)",
        "exp2_title": "Founders at Campus",
        "exp2_company": "Google for Startups",
        "exp2_desc": "Participated in the 3rd Class of the Founders at Campus program, with access to the Google for Startups Campus and mentoring.",

        // --- EDUCATION SECTION ---
        "education_title": "Education",
        "education_subtitle": "My studies",
        "edu1_date": "June 2021 - December 2026 (Expected)",
        "edu1_title": "Federal University of Piauí",
        "edu1_desc": "Bachelor's Degree in Administration, Business and Marketing",
        "edu2_date": "August 2020 - July 2021",
        "edu2_title": "IFPI - Federal Institute of Piauí",
        "edu2_desc": "Integrated Technical Course in Systems Development",

        // --- SKILLS SECTION ---
        "skills_title": "Skills",
        "skills_subtitle": "My technical toolkit",
        "skills_cat1": "AI & Cloud",
        "skills_cat2": "Programming Languages",
        "skills_cat3": "Backend & API Development",
        "skills_cat4": "Frontend",
        "skills_cat5": "Tools, Security & Others",
        
        // --- PROJECTS SECTION (HOME) ---
        "projects_title": "My Projects",
        "projects_subtitle": "Some recent work and studies",
        "project_status_dev": "(In Development)",
        "project_status_proto": "(Prototype)",
        "project_details": "View Details",
        "project_repo": "Repository",
        "see_more_projects": "See more projects",

        // --- ALL PROJECTS PAGE ---
        "all_projects_title": "All My Projects",
        "all_projects_subtitle": "Explore my work by category",
        "filter_all": "All",
        "filter_web": "Web",
        "filter_mobile": "Mobile",
        "filter_ia": "AI/ML",
        "filter_data": "Data",
        "filter_tool": "Tools",
        "filter_python": "Python",
        "filter_fit": "Fit",
        "filter_learning": "Learning",
        "back_to_portfolio": "Back to Portfolio",
        "gallery_button": "View Gallery",
        "gallery_title_suffix": "- Image Gallery",
        
        // --- PROJECT DESCRIPTIONS ---
        "maos_que_falam_desc": "<strong>Concept:</strong> Web application for real-time sign language recognition using the user's camera, Computer Vision, and Machine Learning.<br><strong>Features:</strong> Gesture-to-text translation with advanced visual feedback, a modern interface, and a vast vocabulary of signs.<br><strong>Technologies:</strong> Python (MediaPipe, Scikit-learn, OpenCV), HTML, CSS, JavaScript.",
        "sistema_financeiro_desc": "<strong>Concept:</strong> Financial system for individuals (PF) and businesses (PJ) aimed at financial organization. It already features transactions, budgets, reports, income statements, charts, and history.<br><strong>Progress/Next Steps:</strong> Exploring APIs for automatic bank statement fetching and transaction posting. The future goal is to consolidate this integration.<br><strong>Technologies:</strong> Python, JSON, Database.",
        "fitness_pro_desc": "<strong>Concept:</strong> A system to help users manage their fitness journey by tracking recipes, weight progress, and daily habits. The goal is to organize and simplify the user's daily routine.<br><strong>Features:</strong> Overview, Nutrition (Diet Planner, Recipes), Exercise Library, Workouts (log daily and historical), Metrics Calculator, Progress.<br><strong>Technologies:</strong> Python (CustomTkinter, Tkinter, TkCalendar), MySQL, JSON.",
        "ingles_facil_desc": "<strong>Concept:</strong> Interactive platform for learning English, starting from the fundamentals, with dynamic lessons, gamification, and a glossary.<br><strong>Progress:</strong> Module 1 (Fundamental) with 3 interactive lessons (Alphabet, Numbers 0-10, Basic Colors), including pronunciation, tips, practical videos, and a filterable glossary.<br><strong>Technologies:</strong> HTML, CSS, JavaScript.",

        // --- CONTACT SECTION ---
        "contact_title": "Contact",
        "contact_subtitle": "Get in touch",
        "form_name": "Full Name",
        "form_name_placeholder": "Your name",
        "form_email": "Your Best Email",
        "form_email_placeholder": "your.email@example.com",
        "form_subject": "Subject",
        "form_subject_placeholder": "Reason for contact",
        "form_message": "Your Message",
        "form_message_placeholder": "Write your message here...",
        "form_button": "Send Message",
        "contact_alternative": "Or, if you prefer, find me here:",
    },
    "es-ES": {
        // --- GERAL & NAVBAR & FOOTER ---
        "page_title_home": "Mi Portafolio Profesional - Pablo Ruan",
        "page_title_projects": "Todos los Proyectos - Pablo Ruan",
        "nav_home": "Inicio",
        "nav_about": "Sobre Mí",
        "nav_experience": "Experiencia",
        "nav_education": "Formación",
        "nav_skills": "Habilidades",
        "nav_projects": "Proyectos",
        "nav_contact": "Contacto",
        "footer_text": "Pablo Ruan. Todos los derechos reservados.",
        "back_to_top": "Volver arriba",

        // --- HERO SECTION ---
        "hero_greeting": "Hola, soy",
        "hero_role": "Analista y Desarrollador de Sistemas Junior, y Desarrollador de IA",
        "hero_button": "Ver mis proyectos",

        // --- ABOUT SECTION ---
        "about_title": "Sobre Mí",
        "about_subtitle": "Mi introducción",
        "about_p1": "Soy Pablo Ruan, Analista y Desarrollador de Sistemas Junior y Desarrollador de IA, dedicado a promover soluciones impulsadas por la tecnología con un fuerte enfoque en la innovación. Actualmente, como Analista y Desarrollador de Sistemas Junior, contribuyo a proyectos de impacto que mejoran la salud y el bienestar de la comunidad.",
        "about_p2": "Estoy cursando un Grado en Administración, Marketing y Gestión en la Universidad Federal de Piauí, con graduación prevista para diciembre de 2026. Además, poseo una certificación técnica en Desarrollo de Sistemas del Instituto Federal de Piauí, finalizada en 2021.",
        "about_p3": "Mi trayectoria profesional se define por un compromiso con el aprendizaje continuo y la aplicación práctica del conocimiento en iniciativas que impulsan cambios significativos. Tengo experiencia en el desarrollo de APIs y una pasión por la Inteligencia Artificial. Siempre estoy abierto a explorar oportunidades de colaboración y discutir ideas transformadoras. No dudes en contactarme para discutir posibles sinergias.",

        // --- EXPERIENCE SECTION ---
        "experience_title": "Experiencia Profesional",
        "experience_subtitle": "Mi trayectoria",
        "exp1_date": "Julio 2024 - Presente",
        "exp1_title": "Analista y Desarrollador de Sistemas Jr.",
        "exp1_company": "Vem Prevenir",
        "exp1_desc": "Contribuyendo a proyectos de impacto que mejoran la salud y el bienestar de la comunidad a través de soluciones tecnológicas.",
        "exp2_date": "Julio 2024 - Noviembre 2024 (5 meses)",
        "exp2_title": "Founders at Campus",
        "exp2_company": "Google for Startups",
        "exp2_desc": "Participé en la 3ª edición del programa Founders at Campus, con acceso al Campus de Google for Startups y tutorías.",

        // --- EDUCATION SECTION ---
        "education_title": "Formación Académica",
        "education_subtitle": "Mis estudios",
        "edu1_date": "Junio 2021 - Diciembre 2026 (Previsto)",
        "edu1_title": "Universidad Federal de Piauí",
        "edu1_desc": "Grado en Administración, Negocios y Marketing",
        "edu2_date": "Agosto 2020 - Julio 2021",
        "edu2_title": "IFPI - Instituto Federal de Piauí",
        "edu2_desc": "Curso Técnico Integrado en Desarrollo de Sistemas",

        // --- SKILLS SECTION ---
        "skills_title": "Habilidades",
        "skills_subtitle": "Mis herramientas técnicas",
        "skills_cat1": "IA & Cloud",
        "skills_cat2": "Lenguajes de Programación",
        "skills_cat3": "Backend & Desarrollo de APIs",
        "skills_cat4": "Frontend",
        "skills_cat5": "Herramientas, Seguridad & Otros",

        // --- PROJECTS SECTION (HOME) ---
        "projects_title": "Mis Proyectos",
        "projects_subtitle": "Algunos trabajos y estudios recientes",
        "project_status_dev": "(En Desarrollo)",
        "project_status_proto": "(Prototipo)",
        "project_details": "Ver Detalles",
        "project_repo": "Repositorio",
        "see_more_projects": "Ver más proyectos",

        // --- ALL PROJECTS PAGE ---
        "all_projects_title": "Todos Mis Proyectos",
        "all_projects_subtitle": "Explora mi trabajo por categoría",
        "filter_all": "Todos",
        "filter_web": "Web",
        "filter_mobile": "Móvil",
        "filter_ia": "IA/ML",
        "filter_data": "Datos",
        "filter_tool": "Herramientas",
        "filter_python": "Python",
        "filter_fit": "Fit",
        "filter_learning": "Aprendizaje",
        "back_to_portfolio": "Volver al Portfolio",
        "gallery_button": "Ver Galería",
        "gallery_title_suffix": "- Galería de Imágenes",

        // --- DESCRIPCIONES DE PROYECTOS ---
        "maos_que_falam_desc": "<strong>Concepto:</strong> Aplicación web para el reconocimiento de la Lengua de Señas Brasileña (Libras) en tiempo real, utilizando la cámara del usuario, Visión por Computadora y Machine Learning.<br><strong>Funcionalidades:</strong> Traducción de gestos a texto con retroalimentación visual avanzada, una interfaz moderna y un amplio vocabulario de señas.<br><strong>Tecnologías:</strong> Python (MediaPipe, Scikit-learn, OpenCV), HTML, CSS, JavaScript.",
        "sistema_financeiro_desc": "<strong>Concepto:</strong> Sistema financiero para personas físicas (PF) y jurídicas (PJ) con el objetivo de la organización financiera. Ya cuenta con transacciones, presupuestos, informes, estado de resultados, gráficos e historial.<br><strong>Progreso/Próximos Pasos:</strong> Exploración de APIs para la captura automática de extractos bancarios y el registro de transacciones. La meta futura es consolidar esta integración.<br><strong>Tecnologías:</strong> Python, JSON, Base de Datos.",
        "fitness_pro_desc": "<strong>Concepto:</strong> Un sistema para ayudar a los usuarios a gestionar su viaje de fitness, haciendo seguimiento de recetas, progreso de peso y hábitos diarios. El objetivo es organizar y facilitar la rutina del usuario.<br><strong>Funcionalidades:</strong> Vista general, Nutrición (Planificador de Dieta, Recetas), Biblioteca de Ejercicios, Entrenamientos (registrar diarios e históricos), Calculadora de Métricas, Progreso.<br><strong>Tecnologías:</strong> Python (CustomTkinter, Tkinter, TkCalendar), MySQL, JSON.",
        "ingles_facil_desc": "<strong>Concepto:</strong> Plataforma interactiva para aprender inglés, comenzando desde los fundamentos, con lecciones dinámicas, gamificación y un glosario.<br><strong>Progreso:</strong> Módulo 1 (Fundamental) con 3 lecciones interactivas (Alfabeto, Números 0-10, Colores básicos), incluyendo pronunciación, consejos, videos prácticos y un glosario filtrable.<br><strong>Tecnologías:</strong> HTML, CSS, JavaScript.",

        // --- CONTACT SECTION ---
        "contact_title": "Contacto",
        "contact_subtitle": "Ponte en contacto",
        "form_name": "Nombre Completo",
        "form_name_placeholder": "Tu nombre",
        "form_email": "Tu Mejor Correo Electrónico",
        "form_email_placeholder": "tu.email@ejemplo.com",
        "form_subject": "Asunto",
        "form_subject_placeholder": "Motivo del contacto",
        "form_message": "Tu Mensaje",
        "form_message_placeholder": "Escribe tu mensaje aquí...",
        "form_button": "Enviar Mensaje",
        "contact_alternative": "O, si lo prefieres, encuéntrame aquí:",
    }
};

// --- END OF FILE js/translations.js ---