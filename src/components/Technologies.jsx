import React, { useState, useRef, useEffect } from 'react';
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const technologies = [
    {
        id: 1,
        icon: <RiReactjsLine className="text-6xl text-cyan-400" />,
        title: 'React',
        description: 'A JavaScript library for building user interfaces.'
    },
    {
        id: 2,
        icon: <FaNodeJs className="text-6xl text-green-500" />,
        title: 'Node.js',
        description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine.'
    },
    {
        id: 3,
        icon: <BiLogoPostgresql className="text-6xl text-blue-500" />,
        title: 'PostgreSQL',
        description: 'An open-source object-relational database system.'
    },
    {
        id: 4,
        icon: <DiRedis className="text-6xl text-red-500" />,
        title: 'Redis',
        description: 'An in-memory data structure store, used as a database, cache, and message broker.'
    },
    {
        id: 5,
        icon: <SiMongodb className="text-6xl text-green-700" />,
        title: 'MongoDB',
        description: 'A NoSQL database designed for scalability and flexibility.'
    },
    {
        id: 5,
        icon: <SiMongodb className="text-6xl text-green-700" />,
        title: 'MongoDB',
        description: 'A NoSQL database designed for scalability and flexibility.'
    },
];

const Technologies = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);
    const intervalRef = useRef(null);

    const visibleCount = 3;
    const cardWidth = 320; // Width of the card including padding
    const gap = 16; // Gap between cards

    // Scroll to the next slide
    const nextSlide = () => {
        const totalCards = technologies.length;
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
    };

    // Scroll to the previous slide
    const prevSlide = () => {
        const totalCards = technologies.length;
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? (totalCards - 1) : prevIndex - 1
        );
    };

    // Start continuous scrolling
    const startAutoScroll = () => {
        intervalRef.current = setInterval(nextSlide, 3000);
    };

    // Stop continuous scrolling
    const stopAutoScroll = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    // Start automatic scrolling when the component mounts
    useEffect(() => {
        startAutoScroll();
        return () => stopAutoScroll(); // Clean up interval on unmount
    }, []);

    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl font-bold text-cyan-500"
            >
                Technologies
            </motion.h1>

            <div className="relative overflow-hidden px-4 lg:px-0">
                <div className="relative overflow-hidden">
                    <div
                        ref={carouselRef}
                        className="relative flex flex-nowrap"
                        style={{ width: `${(cardWidth + gap) * technologies.length}px` }}
                    >
                        <div
                            className="flex flex-nowrap"
                            style={{
                                transform: `translateX(-${currentIndex * (cardWidth + gap)}px)`,
                                transition: 'transform 0.5s ease-in-out',
                                display: 'flex',
                                width: `${(cardWidth + gap) * technologies.length}px`,
                            }}
                        >
                            {technologies.map((tech) => (
                                <motion.div
                                    initial='hidden'
                                    animate='visible'
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 1.1 }}
                                    key={tech.id}
                                    className="flex-shrink-0 w-64 cursor-pointer h-64 md:w-72 md:h-72 p-6 bg-gray-800 rounded-lg border-4 border-neutral-800 flex flex-col items-center justify-center shadow-lg mx-2"
                                >
                                    {tech.icon}
                                    <div className="mt-4 text-center text-white">
                                        <h3 className="text-xl font-semibold">{tech.title}</h3>
                                        <p className="mt-2 text-sm">{tech.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-lg"
                    >
                        &lt;
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-lg"
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Technologies;
