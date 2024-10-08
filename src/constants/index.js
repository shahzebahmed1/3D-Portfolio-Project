import { ucalgary, pobfike, nathacks} from "../assets/images";
import {
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    nodejs,
    pricewise,
    react,
    resumeicon,
    tailwindcss,
    threads,
    c,
    cpp,
    java
} from "../assets/icons";

export const skills = [
    {
        imageUrl: java,
        name: "Java",
        type: "Frontend",
    },
    {
        imageUrl: c,
        name: "c",
        type: "Frontend",
    },
    {
        imageUrl: cpp,
        name: "cpp",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Concierge",
        company_name: "Point On The Bow Condominiums",
        icon: pobfike,
        iconBg: "#accae1",
        date: "June 2022 – Present",
        points: [
            "Implemented a new package management system, significantly reducing delivery mishandling and earning commendation from board members for optimizing operational efficiency.",
            "Proposed and initiated the transition from outdated paper log books to a digital record-keeping system for everyday tasks, improving accuracy, organization, and efficiency across operations.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
    {
        title: "Participant",
        company_name: "AB Collegiate Programming Contest - University of Calgary",
        icon: ucalgary,
        iconBg: "#ff5d5d",
        date: "September 2023",
        points: [
            "Enhanced problem-solving skills by solving problems as a team under pressure.",
            "Developed creativity skills by solving complicated problems with limited libraries"
        ],
    },
    {
        title: "Participant",
        company_name: "natHacks - NeurAlbertaTech ",
        icon: nathacks,
        iconBg: "#f7abff",
        date: "November 2022",
        points: [
            "Collaborated on a project involving the use of electromyography (EMG) to track and analyze electrical signals from hand muscles.",
            "Gained hands-on experience connecting sensors to capture biofeedback and processing the data using Python."
        ],
    }
];

export const certifications = [
    {
        title: "Engineering Leadership Program Tier 3 - Excellence Tier",
        company_name: "University of Calgary",
        icon: ucalgary,
        iconBg: "#ff5d5d",
        date: "September 2023 – April 2024",
        points: [
            "Completed Excellence Tier of the Engineering Leadership Program, focusing on transformational leadership and project management.",
            "Enhanced skills in negotiation, persuasion, and situational leadership through core workshops and self-directed modules.",
            "Led and participated in discussions on inclusive leadership and team empathy at a full-day leadership conference.",
        ],
    },
    {
        title: "Engineering Leadership Program Tier 2 - Development Tier",
        company_name: "University of Calgary",
        icon: ucalgary,
        iconBg: "#ff5d5d",
        date: "September 2021 – April 2022",
        points: [
            "Completed Development Tier of the Engineering Leadership Program, focusing on team leadership and collaborative team dynamics.",
            "Gained skills in emotional intelligence, project management, and handling difficult conversations through interactive workshops.",
        ],
    },
    {
        title: "Engineering Leadership Program Tier 1 - Foundations Tier",
        company_name: "University of Calgary",
        icon: ucalgary,
        iconBg: "#ff5d5d",
        date: "September 2020 – April 2021",
        points: [
            "Completed Foundations Tier of the Engineering Leadership Program, focusing on self-awareness, effective communication, and teamwork.",
            "Participated in core workshops and self-directed modules that covered essential leadership skills such as time management and leadership styles.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/shahzebahmed1',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://linkedin.com/in/shahzebahmed1',
    },
    {
        name: 'Resume',
        iconUrl: resumeicon,
        link: 'https://drive.google.com/file/d/1v1mSwA5MvS8afDWO-DbDzsQ5sJlEMgc8/view?usp=sharing',
    },
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'The Vowelizer',
        description: 'The Vowelizer is a network-based application that allows users to either split or merge text strings, using both TCP and UDP protocols. The server application handles client requests and performs operations on text strings, while the client application interacts with the user and communicates with the server.',
        link: 'https://github.com/shahzebahmed1/Vowelizer',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Supply-Chain Management System',
        description: 'Created a Java application that determines the cheapest combination of reusable inventory items to fulfill custom orders, utilizing data from a MySQL database. The system optimizes resource use by dynamically analyzing inventory availability and cost.',
        link: 'https://github.com/shahzebahmed1/Group8-ENSF409',
    },
];