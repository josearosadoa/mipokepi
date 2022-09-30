import { useState } from 'react'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import UserInput from './components/UserInput'
import Pokemon from './components/Pokemon'
import PokemonDetail from './components/PokemonDetail'
import ProtectedRoutes from './components/ProtectedRoute'


function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter>
        <div className="App">
        <Routes>
          <Route path='/' element={<UserInput/>}/>
          
          <Route element={<ProtectedRoutes />}>
          <Route path='/pokemon' element={<Pokemon/>}/>
          <Route path='/pokemon/:id' element={<PokemonDetail/>}/>
          </Route>
         
          </Routes>
    </div>
      </HashRouter>
     
  )
}

export default App
