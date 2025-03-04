import gql from "graphql-tag";

export const USERACTIONLOG_LIST_QUERY = gql`
  query UserActionLog($limit: Int, $page: Int) {
    allUserActionLog(limit: $limit, page: $page) {
      items {
        action
        actionDetails
        createdAt
        device
        id
        ipAddress
        os
        targetId
        targetType
        userId
      }
      totalCount
    }
  }
`;
export const USERACTIONLOG_SHOW_QUERY = gql`
  query UserActionLog($id: String!) {
    userActionLog(id: $id) {
      action
      actionDetails
      createdAt
      device
      id
      ipAddress
      os
      targetId
      targetType
      userId
    }
  }
`;
export const USERACTIONLOG_DELETE_QUERY = gql`
  mutation UserActionLog($id: String!) {
    deleteUserActionLog(id: $id) {
      action
      actionDetails
      createdAt
      device
      id
      ipAddress
      os
      targetId
      targetType
      userId
    }
  }
`;
export const USERACTIONLOG_EDIT_MUTATION = gql`
  mutation UserActionLog($id: String!, $data: UpdateUserActionLogInput!) {
    updateUserActionLog(id: $id, data: $data) {
      action
      actionDetails
      createdAt
      device
      id
      ipAddress
      os
      targetId
      targetType
      userId
    }
  }
`;
export const USERACTIONLOG_CREATE_MUTATION = gql`
  mutation UserActionLog($data: CreateUserActionLogInput!) {
    createUserActionLog(data: $data) {
      action
      actionDetails
      createdAt
      device
      id
      ipAddress
      os
      targetId
      targetType
      userId
    }
  }
`;
