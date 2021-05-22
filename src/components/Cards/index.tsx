import moment from "moment";

const Cards = (props: any) => {

    return(
        <div className="card text-dark bg-info card-sm mb-3" id="card">
            <div className="card-header text-center" id="titulo-card"><b>{props.nomeCnes}</b></div>
            <div className="card-body">
                <p className="card-title" id="text-card"><b>OCUPAÇÃO CLÍNICA: </b>{props.ocupHospCli || <i id="erro">n/a</i>}</p>

                <p className="card-title" id="text-card"><b>OCUPAÇÃO UTI: </b>{props.ocupHospUti || <i id="erro">n/a</i>}</p>

                <p className="card-title" id="text-card"><b>OCUPAÇÃO SRAG CLÍNICA: </b>{props.ocupSRAGCli || <i id="erro">n/a</i>}</p>

                <p className="card-title" id="text-card"><b>OCUPAÇÃO SRAG UTI: </b>{props.ocupSRAGUti || <i id="erro">n/a</i>}</p>

                {/* <p className="card-title"><b>ocupacaoInformada: </b>{props.ocupacaoInformada || <i id="erro">n/a</i>}</p> */}

                <p className="card-title" id="text-card"><b>OFERTA CLÍNICA: </b>{props.ofertaHospCli || <i id="erro">n/a</i>}</p>

                <p className="card-title" id="text-card"><b>OFERTA UTI: </b>{props.ofertaHospUti || <i id="erro">n/a</i>}</p>

                <p className="card-title" id="text-card"><b>RESPIRADORES: </b>{props.ofertaRespiradores || <i id="erro">n/a</i>}</p>

                <p className="card-title" id="text-card"><b>OFERTA SRAG CLÍNICA: </b>{props.ofertaSRAGCli || <i id="erro">n/a</i>}</p>

                <p className="card-title" id="text-card"><b>OFERTA SRAG UTI: </b>{props.ofertaSRAGUti || <i id="erro">n/a</i>}</p>

                <p className="card-title" id="text-card"><b>ALTAS: </b>{props.altas || <i id="erro">n/a</i>}</p>

                <p className="card-title" id="text-card"><b>OBITOS: </b>{props.obitos}</p>

                <small className="card-title" id="text-card"><b>NOTIFICAÇÃO: </b>{moment(props.dataNotificacaoOcupacao).format("DD/MM/YYYY hh:ss") || <i id="erro">n/a</i>}</small>
            </div>
        </div>
    );
}

export default Cards;