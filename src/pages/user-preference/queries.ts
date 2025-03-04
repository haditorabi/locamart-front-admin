import gql from "graphql-tag";

export const USERPREFERENCE_LIST_QUERY = gql`
  query UserPreference($limit: Int, $page: Int) {
    allUserPreference(limit: $limit, page: $page) {
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
export const USERPREFERENCE_SHOW_QUERY = gql`
  query UserPreference($id: String!) {
    userPreference(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const USERPREFERENCE_DELETE_QUERY = gql`
  mutation UserPreference($id: String!) {
    deleteUserPreference(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const USERPREFERENCE_EDIT_MUTATION = gql`
  mutation UserPreference($id: String!, $data: UpdateUserPreferenceInput!) {
    updateUserPreference(id: $id, data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const USERPREFERENCE_CREATE_MUTATION = gql`
  mutation UserPreference($data: CreateUserPreferenceInput!) {
    createUserPreference(data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
