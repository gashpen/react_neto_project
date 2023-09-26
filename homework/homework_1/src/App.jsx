import ShopItemFunc from './ShopItemFunc';
import { item } from './ShopItemFunc';
import './App.css'

function App() {

  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemFunc item={item} />
      </div>
    </div>
  )
}

export default App
