import Chart from "react-apexcharts";

const DonutChart  = (props:any) =>{

     //objetos do hospitais
     const h1 = {
        nome: props.hospital1.nomeCnes,
        respiradores: props.hospital1.ofertaRespiradores || 0,
    }

    const h2 = {
        nome: props.hospital2.nomeCnes,
        respiradores: props.hospital2.ofertaRespiradores || 0,
    }
    const h3 = {
        nome: props.hospital3.nomeCnes,
        respiradores: props.hospital3.ofertaRespiradores || 0,
    }
    const h4 = {
        nome: props.hospital4.nomeCnes,
        respiradores: props.hospital4.ofertaRespiradores || 0,
    }
    const h5 = {
        nome: props.hospital5.nomeCnes,
        respiradores: props.hospital5.ofertaRespiradores || 0,
    }
    const h6 = {
        nome: props.hospital6.nomeCnes,
        respiradores: props.hospital6.ofertaRespiradores || 0,
    }

    const mockData = {
        series: [h1.respiradores, h2.respiradores, h3.respiradores, h4.respiradores, h5.respiradores, h6.respiradores],
        labels: ["Delphina Aziz", "28 de Agosto","João Lúcio", "Platão Araújo", "Adriano Jorge", "Getulio Vargas"]
    }
    
    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart 
            options = {{ ...options, labels: mockData.labels}}
            series = {mockData.series}
            type = "donut"
            height="240"
        />
    );
}

export default DonutChart;
