import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function Question4() {
  const [messages, setMessages] = useState([]);
  const inputRef = useRef(null);
  const focusCountRef = useRef(0);
  const historyRef = useRef([]);

  const handleFocus = () => {
    focusCountRef.current += 1;
    console.log("Focus count:", focusCountRef.current);
  };

  const handleChange = (e) => {
    historyRef.current.push(e.target.value);
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

  return (
    <div className="max-w-md mx-auto p-6 space-y-4">

        <Link
        to="/"
        className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 inline-block"
      >
        Back to Navigation
      </Link>

      <h1 className="text-xl font-semibold">
        Message Tracker
      </h1>

      <input
        ref={inputRef}
        type="text"
        onFocus={handleFocus}
        onChange={handleChange}
        className="w-full border rounded p-2"
        placeholder="Type a message..."
      />

      <div className="flex gap-3">
        <button
          onClick={handleAddMessage}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Message
        </button>

        <button
          onClick={focusInput}
          className="bg-gray-700 text-white px-4 py-2 rounded"
        >
          Focus Input
        </button>
      </div>

      <div>
        <h2 className="font-medium">Messages:</h2>
        <ul className="list-disc pl-5">
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Question4;