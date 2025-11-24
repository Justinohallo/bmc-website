"use client";

import { Box, Heading, Text, Flex, Container, Link, Image } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export const LocalChampionSection = () => {
    return (
        <Box 
            bg="white" 
            py={{ base: "60px", md: "80px", lg: "100px" }}
            px={{ base: "20px", md: "40px", lg: "60px" }}
        >
            <Container>
                <Flex 
                    direction={{ base: "column", xl: "row" }}
                    align="center"
                    justify="space-between"
                    gap={{ base: "40px", lg: "40px", xl: "80px" }}
                >
                    {/* Left Side - Text Content */}
                    <Box 
                        flex="1" 
                        maxW={{ base: "100%", xl: "600px" }}
                        order={{ base: 1, xl: 1 }}
                    >
                        <Heading 
                            as="h2"
                            fontSize={{ base: "32px", md: "40px", lg: "40px", xl: "32px" }}
                            fontWeight="700"
                            lineHeight="1.2"
                            mb={6}
                            color="black"
                        >
                            Become a Local Champion
                        </Heading>

                        <Text 
                            fontSize={{ base: "16px", md: "20px" }}
                            lineHeight="1.4"
                            mb={4}
                            maxW={{ base: "100%", xl: "450px" }}
                            color="black"
                        >
                            Apply now to help bitcoin grow in a unique and memorable way.
                        </Text>

                        <Text 
                            fontSize={{ base: "16px", md: "20px" }}
                            lineHeight="1.4"
                            mb={4}
                            maxW={{ base: "100%", xl: "440px" }}
                            color="black"
                        >
                            We're looking for natural leaders with deep connections to their local community who can help spread the word about how bitcoin benefits small businesses.
                        </Text>

                        <Text 
                            fontSize={{ base: "16px", md: "20px" }}
                            lineHeight="1.4"
                            mb={6}
                            maxW={{ base: "100%", xl: "440px" }}
                            color="black"
                        >
                            If accepted, we'll send you a box of free Itty Bitty plushies and leave-behind materials that you can use to onboard local merchants or distribute to bitcoiners doing the same.
                        </Text>

                        <Link 
                            href="https://tally.so/r/Bzz5qQ" 
                            fontSize={{ base: "16px", md: "20px" }}
                            fontWeight="700"
                            color="black"
                            textDecoration="underline"
                            display="inline-flex"
                            alignItems="center"
                            gap={2}
                            _hover={{ color: "#00A651" }}
                            isExternal
                        >
                            Apply to become a Local Champion
                            <ExternalLinkIcon />
                        </Link>
                    </Box>

                    {/* Right Side - Itty Bitty Image */}
                    <Box 
                        flex="1"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        order={{ base: 2, xl: 2 }}
                    >
                        <Image
                            src="/assets/LocalChampionImages/LocalChampion.png"
                            alt="Itty Bitty Bitcoin mascot"
                            maxW={{ base: "280px", sm: "320px", md: "350px", lg: "400px", xl: "550px" }}
                            w="100%"
                            h="auto"
                            loading="lazy"
                        />
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};

