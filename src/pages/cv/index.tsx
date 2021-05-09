import { AspectRatio, Box, Flex, Grid, Heading } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";

import { Layout } from "@/components/Layout";

export default function CVPage() {
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
									//	borderRadius: "100%",
									// borderBottomLeftRadius: "50%",
									// clipPath: "polygon(100% 0, 100% 88%, 50% 100%, 0 100%, 0 0)",
								},
							}}
						>
							<Image src="/assets/images/me.png" quality={100} layout="fill" />
						</AspectRatio>
					</Box>

					<Box p="4">
						<Heading as="h2" size="4xl" color="gray.600" fontWeight="bold">
							András Borbás
						</Heading>
						<Heading as="h3" size="2xl" color="gray.700" fontWeight="bold">
							developer, designer
						</Heading>
					</Box>
				</Grid>
			</Box>
		</Layout>
	);
}
