import React from 'react'

export default function CrossParent(props) {
  return (
    <div>
        <h1>Ini adalah test dari Gempita</h1>
        <p>Coba klik salah satu </p>
        <button onClick={()=>props.OnTest('Test1')}>test1</button>
        <button onClick={()=>props.OnTest('Test2')}>test2</button>
        <h2>{props.jawaban}</h2>
    </div>
  )
}
