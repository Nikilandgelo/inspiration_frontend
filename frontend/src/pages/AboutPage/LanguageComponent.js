export default function LanguageComponent({ flag, text })
{
    return (
    <>
        <img src = {flag} className="about_language_flag" loading="lazy"/>
        <strong>{text}</strong>
    </>
    )
}