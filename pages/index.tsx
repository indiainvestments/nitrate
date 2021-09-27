import { NavTextLink } from '../components/nav-text-link';
import { useDarkMode } from '../hooks/use-dark-mode';
import { CategoryInfoProps, CategoryInfo } from '../components/category-info';

const navLinkTexts = ['Explore', 'FAQ', 'About'];

const DUMMY_ROUTE = '/dummy';

const categoryInfoData: CategoryInfoProps[] = [
  {
    heading: 'Indian Equity Index Funds',
    description:
      'Participate in the India growth story by investing in the top stocks from Nifty, Sensex, and other indices.',
    linkText: 'See 346 funds',
  },
  {
    heading: 'Indian Debt Index Funds',
    description:
      'Invest in high quality, diversified, fixed income instruments for steady growth.',
    linkText: 'See 3 funds',
  },
  {
    heading: 'US Equity Index Funds',
    description:
      'Invest in top US multinationals in NASDAQ, S&P500, and other indices.',
    linkText: 'See 3461 funds',
  },
  {
    heading: 'Strategic Index Funds',
    description:
      'Invest in factor based and quantitative index funds, with higher historic equity premium.',
    linkText: 'See 346 funds',
  },
].map(info => ({
  ...info,
  link: DUMMY_ROUTE,
}));

function textToLink(text: string): string {
  return text?.toLowerCase();
}

const Nitrate: React.FC = () => {
  const [mountedOnClient, switchTheme] = useDarkMode();

  return (
    <div className="min-h-screen antialiased bg-gray-100 dark:bg-nitrate-dark-fill">
      <main className="sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1280px] lg:px-4 xl:px-0 mx-auto flex flex-col justify-start">
        <header className="w-full">
          <nav className="top-0 grid grid-cols-[12rem,1fr]">
            {/* Branding */}
            <div className="col-span-1 col-start-1 px-4 py-4 bg-nitrate dark:bg-nitrate/70 sm:rounded-bl-md">
              <h1 className="text-lg leading-5 text-white">
                Passive
                <br aria-hidden />
                Fund Catalogue
              </h1>
            </div>
            {/* Rest of the NAV on mobile  */}
            <div className="flex flex-col justify-center pr-4 md:hidden bg-nitrate dark:bg-nitrate/70 sm:rounded-br-md">
              <button
                className="inline-flex self-end px-2 py-2 border rounded border-white/60"
                type="button"
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            {/* Rest of the nav  */}
            <div className="hidden md:rounded-br-md md:bg-white md:dark:bg-nitrate-text md:shadow-sm md:px-3 md:py-3 md:grid md:grid-cols-[1fr,3rem] lg:grid-cols-[1fr,14rem,3rem]">
              {/* Search box  */}
              <form className="relative mr-8 rounded-md">
                <input
                  className="w-full px-3 py-3 placeholder-current border-2 rounded-md dark:border-nitrate-border/40 dark:bg-nitrate-text text-nitrate-text/70 focus:outline-none focus:border-2 focus:border-nitrate dark:focus:border-nitrate dark:text-nitrate/70"
                  placeholder="Start your search here..."
                />
                <span className="absolute inset-y-0 right-0 inline-flex flex-col items-center justify-center pr-3">
                  <button
                    className="transition-colors hover:text-nitrate-text dark:text-nitrate/70 dark:hover:text-nitrate"
                    type="button"
                  >
                    Advanced Search
                  </button>
                </span>
              </form>
              {/* Links  */}
              <div className="hidden lg:flex lg:items-center lg:space-x-6 lg:text-nitrate-text">
                {navLinkTexts.map(linkText => (
                  <NavTextLink
                    href={textToLink(linkText)}
                    key={linkText}
                    linkText={linkText}
                  />
                ))}
              </div>
              {/* Theme switcher  */}
              <div className="hidden lg:flex lg:flex-col lg:justify-center lg:items-center">
                <button
                  className="inline-flex"
                  onClick={mountedOnClient ? switchTheme : undefined}
                  type="button"
                >
                  <svg
                    className="w-6 h-6 transition-colors text-nitrate-text dark:text-white/70 dark:hover:text-white"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.25 10.5V6M22.5 8.25H18M15.75 2.25v3M17.25 3.75h-3M20.312 14.31A8.628 8.628 0 019.69 3.689h0a8.626 8.626 0 1010.623 10.623h0z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col items-center justify-center lg:hidden">
                <button className="inline-flex" type="button">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      fillRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
        </header>

        <div className="w-full mt-5 bg-gray-500 h-96" />
        {/* card group */}
        <div className="grid grid-cols-1 gap-4 px-4 pt-8 md:grid-cols-2 lg:grid-cols-4 sm:px-0">
          {categoryInfoData.map(info => (
            <CategoryInfo key={info.heading} {...info} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Nitrate;
