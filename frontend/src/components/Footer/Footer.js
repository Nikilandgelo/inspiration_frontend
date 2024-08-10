import { Context } from "src/context"
import { useContext, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { translate_value_to_end } from "../Section/Section"
import contact_icon from 'src/assets/svg_images/contact_icon.svg'
import contact_location from 'src/assets/svg_images/contact_location.svg'
import contact_vk from 'src/assets/svg_images/contact_vk.svg'


export default function Footer() {
    const { sections_translate_value } = useContext(Context)
    const [min_height, set_min_height] = useState(0)

    useEffect( () => {
        set_min_height(Math.abs(translate_value_to_end))
    }, [])
    
    return (
        <motion.footer style={ { 
            y: sections_translate_value,
            minHeight: min_height
        } }>
            <div id="footer_content">
                
                <div className="footer_block">
                    <img src={contact_icon} loading="lazy"/>
                    <div className="footer_info">
                        <strong>Контактная информация</strong>
                        <address>
                            <a href="tel:+79522495008" className="underlink">+7 (952) 249-50-08</a>
                            <motion.a href="https://vk.com/inspirationpikalevo" id="vk_icon"
                            whileTap={ { scale: 0.95 } }
                            transition={ {duration: 0.025, ease: "easeOut"} } >
                                <img src={contact_vk} loading="lazy"/>
                            </motion.a>
                        </address>
                    </div>
                </div>

                <div className="footer_block reverse_footer_block">
                    <div className="footer_info reverse_footer_info">
                        <strong>Местоположение</strong>
                        <address>
                            <a href="https://yandex.ru/maps/10879/pikalevo/?ll=34.178501%2C59.514730&mode=poi&poi%5Bpoint%5D=34.178391%2C59.514690&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D211137028578&source=constructorLink&um=constructor%3Ae2b85fb6d5545a01fb293fe7ac4039106a4f0adf2e01502714bf0b57a379aeb7&z=20" className="underlink">
                                г. Пикалево, Заводская улица, 16
                            </a>
                        </address>
                        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae2b85fb6d5545a01fb293fe7ac4039106a4f0adf2e01502714bf0b57a379aeb7&amp;source=constructor"/>
                    </div>
                    <img src={contact_location} loading="lazy"/>
                </div>

                <strong id="author">2024 | © <a href="https://t.me/niki_landgelo" className="underlink">Selivanov Nikita</a>
                </strong>

            </div>
        </motion.footer>
    )
}