import {
	AspectRatio,
	Box,
	Flex,
	Grid,
	Heading,
	Link as ChakraLink,
	Text,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { Layout } from "@/components/Layout";

export default function Cv() {
	return (
		<Layout>
			<Head>
				<title>András Borbás&apos;s CV</title>
			</Head>
			<Heading as="h1" size="2xl" mb="8">
				CV
			</Heading>
			<Box
				bgColor="white"
				shadow="0 2px 5px 3px rgba(0, 0, 0, 0.3)"
				color="black"
				fontFamily="Lato"
				p="8"
				minW={1140}
				pos="relative"
			>
				<Grid templateColumns="1fr 2fr" gap="8">
					<Box
						p="4"
						m="4"
						backgroundColor="hsl(219, 26.38%, 50.69%)"
						clipPath="polygon(50% 100%, 100% 88%, 100% 0, 50% 0, 0 12%, 0 100%)"
					>
						<AspectRatio
							ratio={1}
							maxW="100%"
							backgroundColor="gray.300"
							clipPath="polygon(50% 100%, 100% 88%, 100% 0, 50% 0, 0 12%, 0 100%)"
							sx={{
								"& img": {
									// borderRadius: "100%",
									// borderBottomLeftRadius: "50%",
									// clipPath: "polygon(100% 0, 100% 88%, 50% 100%, 0 100%, 0 0)",
								},
							}}
						>
							<Image
								src="/assets/images/me.png"
								quality={100}
								layout="fill"
								alt="Self portrait"
							/>
						</AspectRatio>
					</Box>

					<Box p="4">
						<Heading
							as="h2"
							size="4xl"
							color="gray.600"
							fontFamily="Lato"
							fontWeight="bold"
						>
							András Borbás
						</Heading>
						<Heading
							as="h3"
							size="2xl"
							color="gray.700"
							fontFamily="Lato"
							fontWeight="bold"
						>
							developer, designer
						</Heading>

						<Link href="mailto:andris.borbas@gmail.com" passHref>
							<ChakraLink>
								<Heading
									as="h4"
									size="lg"
									fontFamily="Lato"
									pt="2"
									color="gray.800"
									_hover={{
										color: "gray.700",
									}}
								>
									andris.borbas@gmail.com
								</Heading>
							</ChakraLink>
						</Link>
					</Box>
				</Grid>
				<Box
					background="gray.700"
					ml="auto"
					w="xs"
					clipPath="polygon(26px 0, 100% 0, 100% 100%, 26px 100%, 0 50%)"
					p="2"
					pr="0"
					mt="-52px"
					color="white"
				>
					<Heading as="h2" size="lg" fontFamily="Lato" textAlign="center">
						About me
					</Heading>
				</Box>
				<Text fontSize="xl">
					I really enjoy creating websites and problem-solving in any field, but
					mostly in programming. My hobbies include developing/playing computer
					games and helping others to debug issussses.
				</Text>
			</Box>
		</Layout>
	);
}
