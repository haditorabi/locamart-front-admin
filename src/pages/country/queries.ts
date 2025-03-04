import gql from "graphql-tag";

export const COUNTRY_LIST_QUERY = gql`
  query Country($limit: Int, $page: Int) {
    allCountry(limit: $limit, page: $page) {
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
export const COUNTRY_SHOW_QUERY = gql`
  query Country($id: String!) {
    country(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const COUNTRY_DELETE_QUERY = gql`
  mutation Country($id: String!) {
    deleteCountry(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const COUNTRY_EDIT_MUTATION = gql`
  mutation Country($id: String!, $data: UpdateCountryInput!) {
    updateCountry(id: $id, data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const COUNTRY_CREATE_MUTATION = gql`
  mutation Country($data: CreateCountryInput!) {
    createCountry(data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
