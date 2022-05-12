const currentYear = new Date().getFullYear();
const yearBirth = 1984;
const yearStartWork = 2010;
const experience = currentYear - 1 - yearStartWork;

export const dataFile = {
    yearStartWork: yearStartWork,
    yearBirth: yearBirth,
    myName: 'Alejandro Mejia',
    myNickName: '@Londrack',
    title: 'Front Developer',
    eng: {
        createdBy: 'Created by',
        aboutMe: `I have ${experience} years of experience in the definition, design, development and administration of websites. I am creative, innovative, with ease and determination for self-learning. I am driven by constant personal and professional improvement. I have the ability to understand the logic of programming languages, work in a team and complete projects.`,
        title: 'Front Developer',
        homeTitle: 'Start',
        aboutMeTitle: 'About Me',
        skillsTitle: 'Skills',
        recentWorksTitle: 'Recent Works',
        demoStuffsTitle: 'Laboratory',
        networksTitle: 'Networks',
        selectLanguage: 'Select language',
        justScroll: 'Just Scroll',
    },
    esp: {
        createdBy: 'Creado por',
        aboutMe: `Tengo ${experience} años de experiencia en la definición, diseño, desarrollo y administración de portales web. Soy creativo, innovador, con facilidad y determinación para el auto-aprendizaje. Me impulsa la mejora constante, personal y profesional. Tengo facilidad para entender la lógica de los lenguajes de programación, trabajar en equipo y llevar a término los proyectos.`,
        title: 'Programador Front',
        homeTitle: 'Inicio',
        aboutMeTitle: 'Sobre mi',
        skillsTitle: 'Skills',
        recentWorksTitle: 'Trabajos recientes',
        demoStuffsTitle: 'Laboratorio',
        networksTitle: 'Redes Sociales',
        selectLanguage: 'Seleccionar idioma',
        justScroll: 'Haz Scroll',
    },
    skills: [{
            longName: 'HTML / CSS',
            shortName: 'css',
            lvl: 97,
            color: 'blueDark'
        },
        {
            longName: 'Javascript',
            shortName: 'js',
            lvl: 88,
            color: 'yellow'
        },
        {
            longName: 'ReactJs',
            shortName: 'react',
            lvl: 78,
            color: 'blue'
        },
        {
            longName: 'React Native',
            shortName: 'reactNative',
            lvl: 75,
            color: 'silver'
        },
        {
            longName: 'Next Js',
            shortName: 'next',
            lvl: 75,
            color: 'blueDark'
        },
        {
            longName: 'Vue',
            shortName: 'vue',
            lvl: 65,
            color: 'green'
        },
        {
            longName: 'Angular',
            shortName: 'angular',
            lvl: 75,
            color: 'red'
        },
        {
            longName: 'Redux',
            shortName: 'redux',
            lvl: 60,
            color: 'purple'
        },
        {
            longName: 'Ionic',
            shortName: 'ionic',
            lvl: 70,
            color: 'blueDark'
        },
        {
            longName: 'PHP',
            shortName: 'php',
            lvl: 80,
            color: 'greenDark'
        },
        {
            longName: 'Python',
            shortName: 'python',
            lvl: 40,
            color: 'gold'
        },
        {
            longName: 'Bootstrap',
            shortName: 'bootstrap',
            lvl: 82,
            color: 'purple'
        },
        {
            longName: 'Tailwind',
            shortName: 'tailwind',
            lvl: 85,
            color: 'teal'
        },
        {
            longName: 'Wordpress',
            shortName: 'wordpress',
            lvl: 80,
            color: 'blueDark'
        },
    ],
    recentWorks: [{
            skill: ['php', 'js', 'css'],
            name: 'Colpensiones',
            shortName: 'colpensiones',
            url: 'http://www.colpensiones.gov.co/'
        },
        {
            skill: ['php', 'wordpress', 'css'],
            name: 'Biotopo',
            shortName: 'biotopo',
            url: 'http://www.biotopo.com.co/'
        }
    ],
    networks: [
        {
            shortName: 'linkedin',
            url: 'https://www.linkedin.com/in/alejandro-mejia-escobar/',
            count: '@Alejandro Mejia'
        },
        {
            shortName: 'github',
            url: 'https://londrack.github.io/',
            count: '@Londrack'
        },
        {
            shortName: 'codepen',
            url: 'https://codepen.io/Londrack/',
            count: '@Londrack'
        },
        {
            shortName: 'instagram',
            url: 'https://www.instagram.com/alejandromejiaescob/',
            count: '@Alejandro Mejia'
        },
    ],
    demoStuffs: [
        {
            skill: ['react', 'redux'],
            name: 'Pokedux',
            shortName: 'pokedux',
            url: 'https://londrack.github.io/react-pokedux/',
            github: 'https://github.com/Londrack/londrack.github.io',
        },
        {
            skill: ['react', 'next'],
            name: 'Birth Stars',
            shortName: 'birthstars',
            url: 'https://birth-stars.vercel.app/',
            github: 'https://github.com/Londrack/birth-stars',
        },
        {
            skill: ['css'],
            name: 'Rubies catch CSS game',
            shortName: 'rubies_catch_css',
            url: 'https://codepen.io/Londrack/full/abJrewx'
        },
        {
            skill: ['vue'],
            name: 'Alikar MarketList',
            description: 'App web para ayudarte a llevar tus compras de mercado y controlar tu presupuesto',
            shortName: 'alikar_marketlist',
            url: 'https://londrack.github.io/Alikar-market-list/',
            github: 'https://github.com/Londrack/Alikar-market-list',
        },
        {
            skill: ['angular'],
            name: 'Jaquemate - gameboards store',
            shortName: 'jaquemate_juegos_de_mesa',
            url: 'https://angular-store-e4202.web.app',
            github: 'https://github.com/Londrack/angular-boardgames-store',
        },
        {
            skill: ['react'],
            name: 'Cards of Rick & Morty',
            shortName: 'rick&morty_cards',
            url: 'https://londrack.github.io/cards_of_rick_and_morty/',
            github: 'https://github.com/Londrack/cards_of_rick_and_morty',
        },
        {
            skill: ['css'],
            name: 'CSS Ilustration',
            shortName: 'ilustracion_css_1',
            url: 'https://codepen.io/Londrack/full/wvJgrOK'
        },
        {
            skill: ['angular'],
            name: 'Checkmate store',
            shortName: 'checkmate',
            url: 'https://checkmate-londrack.netlify.app/home',
            github: 'https://github.com/Londrack/my-store-angular',
        },
        {
            skill: ['react'],
            name: 'Alikar ToDo List',
            shortName: 'alikar_todo_list',
            url: 'https://londrack.github.io/react-todo-machine/',
            github: 'https://github.com/Londrack/react-todo-machine',
        },
        {
            skill: ['ionic', 'angular'],
            name: 'Londrack Music',
            shortName: 'londrack_music',
            url: 'https://www.mediafire.com/file/ez3dc2tzfb9olav/londrack-music.apk/file'
        },
        // {
        //     skill: ['js'],
        //     name: 'Calories counter',
        //     shortName: 'contador_calorias',
        //     url: 'https://codepen.io/Londrack/full/MWOwNRX'
        // },
    ]
}