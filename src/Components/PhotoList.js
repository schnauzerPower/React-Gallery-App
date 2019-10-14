import React from 'react';
import Photo from './Photo';
import NoPhotos from './NoPhotos';

const PhotoList = (props) => { 
    let query = props.match.params.query;
    const results = props.data;
    let photos;
    console.log(query);
   
    if(results.length > 0) {
        
        photos = results.map(photo => 
            <Photo url={`https://farm66.staticflickr.com/65535/${photo.id}_${photo.secret}_m.jpg`} />
        );
        
    }
    else {
        photos = <NoPhotos />
    }
    
  return(
    <div class="photo-container">
        <ul>
            {photos}
        </ul> 
    </div>
    
  );
};

export default PhotoList;




