import './footer.scss'

import { IconButton } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PlayMarketImg from '../../../public/Footer-play.svg'
import AppStoreImg from '../../../public/Footer-app.svg'

const Footer = () => {
  return (
    <div className='footer_div'>
        <div className='footer_div-bottom'>
            <div className='footer_div-text'>
                <h3 className='footer_h3'>Need Help</h3>
                <p className='footer_p'>Contact Us</p>
                <p className='footer_p'>Track Order</p>
                <p className='footer_p'>Returns & Refunds</p>
                <p className='footer_p'>FAQ's</p>
                <p className='footer_p'>Career</p>
            </div>
            <div className='footer_div-text'> 
                <h3 className='footer_h3'>Company</h3>
                <p className='footer_p'>About Us</p>
                <p className='footer_p'>euphoria Blogr</p>
                <p className='footer_p'>euphoriastan</p>
                <p className='footer_p'>Collaboration</p>
                <p className='footer_p'>Media</p>
            </div>
            <div className='footer_div-text'> 
                <h3 className='footer_h3'>More Info</h3>
                <p className='footer_p'>Term and Conditions</p>
                <p className='footer_p'>Privacy Policy</p>
                <p className='footer_p'>Shipping Policy</p>
                <p className='footer_p'>Sitemap</p>
            </div> 
            <div className='footer_div-text'> 
                <h3 className='footer_h3'>Location</h3>
                <p className='footer_p'>support@euphoria.in</p>
                <p className='footer_p'>Eklingpura Chouraha, Ahmedabad Main Roadr</p>
                <p className='footer_p'>(NH 8- Near Mahadev Hotel) Udaipur, India</p>
            </div>
        </div>
        <div className='footer_btns'>
            <div className='footer-button'>
                <IconButton style={{color: 'white'}}>
                    <FacebookIcon/>
                </IconButton>
                <IconButton style={{color: 'white'}}>
                    <InstagramIcon/>
                </IconButton>
                <IconButton style={{color: 'white'}}>
                    <TwitterIcon/>
                </IconButton>
                <IconButton style={{color: 'white'}}>
                    <LinkedInIcon/>
                </IconButton>
            </div>
            <div  className='footer-button'>
                <h3 style={{margin: '30px'}}>Download The App </h3>
                <div>
                    <img style={{margin: '10px'}} src={PlayMarketImg} alt="..." />
                    <img style={{margin: '10px'}} src={AppStoreImg} alt="..." />

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer