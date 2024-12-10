import { AuroraBackground, Icon, ProgressText } from '@/view/components';
import SectionTitle from '@/view/components/headings/SectionTitle';
import { MaskedContainer } from '@/view/components/MaskedContainer';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { FC, useRef, useState } from 'react';

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

export const Hero: FC = () => (
  <>
    <AuroraBackground
      colorSet={['#0a0f14', 'rgba(0, 61, 76)', '#008B8B', '#1A1A1A']}
    >
      <header className='w-screen h-screen relative overflow-hidden backdrop-blur-3xl'>
        <div className=' flex h-full flex-col items-center justify-center'>
          <MaskedContainer className='flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center text-8xl uppercase tracking-tighter  w-[100.5%]'>
              <h6 className='text-sm uppercase tracking-wider m-2 text-tron-primary font-bold'>
                Bernardo Moschen
              </h6>
              <div>Debugging</div>
              <div className='text-tron-secondary font-Protest'>nightmares</div>
              <div>since</div>
              <div>2020</div>
            </div>
          </MaskedContainer>
          <div className='flex flex-col items-center text-8xl uppercase tracking-tighter  text-tron-beige'>
            <h6 className='text-sm uppercase tracking-wider m-2 text-tron-primary font-bold'>
              Bernardo Moschen
            </h6>
            <div>Empowering</div>
            <div className='text-tron-secondary font-Protest'>dreams</div>
            <div>since</div>
            <div>2020</div>
          </div>
        </div>
      </header>
    </AuroraBackground>
  </>
);

const CTASection: FC = () => (
  <section className='flex flex-row justify-start mt-4 p-2 z-20'>
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
            href='https://www.linkedin.com/in/bernardomoschen/'
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
  const [selectedBrief, setSelectedBrief] = useState(briefList[0]);
  return (
    <section className='h-[100vh] grid grid-rows-6'>
      <div className='flex flex-col gap-y-6 col-start-2 row-start-2'>
        <SectionTitle>About me</SectionTitle>
        <div>
          <ul className='flex flex-row gap-4 select-none relative list-none'>
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
                className='text-4xl text-start h-full w-full tracking-tight text-tron-beige'
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

export const Work: FC = () => (
  <>
    <section className='h-[100vh] grid grid-rows-6'>
      <div className='flex flex-col gap-y-6 mx-auto'>
        <SectionTitle>What i do</SectionTitle>
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

export const Home: FC = () => {
  const headline = 'Dream it. Build it. Scale it.';
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['center center', 'center end'],
  });
  console.log(headline, scrollYProgress);

  return (
    <>
      <Hero />
      {/* <About /> */}
      {/* <Work /> */}
    </>
  );
};
