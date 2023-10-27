import "../src/styles/login.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/home";
import { Prestamos } from "./components/prestamos";
import { Login } from "./components/login";
import Aside from "./components/aside";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/*"
          element={
            <>
              <Aside />
              <Routes>
                <Route path="home" element={<Home />} />
                <Route path="prestamos" element={<Prestamos />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
