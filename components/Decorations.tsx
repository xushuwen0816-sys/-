import React from 'react';

export const Divider: React.FC<{ className?: string }> = ({ className = "" }) => (
  // Reduced py-4 to py-2 for tighter spacing
  <div className={`flex items-center justify-center opacity-60 py-2 ${className}`}>
    <div className="h-[1px] bg-moss-green w-1/6 opacity-50"></div>
    <span className="mx-2 text-moss-green">✦</span>
    <div className="h-[1px] bg-moss-green w-1/3"></div>
    <div className="mx-4 text-antique-gold text-2xl transform rotate-45">❖</div>
    <div className="h-[1px] bg-moss-green w-1/3"></div>
    <span className="mx-2 text-moss-green">✦</span>
    <div className="h-[1px] bg-moss-green w-1/6 opacity-50"></div>
  </div>
);

export const OrnateCorner: React.FC<{ position: 'tl' | 'tr' | 'bl' | 'br'; className?: string }> = ({ position, className }) => {
  const rotation = {
    tl: 'rotate-0',
    tr: 'scale-x-[-1]',
    br: 'rotate-180',
    bl: 'scale-y-[-1]'
  }[position];

  return (
    <div className={`absolute w-24 h-24 sm:w-32 sm:h-32 pointer-events-none z-10 text-antique-gold opacity-80 ${rotation} ${position.includes('t') ? 'top-2' : 'bottom-2'} ${position.includes('l') ? 'left-2' : 'right-2'} ${className}`}>
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="w-full h-full">
         <path d="M10,10 L30,10 Q50,10 50,30" strokeWidth="1.5" />
         <path d="M10,10 L10,30 Q10,50 30,50" strokeWidth="1.5" />
         <path d="M15,15 L35,15" strokeWidth="0.5" opacity="0.6"/>
         <path d="M15,15 L15,35" strokeWidth="0.5" opacity="0.6"/>
         {/* Botanical Leaf Accent */}
         <path d="M10,10 Q25,25 40,10 Q25,25 10,40" fill="currentColor" stroke="none" opacity="0.4" />
      </svg>
    </div>
  );
};

export const StarSparkle: React.FC<{ className?: string; delay?: string }> = ({ className, delay = "0s" }) => (
  <svg 
    className={`animate-pulse ${className}`} 
    style={{ animationDelay: delay }}
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
  </svg>
);

export const MysticalEye: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5,30 Q25,5 50,5 Q75,5 95,30 Q75,55 50,55 Q25,55 5,30 Z" />
    <circle cx="50" cy="30" r="12" />
    <circle cx="50" cy="30" r="4" fill="currentColor" />
    <path d="M50,5 L50,15" />
    <path d="M50,55 L50,45" />
    <path d="M20,15 L25,20" />
    <path d="M80,15 L75,20" />
  </svg>
);

export const MoonPhase: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`flex items-center gap-1 ${className}`}>
    <div className="w-2 h-2 rounded-full border border-current opacity-40"></div>
    <div className="w-3 h-3 rounded-full border border-current opacity-70"></div>
    <div className="w-4 h-4 rounded-full bg-current"></div>
    <div className="w-3 h-3 rounded-full border border-current opacity-70"></div>
    <div className="w-2 h-2 rounded-full border border-current opacity-40"></div>
  </div>
);

export const HeroIllustration: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`relative w-full h-full bg-[#E8E1D1] overflow-hidden ${className}`}>
    <svg 
      className="w-full h-full absolute inset-0" 
      viewBox="0 0 400 500" 
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#C5A059" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#C5A059" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background Texture Elements */}
      <circle cx="200" cy="200" r="150" fill="url(#glow)" />
      
      {/* Decorative Rays */}
      <g stroke="#C5A059" strokeWidth="1" opacity="0.4">
        <line x1="200" y1="180" x2="200" y2="100" />
        <line x1="200" y1="320" x2="200" y2="400" />
        <line x1="130" y1="250" x2="50" y2="250" />
        <line x1="270" y1="250" x2="350" y2="250" />
        <line x1="150" y1="200" x2="100" y2="150" />
        <line x1="250" y1="200" x2="300" y2="150" />
      </g>

      {/* The Floating Card */}
      <g transform="translate(200, 220)">
        <g className="animate-[float_6s_ease-in-out_infinite]">
          {/* Card Shape */}
          <rect x="-60" y="-90" width="120" height="180" rx="4" fill="#1C2E24" stroke="#C5A059" strokeWidth="2" />
          <rect x="-54" y="-84" width="108" height="168" rx="2" stroke="#C5A059" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
          
          {/* Card Symbol (Eye/Sun) */}
          <circle cx="0" cy="-20" r="25" fill="none" stroke="#C5A059" strokeWidth="1.5" />
          <circle cx="0" cy="-20" r="8" fill="#C5A059" />
          <path d="M0,-55 L0,-45 M0,5 L0,15 M-35,-20 L-25,-20 M35,-20 L25,-20" stroke="#C5A059" strokeWidth="1.5" />
          <path d="M-25,-45 L-18,-38 M25,-45 L18,-38 M-25,5 L-18,-2 M25,5 L18,-2" stroke="#C5A059" strokeWidth="1.5" />
          
          {/* Text on Card */}
          <text x="0" y="50" textAnchor="middle" fill="#C5A059" fontFamily="serif" fontSize="12" letterSpacing="2">THE STAR</text>
        </g>
      </g>

      {/* The Hand */}
      <g transform="translate(200, 500)" opacity="0.9">
         <path 
           d="M-40,10 
              C-45,-50 -30,-80 -10,-90 
              C0,-95 10,-95 20,-90 
              C50,-70 50,-40 50,10 
              L50,100 L-40,100 Z" 
           fill="#A65D48" 
           opacity="0.9"
         />
         {/* Thumb */}
         <path 
            d="M-40,20 C-60,0 -50,-40 -20,-30" 
            fill="none" 
            stroke="#1C2E24" 
            strokeWidth="1"
            opacity="0.2"
         />
         {/* Wrist details */}
         <path d="M-30,80 Q0,90 40,80" stroke="#1C2E24" strokeWidth="1" opacity="0.2" fill="none" />
         <circle cx="0" cy="50" r="5" fill="#C5A059" opacity="0.8" />
      </g>

      {/* Stars */}
      <g fill="#C5A059" opacity="0.6">
        <circle cx="50" cy="100" r="2" />
        <circle cx="350" cy="80" r="2" />
        <circle cx="80" cy="350" r="1.5" />
        <circle cx="320" cy="380" r="2.5" />
        <path d="M300,50 L302,55 L307,57 L302,59 L300,64 L298,59 L293,57 L298,55 Z" />
        <path d="M100,80 L102,85 L107,87 L102,89 L100,94 L98,89 L93,87 L98,85 Z" opacity="0.7"/>
      </g>
    </svg>
    
    {/* Noise Overlay within the illustration */}
    <div className="absolute inset-0 opacity-20 bg-grain pointer-events-none mix-blend-multiply"></div>
  </div>
);