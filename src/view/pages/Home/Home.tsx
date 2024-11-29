import { Icon } from '@/view/components';
import { AnimatePresence, motion } from 'framer-motion';
import { FC, useState } from 'react';

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

export const Hero: FC = () => {
  const [selectedBrief, setSelectedBrief] = useState(briefList[0]);

  return (
    <section className='flex flex-col relative min-h-[90%] justify-between'>
      <div className='flex flex-col gap-y-4'>
        <ul className='flex flex-row gap-4 select-none relative list-none'>
          {briefList.map((brief) => (
            <li
              key={brief.audience}
              onClick={() => setSelectedBrief(brief)}
              className={`relative cursor-pointer hover:opacity-100 ${
                selectedBrief === brief ? ['opacity-100 bold'] : 'opacity-75'
              }`}
            >
              {`${brief.audience}`}
              {brief === selectedBrief ? (
                <motion.div
                  className='absolute bottom-[-1px] left-0 right-0 h-[1px] bg-white '
                  layoutId='underline'
                />
              ) : null}
            </li>
          ))}
        </ul>
        <div>
          <AnimatePresence mode='wait'>
            <motion.div
              key={selectedBrief ? selectedBrief.audience : 'empty'}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className='text-4xl text-start h-full w-full tracking-tights'
            >
              {selectedBrief ? selectedBrief.brief : ''}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <CTASection />
    </section>
  );
};

const CTASection: FC = () => (
  <section className='flex flex-row justify-start mt-4 p-2'>
    <motion.div className='' initial='hidden' animate='visible'>
      <div className='gap-4 flex flex-col'>
        <div className='gap-x-4 flex'>
          <button className='bg-tron-linear text-white border-2 py-1 px-4 rounded-[20px]  '>
            Contact me
          </button>
          <button className='bg-tron-linear text-white border-2 py-1 px-4 rounded-[20px]  '>
            More about me
          </button>
        </div>
        <div className='flex flex-row gap-x-2 items-center'>
          <p className='pr-2'>Find me at</p>
          <a
            href='https://github.com/BernardoMoschen'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-tron-linear p-1 rounded-lg'
          >
            <Icon className='h-6 w-6' icon='Github' />
          </a>
          <a
            href='https://github.com/BernardoMoschen'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-tron-linear p-1 rounded-lg'
          >
            <Icon className='h-6 w-6 text-white' icon='LinkedIn' />
          </a>
        </div>
      </div>
    </motion.div>
  </section>
);


export const About = () => {
  const a = 'a'
  return (
    <div>Home</div>
  )
}


export const Home: FC = () => (
  <>
    <Hero />
    {/* <CTASection /> */}
  </>
);
