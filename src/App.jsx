import { useState } from 'react';
import { Stage, Container, Text } from '@pixi/react';
import { MapViewport } from './components/MapViewport';
import Trail from './components/Trail';
import trailData from './data/trail-route.json';
import * as PIXI from 'pixi.js';

export default function App() {
  const [activeCameraTarget, setActiveCameraTarget] = useState(null);

  // Example text style for your checkpoints
  const checkpointStyle = new PIXI.TextStyle({
    fontFamily: 'Inter, sans-serif',
    fontSize: 24,
    fill: 0xf8fafc,
    fontWeight: 'bold',
  });

  return (
    <div className="w-screen h-screen bg-slate-900 overflow-hidden">
      <Stage 
        width={window.innerWidth} 
        height={window.innerHeight} 
        options={{ backgroundColor: 0x0f172a, antialias: true }}
      >
        {/* Pass the app instance to the viewport so it can hook into interaction events */}
        <MapViewport 
          app={PIXI.Application} 
          focusPoint={activeCameraTarget}
        >
          <Container>
            <Trail />
            
            {trailData.map((project) => (
              <Text 
                key={project.id}
                text={`📍 ${project.title}`}
                x={project.checkpointData.x}
                y={project.checkpointData.y}
                style={checkpointStyle}
                anchor={0.5}
                interactive={true}
                cursor="pointer"
                pointerdown={() => {
                  console.log(`Opened terminal/modal for ${project.title}`);
                }}
              />
            ))}
          </Container>
        </MapViewport>
      </Stage>

      {/* Standard React HTML Overlay for UI Controls */}
      <div className="fixed bottom-8 right-8 z-50 flex gap-4">
        <button 
          className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-full shadow-lg"
          onClick={() => setActiveCameraTarget({ 
            x: trailData[0].checkpointData.x, 
            y: trailData[0].checkpointData.y 
          })}
        >
          Hike to Start
        </button>
      </div>
    </div>
  );
}