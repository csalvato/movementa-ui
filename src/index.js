import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import theme from './toolbox/theme.js'
import './toolbox/theme.css';
import 'flexboxgrid';
import 'flexboxgrid-helpers/dist/flexboxgrid-helpers.min.css'
import 'roboto-fontface';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import { browserHistory } from 'react-router';
import Routes from './routes';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Routes history={browserHistory} />
  </ThemeProvider>,
  document.getElementById('root')
);
