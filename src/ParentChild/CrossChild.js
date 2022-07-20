import React,{useState} from 'react'
import CrossParent from './CrossParent'

export default function CrossChild() {

    const [jawaban,setJawaban] = useState('')
    const setTest = (jawaban) => {
        if (jawaban === 'Test1'){
            setJawaban (`jawaban dari ${jawaban} benar`)
        } else {
            setJawaban (`jawaban dari ${jawaban} salah`)
        }
    }

  return (    
    <div>
        <CrossParent
        jawaban = {jawaban}
        OnTest = {setTest}
        />
    </div>
  )
}
