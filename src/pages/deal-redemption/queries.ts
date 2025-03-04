import gql from "graphql-tag";

export const DEALREDEMTION_LIST_QUERY = gql`
  query DealsRedemption($limit: Int, $page: Int) {
    allDealsRedemption(limit: $limit, page: $page) {
      items {
        businessDealId
        createdAt
        expiresAt
        id
        redeemedAt
        status
        updatedAt
        userId
      }
      totalCount
    }
  }
`;
export const DEALREDEMTION_SHOW_QUERY = gql`
  query DealsRedemption($id: String!) {
    dealsRedemption(id: $id) {
      businessDealId
      createdAt
      expiresAt
      id
      redeemedAt
      status
      updatedAt
      userId
    }
  }
`;
export const DEALREDEMTION_DELETE_QUERY = gql`
  mutation DealsRedemption($id: String!) {
    deleteDealsRedemption(id: $id) {
      businessDealId
      createdAt
      expiresAt
      id
      redeemedAt
      status
      updatedAt
      userId
    }
  }
`;
export const DEALREDEMTION_EDIT_MUTATION = gql`
  mutation DealsRedemption($id: String!, $data: UpdateDealsRedemptionInput!) {
    updateDealsRedemption(id: $id, data: $data) {
      businessDealId
      createdAt
      expiresAt
      id
      redeemedAt
      status
      updatedAt
      userId
    }
  }
`;
export const DEALREDEMTION_CREATE_MUTATION = gql`
  mutation DealsRedemption($data: CreateDealsRedemptionInput!) {
    createDealsRedemption(data: $data) {
      businessDealId
      createdAt
      expiresAt
      id
      redeemedAt
      status
      updatedAt
      userId
    }
  }
`;
