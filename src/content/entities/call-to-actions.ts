import { CallToAction } from '../schema/content-types';

export const callToActions: CallToAction[] = [
  {
    id: 'cta-learn-accept-bitcoin',
    type: 'call-to-action',
    label: 'LEARN HOW TO ACCEPT BITCOIN',
    actionType: 'navigate',
    target: '#accept-bitcoin',
    priority: 'primary',
    relatedContent: [
      {
        id: 'accept-bitcoin-intro',
        type: 'content-block'
      }
    ],
    metadata: {
      topics: ['bitcoin', 'setup-instructions'],
      audience: ['merchants'],
      language: 'en'
    }
  },
  {
    id: 'cta-join-facebook',
    type: 'call-to-action',
    label: 'JOIN OUR FACEBOOK COMMUNITY',
    actionType: 'external-link',
    target: 'https://www.facebook.com/groups/bitcoinmerchants/',
    priority: 'secondary',
    relatedContent: [
      {
        id: 'facebook-group',
        type: 'community-resource'
      }
    ],
    metadata: {
      topics: ['community'],
      audience: ['merchants', 'bitcoiners'],
      language: 'en'
    }
  },
  {
    id: 'cta-join-facebook-group',
    type: 'call-to-action',
    label: 'JOIN OUR FACEBOOK GROUP',
    actionType: 'join-community',
    target: 'https://www.facebook.com/groups/bitcoinmerchants/',
    priority: 'primary',
    relatedContent: [
      {
        id: 'facebook-group',
        type: 'community-resource'
      }
    ],
    metadata: {
      topics: ['community'],
      audience: ['merchants', 'bitcoiners'],
      language: 'en'
    }
  },
  {
    id: 'cta-download-kit',
    type: 'call-to-action',
    label: 'Download the kit',
    actionType: 'download',
    target: 'https://raw.githubusercontent.com/bitcoinmerchants/marketing-assets/main/Merchant%20Onboarding%20Kit.pdf',
    priority: 'primary',
    relatedContent: [
      {
        id: 'onboard-merchants-kit',
        type: 'content-block'
      }
    ],
    metadata: {
      topics: ['onboarding'],
      audience: ['bitcoiners', 'local-champions'],
      language: 'en'
    }
  },
  {
    id: 'cta-apply-local-champion',
    type: 'call-to-action',
    label: 'Apply to become a Local Champion',
    actionType: 'apply',
    target: 'https://tally.so/r/Bzz5qQ',
    priority: 'primary',
    relatedContent: [
      {
        id: 'local-champion-intro',
        type: 'content-block'
      }
    ],
    metadata: {
      topics: ['onboarding', 'community'],
      audience: ['bitcoiners', 'local-champions'],
      language: 'en'
    }
  },
  {
    id: 'cta-join-discord',
    type: 'call-to-action',
    label: 'Join the BMC Bitcoiner Discord',
    actionType: 'join-community',
    target: 'https://discord.gg/f2xHv5QYK7',
    priority: 'primary',
    relatedContent: [
      {
        id: 'discord',
        type: 'community-resource'
      }
    ],
    metadata: {
      topics: ['community', 'onboarding'],
      audience: ['bitcoiners', 'local-champions'],
      language: 'en'
    }
  },
  {
    id: 'cta-view-btc-map',
    type: 'call-to-action',
    label: 'View nearby bitcoin merchants',
    actionType: 'external-link',
    target: 'https://btcmap.org/map',
    priority: 'secondary',
    relatedContent: [
      {
        id: 'btc-map-directory',
        type: 'community-resource'
      }
    ],
    metadata: {
      topics: ['community', 'merchants'],
      audience: ['merchants', 'general-public'],
      language: 'en'
    }
  },
  {
    id: 'cta-help-spread-word',
    type: 'call-to-action',
    label: 'Help spread the word',
    actionType: 'navigate',
    target: '#download-kit',
    priority: 'secondary',
    metadata: {
      topics: ['onboarding'],
      audience: ['bitcoiners', 'local-champions'],
      language: 'en'
    }
  }
];

