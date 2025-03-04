import { useEffect } from "react";
import { Create, Edit } from "@refinedev/chakra-ui";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { useForm } from "@refinedev/react-hook-form";
import { BOOKINGTIMESLOT_CREATE_MUTATION } from "./queries";

export const BookingTimeSlotCreate = () => {
  const {
    refineCore: { formLoading, onFinish },
    saveButtonProps,
    register,
    handleSubmit,
    formState: { errors },
    resetField,
    reset,
  } = useForm<any>({
    refineCoreProps: {
      metaData: {
        gqlMutation: BOOKINGTIMESLOT_CREATE_MUTATION,
      },
    },
  });
  const onSubmit = (formData: any) => {
    const formattedData = {
      ...formData,
      startAt: formData.startAt.toISOString(),
      endAt: formData.endAt.toISOString(),
    };
    onFinish(formattedData);
  };

  return (
    <Create saveButtonProps={saveButtonProps}>
      <FormControl mb="3" isInvalid={!!errors?.businessBookingId}>
        <FormLabel>Business Booking Id</FormLabel>
        <Input
          id="businessBookingId"
          type="text"
          {...register("businessBookingId")}
        />
        <FormErrorMessage>{`${errors.businessBookingId?.message}`}</FormErrorMessage>
      </FormControl>
      <FormControl
        mb="3"
        isInvalid={!!errors?.status}
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormLabel>Status</FormLabel>
        <Select id="status" placeholder="Select Status" {...register("status")}>
          <option value="SUSPENDED">SUSPENDED</option>
          <option value="ACTIVE">ACTIVE</option>
          <option value="CLOSED">CLOSED</option>
          <option value="CANCELED">CANCELED</option>
        </Select>
        <FormErrorMessage>{`${errors.status?.message}`}</FormErrorMessage>
      </FormControl>
      <FormControl mb="3" isInvalid={!!errors?.startAt}>
        <FormLabel>Start At</FormLabel>
        <Input
          id="startAt"
          type="date"
          {...register("startAt", {
            setValueAs: (value) => new Date(value),
          })}
        />
        <FormErrorMessage>{`${errors.startAt?.message}`}</FormErrorMessage>
      </FormControl>
      <FormControl mb="3" isInvalid={!!errors?.endAt}>
        <FormLabel>End At</FormLabel>
        <Input
          id="endAt"
          type="date"
          {...register("endAt", {
            setValueAs: (value) => new Date(value),
          })}
        />
        <FormErrorMessage>{`${errors.endAt?.message}`}</FormErrorMessage>
      </FormControl>
      <FormControl mb="3" isInvalid={!!errors?.timezone}>
        <FormLabel>Timezone</FormLabel>
        <Input
          id="timezone"
          type="text"
          className="uppercase"
          {...register("timezone", {
            setValueAs: (value) => value.toUpperCase(),
            minLength: {
              value: 3,
              message: "Timezone must be exactly 3 characters",
            },
            maxLength: {
              value: 3,
              message: "Timezone must be exactly 3 characters",
            },
          })}
        />
        <FormErrorMessage>{`${errors.timezone?.message}`}</FormErrorMessage>
      </FormControl>
    </Create>
  );
};
