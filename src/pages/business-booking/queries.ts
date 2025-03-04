import gql from "graphql-tag";

export const BUSINESSBOOKING_LIST_QUERY = gql`
  query BusinessBooking($limit: Int, $page: Int) {
    allBusinessBooking(limit: $limit, page: $page) {
      items {
        createdAt
        id
        mediaId
        name
      }
      totalCount
    }
  }
`;
export const BUSINESSBOOKING_SHOW_QUERY = gql`
  query BusinessBooking($id: String!) {
    businessBooking(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const BUSINESSBOOKING_DELETE_QUERY = gql`
  mutation BusinessBooking($id: String!) {
    deleteBusinessBooking(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const BUSINESSBOOKING_EDIT_MUTATION = gql`
  mutation BusinessBooking($id: String!, $data: UpdateBusinessBookingInput!) {
    updateBusinessBooking(id: $id, data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const BUSINESSBOOKING_CREATE_MUTATION = gql`
  mutation BusinessBooking($data: CreateBusinessBookingInput!) {
    createBusinessBooking(data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
