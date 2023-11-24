import LoginToAccessImg from '../../images/login-to-access.avif';

const Unaccessable = () => {
    return (
        <div className='flex flex-col items-center text-xl text-textcolor'>
            <img className='h-450px' src={LoginToAccessImg} alt='Cannot access' />
            <p>Please login or signup to access!</p>
        </div>
    )
}

export default Unaccessable;