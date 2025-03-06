import {
  BUSINESSLOCATION_DELETE_QUERY,
  BUSINESSLOCATION_LIST_QUERY,
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

export const BusinessLocationList: React.FC = () => {
  const columns = React.useMemo<ColumnDef<any>[]>(
    () => [
      {
        id: "id",
        header: "ID",
        accessorKey: "id",
        enableColumnFilter: false,
      },
      {
        id: "address",
        header: "address",
        accessorKey: "address",
      },
      {
        id: "latitude",
        header: "latitude",
        accessorKey: "latitude",
      },
      {
        id: "longitude",
        header: "longitude",
        accessorKey: "longitude",
      },
      {
        id: "provinceId",
        header: "provinceId",
        accessorKey: "provinceId",
      },
      {
        id: "cityId",
        header: "cityId",
        accessorKey: "cityId",
      },
      {
        id: "zipCode",
        header: "zipCode",
        accessorKey: "zipCode",
      },
      {
        id: "phone",
        header: "phone",
        accessorKey: "phone",
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
                resource="BusinessLocation"
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
                meta={{ gqlMutation: BUSINESSLOCATION_DELETE_QUERY }}
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
        gqlQuery: BUSINESSLOCATION_LIST_QUERY,
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
    <List title="BusinessLocation">
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
