import gql from "graphql-tag";

export const USERBOOKMARK_LIST_QUERY = gql`
  query UserBookmark($limit: Int, $page: Int) {
    allUserBookmark(limit: $limit, page: $page) {
      items {
        createdAt
        id
        targetId
        targetType
        userId
      }
      totalCount
    }
  }
`;
export const USERBOOKMARK_SHOW_QUERY = gql`
  query UserBookmark($id: String!) {
    userBookmark(id: $id) {
      createdAt
      id
      targetId
      targetType
      userId
    }
  }
`;
export const USERBOOKMARK_DELETE_QUERY = gql`
  mutation UserBookmark($id: String!) {
    deleteUserBookmark(id: $id) {
      createdAt
      id
      targetId
      targetType
      userId
    }
  }
`;
export const USERBOOKMARK_EDIT_MUTATION = gql`
  mutation UserBookmark($id: String!, $data: UpdateUserBookmarkInput!) {
    updateUserBookmark(id: $id, data: $data) {
      createdAt
      id
      targetId
      targetType
      userId
    }
  }
`;
export const USERBOOKMARK_CREATE_MUTATION = gql`
  mutation UserBookmark($data: CreateUserBookmarkInput!) {
    createUserBookmark(data: $data) {
      createdAt
      id
      targetId
      targetType
      userId
    }
  }
`;
