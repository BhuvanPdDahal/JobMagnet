import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { createPost } from '../../actions/posts';
import { State } from '../../interfaces/store';
import { JobForm as Form } from '../../interfaces/post';

const initialState = { title: '', description: '', tags: '' };

const JobForm = () => {
    const navigate = useNavigate();
    const dispatch: any = useDispatch();
    const [formData, setFormData] = useState(initialState);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const form: Form = {
            title: formData.title,
            description: formData.description,
            tags: formData.tags.trim().split(',').map((tag) => tag.trim())
        }

        console.log(form);
        dispatch(createPost(form, navigate));
    };

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const { isLoading } = useSelector((state: State) => state.posts);

    return (
        <div className='max-w-3xl rounded-lg px-10 py-7 border border-solid border-grey mx-auto'>
            <header className='text-center font-medium text-secondary text-xl'>Create a job post</header>
            <form onSubmit={handleSubmit}>
                <div className='mb-6'>
                    <label htmlFor="title" className='text-md text-textcolor'>Title</label>
                    <input onChange={handleChange} value={formData.title} type="text" name='title' className='w-full outline-none text-lg px-4 py-2 rounded-md border border-solid border-grey focus:border-primary' id='title' required />
                </div>
                <div className='mb-6'>
                    <label htmlFor="description" className='text-md text-textcolor'>Description</label>
                    <input onChange={handleChange} value={formData.description} type="text" name='description' className='w-full outline-none text-lg px-4 py-2 rounded-md border border-solid border-grey focus:border-primary' id='description' required />
                </div>
                <div className='mb-6'>
                    <label htmlFor="tags" className='text-md text-textcolor'>Tags</label>
                    <input onChange={handleChange} value={formData.tags} type="text" name='tags' className='w-full outline-none text-lg px-4 py-2 rounded-md border border-solid border-grey focus:border-primary' id='tags' required />
                </div>
                <button className={`w-full text-white bg-primary rounded-md py-2 text-lg mb-3 transition-bg duration-200 ${isLoading ? 'bg-blue-300 cursor-wait' : 'hover:bg-blue-800'}`} type="submit">{isLoading ? "Creating your post..." : "Create my post"}</button>
            </form>
        </div>
    )
}

export default JobForm;