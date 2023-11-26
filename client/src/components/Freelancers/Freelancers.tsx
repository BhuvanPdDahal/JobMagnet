import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import Loader from '../Utils/Loader';
import Freelancer from './Freelancer';
import useQuery from '../../hooks/useQuery';
import { getAllUsers, searchUser } from '../../actions/auth';
import { State } from '../../interfaces/store';
import Unaccessable from '../Utils/Unaccessable';

const Freelancers = () => {
    const params = useQuery();
    const location = useLocation();
    const dispatch: any = useDispatch();
    const navigate: any = useNavigate();
    const searchedName = params.get("name");
    const searchedTag = params.get("tag");
    const searchedEmail = params.get("email");
    const value = searchedName || searchedEmail || searchedTag || '';
    const type = (searchedName && 'name') || (searchedEmail && 'email') || 'tag';
    const [searchType, setSearchType] = useState(type);
    const [searchValue, setSearchValue] = useState(value);

    const searchFreelancers = () => {
        document.title = "Search Freelancers - JobMagnet";
        if(user) dispatch(searchUser(searchType, searchValue));
    };

    const handleKeyDown = (e: any) => {
        if(e.key === "Enter") {
            navigate(`/freelancers/search?${searchType}=${searchValue || 'empty'}`);
        }
    };

    useEffect(() => {
        if(location.pathname.includes('search')) return searchFreelancers();
        document.title = "Freelancers - JobMagnet";
        if(user) dispatch(getAllUsers());
    }, [location]);

    const user = useSelector((state: State) => state.auth)?.authData?.user;
    const { isLoading, users } = useSelector((state: State) => state.auth);

    if(!user) return <Unaccessable />
    if (isLoading) return <Loader />

    return (
        <div className='p-10 max-w-3xl mx-auto'>
            <div className='flex justify-center mb-5'>
                <input onKeyDown={handleKeyDown} onChange={(e) => setSearchValue(e.target.value)} value={searchValue} className='w-350px border text-lg border-solid border-grey outline-none px-5 py-3 transition-searchbar duration-200 rounded-l-100px focus:rounded-l-lg' type="text" placeholder={`Search freelancers by ${searchType}`} />
                <select className='outline-none text-lg border-y border-r px-3 border-solid border-grey transition-searchbar duration-200 rounded-r-100px focus:rounded-r-lg' value={searchType} onChange={(e) => setSearchType(e.target.value)}>
                    <option value="tag">Tag</option>
                    <option value="email">Email</option>
                    <option value="name">Name</option>
                </select>
            </div>
            <div className='border-t border-solid border-grey'>
                {users?.length ? (
                    users?.map((user) => <Freelancer
                        key={user?._id}
                        _id={user?._id}
                        name={`${user?.firstName} ${user?.lastName}`}
                        createdAt={user?.createdAt}
                        skills={user?.skills}
                    />)
                ) : (
                    <div className="text-center text-xl text-textcolor mt-10">No freelancer found</div>
                )}
            </div>
        </div>
    )
}

export default Freelancers;