import React from "react";

function DeleteCityButton({ city, onDeleted }) {
  const handleDeleteCity = () => {
    if (!window.confirm(`Are you sure you want to delete "${city}"?`)) return;

    fetch(`http://127.0.0.1:8000/tempo/city/${city}/`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message || data.error);
        if (onDeleted) onDeleted(); // avisa o componente principal
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to delete city.");
      });
  };

  if (!city) return null;

  return (
    <button className="delete-button" onClick={handleDeleteCity}>
      Delete selected city
    </button>
  );
}

export default DeleteCityButton;
