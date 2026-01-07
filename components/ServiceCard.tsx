import React from 'react';
import { ServicePackage } from '../types';

// New component to render spread diagrams based on iconType
const SpreadDiagram: React.FC<{ type: string; className?: string }> = ({ type, className }) => {
  // Common card style props
  const strokeColor = "currentColor";
  const strokeWidth = "1.5";
  const fillColor = "transparent"; // Or 'rgba(255,255,255,0.2)' if filled

  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {type === 'cards' && (
        // "No Spread / Choice" - Revised to 1 top centered, 3 bottom row
        // Shifted down by 8px to vertically center (Center of bbox was ~24.5, target is 32)
        <g stroke={strokeColor} strokeWidth={strokeWidth} fill={fillColor} transform="translate(0, 8)">
           {/* Top Card (4) */}
           <rect x="27" y="5" width="10" height="16" rx="1.5" />
           {/* Bottom Row (1, 2, 3) */}
           <rect x="11" y="28" width="10" height="16" rx="1.5" />
           <rect x="27" y="28" width="10" height="16" rx="1.5" />
           <rect x="43" y="28" width="10" height="16" rx="1.5" />
           
           {/* Connecting lines optional, keeping clean for now */}
        </g>
      )}

      {type === 'star' && (
        // "Development" - Revised to Tree structure (2 top, 2 mid vertical, 2 bot, 1 side)
        // Shifted slightly right to center optically
        <g stroke={strokeColor} strokeWidth={strokeWidth} fill={fillColor} transform="translate(4, 0)">
          {/* Top Row: 1, 2 */}
          <rect x="23" y="4" width="8" height="12" rx="1" />
          <rect x="33" y="4" width="8" height="12" rx="1" />
          
          {/* Middle Vertical: 3, 4 */}
          <rect x="28" y="19" width="8" height="12" rx="1" />
          <rect x="28" y="34" width="8" height="12" rx="1" />
          
          {/* Bottom Row: 5, 6 */}
          <rect x="23" y="49" width="8" height="12" rx="1" />
          <rect x="33" y="49" width="8" height="12" rx="1" />

          {/* Side Card: Significator? */}
          <rect x="14" y="26" width="8" height="12" rx="1" />
        </g>
      )}

      {type === 'compass' && (
        // "Celtic Cross" - 10 cards layout
        // Added transform to shift right by 4px to prevent left stroke clipping and center the whole spread
        <g stroke={strokeColor} strokeWidth="1" fill={fillColor} transform="translate(4, 0)">
          {/* The Cross (Left) */}
          <g transform="translate(16, 28)">
             <rect x="0" y="0" width="8" height="12" rx="1" /> {/* Base */}
             <rect x="-2" y="2" width="12" height="8" rx="1" fill="none" /> {/* Cross */}
          </g>
          {/* Surrounding 4 */}
          <rect x="16" y="8" width="8" height="12" rx="1" /> {/* Top */}
          <rect x="16" y="48" width="8" height="12" rx="1" /> {/* Bottom */}
          <rect x="0" y="28" width="8" height="12" rx="1" /> {/* Left */}
          <rect x="32" y="28" width="8" height="12" rx="1" /> {/* Right */}
          
          {/* The Staff (Right) */}
          <g transform="translate(48, 8)">
            <rect x="0" y="36" width="8" height="12" rx="1" />
            <rect x="0" y="24" width="8" height="12" rx="1" />
            <rect x="0" y="12" width="8" height="12" rx="1" />
            <rect x="0" y="0" width="8" height="12" rx="1" />
          </g>
        </g>
      )}

      {type === 'lightbulb' && (
        // "Simple Guide" - Revised to 3 cards Fan (Simple spread)
        // Shifted up by 3px to fix "biased downwards" look
        <g stroke={strokeColor} strokeWidth={strokeWidth} fill={fillColor} transform="translate(0, -3)">
          <rect x="8" y="24" width="14" height="24" rx="2" transform="rotate(-15 15 36)" />
          <rect x="25" y="20" width="14" height="24" rx="2" />
          <rect x="42" y="24" width="14" height="24" rx="2" transform="rotate(15 49 36)" />
        </g>
      )}
    </svg>
  );
};

export const ServiceCard: React.FC<{ service: ServicePackage; index: number }> = ({ service, index }) => {
  // Logic for dynamic styling
  const isLite = service.isLite;

  // Background and Border logic
  let containerClasses = "";
  if (isLite) {
    // Lite: muted background, dashed border, no shadow
    containerClasses = "bg-parchment/40 border border-dashed border-stone-400/30 shadow-none hover:bg-parchment/60";
  } else {
    // Standard (Ultimate Overview): regular cream bg, green border
    containerClasses = "bg-mystic-cream border border-moss-green/20 shadow-sm hover:shadow-lg";
  }

  // Text Color Logic
  const titleColor = isLite ? "text-stone-600" : "text-forest-dark";
  const priceColor = isLite ? "text-stone-500" : "text-terracotta";
  const iconColor = isLite ? "text-stone-400" : "text-forest-dark group-hover:text-terracotta";
  const descriptionColor = isLite ? "text-ink-black/60" : "text-ink-black/90";
  const metaColor = isLite ? "text-stone-400" : "text-moss-green";

  return (
    <div className="group relative h-full font-sans">
      {/* Background Decor - Disable for lite to keep it clean */}
      {!isLite && (
        <div className="absolute -inset-0.5 bg-gradient-to-br from-antique-gold/20 to-transparent rounded-lg blur-[1px] opacity-0 group-hover:opacity-100 transition duration-700"></div>
      )}
      
      <div className={`relative h-full p-5 rounded-sm transition-all duration-500 flex flex-col items-center text-center overflow-hidden ${containerClasses}`}>
        
        {/* Top Decoration - Hide for lite */}
        <div className={`w-full flex justify-center mb-3 ${isLite ? 'opacity-10' : 'opacity-30'}`}>
          <div className="w-1/2 h-[1px] bg-gradient-to-r from-transparent via-moss-green to-transparent"></div>
        </div>

        {/* Spread Diagram Area */}
        <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
          {/* Rotating frame (Restored for Lite, adapted color) */}
          <div className={`absolute inset-0 border rounded-full transform rotate-45 group-hover:rotate-180 transition-transform duration-1000 ${isLite ? 'border-stone-400/20' : 'border-antique-gold/20'}`}></div>
          
          {/* The Visual Diagram */}
          <SpreadDiagram 
            type={service.iconType} 
            className={`w-12 h-12 transition-colors duration-300 relative z-10 ${iconColor} ${isLite ? 'opacity-80' : ''}`}
          />
        </div>

        {/* Content */}
        <h3 className={`font-serif text-lg font-bold mb-1 leading-tight tracking-wide ${titleColor}`}>
          {service.title}
        </h3>
        
        <span className={`text-xs font-serif italic mb-3 block font-medium ${metaColor}`}>
          ✦ {service.cardCount} ✦
        </span>

        <p className={`font-sans text-sm leading-relaxed mb-6 flex-grow text-balance font-normal ${descriptionColor}`}>
          {service.description}
        </p>

        {/* Price Tag */}
        <div className={`relative mt-auto w-full pt-4 border-t ${isLite ? 'border-stone-300/30' : 'border-moss-green/10'}`}>
          <span className={`font-serif text-xl font-bold ${priceColor} ${isLite ? 'text-lg' : ''}`}>
            {service.price}
          </span>
          {/* Card number identifier */}
          <span className={`absolute bottom-0 right-0 text-[10px] font-sans font-medium ${isLite ? 'text-stone-300' : 'text-moss-green/50'}`}>
            NO. {index + 1}
          </span>
        </div>

        {/* Corner Accents - Hide for Lite */}
        {!isLite && (
          <>
            <div className="absolute top-1 left-1 w-2 h-2 border-l border-t border-moss-green/30"></div>
            <div className="absolute top-1 right-1 w-2 h-2 border-r border-t border-moss-green/30"></div>
            <div className="absolute bottom-1 left-1 w-2 h-2 border-l border-b border-moss-green/30"></div>
            <div className="absolute bottom-1 right-1 w-2 h-2 border-r border-b border-moss-green/30"></div>
          </>
        )}
      </div>
    </div>
  );
};