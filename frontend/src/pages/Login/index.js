import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await api.post('/register', { name, location, age: '' });

    if (response.status == 204) {
      setName('')
      setLocation('')
      const res = !response.data.msg ? "Usuário já existente" : response.data.msg
      return alert(`${res}`)
    }
    if (response.data) {
      const { _id } = response.data.user;
      localStorage.setItem('user', _id);
      alert(`${response.data.msg}`)
      setName('')
      setLocation('')
      history.push('/listuser')
    }
  }

  return (
    <>
      <p>
        Gerencie sua <strong>equipe</strong> de uma forma <strong>eficaz</strong> e tenha total controle de seus dados.
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">NOME *</label>
        <input
          id="name"
          type="name"
          value={name}
          placeholder="Cadastre um novo usuário"
          onChange={event => setName(event.target.value)}
          required
          maxLength='20'
        />
        <label htmlFor="name">PAÍS *</label>
        <input
          id="name"
          type="name"
          value={location}
          placeholder="País..."
          onChange={event => setLocation(event.target.value)}
          required
          maxLength='12'
        />


        <button className="btn" type="submit">Cadastrar</button>
        <button className="btn-secundary" onClick={() => history.push('/listuser')} type="submit">Lista de Usuário</button>
      </form>
    </>
  )
}