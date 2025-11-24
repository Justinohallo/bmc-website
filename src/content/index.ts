/**
 * Content API - provides structured access to content entities
 * This is the single source of truth for all content
 */

import { organizations } from './entities/organizations';
import { communityResources } from './entities/community-resources';
import { contentBlocks } from './entities/content-blocks';
import { faqItems } from './entities/faq-items';
import { instructionalContent } from './entities/instructional-content';
import { mediaAssets } from './entities/media-assets';
import { callToActions } from './entities/call-to-actions';
import { links } from './entities/links';
import { ContentEntity, ContentType, Topic, AudienceType, ContentBlock, CallToAction, MediaAsset } from './schema/content-types';

class ContentRepository {
  private entities: Map<string, ContentEntity> = new Map();

  constructor() {
    // Index all entities
    const allEntities: ContentEntity[] = [
      ...organizations,
      ...communityResources,
      ...contentBlocks,
      ...faqItems,
      ...instructionalContent,
      ...mediaAssets,
      ...callToActions,
      ...links
    ];

    allEntities.forEach(entity => {
      this.entities.set(entity.id, entity);
    });
  }

  // Query methods
  findByType<T extends ContentEntity>(type: ContentType): T[] {
    return Array.from(this.entities.values()).filter(e => e.type === type) as T[];
  }

  findById(id: string): ContentEntity | undefined {
    return this.entities.get(id);
  }

  findByTopic(topic: Topic): ContentEntity[] {
    return Array.from(this.entities.values()).filter(e => 
      e.metadata.topics.includes(topic)
    );
  }

  findByAudience(audience: AudienceType): ContentEntity[] {
    return Array.from(this.entities.values()).filter(e => 
      e.metadata.audience?.includes(audience)
    );
  }

  findBySlug(slug: string, type?: ContentType): ContentEntity | undefined {
    const entities = type 
      ? this.findByType(type)
      : Array.from(this.entities.values());
    
    return entities.find(e => {
      if ('slug' in e) {
        return e.slug === slug;
      }
      return false;
    });
  }

  // Specific getters
  getOrganizations() {
    return this.findByType('organization');
  }

  getOrganizationBySlug(slug: string) {
    return this.findBySlug(slug, 'organization');
  }

  getContentBlocks() {
    return this.findByType('content-block');
  }

  getContentBlockBySlug(slug: string): ContentBlock | undefined {
    return this.findBySlug(slug, 'content-block') as ContentBlock | undefined;
  }

  getFAQItems() {
    const items = this.findByType('faq-item') as Array<ContentEntity & { order: number }>;
    return items.sort((a, b) => a.order - b.order);
  }

  getCommunityResources() {
    return this.findByType('community-resource');
  }

  getCommunityResourceBySlug(slug: string) {
    return this.findBySlug(slug, 'community-resource');
  }

  getInstructionalContent() {
    return this.findByType('instructional-content');
  }

  getInstructionalContentBySlug(slug: string) {
    return this.findBySlug(slug, 'instructional-content');
  }

  getMediaAssets() {
    return this.findByType('media-asset');
  }

  getMediaAssetById(id: string): MediaAsset | undefined {
    const asset = this.findById(id);
    return asset?.type === 'media-asset' ? (asset as MediaAsset) : undefined;
  }

  getCallToActions() {
    return this.findByType('call-to-action');
  }

  getCallToActionById(id: string): CallToAction | undefined {
    const cta = this.findById(id);
    return cta?.type === 'call-to-action' ? (cta as CallToAction) : undefined;
  }

  getLinks() {
    return this.findByType('link-reference');
  }
}

export const content = new ContentRepository();

// Export types for use in components
export type {
  ContentEntity,
  ContentType,
  Organization,
  CommunityResource,
  ContentBlock,
  FAQItem,
  InstructionalContent,
  MediaAsset,
  CallToAction,
  LinkReference,
  RichTextContent,
  ContentBlockElement,
  Topic,
  AudienceType
} from './schema/content-types';

