import { useEffect, useRef } from "react"
import animate_reveal from "./FrameAnimation"


export default function RevealComponent( { content, is_filled = false, fill_color = null, reveal_direction = ''} )
{
    let wrapper = useRef(null)

    let threshold_part = 0.3
    if (is_filled) {
        threshold_part = 0.75
    }
    useEffect(function()
    {
        const observer = new IntersectionObserver(function(entries, observer)
        {
            if (entries[0].isIntersecting) {
                if (!is_filled) {
                    animate_reveal({
                        element: wrapper.current,
                        duration_ms: 1000,
                        properties: {
                            'transform': ['translateY(30dvh)', 'reduce'],
                            'opacity': ['0.0', 'increase', '1.0'],
                        },
                    })
                }
                else {
                    animate_reveal({
                        element: wrapper.current,
                        duration_ms: 1000,
                        properties: {
                            '--translate_position': ['translateX(0%)', 'increase', `${reveal_direction}100`],
                            '--backdrop_size': ['blur(50px)', 'reduce']
                        },
                    })
                }
                observer.disconnect()
            }
        }, {threshold: threshold_part})
        observer.observe(wrapper.current)
    }, [])
    
    return(
        <div className={is_filled ? `reveal_filled_wrapper ${fill_color}` : "reveal_wrapper"} ref={wrapper}>
            {content}
        </div>
    )
}