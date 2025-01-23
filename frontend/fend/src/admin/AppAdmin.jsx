// src/admin/AppAdmin.jsx
import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import dataProvider from './dataProvider';

const AppAdmin = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="blogs" list={ListGuesser} />
        {/* Add other resources here */}
    </Admin>
);

export default AppAdmin;
