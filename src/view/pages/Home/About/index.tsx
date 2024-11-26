import PreferredStack from './components/PreferredStack';
import KnownTools from './components/KnownTools';
import {
  ProgressText,
  ImageRevealSquare,
  StaggeredGrowingText,
} from '@/view/components';
import { motion } from 'framer-motion';
import Title from '@/view/components/Title';
import myImage from '@/assets/myself_linkedin_cropped.jpeg';

export default function About() {
  return (
    <div className='flex flex-col gap-8  bg-background-dark'>
      <div className='flex flex-row gap-4'>
        <div className=' w-2/6 bg-gradient-to-tr from-amber-50 to-amber-900  flex flex-col justify-center items-center'>
          <ImageRevealSquare
            imageUrl={myImage}
            alt='Bernardo Moschen'
            className='h-1/2 w-auto flex justify-center '
          />
          <div className='flex align-bottom'>
            <span>Bernardo Moschen</span>
          </div>
        </div>
        <motion.div className='text-2xl w-4/6 p-4'>
          <div className='border-b-2 border-white py-2 '>
            <Title>[About]</Title>
          </div>
          <div className='text-primary-light'>
            <ProgressText>
              Software engineer and full-stack developer. I have developed a
              wide range of system management solutions and web applications
              using various programming languages for small business and large
              organizations.
            </ProgressText>
            <StaggeredGrowingText className='text-8xl'>
              A creative developer
            </StaggeredGrowingText>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
