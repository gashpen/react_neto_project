import {Link} from 'react-router-dom'


const CreatePost = () =>{
    return(
        <>
          <Link className="btn btn-ghost" to='/posts/new'>Написать...</Link>
        </>
    )
}

export default CreatePost