import gql from "graphql-tag";

export const TRANSACTION_LIST_QUERY = gql`
  query Transaction($limit: Int, $page: Int) {
    allTransaction(limit: $limit, page: $page) {
      items {
        amount
        businessId
        createdAt
        currencyId
        description
        id
        paymentId
        status
        updatedAt
        userId
      }
      totalCount
    }
  }
`;
export const TRANSACTION_SHOW_QUERY = gql`
  query Transaction($id: String!) {
    transaction(id: $id) {
      amount
      businessId
      createdAt
      currencyId
      description
      id
      paymentId
      status
      updatedAt
      userId
    }
  }
`;
export const TRANSACTION_DELETE_QUERY = gql`
  mutation Transaction($id: String!) {
    deleteTransaction(id: $id) {
      amount
      businessId
      createdAt
      currencyId
      description
      id
      paymentId
      status
      updatedAt
      userId
    }
  }
`;
export const TRANSACTION_EDIT_MUTATION = gql`
  mutation Transaction($id: String!, $data: UpdateTransactionInput!) {
    updateTransaction(id: $id, data: $data) {
      amount
      businessId
      createdAt
      currencyId
      description
      id
      paymentId
      status
      updatedAt
      userId
    }
  }
`;
export const TRANSACTION_CREATE_MUTATION = gql`
  mutation Transaction($data: CreateTransactionInput!) {
    createTransaction(data: $data) {
      amount
      businessId
      createdAt
      currencyId
      description
      id
      paymentId
      status
      updatedAt
      userId
    }
  }
`;
