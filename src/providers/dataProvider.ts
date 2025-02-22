import {
  CreateParams,
  DeleteOneParams,
  GetListParams,
  GetOneParams,
  UpdateParams,
} from "@refinedev/core";
import createDataProvider from "@refinedev/graphql";
import { OperationResult } from "@urql/core";
import { client } from "../graphql/client";
import camelCase from "camelcase";

const dataProvider = createDataProvider(client, {
  getList: {
    dataMapper: (response: OperationResult<any>, params: GetListParams) => {
      const operationName = `${camelCase("all_" + params.resource)}`;
      return response.data?.[operationName].items;
    },
    getTotalCount: (response: OperationResult<any>, params: GetListParams) => {
      const operationName = `${camelCase("all_" + params.resource)}`;
      return response.data?.[operationName].totalCount;
    },
    buildVariables: (params: GetListParams) => {
      const pagination = {
        limit: params.pagination?.pageSize,
        page: params.pagination?.current,
      };
      return pagination;
    },
  },
  getOne: {
    dataMapper: (response: OperationResult<any>, params: GetOneParams) => {
      const operationName = `${camelCase(params.resource)}`;
      return response.data?.[operationName];
    },
    buildVariables: (params: GetOneParams) => ({ id: params.id.toString() }),
  },
  deleteOne: {
    dataMapper: (
      response: OperationResult<any>,
      params: DeleteOneParams<any>
    ) => {
      const operationName = `${camelCase("delete_" + params.resource)}`;
      return response.data?.[operationName];
    },
    buildVariables: (params: DeleteOneParams<any>) => ({ id: params.id }),
  },
  update: {
    dataMapper: (response: OperationResult<any>, params: UpdateParams<any>) => {
      const operationName = `${camelCase("update_" + params.resource)}`;
      return response.data?.[operationName];
    },
    buildVariables: (params: UpdateParams<any>) => ({
      id: params.id.toString(),
      data: params.variables,
    }),
  },
  create: {
    dataMapper: (response: OperationResult<any>, params: CreateParams<any>) => {
      const operationName = `${camelCase("create_" + params.resource)}`;
      return response.data?.[operationName];
    },
    buildVariables: (params: CreateParams<any>) => ({
      data: params.variables,
    }),
  },
});
export default dataProvider;
