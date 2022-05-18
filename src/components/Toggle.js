import React, {useState} from "react";

function Toggle() {


  //SERJE'S SOLUTION
  let butonStatus = "OFF"
    
  const [count, setCount] = useState(0)

    function increment(){
      setCount((currentCount)=> currentCount+1)
    }
    
    if(count%2 ===0){
      butonStatus ="ON" 
    } else {
      butonStatus ="OFF"
    }
  return <button onClick={increment}>{butonStatus}</button>;



  // const [isOn, setIsOn] = useState(false)

  // function handleClick(){
  //   setIsOn((isOn) => !isOn)
  // }

  // const color = isOn ? "red" : "white"

  // return(
  // <button
  //   style={{background: color}}
  //   onClick={handleClick}>{isOn ? "ON" : "OFF"}
  // </button>
  // )
}

export default Toggle;
