import { FC } from 'react';
import './bubbleText.css';

interface Props {
  children: string;
  className?: string;
}

export const BubbleText: FC<Props> = ({ children, className }) => (
  <h2 className={`text-center text-5xl font-thin ${className}`}>
    {children.split('').map((child, idx) => (
      <span className={'hoverText'} key={idx}>
        {child}
      </span>
    ))}
  </h2>
);
