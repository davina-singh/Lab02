import Gallery from './Gallery';

export default function HornedBeast({title, img, description}) {
    
    return (
        <>
            <h2>{title}</h2>
            <img src={img} alt={title} onClick={handleLikes} />
            <p>{description}</p>
            <span>❤️{likes}</span>
        </>
    )
}