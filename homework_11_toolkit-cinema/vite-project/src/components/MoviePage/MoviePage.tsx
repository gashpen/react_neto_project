import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviePage, addFavorite } from '../redux/searchSlice';
import { useNavigate } from 'react-router-dom';
const MoviePage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const movieCard = useSelector(state=>state.moviePage.moviePage)
    const navigate = useNavigate();
    const goHome = () => navigate('/');

    useEffect(()=>{
        fetch(`https://www.omdbapi.com/?i=${id}&apikey=b8caeb09`)
        .then((response) => response.json())
        .then((data) => {
            dispatch(getMoviePage(data))
        })
    },[])
   

    return ( 
        <>  
            {movieCard.map((elem)=>{
                return(
                    <div className='flex justify-center h-[100vh] bg-[#2B2B2B] py-3'>
                        <button onClick={()=>dispatch(addFavorite(elem))} className="flex bg-[url('./img/1904657_bookmark_favorite_favourite_heart_like_icon.png')] bg-[#7d7d7d] rounded-lg bg-no-repeat bg-[length:35px_35px] bg-center w-[45px] h-[45px] mr-[20px]"></button>
                        <div>
                            <img src={elem.Poster} alt="" />
                        </div>
                        <div className='flex flex-col w-[300px] text-[#adacac] pl-3'>
                            <h1 className='text-[24px] font-semibold'>{elem.Title}</h1>
                            <p className='font-semibold'>Дата выхода: <span className='underline'>{elem.Released}</span></p>
                            <p className='font-semibold'>Продолжительность: <span className='underline'>{elem.Runtime}</span></p>
                            <p className='font-semibold'>Режисер: <span className='underline'>{elem.Writer}</span></p>
                            <p className='font-semibold'>Актеры: <span className='underline'>{elem.Actors}</span></p>
                            <p className='font-semibold'>Рейтинг imdb: <span className='underline'>{elem.imdbRating}</span></p>
                        </div>
                        <button onClick={goHome} className="flex bg-[url('./img/7058770_left_arrow_turn_back_icon.png')] bg-[#7d7d7d] rounded-lg bg-no-repeat bg-[length:45px_45px] w-[45px] h-[45px]"></button>
                    </div>
                )
            }).at(-1)}
           
        </>
    );
}
 
export default MoviePage;