import React from "react";
import Cell from "./cell";
import MyButton from "../my-button/my-button";

export default class CellTest extends React.Component{

    add = (e)=>{
        console.log('add',e,this)
    }
    render() {
        return(
            <div>
                <h3>测试</h3>

                <Cell title="标题标题标题"/>
                <Cell title="标题标题标题" label="父标题" index={0}/>
                <Cell title="标题标题标题" label="父标题" index={0} url="http://www.baidu.com"/>
                <Cell
                    title="标题标题标题"
                    label="父标题"
                    index={0}
                    to={{pathname:'/detail/1',search:{collectionName:'home',_page:1}}}
                />
                <Cell
                    title="标题标题标题"
                    label="父标题"
                    index={0}
                    to={{pathname:'/detail/2',search:{collectionName:'home',_page:1}}}
                >
                    <MyButton type="circ" size="small" onClick={this.add}>+</MyButton>
                </Cell>
            </div>
        )
    }
}