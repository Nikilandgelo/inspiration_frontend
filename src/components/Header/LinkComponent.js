export default function HeaderLink({ position, text })
{
    return (
    <div>
        <strong className={`header_text ${position}`}>{text}</strong>
    </div>
    )
}