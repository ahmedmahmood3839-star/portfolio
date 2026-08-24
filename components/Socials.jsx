import Link from "next/link";
import {
  RiYoutubeLine,
  RiFacebookLine,
  RiGithubLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "YouTube",
    link: "https://www.youtube.com/@AhmadMehmood-d6j",
    Icon: RiYoutubeLine,
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=61587796406931",
    Icon: RiFacebookLine,
  },
  {
    name: "Github",
    link: "https://github.com/Vantara-Digital",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className="bg-accent/90 hover:bg-accent text-white rounded-full p-[7px] transition-all duration-300 flex items-center justify-center text-xl shadow-lg shadow-accent/20 hover:scale-110"
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
