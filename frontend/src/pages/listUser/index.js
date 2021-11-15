import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import './listUser.css'

import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";

export default function New({ history }) {

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [age, setAge] = useState('');

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
        <main>

            <div>
                <h1 htmlFor="busca" className="titleList">Lista de Usuários</h1>
                {userList.map(i => (<div className="containerList" key={i._id}>
                    <AiTwotoneEdit className="iconEdit" size="27" title="editar" onClick={() =>
                        history.push({
                            pathname: '/edituser',
                            search: '',
                            state: { name: i.name, location: i.location, age: i.age, id: i._id }
                        })} />

                    <AiTwotoneDelete size="27" title="Exluir" className="iconDelete" onClick={e => handleDelete(e, i._id)} />

                    <h2 className="titleUser">Nome</h2>
                    <h3 className="name">{i.name}</h3>
                    <h2 className="titleLocation">País</h2><br />
                    <h3 className="location">{i.location}</h3>
                    <h2 className="titleAge">Idade</h2><br />
                    <h3 className="age">{i.age || '---'}</h3>
                
                </div>
                ))}
                <button className="btn-secundary" onClick={() => history.push('/')}>Voltar</button>
            </div>

        </main>
    )
}