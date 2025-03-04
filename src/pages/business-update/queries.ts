import gql from "graphql-tag";

export const BUSINESSUPDATE_LIST_QUERY = gql`
  query BusinessUpdate($limit: Int, $page: Int) {
    allBusinessUpdate(limit: $limit, page: $page) {
      items {
        businessId
        context
        createdAt
        endAt
        id
        startAt
        status
        type
        updatedAt
      }
      totalCount
    }
  }
`;
export const BUSINESSUPDATE_SHOW_QUERY = gql`
  query BusinessUpdate($id: String!) {
    businessUpdate(id: $id) {
      businessId
      context
      createdAt
      endAt
      id
      startAt
      status
      type
      updatedAt
    }
  }
`;
export const BUSINESSUPDATE_DELETE_QUERY = gql`
  mutation BusinessUpdate($id: String!) {
    deleteBusinessUpdate(id: $id) {
      businessId
      context
      createdAt
      endAt
      id
      startAt
      status
      type
      updatedAt
    }
  }
`;
export const BUSINESSUPDATE_EDIT_MUTATION = gql`
  mutation BusinessUpdate($id: String!, $data: UpdateBusinessUpdateInput!) {
    updateBusinessUpdate(id: $id, data: $data) {
      businessId
      context
      createdAt
      endAt
      id
      startAt
      status
      type
      updatedAt
    }
  }
`;
export const BUSINESSUPDATE_CREATE_MUTATION = gql`
  mutation BusinessUpdate($data: CreateBusinessUpdateInput!) {
    createBusinessUpdate(data: $data) {
      businessId
      context
      createdAt
      endAt
      id
      startAt
      status
      type
      updatedAt
    }
  }
`;
