import gql from "graphql-tag";

export const BUSINESSBOOKING_LIST_QUERY = gql`
  query BusinessBooking($limit: Int, $page: Int) {
    allBusinessBooking(limit: $limit, page: $page) {
      items {
        businessId
        businessProductId
        createdAt
        id
        maxAvailable
        maxGuest
        mediaId
        status
        updatedAt
      }
      totalCount
    }
  }
`;
export const BUSINESSBOOKING_SHOW_QUERY = gql`
  query BusinessBooking($id: String!) {
    businessBooking(id: $id) {
      businessId
      businessProductId
      createdAt
      id
      maxAvailable
      maxGuest
      mediaId
      status
      updatedAt
    }
  }
`;
export const BUSINESSBOOKING_DELETE_QUERY = gql`
  mutation BusinessBooking($id: String!) {
    deleteBusinessBooking(id: $id) {
      businessId
      businessProductId
      createdAt
      id
      maxAvailable
      maxGuest
      mediaId
      status
      updatedAt
    }
  }
`;
export const BUSINESSBOOKING_EDIT_MUTATION = gql`
  mutation BusinessBooking($id: String!, $data: UpdateBusinessBookingInput!) {
    updateBusinessBooking(id: $id, data: $data) {
      businessId
      businessProductId
      createdAt
      id
      maxAvailable
      maxGuest
      mediaId
      status
      updatedAt
    }
  }
`;
export const BUSINESSBOOKING_CREATE_MUTATION = gql`
  mutation BusinessBooking($data: CreateBusinessBookingInput!) {
    createBusinessBooking(data: $data) {
      businessId
      businessProductId
      createdAt
      id
      maxAvailable
      maxGuest
      mediaId
      status
      updatedAt
    }
  }
`;
