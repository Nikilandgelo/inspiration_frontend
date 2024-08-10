import shil_photo from 'src/assets/webp_images/about_svet_shil_photo.webp'
import quotes from 'src/assets/svg_images/quotes.svg'
import { useRef } from 'react'

export default function AboutCard()
{
    const card_reference = useRef(null)

    function handle_pointer_enter() { card_reference.current.classList.add("active") }
    
    function handle_moving_circle(is_mouse, event) {
        let X
        let Y
        if (is_mouse) {
            X = event.nativeEvent.clientX
            Y = event.nativeEvent.clientY
        }
        else {
            X = event.targetTouches[0].clientX
            Y = event.targetTouches[0].clientY
        }
        window.requestAnimationFrame( () => {
            let card_size = card_reference.current.getBoundingClientRect()

            card_reference.current.style.setProperty('--circle_size', `${(card_size.width + card_size.height) / 2}px`)
            card_reference.current.style.setProperty('--mouse_x', `${X - card_size.left}px`)
            card_reference.current.style.setProperty('--mouse_y', `${Y - card_size.top}px`)
        })
    }

    function handle_pointer_out() { card_reference.current.classList.remove("active") }

    return (
        <blockquote className="about_card" ref={card_reference}
        onPointerEnter={handle_pointer_enter}
        onTouchMove={ (event) => {handle_moving_circle(false, event)} }
        onMouseMove={ (event) => {handle_moving_circle(true, event)} }
        onTouchEnd={handle_pointer_out}
        onMouseLeave={handle_pointer_out}>
            <img src={shil_photo} id="card_photo" loading="lazy"/>
            <div className="about_text_card">
                <img src={quotes} className="quote_icon"/>
                <strong>Наш Центр Inspiration – это частная организация с нотками государственной, некий микс.<br/><br/>Почему мы так считаем, и что такое нотки, сейчас расскажем.</strong>
            </div>
            <strong>Светлана Шилкова</strong>
            <p id='card_prompt'>руководитель центра</p>
        </blockquote>
    )
}