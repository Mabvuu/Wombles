import React from 'react';

const Desserts = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center mt-6 underline">DESSERTS</h2>
      <table className="table-auto w-full text-left border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="px-4 py-2 text-xl font-bold border border-gray-400">Dessert</th>
            <th className="px-4 py-2 text-xl font-bold border border-gray-400">Description</th>
            <th className="px-4 py-2 text-xl font-bold border border-gray-400">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="px-4 py-2 border border-gray-400 font-semibold">PAVLOVA</td>
            <td className="px-4 py-2 border border-gray-400 ">A homemade meringue topped with seasonal fresh fruits and cream.</td>
            <td className="px-4 py-2 border border-gray-400">$12</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 border border-gray-400 font-semibold">WOMBLES STYLE CRÈME BRULEE</td>
            <td className="px-4 py-2 border border-gray-400">Baked cream and eggs topped with caramelised sugar served in a glass and topped with fresh berries.</td>
            <td className="px-4 py-2 border border-gray-400">$14</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 border border-gray-400 font-semibold">CREPE SUZETTES</td>
            <td className="px-4 py-2 border border-gray-400">Light crepes simmered in fresh orange juice and Cointreau, flambeed with brandy, served with a scoop of vanilla ice cream.</td>
            <td className="px-4 py-2 border border-gray-400">$16</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 border border-gray-400 font-semibold">CRÈME CARAMEL</td>
            <td className="px-4 py-2 border border-gray-400">Baked custard crème caramel topped with a spun sugar basket.</td>
            <td className="px-4 py-2 border border-gray-400">$12</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 border border-gray-400 font-semibold">TRIO OF SORBETS (DAIRY FREE)</td>
            <td className="px-4 py-2 border border-gray-400">A delicious collaboration with Dolcetti Gelato & Wombles. A trio of fresh fruit sorbets - triple berry, mango, and passionfruit served on fruit coulis.</td>
            <td className="px-4 py-2 border border-gray-400">$16</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 border border-gray-400 font-semibold">LEMON MERINGUE ICE CREAM</td>
            <td className="px-4 py-2 border border-gray-400">Homemade frozen lemon meringue ice cream.</td>
            <td className="px-4 py-2 border border-gray-400">$12</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 border border-gray-400 font-semibold">ICE CREAM AND BAR ONE CHOCOLATE SAUCE</td>
            <td className="px-4 py-2 border border-gray-400">Vanilla ice cream and hot Bar One chocolate sauce.</td>
            <td className="px-4 py-2 border border-gray-400">$12</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 border border-gray-400 font-semibold">HOMEMADE STEAMED PUDDING</td>
            <td className="px-4 py-2 border border-gray-400">A traditional hot sponge pudding topped with caramelised custard, served with a scoop of vanilla ice cream or cream.</td>
            <td className="px-4 py-2 border border-gray-400">$15</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 border border-gray-400 font-semibold">WOMBLES ROSEWATER ICE CREAM (Subject to Availability)</td>
            <td className="px-4 py-2 border border-gray-400">Two scoops of rosewater ice cream filled with Turkish delight, nougat, chocolate, and rose petals, topped with a raspberry coulis.</td>
            <td className="px-4 py-2 border border-gray-400">$16</td>
          </tr>
        </tbody>
      </table>
      <div className="mt-8"></div>
      <p className="text-center font-bold sm:text-lg py-4 text-2xl mt-8">
        Please ask your waiter for our selection of teas, coffees, liqueurs, single malt whiskies, cognac, and dessert wines.
      </p>
   
    </div>
  );
};

export default Desserts;
