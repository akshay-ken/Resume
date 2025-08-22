import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
export function ContactUs() {
  return (
    <nav className="flex flex-row flex-wrap border-t-4 border-zinc-900 dark:border-zinc-400">
      <div className="basis-1/2 md:basis-sm bg-rose-400">
        <IoIosMail className="size-6 md:size-8" />
        <FaLinkedin className="size-6 md:size-8" />
      </div>
      <div className="basis-1/2 md:basis-sm bg-lime-400">
        <IoLogoWhatsapp className="size-6 md:size-8" />
        <IoLogoGithub className="size-6 md:size-8" />
      </div>
      <div className="basis-1/2 md:basis-lg bg-red-500">
        <FaLocationDot className="size-6 md:size-8" />
      </div>
    </nav>
  );
}
