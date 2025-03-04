import gql from "graphql-tag";

export const USERBOOKING_LIST_QUERY = gql`
  query UserBooking($limit: Int, $page: Int) {
    allUserBooking(limit: $limit, page: $page) {
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
export const USERBOOKING_SHOW_QUERY = gql`
  query UserBooking($id: String!) {
    userBooking(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const USERBOOKING_DELETE_QUERY = gql`
  mutation UserBooking($id: String!) {
    deleteUserBooking(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const USERBOOKING_EDIT_MUTATION = gql`
  mutation UserBooking($id: String!, $data: UpdateUserBookingInput!) {
    updateUserBooking(id: $id, data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const USERBOOKING_CREATE_MUTATION = gql`
  mutation UserBooking($data: CreateUserBookingInput!) {
    createUserBooking(data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
