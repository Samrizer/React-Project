import React from 'react'

const App = () => {


const submithandler = (elem) => {
  elem.preventDefault()

  console.log('form submitted')
}


  return (
    <div> 

      <form onSubmit={ (elem) => {

 submithandler(elem)

      }}>

 <input type ="text" placeholder='Enter your name'/> 

<button > Submit</button>
      </form>
      
    </div>
  )
}

export default App
