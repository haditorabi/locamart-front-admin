import gql from "graphql-tag";

export const BOOKINGTIMESLOT_LIST_QUERY = gql`
  query BookingTimeSlot($limit: Int, $page: Int) {
    allBookingTimeSlot(limit: $limit, page: $page) {
      totalCount
      items {
        id
        endAt
        startAt
        status
        timezone
      }
    }
  }
`;
export const BOOKINGTIMESLOT_SHOW_QUERY = gql`
  query BookingTimeSlot($id: String!) {
    bookingTimeSlot(id: $id) {
      endAt
      id
      startAt
      status
      timezone
      businessBooking {
        id
      }
    }
  }
`;
export const BOOKINGTIMESLOT_DELETE_QUERY = gql`
  mutation BookingTimeSlot($id: String!) {
    deleteBookingTimeSlot(id: $id) {
      endAt
      id
      startAt
      status
      timezone
    }
  }
`;
export const BOOKINGTIMESLOT_EDIT_MUTATION = gql`
  mutation BookingTimeSlot($id: String!, $data: UpdateBookingTimeSlotInput!) {
    updateBookingTimeSlot(id: $id, data: $data) {
      id
      endAt
      startAt
      status
      timezone
    }
  }
`;
export const BOOKINGTIMESLOT_CREATE_MUTATION = gql`
  mutation BookingTimeSlot($data: CreateBookingTimeSlotInput!) {
    createBookingTimeSlot(data: $data) {
      id
      endAt
      startAt
      status
      timezone
    }
  }
`;
