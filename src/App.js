import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Layouts
import HomeLayout from './layouts/HomeLayout/HomeLayout';
import LoginLayout from './layouts/LoginLayout';

// Pages
import Homepage from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';

const App = () => {
    return (
        <>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => (
                        <HomeLayout>
                            <Homepage />
                        </HomeLayout>
                    )}
                />
                <Route
                    exact
                    path="/login"
                    render={() => (
                        <LoginLayout>
                            <Login />
                        </LoginLayout>
                    )}
                />
                <Route
                    exact
                    path="/register"
                    render={() => (
                        <LoginLayout>
                            <Register />
                        </LoginLayout>
                    )}
                />
                <Route
                    exact
                    path="/reset-password"
                    render={() => (
                        <LoginLayout>
                            <ResetPassword />
                        </LoginLayout>
                    )}
                />
            </Switch>
        </>
    );
};

export default App;
