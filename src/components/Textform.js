import React, { useState } from 'react'

export default function Textform(props) {

    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase(); 
        setText(newText);
        props.showAlert("Converted to Uppercase!", "Success");
    }
     
    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "Success");
    }

    const handleOnChange=(event)=>{
        console.log("on change")
        setText(event.target.value);
    }
    const [text, setText] = useState('')  // useState here to set and update the text in the textArea
    //setText("new Text");  // only way to update the text after setting it once. using function 
    return (
    <div>

   <h1>{props.heading}</h1>
  <div className="mb-3">
  <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}>
    </textarea> 
  </div>
   <button className="btn btn-primary" onClick={handleUpClick}>
    Convert to Uppercase</button><br></br> <br></br>
    <button className="btn btn-primary" onClick={handleLowClick}>
    Convert to Lowercase</button>
    </div>
  )
}
