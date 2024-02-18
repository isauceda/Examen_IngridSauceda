import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Home } from './componentes/Home';
import { NavBar } from './componentes/NavBar';
import { Clientes } from './componentes/Clientes';
import './styles.css'
import { BrowserRouter , Routes, Route} from 'react-router-dom';

function App() {

 
  return (
    <>
<NavBar></NavBar>

<BrowserRouter>
<Routes>
<Route path= '/' element = {<Home/>}></Route>
<Route path ='/clientes' element= {<Clientes/>}></Route>
</Routes>
</BrowserRouter>
    
    </>
  )
}

export default App
