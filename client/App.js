import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Landing from './containers/Landing';

const App = () => (
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Landing} />
        </div>
    </BrowserRouter>
);

export default App;
