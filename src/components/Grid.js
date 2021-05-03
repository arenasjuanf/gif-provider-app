import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GridGifItem from './GridGifItem';

export const Grid = ({category}) => {

    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3>{ category }</h3>

            { loading && <p className="animate__flash" >Loading...</p> }

            {
                <div className="card-grid">
                    {
                        images.map((img) => (
                            <GridGifItem 
                                key={ img.id }
                                { ...img }  
                            />
                        ))
                    }        
                </div>
            }
            <hr />
        </>
    )
}

export default Grid;