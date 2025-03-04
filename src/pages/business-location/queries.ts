import gql from "graphql-tag";

export const BUSINESSLOCATION_LIST_QUERY = gql`
  query BusinessLocation($limit: Int, $page: Int) {
    allBusinessLocation(limit: $limit, page: $page) {
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
export const BUSINESSLOCATION_SHOW_QUERY = gql`
  query BusinessLocation($id: String!) {
    businessLocation(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const BUSINESSLOCATION_DELETE_QUERY = gql`
  mutation BusinessLocation($id: String!) {
    deleteBusinessLocation(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const BUSINESSLOCATION_EDIT_MUTATION = gql`
  mutation BusinessLocation($id: String!, $data: UpdateBusinessLocationInput!) {
    updateBusinessLocation(id: $id, data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const BUSINESSLOCATION_CREATE_MUTATION = gql`
  mutation BusinessLocation($data: CreateBusinessLocationInput!) {
    createBusinessLocation(data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
