import LoaderImg from '../../images/loader.gif';

const Loader = () => {
    return (
        <div className='flex justify-center mt-150px'>
            <img src={LoaderImg} alt="Loading..." />
        </div>
    )
}

export default Loader;