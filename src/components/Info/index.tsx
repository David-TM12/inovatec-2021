
const Info = () => {
    return (
        <div className="alert alert-success" role="alert">
            <h4 className="alert-heading">Seja bem vindo ao Leitos de manaus</h4>
            <p>Projeto criado para o INOVATEC que é um evento criado pela faculdade Fametro de manaus, que tem como objetivo incentivar os seus alunos a criarem seus projetos para apresentar e já adquirir experiência no mercado, estando assim apto para ser inserido no mercado de trabalho.</p>
            {<hr></hr>}
            <div className="mb-0">

            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Time de desenvolvimento
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    ...
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
}

export default Info;
