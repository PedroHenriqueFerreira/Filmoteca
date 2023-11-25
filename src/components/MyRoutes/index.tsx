import React, { useEffect, useLayoutEffect } from 'react';
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
import Update from '../../pages/Update';

interface Props {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

const MyRoutes = ({ isLogged, setIsLogged }: Props) => {
  return (
    <RouteContainer>
      <Routes>
        <Route
          path="/login"
          element={<Login isLogged={isLogged} setIsLogged={setIsLogged} />}
        />
        <Route
          path="/register"
          element={<Register isLogged={isLogged} setIsLogged={setIsLogged} />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route
          path="/movie/:id"
          element={<Movie isLogged={isLogged} setIsLogged={setIsLogged} />}
        />
        <Route path="/search" element={<Search />} />
        <Route
          path="/profile"
          element={<Profile isLogged={isLogged} setIsLogged={setIsLogged} />}
        />
        <Route path="/movies/add" element={<AddMovie />} />

        <Route
          path="/cult"
          element={<Cult isLogged={isLogged} setIsLogged={setIsLogged} />}
        />

        <Route
          path="profile/update"
          element={<Update isLogged={isLogged} setIsLogged={setIsLogged} />}
        />

        <Route path="*" element={<></>} />
      </Routes>
    </RouteContainer>
  );
};

export default MyRoutes;
