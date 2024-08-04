import { FaWhatsapp } from "react-icons/fa";
import { SlSocialYoutube } from "react-icons/sl";
import { FaTiktok } from "react-icons/fa";
import {
  SlSocialLinkedin,
  SlSocialInstagram,
} from "react-icons/sl";

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4">
        <a href="https://wa.me/message/MZ3C3ZOJDVJTB1" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textYellow cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <FaWhatsapp />
          </span>
        </a>
        <a
          href="https://youtube.com/@alaahmmoud?si=zVYsWLceqzXUp9X7"
          target="_blank"
        >
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textYellow cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialYoutube />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/alaahmmoud/"
          target="_blank"
        >
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textYellow cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialLinkedin />
          </span>
        </a>
        <a href="https://www.tiktok.com/@alaahammoud96?_t=8nK1Qn51yf2&_r=1" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textYellow cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <FaTiktok />
          </span>
        </a>
        <a href="https://www.instagram.com/alaahmmoud?igsh=MTlqdzBoODkxamFscg%3D%3D&utm_source=qr" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textYellow cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialInstagram />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  );
};

export default LeftSide;
