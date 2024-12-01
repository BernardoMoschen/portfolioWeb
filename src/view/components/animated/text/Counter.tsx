import { animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface Props {
  from: number;
  to: number;
}

export function Counter({ from, to }: Props) {
  const nodeRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 2,
      ease: 'circIn',
      onUpdate(value) {
        node!.textContent = value.toFixed(0);
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return <p ref={nodeRef} />;
}
