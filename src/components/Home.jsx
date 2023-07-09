import React from 'react';
import Img from '../assets/Willie.png'
import circle from '../assets/circle.png'
import bannerImg from '../assets/banner2.png'

import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
    return (
        <div className='md:px-10 px-7 my-14 md:h-screen bg-[#1a1a29]' id='home'>
            <div>
                <div className='flex flex-col md:flex-row items-center justify-between w-full'>

                    <div className='text-white '>
                        <h6 className='text-3xl mt-4'>HELLO I AM</h6>

                        {/* <p className='md:w-96'>FRONT END WEB DEVELOPER</p> */}


                        <h1 className='my-5'>
                            <span className="  text-rose-700 font-bold text-2xl lg:text-4xl">
                                <span className="text-gray-300 mb-5  ">
                                    RANA AHMED
                                    <br />
                                </span>{" "}
                                <Typewriter
                                    words={[
                                        "FRONT END DEVELOPER",
                                        "MERN STACK DEVELOPER",
                                        "WEB DEVELOPER",
                                    ]}
                                    loop
                                    cursor
                                    cursorStyle="_"
                                    typeSpeed={70}
                                    deleteSpeed={100}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h1>



                        <div className='my-5'>

                            <button className='btn btn-outline btn-secondary py-4 px-7 rounded  ml-1  '>
                                <a href="My_First_Resume_00001.pdf" download>
                                    DOWNLOAD MY RESUME
                                </a>

                            </button>

                        </div>
                    </div>
                    {/* img */}
                    <div className='order-first md:order-last '>
                        <img className='rounded-xl' src={bannerImg} alt="" />
                    </div>
                </div>
            </div>
            <div className='h-24 bg-[#181824] w-full mx-auto absolute left-0 hidden md:block'>
            </div>
        </div>
    );
};

export default Home;