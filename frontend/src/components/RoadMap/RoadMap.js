import { Context } from "src/context"
import RoadMapPage from './PageComponent.js'
import { motion } from 'framer-motion'
import { useContext } from "react"
import { section_titles } from "../Section/section_titles.js"

export default function RoadMap()
{
    const { last_page_progress, breakpoint_final_last_progress } = useContext(Context)
    return (
        <motion.nav
        style={ {
            borderImage: `linear-gradient(to bottom, color(display-p3 0.862745 0.854902 0.866667) ${100 - (100 * last_page_progress)}%, color(display-p3 0.231373 0.176471 0.254902) 0%)`
        } }>
            <strong className={last_page_progress >= breakpoint_final_last_progress ? "roadmap_title last_roadmap_title" : "roadmap_title"}>Roadmap</strong>
            <div id="divs_roadmap">
            
                <RoadMapPage content_id={'#main_content'}
                page_title={'Главная'}/>

                { section_titles.map( (value, index) => {
                    return (
                        <RoadMapPage key={index}
                        content_id={value.content_id}
                        page_title={value.title}
                        last_page={index + 1 === section_titles.length ? true : false} />
                    )}
                )}

            </div>
        </motion.nav>
    )
}