import React from 'react';
import ReactDOM from 'react-dom';
//约束字体大小
import './assets/js/font'
//通用样式
import './assets/css/base.css'

import './plugins/axios'
import './plugins/umi-request'

class Test extends React.Component{
    render() {
        return(
            <div className="test">
                <h3>test</h3>
                <ul>
                    <li>xXXXx</li>
                </ul>
                <input type="text"/>
            </div>
        )
    }
    componentDidMount() {
        this.axios({
            url:'/api/users',
            /*params:{
                _page:1,
                _limit:2
            }*/
        }).then(
            res => console.log('axios',res)
        );

        this.request(`/api/users`,{
            params:{
                _page:1,
                _limit:2
            }
        }).then(
            res => console.log('umi',res)
        )
    }
}

ReactDOM.render(
    <Test/>,
  document.getElementById('root')
);
