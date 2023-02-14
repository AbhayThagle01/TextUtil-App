import React,{useState} from 'react'
import './footer.css'

export default function TextForm(props) {
    // const [color, setcolor] = useState('white');
    const [text,setText]=useState("");
    const handleUpClick =()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("success","Text is converted to uppercase!!")
    }


    const handleLowClick =()=>{
        let newText=text.toLowerCase();
        setText(newText);
 props.showAlert("success","Text is converted to lowercase!!")
            }


            const handleClearClick =()=>{
                let newText=''
                setText(newText);
                props.showAlert("success","Text is clear!!")
            }

    const handleChange=(event)=>{//other wise we are not able to write we have to target 
       setText(event.target.value)
    }

    const handleCopyClick =()=>{
      
     
       navigator.clipboard.writeText(text)

       props.showAlert("success","Text is copied!!")
    } 

            const handleRemoveSpaceClick =()=>{
                let newText=text.split(/[ ]+/);
                setText(newText.join(" "));
                props.showAlert("success","Text is removed!!")
            }


    return (
        <>
        <div>
            <div className="mb-3 my-3" >
                <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
  <textarea className="form-control" id="myBox"  value={text} placeholder='Enter Text Here' style={{backgroundColor: props.mode ==='dark'?'#1d1c1c':'white',color:props.mode==='light'?'black':'white'}} onChange={handleChange} rows="8"></textarea>
</div>
<button className="btn btn-outline-primary mx-2 my-2" disabled={text.length=== 0} onClick={handleUpClick} type="submit">UpperCase</button>
<button className="btn btn-outline-primary mx-2 my-2" disabled={text.length=== 0} onClick={handleLowClick} type="submit">LowerCase</button>
<button className="btn btn-outline-primary mx-2 my-2" disabled={text.length=== 0} onClick={handleClearClick} type="submit">Clear Text</button>
<button className="btn btn-outline-primary mx-2 my-2" disabled={text.length=== 0} onClick={handleCopyClick} type="submit">copy </button>
<button className="btn btn-outline-primary mx-2 my-2" disabled={text.length=== 0} onClick={handleRemoveSpaceClick} type="submit">Remove Space</button>




        </div>
        <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
            <h1>Your text summary</h1>
           <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
           <p>{0.48*text.split(" ").filter((element)=>{return element.length!==0}).length} Seconds To Read</p>
           <h1>Preview</h1>
           <p>{text.length>0?text:"please enter some text!!"}</p>
        </div>
        <footer className='foot'>
            <p>CopyRight &copy; AbhayPT web-app</p>
        </footer>
        </>
    )
}
