import "../src/styles/login.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./components/home";
import { Prestamos } from "./components/prestamos";
import { Login } from  "./components/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Home" element={<Home />} />
        <Route path="/prestamos" element={<Prestamos />} />
      </Routes>
    </Router>
  );
}

export default App;
