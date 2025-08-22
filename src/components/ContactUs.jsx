import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
export function ContactUs() {
  return (
    <nav className="flex flex-row flex-wrap text-sm tracking-tighter md:text-xl md:tracking-wide dark:text-zinc-200 border-t-4 font-web border-zinc-900 dark:border-zinc-400 p-1 md:p-4">
      <div className="basis-1/2 md:basis-sm ">
        <a href="" className="flex flex-row">
          <IoIosMail className="size-6 md:size-8 fill-zinc-900 dark:fill-zinc-400" />
          google
        </a>
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
