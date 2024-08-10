export default function NoteComponent({ title, illustration, text })
{
    return (
        <div className="verical_about_section">
            <h3>{title}</h3>
            <img src={illustration} className='about_illustr' loading="lazy"/>
            <p>{text}</p>
        </div>
    )
}