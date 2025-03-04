import gql from "graphql-tag";

export const USERBOOKMARK_LIST_QUERY = gql`
  query Amenity($limit: Int, $page: Int) {
    allAmenity(limit: $limit, page: $page) {
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
export const USERBOOKMARK_SHOW_QUERY = gql`
  query Amenity($id: String!) {
    amenity(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const USERBOOKMARK_DELETE_QUERY = gql`
  mutation Amenity($id: String!) {
    deleteAmenity(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const USERBOOKMARK_EDIT_MUTATION = gql`
  mutation Amenity($id: String!, $data: UpdateAmenityInput!) {
    updateAmenity(id: $id, data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const USERBOOKMARK_CREATE_MUTATION = gql`
  mutation Amenity($data: CreateAmenityInput!) {
    createAmenity(data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
