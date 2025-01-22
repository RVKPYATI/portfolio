import Link from "next/link";
import { FC, JSX } from "react";

import { FaGithub } from "react-icons/fa";

interface SocialProps {
  containerStyles?: string;
  iconStyles?: string;
}

interface SocialItem {
  icon: JSX.Element;
  path: string;
}

const socials: SocialItem[] = [
  { icon: <FaGithub />, path: "https://github.com/RVKPYATI/" },
];

export const Social: FC<SocialProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};
