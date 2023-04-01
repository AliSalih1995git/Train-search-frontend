import React from "react";

function Table({ trains }) {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2 text-sm">Name</th>
          <th className="px-4 py-2 text-sm">Departure Time</th>
          <th className="px-4 py-2 text-sm">Arrival Time</th>
          <th className="px-4 py-2 text-sm">Distance</th>
          <th className="px-4 py-2 text-sm">Price</th>
        </tr>
      </thead>
      <tbody>
        {trains?.map((train) => (
          <tr key={train.id} className="bg-gray-100">
            <td className="border px-4 py-2 text-sm">{train.name}</td>
            <td className="border px-4 py-2 text-sm">{train.departureTime}</td>
            <td className="border px-4 py-2 text-sm">{train.arrivalTime}</td>
            <td className="border px-4 py-2 text-sm">{train.distance} km</td>
            <td className="border px-4 py-2 text-sm">
              Rs. {Math.floor(train.distance * 1.25)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
