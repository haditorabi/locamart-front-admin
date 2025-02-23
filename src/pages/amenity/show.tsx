import { useShow, useOne } from "@refinedev/core";
import { Show, MarkdownField, DateField } from "@refinedev/chakra-ui";

import { Heading, Text, Spacer } from "@chakra-ui/react";
import { AMENITY_SHOW_QUERY } from "./queries";

export const AmenityShow: React.FC = () => {
  const { query: queryResult } = useShow<any>({
    meta: {
      gqlQuery: AMENITY_SHOW_QUERY,
    },
  });
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Heading as="h5" size="sm">
        Id
      </Heading>
      <Text mt={2}>{record?.id}</Text>

      <Heading as="h5" size="sm" mt={4}>
        Name
      </Heading>
      <Text mt={2}>{record?.name}</Text>

      <Heading as="h5" size="sm" mt={4}>
        Created At
      </Heading>
      <Spacer mt={2} />
      <DateField value={record?.createdAt} />
    </Show>
  );
};
