const Remove = (props) =>{

    const onClickRemove = (id) =>{
        if(props.cancel === true){
            alert('Закончите редактированние и сохраните данные!')
        } else {
            props.setProduct(props.product.filter((elem)=>elem.id != id))
        }
    }

    return(
        <>
            <button onClick={()=>onClickRemove(props.id)}>x</button>
        </>
    )
}

export default Remove