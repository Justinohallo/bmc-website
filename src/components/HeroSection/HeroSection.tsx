"use client";

import { Box, Heading, Text, Button, Flex, Container } from '@chakra-ui/react';
import { content } from '@/content';
import { renderRichTextContent } from '@/content/utils/render-content';

export const HeroSection = () => {
    const heroBlock = content.getContentBlockBySlug('hero-value-proposition');
    const primaryCTA = heroBlock?.callToActions?.[0] ? content.getCallToActionById(heroBlock.callToActions[0].id) : null;
    const secondaryCTA = heroBlock?.callToActions?.[1] ? content.getCallToActionById(heroBlock.callToActions[1].id) : null;
    const heroImage = heroBlock?.media?.[0] ? content.getMediaAssetById(heroBlock.media[0].id) : null;

    const handleExternalAction = (target: string) => {
        if (typeof window !== 'undefined') {
            window.open(target, "_blank", "noopener,noreferrer");
        }
    };

    if (!heroBlock) return null;

    return (
        <Box 
            bg="white" 
            pt={{ base: "100px", md: "130px", lg: "130px", xl: "170px" }}
            pb={{ base: "30px", md: "50px", lg: "50px", xl: "45px" }}
            px={{ base: "20px", md: "40px", lg: "40px", xl: "60px" }}
        >
            <Container>
                <Flex 
                    direction={{ base: "column", xl: "row" }}
                    align="center"
                    justify="space-between"
                    gap={{ base: "0px", md: "20px", lg: "20px", xl: "60px" }}
                >
                    {/* Left Side - Text Content */}
                    <Box 
                        flex="1" 
                        maxW={{ base: "100%", xl: "550px" }}
                    >
                        <Heading 
                            as="h1"
                            fontSize={{ base: "40px", md: "56px", lg: "56px", xl: "70px" }}
                            fontWeight="700"
                            lineHeight="1.1"
                            mb={{base: "30px", md: "40px", lg: "40px", xl: "40px"}}
                            color="black"
                            maxW={{ base: "100%", xl: "550px" }}
                        >
                            {heroBlock.title}
                        </Heading>

                        <Text 
                            fontSize={{ base: "16px", md: "18px", lg: "18px", xl: "20px" }}
                            lineHeight="1.4"
                            mb={{base: "15px", md: "40px", lg: "40px", xl: "20px"}}
                            color="black"
                            maxW={{ base: "100%", xl: "460px" }}
                        >
                            {renderRichTextContent(heroBlock.content)}
                        </Text>
                    </Box>

                    {/* Right Side - 3D Image */}
                    {heroImage && (
                        <Box 
                            flex="1"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            width={{ base: "280px", sm: "400px", md: "500px", lg: "600px", xl: "800px" }}
                            maxW="100%"
                        >
                            <Box
                                as="img"
                                src={heroImage.path}
                                alt={heroImage.alt}
                                width="100%"
                                height="auto"
                            />
                        </Box>
                    )}
                </Flex>
                 {/* Buttons */}
                 <Flex 
                            gap={{ base: "20px", md: "30px", lg: "30px", xl: "20px" }} 
                            mt={{ base: "40px", md: "50px", lg: "50px", xl: "20px" }}
                            direction="row"
                            flexWrap="wrap"
                            align="center"
                            justify={{ base: "center", md: "center", lg: "center", xl: "flex-start" }}
                        >
                            {primaryCTA && (
                                <Button
                                    as="a"
                                    href={primaryCTA.target}
                                    bg="#FFC533"
                                    color="black"
                                    fontSize={{ base: "14px", md: "16px", lg: "16px", xl: "16px" }}
                                    fontWeight="700"
                                    textTransform="uppercase"
                                    width={{ base: "100%", md: "300px", lg: "300px", xl: "326px" }}
                                    height="46px"
                                    borderRadius="5px"
                                    border="2px solid #000"
                                    flexShrink={0}
                                    boxSizing="border-box"
                                    _hover={{
                                        bg: "#E8B02E"
                                    }}
                                    transition="all 0.2s"
                                >
                                    {primaryCTA.label}
                                </Button>
                            )}

                            {secondaryCTA && (
                                <Button
                                    onClick={() => handleExternalAction(secondaryCTA.target)}
                                    bg="white"
                                    color="black"
                                    fontSize={{ base: "14px", md: "16px", lg: "16px", xl: "16px" }}
                                    fontWeight="700"
                                    textTransform="uppercase"
                                    width={{ base: "100%", md: "300px", lg: "300px", xl: "326px" }}
                                    height="46px"
                                    borderRadius="5px"
                                    border="2px solid #000"
                                    flexShrink={0}
                                    boxSizing="border-box"
                                    _hover={{
                                        bg: "#F0F0F0"
                                    }}
                                    transition="all 0.2s"
                                >
                                    {secondaryCTA.label}
                                </Button>
                            )}
                        </Flex>
            </Container>
        </Box>
    );
};

