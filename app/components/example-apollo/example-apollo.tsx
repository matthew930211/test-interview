import { useQuery } from "@apollo/client";
import { TriangleDownIcon } from "@primer/octicons-react";
import { Button, FormControl, SelectPanel } from "@primer/react";
import type { ActionListItemInput } from "@primer/react/deprecated";

import type { FC } from "react";
import React from "react";
import { gql } from "~/__generated__";

const PRODUCTS_QUERY = gql(/* GraphQL */ `
  query ProductsPicker($query: String) {
    products(channel: "europe", query: $query, first: 10) {
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

const items: ActionListItemInput[] = [
  { text: "Choice one" },
  { text: "Choice two" },
  { text: "Choice three" },
  { text: "Choice four" },
  { text: "Choice five" },
];

// Example showing how to use Apollo Client's useQuery hook
export const ExampleApollo: FC = () => {
  const { data } = useQuery(PRODUCTS_QUERY, {});

  const [selected, setSelected] = React.useState<
    ActionListItemInput | undefined
  >(items[0]);
  const [filter, setFilter] = React.useState("");
  const filteredItems = items.filter(
    (item) =>
      item.text === selected?.text ||
      item.text?.toLowerCase().startsWith(filter.toLowerCase())
  );
  const [open, setOpen] = React.useState(false);

  // your rendering logic here
  return (
    <FormControl>
      <FormControl.Label>Choice</FormControl.Label>
      <SelectPanel
        renderAnchor={({ children, ...anchorProps }) => (
          <Button
            {...anchorProps}
            trailingAction={TriangleDownIcon}
            aria-haspopup="dialog"
          >
            {children}
          </Button>
        )}
        placeholder="Pick one choice"
        open={open}
        onOpenChange={setOpen}
        items={filteredItems}
        selected={selected}
        onSelectedChange={setSelected}
        onFilterChange={setFilter}
      />
    </FormControl>
  );
};
