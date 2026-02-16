import React from "react";
import { useTemperatureSync } from "../hooks/useTemperatureSync";
import { Link } from "react-router-dom";

function Question3() {
  const { celsius, fahrenheit, updateFromCelsius, updateFromFahrenheit } =
    useTemperatureSync();

  return (
    <div className="max-w-md mx-auto p-6 space-y-6">
      <Link
        to="/"
        className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 inline-block"
      >
        Back to Navigation
      </Link>
      <h1 className="text-xl font-semibold">Temperature Converter</h1>

      <div className="flex flex-col space-y-2">
        <label className="text-sm font-medium">Celsius</label>
        <input
          type="number"
          value={celsius}
          onChange={(e) => updateFromCelsius(e.target.value)}
          className="rounded border p-2"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label className="text-sm font-medium">Fahrenheit</label>
        <input
          type="number"
          value={fahrenheit}
          onChange={(e) => updateFromFahrenheit(e.target.value)}
          className="rounded border p-2"
        />
      </div>
    </div>
  );
}

export default Question3;