import React from 'react';

export default function BlobBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-1]">
      {/* Top Right Green Blob */}
      <div 
        id="blob-top-right"
        className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-br from-sage/50 to-primary-green/30 blur-3xl opacity-40 animate-float-1"
        style={{
          top: '-150px',
          right: '-100px',
        }}
      />
      {/* Bottom Left Mint Blob */}
      <div 
        id="blob-bottom-left"
        className="absolute w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-tr from-mint/50 to-sage/30 blur-3xl opacity-50 animate-float-2"
        style={{
          bottom: '-150px',
          left: '-100px',
        }}
      />
      {/* Mid Right Extra Soft Blob */}
      <div 
        id="blob-mid-right"
        className="absolute w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-l from-mint/40 to-primary-green/10 blur-3xl opacity-30 animate-float-1"
        style={{
          top: '45%',
          right: '-50px',
        }}
      />
    </div>
  );
}
