import React from 'react'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';
import {Link} from "react-scroll";

const About = () => {
  return (
    <div name="about" id="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">

        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                  About
                </p>
            </div>
            
            <p classname="text-xxl mt-20">
            Full Stack Web Developer with a background in Management. 
            Earned my certificate in web development from the University of Kansas, learning the principles of HTML, CSS, JavaScript, React, MySQL, and multiple other technologies. 
            I've acquired a great sense of teamwork and accountability from my management experience. 
            I've worked on multiple projects in a team setting, applying both, front, and backend technologies. 
            </p>

            <br />

            <p className="text-xl">
                See my projects below..
            </p>

            <div>
            <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                    Portfolio
                    <span className="group-hover:rotate-90 duration-300">
                    <HiOutlineArrowNarrowRight size={25} className="ml-1" />
                    </span>
                </Link>
            </div>
            

        </div>
    </div>
  )
}

export default About