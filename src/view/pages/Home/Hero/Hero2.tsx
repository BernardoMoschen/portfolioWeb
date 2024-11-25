import { motion } from 'motion/react';
import PreferredStack from './components/PreferredStack';
import KnownTools from './components/KnownTools';
import ProgressText from '../../../components/ProgressText';

export default function Hero2() {
  return (
    <div className='flex flex-col gap-8'>
      <div className='text-start text-6xl'>About</div>
      <div>
        <motion.p className='text-3xl'>
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
    </div>
  );
}
