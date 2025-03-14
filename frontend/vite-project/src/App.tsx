// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './componentes/Login'
import Main from './componentes/Main'
import './App.css'

function App() {
//  / const [count, setCount] = useState(0)

  return (
    <> 
          
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
       
    </>
  )
}

export default App
