import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import ClientImg from '../../images/client.avif';
import FreelancerImg from '../../images/freelancer.avif';

const UserType: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const status = location.pathname;
    const isSignup = status.includes('/signup');
    const [userType, setUserType] = useState('');
    const clientInput = useRef<HTMLInputElement>(null);
    const freelancerInput = useRef<HTMLInputElement>(null);

    const handleClientClick = () => {
        setUserType("client");
        clientInput?.current?.click();
    };

    const handleFreelancerClick = () => {
        setUserType("freelancer");
        freelancerInput?.current?.click();
    };

    const handleBtnClick = () => {
        navigate(`${status}/${userType}`);
    }

    useEffect(() => {
        document.title = 'User Type - JobMagnet';
    }, []);

    return (
        <div className='w-fit mx-auto my-12 px-8'>
            <div className='flex gap-12'>
                <div className='max-w-md cursor-pointer text-center' onClick={handleClientClick}>
                    <h3 className='text-xl mb-3'>{isSignup ? "Join" : "Login"} as a client</h3>
                    <img className='w-full rounded-3xl mb-3' src={ClientImg} alt="" />
                    <input ref={clientInput} type="radio" className='h-8 w-8' name='user-type' />
                </div>
                <div className='max-w-md cursor-pointer text-center' onClick={handleFreelancerClick}>
                    <h3 className='text-xl mb-3'>{isSignup ? "Apply" : "Login"} as a freelancer</h3>
                    <img className='w-full rounded-3xl mb-3' src={FreelancerImg} alt="" />
                    <input ref={freelancerInput} type="radio" className='h-8 w-8' name='user-type' />
                </div>
            </div>
            <button onClick={handleBtnClick} className={`py-2 text-lg rounded-md transition-bg duration-200 w-full mt-5 text-white shadow-normal ${userType ? "bg-primary hover:bg-blue-900" : "bg-blue-300"}`} disabled={!userType}>
                {isSignup ? "Create account" : "Login to account"} <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    )
}

export default UserType;