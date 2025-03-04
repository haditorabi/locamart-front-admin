import gql from "graphql-tag";

export const PAYMENT_LIST_QUERY = gql`
  query Payment($limit: Int, $page: Int) {
    allPayment(limit: $limit, page: $page) {
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
export const PAYMENT_SHOW_QUERY = gql`
  query Payment($id: String!) {
    payment(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const PAYMENT_DELETE_QUERY = gql`
  mutation Payment($id: String!) {
    deletePayment(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const PAYMENT_EDIT_MUTATION = gql`
  mutation Payment($id: String!, $data: UpdatePaymentInput!) {
    updatePayment(id: $id, data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const PAYMENT_CREATE_MUTATION = gql`
  mutation Payment($data: CreatePaymentInput!) {
    createPayment(data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
