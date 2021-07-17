import "./HomePage.css";
import { motion } from "framer-motion";
import plane from "../Images/plane.jpg";

function HomePage() {
  return (
    <div className="homePage">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src={plane} alt="plane" />
      </motion.div>
      <motion.p
        className="welcome"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        Welcome to...
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1.5 }}
        className="openSky"
      >
        OpenSky JS
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1.5 }}
        className="text"
      >
        Press "Airports" to start your search...
      </motion.div>
    </div>
  );
}

export default HomePage;
