import React, {Component} from 'react';
import styles from './my-input.module.css';
import propTypes from 'prop-types';
import renderLabel from "./renderLabel";

//1. 受控 || 非受控
//2. 单行 || 多行
//3. type/multi/label/style/model

export default class UCInput extends Component{

  static defaultProps = {
    type: 'text',
    model: null,//非受控
    multi: false,//单行
    label: '',//提示
    style: {},//行间样式
  };

  static propTypes = {
    type: propTypes.string,
    model: propTypes.shape({
      name: propTypes.string.isRequired,
      value: propTypes.string.isRequired,
      onChange: propTypes.func.isRequired,
      // [proname]:propTypes.any
    }),
    multi: propTypes.bool,//单行
    label: propTypes.string,//提示
    style: propTypes.object,//行间样式
  };

  renderInput = () => {

    let {model, style, label, type} = this.props;

    //非受控
    let el = null;

    if (!model) {
      el = (
        <div style={style} className={styles["my-input"]}>
          <input type={type} defaultValue="" style={{paddingLeft: label ? '1.24rem': '0.24rem'}} />
          {label && renderLabel(label)}
        </div>
      );

      return el;
    }

    //受控
    // let {name, value, onChange} = model;

    el = (
      <div style={style} className={styles["my-input"]} >
        <input
          style={{paddingLeft: label ? '1.24rem': '0.24rem'}}
          type={type}
          {...model}
          // value={value}
          // onChange={onChange}
          // name={name}
        />
        {label && renderLabel(label)}
      </div>
    );

    return el;


  };

  renderTextarea = () => {

    let {model,  label, style, type} = this.props;

    let el = null;

    //非受控
    if (!model){
      el = (
        <div style={style}>
          {renderLabel(label)}
          <textarea cols="30" rows="10"></textarea>
        </div>
      );

      return el;
    }

    //受控
    el = (
      <div style={style}>
        {renderLabel(label)}
        <textarea
          type={type}
          {...model}
          // value={value}
          // onChange={onChange}
          // name={name}
        ></textarea>

      </div>
    );

    return el;

  };

  render(){
    let {multi} = this.props;
    return multi ? this.renderTextarea() : this.renderInput();
  }

}