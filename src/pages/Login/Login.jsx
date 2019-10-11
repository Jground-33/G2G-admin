import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import userService from '../../services/userService';

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`

export const LoginPage = (props) => {

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  })

  const { email, password } = inputs;

  const _confirm = (data) => {
    const { token } = data.login
    _saveUserData(token)
    props.history.push('/')
  }

  const _saveUserData = token => {
    localStorage.setItem('auth-token', token)
    props.setUser({userId: userService.getUser()})
  }

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value})
  }

  return (
    <div className={styles.Login}>
      <h1>Log in</h1>
      <div className={styles.inputGroup}>
        <label htmlFor="email">Email</label>
        <div className={styles.inputContainer}>
          <input 
            type="text" 
            id="email" 
            name="email"
            autoComplete="off"
            required
            value={email}
            onChange={handleChange}
            />
        </div>
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="password">Password</label>
        <div className={styles.inputContainer}>
          <input 
            type="password" 
            id="password" 
            name="password"
            autoComplete="new-password"
            required
            value={password}
            onChange={handleChange}
          />
        </div>
      </div>
      <Mutation 
        mutation={LOGIN_MUTATION}
        variables={{email, password}}
        onCompleted={data => _confirm(data)}
      >
        {mutation => (
          <div 
            className={styles.darkButton}
            onClick={mutation}
          >
            Log in
          </div>
        )}
      </Mutation>
    </div>
  )
}