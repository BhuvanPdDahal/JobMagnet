import { Link } from 'react-router-dom';
import moment from 'moment';

import UserImg from '../../images/user.png';
import { FreelancerProp } from '../../interfaces/auth';

const Freelancer = ({ _id, name, createdAt, skills }: FreelancerProp) => {
    return (
        <Link to={`/profile/${_id}`} className='border-b block border-solid border-grey px-3 py-6 hover:border-x hover:px-[11px]'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <img className='h-8 w-8 rounded-full object-cover' src={UserImg} alt="" />
                    <div className='font-medium text-textcolor'>{name}</div>
                </div>
                <div className='text-grey'>Joined {moment(createdAt).fromNow()}</div>
            </div>
            <div className='flex justify-between items-center'>
                <div className='text-textcolor'>{skills.map((skill: string) => `#${skill} `)}</div>
                <div><i className="fa-solid fa-shield text-primary"></i></div>
            </div>
        </Link>
    )
}

export default Freelancer;