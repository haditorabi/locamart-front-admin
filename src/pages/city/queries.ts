import gql from "graphql-tag";

export const CITY_LIST_QUERY = gql`
  query City($limit: Int, $page: Int) {
    allCity(limit: $limit, page: $page) {
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
export const CITY_SHOW_QUERY = gql`
  query City($id: String!) {
    city(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const CITY_DELETE_QUERY = gql`
  mutation City($id: String!) {
    deleteCity(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const CITY_EDIT_MUTATION = gql`
  mutation City($id: String!, $data: UpdateCityInput!) {
    updateCity(id: $id, data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const CITY_CREATE_MUTATION = gql`
  mutation City($data: CreateCityInput!) {
    createCity(data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
