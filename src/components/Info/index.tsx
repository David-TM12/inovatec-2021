import { useState } from "react";
import { Accordion, Button, Card, Modal } from "react-bootstrap";
import imgPadrao from "assets/img/alunos/Padrao.png";
import imgFabricio from "assets/img/alunos/FabricioTavares.jpeg";
import imgRafael from "assets/img/alunos/RafaelSouza.jpeg";
import imgDavid from "assets/img/alunos/DavidMagalhaes1.jpeg";
import imgEstefany from "assets/img/alunos/Estefany1.jpeg";
import imgJesse from "assets/img/alunos/Jesse3.jpeg";

const Info = () => {
  const [show, setShow] = useState(false);

  return (
    <>
    {/* Alunos */}
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="outline-success" eventKey="0">
              Equipe
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <div className="row py-2 card-info">
                <div className="col-3">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={imgRafael || imgPadrao} className="p-2 card-foto"/>
                    <Card.Body>
                      <Card.Title>RAFAEL PEREIRA DE SOUZA</Card.Title>
                      <Card.Text>
                        Curso: sistemas de informação Turno: noturno
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-3">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={imgDavid || imgPadrao} className="p-2 card-foto"/>
                    <Card.Body>
                      <Card.Title>DAVID TEIXEIRA MAGALHÃES</Card.Title>
                      <Card.Text>
                        Curso: sistemas de informação Turno: noturno
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-3">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={imgFabricio || imgPadrao} className="p-2 card-foto"/>
                    <Card.Body>
                      <Card.Title>FABRICIO DOS SANTOS TAVARES</Card.Title>
                      <Card.Text>
                        Curso: sistemas de informação Turno: noturno
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                <div className="col-3">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={imgEstefany || imgPadrao} className="p-2 card-foto"/>
                    <Card.Body>
                      <Card.Title>STEFANY LOHANY AVINTE SANTIAGO</Card.Title>
                      <Card.Text>
                        Curso: sistemas de informação Turno: noturno
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>

              <div className="row py-2">
                <div className="col-3">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={imgPadrao} className="p-2 card-foto"/>
                    <Card.Body>
                      <Card.Title>TELIANA DOS SANTOS DE SOUZA</Card.Title>
                      <Card.Text>
                        Curso: sistemas de informação Turno: noturno
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                <div className="col-3">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={imgPadrao} className="p-2 card-foto"/>
                    <Card.Body>
                      <Card.Title>FERNANDO COSME DA SILVA NETO</Card.Title>
                      <Card.Text>
                        Curso: sistemas de informação Turno: noturno
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                <div className="col-3">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={imgJesse || imgPadrao} className="p-2 card-foto"/>
                    <Card.Body>
                      <Card.Title>JESSÉ DOS SANTOS FREITAS</Card.Title>
                      <Card.Text>
                        Curso: sistemas de informação Turno: noturno
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                <div className="col-3">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={imgPadrao} className="p-2 card-foto"/>
                    <Card.Body>
                      <Card.Title>JOÃO FERREIRA RAMOS FILHO</Card.Title>
                      <Card.Text>
                        Curso: sistemas de informação Turno: noturno
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>

              <div className="row py-2">
                <div className="col-3">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={imgPadrao} className="p-2 card-foto"/>
                    <Card.Body>
                      <Card.Title>OSCAR BARBOSA DE OLIVEIRA</Card.Title>
                      <Card.Text>
                        Curso: sistemas de informação Turno: noturno
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-3">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={imgPadrao} className="p-2 card-foto"/>
                    <Card.Body>
                      <Card.Title>DENNER LUCAS DA SILVA PANTOJA</Card.Title>
                      <Card.Text>
                        Curso: sistemas de informação Turno: noturno
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-3">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={imgPadrao} className="p-2 card-foto"/>
                    <Card.Body>
                      <Card.Title>SAMUEL GOMES MENINO</Card.Title>
                      <Card.Text>
                        Curso: sistemas de informação Turno: noturno
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        {/* //Coordenadores */}
        <Card>
            <Card.Header>
            <Accordion.Toggle as={Button} variant="outline-success" eventKey="1">
                Coordenadores
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
            <Card.Body>
            <div className="row py-2 card-info">
                <div className="col-3">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={imgPadrao} className="p-2 card-foto"/>
                    <Card.Body>
                      <Card.Title>Angela Timotea</Card.Title>
                      <Card.Text>
                        Professora: SISTEMAS OPERACIONAIS
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-3">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={imgPadrao} className="p-2 card-foto"/>
                    <Card.Body>
                      <Card.Title>Jaqueline Pinheiro</Card.Title>
                      <Card.Text>
                        Professora: ESTRUTURA DE DADOS   I
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
            </div>
            </Card.Body>
            </Accordion.Collapse>
        </Card>
      </Accordion>
 
    </>
  );
};

export default Info;
