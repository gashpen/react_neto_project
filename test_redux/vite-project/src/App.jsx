import './App.css'
import { useDispatch, useSelector } from "react-redux";

function App() {
  const product = useSelector((store)=>store.productAdd.product);
    const dispatch = useDispatch();
    const mockProducts = [
      { id: '1', name: 'Продукт 1', price: '100' },
      { id: '2', name: 'Продукт 2', price: '200' },
      // ... другие продукты
    ];
  
  return (
    <>

    </>
  )
}

export default App
