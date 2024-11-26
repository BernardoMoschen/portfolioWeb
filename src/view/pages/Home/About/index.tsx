import PreferredStack from './components/PreferredStack';
import KnownTools from './components/KnownTools';
import ProgressText from '../../../components/ProgressText';
import { FallingDivs } from '../../../components/FallingDivs';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className='flex flex-col gap-8'>
      <div className='text-start text-4xl text-white'>About</div>
      <div>
        <motion.p className='text-2xl text-white w-3/4'>
          <ProgressText>
            Software engineer and full-stack developer. I have developed a wide
            range of system management solutions and web applications using
            various programming languages for small business and large
            organizations.
          </ProgressText>
        </motion.p>
      </div>
      <div className='flex flex-row gap-4 justify-between'>
        <PreferredStack />
        <KnownTools />
      </div>
      <div>
        <FallingDivs />
      </div>
    </div>
  );
}
