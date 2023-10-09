import Map from "./Map"
import Visited from "./Visited"
import Weather from "./Weather"
import TV from "./TV"
import Ether from "./Ether"


const OtherWidget = ({title}:{title:string})=>{
    return(
        <> 
            <Weather/>
            <Visited story={['Посещенная ссылка 1','Посещенная ссылка 2','Посещенная ссылка 3']}/>
            <TV program="Мухтар 2"/>
            <Ether toEther={'Улицы разбитых фонарей 7'}/>
            <Map title={title}/>
        </>
    )
}

export default OtherWidget