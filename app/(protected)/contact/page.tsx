'use client';

import { type FormEvent, useState } from 'react';
import Modal from "../../components/Modal";

type ContactEntry = {
    name: string;
    email: string;
    message: string;
    age: string;
};

export default function Contact() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        const name = formData.get('name')?.toString().trim() ?? '';
        const email = formData.get('email')?.toString().trim() ?? '';
        const message = formData.get('message')?.toString().trim() ?? '';
        const age = formData.get('age')?.toString().trim() ?? '';

        if (!name || !email || !message || !age) {
            alert('Please fill in your name, email, and message.');
            return;
        }

        const existing = JSON.parse(localStorage.getItem('contacts') || '[]') as ContactEntry[];
        const user: ContactEntry = { name, email, message, age };

        existing.push(user);
        localStorage.setItem('contacts', JSON.stringify(existing));

        setModalMessage(`Thanks for contacting us, ${name}!`);
        setIsModalOpen(true);
        form.reset();
    }

    return (
        <div className="mx-auto mb-10 mt-10 max-w-md rounded-xl border border-gray-100 bg-black p-10 shadow-md">
            <h2 className="mb-5 text-center text-3xl font-bold">Contact Form</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
                <label htmlFor="name" className="mb-1 block text-sm font-semibold text-white">
                    Name:
                </label>
                <input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="mx-auto w-full rounded-lg border border-gray-100 p-3"
                />

                <label htmlFor="email" className="mb-1 block text-sm font-semibold text-white">
                    Email:
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    className="mx-auto w-full rounded-lg border border-gray-100 p-3"
                />

                <label htmlFor="message" className="mb-1 block text-sm font-semibold text-white">
                    Message:
                </label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    className="mx-auto min-h-24 w-full rounded-lg border border-gray-100 p-3"
                />

                <label htmlFor="age" className="mb-1 block text-sm font-semibold text-white">
                    Age:
                </label>
                <select
                    id="age"
                    name="age"
                    className="mx-auto min-h-10 w-full rounded-lg border border-gray-100 p-2"
                    defaultValue=""
                >
                    <option value="" disabled className="bg-black">
                        Please choose an option
                    </option>
                    <option value="-18" className="bg-black">-18</option>
                    <option value="+18" className="bg-black">+18</option>
                </select>

                <button type="submit" className="w-full rounded-lg bg-gray-700 px-4 py-2 font-medium hover:bg-gray-800">
                    Submit
                </button>
            </form>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <p className="text-lg font-medium text-white">{modalMessage}</p>
            </Modal>
        </div>
    );
}