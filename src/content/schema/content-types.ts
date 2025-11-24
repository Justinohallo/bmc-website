/**
 * Core content type definitions based on information architecture principles
 * These represent semantic content entities, not presentation components
 */

// Base content entity
export interface ContentEntity {
  id: string;
  type: ContentType;
  metadata: ContentMetadata;
  createdAt?: string;
  updatedAt?: string;
}

export type ContentType = 
  | 'organization'
  | 'community-resource'
  | 'content-block'
  | 'faq-item'
  | 'instructional-content'
  | 'media-asset'
  | 'link-reference'
  | 'call-to-action';

// Organization: POS providers, companies, vendors
export interface Organization extends ContentEntity {
  type: 'organization';
  name: string;
  slug: string;
  description: string;
  website: string;
  logo: MediaAssetReference;
  categories: OrganizationCategory[];
  features?: string[];
  geographicAvailability?: string[];
  setupComplexity?: 'low' | 'medium' | 'high';
  setupInstructions?: InstructionalContentReference[];
  relatedContent?: ContentBlockReference[];
}

export type OrganizationCategory = 
  | 'pos-provider'
  | 'web-based'
  | 'mobile-app'
  | 'self-hosted'
  | 'hardware-integrated';

// Community Resource: External communities, directories, platforms
export interface CommunityResource extends ContentEntity {
  type: 'community-resource';
  name: string;
  slug: string;
  description: string;
  url: string;
  resourceType: CommunityResourceType;
  icon?: MediaAssetReference;
  relatedTopics: Topic[];
}

export type CommunityResourceType = 
  | 'social-group'
  | 'directory'
  | 'documentation'
  | 'tool'
  | 'marketplace';

// Content Block: Narrative content, value propositions, explanations
export interface ContentBlock extends ContentEntity {
  type: 'content-block';
  title: string;
  slug: string;
  content: RichTextContent;
  contentType: ContentBlockType;
  topics: Topic[];
  relatedOrganizations?: OrganizationReference[];
  relatedResources?: CommunityResourceReference[];
  media?: MediaAssetReference[];
  callToActions?: CallToActionReference[];
}

export type ContentBlockType = 
  | 'value-proposition'
  | 'problem-statement'
  | 'solution-explanation'
  | 'benefit-description'
  | 'narrative'
  | 'introduction';

// FAQ Item: Question-answer pairs
export interface FAQItem extends ContentEntity {
  type: 'faq-item';
  question: string;
  answer: RichTextContent;
  topics: Topic[];
  relatedOrganizations?: OrganizationReference[];
  relatedContent?: ContentBlockReference[];
  order: number;
}

// Instructional Content: Step-by-step guides, tutorials
export interface InstructionalContent extends ContentEntity {
  type: 'instructional-content';
  title: string;
  slug: string;
  description: string;
  steps: InstructionStep[];
  prerequisites?: string[];
  relatedOrganization?: OrganizationReference;
  estimatedTime?: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
}

export interface InstructionStep {
  order: number;
  title: string;
  content: RichTextContent;
  context?: 'device' | 'web' | 'both';
  media?: MediaAssetReference[];
}

// Media Asset: Images, logos, documents
export interface MediaAsset extends ContentEntity {
  type: 'media-asset';
  filename: string;
  path: string;
  alt: string;
  mediaType: MediaType;
  dimensions?: {
    width: number;
    height: number;
  };
  purpose: MediaPurpose;
  relatedContent?: ContentEntityReference[];
}

export type MediaType = 'image' | 'logo' | 'document' | 'icon';
export type MediaPurpose = 
  | 'hero'
  | 'illustration'
  | 'logo'
  | 'instructional'
  | 'marketing-material'
  | 'decorative';

// Link Reference: External/internal links with semantic meaning
export interface LinkReference extends ContentEntity {
  type: 'link-reference';
  url: string;
  label: string;
  linkType: LinkType;
  isExternal: boolean;
  relatedContent?: ContentEntityReference[];
}

export type LinkType = 
  | 'documentation'
  | 'product'
  | 'community'
  | 'resource'
  | 'internal-anchor'
  | 'email';

// Call to Action: Actionable content elements
export interface CallToAction extends ContentEntity {
  type: 'call-to-action';
  label: string;
  actionType: ActionType;
  target: string; // URL, anchor, or function identifier
  priority: 'primary' | 'secondary';
  relatedContent?: ContentEntityReference[];
}

export type ActionType = 
  | 'navigate'
  | 'download'
  | 'external-link'
  | 'join-community'
  | 'apply'
  | 'contact';

// Rich text content with semantic structure
export interface RichTextContent {
  blocks: ContentBlockElement[];
}

export type ContentBlockElement = 
  | TextBlock
  | LinkBlock
  | HighlightBlock
  | ListBlock;

export interface TextBlock {
  type: 'text';
  content: string;
}

export interface LinkBlock {
  type: 'link';
  text: string;
  href: string;
  isExternal: boolean;
  linkReference?: string; // LinkReference id
}

export interface HighlightBlock {
  type: 'highlight';
  content: string;
  highlightType?: 'emphasis' | 'benefit' | 'warning';
}

export interface ListBlock {
  type: 'list';
  items: string[];
  listType: 'ordered' | 'unordered';
}

// References (for relationships)
export interface OrganizationReference {
  id: string;
  slug: string;
  name: string;
}

export interface CommunityResourceReference {
  id: string;
  slug: string;
  name: string;
}

export interface ContentBlockReference {
  id: string;
  slug: string;
  title: string;
}

export interface InstructionalContentReference {
  id: string;
  slug: string;
  title: string;
}

export interface MediaAssetReference {
  id: string;
  path: string;
  alt: string;
}

export interface CallToActionReference {
  id: string;
  label: string;
}

export interface ContentEntityReference {
  id: string;
  type: ContentType;
}

// Metadata
export interface ContentMetadata {
  topics: Topic[];
  tags?: string[];
  audience?: AudienceType[];
  language: string;
  version?: string;
}

export type Topic = 
  | 'bitcoin'
  | 'payments'
  | 'pos-systems'
  | 'merchants'
  | 'credit-card-fees'
  | 'setup-instructions'
  | 'community'
  | 'taxation'
  | 'volatility'
  | 'tipping'
  | 'customer-experience'
  | 'onboarding'
  | 'square'
  | 'web-based'
  | 'mobile-app'
  | 'self-hosted';

export type AudienceType = 
  | 'merchants'
  | 'bitcoiners'
  | 'small-business'
  | 'local-champions'
  | 'general-public';

