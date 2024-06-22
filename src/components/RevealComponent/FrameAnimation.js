class Properties {    
    constructor (args_dict) {
        this.all_properties = Object.entries(args_dict)   
        this.reg_expression = new RegExp('\\d+\\.*\\d*')
    }
    
    update_properties(current_time, el) {
        // current_time всегда 0.9~, 0.8~, 0.7~ и т.д
        this.all_properties.forEach(( [key, [value, type, end_val = null]] ) => {
            value = value.replace(this.reg_expression, (finding_match) => {
                switch (type) {
                    case 'reduce':
                        // если current_time 0.9, а match - 20, значит 20 * 0.9 = 18 и т.д
                        return (finding_match * current_time).toString()
                    case 'increase':
                        // если current_time 0.9, finding_match всегда 0,end_val = 100, значит 100 * (1.0 - 0.9 = 0.1) = 10
                        return end_val * (1.0 - current_time).toString()
                    default:
                        throw new SyntaxError('Incorrect type')
                }
            })
            el.style.setProperty(key, value)
        })
    }
}


function easeInOutQuad(time) {
    // до 0.5 ускорение, после замедление
    return time < 0.5
    ? 2 * time * time
    : -1 + (4 - 2 * time) * time
}

export default function animate_reveal({ element, duration_ms, properties = new Properties() })
{
    properties = new Properties(properties)
        
    let start_time = null
    let time_passed = null
    function step(timeStamp)
    {
        // устанавливаем в переменную время когда анимация началась в миллисекундах (от загрузки страницы поэтому не с 0)
        if (!start_time) {
            start_time = timeStamp
        }
        time_passed = timeStamp - start_time

        if (time_passed < duration_ms) {
            /* прошла 0.1 секунда, времени дано 5 секунд, значит будет 5000 - 100 == 4900 / 5000 == 0.98, прошло 0.5 секунд, времени дано 1 секунда, значит будет 1000 - 500 == 500 / 1000 == 0.5 */
            let remain = (duration_ms - time_passed) / duration_ms
            let ease_in_out_remain = easeInOutQuad(remain)

            properties.update_properties(ease_in_out_remain, element)
            window.requestAnimationFrame(step)
        }
        else {
            // убеждаемся что все до 0 докручивается
            properties.update_properties(0.0, element)
            element.style.setProperty("will-change", "auto")
        }
    }  
    
    // начальное запрашивания фрейма для функции
    window.requestAnimationFrame(step)
}
