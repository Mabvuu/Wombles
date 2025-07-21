import React from 'react';

const Barmenu = () => {
  return (
    <div className="container mx-auto p-4">
      {/* STARTERS */}
      <div className="mb-8">
        <h3 className="text-center mb-6 text-black font-semibold text-3xl underline">STARTERS</h3>
        <table className="table-auto w-full border-collapse border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border border-gray-300 text-lg font-semibold">Dish</th>
              <th className="p-2 border border-gray-300 text-lg font-semibold">Description</th>
              <th className="p-2 border border-gray-300 text-lg font-semibold">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-gray-300 font-semibold">PERI-PERI CHICKEN LIVERS</td>
              <td className="p-2 border border-gray-300">Pan-fried chicken livers in a homemade PERI sauce.</td>
              <td className="p-2 border border-gray-300">$12</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 font-semibold">GYPSY SPITS</td>
              <td className="p-2 border border-gray-300">Button mushrooms wrapped in bacon, crisped under the grill, and topped with garlic butter.</td>
              <td className="p-2 border border-gray-300">$14</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 font-semibold">CALAMARI</td>
              <td className="p-2 border border-gray-300">Grilled calamari tubes with a lemon butter sauce or cajun style.</td>
              <td className="p-2 border border-gray-300">$15</td>
            </tr>
           
          </tbody>
        </table>
      </div>

      <p>
              <p className="p-2 text-center text-xl text-black uppercase font-bold underline">SOUP OF THE DAY</p>
              <p className="text-center text-lg">
  Please ask your waiter for the choice of today’s soup.
</p>
<p className="p-2 text-center text-xl font-semibold">$12</p>
            </p>

      {/* SALADS */}
      <div className="mb-8">
        <h3 className="text-center mb-6 text-black font-semibold text-3xl underline">SALADS</h3>
        <table className="table-auto w-full border-collapse border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border border-gray-300 text-lg font-semibold">Salad</th>
              <th className="p-2 border border-gray-300 text-lg font-semibold">Description</th>
              <th className="p-2 border border-gray-300 text-lg font-semibold">Small</th>
              <th className="p-2 border border-gray-300 text-lg font-semibold">Large</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-gray-300">BLUE CHEESE SALAD</td>
              <td className="p-2 border border-gray-300">Iceberg lettuce, tomato, cucumber, and onion topped with blue cheese dressing.</td>
              <td className="p-2 border border-gray-300 text-center">$15</td>
              <td className="p-2 border border-gray-300 text-center">$30</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300">WOMBLES MIXED SALAD</td>
              <td className="p-2 border border-gray-300">Iceberg lettuce, tomato, onion, cucumber, avocado, olives, feta, and creamed dressing.</td>
              <td className="p-2 border border-gray-300 text-center">$15</td>
              <td className="p-2 border border-gray-300 text-center">$30</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300">CAESAR SALAD</td>
              <td className="p-2 border border-gray-300">Iceberg lettuce with anchovies, capers, egg, bacon, croutons, parmesan, and Caesar dressing.</td>
              <td className="p-2 border border-gray-300 text-center">$15</td>
              <td className="p-2 border border-gray-300 text-center">$30</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* MAIN COURSE */}
      <div className="mb-8">
        <h3 className="text-center mb-6 text-black font-semibold text-3xl underline">MAIN COURSE</h3>
        <table className="table-auto w-full border-collapse border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border border-gray-300 text-lg font-semibold">Dish</th>
              <th className="p-2 border border-gray-300 text-lg font-semibold">Description</th>
              <th className="p-2 border border-gray-300 text-lg font-semibold">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-gray-300 font-semibold">STEAK ROLL</td>
              <td className="p-2 border border-gray-300">200g Fillet Steak Roll with sauce and chips.</td>
              <td className="p-2 border border-gray-300">$20</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 font-semibold">STEAK, EGG, AND CHIPS</td>
              <td className="p-2 border border-gray-300">300g Rump Steak with fried egg and chips.</td>
              <td className="p-2 border border-gray-300">$20</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 font-semibold">GAMMON STEAK</td>
              <td className="p-2 border border-gray-300">Grilled Gammon steak with honey pineapple glaze and chips.</td>
              <td className="p-2 border border-gray-300">$26</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 font-semibold">BEEF STROGANOFF</td>
              <td className="p-2 border border-gray-300">Beef fillet strips in cream, paprika, tomatoes, and mushrooms on rice or mash.</td>
              <td className="p-2 border border-gray-300">$28</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 font-semibold">CHICKEN SCHNITZEL</td>
              <td className="p-2 border border-gray-300">Crumbed chicken breasts with Dijon mustard sauce and chips.</td>
              <td className="p-2 border border-gray-300">$24</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Barmenu;
