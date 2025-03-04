import gql from "graphql-tag";

export const BUSINESSTAG_LIST_QUERY = gql`
  query BusinessTag($limit: Int, $page: Int) {
    allBusinessTag(limit: $limit, page: $page) {
      items {
        createdAt
        id
        name
        status
      }
      totalCount
    }
  }
`;
export const BUSINESSTAG_SHOW_QUERY = gql`
  query BusinessTag($id: String!) {
    businessTag(id: $id) {
      createdAt
      id
      name
      status
    }
  }
`;
export const BUSINESSTAG_DELETE_QUERY = gql`
  mutation BusinessTag($id: String!) {
    deleteBusinessTag(id: $id) {
      createdAt
      id
      name
      status
    }
  }
`;
export const BUSINESSTAG_EDIT_MUTATION = gql`
  mutation BusinessTag($id: String!, $data: UpdateBusinessTagInput!) {
    updateBusinessTag(id: $id, data: $data) {
      createdAt
      id
      name
      status
    }
  }
`;
export const BUSINESSTAG_CREATE_MUTATION = gql`
  mutation BusinessTag($data: CreateBusinessTagInput!) {
    createBusinessTag(data: $data) {
      createdAt
      id
      name
      status
    }
  }
`;
