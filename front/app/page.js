"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);
  const API_URL = "http://localhost:9000/";

  const getUsers = async () => {
    try {
      const response = await fetch(API_URL + "api/home");
      const data = await response.json();
      setUsers(data);
      console.log("users updated = ", data); // Log après la mise à jour
    } catch (error) {
      console.error("Failed to fetch users: ", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h1>Bonjour</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            id: {user._id}
            <br />
            name: {user.pseudo}
            <br />
            email: {user.email}
          </li>
        ))}
      </ul>
    </>
  );
}
