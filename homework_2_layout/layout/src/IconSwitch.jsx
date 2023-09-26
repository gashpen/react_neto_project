export default function IconSwitch({icon, onSwitch}){

    return (
        <>
            {(icon === 'toc') ? <span onClick={onSwitch} className="material-icons view_module active">view_module</span> : <span onClick={onSwitch} className="material-icons toc active">toc</span>}
        </>
    )
}