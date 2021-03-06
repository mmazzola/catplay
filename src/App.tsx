import React from 'react';
import './styles/App.scss';
import CatGrid from './components/CatGrid/CatGrid';
import 'semantic-ui-css/semantic.min.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <CatGrid
                width={window.innerWidth}
                height={window.innerHeight}
                rows={5}
                cols={5}
            />
        </div>
    );
};

export default App;
