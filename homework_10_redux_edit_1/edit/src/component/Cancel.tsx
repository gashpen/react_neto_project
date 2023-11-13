const Cancel = (props) => {
    return ( 
        <>
        <button onClick={()=>{props.onClickReset()}} type="reset">Cancel!</button></>
     );
}
 
export default Cancel;
