import { useSelector } from "react-redux";
import { Swiper,SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useNavigate } from "react-router-dom";
import { removeFavorite } from "../redux/searchSlice";
import { useDispatch } from "react-redux";
const Favorite = () => {
    const favorite = useSelector(state=>state.addFavorite.favorite);
    const navigate = useNavigate();
    const goHome = () => navigate('/');
    const dispatch = useDispatch();

    return (
        <div className="h-[100vh] bg-[#2B2B2B]">
            <button onClick={goHome} className="flex bg-[url('./img/7058770_left_arrow_turn_back_icon.png')] bg-[#7d7d7d] rounded-lg bg-no-repeat bg-[length:45px_45px] w-[45px] h-[45px]"></button>
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
            <div className="">
            {favorite.map((elem: { Poster: string | undefined; })=>{
                return(
                    <SwiperSlide>
                        <div className="relative max-w-xs overflow-hidden bg-cover bg-[50%] bg-no-repeat">
                            <img src={elem.Poster} className="max-w-xs" />
                                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
                                    <div className="flex h-full items-center justify-center">
                                    <div onClick={()=>dispatch(removeFavorite(elem))} className="text-white opacity-100 w-[100px] h-[100px] hover:bg-[url('./img/2849797_trash_basket_multimedia_icon.png')] bg-[length:100px_100px] bg-center bg-no-repeat"></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
            </div>
            </Swiper>
        </div>
    );
}
 
export default Favorite;