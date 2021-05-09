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
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import type { Asset } from "contentful";
import React from "react";

type ArticleContentProps = {
	date: string;
	titleText: string;
	previewText: React.ReactNode;
	previewImage: Asset | undefined;
	previewVideo: Asset | undefined;
};

export default function PostPreview({
	date,
	titleText,
	previewText,
	previewImage,
	previewVideo,
}: ArticleContentProps): JSX.Element {
	return (
		<>
			<AccordionButton py={3}>
				<Box flex="1" textAlign="left">
					<Heading size="lg">{titleText}</Heading>
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
					pb={4}
				>
					{previewImage !== undefined && previewVideo === undefined && (
						<Image
							src={previewImage.fields.file.url}
							ml={[0, 0, 4]}
							mb={["1rem", "1rem", "auto"]}
							// maxW={400}
							minW={["100%", "280px"]}
							boxShadow="rgba(0, 0, 0, 0.3) 0px 0.5rem 1rem 0px,
												 rgba(0, 0, 0, 0.3) 0px 1rem 2rem 0px"
							borderRadius="15px"
							maxW={["100%", "100%", "50%", "33%"]}
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
								src={previewVideo.fields.file.url}
								poster={previewImage ? previewImage.fields.file.url : ""}
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

					<Box pb={2}>{previewText}</Box>
				</Flex>
			</AccordionPanel>
		</>
	);
}
