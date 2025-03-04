import gql from "graphql-tag";

export const PROVINCE_LIST_QUERY = gql`
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
export const PROVINCE_SHOW_QUERY = gql`
  query Amenity($id: String!) {
    amenity(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const PROVINCE_DELETE_QUERY = gql`
  mutation Amenity($id: String!) {
    deleteAmenity(id: $id) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const PROVINCE_EDIT_MUTATION = gql`
  mutation Amenity($id: String!, $data: UpdateAmenityInput!) {
    updateAmenity(id: $id, data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
export const PROVINCE_CREATE_MUTATION = gql`
  mutation Amenity($data: CreateAmenityInput!) {
    createAmenity(data: $data) {
      id
      name
      mediaId
      createdAt
    }
  }
`;
