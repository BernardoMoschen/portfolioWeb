import SectionTitle from '@/view/components/headings/SectionTitle';
import { FC } from 'react';
import { Icon } from '@/layout/Icon';
import Marquee from '../../../../library/animated/wrapper/Components/Marquee';

export const Tech: FC = () => (
  <>
    <section className='h-full grid grid-cols-12 gap-5'>
      <div className='flex flex-col gap-y-6 col-start-2 col-span-full'>
        <SectionTitle>How do i do it</SectionTitle>
      </div>
    </section>
    <div className='container mx-auto w-full h-screen text-white flex justify-center items-center overflow-x-hidden'>
      <Marquee
        marquee1={{ items: preferredStack, from: 0, to: '-100%' }}
        marquee2={{ items: preferredStack2, from: '-100%', to: 0 }}
      />
    </div>
  </>
);
const preferredStack = [
  {
    name: 'Axios',
    logo: <Icon icon='Axios' />,
  },
  {
    name: 'Docker',
    logo: <Icon icon='Docker' />,
  },
  {
    name: 'Express',
    logo: <Icon icon='Express' />,
  },
  {
    name: 'Framer Motion',
    logo: <Icon icon='FramerMotion' />,
  },
  {
    name: 'GitLab',
    logo: <Icon icon='Gitlab' />,
  },
  {
    name: 'Linux',
    logo: <Icon icon='Linux' />,
  },
  {
    name: 'Material UI',
    logo: <Icon icon='MaterialUi' />,
  },
  {
    name: 'MySQL',
    logo: <Icon icon='MySQL' />,
  },
  {
    name: 'NestJS',
    logo: <Icon icon='Nest' />,
  },
  {
    name: 'Next.js',
    logo: <Icon icon='Next' />,
  },
  {
    name: 'Node.js',
    logo: <Icon icon='NodeJs' />,
  },
  {
    name: 'PHP',
    logo: <Icon icon='PHP' />,
  },
  {
    name: 'PostgreSQL',
    logo: <Icon icon='PostgreeSQL' />,
  },
  {
    name: 'Prisma',
    logo: <Icon icon='Prisma' />,
  },
];
const preferredStack2 = [
  {
    name: 'Python',
    logo: <Icon icon='Python' />,
  },
  {
    name: 'ReactJS',
    logo: <Icon icon='React' />,
  },
  {
    name: 'Redux',
    logo: <Icon icon='Redux' />,
  },
  {
    name: 'Sass',
    logo: <Icon icon='SASS' />,
  },
  {
    name: 'Sequelize',
    logo: <Icon icon='Sequelize' />,
  },
  {
    name: 'SonarQube',
    logo: <Icon icon='Sonarqube' />,
  },
  {
    name: 'Tailwind CSS',
    logo: <Icon icon='Tailwind' />,
  },
  {
    name: 'TypeScript',
    logo: <Icon icon='Typescript' />,
  },
  {
    name: 'Vite',
    logo: <Icon icon='Vite' />,
  },
  {
    name: 'Vue.js',
    logo: <Icon icon='VueJS' />,
  },
];
