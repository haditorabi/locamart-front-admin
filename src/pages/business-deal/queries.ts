import gql from "graphql-tag";

export const BUSINESSDEAL_LIST_QUERY = gql`
  query BusinessDeal($limit: Int, $page: Int) {
    allBusinessDeal(limit: $limit, page: $page) {
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
export const BUSINESSDEAL_SHOW_QUERY = gql`
  query BusinessDeal($id: String!) {
    businessDeal(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const BUSINESSDEAL_DELETE_QUERY = gql`
  mutation BusinessDeal($id: String!) {
    deleteBusinessDeal(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const BUSINESSDEAL_EDIT_MUTATION = gql`
  mutation BusinessDeal($id: String!, $data: UpdateBusinessDealInput!) {
    updateBusinessDeal(id: $id, data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const BUSINESSDEAL_CREATE_MUTATION = gql`
  mutation BusinessDeal($data: CreateBusinessDealInput!) {
    createBusinessDeal(data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
