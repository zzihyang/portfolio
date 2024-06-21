import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomeView from './views/HomeView';


function App() {
  return (
    <div>
     {/*  <HomeView /> */}
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;
