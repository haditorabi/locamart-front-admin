import { Create, useForm } from "@refinedev/antd";

import { Form, Input } from "antd";

import type { GetFields } from "graphql/types";
import { AMENITY_CREATE_MUTATION } from "./queries";
import { CreateAmenityInput } from "graphql/schema.types";

export const AmenityCreate = () => {
  const { formProps, saveButtonProps } = useForm<GetFields<CreateAmenityInput>>(
    {
      meta: { gqlMutation: AMENITY_CREATE_MUTATION },
    }
  );

  return (
    <Create saveButtonProps={saveButtonProps}>
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
    </Create>
  );
};
