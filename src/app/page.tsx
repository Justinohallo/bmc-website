"use client"; 

import { Box } from "@chakra-ui/react";
import { Header } from "@/components/Header/Header";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { CreditCardSection } from "@/components/CreditCardSection/CreditCardSection";
import { CommunitySection } from "@/components/CommunitySection/CommunitySection";
import { ReceiveBitcoinSection } from "@/components/ReceiveBitcoinSection/ReceiveBitcoinSection";
import { AcceptBitcoinSection } from "@/components/AcceptBitcoinSection/AcceptBitcoinSection";
import { AlternativePaymentSection } from "@/components/AlternativePaymentSection/AlternativePaymentSection";
import { OnboardMerchantsSection } from "@/components/OnboardMerchantsSection/OnboardMerchantsSection";
import { LocalChampionSection } from "@/components/LocalChampionSection/LocalChampionSection";
import { FAQSection } from "@/components/FAQSection/FAQSection";
import { Footer } from "@/components/Footer/Footer";

const Home = () => {
    return (
        <Box>
            <Header />
            <HeroSection />
            <CreditCardSection />
            <CommunitySection />
            <ReceiveBitcoinSection />
            <AcceptBitcoinSection />
            <AlternativePaymentSection />
            <OnboardMerchantsSection />
            <LocalChampionSection />
            <FAQSection />
            <Footer />
        </Box>
    );
};

export default Home;

