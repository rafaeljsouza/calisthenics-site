import React, { useRef } from 'react';

export const FontSizeController: React.FC = () => {
  const fontSizeRef = useRef(16);
  
  const adjustFontSize = (increment: boolean) => {
    fontSizeRef.current = increment 
      ? fontSizeRef.current + 2 
      : fontSizeRef.current - 2;
    
    document.documentElement.style.fontSize = `${fontSizeRef.current}px`;
  };

  return (
    <div className="fixed top-4 right-4 flex gap-2 bg-white p-2 rounded-lg shadow-md">
      <button
        onClick={() => adjustFontSize(false)}
        className="p-2 bg-gray-100 rounded hover:bg-gray-200"
        aria-label="Diminuir tamanho da fonte"
      >
        A-
      </button>
      <button
        onClick={() => adjustFontSize(true)}
        className="p-2 bg-gray-100 rounded hover:bg-gray-200"
        aria-label="Aumentar tamanho da fonte"
      >
        A+
      </button>
    </div>
  );
};