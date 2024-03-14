"use client";
import { useState, useEffect } from 'react';

interface User {
  _id: string;
  pseudo: string;
  email: string;
  birthdate: string;
  role: string;
}

export default function Page() {
  const [user, setUser] = useState<User>({});
  const userId = localStorage.getItem("currentUser");
  if(!userId) {
    window.location.href = '/connexion';
  }

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch("http://localhost:9000/api/users/" + userId);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching beers:', error);
      }
    }
    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:9000/api/auth/logout", {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error('Failed to logout');
      }
      setUser({});
      localStorage.removeItem("currentUser");
      window.location.href = '/connexion';
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <>
      <h1>Profil: {user.pseudo}</h1>
      <button onClick={handleLogout}>Déconnexion</button>
    </>
  );
}
