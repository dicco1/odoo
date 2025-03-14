import React from 'react';
import { Link } from 'react-router-dom';


function PricingPage() {
  const pricingPlans = [
    {
      title: 'ProStandart',
      price: '$19',
      features: [
        'Adabiyot kursi',
        'Matematika kursi',
        'Boshlang\'ich dasturlash kursi',
        'Rus tili (boshlang\'ich)',
        'Ingliz tili (boshlang\'ich)',
      ],
    },
    {
      title: 'Pro',
      price: '$49',
      features: [
        'Adabiyot kursi (chuqurlashtirilgan)',
        'Matematika kursi (chuqurlashtirilgan)',
        'Dasturlash kursi (o\'rta)',
        'Rus tili (o\'rta)',
        'Ingliz tili (o\'rta)',
        'Fizika kursi',
        'Qo\'shimcha: Web dizayn kursi',
      ],
    },
    {
      title: 'ProPlus',
      price: '$99',
      features: [
        'Adabiyot kursi (professional)',
        'Matematika kursi (olimpiada darajasi)',
        'Dasturlash kursi (professional)',
        'Rus tili (professional)',
        'Ingliz tili (professional)',
        'Fizika kursi (chuqurlashtirilgan)',
        'Qo\'shimcha: Sun\'iy intellekt kursi',
        'Qo\'shimcha: Mobil ilovalar yaratish kursi',
      ],
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">Narxlar</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">{plan.title}</h2>
              <p className="text-4xl font-bold text-blue-900 mb-4">{plan.price}/oy</p>
              <ul className="list-disc list-inside mb-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-700">
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                <Link to={"/register"} > Kursga Yozilish </Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;