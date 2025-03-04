import gql from "graphql-tag";

export const REGION_LIST_QUERY = gql`
  query Region($limit: Int, $page: Int) {
    allRegion(limit: $limit, page: $page) {
      items {
        boundry
        cityId
        countryId
        id
        name
        status
      }
      totalCount
    }
  }
`;
export const REGION_SHOW_QUERY = gql`
  query Region($id: String!) {
    region(id: $id) {
      boundry
      cityId
      countryId
      id
      name
      status
    }
  }
`;
export const REGION_DELETE_QUERY = gql`
  mutation Region($id: String!) {
    deleteRegion(id: $id) {
      boundry
      cityId
      countryId
      id
      name
      status
    }
  }
`;
export const REGION_EDIT_MUTATION = gql`
  mutation Region($id: String!, $data: UpdateRegionInput!) {
    updateRegion(id: $id, data: $data) {
      boundry
      cityId
      countryId
      id
      name
      status
    }
  }
`;
export const REGION_CREATE_MUTATION = gql`
  mutation Region($data: CreateRegionInput!) {
    createRegion(data: $data) {
      boundry
      cityId
      countryId
      id
      name
      status
    }
  }
`;
