import React from 'react';
import { Helmet } from 'react-helmet';

const Schedule = () => {
  return (
    <div className="bg-gray-100 py-8">
      <Helmet>
        
        <meta name="description" content="Check out the opening hours of our steakhouse. We are open Monday to Saturday for lunch and dinner, and closed on Sundays. Come visit the best steakhouse in Harare!" />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-6 text-center">Our Opening Hours</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-center">Monday to Friday</h2>
              <ul className="list-disc pl-4">
                <li><b>Lunch:</b> 12:00 PM - 3:00 PM</li>
                <li><b>Dinner:</b> 6:00 PM - 10:00 PM</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-center">Saturday</h2>
              <ul className="list-disc pl-4">
                <li><b>Dinner:</b> 6:00 PM - 11:00 PM</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-center">Sunday</h2>
              <p className="text-center"><b>CLOSED</b></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
