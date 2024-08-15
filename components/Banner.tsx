import { motion } from "framer-motion";
import backgroundImage from "../public/assets/images/wallpaper.jpg";

const Banner = () => {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const projectSection = document.getElementById('project');
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 bannerBackground"
    >
      
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textYellow"
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Alaa Hammoud.
        <span className="text-textDark mt-2 lgl:mt-4">
          I bring videos to life creatively.
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        With over 5 years of experience, I am a skilled videographer and video editor specializing in social media content, reels, and ads. Mastering Adobe Premiere Pro and After Effects, I transform ideas into dynamic visual narratives that captivate audiences.{" "}
      </motion.p>
      <a href="#project">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="w-52 h-14 text-sm font-titleFont border border-textYellow rounded-md text-textYellow tracking-wide hover:bg-hoverColor duration-300"
          onClick={handleScrollToProjects}
        >
          Check out my projects!
        </motion.button>
      </a>
      
    </section>
  );
};

export default Banner;
