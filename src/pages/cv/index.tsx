import {
	Box,
	ChakraProvider,
	Grid,
	Heading,
	Link as ChakraLink,
	Text,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { CVMarker } from "@/components/cv/CVMarker";
import { CVTitle } from "@/components/cv/CVTitle";
import { XP } from "@/components/cv/XP";
import { Layout } from "@/components/Layout";
import { cvTheme } from "@/styles/theme";

import me from "../../../public/assets/images/me.png";

export default function Cv() {
	return (
		<Layout>
			<ChakraProvider theme={cvTheme}>
				<Head>
					<title>András Borbás&apos;s CV</title>
				</Head>
				<Heading as="h1" size="2xl" mb="8">
					CV
				</Heading>
				<Box
					bgColor="white"
					shadow="0 2px 5px 3px rgba(0, 0, 0, 0.3)"
					color="gray.800"
					p="8"
					// minW={1140}
					pos="relative"
				>
					{/* Heading */}

					<Grid templateColumns={["1fr", "1fr", "1fr 2fr"]} gap="8">
						<Box
							p="4"
							pos="relative"
							h="fit-content"
							backgroundColor="hsl(219, 26.38%, 50.69%)"
							clipPath="polygon(50% 100%, 100% 88%, 100% 0, 50% 0, 0 12%, 0 100%)"
						>
							<Box
								// ratio={1}
								// maxW="100%"
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
									src={me}
									quality={100}
									placeholder="blur"
									layout="responsive"
									alt="Self portrait"
									priority
								/>
							</Box>
						</Box>

						<Box>
							<Heading as="h2" size="4xl" color="gray.600">
								András Borbás
							</Heading>
							<Heading as="h3" size="2xl" color="gray.700">
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
							<CVMarker>About me</CVMarker>
							<Text fontSize="xl" mt={2}>
								I really enjoy creating websites and games and problem-solving
								in any field, but mostly in programming. My hobbies include
								developing/playing computer games and helping others to debug
								issues.
							</Text>
						</Box>
					</Grid>

					{/* Separator */}

					<Grid templateColumns="1fr 2fr 1fr" mt={4} mb={4}>
						<Box
							transform="skewY(-15deg)"
							transformOrigin="top right"
							h={1}
							bgColor="hsl(219, 26.38%, 50.69%)"
						/>
						<Box transform="" h={1} bgColor="hsl(219, 26.38%, 50.69%)" />
						<Box
							transform="skewY(-15deg)"
							transformOrigin="bottom left"
							h={1}
							bgColor="hsl(219, 26.38%, 50.69%)"
						/>
					</Grid>

					{/* Education */}

					<CVMarker>Education</CVMarker>
					<Grid templateColumns="1fr 3fr" gap={4} mt={2}>
						<CVTitle>2018-2022</CVTitle>
						<Box>
							<Heading as="h5" fontSize="2xl" fontWeight="medium">
								Budapest University of Technology and Economics
							</Heading>
							<Heading as="h6" size="md" fontWeight="light">
								Computer Engineering BSc
							</Heading>
						</Box>
						<CVTitle>2013-2018</CVTitle>
						<Box>
							<Heading as="h5" fontSize="2xl" fontWeight="medium">
								Fazekas Mihály High School Debrecen
							</Heading>
							<Heading as="h6" size="md" fontWeight="light">
								Computer and English / German language class
							</Heading>
						</Box>
					</Grid>

					{/* Skills */}

					<CVMarker>Experience*</CVMarker>
					<Grid templateColumns="1fr 3fr" gap={4} mt={2}>
						<CVTitle>Languages</CVTitle>
						<Grid templateColumns="auto auto 2fr" gap={2}>
							<XP title="Hungarian" description="Native Speaker" level={3} />
							<XP
								title="English"
								description="C2 level Cambridge Certificate"
								level={3}
							/>
							<XP title="German" description="Very Basic" level={1} />
						</Grid>
						<CVTitle>Programming Languages</CVTitle>
						<Grid templateColumns="auto auto 2fr" gap={2}>
							<XP title="HTML / CSS" description="Create websites" level={3} />
							<XP
								title="JS / TS"
								description="Create functional websites"
								level={3}
							/>
							<XP title="C / C++" description="" level={2} />
							<XP title="Java / C#" description="" level={2} />
						</Grid>
					</Grid>

					{/* BottomText */}

					<Text fontSize="sm" mt={8}>
						<Box as="span" fontWeight="bold" fontSize="md">
							*
						</Box>
						The marks represent experience relative to each other
					</Text>
				</Box>
			</ChakraProvider>
		</Layout>
	);
}
