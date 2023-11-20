import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteContainer } from './style';

import Login from '../../pages/Login';
import Register from '../../pages/Register';
import Home from '../../pages/Home';
import Movies from '../../pages/Movies';
import Movie from '../../pages/Movie';
import Search from '../../pages/Search';
import Profile from '../../pages/Profile';
import AddMovie from '../../pages/AddMovie';
import Cult from '../../pages/Cult';

const MyRoutes = (): JSX.Element => {
  return (
    <RouteContainer>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/movie/add" element={<AddMovie />} />
        <Route path="/cult" element={<Cult />} />
        <Route path="*" element={<></>} />
      </Routes>
    </RouteContainer>
  );
};

export default MyRoutes;
