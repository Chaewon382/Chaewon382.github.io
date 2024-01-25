export type Education = {
    university: string;
    degree: string;
    date: string;
    specialization?: string;
    gpa: number;
    coursework?: string[]
}

export type Experience = {
    position: string;
    company: string;
    team?: string;
    duration: string;
    explanation: string[];
    techstack?: string;
    link?: string;
    linkText?: string;
}

export type Project = {
    title: string;
    duration: string;
    explanation: string[];
    techstack?: string[];
    link?: string;
    linkText?: string;    
}