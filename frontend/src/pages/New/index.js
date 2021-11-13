import React, { useState, useMemo } from 'react'; // useMemo => oberva a mudança das váriáveis do useState

import api from '../../services/api';

import './styles.css'

export default function New({ history }) {

    const [location, setLocation] = useState('');
   
    async function enviar(event) {

        event.preventDefault()

        const data = new FormData();
        const user_id = localStorage.getItem('user');
        
        data.append('location', location)

        await api.post('/spots', data, {
            headers: { user_id }
        })

        history.push('/dashboard')
    }

    return (
        <form onSubmit={enviar}>

            <label htmlFor="location" className="">PAÍS DE ORIGEM *</label>
            <input
                id="location"
                placeholder="País..."
                value={location}
                onChange={e => setLocation(e.target.value)}
            />

            <button type="submit" className="btn">Cadastrar</button>
        </form>
    )
}