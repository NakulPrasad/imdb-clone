import React from 'react'
import Home from './pages/Home'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/common/Header'
import { routePath } from './constants/routes'
import CategoryMovies from './pages/CategoryMovies'
//adding react router dom

function App() {
  return (
    <Router>
      <Header />
      <Routes>

        <Route path={routePath.home} element={<Home />} />
        <Route path={routePath.categories} element={<CategoryMovies />} />
        <Route path={routePath.invalid} element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App