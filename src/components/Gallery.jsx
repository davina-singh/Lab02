import HornedBeast from "./HornedBeast";
import bestArr from "../data.js";
import rhino from '../assets/rhino.jpg';
import unicorn from '../assets/unicorn.jpg';
import unicorn2 from '../assets/unicorn2.jpg';

import { useState } from 'react'

export default function Gallery(props) {
    const [likes, setLikes] = useState(0);

    function handleLikes() {
        setLikes(likes + 1);
    }
    return (
        <>
            <h2>Horned Beasts 😎 🐉 </h2>
            {
                props.beasts.map((beast) => {
                    return (
                        <HornedBeast img={beast.image_url} description={beast.description} title={beast.title} />
                    )
                })
            }
        </>
    )
}