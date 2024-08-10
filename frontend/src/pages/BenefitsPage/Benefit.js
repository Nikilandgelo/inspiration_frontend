export default function Benefit({ icon, text })
{
    return (
        <div className="benefit">
            <img src={icon} loading="lazy"/>
            <strong>{text}</strong>
        </div>
    )
}