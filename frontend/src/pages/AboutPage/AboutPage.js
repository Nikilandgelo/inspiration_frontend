import RevealComponent from 'src/components/RevealComponent/RevealComponent';
import LanguageComponent from './LanguageComponent.js';
import english_flag from 'src/assets/svg_images/england_flag.svg'
import german_flag from 'src/assets/svg_images/german_flag.svg'
import french_flag from 'src/assets/svg_images/french_flag.svg'
import spanish_flag from 'src/assets/svg_images/spanish_flag.svg'
import italian_flag from 'src/assets/svg_images/italian_flag.svg'

import first_photo from 'src/assets/webp_images/about_first.webp'
import AboutCard from './CardComponent.js';
import NoteComponent from './NotesComponent.js';
import first_illustr from 'src/assets/svg_images/about_first_illustration.svg'
import second_illustr from 'src/assets/svg_images/about_second_illustration.svg'
import third_illustr from 'src/assets/svg_images/about_third_illustration.svg'
import fourth_illustr from'src/assets/svg_images/about_fourth_illustration.svg'
import last_photo from 'src/assets/webp_images/about_last.webp'

export default function AboutPage()
{
    return (
        <>
            <RevealComponent
            content={
            <div className="about_section left_text_about">
                <div id="about_languages">
                    <p>Центр иностранных языков &quot;Inspiration&quot; был основан в 2012 году и занимается обучением студентов любого возраста таким языкам как:</p>
                    <div>
                        <LanguageComponent flag={english_flag}
                        text={'Английский'}/>
                        <LanguageComponent flag={german_flag}
                        text={'Немецкий'}/>
                        <LanguageComponent flag={french_flag}
                        text={'Французский'}/>
                        <LanguageComponent flag={spanish_flag}
                        text={'Испанский'}/>
                        <LanguageComponent flag={italian_flag}
                        text={'Итальянский'}/>
                    </div>
                </div>
                <img src={first_photo} className='about_photo right_about_photo' loading="lazy"/>
            </div>
            }/>
            <RevealComponent
            content={
                <AboutCard />
            }/> 
            <RevealComponent
            content={
            <NoteComponent title={'Финансовая независимость'}
                illustration={first_illustr}
                text={
                <>
                    Мы находимся на полном самообеспечении - что заработали, то и вкладываем в развитие Центра.<br/><br/>
                    Эти деньги мы тратим на то, чтобы у наших учеников и сотрудников было все самое необходимое.
                </>}
            />
            }/>
            <RevealComponent
            content={
            <NoteComponent title={'Легальность'}
                illustration={second_illustr}
                text={
                <>
                    При этом у нас есть все документы, что мы работаем легально.
                    <br/><br/>Лицензия, разрешения на работу от МЧС и Роспотребнадзора, что делает нас ближе к государственным учреждениям.
                </>}
            />
            }/>
            <RevealComponent
            content={
            <NoteComponent title={'Наличие налогового вычета'}
                illustration={third_illustr}
                text={
                <>
                    Родители наших учеников имеют право получить 13% налоговый вычет за обучение ребенка в Центре.<br/><br/>
                    В нашем районе это единственное частное образовательное учреждение, где есть такая возможность.
                </>}
            />
            }/>
            <RevealComponent
            content={
            <NoteComponent title={'Оплата через сертификат Навигатора'}
                illustration={fourth_illustr}
                text={
                <>
                    С 2022 года родители ребят от 5 до 13 лет могут оплатить занятия в Центре сертификатом Навигатора.
                    <br/><br/>Мы планируем, что в будущем это будет доступно для всех групп.
                </>}
            />
            }/>
            <RevealComponent
            content={
            <div className="right_text_about about_section">
                <img src={last_photo} className='about_photo' loading="lazy"/>
                <p>{"\n\nИ, получается, наш Центр имеет привилегии, которые есть у государственных организаций, а сервис, который мы предлагаем, сильно отличается."}
                <br/><br/>
                {"Мы очень стараемся и верим, что у нас это получается, а наши студенты – это замечательные люди, которых мы очень ценим!\n\n"}</p>
            </div>
            }/>
        </>
    );
}