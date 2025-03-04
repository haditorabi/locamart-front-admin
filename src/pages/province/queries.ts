import gql from "graphql-tag";

export const PROVINCE_LIST_QUERY = gql`
  query Province($limit: Int, $page: Int) {
    allProvince(limit: $limit, page: $page) {
      items {
        id
        name
        status
      }
      totalCount
    }
  }
`;
export const PROVINCE_SHOW_QUERY = gql`
  query Province($id: String!) {
    province(id: $id) {
      id
      name
      status
    }
  }
`;
export const PROVINCE_DELETE_QUERY = gql`
  mutation Province($id: String!) {
    deleteProvince(id: $id) {
      id
      name
      status
    }
  }
`;
export const PROVINCE_EDIT_MUTATION = gql`
  mutation Province($id: String!, $data: UpdateProvinceInput!) {
    updateProvince(id: $id, data: $data) {
      id
      name
      status
    }
  }
`;
export const PROVINCE_CREATE_MUTATION = gql`
  mutation Province($data: CreateProvinceInput!) {
    createProvince(data: $data) {
      id
      name
      status
    }
  }
`;
