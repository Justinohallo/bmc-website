import { FAQItem } from '../schema/content-types';

export const faqItems: FAQItem[] = [
  {
    id: 'what-is-bitcoin',
    type: 'faq-item',
    question: 'What is bitcoin?',
    answer: {
      blocks: [
        {
          type: 'text',
          content: 'Bitcoin is a secure digital currency that lets you send, spend, and save money without relying on banks or other third parties—just like cash.'
        }
      ]
    },
    topics: ['bitcoin'],
    order: 1,
    metadata: {
      topics: ['bitcoin'],
      audience: ['general-public', 'merchants'],
      language: 'en'
    }
  },
  {
    id: 'what-are-bitcoin-payments',
    type: 'faq-item',
    question: 'What are bitcoin payments?',
    answer: {
      blocks: [
        {
          type: 'text',
          content: 'You can accept bitcoin payments by offering customers a QR code invoice at checkout that they can scan to pay you from their bitcoin wallet instantly. It\'s as simple as paying with a credit card—only on their phone.'
        }
      ]
    },
    topics: ['bitcoin', 'payments', 'customer-experience'],
    order: 2,
    metadata: {
      topics: ['bitcoin', 'payments', 'customer-experience'],
      audience: ['merchants', 'general-public'],
      language: 'en'
    }
  },
  {
    id: 'what-are-fees',
    type: 'faq-item',
    question: 'What are the fees?',
    answer: {
      blocks: [
        {
          type: 'text',
          content: 'Bitcoin fees vary depending on the point-of-sale system you use.'
        },
        {
          type: 'text',
          content: 'With Square, bitcoin fees are 0% until 2027. After that, they convert to 1%. Learn more on '
        },
        {
          type: 'link',
          text: 'Square\'s website',
          href: 'https://squareup.com/us/en/bitcoin',
          isExternal: true
        },
        {
          type: 'text',
          content: '.'
        },
        {
          type: 'text',
          content: 'On other systems, they generally range from 0.4% to 1%, but you will need to consult your software vendor for specifics. The big takeaway, though, is that bitcoin payment fees will never be as high as credit card fees.'
        }
      ]
    },
    topics: ['bitcoin', 'payments', 'pos-systems', 'credit-card-fees'],
    relatedOrganizations: [
      {
        id: 'square',
        slug: 'square',
        name: 'Square'
      }
    ],
    order: 3,
    metadata: {
      topics: ['bitcoin', 'payments', 'pos-systems', 'credit-card-fees'],
      audience: ['merchants'],
      language: 'en'
    }
  },
  {
    id: 'bitcoin-volatility',
    type: 'faq-item',
    question: 'What about bitcoin\'s volatility?',
    answer: {
      blocks: [
        {
          type: 'text',
          content: 'Bitcoin\'s price relative to the US dollar, also known as its conversation rate, fluctuates often. Sometimes wildly. Whether you hold your bitcoin or convert it to local currency upon receiving a payment is ultimately your decision, as it should be.'
        },
        {
          type: 'text',
          content: 'To limit exposure to bitcoin\'s volatility, you can enable auto-conversions on your Square hardware you use to accept bitcoin payment. This will let you capture bitcoin\'s foremost merchant benefit, avoiding 3% credit card fees, without exposure to short-term volatility.'
        }
      ]
    },
    topics: ['bitcoin', 'volatility', 'square'],
    relatedOrganizations: [
      {
        id: 'square',
        slug: 'square',
        name: 'Square'
      }
    ],
    order: 4,
    metadata: {
      topics: ['bitcoin', 'volatility', 'square'],
      audience: ['merchants'],
      language: 'en'
    }
  },
  {
    id: 'bitcoin-taxation',
    type: 'faq-item',
    question: 'How are bitcoin payments taxed?',
    answer: {
      blocks: [
        {
          type: 'text',
          content: 'The Bitcoin Merchant Community cannot offer tax advice. We recommend consulting a tax advisor about questions related to bitcoin income.'
        },
        {
          type: 'text',
          content: 'But at a high level, like with all payments, you are required to charge taxes on goods sold in accordance with local laws.'
        },
        {
          type: 'text',
          content: 'Additionally, depending on where you live, if you are holding on to the bitcoin you receive, you may incur capital gains taxes when you sell. If you are a Square merchant who has enabled bitcoin payments, tax documentation will be automatically generated for you and made available in your Square dashboard. Learn more on '
        },
        {
          type: 'link',
          text: 'Square\'s website',
          href: 'https://squareup.com/us/en/bitcoin',
          isExternal: true
        },
        {
          type: 'text',
          content: '.'
        }
      ]
    },
    topics: ['bitcoin', 'taxation', 'square'],
    relatedOrganizations: [
      {
        id: 'square',
        slug: 'square',
        name: 'Square'
      }
    ],
    order: 5,
    metadata: {
      topics: ['bitcoin', 'taxation', 'square'],
      audience: ['merchants'],
      language: 'en'
    }
  },
  {
    id: 'tipping-handled',
    type: 'faq-item',
    question: 'How is tipping handled with bitcoin?',
    answer: {
      blocks: [
        {
          type: 'text',
          content: 'For bitcoin point-of-sale systems that support tipping, the tip amount (or percentage) will usually be defined by the customer before you generate a QR code invoice. The customer then pays the invoice in bitcoin for the purchase amount + tip, which you will receive instantly.'
        },
        {
          type: 'text',
          content: 'Some POS solutions allow tips to be segregated by user account, others gather tips into one lump sum.'
        }
      ]
    },
    topics: ['bitcoin', 'tipping', 'pos-systems'],
    order: 6,
    metadata: {
      topics: ['bitcoin', 'tipping', 'pos-systems'],
      audience: ['merchants'],
      language: 'en'
    }
  },
  {
    id: 'why-customers-pay-bitcoin',
    type: 'faq-item',
    question: 'Why would customers want to pay in bitcoin?',
    answer: {
      blocks: [
        {
          type: 'text',
          content: 'Alongside physical cash, bitcoin spenders will already view digital cash as the fairest way for merchants to get paid. Many will pay in bitcoin to do the right thing by you and by bitcoin\'s growth as the best form of everyday money.'
        },
        {
          type: 'text',
          content: 'But offering discounts for purchasing in bitcoin can be an obvious extra nudge to attract more customers and reinforce the habit of spending in bitcoin. Promotions come and go, but happy customers are forever.'
        }
      ]
    },
    topics: ['bitcoin', 'customer-experience', 'merchants'],
    order: 7,
    metadata: {
      topics: ['bitcoin', 'customer-experience', 'merchants'],
      audience: ['merchants'],
      language: 'en'
    }
  },
  {
    id: 'more-questions',
    type: 'faq-item',
    question: 'More questions?',
    answer: {
      blocks: [
        {
          type: 'text',
          content: 'Ask the Bitcoin Merchant Community\'s '
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
        }
      ]
    },
    topics: ['community'],
    order: 8,
    metadata: {
      topics: ['community'],
      audience: ['merchants', 'general-public'],
      language: 'en'
    }
  }
];

