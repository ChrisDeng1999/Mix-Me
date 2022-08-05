import React, {useEffect, useState} from 'react';

const MixerCup = () => {
   const [mixCup, setMixCup] = useState()
    
   useEffect (() => {
        setTimeout(()=>{
            setMixCup(
                <div>Hello</div>
            )
        }, 7000)
    }, ) 
    return (<div>{mixCup}</div>)

}

export default MixerCup