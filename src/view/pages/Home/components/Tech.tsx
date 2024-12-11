import { TiltCard } from '@/library/animated';
import SectionTitle from '@/view/components/headings/SectionTitle';
import React, { FC } from 'react';

const preferredStack = [
  'React.js',
  'Node.js',
  'Typescript',
  'Jest',
  'Nest.js',
  'Next.js',
  'MySQL',
  'PostgreSQL',
];

export const Tech: FC = () => (
  <>
    <section className='h-full grid grid-cols-12 gap-5'>
      <div className='flex flex-col gap-y-6 col-start-2 col-span-full '>
        <SectionTitle>How do i do it</SectionTitle>
        <div class='grid  grid-cols-3 gap-y-4 place-items-start '>
          {preferredStack.map((tech, i) => (
            <TiltCard>{tech}</TiltCard>
          ))}
        </div>
      </div>
    </section>
  </>
);
