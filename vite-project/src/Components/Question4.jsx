import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function Question4() {
  const [messages, setMessages] = useState([]);

  const inputRef = useRef(null);
  const focusCountRef = useRef(0);
  const historyRef = useRef([]);      
  const [, forceRender] = useState(0);  

  const handleFocus = () => {
    focusCountRef.current += 1;
    forceRender((x) => x + 1); 
  };

  const handleChange = (e) => {
    historyRef.current.push(e.target.value);
    forceRender((x) => x + 1);
  };

  const handleAddMessage = () => {
    const value = inputRef.current.value.trim();
    if (!value) return;

    setMessages((prev) => [...prev, value]);
    inputRef.current.value = "";
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    if (messages.length > 0) {
      console.log("New message added:", messages[messages.length - 1]);
    }
  }, [messages]);

  const latestHistory =
    historyRef.current.length > 0
      ? historyRef.current[historyRef.current.length - 1]
      : "";

  return (
    <div className="max-w-md mx-auto p-6 space-y-4">
      <Link
        to="/"
        className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 inline-block"
      >
        Back to Navigation
      </Link>

      <h1 className="text-xl font-semibold">Focus Tracker & Message History</h1>

      <div className="flex gap-2">
        <input
          ref={inputRef}
          type="text"
          onFocus={handleFocus}
          onChange={handleChange}
          className="flex-1 border rounded p-2"
          placeholder="Type message..."
        />

        <button
          onClick={handleAddMessage}
          className="bg-blue-600 text-white px-3 py-2 rounded"
        >
          Submit
        </button>

        <button
          onClick={focusInput}
          className="bg-gray-700 text-white px-3 py-2 rounded"
        >
          Focus Input
        </button>
      </div>

  
      <p className="text-sm">
        <b>Focus count:</b> {focusCountRef.current}
      </p>

      <div>
        <h2 className="font-medium">Messages:</h2>
        <ul className="list-disc pl-5">
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>

      
      <p className="text-sm">
        <b>History in Ref (no re-render):</b> {latestHistory}
      </p>
    </div>
  );
}

export default Question4;
