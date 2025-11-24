import { MediaAsset } from '../schema/content-types';

export const mediaAssets: MediaAsset[] = [
  {
    id: 'hero-image',
    type: 'media-asset',
    filename: 'HeroImage.png',
    path: '/assets/HeroImages/HeroImage.png',
    alt: '3% melting',
    mediaType: 'image',
    purpose: 'hero',
    metadata: {
      topics: ['bitcoin', 'credit-card-fees'],
      audience: ['general-public'],
      language: 'en'
    }
  },
  {
    id: 'credit-card-image',
    type: 'media-asset',
    filename: 'CreditCardImage.png',
    path: '/assets/CreditCardImages/CreditCardImage.png',
    alt: 'Broken credit card',
    mediaType: 'image',
    purpose: 'illustration',
    metadata: {
      topics: ['credit-card-fees'],
      audience: ['merchants'],
      language: 'en'
    }
  },
  {
    id: 'community-image',
    type: 'media-asset',
    filename: 'CommunitySectionImage.png',
    path: '/assets/CommunityImages/CommunitySectionImage.png',
    alt: 'Bitcoin merchant store',
    mediaType: 'image',
    purpose: 'illustration',
    metadata: {
      topics: ['community', 'merchants'],
      audience: ['merchants'],
      language: 'en'
    }
  },
  {
    id: 'bitcoin-button-image',
    type: 'media-asset',
    filename: 'BitcoinButtonImage.png',
    path: '/assets/ReceiveBitcoinImages/BitcoinButtonImage.png',
    alt: 'Bitcoin key',
    mediaType: 'image',
    purpose: 'illustration',
    metadata: {
      topics: ['bitcoin', 'payments'],
      audience: ['merchants'],
      language: 'en'
    }
  },
  {
    id: 'marketing-kit-image',
    type: 'media-asset',
    filename: 'marketingKit.png',
    path: '/assets/OnboardMerchantsImages/marketingKit.png',
    alt: 'marketing kit',
    mediaType: 'image',
    purpose: 'marketing-material',
    metadata: {
      topics: ['onboarding'],
      audience: ['bitcoiners', 'local-champions'],
      language: 'en'
    }
  },
  {
    id: 'local-champion-image',
    type: 'media-asset',
    filename: 'LocalChampion.png',
    path: '/assets/LocalChampionImages/LocalChampion.png',
    alt: 'Itty Bitty Bitcoin mascot',
    mediaType: 'image',
    purpose: 'illustration',
    metadata: {
      topics: ['onboarding', 'community'],
      audience: ['bitcoiners', 'local-champions'],
      language: 'en'
    }
  },
  {
    id: 'square-logo',
    type: 'media-asset',
    filename: 'squarelogo.svg',
    path: '/assets/CompanyImages/squarelogo.svg',
    alt: 'Square',
    mediaType: 'logo',
    purpose: 'logo',
    metadata: {
      topics: ['square'],
      audience: ['merchants'],
      language: 'en'
    }
  },
  {
    id: 'ibex-logo',
    type: 'media-asset',
    filename: 'ibexLogo.png',
    path: '/assets/CompanyImages/ibexLogo.png',
    alt: 'IBEX Pay',
    mediaType: 'logo',
    purpose: 'logo',
    metadata: {
      topics: ['web-based'],
      audience: ['merchants'],
      language: 'en'
    }
  },
  {
    id: 'btcpay-logo',
    type: 'media-asset',
    filename: 'btcpayserverLogo.svg',
    path: '/assets/CompanyImages/btcpayserverLogo.svg',
    alt: 'BTCPay Server',
    mediaType: 'logo',
    purpose: 'logo',
    metadata: {
      topics: ['self-hosted'],
      audience: ['merchants'],
      language: 'en'
    }
  },
  {
    id: 'manna-logo',
    type: 'media-asset',
    filename: 'mannaLogo.svg',
    path: '/assets/CompanyImages/mannaLogo.svg',
    alt: 'Manna Pay',
    mediaType: 'logo',
    purpose: 'logo',
    metadata: {
      topics: ['mobile-app'],
      audience: ['merchants'],
      language: 'en'
    }
  },
  {
    id: 'blink-logo',
    type: 'media-asset',
    filename: 'blinkLogo.png',
    path: '/assets/CompanyImages/blinkLogo.png',
    alt: 'Blink',
    mediaType: 'logo',
    purpose: 'logo',
    metadata: {
      topics: ['mobile-app', 'web-based'],
      audience: ['merchants'],
      language: 'en'
    }
  },
  {
    id: 'bmc-logo',
    type: 'media-asset',
    filename: 'logo.png',
    path: '/assets/HeaderImages/logo.png',
    alt: 'Bitcoin Merchant Community Logo',
    mediaType: 'logo',
    purpose: 'logo',
    metadata: {
      topics: ['community'],
      audience: ['general-public'],
      language: 'en'
    }
  }
];

