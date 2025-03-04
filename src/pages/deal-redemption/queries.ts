import gql from "graphql-tag";

export const DEALREDEMTION_LIST_QUERY = gql`
  query DealsRedemption($limit: Int, $page: Int) {
    allDealsRedemption(limit: $limit, page: $page) {
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
export const DEALREDEMTION_SHOW_QUERY = gql`
  query DealsRedemption($id: String!) {
    dealsRedemption(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const DEALREDEMTION_DELETE_QUERY = gql`
  mutation DealsRedemption($id: String!) {
    deleteDealsRedemption(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const DEALREDEMTION_EDIT_MUTATION = gql`
  mutation DealsRedemption($id: String!, $data: UpdateDealsRedemptionInput!) {
    updateDealsRedemption(id: $id, data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const DEALREDEMTION_CREATE_MUTATION = gql`
  mutation DealsRedemption($data: CreateDealsRedemptionInput!) {
    createDealsRedemption(data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
