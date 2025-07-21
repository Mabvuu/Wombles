import React from 'react';

const Whitewine = () => {
  return (
    <div className="container mx-auto p-4">
     <h1 className="text-3xl font-bold mb-4 py-4 text-center">White Wines</h1>


<table className="w-full table-auto border-collapse border border-gray-300">
<thead>
  <tr className="bg-gray-200">
    <th className="px-4 py-2 border border-gray-300 text-left">Wine Details</th>
    <th className="px-4 py-2 border border-gray-300 text-left">Description</th>
    <th className="px-4 py-2 border border-gray-300 text-left">Price</th>
  </tr>
</thead>
<tbody>
  {/* Sauvignon Blanc and White Blends Section */}
  <tr>
    <td colSpan="3" className="bg-gray-100 text-lg font-semibold text-center py-2">
      Sauvignon Blanc and White Blends
    </td>
  </tr>
  <tr>
    <td className="px-4 py-2 border font-semibold border-gray-300">Buitenverwachting Buiten Blanc 2023 (Constantia)</td>
    <td className="px-4 py-2 border border-gray-300">
      This full-bodied cuvee offers ripe gooseberry and grassy character with slight hints of tropical fruit.
    </td>
    <td className="px-4 py-2 border border-gray-300">$30</td>
  </tr>
  <tr>
    <td className="px-4 py-2 border font-semibold border-gray-300">Haute Cabriére Pinot Chardonnay 2022 (Franschhoek)</td>
    <td className="px-4 py-2 border border-gray-300">
      Faintly pink hued, light, fresh, and elegant with a savory, faintly tannic, sweet-sour edge.
    </td>
    <td className="px-4 py-2 border border-gray-300">$35</td>
  </tr>
  <tr>
    <td className="px-4 py-2 border font-semibold border-gray-300">Klein Zalze Vineyard Sauvignon Blanc 2023 (Lutzville)</td>
    <td className="px-4 py-2 border border-gray-300">
      Wet stone, green pepper, and zingy gooseberry on a well-balanced lively vintage.
    </td>
    <td className="px-4 py-2 border border-gray-300">$35</td>
  </tr>
  <tr>
    <td className="px-4 py-2 border font-semibold border-gray-300">Klein Zalze Vineyard Sauvignon Blanc 2023 (Lutzville)</td>
    <td className="px-4 py-2 border border-gray-300">
      Wet stone, green pepper, and zingy gooseberry on a well-balanced lively vintage.
    </td>
    <td className="px-4 py-2 border border-gray-300">$35</td>
  </tr>
  <tr>
    <td className="px-4 py-2 border border-gray-300 font-semibold">Ken Forrestor Old Vine Chenin Blanc 2023 (Stellenbosch)</td>
    <td className="px-4 py-2 border border-gray-300">
      Wet This wine shows lovely complexity with a mix of tangy grassy notes, fig leaf, peach
      and nectarine nuances with a cool climate elegance.
    </td>
    <td className="px-4 py-2 border border-gray-300">$40</td>
  </tr>
  <tr>
    <td className="px-4 py-2 border font-semibold border-gray-300">Klein Constantia Sauvignon Blanc 2022 (Constantia)</td>
    <td className="px-4 py-2 border border-gray-300">
    Aromas of citrus and stone fruit fill the nose. The palate is richly textured, fresh and
complex with a bold minerality – a pure expression of Sauvignon Blanc with a long
crisp flinty conclusion.
    </td>
    <td className="px-4 py-2 border border-gray-300">$45</td>
  </tr>
  <tr>
    <td className="px-4 py-2 border font-semibold border-gray-300">Iona Sauvignon Blanc 2023 (Elgin)</td>
    <td className="px-4 py-2 border border-gray-300">
    Beautiful purity of limes and ripe gooseberry, with tropical, floral and fine herbal notes,
ruby grapefruit and a white pear drop on the finish. This is a cool climate Sauvignon
Blanc – vibrant, mineral, elegant, balanced and delicate, with a long, layered and
complex finish.
    </td>
    <td className="px-4 py-2 border border-gray-300">$50</td>
  </tr>
  <tr>
    <td className="px-4 py-2 border font-semibold border-gray-300">Springfield Life from Stone 2023 (Robertson)</td>
    <td className="px-4 py-2 border border-gray-300">
    Life from stone derives its name from the incredibly rocky soil in which it is grown.
Every year the vineyard battles against nature in order to produce highly concentrated
and poweful wines with a flinty, mineral character true to the quartz rock in which
it is grown.
    </td>
    <td className="px-4 py-2 border border-gray-300">$55</td>
  </tr>
  {/* Off Dry/Sweet Section */}
  <tr>
    <td colSpan="3" className="bg-gray-100 text-lg font-semibold text-center py-2">
      Off Dry/Sweet
    </td>
  </tr>
  <tr>
    <td className="px-4 py-2 border font-semibold border-gray-300">Angels Tears Moscato Chenin Natural Sweet 2022 (Western Cape)</td>
    <td className="px-4 py-2 border border-gray-300">
    This darling of the Angels Tears range is deliciously fruity with succulent stone fruit,
    litchi and citrus, enlivened by hints of floral and spicy Muscat notes.
    </td>
    <td className="px-4 py-2 border border-gray-300">$30</td>
  </tr>
  <tr>
    <td className="px-4 py-2 border  font-semibold border-gray-300">Cederberg: Bukketraube 2023 (Western Cape)</td>
    <td className="px-4 py-2 border border-gray-300">
    The delicate nose of this wine does not prepare you for the ‘reveal’ on the palate – a rich,
opulent onslaught of exotic white flowers and honeysuckle, pineapple and stone fruit,
including white peaches and pairs. The wine shows a delightful weight and sweet spot
on the palate to offset the mélange of flavours.
    </td>
    <td className="px-4 py-2 border border-gray-300">$30</td>
  </tr>
  {/* Chardonnay Section */}
  <tr>
    <td colSpan="3" className="bg-gray-100 text-lg font-semibold text-center py-2">
      Chardonnay
    </td>
  </tr>
  <tr>
    <td className="px-4 py-2 border font-semibold border-gray-300">Fairview 2021/2022 (Darling/Paarl)</td>
    <td className="px-4 py-2 border border-gray-300">
    A classic, restrained Chardonnay with subtle oaking. The palate abounds with soft
    spice, fresh fruit and minerality with great length and complexity.
    </td>
    <td className="px-4 py-2 border border-gray-300">$30</td>
  </tr>
  <tr>
    <td className="px-4 py-2 border font-semibold border-gray-300">Fat Bastard Chardonnay 2023 (Various areas)</td>
    <td className="px-4 py-2 border border-gray-300">
      Brilliantly named after the full, rich, and ripe flavors found from partial barrel fermentation.
    </td>
    <td className="px-4 py-2 border border-gray-300">$40</td>
  </tr>
</tbody>
</table>
<p className="text-black font-bold text-2xl underline text-center mt-7 mb-8">
        PLEASE NOTE THAT VINTAGES ARE SUBJECT TO CHANGE.
      </p>
    </div>
  );
};

export default Whitewine;
