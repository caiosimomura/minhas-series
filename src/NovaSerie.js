import React, {useState} from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const NovaSerie = () => {
    const [name, setName] = useState('')
    const [sucesso, setSucesso] = useState(false)
    const onChange = event => {
        setName(event.target.value)
    }

    const save = () => {
        axios.post('/api/series', {
            name
        })
        .then(res => {
            setSucesso(true)
        })
    }

    if(sucesso) {
        return <Redirect to='/series' />  
    }

    return (
        <div className='container'>
            <h1>Nova Série</h1>
            <form>
                <div className='form-group'>
                    <label htmlFor='name'>Nome</label>
                    <input type='text' value={name} onChange={onChange} className='form-control' id='name' aria-describedby='nameHelp' placeholder='Digite o nome da série' />
                </div>
                <button type='button' onClick={save} className='btn btn-primary'>Salvar</button>
            </form>
        </div>
    )
}

export default NovaSerie