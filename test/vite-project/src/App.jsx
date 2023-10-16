import { useRef, useState } from 'react'
import './App.css'
import Counter from './Counter'

function App() {

  const [count,setState] = useState(0)

  return (
    <>
      <div>
        <Counter
        count={count}
        onCountDown={()=>{setState(count - 1)}}
        onCountUp={()=>{setState(count + 1)}}
        />
      </div>
    </>
  )
}

export default App
