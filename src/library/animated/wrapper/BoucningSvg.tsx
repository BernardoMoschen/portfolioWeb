import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const getRandomPosition = (
  containerWidth: number,
  containerHeight: number
) => ({
  x: Math.random() * containerWidth,
  y: Math.random() * containerHeight,
});

export const BouncingSVGContainer: React.FC = () => {
  const containerWidth = 400; // Width of the container (change as needed)
  const containerHeight = 400; // Height of the container (change as needed)
  const [positions, setPositions] = useState<Array<{ x: number; y: number }>>(
    []
  );

  // Generate random positions for each SVG icon
  useEffect(() => {
    const initialPositions = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11].map(() =>
      getRandomPosition(containerWidth, containerHeight)
    );
    setPositions(initialPositions);
  }, []);

  // Random movement for each icon
  const moveIcon = (index: number) => {
    setPositions((prevPositions) => {
      const newPositions = [...prevPositions];
      const randomDirection = getRandomPosition(
        containerWidth,
        containerHeight
      );
      newPositions[index] = randomDirection;
      return newPositions;
    });
  };

  // Handle random movement at regular intervals
  useEffect(() => {
    const interval = setInterval(() => {
      positions.forEach((_, index) => moveIcon(index));
    }, 1000); // Change position every second

    return () => clearInterval(interval);
  }, [positions]);

  // Bouncing effect if icons are too close to each other
  const bounceOffEffect = (index: number) => {
    const icon = positions[index];
    const distanceThreshold = 50; // Minimum distance to trigger bounce
    for (let i = 0; i < positions.length; i++) {
      if (i !== index) {
        const otherIcon = positions[i];
        const distance = Math.sqrt(
          Math.pow(icon!.x - otherIcon!.x, 2) +
            Math.pow(icon!.y - otherIcon!.y, 2)
        );

        if (distance < distanceThreshold) {
          // Bounce away logic (e.g., swap positions or push away)
          moveIcon(index); // Recalculate position to prevent overlap
        }
      }
    }
  };

  // Apply the bounce-off effect
  useEffect(() => {
    positions.forEach((_, index) => bounceOffEffect(index));
  }, [positions]);

  return (
    <motion.div
      style={{
        position: 'relative',
        width: containerWidth,
        height: containerHeight,
        border: '1px solid #000',
        overflow: 'hidden',
      }}
    >
      {positions.map((pos, index) => (
        <motion.div
          key={index}
          initial={{ x: pos.x, y: pos.y }}
          animate={{ x: pos.x, y: pos.y }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 10,
            repeat: Infinity,
            repeatType: 'loop',
          }}
          style={{
            position: 'absolute',
            width: 50,
            height: 50,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <svg
            width='50'
            height='50'
            viewBox='0 0 50 50'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='25' cy='25' r='20' fill='blue' />
          </svg>
        </motion.div>
      ))}
    </motion.div>
  );
};
