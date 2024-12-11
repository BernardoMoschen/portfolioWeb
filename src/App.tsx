import { ReactLenis } from 'lenis/react';
import { MousePositionProvider } from './context/mousePosition/MousePositionProvider';
import { Router } from './router';
import { MaskedContainerContext } from './context/maskedContainer/MaskedContainerContext';
import { useState } from 'react';

export function App() {
  const [unmask, setUnmask] = useState(false);
  const maskLayerValue = { unmask, setUnmask };

  return (
    <ReactLenis root>
      <MaskedContainerContext.Provider value={maskLayerValue}>
        <MousePositionProvider>
          <Router />;
        </MousePositionProvider>
      </MaskedContainerContext.Provider>
    </ReactLenis>
  );
}
