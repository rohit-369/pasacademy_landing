import { useState } from 'react'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Content from './Pages/Content';
import BlogContent from './Pages/BlogContent';
import CurrentAffairContent from './Pages/CurrentAffairContent';
import FaqContent from './Pages/FaqContent';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/content' element={<Content />} />
          <Route path='/blogContent/:id' element={<BlogContent />} />
          <Route path='/currentAffair/:id' element={<CurrentAffairContent />} />
          <Route path='/faq/:id' element={<FaqContent />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
