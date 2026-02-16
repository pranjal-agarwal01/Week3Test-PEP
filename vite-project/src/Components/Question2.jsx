import React from "react";
import { useCharacterCounter } from "../hooks/useCharacterCounter";
import { Link } from "react-router-dom";

function Question2() {
  const { text, total, remaining, limit, handleChange } = useCharacterCounter();
  return (
    <div className="mx-auto max-w-xl space-y-4 p-6">
      <Link
        to="/"
        className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 inline-block"
      >
        Back to Navigation
      </Link>
      <h1 className="text-2xl font-semibold text-gray-800">Question 2</h1>

      <textarea
        value={text}
        onChange={handleChange}
        className="h-32 w-full resize-none rounded-md border border-gray-300 p-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
        placeholder="Type here..."
      />

      <div className="space-y-1 text-sm text-gray-700">
        <p>
          Total characters: <span className="font-medium">{total}</span>
        </p>
        <p>
          Remaining characters: <span className="font-medium">{remaining}</span>
        </p>
        <p>
          Character limit: <span className="font-medium">{limit}</span>
        </p>
      </div>

      {remaining === 0 && (
        <p className="rounded-md bg-red-50 p-2 text-sm font-medium text-red-600">
          Character limit reached!
        </p>
      )}

      {remaining < 10 && remaining > 0 && (
        <p className="rounded-md bg-orange-50 p-2 text-sm font-medium text-orange-600">
          Warning: Only {remaining} characters left!
        </p>
      )}
    </div>
  );
}

export default Question2;