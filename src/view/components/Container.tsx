import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => (
  <div className='bg-accent-black border-2 border-accent-surface h-fit w-fit'>
    {children}
  </div>
);
