import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import './styles.css'

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
        alert(`${response.data.msg}`)
    }

    async function handleSubmit(event) {
        event.preventDefault()

        history.push('/')
    }

    async function handleDelete(e, id) {
        e.preventDefault();
        const response = api.delete(`/delete/${id}`)
        loadUserList();
        // alert(`${response}`) verificar isto
        return alert("Excluído com Sucesso!")
    }

    return (
        <form>

            <h1 htmlFor="busca" className="">LISTAGEM DE USUÁRIOS</h1>
            <label />
            <p>Edição e exclusão de usuários.</p>
            <label />
            {/* <input
                id="busca"
                placeholder="Pesquise um usuário..."
                value={busca}
                onChange={e => setBusca(e.target.value)}
            /> */}

            {userList.map(i => (<div>
                <h2>Nome</h2>
                <h3 title="Exluir" onClick={e => handleDelete(e, i._id)}>X</h3>
                <input
                    key={i._id}
                    defaultValue={i.name}
                /><br />
                <label>País</label><br />
                <input
                    key={i._id}
                    value={i.location}
                /><br />
                <label>Idade</label><br />
                <input
                    key={i._id}
                    value={i.age}
                /><br />
                <button onClick={e => handleEdit(e, i._id)} className="btn">Salvar Edição</button>
            </div>
            ))}


            
            <button className="btn-secundary" onClick={() => history.push('/')} type="submit">Voltar</button>

        </form>
    )
}