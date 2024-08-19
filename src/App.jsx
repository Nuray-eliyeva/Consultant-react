import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Plans from './Pages/Plans'
import Projects from './Pages/Projects'
import Services from './Pages/Services'
import Tools from './Pages/Tools'
import About from './Pages/About'

function App() {
  return (

    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About/>}></Route>
          <Route element={<Projects />} path='/projects'></Route>
          <Route element={<Plans />} path='/plans'></Route>
          <Route element={<Services />} path='/services'></Route>
          <Route element={<Tools />} path='/tools'></Route>
        </Route>
      </Routes>
    </>

  )
}

export default App