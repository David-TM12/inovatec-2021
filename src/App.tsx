import BarChart from "components/BarChart";
import Cards from "components/Cards";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChat";
import Footer from "components/Footer";
import Mapas from "components/Mapa";
import NavBar from "components/NavBar/index";
import { Component } from "react";
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
    const obj = hospitais.map((h: any) => h._source);

    const card1 = {
      nomeCnes: undefined,
      obitos: undefined,
      ocupHospCli: undefined,
      ocupHospUti: undefined,
      ocupSRAGCli: undefined,
      ocupSRAGUti: undefined,
      // ocupacaoInformada: undefined,
      ofertaHospCli: undefined,
      ofertaHospUti: undefined,
      ofertaRespiradores: undefined,
      ofertaSRAGCli: undefined,
      ofertaSRAGUti: undefined,
      altas: undefined,
      dataNotificacaoOcupacao: undefined,
    }

    const card2 = {
      nomeCnes: undefined,
      obitos: undefined,
      ocupHospCli: undefined,
      ocupHospUti: undefined,
      ocupSRAGCli: undefined,
      ocupSRAGUti: undefined,
      // ocupacaoInformada: undefined,
      ofertaHospCli: undefined,
      ofertaHospUti: undefined,
      ofertaRespiradores: undefined,
      ofertaSRAGCli: undefined,
      ofertaSRAGUti: undefined,
      altas: undefined,
      dataNotificacaoOcupacao: undefined,
    }

    const card3 = {
      nomeCnes: undefined,
      obitos: undefined,
      ocupHospCli: undefined,
      ocupHospUti: undefined,
      ocupSRAGCli: undefined,
      ocupSRAGUti: undefined,
      // ocupacaoInformada: undefined,
      ofertaHospCli: undefined,
      ofertaHospUti: undefined,
      ofertaRespiradores: undefined,
      ofertaSRAGCli: undefined,
      ofertaSRAGUti: undefined,
      altas: undefined,
      dataNotificacaoOcupacao: undefined,
    }

    const card4 = {
      nomeCnes: undefined,
      obitos: undefined,
      ocupHospCli: undefined,
      ocupHospUti: undefined,
      ocupSRAGCli: undefined,
      ocupSRAGUti: undefined,
      // ocupacaoInformada: undefined,
      ofertaHospCli: undefined,
      ofertaHospUti: undefined,
      ofertaRespiradores: undefined,
      ofertaSRAGCli: undefined,
      ofertaSRAGUti: undefined,
      altas: undefined,
      dataNotificacaoOcupacao: undefined,
    }
    
    //preenchendo o objeto card1
    obj.map((item:any) => {
      if(item.cnes === "7564546"){
        card1.nomeCnes = item.nomeCnes || "";
        card1.obitos = item.obitos || 0;
        card1.ocupHospCli = item.ocupHospCli || 0;
        card1.ocupHospUti = item.ocupHospUti || 0;
        card1.ocupSRAGCli = item.ocupSRAGCli || 0;
        card1.ocupSRAGUti = item.ocupSRAGUti || 0;
        // card1.ocupacaoInformada = item.ocupacaoInformada || 0;
        card1.ofertaHospCli = item.ofertaHospCli || 0;
        card1.ofertaHospUti = item.ofertaHospUti || 0;
        card1.ofertaRespiradores = item.ofertaRespiradores || 0;
        card1.ofertaSRAGCli = item.ofertaSRAGCli || 0;
        card1.ofertaSRAGUti = item.ofertaSRAGUti || 0;
        card1.altas = item.altas || 0;
        card1.dataNotificacaoOcupacao = item.dataNotificacaoOcupacao || 0;
      }
    });

    //preenchendo o objeto card2
    obj.map((item:any) => {
      if(item.cnes === "2013649"){
        card2.nomeCnes = item.nomeCnes || "";
        card2.obitos = item.obitos || 0;
        card2.ocupHospCli = item.ocupHospCli || 0;
        card2.ocupHospUti = item.ocupHospUti || 0;
        card2.ocupSRAGCli = item.ocupSRAGCli || 0;
        card2.ocupSRAGUti = item.ocupSRAGUti || 0;
        // card2.ocupacaoInformada = item.ocupacaoInformada || 0;
        card2.ofertaHospCli = item.ofertaHospCli || 0;
        card2.ofertaHospUti = item.ofertaHospUti || 0;
        card2.ofertaRespiradores = item.ofertaRespiradores || 0;
        card2.ofertaSRAGCli = item.ofertaSRAGCli || 0;
        card2.ofertaSRAGUti = item.ofertaSRAGUti || 0;
        card2.altas = item.altas || 0;
        card2.dataNotificacaoOcupacao = item.dataNotificacaoOcupacao || 0;
      }
    });

     //preenchendo o objeto card3
     obj.map((item:any) => {
      if(item.cnes === "2019574"){
        card3.nomeCnes = item.nomeCnes || "";
        card3.obitos = item.obitos || 0;
        card3.ocupHospCli = item.ocupHospCli || 0;
        card3.ocupHospUti = item.ocupHospUti || 0;
        card3.ocupSRAGCli = item.ocupSRAGCli || 0;
        card3.ocupSRAGUti = item.ocupSRAGUti || 0;
        // card3.ocupacaoInformada = item.ocupacaoInformada || 0;
        card3.ofertaHospCli = item.ofertaHospCli || 0;
        card3.ofertaHospUti = item.ofertaHospUti || 0;
        card3.ofertaRespiradores = item.ofertaRespiradores || 0;
        card3.ofertaSRAGCli = item.ofertaSRAGCli || 0;
        card3.ofertaSRAGUti = item.ofertaSRAGUti || 0;
        card3.altas = item.altas || 0;
        card3.dataNotificacaoOcupacao = item.dataNotificacaoOcupacao || 0;
      }
    });
    
    return(  
      <>
        <NavBar />
        <div className="container">
          <h1 className="text-primary py-3">Ocupação dos leitos em manaus</h1>
          <h2 className="alert alert-info py-3">Principais hospitais de manaus</h2>
          <div className="row px-3 py-3">
            {/* card1 */}
            <div className="col-sm-4">
              <Cards
                nomeCnes={card1.nomeCnes}
                obitos={ card1.obitos}
                ocupHospCli={card1.ocupHospCli}
                ocupHospUti={card1.ocupHospUti}
                ocupSRAGCli={card1.ocupSRAGCli}
                ocupSRAGUti={card1.ocupSRAGUti}
                // ocupacaoInformada={card1.ocupacaoInformada}
                ofertaHospCli={card1.ofertaHospCli}
                ofertaHospUti={card1.ofertaHospUti}
                ofertaRespiradores={card1.ofertaRespiradores}
                ofertaSRAGCli={card1.ofertaSRAGCli}
                ofertaSRAGUti={card1.ofertaSRAGUti}
                altas={card1.altas}
                dataNotificacaoOcupacao={card1.dataNotificacaoOcupacao}
              />
            </div>

            {/* card2 */}
            <div className="col-sm-4">
              <Cards
                  nomeCnes={card2.nomeCnes}
                  obitos={ card2.obitos}
                  ocupHospCli={card2.ocupHospCli}
                  ocupHospUti={card2.ocupHospUti}
                  ocupSRAGCli={card2.ocupSRAGCli}
                  ocupSRAGUti={card2.ocupSRAGUti}
                  // ocupacaoInformada={card2.ocupacaoInformada}
                  ofertaHospCli={card2.ofertaHospCli}
                  ofertaHospUti={card2.ofertaHospUti}
                  ofertaRespiradores={card2.ofertaRespiradores}
                  ofertaSRAGCli={card2.ofertaSRAGCli}
                  ofertaSRAGUti={card2.ofertaSRAGUti}
                  altas={card2.altas}
                  dataNotificacaoOcupacao={card2.dataNotificacaoOcupacao}
                /> 
            </div>
            {/* card3 */}
            <div className="col-sm-4">
              <Cards
                nomeCnes={card3.nomeCnes}
                obitos={ card3.obitos}
                ocupHospCli={card3.ocupHospCli}
                ocupHospUti={card3.ocupHospUti}
                ocupSRAGCli={card3.ocupSRAGCli}
                ocupSRAGUti={card3.ocupSRAGUti}
                // ocupacaoInformada={card3.ocupacaoInformada}
                ofertaHospCli={card3.ofertaHospCli}
                ofertaHospUti={card3.ofertaHospUti}
                ofertaRespiradores={card3.ofertaRespiradores}
                ofertaSRAGCli={card3.ofertaSRAGCli}
                ofertaSRAGUti={card3.ofertaSRAGUti}
                altas={card3.altas}
                dataNotificacaoOcupacao={card3.dataNotificacaoOcupacao}
              />
            </div>
             {/* card3 */}
             <div className="col-sm-4">
              <Cards
                nomeCnes={card3.nomeCnes}
                obitos={ card3.obitos}
                ocupHospCli={card3.ocupHospCli}
                ocupHospUti={card3.ocupHospUti}
                ocupSRAGCli={card3.ocupSRAGCli}
                ocupSRAGUti={card3.ocupSRAGUti}
                // ocupacaoInformada={card3.ocupacaoInformada}
                ofertaHospCli={card3.ofertaHospCli}
                ofertaHospUti={card3.ofertaHospUti}
                ofertaRespiradores={card3.ofertaRespiradores}
                ofertaSRAGCli={card3.ofertaSRAGCli}
                ofertaSRAGUti={card3.ofertaSRAGUti}
                altas={card3.altas}
                dataNotificacaoOcupacao={card3.dataNotificacaoOcupacao}
              />
            </div>
          </div>

          
          <h2 className="alert alert-info py-3">Hospitais de Manaus</h2>
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
