import HeaderMenu from './menu';

const Header = () => {
  return (
    <header className="absolute z-50 w-full ">
      <div className="container pt-8 sm:pt-12">
        <div className="flex justify-between">
          <img
            src="/images/mongabay-logo.png"
            width={182}
            height={27}
            alt="logo"
            className="object-contain invert"
          />
          <HeaderMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
