import { profileImg } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { TbPointFilled } from "react-icons/tb";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="I" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
          Hello! My name is Alaa Hammoud and I love making videos and social media content. My passion for this field started back in 2018, and since then, I've developed excellent skills in videography and video editing.{" "} 
          <span className="text-textYellow">
          I'm also a Arabic voiceover actor with a great voice, and I have made a lot of projects Using this talent.
          </span>
          </p>
          <p>
            Over the years, I've had the opportunity to work with many celebrities and content creators, on various platforms, which has been an incredible experience. Additionally, I create my own content.{" "}
            <span className="text-textYellow">
               I'm a YouTuber with 72k subscribers and over 15 million total views on my videos.{" "}
            </span>
          </p>
          <p>These are the services I proudly offer to my customers:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textYellow">
              <TbPointFilled />
              </span>
              Video Production
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textYellow">
              <TbPointFilled />
              </span>
              Video Editing
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textYellow">
              <TbPointFilled />
              </span>
              Social Media Videos
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textYellow">
              <TbPointFilled />
              </span>
              Video Ads
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textYellow">
              <TbPointFilled />
              </span>
              Motion Graphics
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textYellow">
              <TbPointFilled />
              </span>
              VoiceOver Ads
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textYellow">
              <TbPointFilled />
              </span>
              Content Creation Consulting
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textYellow">
              <TbPointFilled />
              </span>
              Event Filming
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="profileImg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textYellow/5 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textYellow rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
