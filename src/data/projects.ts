import { Project } from "../types";

export const PROJECTS: Project[] = [
    {
        title: 'Unveiling Typicality Effects in Vision Models',
        duration: 'Sep 2023 - Dec 2023',
        explanation: [
            'Exaluated whether Torch vision models exhibit human-like behaviors while classifying images. In particular, typicality effect was closely examined which refers to a phenomenon where people often use typical objects of a category to classify other instances'
        ],
        techstack: [ 'Python', 'PyTorch', 'Pandas' ],
        linkText: 'View Report',
        link: '../../documents/TypEffectReport.pdf'
    }, {
        title: 'Brain Trauma Assessment Protocols',
        duration: 'January 2023 - May 2023',
        explanation: [
            'Developed a prototype for an iOS application that provides Alternative and Augmented Communication (AAC) methods to individuals who have suffered traumatic brain injuries, specifically stroke-induced aphasia',
            'Implemented smart suggestion/auto-complete features in Swift'
        ]
    }, {
        title: 'Neural Network Complexity and Generalizability',
        duration: 'March 2023 – May 2023',
        explanation: [
            'Investigated the theoretical foundations of generalization in standard neural network models with benchmark datasets',
            'Synthesized results from three research papers in an attempt to provide new generalization bounds that are more relevant to these models and are tighter than popular traditional measures'
        ],
        linkText: 'View Report',
        link: 'MLTheoryReport.pdf'
    }, {
        title: 'Real-time Person-to-Person (P2P) Money Transfer Solution',
        duration: 'January 2022 - December 2022',
        explanation: [
            'Worked with KPMG US to build an Android application for real-time money transactions on Azure',
            'Deployed an open source software Mojaloop on Kubernetes and connected with Java Spring servers',
            'Worked as a back-end developer implementing user services for digital payment between individuals using Java'
        ],
        techstack: ['Java', 'Android Studio', 'Kubernetes', 'Java Springboot', 'RESTful API']
    }, {
        title: 'Tower Defense Game',
        duration: 'August 2021 – November 2021',
        explanation: [
            'Created a fully functional Tower Defense Game using Java and JavaFX',
            'Collaborated with four other teammates on GitHub',
            'Implemented test-driven development writing unit tests to test game functionalities on edge cases',
            'The game followed basic rules of tower defense games: (1) Users can put their usernames and select difficulty at the beginning. (2) Users place towers along the path to attack enemies and protect the monument. (3) Enemies move toward the monument and break it down. (4) Display win/lose screen based on kill counts, remaining health of the monument.',
            'Worked as a full-stack developer in charge of main implementation and UI design'
        ],
        techstack: [ 'JavaFX', 'TestFX', 'Agile' ]
    }, {
        title: 'Sports Forecasting Tool',
        duration: 'Feburary 2022 - May 2022',
        explanation: [
            'Collaborated with 4 other students on GitHub to build a prediction model for sports games',
            'Preprocessed data with Principal Component Analysis (PCA)',
            'Implemented a logistic regression, SVM and Neural Network from Python scikit-learn and achieved the highest accuracy of 88%'
        ],
        techstack: [ 'Scikit-learn', 'ML techniques' ]
    }, {
        title: 'Museum Guide Robot Path Planning',
        duration: 'March 2022 - April 2022',
        explanation: [
            'Implemented a neural network to classify Japanese calligraphy characters',
            'Used the result of classification to pick the next destination and designed path for a differential drive robot using RRT'
        ]
    }
    // , {
    //     title: 'Interactive Graphical Application for GBA',
    //     duration: 'November 2021',
    //     explanation: [
    //         'Designed an interactive game in C that runs on a Gameboy Advanced Emulator',
    //         'Minimized image tearing with a complete understanding of GBA draw cycle',
    //         'Optimized the performance on a resource-limited hardware device using direct memory access'
    //     ]
    // }
]