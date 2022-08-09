import React, {useEffect, useState} from 'react';
// import 'animate.css';

const MixerCup = () => {
   const [mixCup, setMixCup] = useState()
    
   useEffect (() => {
       
    setMixCup(<div className = "animate__animated animate__zoomOutDown"></div>)
    
    }, ) 
    return (<div>{mixCup}</div>)

}

export default MixerCup