import React from 'react'

const App = () => {
  const pageScrolling = (elem) => {
    
    if(elem>0){

console.log('Direct Scrolling');

    } 
    else {


      console.log('Indirect Scrolling');
    }


  }

  return (
    <div
      onWheel={(elem) => {
        pageScrolling(elem.deltaY)
      }}
    >
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
      <div className = "page4"></div>
      <div className = "page5"> Hello Guys </div>
      <div className ="page6"> Hello Man </div>
    </div>
  )
}

export default App
