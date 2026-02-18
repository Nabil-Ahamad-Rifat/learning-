import { useState } from "react"


function App() {
  const [value ,setvaule ]= useState(0)
  const incressvaule = ()=> {
    if(value<20){

     setvaule(prv => prv+1)

    }
    else 
      alert("max number is 20")
  };
  const decressvalue = ()=>{
    if(value > 0){
    setvaule(prv => prv-1);
  }
  else {
    alert("min number is 0")
  }
  }
    return (
    <>
      <h1>
        hello this is nabil 
      </h1>
      <p>
        counter value : {value} 
      </p>
      <button onClick={incressvaule}>  add value </button>
      <button onClick={decressvalue}>remove value </button>
    </>
  )
}


export default App
