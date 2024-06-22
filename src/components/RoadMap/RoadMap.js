import RoadMapPage from './PageComponent.js'

export default function RoadMap()
{
    return (
        <nav>
            <strong id="roadmap_title">Roadmap</strong>
            <div id="divs_roadmap">
            
                <RoadMapPage page_id={'main_page'}
                page_title={'Главная'}/>

                <RoadMapPage page_id={'about_page'}
                page_title={'О нас'}/>

                <RoadMapPage page_id={'benefits_page'}
                page_title={'Почему мы?'}/>

                <RoadMapPage page_id={'employees_page'}
                page_title={'Сотрудники'}/>

                <RoadMapPage page_id={'courses_page'}
                page_title={'Курсы'}
                last_page={true}/>

            </div>
        </nav>
    )
}