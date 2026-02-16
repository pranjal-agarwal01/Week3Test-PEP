import React from "react";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();

  const btnStyle =
    "w-full rounded-lg bg-blue-600 px-6 py-3 text-white font-medium transition-all duration-200 hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98]";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          React Practice Dashboard
        </h1>

        <div className="space-y-4">
          <button
            className={btnStyle}
            onClick={() => navigate("/Q1")}
          >
            Go to Q1 – User Search
          </button>

          <button
            className={btnStyle}
            onClick={() => navigate("/Q2")}
          >
            Go to Q2 – Character Counter
          </button>

          <button
            className={btnStyle}
            onClick={() => navigate("/Q3")}
          >
            Go to Q3 – Temperature Converter
          </button>

          <button
            className={btnStyle}
            onClick={() => navigate("/Q4")}
          >
            Go to Q4 – Message Tracker
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navigation;