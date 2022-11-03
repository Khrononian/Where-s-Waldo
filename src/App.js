import './App.css';
import React, { useState, } from 'react';
import Stages from './Components/Stages'
import Selection from './Components/Selection'
import Gamecube from './Components/Gamecube'
import Nintendo from './Components/Nintendo'

const App = () => {
  const [image, setImage] = useState('');

  const getMouseData = (event) => {
    console.log(event, window, image)
    // setImage(event.target.currentSrc)
    window.localStorage.setItem('selected', event.target.currentSrc)
    setImage(event.target.currentSrc)
  }

  return (
    <div className="App">
      <header>
        <h1>Choose a stage!</h1>
        <div className='characters'>
          <img src='https://imgs.search.brave.com/u-a-1gaerA1n6Z3hksFBeNVlrbLWKLfyEV3CTfXBteg/rs:fit:1089:1200:1/g:ce/aHR0cHM6Ly93d3cu/cG5nYXJ0cy5jb20v/ZmlsZXMvMy9LcmF0/b3MtUE5HLUhpZ2gt/UXVhbGl0eS1JbWFn/ZS5wbmc' alt='Character' />
          <img src='https://imgs.search.brave.com/jCH5mOGP3HygnScK63T9pXPyRWEzVme6XAkEjtwRhR0/rs:fit:1185:1200:1/g:ce/aHR0cHM6Ly92aWdu/ZXR0ZS53aWtpYS5u/b2Nvb2tpZS5uZXQv/amFrYW5kZGF4dGVy/L2ltYWdlcy80LzRk/L0RheHRlcl9mcm9t/X0pha18zX3JlbmRl/ci5wbmcvcmV2aXNp/b24vbGF0ZXN0P2Ni/PTIwMTUwMjE4MDIw/OTI2' alt='Character' />
          <img src='https://imgs.search.brave.com/XyGzVsblly6jhxeB5Kbf8w4h0peKex-2R3buO6mig4Q/rs:fit:190:190:1/g:ce/aHR0cDovL3ZpZ25l/dHRlMy53aWtpYS5u/b2Nvb2tpZS5uZXQv/cGxheXN0YXRpb25h/bGxzdGFyc2JhdHRs/ZXJveWFsZS9pbWFn/ZXMvMC8wZS9LYXRh/bWFyaS1QcmluY2Uu/cG5nL3JldmlzaW9u/L2xhdGVzdD9jYj0y/MDEyMTIwMTE1MDEz/NA' alt='Character' />
        </div>
        <div className='characters'>
          <img src='https://imgs.search.brave.com/UzYn3UdoPerPdfnp3duSiTn_hKKGxM8iPFOdP_zXA3s/rs:fit:460:796:1/g:ce/aHR0cHM6Ly92aWdu/ZXR0ZS53aWtpYS5u/b2Nvb2tpZS5uZXQv/amV0c2V0cmFkaW8v/aW1hZ2VzL2EvYTcv/R3VtanNyLTAucG5n/L3JldmlzaW9uL2xh/dGVzdD9jYj0yMDE4/MDgxOTE5MTI0MQ' alt='Character' />Gum
          <img src='https://imgs.search.brave.com/XSRMQErRt5xdIu8DuvhMhweBue3LrghZsfYnTcnwkbg/rs:fit:425:600:1/g:ce/aHR0cHM6Ly92Z2Jv/eGFydC5jb20vcmVz/b3VyY2VzL3JlbmRl/ci8xMTc2NF90b20t/Y2xhbmN5cy1zcGxp/bnRlci1jZWxsLWJs/YWNrbGlzdC1wcmV2/LnBuZw' alt='Character' /> Splinter cell
          <img src='https://imgs.search.brave.com/3fkAfbThlhRyExLW1vj4dQLliF_czmZrdrveQG48b20/rs:fit:682:1000:1/g:ce/aHR0cDovL2ltZzMu/d2lraWEubm9jb29r/aWUubmV0L19fY2Iy/MDE0MDUwNDIxMTgy/NS9kZWF0aGJhdHRs/ZS9pbWFnZXMvNi82/Yy9SeXVfSGF5YWJ1/c2FfVHJhbnNwYXJl/bnRfQmFja2dyb3Vu/ZC5wbmc' alt='Character' /> Ryu
        </div>
        <div className='characters'>
          <img src='https://imgs.search.brave.com/RYXuFn6R77vbTvLOP3OVBWSkmfCIZsIIqA2ZWizH06o/rs:fit:840:859:1/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMTMvU3Vw/ZXItTWFyaW8tQnJv/cy1Ub2FkLVBORy1U/cmFuc3BhcmVudC1Q/aWN0dXJlLnBuZw' alt='Character' />
          <img src='https://imgs.search.brave.com/vDp892_A0lMjXx1glf1uvBwhbPYHR_KcIVoGerxETL0/rs:fit:500:583:1/g:ce/aHR0cHM6Ly93d3cu/cHVpc3NhbmNlLXpl/bGRhLmNvbS9pbWcv/bmV3cy8yMDE4LzA2/L3NoZWlrLXN1cGVy/LXNtYXNoLWJyb3Mt/dWx0aW1hdGUtYXJ0/d29ya19taW5pLnBu/Zw' alt='Character' />
          <img src='https://imgs.search.brave.com/N29-nP_R7SdTDDdHJBYG2_0oegJ_ekFaSM-VQ3y7HU8/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWcu/cG5naW8uY29tL3By/aW5jZXNzLXBlYWNo/LXN1cGVyLW1hcmlv/LXdpa2ktdGhlLW1h/cmlvLWVuY3ljbG9w/ZWRpYS1wcmluY2Vz/cy1wZWFjaC1wbmct/MTIwMF8yMzk4LnBu/Zw' alt='Character' />
        </div>
        <div className='characters'>
          <img src='https://imgs.search.brave.com/q3oDHw_rwFUrYkGdCpgSt4uUu8bwyMQVK9jPRTxdqMc/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9mcmVl/cG5naW1nLmNvbS90/aHVtYi90aGVfbGVn/ZW5kX29mX3plbGRh/LzIxNTUyLTMtemVs/ZGEtbGluay5wbmc' alt='Character' />
          <img src='https://imgs.search.brave.com/13LfjByRiszpY2_i_I1vbiLeVzqnaMIxo6AOLxyLJjw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/cG5nYXJ0cy5jb20v/ZmlsZXMvMy9TYW11/cy1BcmFuLVBORy1U/cmFuc3BhcmVudC1J/bWFnZS5wbmc' alt='Character' />
          <img src='https://imgs.search.brave.com/8PFmh8htBe-IXx71KHb_-5X1jzqGmbyOJ_8UaxmYtSU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMTMvQ2Fw/dGFpbi1GYWxjb24t/UE5HLUJhY2tncm91/bmQtSW1hZ2UucG5n' alt='Character' />
        </div>
      </header>
      <div className='image-container'>
        <img className='image' src={image} alt='Stage' />
      </div>
      <div className='stages'>
        
        <Stages data={getMouseData} image={image} />
      </div>
      <div className='block'>
        <button className='btns'>Name</button>
        <button className='btns'>New Name</button>
        <button className='btns'>Xtra Name</button>
      </div>
    </div>
  );
}

export default App;
