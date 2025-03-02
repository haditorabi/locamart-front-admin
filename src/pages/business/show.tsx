import { useShow, useOne } from "@refinedev/core";
import { Show, MarkdownField, DateField } from "@refinedev/chakra-ui";

import { Heading, Text, Spacer, Link } from "@chakra-ui/react";
import { BUSINESS_SHOW_QUERY } from "./queries";

export const BusinessShow: React.FC = () => {
  const { query: queryResult } = useShow<any>({
    meta: {
      gqlQuery: BUSINESS_SHOW_QUERY,
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
        Description
      </Heading>
      <Text mt={2}>{record?.description}</Text>
      <Heading as="h5" size="sm" mt={4}>
        isClaimed
      </Heading>
      <Text mt={2}>{record?.isClaimed ? "✅" : "❌"}</Text>
      <Heading as="h5" size="sm" mt={4}>
        languageId
      </Heading>
      <Text mt={2}>{record?.languageId}</Text>
      <Heading as="h5" size="sm" mt={4}>
        mediaId
      </Heading>
      <Text mt={2}>{record?.mediaId}</Text>
      <Heading as="h5" size="sm" mt={4}>
        regionId
      </Heading>
      <Text mt={2}>{record?.regionId}</Text>
      <Heading as="h5" size="sm" mt={4}>
        status
      </Heading>
      <Text mt={2}>{record?.status}</Text>
      <Heading as="h5" size="sm" mt={4}>
        website
      </Heading>
      <Link mt={2} target="_blank" href={record?.website}>
        {record?.website}
      </Link>
      <Heading as="h5" size="sm" mt={4}>
        Created At
      </Heading>
      <Spacer mt={2} />
      <DateField value={record?.createdAt} />
    </Show>
  );
};
