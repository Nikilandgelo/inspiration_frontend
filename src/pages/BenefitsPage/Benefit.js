export default function Benefit({ icon, text })
{
    return (
        <div>
            <img src={icon} loading="lazy"/>
            <strong>{text}</strong>
        </div>
    )
}