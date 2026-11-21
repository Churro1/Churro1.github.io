import { extend } from '@pixi/react';
import { Graphics } from 'pixi.js';
import { useCallback } from 'react';
import trailData from '../data/trail-route.json';

// 1. Register the Graphics class with Pixi React
extend({ Graphics });

export default function Trail() {
  const drawPath = useCallback((g) => {
    g.clear();
    
    // Note: PixiJS v8 updated the drawing API. 
    // If g.lineStyle throws an error, use g.stroke({ width: 4, color: 0x94a3b8 }) instead.
    g.lineStyle(4, 0x94a3b8, 1); 
    
    trailData.forEach((project, index) => {
      const { x, y } = project.checkpointData;
      if (index === 0) {
        g.moveTo(x, y);
      } else {
        g.lineTo(x, y); 
      }
    });
  }, []);

  // 2. Render using the lowercase JSX element
  return <graphics draw={drawPath} />;
}