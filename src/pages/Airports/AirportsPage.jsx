import React from "react";
import axios from "axios";
import * as CONSTS from "../../utils/consts";
import AirportsResponse from "./AirportsResponse";
import "./AirportsPage.css";
import LoadingComponent from "../../components/Loading";

export default function Airports() {
  // HOOKS FOR THE FORM AND THE API RESPONSE 👇
  const [isLoading, setIsLoading] = React.useState(false);
  const [listOfArrivals, setListOfArrivals] = React.useState([]);
  const [form, setForm] = React.useState({
    airport: "LEMD",
    startDate: "",
    endDate: "",
  });

  // HANDLING THE FORM INPUTS 👇
  const { airport, startDate, endDate } = form;

  function handleInputChange(event) {
    const { name, value } = event.target;
    return setForm({ ...form, [name]: value });
  }

  // HANDLING SUBMITTING THE FORM 👇
  function handleFormSubmission(event) {
    event.preventDefault();
    const choosenAirport = {
      airport,
      startDate,
      endDate,
    };
    // console.log(choosenAirport);

    // MAKING THE REQUEST TO BACK-END SENDING THE PARAMETERS FROM THE FORM 👇
    axios
      .post(`${CONSTS.SERVER_URL}/airports`, choosenAirport)
      .then((response) => {
        setIsLoading(false);
        // console.log("response:", response.data);
        return setListOfArrivals(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // console.log(listOfArrivals);

  // FUNCTION TO DISPLAY THE LOADING COMPONENT WHEN THE BUTTON IS PRESSED 👇
  function handleButton() {
    setIsLoading(true);
  }

  return (
    <div className="container">
      <div>
        <h1>Choose an airport and dates</h1>
        <p>Date interval must be no longer than 7 days!</p>
        <form onSubmit={handleFormSubmission} className="airportForm">
          {/* CHOOSING THE AIRPORT 👇 */}
          <label htmlFor="airport">Airports</label>
          <select id="airport" name="airport" onChange={handleInputChange}>
            <option value="LEMD">Madrid</option>
            <option value="LEBL">Barcelona</option>
            <option value="EDDT">Berlin-Tegel</option>
            <option value="EDDM">Munich</option>
          </select>

          {/* CHOOSING DATES 👇 */}
          <label htmlFor="start-date">Start date</label>
          <input
            type="date"
            id="start-date"
            name="startDate"
            onChange={handleInputChange}
          />

          <label htmlFor="end-date">End date</label>
          <input
            type="date"
            id="end-date"
            name="endDate"
            onChange={handleInputChange}
          />

          <br />
          <button
            className="airport-submit-btn"
            type="submit"
            onClick={handleButton}
          >
            Submit
          </button>
        </form>
      </div>

      {/* DISPLAYING THE RESPONSE 👇 */}
      {isLoading ? (
        <div>
          <h1>Requesting data</h1>
          <LoadingComponent />
        </div>
      ) : (
        <AirportsResponse listOfArrivals={listOfArrivals} />
      )}
    </div>
  );
}
