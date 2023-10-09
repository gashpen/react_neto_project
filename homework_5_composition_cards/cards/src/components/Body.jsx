const Body = ({title, text, button}) => (
    <div className='card-body'>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <a href="#" className="btn btn-primary">{button}</a>
    </div>
)

export default Body;