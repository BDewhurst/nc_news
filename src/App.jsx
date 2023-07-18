import { useState } from 'react'
import Home from './assets/components/Home'
import Nav from './assets/components/Nav'
import Articles from './assets/components/Articles'
import {Routes, Route } from 'react-router-dom'


function App() {


  return (
    <>
     <Nav/>
  <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/articles" element={<Articles />}/>
        </Routes>
    </>
  )
}

export default App
