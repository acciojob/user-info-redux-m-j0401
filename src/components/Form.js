
import React, { useState } from "react";





const Form=()=>{
    
    let[nam,setName]=useState('')
    let[em,setEm]=useState('')

function handleName(e){

    setName(e.target.value)

}

function handleChange(e){
    setEm(e.target.value)
}

    return(
        <div>
            <h1>User Information</h1>
            <form>
     <input type="text" placeholder="Enter Text" onInput={handleName} value={nam}/>
     <input type="email" placeholder="Enter Email" onInput={handleChange} value={em}/>
      </form>
<p className="output">Name - {nam}</p>
<p className="output">Email - {em}</p>

        </div>
    )
}


export default Form