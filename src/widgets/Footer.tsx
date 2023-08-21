import FacebookSvg from "@/../public/icons/Facebook.svg";
import InstagramSvg from "@/../public/icons/Instagram.svg";
import TwitterSvg from "@/../public/icons/Twitter.svg";
import LinkList from "@/components/ui/LinkList";
import Logo from "@/components/ui/Logo";
import SocialLink from "@/components/ui/SocialLink";

interface FooterProps {
  className?: string;
}

const links = [
  {
    title: "Company",
    items: { About: "", Careers: "", Logistic: "", "Privacy & Policy": "" },
  },
  { title: "Contact", items: { "Help/FAQ": "", Press: "", Affilates: "" } },
  {
    title: "Press Centre",
    items: { "Press Centre": "", "Our Blog": "", "Low fare tips": "" },
  },
];

const Footer = (props: FooterProps) => {
  return (
    <footer className={"flex pt-[7.5rem] flex-col bg-bg2"}>
      <div className="flex flex-wrap w-full gap-8 pb-6 md:gap-20 px-page">
        <div className="w-[30ch] justify-self-center mr-auto">
          <Logo />
          <p className="mt-6">
            Book your trip in minute, get full Control for much longer.
          </p>
          <nav className="flex gap-5 mt-4 text-[1.2rem]">
            <SocialLink>
              <FacebookSvg />
            </SocialLink>
            <SocialLink theme="primary">
              <InstagramSvg />
            </SocialLink>
            <SocialLink>
              <TwitterSvg />
            </SocialLink>
          </nav>
        </div>

        <div className="flex flex-wrap justify-between max-w-2xl m-4 ml-auto grow">
          {links.map((el) => (
            <LinkList key={el.title} title={el.title} links={el.items} />
          ))}
        </div>
      </div>
      <div className="flex justify-between w-full pt-5 pb-6 border-t-2 border-black/10 px-page">
        <p className="text-base">
          Copyright, Trabook 2024. All rights reserved.
        </p>
        <a className="text-base text-text3" href="">
          Terms & Conditions
        </a>
      </div>
    </footer>
  );
};

export default Footer;
