import gql from "graphql-tag";

export const LANGUAGE_LIST_QUERY = gql`
  query Language($limit: Int, $page: Int) {
    allLanguage(limit: $limit, page: $page) {
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
export const LANGUAGE_SHOW_QUERY = gql`
  query Language($id: String!) {
    language(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const LANGUAGE_DELETE_QUERY = gql`
  mutation Language($id: String!) {
    deleteLanguage(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const LANGUAGE_EDIT_MUTATION = gql`
  mutation Language($id: String!, $data: UpdateLanguageInput!) {
    updateLanguage(id: $id, data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const LANGUAGE_CREATE_MUTATION = gql`
  mutation Language($data: CreateLanguageInput!) {
    createLanguage(data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
