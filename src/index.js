import React from 'react';
import ReactDOM from 'react-dom';
//约束字体大小
import './assets/js/font'
//通用样式
import './assets/css/base.css'

import {BrowserRouter as Router} from 'react-router-dom';

console.log('搞事情')

ReactDOM.render(
    <Router>
        <div>hello</div>
    </Router>,
  document.getElementById('root')
);
