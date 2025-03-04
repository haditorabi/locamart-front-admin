import gql from "graphql-tag";

export const BUSINESSLOCATION_LIST_QUERY = gql`
  query BusinessLocation($limit: Int, $page: Int) {
    allBusinessLocation(limit: $limit, page: $page) {
      items {
        address
        cityId
        countryId
        createdAt
        id
        latitude
        longitude
        phone
        provinceId
        status
        updatedAt
        zipCode
      }
      totalCount
    }
  }
`;
export const BUSINESSLOCATION_SHOW_QUERY = gql`
  query BusinessLocation($id: String!) {
    businessLocation(id: $id) {
      address
      cityId
      countryId
      createdAt
      id
      latitude
      longitude
      phone
      provinceId
      status
      updatedAt
      zipCode
    }
  }
`;
export const BUSINESSLOCATION_DELETE_QUERY = gql`
  mutation BusinessLocation($id: String!) {
    deleteBusinessLocation(id: $id) {
      address
      cityId
      countryId
      createdAt
      id
      latitude
      longitude
      phone
      provinceId
      status
      updatedAt
      zipCode
    }
  }
`;
export const BUSINESSLOCATION_EDIT_MUTATION = gql`
  mutation BusinessLocation($id: String!, $data: UpdateBusinessLocationInput!) {
    updateBusinessLocation(id: $id, data: $data) {
      address
      cityId
      countryId
      createdAt
      id
      latitude
      longitude
      phone
      provinceId
      status
      updatedAt
      zipCode
    }
  }
`;
export const BUSINESSLOCATION_CREATE_MUTATION = gql`
  mutation BusinessLocation($data: CreateBusinessLocationInput!) {
    createBusinessLocation(data: $data) {
      address
      cityId
      countryId
      createdAt
      id
      latitude
      longitude
      phone
      provinceId
      status
      updatedAt
      zipCode
    }
  }
`;
