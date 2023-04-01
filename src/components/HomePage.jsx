import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "./Table";
import Form from "./Form";

function HomePage() {
  const [allStation, setAllStation] = useState([]);
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [sortByPrice, setSortByPrice] = useState("");
  const [sortByTime, setSortByTime] = useState("");
  const [error, setError] = useState("");
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchStations = async () => {
      try {
        const response = await axios.get(
          `${process.env.BACKEND_URL}/getAllstation`
        );

        setAllStation(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    setError("");
    fetchStations();
  }, []);

  const fetchTrainData = async () => {
    try {
      const response = await axios.get(
        `${process.env.BACKEND_URL}/api/train/${from}/${to}`
      );
      setTrains(response.data.trains);
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  const submitHandlet = (e) => {
    setError("");
    e.preventDefault();
    if (sortByPrice && sortByTime) {
      const result = trains.filter((elem) => {
        const price = Math.floor(elem.distance * 1.25);
        return price < sortByPrice;
      });
      const result2 = result.filter((elem) => elem.departureTime <= sortByTime);
      if (result2.length === 0) {
        setError("No trains available");
      }
      setTrains(result2);
    } else if (sortByPrice) {
      const result = trains.filter((elem) => {
        const price = Math.floor(elem.distance * 1.25);
        return price < sortByPrice;
      });
      if (result.length === 0) {
        setError("No trains available");
      }
      setTrains(result);
    } else if (sortByTime) {
      const result = trains.filter((elem) => {
        return elem.departureTime <= sortByTime;
      });
      if (result.length === 0) {
        setError("No trains available");
      }
      setTrains(result);
    } else {
      fetchTrainData();
    }
  };

  const handleClear = () => {
    console.log("CLICKED");
    setError("");
    setSortByPrice("");
    setSortByTime("");
    setError("");
    setTrains([]);
    setFrom("");
    setTo("");
  };

  console.log(trains);
  console.log(from, to);
  return (
    <div className="container h-auto flex flex-col justify-around items-center">
      <Form
        submitHandlet={submitHandlet}
        setFrom={setFrom}
        allStation={allStation}
        setTo={setTo}
        trains={trains}
        setSortByPrice={setSortByPrice}
        setSortByTime={setSortByTime}
        handleClear={handleClear}
      />

      {error && <p className="mt-4">{error}</p>}

      <div class="ml-20 overflow-x-scroll md:w-full">
        <Table trains={trains} />
      </div>
      <div></div>
    </div>
  );
}

export default HomePage;
