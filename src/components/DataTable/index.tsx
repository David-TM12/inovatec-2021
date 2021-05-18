const  DataTable = ({hospital} :any) => {
   
    const obj = hospital.map( (h:any) => h._source);
    console.log(obj);

    return (
        
        <div className="table-responsive">
        <table className="table caption-top table-sm css-table" >
            <thead>
                <tr>
                    <th className="text-center ">HOSPITAL</th>
                    <th className="text-center">Total de Leitos</th>
                    <th className="text-center">Ocupação atual</th>
                    <th className="text-center">%</th>
                </tr>
            </thead>
            <tbody>
                
                {obj.map((hosp:any, index:number) => ( 
                    
                    <tr key={index}>
                        <td className="text-left  px-4">{hosp.nomeCnes || 'Hospital não informado' }</td>
                        <td className="text-left  px-4">200</td>
                        <td className="text-left  px-4">150</td>
                        <td className="text-left  px-4">75%</td>
                    </tr>
                    
                ))}
                    
            </tbody>
            
            
        </table>
    </div>
    );
}

export default DataTable;