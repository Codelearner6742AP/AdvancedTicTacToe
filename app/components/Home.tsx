"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import tictactoe from "../assets/tictactoe.png";
import "../globals.scss";

const Home: React.FC = () => {
    const router = useRouter();

    const handlePlayClick = () => {
        router.push('/play');
    };

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen text-center text-white">
            <h1 className="text-8xl font-bold bg-clip-text glow glow-hover">
                Tic Tac Toe
            </h1>
            <Image src={tictactoe} alt="Tic Tac Toe" width={300} height={300} className="mt-8 rounded-image zoom-hover" />
            <button onClick={handlePlayClick} className="mt-8 px-6 py-3 text-lg font-semibold text-black bg-white rounded-lg shadow-lg hover:bg-gray-200 glow glow-hover zoom-hover">
                Play
            </button>
            <footer className="absolute bottom-4 text-sm">Made by Ayush Raghuvanshi</footer>
        </div>
    );
};

export default Home;