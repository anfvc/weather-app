import { useState } from "react";
import Cities from "./Components/Cities";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [cities, setCities] = useState([]); //Created this state array to store all the fetched cities from the input :)

  async function getWeather() {
    try {
      const response = await fetch(
        `https://weather-app-k55z.onrender.com/weather/${
          input[0].toUpperCase() + input.slice(1)
        }`
      );
      if (response.ok) {
        const result = await response.json();
        // console.log(result);
        setCities([...cities, result]);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  console.log(cities);

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    getWeather();
    setInput("");
  }

  return (
    <>
      <div>
        <h1>Weather APP</h1>
        <h3>To start, please type a city of your preference</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a city..."
            value={input}
            onChange={handleChange}
          />
          <button>Search</button>
        </form>
        <Cities cities={cities} setCities={setCities}/>
      </div>
    </>
  );
}

export default App;
