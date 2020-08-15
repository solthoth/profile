import { Job } from '../models/job'
import { Profile } from './profile';

export const JOBS: Job[] = [
    { image: '...',  title: 'Grunt Engineer', company: 'Epic Software', content: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', startDate: new Date('2020-02-02'), endDate: new Date('2020-02-03') },
    { image: '...',  title: 'Grunt Engineer', company: 'Epic Software', content: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', startDate: new Date('2020-02-02'), endDate: new Date('2020-02-03') },
    { image: '...',  title: 'Grunt Engineer', company: 'Epic Software', content: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', startDate: new Date('2020-02-02'), endDate: new Date('2020-02-03') }
];

export const ACCOMPLISHMENTS: string[] = [
    "Developed standards and controls for teams that work across multiple time zones. Using tools such as Confluence and JIRA to help coordinate efforts and share information on stories and projects to complete business objectives.",
    "Reviewed, interviewed, and onboarded contractors in a short time to help support the current team’s development efforts. Also, created monthly/iterative performance feedback sessions for all team members to manage success.",
    "Established strong relationships between corporate teams and the subsidiary offices. Worked with various teams in collaboration efforts to standardize practices, products, and tools department wide"
];

export const PROFILE: Profile = {
    firstName: 'Carlos',
    lastName: 'Barajas',
    linkedInUrl: 'https://www.linkedin.com/in/solthoth/'
};

export const OBJECTIVES: string[] = [
    "Ambitious engineer with an endless appetite for new projects, proficient in a variety of software development languages, CI/CD tools, standards, and practices. Seeking a position as an engineer in which I can utilize all my skills and experiences to their fullest potential."
];
