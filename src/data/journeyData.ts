import { IconNames } from '@/components/Icon';

export type Journey = {
  id: number;
  title: string;
  role: string;
  src: string;
  date: string;
  desc: string;
  techs: IconNames[];
};

export const journeyData: Journey[] = [
  {
    id: 1,
    title: 'Webmotors',
    role: 'Senior Frontend Engineer',
    src: '/images/webmotors.png',
    date: 'May 2024 - present',
    desc: `At Webmotors, a pioneer in Brazil's car market for 28+ years, I architect the frontend using ReactJS, optimize SEO, and implement a robust design system. Collaborate with stakeholders, build React components, use Storybook, and manage AWS deployments for top-tier performance and user experience.`,
    techs: ['react', 'html', 'css', 'ts', 'figma', 'jenkins', 'aws'],
  },
  {
    id: 2,
    title: 'BEES Ambev',
    role: 'Frontend Engineer',
    src: '/images/bees.png',
    date: 'Jun 2022 - May 2024',
    desc: `Worked on Ambev's global e-commerce platform using React JS, Redux, TypeScript, hooks, modern JavaScript, semantic HTML, and Next.js, impacting over 2 million users in 10+ countries. Ensured best practices with development teams and stakeholders. Experienced with Jest, Enzyme, CSS pre-processors, styled components, Storybook, Azure DevOps, and Microfrontends.`,
    techs: ['react', 'html', 'css', 'ts', 'figma', 'azure'],
  },
  {
    id: 3,
    title: 'Wiipo',
    role: 'Frontend Engineer',
    src: '/images/wiipo.png',
    date: 'Mar 2024 - Dec 2022',
    desc: `Developed fintech solutions with React Native, ReactJS, and Node, enhancing financial services. Led projects from planning to deployment, ensured code quality, and implemented CI/CD pipelines with unit testing using Jest.`,
    techs: ['react', 'html', 'css', 'ts', 'node'],
  },
  {
    id: 4,
    title: 'Sempre IT',
    role: 'Frontend Engineer',
    date: 'Oct 2020 - Jan 2022',
    src: '/images/sempreit.png',
    desc: `A new system for Prodata Brazil, enhancing registrations and automated integration. Prodata offers fare collection and fleet control solutions for public transport. Built with React and Node, this system adheres to top development practices, including TDD and unit/E2E testing with Jest.`,
    techs: ['react', 'node', 'vue', 'azure', 'html', 'css'],
  },
  {
    id: 5,
    title: 'Inmetrics',
    role: 'Frontend Engineer',
    date: 'Jun 2019 - Oct 2020',
    src: '/images/inmetrics.png',
    desc: `Technology consultancy, Working mainly on projects at banks Santander, Neon and Safra. Development of dashboards, administrative panels and integrations with Rest Web services, using Express and PHP. Working with data modeling using PostgreSQL and front-end development using HTML5, Sass and Nextjs.`,
    techs: [
      'angular',
      'react',
      'next',
      'node',
      'php',
      'postgreesql',
      'html',
      'css',
    ],
  },
  {
    id: 6,
    title: 'Hitcode',
    role: 'Frontend Engineer',
    date: 'Apr 2019 - Jun 2020',
    src: '/images/hitcode.png',
    desc: `Technology consultancy, Fleury is a quality reference group in diagnostic medicine in the Brazil. Working on new features in a Fleury system traceability project, using PHP 7.2 and some JavaScript features.`,
    techs: ['php', 'mysql', 'js', 'html', 'css'],
  },
];
