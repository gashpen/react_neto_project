import { ReactElement, Children} from "react";
import moment from "moment";

const DateTimePretty = ({children}:{children: ReactElement | ReactElement[]}) => {
 
    return(
        <>
            <div className="date-wrap">
                {Children.map(children,(child:ReactElement)=> {
                    return moment(child.props.date).fromNow()
                })}
            </div>
        </>
    )
}

export default DateTimePretty