import React, { Fragment, useEffect, useRef, useState } from 'react'
import emailjs from 'emailjs-com';
import { Slide } from '@material-ui/core';
import Zoom from '@material-ui/core/Zoom';
import checked from '../../assets/vectors/checked.svg'
import Avee from '../../assets/images/Avee.png'  
import Avatar from '../../assets/images/Avee-Avatar.png'
import instagram from '../../assets/images/instagram.png'
import Volume from '../../assets/vectors/Volume-Bar.svg'
import Wobble from '../../assets/vectors/Wobble.svg'
import snapchat from '../../assets/vectors/snapchat.svg'
import whatsapp from '../../assets/vectors/whatsapp.svg'
import sinstagram from '../../assets/vectors/instagram.svg'
import facebook from '../../assets/vectors/facebook.svg'
import youtube from '../../assets/vectors/youtube.svg'
import './Desktop.css';

const Desktop = () => {

  const [scrolled,setScrolled]=useState(false);
  const [slide,setSlide] = useState(true);
  const [showChat,setShowChat] = useState(true);
  const workRef =  useRef(null)
  const musicRef =  useRef(null)
  const contactRef =  useRef(null)

  const handleScroll = () => {

    const offset=window.scrollY;
    if(offset >= 0 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }

    if(offset>500) setSlide(false)
  }
  
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  },[])

  setTimeout(()=> setSlide(false),25000)

  let nav=['navbar'];
  if(scrolled){
    nav.push('scrolled');
  }

  const executeScroll = (ref) =>  ref.current.scrollIntoView({ behavior: 'smooth', block: 'center',inline: 'start'})

  const sendEmail=(e)=> {
    e.preventDefault();

    emailjs.sendForm('service_5edgdhc', 'template_4i2jw0p', e.target, 'user_mvJID1g34Lj1238kX1gzV')
      .then((result) => { 
          setShowChat(false)
      }, (error) => {
      });
               
      e.target.reset()
  }

  const about = (
      <p>
        Hi, I'm A-Vee<br/>
        Your favorite music producer's favorite music producer<br/>
        Been producing music for more than 6 years now.<br/>
        Have worked in many different generes of music<br/>
        But being heavily inspired by folk music, it's my favorite.<br/>
      </p>
  )

  const chatForm = (
                    <form className="chat" method="POST" onSubmit={sendEmail}>
                    <input className="chat__email" type="text" placeholder="Name" name="name"/>
                    <input className="chat__email" type="email" placeholder="Email *" name="email"/>
                    <textarea className="chat__message" type="text" placeholder="Message" name="message"/>
                    <button type="submit" className="chat__button">Let's Chat</button>
                    </form>
)

const sentCard = (
    <div className="sent">    
        <img src={checked}/>
        <span>SENT!</span>
        <p>Will Get Back To You</p>
    </div>
) 

    return (
        <Fragment>
                   
            <div className={nav.join(" ")}>
                <img src={Avee}/>
                <ul>
                    <li onClick={() => executeScroll(workRef)}>WORK</li>
                    <li onClick={()=> executeScroll(musicRef)}>MUSIC</li>
                    <li onClick={()=> executeScroll(contactRef)}>CONTACT</li>
                </ul>
            </div>

            <div className="studio">
            </div> 

            <Slide direction='right' in={slide} mountOnEnter unmountOnExit timeout={{enter: 500, exit: 2000}}>
                <div className="studio__about">
                        {about}
                </div>  
            </Slide>

            <div ref={workRef} className="youtube">
                
                <h2 className="headings">RECENT WORK</h2>
                
                <div className="youtube__videos">
                    <iframe width="580" height="340" src="https://www.youtube.com/embed/1j6K1YKpnVA"/>
                    <iframe width="580" height="340" src="https://www.youtube.com/embed/-5bzehjXsPQ"/>
                    <iframe width="580" height="340" src="https://www.youtube.com/embed/eUK7XIrmN0E"/>
                    <iframe width="580" height="340" src="https://www.youtube.com/embed/ygDGe_c0sXk"/>
                </div>
            </div>

            <div ref={musicRef} className="soundcloud">
                <h2 className="headings">SOUNDCLOUD</h2>
                <div className="soundcloud__content">
                    <div className="soundcloud__image">
                        <img src={Volume} className="volume"/>
                        <img src={Wobble} className="wobble"/>
                    </div>
                    <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1201425535&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
                </div>
            </div>

            <div className="touch">
                <h2 className="headings">GET IN TOUCH</h2>
                <div className="touch__content">
                        <img src={instagram} className="instagram" onClick={()=>window.open('https://www.instagram.com/a_veemusic/')}/>
                        <Zoom in={showChat} mountOnEnter unmountOnExit>
                            {chatForm}
                        </Zoom>
                        <Zoom in={!showChat} mountOnEnter unmountOnExit>
                            {sentCard}
                        </Zoom>
                </div>
            </div>

            <div ref={contactRef} className="contact">
                <h2 className="headings">CONTACT</h2>
                <div className="socials">
                    <img src={facebook} onClick={()=>window.open('https://www.facebook.com/avneet.sabharwal.7146')}/>
                    <img src={sinstagram} onClick={()=>window.open('https://www.instagram.com/a_veemusic/')}/>
                    <img src={whatsapp} onClick={()=>window.open('https://api.whatsapp.com/send?phone=+919599601126')}/>
                    <img src={snapchat} onClick={()=>window.open('https://www.snapchat.com/add/memyselfavneet')}/>
                    <img src={youtube} onClick={()=>window.open('https://youtube.com/channel/UCd7DoNGP5e0hXpvtw2PfNjg')}/>
                </div>
            </div>
        </Fragment> 
    )
}

export default Desktop
