import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
    if (currentStage === 1)
        return (
            <h1 className='sm:text-x1 sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
                Hi, I'm
                <span className='font-semibold mx-2 text-white'>Shahzeb</span>
                👋
                <br />
                A Software Engineering Student at the University of Calgary
            </h1>
        );

    if (currentStage === 2) {
        return (
            <div className='info-box'>
                <p className='font-medium sm:text-x1 text-center'>
                    I'm currently in my third year as a Software Engineering student, passionate about problem-solving through code and always excited to explore the latest advancements in technology.
                </p>

                <Link to='/about' className='neo-brutalism-white neo-btn'>
                    Learn more
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        );
    }

    if (currentStage === 3) {
        return (
            <div className='info-box'>
                <p className='font-medium text-center sm:text-x1'>
                    Constantly learning and experimenting with new ideas. <br /> Take a look at what I've been working on.
                </p>

                <Link to='/projects' className='neo-brutalism-white neo-btn'>
                    Visit my portfolio
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        );
    }

    if (currentStage === 4) {
        return (
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center'>
                    Need a project done or looking for a dev? <br/> I'm just a few keystrokes away
                </p>

                <Link to='/contact' className='neo-brutalism-white neo-btn'>
                    Let's talk
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        );
    }

    return null;
};

export default HomeInfo;