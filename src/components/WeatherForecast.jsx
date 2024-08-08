const WeatherForecast = ({weather5days}) => {
    const IMG_LINK = `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`

    return (
        <div className="flex flex-col w-6/12 items-center justify-center mx-auto my-10 py-5 gap-y-5 rounded-xl bg-blue-200 bg-opacity-80 shadow-2xl">
            <h2 className="text-2xl text-gray-800 font-bold">5 nexts days</h2>

            <div className="flex">

            </div>
        </div>
    );
}
 
export default WeatherForecast;
