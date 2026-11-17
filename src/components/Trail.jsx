import { Graphics } from '@pixi/react';
import { useCallback } from 'react';
import trailData from '../data/trail-route.json';

export default function Trail() {
  const drawPath = useCallback((g) => {
    g.clear();
    g.lineStyle(4, 0x94a3b8, 1); // Tailwind slate-400 equivalent
    
    trailData.forEach((project, index) => {
      const { x, y } = project.checkpointData;
      if (index === 0) {
        g.moveTo(x, y);
      } else {
        // Use bezier curves here later for a natural winding path
        g.lineTo(x, y); 
      }
    });
  }, []);

  return <Graphics draw={drawPath} />;
}