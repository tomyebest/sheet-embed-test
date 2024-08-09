/* Frontmatter if necessary */

/* ------------------------ */


export default function GradientButton({ text = 'Button text', link = '#' }) {
return (
    <>
    <a href={link}>
 <button type="button" className="text-darkBlue bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">{text}</button>
    </a>
    </>

)
}