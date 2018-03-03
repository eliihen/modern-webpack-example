/**
 * This file uses commonjs module syntax for hot reloading,
 * and thus does not support being a mjs-file
 */

import React from 'react';
import { hot } from 'react-hot-loader'

const App = () => <h1>Hello World!</h1>;

export default hot(module)(App);
