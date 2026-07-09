'use client';

import { useEffect, useState } from 'react';
import { EditContactModal } from '../../components/EditContactModal';

type ContactEntry = {
  name: string;
  email: string;
  message: string;
  age: string;
};

export default function Submissions() {
  const [users, setUsers] = useState<ContactEntry[]>([]);

  const handleLogout = () => {
    document.cookie = 'page_auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    window.location.href = '/login';
  };

  const handleDelete = (indexToRemove: number) => {
    const updatedUsers = users.filter((_, index) => index !== indexToRemove);
    setUsers(updatedUsers);
    localStorage.setItem('contacts', JSON.stringify(updatedUsers));
  };

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('contacts') || '[]') as ContactEntry[];
    setUsers(stored);
  }, []);

  const handleSave = (index: number, updated: ContactEntry) => {
    const updatedUsers = users.map((user, userIndex) =>
      userIndex === index ? updated : user
    );
    setUsers(updatedUsers);
    localStorage.setItem('contacts', JSON.stringify(updatedUsers));
  };

  const handleExport = () => {
    const rows = users.map((user) => {
      return `${user.name},${user.email},${user.message},${user.age}`;
    });
    const csvContent = ['name,email,message,age', ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'contact_submissions.csv';
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-6 overflow-x-hidden">
      <div className="mb-5">
        <h1 className="text-2xl text-center font-bold">Contact submissions</h1>
      </div>
      <p className="mb-5 flex items-center justify-between">
        <button
          className="mb-4 rounded-lg border border-gray-300 bg-gray-600 p-2 text-center dark:border-gray-700"
          onClick={() => handleExport()}
        >
          Export To Excel
        </button>
        <button
          className="rounded-lg border border-gray-300 bg-gray-600 p-2 text-center dark:border-gray-700"
          onClick={handleLogout}
        >
          Logout
        </button>
      </p>
      {users.length === 0 ? (
        <p className="flex align-middle justify-center w-full text-center font-bold text-xl border border-white rounded-lg p-4">No submissions yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table border={1} className="mb-3 min-w-full border border-separate border-spacing-10 rounded-lg md-5">
            <thead>
              <tr>
                <th className="rounded-lg border border-gray-300 p-3 dark:border-gray-600">Name</th>
                <th className="rounded-lg border border-gray-300 p-3 dark:border-gray-600">Email</th>
                <th className="rounded-lg border border-gray-300 p-3 dark:border-gray-600">Message</th>
                <th className="rounded-lg border border-gray-300 p-3 dark:border-gray-600">Age</th>
                <th className="rounded-lg border border-gray-300 p-3 dark:border-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr className="border border-gray-300 p-3 dark:border-gray-700" key={`${user.email}-${index}`}>
                      <td className="rounded-lg border border-gray-300 bg-gray-600 p-4 dark:border-gray-700">{user.name}</td>
                      <td className="rounded-lg border border-gray-300 bg-gray-600 p-4 dark:border-gray-700">{user.email}</td>
                      <td className="rounded-lg border border-gray-300 bg-gray-600 p-4 dark:border-gray-700">{user.message}</td>
                      <td className="rounded-lg border border-gray-300 bg-gray-600 p-4 text-center dark:border-gray-700">{user.age}</td>
                      <td className="flex items-center justify-center gap-2 p-1">
                        <EditContactModal
                          item={user}
                          onSave={(updated) => handleSave(index, updated)}
                        />
                        <button
                          className="rounded-lg border border-gray-300 bg-gray-600 px-3 py-2 text-white"
                          onClick={() => handleDelete(index)}
                        >
                          Delete
                        </button>
                      </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
