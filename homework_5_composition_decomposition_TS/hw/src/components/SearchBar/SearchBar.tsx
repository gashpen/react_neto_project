import OtherLinks from "./OtherLinks"
import SearchInput from "./SearchInput"
import SearchButton from "./SearchButton" 
import YandexLogo from "./YandexLogo"
import { link } from "../../links/links"

const SearchBar = () =>{
    return (
        <>
            <OtherLinks/>
            <div className="search_ground">
                <YandexLogo logo={link}/>
                <SearchInput/>
                <SearchButton/>
            </div>
        </>
    )
}

export default SearchBar