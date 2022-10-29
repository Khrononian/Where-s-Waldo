import React from "react";

const Station = ({ data }) => {


    return (
        <div>
            <div>
                <button onClick={data}>
                    <img className='image' src="https://cdnb.artstation.com/p/assets/images/images/028/741/389/large/pierre-roussel-ps2-phone2.jpg?1595367628" alt="Playstation 2" />
                </button>
            </div>    
        </div>
    )
}

export default Station