import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const BlogEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput multiline source="content" />
      <TextInput source="category" />
    </SimpleForm>
  </Edit>
);

export default BlogEdit;
