

const Cards = (props: any) => {

    return(
        <div className="card text-dark bg-info card-sm mb-3" id="card">
            <div className="card-header text-center" id="titulo-card"><b>{props.nomeCnes}</b></div>
            <div className="card-body">
                <p className="card-title" id="text-card"><b>obitos: </b>{props.obitos}</p>

                <p className="card-title" id="text-card"><b>ocupHospCli: </b>{props.ocupHospCli || <i id="erro">n/a</i>}</p>

                <p className="card-title" id="text-card"><b>ocupHospUti: </b>{props.ocupHospUti || <i id="erro">n/a</i>}</p>

                <p className="card-title" id="text-card"><b>ocupSRAGCli: </b>{props.ocupSRAGCli || <i id="erro">n/a</i>}</p>

                <p className="card-title" id="text-card"><b>ocupSRAGUti: </b>{props.ocupSRAGUti || <i id="erro">n/a</i>}</p>

                {/* <p className="card-title"><b>ocupacaoInformada: </b>{props.ocupacaoInformada || <i id="erro">n/a</i>}</p> */}

                <p className="card-title" id="text-card"><b>ofertaHospCli: </b>{props.ofertaHospCli || <i id="erro">n/a</i>}</p>

                <p className="card-title" id="text-card"><b>ofertaHospUti: </b>{props.ofertaHospUti || <i id="erro">n/a</i>}</p>

                <p className="card-title" id="text-card"><b>ofertaRespiradores: </b>{props.ofertaRespiradores || <i id="erro">n/a</i>}</p>

                <p className="card-title" id="text-card"><b>ofertaSRAGCli: </b>{props.ofertaSRAGCli || <i id="erro">n/a</i>}</p>

                <p className="card-title" id="text-card"><b>ofertaSRAGUti: </b>{props.ofertaSRAGUti || <i id="erro">n/a</i>}</p>

                <p className="card-title" id="text-card"><b>altas: </b>{props.altas || <i id="erro">n/a</i>}</p>

                <small className="card-title" id="text-card"><b>dataNotificacaoOcupacao: </b>{props.dataNotificacaoOcupacao || <i id="erro">n/a</i>}</small>
            </div>
        </div>
    );
}

export default Cards;