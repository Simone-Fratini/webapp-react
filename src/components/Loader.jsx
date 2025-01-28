import React from "react";
import "../css/loader.css";

function Loader() {
    return (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div classNames="loader scale-75">
                <div className="square" id="sq1"></div>
                <div className="square" id="sq2"></div>
                <div className="square" id="sq3"></div>
                <div className="square" id="sq4"></div>
                <div className="square" id="sq5"></div>
                <div className="square" id="sq6"></div>
                <div className="square" id="sq7"></div>
                <div className="square" id="sq8"></div>
                <div className="square" id="sq9"></div>
            </div>
        </div>
    );
}

export default Loader;
