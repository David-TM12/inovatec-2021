import Chart from "react-apexcharts";

const BarChart  = (props:any) =>{
    

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    



    //objetos do hospitais
    const h1 = {
        nome: props.hospital1.nomeCnes,
    }

    const h2 = {
        nome: props.hospital2.nomeCnes,
    }
    const h3 = {
        nome: props.hospital3.nomeCnes,
    }
    const h4 = {
        nome: props.hospital4.nomeCnes,
    }
    const mockData = {
        labels: {
            categories: [h1.nome, h2.nome, h3.nome, h4.nome]
        },
        series: [
            {
                name: "% Ocupação",
                data: [43.6, 67.1, 67.7, 45.6, 71.1]                   
            }
        ]
    };

    return (
        <Chart 
            options = {{ ...options, xaxis: mockData.labels}}
            series = {mockData.series}
            type = "bar"
            height="240"
        />
    );
}

export default BarChart;
