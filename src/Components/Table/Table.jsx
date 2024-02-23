/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table as AntTable, ConfigProvider } from "antd";
export default function Table({
  loading,
  onTableChange,
  column,
  data,
  style,
  pageSize,
  total,
}) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Pagination: {
            colorPrimary: "rgb(255, 255, 255)",
            itemActiveBg: "rgb(84, 201, 153)",
            colorPrimaryBorder: "rgb(84, 201, 153)",
            colorPrimaryHover: "rgb(255, 255, 255)",
            colorBgTextHover: "rgba(255, 255, 255, 0.06)",
          },
          Table: {
            headerBg: "rgb(84, 201, 153)",
            headerColor: "rgba(255, 255, 255, 0.88)",
          },
        },
      }}
    >
      <AntTable
        style={style}
        loading={loading}
        columns={column}
        dataSource={data}
        pagination={{
          pageSize: pageSize,
          total: total,
        }}
        onChange={onTableChange}
      ></AntTable>
    </ConfigProvider>
  );
}
