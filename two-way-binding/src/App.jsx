import React from 'react'
import { useState } from 'react'

const App = () => {


const [text,settext] = useState('')



const submithandler = (elem) => {
  elem.preventDefault()

  console.log('form submitted', text)

  settext('')
}


  return (
    <div> 

      <form onSubmit={ (elem) => {

 submithandler(elem)

      }}>

 <input type ="text" placeholder='Enter your name'  
 
value = {text}
onChange = { (elem) => {


 settext(elem.target.value);



}




}

 
 /> 

<button > Submit</button>
      </form>
      
    </div>
  )
}

export default App
