import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Generos = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get('/api/genres')
            .then(res => {
                setData(res.data.data)
            })
    })

    if (data.length === 0) {
        return (
            <div className='container'>
                <h1>Genêros</h1>
                <div className='alert alert-warning' role='alert'>
                    Você não tem genêros cadastrados!
                </div>
            </div>
        )
    }

    const deletaGenero = id => {
        axios
            .delete('api/genres/' + id)
            .then(res => {
                const filtro = data.filter(item => item.id !== id)
                setData(filtro)
            })
    }

    const renderizaLinha = record => {
        return (
            <tr key={record.id}>
                <th scope='row'>{record.id}</th>
                <td>{record.name}</td>
                <td>
                    <button className='btn btn-danger' onClick={() => deletaGenero(record.id)}>Remover</button>
                    <Link to={'/generos/' + record.id} className='btn btn-warning'>Editar</Link>
                </td>
            </tr>
        )
    }
    return (
        <div className='container'>
            <h1>Genêros</h1>
            <Link to='/generos/novo' className='btn btn-primary'>Novo</Link>
            <table className='table'>
                <thead className='thead-dark'>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>Nome</th>
                        <th scope='col'>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(renderizaLinha)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Generos