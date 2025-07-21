import React from 'react';

const Methode = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">MÉTHODE CAP CLASSIQUE</h1>
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
              <td className="px-4 py-2 border font-semibold border-gray-300">Graham Beck Brut NV (Robertson)</td>
              <td className="px-4 py-2 border border-gray-300">
                Light and yeasty aromas, good fruit on the nose and rich creamy complexity on the palate..
              </td>
              <td className="px-4 py-2 border border-gray-300 text-right">$45</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 border font-semibold border-gray-300">Graham Beck Bliss Nectar Rosé (Robertson)</td>
              <td className="px-4 py-2 border border-gray-300">
                Pieter Ferreira has been making top sparkling wines – this is his new offering that is not as dry as most of the others.
              </td>
              <td className="px-4 py-2 border border-gray-300 text-right">$45</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 border font-semibold border-gray-300">Pongraçz NV</td>
              <td className="px-4 py-2 border border-gray-300">
                A fine aroma and yeastiness on the nose, followed by a rich complexity, finesse and lingering aftertaste.
              </td>
              <td className="px-4 py-2 border border-gray-300 text-right">$50</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 border font-semibold border-gray-300">Pongraçz NV</td>
              <td className="px-4 py-2 border border-gray-300">
                A fine aroma and yeastiness on the nose, followed by a rich complexity, finesse and lingering aftertaste.
              </td>
              <td className="px-4 py-2 border border-gray-300 text-right">$50</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 border font-semibold border-gray-300">Proseco – Casa Farive Cuvee Brut (Italy)</td>
              <td className="px-4 py-2 border border-gray-300">
                Dry and fresh with a pleasantly harmonic and persistent finish.
              </td>
              <td className="px-4 py-2 border border-gray-300 text-right">$50</td>
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

export default Methode;
