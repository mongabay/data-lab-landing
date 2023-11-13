import { TOOLS } from "@/constants";
import Image from "next/image";
import InstagramIcon from "@/styles/icons/instagram.svg?sprite";
import Icon from "@/components/icon";

const Footer = () => {
  return (
    <footer className="bg-primary-green text-white font-open text-center sm:text-start">
      <div className="mx-auto w-full container flex sm:flex-row flex-col gap-y-6 sm:gap-0 justify-between py-11">
        <div className="flex-1">
          <Image
            src="/images/mongabay-logo.png"
            width={182}
            height={27}
            alt="logo"
            className="object-contain mx-auto sm:mx-0"
          />
        </div>
        <div className="flex-[2]">
          <ul className="space-y-2">
            {TOOLS.map(({ name, url }) => (
              <li key={name}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                  href={url}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="font-semibold space-y-2 flex-0">
          <p>Follow us on:</p>
          {/* TODO: add instagram link */}
          <a href="#">
            <Icon className="w-6 h-6 fill-white" icon={InstagramIcon} />
          </a>
        </div>
      </div>
      <div className="bg-primary-green-dark">
        <p className="container mx-auto py-3 font-light text-sm">
          <span className="text-lg font-bold">©</span> Mongabay 2022
        </p>
      </div>
    </footer>
  );
};

export default Footer;