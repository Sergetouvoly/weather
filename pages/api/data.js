import CONFIG from "../config";

export default async function handler(req, res) {
  console.log("API Key DOUDOU");

  // Utiliser la ville de configuration par défaut si aucune ville n'est fournie
  const cityInput = req.body?.cityInput || CONFIG.DEFAULT_CITY;
  console.log("City Input:", cityInput);
  const getWeatherData = await fetch(
    // `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=c894ab53e1cd9c4344c3ae46413a160e`
    `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`
  );
  const data = await getWeatherData.json();
  res.status(200).json(data);



  // `https://api.openweathermap.org/data/2.5/weather?q=paris&units=metric&appid=c894ab53e1cd9c4344c3ae46413a160e`

}
