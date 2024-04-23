export const getWeather = (req, res) => {
  res.send("How's weather in your city?");
};

//GEt request, access req.params.
//from the client, the API will be seen as: https://deplyedlink/weather/:input

export const searchByCity = async (req, res) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${req.params.input}&units=metric&appid=${process.env.WEATHER_KEY}`
  );

  const result = await response.json();
  console.log(result);
  res.status(200).json(result);
};
