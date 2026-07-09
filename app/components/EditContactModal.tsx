// components/EditContactModal.tsx
'use client';

import { useState } from 'react';

interface Item {
  name: string;
  email: string;
  message: string;
  age: string;
}

interface EditContactModalProps {
  item: Item;
  onSave: (updated: Item) => void;
}

export function EditContactModal({ item, onSave }: EditContactModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [values, setValues] = useState<Item>(item);

  const handleOpen = () => {
    setValues(item); // reset to latest values each time it's opened
    setIsOpen(true);
  };

  const handleChange = (field: keyof Item, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(values);
    setIsOpen(false);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={handleOpen}
        className="px-4 py-1.5 bg-blue-800 text-white rounded-lg text-lg border border-blue-900 hover:bg-blue-900"
      >
        Edit
      </button>

      {/* Modal Overlay & Container */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-black p-6 border border-gray-400 rounded-xl w-full max-w-md shadow-xl relative">
            <h2 className="text-xl font-bold mb-4 text-white shadow-2xl p-4 text-center rounded-lg backdrop:bg-black/50 backdrop:backdrop-blur-sm">Edit Record</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-white">Name</label>
                <input
                  type="text"
                  value={values.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="w-full border p-2 rounded text-white"
                  required
                />
                <label className="block text-sm font-medium mb-1 text-black">Email</label>
                <input
                  type="email"
                  value={values.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="w-full border p-2 rounded text-white"
                  required
                />
                <label className="block text-sm font-medium mb-1 text-white">Message</label>
                <input
                  type="text"
                  value={values.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className="w-full border p-2 rounded text-white"
                  required
                />
                <label className="block text-sm font-medium mb-1 text-white">Age</label>
                <select
                  value={values.age}
                  onChange={(e) => handleChange('age', e.target.value)}
                  className="w-full border p-2 rounded text-white bg-black"
                  required
                >
                  <option value="" disabled>Select an age...</option>
                  <option value="+18">+18</option>
                  <option value="-18">-18</option>
                </select>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-2 mt-6">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 border rounded hover:bg-gray-100 text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
