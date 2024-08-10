import { motion } from "framer-motion"
import { Context } from "src/context"
import { useContext, useEffect, useRef } from "react"

export default function HeaderLink({ position, text })
{
    const { popup_ids, set_popup_showing } = useContext(Context)
    const popup = useRef(null)
    
    useEffect( () => {
        popup.current = document.querySelector(`#${text === 'Отзывы' ? popup_ids.ReviewsPopup : popup_ids.FAQPopup }`)
    }, [])
    
    const link_variants = {
        hover: {
            '--pseudo_value_transform': "translateX(0%) scaleX(1)",
            transition: {ease: 'easeOut', duration: 0.25}
        },
        tap: {
            '--pseudo_value_transform': "translateX(0%) scaleX(1)",
            transition: {ease: 'easeOut', duration: 0.025}
        }
    }

    return (
        <div className="header_link">
            <motion.strong
            className={'header_text'}
            initial= { {'--pseudo_value_transform': `translateX(${position === 'left' ? '-' : ''}50%) scaleX(0)`} }
            variants={link_variants}
            whileHover="hover"
            whileTap="tap"
            onClick={ () => {
                popup.current.showModal()
                set_popup_showing(true)
            } }>
                {text}
            </motion.strong>
        </div>
    )
}