import React from "react";
import style from "./Display.less";

class Display extends React.Component {
    render() {
        return (
            <div className={style.display}>
                {this.props.output}
            </div>
        );
    }
}

export default Display;