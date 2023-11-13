const Edit = (props) => {
   
    return ( 
        <>
            <button className="edit" onClick={()=>onClickEdit(props.id)}>Edit</button>
        </>
    );
}
 
export default Edit;
