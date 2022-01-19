import React from 'react';
import './App.css';
import AustralianCompanyNumberGenerator from './components/widgets/AustralianCompanyNumberGenerator';
import AustralianCompanyNumberValidator from './components/widgets/AustralianCompanyNumberValidator';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AustralianCompanyNumberGenerator />
        <AustralianCompanyNumberValidator />
      </header>
    </div>
  );
}

export default App;