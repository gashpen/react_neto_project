import Star from "./Star";

type Props = {
    count: number
  }

Stars.defaultProps = {count:0};

export default function Stars({count} : Props){
    if(count < 1 || count > 5){
        return 
    } else {
        return (
            <>
                <ul className="card-body-stars u-clearfix">
                    <li>
                        <Star count={count}/>    
                    </li>
                </ul>
            </>
        )
    }
}