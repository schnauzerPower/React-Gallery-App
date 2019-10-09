import React from 'react';
import Gif from './Gif';
import NoGifs from './NoGifs';

const PhotoList = props => { 
    const results = props.data;
    let photo;
    if(results.length > 0) {
        photo = results.map(photo => 
            <Gif url={`https://farm66.staticflickr.com/65535/${gif.id}_${gif.secret}_m.jpg`} />
        );
    }
    else {
        gifs = <NoGifs />
    }
    
  console.log(results);
  return(
    <ul className="gif-list">
      {gifs}
    </ul> 
  );
};

export default PhotoList;

