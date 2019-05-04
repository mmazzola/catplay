import React from 'react';
import './styles/App.scss';
import CatGrid from './components/CatGrid';

const App: React.FC = () => {
    let apiKey = 'ea316f78-ebf6-414d-8bab-10bb56067074';

    return (
        <div className="App">
            <CatGrid />
        </div>
    );
};

export default App;
