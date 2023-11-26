import { Link } from 'react-router-dom';
import moment from 'moment';

import { PostProp } from '../../interfaces/post';
import UserImg from '../../images/user.png';

const Post = ({ _id, title, description, tags, creator, views, createdAt, createdByCurrentUser }: PostProp) => {
    return (
        <Link to={`/jobs/${_id}`} className='border-b block border-solid border-grey px-3 py-4 hover:border-x hover:px-[11px]'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <img className='h-8 w-8 rounded-full object-cover' src={UserImg} alt="" />
                    <div className='font-medium text-textcolor'>{createdByCurrentUser ? 'You' : creator?.name}</div>
                </div>
                <div className="text-grey text-sm">{moment(createdAt).format('lll')}</div>
            </div>
            <div className='my-2'>
                <header className='text-md text-textcolor font-medium'>{title}</header>
                <p className='text-sm line-clamp-2'>{description}</p>
            </div>
            <div className='flex justify-between items-center'>
                <div className='text-textcolor text-sm'>
                    {tags?.map((tag) => `#${tag} `)}
                </div>
                <div className='flex items-center gap-2'>
                    <i className="fa-solid fa-eye text-lg text-grey"></i>
                    <p className='text-textcolor text-sm'>{views?.length ? views.length !== 1 ? `${views.length} views` : '1 view' : 'No views'}</p>
                </div>
            </div>
        </Link>
    )
}

export default Post;