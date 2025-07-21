import React from 'react';

function Mains() {
    return (
        <div className="container mx-auto p-4">
            {/* Main Courses Section */}
            <div className="my-8">
            <h2 className="text-4xl font-semibold mb-4 text-center">Main Courses</h2>

            <p className="text-center text-black font-semibold text-2xl">
  A selection of seasonal vegetables will be served <span className="underline" style={{ textTransform: 'uppercase' }}>COMPLIMENTARY</span> with your main course meal.
</p>


<div className="overflow-x-auto">
  <table className="table-auto w-full border-collapse border border-gray-300">
    <thead>
      <tr className="bg-gray-200">
        <th className="px-4 py-2 border border-gray-300 text-left">Steak</th>
        <th className="px-4 py-2 border border-gray-300 text-right">Weight</th>
        <th className="px-4 py-2 border border-gray-300 text-right">Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="px-4 py-2 border border-gray-300 font-semibold">Fillet</td>
        <td className="px-4 py-2 border border-gray-300 text-right">260g</td>
        <td className="px-4 py-2 border border-gray-300 text-right">$30</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border border-gray-300 font-semibold">Fillet</td>
        <td className="px-4 py-2 border border-gray-300 text-right">400g</td>
        <td className="px-4 py-2 border border-gray-300 text-right">$38</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border border-gray-300 font-semibold">Sirloin</td>
        <td className="px-4 py-2 border border-gray-300 text-right">350g</td>
        <td className="px-4 py-2 border border-gray-300 text-right">$34</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border border-gray-300 font-semibold">Rump</td>
        <td className="px-4 py-2 border border-gray-300 text-right">350g</td>
        <td className="px-4 py-2 border border-gray-300 text-right">$36</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border border-gray-300 font-semibold">Rump</td>
        <td className="px-4 py-2 border border-gray-300 text-right">650g</td>
        <td className="px-4 py-2 border border-gray-300 text-right">$48</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border border-gray-300 font-semibold">Man size rump</td>
        <td className="px-4 py-2 border border-gray-300 text-right">1KG</td>
        <td className="px-4 py-2 border border-gray-300 text-right">$65</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border border-gray-300 font-semibold">T-bone</td>
        <td className="px-4 py-2 border border-gray-300 text-right">600g</td>
        <td className="px-4 py-2 border border-gray-300 text-right">$42</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border border-gray-300 font-semibold">Prime Rib</td>
        <td className="px-4 py-2 border border-gray-300 text-right">600g</td>
        <td className="px-4 py-2 border border-gray-300 text-right">$42</td>
      </tr>
    </tbody>
  </table>
</div>

            </div>

            <h3 className="text-center mb-4 text-black font-semibold my-6 text-3xl">SAUCES</h3>

            <p className="text-center text-black font-semibold text-2xl">
            Black pepper, mushroom, blue cheese, crispy garlic, creamy garlic OR monkeygland	$5</p>
            <br/>

            <div className="overflow-x-auto py-4">
  <table className="table-auto w-full border-collapse border border-gray-300">
    <thead>
      <tr className="bg-gray-200">
        <th className="px-4 py-2 border border-gray-300 text-left">Extra/Side Order</th>
        <th className="px-4 py-2 border border-gray-300 text-right">Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="px-4 py-2 border border-gray-300">
          An optional choice of portioned chips, mashed potato, rice, or sadza served 
          <strong>COMPLIMENTARY</strong> with your main course meal.
        </td>
        <td className="px-4 py-2 border border-gray-300 text-right">Free</td>
      </tr>
      <tr >
        <td className="px-4 py-2 border border-gray-300 font-semibold">Fried mushrooms</td>
        <td className="px-4 py-2 border border-gray-300 text-right">$12</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border border-gray-300 font-semibold">Onion rings</td>
        <td className="px-4 py-2 border border-gray-300 text-right">$10</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border border-gray-300 font-semibold">Creamed spinach</td>
        <td className="px-4 py-2 border border-gray-300 text-right">$10</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border border-gray-300 font-semibold">Traditional gravy for sadza</td>
        <td className="px-4 py-2 border border-gray-300 text-right">$8</td>
      </tr>
    </tbody>
  </table>
</div>

<br/>





            {/* Other Dishes Section */}
            <div className="overflow-x-auto">
  <table className="table-auto w-full border-collapse border border-gray-300">
    <thead>
      <tr className="bg-gray-200">
        <th className="px-4 py-2 border border-gray-300 text-left">Dish</th>
        <th className="px-4 py-2 border border-gray-300 text-left">Description</th>
        <th className="px-4 py-2 border border-gray-300 text-right">Price</th>
      </tr>
    </thead>
    <tbody>

      <tr>
        <td className="px-4 py-2 border border-gray-300 font-semibold">Gammon (Pork/Bacon) Steak</td>
        <td className="px-4 py-2 border border-gray-300">
          Grilled gammon steak with a sweet chili honey glaze, served with pineapple.
        </td>
        <td className="px-4 py-2 border border-gray-300 text-right">$26</td>
      </tr>
     
      <tr>
        <td className="px-4 py-2 border border-gray-300 font-semibold">Beef Schnitzel</td>
        <td className="px-4 py-2 border border-gray-300">
          Lightly crumbed medallions of fillet steak, pan-fried and topped with sliced boiled egg,
          capers, anchovies, and a lemon butter sauce.
        </td>
        <td className="px-4 py-2 border border-gray-300 text-right">$28</td>
      </tr>
     
      <tr>
        <td className="px-4 py-2 border border-gray-300 font-semibold">Beef Stroganoff</td>
        <td className="px-4 py-2 border border-gray-300">
          Strips of fillet cooked in cream, paprika, tomato, and mushrooms on rice OR mashed potato – 
          an old time favorite.
        </td>
        <td className="px-4 py-2 border border-gray-300 text-right">$28</td>
      </tr>
    
      <tr>
        <td className="px-4 py-2 border border-gray-300 font-semibold">Steak Tartare</td>
        <td className="px-4 py-2 border border-gray-300">
          RAW seasoned fillet steak with fresh herbs, tabasco, Worcestershire sauce, cognac, and olive oil, 
          served with capers, gherkins, chopped onions, egg yolk, anchovies, and toast OR chips.
        </td>
        <td className="px-4 py-2 border border-gray-300 text-right">$34</td>
      </tr>

      
    
      <tr className="bg-gray-200">
        <td colSpan="3" className="px-4 py-2 font-semibold text-xl uppercase text-center">Poultry</td>
      </tr>
    
      <tr>
        <td className="px-4 py-2 border border-gray-300 font-semibold">Oven Roasted Duck</td>
        <td className="px-4 py-2 border border-gray-300">
          Duck oven roasted with an orange and mandarin sauce OR a black cherry and madeira red wine sauce.
        </td>
        <td className="px-4 py-2 border border-gray-300 text-right">$40</td>
      </tr>
      
      <tr>
        <td className="px-4 py-2 border border-gray-300 font-semibold">Trio of Chargrilled Quails</td>
        <td className="px-4 py-2 border border-gray-300">
          Three PARTIALLY DEBONED quails, chargrilled with olive oil, coarse salt, and fresh lemon juice.
        </td>
        <td className="px-4 py-2 border border-gray-300 text-right">$40</td>
      </tr>
   
      <tr>
        <td className="px-4 py-2 border border-gray-300 font-semibold">Chicken Schnitzel</td>
        <td className="px-4 py-2 border border-gray-300">
          A duo of crumbed chicken breasts, pan-fried, served with homemade creamed Dijon mustard sauce and chips.
        </td>
        <td className="px-4 py-2 border border-gray-300 text-right">$24</td>
      </tr>
     
      <tr>
        <td className="px-4 py-2 border border-gray-300 font-semibold">Chicken Kebabs</td>
        <td className="px-4 py-2 border border-gray-300">
          Two chargrilled chicken kebabs served with a choice of a lemonata OR peri-peri sauce.
        </td>
        <td className="px-4 py-2 border border-gray-300 text-right">$24</td>
      </tr>
    
      <tr className="bg-gray-200">
        <td colSpan="3" className="px-4 py-2 font-semibold text-xl uppercase text-center">Fish</td>
      </tr>
   
      <tr>
        <td className="px-4 py-2 border border-gray-300 font-semibold">Fish of the Day</td>
        <td className="px-4 py-2 border border-gray-300">
        Today&#39;s grilled fish topped with a lemon and parsley butter.
        </td>
        <td className="px-4 py-2 border border-gray-300 text-right">SQ</td>
      </tr>
  
      <tr>
        <td className="px-4 py-2 border border-gray-300 font-semibold">Prawns</td>
        <td className="px-4 py-2 border border-gray-300">
          Six large grilled prawns in the shell served with separate garlic butter and peri-peri sauce.
        </td>
        <td className="px-4 py-2 border border-gray-300 text-right">$42</td>
      </tr>
   
      <tr className="bg-gray-200">
        <td colSpan="3" className="px-4 py-2 font-semibold text-xl uppercase text-center">Pasta</td>
      </tr>
     
      <tr>
        <td className="px-4 py-2 border border-gray-300 font-semibold">Mediterranean Spaghetti</td>
        <td className="px-4 py-2 border border-gray-300">
          Spaghetti cooked with fresh tomato, garlic, capers, olives, parsley, and olive oil. 
          (Anchovies optional)
        </td>
        <td className="px-4 py-2 border border-gray-300 text-right">$28</td>
      </tr>
      
      <tr>
        <td className="px-4 py-2 border border-gray-300 font-semibold">Mushroom Risotto</td>
        <td className="px-4 py-2 border border-gray-300">
          Mushrooms, celery, onions, and Arborio rice cooked in a homemade vegetable stock.
        </td>
        <td className="px-4 py-2 border border-gray-300 text-right">$28</td>
      </tr>
    </tbody>
  </table>
</div>
<br/>
        

  <h2 className="text-2xl font-bold mb-4 text-center underline">SOUP OF THE DAY</h2>
  <p className="text-black font-medium text-lg text-center"> Please ask your waiter for the choice of today’s soup	 &nbsp;  &nbsp; &nbsp;  &nbsp; <strong>$12</strong></p>

<br/>


<p className="text-black font-bold text-xl underline"> PLEASE NOTE THAT OUR WELL DONE STEAKS TAKE A MINIMUM OF 30 MINUTES TO PREPARE
NO SHARING OF MAIN COURSE MEALS.</p>
<br/>


            
        </div>
    );
}

export default Mains;
