/**
 * Utility functions for rendering structured content
 */

import React from 'react';
import { Link, Text } from '@chakra-ui/react';
import { RichTextContent, ContentBlockElement } from '../schema/content-types';

interface RenderContentOptions {
  textProps?: Record<string, any>;
  linkProps?: Record<string, any>;
  highlightProps?: Record<string, any>;
}

export function renderRichTextContent(
  content: RichTextContent,
  options: RenderContentOptions = {}
): React.ReactNode[] {
  const { textProps = {}, linkProps = {}, highlightProps = {} } = options;
  
  return content.blocks.map((block, index) => {
    return renderContentBlock(block, index, { textProps, linkProps, highlightProps });
  });
}

function renderContentBlock(
  block: ContentBlockElement,
  key: number,
  options: RenderContentOptions
): React.ReactNode {
  const { textProps, linkProps, highlightProps } = options;

  switch (block.type) {
    case 'text':
      return (
        <Text key={key} as="span" {...textProps}>
          {block.content}
        </Text>
      );

    case 'link':
      return (
        <Link
          key={key}
          href={block.href}
          isExternal={block.isExternal}
          color="black"
          fontWeight="700"
          textDecoration="underline"
          _hover={{ color: "#00A651" }}
          {...linkProps}
        >
          {block.text}
        </Link>
      );

    case 'highlight':
      const highlightColor = block.highlightType === 'benefit' ? '#00A651' : 'black';
      return (
        <Text
          key={key}
          as="span"
          color={highlightColor}
          fontWeight="700"
          {...highlightProps}
        >
          {block.content}
        </Text>
      );

    case 'list':
      // Lists are handled separately by components
      return null;

    default:
      return null;
  }
}

export function renderTextBlocks(
  blocks: ContentBlockElement[],
  options: RenderContentOptions = {}
): React.ReactNode[] {
  return blocks
    .filter(block => block.type === 'text' || block.type === 'link' || block.type === 'highlight')
    .map((block, index) => renderContentBlock(block, index, options));
}

