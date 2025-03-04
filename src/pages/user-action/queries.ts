import gql from "graphql-tag";

export const USERACTION_LIST_QUERY = gql`
  query UserAction($limit: Int, $page: Int) {
    allUserAction(limit: $limit, page: $page) {
      items {
        action
        actionDetails
        createdAt
        id
        points
        targetId
        targetType
        userId
      }
      totalCount
    }
  }
`;
export const USERACTION_SHOW_QUERY = gql`
  query UserAction($id: String!) {
    userAction(id: $id) {
      action
      actionDetails
      createdAt
      id
      points
      targetId
      targetType
      userId
    }
  }
`;
export const USERACTION_DELETE_QUERY = gql`
  mutation UserAction($id: String!) {
    deleteUserAction(id: $id) {
      action
      actionDetails
      createdAt
      id
      points
      targetId
      targetType
      userId
    }
  }
`;
export const USERACTION_EDIT_MUTATION = gql`
  mutation UserAction($id: String!, $data: UpdateUserActionInput!) {
    updateUserAction(id: $id, data: $data) {
      action
      actionDetails
      createdAt
      id
      points
      targetId
      targetType
      userId
    }
  }
`;
export const USERACTION_CREATE_MUTATION = gql`
  mutation UserAction($data: CreateUserActionInput!) {
    createUserAction(data: $data) {
      action
      actionDetails
      createdAt
      id
      points
      targetId
      targetType
      userId
    }
  }
`;
