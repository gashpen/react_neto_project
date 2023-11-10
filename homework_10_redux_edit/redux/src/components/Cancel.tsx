const Cancel = (props: { setInputValue: (arg0: { name: string; price: string }) => void; setCancel: (arg0: boolean) => void }) =>{

    const onClickReset = () =>{
        props.setInputValue({
            name:'',
            price:''
        })
        props.setCancel(false)
    }

    return (
        <>
            <button onClick={()=>{onClickReset()}} type="reset">Cancel!</button>
        </>
    )
}

export default Cancel