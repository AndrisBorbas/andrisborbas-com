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
  Link as ChakraLink,
  LinkProps,
  Text,
} from '@chakra-ui/core';
import { css } from '@emotion/core';
import React from 'react';
import ReactMarkdown from 'react-markdown';

interface ArticleContentProps {
  date: string;
  titleText: string;
  previewText: string;
}

export default function PostPreview({
  date,
  titleText,
  previewText,
}: ArticleContentProps): JSX.Element {
  function Link({ href, children, ...restProps }: LinkProps) {
    return (
      <ChakraLink href={href} color="blue.400" {...restProps}>
        {children}
      </ChakraLink>
    );
  }
  const renderers = {
    link: Link,
    root: Text,
  };
  return (
    <>
      <AccordionButton>
        <Box flex="1" textAlign="left">
          <Heading size="lg">{titleText}</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4}>
        <Box flexDirection="column" position="relative">
          <Text
            pb={2}
            fontSize="sm"
            color="gray.500"
            fontWeight="light"
            position="absolute"
            float="left"
            bottom={0}
          >
            {date}
          </Text>
          <Box pb={12}>
            <ReactMarkdown source={previewText} renderers={renderers} />
          </Box>
        </Box>
      </AccordionPanel>
    </>
  );
}
