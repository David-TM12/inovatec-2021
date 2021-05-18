import BarChart from "components/BarChart";
import Cards from "components/Cards";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChat";
import Footer from "components/Footer";
import Mapas from "components/Mapa";
import NavBar from "components/NavBar/index";
import { Component } from "react";
import { resourceLimits } from "worker_threads";
import api from "./api";

class App extends Component {

  state = {
    hospitais: []
  }

  async componentDidMount(){
     await api.getBuscar('manaus').then(res => {
      // console.log(res.data);
      this.setState({hospitais: res.data.hits.hits});
    });
  }

 
  render(){
    const {hospitais} = this.state;
    
    return(  
      <>
        <NavBar />
        <div className="container">
          <h2 className="text-primary py-3">Ocupação dos leitos em manaus</h2>

          <div className="row px-3 py-3">
            <div className="col-sm-4">
              <Cards title="card 1"
                subtitulo="{<div>oferta de respiradores: {um.ofertaRespiradores}</div>}"
              //   content="{<div>
              //             "<p>oferta de leitos clínicos: {um.ofertaHospCli}</p>
              //             "<p>leitos ocupados: {um.ocupHospCli}</p>
              //           "</div>}>
              // </div>
              />
              </div>
            <div className="col-sm-4"><Cards title="Titulo Card 2"
                                            subtitulo="subtitulo card 2"
                                            content="Conteudo Card-2"
            /></div>
            <div className="col-sm-4"><Cards title="Titulo Card 3"
                                            subtitulo="subtitulo card 3"
                                            content="Conteudo Card-3"
            /></div>
          </div>
          
          <div className="row px-3 py-3">
            <DataTable  hospital={hospitais} />
          </div>

          <div className="row px-3">

            <div className="col-sm-6">
              <h5 className="text-center text-secondary">Hospitais</h5>
              <BarChart />
            </div>

            <div className="col-sm-6">
              <h5 className="text-center text-secondary">Hospitais</h5>
              <DonutChart />
            </div>

          </div>

          <div className="row px-3">

            <div className="col-sm-6">
              <h5 className="text-center text-secondary">Hospitais</h5>
              <Mapas />
            </div>

            <div className="col-sm-6">
              <h5 className="text-center text-secondary">Hospitais</h5>
              <Mapas />
            </div>

          </div>

          <div className="py-3">
            <h2 className="text-primary">Todos hopitais de manaus</h2>
          </div>

          
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
