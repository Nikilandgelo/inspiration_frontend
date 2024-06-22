import Section from "src/components/Section/Section"
import Carousel from "./Carousel"
import Employer from "./Employer"
import selivanova from 'src/assets/webp_images/employer_selivanova.webp'
import chikaleva from 'src/assets/webp_images/employer_chikaleva.webp'
import shilkova from 'src/assets/webp_images/about_svet_shil_photo.webp'


export default function EmployeesPage()
{
    return (
        <Section 
        id={'employees_page'}
        content={
            <div id='employees_page_container'>
                <Carousel
                content = {
                <>
                    <Employer photo = {chikaleva}
                    name = 'Агафонова Марина Александровна'
                    position = 'Преподаватель английского и немецкого языков'
                    text='В совершенстве владеет методикой преподавания английского языка, использует современные педагогические технологии и постоянно совершенствует свое педагогическое мастерство, ежегодно повышая квалификацию.'/>
                    <Employer photo = {chikaleva}
                    name = 'Чикалёва Мария Олеговна'
                    position = 'Преподаватель иностранных языков'
                    text='Ее студенты - учащиеся начальной школы, подростки и взрослые. Для подтверждения своей квалификации сдала Кембриджский экзамен ТКТ(teaching knowledge test), что показывает хороший уровень преподавания.'/>
                    <Employer photo = {selivanova}
                    name = 'Селиванова Светлана Владимировна'
                    position = 'Преподаватель иностранных языков, методист'
                    text='Имеет международные сертификаты в сфере преподавания, постоянно совершенствует свои знания по иностранному языку и в области владения методики преподавания иностранного языка.'/>
                    <Employer photo = {shilkova}
                    name = 'Шилкова Светлана Александровна'
                    position = 'Основатель, руководитель и преподаватель Центра'
                    text='Преподает английский, немецкий, французский и испанский языки, работает в основном с подростками и взрослыми студентами. Любит находить нестандартные приемы и методы обучения.'/>
                    <Employer photo = {shilkova}
                    name = 'Шахалова Евгения Викторовна'
                    position = 'Администратор'
                    text='Правая рука руководителя, человек, который наводит порядок в документах и всегда поможет найти потерявшуюся в нашем Центре вещь, всегда придет на помощь студентам, а также ответит на все вопросы родителей.'/>
                    <Employer photo = {chikaleva}
                    name = 'Кольцова Виктория Евгеньевна'
                    position = 'Преподаватель английского языка'
                    text='Формирует у учащихся не только умения и навыки говорения, чтения, аудирования и письма, но и интерес к изучению языка, стараясь сделать урок не только познавательным, но и занимательным.'/>
                </>
                }/>
                <div id='progress_carousel'>
                    <meter></meter>
                    <meter></meter>
                </div>
            </div>
        }
        index = {3}
        fixed_height={true}
        section_title={'Сотрудники'}/>
    )
}