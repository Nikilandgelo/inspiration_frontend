import { employers } from './list_employers'
import Employer from "./Employer"

import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css'
import { Autoplay } from "swiper/modules"
import { useState } from 'react'
import { motion, useMotionValue } from 'framer-motion'


export default function EmployeesPage()
{
    const [current_index_slide, set_current_slide] = useState(2)
    const [autoplay_paused, set_autoplay_state] = useState(false)
    const percentage_progress = useMotionValue("-101%")
    
    return (
        <div id='employees_page_container'>
            <Swiper slidesPerView={1.25}
            spaceBetween={15}
            grabCursor={true}
            loop={true}
            centeredSlides={true}
            initialSlide={current_index_slide}
            breakpoints={ {
                1700: {slidesPerView: 2.75},
                1500: {slidesPerView: 2.45},
                1400: {slidesPerView: 2.25},
                1250: {slidesPerView: 2.85},
                1080: {slidesPerView: 2.65},
                992: {slidesPerView: 2.45},
                850: {slidesPerView: 2.15},
                768: {slidesPerView: 2},
                668: {slidesPerView: 1.75},
                576: {slidesPerView: 1.6},
                476: {slidesPerView: 1.4, spaceBetween: 25 },
            } }
            modules={ [Autoplay] }
            autoplay={ {} }
            speed={1000}
            resistanceRatio={1}
            onAutoplayTimeLeft={ (swiper, timeleft, percentage) => {
                percentage_progress.set(`${percentage * -101}%`)
            } }
            onSlideChange={ (value) => { 
                percentage_progress.set("-101%")
                set_current_slide(value.realIndex)
            } } 
            onAutoplayPause={ () => {
                !autoplay_paused ? set_autoplay_state(true) : null
            }}
            onAutoplayResume={ () => { set_autoplay_state(false) }}>
                { employers.map( (dict_employer, index) => {
                    return (
                        <SwiperSlide key={index} >
                            <Employer photo={dict_employer.photo}
                            name={dict_employer.name}
                            position={dict_employer.position}
                            text={dict_employer.text} />
                        </SwiperSlide>
                    )
                }) }
            </Swiper>
                
            <div id='scrollbar_container'>
                { employers.map( (value, index) => {
                    return (
                        <div className={index === current_index_slide ? 'current_progress_value': null}
                        key={index}>
                            <motion.div className={autoplay_paused ? 'progress hide_progress' : 'progress'}
                            style={ index === current_index_slide
                            ? { x: percentage_progress }
                            : { x: "-101%" } 
                            }>
                            </motion.div>
                        </div>
                    )
                }) }
            </div>
        </div>
    )
}