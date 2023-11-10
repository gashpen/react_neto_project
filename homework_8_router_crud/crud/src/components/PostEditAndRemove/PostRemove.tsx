import { Link, useNavigate } from "react-router-dom";

function PostChangeRemove(props:any) {
    const navigate = useNavigate();

    const onClickRemove = () =>{
        fetch(`http://localhost:7070/posts/${props.post.post.id}`,{method: "DELETE"})   
        .then(() => console.log('Delete successful'));
        navigate('/')   
    }

    return ( 
        <>
            <div className="content_wrapper">
                <div className="content">{props.post.post.content}</div>
                <div className="button_wrapper button_remove-wrapper">
                    <button className="btn btn-ghost button_remove" onClick={onClickRemove}>Удалить</button>
                    <Link className="btn btn-ghost button_edit" to={`edit`}>Редактировать</Link>
                </div>
            </div>
        </>
    );
}

export default PostChangeRemove;