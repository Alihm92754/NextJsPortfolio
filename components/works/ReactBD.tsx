import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const ReactBD = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Videographer & Video Editor
        <span className="text-textYellow tracking-wide"></span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Feb 2018 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textYellow mt-1">
            <TiArrowForward size={24} />
          </span>
          Developed creative concepts and storyboards for various video projects.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textYellow mt-1">
            <TiArrowForward size={24} />
          </span>
          Edited and assembled raw footage into polished, engaging videos.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textYellow mt-1">
            <TiArrowForward size={24} />
          </span>
          Captured high-quality footage using professional cameras and equipment.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textYellow mt-1">
            <TiArrowForward size={24} />
          </span>
          Created tailored videos for different platforms, including YouTube, Instagram, and TikTok.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textYellow mt-1">
            <TiArrowForward size={24} />
          </span>
          Enhanced videos with dynamic transitions and interactive elements.
        </li>
      </ul>
    </motion.div>
  );
};

export default ReactBD;
