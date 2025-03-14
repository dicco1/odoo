import React from 'react'
import { Link, useParams} from "react-router-dom";
import subjects from "../../../Data/subject.json";

function SubjectDetail() {
    const { id } = useParams();
  const subject = subjects.find((s) => s.id === parseInt(id));

  if (!subject) {
    return <div className="text-center text-red-500 text-3xl mt-10">Fan topilmadi!</div>;
  }

  return (
    <div className="container mx-auto mt-20 p-6">
    
      <div className="grid md:grid-cols-2 gap-10">
        <div data-aos="fade-right">
          <img src={subject.img} alt={subject.name} className="w-full rounded-lg shadow-lg" />
        </div>
        <div data-aos="fade-left">
          <h1 className="text-4xl font-bold text-blue-600">{subject.name}</h1>
          <p className="mt-4 font-medium text-2xl text-gray-700">{subject.fullDesc}</p>
        </div>
      </div>

      <div className="mt-16 bg-blue-100 p-8 rounded-lg text-center" data-aos="zoom-in">
        <h2 className="text-3xl font-bold text-blue-600">Bu kurs siz uchun mavjud!</h2>
        <p className="mt-4 text-gray-600">O‘z bilimlaringizni oshirishni istasangiz, bizga qo‘shiling!</p>
        <Link
          to="/register"
          className="mt-6 inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Kursga yozilish
        </Link>
      </div>
    </div>
  );
}

export default SubjectDetail
