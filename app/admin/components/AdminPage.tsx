"use client";

import postBackend from '@/helpers/postBackend';

import React, { useState } from 'react';
import { useRouter } from "next/navigation";

const AdminPage = () => {

    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    const router = useRouter();

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setError('');

        // Basic client-side validation
        if (!formData.email || !formData.password) {
            setError('Email and password are required.');
            return;
        }

        try {
            const loginInfo = {
            "email": formData.email,
            "password": formData.password,
            "salt": ""
            };

            const response = postBackend(loginInfo, "admin");
            if ((await response).ok) {
            console.log('Form submitted successfully');
            router.push("addProject");
            } else {
            console.error('Form submission failed');
            window.alert(`Wrong email and/or password`);
            // Handle error (e.g., show an error message)
            }
        }
        catch (error) {
            console.error('An error occurred', error);
        }
    };
    

    return (
        <div className="
            overflow-y-auto
            overflow-x-hidden
            h-[100dvh]
        ">
            {/* Desktop */}
            <div className="
                hidden
                mt-[20dvh]
                md:flex
                flex-col
                justify-center
                ml-[25vw]
                w-[50vw]
                items-center
                h-fit
                border
                rounded-lg
            ">
                <h1 className="text-5xl text-white font-semibold mt-[100px]">
                    {"Login"}
                </h1>
                <form onSubmit={handleSubmit} className="text-2xl mt-[100px] flex flex-col items-center">
                    <input
                        type="text"
                        name="email"
                        className="
                            text-white
                            border-none
                            outline-none
                            bg-transparent
                            w-[40vw]
                        "
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <div className="w-[40vw] h-[2px] bg-black"></div>
                    <input
                        type="password"
                        name="password"
                        className="
                            text-white
                            border-none
                            outline-none
                            bg-transparent
                            w-[40vw]
                            mt-[100px]
                        "
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    <div className="w-[40vw] h-[2px] bg-black"></div>
                    <button type="submit" className="mt-[100px] mb-[100px] text-white border rounded-full py-5 px-40 bg-[#483D8B]">Login</button>
                </form>
                {error && <p className="text-red-500 text-xl mb-[100px]">{error}</p>}
            </div>

            {/* Mobile */}
            <div className="
                md:hidden
                mt-[15dvh]
                sm:flex
                flex-col
                justify-center
                ml-[2.5vw]
                w-[95vw]
                items-center
                h-fit
                border
                rounded-lg
                text-center
            ">
                <h1 className="text-5xl text-white font-semibold mt-[100px]">
                    {"Login"}
                </h1>
                <form onSubmit={handleSubmit} className="text-2xl mt-[50px] flex flex-col items-center">
                    <input
                        type="text"
                        name="email"
                        className="
                            text-white
                            border-none
                            outline-none
                            bg-transparent
                            w-[90vw]
                        "
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <div className="w-[90vw] h-[2px] bg-black"></div>
                    <input
                        type="password"
                        name="password"
                        className="
                            text-white
                            border-none
                            outline-none
                            bg-transparent
                            w-[90vw]
                            mt-[100px]
                        "
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    <div className="w-[90vw] h-[2px] bg-black"></div>
                    <button type="submit" className="mt-[50px] mb-[50px] text-white border rounded-full py-2 px-5 bg-[#483D8B]">Login</button>
                </form>
                {error && <p className="text-red-500 text-xl mb-[50px]">{error}</p>}
            </div>
        </div>
    );
};

export default AdminPage;