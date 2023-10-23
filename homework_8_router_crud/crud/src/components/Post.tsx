import {Link} from 'react-router-dom';
import {Routes,Route} from 'react-router-dom'
import PostView from './PostView'; 
const Post = ({post}) =>{

    const postViewHandler = (event:React.MouseEvent<HTMLDivElement, MouseEvent>) =>{
        
    }

    return(
        <>
            {post?.map((elem)=>
                <Link to={`posts/${elem.id}`}  key={elem.id} className="post">
                    <div onClick={(event)=>{postViewHandler(event)}} className="post_content-wrapper">
                        <p className="post_content">{elem.content}</p> 
                    </div>
                </Link>
            )}
        </>
    )
}

export default Post;
