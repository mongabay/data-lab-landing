import { TOOLS } from '@/constants';

const Footer = () => {
  return (
    <footer className="bg-primary-green font-open text-white">
      <div className="container mx-auto flex w-full flex-col justify-between gap-x-8 gap-y-6 py-11 sm:flex-row sm:gap-y-0 lg:gap-x-0">
        <div className="flex-1">
          <img
            src="/images/mongabay-logo.png"
            width={182}
            height={27}
            alt="logo"
            className="object-contain"
          />
        </div>
        <div className="flex-[2]">
          <ul className="space-y-2">
            {TOOLS.map(({ name, url }) => (
              <li key={name}>
                <a target="_blank" rel="noopener noreferrer" className="hover:underline" href={url}>
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-0 space-y-2 font-semibold">
          <p>Follow us on:</p>
          <a
            href="https://www.linkedin.com/company/mongabay/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block"
          >
            <img
              className="h-6 w-6 fill-white stroke-white"
              src="/images/linkedin.svg"
              width={24}
              height={24}
              alt="linkedin"
            />
          </a>
        </div>
      </div>
      <div className="bg-primary-green-dark">
        <p className="container mx-auto py-3 text-sm font-light">
          <span className="text-lg font-bold">©</span> Mongabay 2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;
