import React from 'react';

const Imported = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">IMPORTED CHAMPAGNE</h1>
      <div className="overflow-x-auto sm:overflow-x-visible">
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border border-gray-300 text-left">Wine Details</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Description</th>
              <th className="px-4 py-2 border border-gray-300 text-right">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 border font-semibold border-gray-300">Moët et Chandon Brut Imperial NV</td>
              <td className="px-4 py-2 border border-gray-300">
                Enticingly aromatic, exuberantly frothy and elegantly chic.
              </td>
              <td className="px-4 py-2 border border-gray-300 text-right">$240</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 border font-semibold border-gray-300">Moët et Chandon NECTAR Imperial NV</td>
              <td className="px-4 py-2 border border-gray-300">
                A delicious expression of Moët & Chandon style. A style distinguished by its bright fruitiness, its seductive palate and its elegant maturity.
              </td>
              <td className="px-4 py-2 border border-gray-300 text-right">$260</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 border font-semibold border-gray-300">Veuve Clicquot Yellow Label NV</td>
              <td className="px-4 py-2 border border-gray-300">
                Aromas of brioche and citrus accompany the palates refined, refreshing fruit and vanilla flavours. Delicious long finish.
              </td>
              <td className="px-4 py-2 border border-gray-300 text-right">$280</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-black font-bold text-2xl underline text-center mt-7 mb-8">
        PLEASE NOTE THAT VINTAGES ARE SUBJECT TO CHANGE.
      </p>
    </div>
  );
};

export default Imported;
