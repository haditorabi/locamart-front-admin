import gql from "graphql-tag";

export const CATEGORY_CREATE_MUTATION = gql`
  mutation CategoryCreate($input: CreateOneCategoryInput!) {
    createOneCategory(input: $input) {
      id
      title
    }
  }
`;

export const CATEGORY_EDIT_MUTATION = gql`
  mutation CategoryEdit($input: UpdateOneCategoryInput!) {
    updateOneCategory(input: $input) {
      id
      title
    }
  }
`;

export const AMENITY_LIST_QUERY = gql`
  query Amenities {
    amenities(limit: 5, page: 1) {
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
