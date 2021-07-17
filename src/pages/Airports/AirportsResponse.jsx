import React from "react";

export default function AirportsResponse({ listOfArrivals }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Departure Airport</th>
            <th>Callsign</th>
            <th>Departure Airport Distance</th>
          </tr>
        </thead>
        <tbody>
          {listOfArrivals.map((flight, index) => (
            <tr key={index}>
              <td>{flight.estDepartureAirport}</td>
              <td>{flight.callsign}</td>
              <td>{flight.estDepartureAirportHorizDistance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
