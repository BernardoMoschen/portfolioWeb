import { FC } from 'react';
import styles from './bubble.module.css';

interface Props {
  children: string;
  bubbleColor: string;
}

export const BubbleText: FC<Props> = ({ children, bubbleColor }) => (
  <h2 className={`text-center text-5xl font-thin text-[${bubbleColor}]`}>
    {children.split('').map((child, idx) => (
      <span className={styles.hoverText} key={idx}>
        {child}
      </span>
    ))}
  </h2>
);
