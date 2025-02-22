import {
  List,
  useTable,
  EditButton,
  DateField,
  getDefaultSortOrder,
  DeleteButton,
  ShowButton,
} from "@refinedev/antd";
import { Space, Table } from "antd";
import { AMENITY_DELETE_QUERY, AMENITY_LIST_QUERY } from "./queries";
export const AmenityList = () => {
  const { tableProps, sorters } = useTable<any>({
    initialPageSize: 5,
    initialSorter: [
      {
        field: "id",
        order: "asc",
      },
    ],
    meta: {
      gqlQuery: AMENITY_LIST_QUERY,
    },
    queryOptions: {
      retry(failureCount, error) {
        if (error?.message.includes("Network Error") && failureCount <= 3)
          return true;
        return false;
      },
    },
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex="name" title="name" />
        <Table.Column
          dataIndex="createdAt"
          title="Created At"
          render={(value) => <DateField value={value} format="LLL" />}
          defaultSortOrder={getDefaultSortOrder("createdAt", sorters)}
          sorter
        />
        <Table.Column<any>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton
                hideText
                size="small"
                meta={{ gqlMutation: AMENITY_DELETE_QUERY }}
                recordItemId={record.id}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
