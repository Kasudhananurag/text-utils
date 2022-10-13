import React, { useState } from "react";

export default function TextForms(props) {
    const handleUpClick = () => {
        // console.log("button clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        let lowText = text.toLowerCase();
        setText(lowText);
    }

    const handleClearText = () => {
        setText("");
    }
    const handleCopyText = () => {
        navigator.clipboard.writeText(text);
        alert("Copied Text: " + text);
    }

    const handleReverse = () =>
    {
        let revString = "";
        for(let i = text.length-1;i>=0;i--)
        {
            revString+= text[i];
        }
        setText(revString);
    }

    const handleOnChange = (event) => {
        console.log(event.target.value);
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter text to change");
    return (
        <>
            <div className={`col-7 m-auto my-5 bg-${props.mode} shadow p-3 rounded `}>
                <div className="mb-3">
                    <label html="textBox" className="form-label text-info"><h5>Enter your text here :</h5></label>
                    <textarea className="form-control" onChange={handleOnChange} id="textBox" rows="8" value={text} style = {{backgroundColor: props.mode==='dark'?'grey':'white'}}></textarea>
                </div>
                <button type="submit" className="btn btn-dark text-white mx-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
                <button type="submit" className="btn btn-dark text-white mx-2" onClick={handleLowClick}>Convert to lowercase</button>
                <button type="submit" className="btn btn-dark text-white mx-2" onClick={handleClearText}>Clear Text</button>
                <button type="submit" className="btn btn-dark text-white mx-2" onClick={handleCopyText}>Copy Text</button>
                <button type="submit" className="btn btn-dark text-white mx-2" onClick={handleReverse}>Reverse Text</button>
            </div>

            <div className="col-7 m-auto my-2">
                <h3>Your text summary</h3>
                <p> {text.split(" ").length} words, {text.length} characters</p>
                <p> {text.split(" ").length*0.008} mintues read </p>
                <h3>Preview of your text:</h3>
                <p> {text.length>0?text:"Nothing to Preview"} </p>
            </div>

        </>

    );
}