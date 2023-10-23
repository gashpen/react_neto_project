import { useEffect, useState } from "react"
import Post from "./Post"
import CreatePost from "./CreatePost"

const PostList = () =>{

    const [post,setPost] = useState()
    const getPost = () =>{
        fetch('http://localhost:7070/posts')
        .then((response)=>response.json())
        .then((data)=>setPost(data))
        .catch(error=>{
            console.error(error)
        });
    }

    useEffect(getPost,[])

    return (
        <>
            <div className="create_wrapper">
                <CreatePost/>
            </div>
            <div className="posts_wrapper">
                <Post post={post}/>
            </div>  
        </>
    )
}

export default PostList