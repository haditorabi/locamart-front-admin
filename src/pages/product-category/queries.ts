import gql from "graphql-tag";

export const PRODUCTCATEGORY_LIST_QUERY = gql`
  query ProductCategory($limit: Int, $page: Int) {
    allProductCategory(limit: $limit, page: $page) {
      items {
        createdAt
        id
        name
        status
      }
      totalCount
    }
  }
`;
export const PRODUCTCATEGORY_SHOW_QUERY = gql`
  query ProductCategory($id: String!) {
    productCategory(id: $id) {
      createdAt
      id
      name
      status
    }
  }
`;
export const PRODUCTCATEGORY_DELETE_QUERY = gql`
  mutation ProductCategory($id: String!) {
    deleteProductCategory(id: $id) {
      createdAt
      id
      name
      status
    }
  }
`;
export const PRODUCTCATEGORY_EDIT_MUTATION = gql`
  mutation ProductCategory($id: String!, $data: UpdateProductCategoryInput!) {
    updateProductCategory(id: $id, data: $data) {
      createdAt
      id
      name
      status
    }
  }
`;
export const PRODUCTCATEGORY_CREATE_MUTATION = gql`
  mutation ProductCategory($data: CreateProductCategoryInput!) {
    createProductCategory(data: $data) {
      createdAt
      id
      name
      status
    }
  }
`;
