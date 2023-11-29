import { TOOLS } from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-primary-green text-white font-open">
      <div className="mx-auto w-full container flex sm:flex-row flex-col gap-y-6 gap-x-8 sm:gap-y-0 lg:gap-x-0 justify-between py-11">
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
          <a
            href="https://www.linkedin.com/company/mongabay/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block"
          >
            <img
              className="w-6 h-6 fill-white stroke-white"
              src="/images/linkedin.svg"
              width={24}
              height={24}
              alt="linkedin"
            />
          </a>
        </div>
      </div>
      <div className="bg-primary-green-dark">
        <p className="container mx-auto py-3 font-light text-sm">
          <span className="text-lg font-bold">©</span> Mongabay 2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;
