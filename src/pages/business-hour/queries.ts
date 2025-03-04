import gql from "graphql-tag";

export const BUSINESSHOUR_LIST_QUERY = gql`
  query BusinessHour($limit: Int, $page: Int) {
    allBusinessHour(limit: $limit, page: $page) {
      items {
        businessId
        closeTime
        createdAt
        dayOfWeek
        id
        openTime
        status
      }
      totalCount
    }
  }
`;
export const BUSINESSHOUR_SHOW_QUERY = gql`
  query BusinessHour($id: String!) {
    businessHour(id: $id) {
      businessId
      closeTime
      createdAt
      dayOfWeek
      id
      openTime
      status
    }
  }
`;
export const BUSINESSHOUR_DELETE_QUERY = gql`
  mutation BusinessHour($id: String!) {
    deleteBusinessHour(id: $id) {
      businessId
      closeTime
      createdAt
      dayOfWeek
      id
      openTime
      status
    }
  }
`;
export const BUSINESSHOUR_EDIT_MUTATION = gql`
  mutation BusinessHour($id: String!, $data: UpdateBusinessHourInput!) {
    updateBusinessHour(id: $id, data: $data) {
      businessId
      closeTime
      createdAt
      dayOfWeek
      id
      openTime
      status
    }
  }
`;
export const BUSINESSHOUR_CREATE_MUTATION = gql`
  mutation BusinessHour($data: CreateBusinessHourInput!) {
    createBusinessHour(data: $data) {
      businessId
      closeTime
      createdAt
      dayOfWeek
      id
      openTime
      status
    }
  }
`;
