import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import axios from "axios";
import { fadeDownVariant, animationContainer } from "../animations/animationUtils";
import Loader from "./Loader";

export default function MainComponent() {
    const [films, setFilms] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const apiUrl = import.meta.env.VITE_FILM_URL;

    const fetchFilms = () => {
        setIsLoading(true);
        axios
            .get(apiUrl)
            .then((res) => setFilms(res.data))
            .catch((err) => console.error("Errore nel fetch dei film:", err))
            .finally(() => setIsLoading(false));
    };

    useEffect(() => {
        fetchFilms();
    }, []);

    if(isLoading) return <Loader/>

    return (
        <section className="mx-16 my-4">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={animationContainer}
                className="text-center pb-10"
            >
                <motion.h1
                    variants={fadeDownVariant}
                    className="text-5xl font-bold tracking-wide text-blue-600"
                >
                    Bool Films
                </motion.h1>
                <motion.h2
                    variants={fadeDownVariant}
                    className="py-2 text-3xl italic font-semibold"
                >
                    The nerdest film community
                </motion.h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:mx-24 auto-rows-fr">
                {films.map((film, index) => (
                    <motion.div
                        key={film.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.4,
                            ease: "easeOut",
                        }}
                    >
                        <Card film={film} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
