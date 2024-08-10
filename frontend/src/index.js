import React from 'react'
import ReactDOM from 'react-dom/client'
import 'src/styles/index.scss'

import AppContext from './context.js'
import { Sections } from './components/Section/Section.js'
import MainPage from './pages/MainPage.js'
import AboutPage from './pages/AboutPage/AboutPage.js'
import BenefitsPage from './pages/BenefitsPage/BenefitsPage.js'
import EmployeesPage from './pages/EmployeesPage/EmployeesPage.js'
import CoursesPage from './pages/CoursesPage/CoursesPage.js'
import Header from './components/Header/Header.js'
import RoadMap from './components/RoadMap/RoadMap.js'
import Footer from './components/Footer/Footer.js'
import AllPopups from './components/Popup/AllPopups.js'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <AppContext>
    
    <Header />
    <RoadMap />
    
    <Sections sections={
      [
        {section: <MainPage />, main_section: true, content_id: 'main_content'},
        {section: <AboutPage />, content_id: 'about_content', section_title: 'О нас'},
        {section: <BenefitsPage />, content_id: 'benefits_content', section_title: 'Почему мы?'},
        {section: <EmployeesPage />, content_id: 'employeers_content', fixed_height: true, section_title: 'Сотрудники'},
        {section: <CoursesPage />, content_id: 'courses_content', fixed_height: true, section_title: 'Запишитесь на бесплатную консультацию', courses_section: true}
      ]}
    />
    
    <Footer />
    <AllPopups />

  </AppContext>
)
