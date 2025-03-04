import gql from "graphql-tag";

export const PAYMENTMETHOD_LIST_QUERY = gql`
  query PaymentMethod($limit: Int, $page: Int) {
    allPaymentMethod(limit: $limit, page: $page) {
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
export const PAYMENTMETHOD_SHOW_QUERY = gql`
  query PaymentMethod($id: String!) {
    paymentMethod(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const PAYMENTMETHOD_DELETE_QUERY = gql`
  mutation PaymentMethod($id: String!) {
    deletePaymentMethod(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const PAYMENTMETHOD_EDIT_MUTATION = gql`
  mutation PaymentMethod($id: String!, $data: UpdatePaymentMethodInput!) {
    updatePaymentMethod(id: $id, data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const PAYMENTMETHOD_CREATE_MUTATION = gql`
  mutation PaymentMethod($data: CreatePaymentMethodInput!) {
    createPaymentMethod(data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
