import React, {useEffect, useState} from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Header from './Header'
import Generos from './Generos'
import NovoGeneros from './NovoGeneros'
import EditarGeneros from './EditarGeneros'

import axios from 'axios'



const Home = () => {
  return <h1>Home</h1>
}

function App() {
  const [data, setData] = useState({})
  useEffect(() => {
    axios.get('/api').then(res => {
      setData(res.data)
    })
  },[])

  return (
    <Router>
      <div>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/generos/novo' exact component={NovoGeneros} />
        <Route path='/generos/:id' exact component={EditarGeneros} />
        <Route path='/generos' exact component={Generos} />
        <pre>{JSON.stringify(data)}</pre>
      </div>
    </Router>

  );
}

export default App;
