import gql from "graphql-tag";

export const BUSINESSTAG_LIST_QUERY = gql`
  query BusinessTag($limit: Int, $page: Int) {
    allBusinessTag(limit: $limit, page: $page) {
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
export const BUSINESSTAG_SHOW_QUERY = gql`
  query BusinessTag($id: String!) {
    businessTag(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const BUSINESSTAG_DELETE_QUERY = gql`
  mutation BusinessTag($id: String!) {
    deleteBusinessTag(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const BUSINESSTAG_EDIT_MUTATION = gql`
  mutation BusinessTag($id: String!, $data: UpdateBusinessTagInput!) {
    updateBusinessTag(id: $id, data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const BUSINESSTAG_CREATE_MUTATION = gql`
  mutation BusinessTag($data: CreateBusinessTagInput!) {
    createBusinessTag(data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
