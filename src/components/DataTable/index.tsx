import { isPropertySignature } from "typescript";

function DataTable (props: any) {
   
    const { nomeHospital }=  props;
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
                
                {nomeHospital.map((element:any, index:number) => ( 
                    
                    <tr key={index}>
                        <td className="text-left  px-4">{element}</td>
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