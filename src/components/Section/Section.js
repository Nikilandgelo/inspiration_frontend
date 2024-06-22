import { useEffect, useState } from "react"


export const main_page_dict = {
    'main_page_el': '',
    'main_page_height': 0,
    'collapsed': false
}
let sections = null

/* достаем переменную :root, которую использует overlap ::after main пейджа и делим по запятой, достаем последний альфа канал, остальное собираем обратно */
const fadeout_colors = getComputedStyle(document.documentElement).getPropertyValue('--main_page_fadeout').split(',')
let alpha_channel = fadeout_colors.pop()
fadeout_colors.join(',')


function make_changes_in_frame(scroll_value) {
    window.requestAnimationFrame( () =>
    {
        translate_sections(scaling_down_main_page(scroll_value), sections)
    })
}

function scaling_down_main_page(Yscroll) {
    /* 1.0 - (100px / 1000 === 0.1) === 0.9, etc. */
    let scale_down = 1.0 - Yscroll
    main_page_dict['main_page_el'].style.setProperty('transform', `scale(${scale_down})`)

    /* умножаем на 3.4, потому что при Yscroll 0.3 максимуме, нужно чтобы было альфа канал был >= 1.0, а этого можно достичь умножая 0.3 на ~3.4 */
    alpha_channel = `, ${Yscroll * 3.4})`
    document.documentElement.style.setProperty('--main_page_fadeout', fadeout_colors + alpha_channel)
    
    /* for example 1017px * 0.9 === 915.3, etc. */
    return main_page_dict['main_page_height'] * scale_down
}

function translate_sections(current_height, all_sections) {
    /* for example 1017px - 915.3 === 101.7px, etc. */
    let translate_others = main_page_dict['main_page_height'] - current_height
    all_sections.forEach((section) => {section.style.setProperty('transform', `translateY(-${translate_others}px)`)})
}


export default function Section({ id, content, index, fixed_height = false, background_content = null, is_start_page = false, section_title = null })
{
    const [bordered_section, setBorderRadius] = useState(false)
    useEffect(function()
    {
        if (is_start_page) {
            sections = Array.from(document.querySelectorAll('section'))
            let main_page = sections.shift()
            main_page_dict['main_page_el'] = main_page
            main_page_dict['main_page_height'] = main_page.getBoundingClientRect().height

            window.addEventListener('scroll', () =>
            {
                if (window.scrollY > 0 && !bordered_section) { setBorderRadius(true) }
                else if (window.scrollY == 0) { setBorderRadius(false) }

                if (window.scrollY <= 300) {
                    make_changes_in_frame(window.scrollY / 1000)
                    if (main_page_dict['collapsed']) {
                        main_page_dict['collapsed'] = false
                    }
                }
                if (window.scrollY > 300 && !main_page_dict['collapsed']) {
                    make_changes_in_frame(0.3)
                    main_page_dict['collapsed'] = true
                }
            })
        }
    }, [])

    if (is_start_page) {
        return (
            <section id={id} index={index}
            className={bordered_section ? 'bordered_section' : ''}>
                <div className = 'sections_content' data-fixed_section='true'>
                    {content}
                </div>
                {background_content}
            </section>
        )
    }
    else {
        return (
            <section id={id} index={index}>
                <div className = 'sections_content' data-fixed_section ={fixed_height ? 'true' : 'false'}>
                    <h2>{section_title}</h2>
                    {content}
                </div>
            </section>
        )
    }
}