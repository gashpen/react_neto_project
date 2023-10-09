
const Visited = ({story}:{story:Array<string>})=>{
    return(
        <>
            <div>{story.map(elem=>{
                return <div>{elem}</div>
            })}
            </div>
        </>
    )
}

export default Visited;