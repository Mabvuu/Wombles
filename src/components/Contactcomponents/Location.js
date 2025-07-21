import React from 'react';
import './contact.css';

const Location = () => {
  return (
    <section className="location">
      <div className="container flex flex-col md:flex-row">
        <div className="textloc w-full md:w-1/2 md:pr-4">
          <h3>our location</h3>
          <h2>Where to find us</h2>
          <p>If you&apos;re trying to reach Khaya Nyama, we are always here to assist you with any questions

            or concerns you may have. Whether you are looking to make a reservation, plan an event, or simply want to share
            your thoughts on your recent dining experience, we are here to help.</p>
          <br />
          <p>
            To get in touch with us, you can contact us using the following methods:
          </p>
          <ul className="ml-6 md:ml-9 mb-7 mt-4">
            <li className="mb-7">
            <a href="mailto:bookings@khayanyama.com" className="text-black-500 text-3xl hover:underline">
  <i className="fas fa-envelope"></i> bookings@khayanyama.com
</a>

            </li>
            <li className="mb-7">
            <a href="https://www.facebook.com/wombleszimbabwe/" className="text-black-500 mb-7 text-3xl hover:underline">
  <i className="fab fa-facebook "></i> Khaya Nyama Wombles
</a>

            </li>
            <li className="mb-7">
              <a href="https://www.instagram.com/wombles_zimbabwe/" className="text-black-500 text-3xl mb-7 hover:underline"><i className="fab fa-instagram"></i> wombles_zimbabwe</a>
            </li>
            <li className="text-3xl mb-7">
  <a href="tel:024 2497768"><i className="fas fa-phone"></i> (024) 2497768</a>
</li>

            <li className="text-3xl mb-7">
            <a href="tel:+263 772 336 224"><i className="fas fa-phone"></i> +263 772 336 224</a></li>
          </ul>
          <p>
            Alternatively, you can visit us at:
            <br />
            158 Enterprise road, Highlands, Harare, Zimbabwe
          </p>
        </div>
        <div className="imageloc w-full md:w-1/2 mt-4 md:mt-0">
        <img
            src={process.env.PUBLIC_URL + "/images/17.JPG"}
            alt="Wombles Khaya Nyama"
            className="rounded-lg shadow-lg max-w-full md:max-w-sm mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Location;
