export default function Employer({ photo, name, position, text })
{    
    return (
        <figure className="employer">
            <img src={photo} className="employer_photo" loading="lazy" />
            <figcaption>
                <strong className="employer_name">{name}</strong>
                <br/><br/>
                <strong className="employer_position">{position}</strong>
                <br/><br/>
                <p>{text}</p>
            </figcaption>
        </figure>
    )
}