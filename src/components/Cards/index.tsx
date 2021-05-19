

const Cards = (props: any) => {

    return(
        <div className="card text-dark bg-light mb-3" >
        <div className="card-header">{props.title}</div>
        <div className="card-body">
            <h5 className="card-title">{props.subtitulo}</h5>
            <p className="card-text">{props.content}</p>
        </div>
        </div>
    );
}

export default Cards;