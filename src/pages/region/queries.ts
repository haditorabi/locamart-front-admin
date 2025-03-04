import gql from "graphql-tag";

export const REGION_LIST_QUERY = gql`
  query Region($limit: Int, $page: Int) {
    allRegion(limit: $limit, page: $page) {
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
export const REGION_SHOW_QUERY = gql`
  query Region($id: String!) {
    region(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const REGION_DELETE_QUERY = gql`
  mutation Region($id: String!) {
    deleteRegion(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const REGION_EDIT_MUTATION = gql`
  mutation Region($id: String!, $data: UpdateRegionInput!) {
    updateRegion(id: $id, data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const REGION_CREATE_MUTATION = gql`
  mutation Region($data: CreateRegionInput!) {
    createRegion(data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
