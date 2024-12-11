import { useMaskedContainerContext } from '@/context/maskedContainer/MaskedContainerContext';
import { FC } from 'react';

export const Hero: FC = () => {
  const { setUnmask } = useMaskedContainerContext();
  return (
    <>
      {/* <AuroraBackground
      colorSet={['#0a0f14', 'rgba(0, 61, 76)', '#008B8B', '#1A1A1A']}
    > */}
      <header className='w-screen h-screen relative overflow-hidden backdrop-blur-3xl'>
        <div className=' flex h-full flex-col items-center justify-center'>
          <div
            onMouseOver={() => {
              setUnmask(true);
            }}
            onMouseLeave={() => {
              setUnmask(false);
            }}
            className='flex flex-col items-center text-8xl uppercase tracking-tighter  text-tron-beige'
          >
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
      {/* </AuroraBackground> */}
    </>
  );
};
