import React from 'react'
import HowDesk from "../HowItWork/Desk";
/* import HowMobile from "../HowItWork/Mobile"; */

const HowItWork = (props)=> {
    
        const { title, object}=props;
        return (
            <HowDesk title={title} obj={object} />
        )
}

export default HowItWork
