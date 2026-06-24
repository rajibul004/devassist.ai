import { useEffect, useState } from "react";
import { getAllUsers } from "../api/adminApi";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await getAllUsers();

        console.log(data);

        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };

    loadUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>

      {users.map((user) => (
        <div key={user.id}>
          {user.email} - {user.role}
        </div>
      ))}
    </div>
  );
}
