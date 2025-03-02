import gql from "graphql-tag";

export const BUSINESS_LIST_QUERY = gql`
  query Business($limit: Int, $page: Int) {
    allBusiness(limit: $limit, page: $page) {
      items {
        id
        name
        isClaimed
        description
        website
        status
        amenityId
        businessCategoryId
        languageId
        mediaId
        regionId
        createdAt
        updatedAt
      }
      totalCount
    }
  }
`;
export const BUSINESS_SHOW_QUERY = gql`
  query Business($id: String!) {
    business(id: $id) {
      id
      name
      isClaimed
      description
      website
      status
      amenityId
      businessCategoryId
      languageId
      mediaId
      regionId
      createdAt
      updatedAt
    }
  }
`;
export const BUSINESS_DELETE_QUERY = gql`
  mutation Business($id: String!) {
    deleteBusiness(id: $id) {
      id
      name
      isClaimed
      description
      website
      status
      amenityId
      businessCategoryId
      languageId
      mediaId
      regionId
      createdAt
      updatedAt
    }
  }
`;
export const BUSINESS_EDIT_MUTATION = gql`
  mutation Business($id: String!, $data: UpdateBusinessInput!) {
    updateBusiness(id: $id, data: $data) {
      id
      name
      isClaimed
      description
      website
      status
      amenityId
      businessCategoryId
      languageId
      mediaId
      regionId
      createdAt
      updatedAt
    }
  }
`;
export const BUSINESS_CREATE_MUTATION = gql`
  mutation Business($data: CreateBusinessInput!) {
    createBusiness(data: $data) {
      id
      name
      isClaimed
      description
      website
      status
      amenityId
      businessCategoryId
      languageId
      mediaId
      regionId
      createdAt
      updatedAt
    }
  }
`;
