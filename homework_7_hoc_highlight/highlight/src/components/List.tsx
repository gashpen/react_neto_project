import Video from "./Video";
import Article from "./Article";
import Popular from "./Popular";
import New from "./New";

function List(props) {
    return props.list.map(item => {
        {console.log(item.views)}
        switch (item.type) {
            case 'video':
                return (
                   
                    (item.views > 1000) ? <Popular><Video {...item}/></Popular> : (item.views < 100) ? <New><Video {...item}/></New> : <Video {...item}/>
            
                );

            case 'article':
                return (

                    (item.views > 1000) ? <Popular><Article {...item} /></Popular> : (item.views < 100) ? <New><Article {...item} /></New> : <Article {...item} />
                    
                );
        }
    });
}

export default List