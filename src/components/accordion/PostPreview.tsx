import { LinkIcon } from "@chakra-ui/icons";
import {
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
	Box,
	Flex,
	Heading,
	Image,
	Img,
	Link,
	Text,
	useToast,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import type { Asset } from "contentful";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import React from "react";

import { PreviewLink } from "./PreviewLink";

const components = { a: PreviewLink };

type ArticleContentProps = {
	date: string;
	id: string;
	titleText: string;
	previewText: MDXRemoteSerializeResult;
	previewImage: Asset | undefined;
	previewVideo: Asset | undefined;
};

export function PostPreview({
	date,
	id,
	titleText,
	previewText,
	previewImage,
	previewVideo,
}: ArticleContentProps): JSX.Element {
	const toast = useToast();

	return (
		<>
			<AccordionButton py={3}>
				<Box flex="1" textAlign="left">
					<Box display="flex" flexDirection="row">
						<Heading
							size="lg"
							id={id}
							mr={1}
							css={css`
								scroll-margin: 90px;
								scroll-margin-top: 90px;
							`}
						>
							{titleText}
						</Heading>
						<Link
							onClick={(e) => {
								e.stopPropagation();
								navigator.clipboard.writeText(
									`${window.location.protocol}//${window.location.hostname}${
										window.location.port ? `:${window.location.port}` : ""
									}/#${id}`,
								);
								toast({
									title: "Copied",
									description: "Copied post link to clipboard.",
									position: "bottom-left",
									status: "info",
									variant: "left-accent",
									duration: 2500,
									isClosable: true,
								});
							}}
							href={`/#${id}`}
							colorScheme="gray"
							variant="ghost"
							aria-label="Share post"
							color="blue.400"
							_hover={{
								color: "blue.300",
							}}
							alignSelf="center"
							mr={3}
						>
							<LinkIcon w={6} h={6} p={1} mb="2px" />
						</Link>
					</Box>
				</Box>
				<AccordionIcon />
			</AccordionButton>
			<AccordionPanel pb={4} position="relative">
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
				<Flex
					flexDir={["column", "column", "row-reverse"]}
					justify="space-between"
					pb={6}
				>
					{previewImage !== undefined && previewVideo === undefined && (
						<Img
							src={previewImage.fields.file?.url}
							ml={[0, 0, 4]}
							mb={["1rem", "1rem", "auto"]}
							// maxW={400}
							minW={["100%", "280px"]}
							boxShadow="rgba(0, 0, 0, 0.3) 0px 0.5rem 1rem 0px,
												 rgba(0, 0, 0, 0.3) 0px 1rem 2rem 0px"
							borderRadius="15px"
							maxW={["100%", "100%", "50%", "33%"]}
							alt={previewImage.fields.title}
						/>
					)}
					{previewVideo !== undefined && (
						<Box
							display="inline-block"
							ml={[0, 0, 4]}
							mb={["1rem", "1rem", "auto"]}
							boxShadow="rgba(0, 0, 0, 0.3) 0px 0.5rem 1rem 0px,
												 rgba(0, 0, 0, 0.3) 0px 1rem 2rem 0px"
							borderRadius="15px"
							minW={["100%", "280px"]}
							maxW={["100%", "100%", "min(575px,50%)", "min(575px,50%)"]}
							// pt="33%"
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
								src={previewVideo.fields.file?.url}
								poster={previewImage ? previewImage.fields.file?.url : ""}
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

					<MDXRemote {...previewText} components={components} lazy />
				</Flex>
			</AccordionPanel>
		</>
	);
}
