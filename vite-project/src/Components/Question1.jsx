import React, { useMemo } from "react";
import { useUserSearch } from "../hooks/useUserSearch";
import { useNavigate, Link } from "react-router-dom";

function Question1() {
  const users = useMemo(() => [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "David" },
    { id: 5, name: "Eve" },
  ],[]);

  const { query, setQuery, filtered } = useUserSearch(users);

  return (
    <div className="mx-auto max-w-xl space-y-4 p-6">
      <Link
        to="/"
        className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 inline-block"
      >
        Back to Navigation
      </Link>

      <h1 className="text-2xl font-semibold text-gray-800">Question 1</h1>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-md border border-gray-300 p-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
        placeholder="Search users..."
      />

      <p>
        Showing {filtered.length} of {users.length}
      </p>

      <ul className="space-y-2">
        {filtered.map((user) => (
          <li
            key={user.id}
            className="rounded-md bg-gray-50 p-3 text-sm text-gray-700"
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question1;