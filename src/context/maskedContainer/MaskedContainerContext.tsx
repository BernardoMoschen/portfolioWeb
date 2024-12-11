import { createContext, useContext } from 'react';

interface MaskedContainer {
  unmask: boolean;
  setUnmask: (val: boolean) => void;
}

export const MaskedContainerContext = createContext<MaskedContainer>({
  unmask: false,
  setUnmask: () => {},
});

export const useMaskedContainerContext = () => {
  const context = useContext(MaskedContainerContext);
  if (!context) {
    throw new Error(
      'useMaskedContainer must be used within a MaskedContainerProvider'
    );
  }
  return context;
};
