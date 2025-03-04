import gql from "graphql-tag";

export const REPORT_LIST_QUERY = gql`
  query Report($limit: Int, $page: Int) {
    allReport(limit: $limit, page: $page) {
      items {
        byId
        createdAt
        id
        reason
        targetId
        targetType
      }
      totalCount
    }
  }
`;
export const REPORT_SHOW_QUERY = gql`
  query Report($id: String!) {
    report(id: $id) {
      byId
      createdAt
      id
      reason
      targetId
      targetType
    }
  }
`;
export const REPORT_DELETE_QUERY = gql`
  mutation Report($id: String!) {
    deleteReport(id: $id) {
      byId
      createdAt
      id
      reason
      targetId
      targetType
    }
  }
`;
export const REPORT_EDIT_MUTATION = gql`
  mutation Report($id: String!, $data: UpdateReportInput!) {
    updateReport(id: $id, data: $data) {
      byId
      createdAt
      id
      reason
      targetId
      targetType
    }
  }
`;
export const REPORT_CREATE_MUTATION = gql`
  mutation Report($data: CreateReportInput!) {
    createReport(data: $data) {
      byId
      createdAt
      id
      reason
      targetId
      targetType
    }
  }
`;
