import React from 'react'
import { useState } from 'react'

const App = () => {

   const [first, setfirst] = useState(10)
   const btnClicked = () => {

   //setfirst(prev=> (prev+1))
   
   //setfirst(prev=> (prev+1))
   
   //setfirst(prev=> (prev+1))


   }


  /*
  const [first, setfirst] = useState({user:'rishi', age: 17 })


const btnClicked = () => {
 
//const newNum = [...first]
//newNum.push(99)
//setfirst(newNum);
//setfirst(prev=> ({...prev, age: 50}))

*/





  return (
    <div>
      
<h1>{first}</h1>

<button onClick={btnClicked}>click </button>

    </div>
  )
}

export default App
