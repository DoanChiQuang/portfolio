import { IMAGES } from './config';

export const services = [
    {
        label: 'Mobile Development',
        content:
            'I would like to use my knowledge and skills to contribute value to the company',
        src: '../src/assets/icons/mobile-development.png',
        alt: 'Mobile Development',
        active: false,
    },
    {
        label: 'Frontend Development',
        content:
            'I would like to use my knowledge and skills to contribute value to the company',
        src: '../src/assets/icons/frontend-development.png',
        alt: 'Frontend Development',
        active: true,
    },
    {
        label: 'Backend Development',
        content:
            'I would like to use my knowledge and skills to contribute value to the company',
        src: '../src/assets/icons/backend-development.png',
        alt: 'Backend Development',
        active: false,
    },
];

export const technologies = [
    {
        src: '../src/assets/technologies/html.png',
        alt: 'HTML5',
    },
    {
        src: '../src/assets/technologies/css.png',
        alt: 'CSS3',
    },
    {
        src: '../src/assets/technologies/javascript.png',
        alt: 'JavaScript',
    },
    {
        src: '../src/assets/technologies/typescript.png',
        alt: 'Typescript',
    },
    {
        src: '../src/assets/technologies/php.png',
        alt: 'PHP',
    },
    {
        src: '../src/assets/technologies/react.png',
        alt: 'React',
    },
    {
        src: '../src/assets/technologies/react-native.png',
        alt: 'React Native',
    },
    {
        src: '../src/assets/technologies/redux.png',
        alt: 'Redux',
    },
    {
        src: '../src/assets/technologies/nextjs.png',
        alt: 'Nest.js',
    },
    {
        src: '../src/assets/technologies/nestjs.png',
        alt: 'NestJS',
    },
    {
        src: '../src/assets/technologies/flutter.png',
        alt: 'Flutter',
    },
    {
        src: '../src/assets/technologies/firebase.png',
        alt: 'Firebase',
    },
    {
        src: '../src/assets/technologies/mysql.png',
        alt: 'MySQL',
    },
    {
        src: '../src/assets/technologies/mongodb.png',
        alt: 'MongoDB',
    },
    {
        src: '../src/assets/technologies/git.png',
        alt: 'Git',
    },
    {
        src: '../src/assets/technologies/bitbucket.png',
        alt: 'Bitbucket',
    },
];

export const educations = [
    {
        label: 'Saigon University',
        content: 'Bachelor of Engineering in Information Technology',
        start: '09/2019',
        end: '07/2024',
    },
];

export const experience = [
    {
        label: 'Frontend Developer',
        content: 'Freelance',
        start: '04/2024',
        end: '02/2025',
        list: [
            'Developed new features and implemented UI designs',
            'Developed new features and implemented UI designs',
            'Developed new features and implemented UI designs',
        ],
    },
    {
        label: 'Frontend & Backend Developer',
        content: 'OPPO Vietnam',
        start: '06/2022',
        end: '03/2024',
        list: [
            'Developed new features and implemented UI designs',
            'Developed new features and implemented UI designs',
            'Developed new features and implemented UI designs',
        ],
    },
];

export const products = [
    {
        name: 'Todo List App',
        type: 'Mobile Application',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        image: IMAGES.PRODUCT1,
        technologies: ['React Native', 'Firebase'],
    },
];
