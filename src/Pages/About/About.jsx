import { FaUsers, FaGlobe, FaBook, FaBriefcase, FaCheckCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

export default function AboutUs() {
  const team = [
    { name: "Ali Valiyev", role: "CEO", img: "/elon.png" },
    { name: "Ahmad Ergashev", role: "Marketing", img: "/IMG_2356_3_1.png" },
    { name: "Bekzod Rustamov", role: "Developer", img: "/murod.jpeg" },
    { name: "Ali Valiyev", role: "CEO", img: "/elon.png" },
    { name: "Ahmad Ergashev", role: "Marketing", img: "/IMG_2356_3_1.png" },
    { name: "Bekzod Rustamov", role: "Developer", img: "/murod.jpeg" },
  ];

  const testimonials = [
    { name: "Hasan", text: "Protech menga katta yordam berdi!" },
    { name: "Gulnoza", text: "Bu yerda bilim olish ajoyib!" },
  ];

  return (
    <div className="bg-black text-gray-900">
 
      <section className="relative h-screen flex items-center justify-center text-center bg-cover bg-center bg-black bg-opacity-50" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-white">Protech – Kelajak ilmi!</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-white">Innovatsion ta’lim platformasi orqali IT olamida o'z o‘rningizni egallang.</p>
          <div className="mt-6 space-x-4">
            <Link to="/" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">Ko‘proq bilish</Link>
            <Link to="/fanlar" className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg">Kurslarga yozilish</Link>
          </div>
        </div>
      </section>

   
      <section className="py-20 text-center bg-white">
        <h2 className="text-4xl font-bold text-gray-800">Bizning Maqsadimiz</h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-700">IT sohasi va innovatsiyalar orqali yoshlarni rivojlantirishga yordam berish.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-blue-100 rounded-lg text-center hover:shadow-md transition-shadow">
            <FaBook className="text-4xl mx-auto text-blue-500" />
            <h3 className="mt-4 text-xl font-semibold text-blue-800">Keng ko‘lamli fanlar</h3>
          </div>
          <div className="p-6 bg-green-100 rounded-lg text-center hover:shadow-md transition-shadow">
            <FaUsers className="text-4xl mx-auto text-green-500" />
            <h3 className="mt-4 text-xl font-semibold text-green-800">Tajribali ustozlar</h3>
          </div>
          <div className="p-6 bg-yellow-100 rounded-lg text-center hover:shadow-md transition-shadow">
            <FaGlobe className="text-4xl mx-auto text-yellow-500" />
            <h3 className="mt-4 text-xl font-semibold text-yellow-800">Global imkoniyatlar</h3>
          </div>
          <div className="p-6 bg-red-100 rounded-lg text-center hover:shadow-md transition-shadow">
            <FaBriefcase className="text-4xl mx-auto text-red-500" />
            <h3 className="mt-4 text-xl font-semibold text-red-800">Ish bilan ta’minlash</h3>
          </div>
        </div>
      </section>


      <section className="py-20 text-center bg-gray-800">
        <h2 className="text-4xl font-bold text-white">Talabalarimiz Fikri</h2>
        <div className="mt-8 max-w-3xl mx-auto text-white">
          <Swiper  className="mySwiper">
            <SwiperSlide>
              <div className="p-6 bg-gray-700 rounded-lg">
                <p className="text-lg">"Protech menga IT sohasida katta yordam berdi. Kurslar juda foydali!"</p>
                <h4 className="mt-4 text-xl font-semibold">- Anvar, Dasturchi</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-6 bg-gray-700 rounded-lg text-white">
                <p className="text-lg">"Men bu yerda dasturlashni o‘rgandim va ishga joylashdim. Tavsiya qilaman!"</p>
                <h4 className="mt-4 text-xl font-semibold">- Madina, UX Dizayner</h4>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
  <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800">Bizning Jamoa</h2>
  <div className="container mx-auto flex justify-center">
    <div className="gap-8 mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full md:w-3/4 lg:w-1/2">
      {team.map((member, index) => (
        <div key={index} className="text-center">
          <img
            src={member.img}
            alt={member.name}
            className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mx-auto"
          />
          <h3 className="mt-2 text-lg md:text-xl font-bold text-gray-800">{member.name}</h3>
          <p className="text-sm md:text-base text-gray-600">{member.role}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Afzalliklarimiz */}
      <section className="py-16 px-4 text-center bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-800">Afzalliklarimiz</h2>
        <div className="flex justify-center gap-8 mt-8">
          <div className="flex items-center gap-4 text-gray-700"><FaCheckCircle className="text-green-500" /> Tajribali ustozlar</div>
          <div className="flex items-center gap-4 text-gray-700"><FaCheckCircle className="text-green-500" /> Ish bilan ta’minlash</div>
        </div>
      </section>

      {/* Biz bilan bog‘laning */}
      <section className="py-16 px-4 text-center bg-white">
        <h2 className="text-3xl font-bold text-gray-800">Biz bilan bog‘laning</h2>
        <form className="mt-8 max-w-md mx-auto">
          <input type="text" placeholder="Ismingiz" className="w-full p-2 mb-4 border rounded" />
          <input type="email" placeholder="Email" className="w-full p-2 mb-4 border rounded" />
          <textarea placeholder="Xabaringiz" className="w-full p-2 mb-4 border rounded"></textarea>
          <button className="bg-blue-500 text-white px-6 py-2 rounded">Yuborish</button>
        </form>
      </section>
    </div>
  );
}
