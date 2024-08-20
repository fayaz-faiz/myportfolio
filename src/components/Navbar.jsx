
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaVoicemail, FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion"
import { MdContactPhone } from "react-icons/md";



const Navbar = () => {
    return (
        <nav className="
        flex item-center justify-between py-1">
            <div
                className="flex flex-shrink-0 items-center p-3 cursor-pointer">
                <motion.h1
                    initial={{ scale: 0 }}
                    // animate='visible'
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 1.1 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 1
                    }}
                >
                    <a href="#Contact">FA</a>
                </motion.h1>
                {/* <img
                    src={logo}
                    alt="logo"
                    className="w-12 h-12 object-contain" // Tailwind CSS classes for size and fit
                /> */}
            </div>
            <div className="m-8 flex itme-center justify-center gap-4 text-2xl">
                <motion.div
                    whileHover={{ scale: 2, rotate: 360 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: "100%"
                    }}
                >
                    <a href="https://www.linkedin.com/in/fayaz6">
                        <FaLinkedin className="cursor-pointer" />
                    </a>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 2, rotate: 360 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: "100%"
                    }}
                >
                    <a href="https://github.com/fayaz-faiz">
                        <FaGithub className="cursor-pointer" />
                    </a>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 2, rotate: 360 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: "100%"
                    }}
                >
                    <a href="mailto:fayazbasha.faiz@gmail.com">
                        <MdEmail className="cursor-pointer" />
                    </a>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 2, rotate: 360 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: "100%"
                    }}
                >
                    <a href="tel:+91 8341458393">
                        <MdContactPhone className="cursor-pointer" />
                    </a>
                </motion.div>
            </div>
        </nav>
    )
}

export default Navbar