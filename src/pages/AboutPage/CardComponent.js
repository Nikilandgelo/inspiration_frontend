import shil_photo from 'src/assets/webp_images/about_svet_shil_photo.webp'
import quotes from 'src/assets/svg_images/quotes.svg'
import { useRef } from 'react'

export default function AboutCard()
{
    const card_reference = useRef(null)
    let card_size = null
    function define_size_card() {
        card_size = card_reference.current.getBoundingClientRect()
        let circle_size = (card_size.width + card_size.height) / 3
        card_reference.current.style.setProperty('--circle_size', `${circle_size}px`)
    }


    function handle_start_touch() {
        card_reference.current.classList.add("active")
    }
    function handle_end_touch() {
        card_reference.current.classList.remove("active")
    }
    function handletouchmove(event) {
        if (card_size == null) { define_size_card() }
        window.requestAnimationFrame( () => {
            card_reference.current.style.setProperty('--mouse_x', `${event.targetTouches[0].clientX - card_size.left}px`)
            card_reference.current.style.setProperty('--mouse_y', `${event.targetTouches[0].clientY - card_size.top}px`)
        })
    }


    function handlemousemove(event) {
        if (card_size == null) { define_size_card() }   
        window.requestAnimationFrame( () => {
            card_reference.current.style.setProperty('--mouse_x', `${event.nativeEvent.offsetX}px`)
            card_reference.current.style.setProperty('--mouse_y', `${event.nativeEvent.offsetY}px`)
        })
    }

    return (
        <blockquote className="about_card" ref={card_reference} onTouchStart={handle_start_touch} onTouchEnd={handle_end_touch} onTouchMove={handletouchmove} onMouseMove={handlemousemove}>
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