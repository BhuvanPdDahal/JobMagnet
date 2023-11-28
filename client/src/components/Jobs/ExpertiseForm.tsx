import { useNavigate, useParams } from "react-router-dom";

const ExpertiseForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleBackClick = () => {
        console.log('go back clicked');
        navigate(`/jobs/${id}`);
    };

    const handleSendClick = () => {
        console.log('send post clicked');
        
    };

    return (
        <div className='max-w-3xl mx-auto mt-10 mb-5 px-3'>
            <div className='shadow-normal rounded-sm'>
                <div className='pl-10 border-b border-solid border-primary'>
                    <input type="text" className='w-full outline-none text-md px-5 py-4 border-l border-solid border-secondary' placeholder='Write a heading' autoFocus />
                </div>
                <div className='pl-10'>
                    <textarea className='w-full outline-none text-md px-5 py-4 border-l border-solid border-secondary resize-none' rows={13} placeholder='Write your expertise'></textarea>
                </div>
            </div>
            <div className='flex justify-between mt-5'>
                <button onClick={handleBackClick} className='w-150px py-2 rounded bg-secondary text-white shadow-normal transition-bg duration-300 hover:bg-red-700'><i className="fa-solid fa-backward"></i> Go back</button>
                <button onClick={handleSendClick} className='w-150px py-2 rounded bg-primary text-white shadow-normal transition-bg duration-300 hover:bg-blue-900'><i className="fa-solid fa-paper-plane"></i> Send post</button>
            </div>
        </div>
    )
}

export default ExpertiseForm;