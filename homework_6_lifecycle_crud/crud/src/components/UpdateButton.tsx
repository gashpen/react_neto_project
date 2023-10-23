function UpdateButton(props) {

    return ( 
        <>
            <button onClick={()=>{props.getNotes()}}>Update</button>
        </>
     );
}

export default UpdateButton