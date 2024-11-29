import { FC } from 'react';
import styles from './bubble.module.css';

interface Props {
  children: string;
}

export const BubbleText: FC<Props> = ({ children }) => (
  <h2 className='text-center text-5xl font-thin text-indigo-300'>
    {children.split('').map((child, idx) => (
      <span className={styles.hoverText} key={idx}>
        {child}
      </span>
    ))}
  </h2>
);
