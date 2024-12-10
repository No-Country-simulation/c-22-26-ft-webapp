import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/SignUp/Register";
import Contact from "./components/Contact/Contact";
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        {/* login */}
        <Route path="/" element={<Login />} />
        {/* Registro */}
        <Route path="/signin" element={<Register />} />
        {/* Main */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;