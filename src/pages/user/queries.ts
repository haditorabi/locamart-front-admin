import gql from "graphql-tag";

export const USER_LIST_QUERY = gql`
  query User($limit: Int, $page: Int) {
    allUser(limit: $limit, page: $page) {
      items {
        createdAt
        email
        firstName
        id
        lastName
        name
        updatedAt
      }
      totalCount
    }
  }
`;
export const USER_SHOW_QUERY = gql`
  query User($id: String!) {
    user(id: $id) {
      createdAt
      email
      firstName
      id
      lastName
      name
      updatedAt
    }
  }
`;
export const USER_DELETE_QUERY = gql`
  mutation User($id: String!) {
    deleteUser(id: $id) {
      createdAt
      email
      firstName
      id
      lastName
      name
      updatedAt
    }
  }
`;
export const USER_EDIT_MUTATION = gql`
  mutation User($id: String!, $data: UpdateUserInput!) {
    updateUser(id: $id, data: $data) {
      createdAt
      email
      firstName
      id
      lastName
      name
      updatedAt
    }
  }
`;
export const USER_CREATE_MUTATION = gql`
  mutation User($data: CreateUserInput!) {
    createUser(data: $data) {
      createdAt
      email
      firstName
      id
      lastName
      name
      updatedAt
    }
  }
`;
