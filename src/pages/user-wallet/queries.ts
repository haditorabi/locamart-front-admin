import gql from "graphql-tag";

export const USERWALLET_LIST_QUERY = gql`
  query UserWallet($limit: Int, $page: Int) {
    allUserWallet(limit: $limit, page: $page) {
      items {
        balance
        createdAt
        currencyId
        id
        updatedAt
        userId
      }
      totalCount
    }
  }
`;
export const USERWALLET_SHOW_QUERY = gql`
  query UserWallet($id: String!) {
    userWallet(id: $id) {
      balance
      createdAt
      currencyId
      id
      updatedAt
      userId
    }
  }
`;
export const USERWALLET_DELETE_QUERY = gql`
  mutation UserWallet($id: String!) {
    deleteUserWallet(id: $id) {
      balance
      createdAt
      currencyId
      id
      updatedAt
      userId
    }
  }
`;
export const USERWALLET_EDIT_MUTATION = gql`
  mutation UserWallet($id: String!, $data: UpdateUserWalletInput!) {
    updateUserWallet(id: $id, data: $data) {
      balance
      createdAt
      currencyId
      id
      updatedAt
      userId
    }
  }
`;
export const USERWALLET_CREATE_MUTATION = gql`
  mutation UserWallet($data: CreateUserWalletInput!) {
    createUserWallet(data: $data) {
      balance
      createdAt
      currencyId
      id
      updatedAt
      userId
    }
  }
`;
