import gql from "graphql-tag";

export const MEDIA_LIST_QUERY = gql`
  query Media($limit: Int, $page: Int) {
    allMedia(limit: $limit, page: $page) {
      items {
        createdAt
        id
        moduleType
        type
        url
      }
      totalCount
    }
  }
`;
export const MEDIA_SHOW_QUERY = gql`
  query Media($id: String!) {
    media(id: $id) {
      createdAt
      id
      moduleType
      type
      url
    }
  }
`;
export const MEDIA_DELETE_QUERY = gql`
  mutation Media($id: String!) {
    deleteMedia(id: $id) {
      createdAt
      id
      moduleType
      type
      url
    }
  }
`;
export const MEDIA_EDIT_MUTATION = gql`
  mutation Media($id: String!, $data: UpdateMediaInput!) {
    updateMedia(id: $id, data: $data) {
      createdAt
      id
      moduleType
      type
      url
    }
  }
`;
export const MEDIA_CREATE_MUTATION = gql`
  mutation Media($data: CreateMediaInput!) {
    createMedia(data: $data) {
      createdAt
      id
      moduleType
      type
      url
    }
  }
`;
