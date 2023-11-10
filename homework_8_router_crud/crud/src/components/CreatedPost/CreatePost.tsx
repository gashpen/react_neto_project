import {Link} from 'react-router-dom'


const CreatePost = () =>{
    return(
        <>
          <Link className="btn btn-ghost rounded-2xl" to='/posts/new'>Написать</Link>
        </>
    )
}

export default CreatePost