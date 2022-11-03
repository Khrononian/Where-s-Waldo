import React from "react";
import { useLocation } from "react-router-dom";

const Selection = (props, { selected }) => {
    const location = useLocation()
    

    return (
        <div>
            <nav >
                <div>
                    {console.log('PROPS', location, window.localStorage)}
                    <img src={location.state.kratos} alt='Selected'/>
                    <img src={location.state.daxter} alt='Selected'/>
                    <img src={location.state.prince} alt='Selected'/>
                </div>
            </nav>
            <div >
                <img className='image' src={window.localStorage.getItem('selected')} alt="Xbox" />
            </div>
        </div>
    )
}

export default Selection