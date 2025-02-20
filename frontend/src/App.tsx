import React, { useState } from 'react';
import HorizontalMenu from './components/HorizontalMenu/HorizontalMenu';
import GridView from './components/GridView/GridView';
import TileView from './components/TileView/TileView';

function App() {
    const [viewMode, setViewMode] = useState<'grid' | 'tile'>('grid'); // Union type for viewMode state

    const toggleViewMode = () => {
        setViewMode(viewMode === 'grid' ? 'tile' : 'grid');
    };

    return (
        <div className="App">
            <HorizontalMenu />

            <button onClick={toggleViewMode}>
                Switch to {viewMode === 'grid' ? 'Tile' : 'Grid'} View
            </button>

            {viewMode === 'grid' ? <GridView /> : <TileView />}
        </div>
    );
}

export default App;