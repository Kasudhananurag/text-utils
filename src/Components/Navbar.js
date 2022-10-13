import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar(props) {

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

        <>{console.log("hey"+props.mode)}
        
            <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.about}</Link>
                            </li>
                        </ul>
                        <div className={`form-check form-switch text-${mode === 'light' ? 'dark' : 'light'}`}>
                            {/* <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'light' ? 'dark' : 'light'} Mode</label> */}
                            <button className="btn btn-outline-dark" onClick={toggleMode}>Enable dark mode</button>
                        </div>
                    </div>
                </div>
            </nav>

        </>

    );
}

Navbar.propTypes = { title: PropTypes.string, about: PropTypes.string };
// default props are useful when we fail to pass prop values
Navbar.defaultProps = {
    title: "TextUtils",
    aobut: "About Us"
};

export default Navbar;