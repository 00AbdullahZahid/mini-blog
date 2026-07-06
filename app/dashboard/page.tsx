'use client';

import { useEffect, useState } from 'react';

type ContactEntry = {
  name: string;
  email: string;
  message: string;
};

export default function Submissions() {
  const [users, setUsers] = useState<ContactEntry[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('contacts') || '[]') as ContactEntry[];
    setUsers(stored);
  }, []);

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">Contact submissions</h1>

      {users.length === 0 ? (
        <p>No submissions yet.</p>
      ) : (
        <table border={1} className="w-full border-collapse">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={`${user.email}-${index}`}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
