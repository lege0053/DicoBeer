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

  useEffect(() => {
    const userId = localStorage.getItem("currentUser");

    if(!userId) {
      window.location.href = '/connexion';
    }

    async function fetchUser() {
      try {
        const response = await fetch("http://localhost:9000/api/user/getUserById", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ "_id": userId }),
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setUser(data.data[0]._doc);

      } catch (error) {
        console.error('Error fetching users:', error);
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
      <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" onClick={handleLogout}>Déconnexion</button>
    </>
  );
}
