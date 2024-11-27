import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  className?: string;
  style?: Record<string, string>;
}

export const Container = ({ children, className }: Props) => (
  <div
    className={'bg-accent-black border-2 border-accent-surface rounded-[30px] h-fit w-fit'.concat(
      ` ${className}`
    )}
  >
    {children}
  </div>
);
