import './styles/app.scss'
import Header from './components/Header';
import Main from './components/Main';
import Login from './components/Login';
import Logout from './components/Logout';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Login />
      <Logout />
    </div>
  );
}

export default App;
