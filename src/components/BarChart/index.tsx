import Chart from "react-apexcharts";

const BarChart  = (props:any) =>{

    //objetos do hospitais
    const h1 = {
        nome: props.hospital1.nomeCnes,
        txOcupacao: (props.hospital1.ocupSRAGUti / props.hospital1.ofertaSRAGUti).toFixed(2) || 0,
    }

    const h2 = {
        nome: props.hospital2.nomeCnes,
        txOcupacao: (props.hospital2.ocupSRAGUti / props.hospital2.ofertaSRAGUti).toFixed(2) || 0,
    }
    const h3 = {
        nome: props.hospital3.nomeCnes,
        txOcupacao: (props.hospital3.ocupSRAGUti / props.hospital3.ofertaSRAGUti).toFixed(2) || 0,
    }
    const h4 = {
        nome: props.hospital4.nomeCnes,
        txOcupacao: (props.hospital4.ocupSRAGUti / props.hospital4.ofertaSRAGUti).toFixed(2) || 0,
    }
    const h5 = {
        nome: props.hospital5.nomeCnes,
        txOcupacao: (props.hospital5.ocupSRAGUti / props.hospital5.ofertaSRAGUti).toFixed(2) || 0, 
    }
    const h6 = {
        nome: props.hospital6.nomeCnes,
        txOcupacao: (props.hospital6.ocupSRAGUti / props.hospital6.ofertaSRAGUti).toFixed(2) || 0,
    }



    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    const Data = {
        labels: {
            categories: [ h1.nome, h2.nome, h3.nome, h4.nome, h5.nome, h6.nome]
        },
        series: [
            {
                name: "% Ocupação",
                data: [h1.txOcupacao, h2.txOcupacao, h3.txOcupacao, h4.txOcupacao, h5.txOcupacao, h6.txOcupacao]                   
            }
        ]
    };

    return (
        <Chart 
            options = {{ ...options, xaxis: Data.labels}}
            series = {Data.series}
            type = "bar"
            height="240"
        />
    );
}

export default BarChart;
