import gql from "graphql-tag";

export const BUSINESSFOLLOWING_LIST_QUERY = gql`
  query BusinessFollowing($limit: Int, $page: Int) {
    allBusinessFollowing(limit: $limit, page: $page) {
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
export const BUSINESSFOLLOWING_SHOW_QUERY = gql`
  query BusinessFollowing($id: String!) {
    businessFollowing(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const BUSINESSFOLLOWING_DELETE_QUERY = gql`
  mutation BusinessFollowing($id: String!) {
    deleteBusinessFollowing(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const BUSINESSFOLLOWING_EDIT_MUTATION = gql`
  mutation BusinessFollowing(
    $id: String!
    $data: UpdateBusinessFollowingInput!
  ) {
    updateBusinessFollowing(id: $id, data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const BUSINESSFOLLOWING_CREATE_MUTATION = gql`
  mutation BusinessFollowing($data: CreateBusinessFollowingInput!) {
    createBusinessFollowing(data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
