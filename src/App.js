import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Header from './Header'
import Generos from './Generos'
import NovoGeneros from './NovoGeneros'
import EditarGeneros from './EditarGeneros'
import Series from './Series'
import NovaSerie from './NovaSerie'



const Home = () => {
  return <h1>Home</h1>
}

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/generos' exact component={Generos} />
          <Route path='/generos/novo' exact component={NovoGeneros} />
          <Route path='/generos/:id' exact component={EditarGeneros} />
          <Route path='/series' exact component={Series} />
          <Route path='/series/novo' exact component={NovaSerie} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
