import {
  BUSINESSUPDATE_DELETE_QUERY,
  BUSINESSUPDATE_LIST_QUERY,
} from "./queries";
import React from "react";
import { useTable } from "@refinedev/react-table";
import { type ColumnDef, flexRender } from "@tanstack/react-table";
import { type GetManyResponse, useMany } from "@refinedev/core";
import {
  List,
  ShowButton,
  EditButton,
  DeleteButton,
  DateField,
} from "@refinedev/chakra-ui";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  HStack,
  Box,
  Select,
} from "@chakra-ui/react";

import { ColumnFilter, ColumnSorter } from "../../components/table";
import { Pagination } from "../../components/pagination";

export const BusinessUpdateList: React.FC = () => {
  const columns = React.useMemo<ColumnDef<any>[]>(
    () => [
      {
        id: "id",
        header: "ID",
        accessorKey: "id",
        enableColumnFilter: false,
      },
      {
        id: "businessId",
        header: "businessId",
        accessorKey: "businessId",
      },
      {
        id: "context",
        header: "context",
        accessorKey: "context",
      },
      {
        id: "type",
        header: "type",
        accessorKey: "type",
      },
      {
        id: "startAt",
        header: "startAt",
        accessorKey: "startAt",
        cell: function render({ getValue }) {
          return <DateField value={getValue() as string} format="LLL" />;
        },
      },
      {
        id: "endAt",
        header: "endAt",
        accessorKey: "endAt",
        cell: function render({ getValue }) {
          return <DateField value={getValue() as string} format="LLL" />;
        },
      },
      {
        id: "status",
        header: "status",
        accessorKey: "status",
      },
      {
        id: "createdAt",
        header: "Created At",
        accessorKey: "createdAt",
        cell: function render({ getValue }) {
          return <DateField value={getValue() as string} format="LLL" />;
        },
        enableColumnFilter: false,
      },
      {
        id: "actions",
        header: "Actions",
        accessorKey: "id",
        enableColumnFilter: false,
        enableSorting: false,
        cell: function render({ getValue }) {
          return (
            <HStack>
              <ShowButton
                resource="BusinessUpdate"
                hideText
                size="sm"
                recordItemId={getValue() as string}
              />
              <EditButton
                hideText
                size="sm"
                recordItemId={getValue() as string}
              />
              <DeleteButton
                hideText
                size="sm"
                recordItemId={getValue() as string}
                meta={{ gqlMutation: BUSINESSUPDATE_DELETE_QUERY }}
              />
            </HStack>
          );
        },
      },
    ],
    []
  );

  const {
    getHeaderGroups,
    getRowModel,
    setOptions,
    refineCore: {
      setCurrent,
      pageCount,
      current,
      tableQuery: { data: tableData },
    },
  } = useTable({
    columns,
    refineCoreProps: {
      initialSorter: [
        {
          field: "id",
          order: "desc",
        },
      ],
      meta: {
        gqlQuery: BUSINESSUPDATE_LIST_QUERY,
      },
    },
  });

  setOptions((prev) => ({
    ...prev,
    meta: {
      ...prev.meta,
    },
  }));

  return (
    <List title="BusinessUpdate">
      <TableContainer>
        <Table variant="simple" whiteSpace="pre-line">
          <Thead>
            {getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <Th key={header.id}>
                      {!header.isPlaceholder && (
                        <HStack spacing="xs">
                          <Box>
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                          </Box>
                          <HStack spacing="xs">
                            <ColumnSorter column={header.column} />
                            <ColumnFilter column={header.column} />
                          </HStack>
                        </HStack>
                      )}
                    </Th>
                  );
                })}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {getRowModel().rows.map((row) => {
              return (
                <Tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <Td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </Td>
                    );
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <Pagination
        current={current}
        pageCount={pageCount}
        setCurrent={setCurrent}
      />
    </List>
  );
};
