import './styles/app.scss'
import Header from './components/Header';
import Main from './components/Main';
import Login from './components/Login';
import Logout from './components/Logout';
import React from 'react';
export const GlobalCtx = React.createContext(null)

function App() {
  const [gState, setgState] = React.useState({ 
    loggedIn: false
  })
  return (
    <GlobalCtx.Provider value={{ gState, setgState }}>
    <div className="App">
      <Header/>
      <Main/>
      
    </div>
    </GlobalCtx.Provider>
  );
}

export default App;
