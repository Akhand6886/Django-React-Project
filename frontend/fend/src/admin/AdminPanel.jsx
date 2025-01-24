import React from "react";
import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import BlogList from "./BlogList";
import BlogCreate from "./BlogCreate";
import BlogEdit from "./BlogEdit";

// Connect to the API endpoint
const dataProvider = simpleRestProvider("http://127.0.0.1:8000/api/");

const AdminPanel = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="blogs"
        list={BlogList}
        create={BlogCreate}
        edit={BlogEdit}
      />
    </Admin>
  );
};

export default AdminPanel;
