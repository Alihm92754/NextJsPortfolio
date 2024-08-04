import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const Google = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Video Editor
        <span className="text-textYellow tracking-wide">@One Digital Mena</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jun 2023 - April 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textYellow mt-1">
            <TiArrowForward size={24} />
          </span>
            Edited videos from raw footage to final product.
            Ensured each edit met the creative vision and technical standards.

        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textYellow mt-1">
            <TiArrowForward size={24} />
          </span>
            Re-edited previously made videos to enhance their appeal for social media platforms.
            Improved video quality, pacing, and overall engagement.

        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textYellow mt-1">
            <TiArrowForward size={24} />
          </span>
           Contributed creative ideas and concepts for video projects.
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textYellow mt-1">
            <TiArrowForward size={24} />
          </span>
            Optimized videos for various social media platforms, ensuring maximum reach and engagement.
        </li>
      </ul>
    </motion.div>
  );
};

export default Google;
