const WeatherForecast = ({weather5days}) => {
    const forecast = {}

    for (let weather of weather5days.list) {
        const date = new Date(weather.dt * 1000).toLocaleDateString()
        if (!forecast[date]) {
            forecast[date] = weather
        }
    }
    
    const forecastList = Object.values(forecast).slice(1,6)

    const convertDate = ({dt}) => {
        const weekday = new Date(dt * 1000).toLocaleDateString('en-US' ,{weekday: "long"})
        return (weekday)
    }
    
    return (
        <div className="flex flex-col bg-repeat-round min-w-fit w-6/12 items-center justify-center mx-3 sm:mx-auto mt-10 py-5 gap-y-5 rounded-xl bg-blue-200 bg-opacity-80 shadow-2xl">
            <h2 className="text-2xl text-gray-800 font-bold">5 nexts days</h2>

            <div className="flex flex-wrap justify-center gap-5 px-5 py-4">
                {forecastList.map(forecastItem => {
                    const IMG_LINK = `http://openweathermap.org/img/wn/${forecastItem.weather[0].icon}.png`
                    
                    return (
                        <div key={forecastItem.dt} className="flex flex-col items-center bg-slate-200 w-48 px-2 py-4 gap-1 rounded-lg shadow-md">
                            <p className="text-xl font-semibold">{convertDate(forecastItem)}</p>
                            <img className="w-16" src={IMG_LINK} alt="Weather Icon" /> 
                            <p className="capitalize">{forecastItem.weather[0].description}</p>
                            <p className="text-nowrap">Max:{Math.round(forecastItem.main.temp_max)}ºC</p>
                            <p className="text-nowrap">Min: {Math.round(forecastItem.main.temp_min)}ºC</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default WeatherForecast;
