import { ICONS, IMAGES } from './config';

export const services = [
    {
        label: 'Mobile Development',
        content:
            'I would like to use my knowledge and skills to contribute value to the company',
        src: ICONS.MOBILEDEVELOPMENT,
        alt: 'Mobile Development',
        active: false,
    },
    {
        label: 'Frontend Development',
        content:
            'I would like to use my knowledge and skills to contribute value to the company',
        src: ICONS.FRONTENDDEVELOPMENT,
        alt: 'Frontend Development',
        active: true,
    },
    {
        label: 'Backend Development',
        content:
            'I would like to use my knowledge and skills to contribute value to the company',
        src: ICONS.BACKENDDEVELOPMENT,
        alt: 'Backend Development',
        active: false,
    },
];

export const technologies = [
    {
        src: IMAGES.HTML,
        alt: 'HTML5',
    },
    {
        src: IMAGES.CSS,
        alt: 'CSS3',
    },
    {
        src: IMAGES.JAVASCRIPT,
        alt: 'JavaScript',
    },
    {
        src: IMAGES.TYPESCRIPT,
        alt: 'Typescript',
    },
    {
        src: IMAGES.PHP,
        alt: 'PHP',
    },
    {
        src: IMAGES.REACT,
        alt: 'React',
    },
    {
        src: IMAGES.REACTNATIVE,
        alt: 'React Native',
    },
    {
        src: IMAGES.REDUX,
        alt: 'Redux',
    },
    {
        src: IMAGES.NEXTJS,
        alt: 'Next.js',
    },
    {
        src: IMAGES.NESTJS,
        alt: 'NestJS',
    },
    {
        src: IMAGES.FLUTTER,
        alt: 'Flutter',
    },
    {
        src: IMAGES.FIREBASE,
        alt: 'Firebase',
    },
    {
        src: IMAGES.MYSQL,
        alt: 'MySQL',
    },
    {
        src: IMAGES.MONGODB,
        alt: 'MongoDB',
    },
    {
        src: IMAGES.GIT,
        alt: 'Git',
    },
    {
        src: IMAGES.BITBUCKET,
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
