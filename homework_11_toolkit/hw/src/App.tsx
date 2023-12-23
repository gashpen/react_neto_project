import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getQuotes } from './components/store/tooliktSlice';

function App() {
  const dispatch = useDispatch();
  const qoute = useSelector(state => state.toolkit['quote'])

    return(
      <>
        <input name='num' onChange={(e)=>dispatch(getQuotes(e.target.value))} type="number" min={'1'} max={'5'}/>
        {qoute.map((elem, index)=>{
          return(
            <div key={index}>{elem}</div>
          )
        })}
      </>
    )
}

export default App
