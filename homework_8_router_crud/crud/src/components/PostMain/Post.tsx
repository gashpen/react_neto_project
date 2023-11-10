import {Link} from 'react-router-dom';
import moment from 'moment';

const Post = ({post}) =>{
    
    return(
        <>
            {post?.map((elem)=>
                <Link to={`/posts/${elem.id}`} key={elem.id} className="post">
                    <div className="post_content-wrapper">
                        <div className="kitten_img_wrapper">
                            <div className='kitten_img'></div>
                            <span className='created_time'>{moment(elem.created).format('DD/MM/YYYY HH:mm')}</span>
                        </div>
                        <p className="post_content">{elem.content}</p> 
                    </div>
                </Link>
            )}
        </>
    )
}

export default Post;
