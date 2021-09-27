export interface CategoryInfoProps {
  heading: string;
  description: string;
  linkText: string;
  link: string;
}

function CategoryInfo({
  heading,
  description,
  link,
  linkText,
}: Readonly<CategoryInfoProps>): JSX.Element {
  return (
    <a
      className="flex flex-col justify-between text-gray-700 bg-white border border-transparent rounded-md shadow-lg dark:text-nitrate-muted dark:bg-nitrate-text hover:border-nitrate focus:outline-none focus:border-nitrate"
      href={link}
    >
      <div className="p-4">
        <h1 className="text-lg font-semibold tracking-tight text-nitrate ">
          {heading}
        </h1>
        {/* TODO: Do we need to line clamp?, and how many lines */}
        <p className="mt-2 font-light line-clamp-2 text-xxs ">{description}</p>
      </div>
      <div className="flex items-center justify-center pt-1 pb-2 text-sm border-t text-nitrate dark:border-nitrate-muted/30">
        {linkText}
      </div>
    </a>
  );
}

export default CategoryInfo;
