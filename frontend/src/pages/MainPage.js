import poster from 'src/assets/webp_images/background_video_poster.webp'
import quotes from 'src/assets/svg_images/quotes_flip.svg'
import scrollToAnchor from 'src/components/Section/ScrollToAnchor.js'
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';


export default function MainPage()
{   
    const title = useRef(null)
    useEffect( () => {
        title.current.classList.add('title_ready')
    }, [])
    
    const button_variants = {
        hover: {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0},
        tap: { 
            scale: 0.98,
            transition: {ease: 'easeOut', duration: 0.025}
        }
    }
    const div_variants = {
        init: { x: '-100%',
            opacity: 0,
            transition: {ease: 'easeOut', duration: 0.25}},
        hover: { x: '0%',
            opacity: 1,
            transition: {ease: 'easeOut', duration: 0.25}
        }
    }
    
    return (
    <>
        <div id='start_page_content'>
            <span>
                <h2>Центр иностранных<br/>языков </h2><h1 className="inspiration_title" ref={title}/>
            </span>
            <img src={quotes} className='quote_icon'/>
            <p id='main_page_quote'>Ошибки - это всего лишь часть <u>обучения.</u>
            </p>
            <motion.button id='main_page_action'
            variants={button_variants}
            initial="init"
            whileHover="hover"
            whileTap="tap"
            onClick={ () => { scrollToAnchor('#courses_content') }}>
                <motion.strong
                animate= { { backgroundPosition: '-100% 100%' } }
                transition = { {
                    duration: 9,
                    repeat: Infinity,
                    delay: 3,
                    ease: 'easeInOut'
                } }>
                    Записаться на занятие
                </motion.strong>
                <motion.div
                variants={div_variants}>
                    <svg viewBox="0 0 18 16">
                        <g transform="translate(-46 -28)">
                            <path d = "M 57.5 41 a 0.5 0.5 0 0 0 -0.5 0.5 V 43 H 47 V 31 h 2 v 0.5 a 0.5 0.5 0 0 0 0.5 0.5 h 5 a 0.5 0.5 0 0 0 0.5 -0.5 V 31 h 2 v 0.5 a 0.5 0.5 0 0 0 1 0 v -1 a 0.5 0.5 0 0 0 -0.5 -0.5 H 55 v -0.5 A 1.5 1.5 0 0 0 53.5 28 h -3 A 1.5 1.5 0 0 0 49 29.5 V 30 H 46.5 a 0.5 0.5 0 0 0 -0.5 0.5 v 13 a 0.5 0.5 0 0 0 0.5 0.5 h 11 a 0.5 0.5 0 0 0 0.5 -0.5 v -2 A 0.5 0.5 0 0 0 57.5 41 Z M 50 29.5 a 0.5 0.5 0 0 1 0.5 -0.5 h 3 a 0.5 0.5 0 0 1 0.5 0.5 V 31 H 50 Z M 52 40.5 a 0.5 0.5 0 0 1 -0.5 0.5 h -2 a 0.5 0.5 0 0 1 0 -1 h 2 A 0.5 0.5 0 0 1 52 40.5 Z M 52 37.5 a 0.5 0.5 0 0 1 -0.5 0.5 h -2 a 0.5 0.5 0 0 1 0 -1 h 2 A 0.5 0.5 0 0 1 52 37.5 Z M 54.5 35 h -5 a 0.5 0.5 0 0 1 0 -1 h 5 a 0.5 0.5 0 0 1 0 1 Z"/>
                            <path d="M 61.854 34.146 l -2 -2 a 0.5 0.5 0 0 0 -0.708 0 l -6 6 A 0.5 0.5 0 0 0 53 38.5 v 2 a 0.5 0.5 0 0 0 0.5 0.5 h 2 a 0.5 0.5 0 0 0 0.354 -0.146 l 6 -6 A 0.5 0.5 0 0 0 61.854 34.146 Z M 54 40 V 38.707 l 5.5 -5.5 L 60.793 34.5 l -5.5 5.5 Z"/>  
                        </g>
                    </svg>
                </motion.div>
            </motion.button>
            
            <motion.svg id='main_page_arrow_down' viewBox="0 0 56 31"
            initial= { { scale: 1.0, x: '-50%', y: '0%' } }
            animate = { { scale: 0.9, x: '-50%', y: '50%' }}
            transition = { {
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
            }}>
                <path d="M1.77961 1.46121C0.152402 3.08833 0.152402 5.72667 1.77961 7.35375L22.1637 27.7179C25.4187 30.9696 30.6929 30.9683 33.9462 27.7154L54.3225 7.33875C55.95 5.71167 55.95 3.07333 54.3225 1.44617C52.6954 -0.181041 50.0571 -0.181041 48.43 1.44617L30.99 18.8863C29.3629 20.5138 26.7246 20.5133 25.0975 18.8863L7.67215 1.46121C6.04498 -0.166 3.40678 -0.166 1.77961 1.46121Z"/>
            </motion.svg>
        </div>

        <iframe src="https://fast.wistia.net/embed/iframe/e8dgnqe0aw?seo=true&videoFoam=false" title="Inspiration_background Video" allow="autoplay; fullscreen" className="main_bg video_background" name="wistia_embed" loading="lazy"/>
        <img className='main_bg frame_video_bg' src={poster}/>
    </>
    );
}