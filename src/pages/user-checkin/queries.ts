import gql from "graphql-tag";

export const USERCHECKIN_LIST_QUERY = gql`
  query UserCheckin($limit: Int, $page: Int) {
    allUserCheckin(limit: $limit, page: $page) {
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
export const USERCHECKIN_SHOW_QUERY = gql`
  query UserCheckin($id: String!) {
    userCheckin(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const USERCHECKIN_DELETE_QUERY = gql`
  mutation UserCheckin($id: String!) {
    deleteUserCheckin(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const USERCHECKIN_EDIT_MUTATION = gql`
  mutation UserCheckin($id: String!, $data: UpdateUserCheckinInput!) {
    updateUserCheckin(id: $id, data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const USERCHECKIN_CREATE_MUTATION = gql`
  mutation UserCheckin($data: CreateUserCheckinInput!) {
    createUserCheckin(data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
