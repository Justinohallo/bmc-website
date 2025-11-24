import { LinkReference } from '../schema/content-types';

export const links: LinkReference[] = [
  {
    id: 'link-square-bitcoin',
    type: 'link-reference',
    url: 'https://squareup.com/us/en/bitcoin',
    label: 'Square Bitcoin',
    linkType: 'product',
    isExternal: true,
    relatedContent: [
      {
        id: 'square',
        type: 'organization'
      }
    ],
    metadata: {
      topics: ['square', 'bitcoin'],
      audience: ['merchants'],
      language: 'en'
    }
  },
  {
    id: 'link-square-setup-guide',
    type: 'link-reference',
    url: 'https://squareup.com/us/en/the-bottom-line/inside-square/getting-started-with-bitcoin-on-square',
    label: 'Square Bitcoin Setup Guide',
    linkType: 'documentation',
    isExternal: true,
    relatedContent: [
      {
        id: 'square',
        type: 'organization'
      }
    ],
    metadata: {
      topics: ['square', 'setup-instructions'],
      audience: ['merchants'],
      language: 'en'
    }
  },
  {
    id: 'link-square-marketing-kit',
    type: 'link-reference',
    url: 'https://squareup.com/shop/hardware/us/en/products/bitcoin-marketing-kit',
    label: 'Square Bitcoin Marketing Kit',
    linkType: 'product',
    isExternal: true,
    relatedContent: [
      {
        id: 'square',
        type: 'organization'
      }
    ],
    metadata: {
      topics: ['square', 'onboarding'],
      audience: ['merchants'],
      language: 'en'
    }
  },
  {
    id: 'link-square-update-software',
    type: 'link-reference',
    url: 'https://squareup.com/help/us/en/article/8346-update-software-on-square-terminal-and-square-register',
    label: 'Update Square POS Software',
    linkType: 'documentation',
    isExternal: true,
    relatedContent: [
      {
        id: 'square',
        type: 'organization'
      }
    ],
    metadata: {
      topics: ['square', 'setup-instructions'],
      audience: ['merchants'],
      language: 'en'
    }
  },
  {
    id: 'link-contact-bmc',
    type: 'link-reference',
    url: 'mailto:bitcoinmerchants@spiral.xyz',
    label: 'Contact BMC',
    linkType: 'email',
    isExternal: true,
    metadata: {
      topics: ['community'],
      audience: ['merchants', 'general-public'],
      language: 'en'
    }
  },
  {
    id: 'link-marketing-assets-repo',
    type: 'link-reference',
    url: 'https://github.com/bitcoinmerchants/marketing-assets',
    label: 'Marketing Assets Repository',
    linkType: 'resource',
    isExternal: true,
    metadata: {
      topics: ['onboarding'],
      audience: ['bitcoiners', 'local-champions'],
      language: 'en'
    }
  }
];

