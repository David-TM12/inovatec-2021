import axios from "axios";

class api {
  constructor() {
    const api = axios.create({
      baseURL: "https://elastic-leitos.saude.gov.br/"
    });
    
    this.api = api;
  }

  async getBuscar(municipio) {
    const response = await this.api.get(`leito_ocupacao/_search?q=municipio:${municipio}`,{
      auth: {
        username: 'user-api-leitos',
        password: 'aQbLL3ZStaTr38tj'
      },
      params: {
        size: 100,
      },
    });
    return response;
  }

  async postBuscar() {

    const params = {
      auth: {
        username: 'user-api-leitos',
        password: 'aQbLL3ZStaTr38tj'
      },
      params: {
        size: 100
      },
      query: {
        match: {
        "municipio": "manaus"
        }
      }
    }

    const response = await this.api.post("leito_ocupacao/_search", params);
    return response;
  }
}

export default new api();