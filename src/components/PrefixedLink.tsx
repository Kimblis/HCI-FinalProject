import Link from 'next/link';

const PrefixedLink = ({ href, as = href, children, ...props }: {href: string, as?: string, children?: any, props?: any}) => (
  <Link
    color={'teal.500'} 
    href={href}
    as={`${process.env.PROJECT_PREFIX}${as}`}
    {...props}
  >
    {children}
  </Link>
);

export default PrefixedLink;