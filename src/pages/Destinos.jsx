import React from "react";

import {
  CardGroup,
  CardBody,
  Card,
  CardText,
  CardImg,
  Container,
  Accordion,
  ButtonToggle,
  Collapse,
} from "reactstrap";

import Title from "../components/Title";
import FormReserva from "../components/FormReserva";
import RegistroViagens from "../components/RegistroViagens";

import Floripa from "../_assets/img/florianopolis.png";
import Foz from "../_assets/img/foz-iguacu.png";
import Gramado from "../_assets/img/gramado.png";
import Disney from "../_assets/img/disney.png";
import Buenos from "../_assets/img/buenos-aires.png";
import Paris from "../_assets/img/paris.png";

const Destinos = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Title title="Destinos mais procurados" />
      <h3 className="subtitle">Nacionais</h3>
      <CardGroup color="transparent">
        <Card className="card">
          <CardImg variant="top" src={Floripa} alt="Florianópolis" />
          <CardBody>
            <CardText>
              <p>
                Praias paradisíacas, culinária regional, e descanso merecido.
                Tudo isso e muito mais em uma só viagem! Conheça a famosa ilha
                da magia!
                <br />
                <b>Confira! Pacotes em até 12x</b>
              </p>
            </CardText>
          </CardBody>
        </Card>
        <Card className="card">
          <CardImg variant="top" src={Foz} alt="Foz do Iguaçu" />
          <CardBody>
            <CardText>
              <p>
                Visite as Cataratas do Iguaçu e veja de perto as 275 quedas
                d’água que compõem uma das Sete Novas Maravilhas da Natureza.
                <br />
                <b>Confira! Pacotes em até 12x</b>
              </p>
            </CardText>
          </CardBody>
        </Card>
        <Card className="card">
          <CardImg variant="top" src={Gramado} alt="Gramado" />
          <CardBody>
            <CardText>
              <p>
                Exibições de luzes no Natal e hortênsias em flor na primavera, a
                cidade possui um toque bávaro com chalés alpinos, chocolateiros
                e lojas de artesanato.
                <br />
                <b>Confira! Pacotes em até 12x</b>
              </p>
            </CardText>
          </CardBody>
        </Card>
      </CardGroup>
      <h3 className="subtitle">Internacionais</h3>
      <CardGroup>
        <Card className="card">
          <CardImg variant="top" src={Disney} alt="Disney" />
          <CardBody>
            <CardText>
              <p>
                Um lugar onde os contos de fadas se transformam em realidade!
                Este é o lugar onde a diversão e a magia reinam. Com seus
                ingressos você poderá percorrer os quatro parques da Disney:
                Magic Kingdom Park, Epcot, Disney´s Hollywood Studios e Disney´s
                Animal Kingdom, quatro terras onde você encontrará o encanto e
                as maravilhas da Disney World!
                <br />
                <b>Confira! Pacotes em até 12x</b>
              </p>
            </CardText>
          </CardBody>
        </Card>
        <Card className="card">
          <CardImg variant="top" src={Buenos} alt="Buemos Aires" />
          <CardBody>
            <CardText>
              <p>
                Uma viagem para todos os tipos de público! A língua espanhola e
                a proximidade com o Brasil facilita o deslocamento pelo país.
                Outro atrativo é o charme portenho. Os cafés com mesinhas nas
                calçadas, arquitetura europeia, shows de tango e os restaurantes
                com o melhor da gastronomia argentina são alguns dos melhores
                motivos para arrumar as malas!
                <br />
                <b>Confira! Pacotes em até 12x</b>
              </p>
            </CardText>
          </CardBody>
        </Card>
        <Card className="card">
          <CardImg variant="top" src={Paris} alt="Paris" />
          <CardBody>
            <CardText>
              <p>
                Um dos destinos mais românticos do mundo, Paris atrai muitos
                turistas por conta de seus museus, gastronomia ímpar, monumentos
                importantes e por todas as histórias que cercam a capital da
                França. Entre os cartões-postais mais importantes que você verá
                estão a Torre Eiffel, o Museu do Louvre, o Arco do Triunfo e a
                Catedral de Notre-Dame.
                <br />
                <b>Confira! Pacotes em até 12x</b>
              </p>
            </CardText>
          </CardBody>
        </Card>
      </CardGroup>
      <FormReserva />
      <Container className="registros">
        <Accordion defaultActiveKey="0">
          <ButtonToggle
            eventKey="0"
            onClick={toggle}
            color="outline-secondary"
            className="toggle"
          >
            Consultar Mensagens Enviadas
          </ButtonToggle>
          <Collapse eventKey="0" isOpen={isOpen}>
            <RegistroViagens />
          </Collapse>
        </Accordion>
      </Container>
    </>
  );
};

export default Destinos;
