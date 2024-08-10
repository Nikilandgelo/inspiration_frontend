import { Context } from 'src/context'
import { useContext, useRef, useState } from 'react'
import PhoneInput, { isPossiblePhoneNumber, formatPhoneNumber } from 'react-phone-number-input/input'
import { motion } from 'framer-motion'


export default function CoursesPage()
{
    const { set_popup_showing, popup_ids } = useContext(Context)
    const [phone_value, set_phone_value] = useState('')
    const [invalid_fio, set_invalid_fio] = useState(false)
    const [invalid_phone, set_invalid_phone] = useState(false)
    const fio_value = useRef(null)
    
    const regex_for_full_name = /^[А-Яа-яЁё]+ [А-Яа-яЁё]+ [А-Яа-яЁё]+$/
    const label_variants = {
        default: {
            "--pseudo_transform_value": "0%",
            "--pseudo_opacity_value": 0
        },
        invalid: {
            "--pseudo_transform_value": "100%",
            "--pseudo_opacity_value": 1
        }
    }
    
    return (
        <form id="courses_page_form" 
        onSubmit={ async (event) => {
            event.preventDefault()
            if (!regex_for_full_name.test(fio_value.current.value)) {
                set_invalid_fio(true)
                return
            }
            if (!isPossiblePhoneNumber(phone_value, "RU")) {
                set_invalid_phone(true)
                return
            }

            let response = await fetch('/api/message', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    'full_name': fio_value.current.value,
                    'phone_number': formatPhoneNumber(phone_value)
                })
            })

            let popup = document.querySelector(`#${response.status === 201 ? popup_ids.CoursesPageSuccess : popup_ids.CoursesPageError}`)
            popup.showModal()
            set_popup_showing(true)
        } }>
            <p>Мы позвоним вам, определим ваш уровень языковых навыков и подберем подходящий для вас курс, а также ответим на все интересующие вопросы.</p>

            <motion.label
            variants={label_variants}
            animate={invalid_fio ? "invalid" : "default"}
            transition={ {duration: 1, type: 'spring', bounce: 0.5} }>
                <strong>ФИО</strong>
                <input className={invalid_fio ? "invalid_input" : ""}
                type="text" 
                placeholder="Иванов Иван Иванович" 
                ref={fio_value}
                onChange={ () => {
                    invalid_fio ? set_invalid_fio(false) : null
                } }
                maxLength={500}/>
            </motion.label>
            
            <motion.label
            variants={label_variants}
            animate={invalid_phone ? "invalid" : "default"}
            transition={ {duration: 1, type: 'spring', bounce: 0.5} }>
                <strong>Номер телефона</strong>
                <PhoneInput className={invalid_phone ? "invalid_input" : ""}
                country='RU'
                international={true}
                withCountryCallingCode={true}
                value={phone_value}
                onChange={ (value) => { 
                    invalid_phone ? set_invalid_phone(false) : null
                    set_phone_value(value)
                } }
                maxLength={16}/>
            </motion.label>

            <motion.button
            whileTap={ { scale: 0.98 } }
            transition={ {duration: 0.025, ease: "easeOut"} }>
                <strong>Оставить заявку</strong>
            </motion.button>
        </form>
    )
}