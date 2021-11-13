import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import './styles.css'

import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";

export default function New({ history }) {

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [age, setAge] = useState('');
    const [showInput, setShowInput] = useState(false);

    const [userList, setUserList] = useState([]);

    useEffect(() => {
        loadUserList();
    }, []);

    async function loadUserList() {
        const response = await api.get('/search')
        setUserList(response.data)
    }

    async function handleEdit(e, id) {
        e.preventDefault();
        const response = await api.put(`/update/${id}`, {
            name,
            location,
            age
        })
        // USado Alert apenas para exemplo mas em uma aplicação real não seria usado
        alert(`${response.data.msg}`)
    }

    async function handleSubmit(event) {
        event.preventDefault()
        history.push('/')
    }

    async function handleDelete(e, id) {
        e.preventDefault();
        const response = await api.delete(`/delete/${id}`)
        setUserList(userList.filter(list => list._id !== id));
        // USado Alert apenas para exemplo mas em uma aplicação real não seria usado
        return alert(`${response.data.msg}`)
    }

    return (
        <form>

            <h1 htmlFor="busca" className="">LISTAGEM DE USUÁRIOS</h1>
            <label />
            {userList.map(i => (<div key={i._id}>
                <AiTwotoneEdit size="25" title="editar" onClick={() =>
                    history.push({
                        pathname: '/edituser',
                        search: '',
                        state: { name: i.name, location: i.location, age: i.age, id: i._id }
                    })} />

                <AiTwotoneDelete size="25" title="Exluir" onClick={e => handleDelete(e, i._id)} />
                <h2>Nome</h2>
                <h3>{i.name}</h3>
                {showInput && <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                />}
                <label>País</label><br />
                <p>{i.location}</p>
                <label>Idade</label><br />
                <p>{i.age || '---'}</p>
                <hr />
            </div>
            ))}



            <button className="btn-secundary" onClick={() => history.push('/')}>Voltar</button>

        </form>
    )
}