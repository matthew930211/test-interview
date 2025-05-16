
import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from '@apollo/client';
import { gql } from '~/__generated__';
import { Box, TextInput, Checkbox, Text, Spinner } from '@primer/react';

const PRODUCTS_QUERY = gql(/* GraphQL */ `
  query ProductsList($query: String, $after: String) {
    products(channel: "europe", query: $query, first: 10, after: $after) {
      edges {
        node {
          id
          name
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`);

const PRODUCTS_BY_IDS = gql(/* GraphQL */ `
  query ProductsByIds($ids: [ID!]!) {
    nodes(ids: $ids) {
      ... on Product {
        id
        name
      }
    }
  }
`);

interface ProductSelectorProps {
  onSubmit: (selectedIds: string | string[]) => void;
  selectedIds?: string | string[];
  multiple?: boolean;
}

export const ProductSelector: React.FC<ProductSelectorProps> = ({
  onSubmit,
  selectedIds: initialSelectedIds = [],
  multiple = false,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIds, setSelectedIds] = useState<string[]>(
    Array.isArray(initialSelectedIds) ? initialSelectedIds : [initialSelectedIds]
  );
  const containerRef = useRef<HTMLDivElement>(null);

  const { loading, data, fetchMore } = useQuery(PRODUCTS_QUERY, {
    variables: { query: searchTerm },
  });

  const { data: preselectedData } = useQuery(PRODUCTS_BY_IDS, {
    variables: { ids: initialSelectedIds },
    skip: !initialSelectedIds?.length,
  });

  const handleSelect = (id: string) => {
    if (multiple) {
      setSelectedIds(prev => 
        prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
      );
    } else {
      setSelectedIds([id]);
      onSubmit(id);
    }
  };

  const handleSubmit = () => {
    if (multiple) {
      onSubmit(selectedIds);
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (
      scrollHeight - scrollTop <= clientHeight * 1.5 &&
      data?.products.pageInfo.hasNextPage &&
      !loading
    ) {
      fetchMore({
        variables: { after: data.products.pageInfo.endCursor },
      });
    }
  };

  const products = [
    ...(preselectedData?.nodes || []),
    ...(data?.products.edges.map(edge => edge.node) || []),
  ];

  return (
    <Box display="flex" flexDirection="column" height="400px">
      <TextInput
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search products..."
        mb={2}
      />
      
      <Box
        ref={containerRef}
        overflow="auto"
        flex={1}
        onScroll={handleScroll}
        borderColor="border.default"
        borderWidth={1}
        borderStyle="solid"
        borderRadius={2}
        p={2}
      >
        {products.map((product) => (
          <Box
            key={product.id}
            display="flex"
            alignItems="center"
            py={2}
            px={3}
            _hover={{ bg: 'neutral.subtle' }}
          >
            <Checkbox
              checked={selectedIds.includes(product.id)}
              onChange={() => handleSelect(product.id)}
            />
            <Text ml={2}>{product.name}</Text>
          </Box>
        ))}
        {loading && (
          <Box display="flex" justifyContent="center" py={4}>
            <Spinner />
          </Box>
        )}
      </Box>
      
      {multiple && (
        <Box mt={2}>
          <button onClick={handleSubmit}>
            Confirm Selection ({selectedIds.length})
          </button>
        </Box>
      )}
    </Box>
  );
};
