import { Context } from 'src/context'
import { useContext, useRef } from "react"
import { motion } from 'framer-motion'

export default function Popup( {dict_key, id, content} ) {
    const { popup_showing, set_popup_showing, popup_ids } = useContext(Context)
    const popup_ref = useRef(null)

    popup_ids[dict_key] = id
    
    const handle_click = (event) => {
        const { top, right, bottom, left } = popup_ref.current.getBoundingClientRect()
        const { clientX, clientY } = event
        
        if ( clientY < top || clientX > right || clientY > bottom || clientX < left ) {
            popup_ref.current.close()
            popup_showing ? set_popup_showing(false) : null
        }
    }
    
    return (
        <motion.dialog id={id} 
            ref={popup_ref} 
            onClick={handle_click}
            animate={ popup_showing ? 'popup_show' : 'popup_hide' }>
                {content}
        </motion.dialog>
    )
}