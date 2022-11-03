import React from "react";
import { Link } from "react-router-dom";
import '../Assets/Stage.css'

const Stages = ({ data, image }) => {


    return (
        <div className="grid">
            <div>
                <Link onClick={data}
                to={'/game'}
                state={{
                    kratos: 'https://imgs.search.brave.com/u-a-1gaerA1n6Z3hksFBeNVlrbLWKLfyEV3CTfXBteg/rs:fit:1089:1200:1/g:ce/aHR0cHM6Ly93d3cu/cG5nYXJ0cy5jb20v/ZmlsZXMvMy9LcmF0/b3MtUE5HLUhpZ2gt/UXVhbGl0eS1JbWFn/ZS5wbmc',
                    daxter: 'https://imgs.search.brave.com/jCH5mOGP3HygnScK63T9pXPyRWEzVme6XAkEjtwRhR0/rs:fit:1185:1200:1/g:ce/aHR0cHM6Ly92aWdu/ZXR0ZS53aWtpYS5u/b2Nvb2tpZS5uZXQv/amFrYW5kZGF4dGVy/L2ltYWdlcy80LzRk/L0RheHRlcl9mcm9t/X0pha18zX3JlbmRl/ci5wbmcvcmV2aXNp/b24vbGF0ZXN0P2Ni/PTIwMTUwMjE4MDIw/OTI2',
                    prince: 'https://imgs.search.brave.com/XyGzVsblly6jhxeB5Kbf8w4h0peKex-2R3buO6mig4Q/rs:fit:190:190:1/g:ce/aHR0cDovL3ZpZ25l/dHRlMy53aWtpYS5u/b2Nvb2tpZS5uZXQv/cGxheXN0YXRpb25h/bGxzdGFyc2JhdHRs/ZXJveWFsZS9pbWFn/ZXMvMC8wZS9LYXRh/bWFyaS1QcmluY2Uu/cG5nL3JldmlzaW9u/L2xhdGVzdD9jYj0y/MDEyMTIwMTE1MDEz/NA',
                }}
                >
                    <img className='image' src="https://cdnb.artstation.com/p/assets/images/images/028/741/389/large/pierre-roussel-ps2-phone2.jpg?1595367628" alt="Playstation 2" />
                </Link>
            </div>    
            <div>
                <Link onClick={data}>
                    <img className='image' src="https://cdnb.artstation.com/p/assets/images/images/025/112/219/large/pierre-roussel-xbox-phone2.jpg?1584653417" alt="Xbox" />
                </Link>
            </div>
            <div>
                <Link onClick={data}>
                    <img className='image' src="https://cdnb.artstation.com/p/assets/images/images/031/111/447/large/pierre-roussel-gamecube-phone2-black.jpg?1602629588" alt="Gamecube" />
                </Link>
            </div>
            <div>
                <Link onClick={data}>
                    <img className='image' src="https://cdna.artstation.com/p/assets/images/images/049/429/268/large/pierre-roussel-snes-phone2-us.jpg?1652460456" alt="Nintendo" />
                </Link>
            </div>
        </div>
    )
}

export default Stages