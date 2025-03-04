import gql from "graphql-tag";

export const BUSINESSUPDATE_LIST_QUERY = gql`
  query BusinessUpdate($limit: Int, $page: Int) {
    allBusinessUpdate(limit: $limit, page: $page) {
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
export const BUSINESSUPDATE_SHOW_QUERY = gql`
  query BusinessUpdate($id: String!) {
    businessUpdate(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const BUSINESSUPDATE_DELETE_QUERY = gql`
  mutation BusinessUpdate($id: String!) {
    deleteBusinessUpdate(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const BUSINESSUPDATE_EDIT_MUTATION = gql`
  mutation BusinessUpdate($id: String!, $data: UpdateBusinessUpdateInput!) {
    updateBusinessUpdate(id: $id, data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const BUSINESSUPDATE_CREATE_MUTATION = gql`
  mutation BusinessUpdate($data: CreateBusinessUpdateInput!) {
    createBusinessUpdate(data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
