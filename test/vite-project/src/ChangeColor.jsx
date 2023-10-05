export default function ChangeColor({color}){

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);

    return(
        <>
            <div className="output">{(result != null && color != undefined) ? `rgb(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)})`: `Ошибка`}</div>
        </>
    )
}