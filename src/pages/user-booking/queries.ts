import gql from "graphql-tag";

export const USERBOOKING_LIST_QUERY = gql`
  query UserBooking($limit: Int, $page: Int) {
    allUserBooking(limit: $limit, page: $page) {
      items {
        bookingTimeSlotId
        businessProductId
        createdAt
        id
        status
        updatedAt
        userId
      }
      totalCount
    }
  }
`;
export const USERBOOKING_SHOW_QUERY = gql`
  query UserBooking($id: String!) {
    userBooking(id: $id) {
      bookingTimeSlotId
      businessProductId
      createdAt
      id
      status
      updatedAt
      userId
    }
  }
`;
export const USERBOOKING_DELETE_QUERY = gql`
  mutation UserBooking($id: String!) {
    deleteUserBooking(id: $id) {
      bookingTimeSlotId
      businessProductId
      createdAt
      id
      status
      updatedAt
      userId
    }
  }
`;
export const USERBOOKING_EDIT_MUTATION = gql`
  mutation UserBooking($id: String!, $data: UpdateUserBookingInput!) {
    updateUserBooking(id: $id, data: $data) {
      bookingTimeSlotId
      businessProductId
      createdAt
      id
      status
      updatedAt
      userId
    }
  }
`;
export const USERBOOKING_CREATE_MUTATION = gql`
  mutation UserBooking($data: CreateUserBookingInput!) {
    createUserBooking(data: $data) {
      bookingTimeSlotId
      businessProductId
      createdAt
      id
      status
      updatedAt
      userId
    }
  }
`;
