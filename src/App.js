import './App.css';
import { Route,Routes } from 'react-router';
import Home from './components/home/Home';
import Builder from './components/builder/Builder'
import Header from './components/header/Header';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='builder'element={<Builder/>}/>

      </Routes>
    </div>
  );
}

export default App;
