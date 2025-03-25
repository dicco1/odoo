import React, { useState } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi"; 

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Ismingizni kiriting!";
    if (!formData.email.includes("@")) newErrors.email = "To‘g‘ri email kiriting!";
    if (!formData.message.trim()) newErrors.message = "Xabar yozing!";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSuccess("Xabaringiz yuborildi! Tez orada siz bilan bog‘lanamiz.");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSuccess(""), 5000);
    }
  };

  return (
    <div className="container mx-auto px-6 py-10 mt-16">
      <h2 className="text-4xl font-bold text-center text-blue-600" data-aos="fade-up">
        Biz Bilan Bog‘laning
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
 
        <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-right">
          <h3 className="text-2xl font-semibold mb-4">Bizga Xabar Yuboring</h3>
          {success && <p className="text-green-500">{success}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold">Ism</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full px-4 py-2 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-lg`}
                placeholder="Ismingizni kiriting"
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-4 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg`}
                placeholder="Emailingizni kiriting"
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Xabar</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`w-full px-4 py-2 border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } rounded-lg`}
                placeholder="Xabaringizni yozing..."
                rows="4"
              ></textarea>
              {errors.message && <p className="text-red-500">{errors.message}</p>}
            </div>

            <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
              Xabar Yuborish
            </button>
          </form>
        </div>

      
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg" data-aos="fade-left">
          <h3 className="text-2xl font-semibold mb-4">Bizning Ma'lumotlar</h3>

          <div className="flex items-center space-x-3 text-gray-600">
            <FiMapPin className="text-blue-600 text-2xl" />
            <p><strong>Manzil:</strong> Qashqadaryo, Kitob , Paxtakor ko'chasi</p>
          </div>

          <div className="flex items-center space-x-3 text-gray-600 mt-3">
            <FiPhone className="text-green-600 text-2xl" />
            <p><strong>Telefon:</strong> +998 88 080 50 82</p>
          </div>

          <div className="flex items-center space-x-3 text-gray-600 mt-3">
            <FiMail className="text-red-600 text-2xl" />
            <p><strong>Email:</strong> diyorbekpardayev2184@gmail.com</p>
          </div>

       
          <div className="mt-4">
            <iframe
              className="w-full h-48 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.494796024839!2d69.2797379!3d41.3123369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef46a3f3ff3e7%3A0x48c22b64e6e9c1db!2sAmir%20Temur%20Square%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1649932656651!5m2!1sen!2s"
              
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
