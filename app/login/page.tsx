'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });

    const data = await res.json();

    if (res.ok) {
      router.push('/dashboard');
    } else {
      setError(data?.error || 'Invalid password');
    }
  };

  return (
    <div className="mx-auto mb-10 mt-10 max-w-md rounded-xl border border-gray-100 bg-black p-15 shadow-md" 
        style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <h2 className="text-center font-bold  mb-3">Enter Password</h2>
        <input 
          type="password"
          className="mx-auto mb-4 bg-black text-center font-semibold border border-white rounded-lg p-3" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Your Password"
          required
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button
          type="submit"
          className="mx-auto w-40 rounded-full border bg-gray-700 p-1 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
