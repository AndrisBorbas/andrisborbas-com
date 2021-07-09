import {
	Box,
	ChakraProvider,
	Grid,
	Heading,
	Kbd,
	Link as ChakraLink,
	Text,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { CVMarker } from "@/components/cv/CVMarker";
import { CVTitle, SideBySide, TwoLiner, XP } from "@/components/cv/XP";
import { Layout } from "@/components/Layout";
import { cvTheme } from "@/styles/theme";

import me from "../../../public/assets/images/me.png";

export default function Cv() {
	return (
		<Layout>
			<Head>
				<title>András Borbás&apos;s CV</title>
			</Head>
			<Heading
				as="h1"
				size="2xl"
				mb="8"
				css={css`
					@media print {
						& {
							display: none;
						}
					}
				`}
			>
				CV
			</Heading>
			<Heading
				as="h3"
				size="md"
				fontWeight="normal"
				mb="8"
				css={css`
					@media print {
						& {
							display: none;
						}
					}
				`}
			>
				Print this page <Kbd>CTRL</Kbd> / <Kbd>⌘</Kbd> + <Kbd>P</Kbd>, to
				download my résumé. (A3 paper size recommended)
			</Heading>
			<ChakraProvider theme={cvTheme}>
				<Box
					bgColor="white"
					shadow="0 2px 5px 3px rgba(0, 0, 0, 0.3)"
					color="gray.800"
					p="8"
					// minW={1140}
					pos="relative"
					css={css`
						@media print {
							& {
								margin: 2rem 1rem 2rem 1rem;
							}
						}
					`}
				>
					{/* Heading */}

					<Grid
						templateColumns={["1fr", "1fr", "1fr 2fr"]}
						gap="8"
						css={css`
							@media print {
								& {
									grid-template-columns: 1fr 2fr;
								}
							}
						`}
					>
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
						<TwoLiner
							title="Budapest University of Technology and Economics"
							description="Computer Engineering BSc"
						/>
						<CVTitle>2013-2018</CVTitle>
						<TwoLiner
							title="Fazekas Mihály High School Debrecen"
							description="Computer and English / German language class"
						/>
					</Grid>

					{/* Skills */}

					<CVMarker>Skills*</CVMarker>
					<Grid templateColumns="1fr 3fr" gap={4} mt={2}>
						<CVTitle>Languages</CVTitle>
						<Grid templateColumns="auto auto 2fr" gap={2} mb={2}>
							<XP level={3}>
								<SideBySide title="Hungarian" description="Native Speaker" />
							</XP>
							<XP level={3}>
								<SideBySide
									title="English"
									description="C2 level Cambridge Certificate"
								/>
							</XP>
							<XP level={1}>
								<SideBySide title="German" description="Very Basic" />
							</XP>
						</Grid>

						<CVTitle>Programming Languages</CVTitle>
						<Grid templateColumns="auto auto 2fr" gap={2} mb={2}>
							<XP level={3}>
								<SideBySide title="HTML / CSS" description="Create websites" />
							</XP>
							<XP level={3}>
								<SideBySide
									title="JS / TS"
									description="Create functional websites"
								/>
							</XP>
							<XP level={2}>
								<SideBySide
									title="Java / C#"
									description="Develop complete applications"
								/>
							</XP>
							<XP level={2}>
								<SideBySide
									title="C / C++"
									description="Develop with custom libraries"
								/>
							</XP>
						</Grid>

						<CVTitle>Software</CVTitle>
						<Grid templateColumns="auto 1fr 2fr" gap={2}>
							<XP level={3}>
								<SideBySide
									title="Unreal Engine 4"
									description="Shaders, gameplay features, level design"
								/>
							</XP>
							<XP level={3}>
								<SideBySide
									title="Substance Designer"
									description="Create organic and artificial materials"
								/>
							</XP>
							<XP level={2}>
								<SideBySide
									title="Perforce / Git"
									description="Set up and maintain large projects"
								/>
							</XP>
							<XP level={2}>
								<SideBySide
									title="Photoshop"
									description="Edit and create photos/illustrations"
								/>
							</XP>
							<XP level={2}>
								<SideBySide
									title="Illustrator"
									description="Create illustrations/mockups"
								/>
							</XP>
							<XP level={2}>
								<SideBySide
									title="DaVinci Resolve / Premiere Pro"
									description="Cut and edit movies"
								/>
							</XP>
							<XP level={1}>
								<SideBySide
									title="Blender"
									description="Model low poly and hard surface meshes"
								/>
							</XP>
							<XP level={1}>
								<SideBySide
									title="Unity"
									description="Basic gameplay features"
								/>
							</XP>
						</Grid>
					</Grid>

					{/* BottomText */}

					<Text fontSize="sm" mt={12} align="right">
						<Box as="span" fontWeight="bold" fontSize="md">
							*
						</Box>
						The marks represent experience relative to each other
					</Text>
					<Text
						fontSize="xs"
						mt={4}
						align="right"
						display="none"
						css={css`
							@media print {
								& {
									display: block;
								}
							}
						`}
					>
						This PDF was generated from my website{" "}
						<ChakraLink color="blue.500" href="https://andrisborbas.com">
							https://andrisborbas.com
						</ChakraLink>
					</Text>
				</Box>
			</ChakraProvider>
		</Layout>
	);
}
