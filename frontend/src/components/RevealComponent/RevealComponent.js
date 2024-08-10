import { motion } from "framer-motion"


export default function RevealComponent( { content, is_filled = false, fill_color = null, reveal_direction = ''} )
{
    const reveal_variants = {
        hidden: { y: "30vh", opacity: 0 },
        visible: { y: "0vh", opacity: 1 }
    }
    const filled_reveal_variants = {
        hidden: { '--translate_position': "translateX(0%)" },
        visible: { '--translate_position': `translateX(${reveal_direction}100%)` }
    }
    
    return (
        <motion.div className={is_filled ? `reveal_wrapper reveal_filled_wrapper ${fill_color}` : 'reveal_wrapper'}
        variants={is_filled ? filled_reveal_variants : reveal_variants}
        initial="hidden"
        whileInView="visible"
        viewport={ {once: true} }
        transition={ { duration: 1, ease: 'easeInOut' } }>
            {content}
        </motion.div>
    )
}