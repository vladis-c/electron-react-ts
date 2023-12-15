import React from 'react';
import {createRoot} from 'react-dom/client';
import Home from './screens/Home';

const root = createRoot(document.getElementById('app'));
root.render(<Home />);
