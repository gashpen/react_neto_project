interface Props{
    logo:string
}

const YandexLogo = ({logo}:Props) => {
    return(
        <>
            <div className="logo_wrapper">
                <img src={logo}  className="logo" />
            </div>
        </>
    )
}

export default YandexLogo;