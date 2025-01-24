import React from "react";
import { List, Datagrid, TextField, EditButton, DeleteButton } from "react-admin";

const BlogList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="content" />
      <TextField source="category" />
      <EditButton basePath="/blogs" />
      <DeleteButton basePath="/blogs" />
    </Datagrid>
  </List>
);

export default BlogList;
