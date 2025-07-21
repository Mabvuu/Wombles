import React from 'react';

const Starters = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border border-gray-300 font-bold">Starter</th>
              <th className="px-4 py-2 border border-gray-300 font-bold">Description</th>
              <th className="px-4 py-2 border border-gray-300 font-bold">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border border-gray-300 font-semibold">Gypsy Spits</td>
              <td className="px-4 py-2 border border-gray-300">
                Button mushrooms wrapped in bacon, crisped under the grill, and topped with garlic butter.
              </td>
              <td className="px-4 py-2 border border-gray-300">$14</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300 font-semibold">Marrow Bones</td>
              <td className="px-4 py-2 border border-gray-300">
                Marrow bones on toast with a bone marrow and red wine jus and cracked black pepper.
              </td>
              <td className="px-4 py-2 border border-gray-300">$12</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300 font-semibold">Prawn and Mushroom</td>
              <td className="px-4 py-2 border border-gray-300">
                Six button mushrooms topped with prawns, garlic butter, and finished off under the grill.
              </td>
              <td className="px-4 py-2 border border-gray-300">$15</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300 font-semibold">Peri-Peri Chicken Livers</td>
              <td className="px-4 py-2 border border-gray-300">
                Pan-fried chicken livers in a homemade peri-peri sauce.
              </td>
              <td className="px-4 py-2 border border-gray-300">$12</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300 font-semibold">Prawn Cocktail</td>
              <td className="px-4 py-2 border border-gray-300">
                Prawns mixed with lettuce and avocado, topped with a light homemade cocktail sauce.
              </td>
              <td className="px-4 py-2 border border-gray-300">$15</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300 font-semibold">Calamari</td>
              <td className="px-4 py-2 border border-gray-300">
                Grilled calamari tubes with a lemon butter sauce or cajun style.
              </td>
              <td className="px-4 py-2 border border-gray-300">$15</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300 font-semibold">Goats Cheese Mousse</td>
              <td className="px-4 py-2 border border-gray-300">
                Warm goats cheese mousse topped with a tapenade of black olives and capers on pickled sliced cucumber, served with toast.
              </td>
              <td className="px-4 py-2 border border-gray-300">$12</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300 font-semibold">Norwegian Smoked Salmon</td>
              <td className="px-4 py-2 border border-gray-300">
                Oak-smoked Norwegian salmon with traditional garnishes of capers, onions, and homemade mayonnaise.
              </td>
              <td className="px-4 py-2 border border-gray-300">$16</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300 font-semibold">Duck Liver Pate</td>
              <td className="px-4 py-2 border border-gray-300">
                Two quenelles of duck liver pate with black cherry compote, served with toast.
              </td>
              <td className="px-4 py-2 border border-gray-300">$14</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300 font-semibold">Escargots</td>
              <td className="px-4 py-2 border border-gray-300">
                Snails in a traditional garlic and parsley butter.
              </td>
              <td className="px-4 py-2 border border-gray-300">$14</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Starters;
