import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import './styles.css'

export default function New({ history }) {

    const [name, setName] = useState(history.location.state.name);
    const [location, setLocation] = useState(history.location.state.location);
    const [age, setAge] = useState(history.location.state.age);

    useEffect(() => {

    }, []);

    async function handleEdit(e, id) {
        e.preventDefault();
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const response = await api.put(`/update/${history.location.state.id}`, {
            name,
            location,
            age
        })
        // USado Alert apenas para exemplo mas em uma aplicação real não seria usado
        alert(`${response.data}`)
        history.push('/listuser')
    }

    return (
        <form onSubmit={handleSubmit}>

            <h1 className="">Edição de Usuários</h1>
            <label />
            <div>
                <h2>Nome</h2><br />
                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    maxLength="20"
                /><br />
                <h2>País</h2><br />
                <input
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    maxLength="12"
                /><br />
                <h2>Idade</h2><br />
                <input
                    value={age || ''}
                    placeholder={!age ? "Adicione uma idade" : ''}
                    onChange={e => setAge(e.target.value)}
                    maxLength="3"
                    type="number"
                /><br />
            </div>

            <button className="btn" type="submit">Salvar</button>
            <button className="btn-secundary" onClick={() => history.push('/listuser')}>Voltar</button>

        </form>
    )
}