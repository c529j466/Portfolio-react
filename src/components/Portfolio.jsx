import React from 'react';
import ChiefdomHomepage from '../assets/portfolio/Chiefdom-Homepage-ScreenShot.png';
import ConcertWeather from '../assets/portfolio/concert-weather-connect.png';
import EmployeeTracker  from '../assets/portfolio/employee-tracker.png';
import Jate from '../assets/portfolio/jate.png';
import Asteroids from '../assets/portfolio/Asteroids.png';
import WeatherDashboard from '../assets/portfolio/weather-dashboard.png';

const Portfolio = () => {

    const portfolios = [
        {
            id:1,
            src: ChiefdomHomepage,
            title: "The Chiefdom",
            href: "https://safe-plains-05155.herokuapp.com/",
            href2: "https://github.com/PierTwo/The-Chiefdom-Blog",
        },
        {
            id:2,
            src: WeatherDashboard,
            title: "Weather Dashboard",
            href: "https://c529j466.github.io/API-Weather-Dashboard/",
            href2: "https://github.com/c529j466/API-Weather-Dashboard",
        },
        {
            id:3,
            src: EmployeeTracker,
            title: "Command Line Team Generator",
            href: "https://drive.google.com/file/d/1En5CrZqxXlFqp1zVB8ZU4QmrbhQcJ8jJ/view",
            href2:"https://github.com/c529j466/Team-Profile-Generator",
        },
        {
            id:4,
            src: Jate,
            title: "Text Editor",
            href: "https://warm-shore-46330.herokuapp.com/",
            href2: "https://github.com/c529j466/PWA-Text-Editor",
        },
        {
            id:5,
            src: Asteroids,
            title: "Asteroids",
            href: "https://stupendous-kataifi-3c682f.netlify.app",
            href2: "https://github.com/c529j466/Asteroids-",
        },
        {
            id:6,
            src: ConcertWeather,
            title: "Concert Weather Connection",
            href: "https://nhastings1.github.io/Concert-Weather-Connection/",
            href2: "https://github.com/nhastings1/Concert-Weather-Connection",
        },
    ]


  return (
    <div name="portfolio" id="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
        
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                  Portfolio  
                </p>
                <p className="py-6">
                    Check out my projects here
                </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {
            portfolios.map(({ id, src, title, href, href2 }) => (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                    <h2>{title}</h2>
                    <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
                    <div className="flex item-center justify-center">
                    <a href={href} target="_blank">
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                            Demo
                        </button>
                        </a> 
                        <a href={href2} target="_blank">
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                            Code
                        </button>
                        </a>
                    </div>
                </div>
                ))
            }
            </div>
        </div>
    </div>
  );
};

export default Portfolio