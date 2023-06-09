import React from "react";

function Form({
  submitHandlet,
  setFrom,
  allStation,
  setTo,
  trains,
  setSortByPrice,
  setSortByTime,
  handleClear,
}) {
  return (
    <form
      className="flex flex-col md:flex-row justify-around items-center rounded-md bg-pink-400 p-4 mt-8 "
      onSubmit={submitHandlet}
    >
      <div className="flex justify-center mb-4 md:mb-0">
        <label className="p-4">From</label>
        <select
          className="px-4 py-3 rounded-md w-[150px] md:w-[200px] h-[50px]"
          onChange={(e) => setFrom(e.target.value)}
        >
          <option disabled selected hidden>
            Source
          </option>
          {allStation?.map((station) => (
            <option key={station.id}>{station.name}</option>
          ))}
        </select>
      </div>
      <div className="flex justify-center mb-4 md:mb-0">
        <label className="p-4">To</label>
        <select
          className="px-4 py-3 rounded-md w-[150px] md:w-[200px] h-[50px]"
          onChange={(e) => setTo(e.target.value)}
        >
          <option disabled selected hidden>
            Destination
          </option>
          {allStation?.map((station) => (
            <option key={station.id} value={station.name}>
              {station.name}
            </option>
          ))}
        </select>
      </div>
      {trains.length !== 0 && (
        <>
          <div className="flex justify-center mb-4 md:mb-0">
            <label className="p-4">Sort by</label>
            <select
              className="px-4 py-3 rounded-md w-[150px] md:w-[100px] h-[50px]"
              onChange={(e) => setSortByPrice(e.target.value)}
            >
              <option disabled selected hidden>
                Price
              </option>
              {trains?.map((train) => (
                <option
                  key={train.id}
                  value={Math.floor(train.distance * 1.25)}
                >
                  {Math.floor(train.distance * 1.25)}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-center  mb-4 md:mb-0">
            <label className="p-4">Sort by</label>
            <select
              className="px-4 py-3 rounded-md w-[150px] md:w-[100px] h-[50px]"
              onChange={(e) => setSortByTime(e.target.value)}
            >
              <option disabled selected hidden>
                Time
              </option>
              {trains?.map((train) => (
                <option key={train.id} value={train.departureTime}>
                  {train.departureTime}
                </option>
              ))}
            </select>
          </div>
        </>
      )}
      <div className="flex justify-center">
        <button
          type="submit"
          className="ml-4 rounded-md text-white p-4 bg-pink-950 w-52 md:w-auto "
        >
          Submit{" "}
        </button>
      </div>
      <div className="flex justify-center ">
        <button
          className="ml-4 rounded-md text-white p-4 bg-pink-950 w-52 md:w-auto"
          onClick={handleClear}
        >
          clear{" "}
        </button>
      </div>
    </form>
  );
}

export default Form;
