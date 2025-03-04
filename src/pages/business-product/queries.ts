import gql from "graphql-tag";

export const BUSINESSPRODUCT_LIST_QUERY = gql`
  query BusinessProduct($limit: Int, $page: Int) {
    allBusinessProduct(limit: $limit, page: $page) {
      items {
        businessDealId
        businessId
        createdAt
        description
        id
        mediaId
        name
        productCategroyId
        status
        updatedAt
      }
      totalCount
    }
  }
`;
export const BUSINESSPRODUCT_SHOW_QUERY = gql`
  query BusinessProduct($id: String!) {
    businessProduct(id: $id) {
      businessDealId
      businessId
      createdAt
      description
      id
      mediaId
      name
      productCategroyId
      status
      updatedAt
    }
  }
`;
export const BUSINESSPRODUCT_DELETE_QUERY = gql`
  mutation BusinessProduct($id: String!) {
    deleteBusinessProduct(id: $id) {
      businessDealId
      businessId
      createdAt
      description
      id
      mediaId
      name
      productCategroyId
      status
      updatedAt
    }
  }
`;
export const BUSINESSPRODUCT_EDIT_MUTATION = gql`
  mutation BusinessProduct($id: String!, $data: UpdateBusinessProductInput!) {
    updateBusinessProduct(id: $id, data: $data) {
      businessDealId
      businessId
      createdAt
      description
      id
      mediaId
      name
      productCategroyId
      status
      updatedAt
    }
  }
`;
export const BUSINESSPRODUCT_CREATE_MUTATION = gql`
  mutation BusinessProduct($data: CreateBusinessProductInput!) {
    createBusinessProduct(data: $data) {
      businessDealId
      businessId
      createdAt
      description
      id
      mediaId
      name
      productCategroyId
      status
      updatedAt
    }
  }
`;
