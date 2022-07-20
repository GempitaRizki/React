import React from 'react'

export default function TestChild(props) {
  return (
    <div>
        <h1>Test Saja</h1>
        <p>Klik salah satu</p>
        <button onClick={()=>props.Ontugas('tanda bahaya')}>tanda bahaya</button>
        <button onClick={()=>props.Ontugas('tanda aman')}>tanda aman</button>
        <h2>{props.Ontugas}</h2>
    </div>
  )
}
