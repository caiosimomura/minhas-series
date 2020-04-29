import React, {useState} from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const NovoGenero = () => {
    const [name, setName] = useState('')
    const [sucesso, setSucesso] = useState(false)
    const onChange = event => {
        setName(event.target.value)
    }

    const save = () => {
        axios.post('/api/genres', {
            name
        })
        .then(res => {
            setSucesso(true)
        })
    }

    if(sucesso) {
        return <Redirect to='/generos' />  
    }

    return (
        <div className='container'>
            <h1>Novo Genêro</h1>
            <form>
                <div className='form-group'>
                    <label htmlFor='name'>Nome</label>
                    <input type='text' value={name} onChange={onChange} className='form-control' id='name' aria-describedby='nameHelp' placeholder='Digite o nome do genêro' />
                </div>
                <button type='button' onClick={save} className='btn btn-primary'>Salvar</button>
            </form>
        </div>
    )
}

export default NovoGenero