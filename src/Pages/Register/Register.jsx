import React, { useState } from "react";

function Register()  {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Ismni kiriting!";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Familiyangizni kiriting!";
    }

    if (!formData.middleName.trim()) {
      newErrors.middleName = "Otasining ismini kiriting!";
    }

    if (!/^\+998\d{9}$/.test(formData.phone)) {
      newErrors.phone = "To‘g‘ri telefon raqam kiriting! (+998...)";
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = "To‘g‘ri email kiriting!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Kursga muvaffaqiyatli yozildingiz!");
      setFormData({ firstName: "", lastName: "", middleName: "", phone: "", email: "" });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50 mt-16 container mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Kursga Yozilish
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/** Ism */}
          <div>
            <label className="block text-gray-700 font-semibold">Ism</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full outline-none px-4 py-2 border ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-blue-500`}
              placeholder="Ismingizni kiriting"
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
          </div>

          {/** Familiya */}
          <div>
            <label className="block text-gray-700 font-semibold">Familiya</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full outline-none px-4 py-2 border ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-blue-500`}
              placeholder="Familiyangizni kiriting"
            />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
          </div>

          {/** Otasining ismi */}
          <div>
            <label className="block text-gray-700 font-semibold">Otasining ismi</label>
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              className={`w-full outline-none px-4 py-2 border ${
                errors.middleName ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-blue-500`}
              placeholder="Otasining ismini kiriting"
            />
            {errors.middleName && <p className="text-red-500 text-sm">{errors.middleName}</p>}
          </div>

          {/** Telefon */}
          <div>
            <label className="block text-gray-700 font-semibold">Telefon raqam</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full outline-none px-4 py-2 border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-blue-500`}
              placeholder="+998 XX XXX XX XX"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          {/** Email */}
          <div>
            <label className="block text-gray-700 font-semibold">Email</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full outline-none px-4 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-blue-500`}
              placeholder="Emailingizni kiriting"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>


          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="text-gray-700">Men shartlarga roziman</span>
            </label>
            {errors.termsAccepted && <p className="text-red-500 text-sm">{errors.termsAccepted}</p>}
          </div>


          {/** Submit tugma */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Kursga Yozilish
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
