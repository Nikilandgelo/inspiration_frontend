import React from 'react'
import ReactDOM from 'react-dom/client'
import 'src/styles/index.scss'

import MainPage from './pages/MainPage.js'
import AboutPage from './pages/AboutPage/AboutPage.js'
import BenefitsPage from './pages/BenefitsPage/BenefitsPage.js'
import EmployeesPage from './pages/EmployeesPage/EmployeesPage.js'
import CoursesPage from './pages/CoursesPage/CoursesPageContainer'
import Header from './components/Header/Header.js'
import RoadMap from './components/RoadMap/RoadMap.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <Header />
    <RoadMap />
    
    <MainPage />
    <AboutPage />
    <BenefitsPage />
    <EmployeesPage />
    <CoursesPage />
  </>
)