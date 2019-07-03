import React from 'react';
import styled from 'styled-components';
import { Button, Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

import headerBackgroundUrl from './images/header-background.jpg';
import classroomUrl from './images/classroom.jpg';


const Header = styled.header`
  background-color: #DC3545;
  background-image: url('${headerBackgroundUrl}');
  background-size: cover;
  padding: 4rem 0;
  text-align: center;
`;


const SectionImage = styled.div`
  background-image: url('${classroomUrl}');
  background-size: cover;
`


const Landing = () => (
  <div>
    <Header>

      <Container style={{ maxWidth: '600px' }}>

        <h1>Implicari</h1>

        <br/>

        <p className="lead">Una libreta de comunicaciones online, disponible en todo momento. Mejora la comunicación de tu sala de clases con Implicari.</p>

        <br/>

        <Row>
          <Col className="mt-1" sm="6">
            <Button tag={Link} to="/iniciar-sesion" size="lg" color="dark" outline block>iniciar sesión</Button>
          </Col>
          <Col className="mt-1" sm="6">
            <Button tag="a" href="#" size="lg" color="dark" block>registrarse</Button>
          </Col>
        </Row>

      </Container>

    </Header>

    <div className="py-5 my-5 container">
      <h2 className="text-center">Participa en la etapa de prueba</h2>

      <br/>

      <Row className="py-2 my-5">
        <Col sm={{ size: 6, offset: 3}}>
          <Button tag="a" href="#" size="lg" color="dark" outline block>participar</Button>
        </Col>
      </Row>
    </div>

    <section className="bg-danger d-flex align-items-stretch">

      <SectionImage className="flex-grow-1 w-50 d-none d-sm-block"></SectionImage>

      <div className="flex-grow-1 w-50 p-5 text-whit">

        <h2 className="pb-5">Porque usar Implicari</h2>

        <article className="pb-4">
          <h4 className="text-white">Registro de estudiantes y apoderados</h4>
          <p className="text-dark">Todos en un mismo lugar, independiente de la asistencia.</p>
        </article>

        <article className="pb-4">
          <h4 className="text-white">Envía una comunicación que llega a todos</h4>
          <p className="text-dark">Solo debes hacer una comunicación y todos la recibirán. ¿Alguien no llevo la libreta ese día? eso ya no será un problema.</p>
        </article>

        <article className="pb-4">
          <h4 className="text-white">La libreta de comunicaciones en todo momento</h4>
          <p className="text-dark">Necesitas revisar la libreta, pero no la tienes a mano? solo ingresa a Implicari y listo.</p>
        </article>

        <article>
          <h4 className="text-white">Fechas importantes como pruebas y reuniones</h4>
          <p className="text-dark">El calendario de actividades siempre actualizado, y con recordatorios para que no olvides nada.</p>
        </article>

      </div>

    </section>

  </div>
);


export default Landing;
