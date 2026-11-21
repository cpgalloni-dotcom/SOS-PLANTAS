import React, { useState } from 'react';
import { Sprout, Bug, Droplets, AlertTriangle, Leaf } from 'lucide-react';

export default function PlantImage({ src, alt, category, className = '' }) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    const isWater = category?.toLowerCase().includes('riego') || category?.toLowerCase().includes('hídrico');
    const isBug = category?.toLowerCase().includes('plaga');
    const isFungus = category?.toLowerCase().includes('hongo');

    return (
      <div className={`flex flex-col items-center justify-center bg-gradient-to-br from-emerald-100 to-green-200 text-agro-forest ${className}`}>
        {isWater ? (
          <Droplets className="w-8 h-8 text-blue-600 animate-pulse" />
        ) : isBug ? (
          <Bug className="w-8 h-8 text-red-600" />
        ) : isFungus ? (
          <AlertTriangle className="w-8 h-8 text-amber-600" />
        ) : (
          <Leaf className="w-8 h-8 text-agro-forest" />
        )}
        <span className="text-[9px] font-extrabold uppercase mt-1 tracking-tight text-agro-forest/80 px-1 text-center line-clamp-1">
          {alt || 'Planta'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      className={className}
      loading="lazy"
    />
  );
}
