import { ProgressText } from '@/view/components';
import SectionTitle from '@/view/components/headings/SectionTitle';
import { FC } from 'react';

export const Work: FC = () => (
  <>
    <section className='h-screen place-content-center px-6'>
      <div className='flex flex-col gap-y-6 mx-auto'>
        <SectionTitle>What i do</SectionTitle>
        <div>
          <ul className='flex flex-col gap-4 select-none list-none w-full text-tron-beige'>
            <li className='border-y-[1px] border-tron-lighterGray flex flex-col md:flex-row items-baseline'>
              <ProgressText className='text-5xl md:text-7xl tracking-tighter'>
                FRONTEND
              </ProgressText>
              <span className='text-sm tracking-tighter'>
                I write JavaScript that works (after a few Stack Overflow
                dives).
              </span>
            </li>
            <li className='flex items-baseline flex-col md:flex-row'>
              <ProgressText className='text-5xl md:text-7xl tracking-tighter'>
                BACKEND
              </ProgressText>
              <span className='text-sm tracking-tighter'>
                I turn APIs into magic—or at least functioning endpoints.
              </span>
            </li>
            <li className='border-y-[1px] border-tron-lighterGray flex flex-col md:flex-row items-baseline'>
              <ProgressText className='text-5xl md:text-7xl tracking-tighter'>
                TESTING
              </ProgressText>
              <span className='text-sm tracking-tighter'>
                I fix bugs by finding the ones I created.
              </span>
            </li>
            <li className='flex flex-col md:flex-row items-baseline'>
              <ProgressText className='text-5xl md:text-7xl tracking-tighter'>
                PERFORMANCE
              </ProgressText>
              <span className='text-sm tracking-tighter'>
                I make your site fast... eventually.
              </span>
            </li>
            <li className='border-y-[1px] border-tron-lighterGray flex flex-col md:flex-row items-baseline'>
              <ProgressText className='text-5xl md:text-7xl tracking-tighter'>
                DEPLOYMENT
              </ProgressText>
              <span className='text-sm tracking-tighter'>
                I send code to production and pray nothing breaks.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </>
);
