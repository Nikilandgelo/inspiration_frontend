import { main_page_dict } from "./Section"


export default function scrollToAnchor(new_hash = null, is_initial_load = false)
{
    /* хоть в roadmape/headere/main_page я передаю для getElementById без этого символа, если на начальный лоад в хеше есть anchor, он будет с этим символом, и тут просто проверка, если он есть - убирается, если нет - ок */
    new_hash = new_hash.replace("#", '')

    let scaled_main_page_height = main_page_dict['main_page_height'] * 0.3

    let element = document.getElementById(new_hash)
    if (element)
    {
        window.requestAnimationFrame( () => {
            window.location.hash = new_hash
            if (!main_page_dict['collapsed'] || is_initial_load)
            {
                /* если второй пейдж, то 1017px - 305px и т.д, по дефолту collapsed == false, а 0.3 потому что мейн пейдж scale до 0.7 */
                window.scrollTo(0, element.offsetTop - scaled_main_page_height)
            }
            else { element.scrollIntoView() }
        })
    }
    else { window.scrollTo(0, 0) }
}
window.addEventListener('load', () => {
    scrollToAnchor(window.location.hash, true)
})