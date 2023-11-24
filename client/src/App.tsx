import React, { Fragment, useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navbar from "./components/Utils/Navbar";
import Home from "./components/Home/Home";
import Auth from './components/Auth/Auth';
import UserType from './components/Auth/UserType';
import JobPosts from './components/Jobs/JobPosts';
import JobDetails from './components/Jobs/JobDetails';
import AlertBox from './components/Utils/AlertBox';
import Profile from './components/Profile/Profile';
import { State } from './interfaces/store';
import JobForm from './components/Jobs/JobForm';
import NotFound from './components/Utils/NotFound';
import Freelancers from './components/Freelancers/Freelancers';

function App() {
    const alert = useSelector((state: State) => state.alert);
    const user = useSelector((state: State) => state.auth)?.authData?.user;

    return (
        <Router>
            <Fragment>
                <Navbar />
                <AlertBox alert={alert} />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/jobs/*'>
                        <Route index element={<JobPosts />} />
                        <Route path=':id' element={<JobDetails />} />
                        <Route path='create' element={<JobForm />} />
                        <Route path='search' element={<JobPosts />} />
                    </Route>
                    <Route path='/freelancers/*'>
                        <Route index element={<Freelancers />} />
                        <Route path='search' element={<Freelancers />} />
                    </Route>
                    <Route path='/profile/*'>
                        <Route path=':id' element={<Profile />} />
                    </Route>
                    <Route path='/signup/*'>
                        <Route index element={<UserType />} />
                        <Route path=':userType' element={<Auth />} />
                    </Route>
                    <Route path='/login/*'>
                        <Route index element={<UserType />} />
                        <Route path=':userType' element={<Auth />} />
                    </Route>
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Fragment>
        </Router>
    );
}

export default App;