import { Organization } from '../schema/content-types';

export const organizations: Organization[] = [
  {
    id: 'square',
    type: 'organization',
    name: 'Square',
    slug: 'square',
    description: 'Square is a financial services platform that enables merchants to accept bitcoin payments through their existing Square POS hardware and software.',
    website: 'https://squareup.com/us/en/bitcoin',
    logo: {
      id: 'square-logo',
      path: '/assets/CompanyImages/squarelogo.svg',
      alt: 'Square'
    },
    categories: ['pos-provider', 'hardware-integrated'],
    features: ['hardware-integration', 'auto-conversion', 'zero-fees-until-2027'],
    geographicAvailability: ['US'],
    setupComplexity: 'low',
    setupInstructions: [
      {
        id: 'square-pos-setup',
        slug: 'square-pos-setup',
        title: 'Setting up Bitcoin on Square POS Device'
      },
      {
        id: 'square-web-setup',
        slug: 'square-web-setup',
        title: 'Setting up Bitcoin on Square Web Dashboard'
      }
    ],
    relatedContent: [
      {
        id: 'accept-bitcoin-square',
        slug: 'accept-bitcoin-square',
        title: 'Accept Bitcoin with Square'
      }
    ],
    metadata: {
      topics: ['bitcoin', 'pos-systems', 'square', 'setup-instructions'],
      audience: ['merchants', 'small-business'],
      language: 'en'
    }
  },
  {
    id: 'ibex-pay',
    type: 'organization',
    name: 'IBEX Pay',
    slug: 'ibex-pay',
    description: 'IBEX Pay is a web-based bitcoin point-of-sale solution that works on any device with a web browser.',
    website: 'https://www.ibexpay.io/',
    logo: {
      id: 'ibex-logo',
      path: '/assets/CompanyImages/ibexLogo.png',
      alt: 'IBEX Pay'
    },
    categories: ['pos-provider', 'web-based'],
    features: ['web-based', 'cross-platform'],
    setupComplexity: 'medium',
    metadata: {
      topics: ['bitcoin', 'pos-systems', 'web-based'],
      audience: ['merchants'],
      language: 'en'
    }
  },
  {
    id: 'btcpay-server',
    type: 'organization',
    name: 'BTCPay Server',
    slug: 'btcpay-server',
    description: 'For tech-savvy merchants, BTCPay Server is a highly customizable, open-source alternative that needs to be hosted on your own server, or one you trust.',
    website: 'https://btcpayserver.org/',
    logo: {
      id: 'btcpay-logo',
      path: '/assets/CompanyImages/btcpayserverLogo.svg',
      alt: 'BTCPay Server'
    },
    categories: ['pos-provider', 'self-hosted'],
    features: ['open-source', 'self-hosted', 'highly-customizable'],
    setupComplexity: 'high',
    metadata: {
      topics: ['bitcoin', 'pos-systems', 'self-hosted'],
      audience: ['merchants'],
      language: 'en'
    }
  },
  {
    id: 'manna',
    type: 'organization',
    name: 'Manna',
    slug: 'manna',
    description: 'Manna is a simple mobile wallet with a built-in point-of-sale interface, allowing you to quickly start accepting instant bitcoin payments without providing any personal information.',
    website: 'https://mannabitcoin.com/',
    logo: {
      id: 'manna-logo',
      path: '/assets/CompanyImages/mannaLogo.svg',
      alt: 'Manna Pay'
    },
    categories: ['pos-provider', 'mobile-app'],
    features: ['mobile-app', 'privacy-focused', 'no-personal-info-required'],
    setupComplexity: 'low',
    metadata: {
      topics: ['bitcoin', 'pos-systems', 'mobile-app'],
      audience: ['merchants'],
      language: 'en'
    }
  },
  {
    id: 'blink',
    type: 'organization',
    name: 'Blink',
    slug: 'blink',
    description: 'Blink is a reliable mobile wallet for merchants, featuring a simple web-based point-of-sale interface for accepting instant bitcoin payments and has an optional stable-dollar account.',
    website: 'https://www.blink.sv/',
    logo: {
      id: 'blink-logo',
      path: '/assets/CompanyImages/blinkLogo.png',
      alt: 'Blink'
    },
    categories: ['pos-provider', 'mobile-app', 'web-based'],
    features: ['mobile-app', 'web-based', 'stable-dollar-account'],
    setupComplexity: 'low',
    metadata: {
      topics: ['bitcoin', 'pos-systems', 'mobile-app', 'web-based'],
      audience: ['merchants'],
      language: 'en'
    }
  }
];

