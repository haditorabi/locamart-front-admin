import gql from "graphql-tag";

export const BUSINESSCATEGROY_LIST_QUERY = gql`
  query BusinessCategory($limit: Int, $page: Int) {
    allBusinessCategory(limit: $limit, page: $page) {
      items {
        id
        name
        mediaId
        createdAt
        status
        updatedAt
      }
      totalCount
    }
  }
`;
export const BUSINESSCATEGROY_SHOW_QUERY = gql`
  query BusinessCategory($id: String!) {
    businessCategory(id: $id) {
      createdAt
      id
      mediaId
      name
      status
      updatedAt
    }
  }
`;
export const BUSINESSCATEGROY_DELETE_QUERY = gql`
  mutation BusinessCategory($id: String!) {
    deleteBusinessCategory(id: $id) {
      createdAt
      id
      mediaId
      name
      status
      updatedAt
    }
  }
`;
export const BUSINESSCATEGROY_EDIT_MUTATION = gql`
  mutation BusinessCategory($id: String!, $data: UpdateBusinessCategoryInput!) {
    updateBusinessCategory(id: $id, data: $data) {
      createdAt
      id
      mediaId
      name
      status
      updatedAt
    }
  }
`;
export const BUSINESSCATEGROY_CREATE_MUTATION = gql`
  mutation BusinessCategory($data: CreateBusinessCategoryInput!) {
    createBusinessCategory(data: $data) {
      createdAt
      id
      mediaId
      name
      status
      updatedAt
    }
  }
`;
