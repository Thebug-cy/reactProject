import React from 'react';
import ReactDOM from 'react-dom';
//约束字体大小
import './assets/js/font'
//通用样式
import './assets/css/base.css'

import './plugins/axios'
import './plugins/umi-request'
import {BrowserRouter as Router} from 'react-router-dom';

const show = () =>{
    console.log('leader')
};

ReactDOM.render(
    <Router>
        <div>hello</div>
    </Router>,
  document.getElementById('root')
);
