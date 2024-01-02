import React from 'react';
import {createRoot} from 'react-dom/client';
import Root from './Root';

const root = createRoot(document.getElementById('app'));
root.render(<Root />);
