import React from 'react';
import { Box, CloseButton, Flex, useColorModeValue, Text, BoxProps } from '@chakra-ui/react';

import { NavItem } from './NavItem';
import { HomeOutlined, TeamOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { useAuth } from '@/context/AuthContext';

interface LinkItemProps {
  name: string;
  link: string;
  icon: any;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const LinkItems: Array<LinkItemProps> = [
    { name: 'Home', link: '/', icon: HomeOutlined },
    { name: 'Restaurants', link: '/restaurants', icon: ThunderboltOutlined },
  ];


  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Making the grade
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map(({ name, icon, link }) => (
        <NavItem link={link} key={name} icon={icon}>
          {name}
        </NavItem>
      ))}
    </Box>
  );
};

export default SidebarContent;
