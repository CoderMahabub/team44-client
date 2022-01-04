import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Write from "./components/WtirePage/Write";
import Register from "./components/RegisterPage/Register";
import Login from "./components/LoginPage/Login";
import Settings from "./components/SettingPage/Settings";
import Single from "./components/SinglePage/Single";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/write" element={user ? <Write /> : <Register />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/settings" element={user ? <Settings /> : <Register />} />
          <Route path="/post/:postId" element={<Single />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
