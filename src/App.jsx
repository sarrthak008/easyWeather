import React from 'react'
import "./App.css"
import GetCity from './views/GetCity/GetCity'
import Home from './views/Home/Home'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'

const App = () => {
  return (
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<GetCity/>}/>
            <Route path='/home' element={<Home/>}/>
        </Routes>  
    </BrowserRouter>

  )
}

export default App