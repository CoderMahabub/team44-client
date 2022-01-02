import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/HomePage/Home/Home';
import About from './components/AboutPage/About/About';
import Header from './components/Shared/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register'
import AuthProvide from './components/Context/AuthProvide';

function App() {
  return (
    <div className="App">
      <Header />
      <AuthProvide>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </AuthProvide>
    </div>
  );
}

export default App;
