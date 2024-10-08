import React from 'react';
import BentoGrid from './components/BentoGrid';
import { LayoutGrid, Newspaper, Image, FileText, BarChart } from 'lucide-react';

const gridItems = [
  { width: 1, height: 1, component: <div className="bg-blue-200 p-4 flex items-center justify-center"><LayoutGrid size={32} /></div> },
 
  { width: 2, height: 2, component: <div className="bg-red-200 p-4 flex items-center justify-center"><FileText size={32} /></div> },
    { width: 1, height: 1, component: <div className="bg-blue-200 p-4 flex items-center justify-center"><LayoutGrid size={32} /></div> },
    { width: 1, height: 1, component: <div className="bg-blue-200 p-4 flex items-center justify-center"><LayoutGrid size={32} /></div> },
   { width: 2, height: 1, component: <div className="bg-green-200 p-4 flex items-center justify-center"><Newspaper size={32} /></div> },
  { width: 1, height: 1, component: <div className="bg-purple-200 p-4 flex items-center justify-center"><BarChart size={32} /></div> },
  { width: 1, height: 1, component: <div className="bg-yellow-200 p-4 flex items-center justify-center"><Image size={32} /></div> },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Bento Grid Layout</h1>
      <BentoGrid items={gridItems} gridSize={6} />
    </div>
  );
}

export default App;