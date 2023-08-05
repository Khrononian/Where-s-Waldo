import React from "react";
import { Link } from "react-router-dom";
import '../Assets/Stage.css'
import PS2 from '../Images/ps2.jpg'
import Xbox from '../Images/xbox.jpg'

const Stages = ({ data }) => {


    return (
        <div className="grid">
            <div>
                <Link onClick={data}
                to={'/game'}
                state={{
                    left: 'https://imgs.search.brave.com/u-a-1gaerA1n6Z3hksFBeNVlrbLWKLfyEV3CTfXBteg/rs:fit:1089:1200:1/g:ce/aHR0cHM6Ly93d3cu/cG5nYXJ0cy5jb20v/ZmlsZXMvMy9LcmF0/b3MtUE5HLUhpZ2gt/UXVhbGl0eS1JbWFn/ZS5wbmc',
                    middle: 'https://imgs.search.brave.com/jCH5mOGP3HygnScK63T9pXPyRWEzVme6XAkEjtwRhR0/rs:fit:1185:1200:1/g:ce/aHR0cHM6Ly92aWdu/ZXR0ZS53aWtpYS5u/b2Nvb2tpZS5uZXQv/amFrYW5kZGF4dGVy/L2ltYWdlcy80LzRk/L0RheHRlcl9mcm9t/X0pha18zX3JlbmRl/ci5wbmcvcmV2aXNp/b24vbGF0ZXN0P2Ni/PTIwMTUwMjE4MDIw/OTI2',
                    right: 'https://imgs.search.brave.com/XyGzVsblly6jhxeB5Kbf8w4h0peKex-2R3buO6mig4Q/rs:fit:190:190:1/g:ce/aHR0cDovL3ZpZ25l/dHRlMy53aWtpYS5u/b2Nvb2tpZS5uZXQv/cGxheXN0YXRpb25h/bGxzdGFyc2JhdHRs/ZXJveWFsZS9pbWFn/ZXMvMC8wZS9LYXRh/bWFyaS1QcmluY2Uu/cG5nL3JldmlzaW9u/L2xhdGVzdD9jYj0y/MDEyMTIwMTE1MDEz/NA',
                    console: 'PS2',
                    characters: [
                        'Kratos',
                        'Daxter',
                        'Prince'
                    ] 
                }}
                >
                    <img className='image' src={PS2} alt="Playstation 2" />
                </Link>
            </div>    
            <div>
                <Link onClick={data}
                to={'/game'}
                state={{
                    left: 'https://imgs.search.brave.com/UzYn3UdoPerPdfnp3duSiTn_hKKGxM8iPFOdP_zXA3s/rs:fit:460:796:1/g:ce/aHR0cHM6Ly92aWdu/ZXR0ZS53aWtpYS5u/b2Nvb2tpZS5uZXQv/amV0c2V0cmFkaW8v/aW1hZ2VzL2EvYTcv/R3VtanNyLTAucG5n/L3JldmlzaW9uL2xh/dGVzdD9jYj0yMDE4/MDgxOTE5MTI0MQ',
                    middle: 'https://imgs.search.brave.com/XSRMQErRt5xdIu8DuvhMhweBue3LrghZsfYnTcnwkbg/rs:fit:425:600:1/g:ce/aHR0cHM6Ly92Z2Jv/eGFydC5jb20vcmVz/b3VyY2VzL3JlbmRl/ci8xMTc2NF90b20t/Y2xhbmN5cy1zcGxp/bnRlci1jZWxsLWJs/YWNrbGlzdC1wcmV2/LnBuZw',
                    right: 'https://imgs.search.brave.com/3fkAfbThlhRyExLW1vj4dQLliF_czmZrdrveQG48b20/rs:fit:682:1000:1/g:ce/aHR0cDovL2ltZzMu/d2lraWEubm9jb29r/aWUubmV0L19fY2Iy/MDE0MDUwNDIxMTgy/NS9kZWF0aGJhdHRs/ZS9pbWFnZXMvNi82/Yy9SeXVfSGF5YWJ1/c2FfVHJhbnNwYXJl/bnRfQmFja2dyb3Vu/ZC5wbmc',
                    console: 'Xbox',
                    characters: [
                        'Gum',
                        'Splinter Cell',
                        'Ryu'
                    ]
                    
                }}
                >
                    <img className='image' src={Xbox} alt="Xbox" />
                </Link>
            </div>
            <div>
                <Link onClick={data}
                to={'/game'}
                state={{
                    left: 'https://imgs.search.brave.com/RYXuFn6R77vbTvLOP3OVBWSkmfCIZsIIqA2ZWizH06o/rs:fit:840:859:1/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMTMvU3Vw/ZXItTWFyaW8tQnJv/cy1Ub2FkLVBORy1U/cmFuc3BhcmVudC1Q/aWN0dXJlLnBuZw',
                    middle: 'https://imgs.search.brave.com/vDp892_A0lMjXx1glf1uvBwhbPYHR_KcIVoGerxETL0/rs:fit:500:583:1/g:ce/aHR0cHM6Ly93d3cu/cHVpc3NhbmNlLXpl/bGRhLmNvbS9pbWcv/bmV3cy8yMDE4LzA2/L3NoZWlrLXN1cGVy/LXNtYXNoLWJyb3Mt/dWx0aW1hdGUtYXJ0/d29ya19taW5pLnBu/Zw',
                    right: 'https://imgs.search.brave.com/N29-nP_R7SdTDDdHJBYG2_0oegJ_ekFaSM-VQ3y7HU8/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWcu/cG5naW8uY29tL3By/aW5jZXNzLXBlYWNo/LXN1cGVyLW1hcmlv/LXdpa2ktdGhlLW1h/cmlvLWVuY3ljbG9w/ZWRpYS1wcmluY2Vz/cy1wZWFjaC1wbmct/MTIwMF8yMzk4LnBu/Zw',
                    console: 'Gamecube',
                    characters: [
                        'Toad',
                        'Sheik',
                        'Peach'
                    ]
                }}
                >
                    <img className='image' src="https://cdnb.artstation.com/p/assets/images/images/031/111/447/large/pierre-roussel-gamecube-phone2-black.jpg?1602629588" alt="Gamecube" />
                </Link>
            </div>
            <div>
                <Link onClick={data}
                to={'/game'}
                state={{
                    left: 'https://imgs.search.brave.com/q3oDHw_rwFUrYkGdCpgSt4uUu8bwyMQVK9jPRTxdqMc/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9mcmVl/cG5naW1nLmNvbS90/aHVtYi90aGVfbGVn/ZW5kX29mX3plbGRh/LzIxNTUyLTMtemVs/ZGEtbGluay5wbmc',
                    middle: 'https://imgs.search.brave.com/13LfjByRiszpY2_i_I1vbiLeVzqnaMIxo6AOLxyLJjw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/cG5nYXJ0cy5jb20v/ZmlsZXMvMy9TYW11/cy1BcmFuLVBORy1U/cmFuc3BhcmVudC1J/bWFnZS5wbmc',
                    right: 'https://imgs.search.brave.com/8PFmh8htBe-IXx71KHb_-5X1jzqGmbyOJ_8UaxmYtSU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMTMvQ2Fw/dGFpbi1GYWxjb24t/UE5HLUJhY2tncm91/bmQtSW1hZ2UucG5n',
                    console: 'Nintendo',
                    characters: [
                        'Link',
                        'Samus',
                        'Falco'
                    ]
                }}
                >
                    <img className='image' src="https://cdna.artstation.com/p/assets/images/images/049/429/268/large/pierre-roussel-snes-phone2-us.jpg?1652460456" alt="Nintendo" />
                </Link>
            </div>
        </div>
    )
}

export default Stages