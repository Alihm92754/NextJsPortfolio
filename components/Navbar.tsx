import { useRef } from "react";
import logo from "../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SlSocialYoutube } from "react-icons/sl";
import { SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion";
import { AiFillHome } from "react-icons/ai";
import { FaBookReader } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaDiagramProject } from "react-icons/fa6";
import { GrContact } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Navbar = () => {
  const ref = useRef<string | any>("");
  const [show, setShow] = useState(false);
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShow(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    // Update the class name of the clicked link
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  function handleClick(e: any) {
    if (e.target.contains(ref.current)) {
      // do something with myRef.current
      setShow(false);
    }
  }
  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
    <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
      {/* ============ Logo Start here ============ */}
      <Link href="#home">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          className="flex items-center"
        >
          <Image 
            className="w-32 md:w-32 lg:w-40 xl:w-48" // Responsive width classes
            src={logo}
            alt="logo"
            layout="intrinsic" 
          />
        </motion.div>
      </Link>
      {/* ============ Logo End here ============== */}
      {/* ============ ListItem Start here ======== */}
      <div className="hidden mdl:inline-flex items-center gap-7">
        <ul className="flex text-[13px] gap-7">
          <Link
            className="flex items-center gap-1 font-medium text-textDark relative group cursor-pointer duration-300 nav-link"
            href="#home"
            onClick={handleScroll}
          >
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="link"
            >
              Home
            </motion.li>
          </Link>

          <Link
            className="flex items-center gap-1 font-medium text-textDark relative group cursor-pointer duration-300 nav-link"
            href="#about"
            onClick={handleScroll}
          >
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.1 }}
              className="link"
            >
              About
            </motion.li>
          </Link>
          <Link
            className="flex items-center gap-1 font-medium text-textDark relative group cursor-pointer duration-300 nav-link"
            href="#experience"
            onClick={handleScroll}
          >
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.2 }}
              className="link"
            >
              Experience
            </motion.li>
          </Link>
          <Link
            className="flex items-center gap-1 font-medium text-textDark relative group cursor-pointer duration-300 nav-link"
            href="#project"
            onClick={handleScroll}
          >
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.3 }}
              className="link"
            >
              Projects
            </motion.li>
          </Link>
          <Link
            className="flex items-center gap-1 font-medium text-textDark relative group cursor-pointer duration-300 nav-link"
            href="#contact"
            onClick={handleScroll}
          >
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.4 }}
              className="link"
            >
              Contact Us
            </motion.li>
          </Link>
        </ul>
        <a href="/assets/hammoud-resume.pdf" target="_blank">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="px-4 py-2 rounded-md text-textYellow text-[13px] border border-textYellow hover:bg-hoverColor duration-300"
          >
            Resume
          </motion.button>
        </a>
      </div>
        {/* ============== Small Icon Start here =========== */}
        <div
          onClick={() => setShow(true)}
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textYellow cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-[2px] bg-textYellow inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textYellow inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textYellow inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
        {show && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className="absolute mdl:hidden top-0 right-0 w-full h-screen  bg-black bg-opacity-50 flex flex-col items-end"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative"
            >
              <MdOutlineClose
                onClick={() => setShow(false)}
                className="text-3xl text-textYellow cursor-pointer hover:text-textDark absolute top-4 right-4"
              />
              <div className="flex flex-col items-center gap-7">
                <ul className="flex flex-col text-base gap-7">
                  <Link
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textYellow cursor-pointer duration-300 nav-link"
                    href="#home"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
                    >
                      <div className="flex items-center justify-center gap-1 font-medium cursor-pointer duration-300 about-icon">
                        <AiFillHome className="w-4 h-4 text-textYellow" />
                        <span className="text-textDark hover:text-textYellow">Home</span>
                      </div>
                    </motion.li>
                  </Link>

                  <Link
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textYellow cursor-pointer duration-300 nav-link"
                    href="#about"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2, ease: "easeIn" }}
                    >
                      <div className="flex items-center justify-center gap-1 font-medium cursor-pointer duration-300 about-icon">
                        <FaBookReader className="w-4 h-4 text-textYellow" />
                        <span className="text-textDark hover:text-textYellow">About</span>
                      </div>

                    </motion.li>
                  </Link>
                  <Link
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textYellow cursor-pointer duration-300 nav-link"
                    href="#experience"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.3, ease: "easeIn" }}
                    >
                      <div className="flex items-center justify-center gap-1 font-medium cursor-pointer duration-300 about-icon">
                        <BsPersonWorkspace className="w-4 h-4 text-textYellow" />
                        <span className="text-textDark hover:text-textYellow">Experience</span>
                      </div>
                    </motion.li>
                  </Link>
                  <Link
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textYellow cursor-pointer duration-300 nav-link"
                    href="#project"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.4, ease: "easeIn" }}
                    >
                      <div className="flex items-center justify-center gap-1 font-medium cursor-pointer duration-300 about-icon">
                        <FaDiagramProject className="w-4 h-4 text-textYellow" />
                        <span className="text-textDark hover:text-textYellow">Project</span>
                      </div>
                    </motion.li>
                  </Link>
                  <Link
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textYellow cursor-pointer duration-300 nav-link"
                    href="#contact"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.5, ease: "easeIn" }}
                    >
                      <div className="flex items-center justify-center gap-1 font-medium cursor-pointer duration-300 about-icon">
                        <GrContact  className="w-4 h-4 text-textYellow" />
                        <span className="text-textDark hover:text-textYellow">Contact Us</span>
                      </div>
                    </motion.li>
                  </Link>
                </ul>
                <a href="/assets/hammoud-resume.pdf" target="_blank">
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, ease: "easeIn" }}
                    className="w-32 h-10 rounded-md text-textYellow text-[13px] border border-textYellow hover:bg-hoverColor duration-300"
                  >
                    Resume
                  </motion.button>
                </a>
                <div className="flex gap-4">
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, ease: "easeIn" }}
                    href="https://wa.me/message/MZ3C3ZOJDVJTB1"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textYellow text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textYellow cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <FaWhatsapp />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.85, ease: "easeIn" }}
                    href="https://youtube.com/@alaahmmoud?si=zVYsWLceqzXUp9X7"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textYellow text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textYellow cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <SlSocialYoutube />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9, ease: "easeIn" }}
                    href="https://www.linkedin.com/in/alaahmmoud/"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textYellow text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textYellow cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <SlSocialLinkedin />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.95, ease: "easeIn" }}
                    href="https://www.tiktok.com/@alaahammoud96?_t=8nK1Qn51yf2&_r=1"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textYellow text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textYellow cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <FaTiktok />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, ease: "easeIn" }}
                    href="https://www.instagram.com/alaahmmoud?igsh=MTlqdzBoODkxamFscg%3D%3D&utm_source=qr"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textYellow text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textYellow cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <SlSocialInstagram />
                    </span>
                  </motion.a>
                </div>
              </div>

              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, ease: "easeIn" }}
                className="text-sm w-72 tracking-widest text-textYellow text-center mt-4"
                href="mailto:alaahmmoud.info@gmail.com"
              >
                <p>alaahmmoud.info@gmail.com</p>
              </motion.a>
            </motion.div>
          </div>
        )}
        {/* ============== Small Icon End here ============= */}

        {/* ============ ListItem End here ========== */}
      </div>
    </div>
  );
};

export default Navbar;
