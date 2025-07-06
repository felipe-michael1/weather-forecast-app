import { useState } from "react";

function FormWeather({ onCityAdded }) {
    const [city, setCity] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://127.0.0.1:8000/tempo/city/${city}/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ city }) // opcional, já está na URL
        })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                setMessage(data.message);
                setCity("");
                if (onCityAdded) onCityAdded(); // <- atualiza o select
            } else if (data.error) {
                setMessage(`Erro: ${data.error}`);
            }
        })
        .catch(error => {
            setMessage("Erro ao conectar com o servidor.");
            console.error(error);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label>Insert the city into DataBase:</label><br />
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Insert the name of the city"
                />
                <button type="submit">Save the Form</button>
                <p>{message}</p>
            </fieldset>
        </form>
    );
}

export default FormWeather;
