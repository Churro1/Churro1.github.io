import { useApplication, extend } from '@pixi/react';
import { Viewport } from 'pixi-viewport';
import { forwardRef, useEffect, useRef } from 'react';

// Register the Viewport class with Pixi React
extend({ Viewport });

export const MapViewport = forwardRef(({ focusPoint, children }, ref) => {
  const app = useApp();
  const viewportRef = useRef(null);

  // Initialize the camera interactions once on mount
  useEffect(() => {
    const viewport = viewportRef.current;
    if (viewport) {
      viewport
        .drag()
        .pinch()
        .wheel()
        .decelerate()
        .clampZoom({ minWidth: 800, maxWidth: 4000 });
    }
  }, []);

  // Handle camera panning when the focus point changes
  useEffect(() => {
    if (focusPoint && viewportRef.current) {
      viewportRef.current.animate({
        position: focusPoint,
        scale: 1.5,
        time: 1000,
        ease: 'easeInOutSine'
      });
    }
  }, [focusPoint]);

  return (
    <viewport
      ref={viewportRef}
      screenWidth={window.innerWidth}
      screenHeight={window.innerHeight}
      worldWidth={3000}
      worldHeight={2000}
      events={app.renderer.events}
    >
      {children}
    </viewport>
  );
});