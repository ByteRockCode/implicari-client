import React from 'react';
import styled from 'styled-components';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

import LoginForm from './LoginForm';


const Header = styled.header`
  background-color: #DC3545;
  padding: 2rem 0;
  text-align: center;
`;


const LinkHeader = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: inherit;
    text-decoration: none;
  }
`


const Login = () => (
  <div>
    <Header>
      <Container>
        <h1>
          <LinkHeader to="/">Implicari</LinkHeader>
        </h1>
      </Container>
    </Header>

    <Container>
      <Row>
        <Col sm={{ size: 6, offset: 3 }}>

          <div className="p-4">
            <h1 className="h2 text-center">Iniciar Sesión</h1>
          </div>

          <LoginForm />

        </Col>
      </Row>
    </Container>
  </div>
);


export default Login;
