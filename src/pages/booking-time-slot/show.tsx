import { useShow, useOne } from "@refinedev/core";
import { Show, MarkdownField, DateField } from "@refinedev/chakra-ui";

import { Heading, Text, Spacer } from "@chakra-ui/react";
import { BOOKINGTIMESLOT_SHOW_QUERY } from "./queries";

export const BookingTimeSlotShow: React.FC = () => {
  const { query: queryResult } = useShow<any>({
    meta: {
      gqlQuery: BOOKINGTIMESLOT_SHOW_QUERY,
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
        Status
      </Heading>
      <Text mt={2}>{record?.status}</Text>
      <Heading as="h5" size="sm" mt={4}>
        TimeZone
      </Heading>
      <Text mt={2}>{record?.timezone}</Text>
      <Heading as="h5" size="sm" mt={4}>
        Start At
      </Heading>
      <DateField value={record?.startAt} />
      <Heading as="h5" size="sm" mt={4}>
        End At
      </Heading>
      <DateField value={record?.endAt} />
      <Spacer mt={2} />
    </Show>
  );
};
