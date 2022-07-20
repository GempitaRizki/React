import React,{useState} from 'react'

export default function CounterHook() {
    const [counter,setCounter] = useState(5)
/*  FUNGSI DARI USESTATE adalah untuk menampung data , 
    didalam useState ada state dan setState . 
    State untuk data tampungan dan setState untuk data baru */
  return (
    <div>
        <h1>
                Counter Hook: {counter}
                </h1>
                <button onClick={() =>setCounter(counter+1)}>+</button>
                <button onClick={() =>setCounter(counter-1)}>-</button>
    </div>
  )
}
