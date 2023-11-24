import { useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { State } from '../../interfaces/store';
import { JobPostProp } from '../../interfaces/post';
import Loader from '../Utils/Loader';
import NotFound from '../Utils/NotFound';
import { getUserById } from '../../actions/auth';
import JobPost from './JobPost';

const Profile = () => {
    const { id } = useParams();
    const dispatch: any = useDispatch();
    const location: any = useLocation();

    useEffect(() => {
        document.title = "Profile - JobMagnet";
        dispatch(getUserById(id || ''));
    }, [location]);

    const { isLoading, selectedProfile } = useSelector((state: State) => state.auth);
    const isClient = selectedProfile?.status === 'client';

    console.log('SelectedProfile', selectedProfile);


    if (isLoading) return <Loader />
    if (!selectedProfile) return <NotFound />

    return (
        <div className='max-w-3xl mx-auto py-10 px-3 mb-n5px'>
            <div className='flex justify-between border-b border-solid border-grey items-center'>
                <div className='flex items-center gap-3'>
                    <i className="fa-solid fa-house-chimney-user text-5xl text-grey"></i>
                    <h1 className='text-xl text-textcolor font-medium'>{`${selectedProfile?.firstName} ${selectedProfile?.lastName}`}</h1>
                </div>
                <div className='flex items-center gap-2 text-grey'>
                    <p className='uppercase'>{selectedProfile?.status}</p>
                    <i className="fa-solid fa-lock  text-xl"></i>
                </div>
            </div>
            <div className='py-5 border-b border-solid border-grey'>
                <h1 className='text-xl font-medium text-textcolor'>Biodata</h1>
                <p className='text-textcolor'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quas laboriosam nisi dignissimos culpa, mollitia, eligendi vero iusto explicabo provident sequi. Nulla perferendis, iste molestias voluptatem numquam, optio laboriosam nobis tenetur ullam qui ducimus assumenda in repellendus. Quas, debitis minus perferendis, dolorem sed ex voluptates et laboriosam nulla placeat eveniet, voluptate alias. Autem aut accusamus quia dignissimos eius est.</p>
            </div>
            <div className='py-5 border-b border-solid border-grey'>
                <h1 className='text-xl font-medium text-textcolor'>Accomplishments</h1>
                <p className='text-textcolor'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quas laboriosam nisi dignissimos culpa, mollitia, eligendi vero iusto explicabo provident sequi. Nulla perferendis, iste molestias voluptatem numquam, optio laboriosam nobis tenetur ullam qui ducimus assumenda in repellendus. Quas, debitis minus perferendis, dolorem sed ex voluptates et laboriosam nulla placeat eveniet, voluptate alias. Autem aut accusamus quia dignissimos eius est.</p>
            </div>
            <div className='py-5 border-b border-solid border-grey'>
                {isClient ? (
                    <>
                        <h1 className='text-xl font-medium text-textcolor border-b border-solid border-grey pb-3'>Job Posts</h1>
                        {selectedProfile?.jobPosts?.length ? (
                            selectedProfile?.jobPosts?.map((post: JobPostProp) => <JobPost
                                id={post?.id}
                                title={post?.title}
                                tags={post?.tags}
                            />)
                        ) : (
                            <div>{`${selectedProfile?.firstName} ${selectedProfile?.lastName} hasn't posted any job`}</div>
                        )}
                    </>
                ) : (
                    <h1 className='text-xl font-medium text-textcolor'>Job Expertise</h1>
                    // TODO - Display all the job expertise
                )}
            </div>
            <div className='text-right py-5'>
                <Link to='/jobs/create' className='border border-solid border-grey rounded-md px-5 py-2 hover:text-primary'>{isClient ? "Add a job post" : "View job posts"}</Link>
            </div>
        </div>
    )
}

export default Profile;