import gql from "graphql-tag";

export const REPORT_LIST_QUERY = gql`
  query Report($limit: Int, $page: Int) {
    allReport(limit: $limit, page: $page) {
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
export const REPORT_SHOW_QUERY = gql`
  query Report($id: String!) {
    report(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const REPORT_DELETE_QUERY = gql`
  mutation Report($id: String!) {
    deleteReport(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const REPORT_EDIT_MUTATION = gql`
  mutation Report($id: String!, $data: UpdateReportInput!) {
    updateReport(id: $id, data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const REPORT_CREATE_MUTATION = gql`
  mutation Report($data: CreateReportInput!) {
    createReport(data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
