import { motion } from "framer-motion";
import my_photo from "/assets/socials/my_photo.png";

const variants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const MyPhoto = () => {
  return (
    <div className="flex justify-center">
      <motion.img
        src={my_photo}
        alt="My Photo"
        className="w-48 h-48 mt-6 rounded-full border-4 border-purple-500 shadow-[0_0_30px_rgba(139,92,246,0.8)]"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.2, duration: 0.8 }}
      />
    </div>
  );
};

export default MyPhoto;
