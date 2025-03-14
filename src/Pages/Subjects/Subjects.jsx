import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from "react";

import "aos/dist/aos.css";


const subjects = [
    { id: 1, name: "Matematika", desc: "Hisoblash va mantiq asoslari.", img: "/math.jpg" },
    { id: 2, name: "Fizika", desc: "Tabiat qonuniyatlarini o‘rganing.", img: "/physics.jpg" },
    { id: 3, name: "Dasturlash", desc: "Python, JavaScript va boshqa texnologiyalar.", img: "/programming.jpg" },
    { id: 4, name: "Adabiyot", desc: "She’riyat va nasr olami.", img: "/literature.jpg" },
    { id: 5, name: "Ingliz tili", desc: "Grammatika va so‘z boyligini oshirish.", img: "/english.jpg" },
    { id: 6, name: "Rus tili", desc: "Rus tilida erkin muloqot qilish.", img: "/russian.jpg" },
  ];
function Subjects() {
    
    return (
        <div className="container mx-auto mt-20">
          <h2 className="text-4xl font-bold text-center text-blue-600" data-aos="fade-up">Kurslar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 px-4">
            {subjects.map((subject) => (
              <Link to={`/fanlar/${subject.id}`} key={subject.id} data-aos="zoom-in">
                <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
                  <img src={subject.img} alt={subject.name} className="w-full h-40 object-cover rounded-lg" />
                  <h3 className="mt-4 text-2xl font-semibold text-gray-800">{subject.name}</h3>
                  <p className="mt-2 text-gray-600">{subject.desc}</p>
                  
                </div>
              </Link>
            ))}
          </div>
        </div>
      );    
    
}

export default Subjects
