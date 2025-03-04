import gql from "graphql-tag";

export const USERBLOCKED_LIST_QUERY = gql`
  query UserBlocked($limit: Int, $page: Int) {
    allUserBlocked(limit: $limit, page: $page) {
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
export const USERBLOCKED_SHOW_QUERY = gql`
  query UserBlocked($id: String!) {
    userBlocked(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const USERBLOCKED_DELETE_QUERY = gql`
  mutation UserBlocked($id: String!) {
    deleteUserBlocked(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const USERBLOCKED_EDIT_MUTATION = gql`
  mutation UserBlocked($id: String!, $data: UpdateUserBlockedInput!) {
    updateUserBlocked(id: $id, data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const USERBLOCKED_CREATE_MUTATION = gql`
  mutation UserBlocked($data: CreateUserBlockedInput!) {
    createUserBlocked(data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
