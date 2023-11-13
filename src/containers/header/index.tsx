import Image from "next/image";
import HeaderMenu from "./menu";

const Header = () => {
  return (
    <header className="absolute w-full z-50 ">
      <div className="container pt-8 sm:pt-12">
        <div className="flex justify-between">
          <Image
            src="/images/mongabay-logo.png"
            width={182}
            height={27}
            alt="logo"
            className="invert object-contain"
          />
          <HeaderMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
