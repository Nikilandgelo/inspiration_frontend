import { createContext, useState } from "react";
import { useMotionValue } from "framer-motion";

export const Context = createContext()

export default function AppContext( {children} ) {
    const sections_translate_value = useMotionValue(0)
    const [last_page_progress, set_last_page_progress] = useState(0)
    const [viewpart_of_last_page, set_viewpart_of_last_page] = useState(0)
    const breakpoint_final_last_progress = 0.91
    const [popup_showing, set_popup_showing] = useState(false)
    const popup_ids = {}
    
    return (
        <Context.Provider value={ {
            sections_translate_value,
            last_page_progress, set_last_page_progress,
            viewpart_of_last_page, set_viewpart_of_last_page, breakpoint_final_last_progress, 
            popup_showing, set_popup_showing,
            popup_ids
        } }>
            {children}
        </Context.Provider>
    )
}