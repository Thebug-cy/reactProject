import React, {Component} from 'react';
import styles from './my-button.module.css';
import propTypes from 'prop-types';

/*
*
* type: 类型  default circ
*
* onClick: 点击后的函数
*
* style: object 行间样式
*
*
* size: 尺寸 small large default
*
* disabled: boolean 校验
*
* */

export default class MyButton extends Component{

    static defaultProps = {
        onClick: () => {},
        size: 'default',
        style: {},
        disabled: false,
        type: 'default',

    };

    static propTypes = {
        onClick: propTypes.func,
        size: propTypes.string,
        style: propTypes.object,
        disabled: propTypes.bool,
        type: propTypes.string,
    };

    render(){
        let { children, style, size, onClick, disabled, type} = this.props;
        return (
            <button
                // className={`My-button-default My-button-default-large`}
                // className={`My-button-circ My-button-circ-small`}
                className={`${styles[`my-button-${type}`]} ${styles[`my-button-${type}--${size}`]}`}
                style={style}
                onClick={onClick}
                disabled={disabled}
            >
                {children ? children : '按 钮'}
            </button>
        )
    }
}