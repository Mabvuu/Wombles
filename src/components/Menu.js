//Menu.js

import React from "react";
import { Route, Switch } from "react-router-dom";
import Mains from './Menucomponents/Mains';
import Salads from './Menucomponents/Salads';
import Starters from "./Menucomponents/Starters";
import Desserts from "./Menucomponents/Desserts";
import Cocktails from "./Menucomponents/Cocktails";
import Wine from "./Menucomponents/Wine";
import Barmenu from "./Menucomponents/Barmenu";



function Menu(){
    return(
        <div>
           
            <Switch>
                <Route path="/menu/mains" component={Mains} />
                <Route path="/menu/salads" component={Salads} />
                <Route path="/menu/starters" component={Starters} />
                <Route path="/menu/desserts" component= {Desserts} />
                <Route path="/menu/cocktails" component={Cocktails} />
                <Route path="/menu/wine" component={Wine}/>
                <Route path="/menu/barmenu" component={Barmenu}/>

            </Switch>
        </div>
    )
}

export default Menu;