import gql from "graphql-tag";

export const BUSINESSPRODUCTPRICE_LIST_QUERY = gql`
  query BusinessProductPrice($limit: Int, $page: Int) {
    allBusinessProductPrice(limit: $limit, page: $page) {
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
export const BUSINESSPRODUCTPRICE_SHOW_QUERY = gql`
  query BusinessProductPrice($id: String!) {
    businessProductPrice(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const BUSINESSPRODUCTPRICE_DELETE_QUERY = gql`
  mutation BusinessProductPrice($id: String!) {
    deleteBusinessProductPrice(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const BUSINESSPRODUCTPRICE_EDIT_MUTATION = gql`
  mutation BusinessProductPrice(
    $id: String!
    $data: UpdateBusinessProductPriceInput!
  ) {
    updateBusinessProductPrice(id: $id, data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const BUSINESSPRODUCTPRICE_CREATE_MUTATION = gql`
  mutation BusinessProductPrice($data: CreateBusinessProductPriceInput!) {
    createBusinessProductPrice(data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
