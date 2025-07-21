import React from 'react';
import Slideshow from './Slideshow';
import './Main.css';
import Mainabout from './Maincomponents/Mainabout';
import Menuteaser from './Maincomponents/Menuteaser';
import Teasepage from './Maincomponents/Teasepage';
import Schedule from './Maincomponents/Schedule';
import Gallery from './Maincomponents/Gallery';





const Main = () => {
  return (
    <>
      <Slideshow />
      <Mainabout />
       <Menuteaser/> 
      <Teasepage/>
      <Schedule />
      <Gallery />
     
     


    </>
  );
}

export default Main;
