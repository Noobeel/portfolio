import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

interface NavLink {
    [key: string]: string
}

interface Social {
    name: string,
    url: string,
    icon: JSX.Element
}

interface Project {
    title: string,
    description: string,
    image: string,
    github?: string,
    demo?: string,
}

interface Skill {
    name: string,
    iconPath: string
}

export const navLinks: NavLink = {
    "Home": "/",
    "About": '/#about',
    "Projects": '/#projects',
    "Contact": '/#contact',
    "Résumé": '/resume'
}

export const socials: Social[] = [
    {
        name: 'Email',
        url: 'mailto:nabeelasim0250@gmail.com',
        icon: <Mail />
    },
    {
        name: 'Github',
        url: 'https://github.com/noobeel',
        icon: <Github />
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/mnabeelasim/',
        icon: <Linkedin />
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/noobeelium/',
        icon: <Instagram />
    }
];

export const projects: Project[] = [
    {
        title: 'Portfolio Website',
        description: 'A portfolio website built using TypeScript, Next.js, Tailwind CSS. Features ShadCN UI for stunning UI components and Framer Motion for smooth animations.',
        image: '/images/projects/portfolio.png',
        github: 'https://github.com/Noobeel/portfolio',
        demo: 'https://nabeelasim.net',
    },
    {
        title: 'Project Task Management Tool',
        description: 'A project task management tool built using Python, TypeScript, React, FastAPI, MongoDB, and Firebase. Features a REST API, user authentication, and a Kanban board.',
        image: '/images/projects/project-task-management-tool.png',
        github: 'https://github.com/Noobeel/University-Assignments/tree/master/Project%20Task%20Management%20Tool',
    },
    {
        title: 'Document Search Engine',
        description: 'A document search engine built using Python, NLTK, and Sklearn. Features algorithms such as BM25, Naive Bayes, and SVC Classification as well as the Word2Vec model to enhance search parameters and rank documents from a corpus of size 27GB.',
        image: '/images/projects/document-search-engine.png',
        github: 'https://github.com/Noobeel/University-Assignments/tree/master/Search%20Engine',
    },
    {
        title: 'Cypress Web Application',
        description: 'A web application built using Python, Django, Google Maps API, and Bootstrap. Features a web interface for city residents to report issues like fallen trees, potholes, and garbage for the city to resolve.',
        image: '/images/projects/cypress-web-application.png',
        github: 'https://github.com/Noobeel/University-Assignments/tree/master/Cypress%20Web%20App',
    },
];

export const skills: { [key: string]: Skill[] } = {
    "Languages": [
        {
            name: "Python",
            iconPath: "python/python-original",
        },
        {
            name: "Java",
            iconPath: "java/java-original",
        },
        {
            name: "PHP",
            iconPath: "php/php-original",
        },
        {
            name: "JavaScript",
            iconPath: "javascript/javascript-original",
        },
        {
            name: "TypeScript",
            iconPath: "typescript/typescript-original",
        },
        {
            name: "HTML",
            iconPath: "html5/html5-original",
        },
        {
            name: "CSS",
            iconPath: "css3/css3-original",
        },
        {
            name: "MySQL",
            iconPath: "mysql/mysql-original",
        },
        {
            name: "PL/SQL",
            iconPath: "oracle/oracle-original",
        },
        {
            name: "MongoDB",
            iconPath: "mongodb/mongodb-original",
        },
    ],
    "Frameworks": [
        {
            name: "React",
            iconPath: "react/react-original",
        },
        {
            name: "Next.js",
            iconPath: "nextjs/nextjs-original",
        },
        {
            name: "Flask",
            iconPath: "flask/flask-original",
        },
        {
            name: "Django",
            iconPath: "django/django-plain",
        },
        {
            name: "Tailwind CSS",
            iconPath: "tailwindcss/tailwindcss-plain",
        },
    ],
    "Tools": [
        {
            name: "Visual Studio Code",
            iconPath: "vscode/vscode-original",
        },
        {
            name: "Git/GitHub",
            iconPath: "github/github-original",
        },
        {
            name: "Docker",
            iconPath: "docker/docker-original",
        },
        {
            name: "Atlassian JIRA",
            iconPath: "jira/jira-original",
        },
        {
            name: "Atlassian Confluence",
            iconPath: "confluence/confluence-original",
        },
    ],
}