import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

import Post from './JobPost';
import Loader from '../Utils/Loader';
import useQuery from '../../hooks/useQuery'
import Unaccessable from '../Utils/Unaccessable';
import { getAllPosts } from '../../actions/posts';
import { State } from '../../interfaces/store';
import { PostProp } from '../../interfaces/post';
import { searchPost } from '../../actions/posts';

const JobPosts: React.FC = () => {
    const location = useLocation();
    const dispatch: any = useDispatch();
    const navigate: any = useNavigate();
    const { title, tag } = useQuery();
    const value = title || tag || '';
    const type = (tag && 'tag') || 'title';
    const [searchType, setSearchType] = useState(type);
    const [searchValue, setSearchValue] = useState(value);

    const searchJobPosts = () => {
        document.title = "Search Job Posts - JobMagnet";
        if(user) dispatch(searchPost(searchType, searchValue));
    };

    const handleKeyDown = (e: any) => {
        if(e.key === "Enter") {
            navigate(`/jobs/search?${searchType}=${searchValue || 'empty'}`);
        }
    };
    
    useEffect(() => {
        if(location.pathname.includes('search')) return searchJobPosts();
        document.title = "Job Posts - JobMagnet";
        if(user) dispatch(getAllPosts());
    }, [location]);
    
    const user = useSelector((state: State) => state.auth)?.authData?.user;
    const { posts, isLoading } = useSelector((state: State) => state.posts);

    if (!user) return <Unaccessable />
    if (isLoading) return <Loader />

    return (
        <div className='p-10 max-w-3xl mx-auto'>
            <div className='flex justify-center mb-5'>
                <input onKeyDown={handleKeyDown} onChange={(e) => setSearchValue(e.target.value)} value={searchValue} className='w-350px border text-lg border-solid border-grey outline-none px-5 py-3 transition-searchbar duration-300 rounded-l-100px focus:rounded-l-lg' type="text" placeholder={`Search jobs by ${searchType}`}/>
                <select className='outline-none text-lg border-y border-r px-3 border-solid border-grey transition-searchbar duration-300 rounded-r-100px focus:rounded-r-lg' value={searchType} onChange={(e) => setSearchType(e.target.value)}>
                    <option value="title">Title</option>
                    <option value="tag">Tag</option>
                </select>
            </div>
            <div className='border-t border-solid border-grey'>
                {posts.length ? (
                    posts.map((post: PostProp) => <Post
                        key={post._id}
                        _id={post._id}
                        title={post.title}
                        description={post.description}
                        creator={post.creator}
                        tags={post.tags}
                        createdAt={post.createdAt}
                    />)
                ) : (
                    <div className="text-center text-xl text-textcolor mt-10">No related job posts</div>
                )}
            </div>
        </div>
    )
}

export default JobPosts;