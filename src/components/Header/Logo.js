"use client";
import Image from "next/image";
import Link from "next/link";
import profileImg from "@/public/profile-img.jpeg";
import PropType from "prop-types";
import { TypeAnimation } from "react-type-animation";
import { redirect } from "next/navigation";
const Logo = (props) => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
      <div className="rounded-full overflow-hidden border border-solid border-dark dark:border-gray mr-2 md:mr-4 w-16">
        <Image
          onClick={(e) => redirect("/")}
          src={profileImg}
          alt="TK logo"
          className="rounded-full hover:grayscale"
          sizes=""
          priority
        />
      </div>
      <TypeAnimation
        cursor={false}
        preRenderFirstString={true}
        sequence={["I am", 4500, "Je suis", 4500]}
        repeat={Infinity}
        className="font-bold dark:font-semibold text-xl md:text-2xl mr-1"
      />
      <TypeAnimation
        cursor={false}
        sequence={["TYKEA. ", 900, "TK. ", 900, "error. ", 900]}
        repeat={Infinity}
        className="font-bold dark:font-semibold text-xl md:text-2xl text-accent dark:text-accentDark"
      />
    </Link>
  );
};

export default Logo;

Logo.propTypes = {
  name: PropType.string,
};
