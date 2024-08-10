const WeatherInformations = ({weather}) => {
    const IMG_LINK = `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`

    return (
        <div className="flex flex-col min-w-fit w-6/12 items-center justify-center mx-4 sm:mx-auto my-10 py-5 gap-y-5 rounded-xl bg-blue-200 bg-opacity-80 shadow-2xl">
            <h2 className="text-3xl text-gray-800 font-bold">{weather.name}</h2>

            <div className="flex flex-wrap gap-x-6 justify-center items-center">
                <img className="w-24" src={IMG_LINK} alt="Weather time" />
                <h2 className="text-3xl text-nowrap mr-10 text-gray-800 font-bold">{Math.round(weather.main.temp)} ºC</h2>
                <p className="capitalize text-2xl font-semibold text-gray-800">{weather.weather[0].description}</p>
            </div>

            <div className="flex gap-5 text-nowrap">
                <h3>Min: {Math.round(weather.main.temp_min)}ºC </h3>
                <h3>Max: {Math.round(weather.main.temp_max)}ºC </h3>
            </div>
        
            <div className="flex flex-wrap font-medium text-nowrap mt-8 w-full mx-10 justify-around">
                <p>Feels like: {Math.round(weather.main.feels_like)}º</p>
                <p>Humidity: {weather.main.humidity}%</p>
                <p>Pressure: {weather.main.pressure} hPa</p>
            </div>
        </div>
    );
}
 
export default WeatherInformations;

