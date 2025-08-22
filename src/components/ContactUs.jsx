import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
export function ContactUs() {
  return (
    <nav className="flex flex-row flex-wrap border-t-4 border-zinc-900 dark:border-zinc-400 p-1 md:p-4">
      <div className="basis-1/2 md:basis-sm ">
        <IoIosMail className="size-6 md:size-8 fill-zinc-900 dark:fill-zinc-400" />
        <FaLinkedin className="size-6 md:size-8 fill-zinc-900 dark:fill-zinc-400" />
      </div>
      <div className="basis-1/2 md:basis-sm ">
        <IoLogoWhatsapp className="size-6 md:size-8 fill-zinc-900 dark:fill-zinc-400" />
        <IoLogoGithub className="size-6 md:size-8 fill-zinc-900 dark:fill-zinc-400" />
      </div>
      <div className="basis-full md:basis-lg ">
        <FaLocationDot className="size-6 md:size-8 fill-zinc-900 dark:fill-zinc-400" />
      </div>
    </nav>
  );
}
