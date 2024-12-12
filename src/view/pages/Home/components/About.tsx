import { ProgressText } from '@/view/components';
import SectionTitle from '@/view/components/headings/SectionTitle';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

interface AudienceBrief {
  audience: string;
  brief: string;
}
const briefList: AudienceBrief[] = [
  {
    audience: 'For anyone',
    brief:
      'I design and develop scalable, user-focused applications that solve real-world problems. Whether it’s a sleek web platform or a complex backend system, I bring ideas to life with precision and care.',
  },
  {
    audience: 'Recruiters',
    brief:
      'I’m a full-stack developer with a proven track record in building reliable, scalable solutions. With expertise in modern technologies and a commitment to clean code, I deliver results that drive business success."',
  },
  {
    audience: 'Product Managers',
    brief:
      'I bring end-to-end technical expertise to support your product journey, from discovery to delivery. I’ll collaborate closely to align technical execution with your product vision, maximizing impact at every stage.',
  },
  {
    audience: 'Engineers',
    brief:
      'I’m a developer who values efficiency, maintainability, and collaboration. I write clean, scalable code, optimize performance, and contribute to a strong engineering culture by sharing knowledge and solving challenges together.',
  },
];

export const About = () => {
  const [selectedBrief, setSelectedBrief] = useState(briefList[0]);
  return (
    <section className='h-screen grid grid-cols-12 gap-5 bg-tron-black'>
      <div className='flex flex-col gap-y-6 col-start-2 row-start-2 col-span-full '>
        <SectionTitle>About me</SectionTitle>
        <div>
          <ul className='flex flex-row gap-4 select-none list-none content-baseline'>
            {briefList.map((brief) => (
              <li
                key={brief.audience}
                onClick={() => setSelectedBrief(brief)}
                className={`relative cursor-pointer hover:opacity-100 text-tron-${
                  selectedBrief == brief ? 'primary' : 'secondary'
                } ${
                  selectedBrief === brief
                    ? [
                        'opacity-flex flex-col justify-center my-auto 100 font-semibold ',
                      ]
                    : 'opacity-75'
                }`}
              >
                {`${brief.audience}`}
                {brief === selectedBrief ? (
                  <motion.div
                    className='absolute bottom-[-1px] left-0 right-0 h-[1px] bg-tron-primary '
                    layoutId='underline'
                  />
                ) : null}
              </li>
            ))}
          </ul>
          <div className='min-h-full max-w-4xl'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={selectedBrief ? selectedBrief.audience : 'empty'}
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -15, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className='text-4xl text-start h-full w-full tracking-tight text-tron-beige '
              >
                <ProgressText>{selectedBrief!.brief}</ProgressText>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
