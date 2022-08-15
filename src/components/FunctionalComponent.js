import React, { useState, useEffect } from "react";

export default function FunctionalComponents({passCount}) {
  const [coffeeList, setCoffeeList] = useState([]);
  const [count, setCount] = useState(passCount)
    useEffect(()=> {
        fetch('https://api.sampleapis.com/coffee/hot')
        .then(res=> res.json())
        .then(data => {setCoffeeList(data)})
    },[])
  return (
    <>
    <button onClick={()=>setCount(count+1)}>Add one</button>
    <div>functional component {count}</div>
    {coffeeList.map((e) => {
      return  <h1>{e.title}</h1>
    })}
    
    </>
  )

}
