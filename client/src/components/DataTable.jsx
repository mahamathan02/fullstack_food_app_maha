import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import MaterialTable from "material-table";

const DataTable = ({ colums, data, title, actions }) => {
  const defaultMaterilsTheme = createTheme();
  return (
    <ThemeProvider theme={defaultMaterilsTheme}>
      <MaterialTable
        columns={colums}
        data={data}
        title={title}
        actions={actions}
      />
    </ThemeProvider>
  );
};

export default DataTable;
