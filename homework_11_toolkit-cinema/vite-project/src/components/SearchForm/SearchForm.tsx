import { useDispatch, useSelector } from "react-redux";
import { addMovie,addInputValue } from "../redux/searchSlice";

import { useEffect } from "react";
import { Link } from "react-router-dom";

const SearchForm = () => {
    const inputValue = useSelector(state=> state.inputValue.inputValue)
    const dispatch = useDispatch();

    useEffect(()=>{
        fetch(`https://www.omdbapi.com/?apikey=b8caeb09&s=${inputValue}`)
        .then((response) => response.json())
        .then((data) => {
            dispatch(addMovie(data))
        })
    },[inputValue])

    return ( 
        <>  
           
            <div className="w-full flex justify-center py-[15px] bg-[#2B2B2B]">
            <Link to='/favorite' className="bg-[url('./img/1904657_bookmark_favorite_favourite_heart_like_icon.png')] bg-[#7d7d7d] rounded-lg bg-no-repeat bg-[length:35px_35px] bg-center w-[45px] h-[45px] mr-[20px]">
            </Link>
                <form action="" >
                    <input onChange={(e)=> dispatch(addInputValue(e.target.value))} name="search" type="text" placeholder="Search" 
                    className="
                    rounded-lg
                    bg-[url('./img/211818_search_icon.png')]
                    bg-no-repeat
                    bg-[length:24px_24px]
                    bg-left
                    bg-size
                    py-[10px] 
                    px-[34px] 
                    border-[3px] 
                    outline-none 
                    w-[30vw]
                    "/>
                </form>
           
            </div>
        </> 
    );
}
 
export default SearchForm;