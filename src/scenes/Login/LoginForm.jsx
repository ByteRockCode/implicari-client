import React from 'react';
import styled from 'styled-components';
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { Link } from 'react-router-dom';


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

const LoginForm = () => (
  <Form>
    <FormGroup>
      <Label for="email">Dirección de correo electrónico</Label>
      <Input type="text" name="email" id="email" autoFocus />
    </FormGroup>

    <FormGroup>
      <Label for="password">Contraseña</Label>
      <Input type="password" name="password" id="password" />
    </FormGroup>

    <br/>

    <Button color="dark" block>iniciar sesión</Button>
  </Form>
)


export default LoginForm;
