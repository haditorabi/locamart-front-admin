import { Create } from "@refinedev/chakra-ui";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { useSelect } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";
import { AMENITY_CREATE_MUTATION } from "./queries";

export const AmenityCreate = () => {
  const {
    refineCore: { formLoading },
    saveButtonProps,
    register,
    formState: { errors },
  } = useForm<any>({
    refineCoreProps: {
      metaData: {
        gqlMutation: AMENITY_CREATE_MUTATION,
      },
    },
  });

  const { options } = useSelect({
    resource: "categories",
  });

  return (
    <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <FormControl mb="3" isInvalid={!!errors?.title}>
        <FormLabel>Name</FormLabel>
        <Input
          id="name"
          type="text"
          {...register("name", { required: "name is required" })}
        />
        <FormErrorMessage>{`${errors.name?.message}`}</FormErrorMessage>
      </FormControl>
    </Create>
  );
};
