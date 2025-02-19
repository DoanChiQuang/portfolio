import { ICONS, IMAGES } from './config';

export const services = [
    {
        label: 'Mobile Development',
        content:
            'I use React Native and Flutter to develop mobile apps that work on both Android and iOS.',
        src: ICONS.MOBILEDEVELOPMENT,
        alt: 'Mobile Development',
        active: false,
    },
    {
        label: 'Frontend Development',
        content:
            'I can design, develop and optimize UI/UX based on Figma design using React and Next.js.',
        src: ICONS.FRONTENDDEVELOPMENT,
        alt: 'Frontend Development',
        active: true,
    },
    {
        label: 'Backend Development',
        content:
            'I use Node.js frameworks like NestJS combined with MySQL, MongoDB, or Firebase to develop high-performance and maintainable backend applications.',
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
        end: '',
        list: [
            'Developed new features and implemented UI designs into code using React, Next.js, Flutter',
            'Integrated Google sign-in for user authentication using Firebase',
            'Designed dynamic functionalities using Redux, Riverpod and Bloc',
            'Collaborated with other developer to manage and self-organize tasks using Aglie.',
        ],
    },
    {
        label: 'PHP/React Native Developer Intern',
        content: 'OPPO Vietnam',
        start: '06/2022',
        end: '03/2024',
        list: [
            'Assisted in developing and maintaining ERP System using Zend and React Native, ensuring seamless functionality and user-friendly interfaces',
            'Supported in designing and implementation UI/UX designs that aligned with clients requirements and design principles',
            'Worked with full life-cycle development team, including backend developers and devops engineers, to delivery efficient, high-quality, and scalable solutions',
            'Gained hands-on experience in debugging, troubleshooting, and refining app features to improve user experience',
        ],
    },
];

export const products = [
    {
        name: 'Credit Point Page',
        type: 'Web Development',
        description:
            'Designed UI/UX Design in Figma and Developed UI into code.',
        image: IMAGES.PRODUCT1,
        technologies: ['Odoo', 'HTML', 'CSS', 'Bootstrap'],
    },
    {
        name: 'Todo App',
        type: 'Mobile Application',
        description:
            'Mobile app is built with Flutter, Riverpod and Firebase based on MVVM Architecture that helps users in managing their tasks.',
        image: IMAGES.TODOAPP,
        technologies: ['Flutter', 'Riverpod', 'Firebase', 'MVVM Architecture'],
    },
    {
        name: 'Sport Schedule',
        type: 'Web Development',
        description:
            'Developed an intuitive scheduling tool enabling users to efficiently create, modify, and cancel customer appointments.',
        image: IMAGES.SPORTSCHEDULE,
        technologies: ['React', 'TailwindCSS', 'Express.js', 'MongoDB'],
    },
];
