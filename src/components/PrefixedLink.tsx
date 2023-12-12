import Link from 'next/link';

const PrefixedLink = ({ href, as = href, children, ...props }: {href: string, as?: string, children?: any, props?: any}) => (
  <Link
    style={{color: '#319795', paddingLeft: '10px' }}
    href={href}
    as={`${process.env.PROJECT_PREFIX}${as}`}
    {...props}
  >
    {children}
  </Link>
);

export default PrefixedLink;