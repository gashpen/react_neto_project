import { useEffect, useState } from "react"
import Post from "./Post"
import CreatePost from "../CreatedPost/CreatePost"
import { Routes,Route} from "react-router-dom"


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
            <div className="crud">
                <div className="create_wrapper">
                    <CreatePost/>
                </div>
                <div className="posts_wrapper">
                    <Routes>
                        <Route path="/" element={<Post post={post}/>}/>
                    </Routes>
                </div>
            </div>
            
        </>
    )
}

export default PostList