import { menuLinks } from '@/constants';
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
            className="object-contain"
          />
          <ul className="flex gap-10">
            {menuLinks.map((item) => (
              <li
                key={item.title}
                className="hidden font-open text-base font-semibold leading-normal text-secondary hover:underline hover:underline-offset-2 sm:flex"
              >
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
            <li>
              <HeaderMenu />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
