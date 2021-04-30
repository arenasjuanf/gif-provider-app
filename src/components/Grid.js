import React, { useState, useEffect } from 'react';

export const Grid = ({category}) => {

    const [count, setCount] = useState(0);
    useEffect(() => { // ejecuta la función solo la primera vez que se renderiza
        getGifs();
    },[]);

    const getGifs = async () => {

        const url = 'http://api.giphy.com/v1/gifs/trending?api_key=wxZG2HVTt9mOB6Xhx55UTAi6migipmOF&q=halo&limit=15';
        const resp = await fetch(url);
        const {data} = await resp.json();
        const gifs = data.map(img => {

            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        console.log(gifs);
    };


    return (
        <div>
            <h3>
                { category }
            </h3>
        </div>
    )
}

export default Grid;