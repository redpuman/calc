import React from "react";
import style from "./Button.less";

class Button extends React.Component {
    render() {
        return (
            <button className={style.button} onClick={this.props.action}>
                {this.props.caption}
            </button>
        );
    }
}

export default Button;