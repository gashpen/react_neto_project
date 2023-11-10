import './App.css'
import legacy_createStore from 'redux'


function App() {


  const defaultState = {
    cash:0,
  }
  
  const reducer = (state,action) => {
    switch (action.type) {
      case 'ADD_CASH':
        return {...state, cash: state.cash + action.payload}
      case 'GET_CASH':
        return {...state, cash: state.cash - action.payload}
      default:
        return state
    }
  }
  
  const store = legacy_createStore(reducer);

  
  return (
    <>
    </>
  )
}

export default App
