import Logo from "../Header/Logo";
import {
  GithubIcon,
  LinkedinIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
  FacebookIcon,
} from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";
import PropType from "prop-types";
const PersonalDetail = (props) => {
  return (
    <div className="dark:bg-dark text-dark dark:text-light p-5 mx-5 md:mx-11 md:p-11">
      <Logo name={props.name} />
      <h1 className="font-bold text-3xl md:text-4xl mt-6 max-w-xl">
        {props.header}
      </h1>
      <p className="mt-7 text-md md:text-lg max-w-2xl text-gray">
        {props.detail}
      </p>

      <div className="sm:flex items-center mt-6">
        <a
          href={siteMetadata.linkedin}
          className="inline-block w-5 h-5 mr-7"
          aria-label="Reach out to me via LinkedIn"
          target="_blank"
        >
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.twitter}
          className="inline-block w-5 h-5 mr-7"
          aria-label="Reach out to me via Twitter"
          target="_blank"
        >
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.github}
          className="inline-block w-5 h-5 mr-7"
          aria-label="Check my profile on Github"
          target="_blank"
        >
          <GithubIcon className="  hover:scale-125 transition-all ease duration-200 dark:fill-light" />
        </a>
        <a
          href={siteMetadata.facebook}
          className="inline-block w-5 h-5 mr-7"
          aria-label="Check my profile on Dribbble"
          target="_blank"
        >
          <FacebookIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>
    </div>
  );
};

export default PersonalDetail;

PersonalDetail.propTypes = {
  header: PropType.string,
  name: PropType.string,
  detail: PropType.any,
};
