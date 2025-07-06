import { useState, useEffect } from "react"
import FormWeather from "./postApi";
import DeleteCityButton from "./deleteApi";

function Weather() {
    const [data, setData] = useState(null);
    const [city, setCity] = useState('');
    const [cities, setCities] = useState([]);

    // Carrega cidades do backend
    const loadCities = () => {
        fetch('http://127.0.0.1:8000/tempo/cities/')
            .then(res => res.json())
            .then(data => setCities(data.cities))
            .catch(console.error);
    };

    useEffect(() => {

        if (!city) return;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3db0fdcf62428510d0c2a9ea01144e71&units=metric&lang=pt_br`)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(en => console.error('Error : ', en));

        loadCities();

    }, [city]);

    // Atualiza o city selecionado quando o select muda
    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    const handleDeleteCity = (cityName) => {
        if (!window.confirm(`Are you sure you want to delete "${cityName}"?`)) return;

        fetch(`http://127.0.0.1:8000/tempo/city/${cityName}/`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                alert(data.message || data.error);
                setCity('');
                setData(null);
                loadCities(); // atualiza o select
            })
            .catch(err => {
                console.error(err);
                alert("Failed to delete city.");
            });
    };
    return (
        <div className="container">
            <h2>Weather Forecast</h2>

            <FormWeather onCityAdded={loadCities} />

            <div>
                <label>Select a city:</label>
                <select value={city} onChange={handleCityChange}>
                    <option value="">-- Select a city --</option>
                    {cities.map((c, i) => (
                        <option key={i} value={c}>{c}</option>
                    ))}
                </select>
            </div>

            <p className="city-selected">Selected city: {city}</p>

            <section id="box-climb">
                {data && (
                    <>
                        <div><strong>Weather Conditions:</strong> {data.weather?.[0]?.description}</div>
                        <div><strong>Wind Speed:</strong> {data.wind?.speed} m/s</div>
                        <div><strong>Temperature:</strong> {data.main?.temp}°C</div>
                        <div><strong>Humidity:</strong> {data.main?.humidity}%</div>
                        <div>
                            <img
                                src={`https://openweathermap.org/img/wn/${data.weather?.[0]?.icon}@2x.png`}
                                alt="Weather icon"
                            />
                        </div>
                    </>
                )}
            </section>

            <DeleteCityButton
                city={city}
                onDeleted={() => {
                    setCity('');
                    setData(null);
                    loadCities();
                }}
            />

        </div>
    );

}

export default Weather;
