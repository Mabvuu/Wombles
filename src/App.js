import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';


import Navbar from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import About from './components/AboutMain';
import Location from './components/ContactMain';
import Mains from './components/Menucomponents/Mains';
import Salads from './components/Menucomponents/Salads';
import Starters from './components/Menucomponents/Starters';
import Desserts from './components/Menucomponents/Desserts';
import Cocktails from './components/Menucomponents/Cocktails';
import Barmenu from './components/Menucomponents/Barmenu';
import RedWine from './components/Menucomponents/Wines/Redwine';
import Whitewine from './components/Menucomponents/Wines/Whitewine';
import Methode from './components/Menucomponents/Wines/Methode';
import Imported from './components/Menucomponents/Wines/Imported';





function App() {
  return (
    <Router>
      
      <div>
      <Helmet>
          <title>Khaya Nyama Wombles</title> 
          <meta name="description" content="Indulge in fine dining at Khaya Nyama Wombles, a luxurious steakhouse known for its elegant ambiance, great cuisine, and beautiful surroundings. Experience the best in steakhouse dining with us." />
        <meta name="keywords" content="Khaya Nyama Wombles, steakhouse, fine dining, elegant, nature, luxury, steak, cuisine" />
        </Helmet>
  
      <Navbar />
        
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/About" exact component={ About} />
          <Route path="/Contact" exact component={ Location } />
          <Route path="/Mains" exact component={Mains } />
          <Route path="/Salads" exact component={ Salads} />
          <Route path="/Starters" exact component={Starters} />
          <Route path="/Desserts" exact component={ Desserts} />
          <Route path="/Cocktails" exact component={ Cocktails } />
          <Route path="/Red" exact component={ RedWine} />
          <Route path="/White" exact component={ Whitewine} />
          <Route path="/Methode" exact component={ Methode} />
          <Route path="/imported" exact component={ Imported} />
          <Route path="/Barmenu" exact component={ Barmenu } />
        
        </Switch>

      
      </div>
      <Footer />
    </Router>
  );
}

export default App;
