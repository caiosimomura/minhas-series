import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const NovaSerie = () => {
    const [form, setForm] = useState({})
    const [sucesso, setSucesso] = useState(false)
    const [genres, setGenres] = useState([])


    useEffect(() => {
        axios
            .get('/api/genres')
            .then(res => {
                setGenres(res.data.data)
            })
    }, [])

    const onChange = field => event => {
        setForm({
            ...form,
            [field]: event.target.value
        })
    }

    // const onChange = event => {
    //     setForm(event.target.value)
    // }

    

    const save = () => {
        axios.post('/api/series', form)
        .then(res => {
            console.log(res)
            setSucesso(true)
        })
    }

    if(sucesso) {
        return <Redirect to='/series' />  
    }

    return (
        <div className='container'>
            <h1>Nova Série</h1>
            {JSON.stringify(form)}
            <form>
                <div className='form-group'>
                    <label htmlFor='name'>Nome</label>
                    <input type='text' value={form.name} onChange={onChange('name')} className='form-control' id='name' aria-describedby='nameHelp' placeholder='Digite o nome da série' />
                </div>
                <div className='form-group'>
                            <label htmlFor='generoSelecao'>Gênero</label>
                            <select className='form-control' onChange={onChange('genre_id')} id='generoSelecao' value={form.genre_id}>
                                {genres.map(genre => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
                            </select>
                        </div>
                <button type='button' onClick={save} className='btn btn-primary'>Salvar</button>
            </form>
        </div>
    )
}

export default NovaSerie