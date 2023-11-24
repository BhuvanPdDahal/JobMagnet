import NotFoundImg from '../../images/not-found.png';

const NotFound = () => {
    return (
        <div className='flex justify-center'>
            <img className='h-350px' src={NotFoundImg} alt="Not Found" />
        </div>
    )
}

export default NotFound;