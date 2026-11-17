import { PixiComponent, useApp } from '@pixi/react';
import { Viewport } from 'pixi-viewport';

export const MapViewport = PixiComponent('Viewport', {
  create: (props) => {
    const viewport = new Viewport({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      worldWidth: 3000, // Total width of your mountain map
      worldHeight: 2000, // Total height
      events: props.app.renderer.events,
    });

    // Enable free-exploration mechanics
    viewport
      .drag()
      .pinch()
      .wheel()
      .decelerate()
      .clampZoom({ minWidth: 800, maxWidth: 4000 });

    return viewport;
  },
  applyProps: (viewport, oldProps, newProps) => {
    // If a user clicks a "Next Checkpoint" button, animate the camera to those coordinates
    if (newProps.focusPoint && newProps.focusPoint !== oldProps.focusPoint) {
      viewport.animate({
        position: newProps.focusPoint,
        scale: 1.5,
        time: 1000,
        ease: 'easeInOutSine'
      });
    }
  }
});