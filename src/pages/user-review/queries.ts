import gql from "graphql-tag";

export const USERREVIEW_LIST_QUERY = gql`
  query UserReview($limit: Int, $page: Int) {
    allUserReview(limit: $limit, page: $page) {
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
export const USERREVIEW_SHOW_QUERY = gql`
  query UserReview($id: String!) {
    userReview(id: $id) 
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const USERREVIEW_DELETE_QUERY = gql`
  mutation UserReview($id: String!) {
    deleteUserReview(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const USERREVIEW_EDIT_MUTATION = gql`
  mutation UserReview($id: String!, $data: UpdateUserReviewInput!) {
    updateUserReview(id: $id, data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const USERREVIEW_CREATE_MUTATION = gql`
  mutation UserReview($data: CreateUserReviewInput!) {
    createUserReview(data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
