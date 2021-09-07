import React from 'react';

const SlideImg = ({src,size})=>{
    return(
        <img src={src} className="img" style={{width:size, height:size}} alt={""}></img>
    )
};

export default SlideImg;