import React, {Component} from 'react';
import MyInput from "./my-input";

export default class MyInputTest extends Component{

  state={
    ipt:'默认输入',
    ipt2:'默认输入2'
  };

  changeIpt = e => this.setState({[e.target.name]:e.target.value});


  render(){
    return (
      <div>
        <h3>测试</h3>

        <h4>多行</h4>

        <MyInput label="自我介绍" multi model={{name:'ipt',value:this.state.ipt,onChange:this.changeIpt}}/>
        <MyInput multi model={{name:'ipt',value:this.state.ipt,onChange:this.changeIpt}}/>
        <MyInput multi style={{backgroundColor:'blue'}} />

        <h4>单行</h4>
        <MyInput ref={el => this.ucipt1 = el} style={{backgroundColor:'yellow'}}/>
        <MyInput label="用户" model={{name:'ipt2',value:this.state.ipt2,onChange:this.changeIpt}}/>
        <MyInput type="password" label="密码" model={{name:'ipt2',value:this.state.ipt2,onChange:this.changeIpt}}/>


      </div>
    )
  }

  componentDidMount(){
    console.log(this.ucipt1)
  }
}