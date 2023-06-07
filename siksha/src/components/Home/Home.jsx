import React from 'react';
import './Home.css';
import {
  Heading,
  Stack,
  VStack,
  Text,
  Button,
  Image,
  Box,
  HStack,
} from '@chakra-ui/react';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';

import { DiAws } from 'react-icons/di';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/bg.png';
import introVideo from '../../assets/videos/intro.mp4';
const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height={'100%'}
          justifyContent={['center', 'space-between']}
          alignItems={'center'}
          spacing={['16', '56']}
        >
          <VStack
            width={'full'}
            alignItems={['center', 'flex-end']}
            spacing={8}
          >
            <Heading children="LEARN FROM THE EXPERTS" size={'2xl'} />
            <Text
              textAlign={['center', 'left']}
              children="Find Valueable Courses At Reasonable Price"
            />
            <Link to={'/courses'}>
              <Button size={'lg'} colorScheme="yellow">
                Explore Now
              </Button>
            </Link>
          </VStack>
          <div className="">
            <Image
              className="vector-graphics"
              boxSize={['lg', 'md']}
              src={logo}
              objectFit={'contain'}
            />
          </div>
        </Stack>
      </div>
      <Box padding={'8'} bg={'blackAlpha.800'} width={'full'}>
        <Heading
          children="OUT BRANDS"
          textAlign={'center'}
          fontFamily={'body'}
          color={'yellow.400'}
        />
        <HStack
          className="brandsBanner"
          justifyContent={'space-evenly'}
          marginTop={4}
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>
      <div className="container2">
        <video
          autoPlay
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
        ></video>
      </div>
    </section>
  );
};

export default Home;
