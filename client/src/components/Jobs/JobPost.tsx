import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { PostProp } from '../../interfaces/post';
import UserImg from '../../images/user.png';

const Post = ({ _id, title, description, tags, creator, createdAt }: PostProp) => {
  return (
    <Link to={`/jobs/${_id}`} className='border-b block border-solid border-grey px-3 py-4 hover:border-x hover:px-[11px]'>
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
                <img className='h-8 w-8 rounded-full object-cover' src={UserImg} alt="" />
                <div className='font-medium text-textcolor'>{creator.name}</div>
            </div>
            <div className="text-textcolor">{moment(createdAt).format('lll')}</div>
        </div>
        <div className='my-2'>
            <header className='text-lg text-textcolor font-medium'>{title}</header>
            <p className='text-md'>{description}</p>
        </div>
        <div className='text-textcolor'>
            {tags.map((tag) => `#${tag} `)}
        </div>
    </Link>
  )
}

export default Post;