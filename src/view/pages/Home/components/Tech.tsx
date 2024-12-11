import { ProgressText } from '@/view/components';
import SectionTitle from '@/view/components/headings/SectionTitle';
import { FC } from 'react';

export const Tech: FC = () => (
  <>
    <section className='h-[100vh] grid grid-rows-6'>
      <div className='flex flex-col gap-y-6 mx-auto'>
        <SectionTitle>My Stack</SectionTitle>
        <div>
          <ul className='flex flex-col gap-4 select-none list-none w-full'>
            <li className='border-y-[1px] border-tron-lighterGray'>
              <ProgressText className='text-8xl tracking-tighter'>
                FRONTEND
              </ProgressText>
              <p>
                I write JavaScript that works (after a few Stack Overflow
                dives).
              </p>
            </li>
            <li>
              <ProgressText className='text-8xl tracking-tighter'>
                BACKEND
              </ProgressText>
              <p>I turn APIs into magic—or at least functioning endpoints.</p>
            </li>
            <li className='border-y-[1px] border-tron-lighterGray'>
              <ProgressText className='text-8xl tracking-tighter'>
                TESTING/BUG FIXING
              </ProgressText>
              <p>I fix bugs by finding the ones I created.</p>
            </li>
            <li>
              <ProgressText className='text-8xl tracking-tighter'>
                PERFORMANCE
              </ProgressText>
              <p>I make your site fast... eventually.</p>
            </li>
            <li className='border-y-[1px] border-tron-lighterGray'>
              <ProgressText className='text-8xl tracking-tighter'>
                DEPLOYMENT
              </ProgressText>
              <p>I send code to production and pray nothing breaks.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </>
);
