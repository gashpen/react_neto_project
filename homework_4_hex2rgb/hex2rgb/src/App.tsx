import { useRef, useState } from 'react'
import './App.css'
import ChangeColor from './ChangeColor'

function App() {

  const form = useRef(null);
  const [color,newColor] = useState('#ffffff');

  function inputChangeColor(){
    if(!/^#[^а-яА-Я]*$/.test(color)){
      
      document.querySelector('body').style.backgroundColor = 'red'
      newColor(undefined)
    } 
      newColor(form.current.value);
      document.querySelector('body').style.backgroundColor = color;
    
    
  }

  return (
    <>
      <form action="">
        <input onChange={inputChangeColor} type="text" ref={form}/>
      </form>
      <ChangeColor 
      color={color}
      />
    </>
  )
}

export default App
