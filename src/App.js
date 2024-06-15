import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';

import MainPage from './webTeamProject/MainPage';
import CoinApp from './webTeamProject/CoinApp/CoinApp';
import A145 from './webTeamProject/parksehyun/A145';
import Cityll from './webTeamProject/Cityll/1_21_Question';
import ResultPage from './webTeamProject/Cityll/1_21_Result';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/sign-game' element={<A145 />} />
      <Route path='/coin-game' element={<CoinApp />} />
      <Route path='/shapes-game' element={<Cityll />} />
    </Routes>

    // <Routes>
    //   <Route path='/' element={<Page1 />} />
    //   <Route path='/page2' element={<Page2 />} />
    //   <Route path='/page3' element={<Page3 />} />
    // </Routes>
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
