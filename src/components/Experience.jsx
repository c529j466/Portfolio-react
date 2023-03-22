import React from 'react';
import HTML from "../assets/html.png";
import Tailwind from "../assets/tailwind.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import Mongo from "../assets/MongoDB.png";
import MySql from "../assets/MySql.png";
import ReactImage from "../assets/react.png";
import Graphql from "../assets/graphql.png";
import Node from "../assets/node.png";
import Github from "../assets/github.png";
import Apollo from "../assets/Apollo-Server.png";
import Express from "../assets/express.png";

const experience = () => {
  
  const techs= [
    {
        id: 1,
        src: HTML,
        title: 'HTML',
        style:'shadow-orange-500'
    },
    {
        id: 2,
        src: CSS,
        title: 'CSS',
        style:'shadow-blue-500'
    },
    {
        id: 3,
        src: Javascript,
        title: 'JavaScript',
        style:'shadow-yellow-500'
    },
    {
        id: 4,
        src: ReactImage,
        title: 'React',
        style:'shadow-blue-600'
    },
    {
        id: 5,
        src: Graphql,
        title: 'GraphQl',
        style:'shadow-pink-400'
    },
    {
        id: 6,
        src: MySql,
        title: 'MySQL',
        style:'shadow-orange-400'
    },
    {
        id: 7,
        src: Mongo,
        title: 'MongoDB',
        style:'shadow-green-500'
    },
    {
        id: 8,
        src: Node,
        title: 'NodeJS',
        style:'shadow-green-500'
    },
    {
        id: 9,
        src: Express,
        title: 'ExpressJS',
        style:'shadow-yellow-500'
    },
   
  ]
    return (
    <div name='experience' className="bg-gradient-to-b from-gray-800 to-black w-ful h-screen">
        
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            
            <div>
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
                <p className="py-6">These are the technologies I've worked with:</p>
            </div>

            <div className= "w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                
             {techs.map(({id, src, title, style}) => (
                <div key={id} 
                 className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                   <img src={src} alt="html" className="w-20 mx-auto" />
                   <p className="mt-4">{title}</p>
                </div>
             ))}   

              <div>
                <p className="text-xl">
                    And More!
                </p>
                </div>  
                
            </div>
        </div>
    
    </div>
  );
};

export default experience