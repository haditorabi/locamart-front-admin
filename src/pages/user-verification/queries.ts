import gql from "graphql-tag";

export const USERVERIFICATION_LIST_QUERY = gql`
  query UserVerification($limit: Int, $page: Int) {
    allUserVerification(limit: $limit, page: $page) {
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
export const USERVERIFICATION_SHOW_QUERY = gql`
  query UserVerification($id: String!) {
    userVerification(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const USERVERIFICATION_DELETE_QUERY = gql`
  mutation UserVerification($id: String!) {
    deleteUserVerification(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const USERVERIFICATION_EDIT_MUTATION = gql`
  mutation UserVerification($id: String!, $data: UpdateUserVerificationInput!) {
    updateUserVerification(id: $id, data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const USERVERIFICATION_CREATE_MUTATION = gql`
  mutation UserVerification($data: CreateUserVerificationInput!) {
    createUserVerification(data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
