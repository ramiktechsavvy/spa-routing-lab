import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Career from "./components/Career";

function App() {
  return (
    <div>
      <nav style={navStyle}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </div>
  );
}

const navStyle = {
  display: "flex",
  justifyContent: "space-around",
  padding: "15px"
};

export default App;
