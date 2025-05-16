import React, { useState, useRef } from 'react';
import { useQuery } from '@apollo/client';
import { PRODUCTS_QUERY, PRODUCTS_BY_IDS } from './queries';

interface ProductSelectorProps {
  initialSelectedIds?: string | string[];
  onSubmit: (selectedIds: string | string[]) => void;
  multiple?: boolean;
}

const ProductSelector: React.FC<ProductSelectorProps> = ({
  initialSelectedIds = [],
  onSubmit,
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
    }
  };

  const handleSubmit = () => {
    if (onSubmit) {
      if (multiple) {
        onSubmit(selectedIds);
      } else {
        onSubmit(selectedIds[0]);
      }
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

  return (
    <div ref={containerRef} onScroll={handleScroll}>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <ul>
        {data?.products.edges.map(({ node }: any) => (
          <li key={node.id}>
            <label>
              <input
                type="checkbox"
                checked={selectedIds.includes(node.id)}
                onChange={() => handleSelect(node.id)}
                disabled={!multiple && selectedIds.includes(node.id)}
              />
              {node.name}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Confirm Selection</button>
    </div>
  );
};

export default ProductSelector;
