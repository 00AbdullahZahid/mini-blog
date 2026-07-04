'use client';

import { type FormEvent } from 'react';

export default function Contact() {
    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        debugger
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        const name = formData.get('name');

        if (typeof name === 'string' && name.trim()) {
            alert(`Thanks for contacting us, ${name}!`);
        } else {
            alert('Please enter your information.');
        }
    }

    return (
        
            <div className="max-w-md mx-auto mt-10 p-10 bg-black rounded-xl shadow-md border border-gray-100 mb-10">
                <h2 className="mb-5 text-center font-bold text-3xl">Contact Form</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <label htmlFor="name" className="block text-sm font-semibold text-white-700 mb-1">Name:</label>
                    <input id="name" name="name" placeholder="Your name" className="w-full mx-auto p-3 rounded-lg border border-gray-100"/>

                    <label htmlFor="email" className="block text-sm font-semibold text-white-700 mb-1">Email:</label>
                    <input id="email" name="email" placeholder="Your Email" className="w-full mx-auto p-3 rounded-lg border border-gray-100"/>

                    <label htmlFor="Age" className="block text-sm font-semibold text-white-700 mb-1">Age:</label>
                    <select className="w-full mx-auto p-3 rounded-lg border border-gray-100">
                        <option value="Minor" className="bg-black">Minor</option>
                        <option value="Adult" className="bg-black">Adult</option>
                    </select>

                    <button type="submit" className="w-full bg-gray-700 hover:bg-gray-800 font-medium py-2 px-4 rounded-lg">Submit</button>
                </form>
            </div>
    );
}
