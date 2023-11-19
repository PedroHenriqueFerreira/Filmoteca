import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteContainer } from './style';

import Login from '../../pages/Login';
import Register from '../../pages/Register';

const MyRoutes = (): JSX.Element => {
  return (
    <RouteContainer>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<></>} />
      </Routes>
    </RouteContainer>
  );
};

export default MyRoutes;
