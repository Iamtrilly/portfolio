" use client ";

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://youtube.com/@iamishyy?si=JXkSKC6bYnrJhi6p",
    name: <RiYoutubeFill />,
  },
  {
    path: "https://www.linkedin.com/in/charles-misheto-0721aa257/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/Iamtrilly",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.instagram.com/iamishyy_/",
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
