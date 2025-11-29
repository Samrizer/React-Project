

/*
import React, { useState } from 'react'

const App = () => {


const [num, setA] = useState(10);
const [username, setUsername] = useState('Aditta')

function changeNum(){

setA(30);
setUsername('Aman')


}


  return (
    <div>

      <h1>Value of num is {num} <br /> {users}<br /> Value of user is {username} </h1>
       
      <button onClick={changeNum}> Click</button>


    </div>
  )
}

export default App
*/


import React, { useState } from 'react'

const App = () => {

 const [first, setfirst] = useState(0)

function increaseNum() {

setfirst(first+1)


}

function decreaseNum() {

setfirst(first-1)


}

function jump5Num() {

setfirst(first+5)


}


  return (
    <div>

      <h1>{first} </h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreaseNum}> decrease</button>
        <button onClick={jump5Num}> jump by 5</button>


    </div>
  )
}

export default App
