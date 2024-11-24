import { useState } from 'react'
import './App.css'
import Login from './components/Login/Login';
import Contact from "./components/Contact/Contact";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      {isAuthenticated ? (
        <Contact/>
      ) : (
        <Login onLogin={() => setIsAuthenticated(true)} />
      )}
    </>
  );
}


export default App
