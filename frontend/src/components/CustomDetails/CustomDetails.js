import { useState } from "react"
import { motion } from "framer-motion"


export default function CustomDetail( { summary, text }) {
    const [detail_open, set_detail_open] = useState(false)
    
    return (
        <div className="detail">
            <strong className="summary" 
            onClick={ () => { set_detail_open(!detail_open) } }>
                {summary}

                <motion.svg
                viewBox="0 0 56 31"
                animate={ detail_open ? {rotate: '180deg'} : {rotate: '0deg'} }
                transition={ {duration: 0.25, ease: 'easeInOut'} }>
                    <path d="M1.77961 1.46121C0.152402 3.08833 0.152402 5.72667 1.77961 7.35375L22.1637 27.7179C25.4187 30.9696 30.6929 30.9683 33.9462 27.7154L54.3225 7.33875C55.95 5.71167 55.95 3.07333 54.3225 1.44617C52.6954 -0.181041 50.0571 -0.181041 48.43 1.44617L30.99 18.8863C29.3629 20.5138 26.7246 20.5133 25.0975 18.8863L7.67215 1.46121C6.04498 -0.166 3.40678 -0.166 1.77961 1.46121Z"/>
                </motion.svg>
            </strong>

            <motion.p
            animate={detail_open 
                ? { height: 'auto', opacity: 1}
                : { height: 0, paddingTop: 0, paddingBottom: 0, opacity: 0 } 
            }
            transition={ {duration: 0.25, ease: 'linear'} }>
                {text}
            </motion.p>
        </div>
    )
}