import React from 'react';

interface GridItem {
  width: number;
  height: number;
  component: React.ReactNode;
}

interface BentoGridProps {
  items: GridItem[];
  gridSize: number;
}

const BentoGrid: React.FC<BentoGridProps> = ({ items, gridSize }) => {
  // Create an empty grid
  const grid: (GridItem | null)[][] = Array(gridSize).fill(null).map(() => Array(gridSize).fill(null));

  // Function to check if a space is available
  const isSpaceAvailable = (row: number, col: number, width: number, height: number) => {
    for (let i = row; i < row + height && i < gridSize; i++) {
      for (let j = col; j < col + width && j < gridSize; j++) {
        if (grid[i][j] !== null) return false;
      }
    }
    return true;
  };

  // Place items in the grid
  items.forEach((item) => {
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        if (isSpaceAvailable(row, col, item.width, item.height)) {
          for (let i = row; i < row + item.height && i < gridSize; i++) {
            for (let j = col; j < col + item.width && j < gridSize; j++) {
              grid[i][j] = item;
            }
          }
          return; // Move to the next item
        }
      }
    }
  });

  return (
    <div className="bento-grid" style={{ display: 'grid', gridTemplateColumns: `repeat(${gridSize}, 1fr)`, gap: '1rem' }}>
      {grid.flat().map((cell, index) => (
        cell ? (
          <div
            key={index}
            className="bento-item"
            style={{
              gridColumn: `span ${cell.width}`,
              gridRow: `span ${cell.height}`,
              minHeight: `${cell.height * 100}px`,
            }}
          >
            {cell.component}
          </div>
        ) : (
          <div key={index} className="bento-item-empty" />
        )
      ))}
    </div>
  );
};

export default BentoGrid;