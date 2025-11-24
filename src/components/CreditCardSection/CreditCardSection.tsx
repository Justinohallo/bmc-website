"use client";

import { Box, Heading, Text, Flex, Container } from '@chakra-ui/react';
import { content } from '@/content';
import { renderRichTextContent } from '@/content/utils/render-content';

export const CreditCardSection = () => {
    const creditCardBlock = content.getContentBlockBySlug('credit-card-problem');
    const creditCardImage = creditCardBlock?.media?.[0] ? content.getMediaAssetById(creditCardBlock.media[0].id) : null;

    if (!creditCardBlock) return null;

    return (
        <Box 
            bg="#F5F5F5" 
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
                        maxW={{ base: "100%", xl: "450px" }}
                    >
                        <Heading 
                            as="h2"
                            fontSize={{ base: "32px", md: "40px", lg: "40px", xl: "32px" }}
                            fontWeight="700"
                            lineHeight="1.2"
                            mb={6}
                            color="black"
                        >
                            {creditCardBlock.title}
                        </Heading>

                        {creditCardBlock.content.blocks.map((block, index) => {
                            if (block.type === 'text') {
                                return (
                                    <Text 
                                        key={index}
                                        fontSize={{ base: "16px", md: "20px" }}
                                        lineHeight="1.4"
                                        mb={block === creditCardBlock.content.blocks[creditCardBlock.content.blocks.length - 1] ? 0 : 5}
                                        color="black"
                                    >
                                        {renderRichTextContent({ blocks: [block] })}
                                    </Text>
                                );
                            }
                            return null;
                        })}
                    </Box>

                    {/* Right Side - Credit Card Image */}
                    {creditCardImage && (
                        <Box 
                            flex="1"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Box
                                as="img"
                                src={creditCardImage.path}
                                alt={creditCardImage.alt}
                                maxW={{ base: "250px", sm: "300px", md: "400px", lg: "450px", xl: "400px" }}
                                w="100%"
                                h="auto"
                                sx={{
                                    imageRendering: 'auto',
                                    WebkitUserSelect: 'none',
                                    userSelect: 'none',
                                }}
                            />
                        </Box>
                    )}
                </Flex>
            </Container>
        </Box>
    );
};


