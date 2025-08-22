import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
export function ContactUs() {
  return (
    <nav className="flex flex-col md:flex-row border-t-4 border-zinc-900 dark:border-zinc-400">
      <div>
        <IoIosMail />
        <FaLinkedin />
      </div>
      <div>
        <IoLogoWhatsapp />
        <IoLogoGithub />
      </div>
      <div></div>
    </nav>
  );
}
