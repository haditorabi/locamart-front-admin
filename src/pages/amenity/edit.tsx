import { useEffect } from "react";
import { Edit } from "@refinedev/chakra-ui";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { useSelect } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";
import { AMENITY_EDIT_MUTATION, AMENITY_SHOW_QUERY } from "./queries";

export const AmenityEdit = () => {
  const {
    refineCore: { formLoading, query: queryResult },
    saveButtonProps,
    register,
    formState: { errors },
    resetField,
  } = useForm<any>({
    refineCoreProps: {
      metaData: {
        gqlMutation: AMENITY_EDIT_MUTATION,
      },
      queryMeta: { gqlQuery: AMENITY_SHOW_QUERY },
    },
  });

  return (
    <Edit isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <FormControl mb="3" isInvalid={!!errors?.name}>
        <FormLabel>Name</FormLabel>
        <Input
          id="name"
          type="text"
          {...register("name", { required: "name is required" })}
        />
        <FormErrorMessage>{`${errors.name?.message}`}</FormErrorMessage>
      </FormControl>
    </Edit>
  );
};
