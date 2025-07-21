import React from 'react';
import './Mainpage.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ThirdSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures animation only triggers once
    threshold: 0.5, // Adjust as needed
  });

  return (
    <div className="menu-teaser" ref={ref}>
      <motion.div
        className="part sm:w-full md:w-1/3 xl:w-1/4"
        id="first"
        initial={{ x: -100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="underline">Refreshing healthy Options</h3>
        <h2>Salad</h2>
        <h4>BLUE CHEESE SALAD</h4>
        <p>ICEBERG LETTUCE, tomato, cucumber, and onion topped with a light blue cheese dressing and grated blue cheese.</p>
      </motion.div>
      <motion.div
        className="part sm:w-full md:w-1/3 xl:w-1/4"
        initial={{ x: -100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
        transition={{ duration: 1, delay: 0.2 }} // Adjust delay as needed
      >
        <h3 className="underline">Top Rated Dishes</h3>
        <h2>Main</h2>
        <h4>Oven Roasted Duck</h4>
        <p>Duck oven roasted with an orange or mandarin sauce or with a black cherry Madeira and red wine sauce.</p>
      </motion.div>
      <motion.div
        className="part sm:w-full md:w-1/3 xl:w-1/4"
        initial={{ x: -100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
        transition={{ duration: 1, delay: 0.4 }} // Adjust delay as needed
      >
        <h3 className="underline">Got a sweet tooth?</h3>
        <h2>Dessert</h2>
        <h4>WOMBLES STYLE CRÈME BRÛLÉE</h4>
        <p>Baked cream and eggs topped with caramelized sugar served in a glass and topped with fresh berries.</p>
      </motion.div>
      <motion.a
        href="/Mains"
        className={`menu-button font-light ${inView ? 'visible' : ''}`} // Add a class to make it visible when in view
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.6 }} // Adjust delay as needed
      >
        Browse Main Course
      </motion.a>
    </div>
  );
};

export default ThirdSection;
