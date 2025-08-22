import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
export function ContactUs() {
  return (
    <nav className="flex flex-row text-wrap break-all tracking-tighter md:text-xl md:tracking-wide dark:text-zinc-200 border-t-4 font-web border-zinc-900 dark:border-zinc-400 p-1 md:p-4 justify-center">
      <div className="basis-1/3 md:basis-sm ">
        <a href="mailto:akshaybest3120@gmail.com" className="flex flex-row">
          <IoIosMail className="size-6 md:size-8 fill-zinc-900 dark:fill-zinc-400" />
          akshaybest3120@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/akshay-ken/"
          className="flex flex-row"
        >
          <FaLinkedin className="size-6 md:size-8 fill-zinc-900 dark:fill-zinc-400" />
          linkedin.com/in/akshay-ken/
        </a>
      </div>
      <div className="basis-1/3 md:basis-sm">
        <a href="https://wa.me/7738780272" className="flex flex-row">
          <IoLogoWhatsapp className="size-6 md:size-8 fill-zinc-900 dark:fill-zinc-400" />
          +91 7738380272
        </a>
        <a href="https://github.com/akshay-ken" className="flex flex-row">
          <IoLogoGithub className="size-6 md:size-8 fill-zinc-900 dark:fill-zinc-400" />
          github.com/akshay-ken
        </a>
      </div>
      <div className="basis-1/3 md:basis-lg">
        <a
          href="https://maps.app.goo.gl/acNZQywcyAesxpCo7"
          className="flex flex-row justify-center"
        >
          <FaLocationDot className="size-8 md:size-12 fill-zinc-900 dark:fill-zinc-400" />
          Navi Mumbai, maharashtra <br />
          can re-locate to Pune
        </a>
      </div>
    </nav>
  );
}
