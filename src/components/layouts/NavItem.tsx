import React from 'react';
import { Flex, Icon, FlexProps } from '@chakra-ui/react';
import { ReactText } from 'react';
import Link from 'next/link';

interface NavItemProps extends FlexProps {
  icon: any;
  link: string;
  children: ReactText;
}

export const NavItem = ({ icon, children, link, ...rest }: NavItemProps) => {
  const navPath = `${process.env.PROJECT_PREFIX ? `${process.env.PROJECT_PREFIX}${link}` : link}`
  return (
    <Link href={link} as={`${process.env.PROJECT_PREFIX}${link}`} style={{ textDecoration: 'none' }} >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};
