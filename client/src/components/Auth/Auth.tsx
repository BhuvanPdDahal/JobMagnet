import React, { useState, useEffect } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { signup, login } from '../../actions/auth';
import { State } from '../../interfaces/store';

interface InitState {
    firstName: string,
    lastName: string,
    skills: string,
    email: string,
    password: string,
    status: string,
    continent: string
}

let initialState: InitState = { firstName: '', lastName: '', skills: '', email: '', password: '', status: '', continent: 'Asia' };

const Auth: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch: any = useDispatch();
    const { userType } = useParams();
    if (userType) initialState = { ...initialState, status: userType };
    const [isSignup, setIsSignup] = useState(location.pathname.includes('/signup'));
    const [formData, setFormData] = useState(initialState);
    document.title = `${isSignup ? 'Signup' : 'Login'} - JobMagnet`;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);

        if (isSignup) {
            const form = { ...formData, skills: formData.skills.trim().split(',').map((skill) => skill.trim()) };
            console.log(form);
            dispatch(signup(form, navigate));
        } else {
            dispatch(login(formData, navigate));
        }
    };

    const handleClick = () => {
        navigate(`/${isSignup ? 'login' : 'signup'}/${userType}`);
        setIsSignup((prevIsSignup) => !prevIsSignup);
    }

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        dispatch({ type: "LOGOUT" });
    }, []);

    const { isLoading } = useSelector((state: State) => state.auth);

    return (
        <div className='my-12 max-w-3xl rounded-lg px-10 py-7 border border-solid border-grey mx-auto'>
            <header className='text-center font-medium text-secondary text-xl'>{isSignup ? "Sign up" : "Log in"} to {userType === "client" ? "hire talent" : "find work you love"}</header>
            <form onSubmit={handleSubmit}>
                {isSignup && (
                    <>
                        <div className='flex gap-10 mt-10 mb-6'>
                            <div className='w-full'>
                                <label htmlFor="firstName" className='text-md text-textcolor'>First Name</label>
                                <input onChange={handleChange} type="text" name='firstName' className='w-full outline-none text-lg px-4 py-2 rounded-md border border-solid border-grey' id='firstName' required />
                            </div>
                            <div className='w-full'>
                                <label htmlFor="lastName" className='text-md text-textcolor'>Last Name</label>
                                <input onChange={handleChange} type="text" name='lastName' className='w-full outline-none text-lg px-4 py-2 rounded-md border border-solid border-grey' id='lastName' required />
                            </div>
                        </div>
                        {userType === 'freelancer' && (
                            <div className='mb-6'>
                                <label htmlFor="skills" className='text-md text-textcolor'>Skills (Eg: developer, writer, designer)</label>
                                <input onChange={handleChange} type="text" name='skills' className='w-full outline-none text-lg px-4 py-2 rounded-md border border-solid border-grey' id='skills' required />
                            </div>
                        )}
                    </>
                )}

                <div className='mb-6'>
                    <label htmlFor="email" className='text-md text-textcolor'>Email</label>
                    <input onChange={handleChange} type="email" name='email' className='w-full outline-none text-lg px-4 py-2 rounded-md border border-solid border-grey' id='email' required />
                </div>
                <div className='mb-6'>
                    <label htmlFor="password" className='text-md text-textcolor'>Password</label>
                    <input onChange={handleChange} type="password" name='password' className='w-full outline-none text-lg px-4 py-2 rounded-md border border-solid border-grey' id='password' required />
                </div>
                {isSignup && (
                    <div className='mb-6'>
                        <label htmlFor="continent" className='text-md text-textcolor'>Continent</label>
                        <select onChange={handleChange} name="continent" defaultValue={"Asia"} className='w-full outline-none text-lg px-4 py-2 rounded-md border border-solid border-grey' id="continent">
                            <option value="Africa">Africa</option>
                            <option value="Asia">Asia</option>
                            <option value="Australia">Australia</option>
                            <option value="Europe">Europe</option>
                            <option value="North America">North America</option>
                            <option value="South America">South America</option>
                        </select>
                    </div>
                )}
                <button className='w-full text-white bg-primary rounded-md py-2 text-lg mb-3' type="submit">
                    {isSignup
                        ? isLoading ? "Creating your account..." : "Create my account"
                        : isLoading ? "Logging in to your account..." : "Login to my account"
                    }
                </button>
            </form>
            <button className='w-full border border-solid border-grey rounded-md py-2 text-lg' onClick={handleClick}>{isSignup ? "Already have an account? Login" : "Don't have an account? Signup"}</button>
        </div>
    )
}

export default Auth;