import gql from "graphql-tag";

export const USER_LIST_QUERY = gql`
  query User($limit: Int, $page: Int) {
    allUser(limit: $limit, page: $page) {
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
export const USER_SHOW_QUERY = gql`
  query User($id: String!) {
    user(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const USER_DELETE_QUERY = gql`
  mutation User($id: String!) {
    deleteUser(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const USER_EDIT_MUTATION = gql`
  mutation User($id: String!, $data: UpdateUserInput!) {
    updateUser(id: $id, data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const USER_CREATE_MUTATION = gql`
  mutation User($data: CreateUserInput!) {
    createUser(data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
