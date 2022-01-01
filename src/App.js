import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/HomePage/Home/Home';
import About from './components/AboutPage/About/About';
import Header from './components/Shared/Header/Header';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
