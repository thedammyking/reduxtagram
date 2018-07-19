import React from 'react';
import Photo from './Photo'

const PhotoGrid = (props) => {
    return (
        <div className="photo-grid">
            {props.posts.map((post, i) => <Photo key={i} i={i} post={post} {...props}/> )}
        </div>
    )
}

export default PhotoGrid;