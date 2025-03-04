import gql from "graphql-tag";

export const USERFOLLOWING_LIST_QUERY = gql`
  query UserFollowing($limit: Int, $page: Int) {
    allUserFollowing(limit: $limit, page: $page) {
      items {
        createdAt
        followeeId
        followerId
        id
      }
      totalCount
    }
  }
`;
export const USERFOLLOWING_SHOW_QUERY = gql`
  query UserFollowing($id: String!) {
    userFollowing(id: $id) {
      createdAt
      followeeId
      followerId
      id
    }
  }
`;
export const USERFOLLOWING_DELETE_QUERY = gql`
  mutation UserFollowing($id: String!) {
    deleteUserFollowing(id: $id) {
      createdAt
      followeeId
      followerId
      id
    }
  }
`;
export const USERFOLLOWING_EDIT_MUTATION = gql`
  mutation UserFollowing($id: String!, $data: UpdateUserFollowingInput!) {
    updateUserFollowing(id: $id, data: $data) {
      createdAt
      followeeId
      followerId
      id
    }
  }
`;
export const USERFOLLOWING_CREATE_MUTATION = gql`
  mutation UserFollowing($data: CreateUserFollowingInput!) {
    createUserFollowing(data: $data) {
      createdAt
      followeeId
      followerId
      id
    }
  }
`;
