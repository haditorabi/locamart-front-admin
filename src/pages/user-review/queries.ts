import gql from "graphql-tag";

export const USERREVIEW_LIST_QUERY = gql`
  query UserReview($limit: Int, $page: Int) {
    allUserReview(limit: $limit, page: $page) {
      items {
        content
        createdAt
        id
        mediaId
        rating
        status
        targetId
        targetType
        updatedAt
        userId
      }
      totalCount
    }
  }
`;
export const USERREVIEW_SHOW_QUERY = gql`
  query UserReview($id: String!) {
    userReview(id: $id)
    items {
      content
      createdAt
      id
      mediaId
      rating
      status
      targetId
      targetType
      updatedAt
      userId
    }
  }
`;
export const USERREVIEW_DELETE_QUERY = gql`
  mutation UserReview($id: String!) {
    deleteUserReview(id: $id) {
      content
      createdAt
      id
      mediaId
      rating
      status
      targetId
      targetType
      updatedAt
      userId
    }
  }
`;
export const USERREVIEW_EDIT_MUTATION = gql`
  mutation UserReview($id: String!, $data: UpdateUserReviewInput!) {
    updateUserReview(id: $id, data: $data) {
      content
      createdAt
      id
      mediaId
      rating
      status
      targetId
      targetType
      updatedAt
      userId
    }
  }
`;
export const USERREVIEW_CREATE_MUTATION = gql`
  mutation UserReview($data: CreateUserReviewInput!) {
    createUserReview(data: $data) {
      content
      createdAt
      id
      mediaId
      rating
      status
      targetId
      targetType
      updatedAt
      userId
    }
  }
`;
