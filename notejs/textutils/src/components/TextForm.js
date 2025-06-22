import React, {useState} from 'react'

 
export default function TextForm(props) {
    const handleUpClick = ()=>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    SetText(newText)
    }
    const handleloClick = ()=>{
    console.log("lowercase was clicked" + text);
    let newText = text.toLowerCase();
    SetText(newText)
    }
     const handleClearClick = ()=>{
    console.log("cleartext was clicked" + text);
    let newText = "";
    SetText(newText)
    }
     const handle1stUpClick = ()=>{
    console.log("Uppercase initial click: " + text);
    let newText = text 
.trim()
.split(/\s+/)
    .map( word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase ())
    .join(' ');
    SetText(newText)
    }
    const handleOnChange = (event)=>{
        console.log("On change");
        SetText(event.target.value);
    }
    const [text, SetText] = useState('Enter text here');

    // text = "new text";
    // SetText("new text");
  return (
    <>
    <div className="container" style={{Color: props.mode==='dark'?'white':'black'}} >
        <h1>{props.heading}</h1>
    <div className="mb-3">

<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',Color: props.mode==='dark'?'white':'black'}} id="kiranbox" rows="5"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick} >convert to uppercase</button> 
<button className="btn btn-primary mx-2" onClick={handleloClick} >convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear Text </button>
<button className="btn btn-primary mx-2" onClick={handle1stUpClick} >convert to Uppercse Initials </button>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}} >
        <h1>your text summary</h1>
<p>{text.split(/\s+/).length} words and {text.length} characters</p>
<p>{0.008 * text.split(" ").length} Minutes read</p>
  
  <h2>preview</h2>
   <p>{text}</p>
    </div>
    </>
  )
}
