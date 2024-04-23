/* eslint-disable react/prop-types */
function Cities({ cities, setCities }) {

  function handleDelete(id) {
    const toDelete = cities.filter(city => city.id !== id)
    setCities(toDelete)
  }


  return (
    <div className="container">
      {cities.length === 0 ? (
        <p className="no-city">You have not searched for any cities yet.</p>
      ) : (
        cities.map((city) => (
          <div className="city-container" key={city.id}>
            <h2>
              {city.name}, {city.sys.country}{" "}
            </h2>
            <h4>Current Temperature: {city.main.temp.toFixed(0)} °C</h4>
            <p>Feels like: {city.main.feels_like.toFixed(0)} °C</p>
            <p>In {city.name}, expect a Max of {city.main.temp_max.toFixed(0)} °C and a Min of {city.main.temp_min.toFixed(0)} °C today.</p>
            <button className="delete" onClick={() => handleDelete(city.id)}>X</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cities;
