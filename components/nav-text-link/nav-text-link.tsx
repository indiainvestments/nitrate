import Link from 'next/link';

interface NavTextLinkProps {
  href: string;
  linkText: string;
}

function NavTextLink(props: Readonly<NavTextLinkProps>): JSX.Element {
  return (
    <Link href={props.href}>
      <a
        className="transition-colors hover:text-nitrate dark:text-nitrate/70"
        href={props.href}
      >
        {props.linkText}
      </a>
    </Link>
  );
}

export default NavTextLink;
