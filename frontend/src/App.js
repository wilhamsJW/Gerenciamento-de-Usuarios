import React from 'react'; 
import './App.css';
import phoebus from './assets/phoebus.jpeg';

import Routes from './routes';

function App() {

  return (
    <div className="container"> 
      <img src={phoebus} alt="Logo da empresa"/>
      <div className="content">
        <Routes />
     </div>
    </div>
  );
}

export default App;
