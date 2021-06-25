import {FaFacebookSquare,FaTwitterSquare} from 'react-icons/fa';
import { AiOutlineGithub} from 'react-icons/ai';
import {IoMdHeartHalf} from 'react-icons/io';
import {SiLinkedin} from 'react-icons/si';
import './Footer.css'

const Footer = () =>{

    return(
        <div className='Footer-container'>
            <div className='Foo-feadback-container'>
                <h1>Interested in Sharing Feedback or Collaborating ?</h1>
                <div onClick={(e)=>{
                        console.log(e);
                        window.location="mailto:tanveer1.mtm@gmail.com";
                        e.preventDefault();

                    }} 
                className='feedback-container'> 
                    {/* <div className='feedback-div'>
                        <input type='text' placeholder="Email" name='email'/>
                    </div> */}
                    {/* <div   className='feedback-button'> */}
                            <h4>Start</h4>
                    {/* </div> */}
                </div>

            </div>
            <div className='Foo-icon-container'>
            
            <AiOutlineGithub className='icon'/>
            <SiLinkedin className='icon'/>
            <FaFacebookSquare className="icon"/>
            <FaTwitterSquare className='icon'/>
            </div>
            <div className='Foo-copyright-container'>
                <p>Made with <IoMdHeartHalf className='heart-icon'/>{' | '}&copy; {' '}2021</p>

            </div>
        </div>
    );
}

export default Footer;