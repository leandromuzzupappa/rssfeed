import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Layouts
import HomeLayout from './layouts/HomeLayout/HomeLayout';

// Pages
import Homepage from './pages/Home';

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
            </Switch>
        </>
    );
};

export default App;
