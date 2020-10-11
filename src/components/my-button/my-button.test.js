import React from 'react';
import MyButton from "./my-button";

export default class MyButtonTest extends React.Component{
    render(){
        return (
            <div>

                <h3>测试</h3>
                <MyButton/>
                <MyButton size="large"/>
                <MyButton size="small"/>
                <hr/>
                <MyButton type="circ">+</MyButton>
                <MyButton type="circ" size="large">大</MyButton>
                <MyButton type="circ" size="small">小</MyButton>
                <hr/>
                <MyButton onClick={ev=>console.log(ev.target,this)}>事件</MyButton>
                <MyButton style={{backgroundColor:'red'}}>style</MyButton>
                <MyButton disabled onClick={ev=>console.log(ev.target)}>disabled</MyButton>
            </div>
        )
    }
}