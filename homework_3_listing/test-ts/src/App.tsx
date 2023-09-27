import './index.css'
import './App.css'
import Listing from './Listing'
import data from './data.js'
import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: consolas
}
`
function App() {
  return (
    <> 
       <Global/>
       <Listing
          items={data} 
        /> 
    </>
  )
}

export default App
