import { Experience } from "../types";

export const EXPERIENCES: Experience[] = [
    {
        position: 'Software Engineer Intern',
        company: 'NCR Corporation',
        team: 'Digital Backing team',
        duration: 'May 2023 - August 2023',
        explanation: [
            'Modernized digital banking website as a fullstack developer with enhanced extensibility and user engagement',
            'Developed 12 widgets in ReactJS in 11 weeks, successfully leading to integration into the production',
            'Implemented back-end microservices using NestJS framework and deployed on Google Cloud Platform (GCP) for QA testing',
            'Collaborated across teams, ensuring design alignment with accessibility standards and successful API integration for new widgets',
            'Assured code quality by achieving 97% unit test coverage across both front-end and back-end services'
        ],
        techstack: 'JavaScript, TypeScript, ReactJS, MaterialUI, Node.js, Jest, GCP, ArgoCD, Git, RESTful API, Figma'
        // [ 'JavaScript', 'TypeScript', 'ReactJS', 'Node.js', 'Jest', 'GCP', 'ArgoCD', 'Git', 'RESTful API']
    }, {
        position: 'Software Development Intern',
        company: 'Samsung Electronics',
        team: 'Device Solutions branch',
        duration: 'July 2022 - August 2023', 
        explanation: [
            'Contributed to the development of company’s innovative programming language J Code that is aimed to optimize semiconductor manufacturing',
            'Authored the J Code specification which is encoded to a binary file and added to IDE',
            'Added debugging features to Integrated Development Environment (IDE) of J Code',
            'Improved the quality of code by developing and executing approximately 300 tests and refining error messages'
        ],
        techstack: 'C',
        link: '../../documents/samsung-certificate.pdf',
        linkText: 'View Certificate'
    }, {
        position: 'Undergraduate Teaching Assistant',
        company: 'Georgia Institute of Technology',
        duration: 'August 2021 - May 2023',
        explanation: [
            'Assisted CS1331 (Intro to Object-Oriented Programming) of 800+ students',
            'Led weekly recitations where I provided reviews on course materials and walked through live coding activities',
            'Held in-person office hours (3hr /week) and online office hours (1hr/week) per week to answer students\' questions',
            'Collaborated with 30+ other TAs on GitLab to develop autograder tests in JUnit',
            'Graded and provided detailed feedbacks on students’ homework/exam submissions to guide students',
            'Consistently recognized for depth of knowledge and outstanding communication skill in every post-semester performance review'
        ],
        techstack: 'Java, JavaFX, Junit, GitLab' // [ 'Java', 'JavaFX', 'JUnit', 'GitLab']
    }
]