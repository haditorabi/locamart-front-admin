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
import {
  BOOKINGTIMESLOT_EDIT_MUTATION,
  BOOKINGTIMESLOT_SHOW_QUERY,
} from "./queries";

export const BookingTimeSlotEdit = () => {
  const {
    refineCore: { formLoading, onFinish, query },
    saveButtonProps,
    register,
    handleSubmit,
    formState: { errors },
    resetField,
    reset,
  } = useForm<any>({
    refineCoreProps: {
      metaData: {
        gqlMutation: BOOKINGTIMESLOT_EDIT_MUTATION,
      },
      queryMeta: { gqlQuery: BOOKINGTIMESLOT_SHOW_QUERY },
    },
  });
  useEffect(() => {
    if (query?.data?.data) {
      const { startAt, endAt, businessBooking } = query.data.data;
      reset((prevValues) => {
        const businessBookingId = businessBooking ? businessBooking.id : "";
        const formattedStartAt = startAt
          ? new Date(startAt).toISOString().split("T")[0]
          : "";
        const formattedEndAt = endAt
          ? new Date(endAt).toISOString().split("T")[0]
          : "";
        if (
          prevValues.businessBookingId !== businessBookingId ||
          prevValues.startAt !== formattedStartAt ||
          prevValues.endAt !== formattedEndAt
        ) {
          return {
            startAt: formattedStartAt,
            endAt: formattedEndAt,
            businessBookingId,
          };
        }
        return prevValues;
      });
    }
  }, [query?.data?.data, reset]);
  const onSubmit = (formData: any) => {
    const formattedData = {
      ...formData,
      startAt: formData.startAt.toISOString(),
      endAt: formData.endAt.toISOString(),
    };
    onFinish(formattedData);
  };

  return (
    <Edit isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <FormControl mb="3" isInvalid={!!errors?.businessBookingId}>
        <FormLabel>Business Booking Id</FormLabel>
        <Input
          id="businessBookingId"
          type="text"
          disabled
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
    </Edit>
  );
};
