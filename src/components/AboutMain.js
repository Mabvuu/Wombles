import React from 'react';

const About = () => {
  const images = [
    { src: process.env.PUBLIC_URL + "/images/10.JPG", alt: "1" },
    { src: process.env.PUBLIC_URL + "/images/28.JPG", alt: "2" },
    { src: process.env.PUBLIC_URL + "/images/27.JPG", alt: "I 3" },
    { src: process.env.PUBLIC_URL + "/images/8.JPG", alt: "I 3" },
  ];

  return (
    <div className="container mx-auto p-6 space-y-10">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-10">The Secret to Our Success</h1>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={process.env.PUBLIC_URL + "/images/9.JPG"}
            alt="Wombles Khaya Nyama Tiffany and Yvette"
            className="rounded-lg shadow-lg max-w-full md:max-w-sm mx-auto"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">The Beginning</h2>
          <p className="text-gray-600 text-justify leading-relaxed">
            The predecessor of the current venue was created in 1984, when husband-and-wife team Duncan and Yvette Barker
            started off in what is now Sam Levy&apos;s Village, moving in 1988 to the Ballantyne Park Shopping Centre.
            In the 2000s, they decided to move to Australia and 2 years later returned to Africa. They settled in Gauteng and opened
            a restaurant also formerly known as Wombles.
          </p>
          <p className="text-gray-600 text-justify leading-relaxed">
            The couple decided to come back home in 2020 and met up with Andrew Mama, owner of a successful upmarket
            restaurant called Amanzi. The Barkers, being experienced restaurateurs, took over and rebranded a new venue
            called Wombles Khaya Nyama - the latter words meaning &apos;House of Meat&apos; in Shona.
          </p>
        </div>
      </div>


      {/* Additional Content */}
      <div className="space-y-10">
        {/* Present Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">The Present</h2>
          <p className="text-gray-600 text-justify leading-relaxed">
            After opening Wombles, the youngest of their four daughters, Tiffany, has been well-trained in the trade by
            her father, Duncan. She keeps a special eye, micro-managing the kitchen activity. Duncan unfortunately passed in
            2021, leaving behind a distraught family but one that rallied and continues as a mother-and-daughter team of
            Yvette and Tiffany.
          </p>
          <p className="text-gray-600 text-justify leading-relaxed">
            Yvette is in charge of front house and is getting to know an expanding clientele, while Tiffany focuses on the
            kitchen and personally inspects everything heading out to tables. Duncan would be proud!
          </p>
        </div>

        <section className="staff-section">
      <div className="container">
        <h2>Our Khaya Nyama Family</h2>
        <img
            src={process.env.PUBLIC_URL + "/images/26.JPG"}
            alt="Wombles Khaya Nyama Tiffany and Yvette"
            className="rounded-lg shadow-lg max-w-full md:max-w-sm mx-auto"
          />
          <figcaption className="text-center mt-2 text-m text-gray-600">
          Khaya Nyama Kitchen Staff
          </figcaption>

          <p className="text-gray-600 text-lg leading-relaxed text-justify space-y-4">
  <span className="block">
    At our restaurant, we take pride in our amazing team of dedicated and hardworking employees. From the moment you walk through our doors, you&apos;ll be greeted by our friendly and attentive staff, who go above and beyond to provide exceptional service.
  </span>
  <span className="block">
    Our kitchen team consists of talented chefs and cooks who tirelessly prepare delicious meals with great attention to detail. Our waitstaff is known for their efficiency, ensuring your dining experience is smooth and enjoyable.
  </span>
  <span className="block">
    Behind the scenes, our diligent cleaning and maintenance crew work hard to maintain a clean and welcoming environment. Together, our exceptional team embodies the spirit of hard work, passion, and commitment, all with the goal of providing you with an unforgettable dining experience.
  </span>
</p>

      </div>
    </section>

        
      {/* Image Grid */}
      <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={process.env.PUBLIC_URL + image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

       
      </div>
    </div>
  );
};

export default About;
