import Video from "./Video";

function VideoList(props) {
    return props.list.map(item => <Video url={item.url} date={item.date} />);
}

export default VideoList;