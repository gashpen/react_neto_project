import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { Key } from 'react';

const SwiperMovie = (props: { movie: string; }) => {
    const movie = props.movie;
    return ( 
        <>
            <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
            clickable: true,
            }}
            breakpoints={{
            '@0.00': {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            '@0.75': {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            '@1.00': {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            '@1.50': {
                slidesPerView: 4,
                spaceBetween: 50,
            },
            }}
            modules={[Pagination]}
            className="mySwiper py-[40px] ml-3"
        >
            {movie.Search.map((elem: { imdbID: string; Poster: string | undefined; },index: Key | null | undefined)=>{
                return(
                    <SwiperSlide>
                        <Link key={index} to={`/movie/${elem.imdbID}`}>
                            <img src={elem.Poster} alt="Изображение отсутсвует"/>
                        </Link>
                    </SwiperSlide>
                )
                
            })}
            </Swiper>
        </>

    );
}
 
export default SwiperMovie;