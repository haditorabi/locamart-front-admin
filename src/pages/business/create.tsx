import { Create } from "@refinedev/chakra-ui";
import {
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useForm } from "@refinedev/react-hook-form";
import { BUSINESS_CREATE_MUTATION } from "./queries";
const URL_REGEX = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

export const BusinessCreate = () => {
  const {
    refineCore: { formLoading, onFinish },
    saveButtonProps,
    register,
    formState: { errors },
    resetField,
    setValue,
    handleSubmit,
  } = useForm<any>({
    refineCoreProps: {
      metaData: {
        gqlMutation: BUSINESS_CREATE_MUTATION,
      },
    },
  });
  const onSubmit = async (data: any, event?: React.BaseSyntheticEvent) => {
    const cleanedData = Object.fromEntries(
      Object.entries(data).filter(
        ([_, value]) => value !== "" && value !== null && value !== undefined
      )
    );
    await onFinish?.(cleanedData);
  };
  return (
    <Create
      isLoading={formLoading}
      saveButtonProps={{
        ...saveButtonProps,
        onClick: handleSubmit(onSubmit), // Ensure cleaned data is submitted
      }}
    >
      <FormControl mb="3" isInvalid={!!errors?.name}>
        <FormLabel mt="4">Name</FormLabel>
        <Input
          id="name"
          type="text"
          {...register("name", { required: true })}
        />
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
        <Input
          id="regionId"
          type="text"
          {...register("regionId", { required: true })}
        />
        <FormErrorMessage>{`${errors.regionId?.message}`}</FormErrorMessage>
        <FormLabel mt="4">website</FormLabel>
        <Input
          id="website"
          type="text"
          {...register("website", {
            pattern: {
              value: URL_REGEX,
              message: "Enter a valid URL",
            },
          })}
        />
        <FormErrorMessage>{`${errors.website?.message}`}</FormErrorMessage>
        <FormLabel mt="4">status</FormLabel>
        <Input
          id="status"
          type="text"
          {...register("status", { required: true })}
        />
        <FormErrorMessage>{`${errors.status?.message}`}</FormErrorMessage>
      </FormControl>
    </Create>
  );
};
