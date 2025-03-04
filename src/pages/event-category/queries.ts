import gql from "graphql-tag";

export const EVENTCATEGORY_LIST_QUERY = gql`
  query EventCategory($limit: Int, $page: Int) {
    allEventCategory(limit: $limit, page: $page) {
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
export const EVENTCATEGORY_SHOW_QUERY = gql`
  query EventCategory($id: String!) {
    eventCategory(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const EVENTCATEGORY_DELETE_QUERY = gql`
  mutation EventCategory($id: String!) {
    deleteEventCategory(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const EVENTCATEGORY_EDIT_MUTATION = gql`
  mutation EventCategory($id: String!, $data: UpdateEventCategoryInput!) {
    updateEventCategory(id: $id, data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const EVENTCATEGORY_CREATE_MUTATION = gql`
  mutation EventCategory($data: CreateEventCategoryInput!) {
    createEventCategory(data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
