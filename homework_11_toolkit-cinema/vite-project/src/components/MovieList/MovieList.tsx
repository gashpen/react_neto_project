import { useSelector } from "react-redux";
import SwiperMovie from "./SwiperMovie";
import Preloader from "./Preloader";

const MovieList = () => {
    const movie = useSelector(state=> state.movie.movie);
    
    return ( 
        <>
            <div className="h-[100vh] w-full bg-[#2B2B2B] ">
            <div className="w-full flex flex-wrap justify-center bg-[#2B2B2B]">
                {movie.Search === undefined?
                    <Preloader/> : 
                    <SwiperMovie
                        movie={movie}
                    />
                }
            </div>
            </div>
            
        </>
    );
}
 
export default MovieList;