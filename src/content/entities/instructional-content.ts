import { InstructionalContent } from '../schema/content-types';

export const instructionalContent: InstructionalContent[] = [
  {
    id: 'square-pos-setup',
    type: 'instructional-content',
    title: 'Setting up Bitcoin on Square POS Device',
    slug: 'square-pos-setup',
    description: 'Steps to activate bitcoin payments on your Square point-of-sale device',
    relatedOrganization: {
      id: 'square',
      slug: 'square',
      name: 'Square'
    },
    difficulty: 'beginner',
    estimatedTime: '5 minutes',
    steps: [
      {
        order: 1,
        title: 'Update Software',
        content: {
          blocks: [
            {
              type: 'text',
              content: 'If you\'re running Square hardware, make sure you\'re on the '
            },
            {
              type: 'link',
              text: 'latest POS software',
              href: 'https://squareup.com/help/us/en/article/8346-update-software-on-square-terminal-and-square-register',
              isExternal: true
            },
            {
              type: 'text',
              content: ' (6.81+). If running Square on an iPad, get the latest app from the App Store.'
            }
          ]
        },
        context: 'device'
      },
      {
        order: 2,
        title: 'Activate Bitcoin',
        content: {
          blocks: [
            {
              type: 'text',
              content: 'Go to Settings > Checkout > Payments > Activate Bitcoin.'
            }
          ]
        },
        context: 'device'
      }
    ],
    prerequisites: ['Square POS device or iPad with Square app'],
    metadata: {
      topics: ['square', 'setup-instructions', 'bitcoin'],
      audience: ['merchants'],
      language: 'en'
    }
  },
  {
    id: 'square-web-setup',
    type: 'instructional-content',
    title: 'Setting up Bitcoin on Square Web Dashboard',
    slug: 'square-web-setup',
    description: 'Steps to activate bitcoin payments through the Square web dashboard',
    relatedOrganization: {
      id: 'square',
      slug: 'square',
      name: 'Square'
    },
    difficulty: 'beginner',
    estimatedTime: '10 minutes',
    steps: [
      {
        order: 1,
        title: 'Navigate to Bitcoin Settings',
        content: {
          blocks: [
            {
              type: 'text',
              content: 'From your Dashboard, tap on Banking > Bitcoin, then "Get Started".'
            }
          ]
        },
        context: 'web'
      },
      {
        order: 2,
        title: 'Set Up Conversions',
        content: {
          blocks: [
            {
              type: 'text',
              content: 'You will first be prompted to set up conversions, which you can skip for now if all you want is customers to pay in bitcoin.'
            }
          ]
        },
        context: 'web'
      },
      {
        order: 3,
        title: 'Complete Business Information',
        content: {
          blocks: [
            {
              type: 'text',
              content: 'From there, you may need to enter more information about your business and enable two-factor authentication (2FA) if it\'s not already set up.'
            }
          ]
        },
        context: 'web'
      },
      {
        order: 4,
        title: 'Choose Settlement Option',
        content: {
          blocks: [
            {
              type: 'text',
              content: 'Finally, you will be asked if you want to settle payments in dollars or in bitcoin.'
            },
            {
              type: 'text',
              content: 'This means that when customers pay with bitcoin, you can choose to either have those payments:'
            },
            {
              type: 'list',
              items: [
                'Flow directly into your Square bitcoin wallet, or',
                'Automatically convert to dollars (with no cost or spread), which requires no new accounting or tax work—just business as usual, but without the 3% fees.'
              ],
              listType: 'ordered'
            }
          ]
        },
        context: 'web'
      },
      {
        order: 5,
        title: 'Optional: Appear on Merchant Map',
        content: {
          blocks: [
            {
              type: 'text',
              content: 'You can then decide whether or not you\'d like your business to appear on a map of merchants that accept bitcoin.'
            }
          ]
        },
        context: 'web'
      },
      {
        order: 6,
        title: 'You\'re Ready',
        content: {
          blocks: [
            {
              type: 'text',
              content: 'You can now receive your first bitcoin payment.'
            },
            {
              type: 'text',
              content: 'This '
            },
            {
              type: 'link',
              text: 'beginner\'s guide',
              href: 'https://squareup.com/us/en/the-bottom-line/inside-square/getting-started-with-bitcoin-on-square',
              isExternal: true
            },
            {
              type: 'text',
              content: ' can help you get set up.'
            },
            {
              type: 'text',
              content: 'Once you\'re up and running, you can get a Bitcoin Marketing Kit from '
            },
            {
              type: 'link',
              text: 'Square Shop',
              href: 'https://squareup.com/shop/hardware/us/en/products/bitcoin-marketing-kit',
              isExternal: true
            },
            {
              type: 'text',
              content: ' for free.'
            }
          ]
        },
        context: 'web'
      }
    ],
    prerequisites: ['Square merchant account', 'Access to Square Dashboard'],
    metadata: {
      topics: ['square', 'setup-instructions', 'bitcoin'],
      audience: ['merchants'],
      language: 'en'
    }
  }
];

