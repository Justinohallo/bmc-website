import { CommunityResource } from '../schema/content-types';

export const communityResources: CommunityResource[] = [
  {
    id: 'facebook-group',
    type: 'community-resource',
    name: 'Bitcoin Merchant Community Facebook Group',
    slug: 'facebook-group',
    description: 'Join our community\'s Facebook Group to learn from merchant experiences and hear how bitcoin saves them from credit card fees.',
    url: 'https://www.facebook.com/groups/bitcoinmerchants/',
    resourceType: 'social-group',
    relatedTopics: ['community', 'merchants', 'bitcoin'],
    metadata: {
      topics: ['community', 'merchants', 'bitcoin'],
      audience: ['merchants', 'bitcoiners', 'small-business'],
      language: 'en'
    }
  },
  {
    id: 'btc-map',
    type: 'community-resource',
    name: 'BTC Map',
    slug: 'btc-map',
    description: 'BTC Map is a collaborative, open-source directory that shows people seeking bitcoin-friendly merchants where to find you.',
    url: 'https://btcmap.org',
    resourceType: 'directory',
    relatedTopics: ['community', 'merchants', 'bitcoin'],
    metadata: {
      topics: ['community', 'merchants', 'bitcoin'],
      audience: ['merchants', 'general-public'],
      language: 'en'
    }
  },
  {
    id: 'btc-map-directory',
    type: 'community-resource',
    name: 'BTC Map Directory',
    slug: 'btc-map-directory',
    description: 'View nearby bitcoin merchants on BTC Map.',
    url: 'https://btcmap.org/map',
    resourceType: 'directory',
    relatedTopics: ['community', 'merchants', 'bitcoin'],
    metadata: {
      topics: ['community', 'merchants', 'bitcoin'],
      audience: ['merchants', 'general-public'],
      language: 'en'
    }
  },
  {
    id: 'discord',
    type: 'community-resource',
    name: 'BMC Bitcoiner Discord',
    slug: 'discord',
    description: 'Get tricks, share knowledge, and find out what small business owners find convincing. Maybe meet some cool people, who knows.',
    url: 'https://discord.gg/f2xHv5QYK7',
    resourceType: 'social-group',
    relatedTopics: ['community', 'bitcoin', 'onboarding'],
    metadata: {
      topics: ['community', 'bitcoin', 'onboarding'],
      audience: ['bitcoiners', 'local-champions'],
      language: 'en'
    }
  },
  {
    id: 'github',
    type: 'community-resource',
    name: 'Bitcoin Merchants GitHub',
    slug: 'github',
    description: 'Open source repository for Bitcoin Merchant Community projects.',
    url: 'https://github.com/bitcoinmerchants',
    resourceType: 'tool',
    relatedTopics: ['community', 'bitcoin'],
    metadata: {
      topics: ['community', 'bitcoin'],
      audience: ['bitcoiners', 'local-champions'],
      language: 'en'
    }
  }
];

