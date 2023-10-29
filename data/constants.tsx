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
    icon: string
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
        description: 'A document search engine built using Python, NLTK, and Sklearn. Features three different search algorithms: BM25, Naive Bayes, and SVC text classification to rank documents as well as the Word2Vec model to find enhance search parameters. Searched from a corpus of over 100,000 documents with a file size of 27GB.',
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
    ["Languages"]: [
        {
            name: "Python",
            icon: "python-plain",
        },
        {
            name: "Java",
            icon: "java-plain",
        },
        {
            name: "PHP",
            icon: "php-plain colored",
        },
        {
            name: "JavaScript",
            icon: "javascript-plain colored",
        },
        {
            name: "TypeScript",
            icon: "typescript-plain colored",
        },
        {
            name: "HTML",
            icon: "html5-plain colored",
        },
        {
            name: "CSS",
            icon: "css3-plain colored",
        },
        {
            name: "MySQL",
            icon: "mysql-plain colored",
        },
        {
            name: "PL/SQL",
            icon: "oracle-plain colored-plain colored",
        },
        {
            name: "MongoDB",
            icon: "mongodb-plain colored",
        },
    ],
    ["Frameworks"]: [
        {
            name: "React",
            icon: "react-plain colored",
        },
        {
            name: "Next.js",
            icon: "nextjs-original colored",
        },
        {
            name: "Flask",
            icon: "flask-original colored",
        },
        {
            name: "Django",
            icon: "django-plain colored",
        },
    ],
    ["Tools"]: [
        {
            name: "Visual Studio Code",
            icon: "vscode-plain colored",
        },
        {
            name: "Git/GitHub",
            icon: "github-original colored",
        },
        {
            name: "Docker",
            icon: "docker-plain colored",
        },
        {
            name: "Atlassian JIRA",
            icon: "jira-plain colored",
        },
        {
            name: "Atlassian Confluence",
            icon: "confluence-original colored",
        },
    ],
}