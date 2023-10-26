import { Github, Linkedin, Instagram, Mail} from 'lucide-react';

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
        title: 'Project 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptatem.',
        image: '/images/projects/placeholder.png',
        github: 'https://github.com',
        demo: 'https://demo.com',
    },
    {
        title: 'Project 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptatem.',
        image: '/images/projects/placeholder.png',
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