import PropTypes from 'prop-types';

const GridGifItem = ( {title, url} ) => {

    return(
        <div className="card animate__bounceIn">
            <img src={ url } alt={ title } />
            <p>
                { title }
            </p>
           
        </div>
    )
}

GridGifItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default GridGifItem;