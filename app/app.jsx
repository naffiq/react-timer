import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';
import Timer from 'Timer';
import Countdown from 'Countdown';

require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Timer}/>

      <Route path="countdown" component={Countdown}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
