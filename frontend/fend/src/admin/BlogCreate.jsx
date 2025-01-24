import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const BlogCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput multiline source="content" />
      <TextInput source="category" />
    </SimpleForm>
  </Create>
);

export default BlogCreate;
