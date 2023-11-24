import { Link } from "react-router-dom";

import FacebookLogo from '../../images/facebook-logo.png';
import TwitterLogo from '../../images/twitter-logo.png';
import LinkedInLogo from '../../images/linkedin-logo.png';
import InstagramLogo from '../../images/instagram-logo.png';

const Footer = () => {
    return (
        <footer className='relative p-10 bg-textcolor text-grey'>
            <div className='text-center my-10'>
                <h1 className='text-xl font-medium my-1 text-secondary'>Connect with Us</h1>
                <p className='text-lg'>Join the JobMagnet community on social media to stay updated on the latest job opportunities, career tips, and industry insights.</p>
            </div>
            <div className='my-10'>
                <h1 className='text-xl text-center font-medium my-1 text-secondary'>Follow us on:</h1>
                <ul className='flex gap-12 justify-center flex-wrap'>
                    <li className='text-lg'>
                        <Link className="flex flex-col items-center" to="https://www.facebook.com" target="_blank"><img className="w-50px" src={FacebookLogo} alt="facebook" /> Facebook</Link>
                    </li>
                    <li className='text-lg'>
                        <Link className="flex flex-col items-center" to="https://www.twitter.com/" target="_blank"><img className="w-50px" src={TwitterLogo} alt="twitter" /> Twitter</Link>
                    </li>
                    <li className='text-lg'>
                        <Link className="flex flex-col items-center" to="https://www.linkedin.com/" target="_blank"><img className="w-50px" src={LinkedInLogo} alt="linkedin" /> LinkedIn</Link>
                    </li>
                    <li className='text-lg'>
                        <Link className="flex flex-col items-center" to="https://www.instagram.com/" target="_blank"><img className="w-50px" src={InstagramLogo} alt="instagram" /> Instagram</Link>
                    </li>
                </ul>
            </div>
            <div className='my-10'>
                <h1 className='text-xl text-center font-medium my-1 text-secondary'>Contact Information</h1>
                <p className='text-center text-lg'>Have questions or need support? Reach out to our dedicated support team.</p>
                <div className='flex gap-12 justify-center text-lg mt-5 flex-wrap'>
                    <div>
                        <p><strong className='font-medium'>Email:</strong> support@jobmagnet.com</p>
                        <p><strong className='font-medium'>Phone:</strong> +1 (555) 123-4567</p>
                    </div>
                    <div>
                        <strong className='font-medium'>Address:</strong>
                        <p>JobMagnet Headquarters</p>
                        <p>123 Main Street</p>
                        <p>Cityville, State, ZIP</p>
                    </div>
                </div>
            </div>
            <p className='text-center'>Copyright © JobMagnet Community 2023. All rights reserved.</p>
        </footer>
    )
}

export default Footer