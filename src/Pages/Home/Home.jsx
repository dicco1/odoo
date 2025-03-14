import { Link } from "react-router-dom";

import "./../../App.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, FreeMode, Grid } from "swiper/modules";

import Dars from "/darslar.jpg";
import Tex from "/texnalog.jpg";
import Komanda from "/komanda.jpg";
import Bgg from "/back.jpg"
import Chat from "/Chat button.avif"





const Home = () => {
  return (
    <div className="text-center container mx-auto">
      {/* Bosh qism (Hero Section) */}
      <section className="px-44 py-20 m-0 text-blue-900 h-[100vh] bg-cover bg-center bg-[url('/back.jpg')]">
        <div  className="relative  border-2 border-transparent mt-16 p-6 bg-white/30 rounded-lg h-[400px] shadow-lg backdrop-blur-md flex flex-col items-center py-32">
          <h2 className="text-5xl font-bold">
            Protech – Kelajak ilmini o‘rganing!
          </h2>
          <p className="mt-4 text-lg">
            Bu yerda siz IT' sohasini mukammal o'rganishingiz mumkun!
          </p>
          <div className="mt-6">
            <Link
              to="/fanlar"
              className="hover:bg-transparent border kalon transition-all duration-300 px-6 py-3 text-lg font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-200"
            >
              Fanlarni Ko‘rish
            </Link>
          </div>
        </div>
      </section>

      {/* Fanlar bo‘limi */}
      <section className="mt-16">
        <h3 className="text-3xl font-semibold text-blue-700 mb-10">
          Asosiy Fanlar
        </h3>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: true,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Autoplay, Grid]}
          grid={{
            rows: 1,
          }}
          className="mySwiper"
        >
          <SwiperSlide  data-aos="fade-up" className="h-[150px] rounded-lg cursor-pointer border hover:bg-transparent transition-all duration-300">
            <div  className="px-6 py-8 h-full w-full bg-gray-100 rounded-lg shadow border hover:bg-transparent transition-all duration-300">
              <h4 className="text-xl font-bold">Matematika</h4>
              <p>Hisoblash va mantiq asoslari.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide data-aos="fade-up" className=" cursor-pointer h-[150px] border rounded-lg hover:bg-transparent transition-all duration-300">
            <div className="px-6 py-8 h-full w-full bg-gray-100 rounded-lg shadow hover:bg-transparent transition-all duration-300">
              <h4 className="text-xl font-bold">Fizika</h4>
              <p>Tabiat qonuniyatlarini o‘rganing.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide data-aos="fade-up" className=" cursor-pointer h-[150px] border rounded-lg hover:bg-transparent transition-all duration-300">
            <div className="px-6 py-8 h-full w-full bg-gray-100 rounded-lg shadow hover:bg-transparent transition-all duration-300">
              <h4 className="text-xl font-bold">Dasturlash</h4>
              <p>Python, JavaScript va boshqalar</p>
            </div>
          </SwiperSlide>
          <SwiperSlide data-aos="fade-up"
            className="cursor-pointer  
           h-[150px] rounded-lg"
          >
            <div className="px-6 py-8 h-full w-full border bg-gray-100 rounded-lg shadow hover:bg-transparent transition-all duration-300">
              <h4 className="text-xl font-bold">Falsafa</h4>
              <p>Ong, Tafakkur va manipulyatsya</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Afzalliklar bo‘limi */}
      <section className="py-12 mt-16 bg-gray-200 rounded-md h-[500px]">
        <h3 className="text-3xl font-semibold text-blue-700">
          Nega bizni tanlash kerak?
        </h3>
        <div className="grid grid-cols-3 gap-6 mt-6">
          <div data-aos="fade-up" className="p-6">
            <h4 className="text-xl font-bold">Eng yaxshi darslar</h4>
            <p>Sifatli va tushunarli ma’lumotlar.</p>
            <img className=" mt-12 rounded-lg" src={Dars} alt="dars" />
          </div>
          <div  data-aos="fade-up" className="p-6">
            <h4 className="text-xl font-bold">Yangi texnologiyalar</h4>
            <p>Ilmiy va zamonaviy fanlar.</p>
            <img className=" mt-12 rounded-lg" src={Tex} alt="Tex" />
          </div>
          <div  data-aos="fade-up" className="p-6">
            <h4 className="text-xl font-bold">Kuchli jamoa</h4>
            <p>O‘z sohasida tajribali mutaxassislar.</p>
            <img
              className=" mt-12 rounded-lg w-[350px]"
              src={Komanda}
              alt="jamoa"
            />
          </div>
        </div>
      </section>

      {/* Ro‘yxatdan o‘tish bo‘limi */}
      <section className="mt-16">
        <h3 className="text-3xl font-semibold text-blue-700">
          Biz bilan o‘qing!
        </h3>
        <p className="mt-4 text-lg">
          O‘z bilimlaringizni oshirish uchun hoziroq ro‘yxatdan o‘ting.
        </p>
        <div className="mt-6">
          <Link
            to="/register"
            className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Ro‘yxatdan o‘tish
          </Link>
        </div>
      </section>

      <section className="mt-16 ">
        <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white flex items-center justify-center p-4 ">
          <div className="max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="md:w-2/5 h-[489px] relative">
                <img
                  src="/FounderOfPdp-Img.693bb10fd8b0dda2661c.jpg"
                  alt="Professional in business attire"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  {/* Logo and Brand */}
                  <div  data-aos="fade-left" className="flex items-center gap-2 mb-6">
                    <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">ProTech</span>
                    </div>
                    <span className="text-xl font-semibold text-teal-500">
                      School
                    </span>
                  </div>

                  {/* Testimonial Text */}
                  <div  data-aos="fade-left" className="relative">
                    <h1 className="text-teal-100 w-12 h-12 absolute -top-4 -left-2" />
                    <p className="text-gray-600 relative z-10 leading-relaxed text-left mb-6">
                    Dunyoda minglab o’zbek yoshlariga qo’l
mehnati emas, yuqori intellekti uchun haq
to'lansa, millionlab yoshlar o'z oilalaridagi
moliyaviy ahvolni o'nglab, chet elda qiynalib
ishlayotgan yaqinlarini vatanga qaytishiga
sababchi bo'lsa va dunyoni yaxshi tarafga
o'zgartiruvchi qarorlar qabul qiladigan,
gigant kompaniyalarning boshqaruv
pozitsiyasini egallaydigan mutaxassislarni
yetishtira olsak, o'z oldimizga qo'ygan
maqsadlarimizga erishgan bo'lamiz.
                    </p>
                  </div>
                </div>

                {/* Author Info */}
                <div  data-aos="fade-left">
                  <h3 className="text-teal-500 font-semibold text-lg">
                    School Director
                  </h3>
                  <p className="text-gray-500">Diyor Pardayev</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ----------------------- */}
      <div className="min-h-screen rounded-xl bg-blue-800 text-white mt-20">
      <section className="container mx-auto px-4 py-16 relative">
        {/* Background Text */}
        <div data-aos="fade-up" className="absolute right-0  mt-0 top-0 text-[200px] border-t-black  font-bold text-black  opacity-[0.2]   select-none">
          Rektor
        </div>
        
        {/* Main Content */}
        <div className="flex flex-col mt-[80px] lg:flex-row items-center gap-12">
          {/* Image Container */}
          <div data-aos="fade-up" className="relative">
            <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-8 border-teal-400">
              <img 
                src="/rektor.0df6bf96ed6aa0ab7c1c.jpg" 
                alt="Jemurat Mambetkarimov"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 max-w-2xl">
            {/* Logo */}
            <div data-aos="fade-up" className="flex items-center gap-3 mb-8">
              <div className="w-16 h-16 rounded-full bg-teal-400 flex items-center justify-center">
                <span className="text-black font-bold">ProTech</span>
              </div>
              <div>
                <span className="text-white font-bold">School</span>
              </div>
            </div>

            {/* Text Content */}
            <p data-aos="fade-up" className="text-lg mb-8 leading-relaxed z-50 relative">
              Bizning maqsadimiz - kuchli akademik salohiyatimizdan to'g'ri foydalangan holda, davlatimiz taraqqiyotida ahamiyatli bo'lgan ilmiy-texnologik yechimlarni yaratadigan va dunyo miqyosida nufuzli IT kompaniyalarda ishlab keta oladigan, malakali IT mutaxassislarni tayyorlash va yorqin shaxslarni shakllantirish.
            </p>

            {/* Signature */}
            <div data-aos="fade-up">
              <h3 className="text-teal-400 text-2xl font-bold mb-2">
                ProTech School rektori
              </h3>
              <p className="text-xl">Jemurat Mambetkarimov</p>
            </div>
              <div data-aos="fade-up" className="flex items-center  justify-center gap-24 mt-24">
                <button className="hover:bg-transparent border transition-all duration-300 px-6 py-3 text-lg font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-200"><Link to={"/rector"}>Ko'proq Bilish</Link></button>
                <button className="hover:bg-transparent border transition-all duration-300 px-6 py-3 text-lg font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-200"><Link to={"/register"}>Kursga Yozilish</Link></button>
              </div>
          </div>
        </div>
      </section>
      {/* ----------------------- */}
      <section className="">
      
    <div  className=" mt-16 flex justify-center items-center min-h-screen bg-black">
      <div  className="second ">

      </div>
      <div data-aos="fade-up" className=" katta relative bg-gradient-to-r h-[380px] from-green-600 to-black p-6 rounded-2xl shadow-xl w-80 text-center border border-gray-700">
        {/* Title */}
        <h2 className="text-white text-2xl font-bold mb-2 tracking-widest">24/7 ONLINE</h2>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-6">
          O'qish davomida qiynalmashingiz uchun biz sizga 24/7 online ko'mak beramiz.
        </p>

        {/* 3D Style Image */}
        <div className="flex justify-center mb-6">
          <div className=" w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-700 rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition">
            <img
              src={Chat}
              alt="Online Support"
              className="w-20 h-20 object-cover opacity-80"
            />
          </div>
        </div>

        {/* Glassmorphism Button */}
        <button className="bg-black text-white py-2 px-6 mt-9 rounded-lg border border-gray-500 hover:bg-gray-900 transition duration-300 shadow-md hover:shadow-xl">
          <Link to={"/contact"}>
          Aloqa
          </Link>
        </button>
      </div>
    </div>
      </section>
    
    </div>
    </div>
    // -----------------------

  );



  // -----------------------
  
};

export default Home;
