import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
     

    <Card user = 'Robi' age = {18} img = 'https://images.unsplash.com/photo-1752038944327-3970c77bd891?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    
    <Card user = 'Aman' age = {28} img = 'https://plus.unsplash.com/premium_photo-1723526592766-15d1fd0de4a5?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />

     <Card user = 'Aditta' age = {24} img = 'https://images.unsplash.com/photo-1753847726685-6af24062aa9e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
  
    


    </div>
  )
}

export default App
