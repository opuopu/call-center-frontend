/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table as AntTable, ConfigProvider } from "antd";
export default function Table({ loading, onTableChange, column, data, style }) {
  return (
    <ConfigProvider
      theme={{
        components: {
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
        onChange={onTableChange}
      ></AntTable>
    </ConfigProvider>
  );
}
