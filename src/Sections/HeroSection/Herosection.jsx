import React from 'react'

function Herosection() {
    return (

            <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white flex items-center justify-center p-4">
      <div className="max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src="../../../public/FounderOfPdp-Img.693bb10fd8b0dda2661c.jpg"
              alt="Professional in business attire"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 p-8 flex flex-col justify-between">
            <div>
              {/* Logo and Brand */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">U</span>
                </div>
                <span className="text-xl font-semibold text-teal-500">University</span>
              </div>

              {/* Testimonial Text */}
              <div className="relative">
                
                <p className="text-gray-600 relative z-10 leading-relaxed mb-6">
                  In today's world, it's not just about hard work - it's about smart work. 
                  When we combine higher intellectual potential with dedication, and when 
                  young people are motivated by their goals, they can achieve remarkable 
                  success. We're committed to preparing specialists who can take leadership 
                  positions in major companies and reach their ambitious goals.
                </p>
              </div>
            </div>

            {/* Author Info */}
            <div>
              <h3 className="text-teal-500 font-semibold text-lg">University Director</h3>
              <p className="text-gray-500">John Smith</p>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
}

export default Herosection
