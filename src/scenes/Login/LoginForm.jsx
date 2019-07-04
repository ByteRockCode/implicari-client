import React, { useState, useCallback } from 'react';
import gql from 'graphql-tag';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { Mutation } from 'react-apollo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


const TOKEN_AUTH = gql`
  mutation tokenAuthMuttion($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
      token
    }
  }
`;


const LoginForm = ({ tokenAuth, loading }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitCallback = useCallback(
    (event) => {
      event.preventDefault();

      tokenAuth({ variables: { email, password }})
        .then(({ data }) => {
          localStorage.setItem('token', data.tokenAuth.token);
          return data;
        })
      ;
    },
    [email, password, tokenAuth],
  );

  return (
    <Form onSubmit={submitCallback}>
      <FormGroup>
        <Label for="email">Dirección de correo electrónico</Label>
        <Input
          autoFocus
          disabled={loading}
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          type="text"
        />
      </FormGroup>

      <FormGroup>
        <Label for="password">Contraseña</Label>
        <Input
          disabled={loading}
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </FormGroup>

      <br/>

      {loading ? (
        <Button color="dark" block disabled>
          <FontAwesomeIcon icon={faSpinner} spin />
        </Button>
      ) : (
        <Button color="dark" block>iniciar sesión</Button>
      )}
    </Form>
  );
};


const LoginFormMutation = () => {
  return (
    <Mutation mutation={TOKEN_AUTH}>
      {(tokenAuth, { loading, error }) => (
        <div>
          <LoginForm tokenAuth={tokenAuth} loading={loading} />
          {loading && <p>Loading...</p>}
          {error && <p>Error :( Please try again</p>}
        </div>
      )}
    </Mutation>
  );
};


export default LoginFormMutation;
