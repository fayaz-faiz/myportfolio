import { HERO_CONTENT } from "../constants";
import profilepIc from "../assets/faiz.jpg";
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})

const Hero = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-30'>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <p>Hi,There its me</p>
                        <motion.h1
                            variants={container(0)}
                            initial='hidden'
                            animate='visible'
                            // whileHover={{ scale: 1.05 }}
                            // whileTap={{ scale: 1.1 }}
                            whileHover={{ scale: 1.1, rotate: 2 }}
                            whileTap={{
                                scale: 0.8,
                                rotate: 10,
                                borderRadius: "100%"
                            }}
                            // drag="x"
                            // onClick={() => { clickHandler }}
                            className="pb-6 text-6xl 
                            bg-gradient-to-r from-pink-700 via-slate-100 
                            to-purple-500 bg-clip-text cursor-pointer
                            text-transparent
                            font-thin tracking-tight 
                            lg:text-6xl">

                            Fayaz Basha Shaik
                        </motion.h1>
                        <motion.div
                            className="box"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                        </motion.div>
                        <motion.span
                            variants={container(1)}
                            initial='hidden'
                            animate='visible'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 1.1 }}
                            className="bg-gradient-to-r from-pink-300 via-slate-500 
                        to-purple-200 bg-clip-text text-4xl tracking-tight text-transparent">
                            Full Stack Developer
                        </motion.span>
                        <motion.div
                            variants={container(2)}
                            initial='hidden'
                            animate='visible'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 1.1 }}
                            className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            {HERO_CONTENT.map((ele) => (
                                <ul className="list-disc pl-5">
                                    <li className="text-lg font-semibold">{ele.title}</li>
                                </ul>
                            ))}
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 1.2 }}
                    className="w-full lg:w-1/2 lg:p-8 cursor-pointer">
                    <motion.img
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        src={profilepIc}
                        alt="fayazpng"
                        className="w-150 h-50 px-12" // Adjust width, height, and border-radius using Tailwind CSS classes
                    />

                </motion.div>
            </div>
        </div>
    )
}

export default Hero;