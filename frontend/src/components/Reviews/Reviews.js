import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css/navigation';
import { reviews } from './reviews_info';
import star from 'src/assets/svg_images/star.svg'
import arrow from 'src/assets/svg_images/next.arrow.svg'
import { Context } from 'src/context';
import { useContext, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';


export default function Reviews() {
    const { popup_showing } = useContext(Context)
    const slider = useRef(null)
    const star_image = useRef(new Image())

    useEffect( () => {
        popup_showing ? slider.current.swiper.autoplay.start() : slider.current.swiper.autoplay.stop()
    }, [popup_showing])

    useEffect( () => { star_image.current.src = star }, [])
    
    return (
        <Swiper ref={slider}
        autoplay={false}
        modules={ [Navigation, Autoplay] }
        navigation={ {
            prevEl: '.left_nav',
            nextEl: '.right_nav'
        } }
        loop={true}
        spaceBetween={25}
        simulateTouch={false}
        speed={1000}>
            { reviews.map( (value, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div className='review'>
                            <motion.img src={arrow} 
                            className='nav_arrows left_nav'
                            whileTap={ {scale: 0.95} }
                            transition= { {ease: 'easeOut', duration: 0.025} }/>
                            
                            <div className='review_content'>
                                <div className='stars'>
                                    <img src={star_image.current.src}/>
                                    <img src={star_image.current.src}/>
                                    <img src={star_image.current.src}/>
                                    <img src={star_image.current.src}/>
                                    <img src={star_image.current.src}/>
                                </div>
                                <p>{value.review}</p>
                            </div>
                            
                            <motion.img src={arrow} 
                            className='nav_arrows right_nav'
                            initial={ {rotate: '180deg'} }
                            whileTap={ {rotate: '180deg', scale: 0.95} }
                            transition= { {ease: 'easeOut', duration: 0.025} }/>
                        </div>
                        <strong>{value.name}</strong>
                    </SwiperSlide>
                ) } )
            }
        </Swiper>
    )
}
