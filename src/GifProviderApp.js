import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import Grid from './components/Grid';

export const GifProviderApp = ({ defaultCategories = [] }) => {

    const [categories, setCategories] = useState(defaultCategories);

    return (
        <>
            <span>
                Gif-Provider
            </span> 
            < AddCategory setCategories={ setCategories } />
            <hr />

            <ul>
                {
                    categories.map((cat, idx) => {
                        return <Grid 
                            key={ idx } 
                            category={cat} 
                        />
                    }) 
                }
            </ul>
        </>
    )

}