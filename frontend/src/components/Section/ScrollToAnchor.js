import { translate_value_to_end } from "./Section"

export default function scrollToAnchor(object_id)
{
    const current_scrollY = window.scrollY
    const section = document.querySelector(object_id)

    window.scrollTo(0, (current_scrollY + section.getBoundingClientRect().top) + translate_value_to_end)
}