import { createContext, useContext } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

export const MousePositionContext = createContext<MousePosition | undefined>(
  undefined
);

export const useMousePositionContext = () => {
  const context = useContext(MousePositionContext);
  if (!context) {
    throw new Error(
      'useMousePosition must be used within a MousePositionProvider'
    );
  }
  return context;
};
