import React, { useMemo, memo } from 'react';
import { create, all } from 'mathjs';
import './GradualBlur.css';

const math = create(all);

/**
 * GradualBlur Component
 * Creates a smooth blur effect that gradually increases from top to bottom
 * Perfect for footer sections or decorative elements
 */
const GradualBlur = memo(({ 
  layers = 10, 
  maxBlur = 20, 
  height = '200px',
  className = '',
  children 
}) => {
  {/* Generate blur layers dynamically */}
  const blurLayers = useMemo(() => {
    const layersArray = [];
    
    for (let i = 0; i < layers; i++) {
      {/* Calculate blur intensity using mathematical progression */}
      const blurIntensity = math.evaluate(`${maxBlur} * (${i} / ${layers - 1})^2`);
      
      {/* Calculate opacity for smoother gradient */}
      const opacity = math.evaluate(`0.6 * (${i} / ${layers - 1})`);
      
      layersArray.push({
        id: i,
        blur: blurIntensity.toFixed(2),
        opacity: opacity.toFixed(2),
        zIndex: layers - i
      });
    }
    
    return layersArray;
  }, [layers, maxBlur]);

  return (
    <div 
      className={`gradual-blur-container ${className}`}
      style={{ height }}
    >
      {/* Render all blur layers */}
      {blurLayers.map((layer) => (
        <div
          key={layer.id}
          className="blur-layer"
          style={{
            filter: `blur(${layer.blur}px)`,
            opacity: layer.opacity,
            zIndex: layer.zIndex
          }}
        />
      ))}
      
      {/* Content overlay */}
      {children && (
        <div className="blur-content">
          {children}
        </div>
      )}
    </div>
  );
});

GradualBlur.displayName = 'GradualBlur';

export default GradualBlur;
