import PreferredStack from './components/PreferredStack';
import KnownTools from './components/KnownTools';
import { ProgressText, FallingDivs } from '../../../components/animated';
import { motion } from 'framer-motion';
import Title from '@/view/components/Title';

export default function About() {
  const mock = [
    {
      img: 'https://www.svgrepo.com/show/354259/react.svg',
      tooltip: 'React',
    },
    {
      img: 'https://www.svgrepo.com/show/354259/react.svg',
      tooltip: 'React',
    },
    {
      img: 'https://www.svgrepo.com/show/354259/react.svg',
      tooltip: 'React',
    },
    {
      img: 'https://www.svgrepo.com/show/354259/react.svg',
      tooltip: 'React',
    },
    {
      img: 'https://www.svgrepo.com/show/354259/react.svg',
      tooltip: 'React',
    },
    {
      img: 'https://www.svgrepo.com/show/354259/react.svg',
      tooltip: 'React',
    },
  ];

  return (
    <div className='flex flex-col gap-8'>
      <Title>About</Title>
      <div>
        <motion.div className='text-2xl  w-3/4'>
          <ProgressText>
            Software engineer and full-stack developer. I have developed a wide
            range of system management solutions and web applications using
            various programming languages for small business and large
            organizations.
          </ProgressText>
        </motion.div>
      </div>
      <div className='flex flex-row gap-4 justify-between'>
        <PreferredStack />
        <KnownTools />
      </div>
    </div>
  );
}
