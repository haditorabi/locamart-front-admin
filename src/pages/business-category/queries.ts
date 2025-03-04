import gql from "graphql-tag";

export const BUSINESSCATEGROY_LIST_QUERY = gql`
  query BusinessCategory($limit: Int, $page: Int) {
    allBusinessCategory(limit: $limit, page: $page) {
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
export const BUSINESSCATEGROY_SHOW_QUERY = gql`
  query BusinessCategory($id: String!) {
    businessCategory(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const BUSINESSCATEGROY_DELETE_QUERY = gql`
  mutation BusinessCategory($id: String!) {
    deleteBusinessCategory(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const BUSINESSCATEGROY_EDIT_MUTATION = gql`
  mutation BusinessCategory($id: String!, $data: UpdateBusinessCategoryInput!) {
    updateBusinessCategory(id: $id, data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const BUSINESSCATEGROY_CREATE_MUTATION = gql`
  mutation BusinessCategory($data: CreateBusinessCategoryInput!) {
    createBusinessCategory(data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
