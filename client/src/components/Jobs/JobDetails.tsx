import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import moment from 'moment';

import Loader from '../Utils/Loader';
import { State } from '../../interfaces/store';
import { getPostById } from '../../actions/posts';
import NotFound from '../Utils/NotFound';
import UserImg from '../../images/user.png';

const JobDetails: React.FC = () => {
    const { id } = useParams();
    const dispatch: any = useDispatch();
    const navigate: any = useNavigate();

    const handleClick = () => {
        console.log('Clicked');
        
        if(isCurrentUser) {
            console.log('current user');
            
        } else {
            console.log('different user');
            navigate(`/jobs/${id}/apply`);
        }
    };

    useEffect(() => {
        document.title = "Job Details - JobMagnet";
        dispatch(getPostById(id || ""));
    }, []);

    const user = useSelector((state: State) => state.auth)?.authData?.user;
    const { isLoading, selectedPost } = useSelector((state: State) => state.posts);
    const isCurrentUser = user?._id === selectedPost?.creator?.id;

    if (isLoading) return <Loader />
    if (!selectedPost) return <NotFound />

    return (
        <div className='max-w-3xl mx-auto py-10'>
            <header>
                <div className='flex justify-between items-center'>
                    <Link to={`/profile/${selectedPost?.creator?.id}`} className='flex items-center gap-2 text-textcolor hover:text-primary'>
                        <img src={UserImg} className='h-8 w-8 object-cover border-x border-t border-solid border-grey' alt="" />
                        <h3 className='font-medium'>{selectedPost?.creator?.name}</h3>
                    </Link>
                    <div className='text-right pb-2 text-textcolor text-sm'>{`${moment(selectedPost?.createdAt).format('lll')} (${moment(selectedPost?.createdAt).fromNow()})`}</div>
                </div>
                <h1 className='border-y border-solid border-grey px-3 py-2 font-medium text-center text-md text-textcolor'>{selectedPost?.title}</h1>
            </header>
            <main>
                <p className='py-4 px-3 text-md text-center'>{selectedPost?.description}</p>
                <div className='text-center text-textcolor text-sm mb-4'>
                    {selectedPost?.tags?.map((tag: string) => ` #${tag}`)}
                </div>
                <div className='border-y border-solid border-grey px-3 py-2'>
                    <ul className='flex justify-between items-center'>
                        <li className='text-center'>
                            <div className='font-medium'>{selectedPost?.views?.length}</div>
                            <i className="fa-solid fa-eye text-xl text-grey"></i>
                            <div className='text-textcolor'>Views</div>
                        </li>
                        <li className='text-center'>
                            <div className='font-medium'>280</div>
                            <i className="fa-solid fa-check-to-slot text-xl text-grey"></i>
                            <div className='text-textcolor'>Submissions</div>
                        </li>
                        <li className='text-center'>
                            <div className='font-medium'>17</div>
                            <i className="fa-solid fa-mug-hot text-xl text-grey"></i>
                            <div className='text-textcolor'>Recruiting</div>
                        </li>
                    </ul>
                </div>
                <div className='text-center mt-5'>
                    <button onClick={handleClick} className='border border-solid border-grey rounded-md px-5 py-2 text-textcolor hover:text-primary'>{
                        isCurrentUser
                        ? <><i className="fa-solid fa-trash-can"></i> Delete this post</>
                        : <><i className="fa-solid fa-box"></i> Apply for the job</>
                    }</button>
                </div>
            </main>
        </div>
    )
}

export default JobDetails;