import React from 'react';
import Photo from './Photo';
import NoPhotos from './NoPhotos';

const PhotoContainer = (props) => { 
    const results = props.data;
    let photos;
   
    if(results.length > 0) {
        
        photos = results.map(photo => 
            <Photo url={`https://farm66.staticflickr.com/65535/${photo.id}_${photo.secret}_m.jpg`} key={photo.id} />
        );
        
    }
    else {
        photos = <NoPhotos />
    }
    
  return(
    <div className="photo-container">
        <ul>
            {photos}
        </ul> 
    </div>
    
  );
};

export default PhotoContainer;




