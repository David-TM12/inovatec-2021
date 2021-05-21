const  DataTable = ({hospital} :any) => {
   
    const obj = hospital.map( (h:any) => h._source);
    console.log(obj);

    return (
        
        <div className="table-responsive">
            <table className="table table-striped table-bordered table-sm py-2" id="css-table" >
                <thead>
                    <tr>
                        <th className="text-center">HOSPITAL</th>
                        <th className="text-center">OCUPAÇÃO CLÍNICA</th>
                        <th className="text-center">OCUPAÇÃO UTI</th>
                        <th className="text-center">OCUPAÇÃO SRAGCli</th>
                        <th className="text-center">OCUPAÇÃO SRAGCli</th>
                        <th className="text-center">OFERTA CLÍNICA</th>
                        <th className="text-center">OFERTA UTI</th>
                        <th className="text-center">OFERTA SRAGCli</th>
                        <th className="text-center">OFERTA SRAGUti</th>
                        <th className="text-center">OFERTA DE RESPIRADORES</th>
                    </tr>
                </thead>
                <tbody>
                    {obj.map((hosp:any, index:number) => (
                        <tr key={index}>
                            
                            {hosp.nomeCnes && <td className="text-left px-4">{hosp.nomeCnes || <i id="erro">Hospital não informado</i> }</td>}
                            {hosp.nomeCnes && <td className="text-left text-sm-center">{hosp.ocupHospCli || <i id="erro"> - </i>}</td>}
                            {hosp.nomeCnes && <td className="text-left text-sm-center">{hosp.ocupHospUti || <i id="erro"> - </i>}</td>}
                            {hosp.nomeCnes && <td className="text-left text-sm-center">{hosp.ocupSRAGCli || <i id="erro"> - </i>}</td>}
                            {hosp.nomeCnes && <td className="text-left text-sm-center">{hosp.ocupSRAGUti || <i id="erro"> - </i>}</td>}
                            {hosp.nomeCnes && <td className="text-left text-sm-center">{hosp.ofertaHospCli || <i id="erro"> - </i>}</td>}
                            {hosp.nomeCnes && <td className="text-left text-sm-center">{hosp.ofertaHospUti || <i id="erro"> - </i>}</td>}
                            {hosp.nomeCnes && <td className="text-left text-sm-center">{hosp.ofertaSRAGCli || <i id="erro"> - </i>}</td>}
                            {hosp.nomeCnes && <td className="text-left text-sm-center">{hosp.ofertaSRAGUti || <i id="erro"> - </i>}</td>}
                            {hosp.nomeCnes && <td className="text-left text-sm-center">{hosp.ofertaRespiradores || <i id="erro">n/a</i>}</td>}
                        </tr>
                    ))}     
                </tbody>
                
            </table>
        </div>
    );
}

export default DataTable;