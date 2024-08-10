import Benefit from "./Benefit"
import RevealComponent from "src/components/RevealComponent/RevealComponent"
import first_icon from 'src/assets/svg_images/benefit_first.svg'
import second_icon from 'src/assets/svg_images/benefit_second.svg'
import third_icon from 'src/assets/svg_images/benefit_third.svg'
import fourth_icon from 'src/assets/svg_images/benefit_fourth.svg'


export default function BenefitsPage()
{
    return (
        <div id="benefits_container">
            <RevealComponent
                content = {
                    <Benefit icon = {first_icon}
                    text = 'Образовательная лицензия'/>
                }
                is_filled = {true}
                fill_color = 'contrast_color'
                reveal_direction = '-'
            />
            <RevealComponent
                content = {
                    <Benefit icon = {second_icon}
                    text = 'Квалифицированные преподаватели'/>
                }
                is_filled = {true}
                fill_color = 'main_color'
            />
            <RevealComponent
                content = {
                    <Benefit icon = {third_icon}
                    text = 'Обучение в мини-группах'/>
                }
                is_filled = {true}
                fill_color = 'main_color'
                reveal_direction = '-'
            />
            <RevealComponent
                content = {
                    <Benefit icon = {fourth_icon}
                    text = 'Много разговорной практики'/>
                }
                is_filled = {true}
                fill_color = 'contrast_color'
            />
        </div>
    )
}