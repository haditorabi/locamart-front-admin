import { useShow } from "@refinedev/core";
import { Show, MarkdownField, RefreshButton, DateField } from "@refinedev/antd";

import { Typography } from "antd";

import { AMENITY_SHOW_QUERY } from "./queries";

import type { GetFields } from "graphql/types";

const { Title, Text } = Typography;

export const AmenityShow = () => {
  const { query: queryResult } = useShow<GetFields<any>>({
    metaData: {
      gqlQuery: AMENITY_SHOW_QUERY,
    },
  });

  const { data, isLoading } = queryResult;
  const record = data?.data;
  return (
    <Show
      isLoading={isLoading}
      headerProps={{
        extra: (
          <RefreshButton
            onClick={() => {
              queryResult.refetch();
            }}
          />
        ),
      }}
    >
      <Title level={5}>Id</Title>
      <Text>{record?.id}</Text>

      <Title level={5}>Name</Title>
      <Text>{record?.name}</Text>

      <Title level={5}>CreatedAt</Title>
      <DateField value={record?.createdAt} />

      <Title level={5}>MediaId</Title>
      <Text>{record?.mediaId}</Text>
    </Show>
  );
};
