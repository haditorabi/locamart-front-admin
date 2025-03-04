import gql from "graphql-tag";

export const USERSCORE_LIST_QUERY = gql`
  query UserScore($limit: Int, $page: Int) {
    allUserScore(limit: $limit, page: $page) {
      items {
        createdAt
        id
        score
        userId
      }
      totalCount
    }
  }
`;
export const USERSCORE_SHOW_QUERY = gql`
  query UserScore($id: String!) {
    userScore(id: $id) {
      createdAt
      id
      score
      userId
    }
  }
`;
export const USERSCORE_DELETE_QUERY = gql`
  mutation UserScore($id: String!) {
    deleteUserScore(id: $id) {
      createdAt
      id
      score
      userId
    }
  }
`;
export const USERSCORE_EDIT_MUTATION = gql`
  mutation UserScore($id: String!, $data: UpdateUserScoreInput!) {
    updateUserScore(id: $id, data: $data) {
      createdAt
      id
      score
      userId
    }
  }
`;
export const USERSCORE_CREATE_MUTATION = gql`
  mutation UserScore($data: CreateUserScoreInput!) {
    createUserScore(data: $data) {
      createdAt
      id
      score
      userId
    }
  }
`;
