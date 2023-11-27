import React from 'react'

const ExpertiseForm = () => {
    return (
        <div className='max-w-3xl mx-auto mt-10 mb-5'>
            <div className='shadow-error rounded-sm'>
                <div className='pl-10 border-b border-solid border-primary'>
                    <input type="text" className='w-full outline-none text-md px-5 py-4 border-l border-solid border-secondary' placeholder='Write a heading' autoFocus />
                </div>
                <div className='pl-10'>
                    <textarea className='w-full outline-none text-md px-5 py-4 border-l border-solid border-secondary resize-none' rows={13} placeholder='Write your expertise'></textarea>
                </div>
            </div>
            <div className='flex justify-between mt-5'>
                <button className='w-150px py-2 rounded bg-secondary text-white shadow-error transition-bg duration-300 hover:bg-red-700'><i className="fa-solid fa-backward"></i> Go back</button>
                <button className='w-150px py-2 rounded bg-primary text-white shadow-error transition-bg duration-300 hover:bg-blue-900'><i className="fa-solid fa-paper-plane"></i> Send post</button>
            </div>
        </div>
    )
}

export default ExpertiseForm;