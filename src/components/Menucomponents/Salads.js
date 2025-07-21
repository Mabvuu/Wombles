import React from 'react';

const Salads = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-2 border border-gray-300 font-bold">Salad</th>
              <th className="px-4 py-2 border border-gray-300 font-bold">Description</th>
              <th className="px-4 py-2 border border-gray-300 font-bold">Small</th>
              <th className="px-4 py-2 border border-gray-300 font-bold">Large</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border border-gray-300 font-semibold">Blue Cheese Salad</td>
              <td className="px-4 py-2 border border-gray-300">
                Iceberg lettuce, tomato, cucumber, and onion topped with a light blue cheese dressing and grated blue cheese.
              </td>
              <td className="px-4 py-2 border border-gray-300">$15</td>
              <td className="px-4 py-2 border border-gray-300">$30</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300 font-semibold">Wombles Mixed Salad</td>
              <td className="px-4 py-2 border border-gray-300">
                A tossed salad with iceberg lettuce, tomato, onion, cucumber, avocado, olives, and Danish feta with a creamed salad dressing.
              </td>
              <td className="px-4 py-2 border border-gray-300">$15</td>
              <td className="px-4 py-2 border border-gray-300">$30</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300 font-semibold">Caesar Salad</td>
              <td className="px-4 py-2 border border-gray-300">
                Iceberg lettuce tossed with anchovies, capers, boiled egg, fried bacon, croutons, shavings of parmesan cheese, and Caesar mayonnaise dressing.
              </td>
              <td className="px-4 py-2 border border-gray-300">$15</td>
              <td className="px-4 py-2 border border-gray-300">$30</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Salads;
