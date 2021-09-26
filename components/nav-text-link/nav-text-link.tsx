import Link from 'next/link';

interface NavTextLinkProps {
  href: string;
  linkText: string;
}

function NavTextLink(props: Readonly<NavTextLinkProps>): JSX.Element {
  return (
    <Link href={props.href}>
      <a
        className="transition-transform-colors hover:text-nitrate hover:scale-105 dark:text-nitrate/70"
        href={props.href}
      >
        {props.linkText}
      </a>
    </Link>
  );
}

export default NavTextLink;
