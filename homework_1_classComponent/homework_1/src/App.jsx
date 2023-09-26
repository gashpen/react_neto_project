import ShopItemFunc from './ShopItemFunc';
import './App.css'

class App {

  showApp(){
    const content = new ShopItemFunc();
  return <div className="container">
          <div className="background-element">
          </div>
          <div className="highlight-window">
            <div className='highlight-overlay'></div>
          </div>
          <div className="window">
            <content.showContent />
          </div>
        </div>
  
  }
  
}

export default App
