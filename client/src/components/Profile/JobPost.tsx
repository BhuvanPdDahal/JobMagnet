import React from 'react';
import { Link } from 'react-router-dom';

import { JobPostProp } from '../../interfaces/post';

const JobPost: React.FC<JobPostProp> = ({ id, title, tags }: JobPostProp) => {
    return (
        <Link to={`/jobs/${id}`} className='block border-b border-solid border-grey text-center py-2 hover:border-x'>
            <header className='text-md text-ellipsis'>{title}</header>
            <p className='text-textcolor text-sm text-ellipsis'>{tags?.map((tag: string) => `#${tag} `)}</p>
        </Link>
    )
}

export default JobPost;