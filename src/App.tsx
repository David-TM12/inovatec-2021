import BarChart from "components/BarChart";
import Cards from "components/Cards";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChat";
import Footer from "components/Footer";
import NavBar from "components/NavBar/index";
import Info from "components/Info/index";
import { Component } from "react";
import api from "./api";

class App extends Component {

  state = {
    hospitais: [],
  }

  async componentDidMount(){
     await api.getBuscar('manaus').then(res => {
      console.log("asdfasdf -- ",res.data);
      this.setState({hospitais: res.data.hits.hits});
    });
  }

 
  render(){
    const { hospitais } = this.state;

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

    const card5 = {
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

    const card6 = {
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

    //preenchendo o objeto card4
    obj.map((item:any) => {
      if(item.cnes === "5169976"){
        card4.nomeCnes = item.nomeCnes || "";
        card4.obitos = item.obitos || 0;
        card4.ocupHospCli = item.ocupHospCli || 0;
        card4.ocupHospUti = item.ocupHospUti || 0;
        card4.ocupSRAGCli = item.ocupSRAGCli || 0;
        card4.ocupSRAGUti = item.ocupSRAGUti || 0;
        // card4.ocupacaoInformada = item.ocupacaoInformada || 0;
        card4.ofertaHospCli = item.ofertaHospCli || 0;
        card4.ofertaHospUti = item.ofertaHospUti || 0;
        card4.ofertaRespiradores = item.ofertaRespiradores || 0;
        card4.ofertaSRAGCli = item.ofertaSRAGCli || 0;
        card4.ofertaSRAGUti = item.ofertaSRAGUti || 0;
        card4.altas = item.altas || 0;
        card4.dataNotificacaoOcupacao = item.dataNotificacaoOcupacao || 0;
      }
    });

    //preenchendo o objeto card5
    obj.map((item:any) => {
      if(item.cnes === "2012685"){
        card5.nomeCnes = item.nomeCnes || "";
        card5.obitos = item.obitos || 0;
        card5.ocupHospCli = item.ocupHospCli || 0;
        card5.ocupHospUti = item.ocupHospUti || 0;
        card5.ocupSRAGCli = item.ocupSRAGCli || 0;
        card5.ocupSRAGUti = item.ocupSRAGUti || 0;
        // card5.ocupacaoInformada = item.ocupacaoInformada || 0;
        card5.ofertaHospCli = item.ofertaHospCli || 0;
        card5.ofertaHospUti = item.ofertaHospUti || 0;
        card5.ofertaRespiradores = item.ofertaRespiradores || 0;
        card5.ofertaSRAGCli = item.ofertaSRAGCli || 0;
        card5.ofertaSRAGUti = item.ofertaSRAGUti || 0;
        card5.altas = item.altas || 0;
        card5.dataNotificacaoOcupacao = item.dataNotificacaoOcupacao || 0;
      }
    });

    //preenchendo o objeto card6
    obj.map((item:any) => {
      if(item.cnes === "2017644"){
        card6.nomeCnes = item.nomeCnes || "";
        card6.obitos = item.obitos || 0;
        card6.ocupHospCli = item.ocupHospCli || 0;
        card6.ocupHospUti = item.ocupHospUti || 0;
        card6.ocupSRAGCli = item.ocupSRAGCli || 0;
        card6.ocupSRAGUti = item.ocupSRAGUti || 0;
        // card6.ocupacaoInformada = item.ocupacaoInformada || 0;
        card6.ofertaHospCli = item.ofertaHospCli || 0;
        card6.ofertaHospUti = item.ofertaHospUti || 0;
        card6.ofertaRespiradores = item.ofertaRespiradores || 0;
        card6.ofertaSRAGCli = item.ofertaSRAGCli || 0;
        card6.ofertaSRAGUti = item.ofertaSRAGUti || 0;
        card6.altas = item.altas || 0;
        card6.dataNotificacaoOcupacao = item.dataNotificacaoOcupacao || 0;
      }
    });
    
    return(  
      <>
        <NavBar />
        
        <div className="container">
          <h1 className="text-primary py-3">Ocupação dos leitos em Manaus</h1>
          <h2 className="alert alert-info py-3">Principais hospitais de Manaus</h2>
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
             {/* card4 */}
             <div className="col-sm-4">
              <Cards
                nomeCnes={card4.nomeCnes}
                obitos={ card4.obitos}
                ocupHospCli={card4.ocupHospCli}
                ocupHospUti={card4.ocupHospUti}
                ocupSRAGCli={card4.ocupSRAGCli}
                ocupSRAGUti={card4.ocupSRAGUti}
                // ocupacaoInformada={card4.ocupacaoInformada}
                ofertaHospCli={card4.ofertaHospCli}
                ofertaHospUti={card4.ofertaHospUti}
                ofertaRespiradores={card4.ofertaRespiradores}
                ofertaSRAGCli={card4.ofertaSRAGCli}
                ofertaSRAGUti={card4.ofertaSRAGUti}
                altas={card4.altas}
                dataNotificacaoOcupacao={card4.dataNotificacaoOcupacao}
              />
            </div>

            {/* card5 */}
            <div className="col-sm-4">
              <Cards
                nomeCnes={card5.nomeCnes}
                obitos={ card5.obitos}
                ocupHospCli={card5.ocupHospCli}
                ocupHospUti={card5.ocupHospUti}
                ocupSRAGCli={card5.ocupSRAGCli}
                ocupSRAGUti={card5.ocupSRAGUti}
                // ocupacaoInformada={card5.ocupacaoInformada}
                ofertaHospCli={card5.ofertaHospCli}
                ofertaHospUti={card5.ofertaHospUti}
                ofertaRespiradores={card5.ofertaRespiradores}
                ofertaSRAGCli={card5.ofertaSRAGCli}
                ofertaSRAGUti={card5.ofertaSRAGUti}
                altas={card5.altas}
                dataNotificacaoOcupacao={card5.dataNotificacaoOcupacao}
              />
            </div>


            {/* card6 */}
            <div className="col-sm-4">
              <Cards
                nomeCnes={card6.nomeCnes}
                obitos={ card6.obitos}
                ocupHospCli={card6.ocupHospCli}
                ocupHospUti={card6.ocupHospUti}
                ocupSRAGCli={card6.ocupSRAGCli}
                ocupSRAGUti={card6.ocupSRAGUti}
                // ocupacaoInformada={card6.ocupacaoInformada}
                ofertaHospCli={card6.ofertaHospCli}
                ofertaHospUti={card6.ofertaHospUti}
                ofertaRespiradores={card6.ofertaRespiradores}
                ofertaSRAGCli={card6.ofertaSRAGCli}
                ofertaSRAGUti={card6.ofertaSRAGUti}
                altas={card6.altas}
                dataNotificacaoOcupacao={card6.dataNotificacaoOcupacao}
              />
            </div>
          </div>

          <h2 className="alert alert-info py-3">Graficos dos hospitais</h2>
          <div className="row px-3">

            <div className="col-sm-6">
              <h5 className="text-center text-secondary">% Ocupação dos leitos</h5>
              <BarChart 
                hospital1={card1}
                hospital2={card2}
                hospital3={card3}
                hospital4={card4}
                hospital5={card5}
                hospital6={card6}
              />
            </div>

            <div className="col-sm-6">
              <h5 className="text-center text-secondary">Número de respiradores por hospital</h5>
              <DonutChart 
                hospital1={card1}
                hospital2={card2}
                hospital3={card3}
                hospital4={card4}
                hospital5={card5}
                hospital6={card6}
              />
            </div>

          </div>

          <h2 className="alert alert-info py-3">Hospitais de Manaus</h2>
          <div className="row px-3 py-3">
            <DataTable  hospital={hospitais} />
          </div>

          <h2 className="alert alert-info py-3">Informações da equipe</h2>
          <div className="py-3">
            <Info />
          </div>


          <div className="row px-4 py-2 card-warning">
            <div className="card">
              <small className="text-center text-secondary">Dados coletados via API do sitema OpenDataSus. 
                Não nos resposabilizamos pelos dados apresentando nesta página, qualquer incongruência nos dados 
                deverá ser verificado junto ao  <a target="_blank" href="https://opendatasus.saude.gov.br/dataset/registro-de-ocupacao-hospitalar"><i><b>OpenDataSUS</b></i></a>  que é o Banco de Dados onde as informação são coletadas. Sendo assim o propósito da página é apenas apresentar os dados 
                dos principais hospitais de Manaus.</small>
            </div>
             
          </div>

        </div>
        <Footer />
      </>
    );
  }
}

export default App;
