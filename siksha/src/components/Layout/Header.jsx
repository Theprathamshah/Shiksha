import React from 'react';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

import { Link } from 'react-router-dom';

const LinkButton = ({ url = '/', title = 'Home' }) => (
  <Link to={url}>
    <Button variant={'ghost'}>{title}</Button>
  </Link>
);

const Header = () => {
  const user = {
    role: 'admin',
  };
  const logoutHandler = () => {
    console.log('Logout');
  };
  const { isOpen, onClose, onOpen } = useDisclosure();
  const isAuthenticated = true;
  return (
    <>
      <ColorModeSwitcher />
      <Button
        onClick={onOpen}
        colorScheme="yellow"
        width={12}
        height={12}
        rounded={'full'}
        position={'fixed'}
        top={6}
        left={6}
      >
        <RiMenu5Fill />
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={false}>
        <DrawerOverlay backdropFilter={'blur(3px)'} />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'1px'}>Course bundler</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} alignItems={'flex-start'}>
              <LinkButton title="Home" url="/" />
              <LinkButton title="Browse All Courses" url="/courses" />
              <LinkButton title="Request a Course" url="/request" />
              <LinkButton title="Contact Us" url="/contanct" />
              <LinkButton title="About Us" url="/about" />
              <HStack
                justifyContent={'space-evenly'}
                position={'absolute'}
                bottom={'2rem'}
                width={'80%'}
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link to="/profile">
                          <Button colorScheme="yellow" variant={'ghost'}>
                            Profile
                          </Button>
                        </Link>
                        <Button variant={'ghost'} onClick={logoutHandler}>
                          <RiLogoutBoxLine
                            style={{
                              margin: '4px',
                            }}
                          />
                          Logout
                        </Button>
                      </HStack>
                      {user && user.role === 'admin' && (
                        <Link to={'/admin/dashboard'}>
                          <Button colorScheme="purple" varient="ghost">
                            <RiDashboardFill style={{ margin: '4px' }} />
                            Dashboard
                          </Button>
                        </Link>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <Button colorScheme="yellow">Login</Button>
                    </Link>
                    OR
                    <Link to="/signup">
                      <Button colorScheme="yellow">Sign Up</Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
