import gql from "graphql-tag";

export const CURRENCY_LIST_QUERY = gql`
  query Currency($limit: Int, $page: Int) {
    allCurrency(limit: $limit, page: $page) {
      items {
        code
        id
        name
        status
      }
      totalCount
    }
  }
`;
export const CURRENCY_SHOW_QUERY = gql`
  query Currency($id: String!) {
    currency(id: $id) {
      code
      id
      name
      status
    }
  }
`;
export const CURRENCY_DELETE_QUERY = gql`
  mutation Currency($id: String!) {
    deleteCurrency(id: $id) {
      code
      id
      name
      status
    }
  }
`;
export const CURRENCY_EDIT_MUTATION = gql`
  mutation Currency($id: String!, $data: UpdateCurrencyInput!) {
    updateCurrency(id: $id, data: $data) {
      code
      id
      name
      status
    }
  }
`;
export const CURRENCY_CREATE_MUTATION = gql`
  mutation Currency($data: CreateCurrencyInput!) {
    createCurrency(data: $data) {
      code
      id
      name
      status
    }
  }
`;
