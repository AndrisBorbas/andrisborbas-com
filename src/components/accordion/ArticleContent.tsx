import {
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  Text,
} from '@chakra-ui/core';
import { css } from '@emotion/core';
import React from 'react';
import Linkify from 'react-linkify';

interface ArticleContentProps {
  titleText: string;
  contentText: string;
  imagePath: string;
  videoPath: string;
  height: string[];
  width: string;
  buttonText: string;
  buttonLink: string;
}

export default function ArticleContent({
  titleText,
  contentText,
  imagePath,
  videoPath,
  height,
  width,
  buttonText,
  buttonLink,
}: ArticleContentProps): JSX.Element {
  /*
  function DownloadIcon() {
    return <Icon name="donwload" />;
  }
  */
  return (
    <>
      <AccordionButton>
        <Box flex="1" textAlign="left">
          <Heading size="lg">{titleText}</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4} minH={height[0] === '' ? ['auto'] : height}>
        <Box position="relative" flexDirection="column">
          {imagePath !== '' && videoPath === '' && (
            <Image
              float="right"
              src={imagePath}
              ml={4}
              mb={4}
              // maxW={400}
              minW={['100%', '280px']}
              boxShadow="rgba(0, 0, 0, 0.3) 0px 0.5rem 1rem 0px, rgba(0, 0, 0, 0.3) 0px 1rem 2rem 0px"
              borderRadius="15px"
              w={width}
            />
          )}
          {videoPath !== '' && (
            <Box
              position="relative"
              float="right"
              display="inline-block"
              ml={4}
              mb={4}
              // eslint-disable-next-line max-len
              boxShadow="rgba(0, 0, 0, 0.3) 0px 0.5rem 1rem 0px, rgba(0, 0, 0, 0.3) 0px 1rem 2rem 0px"
              borderRadius="15px"
              minW={['100%', '280px']}
              maxW="575px"
              // pt="33%"
              w={width}
              /* css={css`
                  &::before {
                    padding-top: 100%;
                  }
                `} */
            >
              <Box
                as="video"
                autoPlay
                muted
                loop
                src={videoPath}
                poster={imagePath}
                borderRadius="15px"
                // position="absolute"
                // top={0}
                // bottom={0}
                // left={0}
                w="100%"
                h="100%"
              />
            </Box>
          )}
          <Linkify
            componentDecorator={(
              decoratedHref,
              decoratedText,
              key,
            ): JSX.Element => (
              <Link
                target="blank"
                href={decoratedHref}
                key={key}
                color="blue.300"
              >
                {decoratedText}
              </Link>
            )}
          >
            <Text textAlign="justify">{contentText}</Text>
          </Linkify>{' '}
          <Link href={buttonLink} target="_blank">
            <Button
              mt={4}
              colorScheme="blue"
              color="black" /* leftIcon={<DownloadIcon />} */
            >
              {buttonText}
            </Button>
          </Link>
        </Box>
      </AccordionPanel>
    </>
  );
}
