import WorkFromHomeImg from '../../images/work-from-home.avif';
import Footer from '../Utils/Footer';

const Home = () => {
    document.title = "Home - JobMagnet";

    return (
        <>
            <div className='relative'>
                <img className='h-350px w-full object-cover' src={WorkFromHomeImg} alt="home" />
                <div className='absolute top-0 left-0 h-full w-full bg-dimblack'></div>
                <div className='absolute top-50p translate-x-n50p translate-y-n50p left-50p text-5xl text-white font-light'>
                    <h1 className='my-4 text-center'>Unleashing Careers,</h1>
                    <h1 className='my-4 text-center'>Connecting Skills, and</h1>
                    <h1 className='my-4 text-center'>Powering Success</h1>
                </div>
            </div>
            <div className='text-center my-10 max-w-3xl px-2 mx-auto'>
                <header className='text-2xl font-medium mb-4 text-primary'>Welcome to JobMagnet - Where Skills Meet Opportunities!</header>
                <p className='text-lg'>Are you ready to supercharge your career or find the perfect candidate to elevate your team? Look no further! JobMagnet is your ultimate destination for connecting skilled professionals with top-notch opportunities.</p>
            </div>
            <div className='text-center my-10 px-2 border-t border-solid border-grey max-w-3xl mx-auto'>
                <header className='text-2xl font-medium my-4 text-primary'>For Job Seekers:</header>
                <p className='text-lg my-3'>Unleash the Power of Your Skills</p>
                <p className='text-lg'>Discover tailored job listings that match your unique skill set. Our advanced algorithms ensure you find opportunities that align with your expertise, making job hunting a breeze. Take the next step in your career journey with JobMagnet.</p>
            </div>
            <div className='my-10 px-2 border-t border-solid border-grey max-w-3xl mx-auto'>
                <header className='text-center text-2xl font-medium my-4 text-primary'>Why JobMagnet?</header>
                <ul>
                    <li className='text-lg my-3'><strong className='text-textcolor font-medium'>Precision Matching:</strong> Say goodbye to generic job searches. JobMagnet's intelligent matching system connects you with opportunities that truly fit your skills and aspirations.</li>
                    <li className='text-lg my-3'><strong className='text-textcolor font-medium'>Career Insights:</strong> Gain valuable insights into industry trends, salary expectations, and career growth paths to make informed decisions about your future.</li>
                    <li className='text-lg my-3'><strong className='text-textcolor font-medium'>Seamless Application:</strong> Apply to jobs with just a few clicks. JobMagnet streamlines the application process, saving you time and effort.</li>
                </ul>
            </div>
            <div className='text-center my-10 px-2 border-t border-solid border-grey max-w-3xl mx-auto'>
                <header className='text-2xl font-medium my-4 text-primary'>For Recruiters:</header>
                <p className='text-lg my-3'>Build Your Dream Team</p>
                <p className='text-lg'>Recruit top talent efficiently and effectively. JobMagnet simplifies the hiring process, connecting you with qualified professionals who are ready to make an impact.</p>
            </div>
            <div className='my-10 px-2 border-t border-solid border-grey max-w-3xl mx-auto'>
                <header className='text-center text-2xl font-medium my-4 text-primary'>Why JobMagnet?</header>
                <ul>
                    <li className='text-lg my-3'><strong className='text-textcolor font-medium'>Targeted Talent Pool:</strong> Access a curated pool of highly skilled individuals, ensuring that every candidate you discover is a potential game-changer for your team.</li>
                    <li className='text-lg my-3'><strong className='text-textcolor font-medium'>Time Efficiency:</strong> Cut down on recruitment time. JobMagnet's smart filters and algorithms present you with candidates that match your requirements, reducing the time spent on sorting through resumes.</li>
                    <li className='text-lg my-3'><strong className='text-textcolor font-medium'>Streamlined Communication:</strong> Communicate seamlessly with candidates, schedule interviews, and manage the hiring process - all in one place.</li>
                </ul>
            </div>
            <Footer />
        </>
    )
}

export default Home;