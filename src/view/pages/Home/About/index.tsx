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
    <div className=' h-screen  bg-black'>
      <div className='h-full flex flex-row gap-4'>
        <div className=' w-2/6  flex flex-col justify-center items-center bg-black'>
          {/*  bg-gradient-to-tr from-amber-50 to-amber-900  */}
          <ImageRevealSquare
            imageUrl={myImage}
            alt='Bernardo Moschen'
            className='h-fit w-auto flex justify-center '
          />
          <div className='flex align-bottom'>
            <span>Bernardo Moschen</span>
          </div>
        </div>
        <motion.div className='text-xl w-4/6 p-4 flex flex-col justify-between  py-8'>
          <div>
            <div className='border-b-2 border-white py-2 uppercase'>
              <Title>[About]</Title>
            </div>
            <div className='text-primary-light'>
              <ProgressText>
                Software engineer and full-stack developer. I have developed a
                wide range of system management solutions and web applications
                using various programming languages for small business and large
                organizations.
              </ProgressText>
            </div>
          </div>
          <StaggeredGrowingText className='text-6xl text-white'>
            A creative developer
          </StaggeredGrowingText>
        </motion.div>
      </div>
    </div>
  );
}
