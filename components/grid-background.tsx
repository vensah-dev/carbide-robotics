"use client";

export function GridBackground() {
  // Create a grid of 12x12 cells
  const gridCells = [];

  for (let i = 0; i < 144; i++) {
    const row = Math.floor(i / 12);
    const col = i % 12;

    // For a proper grid pattern without rectangle edges:
    // Only add borders where they're needed (top and left)
    let borderClasses = '';
    
    if (row > 0) borderClasses += ' border-t';
    if (col > 0) borderClasses += ' border-l';
    
    gridCells.push(
      <div 
        key={i} 
        className={`border-[var(--accent-primary)] ${borderClasses} h-full w-full`}
      />
    );
  }

  return (
    // do not use -z-1 or anything here, do not need to set z level!!!!
    <div className="absolute inset-0 overflow-hidden">
      
      <div className="grid grid-cols-12 grid-rows-12 h-full w-full opacity-15">
        {gridCells}
      </div>

      <div className="absolute w-screen h-screen inset-0 bg-linear-to-r from-background-primary to-transparent z-10" />

    </div>
  );
}
