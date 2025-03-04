import gql from "graphql-tag";

export const PAYMENT_LIST_QUERY = gql`
  query Payment($limit: Int, $page: Int) {
    allPayment(limit: $limit, page: $page) {
      items {
        amount
        businessId
        createdAt
        currencyId
        description
        id
        paymentMethodId
        status
        targetId
        targetType
        transactionId
        updatedAt
        userId
      }
      totalCount
    }
  }
`;
export const PAYMENT_SHOW_QUERY = gql`
  query Payment($id: String!) {
    payment(id: $id) {
      amount
      businessId
      createdAt
      currencyId
      description
      id
      paymentMethodId
      status
      targetId
      targetType
      transactionId
      updatedAt
      userId
    }
  }
`;
export const PAYMENT_DELETE_QUERY = gql`
  mutation Payment($id: String!) {
    deletePayment(id: $id) {
      amount
      businessId
      createdAt
      currencyId
      description
      id
      paymentMethodId
      status
      targetId
      targetType
      transactionId
      updatedAt
      userId
    }
  }
`;
export const PAYMENT_EDIT_MUTATION = gql`
  mutation Payment($id: String!, $data: UpdatePaymentInput!) {
    updatePayment(id: $id, data: $data) {
      amount
      businessId
      createdAt
      currencyId
      description
      id
      paymentMethodId
      status
      targetId
      targetType
      transactionId
      updatedAt
      userId
    }
  }
`;
export const PAYMENT_CREATE_MUTATION = gql`
  mutation Payment($data: CreatePaymentInput!) {
    createPayment(data: $data) {
      amount
      businessId
      createdAt
      currencyId
      description
      id
      paymentMethodId
      status
      targetId
      targetType
      transactionId
      updatedAt
      userId
    }
  }
`;
