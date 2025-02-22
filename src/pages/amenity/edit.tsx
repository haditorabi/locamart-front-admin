import { Edit, ListButton, RefreshButton, useForm } from "@refinedev/antd";

import { Form, Input } from "antd";

import { AMENITY_EDIT_MUTATION, AMENITY_SHOW_QUERY } from "./queries";
import type { GetFields } from "graphql/types";

export const AmenityEdit = () => {
  const {
    formProps,
    saveButtonProps,
    query: queryResult,
  } = useForm<GetFields<any>>({
    metaData: {
      gqlMutation: AMENITY_EDIT_MUTATION,
    },
    queryMeta: { gqlQuery: AMENITY_SHOW_QUERY },
  });

  return (
    <Edit
      headerProps={{
        extra: (
          <>
            <ListButton />
            <RefreshButton onClick={() => queryResult?.refetch()} />
          </>
        ),
      }}
      saveButtonProps={saveButtonProps}
    >
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Edit>
  );
};
