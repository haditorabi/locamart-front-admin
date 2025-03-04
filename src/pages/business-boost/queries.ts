import gql from "graphql-tag";

export const BUSINESSBOOST_LIST_QUERY = gql`
  query BusinessBoost($limit: Int, $page: Int) {
    allBusinessBoost(limit: $limit, page: $page) {
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
export const BUSINESSBOOST_SHOW_QUERY = gql`
  query BusinessBoost($id: String!) {
    businessBoost(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const BUSINESSBOOST_DELETE_QUERY = gql`
  mutation BusinessBoost($id: String!) {
    deleteBusinessBoost(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const BUSINESSBOOST_EDIT_MUTATION = gql`
  mutation BusinessBoost($id: String!, $data: UpdateBusinessBoostInput!) {
    updateBusinessBoost(id: $id, data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const BUSINESSBOOST_CREATE_MUTATION = gql`
  mutation BusinessBoost($data: CreateBusinessBoostInput!) {
    createBusinessBoost(data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
