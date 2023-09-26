import './index.css'
import './App.css'
import Listing from './Listing'
import data from './data.js'

function App() {
  return (
    <>
        <Listing
          items={data} 
        />
    </>
  )
}

export default App
