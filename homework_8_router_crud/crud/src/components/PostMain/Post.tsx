import {Link} from 'react-router-dom';
const Post = ({post}) =>{
    
    return(
        <>
            {post?.map((elem)=>
                <Link to={`/posts/${elem.id}`} key={elem.id} className="post">
                    <div className="post_content-wrapper">
                        <div className="kitten_img"></div>
                        <p className="post_content">{elem.content}</p> 
                    </div>
                </Link>
            )}
        </>
    )
}

export default Post;
