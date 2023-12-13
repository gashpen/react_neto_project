const Cancel = (props) => {
    return ( 
        <>
            <button className="input_submit cancel" onClick={()=>{props.onClickReset()}} type="reset"></button>
        </>
     );
}
 
export default Cancel;
