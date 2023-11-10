const Edit = (props) =>{

    const onClickEdit = (id) =>{
        props.setProduct(props.product.map((elem)=>{
            if(id === elem.id){
                props.setInputValue(
                    {   
                        id:elem.id,
                        name:elem.name,
                        price:elem.price    
                    }
                )
            }
            return elem
        }))
        props.setCancel(true)
        props.selectTodoId(props.id)
    }
    return (
        <>
            <button onClick={()=>{onClickEdit(props.id)}}>Edit</button>
        </>
    )
}

export default Edit;