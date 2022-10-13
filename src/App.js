import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import About from './Components/About';
import Textform from './Components/Textform';
import React,{ useState } from 'react';
import Error from './Components/Error';

function App() {

  const [mode, setMode] = useState("light");

  const toggleMode = () =>{

    console.log("hello");

    if(mode==="light")
    {
      console.log("sljbflsifbjlfb");
      setMode('dark');
      alert("dark");
    }
    else
    {
      console.log("Lorem ipsuem");
      setMode('light')
    }
  }

  return (
    <>
      <Router>
        
        <Navbar title="TextUtils" about="AboutUs" mdoe={`mode`}  />
        <Routes>
          <Route path="/" element={<Textform mdoe={mode} toggleMode={toggleMode} />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
