import { cyberImg, noorShop } from "@/public/assets";
import firstproject from '../public/assets/images/firstproject.png';
import secondproject from '../public/assets/images/secondproject.png';
import thirdproject from '../public/assets/images/thirdproject.jpg';
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Built" titleNo="III" />
      {/* ============ project One Start here ================ */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://www.instagram.com/reel/C8fOU4HSHj3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={firstproject}
                alt="firstImg"
              />
              <div className="absolute w-full h-full rounded-lg top-0 left-0 duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textYellow text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">KindyMan On Abu Dhabi TV</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              I edited a video for <span className="text-textYellow">Kindyman</span>, showcased on{" "}
              <span className="text-textYellow">Abu Dhabi TV</span>, 
              that tells a children's story
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>adobe premiere pro</li>
              <li>Adobe After Effects</li>
              <li>Adobe Photoshop</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textYellow duration-300"
                href="https://www.instagram.com/reel/C8fOU4HSHj3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://www.instagram.com/reel/C27oGl-Sv85/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={secondproject}
                alt="cyberImg"
              />
              <div className="absolute w-full h-full rounded-lg top-0 left-0"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textYellow text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Haifa's Trip On The Borders Of Palestine</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
              I Worked on editing the video in which haifa appeared and met with {" "}
              <span className="text-textYellow">Palestinian children</span>.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>adobe premiere pro</li>
              <li>Adobe After Effects</li>
              <li>Adobe Photoshop</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textYellow duration-300"
                href="https://www.instagram.com/reel/C27oGl-Sv85/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://www.instagram.com/reel/C63EWc9yMn_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={thirdproject}
                alt="noorShop"
              />
              <div className="absolute w-full h-full rounded-lg top-0 left-0"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textYellow text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Get ready to Summer with Al Kabayel</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
              I worked on a video for{" "}
              <span className="text-textYellow">Taghred Tayeb</span>, where I edited the video in order to make it suitable for advertising for{" "} 
              <span className="text-textYellow">alkabayel barsha</span>.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>adobe premiere pro</li>
              <li>Adobe After Effects</li>
              <li>Adobe Photoshop</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textYellow duration-300"
                href="https://www.instagram.com/reel/C63EWc9yMn_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Three End here ================== */}
      </div>
    </section>
  );
};

export default Projects;
