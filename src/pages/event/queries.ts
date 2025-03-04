import gql from "graphql-tag";

export const EVENT_LIST_QUERY = gql`
  query Event($limit: Int, $page: Int) {
    allEvent(limit: $limit, page: $page) {
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
export const EVENT_SHOW_QUERY = gql`
  query Event($id: String!) {
    event(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const EVENT_DELETE_QUERY = gql`
  mutation Event($id: String!) {
    deleteEvent(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const EVENT_EDIT_MUTATION = gql`
  mutation Event($id: String!, $data: UpdateEventInput!) {
    updateEvent(id: $id, data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const EVENT_CREATE_MUTATION = gql`
  mutation Event($data: CreateEventInput!) {
    createEvent(data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
