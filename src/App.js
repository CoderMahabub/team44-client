import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/HomePage/Home/Home';
import About from './components/AboutPage/About/About';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
