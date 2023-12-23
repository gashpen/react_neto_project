import { useSelector } from 'react-redux';
import preloader from '../../img/loading-gif.gif'

const Preloader = () => {
    const inputValue = useSelector(state=> state.inputValue.inputValue);

    if(!inputValue){
       return(
            <>
                <div className='text-[24px] font-semibold'>Введите название фильма...</div>   
            </>
        )
    } else {
        return ( 
            <>
                <img src={preloader} alt="" />
            </>
        );
    }
}
 
export default Preloader;