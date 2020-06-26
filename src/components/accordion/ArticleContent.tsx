import {
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Flex,
  Image,
  Link,
} from '@chakra-ui/core';
import { css } from '@emotion/core';
import React, { useState } from 'react';
import Linkify from 'react-linkify';

interface ArticleContentProps {
  titleText: string;
  contentText: string;
  imagePath: string;
  videoPath: string;
}

export default function ArticleContent({
  titleText,
  contentText,
  imagePath,
  videoPath,
}: ArticleContentProps): JSX.Element {
  const [state, setstate] = useState(false);
  return (
    <>
      <AccordionButton>
        <Box flex="1" textAlign="left">
          {titleText}
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4}>
        <Box position="relative" flexDirection="column">
          {imagePath !== '' && videoPath === '' && (
            <Image float="right" src={imagePath} ml={4} mb={4} maxW={400} />
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
              minW="280px"
              maxW="575px"
              // pt="33%"
              w="33%"
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
            componentDecorator={(decoratedHref, decoratedText, key) => (
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
            {contentText}
          </Linkify>{' '}
        </Box>
      </AccordionPanel>
    </>
  );
}
