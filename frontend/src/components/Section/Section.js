import { motion, useScroll, useTransform } from "framer-motion"
import { Context } from "src/context"
import { useContext, useEffect, useRef } from "react"


const size_of_scale = 0.7
export let translate_value_to_end = 0

export function Sections( {sections} ) {
    const main_content_ref = useRef(null)
    const courses_section_ref = useRef(null)
    const { sections_translate_value, set_last_page_progress,
        set_viewpart_of_last_page } = useContext(Context)

    const end_translate_value = useRef(0)
    useEffect( () => {
        let content_height = main_content_ref.current.offsetHeight
        end_translate_value.current = -1 * (content_height - (content_height * size_of_scale))
        translate_value_to_end = end_translate_value.current
    }, [])
    
    const { scrollYProgress: main_content_progress } = useScroll( {
        target: main_content_ref,
        offset: ['0 0', `${size_of_scale} 0.5`]
    })
    main_content_progress.on('change', (value) => { 
        sections_translate_value.set(end_translate_value.current * value)
        translate_value_to_end = end_translate_value.current - sections_translate_value.get()
    } )

    const main_page_scale = useTransform(main_content_progress, [0, 1], [1, size_of_scale])

    const { scrollYProgress: last_section_progress } = useScroll( {
        target: courses_section_ref,
        offset: [`${size_of_scale - 1.0} end`, `${size_of_scale} end`]
    })
    last_section_progress.on('change', (value) => {
        set_last_page_progress(value)

        set_viewpart_of_last_page(window.innerHeight - courses_section_ref.current.getBoundingClientRect().top)
    } )

    return (
        <>
            { sections.map( (dict_section, index) => {
                const { section, main_section, content_id, fixed_height, section_title, courses_section } = dict_section
                
                if (main_section) {
                    return (
                        <section key={index}>
                            <motion.div 
                            className = 'sections_content'
                            id={content_id}
                            data-index={index}
                            ref={main_content_ref}
                            style={ { scale: main_page_scale } }>
                                {section}
                            </motion.div>
                        </section>
                    )
                }
                else {
                    return (
                        <motion.section
                        id={courses_section ? "courses_section" : null}
                        ref={courses_section ? courses_section_ref : null}
                        style={ { y: sections_translate_value} }
                        key={index}>
                            <div className = 'sections_content'
                            id={content_id}
                            data-index={index}
                            data-fixed_section= {fixed_height ? 'true': 'false'}>
                                {!courses_section
                                ? <h2>{section_title}</h2>
                                : <h3>{section_title}</h3>}
                                {section}
                            </div>
                        </motion.section>
                    )
                }
            }) }
        </>
    )
}