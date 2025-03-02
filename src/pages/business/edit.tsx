import { useEffect } from "react";
import { BooleanField, Edit } from "@refinedev/chakra-ui";
import {
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { useSelect } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";
import { BUSINESS_EDIT_MUTATION, BUSINESS_SHOW_QUERY } from "./queries";

export const BusinessEdit = () => {
  const {
    refineCore: { formLoading, query: queryResult },
    saveButtonProps,
    register,
    formState: { errors },
    resetField,
    setValue,
  } = useForm<any>({
    refineCoreProps: {
      metaData: {
        gqlMutation: BUSINESS_EDIT_MUTATION,
      },
      queryMeta: { gqlQuery: BUSINESS_SHOW_QUERY },
    },
  });
  useEffect(() => {
    if (queryResult?.data?.data?.isClaimed !== undefined) {
      setValue("isClaimed", queryResult.data.data.isClaimed);
    }
  }, [setValue]);

  return (
    <Edit isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <FormControl mb="3" isInvalid={!!errors?.name}>
        <FormLabel mt="4">Name</FormLabel>
        <Input id="name" type="text" {...register("name")} />
        <FormErrorMessage>{`${errors.name?.message}`}</FormErrorMessage>
        <FormLabel mt="4">Description</FormLabel>
        <Input id="description" type="text" {...register("description")} />
        <FormErrorMessage>{`${errors.description?.message}`}</FormErrorMessage>
        <FormLabel mt="4">isClaimed</FormLabel>
        <Checkbox id="isClaimed" {...register("isClaimed")} />
        <FormErrorMessage>{`${errors.isClaimed?.message}`}</FormErrorMessage>
        <FormLabel mt="4">languageId</FormLabel>
        <Input id="languageId" type="text" {...register("languageId")} />
        <FormErrorMessage>{`${errors.languageId?.message}`}</FormErrorMessage>
        <FormLabel mt="4">mediaId</FormLabel>
        <Input id="mediaId" type="text" {...register("mediaId")} />
        <FormErrorMessage>{`${errors.mediaId?.message}`}</FormErrorMessage>
        <FormLabel mt="4">regionId</FormLabel>
        <Input id="regionId" type="text" {...register("regionId")} />
        <FormErrorMessage>{`${errors.regionId?.message}`}</FormErrorMessage>
        <FormLabel mt="4">website</FormLabel>
        <Input id="website" type="text" {...register("website")} />
        <FormErrorMessage>{`${errors.website?.message}`}</FormErrorMessage>
        <FormLabel mt="4">status</FormLabel>
        <Input id="status" type="text" {...register("status")} />
        <FormErrorMessage>{`${errors.status?.message}`}</FormErrorMessage>
      </FormControl>
    </Edit>
  );
};
