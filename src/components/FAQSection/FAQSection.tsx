"use client";

import { Box, Heading, Text, Container, SimpleGrid } from '@chakra-ui/react';
import { content, FAQItem } from '@/content';
import { renderRichTextContent } from '@/content/utils/render-content';

export const FAQSection = () => {
    const faqItems = content.getFAQItems() as FAQItem[];
    const leftColumnItems = faqItems.filter((_, index) => index % 2 === 0);
    const rightColumnItems = faqItems.filter((_, index) => index % 2 === 1);

    return (
        <Box
            bg="white"
            py={{ base: "60px", md: "80px", lg: "100px" }}
            px={{ base: "20px", md: "40px", lg: "60px" }}
        >
            <Container>
                {/* Main Heading */}
                <Heading
                    as="h2"
                    fontSize={{ base: "32px", md: "40px", lg: "40px", xl: "32px" }}
                    fontWeight="700"
                    lineHeight="1.2"
                    mb={{ base: "40px", md: "60px" }}
                    color="black"
                    maxW="480px"
                >
                    Frequently Asked Questions
                </Heading>

                {/* FAQ Grid - 2 columns */}
                <SimpleGrid
                    columns={{ base: 1, xl: 2 }}
                    spacing={{ base: "40px", xl: "60px" }}
                >
                    {/* Left Column */}
                    <Box>
                        {leftColumnItems.map((faqItem) => (
                            <Box key={faqItem.id} mb={8}>
                                <Heading
                                    as="h3"
                                    fontSize={{ base: "18px", md: "20px" }}
                                    fontWeight="700"
                                    lineHeight="1.4"
                                    mb={3}
                                    color="black"
                                >
                                    {faqItem.question}
                                </Heading>
                                {faqItem.answer.blocks.map((block, blockIndex) => {
                                    if (block.type === 'text' || block.type === 'link' || block.type === 'highlight') {
                                        return (
                                            <Text
                                                key={blockIndex}
                                                fontSize={{ base: "16px", md: "20px" }}
                                                maxW="450px"
                                                lineHeight="1.4"
                                                mb={blockIndex < faqItem.answer.blocks.length - 1 ? 3 : 0}
                                                color="black"
                                                as="span"
                                                display="block"
                                            >
                                                {renderRichTextContent({ blocks: [block] })}
                                            </Text>
                                        );
                                    }
                                    return null;
                                })}
                            </Box>
                        ))}
                    </Box>

                    {/* Right Column */}
                    <Box>
                        {rightColumnItems.map((faqItem) => (
                            <Box key={faqItem.id} mb={8}>
                                <Heading
                                    as="h3"
                                    fontSize={{ base: "18px", md: "20px" }}
                                    fontWeight="700"
                                    lineHeight="1.4"
                                    mb={3}
                                    color="black"
                                >
                                    {faqItem.question}
                                </Heading>
                                {faqItem.answer.blocks.map((block, blockIndex) => {
                                    if (block.type === 'text' || block.type === 'link' || block.type === 'highlight') {
                                        return (
                                            <Text
                                                key={blockIndex}
                                                fontSize={{ base: "16px", md: "20px" }}
                                                maxW="490px"
                                                lineHeight="1.4"
                                                mb={blockIndex < faqItem.answer.blocks.length - 1 ? 3 : 0}
                                                color="black"
                                                as="span"
                                                display="block"
                                            >
                                                {renderRichTextContent({ blocks: [block] })}
                                            </Text>
                                        );
                                    }
                                    return null;
                                })}
                            </Box>
                        ))}
                    </Box>
                </SimpleGrid>
            </Container>
        </Box>
    );
};

