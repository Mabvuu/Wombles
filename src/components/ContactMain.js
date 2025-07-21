import React from 'react';

const Location = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-start gap-8">
        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <h3 className="text-xl font-semibold text-gray-700 uppercase">Our Location</h3>
          <h2 className="text-3xl font-bold text-gray-900">Where to Find Us</h2>
          <p className="text-gray-600 leading-relaxed">
            If you&apos;re trying to reach Khaya Nyama, we are always here to assist you with any questions or concerns
            you may have. Whether you are looking to make a reservation, plan an event, or simply want to share your thoughts on
            your recent dining experience, we are here to help.
          </p>
          <p className="text-gray-600 leading-relaxed">
            To get in touch with us, you can contact us using the following methods:
          </p>
          <ul className="list-none space-y-4">
            <li>
              <a href="mailto:bookings@khayanyama.com" className="text-2xl text-black hover:text-[#526534] flex items-center gap-2">
                <i className="fas fa-envelope"></i> bookings@khayanyama.com
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/wombleszimbabwe/"
                className="text-2xl text-[#000]  hover:text-[#526534] flex items-center gap-2"
              >
                <i className="fab fa-facebook"></i> Khaya Nyama Wombles
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/wombles_zimbabwe/"
                className="text-2xl text-black hover:text-[#526534]  flex items-center gap-2"
              >
                <i className="fab fa-instagram"></i> wombles_zimbabwe
              </a>
            </li>
            <li>
              <a href="tel:024 2497768" className="text-2xl text-black hover:text-[#526534]  flex items-center gap-2">
                <i className="fas fa-phone"></i> (024) 2497768
              </a>
            </li>
            <li>
              <a href="tel:+263772336224" className=" text-black hover:text-[#526534] text-3xl flex items-center gap-2">
                <i className="fas fa-phone"></i> +263 772 336 224
              </a>
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Alternatively, you can visit us at:
            <br />
            <strong>158 Enterprise Road, Highlands, Harare, Zimbabwe</strong>
          </p>

          <div className="w-full">
            <iframe
              width="100%"
              height="400"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=400&amp;height=400&amp;hl=en&amp;q=158%20Enterprise%20Road,%20Highlands,%20Harare,%20+(Khaya%20Nyama%20Wombles)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              title="Khaya Nyama Location"
            ></iframe>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
             src={process.env.PUBLIC_URL + "/images/17.JPG"}
            alt="Khaya Nyama Location"
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Location;
