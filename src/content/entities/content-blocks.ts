import { ContentBlock } from '../schema/content-types';

export const contentBlocks: ContentBlock[] = [
  {
    id: 'hero-value-proposition',
    type: 'content-block',
    title: 'We help small businesses keep more of their profit.',
    slug: 'hero-value-proposition',
    content: {
      blocks: [
        {
          type: 'text',
          content: 'The Bitcoin Merchant Community is a growing global community of small businesses helping one another defeat '
        },
        {
          type: 'highlight',
          content: '3% credit card fees',
          highlightType: 'benefit'
        },
        {
          type: 'text',
          content: ' by accepting bitcoin.'
        }
      ]
    },
    contentType: 'value-proposition',
    topics: ['bitcoin', 'merchants', 'credit-card-fees'],
    callToActions: [
      {
        id: 'cta-learn-accept-bitcoin',
        label: 'LEARN HOW TO ACCEPT BITCOIN'
      },
      {
        id: 'cta-join-facebook',
        label: 'JOIN OUR FACEBOOK COMMUNITY'
      }
    ],
    media: [
      {
        id: 'hero-image',
        path: '/assets/HeroImages/HeroImage.png',
        alt: '3% melting'
      }
    ],
    metadata: {
      topics: ['bitcoin', 'merchants', 'credit-card-fees'],
      audience: ['merchants', 'small-business', 'general-public'],
      language: 'en'
    }
  },
  {
    id: 'credit-card-problem',
    type: 'content-block',
    title: 'Credit card providers haven\'t earned 3%.',
    slug: 'credit-card-problem',
    content: {
      blocks: [
        {
          type: 'text',
          content: 'Back when cash was how people paid, there were no 3% credit card fees. Today, credit cards are the preferred way to pay.'
        },
        {
          type: 'text',
          content: 'For some small businesses, this can mean paying 50% or more of their profits to card providers. Bitcoin, which is cash but digital, helps them fight back.'
        }
      ]
    },
    contentType: 'problem-statement',
    topics: ['credit-card-fees', 'merchants', 'bitcoin'],
    media: [
      {
        id: 'credit-card-image',
        path: '/assets/CreditCardImages/CreditCardImage.png',
        alt: 'Broken credit card'
      }
    ],
    metadata: {
      topics: ['credit-card-fees', 'merchants'],
      audience: ['merchants', 'small-business'],
      language: 'en'
    }
  },
  {
    id: 'community-connection',
    type: 'content-block',
    title: 'Connect with merchants who already get paid in bitcoin.',
    slug: 'community-connection',
    content: {
      blocks: [
        {
          type: 'text',
          content: 'Thousands of merchants in the US and around the world already accept bitcoin payments.'
        },
        {
          type: 'text',
          content: 'Join our community\'s Facebook Group to learn from their experiences and hear how bitcoin saves them from credit card fees.'
        }
      ]
    },
    contentType: 'narrative',
    topics: ['community', 'merchants', 'bitcoin'],
    relatedResources: [
      {
        id: 'facebook-group',
        slug: 'facebook-group',
        name: 'Bitcoin Merchant Community Facebook Group'
      }
    ],
    callToActions: [
      {
        id: 'cta-join-facebook-group',
        label: 'JOIN OUR FACEBOOK GROUP'
      }
    ],
    media: [
      {
        id: 'community-image',
        path: '/assets/CommunityImages/CommunitySectionImage.png',
        alt: 'Bitcoin merchant store'
      }
    ],
    metadata: {
      topics: ['community', 'merchants', 'bitcoin'],
      audience: ['merchants', 'small-business'],
      language: 'en'
    }
  },
  {
    id: 'btc-map-directory',
    type: 'content-block',
    title: 'See who does business with bitcoin in your area.',
    slug: 'btc-map-directory',
    content: {
      blocks: [
        {
          type: 'link',
          text: 'BTC Map',
          href: 'https://btcmap.org',
          isExternal: true
        },
        {
          type: 'text',
          content: ' is a collaborative, open-source directory that shows people seeking bitcoin-friendly merchants where to find you.'
        }
      ]
    },
    contentType: 'narrative',
    topics: ['community', 'merchants', 'bitcoin'],
    relatedResources: [
      {
        id: 'btc-map',
        slug: 'btc-map',
        name: 'BTC Map'
      }
    ],
    metadata: {
      topics: ['community', 'merchants', 'bitcoin'],
      audience: ['merchants', 'general-public'],
      language: 'en'
    }
  },
  {
    id: 'receive-bitcoin-choice',
    type: 'content-block',
    title: 'The best way to receive bitcoin is up to you.',
    slug: 'receive-bitcoin-choice',
    content: {
      blocks: [
        {
          type: 'text',
          content: 'Declining 3% credit card fees right now isn\'t much harder than pushing a button. However, a lot depends on your current point-of-sale solution and geographical location.'
        },
        {
          type: 'text',
          content: 'We can help you choose the one that\'s right for you, your staff, and your customers.'
        }
      ]
    },
    contentType: 'solution-explanation',
    topics: ['bitcoin', 'pos-systems', 'merchants'],
    media: [
      {
        id: 'bitcoin-button-image',
        path: '/assets/ReceiveBitcoinImages/BitcoinButtonImage.png',
        alt: 'Bitcoin key'
      }
    ],
    metadata: {
      topics: ['bitcoin', 'pos-systems', 'merchants'],
      audience: ['merchants', 'small-business'],
      language: 'en'
    }
  },
  {
    id: 'accept-bitcoin-intro',
    type: 'content-block',
    title: 'Meet some of the many ways to accept bitcoin.',
    slug: 'accept-bitcoin-intro',
    content: {
      blocks: [
        {
          type: 'highlight',
          content: 'If you already use Square',
          highlightType: 'emphasis'
        },
        {
          type: 'text',
          content: ', you can start accepting bitcoin today with just a few taps.'
        },
        {
          type: 'text',
          content: 'Not a Square merchant? '
        },
        {
          type: 'link',
          text: 'Skip ahead',
          href: '#alternative-payment',
          isExternal: false
        },
        {
          type: 'text',
          content: '.'
        }
      ]
    },
    contentType: 'introduction',
    topics: ['bitcoin', 'square', 'pos-systems'],
    relatedOrganizations: [
      {
        id: 'square',
        slug: 'square',
        name: 'Square'
      }
    ],
    metadata: {
      topics: ['bitcoin', 'square', 'pos-systems'],
      audience: ['merchants'],
      language: 'en'
    }
  },
  {
    id: 'alternative-payment-intro',
    type: 'content-block',
    title: 'Alternative Payment Solutions',
    slug: 'alternative-payment-intro',
    content: {
      blocks: [
        {
          type: 'highlight',
          content: 'If you don\'t use Square',
          highlightType: 'emphasis'
        },
        {
          type: 'text',
          content: ' or are outside the US, you\'ll need to pick a point-of-sale solution that accepts instant bitcoin payments. There are several to choose from.'
        },
        {
          type: 'text',
          content: 'We\'ve selected some favorites that merchants have told us work well for them.'
        }
      ]
    },
    contentType: 'introduction',
    topics: ['bitcoin', 'pos-systems', 'merchants'],
    metadata: {
      topics: ['bitcoin', 'pos-systems', 'merchants'],
      audience: ['merchants'],
      language: 'en'
    }
  },
  {
    id: 'alternative-payment-criteria',
    type: 'content-block',
    title: 'Who makes the cut?',
    slug: 'alternative-payment-criteria',
    content: {
      blocks: [
        {
          type: 'text',
          content: 'We listen to merchants and spotlight solutions that are already popular and have a reputation for easy use. If there\'s a bitcoin point-of-sale solution we\'re missing, '
        },
        {
          type: 'link',
          text: 'let us know',
          href: 'mailto:bitcoinmerchants@spiral.xyz',
          isExternal: true
        },
        {
          type: 'text',
          content: '.'
        },
        {
          type: 'text',
          content: 'If you want to learn more about getting up and running with one of these options, join our friendly '
        },
        {
          type: 'link',
          text: 'Facebook Group',
          href: 'https://www.facebook.com/groups/bitcoinmerchants/',
          isExternal: true
        },
        {
          type: 'text',
          content: '.'
        },
        {
          type: 'text',
          content: 'Since there\'s a chance that your existing point-of-sale provider doesn\'t accept bitcoin payments at this time, reach out and ask them to add support. Be the squeaky wheel.'
        },
        {
          type: 'text',
          content: 'For now, we\'re focused on highlighting POS solutions that work well for in-person commerce. Over time, we\'ll add options for e‑commerce and professional services.'
        }
      ]
    },
    contentType: 'narrative',
    topics: ['pos-systems', 'merchants', 'community'],
    metadata: {
      topics: ['pos-systems', 'merchants', 'community'],
      audience: ['merchants'],
      language: 'en'
    }
  },
  {
    id: 'onboard-merchants-kit',
    type: 'content-block',
    title: 'Turn your favorite shops into bitcoin-friendly stops.',
    slug: 'onboard-merchants-kit',
    content: {
      blocks: [
        {
          type: 'text',
          content: 'Already invested in bitcoin? Get a ready-to-print kit and make the case to merchants. It includes a 1-page leave behind and a guide to help you confidently onboard merchants.'
        }
      ]
    },
    contentType: 'benefit-description',
    topics: ['onboarding', 'merchants', 'bitcoin'],
    callToActions: [
      {
        id: 'cta-download-kit',
        label: 'Download the kit'
      }
    ],
    media: [
      {
        id: 'marketing-kit-image',
        path: '/assets/OnboardMerchantsImages/marketingKit.png',
        alt: 'marketing kit'
      }
    ],
    metadata: {
      topics: ['onboarding', 'merchants', 'bitcoin'],
      audience: ['bitcoiners', 'local-champions'],
      language: 'en'
    }
  },
  {
    id: 'local-champion-intro',
    type: 'content-block',
    title: 'Become a Local Champion',
    slug: 'local-champion-intro',
    content: {
      blocks: [
        {
          type: 'text',
          content: 'Apply now to help bitcoin grow in a unique and memorable way.'
        },
        {
          type: 'text',
          content: 'We\'re looking for natural leaders with deep connections to their local community who can help spread the word about how bitcoin benefits small businesses.'
        },
        {
          type: 'text',
          content: 'If accepted, we\'ll send you a box of free Itty Bitty plushies and leave-behind materials that you can use to onboard local merchants or distribute to bitcoiners doing the same.'
        }
      ]
    },
    contentType: 'narrative',
    topics: ['onboarding', 'community', 'bitcoin'],
    callToActions: [
      {
        id: 'cta-apply-local-champion',
        label: 'Apply to become a Local Champion'
      }
    ],
    media: [
      {
        id: 'local-champion-image',
        path: '/assets/LocalChampionImages/LocalChampion.png',
        alt: 'Itty Bitty Bitcoin mascot'
      }
    ],
    metadata: {
      topics: ['onboarding', 'community', 'bitcoin'],
      audience: ['bitcoiners', 'local-champions'],
      language: 'en'
    }
  },
  {
    id: 'learn-from-best',
    type: 'content-block',
    title: 'Learn from the best at advocating for bitcoin.',
    slug: 'learn-from-best',
    content: {
      blocks: [
        {
          type: 'text',
          content: 'Get tricks, share knowledge, and find out what small business owners find convincing. Maybe meet some cool people, who knows.'
        }
      ]
    },
    contentType: 'benefit-description',
    topics: ['community', 'onboarding', 'bitcoin'],
    relatedResources: [
      {
        id: 'discord',
        slug: 'discord',
        name: 'BMC Bitcoiner Discord'
      }
    ],
    callToActions: [
      {
        id: 'cta-join-discord',
        label: 'Join the BMC Bitcoiner Discord'
      }
    ],
    metadata: {
      topics: ['community', 'onboarding', 'bitcoin'],
      audience: ['bitcoiners', 'local-champions'],
      language: 'en'
    }
  }
];

