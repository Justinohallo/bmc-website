/**
 * Defines relationships between content entities
 * Based on information architecture relationship patterns
 */

import { ContentEntityReference, ContentType } from './content-types';

export interface ContentRelationship {
  source: ContentEntityReference;
  target: ContentEntityReference;
  relationshipType: RelationshipType;
  strength: 'strong' | 'moderate' | 'weak';
}

export type RelationshipType = 
  | 'references'        // Content references another entity
  | 'belongs-to'       // Hierarchical ownership
  | 'part-of'          // Composition relationship
  | 'related-to'        // General association
  | 'requires'          // Dependency
  | 'supports'         // Supporting content
  | 'explains'         // Explanatory relationship
  | 'replaces'         // Alternative/competitor
  | 'complements';     // Complementary content

// Relationship examples:
// - Organization "has" InstructionalContent (belongs-to)
// - ContentBlock "references" Organization (references)
// - FAQItem "explains" Topic (explains)
// - MediaAsset "supports" ContentBlock (supports)

