import Button from '@/components/button';
import {
  AccordionRoot,
  AccordionHeader,
  AccordionContent,
  AccordionItem,
} from '@/components/accordion';
import Icon from '@/components/icon';
import { TOOLS } from '@/constants';
import ArrowUpRightIcon from '@/styles/icons/arrow-up-right.svg?sprite';

const accordionItems = [
  {
    title: 'What does the Mongabay Data Studio do?',
    content: (
      <div className="space-y-6">
        <p>
          Mongabay specializes in <span className="font-bold">data-driven storytelling</span> that
          leverages environmental science to produce{' '}
          <span className="font-bold">original, timely, actionable news</span>. This capability
          includes building novel technologies, producing impactful journalism and mobilizing
          interdisciplinary teams to tackle complex challenges. The Mongabay Data Studio is
          especially interested in taking on projects that are:
        </p>
        <ul className="ml-6 list-disc space-y-4">
          <li>
            Surfacing patterns of environmental change by leveraging{' '}
            <span className="font-bold">near-real time satellite imagery</span> to add evidence and
            urgency to news.
          </li>
          <li>
            Generating <span className="font-bold">high-resolution 3D imagery</span> and{' '}
            <span className="font-bold">video</span> to create compelling, immersive visual
            storytelling.
          </li>
          <li>
            Harnessing the growing capacity of{' '}
            <span className="font-bold">artificial intelligence</span> to detect and predict land
            use change
          </li>
          and volumes in trade of commodities like minerals, timber and palm oil.
          <li>
            Tapping into <span className="font-bold">on-the-ground journalism</span> networks in
            combination with <span className="font-bold">scientific research</span> to fill
          </li>
          knowledge gaps about environmental challenges and solutions.
          <li>
            Developing a new generation of{' '}
            <span className="font-bold">scientific communicators</span> through projects focused on
            training,
          </li>
          networking and mentoring an active global community.
        </ul>
      </div>
    ),
  },
  {
    title: 'How to get involved?',
    content: (
      <div className="space-y-6">
        <p>
          We&apos;re open to collaborating with new partners and financial supporters to{' '}
          <span className="font-bold">scale up our unique data journalism work</span>. Here are a
          few ways to collaborate with and support the Mongabay Data Studio:
        </p>
        <p>
          <span className="font-bold">Pitch a story:</span> Mongabay Data Studio includes a global
          network of journalists who work in collaboration with technologists, researchers and
          designers capable of gathering information from the world&apos;s most remote corners via
          local sources and advanced Earth observation data. Journalists can pitch data-driven
          reporting for any of our Special Reporting Projects
        </p>
        <p>
          <span className="font-bold">Build with us:</span> We work with data from reputable
          platforms and build tools that enhance transparency and facilitate access to vital
          information across sectors. If you have credible data that needs to be more accessible,
          please contact us by email.
        </p>
        <p>
          <span className="font-bold">Propose new research:</span> Mongabay Data Studio can be
          engaged to create bespoke research reports. Our project-led nature enables diverse experts
          to coalesce around a specific issue or area to produce new knowledge. If you have research
          needs, please contact us by email.
        </p>
      </div>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="font-open">
      <div className="bg-green-gradient">
        <div className="inline-flex w-full flex-col items-center justify-start gap-10 px-10 py-20">
          <div className="flex flex-col justify-center gap-6 sm:items-center">
            <div className="sm:text-center">
              <span className="font-open text-3xl font-light leading-10 text-secondary sm:text-6xl">
                We are nonprofit.
              </span>
            </div>
            <div className="max-w-96 font-open text-base font-normal leading-snug text-secondary sm:text-center">
              Help us tell stories of biodiversity loss, climate change & socio-environmental
              injustice.
            </div>
          </div>
          <div className="flex w-full items-center justify-center gap-8 px-8 py-3">
            <Button
              className="w-full bg-secondary text-center font-open text-base font-semibold leading-normal text-teal-950 sm:w-auto"
              href="https://donate.mongabay.org/"
            >
              Donate
              <Icon icon={ArrowUpRightIcon} className="ml-8 inline h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className="space-y-10 bg-secondary py-20 text-primary sm:space-y-20">
        <div className="container space-y-10 font-open font-light sm:space-y-20 sm:text-center">
          <div className="sm-space-y-20 max-w-[746px] space-y-10 sm:mx-auto">
            <h2 className="text-3xl leading-tight sm:text-6xl">
              Do you want to learn more and collaborate?
            </h2>
            <p className="text-2xl leading-tight sm:text-3xl">
              The Mongabay Data Studio is an open space to convene interdisciplinary teams and
              collaborate to tackle complex challenges.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="rounded-[32px] border border-primary px-10 text-primary sm:mx-auto">
            <AccordionRoot type="multiple">
              {accordionItems.map(({ title, content }, index) => (
                <AccordionItem
                  key={title}
                  className="space-y-6 border-b border-primary py-10 last-of-type:border-b-0"
                  value={`item-${index}`}
                >
                  <AccordionHeader className="flex w-full items-center justify-between">
                    <span className="text-start font-open text-xl font-light sm:text-3xl sm:leading-10">
                      {title}
                    </span>
                  </AccordionHeader>
                  <AccordionContent className="AccordionContent font-open text-base font-normal leading-normal data-[state='open']:slide-in-from-top-4">
                    {content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </AccordionRoot>
          </div>
        </div>
      </div>

      <div className="gap-10 space-y-10 bg-emerald-700 px-10 py-20 font-open">
        <div className="flex flex-col justify-center gap-6 sm:items-center">
          <div className="text-3xl font-light text-white sm:text-center sm:text-6xl">
            Do you have questions?
          </div>
          <div className="text-base font-normal text-white sm:text-center">
            We are here to help and answer any enquiries you may have.
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            href="mailto:info@mongabay.org"
            className="w-full bg-white text-center text-base font-semibold leading-normal text-emerald-700 sm:w-auto"
          >
            Get in Touch <Icon icon={ArrowUpRightIcon} className="mb-1 ml-8 inline h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="container py-20">
        <div className="max-w-xl space-y-4">
          <img
            src="/images/mongabay-logo.png"
            width={182}
            height={27}
            alt="logo"
            className="object-contain invert"
          />
          <p className="text-sm leading-[24px] text-black/60">
            Mongabay is a U.S.-based non-profit conservation and environmental science news
            platform. Our EIN or tax ID is 45-3714703.
          </p>
        </div>
        <div className="mx-auto flex w-full flex-row gap-x-5 gap-y-6 py-11 sm:gap-y-0 lg:gap-x-10">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-1  text-sm sm:text-base">
              <p className="flex-0 flex-shrink-0 font-semibold leading-normal text-black">
                Data Tools
              </p>
              <div className="h-px flex-1 border-b border-black/10"></div>
            </div>
            <ul className="space-y-2  text-sm sm:text-base">
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
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-1">
              <p className=" flex-0 flex-shrink-0 text-sm font-semibold leading-normal text-black sm:text-base">
                Social Media
              </p>
              <div className="h-px flex-1 border-b border-black/10"></div>
            </div>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <a
                  href="https://www.linkedin.com/company/mongabay/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@MongabayTV/featured"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Youtube
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/mongabay"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/mongabay"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-4 h-px flex-1 border-b border-black/10"></div>
        <div className="text-right text-sm font-normal leading-normal text-black/60">
          <p>© 2023 Copyright Conservation news</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
