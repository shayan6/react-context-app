import React from 'react';
import { AppStateProvider } from './AppStateContext';
import Counter from './Counter';
import './App.css'; // Import the CSS file

const App: React.FC = () => {
  return (
    <AppStateProvider>
      <div>
        <h1>React TypeScript Context API App</h1>
        <Counter />
      </div>
    </AppStateProvider>
  );
};

export default App;
