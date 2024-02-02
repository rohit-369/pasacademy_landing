import { useState } from 'react'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Content from './Pages/Content';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/content' element={<Content />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
