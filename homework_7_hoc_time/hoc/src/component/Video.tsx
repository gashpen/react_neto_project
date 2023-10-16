import DateTime from "./DataTime"
import DateTimePretty from "../hoc/DateTimePretty";
function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTimePretty>
            <DateTime date={props.date} />
            </DateTimePretty>
            
        </div>
    )
}

export default Video;