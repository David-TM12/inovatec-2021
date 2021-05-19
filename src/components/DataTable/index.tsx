const  DataTable = ({hospital} :any) => {
   
    const obj = hospital.map( (h:any) => h._source);
    console.log(obj);

    return (
        
        <div className="table-responsive">
            <table className="table table-striped table-bordered table-sm py-2" id="css-table" >
                <thead>
                    <tr>
                        <th className="text-center ">HOSPITAL</th>
                        <th className="text-center">ocupCli</th>
                        <th className="text-center">ocuppUti</th>
                        <th className="text-center">ocupSRAGCli</th>
                        <th className="text-center">ocupSRAGUti</th>
                        <th className="text-center">ofertaCli</th>
                        <th className="text-center">ofertaUti</th>
                        <th className="text-center">ofertaSRAGCli</th>
                        <th className="text-center">ofertaSRAGUti</th>
                        <th className="text-center">Respiradores</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {obj.map((hosp:any, index:number) => ( 
                        <tr key={index}>
                            <td className="text-left  px-4">{hosp.nomeCnes || <i id="erro">Hospital não informado</i> }</td>
                            <td className="text-left  px-4">{hosp.ocupHospCli || <i id="erro">N/A</i>}</td>
                            <td className="text-left  px-4">{hosp.ocupHospUti || <i id="erro">N/A</i>}</td>
                            <td className="text-left  px-4">{hosp.ocupSRAGCli || <i id="erro">N/A</i>}</td>
                            <td className="text-left  px-4">{hosp.ocupSRAGUti || <i id="erro">N/A</i>}</td>
                            <td className="text-left  px-4">{hosp.ofertaHospCli || <i id="erro">N/A</i>}</td>
                            <td className="text-left  px-4">{hosp.ofertaHospUti || <i id="erro">N/A</i>}</td>
                            <td className="text-left  px-4">{hosp.ofertaSRAGCli || <i id="erro">N/A</i>}</td>
                            <td className="text-left  px-4">{hosp.ofertaSRAGUti || <i id="erro">N/A</i>}</td>
                            <td className="text-left  px-4">{hosp.ofertaRespiradores || <i id="erro"> - </i>}</td>
                        </tr>
                    ))}
                        
                </tbody>
                
            </table>
        </div>
    );
}

export default DataTable;