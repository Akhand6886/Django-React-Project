// src/admin/AppAdmin.jsx
import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import dataProvider from './dataProvider';

function AppAdmin() {
  return (
    <Admin dataProvider={dataProvider}>
      {/* Resource name should match the DRF route, e.g. "blogs" */}
      <Resource name="blogs" list={ListGuesser} edit={EditGuesser} />
      {/* Add more resources as needed */}
    </Admin>
  );
}

export default AppAdmin;
