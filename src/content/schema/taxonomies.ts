/**
 * Classification systems for organizing content
 */

export interface Taxonomy {
  id: string;
  name: string;
  terms: TaxonomyTerm[];
}

export interface TaxonomyTerm {
  id: string;
  label: string;
  slug: string;
  description?: string;
  parent?: string; // For hierarchical taxonomies
}

// Topic taxonomy
export const topicTaxonomy: Taxonomy = {
  id: 'topics',
  name: 'Content Topics',
  terms: [
    { id: 'bitcoin', label: 'Bitcoin', slug: 'bitcoin' },
    { id: 'payments', label: 'Payments', slug: 'payments' },
    { id: 'pos-systems', label: 'POS Systems', slug: 'pos-systems' },
    { id: 'merchants', label: 'Merchants', slug: 'merchants' },
    { id: 'credit-card-fees', label: 'Credit Card Fees', slug: 'credit-card-fees' },
    { id: 'setup-instructions', label: 'Setup Instructions', slug: 'setup-instructions' },
    { id: 'community', label: 'Community', slug: 'community' },
    { id: 'taxation', label: 'Taxation', slug: 'taxation' },
    { id: 'volatility', label: 'Volatility', slug: 'volatility' },
    { id: 'tipping', label: 'Tipping', slug: 'tipping' },
    { id: 'customer-experience', label: 'Customer Experience', slug: 'customer-experience' },
    { id: 'onboarding', label: 'Onboarding', slug: 'onboarding' },
    { id: 'square', label: 'Square', slug: 'square' },
    { id: 'web-based', label: 'Web-Based', slug: 'web-based' },
    { id: 'mobile-app', label: 'Mobile App', slug: 'mobile-app' },
    { id: 'self-hosted', label: 'Self-Hosted', slug: 'self-hosted' },
  ]
};

// Content purpose taxonomy
export const purposeTaxonomy: Taxonomy = {
  id: 'purposes',
  name: 'Content Purpose',
  terms: [
    { id: 'educate', label: 'Educate', slug: 'educate' },
    { id: 'persuade', label: 'Persuade', slug: 'persuade' },
    { id: 'instruct', label: 'Instruct', slug: 'instruct' },
    { id: 'inform', label: 'Inform', slug: 'inform' },
  ]
};

